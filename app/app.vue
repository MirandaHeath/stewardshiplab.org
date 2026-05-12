<script setup lang="ts">
const description = 'A non-profit applied research lab dedicated to ensuring the stability of the Open Source ecosystem we all rely on.'

useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
  ],
})

useSeoMeta({
  title: 'Software Stewardship Lab',
  description,
  ogTitle: 'Software Stewardship Lab',
  ogDescription: description,
  ogDeterminer: 'the',
  ogType: 'website',
  ogSiteName: 'Software Stewardship Lab',
  ogImage: 'https://stewardshiplab.org/images/og.png',
})
</script>

<template>
  <NuxtPage />
</template>
