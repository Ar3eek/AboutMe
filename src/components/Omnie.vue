<script setup>

</script>

<template>
  <div class="  flex flex-col justify-center items-center text-white p-6 space-y-8">
    <div class="relative w-[200px] xl:w-[1200px] rounded-[50px] overflow-hidden bg-[#0f172a] p-6 flex items-center gap-4 z-10">
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
          src="/Immages/myface.jpeg"
          alt="Avatar"
          class="w-[110px] h-[110px] rounded-full object-cover object-[0_-20px] relative z-10"
      />
      <div class="relative z-10">
        <h1 class="text-2xl font-bold text-white">Arek</h1>
        <p class="text-purple-200">Frontend Developer</p>
        <p class="text-sm text-white/70">Koduję od 1 roku i 9 miesięcy</p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-center gap-6">
      <div class="bg-slate-800 p-6 rounded-xl shadow w-full md:w-[380px]">
        <h2 class="text-lg font-semibold  mb-4">Umiejętności</h2>
        <div class=" flex-wrap grid grid-cols-2 gap-2">
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">HTML5</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">JavaScript</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">CSS</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">RWD</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">Tailwind</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">Gsap</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">Vue 3</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">Vuex</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">Vite</div>
          <div class="bg-[#0e494d] p-2 rounded-[10px] text-center ">Figma</div>
        </div>
      </div>
      <div class="bg-slate-800 p-6 rounded-xl shadow w-full md:w-[380px]">
        <h2 class="text-lg font-semibold mb-4">O mnie</h2>
        <p class="text-sm text-white/80 mb-2">
          Cześć! Nazywam się Arek. Od kilku lat codziennie programuję i rozwijam swoje umiejętności.
        </p>
        <p class="text-sm text-white/70">
          Moje doświadczenie w animacji 2D, fotografii i grafice przekłada się na unikalne podejście do front-endu.
        </p>
      </div>
      <div class="bg-slate-800 p-6 rounded-xl shadow w-full md:w-[380px]">
        <h2 class="text-lg font-semibold mb-4">Koduję od</h2>
        <div class="space-y-2">
          <div
              v-for="item in codingSince"
              :key="item.tech"
              class="bg-slate-700 p-3 rounded-lg"
          >
            <p class="font-medium text-white/90">{{ item.tech }}</p>
            <p class="text-sm text-white/60">{{ item.time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
