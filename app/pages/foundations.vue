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
            @click="displayYear = 2024"
            class="btn"
            :class="{ 'btn--active': displayYear == 2024 }"
            type="button"
          >2024</button>
          <button
            @click="displayYear = 2023"
            class="btn"
            :class="{ 'btn--active': displayYear == 2023 }"
            type="button"
          >2023</button>
          <button
            @click="displayYear = 2022"
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
            <th width="28%" scope="col">Name</th>
            <th width="5%" scope="col" class="cell--desktop-only">Country</th>
            <th width="6%" scope="col" class="cell--desktop-only">Legal form</th>
            <th width="9%" scope="col" class="cell--right-align">Revenue</th>
            <th width="9%" scope="col" class="cell--right-align">Net assets</th>
            <th width="15%" scope="col">Highest paid person</th>
            <th width="10%" scope="col">Highest paid title</th>
            <th width="9%" scope="col" class="cell--right-align">Salary</th>
            <th width="9%" scope="col" class="cell--right-align">Other pay</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="org in allOrgs" :key="org.name">
            <tr v-if="displayYear in org.filings">
              <td><a :href="'https://projects.propublica.org/nonprofits/organizations/' + org.id">{{ org.name }}</a></td>
              <td class="cell--desktop-only">US</td>
              <td class="cell--desktop-only">{{ org.legalForm }}</td>
              <td class="cell--right-align">{{ formatUsdAmount(org.filings[displayYear].revenue) }}</td>
              <td class="cell--right-align">{{ formatUsdAmount(org.filings[displayYear].netAssets) }}</td>
              <td class="cell--cropped">{{ formatUsdAmount(org.filings[displayYear].highestPaidEmployee.name) }}</td>
              <td class="cell--cropped">{{ formatUsdAmount(org.filings[displayYear].highestPaidEmployee.title) }}</td>
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
    table-layout: fixed;
  }
</style>

<script setup lang="ts">
import { URL_PREFIX_PROPUBLICA_ORG, ORG_IDS } from '../data/propublica.ts';
import { getPropublicaInfo } from '../utils/propublica.ts';
import { formatUsdAmount } from '../utils/format.ts';

const { data: allOrgs, status } = await useAsyncData('orgs', async (_nuxtApp, { signal }) => {
  return await Promise.all(
    ORG_IDS.map((orgId) =>
      $fetch(URL_PREFIX_PROPUBLICA_ORG + orgId, { signal })
        .then((pageBody) => getPropublicaInfo(orgId, pageBody))
    )
  );
});

let displayYear = ref(2024);
</script>
