<script setup>

import Nav from "../components/Nav.vue";
import { ref } from 'vue'

const email = ref('')
const wiadomosc = ref('')

const projekty = [
  {
    nazwa: 'Task Manager',
    opis: 'Vue + Firebase, responsywny UI, zarządzanie zadaniami w czasie rzeczywistym.',
    link: 'https://github.com/twojlogin/task-app'
  },
  {
    nazwa: 'Portfolio 3D',
    opis: 'Strona portfolio z animacjami Three.js i interaktywnym UI.',
    link: 'https://github.com/twojlogin/3d-portfolio'
  },
  {
    nazwa: 'Blog DevLife',
    opis: 'Blog techniczny z Markdown + VuePress + Tailwind.',
    link: 'https://github.com/twojlogin/blog-devlife'
  }
]

const wyslij = () => {
  alert(`Wysłano wiadomość od: ${email.value}\nTreść: ${wiadomosc.value}`)
  email.value = ''
  wiadomosc.value = ''
}
</script>
<template>
  <div class="font-sans bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
    <!-- Navigation -->
    <Nav/>
    <!-- Hero Section -->
    <section class="text-center py-24 px-6">
      <h2 class="text-5xl font-extrabold mb-4">Cześć, jestem <span class="text-indigo-500">Arkadiusz  Korzeniowski</span></h2>
      <p class="text-xl max-w-2xl mx-auto">Frontend Developer specjalizujący się Java Script w Vue.js i Tailwind CSS. Tworzę nowoczesne, responsywne aplikacje webowe.</p>
    </section>

    <!-- About Section -->
    <section id="o-mnie" class="py-24 px-6 bg-slate-800">
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-4xl font-bold mb-6">O mnie</h3>
        <p class="text-lg leading-relaxed">Zaczęło się od ciekawości... Teraz jestem doświadczonym frontendowcem z pasją do UI/UX, optymalizacji i ciągłego rozwoju. Lubię poznawać nowe frameworki i dzielić się wiedzą.</p>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projekty" class="py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl font-bold text-center mb-12">Projekty</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="projekt in projekty" :key="projekt.nazwa" class="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h4 class="text-2xl font-semibold mb-2">{{ projekt.nazwa }}</h4>
            <p class="mb-4">{{ projekt.opis }}</p>
            <a :href="projekt.link" class="text-indigo-400 hover:underline">Zobacz więcej</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontakt" class="py-24 px-6 bg-slate-800">
      <div class="max-w-xl mx-auto text-center">
        <h3 class="text-4xl font-bold mb-6">Kontakt</h3>
        <form @submit.prevent="wyslij" class="flex flex-col gap-4">
          <input v-model="email" type="email" placeholder="Twój email" class="p-3 rounded bg-gray-900 text-white" required />
          <textarea v-model="wiadomosc" placeholder="Wiadomość" class="p-3 rounded bg-gray-900 text-white" required></textarea>
          <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full transition">Wyślij</button>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-sm py-6 bg-black bg-opacity-40 mt-12">
      <p>&copy; 2025 Jan Kowalski. Wszystkie prawa zastrzeżone.</p>
    </footer>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
</style>
