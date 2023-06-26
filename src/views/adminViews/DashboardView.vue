<template>
  <v-row>
      <v-col class="mt-5 mr-5">
          <v-card>
            <v-list>
                <v-list-item
                    v-for="item in dummyItems"
                    :key="item.title">

                    <v-row>
                        <v-col cols="2" align="center">
                            <v-img :aspect-ratio="1" :src="item.imageUrl" width="200" cover></v-img>
                        </v-col>
                        <v-col cols="7">
                            {{item.dummyText}}
                        </v-col>
                        <v-col cols="3">
                            <v-btn block @click="inProgress()" color="primary" variant="outlined">Open task</v-btn>
                            <v-btn block class="mt-2" @click="inProgess()" color="primary" variant="outlined">Move task</v-btn>
                        </v-col>
                    </v-row>

                </v-list-item>
            </v-list>
          </v-card>

          <modal-messages :dialogOpen="openProgressDialog" />
      </v-col>
  </v-row>
  
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useGeneralStore } from '@/store/index';
import ModalMessages from "@/components/ModalMessages.vue";

// Components

export default defineComponent({
  name: 'DashboardView',
  components: {
    ModalMessages
  },
  setup(){ 
    const store = useGeneralStore();
    let dummyItems: any = ref([])
    let openProgressDialog: any = ref(false)
    store.setDummyList();
    dummyItems = store.dummyDisplay;

    function inProgress(){
        openProgressDialog = true
    }

    return {dummyItems, inProgress}
  }
});
</script>
