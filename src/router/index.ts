import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BaseView from '../views/BaseView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardView from '../views/adminViews/DashboardView.vue';
import DummyView from '../views/adminViews/DummyView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/base',
    name: 'base',
    component: BaseView,
    children:[
      {
        path: '/home',
        name: 'dashboard',
        component: DashboardView
      },
      {
        path: '/dummy',
        name: 'dummyView',
        component: DummyView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
