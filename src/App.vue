<template>
  <v-app>
    <v-main class="main-background">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data () {
    return {
      //
    }
  },
})
</script>

<style>
  .main-background{
    background-color: rgb(194, 194, 194);
  }
</style>