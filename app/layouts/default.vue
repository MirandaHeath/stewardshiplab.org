<template>
  <header>
    <div class="container container--narrow">
      <div class="visually-hidden">
        Software Stewardship Lab
      </div>
      <a href="/">
        <Logo width="240" height="51" />
      </a>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <div class="container">
    <footer>
      <div class="footer-socials">
        <a
          href="https://bsky.app/profile/stewardshiplab.org"
          class="bluesky-flutter"
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
          >
            <defs>
              <path
                id="wing"
                fill="#1c35bc"
                d="M 123.244 35.008 C 188.248 83.809 283.836 176.879 283.836 235.857 C 283.836 316.899 283.879 235.845 283.836 376.038 C 283.889 375.995 282.67 376.544 280.212 383.758 C 266.806 423.111 214.487 576.685 94.841 453.913 C 31.843 389.269 61.013 324.625 175.682 305.108 C 110.08 316.274 36.332 297.827 16.093 225.504 C 10.271 204.699 0.343 76.56 0.343 59.246 C 0.343 -27.451 76.342 -0.206 123.244 35.008 Z"
              />
            </defs>
            <use
              xlink:href="#wing"
              class="left"
            />
            <use
              xlink:href="#wing"
              class="right"
            />
          </svg>
        </a>
        <a
          href="https://fosstodon.org/@stewardshiplab"
          target="_blank"
        >
          <IconMastodon width="28" height="28" />
        </a>
        <a
          href="https://discord.gg/2GNQHcKmcH"
          target="_blank"
        >
          <IconDiscord width="28" height="28" />
        </a>
      </div>
      <div class="footer-starset">
        <Starset width="160" height="42" />
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import Logo from '~/assets/images/logo.svg'
  import Starset from '~/assets/images/starset.svg'
  import IconMastodon from '~/assets/images/icons/mastodon.svg'
  import IconDiscord from '~/assets/images/icons/discord.svg'
</script>
