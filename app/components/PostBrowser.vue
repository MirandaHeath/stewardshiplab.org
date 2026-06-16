<script setup lang="ts">
const props = defineProps({
  posts: Array,
});

const categorised = ref(true);

const featuredPosts = props.posts.filter(post => post.featured);
</script>

<template>
  <template v-if="featuredPosts.length > 0">
    <div class="fake-category">
      <h2>Featured Posts</h2>
      <PostList :posts="posts" :categorised="categorised" :featured-only="true" />
    </div>
    <hr>
  </template>
  <div class="control-bar">
    <h2>All Posts</h2>
    <div class="control-set">
      <button
        @click="categorised = false"
        class="button button--s"
        :class="{ 'button--active': !categorised }"
        type="button"
      >By date</button>
      <button
        @click="categorised = true"
        class="button button--s"
        :class="{ 'button--active': categorised }"
        type="button"
      >By category</button>
    </div>
  </div>
  <PostList :posts="posts" :categorised="categorised" />
</template>

<style scoped>
.control-bar {
  margin-bottom: 60px;
  @media (max-width: 900px) {
    margin-bottom: 40px;
  }
}
.fake-category {
  display: flex;
  gap: 45px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
  }
  h2 {
    flex-basis: 200px;
    @media (max-width: 900px) {
      flex-basis: unset;
      text-align: center;
    }
  }
  .post-list {
    flex: 1;
  }
}
</style>
