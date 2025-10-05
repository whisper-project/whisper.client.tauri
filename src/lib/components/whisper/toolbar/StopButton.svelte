<script lang="ts">
	import { Button, Dropdown, DropdownItem, Tooltip } from 'flowbite-svelte';

	let { stop }: { stop: () => void } = $props();

let isOpen = $state(false);
</script>

<Button id="stop-whispering-button">Stop</Button>
<Tooltip type="light" triggeredBy="#stop-whispering-button">Stop Whispering</Tooltip>
<Dropdown simple bind:isOpen triggeredBy="#stop-whispering-button">
	<DropdownItem onclick={stop}>Stop Whispering</DropdownItem>
	<DropdownItem onclick={() => {isOpen = false}}>Continue Whispering</DropdownItem>
</Dropdown>
