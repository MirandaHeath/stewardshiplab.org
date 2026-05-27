<script setup lang="ts">
import Starset from '~/assets/images/starset.svg'
import IconGlobe from '~/assets/images/icons/globe.svg'
import LogoAlphaOmega from '~/assets/images/logos/alphaomega.svg'
import LogoChaoss from '~/assets/images/logos/chaoss.svg'
import LogoCncf from '~/assets/images/logos/cncf.svg'
import LogoCycloneDx from '~/assets/images/logos/cyclonedx.svg'
import LogoEcosystems from '~/assets/images/logos/ecosystems.svg'
import LogoGatesFoundation from '~/assets/images/logos/gatesfoundation.svg'
import LogoGitHub from '~/assets/images/logos/github.svg'
import LogoIntel from '~/assets/images/logos/intel.svg'
import LogoLibrariesIo from '~/assets/images/logos/librariesio.svg'
import LogoLinuxFoundation from '~/assets/images/logos/linuxfoundation.svg'
import LogoNpmx from '~/assets/images/logos/npmx.svg'
import LogoNuxt from '~/assets/images/logos/nuxt.svg'
import LogoOpenSsf from '~/assets/images/logos/openssf.svg'
import LogoOse from '~/assets/images/logos/ose.svg'
import LogoOsp from '~/assets/images/logos/osp.svg'
import LogoThanksDev from '~/assets/images/logos/thanksdev.svg'
import LogoTidelift from '~/assets/images/logos/tidelift.svg'
import LogoVite from '~/assets/images/logos/vite.svg'
import LogoVmware from '~/assets/images/logos/vmware.svg'

useSeoMeta({
  ogDeterminer: 'the',
});

const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () =>
  Promise.all([
    queryCollection('tools').order('date', 'DESC').where('featured', '=', true).all(),
    queryCollection('reports').order('date', 'DESC').where('featured', '=', true).all(),
    queryCollection('ideas').order('date', 'DESC').where('featured', '=', true).all(),
  ]).then((results) =>
    results.flat()
  )
);
</script>

<template>
  <div class="container">
    <section>
      <div class="page-intro">
        A new non-profit applied research lab dedicated to ensuring the stability of the Open Source
        ecosystem we all rely on.
      </div>
      <h1 class="visually-hidden">Software Stewardship Lab</h1>
      <h2>
        Mission
      </h2>
      <p>
        We are a non-profit applied research lab that safeguards global tech infrastructure by caring for the Open
        Source technology it relies upon. We develop ways to make the Open Source ecosystem more secure, sustainably
        funded, and responsibly governed. We do this to benefit the public and protect critical services that depend
        on Open Source, like transportation, healthcare and the internet.
      </p>
      <h2>
        Strategy
      </h2>
      <p>
        Our team identifies threats to the global Open Source ecosystem and mitigates them by producing software,
        APIs, informal research reports, and peer-reviewed research papers. We work directly with maintainers to
        help them implement our solutions.
      </p>
      <p>
        Our work in increasing software supply chain transparency has enabled developers to understand the
        propagation of vulnerabilities, and to identify critical maintainers that need support.
      </p>
      <p>
        And our work on sustainable funding and governance systems has helped widely-deployed projects avoid
        maintainer burnout so that they can continue their critical work.
      </p>
    </section>
    <section>
      <div class="postcard">
        <img
          class="postcard__main"
          src="/images/AltCtrOrg-Event-115@1000px.webp"
          alt="Vlad presenting in front of an audience"
          width="736"
          height="505"
        >
        <Starset width="81" height="24" />
      </div>
    </section>
    <section>
      <h2 class="big-heading">
        Team
      </h2>
      <div class="members">
        <div class="member">
          <div class="member__meta">
            <div class="member__photo">
              <img
                src="/images/team/vlad.webp"
                alt="A portrait of Vlad"
                width="60"
                height="60"
              >
            </div>
            <div class="member__info">
              <div class="member__name">
                <strong>Vlad-Stefan Harbuz</strong>
                <a class="plain-link" href="https://vlad.website">
                  <IconGlobe
                    aria-label="Go to Vlad's website"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
              <span>Executive Director, Researcher</span>
            </div>
          </div>
          <p>
            Director of the
            <a href="https://opensourcepledge.com">Open Source Pledge</a>,
            which has raised $7,156,281 for maintainers.
            <a href="https://thanks.dev">thanks.dev</a> core developer.
            Helped build software used by the
            <a href="https://gatesfoundation.org">Gates Foundation</a>
            to allocate $1B in healthcare funding.
          </p>
        </div>
        <div class="member">
          <div class="member__meta">
            <div class="member__photo">
              <img
                src="/images/team/andrew.webp"
                alt="A portrait of Andrew"
                width="60"
                height="60"
              >
            </div>
            <div class="member__info">
              <div class="member__name">
                <strong>Andrew Nesbitt</strong>
                <a class="plain-link" href="https://nesbitt.io">
                  <IconGlobe
                    aria-label="Go to Andrew's website"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
              <span>Non-Executive Director, Researcher</span>
            </div>
          </div>
          <p>
            Creator of leading Open Source intelligence providers
            <a href="https://ecosyste.ms">ecosyste.ms</a>
            and
            <a href="https://libraries.io">libraries.io</a>.
            Organiser of the FOSDEM
            <a href="https://fosdem.org/2026/schedule/track/package-management/">Package Management devroom</a>.
            Previously an engineer at
            <a href="https://github.com">GitHub</a>
            and
            <a href="https://tidelift.com">Tidelift</a>.
          </p>
        </div>
        <div class="member">
          <div class="member__meta">
            <div class="member__photo">
              <img
                src="/images/team/miranda.webp"
                alt="A portrait of Miranda"
                width="60"
                height="60"
              >
            </div>
            <div class="member__info">
              <div class="member__name">
                <strong>Miranda Heath</strong>
                <a class="plain-link" href="https://mirandaheath.website">
                  <IconGlobe
                    aria-label="Go to Miranda's website"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
              <span>Non-Executive Director, Researcher</span>
            </div>
          </div>
          <p>
            BPS award-winning psychologist and author of the to-date most comprehensive
            <a href="https://opensourcepledge.com/blog/burnout-in-open-source-a-structural-problem-we-can-fix-together/">report on burnout in Open Source</a>.
            PhD researcher in moral psychology and philosophy at the University of Edinburgh.
          </p>
        </div>
        <div class="member">
          <div class="member__meta">
            <div class="member__photo">
              <img
                src="/images/team/daniel.webp"
                alt="A portrait of Daniel"
                width="60"
                height="60"
              >
            </div>
            <div class="member__info">
              <div class="member__name">
                <strong>Daniel Roe</strong>
                <a class="plain-link" href="https://roe.dev">
                  <IconGlobe
                    aria-label="Go to Daniel's website"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
              <span>Non-Executive Director</span>
            </div>
          </div>
          <p>
            Leader of globally-used web framework <a href="https://nuxt.com/">Nuxt</a>.
            Steward of package manager frontend <a href="https://npmx.dev">npmx</a>.
            Regular keynote speaker. Microsoft MVP, Google GDE, and GitHub Star.
          </p>
        </div>
        <div class="member">
          <div class="member__meta">
            <div class="member__photo">
              <img
                src="/images/team/dawn.webp"
                alt="A portrait of Dawn"
                width="60"
                height="60"
              >
            </div>
            <div class="member__info">
              <div class="member__name">
                <strong>Dawn Foster</strong>
                <a class="plain-link" href="https://fastwonder.com/">
                  <IconGlobe
                    aria-label="Go to Dawn's website"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
              <span>Non-Executive Director</span>
            </div>
          </div>
          <p>
            Former Director of Data Science at <a href="https://chaoss.community/">CHAOSS</a>.
            Helped develop <a href="https://www.intel.com/">Intel's</a> global Open Source engagement strategy.
            PhD in software metrics.
          </p>
        </div>
        <div class="member">
          <div class="member__meta">
            <div class="member__photo">
              <img
                src="/images/team/patak.webp"
                alt="A portrait of Matias"
                width="60"
                height="60"
              >
            </div>
            <div class="member__info">
              <div class="member__name">
                <strong>Matias Capeletto</strong>
                <a class="plain-link" href="https://patak.cat">
                  <IconGlobe
                    aria-label="Go to Matias's website"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
              <span>Non-Executive Director</span>
            </div>
          </div>
          <p>
            Steward of <a href="https://npmx.dev">npmx</a>.
            Core developer of foundational web development tools used by millions, such as
            <a href="https://vite.dev/">Vite</a>,
            <a href="https://vitest.dev/">Vitest</a>
            and
            <a href="https://e18e.dev/">e18e</a>.
            Previously at <a href="https://stackblitz.com/">StackBlitz</a>.
          </p>
        </div>
        <div class="member">
          <div class="member__meta">
            <div class="member__photo">
              <img
                src="/images/team/mike.webp"
                alt="A portrait of Mike"
                width="60"
                height="60"
              >
            </div>
            <div class="member__info">
              <div class="member__name">
                <strong>Mike McQuaid</strong>
                <a class="plain-link" href="https://mikemcquaid.com">
                  <IconGlobe
                    aria-label="Go to Mike's website"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
              <span>Adviser</span>
            </div>
          </div>
          <p>
            CTPO at <a href="https://www.getadministrate.com/">Administrate</a>.
            Project Leader of <a href="https://brew.sh/">Homebrew</a>.
            Former <a href="https://github.com">GitHub</a> Principal Engineer (#232).
            Author of <a href="https://www.manning.com/books/git-in-practice">Git in Practice</a>.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h2 class="big-heading">
        Experience
      </h2>
      <p>
        Our staff of industry specialists and doctoral researchers have held leadership roles at:
      </p>
      <div class="logowall">
        <a
          class="logo plain-link"
          href="https://opensourcepledge.com"
        ><LogoOsp
          style="padding: 0.1rem 0;"
          aria-label="The Open Source Pledge logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://endowment.dev"
        ><LogoOse
          aria-label="The Open Source Endowment logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://thanks.dev"
        ><LogoThanksDev
          aria-label="The thanks.dev logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://ecosyste.ms"
        ><LogoEcosystems
          aria-label="The ecosyste.ms logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://libraries.io"
        ><LogoLibrariesIo
          aria-label="The libraries.io logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://chaoss.community/"
        ><LogoChaoss
          aria-label="The CHAOSS logo"
          style="padding: 0.4rem 0;"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://nuxt.com/"
        ><LogoNuxt
          aria-label="The Nuxt logo"
          style="padding: 0.4rem 0;"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://vite.dev/"
        ><LogoVite
          aria-label="The Vite logo"
          style="padding: 0.5rem 0;"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://npmx.dev/"
        ><LogoNpmx
          src="/images/logos/npmx.svg"
          aria-label="The npmx logo"
          style="padding: 0.3rem 0;"
          width="104"
          height="40"
        /></a>
      </div>
      <p>
        Our members have contributed to:
      </p>
      <div class="logowall">
        <a
          class="logo plain-link"
          href="https://www.gatesfoundation.org/"
        ><LogoGatesFoundation
          aria-label="The Gates Foundation logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://intel.com"
        ><LogoIntel
          aria-label="The Intel logo"
          style="padding: 0.3rem 0;"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://www.vmware.com/"
        ><LogoVmware
          aria-label="The VMware logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://github.com"
        ><LogoGitHub
          aria-label="The GitHub logo"
          style="padding: 0.45rem 0;"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://tidelift.com"
        ><LogoTidelift
          aria-label="The Tidelift logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://alpha-omega.dev/"
        ><LogoAlphaOmega
          aria-label="The Alpha Omega logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://openssf.org/"
        ><LogoOpenSsf
          aria-label="The OpenSSF logo"
          style="padding: 0.1rem 0;"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://www.cncf.io/"
        ><LogoCncf
          aria-label="The CNCF logo"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://www.linuxfoundation.org/"
        ><LogoLinuxFoundation
          aria-label="The Linux Foundation logo"
          style="padding: 0.3rem 0;"
          width="104"
          height="40"
        /></a>
        <a
          class="logo plain-link"
          href="https://cyclonedx.org/"
        ><LogoCycloneDx
          aria-label="The CycloneDX logo"
          width="104"
          height="40"
        /></a>
      </div>
    </section>
  </div>
  <section>
    <h2 class="big-heading">
      Featured Posts
    </h2>
    <PostList :posts="posts" />
  </section>
  <div class="container">
    <section>
      <h2 class="big-heading">
        Values
      </h2>
      <div class="value">
        <h3 class="smcp">
          Public good
        </h3>
        <p>
          Our projects must provide a clear benefit to the public; and not put the public at disproportionate risk of
          harm, eg through drastic environmental consequences or the creation of monopolies.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Public access
        </h3>
        <p>
          All our research outputs are accessible and usable by all. Across our different outputs, this means Open
          Source code, open data, and open access research papers.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Systemic improvements
        </h3>
        <p>
          We aim for widely-applicable systemic solutions, instead of fixes for particular technologies. Our goal is
          to improve the software ecosystem for current and future developers, not to help current developers shape
          themselves to fit a bad system.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Interdisciplinarity
        </h3>
        <p>
          Our work is rooted in software, but we also address the social, ethical and policy dimensions of Open
          Source. This includes responsible governance, healthy communities, good working conditions and respect.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Decentralisation
        </h3>
        <p>
          We promote sharing and distributing power over technology. We want users to be able to shape the tech they
          use so that it meets their needs and works in their best interests.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Interdependence
        </h3>
        <p>
          We aim to advance public knowledge about the webs of interdependence that constitute our global tech
          infrastructure; about how the tech we have today is made possible by thousands of developers collaborating
          openly.
        </p>
      </div>
    </section>
    <section class="section--ender">
      <h2>Interested?<br>Have questions?</h2>
      <p>
        Reach out to Vlad at
        <a href="mailto:vlad@vlad.website">vlad@vlad.website</a>.
      </p>
    </section>
  </div>
</template>

<style scoped>
.postcard {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  padding: 0 15px;
  transform: rotate(2deg);
  .postcard__main {
    width: auto;
    height: auto;
    border-radius: var(--border-radius-s);
  }
  .postcard__starset {
    width: 100px;
    height: auto;
    margin-right: 0;
  }
}
.logowall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  margin: 1rem 0;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: var(--color-beige-xpale);
    border: 1px solid var(--color-beige-pale);
    &:hover {
      background: var(--color-beige-pale);
    }
    img {
      flex: 1;
      width: 100px;
      max-height: 40px;
      opacity: 0.9;
    }
  }
}
.members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 15px;
  @media (min-width: 901px) {
    grid-auto-rows: 1fr;
  }
}
.member {
  --photo-size: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: var(--color-beige-xpale);
  border: 1px solid var(--color-beige-pale);
  .member__photo {
    flex: 0 0 var(--photo-size);
    img {
      width: var(--photo-size);
      height: var(--photo-size);
      border-radius: 100%;
    }
  }
  .member__meta {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .member__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    line-height: 1.1;
    span {
      font-size: var(--font-size-xs);
      line-height: var(--line-height-xs);
    }
    .member__name {
      display: flex;
      gap: 10px;
      strong {
        font-size: var(--font-size-m);
        line-height: var(--line-height-m);
        /* Montreuil-Medium.woff2 is weight 500, not 700. */
        font-weight: 500;
      }
      a {
        --icon-size: 16px;
        flex: 0 0 var(--icon-size);
        display: flex;
        align-items: center;
        &:hover {
          background-color: unset;
        }
        img {
          width: var(--icon-size);
          height: var(--icon-size);
        }
      }
    }
  }
  p {
    font-size: var(--font-size-xs);
    line-height: var(--line-height-xs);
    margin: 0;
  }
}
.value {
  margin: 1rem 0;
  padding: 15px;
  background: var(--color-beige-xpale);
  border: 1px solid var(--color-beige-pale);
  h3 {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
  }
  p {
    font-size: var(--font-size-s);
    line-height: var(--line-height-s);
  }
}
</style>
