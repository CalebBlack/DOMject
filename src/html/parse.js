const DOMject = require('./domject');
const validate = require('./validate');
const parseHTLM = require('./parsehtml');

function parse(str,parent){
  if (typeof str != 'string') throw new Error('DOMject: Could Not Parse, HTML not string.');
  if (str.length < 1) throw new Error('DOMject: Could Not Parse, HTML string empty.');
  let read = document.createElement('div');
  read.className='DOMject';
  try {
    read.innerHTML = str;
  } catch(error){
    throw new Error('DOMject: Could Not Parse, HTML Invalid.');
  }
  return new DOMject(parent,parseHTML(read));
}

module.exports = parse;
