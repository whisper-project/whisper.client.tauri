<script lang="ts">
	import { Button } from 'flowbite-svelte';

	let { mode = $bindable() } = $props();
</script>

<div class="bg-gray-50 border-b border-gray-200 p-3">
	<div class="flex items-center space-x-2">
		<Button onclick={() => mode = 'whisper'}>Whisper</Button>
		<Button onclick={() => mode = 'listen'}>Listen</Button>
	</div>
</div>
