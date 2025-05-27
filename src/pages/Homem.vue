<script setup>
import {ref, onMounted} from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from "../components/Nav.vue"

const email = ref('')
const wiadomosc = ref('')
const loading = ref(true)

const projekty = [
  {
    nazwa: 'Magda Kazula Fotografia',
    opis: 'Responsywna strona portfolio dla fotografa, Vue + Tailwind, galeria zdjęć i formularz kontaktowy.',
    link: 'https://github.com/twojlogin/task-app'
  },
  {
    nazwa: 'Mateusz Manaj Portfolio',
    opis: 'Strona portfolio z responsywnym UI.',
    link: 'https://github.com/twojlogin/3d-portfolio'
  },
  {
    nazwa: 'Biznes w Obiektywie',
    opis: 'Blog techniczny z Markdown + VuePress + Tailwind.',
    link: 'https://github.com/twojlogin/blog-devlife'
  }
]

onMounted(() => {
  setTimeout(() => loading.value = false, 1500)
  AOS.init({once: true, duration: 1000})
})

const wyslij = () => {
  alert(`Wysłano wiadomość od: ${email.value}\nTreść: ${wiadomosc.value}`)
  email.value = ''
  wiadomosc.value = ''
}
</script>

<template>
  <div class="font-sans bg-[#0e0e0e] text-white min-h-screen">

    <!-- Navigation -->
    <Nav/>

    <!-- Hero Section -->
    <section id="hero" class="h-screen relative  flex flex-col justify-center items-center text-center px-6"
             data-aos="fade-up">
      <h2 class="text-5xl font-extrabold mb-4">Cześć, jestem <span class="text-[#00e4c3]">Arkadiusz Korzeniowski</span>
      </h2>
      <p class="text-xl max-w-2xl">Frontend Developer – tworzę nowoczesne i interaktywne aplikacje w Vue.js i Tailwind
        CSS.</p>
    </section>

    <!-- Umiejętności -->
    <section class="py-24 px-6 bg-[#121212] text-center" data-aos="fade-up">
      <h3 class="text-4xl font-bold mb-8">Technologie</h3>
      <div class="flex justify-center flex-wrap gap-10 text-5xl text-[#00e4c3]">
        <i class="devicon-vuejs-plain "></i>
        <i class="devicon-tailwindcss-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-git-plain"></i>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-24 px-6 bg-[#1a1a1a] text-center" data-aos="fade-up">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-4xl font-bold mb-6">O mnie</h3>
        <p class="text-lg leading-relaxed">Zaczęło się od ciekawości... Teraz jestem doświadczonym frontendowcem z pasją
          do UI/UX, optymalizacji i ciągłego rozwoju. Lubię poznawać nowe frameworki i dzielić się wiedzą.</p>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projekty" class="py-24 px-6 bg-[#0e0e0e]">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Projekty</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="projekt in projekty" :key="projekt.nazwa"
               class="bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-[0_0_20px_#00e4c3] transition duration-300"
               data-aos="fade-up">
            <h4 class="text-2xl font-semibold mb-2">{{ projekt.nazwa }}</h4>
            <p class="mb-4">{{ projekt.opis }}</p>
            <a :href="projekt.link" target="_blank" class="text-[#00e4c3] hover:text-[#00f0b5] hover:underline">Zobacz
              więcej</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontakt" class="py-24 px-6 bg-[#121212]" data-aos="fade-up">
      <div class="max-w-xl mx-auto text-center">
        <h3 class="text-4xl font-bold mb-6">Kontakt</h3>
        <form @submit.prevent="wyslij" class="flex flex-col gap-4">
          <input v-model="email" type="email" placeholder="Twój email"
                 class="p-3 rounded bg-[#1a1a1a] text-white border border-[#2e2e2e]" required/>
          <textarea v-model="wiadomosc" placeholder="Wiadomość"
                    class="p-3 rounded bg-[#1a1a1a] text-white border border-[#2e2e2e]" required></textarea>
          <button type="submit"
                  class="relative inline-block px-6 py-3 font-bold border-2 border-[#00e4c3] text-[#00e4c3] hover:text-black hover:bg-[#00e4c3] transition rounded-full shadow-lg hover:shadow-[0_0_20px_#00e4c3]">
            Wyślij
          </button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-sm py-6 bg-[#0e0e0e] text-white mt-12">
      <p>&copy; 2025 Arkadiusz Korzeniowski. Wszystkie prawa zastrzeżone.</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
</style>
