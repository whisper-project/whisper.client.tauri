<script lang="ts">
	import { Button, Heading, List, Li } from 'flowbite-svelte';

	let { mode = $bindable(), conversation = $bindable() } = $props();
</script>

<div class="bg-gray-50 border-b border-gray-200 p-3">
	<div class="flex items-center space-x-2">
		<Button onclick={() => mode = 'whisper'}>Whisper</Button>
		<Button onclick={() => mode = 'listen'}>Listen</Button>
	</div>
</div>
<div class="bg-gray-50 border-b border-gray-200 p-3">
	<Heading tag="h3">Conversation</Heading>
	<List tag="ul">
		<Li>Name: {conversation.name}</Li>
		<Li>Whisperer: {conversation.owner.name}</Li>
	</List>
</div>
