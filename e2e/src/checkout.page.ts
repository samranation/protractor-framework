import {TestUtility} from './utilitiy/test.utility';
import {browser, by, element} from 'protractor';
import * as faker from 'faker';

const newCustomerRadioBtn = element(by.model('ShowSignUpUser'));
const usernameField = element(by.model('Username'));
const signUpButton = element(by.css(`input[ng-click='SignUpNewUser()']`));
const titleSelect = element(by.model('BookerDetails.Title'));
const firstName = element(by.model('BookerDetails.FirstName'));
const lastName = element(by.model('BookerDetails.LastName'));
const password = element(by.model('BookerDetails.Password'));
const streetAddress = element(by.model('BookerDetails.Address1'));
const city = element(by.model('BookerDetails.City'));
const postCode = element(by.model('BookerDetails.PostalCode'));
const phoneNumber = element(by.model('BookerDetails.Telephone.PhoneNumberWithoutDialingCode'));
const outboundFlightSummary = element(by.css(`div[class='funnel-basket-flight outbound-flight']`));
const inboundFlightSummary = element(by.css(`div[class='funnel-basket-flight return-flight']`));

export class CheckoutPage extends TestUtility {

  public navigateToPaymentPage() {
    return browser.get('/buy/payment');
  }

  public signUpAsNewCustomer() {
    this.waitForElementVisibility(newCustomerRadioBtn);
    this.waitForElementClickable(newCustomerRadioBtn).then(() => newCustomerRadioBtn.click());
    const randomNumber = (Math.floor(Math.random() * 9999)).toString();
    this.waitForElementVisibility(usernameField).then(() => {
      usernameField.click();
      usernameField.sendKeys(`customer+${randomNumber}@customer.com`);
    });
    this.waitForElementClickable(signUpButton).then(() => signUpButton.click());
  }

  public enterBookerContactDetails() {
    this.waitForElementVisibility(titleSelect).then(() => titleSelect.$(`[label='Mr']`).click());
    faker.locale = 'en_GB';
    firstName.sendKeys(faker.name.firstName());
    lastName.sendKeys(faker.name.lastName());
    password.sendKeys('blah123');
    streetAddress.sendKeys(faker.address.streetAddress());
    city.sendKeys(faker.address.city());
    postCode.sendKeys(faker.address.zipCode());
    phoneNumber.sendKeys(faker.phone.phoneNumber());
  }

  public retrieveOutboundFlightJourneyDetails() {
    return outboundFlightSummary.getText();
  }

  public retrieveInboundFlightJourneyDetails() {
    return inboundFlightSummary.getText();
  }
}
