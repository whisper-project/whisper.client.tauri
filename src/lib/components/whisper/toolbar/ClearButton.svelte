<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import { Button, Tooltip } from 'flowbite-svelte';
	import type { Writable } from 'svelte/store';

	const { api, giveFocus }: { api: WhisperApi; giveFocus: Writable<number> } = $props();

	function clearLiveText() {
		api.clearLiveText();
		giveFocus.update((old) => old + 1);
	}
</script>

<Button color="light" onclick={clearLiveText}>Clear</Button>
<Tooltip type="light">Clear type-in</Tooltip>
