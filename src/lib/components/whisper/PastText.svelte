<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import { type Component, tick } from 'svelte';

	const { api }: { api: WhisperApi } = $props();
	const pastText = api.getPastTextStore()

	let viewport: HTMLElement;

	$effect.pre(() => {
		if ($pastText) {
			const autoscroll = viewport && viewport.offsetHeight + viewport.scrollTop > viewport.scrollHeight - 50;

			if (autoscroll) {
				tick().then(() => {
					viewport.scrollTo(0, viewport.scrollHeight);
				});
			}
		}
	});
</script>

<div class="flex-1 p-3 bg-white overflow-hidden">
	<div bind:this={viewport} class="w-full h-full overflow-y-auto">
		{#if $pastText}
			<div class="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
				{$pastText}
			</div>
		{:else}
			<div class="text-gray-400 italic">
				Whispered text will appear here...
			</div>
		{/if}
	</div>
</div>
