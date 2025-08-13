<template>
  <!-- section treatments -->
  <section id="treatments" class="w-full bg-background-alt">
    <div class="container mx-auto px-8 py-24 xl:px-0">
      <h3 class="text-2xl font-bold mb-8 text-accent text-center">Tratamentos Personalizados para o Seu Sorriso</h3>
      <p class="mb-8 text-center">
        Conheça nossos tratamentos e descubra como podemos cuidar do seu sorriso em todas as fases da vida.
      </p>
      <div
        class="flex flex-col md:mx-auto md:w-fit xl:flex-row xl:w-full rounded-t-lg rounded-b-lg overflow-hidden bg-background">
        <NuxtImg src="/images/tratamento-menina-1x1.webp" class="max-w-[500px]" alt="paciente em tratamento" />

        <ul class="flex flex-col gap-2 p-8 px-16 w-full justify-around">
          <li class="flex gap-2 items-center">
            <ClientOnly>
              <Icon class="w-8 h-8 text-green-700" name="mdi:check-decagram-outline" />
            </ClientOnly>
            Atendimento Emergencial
          </li>
          <li class="flex gap-2 items-center">
            <ClientOnly>
              <Icon class="w-8 h-8 text-green-700" name="mdi:check-decagram-outline" />
            </ClientOnly>
            Reabilitação Oral com Implantes
          </li>
          <li class="flex gap-2 items-center">
            <ClientOnly>
              <Icon class="w-8 h-8 text-green-700" name="mdi:check-decagram-outline" />
            </ClientOnly>
            Lentes de Contato e Clareamento
          </li>
          <li class="flex gap-2 items-center">
            <ClientOnly>
              <Icon class="w-8 h-8 text-green-700" name="mdi:check-decagram-outline" />
            </ClientOnly>
            Harmonização Facial
          </li>
          <li class="flex gap-2 items-center">
            <ClientOnly>
              <Icon class="w-8 h-8 text-green-700" name="mdi:check-decagram-outline" />
            </ClientOnly>
            Invisalign e Aparelhos
          </li>
          <li class="flex gap-2 items-center">
            <ClientOnly>
              <Icon class="w-8 h-8 text-green-700" name="mdi:check-decagram-outline" />
            </ClientOnly>
            Tratamento de ATM
          </li>
        </ul>

      </div>
    </div>
  </section>
  <!-- /section treatments -->
</template>