const render = require('./render');
const parse = require('./parse');

const DOMjectProxy = {
  get:(target,name)=>{
    if (name === 'raw') return target;
    if (name === 'render') return ()=>render(target);
    if (name === 'innerHTML') return target.innerHTML;
    if (name === 'parent' && parent instanceof HTMLElement) return parent;
    if (name === 'size') {
      var output = 0;
      target.forEach(()=>output++);
      return output;
    }
    return createDOMject(target[name]);
  }
  set:(target,name,HTML)=>{
    target[name] = parse(HTML);
    render(target[name]);
    return true;
  }
}
module.exports = DOMjectProxy;
