<script setup>
const route = useRoute();
const { data: articles } = await useAsyncData(route.path, () =>
  queryCollection('articles').all()
);
</script>

<template>
  <div class="container">
    <NuxtLink v-for="article in articles" :key="article.path" :to="article.path">
      <h2>{{ article.title }}</h2>
      <p>{{ article.description }}</p>
    </NuxtLink>
  </div>
</template>
