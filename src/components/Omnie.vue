<script setup>
const technologies = [
  { name: 'HTML + CSS', duration: '1 rok, 6 miesięcy' },
  { name: 'JavaScript', duration: '1 rok, 6 miesięcy' },
  { name: 'Vue', duration: '1 rok, 6 miesięcy' },
  { name: 'GSAP', duration: '1 rok, 3 miesięcy' },
  { name: 'Tailwind', duration: '1 rok, 4 miesięcy' },
];
const newTechnologies = [
  { name: 'React', duration: '4 miesięce' },
  { name: 'TypeScript', duration: '4 miesięce' },
  { name: 'Next.js', duration: '4 miesięce' },
];
const skills = [
  'HTML5',
  'JavaScript',
  'CSS',
  'RWD',
  'Tailwind',
  'Gsap',
  'Vue 3',
  'Vuex',
  'Vite',
  'Figma',
  'ClearCode',
  'GitHub',
  'AOS.js',
  'LightBox',
  'Play Guitar',
];
</script>

<template>
  <div class="  flex flex-col justify-center items-center text-white p-6 space-y-8" >
    <div class="relative w-[200px] xl:w-[1400px] rounded-[50px] overflow-hidden bg-[#0f172a] p-6 flex items-center gap-4 z-10">
      <!-- Tło: fale -->
      <div class="absolute inset-0 z-0">
        <!-- Fala 1 -->
        <svg class="absolute bottom-[-30px] left-0 w-full h-[200px] animate-wave-blob transition-all duration-200 opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#14f1c9" fill-opacity="0.25"
                d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224V320H0Z" />
        </svg>

        <!-- Fala 2 -->
        <svg class="absolute bottom-[-30px] left-0 w-full h-[200px] animate-wave-blob-alt scale-y-[-1] transition-all duration-200 opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0dbfa7" fill-opacity="0.2"
                d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224V320H0Z" />
        </svg>

        <!-- Fala 3 -->
        <svg class="absolute bottom-[-30px] left-0 w-full h-[200px] animate-wave-blob delay-1000 transition-all duration-200 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#089e8d" fill-opacity="0.3"
                d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,128C840,128,960,192,1080,218.7C1200,245,1320,235,1380,229.3L1440,224V320H0Z" />
        </svg>
      </div>

      <!-- Treść: zdjęcie + tekst -->
      <img
          src="/Immages/jaaa.jpeg"
          alt="Avatar"
          class="w-[110px] h-[110px] rounded-full object-cover  relative z-10"
      />
      <div class="relative z-10">
        <h1 class="text-2xl font-bold text-white">Arek</h1>
        <p class="text-purple-200">Frontend Developer</p>
        <p class="text-sm text-white/70">Koduję od 1 roku i 9 miesięcy</p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-center gap-10" data-aos="fade-up">
      <div class="bg-slate-800 p-8 rounded-xl shadow w-full md:w-[420px]">
        <h2 class="text-[1.4rem] font-semibold text-white mb-6">Umiejętności</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div
              v-for="skill in skills"
              :key="skill"
              class="bg-slate-700 text-[#0AD1c8] font-medium px-4 py-2 rounded-md text-center"
          >
            {{ skill }}
          </div>
        </div>
      </div>
      <div class="bg-slate-800 p-6 rounded-xl shadow w-full md:w-[420px] ">
        <h2 class="text-[1.4rem] font-semibold mb-4">O mnie</h2>
        <p class="text-[1rem] text-white/80 mb-2 " >
          Cześć, Nazywam się Arek! <br><br> Programowanie towarzyszy mi od wielu lat — nie jako chwilowe hobby, ale jako prawdziwa pasja, która codziennie napędza mnie do działania.
          Od samego początku fascynowało mnie tworzenie czegoś od zera,
          rozwiązywanie złożonych problemów i dążenie do perfekcji w kodzie.
        </p>
        <p class="text-[1rem] text-white/70 mb-2 ">
          Jestem osobą wytrwałą i konsekwentną – jeśli stawiam sobie cel, dążę do niego aż do skutku. Każde wyzwanie traktuję jako szansę na rozwój.
          Uwielbiam uczyć się nowych technologii, eksperymentować z rozwiązaniami i dbać o detale — zarówno w warstwie wizualnej, jak i architekturze aplikacji.
        </p>
        <p class="text-[1rem] text-white/70 mb-2  ">
          Front-end to dla mnie nie tylko kod – to połączenie precyzji, estetyki i wydajności.
          Staram się tworzyć interfejsy, które nie tylko dobrze wyglądają, ale przede wszystkim działają płynnie i są intuicyjne dla użytkownika.
        </p>
      </div>
      <div class="bg-slate-800 p-6 rounded-xl shadow w-full md:w-[420px]">
        <h2 class="text-[1.4rem] font-semibold mb-4 text-white">Koduję od:</h2>
        <div class="grid grid-cols-2 gap-3">
          <div
              v-for="item in technologies"
              :key="item.name"
              class="bg-slate-700 text-[#0AD1c8] font-medium px-4 py-2 rounded-md text-center"
          >
            <p>{{ item.name }}</p>
            <p class="text-sm text-white/70">{{ item.duration }}</p>
          </div>
        </div>
        <h2 class="text-[1.4rem] font-semibold my-4 text-white">Uczę się:</h2>
        <div class="grid grid-cols-2 gap-3">
          <div
              v-for="item in newTechnologies"
              :key="item.name"
              class="bg-slate-700 text-[#0AD1c8] font-medium px-4 py-2 rounded-md text-center"
          >
            <p>{{ item.name }}</p>
            <p class="text-sm text-white/70">{{ item.duration }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
