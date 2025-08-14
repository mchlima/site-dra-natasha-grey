<template>
  <!-- section contact -->
  <section id="contact" class="w-full bg-background-alt">
    <div class="container mx-auto max-w-7xl px-8 py-24">
      <h3 class="text-2xl font-bold mb-8 text-accent text-center">Sorria com confiança: faça seu agendamento</h3>
      <div class="flex flex-col md:flex-row md:justify-center gap-8">
        <div class="flex flex-col gap-4 justify-between w-full">
          <a href="#" class="bg-background gap-4 rounded-lg p-8 flex justify-between">
            <ClientOnly>
              <Icon class="w-16 h-16" name="mdi:whatsapp" />
            </ClientOnly>
            <div class="flex flex-col justify-between">
              <h3 class="text-accent text-xl font-bold">WhatsApp</h3>
              <p class="text-lg">+55 (11) 99999-9999</p>
            </div>
          </a>

          <a href="#" class="bg-background gap-4 rounded-lg p-8 flex justify-between">
            <ClientOnly>
              <Icon class="w-16 h-16" name="mdi:phone" />
            </ClientOnly>
            <div class="flex flex-col justify-between">
              <h3 class="text-accent text-xl font-bold">Telefone</h3>
              <p class="text-lg">+55 (11) 99999-9999</p>
            </div>
          </a>

          <a href="#" class="bg-background gap-4 rounded-lg p-8 flex justify-between">
            <ClientOnly>
              <Icon class="w-16 h-16" name="mdi:email-fast-outline" />
            </ClientOnly>
            <div class="flex flex-col justify-between">
              <h3 class="text-accent text-xl font-bold">E-mail</h3>
              <p class="text-lg">contato@site.com.br</p>
            </div>
          </a>
        </div>

        <div class="bg-background rounded-lg p-8 w-full">
          <p class="mb-4">Se preferir, deixe sua mensagem e nós entramos em contato com você.</p>
          <form class="flex flex-col gap-4" @submit.prevent>
            <div class="flex flex-col gap-4">
              <input type="text" placeholder="Nome" class="bg-white border-2 border-gray-300 rounded-lg p-2">
              <input type="text" placeholder="WhatsApp" class="bg-white border-2 border-gray-300 rounded-lg p-2">
            </div>
            <textarea placeholder="Mensagem" class="bg-white border-2 border-gray-300 rounded-lg p-2"></textarea>
            <button type="submit" class="bg-secondary rounded-lg p-2 text-background uppercase">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- /section contact -->
</template>