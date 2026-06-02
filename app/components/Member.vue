<script setup lang="ts">
import IconHandWaving from '~/assets/images/icons/phosphor/hand-waving.svg'

const props = defineProps(['name', 'title', 'imageUrl', 'url']);
</script>

<template>
  <div class="member">
    <div
      class="member__photo"
      :style="{ backgroundImage: `url(${imageUrl})` }"
      role="img"
      :aria-label="`A portrait of ${name}`"
    ></div>
    <div class="member__info">
      <div class="member__name">
        <strong>{{ name }}</strong>
        <a class="plain-link" :href="url">
          <IconHandWaving
            :aria-label="`Go to ${name}'s website`"
            class="icon icon--s icon--black"
          />
        </a>
      </div>
      <span>{{ title }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<style>
.member {
  --photo-size: 100px;
  display: flex;
  gap: 0px;
  @media (max-width: 900px) {
    --photo-size: 70px;
  }
  .member__photo {
    position: relative;
    left: 3px;
    aspect-ratio: 1 / 1;
    width: var(--photo-size);
    height: var(--photo-size);
    transform: rotate(-2deg);
    border-radius: var(--border-radius-s);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.15);
    &:before, &:after {
      content: '';
      position: absolute;
      height: 0;
      width: 0;
      border-left: 24px solid transparent;
      border-right: 24px solid transparent;
      border-bottom: 22px solid rgba(240, 240, 255, 0.5);
      border-radius: var(--border-radius-s);
    }
    &:before {
      top: -9px;
      left: -22px;
      transform: rotate(-45deg);
    }
    &:after {
      bottom: -9px;
      right: -22px;
      transform: rotate(135deg);
    }
  }
  .member__info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
    margin-left: -10px;
    /* regular padding + margin compensation + a bit more visual spacing */
    padding-left: calc(20px + 10px + 5px);;
    background: var(--color-beige);
    border-radius: var(--border-radius-s);
    color: var(--color-text);
    @media (max-width: 900px) {
      /* no need for the extra visual spacing on mobile */
      padding-left: calc(20px + 10px);
    }
    span {
      font-size: var(--font-size-xs);
      line-height: 1;
      color: var(--color-text-pale);
    }
    .member__name {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      strong {
        font-size: var(--font-size-m);
        line-height: 1;
      }
      a {
        position: relative;
        top: -2px;
        display: flex;
        align-items: center;
        &:hover {
          background-color: unset;
        }
      }
    }
    p {
      font-size: var(--font-size-xs);
      line-height: var(--line-height-xs);
      margin: 0;
      margin-top: 5px;
    }
  }
}
</style>
