<script setup>
import { onMounted, ref, watch, onBeforeUnmount } from "vue";
import AOS from 'aos'
import 'aos/dist/aos.css'

const email = ref('')
const wiadomosc = ref('')
const loading = ref(true)

const isModalOpen = ref(false)
const selectedProjekt = ref(null)

const powiekszonyObraz = ref(null)
const aktualnyIndex = ref(0)

const openModal = (projekt) => {
  selectedProjekt.value = projekt
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProjekt.value = null
}

// Lightbox
const otworzLightbox = (src, index) => {
  powiekszonyObraz.value = src
  aktualnyIndex.value = index
  document.addEventListener('keydown', obsluzKlawisze)
}

const zamknijLightbox = () => {
  powiekszonyObraz.value = null
  aktualnyIndex.value = 0
  document.removeEventListener('keydown', obsluzKlawisze)
}

const obsluzKlawisze = (e) => {
  if (!powiekszonyObraz.value || !selectedProjekt.value?.galeria?.length) return
  const galeria = selectedProjekt.value.galeria

  if (e.key === 'Escape') {
    zamknijLightbox()
  } else if (e.key === 'ArrowRight') {
    aktualnyIndex.value = (aktualnyIndex.value + 1) % galeria.length
    powiekszonyObraz.value = galeria[aktualnyIndex.value]
  } else if (e.key === 'ArrowLeft') {
    aktualnyIndex.value = (aktualnyIndex.value - 1 + galeria.length) % galeria.length
    powiekszonyObraz.value = galeria[aktualnyIndex.value]
  }
}

onBeforeUnmount(() => {
  document.removeEventListener('keydown', obsluzKlawisze)
})

// Scroll blokada
watch(isModalOpen, (now) => {
  document.body.style.overflow = now ? 'hidden' : 'auto'
})

const projekty = [
  {
    nazwa: 'magdakazula.pl',
    opis: 'Responsywna strona dla fotografa, Vue + Tailwind, galeria zdjęć i formularz kontaktowy.',
    pelnyOpis: {
      wstep: `Strona internetowa przygotowana dla profesjonalnej fotografki Magdy Kazuli to elegancka i nowoczesna witryna, która w przejrzysty sposób prezentuje jej twórczość oraz ofertę. Projekt został stworzony z myślą o estetyce, prostocie i intuicyjnym poruszaniu się użytkownika.`,
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
    nazwa: 'muyzka.mateuszmanaj.pl',
    galeria: [
      '/Immages/zrzut4.png',
      '/Immages/zrzut5.png',
      '/Immages/zrzut6.png',
      '/Immages/zrzut7.png',
    ],
    opis: 'Strona portfolio z responsywnym UI.',
    pelnyOpis: {
      wstep: `Strona prezentująca twórczość perkusisty – zawiera ścieżki audio z nagraniami, wideo z występami (z wbudowanymi odtwarzaczami) oraz szczegółowe opisy dotyczące artysty, jego stylu gry i doświadczenia. Projekt skupia się na czytelnej prezentacji treści multimedialnych i podkreśleniu muzycznego charakteru strony.

`,
    },
    link: ' https://muzyka.mateuszmanaj.pl/',
    tech: ['Vue', 'Tailwind', 'JavaScript', 'PWA'],
    github: 'https://bitbucket.org/arkadiusz-korzeniowski/mateuszstronka/src/main/'
  },
  {
    nazwa: 'Kalculator',
    opis: 'Prosty kalkulator stworzony w JavaScript, HTML i Tailwind CSS.',
    pelnyOpis: {
      wstep: `Jest to mój pierwszy projekt z wykorzystaniem JavaScript oraz Html i  CSS. Po kilku miesiącach nauki postanowiłem stworzyć prosty kalkulator, który pozwala na wykonywanie podstawowych działań matematycznych. Projekt ten był dla mnie ważnym krokiem w nauce programowania, ponieważ pozwolił mi zrozumieć podstawy logiki programowania i manipulacji DOM.`,
      dlaczego: `The insurance company offers a transportation service...`,
      czegoSieNauczylem: `How to improve UX while working with complex business logic.`,
    },
    galeria: [
      '/Immages/kalk.png',

    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://mobility.example.com',
    github: 'https://github.com/Ar3eek/Calculator-Js'
  }
]

onMounted(() => {
  setTimeout(() => loading.value = false, 1500)
  AOS.init({ once: true, duration: 1000 })
})


</script>

<template>
  <section id="projekty" class="py-24 px-8  bg-[#0e0e0e] ">
    <div class="max-w-6xl mx-auto">
      <div>
        <h3 class="text-4xl font-bold text-center mb-[10px]">
          Wybierz project
        </h3>
        <p class="text-sm opacity-50 font-bold text-center mb-12" >
          Odwiedź mojego <span class="text-[#00e4c3]">
          <a href="https://github.com/Ar3eek">GitHuba</a></span> żeby zobaczyć więcej
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  " >

        <div
            v-for="projekt in projekty"
            :key="projekt.nazwa"
            class="flex flex-col justify-between bg-[#1a1a1a] text-white cursor-pointer p-8 rounded-2xl
         transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_4px_12px_rgba(0,228,195,0.10)]"

        >
          <div>
            <h4 class="text-2xl font-semibold mb-2">{{ projekt.nazwa }}</h4>
            <p class="mb-4 text-[0.9rem]">{{ projekt.opis }}</p>

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
  <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" @click.self="closeModal">
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
            class="rounded-lg shadow-lg h-48 object-cover cursor-pointer transition-transform hover:scale-105"
            :alt="`Zrzut ekranu ${index + 1}`" @click="otworzLightbox(img, index)" @keydown.escape="zamknijLightbox" @mousedown.self="zamknijLightbox"
        />
      </div>

      <!-- Wstęp -->
      <div class="mb-6">
        <h3 class="text-xl font-semibold mb-2">📌 Wstęp</h3>
        <p class="text-sm text-gray-300 whitespace-pre-line">{{ selectedProjekt.pelnyOpis?.wstep }}</p>
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

      <!-- Linki -->
      <div class="flex gap-4 p-6">
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
            class="bg-[#00e4c3] w-[50%] hover:bg-[#00f0b5] text-black text-center font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Repozytorium
        </a>
      </div>
    </div>
  </div>

  <!-- Lightbox -->
  <div
      v-if="powiekszonyObraz"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
      @click.self="zamknijLightbox"
  >
    <div class="relative max-w-5xl w-full px-4">
      <!-- Zamknięcie -->
      <button
          @click="zamknijLightbox"
          class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-[#00e4c3] z-10"
      >
        &times;
      </button>

      <!-- Nawigacja -->
      <button
          class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-[#00e4c3] z-10"
          @click.stop="obsluzKlawisze({ key: 'ArrowLeft' })"
      >
        ‹
      </button>
      <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-[#00e4c3] z-10"
          @click.stop="obsluzKlawisze({ key: 'ArrowRight' })"
      >
        ›
      </button>

      <!-- Obraz -->
      <img
          :src="powiekszonyObraz"
          alt="Powiększony zrzut ekranu"
          class="rounded-lg max-h-[90vh] mx-auto object-contain shadow-2xl transition"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
