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
                          <modal-messages :buttonName="'Open task'" message="Work in progress"/>
                          <modal-messages :buttonName="'Move task'" message="Work in progress" class="mt-2"/>
                        </v-col>
                    </v-row>

                </v-list-item>
            </v-list>
          </v-card>
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

    return {dummyItems, openProgressDialog}
  }
});
</script>
