import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('@/views/home/HomeView.vue');
const FeaturesView = () => import('@/views/features/FeaturesView.vue');
const ProjectsView = () => import('@/views/projects/ProjectsView.vue'); 
const ProjectsComponents = () => import('@/views/projects/components.vue'); 
const ProjectsBlocks = () => import('@/views/projects/blocks.vue'); 
const ContactView = () => import('@/views/contact/ContactView.vue');

export const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/features',
    component: FeaturesView,
   
  },

   {
    path: '/projects',
    component: ProjectsView,
      // Rutas hijas (sub-vistas)
    children: [  
      {
        path: 'components', 
        component: ProjectsComponents,
      },
      {
        path: 'blocks',    
        component: ProjectsBlocks,
      },
    ],
  },
  
  {
    path: '/contact',
    component: ContactView,
   
  },
 
 // Ruta por defecto si fallara la anterior
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});