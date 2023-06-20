<template>
    <v-card style="height: 100vh; border-radius: 0;">
        <v-img
          height="100"
          src="https://picsum.photos/500"
          cover
          class="text-white"
        >
        </v-img>
      <h4 class="text-center">Welcome!</h4>
      <h5 class="text-center">{{user.username}}</h5>
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'NavigationBar',
  setup() {
    const store = useGeneralStore();
    let user: any = ref(store.userObj);
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
      goToLocation, menuItems, user
    }
  }
});
</script>
