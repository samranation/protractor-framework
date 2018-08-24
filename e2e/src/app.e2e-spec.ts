import { HomePage } from './app.po';

describe('Easy Jet home page', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should be able to complete a checkout for a new flight', async () => {
    await homePage.navigateTo();
  });
});
