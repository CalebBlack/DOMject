class DOMject extends Array {
  constructor(parent){
    if (!(parent instanceof DOMject || parent instanceof HTMLElement));
    this.parent = parent;
  }
};
module.exports = DOMject;
