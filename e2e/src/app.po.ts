import { browser, by, element } from 'protractor';

const fromInput = element(by.id('origin-528172'));
const toInput = element(by.id('destination-528172'));

export class HomePage {

  async navigateTo() {
    return await browser.get('/');
  }

  enterFromAndToDestination() {
    const fromDestination = 'London Luton (LTN)';
    const toDestination = 'Alicante (ALC)';
    fromInput.sendKeys(fromDestination);
    toInput.sendKeys(toDestination);
  }
}
