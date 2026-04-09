<script setup lang="ts">
import { ref } from 'vue'
import Story from '@/components/Story.vue'
import { FormControl } from 'frappe-ui'

const value = ref(null)
const options = [
  { label: 'Option One', value: '1' },
  { label: 'Option Two', value: '2' },
  { label: 'Option Three', value: '3' },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story title="Select">
      <FormControl type="select" label="Label" :options="options" v-model="value" />
    </Story>
  </div>
</template>
