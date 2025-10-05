<script lang="ts">
	import { VolumeUpOutline, VolumeMuteOutline } from 'flowbite-svelte-icons';
	let { speakText }: { speakText: boolean } = $props();
</script>

{#if speakText}
	<VolumeUpOutline class="me-0 h-5 w-5" />
{:else}
	<VolumeMuteOutline class="me-0 h-5 w-5" />
{/if}
