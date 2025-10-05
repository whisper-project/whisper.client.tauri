<script lang="ts">
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import { Button, ButtonGroup, Dropdown, DropdownDivider, Radio } from "flowbite-svelte";
	import { ChevronDownOutline } from "flowbite-svelte-icons";
	import TypingIcon from './TypingIcon.svelte';

	const { prefs = $bindable() }: { prefs: WhisperSessionPrefs } = $props();

	function togglePlayTypingSound() {
		prefs.playTypingSound = !prefs.playTypingSound;
	}
</script>

<ButtonGroup>
	<Button onclick={togglePlayTypingSound}><TypingIcon playSound={prefs.playTypingSound} /></Button>
	<Button id="show-alert-dropdown">
		<ChevronDownOutline class="ms-0 h-6 w-6 text-black dark:text-black" />
	</Button>
</ButtonGroup>
<Dropdown simple triggeredBy="#show-alert-dropdown" class="w-44 space-y-3 p-3 text-sm">
	<li>
		<Radio name="soundGroup" bind:group={prefs.typingSound} value="typewriter-classic">Classic Typewriter</Radio>
	</li>
	<li>
		<Radio name="soundGroup" bind:group={prefs.typingSound} value="typewriter-modern">Modern Typewriter</Radio>
	</li>
	<DropdownDivider />
	<li>
		<Radio name="volumeGroup" bind:group={prefs.typingSoundVolume} value="full">Full volume</Radio>
	</li>
	<li>
		<Radio name="volumeGroup" bind:group={prefs.typingSoundVolume} value="half">Half volume</Radio>
	</li>
	<li>
		<Radio name="volumeGroup" bind:group={prefs.typingSoundVolume} value="quarter">Quarter volume</Radio>
	</li>
</Dropdown>
