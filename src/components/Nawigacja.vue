<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="pt-[50px] top-0 bg-opacity-60 backdrop-blur-md z-50 ">
    <nav class="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
      <div>
        <router-link to="/Homem" class="text-3xl font-bold">CodeWorks</router-link>
      </div>

      <!-- Desktop menu -->
      <ul class="hidden md:flex md:gap-6 md:text-lg flex-wrap">
        <router-link to="/Kontakt" class="hover:text-green-300">Kontakt</router-link>
        <router-link to="/Omnie" class="hover:text-green-300">O mnie</router-link>
        <a
            href="https://github.com/Ar3eek"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-green-300"
        >
          GitHub
        </a>
      </ul>

      <!-- Hamburger button (mobile only) -->
      <button @click="toggleMenu" class="md:hidden text-3xl focus:outline-none">
        ☰
      </button>
    </nav>

    <!-- Mobile menu -->
    <transition name="fade-slide">
      <div
          v-if="isMenuOpen"
          class="md:hidden  cursor-pointer absolute left-4 right-4 mt-2 bg-[#1f2937] bg-opacity-95 rounded-xl shadow-xl p-6 transition-all duration-500 ease-in-out transform origin-top scale-100 z-50"
      >
        <ul class="flex flex-col gap-4 text-lg">
          <router-link @click="toggleMenu" to="/Kontakt" class="hover:text-green-300 cursor-pointer">Kontakt</router-link>
          <router-link @click="toggleMenu" to="/Omnie" class="hover:text-green-300">O mnie</router-link>
          <router-link @click="toggleMenu" to="/Technologie" class="hover:text-green-300">GitHub</router-link>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
