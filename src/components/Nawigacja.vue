<script setup>

</script>

<template>
  <header class=" pt-[50px]  top-0  bg-opacity-60 backdrop-blur-md z-50">
    <nav class="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
      <div>
        <router-link to="/Homem" class="text-3xl font-bold">CodeWorks</router-link>

      </div>

      <ul class="flex gap-6 text-lg">
        <router-link to="/Kontakt" class="hover:text-indigo-400">Kontakt</router-link>
        <router-link to="/Omnie" class="hover:text-indigo-400">O mnie</router-link>
        <router-link to="/Technologie" class="hover:text-indigo-400">GitHub</router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>