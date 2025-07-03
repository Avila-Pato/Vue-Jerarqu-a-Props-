<script setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import {ref} from 'vue'

const text = ref('')
</script>

<template>
 <div class="card">
    <Button label="Desde otra sección" />
    <InputText v-model= "text" />
    {{text}}
  </div>
</template>

<style>

</style>