<script setup>
const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('ideas').all()
);
</script>

<template>
  <PostList :posts="posts" />
</template>
