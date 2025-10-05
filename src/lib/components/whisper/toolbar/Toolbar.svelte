<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import AlertButtonGroupGroup from './AlertButtonGroup.svelte';
	import TypingButtonGroup from './TypingButtonGroup.svelte';
	import StopButton from './StopButton.svelte';

	let { api, prefs = $bindable(), stop }:
		{ api: WhisperApi, prefs: WhisperSessionPrefs, stop: () => void }
		= $props();
</script>

<div class="bg-gray-50 border-b border-gray-200 p-3">
	<div class="flex items-center space-x-2">
		<AlertButtonGroupGroup api={api} bind:prefs={prefs} />
		<TypingButtonGroup bind:prefs={prefs} />
		<StopButton stop={stop} />
	</div>
</div>
