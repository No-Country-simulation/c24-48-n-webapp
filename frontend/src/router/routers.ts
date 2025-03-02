import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ScheduleView from '@/views/ScheduleView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ContactView from '@/views/ContactView.vue';
import AdoptView from '@/views/AdoptView.vue';
import DonationView from '@/views/DonationView.vue';
import AdminView from '@/views/AdminView.vue';
import AdoptersView from '@/views/AdoptersView.vue';
import AccountView from '@/views/AccountView.vue';
import LoginView from '@/views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: ScheduleView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/adopt',
    name: 'Adopt',
    component: AdoptView,
  },
  {
    path: '/donation',
    name: 'Donation',
    component: DonationView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  },
  {
    path: '/adopters',
    name: 'Adopters',
    component: AdoptersView,
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;