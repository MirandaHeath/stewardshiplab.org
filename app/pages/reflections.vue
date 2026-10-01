<script setup>
const title = `Reflections ✸ Software Stewardship Lab`;
const description = `We're organising a weekly call where we invite tech workers to reflect on the challenges they've been facing by asking them a simple question: “How are things going?`;
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
});
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <div class="reflections">
    <div class="page">
      <img src="/images/reflections-p1.webp" alt="The first page of the letter">
    </div>
    <div class="page">
      <a
        href="https://calendar.google.com/calendar/u/0?cid=Y2E2ZmZjYmU1YmQyMzg4YTE5OWMwZjU3YTkzNGY3N2RmNTgzMjliZWZjY2ZmN2E4YjRmZjUyOGZmOTUyOWVhOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
        target="_blank"
        class="link-area link-area--calendar"
      >Join Calendar</a>
      <a href="https://discord.gg/bw4PzpbuAf" target="_blank" class="link-area link-area--chat">Join Chat</a>
      <a href="https://vlad.website" target="_blank" class="link-area link-area--vlad">Vlad-Stefan Harbuz</a>
      <a href="https://mirandaheath.website" target="_blank" class="link-area link-area--miranda">Miranda Heath</a>
      <a href="https://stewardshiplab.org" target="_blank" class="link-area link-area--lab">Software Stewardship Lab</a>
      <a href="https://stewardshiplab.org" target="_blank" class="link-area link-area--star">Software Stewardship Lab</a>
      <img src="/images/reflections-p2.webp" alt="The second page of the letter">
    </div>
  </div>
  <div class="reflections-more container">
    <details>
      <summary>Click the objects above, or read the <span class="fakelink">accessible text</span>.</summary>
      <div class="reflections-text">
        <h1>Reflections on Tech</h1>
        <p>
          Hi,
        </p>
        <p>
          We're organising a weekly call where we invite tech workers to reflect on the challenges they've been facing by
          asking them a simple question:
        </p>
        <p class="question">
          “How are things going?”
        </p>
        <p>
          Why? It's a hard time for many folks in tech.
        </p>
        <p>
          It can be hard to find job security and meaningful work, and to deal with the stress and anxiety caused by the
          pressure to be more productive.
        </p>
        <p>
          LLMs are making some feel like their skills are worth less, that learning is becoming more difficult, that they're
          pressured to “keep up”, or that it's difficult to meaningfully connect with folks who increasingly use LLMs to
          communicate.
        </p>
        <p>
          Many people are saying that coding feels different than it used to, that they painfully miss how things used to
          be.
        </p>
        <p>
          The difficult feelings that arise from these problems are tough to put into words, let alone address, without the
          support of a community.
        </p>
        <p>
          We're working on building such a community, and figuring things out together as we go along.
        </p>
        <p>
          If you'd like to join us, we'd love to hear how things are going for you.
        </p>
        <div class="page-items">
          <a
            href="https://calendar.google.com/calendar/u/0?cid=Y2E2ZmZjYmU1YmQyMzg4YTE5OWMwZjU3YTkzNGY3N2RmNTgzMjliZWZjY2ZmN2E4YjRmZjUyOGZmOTUyOWVhOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
            class="button"
          >Join Calendar</a>
          <a href="https://discord.gg/bw4PzpbuAf" class="button">Join Chat</a>
        </div>
        <p>
          Feel free to share this invitation with potentially interested colleagues and friends, but please avoid posting it
          publicly.
        </p>
        <div class="signature">
          <div>
            <a href="https://vlad.website" target="_blank">Vlad-Stefan Harbuz</a>
            &amp;
            <a href="https://mirandaheath.website" target="_blank">Miranda Heath</a>
          </div>
          <div>
            <a href="https://stewardshiplab.org">Software Stewardship Lab</a>
          </div>
          <div>
            Oct 2026
          </div>
        </div>
      </div>
    </details>
  </div>
</template>

<style>
.reflections {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 100vh;
  margin: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 10px;
    gap: 10px;
  }
  .page {
    position: relative;
    img {
      min-width: 0;
      max-width: 1000px;
    }
    .link-area {
      display: block;
      position: absolute;
      font-size: 0px;
      text-indent: -99999px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 0px 10px 10px rgba(255, 255, 255, 0.5);
      opacity: 0;
      &:hover {
        opacity: 1;
      }
      &.link-area--calendar {
        top: 27%;
        left: 25%;
        width: 48%;
        height: 12%;
      }
      &.link-area--chat {
        top: 45%;
        left: 33%;
        width: 33%;
        height: 10%;
      }
      &.link-area--vlad {
        top: 80.5%;
        left: 50%;
        width: 35%;
        height: 4%;
      }
      &.link-area--miranda {
        top: 84.5%;
        left: 50%;
        width: 35%;
        height: 4%;
      }
      &.link-area--lab {
        top: 88%;
        left: 50%;
        width: 36%;
        height: 5%;
      }
      &.link-area--star {
        top: 87.5%;
        left: 37.5%;
        width: 7.5%;
        height: 6%;
        border-radius: 100%;
      }
    }
  }
}
.reflections-more {
  margin-block: 60px;
  details {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    summary {
      display: block;
    }
  }
  .reflections-text {
    margin-top: 20px;
    padding: 20px;
    border-radius: var(--border-radius-s);
    background: var(--color-beige-bright);
  }
  .question {
    text-align: center;
  }
  .signature {
    text-align: right;
    font-style: italic;
  }
}
</style>
