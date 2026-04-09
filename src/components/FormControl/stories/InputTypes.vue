<script setup lang="ts">
import { ref } from 'vue'
import Story from '@/components/Story.vue'
import { FormControl } from 'frappe-ui'

const inputValue = ref('')
const inputTypes = ['text', 'number', 'email', 'password', 'date', 'search']
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story v-for="inputType in inputTypes" :key="inputType" :title="inputType">
      <FormControl :type="inputType" label="Label" placeholder="Enter input..." v-model="inputValue" />
    </Story>
  </div>
</template>
