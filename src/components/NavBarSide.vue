<template>
  <div class="card">
    <Menubar :model="items" class="custom-menu">
      <template #start>
        <darkMode v-model="isDarkMode" />
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Menubar from 'primevue/menubar';
import darkMode from '@/components/DarkMode.vue';

const router = useRouter();
const isDarkMode = ref(false);

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/') // command para mayor control
  },
  {
    label: 'Features',
    icon: 'pi pi-star',
    command: () => router.push('/features')
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [ 
      {
        label: 'Components',
        icon: 'pi pi-bolt',
        command: () => router.push('/projects/components')
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        command: () => router.push('/projects/blocks')
      }
    ]
  },

  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    command: () => router.push('/contact')
  }
]);
</script>

<style scoped>
.card {
  width: 100%;
  margin-bottom: 2rem;
}

.custom-menu {
  font-weight: lighter;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>