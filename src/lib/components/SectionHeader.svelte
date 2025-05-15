<script>
  export let title;
  export let subtitle = "";
</script>

<div class="text-left mb-8 md:mb-12">
  <h2 class="text-xl sm:text-4xl font-header font-bold text-primary mb-2">
    {title}
  </h2>
  {#if subtitle}
    <p class="text-base sm:text-xl text-white opacity-50">{subtitle}</p>
  {/if}
</div>
