<script setup lang="ts">
import Story from '@/components/Story.vue'
import { FormControl, Avatar } from 'frappe-ui'
import LucideSearch from '~icons/lucide/search'
import LucideMail from '~icons/lucide/mail'
</script>

<template>
  <div class="grid grid-cols-2 gap-5 p-5">
    <Story title="Prefix icon">
      <FormControl type="text" label="Label" placeholder="Search...">
        <template #prefix>
          <LucideSearch class="size-4" />
        </template>
      </FormControl>
    </Story>
    <Story title="Suffix icon">
      <FormControl type="text" label="Label" placeholder="Enter email...">
        <template #suffix>
          <LucideMail class="size-4" />
        </template>
      </FormControl>
    </Story>
    <Story title="Prefix avatar">
      <FormControl type="text" label="Label" placeholder="Enter name...">
        <template #prefix>
          <Avatar size="sm" image="https://avatars.githubusercontent.com/u/499550?s=60&v=4" />
        </template>
      </FormControl>
    </Story>
  </div>
</template>
