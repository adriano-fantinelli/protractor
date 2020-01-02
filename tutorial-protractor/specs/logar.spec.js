const { browser } = require("protractor");
var homePage = require('../pageObjects/homePage.po.js')
var loginPage = require('../pageObjects/loginPage.po.js')
const { expect } = require('chai');

describe('Login no Case:', function() {
    beforeAll( function() {
      homePage.visit();
    });

    it('Realizar Login sem senha', async function(){
      await homePage.btnLogin.click();
      await loginPage.login('teste@cwi.com.br', 'teste123');
      await browser.sleep(5000);
    })

    afterAll(function(){
      browser.close();
    })

  });