<script setup>
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('reports')
    .select('path', 'title', 'description', 'authors', 'date', 'category', 'featured')
    .order('date', 'DESC')
    .all()
);

const title = `Reports ✸ Software Stewardship Lab`;
const description = 'Detailed investigations. Living documents. Taxonomies. Reference materials. Our reports help Open Source folks do better work and design better policies and institutions.';
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <div class="container">
    <h1 class="page-title">Reports</h1>
    <p>{{ description }}</p>
    <hr>
    <PostBrowser :posts="posts" />
  </div>
</template>
