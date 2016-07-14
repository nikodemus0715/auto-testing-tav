var findElement = function(locator, type){
  switch (type) {
    case 'model': return element(by.model(locator)); break;
    case 'buttonText' : return element(by.buttonText(locator)); break;
    case 'linkText': return element(by.linkText(locator)); break;
    case 'className': return element(by.className(locator)); break;
    case 'id': return element(by.id(locator)); break;
    case 'name': return element(by.name(locator)); break;
  }
}

var findElementByObject = function(object){
  return findElement(object.locator, object.type);
}


module.exports = {
  findElement: findElement,
  findElementByObject: findElementByObject
}
