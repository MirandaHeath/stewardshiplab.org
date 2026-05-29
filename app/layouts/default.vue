<script setup lang="ts">
import Logo from '~/assets/images/logo.svg'
import Starset from '~/assets/images/starset.svg'
import IconMastodon from '~/assets/images/icons/mastodon.svg'
import IconDiscord from '~/assets/images/icons/discord.svg'
import IconList from '~/assets/images/icons/list.svg'

const isNavOpen = ref(false);
</script>

<template>
  <header>
    <div class="container container--narrow">
      <div class="header-container">
        <div class="header-logo">
          <div class="visually-hidden">
            Software Stewardship Lab
          </div>
          <a href="/" class="plain-link">
            <Logo width="240" height="51" />
          </a>
        </div>
        <nav class="desktop-nav">
          <NuxtLink class="plain-link" to="/reports">Reports</NuxtLink>
          <NuxtLink class="plain-link" to="/tools">Tools</NuxtLink>
          <NuxtLink class="plain-link" to="/ideas">Ideas</NuxtLink>
        </nav>
        <div class="mobile-nav-trigger">
          <button type="button" class="plain-button" @click="isNavOpen = !isNavOpen">
            <IconList width="28" height="28" />
          </button>
        </div>
        <nav class="mobile-nav" v-show="isNavOpen">
          <NuxtLink @click="isNavOpen = false" class="plain-link" to="/reports">Reports</NuxtLink>
          <NuxtLink @click="isNavOpen = false" class="plain-link" to="/tools">Tools</NuxtLink>
          <NuxtLink @click="isNavOpen = false" class="plain-link" to="/ideas">Ideas</NuxtLink>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <div class="container">
      <div class="footer-items">
        <div class="footer-links">
          <strong class="smcp">Resources</strong>
          <a href="https://codeberg.org/stewardshiplab/stewardshiplab.org" target="_blank">Website Source</a>
        </div>
        <div class="footer-socials">
          <a
            href="https://bsky.app/profile/stewardshiplab.org"
            class="bluesky-flutter plain-link"
            target="_blank"
          >
            <svg
              role="img"
              aria-label="The Bluesky logo"
              width="28"
              height="28"
              viewBox="0 0 566 500"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ><defs><path id="wing" fill="#1c35bc" d="M 123.244 35.008 C 188.248 83.809 283.836 176.879 283.836 235.857 C 283.836 316.899 283.879 235.845 283.836 376.038 C 283.889 375.995 282.67 376.544 280.212 383.758 C 266.806 423.111 214.487 576.685 94.841 453.913 C 31.843 389.269 61.013 324.625 175.682 305.108 C 110.08 316.274 36.332 297.827 16.093 225.504 C 10.271 204.699 0.343 76.56 0.343 59.246 C 0.343 -27.451 76.342 -0.206 123.244 35.008 Z" /></defs><use xlink:href="#wing" class="left" /><use xlink:href="#wing" class="right" /></svg>
          </a>
          <a
            href="https://fosstodon.org/@stewardshiplab"
            target="_blank"
            class="plain-link"
          >
            <IconMastodon width="28" height="28" />
          </a>
          <a
            href="https://discord.gg/2GNQHcKmcH"
            target="_blank"
            class="plain-link"
          >
            <IconDiscord width="28" height="28" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
header {
  --header-height: 72px;
  position: relative;
  border-bottom: 1px solid var(--color-beige-pale);
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    min-height: var(--header-height);
    padding: 10px 0;
  }
  .header-logo {
    a {
      display: block;
      img, svg {
        width: 240px;
        height: auto;
      }
    }
  }
  nav.desktop-nav {
    display: flex;
    gap: 20px;
    @media (max-width: 800px) {
      display: none;
    }
    a {
      font-size: var(--font-size-s);
      line-height: var(--line-height-s);
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      font-weight: 500;
      color: var(--color-blue);
      &:after {
        content: '→';
        margin-left: 5px;
        font-size: var(--font-size-xs);
        line-height: 1;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .mobile-nav-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 801px) {
      display: none;
    }
    button {
      padding: 10px;
    }
  }
  nav.mobile-nav {
    position: absolute;
    top: var(--header-height);
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--header-height));
    background: var(--color-blue);
    @media (min-width: 801px) {
      display: none;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      min-height: var(--header-height);
      padding: 15px 15px;
      border-bottom: 1px solid var(--color-blue-light);
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      font-weight: 500;
      line-height: 1;
      color: white;
      &:after {
        content: '→';
      }
    }
  }
}

main {
  margin: 40px 0;
}

footer {
  margin-top: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid var(--color-beige-pale);
  .footer-items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      .footer-links {
        text-align: center;
      }
    }
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    font-size: var(--font-size-xs);
    line-height: var(--font-size-xs);
  }
  .footer-socials {
    display: flex;
    gap: 20px;
  }
  .footer-starset {
    svg {
      width: 90px;
      height: auto;
    }
  }
}

/*
Bluesky flutter — https://flutterby.philhawksworth.dev/
SPDX-SnippetBegin
SPDX-License-Identifier: MIT
SPDX-SnippetCopyrightText: 2024 Phil Hawksworth
*/
.bluesky-flutter svg {
  transition: 200ms;
}
.bluesky-flutter .left {
  transform-origin: center;
}
.bluesky-flutter .right {
  transform-origin: center;
  transform: scale(-1, 1);
}
.bluesky-flutter:hover .left, .bluesky-flutter:focus .left {
  animation: flutter 430ms ease-in-out;
  --flip: 1;
}
.bluesky-flutter:hover .right, .bluesky-flutter:focus .right {
  animation: flutter 500ms ease-in-out;
  --flip: -1;
}
.bluesky-flutter:hover svg, .bluesky-flutter:focus svg {
  transform: rotate(-5deg);
  transition: 500ms;
}

@media (prefers-reduced-motion) {
  .bluesky-flutter:hover .left,
  .bluesky-flutter:focus .left,
  .bluesky-flutter:hover .right,
  .bluesky-flutter:focus .right {
    animation: none;
  }
}

@keyframes flutter {
  10% { transform: scale(calc(var(--flip)*1), 0.9); }
  20% { transform: scale(calc(var(--flip)*0.5), 1); }
  40% { transform: scale(calc(var(--flip)*0.9), 0.95); }
  60% { transform: scale(calc(var(--flip)*0.3), 1); }
  80% { transform: scale(calc(var(--flip)*0.9), 0.95); }
  100% { transform: scale(calc(var(--flip)*1), 1); }
}
/* SPDX-SnippetEnd */
</style>
