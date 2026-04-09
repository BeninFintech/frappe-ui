<script setup lang="ts">
import Story from '@/components/Story.vue'
import { FormControl } from 'frappe-ui'

const sizes = ['sm', 'md'] as const
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story v-for="size in sizes" :key="size" :title="size">
      <FormControl :size="size" label="Label" placeholder="Enter input..." />
    </Story>
  </div>
</template>
