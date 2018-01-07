const DOMject = require('../src/index.js');

window.addEventListener('load',()=>{
  let commandHistory = [];
  let commandSelect = 0;
  let code = document.createElement('textarea');
  code.className = 'code'
  let restoreCommand = up=>{
    if (up === true) {
      commandSelect++;
      commandSelect = Math.min(commandSelect,commandHistory.length);
    } else {
      commandSelect--;
      commandSelect = Math.max(0,commandSelect);
    }
    code.value = commandHistory[commandSelect] || '';
  }
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
      commandHistory.push(command);
      commandSelect++;
      let output = eval(command);
      console.log(output);
      let log = document.createElement('span');
      log.textContent = output;
      log.className='log';
      logs.appendChild(log);
    }
  };
  execute.addEventListener('click',submit);
  let commandActive = false;
  code.addEventListener('keydown',e=>{
    if(commandActive && e.keyCode === 13) {
      submit();
    } else if (commandActive && e.keyCode === 40) {
      restoreCommand(true);
    } else if (commandActive && e.keyCode === 38) {
      restoreCommand(false);
    } else if ([91,93].includes(e.keyCode)){
      commandActive = true;
    } else {
      return;
    }
    e.preventDefault();
  });
  code.addEventListener('keyup',e=>{
    if ([91,93].includes(e.keyCode)) {
      commandActive = false;
    }
  })
  document.body.appendChild(code);
  document.body.appendChild(execute);
  document.body.appendChild(logs);
});
