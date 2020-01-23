const getDOMFromURL = async (url) => {
    const res = await fetch(url, {method: 'get'});
    const body = await res.text();
    const parser = new DOMParser();
    return parser.parseFromString(body, 'text/html');
}

const getElementsFromClassNew = (ele, className) => {
  let match = [];
  //console.log(ele.children[0].children[1].children[1].children[3].children[2].classList);
  let list = ele.children[0].children[1].children[1].children[3].children[2].classList
  for (i=0; i < list.length; i++) {
    console.log(list[i]);
    if (list[i] === className) match.push(ele);
  }
  return match;
}

getDOMFromURL('https://developer.mozilla.org/en-US/docs/Web/API/Element')
.then(res => {
  console.log(res.getElementsByClassName('external').length);
  console.log(getElementsFromClassNew(res, 'content-layout'));
})
