<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import ResizablePanelGroup from '$lib/components/resizable/ResizablePanelGroup.svelte';
	import ResizablePanel from '$lib/components/resizable/ResizablePanel.svelte';
	import Toolbar from './toolbar/Toolbar.svelte';
	import PastText from './PastText.svelte';

	let { stop }: { stop: () => void } = $props();

	let api = new WhisperApi();
	let prefs = $state(api.getSessionPrefs());
	$effect(() => { api.saveSessionPrefs(prefs) })
</script>

<ResizablePanelGroup direction="vertical" className="h-full">
	<ResizablePanel defaultSize={100} minSize={70}>
		<Toolbar api={api} bind:prefs={prefs} stop={stop} />
		<PastText text="" />
	</ResizablePanel>
</ResizablePanelGroup>
