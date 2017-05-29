import { BudgetFrontendPage } from './app.po';

describe('budget-frontend App', () => {
  let page: BudgetFrontendPage;

  beforeEach(() => {
    page = new BudgetFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
