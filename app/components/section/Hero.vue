<template>
  <!-- hero -->
  <section id="hero" class="w-full h-[calc(100vh-4rem)] relative">
    <NuxtImg src="/images/hero-bg.webp" fetch-priority="high" alt="Dra. Natasha Grey"
      class="absolute top-0 left-0 object-cover w-full h-full -z-10" />
    <div class="hero-overlay absolute top-0 left-0 object-cover w-full h-full -z-10"></div>

    <div class="container flex items-center max-w-7xl mx-auto h-full px-8">
      <div class="flex flex-col items-start gap-8 max-w-[600px]">
        <h2 class="text-4xl text-accent font-bold uppercase">Transformando Sorrisos, Transformando Vidas</h2>
        <p>Na clínica da Dra. Natasha, cada paciente é único. Aqui, você encontra mais do que tratamentos: encontra
          atenção, acolhimento e resultados que refletem o seu melhor.</p>
        <a href="#contact"
          class="py-4 px-6 bg-accent rounded-xl text-background-alt text-center font-bold text-xl">QUERO
          AGENDAR UMA
          CONSULTA</a>
      </div>
    </div>

  </section>
  <!-- /hero -->
</template>

<style scoped>
.hero-overlay {
  background: linear-gradient(270deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 1) 100%);
  opacity: 0.7;
}
</style>