<script setup lang="ts">
import { ClientOnly } from '#components';

</script>

<template>
  <!-- section contact -->
  <section id="contact" class="contact container-fluid">
    <div class="container">
      <h2>Sorria com confiança: faça seu agendamento</h2>
      <div class="container">
        <div class="container contact-fast">
          <div class="contact-whatsapp">
            <a href="#" class="whatsapp-icon">
              <ClientOnly>
                <Icon class="icon" name="mdi:whatsapp" />
              </ClientOnly>
            </a>
            <div class="whatsapp-info">
              <h3>WhatsApp</h3>
              <p>+55 (11) 99999-9999</p>
            </div>
          </div>

          <div class="contact-phone">
            <a href="#" class="phone-icon">
              <ClientOnly>
                <Icon class="icon" name="mdi:phone" />
              </ClientOnly>
            </a>
            <div class="phone-info">
              <h3>Telefone</h3>
              <p>+55 (11) 99999-9999</p>
            </div>
          </div>

          <div class="contact-email">
            <a href="#" class="email-icon">
              <ClientOnly>
                <Icon class="icon" name="mdi:email-fast-outline" />
              </ClientOnly>
            </a>
            <div class="email-info">
              <h3>E-mail</h3>
              <p>contato@fake.com</p>
            </div>
          </div>
        </div>

        <div class="contact-form container">
          <p>Se preferir, deixe sua mensagem e nós entramos em contato com você.</p>
          <form>
            <div class="s">
              <input type="text" placeholder="Nome">
              <input type="text" placeholder="WhatsApp">
            </div>
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- /section contact -->
</template>