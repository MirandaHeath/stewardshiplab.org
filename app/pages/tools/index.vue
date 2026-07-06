<script setup>
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('tools')
    .select('path', 'title', 'description', 'authors', 'date', 'category', 'featured', 'hidden')
    .order('date', 'DESC')
    .all();
});

const title = `Tools ✸ Software Stewardship Lab`;
const description = 'Lab members build tools that help Open Source developers better navigate complex software ecosystems. Find them here.';
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <div class="container">
    <h1 class="page-title">Tools</h1>
    <p>{{ description }}</p>
    <hr>
    <PostBrowser :posts="posts" />
  </div>
</template>
