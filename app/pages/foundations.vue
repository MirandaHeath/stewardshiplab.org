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
      <!-- <div class="control-bar"> -->
      <!--   <div class="control-set"> -->
      <!--     <button class="btn btn--active" type="button">2024</button> -->
      <!--     <button class="btn" type="button">2023</button> -->
      <!--     <button class="btn" type="button">2022</button> -->
      <!--   </div> -->
      <!-- </div> -->
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
              <td class="cell--right-align">{{ formatAmount(org.filings[displayYear].revenue) }}</td>
              <td class="cell--right-align">{{ formatAmount(org.filings[displayYear].netAssets) }}</td>
              <td class="cell--cropped">{{ formatAmount(org.filings[displayYear].highestPaidEmployee.name) }}</td>
              <td class="cell--cropped">{{ formatAmount(org.filings[displayYear].highestPaidEmployee.title) }}</td>
              <td class="cell--right-align">{{ formatAmount(org.filings[displayYear].highestPaidEmployee.salaryPay) }}</td>
              <td class="cell--right-align">{{ formatAmount(org.filings[displayYear].highestPaidEmployee.otherPay) }}</td>
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
import * as cheerio from 'cheerio';

const URL_PREFIX_PROPUBLICA_ORG = 'https://projects.propublica.org/nonprofits/organizations/';
const ORG_IDS = [
  '472119192', // .NET Foundation
  '862791864', // AlmaLinux OS Foundation
  '470825376', // Apache Foundation
  '462060554', // Apereo Foundation
  '912106274', // Aspiration
  '863131901', // Bytecode Alliance
  '843661535', // Clojurists Together Foundation
  '43585301',  // Creative Commons
  '813791683', // CS&S
  '262708549', // Django Software Foundation
  '981580571', // Eclipse Foundation
  '43091431',  // EFF
  '841545163', // FreeBSD Foundation
  '42888848',  // FSF
  '43572618',  // GNOME Foundation
  '475236502', // Haskell.org
  '842364885', // Interledger Foundation
  '200141248', // Internet Systems Consortium
  '541650477', // ISOC
  // '825375649', // Kotlin Foundation (reports missing)
  '460503801', // Linux Foundation
  '471136085', // LLVM Foundation
  '200097189', // Mozilla Foundation
  '134134071', // NetBSD Foundation
  '454547709', // NumFocus
  '251720375', // OASIS Open
  '263316567', // Open Information Security Foundation
  '273327530', // Open Networking Foundation
  '900601134', // Open SFS
  '822037583', // Open Source Collective
  '208743186', // Open Source Elections Technology Institute (OSET)
  '721613215', // Open Source Geospacial Foundation
  '455524560', // Open Source Hardware Foundation
  '912037395', // Open Source Initiative
  '262194507', // Postgres US
  '43594598',  // Python Software Foundation
  '824506840', // Signal Foundation
  '412203632', // Software Freedom Conservancy
  '412165986', // Software Freedom Law Centre
  '113390208', // Software In The Public Interest
  '222868942', // TeX Users Group
  '208096820', // Tor Project Inc.
  '200049703', // Wikimedia Foundation
  '205498932', // Wordpress Foundation
  '845105214', // Zig Software Foundation
];

type Employee = {
  name: string;
  title: string;
  salaryPay: number;
  otherPay: number;
  totalPay: number;
};

type Filing = {
  year: number;
  revenue: number;
  netAssets: number;
  highestPaidEmployee: Employee;
  employees: Employee[];
};

type Org = {
  id: string;
  name: string;
  filings: Filing[];
};

function parseAmount(str) {
  return parseFloat(str.replace(/[$,]/g, ''));
}

function formatAmount(value) {
  if (typeof value !== "number") {
    return value;
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(value);
}

async function getPropublicaInfo(id) {
  const url = URL_PREFIX_PROPUBLICA_ORG + id;
  const $ = await cheerio.fromURL(url);
  const name = $('h1.text-hed-900').text();
  const legalForm = $('.nonprofit-type label').text();
  const $filings = $('[id^=filing]');
  const filings = {};
  $filings.map(function() {
    let highestPaidEmployee: Employee;
    const year = +$(this).attr('id').replace('filing', '');
    const revenue = parseAmount($(this)
      .find('.extract-summary .row-revenue__number')
      .text());
    if (!revenue) {
      return;
    }
    const netAssets = parseAmount($(this)
      .find('.row-summary .row-summary__item:last-child .row-summary__number')
      .text());
    const $employeeRows = $(this).find('.employee-row:not(.more-employees-link)');
    const employees = $employeeRows.map(function(idx) {
      const nameAndTitle = $(this).find('td:first-child').text().trim();
      const name = nameAndTitle.replace(/ \n.*/, '');
      let title = '';
      const titleMatches = nameAndTitle.match(/\((.*)\)/)
      if (titleMatches && titleMatches.length >= 2) {
        title = titleMatches[1];
      }
      const salaryPay = parseAmount($(this).find('td:nth-child(2)').text());
      const otherPay = parseAmount($(this).find('td:last-child').text());
      const employee = {
        name: name,
        title: title,
        salaryPay: salaryPay,
        otherPay: otherPay,
        totalPay: salaryPay + otherPay,
      };
      if (
        idx == 0 ||
        !highestPaidEmployee.salaryPay ||
        (employee.salaryPay && employee.salaryPay > highestPaidEmployee.salaryPay)
      ) {
        highestPaidEmployee = employee;
      }
      return employee;
    }).get();
    filings[year] = {
      year: year,
      revenue: revenue,
      netAssets: netAssets,
      highestPaidEmployee: highestPaidEmployee,
      employees: employees,
    };
  });
  return {
    name: name,
    id: id,
    legalForm: legalForm,
    filings: filings,
  };
}

async function getOrgs() {
  let orgs: ORGS[] = [];
  for (const orgId of ORG_IDS) {
    const org = await getPropublicaInfo(orgId);
    orgs.push(org);
  }
  return orgs;
}

const allOrgs = await getOrgs();
let displayYear = 2024;
</script>
