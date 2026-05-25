<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('tools').path(route.path).first()
);
</script>

<template>
  <Post
    :post="post"
    type="tool"
    breadcrumbUrl="/tools"
    breadcrumbText="← All tools"
  />
</template>
