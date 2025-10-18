<script lang="ts">
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import { Button, Tooltip } from 'flowbite-svelte';
	import SpeakingIcon from './SpeakingIcon.svelte';
	import type { Writable } from 'svelte/store';

	const {
		prefs = $bindable(),
		giveFocus
	}: { prefs: WhisperSessionPrefs; giveFocus: Writable<number> } = $props();

	function resignFocus() {
		giveFocus.update((old) => old + 1);
	}

	function toggleSpeaking() {
		prefs.speakText = !prefs.speakText;
		resignFocus();
	}

	function speakingTip() {
		return prefs.speakText
			? 'Speech is on (click to turn off)'
			: 'Speech is off (click to turn on)';
	}
</script>

<Button color="light" onclick={toggleSpeaking}><SpeakingIcon speakText={prefs.speakText} /></Button>
<Tooltip type="light">{speakingTip()}</Tooltip>
