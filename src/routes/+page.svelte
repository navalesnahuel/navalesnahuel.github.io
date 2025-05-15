<script lang="ts">

  import Skills from "$lib/components/Skills.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import Formation from "$lib/components/Formation.svelte";

  import { animateOnScroll } from "$lib/actions/animateOnScroll";
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow z-10 relative">
    <div use:animateOnScroll><Hero /></div>
    <div use:animateOnScroll={{ delay: "50ms" }}><Skills /></div>
    <div use:animateOnScroll={{ delay: "50ms" }}><Projects /></div>
    <div use:animateOnScroll={{ delay: "50ms" }}><Formation /></div>
  </main>

  <Footer />
</div>
