import './assets/main.css';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css';
import { router } from './router/routes';
import ToastService from 'primevue/toastservice';
import { Toast } from 'primevue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Message from 'primevue/message';


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
 app.use(ToastService);
 
 
app.component('Toast', Toast);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Message', Message);

  // preset: Aura,
  //   options: {
  //       darkModeSelector: false || 'none', //Opcion po desactivar el modo oscuro
  //   }


