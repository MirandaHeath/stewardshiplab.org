<script setup lang="ts">
import Logo from '~/assets/images/logo.svg'
import IconBluesky from '../components/IconBluesky.vue'
import IconMastodon from '~/assets/images/icons/mastodon.svg'
import IconDiscord from '~/assets/images/icons/discord.svg'
import IconList from '~/assets/images/icons/phosphor/list.svg'
import IconCaretRightBold from '~/assets/images/icons/phosphor/caret-right-bold.svg'
import IconHandWaving from '~/assets/images/icons/phosphor/hand-waving.svg'

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
          <NuxtLink to="/" class="plain-link">
            <Logo width="240" height="51" />
          </NuxtLink>
        </div>
        <nav class="desktop-nav">
          <NuxtLink class="plain-link" to="/reports">
            Reports<IconCaretRightBold class="icon icon--s" />
          </NuxtLink>
          <NuxtLink class="plain-link" to="/tools">
            Tools<IconCaretRightBold class="icon icon--s" />
          </NuxtLink>
          <NuxtLink class="plain-link" to="/ideas">
            Ideas<IconCaretRightBold class="icon icon--s" />
          </NuxtLink>
          <!-- <NuxtLink class="plain-link" to="/stories"> -->
          <!--   Stories<IconCaretRightBold class="icon icon--s" /> -->
          <!-- </NuxtLink> -->
          <NuxtLink class="plain-link" to="/contact">
            <IconHandWaving class="icon" />
          </NuxtLink>
        </nav>
        <div class="mobile-nav-trigger">
          <button type="button" class="plain-button" @click="isNavOpen = !isNavOpen">
            <IconList width="28" height="28" />
          </button>
        </div>
        <nav class="mobile-nav" v-show="isNavOpen">
          <NuxtLink @click="isNavOpen = false" class="plain-link" to="/reports">
            <div class="mobile-nav__name">Reports</div><IconCaretRightBold class="icon icon--s" />
          </NuxtLink>
          <NuxtLink @click="isNavOpen = false" class="plain-link" to="/tools">
            <div class="mobile-nav__name">Tools</div><IconCaretRightBold class="icon icon--s" />
          </NuxtLink>
          <NuxtLink @click="isNavOpen = false" class="plain-link" to="/ideas">
            <div class="mobile-nav__name">Ideas</div><IconCaretRightBold class="icon icon--s" />
          </NuxtLink>
          <!-- <NuxtLink @click="isNavOpen = false" class="plain-link" to="/stories"> -->
          <!--   <div class="mobile-nav__name">Stories</div><IconCaretRightBold class="icon icon--s" /> -->
          <!-- </NuxtLink> -->
          <NuxtLink @click="isNavOpen = false" class="plain-link" to="/contact">
            <div class="mobile-nav__name">Contact<IconHandWaving class="icon icon--white" /></div>
            <IconCaretRightBold class="icon icon--s" />
          </NuxtLink>
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
            class="plain-link"
            target="_blank"
          >
            <IconBluesky />
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
    gap: 5px;
    @media (max-width: 800px) {
      display: none;
    }
    a {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      font-size: var(--font-size-s);
      line-height: var(--line-height-s);
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      font-weight: 500;
      color: var(--color-blue);
      border-radius: var(--border-radius-s);
      transition: background-color 200ms;
      .icon.icon--s {
        position: relative;
        top: 1px;
        margin-left: 1px;
        path {
          fill: var(--color-blue);
          stroke: var(--color-blue);
        }
      }
      &:hover {
        background: var(--color-beige-pale);
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
    .mobile-nav__name {
      display: flex;
      align-items: center;
      gap: 10px;
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
      .icon.icon--s {
        position: relative;
        top: 1px;
        margin-left: 1px;
        path {
          fill: white;
          stroke: white;
        }
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
    a svg {
      width: var(--icon-size-m);
      height: var(--icon-size-m);
    }
  }
}
</style>
