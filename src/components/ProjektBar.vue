<script setup>
import { onMounted, ref, watch } from "vue";
import AOS from 'aos'
import 'aos/dist/aos.css'

const email = ref('')
const wiadomosc = ref('')
const loading = ref(true)

const isModalOpen = ref(false)
const selectedProjekt = ref(null)

const openModal = (projekt) => {
  selectedProjekt.value = projekt
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProjekt.value = null
}

// ✅ Blokuj scroll tła przy otwartym modalu
watch(isModalOpen, (now) => {
  document.body.style.overflow = now ? 'hidden' : 'auto'
})

const projekty = [
  {
    nazwa: 'magdakazula.pl',
    opis: 'Responsywna strona dla fotografa, Vue + Tailwind, galeria zdjęć i formularz kontaktowy.',
    pelnyOpis: {
      wstep: `Strona internetowa przygotowana dla profesjonalnej fotografki Magdy Kazuli to elegancka i nowoczesna witryna, która w przejrzysty sposób prezentuje jej twórczość oraz ofertę. Projekt został stworzony z myślą o estetyce, prostocie i intuicyjnym poruszaniu się użytkownika. `,
      czegoSieNauczylem: `Jak projektować responsywne interfejsy przy użyciu Tailwind i Vue 3. Dodatkowo praca z animacjami (AOS, GSAP) oraz integracja z EmailJS.`,
    },
    galeria: [
      '/Immages/zrzut1.png',
      '/Immages/zrzut2.png',
      '/Immages/zrzut3.png',
    ],
    link: 'https://magdakazula.pl/',
    tech: ['Vue 3', 'Tailwind CSS', 'AOS.js', 'EmailJS', 'JavaScript', 'GSAP', 'LightBox'],
    github: 'https://github.com/twojlogin/mobility-calc'
  },
  {
    nazwa: 'Mateusz Manaj Portfolio',
    opis: 'Strona portfolio z responsywnym UI.',
    link: 'https://github.com/twojlogin/3d-portfolio',
    tech: ['Vue', 'Tailwind', 'JavaScript'],
    github: 'https://github.com/twojlogin/mobility-calc'
  },
  {
    nazwa: 'Mobility Calculator',
    opis: 'Aplikacja do obliczania kosztów usług transportowych.',
    pelnyOpis: {
      wstep: `Many interactive web applications focus on the technical aspects of the programming they need...`,
      dlaczego: `The insurance company offers a transportation service...`,
      czegoSieNauczylem: `How to improve UX while working with complex business logic.`,
    },
    galeria: [
      '/img/calc-1.png',
      '/img/calc-2.png',
      '/img/calc-3.png'
    ],
    tech: ['Vue', 'Tailwind', 'Pinia', 'Vite'],
    link: 'https://mobility.example.com',
    github: 'https://github.com/twojlogin/mobility-calc'
  }
]

onMounted(() => {
  setTimeout(() => loading.value = false, 1500)
  AOS.init({ once: true, duration: 1000 })
})

const wyslij = () => {
  alert(`Wysłano wiadomość od: ${email.value}\nTreść: ${wiadomosc.value}`)
  email.value = ''
  wiadomosc.value = ''
}
</script>


<template>
  <section id="projekty" class="py-24 px-6 bg-[#0e0e0e]">
    <div class="max-w-6xl mx-auto">
      <div>
        <h3 class="text-4xl font-bold text-center mb-[10px]" data-aos="fade-up">
          Wybierz project
        </h3>
        <p class="text-sm opacity-50 font-bold text-center mb-12" data-aos="fade-up">
          Odwiedź mojego <span class="text-[#00e4c3]"> GitHuba </span> żeby zobaczyć więcej
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="projekt in projekty"
            :key="projekt.nazwa"
            class="flex flex-col justify-between bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-[0_0_20px_#00e4c3] transition duration-300"
            data-aos="fade-up"
        >
          <div>
            <h4 class="text-2xl font-semibold mb-2">{{ projekt.nazwa }}</h4>
            <p class="mb-4">{{ projekt.opis }}</p>

            <div class="flex flex-wrap gap-2 mt-4 mb-6">
              <span
                  v-for="t in projekt.tech"
                  :key="t"
                  class="bg-[#2c2c2c] text-white px-3 py-1 rounded-full text-sm font-medium"
              >
                {{ t }}
              </span>
            </div>
          </div>

          <div class="flex justify-center mt-auto pt-4">
            <button
                @click="openModal(projekt)"
                class="bg-[#00e4c3] hover:bg-[#00f0b5] text-black font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Zobacz więcej
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal -->
  <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div class="bg-gradient-to-b from-[#1a1a1a] to-[#101010] text-white p-8 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
      <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white text-2xl font-bold hover:text-[#00e4c3]"
      >
        &times;
      </button>

      <!-- Tytuł -->
      <h2 class="text-4xl font-bold mb-6">{{ selectedProjekt.nazwa }}</h2>

      <!-- Galeria -->
      <div v-if="selectedProjekt.galeria?.length" class="flex gap-4 overflow-x-auto mb-8">
        <img
            v-for="(img, index) in selectedProjekt.galeria"
            :key="index"
            :src="img"
            class="rounded-lg shadow-lg h-48 object-cover"
            :alt="`Zrzut ekranu ${index + 1}`"
        />
      </div>
      <!-- Wstęp -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">📌 Wstęp</h3>
        <p class="text-sm text-gray-300 whitespace-pre-line">{{ selectedProjekt.pelnyOpis?.wstep }}</p>
      </div>

      <!-- Co się nauczyłem -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">🧠 Czego się nauczyłem ?</h3>
        <p class="text-sm text-gray-300 whitespace-pre-line">{{ selectedProjekt.pelnyOpis?.czegoSieNauczylem }}</p>
      </div>
      <!-- Technologie -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">🛠️ Tech stack</h3>
        <div class="flex flex-wrap gap-2">
        <span
            v-for="t in selectedProjekt.tech"
            :key="t"
            class="bg-[#2c2c2c] px-3 py-1 rounded-full text-sm font-medium"
        >
          {{ t }}
        </span>
        </div>
      </div>


      <div class="flex   gap-4 p-6">
        <a
            :href="selectedProjekt.link"
            target="_blank"
            class="bg-[#00e4c3] hover:bg-[#00f0b5] w-[50%] text-black text-center font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Odwiedź stronę
        </a>
        <a
            v-if="selectedProjekt.github"
            :href="selectedProjekt.github"
            target="_blank"
            class="bg-[#00e4c3] w-[50%] hover:bg-[#00f0b5] text-black  text-center font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Repozytorium
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Można dodać animacje modala, jeśli chcesz */
</style>
