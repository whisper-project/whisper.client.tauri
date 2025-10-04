<script lang="ts">
	import AlertButtonGroupGroup from '$lib/components/whisper/toolbar/AlertButtonGroup.svelte';
	import { WhisperApi } from '$lib/api/whisperApi';

	let { api } : { api: WhisperApi } = $props();
</script>

<div class="bg-gray-50 border-b border-gray-200 p-3">
	<div class="flex justify-between items-center">
		<AlertButtonGroupGroup api={api}/>
	</div>
</div>