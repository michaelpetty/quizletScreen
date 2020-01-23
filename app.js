const getDOMFromURL = async (url) => {
    const res = await fetch(url);
    const parser = new DOMParser();
    return parser.parseFromString(res, 'text/html');
}

const getElementsFromClassNew = (ele, className) => {
  console.log(ele);
  return [];
}

getDOMFromURL('https://developer.mozilla.org/en-US/docs/Web/API/Element')
.then(res => {
  const body = res;
  console.log(body.getElementsByClassName('external'));
  console.log(body.querySelectorAll('body'));
  console.log(getElementsFromClassNew(body, 'external'));
})
