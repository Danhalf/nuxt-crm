<script lang="ts" setup></script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full w-full relative">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.png" class="mx-auto" width="100px" />
    </NuxtLink>

    <UIButton
      class="absolute text-2xl rounded-full top-2 right-3 transition-colors hover:text-secondary"
    >
      <Icon name="line-md:logout" />
      for commmit
    </UIButton>
  </aside>
</template>
