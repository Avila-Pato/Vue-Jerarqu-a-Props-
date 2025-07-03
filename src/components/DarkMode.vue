<script setup>
import Button from 'primevue/button';
import { ref} from 'vue';

const isDarkMode = ref(false);
function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
    
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}


</script>

<template>
    <div>
 <Button 
    :label="isDarkMode ? 'Cambiar a Claro' : 'Cambiar a Oscuro'"
    :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"
    @click="toggleDarkMode()" 
     />
    </div>
</template>


<style lang="scss" scoped>

</style>