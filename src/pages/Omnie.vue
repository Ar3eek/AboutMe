<script setup>
import Nav from '../components/Nawigacja.vue'
import Omnie from '../components/Omnie.vue'
import Footer from "../components/Stopka.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans bg-[#0e0e0e] text-white">
    <Nav />
    <div class="flex-1">
      <Omnie />
    </div>
    <Footer />
  </div>
</template>


<style scoped>

</style>