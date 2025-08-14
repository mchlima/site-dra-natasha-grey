<template>
  <!-- section results -->
  <section id="avaliacoes" class="w-full bg-background-alt">
    <div class="container mx-auto max-w-7xl px-8 xl:px-0 py-24">
      <h3 class="text-2xl font-bold mb-8 text-accent text-center">Sorrisos que Contam Histórias</h3>
      <p class="mb-32 text-center">
        Cada paciente vive uma experiência única. Veja as avaliações e depoimentos de quem já confiou seu sorriso ao
        cuidado da Dra. Natasha Grey.
      </p>
      <div class="container flex flex-col gap-16 xl:flex-row xl:flex-wrap xl:justify-around">
        <div v-for="review in reviews.reviews" :key="review.publishTime"
          class="flex flex-col gap-4 xl:w-96 bg-background rounded-lg p-4">
          <div class="flex gap-4">
            <NuxtImg :src="review.authorAttribution.photoUri" :alt="review.authorAttribution.displayName" />
            <div>
              <ClientOnly>
                <Icon v-for="n in review.rating" :key="n" name="mdi:star" class="w-4 h-4 text-accent mr-1" />
              </ClientOnly>
              <p class="font-semibold">{{ review.authorAttribution.displayName }}</p>
              <p class="text-sm text-muted">{{ review.relativePublishTimeDescription }}</p>
            </div>
          </div>
          <p class="text-gray-700">{{ review.text.text }}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- /section results -->
</template>

<script setup>

const error = ref(false)
const loading = ref(true)
const reviews = ref({})

const getGooglePlaceReviews = async () => {
  const response = await fetch('https://places.googleapis.com/v1/places/ChIJYZK7yNZVzpQR-k1LwT01sAg', {
    headers: {
      'Content-Type': `application/json`,
      'X-Goog-Api-Key': `AIzaSyD8y_baosxcwbmYkNUuv5MmRa2kIxRGikc`,
      'X-Goog-FieldMask': `id,displayName,rating,reviews,reviewSummary`,
    }
  })
  return response.json()
}

onMounted(async () => {
  try {
    reviews.value = await getGooglePlaceReviews()
  } catch (error) {
    error.value = true
    console.error('Error fetching reviews:', error)
  } finally {
    loading.value = false
  }

})

</script>