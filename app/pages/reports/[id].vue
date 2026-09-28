<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path.replace(/\/$/, ''), () => {
  return queryCollection('reports').path(route.path).first();
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
    type="report"
    breadcrumb-url="/reports"
    breadcrumb-text="← All reports"
  />
</template>
