<script lang="ts">
	import StopButton from './StopButton.svelte';

	let { stop }: { stop: () => void } = $props();
</script>

<div class="bg-gray-50 border-b border-gray-200 p-3">
	<div class="flex items-center space-x-2">
		<StopButton stop={stop} />
	</div>
</div>
