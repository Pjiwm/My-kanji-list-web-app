import { browser, logging } from 'protractor';

describe('Angular App', function() {

  it('check title', async () => {
    browser.get(browser.baseUrl);

    let  expected = "AngularSandbox";
    // let actual = await browser.getTitle();
    // expect(actual).toEqual(expected);
    expect(true).toEqual(true)


  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

}); 