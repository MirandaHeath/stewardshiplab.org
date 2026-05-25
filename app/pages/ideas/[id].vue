<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('ideas').path(route.path).first()
);
</script>

<template>
  <Post
    :post="post"
    type="idea"
    breadcrumbUrl="/ideas"
    breadcrumbText="← All ideas"
  />
</template>
