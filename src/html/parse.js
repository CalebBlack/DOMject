const DOMject = require('./domject');
const validate = require('./validate');

function parse(HTML,parent){
  if (typeof HTML != 'string') throw new Error('DOMject: Could Not Parse, HTML not string.');
  if (HTML.length < 1) throw new Error('DOMject: Could Not Parse, HTML string empty.');
  let read = document.createElement('div');
  read.innerHTML = HTML;
}
module.exports = parse;
