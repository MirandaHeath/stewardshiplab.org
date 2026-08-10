<script setup lang="ts">
import IconCaretRightBold from '~/assets/images/icons/phosphor/caret-right-bold.svg';

const title = `Sponsor ✸ Software Stewardship Lab`;
const description = 'Support impactful applied Open Source research by sponsoring the Stewardship Lab.';
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <div class="container">
    <h1 class="page-title">Support impactful applied Open Source research</h1>
    <div class="sponsor-hero">
      <img alt="Daniel Roe speaking in front of a very large screen" src="/images/daniel-talk@1400px.webp">
    </div>
    <h2>Why sponsor the Stewardship Lab?</h2>
    <p>
      We do applied research to make the global Open Source ecosystem more sustainable. It's in your company's interest
      for this work to get done, since your revenue depends on the stability of the OSS you use.
    </p>
    <p>
      Our team makes sure critical Open Source software keeps working, by creating tools that prevent supply chain
      security issues, and by creating resources that improve project governance and maintainer mental health.
    </p>
    <blockquote class="blockquote--center">
      <p>
        “We need your support to get the sustainable long-term funding our researchers need to do their work without the
        precarity of short-term grants, and to pay for the computing that our work requires.”
      </p>
      <footer>
        <img
          src="/images/people/miranda@300px.webp"
          alt="A portrait of Miranda Heath"
          width="40"
          height="40"
        >
        <div>
          <div>Miranda Heath</div>
          <em>Non-Executive Director, Researcher</em>
        </div>
      </footer>
    </blockquote>
    <p>
      By contributing to this work, you're also helping protect the critical services that our society depends on, like
      healthcare, transportation and the internet.
    </p>
    <p>
      Our team of non-executive directors ensures that all funds
      are used for making progress towards our mission, and all our finances are transparently reported on Open
      Collective.
    </p>
    <h2>Why sponsor the Stewardship Lab?</h2>
    <div class="usps">
      <div class="usp">
        <h3>Tell us your research needs</h3>
        <hr>
        <p>
          Higher-tier sponsors have the ability to get regular updates on our research projects and suggest future
          research ideas.
        </p>
      </div>
      <div class="usp">
        <h3>Signal thought leadership</h3>
        <hr>
        <p>
          Give customers another reason to choose you over competitors. Prove you're a thought leader that sees issues
          in the ecosystem before they happen, and does something to help.
        </p>
      </div>
      <div class="usp">
        <h3>Attract prospective employees</h3>
        <hr>
        <p>
          We've seen it time and time again: developers care about joining companies that grok Open Source. Supporting
          sustainable stewardship is one way for you to attract the best talent.
        </p>
      </div>
    </div>
    <div class="sponsor-cta">
      <h3>Want to sponsor our work?</h3>
      <a
        class="button button--cta"
        href="https://opencollective.com/stewardshiplab"
        target="_blank"
      >
        Sponsor on Open Collective<IconCaretRightBold class="icon icon--l" />
      </a>
      <small>Full financials reported transparently on Open Collective.</small>
    </div>
    <hr>
    <h2>Sponsorship Tiers</h2>
    <div class="tiers">
      <SponsorshipTier name="Advising Patron" :price="90000">
        <ul>
          <li>
            A seat on our Funder Advisory Board
            <small>
              This substantial advisory role will allow your company to regularly meet with our directors
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Consulting Patron" :price="50000">
        <ul>
          <li>
            Participate in a quarterly call with our directors
            <small>
              This gives you an opportunity to make suggestions for our future research
            </small>
          </li>
          <li>
            10 hours of consultation sessions
            <small>
              Our researchers will help your team with any questions regarding engagement with Open Source, supply chain
              issues, and other areas we have expertise in
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Sustaining Patron" :price="20000">
        <ul>
          <li>
            A press release about your company's Open Source involvement
            <small>
              We will co-author and co-publish a press release highlighting what your company is doing for the Open
              Source community, and why you're an innovator in this space
            </small>
          </li>
          <li>
            Your logo on our research papers
            <small>
              We will feature your logo on all our self-published research papers (ie, excluding papers published in
              journals)
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Associate Patron" :price="10000">
        <ul>
          <li>
            Your logo on our website
            <small>
              We will display your logo on our list of sponsors
            </small>
          </li>
          <li>
            A <em>Software Stewardship Lab Patron</em> badge
            <small>
              Show off your support for Open Source sustainability by displaying this badge on your website and in
              marketing materials
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Supporting Patron">
        <ul>
          <li>
            Your name on our website
            <small>You will be permanently shown on our list of past sponsors</small>
          </li>
        </ul>
      </SponsorshipTier>
    </div>
    <div class="sponsor-cta">
      <h3>Want more details?</h3>
      <a
        class="button button--cta"
        href="/contact"
      >
        Contact & book a call<IconCaretRightBold class="icon icon--l" />
      </a>
    </div>
    <hr>
    <h2>Frequently asked questions</h2>
    <div class="faq-item">
      <h3>Is the Software Stewardship Lab registered as a non-profit?</h3>
      <hr class="hr--short">
      <div>
        <p>
          Yes. We are registered as a Scottish non-profit with company number
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/SC893294"
            target="_blank"
          >SC893294</a>.
          This means that we are legally required to use all funds received to further our mission.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>Are donations tax deductible?</h3>
      <hr class="hr--short">
      <div>
        <p>
          No. To be able to use our funds most efficiently, we made the choice to incorporate as a UK non-profit company
          limited by guarantee, which does not offer tax-exempt status.
        </p>
        <p>
          We plan to seek tax-exempt charity status moving forward, but we need your financial support to be able to
          bear the associated costs.
        </p>
        <p>
          So far, charity regulators have given limited or no recognition to Open Source causes. Our becoming a charity
          will help pave the way for future organisations to become Open Source charities.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>What payment methods are available?</h3>
      <hr class="hr--short">
      <div>
        <p>
          Our Open Collective page allows card payments and payments by bank transfer.
          If you need more information, or a different payment method,
          <a href="/contact">contact us</a>.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>Are donations from individuals welcome? Are one-time donations welcome?</h3>
      <hr class="hr--short">
      <div>
        <p>
          Yes! We are very grateful for donations from individuals, and for one-time donations. Every little bit helps
          us do our research. We'll be happy to feature your name in our “other sponsors” section.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>How long do benefits last?</h3>
      <hr class="hr--short">
      <div>
        <p>
          All benefits last while you have an active yearly sponsorship. There's one exception: one-time donations are
          permanently featured in our “other sponsors” section.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>Where are sponsors listed?</h3>
      <hr class="hr--short">
      <div>
        <p>
          Sponsors will be listed on our website shortly, on a page we're still setting up.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>Does the Lab unreservedly endorse the organisations that sponsor it?</h3>
      <hr class="hr--short">
      <div>
        <p>
          We accept contributions from a wide variety of organisations, and we aim to celebrate the good that they do.
          However, accepting a contribution from an organisation does not constitute endorsement of it, and certainly
          not endorsement of all its practices.
        </p>
        <p>
          We acknowledge that organisations may simultaneously carry out both socially harmful practices, which we may
          push back on in order to help the organisation do better; and socially beneficial practices, which we will
          celebrate.
        </p>
        <p>
          Even so, we reserve our right to refuse contributions from organisations that carry out egregiously socially
          harmful practices, such as widespread environmental destruction.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1.page-title {
  @media (max-width: 900px) {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
}
</style>

<style>
.sponsor-hero {
  img {
    border-radius: var(--border-radius-s);
  }
}
.usps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-block: 40px;
  .usp {
    position: relative;
    padding: 15px;
    border-radius: var(--border-radius-s);
    background:
      url(/images/star-for-bg.svg),
      var(--color-beige-xpale);
    background-repeat: no-repeat;
    background-position: 120% -15%;
    background-size: 110px 110px;
    h3 {
      font-family: var(--font-family-sans);
      font-size: var(--font-size-m);
      line-height: var(--line-height-m);
      font-weight: 500;
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      text-wrap: balance;
    }
    hr {
      max-width: 40px;
      margin: 10px 0;
      border-color: var(--color-blue);
      border-width: 3px;
    }
    p {
      font-size: var(--font-size-s);
      line-height: var(--line-height-s);
    }
  }
}
.sponsor-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-block: 50px;
  h3 {
    margin: 0;
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
  }
  small {
    color: var(--color-text-pale);
  }
}
.tiers {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-block: 30px;
  @media (max-width: 900px) {
    gap: 30px;
  }
}
.faq-item {
  margin-block: 30px;
  background: var(--color-beige-xpale);
  border-radius: var(--border-radius-s);
  padding: 15px;
  h3 {
    margin: 0;
    border-top-left-radius: var(--border-radius-s);
    border-top-right-radius: var(--border-radius-s);
    font-family: var(--font-family-sans);
    font-weight: 500;
    color: var(--color-text);
  }
  hr {
    max-width: 40px;
    margin: 10px 0;
    border-color: var(--color-blue);
    border-width: 3px;
  }
  & > div {
    padding: 5px 0;
  }
}
</style>
