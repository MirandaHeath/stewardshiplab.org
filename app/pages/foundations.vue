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
      <h2>2024</h2>
      <div class="control-bar">
        <div class="control-set">
          <button @click="test()" class="btn btn--active" type="button">2024</button>
          <button @click="test()" class="btn" type="button">2023</button>
          <button @click="test()" class="btn" type="button">2022</button>
        </div>
      </div>
    </div>
    <div class="container container--wide table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col" class="cell--desktop-only">Country</th>
            <th scope="col" class="cell--desktop-only">Legal form</th>
            <th scope="col">Revenue</th>
            <th scope="col">Net assets</th>
            <th scope="col">Highest paid person</th>
            <th scope="col">Highest paid title</th>
            <th scope="col">Salary</th>
            <th scope="col">Other pay</th>
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
</style>

<script setup lang="ts">
import { URL_PREFIX_PROPUBLICA_ORG, ORG_IDS } from '../data/propublica.ts';
import { getPropublicaInfo } from '../utils/propublica.ts';
import { formatUsdAmount } from '../utils/format.ts';

function test() {
  console.log('lol');
}

const { data: allOrgs, status } = await useAsyncData('orgs', async (_nuxtApp, { signal }) => {
  return await Promise.all(
    ORG_IDS.map((orgId) =>
      $fetch(URL_PREFIX_PROPUBLICA_ORG + orgId)
        .then((pageBody) => getPropublicaInfo(orgId, pageBody))
    )
  );
});
let displayYear = 2024;
</script>
