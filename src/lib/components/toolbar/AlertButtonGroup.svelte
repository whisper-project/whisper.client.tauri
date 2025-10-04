<script lang="ts">
	import { Alert, Button, ButtonGroup, Dropdown, Radio } from "flowbite-svelte";
	import { ChevronDownOutline } from "flowbite-svelte-icons";
	import AlertIcon from '$lib/components/toolbar/AlertIcon.svelte';

	let alertSound = $state("bicycle-bell");
	let isAlerting = $state(false);

	function showAlert() {
		isAlerting = true;
		setTimeout(() => {
			isAlerting = false;
		}, 1000);
	}
</script>

<ButtonGroup class="*:ring-primary-700!">
	<Button onclick={showAlert}><AlertIcon alertSound={alertSound} /></Button>
	<Button id="show-alert-dropdown">
		<ChevronDownOutline class="ms-0 h-6 w-6 text-black dark:text-black" />
	</Button>
</ButtonGroup>
<Dropdown simple triggeredBy="#show-alert-dropdown" class="w-44 space-y-3 p-3 text-sm">
	<li>
		<Radio name="alertGroup" bind:group={alertSound} value="air-horn">Air Horn</Radio>
	</li>
	<li>
		<Radio name="alertGroup" bind:group={alertSound} value="bicycle-horn">Bicycle Horn</Radio>
	</li>
	<li>
		<Radio name="alertGroup" bind:group={alertSound} value="bicycle-bell">Bicycle Bell</Radio>
	</li>
</Dropdown>

{#if isAlerting}
	<Alert color="blue">Alert: {alertSound}</Alert>
{/if}

