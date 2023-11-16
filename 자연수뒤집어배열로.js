https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  var answer = [];
  return answer;
}

function solution(n) {
  var answer = [];
  let number = String(n);
  for (let i = number.length - 1; i >= 0; i--) {
    console.log(i);
    answer.push(Number(number[i]))
  }
  return answer;
}

console.log(solution(12345));



let arrrr = [5, 4, 3, 2, 1]

console.log(arrrr.length); // 5 배열 총 길이
console.log(arrrr.length - 1); // 4 배열 가장 뒤의 인덱스

let num = 12345
console.log(String(num).length);
console.log(num.length);