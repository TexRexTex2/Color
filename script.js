const urlParams = new URLSearchParams(window.location.search);
const color = urlParams.get('color');
document.body.style.backgroundColor = color;
document.title=color;
console.log(color);
