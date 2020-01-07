const { element, browser } = require("protractor");

class HomePage{
    
  get btnLogin() { return element(by.css('.login')) }

  async visit() {
    browser.ignoreSynchronization = true;
    browser.driver.manage().window().setSize(1920, 980);
    browser.manage().window().maximize();            
    browser.get('http://automationpractice.com/index.php')
  }

}

module.exports = new HomePage();