<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import type { WhisperSessionPrefs } from '$lib/api/whisperApi';
	import { Button, ButtonGroup, Dropdown, Radio } from "flowbite-svelte";
	import { ChevronDownOutline } from "flowbite-svelte-icons";
	import AlertIcon from '$lib/components/whisper/toolbar/AlertIcon.svelte';

	const { api, prefs = $bindable() }: { api: WhisperApi, prefs: WhisperSessionPrefs } = $props();

	function showAlert() {
		api.playSound(prefs.alertSound);
	}
</script>

<ButtonGroup>
	<Button onclick={showAlert}><AlertIcon alertSound={prefs.alertSound} /></Button>
	<Button id="show-alert-dropdown">
		<ChevronDownOutline class="ms-0 h-6 w-6 text-black dark:text-black" />
	</Button>
</ButtonGroup>
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
