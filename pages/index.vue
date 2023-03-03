<template>
  <Hero></Hero>
</template>

<script>
import Hero from "@/components/Hero"

export default {
  components: {
    Hero,
  },

  data() {
    return {
      showMenu: false
    }
  },
  
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style>

</style>