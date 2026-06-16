<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('reports').path(route.path).first();
});
</script>

<template>
  <Post
    :post="post"
    type="report"
    breadcrumb-url="/reports"
    breadcrumb-text="← All reports"
  />
</template>
