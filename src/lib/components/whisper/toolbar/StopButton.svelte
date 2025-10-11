<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { Button, Dropdown, DropdownItem, Tooltip } from 'flowbite-svelte';

	let { stop, giveFocus }: { stop: () => void, giveFocus: Writable<number> } = $props();

	function resignFocus() {
		giveFocus.update((old) => old + 1);
	}

	let isOpen = $state(false);
	let wasOpen = $state(false);
	$effect(() => {
		if (wasOpen !== isOpen) {
			wasOpen = isOpen;
			if (!isOpen) {
				resignFocus();
			}
		}
	})

	function closeDropdown() {
		isOpen = false;
	}
</script>

<Button id="stop-whispering-button">Stop</Button>
<Tooltip type="light" triggeredBy="#stop-whispering-button">Stop Whispering</Tooltip>
<Dropdown simple bind:isOpen triggeredBy="#stop-whispering-button">
	<DropdownItem onclick={stop}>Stop Whispering</DropdownItem>
	<DropdownItem onclick={closeDropdown}>Continue Whispering</DropdownItem>
</Dropdown>
