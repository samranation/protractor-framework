import { HomePage } from './home.page';
import {SelectFlightPage} from './select.flight.page';
import {CheckoutPage} from './checkout.page';

describe('Easy Jet home page', () => {
  let homePage: HomePage;
  let selectFlightPage: SelectFlightPage;
  let checkoutPage: CheckoutPage;

  beforeAll(() => {
    homePage = new HomePage();
    selectFlightPage = new SelectFlightPage();
    checkoutPage = new CheckoutPage();
  });

  it('should be able to complete a checkout for a new flight', async () => {
    await homePage.navigateTo();
    homePage.enterFromAndToDestination();
    homePage.selectDepartureAndReturnDates();
    homePage.clickOnShowFlightsButton();
    selectFlightPage.selectOutBoundAndInboundFlights();
    await checkoutPage.navigateToPaymentPage();
    checkoutPage.signUpAsNewCustomer();
    checkoutPage.enterBookerContactDetails();
    checkoutPage.retrieveOutboundFlightJourneyDetails().then(outboundJourney => {
      return expect(outboundJourney).toContain('London Luton to Alicante');
    });
    checkoutPage.retrieveInboundFlightJourneyDetails().then(inboundJourney => {
      return expect(inboundJourney).toContain('Alicante to London Luton');
    });
  });
});
