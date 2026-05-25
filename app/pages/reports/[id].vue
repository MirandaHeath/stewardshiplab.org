<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('reports').path(route.path).first()
);
</script>

<template>
  <Post
    :post="post"
    type="report"
    breadcrumbUrl="/reports"
    breadcrumbText="← All reports"
  />
</template>
