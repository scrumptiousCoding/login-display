<template>
    <div v-for="(item, index) in errors" :key="index" class="mb-2"><v-alert closable :text="item.message" :type="item.type" density="compact"></v-alert></div>
</template>

<script lang="ts">
import { useGeneralStore } from '@/store/index'
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SystemMessages',
  setup() {
    const store = useGeneralStore();
    let errors:  any = ref(store.systemMessages);
    return {
        errors
    }
  }
});
</script>
