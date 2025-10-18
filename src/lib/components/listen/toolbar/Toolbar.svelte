<script lang="ts">
	import StopButton from './StopButton.svelte';

	let { stop }: { stop: () => void } = $props();
</script>

<div class="border-b border-gray-200 bg-gray-50 p-3">
	<div class="flex items-center space-x-2">
		<StopButton {stop} />
	</div>
</div>
