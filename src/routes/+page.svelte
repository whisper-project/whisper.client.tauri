<script lang="ts">
	import ResizablePanelGroup from '$lib/components/resizable/ResizablePanelGroup.svelte';
	import ResizablePanel from '$lib/components/resizable/ResizablePanel.svelte';
	import AlertButton from '$lib/components/toolbar/AlertButton.svelte';
</script>

<div class="min-h-screen bg-gray-200 p-8 flex items-center justify-center">
	<div class="w-full max-w-5xl h-screen max-h-[90vh] min-h-[600px]">
		<ResizablePanelGroup direction="vertical" className="h-full">
			<ResizablePanel defaultSize={100} minSize={70}>
				<AlertButton />
			</ResizablePanel>
		</ResizablePanelGroup>
	</div>
</div>