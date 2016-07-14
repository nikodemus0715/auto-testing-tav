var test = require('./mainTests');
var page = new test();

describe('Login simuwatt', function(){

  // beforeEach(function(){
  //   browser.get('http://qa.simuwatt.com/');
  // })
  //
  // afterEach(function(){
  //   element(by.className('dropdown-toggle')).click();
  //   element(by.linkText('Log Out')).click();
  //   browser.sleep(2000);
  // })

  // it('should have a title', function(){
  //   expect(browser.getTitle()).toEqual('Bridgehampton Tennis & Surf Club');
  // });

  // it('should login', function(){
  //   element(by.model('credentials.username')).click();
  //   element(by.model('credentials.username')).sendKeys('florentina.enciu');
  //
  //   element(by.model('credentials.password')).click();
  //   element(by.model('credentials.password')).sendKeys('letmein');
  //
  //   element(by.buttonText('Sign In')).click();
  //   browser.sleep(2000);
  // });

  beforeEach(function(){
    page.loadURL('http://qa.simuwatt.com/');
  });
  afterEach(function(){
    page.logout();
  });

  it('should login', function(){
    page.login('florentina.enciu', 'letmein');
    var expectedUrl = 'http://qa.simuwatt.com/#/welcome?usrId=-J_BRPlBze05dG8rKdE8&orgId=-J_BMeqBxfSQa3uAe9jp';
    expect(page.verifyCurrentUrl(expectedUrl)).toBe(true);
  })
});

// npm install protractor-html-screenshot-reporter --save-dev
