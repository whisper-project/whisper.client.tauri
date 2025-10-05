<script lang="ts">
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import { Button, Tooltip } from 'flowbite-svelte';
	import SpeakingIcon from './SpeakingIcon.svelte';

	const { prefs = $bindable() }: { prefs: WhisperSessionPrefs } = $props();

	function toggleSpeaking() {
		prefs.speakText = !prefs.speakText;
	}

	function speakingTip() {
		return prefs.speakText ?
			'Speech is on (click to turn off)' :
			'Speech is off (click to turn on)';
	}
</script>

<Button color="light" onclick={toggleSpeaking}><SpeakingIcon speakText={prefs.speakText} /></Button>
<Tooltip type="light">{speakingTip()}</Tooltip>
