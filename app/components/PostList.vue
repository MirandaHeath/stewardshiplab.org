<script setup lang="ts">
import { POST_CATEGORIES } from '../data/content.ts';

const props = defineProps({
  posts: Array,
  categorised: Boolean,
  featuredOnly: Boolean,
});

const postsByCategory = props.posts.reduce((cats, post) => {
  if (!(post.category in cats)) {
    cats[post.category] = [];
  }
  cats[post.category].push(post);
  return cats;
}, {});

const featuredPosts = props.posts.filter(post => post.featured);
</script>

<template>
  <div class="post-list">
    <template v-if="featuredOnly">
      <div class="post-list-item-container" v-for="post in featuredPosts" :key="post.path">
        <template v-if="!post.hidden">
          <PostListItem :post="post" />
        </template>
      </div>
    </template>
    <template v-if="!featuredOnly">
      <template v-if="categorised">
        <div class="post-list-category-set">
          <template v-for="category in Object.keys(POST_CATEGORIES)" :key="category">
            <div class="post-list-category" v-if="category in postsByCategory">
              <div class="post-list-category__details">
                <h2>{{ POST_CATEGORIES[category].name }}</h2>
                <p>{{ POST_CATEGORIES[category].description }}</p>
              </div>
              <div class="post-list-item-set">
                <div class="post-list-item-container" v-for="post in postsByCategory[category]" :key="post.path">
                  <template v-if="!post.hidden">
                    <PostListItem :post="post" />
                  </template>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-if="!categorised">
        <div class="post-list-item-container" v-for="post in posts" :key="post.path">
          <template v-if="!post.hidden">
            <PostListItem :post="post" />
          </template>
        </div>
      </template>
    </template>
  </div>
</template>

<style>
.post-list {
  .post-list-category-set {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
  .post-list-category {
    display: flex;
    gap: 45px;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 20px;
    }
    .post-list-category__details {
      flex-basis: 200px;
      @media (max-width: 900px) {
        flex-basis: unset;
        max-width: 280px;
        margin: 0 auto;
        text-align: center;
      }
      h2 {
        margin-bottom: 3px;
        font-size: var(--font-size-m);
        line-height: 20px;
        font-family: var(--font-family-sans);
        font-variant-caps: small-caps;
        font-feature-settings: "smcp";
        text-transform: lowercase;
      }
      p {
        margin-top: 0;
        font-size: var(--font-size-xs);
        line-height: var(--line-height-xs);
        color: var(--color-text-pale);
        text-wrap: balance;
      }
    }
    .post-list-item-set {
      flex-grow: 1;
    }
  }
  .post-list-item-container {
    margin: 10px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
