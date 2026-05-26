<script setup lang="ts">
import { formatDate } from '../utils/format.ts';

defineProps(['posts']);
</script>

<template>
  <div class="container">
    <div class="post-list">
      <div class="post-list-item" v-for="post in posts" :key="post.path">
        <NuxtLink class="post-list-item__link" :to="post.path">
          <h2>{{ post.title }}</h2>
          <div class="post-list-item__meta">
            <div class="post-list-item__person">
              <img v-if="post.authorImage" :src="post.authorImage" :alt="'A portrait of ' + post.author">
              <span>{{ post.author }}</span>
            </div>
            <div>
              {{ formatDate(post.date) }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.post-list {
  .post-list-item {
    margin: 15px 0;
    a.post-list-item__link {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 15px;
      background: var(--color-beige-xpale);
      border-radius: var(--border-radius-s);
      border: 1px solid var(--color-beige-pale);
      text-decoration: none;
      --person-image-size: 20px;
      &:after {
        display: none;
      }
      &:hover {
        background: var(--color-beige-pale);
        color: var(--color-text);
      }
      h2 {
        margin-bottom: 0;
        font-size: var(--font-size-m);
        line-height: var(--line-height-m);
      }
      .post-list-item__meta {
        display: flex;
        justify-content: space-between;
        font-size: var(--font-size-xs);
        line-height: var(--line-height-xs);
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
}
</style>
