import { BudgetFrontendPage } from './app.po';

describe('budget-frontend App', () => {
  let page: BudgetFrontendPage;

  beforeEach(() => {
    page = new BudgetFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
