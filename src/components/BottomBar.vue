<script setup>
import AOS from 'aos'
import {onMounted} from "vue";

onMounted(() => {
  setTimeout(() => loading.value = false, 1500)
  AOS.init({ once: true, duration: 1000 })
})
</script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-evenly gap-8 p-6 bg-[#0e0e0e] rounded-2xl" data-aos="fade-up">
    <!-- Cytat -->
    <div class="bg-[#161b22] text-white flex flex-col justify-center p-6 rounded-2xl shadow-md max-w-md w-full relative">
      <p class="text-lg italic relative pl-8 pr-6">
        <span class="absolute left-2 top-0 text-2xl text-gray-400">“</span>
        Divide and conquer.
        <span class=" bottom-0 text-2xl text-gray-400">”</span>
      </p>
      <p class="text-right mt-4 text-sm text-gray-400">
        – Moje podejście do każdego złożonego problemu w kodzie.
      </p>
    </div>

    <!-- Avatar + info -->
    <div class="flex flex-col items-center text-center">
      <img
          src="/Immages/Hipster%20with%20Laptop%20Illustration.jpg"
          alt="My photo"
          class="rounded-full w-40 h-40 object-cover   border-[#1f2937]"
      />
      <h2 class="text-white text-xl font-bold mt-4">Więcej o mnie </h2>
      <p class="text-gray-400 mb-3">Kliknij przycisk poniżej, aby dowiedzieć się więcej</p>
      <button class="bg-[#00e4c3] hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-full transition">
        About me
      </button>
    </div>
  </section>
</template>

<style scoped>

</style>