const text = '791111-2234567';
const regex = /^\d{6}-[1-4]\d{6}$/;
console.log(regex.test(text));