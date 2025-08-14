<template>
  <section id="blog" class="w-full">
    <div class="container mx-auto max-w-7xl px-8 xl:px-0 py-24">
      <h3 class="text-2xl font-bold mb-8 text-accent text-center">"Clínica em Pauta" – Artigos e dicas direto da Dra.
        Natasha Grey.</h3>
      <div class="container flex flex-col gap-4 items-center md:justify-around flex-wrap">
        <div v-for="post in posts" :key="post.id" class="border border-gray-200 rounded-lg overflow-hidden md:max-w-72">
          <NuxtImg :src="post.thumbnail" :alt="post.title" class="aspect-4/3 object-cover" />
          <div class="p-4 flex flex-col gap-4">
            <h4 class="text-lg text-accent font-semibold ">{{ post.title }}</h4>
            <p>{{ post.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    thumbnail: "/images/blog-cuidado-bucal.jpg",
    title: "Sorriso Perfeito: O Guia Completo de Cuidados Dentários",
    description: "Descubra as melhores práticas para manter um sorriso saudável e bonito durante toda a vida."
  },
  {
    id: 1,
    thumbnail: "/images/blog-clareamento-dental.jpg",
    title: "Clareamento Dental: Mitos e Verdades",
    description: "Entenda o que realmente funciona e o que é apenas mito sobre o clareamento dos dentes."
  },
  {
    id: 1,
    thumbnail: "/images/blog-implante-dentario.jpg",
    title: "Implantes Dentários: Quando Vale a Pena?",
    description: "Saiba quando os implantes são a melhor solução e como eles podem transformar seu sorriso."
  },
  {
    id: 1,
    thumbnail: "/images/blog-odontologia-estetica.jpg",
    title: "Odontologia Estética: Mais do que Beleza",
    description: "Veja como a estética dental também melhora a saúde e a autoestima do paciente."
  },
])
</script>