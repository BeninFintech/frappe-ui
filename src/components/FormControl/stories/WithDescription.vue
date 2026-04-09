<script setup lang="ts">
import Story from '@/components/Story.vue'
import { FormControl } from 'frappe-ui'
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story title="Email with description">
      <FormControl label="Email" type="email" placeholder="Enter email..." description="We'll never share your email." />
    </Story>
    <Story title="Password with description">
      <FormControl label="Password" type="password" placeholder="Enter password..." description="Must be at least 8 characters." />
    </Story>
  </div>
</template>
