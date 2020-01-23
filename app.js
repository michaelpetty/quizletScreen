const getDOMFromURL = async (url) => {
    const res = await fetch(url, {method: 'get'});
    const body = await res.text();
    const parser = new DOMParser();
    return parser.parseFromString(body, 'text/html');
}

const getElementsFromClassNew = (ele, className) => {
  console.log(ele.children[0].children[1].children[1].children[3].children[2].classList);
  return [];
}

getDOMFromURL('https://developer.mozilla.org/en-US/docs/Web/API/Element')
.then(res => {
  console.log(res.getElementsByClassName('external').length);
  console.log(getElementsFromClassNew(res, 'external'));
})
