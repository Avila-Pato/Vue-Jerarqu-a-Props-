<!-- src/components/Card.vue -->
 <!-- HIJO  -->
<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img :src="imageUrl" alt="Imagen" width="100%" />
    </template>
    <template #title>{{ title }}</template>
    <template #subtitle>{{ subtitle }}</template>
    <template #content>
      <p class="m-0">
        {{ msg }}
      </p>
    </template>
    <template #footer>
      <div class="btn-card">
        <Button label="Save" class="w-full" />
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import Button from 'primevue/button'
import Card from 'primevue/card'

defineProps({
  imageUrl: String,
  title: String,
  subtitle: String,
  msg: String
})
</script>

<style scoped>
.btn-card {
  display: flex;
  justify-content: space-between;
}
</style>
