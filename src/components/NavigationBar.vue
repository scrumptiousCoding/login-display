<template>
    <v-card style="height: 100vh; border-radius: 0;">
      <v-list lines="one">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title">
          <a @click="goToLocation(item.url)">{{item.title}}</a>
        </v-list-item>
      </v-list>
    </v-card>
</template>

<script lang="ts">
import router from '@/router';
import { useGeneralStore } from '@/store/index'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationBar',
  setup() {
    const store = useGeneralStore();
    let menuItems = [
      {url: '/home', title: 'Home'},
      {url: '/dummy', title: 'Create Task'},
      {url: '/dummy', title: 'History'},
      {url: '/', title: 'Log out'}
    ]
    function goToLocation(path: string){
      if (path === '/') {
        store.logoutUser();
      }
      router.push({ path: path })
    }

    return {
      goToLocation, menuItems
    }
  }
});
</script>
