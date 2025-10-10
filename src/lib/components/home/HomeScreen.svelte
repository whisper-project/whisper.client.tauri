<script lang="ts">
	import type { Conversation } from '$lib/api/common';
	import WhisperView from '../whisper/WhisperView.svelte';
	import ListenView from '../listen/ListenView.svelte';
	import ChoiceView from './ChoiceView.svelte';

	let mode = $state('home');
	let conversation: Conversation = $state({
		name: 'dummy',
		id: 'dummy-conversation-id',
		owner: {
			name: 'me',
			id: 'my-id'
		}
	})

	function stop() {
		mode = 'home';
	}
</script>

{#if mode === 'whisper'}
	<WhisperView conversation={conversation} stop={stop} />
{:else if mode === 'listen'}
	<ListenView stop={stop} />
{:else}
	<ChoiceView bind:mode={mode} bind:conversation={conversation} />
{/if}
