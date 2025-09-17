const response = await fetch('http://ggoreb.com/quiz/운수좋은날.txt');
const text = await response.text();
const regex = /김\s*첨\s*지/g;
const result = text.match(regex);
console.log(result.length);
