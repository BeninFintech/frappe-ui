<script setup lang="ts">
import Story from '@/components/Story.vue'
import { FormControl } from 'frappe-ui'
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story title="Textarea">
      <FormControl type="textarea" label="Label" placeholder="Write something..." />
    </Story>
  </div>
</template>
