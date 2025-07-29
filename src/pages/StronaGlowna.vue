<script setup>
import { ref, onMounted } from 'vue'

import Nav from "../components/Nawigacja.vue"
import Footer from "../components/Stopka.vue"
import MiddleBar from "../components/MiddleBar.vue"
import ProjektBar from "../components/ProjektBar.vue"
import BottomBar from "../components/BottomBar.vue"
import AOS from 'aos'

const fullText = 'Hello World!'
const char = ref('')
let index = 0

onMounted(() => {
  const interval = setInterval(() => {
    char.value += fullText[index]
    index++
    if (index >= fullText.length) clearInterval(interval)
  }, 100)

  AOS.init({ once: true, duration: 1000 })

  // Scroll to top on mobile
  if (window.innerWidth <= 768) {
    window.scrollTo(0, 0)
  }
})
</script>

<template>
  <div class="font-sans bg-[#0e0e0e] text-white relative overflow-hidden">
    <Nav />

    <section
        id="hero"
        class="h-[75vh] relative flex  justify-center items-center text-center overflow-hidden"
        data-aos="fade-up"
    >
      <svg
          class="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none animate-pulse-slow"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
      >
        <!-- Trójkąty -->
        <polygon points="30,5 60,60 0,60" fill="#00e4c3" opacity="0.2" transform="translate(20,40) rotate(15)" />
        <polygon points="30,5 60,60 0,60" fill="#00e4c3" opacity="0.15" transform="translate(300,90) rotate(-15)" />

        <!-- Kwadraty -->
        <rect x="200" y="150" width="40" height="40" fill="#00e4c3" opacity="0.1" transform="rotate(45 220 170)" />
        <rect x="500" y="100" width="30" height="30" fill="#00e4c3" opacity="0.1" />

        <!-- Okręgi -->
        <circle cx="120" cy="250" r="20" fill="#00e4c3" opacity="0.1" />
        <circle cx="600" cy="200" r="25" fill="#00e4c3" opacity="0.15" />

        <!-- Inne -->
        <rect x="400" y="300" width="20" height="20" fill="#00e4c3" opacity="0.1" />
        <polygon points="20,0 40,40 0,40" fill="#00e4c3" opacity="0.1" transform="translate(700,50)" />
      </svg>
      <div class="relative z-10">
        <div>
          <h2 class="text-[2.5rem] md:text-[5.3rem] flex-wrap">
            <span class="text-white pr-[8px]">Frontend</span>
            <span class="text-[#00e4c3]">developer</span>
          </h2>
          <div class="flex flex-col flex-wrap gap-y-[40px]">
            <p class="text-[1rem] md:text-xl font-mono tracking-[5px]">{{ char }}</p>
            <p class="text-[0.98rem] md:text-xl text-center font-sans max-w-2xl">
              Witaj w moim świecie front-end developmentu, gdzie kreatywność łączy się z funkcjonalnością,
              tworząc wyjątkowe cyfrowe doświadczenia
            </p>
          </div>
          <div class="pt-[50px]">
            <router-link
                to="/Kontakt"
                class="group relative inline-flex items-center justify-center px-6 py-3 text-base md:text-lg font-semibold text-[#00e4c3] border border-[#00e4c3] rounded-full transition-all duration-300 ease-in-out hover:bg-[#00e4c3]/10 hover:shadow-[0_0_25px_#00e4c3] backdrop-blur-sm"
            >
              <span class="relative z-10 text-white tracking-wider">Contact me</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <MiddleBar class="md:mb-[200px]" />
    <ProjektBar />
    <BottomBar class="md:pt-[200px]" />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

@keyframes pulse-slow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.1;
  }
  50% {
    transform: scale(1.03);
    opacity: 0.2;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 12s ease-in-out infinite;
}
</style>
