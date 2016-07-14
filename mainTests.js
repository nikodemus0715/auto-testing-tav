var data = require('./data');
var Utility = require('./utils');

var firstTest = function() {

    this.loadURL = function(url) {
        browser.get(url);
    }

    this.login = function(usr, pass) {
        var username = Utility.findElementByObject(data.username);
        var password = Utility.findElementByObject(data.password);
        var button = Utility.findElementByObject(data.loginButton);
        username.click();
        username.sendKeys(usr);

        password.click();
        password.sendKeys(pass);
        button.click();
    }

    this.logout = function() {
        Utility.findElementByObject(data.logoutDropDown).click();
        Utility.findElementByObject(data.logoutButton).click();
    }

    this.verifyCurrentUrl = function(url){
      return browser.wait(function(){
        return Utility.checkURL(url);
      }, 100*1000)
    }
}

module.exports = firstTest;
