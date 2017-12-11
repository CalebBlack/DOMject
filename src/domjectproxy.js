const render = require('./render');
const parse = require('./parse');
const arraySize = require('./functions/arraysize');

const DOMjectProxy = {
  get:(target,name)=>{
    switch(name) {
      case('raw'): return target;
      case('render'): return ()=>render(target);
      //case('innerHTML'): return target.innerHTML;
      case('parent'): return target.parent instanceof HTMLElement ? target.parent : createDOMject(target.parent);
      case('size'): return arraySize(target);
      default: return createDOMject(target[name]);
    }
  }
  set:(target,name,HTML)=>{
    target[name] = parse(HTML);
    render(target[name]);
    return true;
  }
}
module.exports = DOMjectProxy;
