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

	let {
		api,
		prefs = $bindable(),
		stop,
		giveFocus
	}: {
		api: WhisperApi;
		prefs: WhisperSessionPrefs;
		stop: () => void;
		giveFocus: Writable<number>;
	} = $props();
</script>

<div class="border-b border-gray-200 bg-gray-50 p-3">
	<div class="flex items-center space-x-2">
		<AlertButtonGroupGroup {api} bind:prefs {giveFocus} />
		<TypingButtonGroup bind:prefs {giveFocus} />
		<SpeakingButton bind:prefs {giveFocus} />
		<ClearButton {api} {giveFocus} />
		<RepeatButton {api} {giveFocus} />
		<StopButton {stop} {giveFocus} />
	</div>
</div>
