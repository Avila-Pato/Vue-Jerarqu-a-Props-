<!-- src/views/HomeView.vue (o donde estés mostrando los cards) -->
<template>
  <div
    style="
      display: grid;
      gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    "
  >
    <Mycard
      v-for="(item, index) in cards"
      :key="index"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :subtitle="item.subtitle"
      :msg="item.msg"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Mycard from '@/components/Card.vue'
import { cardsMock } from '@/mock/Cards'

const cards = ref(cardsMock)
</script>
