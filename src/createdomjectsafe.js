const createDOMject = require('./createdomject');
function createDOMjectSafe(HTML,parent=document.body){
  if (!parent instanceof HTMLElement) throw new Error('DOMject: Parent not HTMLElement');
  if (typeof HTML != 'string' || HTML.length < 1) throw new Error('DOMject: HTML not valid string');
  console.log('f',createDOMject(parent,HTML));
  return createDOMject(parent,HTML);
}
module.exports = createDOMjectSafe;
