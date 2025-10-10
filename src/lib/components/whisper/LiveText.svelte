<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import { Textarea } from 'flowbite-svelte';
	const { api }: { api: WhisperApi } = $props();
	const liveText = api.getLiveTextStore()
</script>

<div class="p-2 bg-white">
	<Textarea placeholder="Whisper here" rows={4} bind:value={$liveText} class="w-full" />
</div>
