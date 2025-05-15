<script lang="ts">
  export let showBorder: boolean = true;
  export let xPadding: string = "px-4 sm:px-6 lg:px-8";
</script>

<div
  class="max-w-4xl mx-auto {xPadding}
           {showBorder ? 'pb-20 border-b border-grey/30' : 'pb-0'}"
>
  <slot />
</div>
