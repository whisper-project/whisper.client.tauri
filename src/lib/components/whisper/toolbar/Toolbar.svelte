<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import type { Writable } from 'svelte/store';
	import AlertButtonGroupGroup from './AlertButtonGroup.svelte';
	import TypingButtonGroup from './TypingButtonGroup.svelte';
	import SpeakingButton from './SpeakingButton.svelte';
	import ClearButton from './ClearButton.svelte';
	import RepeatButton from './RepeatButton.svelte';
	import StopButton from './StopButton.svelte';

	let { api, prefs = $bindable(), stop, giveFocus }:
		{ api: WhisperApi, prefs: WhisperSessionPrefs, stop: () => void, giveFocus: Writable<number> }
		= $props();
</script>

<div class="bg-gray-50 border-b border-gray-200 p-3">
	<div class="flex items-center space-x-2">
		<AlertButtonGroupGroup api={api} bind:prefs={prefs} giveFocus={giveFocus} />
		<TypingButtonGroup bind:prefs={prefs} giveFocus={giveFocus} />
		<SpeakingButton bind:prefs={prefs} giveFocus={giveFocus} />
		<ClearButton api={api} giveFocus={giveFocus} />
		<RepeatButton api={api} giveFocus={giveFocus} />
		<StopButton stop={stop} giveFocus={giveFocus} />
	</div>
</div>
