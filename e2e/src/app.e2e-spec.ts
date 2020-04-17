import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('validar titulo', () =>  {
    browser.get('http://localhost:4200/');
    expect(browser.getTitle()).toEqual('Citas web');
  });
});
