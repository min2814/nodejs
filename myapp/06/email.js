const text = '사용자 정보, 이름: 꼬렙, 전화번호 : 1234, 이메일 : seorab@naver.com';
const regex = /이메일\s*:\s*([a-z.@]+)/;
const regex2 = /[a-z]+@[a-z]+[.][a-z]+/;
const result = regex.exec(text);
const result2 = regex2.exec(text);
console.log(result[1]);