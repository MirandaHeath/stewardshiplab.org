<template>
  <div>
    <NuxtRouteAnnouncer />
    <Nav />
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Software Stewardship Lab',
  ogTitle: 'Software Stewardship Lab',
  description:
    'A non-profit research lab dedicated to ensuring the stability of the global Open Source ecosystem we all rely on.',
  ogDescription:
    'A non-profit research lab dedicated to ensuring the stability of the global Open Source ecosystem we all rely on.',
});
</script>
