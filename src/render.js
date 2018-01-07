function render(target) {
  while (target.hasOwnProperty('parent') && !(target.parent instanceof HTMLElement)) return console.log('back') || render(target.parent);
  console.log('rr',target);
}
module.exports = render;
