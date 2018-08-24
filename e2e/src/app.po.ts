import {browser, by, element, ExpectedConditions} from 'protractor';

const fromInput = element(by.className('ej-input origin'));
const toInput = element(by.className('ej-input destination'));
const departureDatePicker = element(by.className('date-picker-button button-reset'));
const departureDate = element(by.className('calendar-month'));

export class HomePage {

  async navigateTo() {
    return await browser.get('/');
  }

  public enterFromAndToDestination() {
    const fromDestination = 'London Luton (LTN)';
    const toDestination = 'Alicante (ALC)';
    this.waitTenSecondsForElementToBePresent(fromInput);
    fromInput.sendKeys(fromDestination);
    this.waitTenSecondsForElementToBePresent(toInput);
    toInput.sendKeys(toDestination);
  }

  public selectDeperatureAndReturnDates() {
    departureDatePicker.click();
    const today = this.retrieveTodaysDate();
    this.waitTenSecondsForElementToBePresent(departureDate);
  }

  private waitTenSecondsForElementToBePresent(el) {
    const until = ExpectedConditions;
    const timeout = 10000;
    const message = 'Element could not be found';
    browser.wait(until.presenceOf(el), timeout, message);
  }

  private retrieveTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return year + '-' + month + '-' + day;
  }


}
