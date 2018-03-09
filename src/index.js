//import _ from "lodash"
import {cube} from './math.js'
function component() {
  var element = document.createElement('div');
  
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = ['12312Hello', '123','33321',cube('12')].join(',')
  
  return element;
}

document.body.appendChild(component());