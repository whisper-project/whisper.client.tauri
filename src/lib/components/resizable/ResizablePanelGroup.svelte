<script lang="ts">
	export let direction: 'horizontal' | 'vertical' = 'horizontal';
	export let className: string = '';
</script>

<div class={`resizable-panel-group ${className}`} data-direction={direction}>
	<slot />
</div>

<style>
	.resizable-panel-group {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.resizable-panel-group[data-direction='vertical'] {
		flex-direction: column;
	}

	.resizable-panel-group[data-direction='horizontal'] {
		flex-direction: row;
	}
</style>
