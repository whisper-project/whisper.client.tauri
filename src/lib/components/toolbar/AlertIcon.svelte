<script lang="ts">
	import { BullhornSolid, BullhornOutline, BellRingOutline } from 'flowbite-svelte-icons';
	let { alertSound } = $props();
</script>

{#if alertSound === 'air-horn'}
	<BullhornSolid class="me-0 h-5 w-5" />
{/if}
{#if alertSound === 'bicycle-horn'}
	<BullhornOutline class="me-0 h-5 w-5" />
{/if}
{#if alertSound === 'bicycle-bell'}
	<BellRingOutline class="me-0 h-5 w-5" />
{/if}
