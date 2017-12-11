const parse = require('./parse');
function createDOMject(parent,HTML){
  let raw = HTML ? parse(HTML) : [];
  raw.parent = parent;
  let output = new Proxy(raw,DOMjectProxy);
  if (HTML) output.render();
  return output;
}
module.exports = createDOMject;
