<script setup lang="ts">
import Star from '~/assets/images/star.svg';
import { PEOPLE } from '../data/content.ts';

defineProps({
  post: Object,
});
</script>

<template>
  <NuxtLink class="post-list-item plain-link" :to="post.path">
    <h3>{{ post.title }}</h3>
    <Star class="post-list-item__star" v-if="post.featured" />
    <div class="post-list-item__meta">
      <div class="post-list-item__authors">
        <template v-if="post.authors">
          <div class="post-list-item__person" v-for="author in post.authors" :key="author">
            <img :src="PEOPLE[author].image" :alt="'A portrait of ' + PEOPLE[author].name">
            <span>{{ PEOPLE[author].name }}</span>
          </div>
        </template>
      </div>
      <div>{{ formatDate(post.date) }}</div>
    </div>
  </NuxtLink>
</template>

<style>
a.post-list-item {
  --person-image-size: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background: var(--color-beige-xpale);
  border-radius: var(--border-radius-s);
  border: 1px solid var(--color-beige-pale);
  text-decoration: none;
  transition: background-color 200ms, color 200ms;
  &:hover {
    background: var(--color-beige-pale);
    color: var(--color-text);
  }
  h3 {
    margin-bottom: 0;
    padding-right: 25px;
    font-size: var(--font-size-s);
    line-height: 20px;
  }
  .post-list-item__star {
    position: absolute;
    top: 17px;
    right: 15px;
    width: 15px;
    height: 15px;
    path {
      fill: var(--color-gold);
    }
  }
  .post-list-item__meta {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
    .post-list-item__authors {
      display: flex;
      gap: 15px;
      @media (max-width: 900px) {
        flex-direction: column;
        gap: 3px;
      }
      .post-list-item__person {
        display: flex;
        align-items: center;
        gap: 7px;
        img {
          width: var(--person-image-size);
          height: var(--person-image-size);
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
