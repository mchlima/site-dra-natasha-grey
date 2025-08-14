<script setup>
import { ref } from 'vue'

const faqs = [
  {
    question: "A primeira consulta tem custo?",
    answer: "Sim, a primeira consulta inclui avaliação detalhada e exames iniciais, com valor informado no agendamento."
  },
  {
    question: "A clínica atende convênios?",
    answer: "Atendemos apenas particular, garantindo um atendimento mais personalizado."
  },
  {
    question: "O tratamento é doloroso?",
    answer: "Usamos técnicas modernas e anestesia local para seu conforto."
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "O tempo varia conforme a complexidade do caso, mas explicamos o cronograma já na primeira consulta."
  },
  {
    question: "Posso parcelar o tratamento?",
    answer: "Sim, oferecemos opções de parcelamento no cartão de crédito e outras formas de pagamento."
  }
]

const activeIndex = ref(null)

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="perguntas-frequentes" class="w-full bg-background-alt">
    <div class="container mx-auto max-w-7xl px-8 xl:px-0 py-24">
      <h3 class="text-2xl font-bold mb-8 text-accent text-center">Perguntas Frequentes</h3>
      <div class="container flex flex-col gap-4">
        <div v-for="(faq, index) in faqs" :key="index" class="border border-gray-200 rounded-lg overflow-hidden">
          <!-- Botão -->
          <button
            class="w-full flex justify-between items-center p-4 font-semibold text-left bg-background hover:bg-gray-50 transition"
            @click="toggleFaq(index)">
            {{ faq.question }}
            <span class="transform transition-transform duration-300" :class="{ 'rotate-45': activeIndex === index }">
              +
            </span>
          </button>

          <!-- Resposta -->
          <div class="transition-all duration-300 overflow-hidden bg-background" :style="{
            maxHeight: activeIndex === index ? '500px' : '0',
            opacity: activeIndex === index ? '1' : '0'
          }">
            <p class="p-4 text-gray-600">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
