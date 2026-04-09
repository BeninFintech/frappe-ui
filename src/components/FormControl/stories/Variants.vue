<script setup lang="ts">
import Story from '@/components/Story.vue'
import { FormControl } from 'frappe-ui'

const variants = ['subtle', 'outline'] as const
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story v-for="variant in variants" :key="variant" :title="variant">
      <FormControl :variant="variant" label="Label" placeholder="Enter input..." />
    </Story>
  </div>
</template>
