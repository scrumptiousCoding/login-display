import { shallowMount, mount } from '@vue/test-utils';
import { describe, expect, it} from '@jest/globals';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia'
import App from '../../src/App.vue';
import DashboardView from '@/views/adminViews/DashboardView.vue';

describe('Main Display', () => {
    it('Sanity test', () => {
      expect(true).toBe(true);
    });
    
    it('Main Display: renders via routing', async () => {
      //set up to be able to use the component/app for the rest of this test instance
      const router = createRouter({
        history: createWebHistory(),
        routes: [{
          path: '/home',
          name: 'dashboard',
          component: DashboardView
        }]
      })
      const pinia = createPinia();
      router.push('/home');
      //wait for router to initialize
      await router.isReady();
      const wrapper = mount(App, {
        global: {
          plugins: [router, pinia]
        }
      });

      // check that the component exsists
      expect(wrapper.findComponent(DashboardView).exists()).toBe(true)
    })
  });