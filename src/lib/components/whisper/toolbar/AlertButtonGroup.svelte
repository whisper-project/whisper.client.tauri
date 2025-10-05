<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import { Button, ButtonGroup, Dropdown, Radio, Tooltip } from "flowbite-svelte";
	import { ChevronDownOutline } from "flowbite-svelte-icons";
	import AlertIcon from '$lib/components/whisper/toolbar/AlertIcon.svelte';

	const { api, prefs = $bindable() }: { api: WhisperApi, prefs: WhisperSessionPrefs } = $props();

	function showAlert() {
		api.playSound(prefs.alertSound);
	}

	function alertName(sound: string): string {
		switch (sound) {
			case 'air-horn':
				return 'Air Horn';
			case 'bicycle-horn':
				return 'Bicycle Horn';
			case 'bicycle-bell':
				return 'Bicycle Bell';
			default:
				return 'Uh Oh!';
		}
	}

	function alertTip() {
		const name = alertName(prefs.alertSound);
		return `Alert sound is ${name} (click to alert)`
	}
</script>

<ButtonGroup>
	<Button id="play-alert-button" color="light" onclick={showAlert}>
		<AlertIcon alertSound={prefs.alertSound} />
	</Button>
	<Button id="show-alert-dropdown" color="light">
		<ChevronDownOutline class="ms-0 h-6 w-6 text-black dark:text-black" />
	</Button>
</ButtonGroup>
<Tooltip type="light" triggeredBy="#play-alert-button">{alertTip()}</Tooltip>
<Tooltip type="light" triggeredBy="#show-alert-dropdown">Choose alert sound</Tooltip>
<Dropdown simple triggeredBy="#show-alert-dropdown" class="w-44 space-y-3 p-3 text-sm">
	<li>
		<Radio name="alertGroup" bind:group={prefs.alertSound} value="air-horn">Air Horn</Radio>
	</li>
	<li>
		<Radio name="alertGroup" bind:group={prefs.alertSound} value="bicycle-horn">Bicycle Horn</Radio>
	</li>
	<li>
		<Radio name="alertGroup" bind:group={prefs.alertSound} value="bicycle-bell">Bicycle Bell</Radio>
	</li>
</Dropdown>
