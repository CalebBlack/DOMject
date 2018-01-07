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
  console.log('o',output);
  return output;
}
module.exports = createDOMject;
