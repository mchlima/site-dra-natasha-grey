<template>
  <!-- section clinic -->
  <section id="clinic" class="w-full relative">
    <NuxtImg fetch-priority="high" src="/images/clinica3.jpg" alt="sala de espera"
      class="absolute inset-0 -z-10 opacity-30 w-full h-full object-cover" />
    <div class="container mx-auto max-w-7xl px-8 xl:px-0 py-24">
      <h3 class="text-2xl font-bold mb-8 text-accent text-center">Clínica Dra. Natasha Grey</h3>
      <p class="mb-8 text-center">
        Um espaço moderno, aconchegante e equipado com tecnologia de ponta, pensado para tornar sua experiência única
        desde o primeiro atendimento.
      </p>
      <div class="flex flex-col lg:flex-row lg:justify-center md:items-center gap-8">
        <NuxtImg src="/images/clinica1.webp" alt="recepção" class="rounded-lg w-full" />
        <NuxtImg src="/images/clinica3.webp" alt="sala de espera" class="rounded-lg w-full" />
        <NuxtImg src="/images/clinica2.webp" alt="consultório" class="rounded-lg w-full" />
      </div>
    </div>
  </section>
  <!-- /section clinic -->
</template>