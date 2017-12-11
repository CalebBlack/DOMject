const DOMject = require('./domject');
const validate = require('./validate');

function parse(HTML,parent){
  if (typeof HTML != 'string') throw new Error('DOMject: Could Not Parse, HTML not string.');
  if (HTML.length < 1) throw new Error('DOMject: Could Not Parse, HTML string empty.');
  if (!validate(HTML)) throw new Error('DOMject: Could Not Parse, HTML invalid.');
  
}
module.exports = HTML;
