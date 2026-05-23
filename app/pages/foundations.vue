<template>
  <div class="container">
    <section>
      <h1 class="page-title">
        Open Source Foundation Observatory
      </h1>
      <p>
        A summary of the financials of Open Source software foundations.
      </p>
      <p class="text-xs">
        US data is up-to-date from IRS.
        Non-US data pending.
        Contributions <a href="https://codeberg.org/stewardshiplab/stewardshiplab.org" target="_blank">welcome.</a>
      </p>
    </section>
  </div>
  <section>
    <div class="container">
      <div class="control-bar">
        <div class="control-set">
          <button
            @click="setDisplayYear(2024)"
            class="btn"
            :class="{ 'btn--active': displayYear == 2024 }"
            type="button"
          >2024</button>
          <button
            @click="setDisplayYear(2023)"
            class="btn"
            :class="{ 'btn--active': displayYear == 2023 }"
            type="button"
          >2023</button>
          <button
            @click="setDisplayYear(2022)"
            class="btn"
            :class="{ 'btn--active': displayYear == 2022 }"
            type="button"
          >2022</button>
        </div>
      </div>
    </div>
    <div class="container container--wide table-container">
      <table>
        <thead>
          <tr>
            <th
              style="width: 25%"
              scope="col"
              @click="setSortGetter(SG_NAME)"
              :data-sorting="getSortingDataAttr(SG_NAME)"
            >Name</th>
            <th
              style="width: 6%"
              scope="col"
              @click="setSortGetter(SG_COUNTRY)"
              :data-sorting="getSortingDataAttr(SG_COUNTRY)"
              class="cell--desktop-only"
            >Country</th>
            <th
              style="width: 8%"
              scope="col"
              @click="setSortGetter(SG_LEGALFORM)"
              :data-sorting="getSortingDataAttr(SG_LEGALFORM)"
              class="cell--desktop-only"
            >Legal form</th>
            <th
              style="width: 9%"
              scope="col"
              @click="setSortGetter(SG_REVENUE)"
              :data-sorting="getSortingDataAttr(SG_REVENUE)"
              class="cell--right-align"
            >Revenue</th>
            <th
              style="width: 9%"
              scope="col"
              @click="setSortGetter(SG_NETASSETS)"
              :data-sorting="getSortingDataAttr(SG_NETASSETS)"
              class="cell--right-align"
            >Net assets</th>
            <th
              style="width: 12%"
              scope="col"
              @click="setSortGetter(SG_HPE_NAME)"
              :data-sorting="getSortingDataAttr(SG_HPE_NAME)"
            >Highest paid person</th>
            <th
              style="width: 13%"
              scope="col"
              @click="setSortGetter(SG_HPE_TITLE)"
              :data-sorting="getSortingDataAttr(SG_HPE_TITLE)"
            >Highest paid title</th>
            <th
              style="width: 9%"
              scope="col"
              @click="setSortGetter(SG_HPE_SALARYPAY)"
              :data-sorting="getSortingDataAttr(SG_HPE_SALARYPAY)"
              class="cell--right-align"
            >Salary</th>
            <th
              style="width: 9%"
              scope="col"
              @click="setSortGetter(SG_HPE_OTHERPAY)"
              :data-sorting="getSortingDataAttr(SG_HPE_OTHERPAY)"
              class="cell--right-align"
            >Other pay</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="org in sortedOrgs" :key="org.name">
            <tr v-if="displayYear in org.filings">
              <td><a :href="'https://projects.propublica.org/nonprofits/organizations/' + org.id">{{ org.name }}</a></td>
              <td class="cell--desktop-only">US</td>
              <td class="cell--desktop-only">{{ org.legalForm }}</td>
              <td class="cell--right-align">{{ formatUsdAmount(org.filings[displayYear].revenue) }}</td>
              <td class="cell--right-align">{{ formatUsdAmount(org.filings[displayYear].netAssets) }}</td>
              <td class="cell--ellipsis">{{ formatUsdAmount(org.filings[displayYear].highestPaidEmployee.name) }}</td>
              <td class="cell--ellipsis">{{ formatUsdAmount(org.filings[displayYear].highestPaidEmployee.title) }}</td>
              <td class="cell--right-align">{{ formatUsdAmount(org.filings[displayYear].highestPaidEmployee.salaryPay) }}</td>
              <td class="cell--right-align">{{ formatUsdAmount(org.filings[displayYear].highestPaidEmployee.otherPay) }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
  table {
    min-width: 1000px;
    table-layout: fixed;
    th {
      cursor: pointer;
      user-select: none;
      &[data-sorting] {
        &:after {
          padding-left: 3px;
        }
        &[data-sorting="asc"] {
          &:after {
            content: '▲';
          }
        }
        &[data-sorting="desc"] {
          &:after {
            content: '▼';
          }
        }
      }
    }
  }
</style>

<script setup lang="ts">
import { URL_PREFIX_PROPUBLICA_ORG, ORG_IDS } from '../data/propublica.ts';
import { getPropublicaInfo } from '../utils/propublica.ts';
import { formatUsdAmount } from '../utils/format.ts';

const SG_NAME          = (d) => d.name;
const SG_COUNTRY       = (d) => d.country;
const SG_LEGALFORM     = (d) => d.legalForm;
const SG_REVENUE       = (d) => d.filings[displayYear.value].revenue;
const SG_NETASSETS     = (d) => d.filings[displayYear.value].netAssets;
const SG_HPE_NAME      = (d) => d.filings[displayYear.value].highestPaidEmployee.name;
const SG_HPE_TITLE     = (d) => d.filings[displayYear.value].highestPaidEmployee.title;
const SG_HPE_SALARYPAY = (d) => d.filings[displayYear.value].highestPaidEmployee.salaryPay;
const SG_HPE_OTHERPAY  = (d) => d.filings[displayYear.value].highestPaidEmployee.otherPay;

const { data: allOrgs, status } = await useAsyncData('orgs', async (_nuxtApp, { signal }) => {
  return await Promise.all(
    ORG_IDS.map((orgId) =>
      $fetch(URL_PREFIX_PROPUBLICA_ORG + orgId, { signal })
        .then((pageBody) => getPropublicaInfo(orgId, pageBody))
    )
  );
});

const sortedOrgs = computed(() => {
  return allOrgs.value.toSorted((a, b) => {
    let va, vb;
    try {
      va = sortGetter.value(a);
      vb = sortGetter.value(b);
    } catch (e) {
      return 0;
    }
    if (typeof va == 'number' && typeof vb == 'number') {
      if (sortAsc.value) {
        return va - vb;
      } else {
        return vb - va;
      }
    }
    if (typeof va == 'string' && typeof vb == 'string') {
      if (sortAsc.value) {
        return va.localeCompare(vb);
      } else {
        return vb.localeCompare(va);
      }
    }
  });
});

function setDisplayYear(year) {
  displayYear.value = year;
}

function setSortGetter(newGetter) {
  if (sortGetter.value.name == newGetter.name) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortGetter.value = newGetter;
    sortAsc.value = true;
  }
}

function getSortingDataAttr(candidateSortGetter) {
  if (candidateSortGetter == sortGetter.value) {
    if (sortAsc.value) {
      return 'asc';
    } else {
      return 'desc';
    }
  }
}

let sortGetter = ref(SG_REVENUE);
let sortAsc = ref(false);
let displayYear = ref('2024');
</script>
