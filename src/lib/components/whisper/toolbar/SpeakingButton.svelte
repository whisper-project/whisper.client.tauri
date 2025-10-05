<script lang="ts">
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import { Button, Tooltip } from 'flowbite-svelte';
	import SpeakingIcon from './SpeakingIcon.svelte';

	const { prefs = $bindable() }: { prefs: WhisperSessionPrefs } = $props();

	function toggleSpeaking() {
		prefs.speakText = !prefs.speakText;
	}

	function showSpeakingState() {
		return prefs.speakText ? 'Turn speaking off' : 'Turn speaking on';
	}
</script>

<Button color="light" onclick={toggleSpeaking}><SpeakingIcon speakText={prefs.speakText} /></Button>
<Tooltip type="light">{showSpeakingState()}</Tooltip>
