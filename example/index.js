const DOMject = require('../src/index.js');

window.addEventListener('load',()=>{
  let code = document.createElement('input');
  code.className='code';
  let execute = document.createElement('button');
  execute.className='execute';
  let logs = document.createElement('div');
  logs.className='logs';
  execute.textContent = 'Run';
  let submit = ()=>{
    let command = code.value;
    code.value = '';
    if (typeof command == 'string' && command.length > 0) {
      let output = eval(command);
      console.log(output);
      let log = document.createElement('span');
      log.textContent = output;
      log.className='log';
      logs.appendChild(log);
    }
  };
  execute.addEventListener('click',submit);
  code.addEventListener('keypress',e=>{if(e.keyCode === 13) submit()});
  document.body.appendChild(code);
  document.body.appendChild(execute);
  document.body.appendChild(logs);
});
