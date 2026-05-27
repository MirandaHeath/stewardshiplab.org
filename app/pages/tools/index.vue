<script setup>
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('tools')
    .select('path', 'title', 'description', 'authors', 'date')
    .order('date', 'DESC')
    .all()
);
</script>

<template>
  <div class="container">
    <h1 class="page-title">Tools</h1>
    <p>
      Lab members build tools that help Open Source developers better navigate complex software ecosystems. Find them
      below.
    </p>
    <hr>
  </div>
  <PostList :posts="posts" />
</template>
