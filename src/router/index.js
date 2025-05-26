import { createRouter, createWebHistory } from '@ionic/vue-router';
import { getAuth } from 'firebase/auth';



const routes = [
  {
    path: '/',
    redirect: '/login'  // Redirige a /login al inicio
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue')  // Lazy load del Login
  },
  {
    path: '/tabs/',
    component: () => import('@/views/TabsPage.vue'),  // Lazy load de TabsPage
    meta: { requiresAuth: true },  // Protege esta ruta
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  // Redirige rutas desconocidas a /login
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Guardia de navegación para verificar autenticación
router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;

  if (requiresAuth && !isAuthenticated) {
    // Si la ruta requiere autenticación y el usuario no está logueado
    next('/login');
  } else if (to.path === '/login' && isAuthenticated) {
    // Si el usuario ya está logueado y trata de entrar a /login, lo redirige a tabs
    next('/tabs/tab1');
  } else {
    // En cualquier otro caso, permite la navegación
    next();
  }
});

export default router;