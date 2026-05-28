<script setup>
const props = defineProps(['posts']);

let categorised = ref(true);
</script>

<template>
  <div class="container">
    <div class="control-bar control-bar--right">
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
  </div>
  <PostList :posts="posts" :categorised="categorised" />
</template>
