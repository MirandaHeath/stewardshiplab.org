<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(route.path).first();
});
if (!post.value) {
  throw createError({
    status: 404,
    statusText: 'Page Not Found',
  });
}
</script>

<template>
  <Post
    :post="post"
    type="page"
  />
</template>
