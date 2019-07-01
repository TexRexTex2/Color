const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color');
body.style.backgroundColor=color;
