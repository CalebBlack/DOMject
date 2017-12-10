function createDOMject(parent,HTML){
  let raw = HTML ? parse(HTML) : [];
  raw.parent = parent;
  return new Proxy(raw,DOMjectProxy);
}
module.exports = createDOMject;
