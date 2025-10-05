<script lang="ts">
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';

	let { stop }: { stop: () => void } = $props();

	let isOpen = $state(false);
</script>

<Button>Stop</Button>
<Dropdown simple bind:isOpen>
	<DropdownItem onclick={stop}>Stop Listening</DropdownItem>
	<DropdownItem onclick={() => {isOpen = false}}>Continue Listening</DropdownItem>
</Dropdown>
