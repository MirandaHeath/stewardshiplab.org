import * as cheerio from 'cheerio';
import { parseUsdAmount } from '../../app/utils/format.ts';

type Employee = {
  name: string
  title: string
  salaryPay: number
  relatedPay: number
  otherPay: number
  totalPay: number
};

type Filing = {
  year: number
  revenue: number
  netAssets: number
  highestPaidEmployee: Employee
  employees: Employee[]
};

type Org = {
  id: string
  name: string
  legalForm: string
  filings: Filing[]
};

export async function getPropublicaInfo(id, pageBody, targetYears): Org {
  const $ = await cheerio.load(pageBody);

  const name = $('h1.text-hed-900').text();
  const legalForm = $('.nonprofit-type label').text();

  const $filings = $('[id^=filing]');
  const filings = {};
  $filings.map(function() {
    let highestPaidEmployee: Employee;
    const year = $(this).attr('id').replace('filing', '');
    if (!targetYears.includes(year)) {
      return;
    }
    const revenue = parseUsdAmount($(this)
      .find('.extract-summary .row-revenue__number')
      .text());
    if (!revenue) {
      return;
    }
    const netAssets = parseUsdAmount($(this)
      .find('.row-summary .row-summary__item:last-child .row-summary__number')
      .text());
    const $employeeRows = $(this).find('.employee-row:not(.more-employees-link)');
    const _employees = $employeeRows.map(function(idx) {
      const nameAndTitle = $(this).find('td:first-child').text().trim();
      const name = nameAndTitle.replace(/ \n.*/, '');
      let title = '';
      const titleMatches = nameAndTitle.match(/\((.*)\)/);
      if (titleMatches && titleMatches.length >= 2) {
        title = titleMatches[1];
      }
      const nColumns = $(this).find('td').length;
      const salaryPay = parseUsdAmount($(this).find('td:nth-child(2)').text());
      let relatedPay = 0;
      if (nColumns == 4) {
        relatedPay = parseUsdAmount($(this).find('td:nth-child(3)').text());
      }
      const otherPay = parseUsdAmount($(this).find('td:last-child').text());
      const employee = {
        name: name,
        title: title,
        salaryPay: salaryPay,
        relatedPay: relatedPay,
        otherPay: otherPay,
        totalPay: salaryPay + relatedPay + otherPay,
      };
      if (
        idx == 0 ||
        (employee.totalPay > highestPaidEmployee.totalPay)
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
    };
  });

  return {
    name: name,
    id: id,
    legalForm: legalForm,
    filings: filings,
  };
}
