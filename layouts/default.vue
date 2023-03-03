<template>
  <div id="app" class="flex flex-col h-screen">
    <header>
      <Navbar></Navbar>
    </header>

    <main class="h-full">
      <slot />
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  components: {
    Navbar,
  },
}
</script>

<style>

</style>