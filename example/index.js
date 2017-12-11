const DOMject = require('../src/index.js');

window.addEventListener('load',()=>{
  let code = document.createElement('input');
  let execute = document.createElement('button');
  let logs = document.createElement('div');
  execute.textContent = 'Run';
  execute.addEventListener('click',()=>{
    let command = code.value;
    code.value = '';
    if (typeof command == 'string' && command.length > 0) {
      let output = eval(command);
      console.log(output);
      let log = document.createElement('span');
      log.textContent = output;
      logs.appendChild(log);
    }
  });
  document.body.appendChild(code);
  document.body.appendChild(execute);
  document.body.appendChild(logs);
});
