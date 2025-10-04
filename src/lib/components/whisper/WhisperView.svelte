<script lang="ts">
	import { WhisperApi } from '$lib/api/whisperApi';
	import ResizablePanelGroup from '$lib/components/resizable/ResizablePanelGroup.svelte';
	import ResizablePanel from '$lib/components/resizable/ResizablePanel.svelte';
	import Toolbar from '$lib/components/whisper/toolbar/Toolbar.svelte';

	let api = new WhisperApi();
</script>

<ResizablePanelGroup direction="vertical" className="h-full">
	<ResizablePanel defaultSize={100} minSize={70}>
		<Toolbar api={api} />
	</ResizablePanel>
</ResizablePanelGroup>
