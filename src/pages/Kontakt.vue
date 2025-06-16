<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

import Nav from '../components/Nawigacja.vue'
import Stopka from '../components/Stopka.vue'

const buttonsContainer = ref(null)

onMounted(() => {
  gsap.from(buttonsContainer.value, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="font-sans bg-[#0e0e0e] text-white min-h-screen flex flex-col">
    <Nav />

    <!-- Główna zawartość na środku -->
    <div class="flex-1 flex flex-col justify-center items-center text-center px-4 space-y-10">
      <h1 class="text-4xl font-bold leading-snug">
        Wybierz <span class="text-[#00e4c3]">jak chcesz</span> się ze mną
        <span class="text-[#00e4c3]"> skontaktować</span>
      </h1>

      <!-- Kontener do animacji -->
      <div
          ref="buttonsContainer"
          class="flex flex-wrap gap-4 justify-center"
      >
        <button class="rounded-[20px] flex items-center gap-x-[10px] border border-white px-6 py-3 shadow-md transition hover:border-[#00e4c3] hover:bg-[#00e4c3] hover:shadow-[0_4px_12px_rgba(0,228,195,0.15)] group">
          <img src="/Immages/linkedin_142369.svg" alt="linkedin" class="h-[24px] group-hover:brightness-0 group-hover:invert">
          <span class="text-white">LinkedIn</span>
        </button>
        <button class="rounded-[20px] flex items-center gap-x-[10px] border border-white px-6 py-3 shadow-md transition hover:border-[#00e4c3] hover:bg-[#00e4c3] hover:shadow-[0_4px_12px_rgba(0,228,195,0.15)] group">
          <img src="/Immages/mail-inbox-app_3781605.svg" alt="mail" class="h-[24px] group-hover:brightness-0 group-hover:invert">
          <span class="text-white">E-mail</span>
        </button>
        <button class="rounded-[20px] flex items-center gap-x-[10px] border border-white px-6 py-3 shadow-md transition hover:border-[#00e4c3] hover:bg-[#00e4c3] hover:shadow-[0_4px_12px_rgba(0,228,195,0.15)] group">
          <img src="/Immages/facebook_1384085.svg" alt="facebook" class="h-[24px] group-hover:brightness-0 group-hover:invert">
          <span class="text-white">Facebook</span>
        </button>
        <button class="rounded-[20px] flex items-center gap-x-[10px] border border-white px-6 py-3 shadow-md transition hover:border-[#00e4c3] hover:bg-[#00e4c3] hover:shadow-[0_4px_12px_rgba(0,228,195,0.15)] group">
          <img src="/Immages/instagram_1384089.svg" alt="instagram" class="h-[24px] group-hover:brightness-0 group-hover:invert">
          <span class="text-white">Instagram</span>
        </button>
      </div>
    </div>

    <Stopka />
  </div>
</template>
