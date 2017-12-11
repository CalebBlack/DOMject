const DOMject = require('../src/index.js');

window.addEventListener('load',()=>{
  let code = document.createElement('input');
  let execute = document.createElement('button');
  execute.textContent = 'Run';
  execute.addEventListener('click',()=>{
    let command = code.value;
    code.value = '';
    if (typeof command == 'string' && command.length > 0) console.log(eval(command));
  });
  document.body.appendChild(code);
  document.body.appendChild(execute);
});
