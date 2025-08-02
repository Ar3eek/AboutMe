<script setup>
import AOS from 'aos'
import {onMounted} from "vue";

onMounted(() => {
  setTimeout(() => loading.value = false, 1500)
  AOS.init({ once: true, duration: 1000 })
})
</script>

<template>
  <section class="flex flex-col md:flex-row items-center justify-center gap-x-[220px] gap-8 p-6 bg-[#0e0e0e] rounded-2xl" data-aos="fade-up">




    <!-- Avatar + info -->
    <div class="flex  items-center text-center">
      <img
          src="/Immages/IMG-167.jpg "
          alt="My photo"
          class="rounded-full w-40 h-40  object-[0_-10px] object-cover    border-[#1f2937]"
      />
      <div class="flex flex-col text-start gap-y-[10px] pl-[20px]    ">
        <h2 class="text-white text-xl font-bold mt-4">Więcej o mnie </h2>
        <p class="text-gray-400 mb-3">Kliknij przycisk poniżej, aby dowiedzieć się więcej</p>
        <router-link to="/Omnie" class="bg-[#00e4c3] hover:bg-[#00f0b5] text-white font-semibold px-6 py-2 rounded-full transition w-fit">
          O mnie
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>