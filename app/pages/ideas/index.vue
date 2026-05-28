<script setup>
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('ideas')
    .select('path', 'title', 'description', 'authors', 'date', 'category')
    .order('date', 'DESC')
    .all()
);
</script>

<template>
  <div class="container">
    <h1 class="page-title">Ideas</h1>
    <p>
      We regularly write about Open Source governance and burnout, software supply chains, package management, funding
      and metrics, and other topics in Open Source sustainability.
    </p>
    <hr>
  </div>
  <PostList :posts="posts" />
</template>
