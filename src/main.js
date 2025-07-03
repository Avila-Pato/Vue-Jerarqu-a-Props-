import './assets/main.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import { router } from './router/routes';

import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
    
theme: {
    preset: Aura, 
        options: {
            darkModeSelector: '.dark', // Clase que activará el dark mode
        },
}

 });
 app.use(router);
 app.mount('#app');

  // preset: Aura,
  //   options: {
  //       darkModeSelector: false || 'none', //Opcion po desactivar el modo oscuro
  //   }


