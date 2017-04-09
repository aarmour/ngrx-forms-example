import { NgrxFormsExamplePage } from './app.po';

describe('ngrx-forms-example App', () => {
  let page: NgrxFormsExamplePage;

  beforeEach(() => {
    page = new NgrxFormsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fx works!');
  });
});
