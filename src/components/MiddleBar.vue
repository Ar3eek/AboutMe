<script setup>

</script>

<template>
  <div class="relative w-full h-[160px] bg-gradient-to-r from-[#1f2937] opacity-70 to-[#0e0e0e] overflow-hidden shadow-lg  group transition-all duration-500 dark:bg-black ">

    <!-- CENTROWANA ZAWARTOŚĆ -->
    <div class="relative z-10 sm:flex flex-col sm:flex-row md:justify-evenly items-center h-full  gap-x-16 p-4  text-white text-left">
      <!-- Blok 1 -->
      <div class="flex items-center ">
        <div class="text-3xl md:text-5xl font-extrabold text-[#00e4c3] leading-tight w-10 flex-shrink-0">1</div>
        <div class="md:ml-4">
          <h3 class="text-[0.9rem] md:text-xl font-bold">Interfejsy</h3>
          <p class="text-[0.7rem] md:text-sm opacity-60">Tak przyjazne dla użytkownika, jak to tylko możliwe</p>
        </div>
      </div>

      <!-- Blok 2 -->
      <div class="flex items-center py-[10px] md:py-0">
        <div class="text-3xl md:text-5xl font-extrabold text-[#00e4c3] leading-tight w-10 flex-shrink-0">2</div>
        <div class="md:ml-4">
          <h3 class="text-[0.9rem] md:text-2xl font-bold">Strony Internetowe</h3>
          <p class="text-[0.7rem] md:text-sm opacity-60">Łatwe w użyciu i przyjemny dla oka</p>
        </div>
      </div>

      <!-- Blok 3 -->
      <div class="flex items-center">
        <div class="text-3xl md:text-5xl font-extrabold text-[#00e4c3] leading-tight w-10 flex-shrink-0">3</div>
        <div class="md:ml-4">
          <h3 class="text-[0.9rem] md:text-2xl font-bold">Wizualizacje</h3>
          <p class="text-[0.7rem] md:text-sm opacity-60">Przejrzyste i transparentne</p>
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
</template>

<style scoped>

</style>