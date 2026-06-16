<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('ideas').path(route.path).first();
});
</script>

<template>
  <Post
    :post="post"
    type="idea"
    breadcrumb-url="/ideas"
    breadcrumb-text="← All ideas"
  />
</template>
