<script setup lang="ts">
const title = 'Software Stewardship Lab';
const description = 'A non-profit applied research lab dedicated to ensuring the stability of the Open Source ecosystem we all rely on.';

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
  ],
});

useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogSiteName: 'Software Stewardship Lab',
  ogImage: 'https://stewardshiplab.org/images/og/index.png',
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
