const { browser } = require("protractor");
var homePage = require('../pageObjects/homePage.po.js')
var loginPage = require('../pageObjects/loginPage.po.js')
var myAccountPage = require('../pageObjects/myAccountPage.po.js')
const { expect } = require('chai');

describe('Login no Case:', function() {
  beforeAll( function() {
    homePage.visit();
  });

  it('Realizar Login com dados inválidos', async function(){
    await homePage.btnLogin.click();
    await loginPage.login('teste@gmail.com', 'teste321');
    expect(await loginPage.getMensagemErro()).to.be.eq("Authentication failed.");
  })

  it('Realizar Login com dados válidos', async function(){
    await loginPage.etEmail.clear();
    await loginPage.etSenha.clear();
    await loginPage.login('novoemailteste@gmail.com', 'teste123');
    expect(await myAccountPage.getTextoMyAccount()).to.be.eq("MY ACCOUNT");
  })

  afterAll(function(){
    browser.close();
  })

  });