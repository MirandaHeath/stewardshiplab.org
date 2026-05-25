<script setup>
const route = useRoute();
const { data: articles } = await useAsyncData(route.path, () =>
  queryCollection('articles').all()
);
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="article in articles" :key="article.path">
        <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
