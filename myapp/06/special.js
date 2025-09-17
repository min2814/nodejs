const response = await fetch('http://ggoreb.com/quiz/special.html');
const data = await response.text();
const idx = data.lastIndexOf('<!--');
const text = data.substring(idx);
console.log(text);

const regex = /[a-z]/g;
const result = text.match(regex);
console.log(result.join(''));
