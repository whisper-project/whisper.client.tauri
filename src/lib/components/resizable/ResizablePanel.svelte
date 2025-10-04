<script lang="ts">
  export let defaultSize: number = 50;
  export let minSize: number = 10;
  export let maxSize: number = 90;
  export let className: string = '';
</script>

<div 
  class={`resizable-panel ${className}`}
  style={`flex: ${defaultSize}; min-height: ${minSize}%; max-height: ${maxSize}%;`}
>
  <slot />
</div>

<style>
  .resizable-panel {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
</style>