const createDOMject = require('./createDOMject');
function createDOMjectSafe(HTML,parent=document.body){
  if (!parent instanceof HTMLElement) throw new Error('DOMject: Parent not HTMLElement');
  if (typeof HTML != 'string' || HTML.length < 1) throw new Error('DOMject: HTML not valid string');
  return createDOMject(parent,HTML);
}
module.exports = createDOMjectSafe;
