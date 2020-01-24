const getDOMFromURL = async (url) => {
    const res = await fetch(url, {method: 'get'});
    const body = await res.text();
    const parser = new DOMParser();
    return parser.parseFromString(body, 'text/html');
}

const getElementsFromClassNew = (ele, className, instNum = 1) => {
  //if (instNum > 200) return [];
  let match = [];
  //console.log(ele)
  //console.log(ele.children[0].children[1].children[1].children[3].children[2].classList);
  let list = ele.classList;
  for (let i=0; i < list.length; i++) {
    //console.log(instNum, list[i]);
    if (list[i] === className) match.push(ele);
  }
  let children = ele.children;
  //console.log('children: ', children.length)
  for (let i=0; i < children.length; i++) {
    //console.log(instNum, children[i])
    match.push(getElementsFromClassNew(children[i], className, ++instNum));
  }
  return match.flat();
}

getDOMFromURL('https://developer.mozilla.org/en-US/docs/Web/API/Element')
.then(res => {
  document.getElementById('builtIn').innerText = res.getElementsByClassName('external').length;

  let homemade = getElementsFromClassNew(res.children[0].children[1], 'external');
  console.log(homemade);
  document.getElementById('homemade').innerText = homemade.length;
  //res.children[0].children[1].children[1].children[3].children[2].children[2].children[0].children[1].children[0].children[2]
  //res.children[0].children[1]
  console.log('finished');
})
