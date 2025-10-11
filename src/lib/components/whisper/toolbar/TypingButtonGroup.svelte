<script lang="ts">
	import { type WhisperSessionPrefs } from '$lib/api/whisperApi';
	import { Button, ButtonGroup, Dropdown, DropdownDivider, Radio, Tooltip } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import TypingIcon from './TypingIcon.svelte';
	import type { Writable } from 'svelte/store';

	const { prefs = $bindable(), giveFocus }:
		{ prefs: WhisperSessionPrefs, giveFocus: Writable<number> }
		= $props();

	function resignFocus() {
		giveFocus.update((old) => old + 1);
	}

	let areChoicesOpen = $state(false);
	let wereChoicesOpen = $state(false);
	$effect(() => {
		if (wereChoicesOpen !== areChoicesOpen) {
			wereChoicesOpen = areChoicesOpen;
			if (!areChoicesOpen) {
				resignFocus();
			}
		}
	})

	function togglePlayTypingSound() {
		prefs.playTypingSound = !prefs.playTypingSound;
		resignFocus();
	}

	function typingTip() {
		return prefs.playTypingSound ?
			'Typing sound is on (click to turn off)' :
			'Typing sound is off (click to turn on)';
	}
</script>

<ButtonGroup>
	<Button id="typing-toggle-button" color="light" onclick={togglePlayTypingSound}><TypingIcon playSound={prefs.playTypingSound} /></Button>
	<Button id="show-typing-dropdown" color="light">
		<ChevronDownOutline class="ms-0 h-6 w-6 text-black dark:text-black" />
	</Button>
</ButtonGroup>
<Tooltip type="light" triggeredBy="#typing-toggle-button">{typingTip()}</Tooltip>
<Tooltip type="light" triggeredBy="#show-typing-dropdown">Choose typing sound</Tooltip>
<Dropdown simple
					bind:isOpen={areChoicesOpen}
					triggeredBy="#show-typing-dropdown"
					class="w-44 space-y-3 p-3 text-sm"
>
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
