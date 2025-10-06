<script lang="ts">
	let { text } = $props();
</script>

<div class="flex-1 p-6 bg-white overflow-hidden">
	<div class="w-full h-full overflow-y-auto">
		{#if text}
			<div class="text-gray-800 text-base leading-relaxed whitespace-pre-wrap">
				{text}
			</div>
		{:else}
			<div class="text-gray-400 italic">
				Whispered text will appear here...
			</div>
		{/if}
	</div>
</div>
