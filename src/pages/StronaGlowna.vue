<script setup>
import {ref, onMounted} from 'vue'

import Nav from "../components/Nawigacja.vue"
import Footer from "../components/Stopka.vue";
import MiddleBar from "../components/MiddleBar.vue";
import ProjektBar from "../components/ProjektBar.vue";
import AOS from 'aos'
import BottomBar from "../components/BottomBar.vue";


const fullText = 'Hello World!';
const char = ref(''); // tylko jedna litera
let index = 0;

onMounted(() => {
  const interval = setInterval(() => {
    char.value += fullText[index]; // ← dodajemy kolejną literę
    index++;

    if (index >= fullText.length) {
      clearInterval(interval); // zatrzymujemy, jak skończymy
    }
  }, 100); // zmień na 50–150ms w zależności od szybkości efektu
});

onMounted(() => {
  setTimeout(() => loading.value = false, 1500)
  AOS.init({ once: true, duration: 1000 })
})

</script>
<template>
  <div class="font-sans bg-[#0e0e0e] text-white  ">
    <Nav/>
    <section id="hero" class="h-[75vh] relative flex  justify-center items-center text-center " data-aos="fade-up">
      <div class=" ">
        <div class="" >
          <h2 class="text-[2rem] md:text-[5.3rem] flex-wrap ">
            <span class="text-white pr-[8px]">Frontend</span>
            <span class="text-[#00e4c3]">developer</span>
          </h2>
          <div class=" flex flex-col flex-wrap gap-y-[40px]" >
            <p  class=" text-[1rem] md:text-xl font-mono  tracking-[5px]">{{char}}</p>
            <p class=" text-[0.98rem] md:text-xl  text-center font-sans max-w-2xl">Witaj w moim świecie front-end developmentu, gdzie kreatywność łączy się z funkcjonalnością,
              tworząc wyjątkowe cyfrowe doświadczenia</p>
          </div>
        </div>
        <div class="pt-[50px]">
          <router-link to="/Kontakt" class="p-3 border rounded-2xl hover:shadow-[0_0_15px_white] transition-shadow">Contact me</router-link>
        </div>
      </div>
    </section>
    <MiddleBar class="mb-[200px]"/>
    <ProjektBar />
    <BottomBar class="pt-[200px]"/>
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
