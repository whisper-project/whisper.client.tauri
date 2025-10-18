<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import { Textarea } from 'flowbite-svelte';
	import type { Readable } from 'svelte/store';
	import type { Action } from 'svelte/action';
	const { api, takeFocus }: { api: WhisperApi; takeFocus: Readable<unknown> } = $props();
	const liveText = api.getLiveTextStore();

	let focusElement: HTMLTextAreaElement | undefined = $state();
	function maybeGrabFocus() {
		if (focusElement && focusElement !== document.activeElement) {
			focusElement.focus();
		}
	}
	takeFocus.subscribe(() => maybeGrabFocus());

	const grabKeyboard: Action = () => {
		$effect(() => {
			window.addEventListener('keydown', maybeGrabFocus);
			return () => window.removeEventListener('keydown', maybeGrabFocus);
		});
	};
</script>

<div class="bg-white p-2" use:grabKeyboard>
	<Textarea
		bind:elementRef={focusElement}
		placeholder="Whisper here"
		rows={4}
		bind:value={$liveText}
		class="w-full"
		autofocus
	/>
</div>
