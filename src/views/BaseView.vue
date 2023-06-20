<template>
  <v-row >
    <v-col cols="2" class="pb-0" style=""><navigation-view /></v-col>
    <v-col cols="10" class="pt-2 pr-2"><router-view/></v-col>
  </v-row>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import NavigationView from '../components/NavigationBar.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavigationView
  },
});
</script>
