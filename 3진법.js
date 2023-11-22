https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  var answer = 0;
  return answer;
}

function solution(n) {
  let 삼진법 = n.toString(3);
  let convert = 삼진법.split("").map(el => Number(el));
  let sum = convert.reverse().join('')

  return parseInt(sum, 3);
}

console.log(solution(45));