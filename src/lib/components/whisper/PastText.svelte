<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import { tick } from 'svelte';

	const { api }: { api: WhisperApi } = $props();
	const pastText = api.getPastTextStore();

	let viewport: HTMLElement;

	$effect.pre(() => {
		if ($pastText) {
			const autoscroll =
				viewport && viewport.offsetHeight + viewport.scrollTop > viewport.scrollHeight - 50;

			if (autoscroll) {
				tick().then(() => {
					viewport.scrollTo(0, viewport.scrollHeight);
				});
			}
		}
	});
</script>

<div class="flex-1 overflow-hidden bg-white p-3">
	<div bind:this={viewport} class="h-full w-full overflow-y-auto">
		{#if $pastText}
			<div class="text-base leading-relaxed whitespace-pre-wrap text-gray-800">
				{$pastText}
			</div>
		{:else}
			<div class="text-gray-400 italic">Whispered text will appear here...</div>
		{/if}
	</div>
</div>
