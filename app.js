const getDOMFromURL = async (url) => {
    const res = await fetch(url, {method: 'get'});
    const body = await res.text();
    console.log(body);
    const parser = new DOMParser();
    return parser.parseFromString(body, 'text/html');
}

const getElementsFromClassNew = (ele, className) => {
  console.log(ele);
  return [];
}

getDOMFromURL('https://developer.mozilla.org/en-US/docs/Web/API/Element')
.then(res => {
  console.log(res.getElementsByClassName('external'));
  console.log(getElementsFromClassNew(res, 'external'));
})
