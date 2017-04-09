import { browser, element, by } from 'protractor';

export class NgrxFormsExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fx-root h1')).getText();
  }
}
