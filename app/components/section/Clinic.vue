<template>
  <!-- section clinic -->
  <section id="clinic" class="clinic container-fluid">
    <div class="container">
      <h2>Nossa Clínica, Seu Sorriso</h2>




      <div class="container">

        <p>
          Somos uma Clínica Odontológica Multidisciplinar em São Paulo com mais de 20 anos de experiência. Nosso
          compromisso é trabalhar harmoniosamente com o seu sorriso e rosto, objetivando a reabilitação orofacial em
          sua totalidade, ou seja, promovendo saúde, função e estética de forma satisfatória. Para isso, contamos com
          uma equipe especializada, capacitada e experiente nas mais diversas áreas da prática odontológica.
        </p>

        <div>
          <ClientOnly>
            <swiper-container ref="containerRef">
              <swiper-slide>
                <NuxtImg src="/images/clinica1.jpg" alt="recepção" />
              </swiper-slide>

              <swiper-slide>
                <NuxtImg src="/images/clinica3.jpg" alt="sala espera" />
              </swiper-slide>

              <swiper-slide>
                <NuxtImg src="/images/clinica2.jpg" alt="consultório" />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>




        <!-- <div class="clinic-card">
          <h3>Recepção</h3>
          <NuxtImg src="/images/clinica1.webp" alt="recepção" width="380" />
          <h4>Um sorriso para receber você</h4>
          <p>Nossa equipe está pronta para oferecer um atendimento rápido e atencioso desde o primeiro momento.</p>
        </div>

        <div class="clinic-card">
          <h3>Sala de espera</h3>
          <NuxtImg src="/images/clinica3.webp" alt="sala espera" width="380" />
          <h4>Conforto enquanto aguarda</h4>
          <p>Um ambiente tranquilo, climatizado e preparado para que seu tempo aqui seja agradável.</p>
        </div>

        <div class="clinic-card">
          <h3>Consultório</h3>
          <NuxtImg src="/images/clinica2.webp" alt="consultório" width="380" />
          <h4>Cuidado e atenção nos detalhes</h4>
          <p>Espaço moderno e equipado para garantir um atendimento seguro e de qualidade.</p>
        </div> -->
      </div>

      <div>
        <button @click="swiper.prev()">
          Prev
        </button>

        <button @click="swiper.next()">
          Next
        </button>
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