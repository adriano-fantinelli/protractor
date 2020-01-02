const {element, browser } = require("protractor");

class LoginPage{
    
    get etEmail() { return element(by.css('#email')) }

    get etSenha() { return element(by.css('#passwd')) }

    get btnSignIn() { return element(by.css('#SubmitLogin')) }    

    async login(email, senha) {
      this.etEmail.sendKeys(email);
      this.etSenha.sendKeys(senha);
      this.btnSignIn.click();
}

}

module.exports = new LoginPage();