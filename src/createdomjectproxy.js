const render = require('./render');
const parse = require('./html/parse');
const arraySize = require('./functions/arraysize');
const createDOMject = require('./createDOMject');


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
