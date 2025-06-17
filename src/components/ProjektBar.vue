<script setup>
import {onMounted, ref} from "vue";
import AOS from 'aos'
import 'aos/dist/aos.css'

const email = ref('')
const wiadomosc = ref('')
const loading = ref(true)

const projekty = [
  {
    nazwa: 'Magda Kazula Fotografia',
    opis: 'Responsywna strona  dla fotografa, Vue + Tailwind, galeria zdjęć i formularz kontaktowy.',
    link: 'https://magdakazula.pl/',
    tech: ['Vue 3', 'Tailwind CSS', 'AOS.js', 'EmailJS', 'JavaScript', 'GSAP', 'LightBox'],
  },
  {
    nazwa: 'Mateusz Manaj Portfolio',
    opis: 'Strona portfolio z responsywnym UI.',
    link: 'https://github.com/twojlogin/3d-portfolio',
    tech: ['Vue', 'Tailwind', 'JavaScript']
  },
  {
    nazwa: 'Biznes w Obiektywie',
    opis: 'Blog techniczny z Markdown + VuePress + Tailwind.',
    link: 'https://github.com/twojlogin/blog-devlife',
    tech: ['CSS3', 'JavaScript', 'JavaScript']
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
          <!-- Górna część -->
          <div>
            <h4 class="text-2xl font-semibold mb-2">{{ projekt.nazwa }}</h4>
            <p class="mb-4">{{ projekt.opis }}</p>

            <!-- Techy -->
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

          <!-- Przycisk na dole, wyśrodkowany -->
          <div class="flex justify-center mt-auto pt-4">
            <a
                :href="projekt.link"
                target="_blank"
                class="bg-[#00e4c3] hover:bg-[#00f0b5] text-black font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              Zobacz więcej
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>

</style>