const DOMject = require('./domject');
const validator = require('html-validator');

function parse(HTML,parent){
  if (typeof HTML != 'string') throw new Error('DOMject: Could Not Parse, HTML not string.');
  if (HTML.length < 1) throw new Error('DOMject: Could Not Parse, HTML string empty.');
  validator({format: 'html',data=HTML}).then(data=>{
    
  }).catch(err=>{
    throw new Error('DOMject: Could Not Parse, Invalid HTML.');
  });
}
module.exports = HTML;
