<script setup lang="ts">
defineProps(['posts']);
</script>

<template>
  <div class="container">
    <ul>
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
