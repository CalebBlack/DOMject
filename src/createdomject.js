const parse = require('./html/parse');
const DOMject = require('./domject');
const DOMjectProxy = require('./domjectproxy');

function createDOMject(parent,HTML){
  if (!(parent instanceof DOMject || parent instanceof HTMLElement)) parent = document.getElementById(parent);
  let raw = HTML ? parse(HTML,parent) : new DOMject(parent);
  let output = new Proxy(raw,DOMjectProxy);
  if (HTML) output.render();
  return output;
}
module.exports = createDOMject;
