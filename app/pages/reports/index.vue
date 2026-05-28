<script setup>
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('reports')
    .select('path', 'title', 'description', 'authors', 'date', 'category')
    .order('date', 'DESC')
    .all()
);
</script>

<template>
  <div class="container">
    <h1 class="page-title">Reports</h1>
    <p>
      Detailed investigations. Living documents. Taxonomies. Reference materials. Our reports help Open Source folks do
      better work and design better policies and institutions.
    </p>
    <hr>
  </div>
  <PostList :posts="posts" />
</template>
