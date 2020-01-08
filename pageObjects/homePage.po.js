const { element, browser } = require("protractor");

class HomePage{
    
  get btnLogin() { return element(by.css('.login')) }

  async visit() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();            
    browser.get('http://automationpractice.com/index.php');
  }

}

module.exports = new HomePage();
