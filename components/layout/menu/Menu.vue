<script setup lang="ts">

import {MENU_DATA} from "~/components/layout/menu/menu.data";
</script>

<template>
  <div>
    <NuxtLink
        v-for="menuItem in MENU_DATA"
        :key="menuItem.name"
        :to="menuItem.url"
        class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-secondary hover:shadow transition-all mb-3">
      <Icon :name="menuItem.icon" class="mr-3"/>
      <span>
        {{ menuItem.name }}
      </span>
    </NuxtLink>
  </div>
</template>
