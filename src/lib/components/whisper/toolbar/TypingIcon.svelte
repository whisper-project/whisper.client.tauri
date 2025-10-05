<script lang="ts">
	import { KeyboardOutline, KeyboardSolid } from 'flowbite-svelte-icons';
	let { playSound }: { playSound: boolean } = $props();
</script>

{#if playSound}
	<KeyboardOutline class="me-0 h-5 w-5" />
{:else}
	<KeyboardSolid class="me-0 h-5 w-5" />
{/if}
