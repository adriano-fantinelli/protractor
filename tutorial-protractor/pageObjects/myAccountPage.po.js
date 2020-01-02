const {element, browser } = require("protractor");

class myAccountPage{
    
  get textoMyAccount() { return element(by.css(".page-heading")) }

  async getTextoMyAccount(){
    browser.sleep(500);
    console.log(await this.textoMyAccount.getText());
    return await this.textoMyAccount.getText();
  }

}

module.exports = new myAccountPage();