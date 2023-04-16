<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Hero from './components/Hero.vue'
import Navigation from './components/Navigation/Navigation.vue'
import Intro from './components/Intro.vue'
import Footer from './components/Footer/Footer.vue'
</script>

<template>
  <Hero />
  <Navigation />
  <Intro />
  <div class="container mx-auto px-4">
    <HelloWorld msg="Vite + Vue" />
  </div>
  <Footer />
</template>

<style scoped>
</style>
