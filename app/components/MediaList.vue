<script setup lang="ts">
import { formatDate } from '../utils/format.ts';
import { PEOPLE, MEDIA_CATEGORIES } from '../data/content.ts';

const props = defineProps(['media']);

function makeBackground(imageUrl) {
  return `url(${imageUrl})`;
}
</script>

<template>
  <div class="container">
    <div class="media-list">
      <NuxtLink class="media-list-item plain-link" :to="item.url" v-for="item in media" :key="item.path">
        <div class="media-list-item__image" :style="{ backgroundImage: makeBackground(item.image) }"></div>
        <h3>{{ item.title }}</h3>
        <hr class="hr--short">
        <p>{{ item.description }}</p>
        <div class="media-list-item__people">
          <template v-if="item.guests">
            <div class="media-list-item__person" v-for="guest in item.guests">
              <img :src="PEOPLE[guest].image" :alt="'A portrait of ' + PEOPLE[guest].name">
              <span>{{ PEOPLE[guest].name }}</span>
            </div>
          </template>
          <template v-if="item.hosts">
            <div class="media-list-item__person" v-for="host in item.hosts">
              <img :src="PEOPLE[host].image" :alt="'A portrait of ' + PEOPLE[host].name">
              <span>{{ PEOPLE[host].name }}</span>
            </div>
          </template>
        </div>
        <div class="media-list-item__details">
          {{ item.venue }} &middot; {{ formatDate(item.date) }}
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.media-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 15px;
  margin: 1rem 0;
  @media (max-width: 900px) {
    gap: 20px;
  }
  a.media-list-item {
    --person-image-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    background: var(--color-beige-xpale);
    border-radius: var(--border-radius-s);
    border: 1px solid var(--color-beige-pale);
    text-decoration: none;
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
    transition: background-color 200ms, color 200ms;
    &:hover {
      background: var(--color-beige-pale);
      color: var(--color-text);
    }
    .media-list-item__image {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      padding: 10px;
      aspect-ratio: 16 / 9;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: var(--border-radius-s);
    }
    .media-list-item__details {
      color: var(--color-text-pale);
      line-height: 1;
    }
    h3 {
      margin: 0;
      font-size: var(--font-size-m);
      line-height: var(--line-height-m);
      text-wrap: balance;
      @media (max-width: 900px) {
        font-size: var(--font-size-l);
        line-height: var(--line-height-l);
      }
    }
    hr {
      margin: 0;
      border-color: var(--color-beige-pale);
    }
    p {
      flex: 1;
      margin: 0;
      margin-bottom: 10px;
    }
    .media-list-item__people {
      display: flex;
      flex-direction: column;
      gap: 5px;
      line-height: 15px;
      .media-list-item__person {
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
