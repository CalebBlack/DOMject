const parse = require('./parse');
const DOMject = require('./domject');
const DOMjectProxy = require('./domjectproxy');

function createDOMject(parent,HTML){
  let raw = HTML ? parse(HTML,parent) : new DOMject(parent);
  let output = new Proxy(raw,DOMjectProxy);
  if (HTML) output.render();
  return output;
}
module.exports = createDOMject;
