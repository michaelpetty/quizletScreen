const getDOMFromURL = async (url) => {
    const res = await fetch(url, {method: 'get'});
    const body = await res.text();
    const parser = new DOMParser();
    return parser.parseFromString(body, 'text/html');
}

const getElementsFromClassNew = (ele, className, instNum = 1) => {
  if (instNum > 2000) return;
  let match = [];
  //console.log(ele.children[0].children[1].children[1].children[3].children[2].classList);
  let list = ele.classList;
  for (i=0; i < list.length; i++) {
    console.log(list[i]);
    if (list[i] === className) match.push(ele);
  }
  let children = ele.children;
  for (i=0; i < children.length; i++) {
    console.log(children[i])
    match.push(getElementsFromClassNew(children[i], className, instNum++));
  }
  return match;
}

getDOMFromURL('https://developer.mozilla.org/en-US/docs/Web/API/Element')
.then(res => {
  document.getElementById('builtIn').innerText = res.getElementsByClassName('external').length;
  document.getElementById('homemade').innerText = getElementsFromClassNew(res.children[0].children[1].children[1].children[3].children[2].children[2], 'toggle').length;
  console.log('finished');
})
