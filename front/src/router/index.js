import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Signup from '@/views/SignupView.vue';
import AllPosts from '@/views/AllPostsView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/news',
    name: 'News',
    component: AllPosts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;