describe('Login simuwatt', function(){

  beforeEach(function(){
    browser.get('http://qa.simuwatt.com/');
  })

  afterEach(function(){
    element(by.className('dropdown-toggle')).click();
    element(by.linkText('Log Out')).click();
    browser.sleep(2000);
  })

  // it('should have a title', function(){
  //   expect(browser.getTitle()).toEqual('Bridgehampton Tennis & Surf Club');
  // });

  it('should login', function(){
    element(by.model('credentials.username')).click();
    element(by.model('credentials.username')).sendKeys('florentina.enciu');

    element(by.model('credentials.password')).click();
    element(by.model('credentials.password')).sendKeys('letmein');

    element(by.buttonText('Sign In')).click();
    browser.sleep(2000);
  });
});

// npm install protractor-html-screenshot-reporter --save-dev
