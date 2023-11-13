https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  var answer = 0;
  return answer;
}


function solution(n) {
  var answer = Number(String(n).split('').sort((a, b) => b - a).join(''));
  return answer;
}