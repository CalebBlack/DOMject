function parseHTML(HTML){
  if (!HTML instanceof HTMLElement) throw new Error('DOMject: Could Not Parse, Not HTMLElement');
  var element = {type:HTML.nodeName.toLowerCase(),attributes:{}};
  [...HTML.attributes].forEach(attribute=>{
    element.attributes[attribute.name] = attribute.value;
  });
  if (HTML.textContent && HTML.textContent.length > 0) element.text = HTML.textContent;
  var output = [...HTML.children].map(child=>parseHTML(child));
  output.element = element;
  return output;
}
module.exports = parseHTML;
