const render = require('./render');
const parse = require('./parse');

const DOMjectProxy = {
  get:(target,name)=>{
    if (name === 'render') return ()=>render(target);
    if (name === 'innerHTML') return target.innerHTML;
    if (name === 'parent' && parent instanceof HTMLElement) return parent;
    return createDOMject(target[name]);
  }
  set:(target,name,HTML)=>{
    target[name] = parse(HTML);
    render(target[name]);
    return true;
  }
}
module.exports = DOMjectProxy;
