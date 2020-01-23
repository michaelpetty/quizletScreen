const getDOMFromURL = async (url) => {
    const res = await fetch(url);
    const parser = new DOMParser();
    return parser.parseFromString(res, 'text/html');
}

getDOMFromURL('https://developer.mozilla.org/en-US/docs/Web/API/Element')
.then(res => {
  console.log(res.children);
})
