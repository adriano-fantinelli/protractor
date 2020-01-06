const {element, browser } = require("protractor");

class LoginPage{
    
  get etEmail() { return element(by.css('#email')) }

  get etSenha() { return element(by.css('#passwd')) }

  get btnSignIn() { return element(by.css('#SubmitLogin')) }    

  get alertErro() { return element(by.css('.alert-danger > ol > li')) }

  async login(email, senha) {
    browser.wait(ExpectedConditions.elementToBeClickable(this.etEmail), 3000)
    this.etEmail.sendKeys(email);
    this.etSenha.sendKeys(senha);
    this.btnSignIn.click();
}

  async getMensagemErro(){
    browser.wait(ExpectedConditions.elementToBeClickable(this.alertErro), 3000)
    console.log(await this.alertErro.getText());
    return await this.alertErro.getText();
  }
}
module.exports = new LoginPage();