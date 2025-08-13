<template>
  <!-- section results -->
  <section id="results" class="w-full bg-accent">
    <div
      class="container flex flex-col gap-16 md:flex-row md:justify-around mx-auto max-w-7xl px-8 xl:px-0 py-24 text-background">
      <div class="flex flex-col gap-4 items-center">
        <ClientOnly>
          <Icon name="mdi:medal" class="w-16 h-16" />
        </ClientOnly>
        <p class="text-7xl font-bold">+6</p>
        <p class="uppercase">anos de experiência</p>
      </div>
      <div class="flex flex-col gap-4 items-center">
        <ClientOnly>
          <Icon name="mdi:medical-bag" class="w-16 h-16" />
        </ClientOnly>
        <p class="text-7xl font-bold">+600</p>
        <p class="uppercase">procedimentos realizados</p>
      </div>

      <div class="flex flex-col gap-4 items-center">
        <ClientOnly>
          <Icon name="mdi:star" class="w-16 h-16" />
        </ClientOnly>
        <p class="text-7xl font-bold">99%</p>
        <p class="uppercase">de satisfação</p>
      </div>
    </div>
  </section>
  <!-- /section results -->
</template>