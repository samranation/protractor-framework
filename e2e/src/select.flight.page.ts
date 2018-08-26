import {element, by, browser} from 'protractor';
import {TestUtility} from './utilitiy/test.utility';

const outboundFlights = element(by.css(`div[displayed-route='DisplayedRoutes.OutboundRoute']`)).$$('li');
const inboundFlights = element(by.css(`div[displayed-route='DisplayedRoutes.ReturnRoute']`)).$$('li');
const continueBtn = element(by.css(`button[ng-click='ContinueButtonClick($event)']`));

export class SelectFlightPage extends TestUtility {

  public selectOutBoundAndInboundFlights() {
    this.waitForElementPresence(outboundFlights);
    this.clickOnAvailableFlights(outboundFlights);
    this.waitForElementPresence(inboundFlights);
    this.clickOnAvailableFlights(inboundFlights);
    this.clickContinueButton();
  }

  private clickContinueButton() {
    this.waitForElementPresence(continueBtn);
    continueBtn.click();
  }

  private clickOnAvailableFlights(flights) {
    flights.filter(flight => {
      return flight.getText().then(text => {
        return (text.indexOf('Sold out') === -1) && (text !== '');
      });
    }).first().click();
  }
}
