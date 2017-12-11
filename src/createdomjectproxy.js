const render = require('./render');
const parse = require('./parse');
const arraySize = require('./functions/arraysize');


function createDOMjectProxy(){
  var result = null;
  var proxy = {
    get:(target,name)=>{
      switch(name) {
        case('raw'): return target;
        case('render'): return ()=>render(target);
        //case('innerHTML'): return target.innerHTML;
        case('parent'): return target.parent instanceof HTMLElement ? target.parent : createDOMject(target.parent);
        case('size'): return arraySize(target);
        default: return createDOMject(result,target[name]);
      }
    }
    set:(target,name,HTML)=>{
      target[name] = parse(HTML);
      render(target[name]);
      return true;
    }
  }
  return [proxy,value=>{result=value}];
}
module.exports = createDOMjectProxy;