import {browser, by, element, ExpectedConditions, protractor} from 'protractor';
import moment = require('moment');
import {TestUtility} from './utilitiy/test.utility';

const fromInput = element(by.className('ej-input origin'));
const toInput = element(by.className('ej-input destination'));
const datePicker = element(by.className('route-date-picker-control'));
const outboundCalendar = element(by.css(`div[data-tab='Date Calendar Outbound']`));
const returnCalendar = element(by.css(`div[data-tab='Date Calendar Return']`));
const showFlightsbtn = element(by.cssContainingText('button', 'Show flights'));

export class HomePage extends TestUtility {

  async navigateTo() {
    await browser.waitForAngularEnabled(false);
    await browser.get('/');
  }

  public enterFromAndToDestination() {
    const fromDestination = 'London Luton (LTN)';
    const toDestination = 'Alicante (ALC)';
    this.waitForElementPresence(fromInput).then(() => {
      fromInput.clear();
      fromInput.sendKeys(fromDestination);
    });
    this.waitForElementPresence(toInput).then(() => {
      toInput.sendKeys(toDestination);
      toInput.sendKeys(protractor.Key.TAB);
    });
  }

  public selectDepartureAndReturnDates() {
    const departureDate = this.retrieveDate(1);
    this.waitForElementClickable(datePicker).then(() => datePicker.click());

    const departureDateElement = outboundCalendar.$(`div[data-date='${departureDate}']`);
    this.waitForElementPresence(departureDateElement).then(() => departureDateElement.click());

    const returnDate = this.retrieveDate(3);
    const returnDateElement = returnCalendar.$(`div[data-date='${returnDate}']`);
    this.waitForElementVisibility(returnDateElement).then(() => returnDateElement.click());
  }

  public clickOnShowFlightsButton() {
    showFlightsbtn.click();
  }

  private retrieveDate(incrementDay = 0) {
    return moment().add(incrementDay, 'days').format('YYYY-MM-DD');
  }
}
