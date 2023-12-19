<template>
  <section class="grid app">
    <LayoutSidebar />
    <div><slot /></div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.app {
  min-height: 100vh;
}
.grid {
  display: grid;
  grid-template-columns: 2fr 6fr;
}
</style>
