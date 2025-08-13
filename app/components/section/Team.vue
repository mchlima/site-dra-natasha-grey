<template>
  <!-- section team -->
  <section id="team" class="w-full">
    <div class="container mx-auto px-8 py-24">
      <h3 class="text-2xl font-bold mb-8 text-accent text-center">Sorria com confiança: conheça nossa equipe de
        especialistas</h3>
      <p class="mb-8 text-center">
        Nossa equipe de dentistas reúne profissionais altamente qualificados e apaixonados por transformar sorrisos.
        Cada membro combina experiência, cuidado e tecnologia de ponta para oferecer um atendimento personalizado,
        seguro e acolhedor. Aqui, você não encontra apenas dentistas — encontra parceiros dedicados à saúde e à
        estética do seu sorriso.
      </p>
      <div class="flex justify-center xl:justify-center">
        <div class="flex flex-col gap-8 md:flex-row md:justify-between md:w-full">
          <div class="relative rounded-lg overflow-hidden w-full">
            <NuxtImg src="/images/team-member-1.webp" alt="Dr. Rafael Costa" class="w-full" />
            <div class="absolute bottom-0 h-fit w-full text-background text-center py-8">
              <h3 class="text-accent font-bold text-xl">Dr. Rafael Costa</h3>
              <h4>Cirurgião Dentista</h4>
              <span class="text-muted">CROSP 12345</span>
            </div>

            <!-- <p>
                Especialista em odontologia estética, o Dr. Rafael é apaixonado por transformar sorrisos de forma
                natural e harmoniosa. Com mais de 10 anos de experiência, alia técnicas modernas a um atendimento
                acolhedor, garantindo resultados que elevam a autoestima dos pacientes.
              </p> -->
          </div>

          <div class="relative rounded-lg overflow-hidden w-full">
            <NuxtImg src="/images/team-member-2.webp" alt="Dra. Camila Martins" class="w-full" />
            <div class="absolute bottom-0 h-fit w-full text-background text-center py-8">
              <h3 class="text-accent font-bold text-xl">Dra. Camila Martins</h3>
              <h4>Cirurgiã Dentista</h4>
              <span class="text-muted">CROSP 12345</span>
            </div>
            <!-- <p>
                Focado em implantodontia e reabilitação oral, o Dr. Rafael é reconhecido pela precisão e atenção aos
                detalhes. Sua abordagem cuidadosa e o uso de tecnologia de ponta asseguram tratamentos confortáveis e
                eficazes, sempre priorizando a saúde bucal a longo prazo.
              </p> -->
          </div>

          <div class="relative rounded-lg overflow-hidden w-full">
            <NuxtImg src="/images/team-member-3.webp" alt="Dr. Mario Alves" class="w-full" />
            <div class="absolute bottom-0 h-fit w-full text-background text-center py-8">
              <h3 class="text-accent font-bold text-xl">Dr. Mario Alves</h3>
              <h4>Cirurgião Dentista</h4>
              <span class="text-muted">CROSP 12345</span>
            </div>
            <!-- <p>
                Especialista em ortodontia, a Dra. Camila se dedica a proporcionar sorrisos alinhados e funcionais para
                todas as idades. Com um atendimento humanizado, explica cada etapa do tratamento de forma clara,
                garantindo tranquilidade e confiança a seus pacientes.
              </p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /section team -->
</template>

<style scoped>
#team>div>div>div>div>div {
  background: linear-gradient(180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 80%);
}
</style>