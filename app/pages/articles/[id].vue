<script setup>
const route = useRoute();
const { data: article } = await useAsyncData(route.path, () =>
  queryCollection('articles').path(route.path).first()
);
</script>

<template>
  <div class="container">
    <ContentRenderer :value="article" class="prose" />
  </div>
</template>
