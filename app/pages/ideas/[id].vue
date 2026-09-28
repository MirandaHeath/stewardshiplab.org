<script setup>
const route = useRoute();
const { data: post } = await useAsyncData(route.path.replace(/\/$/, ''), () => {
  return $fetch(`/api/pages${route.path.replace(/\/$/, '')}`).catch(() => null);
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
    type="idea"
    breadcrumb-url="/ideas"
    breadcrumb-text="← All ideas"
  />
</template>
