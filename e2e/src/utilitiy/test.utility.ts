import {browser, by, element, ExpectedConditions} from 'protractor';

const until = ExpectedConditions;
const timeout = 10000;

export class TestUtility {

  public waitForElementPresence(el) {
    const message = 'Element could not be found';
    return browser.wait(until.presenceOf(el), timeout, message);
  }

  public waitForElementVisibility(el) {
    const message = 'Element is not visible';
    return browser.wait(until.visibilityOf(el), timeout, message);
  }

  public waitForElementClickable(el) {
    const message = 'Element is not clickable.';
    return browser.wait(until.elementToBeClickable(el), timeout, message);
  }
}
