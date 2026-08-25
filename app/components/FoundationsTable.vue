<template>
  <div class="foundations-table">
    <div class="container">
      <div class="control-bar">
        <div class="control-set">
          <button
            v-for="year in displayYearOptions"
            :key="year"
            @click="setDisplayYear(year)"
            class="button button--s"
            :class="{ 'button--active': displayYear == year }"
            type="button"
          >{{ year }}</button>
        </div>
      </div>
    </div>
    <div class="container container--fullwidth table-container">
      <table>
        <thead>
          <tr>
            <th
              style="width: 25%"
              scope="col"
              @click="setSortGetter(SG_NAME)"
              :data-sorting="getSortingDataAttr(SG_NAME)"
            ><span>Name</span></th>
            <th
              style="width: 6%"
              scope="col"
              @click="setSortGetter(SG_COUNTRY)"
              :data-sorting="getSortingDataAttr(SG_COUNTRY)"
              class="cell--desktop-only"
            ><span>Country</span></th>
            <th
              style="width: 8%"
              scope="col"
              @click="setSortGetter(SG_LEGALFORM)"
              :data-sorting="getSortingDataAttr(SG_LEGALFORM)"
              class="cell--desktop-only"
            ><span>Legal form</span></th>
            <th
              style="width: 9%"
              scope="col"
              @click="setSortGetter(SG_REVENUE)"
              :data-sorting="getSortingDataAttr(SG_REVENUE)"
              class="cell--right-align cell--mobile-expand"
            ><span>Revenue</span></th>
            <th
              style="width: 9%"
              scope="col"
              @click="setSortGetter(SG_NETASSETS)"
              :data-sorting="getSortingDataAttr(SG_NETASSETS)"
              class="cell--right-align cell--mobile-expand"
            ><span>Net assets</span></th>
            <th
              style="width: 12%"
              scope="col"
              @click="setSortGetter(SG_HPE_NAME)"
              :data-sorting="getSortingDataAttr(SG_HPE_NAME)"
            ><span>Highest paid person</span></th>
            <th
              style="width: 13%"
              scope="col"
              @click="setSortGetter(SG_HPE_TITLE)"
              :data-sorting="getSortingDataAttr(SG_HPE_TITLE)"
            ><span>Highest paid title</span></th>
            <th
              style="width: 9%"
              scope="col"
              @click="setSortGetter(SG_HPE_TOTALPAY)"
              :data-sorting="getSortingDataAttr(SG_HPE_TOTALPAY)"
              class="cell--right-align cell--mobile-expand"
            ><span>Total pay</span></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="org in sortedOrgs" :key="org.name">
            <tr>
              <td><a :href="'https://projects.propublica.org/nonprofits/organizations/' + org.id">{{ org.name }}</a></td>
              <td class="cell--desktop-only">US</td>
              <td class="cell--desktop-only">{{ org.legalForm }}</td>
              <td class="cell--right-align cell--mono">{{ formatUsdAmount(SG_REVENUE(org)) }}</td>
              <td class="cell--right-align cell--mono">{{ formatUsdAmount(SG_NETASSETS(org)) }}</td>
              <td class="cell--ellipsis">{{ formatUsdAmount(SG_HPE_NAME(org)) }}</td>
              <td class="cell--ellipsis">{{ formatUsdAmount(SG_HPE_TITLE(org)) }}</td>
              <td class="cell--right-align cell--mono">{{ formatUsdAmount(SG_HPE_TOTALPAY(org)) }}</td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Mean</th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(mean(SG_REVENUE)) }}</th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(mean(SG_NETASSETS)) }}</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(mean(SG_HPE_TOTALPAY)) }}</th>
          </tr>
          <tr>
            <th scope="row">Median</th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(median(SG_REVENUE)) }}</th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(median(SG_NETASSETS)) }}</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(median(SG_HPE_TOTALPAY)) }}</th>
          </tr>
          <tr>
            <th scope="row">Mean of non-zero</th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--right-align"></th>
            <th scope="col" class="cell--right-align"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(nonzeroMean(SG_HPE_TOTALPAY)) }}</th>
          </tr>
          <tr>
            <th scope="row">Median of non-zero</th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--right-align"></th>
            <th scope="col" class="cell--right-align"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" class="cell--right-align cell--mono">{{ formatUsdAmount(nonzeroMedian(SG_HPE_TOTALPAY)) }}</th>
          </tr>
          <tr>
            <th scope="row"></th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--desktop-only"></th>
            <th scope="col" class="cell--right-align">Revenue</th>
            <th scope="col" class="cell--right-align">Net assets</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" class="cell--right-align">Total pay</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { URL_PREFIX_PROPUBLICA_ORG, ORG_IDS } from '../data/propublica.ts';
import { getPropublicaInfo } from '../utils/propublica.ts';
import { formatUsdAmount } from '../utils/format.ts';

function guard(org, getter) {
  try {
    return getter(org);
  } catch {
    return undefined;
  }
}
const SG_NAME          = d => guard(d, d => d.name);
const SG_COUNTRY       = d => guard(d, d => d.country);
const SG_LEGALFORM     = d => guard(d, d => d.legalForm);
const SG_REVENUE       = d => guard(d, d => d.filings[displayYear.value].revenue);
const SG_NETASSETS     = d => guard(d, d => d.filings[displayYear.value].netAssets);
const SG_HPE_NAME      = d => guard(d, d => d.filings[displayYear.value].highestPaidEmployee.name);
const SG_HPE_TITLE     = d => guard(d, d => d.filings[displayYear.value].highestPaidEmployee.title);
const SG_HPE_SALARYPAY = d => guard(d, d => d.filings[displayYear.value].highestPaidEmployee.salaryPay);
const SG_HPE_OTHERPAY  = d => guard(d, d => d.filings[displayYear.value].highestPaidEmployee.otherPay);
const SG_HPE_TOTALPAY  = d => guard(d, d =>
  d.filings[displayYear.value].highestPaidEmployee.salaryPay + d.filings[displayYear.value].highestPaidEmployee.otherPay
);

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

function mean(getter) {
  const vals = sortedOrgs.value.map(getter).filter(item => item != undefined);
  const sum = vals.reduce((acc, item) => acc + item, 0);
  return sum / vals.length;
}

function median(getter) {
  const vals = sortedOrgs.value.map(getter).filter(item => item != undefined);
  return vals[Math.round(vals.length / 2)];
}

function nonzeroMean(getter) {
  const vals = sortedOrgs.value
    .map(getter)
    .filter(item => item != undefined)
    .filter(item => item != 0);
  const sum = vals.reduce((acc, item) => acc + item, 0);
  return sum / vals.length;
}

function nonzeroMedian(getter) {
  const vals = sortedOrgs.value
    .map(getter)
    .filter(item => item != undefined)
    .filter(item => item != 0);
  return vals[Math.round(vals.length / 2)];
}

const sortGetter = ref(SG_REVENUE);
const sortAsc = ref(false);
const displayYear = ref('2024');
const displayYearOptions = ['2025', '2024', '2023', '2022'];

// eslint-disable-next-line @stylistic/space-before-function-paren
const { data: allOrgs, _status } = await useAsyncData('orgs', async (_nuxtApp, { signal }) => {
  const promises = ORG_IDS.map((orgId) => {
    return $fetch(URL_PREFIX_PROPUBLICA_ORG + orgId, { signal })
      .then(pageBody => getPropublicaInfo(orgId, pageBody, displayYearOptions));
  });
  return await Promise.all(promises);
});

const sortedOrgs = computed(() => {
  return allOrgs.value.toSorted((a, b) => {
    let va, vb;
    try {
      va = sortGetter.value(a);
      vb = sortGetter.value(b);
    } catch {
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
    if (typeof va != 'string' && typeof va != 'number') {
      return 1;
    }
    if (typeof vb != 'string' && typeof vb != 'number') {
      return -1;
    }
    return 0;
  });
});
</script>

<style scoped>
.foundations-table {
  margin-block: 30px;
}
table {
  min-width: 1000px;
  table-layout: fixed;
  th {
    cursor: pointer;
    user-select: none;
    span {
      text-decoration: underline;
      text-decoration-style: dotted;
    }
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
