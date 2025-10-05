<script lang="ts">
	import WhisperView from '../whisper/WhisperView.svelte';
	import ListenView from '../listen/ListenView.svelte';
	import ChoiceView from './ChoiceView.svelte';

	let mode = $state('home');

	function stop() {
		mode = 'home';
	}
</script>

{#if mode === 'whisper'}
	<WhisperView stop={stop} />
{:else if mode === 'listen'}
	<ListenView stop={stop} />
{:else}
	<ChoiceView bind:mode={mode} />
{/if}
