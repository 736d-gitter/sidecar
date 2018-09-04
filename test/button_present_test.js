import Promise from 'bluebird';
import assert from 'assert';
import path from 'path';
import objectAssign from 'object-assign';
import webdriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import test from 'tape';

const options  = new chrome.Options();
options.addArguments('headless');
options.addArguments('disable-gpu');
options.addArguments('disable-extensions');
options.addArguments('no-sandbox');

const capabilities = webdriver.Capabilities.chrome();

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .withCapabilities(capabilities)
  .build();


test('Open Chat Button should be present', function (t) {
  t.plan(1);

  const getPage = driver.get(`file://${path.join(__dirname, './fixtures/example.html')}`);

  const buttonLocator = webdriver.By.css('.gitter-open-chat-button');

  const openChatButtonExists = getPage.then(function() {
    return driver.wait(
      webdriver.until.elementLocated(buttonLocator),
      20000
    );
  });

  openChatButtonExists
    .then(function() {
      return driver.findElement(buttonLocator);
    })
    .then(function(item) {
      return Promise.resolve(item.getText());
    })
    .then(function(text) {
      const actualText = text.toLowerCase();
      const buttonTextExpected = 'open chat';
      assert(actualText, buttonTextExpected, `Expected text to look like ${buttonTextExpected} but actually was ${actualText}`);
    })
    .then(function() {
      t.pass('Successfully ran through selenium tasks');
    })
    .finally(() => {
      driver.quit();
    });
});
