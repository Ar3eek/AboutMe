<script setup>
import {ref, onMounted} from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Nav from "../components/Nawigacja.vue"
import Footer from "../components/Stopka.vue";

const email = ref('')
const wiadomosc = ref('')
const loading = ref(true)

const projekty = [
  {
    nazwa: 'Magda Kazula Fotografia',
    opis: 'Responsywna strona portfolio dla fotografa, Vue + Tailwind, galeria zdjęć i formularz kontaktowy.',
    link: 'https://magdakazula.pl/'
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
  <div class="font-sans bg-[#0e0e0e] text-white  ">
    <Nav/>
    <section id="hero" class="h-[75vh]  flex  justify-center items-center text-center " data-aos="fade-up">
      <div class=" ">
        <div class="">
          <h2 class="text-[5.3rem]   ">
            <span class="text-white pr-[8px]">Frontend</span>
            <span class="text-[#00e4c3]">developer</span>
          </h2>
          <div class=" flex flex-col gap-y-[40px]">
            <p class="text-xl font-mono  tracking-[5px]">Hello World!</p>
            <p class="text-xl  text-center max-w-2xl">Witaj w moim świecie front-end developmentu, gdzie kreatywność spotyka się z funkcjonalnością,
              aby tworzyć wyjątkowe doświadczenia cyfrowe.</p>
          </div>
        </div>
        <div class="pt-[100px]">
          <router-link to="/Kontakt" class="p-3 border rounded-2xl hover:shadow-[0_0_15px_white] transition-shadow">Contact me</router-link>
        </div>
      </div>
    </section>


    <div class="relative w-full h-[160px] bg-gradient-to-r from-[#1f2937] to-[#0e0e0e] overflow-hidden shadow-lg group transition-all duration-500 dark:bg-black">

      <!-- CENTROWANA ZAWARTOŚĆ -->
      <div class="relative z-10 flex justify-around items-center h-full gap-x-16 px-4 text-white text-left">
        <!-- Blok 1 -->
        <div class="flex items-start">
          <div class="text-5xl font-extrabold text-purple-400 leading-tight w-10 flex-shrink-0">1</div>
          <div class="ml-4">
            <h3 class="text-xl font-bold">Interfejsy</h3>
            <p class="text-sm opacity-60">Tak przyjazny dla użytkownika, jak to tylko możliwe</p>
          </div>
        </div>

        <!-- Blok 2 -->
        <div class="flex items-start">
          <div class="text-5xl font-extrabold text-purple-400 leading-tight w-10 flex-shrink-0">2</div>
          <div class="ml-4">
            <h3 class="text-2xl font-bold">Strony Internetowe</h3>
            <p class="text-sm opacity-60">Łatwe w użyciu i przyjemny dla oka</p>
          </div>
        </div>

        <!-- Blok 3 -->
        <div class="flex items-start">
          <div class="text-5xl font-extrabold text-purple-400 leading-tight w-10 flex-shrink-0">3</div>
          <div class="ml-4">
            <h3 class="text-2xl font-bold">Wizualizacje</h3>
            <p class="text-sm opacity-60">Przejrzyste i transparentne</p>
          </div>
        </div>
      </div>

      <!-- Fala 1 (jasny turkus) -->
      <svg class="absolute bottom-[-30px] left-0 w-full h-[200px] animate-wave-blob transition-all duration-500 group-hover:opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#14f1c9" fill-opacity="0.25"
              d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224V320H0Z" />
      </svg>

      <!-- Fala 2 (średni teal, odwrócona) -->
      <svg class="absolute bottom-[-30px] left-0 w-full h-[200px] animate-wave-blob-alt scale-y-[-1] transition-all duration-500 group-hover:opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#0dbfa7" fill-opacity="0.2"
              d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224V320H0Z" />
      </svg>

      <!-- Fala 3 (ciemniejszy morski z delayem) -->
      <svg class="absolute bottom-[-30px] left-0 w-full h-[200px] animate-wave-blob delay-1000 transition-all duration-500 group-hover:opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#089e8d" fill-opacity="0.3"
              d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224V320H0Z" />
      </svg>
    </div>



    <!-- Umiejętności
    <section class="py-24 px-6 bg-[#121212] text-center" data-aos="fade-up">
      <h3 class="text-4xl font-bold mb-8">Technologie</h3>
      <div class="flex justify-center flex-wrap gap-10 text-5xl text-[#00e4c3]">
        <i class="devicon-vuejs-plain "></i>
        <i class="devicon-tailwindcss-plain"></i>
        <i class="devicon-javascript-plain"></i>
        <i class="devicon-git-plain"></i>
      </div>
    </section> --->

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
    <Footer/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
@keyframes wave-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
</style>
