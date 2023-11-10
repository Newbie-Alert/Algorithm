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