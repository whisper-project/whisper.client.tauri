<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import { P } from 'flowbite-svelte';
	import { derived } from 'svelte/store';

	const { api }: { api: WhisperApi } = $props();
	let listeners = api.getListeners();
	const listenerCount = derived(listeners, (val) => val.length);
</script>

{#if $listenerCount > 1}
	<P size="sm">{$listenerCount} listeners</P>
{:else if $listenerCount === 1}
	<P size="sm">{$listeners[0].name} is listening</P>
{:else}
	<P size="sm">No listeners</P>
{/if}
