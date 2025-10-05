<script lang="ts">
	import ResizablePanelGroup from '$lib/components/resizable/ResizablePanelGroup.svelte';
	import ResizablePanel from '$lib/components/resizable/ResizablePanel.svelte';
	import Toolbar from './toolbar/Toolbar.svelte';

	let { stop }: { stop: () => void } = $props();
</script>

<ResizablePanelGroup direction="vertical" className="h-full">
	<ResizablePanel defaultSize={100} minSize={70}>
		<Toolbar stop={stop} />
	</ResizablePanel>
</ResizablePanelGroup>
