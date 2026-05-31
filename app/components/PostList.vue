<script setup lang="ts">
import { formatDate } from '../utils/format.ts';
import { PEOPLE, POST_CATEGORIES } from '../data/content.ts';

const props = defineProps(['posts', 'categorised']);

const postsByCategory = props.posts.reduce((cats, post) => {
  if (!(post.category in cats)) {
    cats[post.category] = [];
  }
  cats[post.category].push(post);
  return cats;
}, {});
</script>

<template>
  <div class="container">
    <div class="post-list">
      <template v-if="categorised">
        <div class="post-list-category-set">
          <template v-for='category in Object.keys(POST_CATEGORIES)'>
            <div class="post-list-category" v-if='category in postsByCategory'>
              <div class="post-list-category__details">
                <h2>{{ POST_CATEGORIES[category].name }}</h2>
                <p>{{ POST_CATEGORIES[category].description }}</p>
              </div>
              <div class="post-list-item-set">
                <div class="post-list-item" v-for="post in postsByCategory[category]" :key="post.path">
                  <NuxtLink class="post-list-item__link plain-link" :to="post.path">
                    <h3>{{ post.title }}</h3>
                    <div class="post-list-item__meta">
                      <div class="post-list-item__authors">
                        <template v-if="post.authors">
                          <div class="post-list-item__person" v-for="author in post.authors">
                            <img :src="PEOPLE[author].image" :alt="'A portrait of ' + PEOPLE[author].name">
                            <span>{{ PEOPLE[author].name }}</span>
                          </div>
                        </template>
                      </div>
                      <div>{{ formatDate(post.date) }}</div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
      <template v-if="!categorised">
        <div class="post-list-item" v-for="post in posts" :key="post.path">
          <NuxtLink class="post-list-item__link plain-link" :to="post.path">
            <h3>{{ post.title }}</h3>
            <div class="post-list-item__meta">
              <div class="post-list-item__authors">
                <template v-if="post.authors">
                  <div class="post-list-item__person" v-for="author in post.authors">
                    <img :src="PEOPLE[author].image" :alt="'A portrait of ' + PEOPLE[author].name">
                    <span>{{ PEOPLE[author].name }}</span>
                  </div>
                </template>
              </div>
              <div>{{ formatDate(post.date) }}</div>
            </div>
          </NuxtLink>
        </div>
      </template>
    </div>
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
  .post-list-item {
    margin: 10px 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    a.post-list-item__link {
      --person-image-size: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 15px;
      background: var(--color-beige-xpale);
      border-radius: var(--border-radius-s);
      border: 1px solid var(--color-beige-pale);
      text-decoration: none;
      transition: background-color 200ms, color 200ms;
      &:after {
        display: none;
      }
      &:hover {
        background: var(--color-beige-pale);
        color: var(--color-text);
      }
      h3 {
        margin-bottom: 0;
        font-size: var(--font-size-s);
        line-height: 20px;
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
  }
}
</style>
