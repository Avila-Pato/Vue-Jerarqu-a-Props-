<!-- src/views/HomeView.vue (o donde estés mostrando los cards) -->
 <!-- COMUNICAICON ENTRE PADRE A E HIJO -->
<template>
  <div>
    <div
      style="
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      "
    >
      <!-- Iterando Con for -->
       <!-- v-for recorrey un array de objectos cards y cada 1 crea una instancia de Mycard el hijo -->
        <!-- El padre controla el flujo de datos -->
         <!-- El componente hijo solo muesta o actua esos datos -->
      <Mycard
        v-for="(item, index) in cards"
        :key="index"
        :imageUrl="item.imageUrl"
        :title="item.title" 
        :subtitle="item.subtitle"
        :msg="item.msg"
      />
    </div>





    <div style="display: flex; justify-content: center; font-size: 3rem">
      Seccion map map ↓
    </div>
    <!-- Iterando Con map  -->
    <div
      style="
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      "
    >
      <div
        style="width: 25rem; overflow: hidden"
        v-for="(item, index) in mapNombres"
        :key="index"
      >
        <img :src="item.imageUrl" alt="Imagen" width="100%" />
        <p>{{ item.title }}</p>
        <p>{{ item.subtitle }}</p>
        <div>
          <p class="m-0">
            {{ item.msg }}
          </p>
        </div>
        <div class="btn-card">
          <Button label="Save" class="w-full" />
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Mycard from "@/components/Card.vue";
import { cardsMock } from "@/mock/Cards";
import Button from "primevue/button";

const mapNombres = cardsMock.map((usuario) => usuario);

const cards = ref(cardsMock);
</script>
