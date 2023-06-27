<template>
  <div class="text-center"> 
    <v-dialog v-model="openProgressDialog" width="auto" >
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" block variant="outlined">
          {{buttonName}}
        </v-btn>
      </template>

      <v-card>
        <v-card-text> 
          {{message}}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="openProgressDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ModalMessages',
  props: {
    message: String,
    buttonName: String
  },
  setup () {
    let openProgressDialog = ref<boolean>(false)
    return {openProgressDialog}
  }
});
</script>
