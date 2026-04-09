<script setup lang="ts">
import { ref } from 'vue'
import Story from '@/components/Story.vue'
import { FormControl } from 'frappe-ui'

const checked = ref(false)
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story title="Checkbox">
      <FormControl type="checkbox" label="Accept terms and conditions" v-model="checked" />
    </Story>
  </div>
</template>
