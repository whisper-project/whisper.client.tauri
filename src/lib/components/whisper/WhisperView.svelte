<script lang="ts">
	import type { Conversation } from '$lib/api/common';
	import { WhisperApi } from '$lib/api/whisperApi';
	import ResizablePanelGroup from '$lib/components/resizable/ResizablePanelGroup.svelte';
	import ResizablePanel from '$lib/components/resizable/ResizablePanel.svelte';
	import Toolbar from './toolbar/Toolbar.svelte';
	import PastText from './PastText.svelte';
	import StatusBar from './statusbar/StatusBar.svelte';
	import LiveText from './LiveText.svelte';
	import { readonly, writable } from 'svelte/store';

	let { conversation, stop }: { conversation: Conversation, stop: () => void } = $props();

	let api = new WhisperApi(conversation);
	let prefs = $state(api.getSessionPrefs());
	let giveFocus = writable(0);
	let takeFocus = readonly(giveFocus);
	$effect(() => { api.saveSessionPrefs(prefs) })
</script>

<ResizablePanelGroup direction="vertical" className="h-full">
	<ResizablePanel defaultSize={100} minSize={70}>
		<Toolbar api={api} bind:prefs={prefs} stop={stop} giveFocus={giveFocus} />
		<PastText api={api} />
		<StatusBar api={api} />
		<LiveText api={api} takeFocus={takeFocus} />
	</ResizablePanel>
</ResizablePanelGroup>
