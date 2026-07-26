<script setup lang="ts">
const title = 'Software Stewardship Lab';
const description = 'A non-profit applied research lab ensuring the stability of the Open Source software ecosystem we all rely on.';

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
    { rel: 'preload', as: 'font', crossorigin: '', href: '/fonts/montreuil/Montreuil-Medium.woff2' },
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
