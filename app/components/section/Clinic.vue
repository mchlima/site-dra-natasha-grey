<template>
  <!-- section clinic -->
  <section id="clinic" class="clinic container-fluid">
    <NuxtImg preload src="/images/clinica3.jpg" alt="recepção" />
    <div class="container">
      <h2>Clínica Dra. Natasha Grey – Onde Cuidado e Conforto se Encontram</h2>
      <p>
        Um espaço moderno, aconchegante e equipado com tecnologia de ponta, pensado para tornar sua experiência única
        desde o primeiro atendimento.
      </p>

      <div class="clinic-photos container">
        <NuxtImg src="/images/clinica1.webp" alt="recepção" />
        <NuxtImg src="/images/clinica3.webp" alt="recepção" />
        <NuxtImg src="/images/clinica2.webp" alt="recepção" />
      </div>
    </div>
  </section>
  <!-- /section clinic -->
</template>

<script setup lang="ts">
// Create 10 slides
const containerRef = ref(null)
const swiper = useSwiper(containerRef)

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>