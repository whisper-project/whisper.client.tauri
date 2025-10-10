<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	const { api }: { api: WhisperApi } = $props();
	const pastText = api.getPastTextStore()
</script>

<div class="flex-1 p-3 bg-white overflow-hidden">
	<div class="w-full h-full overflow-y-auto">
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
