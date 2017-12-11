class DOMject extends Array {
  constructor(parent,HTML){
    if (!(parent instanceof DOMject || parent instanceof HTMLElement));
    this.parent = parent;
    if (HTML) {
      this.element = HTML.element;
      HTML.forEach((element,index)=>{
        this[index] = element;
      });
    }
  }
};
module.exports = DOMject;
