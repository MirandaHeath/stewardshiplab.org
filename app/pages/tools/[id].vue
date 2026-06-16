<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('tools').path(route.path).first();
});
</script>

<template>
  <Post
    :post="post"
    type="tool"
    breadcrumb-url="/tools"
    breadcrumb-text="← All tools"
  />
</template>
