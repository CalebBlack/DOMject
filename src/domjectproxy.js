const DOMjectProxy = {
  get:(target,name)=>{
    if (name === 'render') return render(target);
    return createDOMject(target[name]);
  }
  set:(target,name,HTML)=>{
    target[name] = parse(HTML);
    render(target);
    return true;
  }
}
