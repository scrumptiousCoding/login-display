<template>
  <div class="text-center">
    <v-dialog
      v-model="dialogOpen"
      width="auto"
    >
      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialogOpen = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ModalMessages',
  props: {dialogOpen: Boolean},
  setup(props) {
      console.log('props', props);
      
    //   defineProps<{
    //       dialogOpen: Boolean
    //   }>()
    // let isDialogOpen: any = ref(dialogOpen)
    // return {
    //     isDialogOpen
    // }
  }
});
</script>
