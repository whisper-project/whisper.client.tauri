<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import ListenerSummary from './ListenerSummary.svelte';

	let { api }: { api: WhisperApi } = $props();
</script>

<div class="border-b border-gray-200 bg-gray-50 p-3">
	<div class="flex items-center space-x-2">
		<ListenerSummary {api} />
	</div>
</div>
