<template>
  <section>
    <div>{{ ref }}</div>
    <slot />
  </section>
</template>

<script lang="ts" setup>
const ref = 'dda';
</script>
