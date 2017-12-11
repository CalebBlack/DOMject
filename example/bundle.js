(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const DOMject = require('../src/index.js');

window.addEventListener('load',()=>{
  let code = document.createElement('input');
  let execute = document.createElement('button');
  execute.textContent = 'Run';
  execute.addEventListener('click',()=>{
    let command = code.value;
    code.value = '';
    if (typeof command == 'string' && command.length > 0) console.log(eval(command));
  });
  document.body.appendChild(code);
  document.body.appendChild(execute);
});

},{"../src/index.js":9}],2:[function(require,module,exports){
const parse = require('./html/parse');
const DOMject = require('./domject');
const createDOMjectProxy = require('./createdomjectproxy');

function createDOMject(parent,HTML){
  if (!(parent instanceof DOMject || parent instanceof HTMLElement)) parent = document.getElementById(parent);
  let raw = HTML ? Array.isArray(HTML) ? new DOMject(parent,HTML) : parse(HTML,parent) : new DOMject(parent);
  let proxyData = createDOMjectProxy();
  let output = new Proxy(raw,proxyData[0]);
  proxyData[1](output); //Pass Outputted Proxy back to Proxy Object
  if (HTML) output.render();
  return output;
}
module.exports = createDOMject;

},{"./createdomjectproxy":3,"./domject":5,"./html/parse":7}],3:[function(require,module,exports){
const render = require('./render');
const parse = require('./html/parse');
const arraySize = require('./functions/arraysize');


function createDOMjectProxy(){
  var result = null;
  var proxy = {
    get:(target,name)=>{
      switch(name) {
        case('raw'): return target;
        case('render'): return ()=>render(target);
        //case('innerHTML'): return target.innerHTML;
        case('parent'): return target.parent;
        case('size'): return arraySize(target);
        default: return target[name] ? createDOMject(result,target[name]) : undefined;
      }
    },
    set:(target,name,HTML)=>{
      target[name] = parse(HTML);
      render(target[name]);
      return true;
    }
  }
  return [proxy,value=>{result=value}];
}
module.exports = createDOMjectProxy;

},{"./functions/arraysize":6,"./html/parse":7,"./render":10}],4:[function(require,module,exports){
const createDOMject = require('./createDOMject');
function createDOMjectSafe(HTML,parent=document.body){
  if (!parent instanceof HTMLElement) throw new Error('DOMject: Parent not HTMLElement');
  if (typeof HTML != 'string' || HTML.length < 1) throw new Error('DOMject: HTML not valid string');
  return createDOMject(parent,HTML);
}
module.exports = createDOMjectSafe;

},{"./createDOMject":2}],5:[function(require,module,exports){
class DOMject extends Array {
  constructor(parent,HTML){
    super(HTML);
    if (!(parent instanceof DOMject || parent instanceof HTMLElement));
    this.parent = parent;
    if (HTML) {
      this.element = HTML.element;
      // HTML.forEach((element,index)=>{
      //   this[index] = element;
      // });
    } else {
      this.element = document.createElement('div');
    }
    this.element.className='DOMject';
  }
};
module.exports = DOMject;

},{}],6:[function(require,module,exports){
function arraySize(arr) {
  return arr.filter((value)=>value !== undefined && value !== null).length;
}

},{}],7:[function(require,module,exports){
const DOMject = require('../domject');
const parseHTML = require('./parsehtml');

function parse(str,parent){
  if (typeof str != 'string') throw new Error('DOMject: Could Not Parse, HTML not string.');
  if (str.length < 1) throw new Error('DOMject: Could Not Parse, HTML string empty.');
  let read = document.createElement('div');
  read.className='DOMject';
  try {
    read.innerHTML = str;
  } catch(error){
    throw new Error('DOMject: Could Not Parse, HTML Invalid.');
  }
  return new DOMject(parent,parseHTML(read));
}

module.exports = parse;

},{"../domject":5,"./parsehtml":8}],8:[function(require,module,exports){
function parseHTML(HTML){
  if (!HTML instanceof HTMLElement) throw new Error('DOMject: Could Not Parse, Not HTMLElement');
  var element = {type:HTML.nodeName.toLowerCase(),attributes:{}};
  [...HTML.attributes].forEach(attribute=>{
    element.attributes[attribute.name] = attribute.value;
  });
  if (HTML.textContent && HTML.textContent.length > 0) element.text = HTML.textContent;
  var output = [...HTML.children].map(child=>parseHTML(child));
  output.element = element;
  return output;
}
module.exports = parseHTML;

},{}],9:[function(require,module,exports){
module.exports = require('./createdomjectsafe');

},{"./createdomjectsafe":4}],10:[function(require,module,exports){
function render(target) {

}
module.exports = render;

},{}]},{},[1]);
