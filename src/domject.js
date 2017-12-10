class DOMject {
  constructor(HTML){

  }
  render(parent){

  }
  remove(){

  }
}
const DOMjectProxy = {

}
function createDOMject(HTML){
  return new Proxy(new DOMject(HTML),DOMjectProxy);
}
module.exports = createDOMject;
