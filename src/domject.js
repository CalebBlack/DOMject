class DOMject extends Array {
  constructor(parent,HTML){
    super(HTML);
    if (!(parent instanceof DOMject || parent instanceof HTMLElement));
    this.parent = parent;
    if (HTML) {
      this.element = HTML.element;
      // HTML.forEach((element,index)=>{
      //   this[index] = element;
      // });
    } else {
      this.element = document.createElement('div');
    }
    this.element.className='DOMject';
  }
};
module.exports = DOMject;
