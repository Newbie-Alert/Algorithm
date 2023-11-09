https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  var answer = 0;
  return answer;
}

function solution(arr) {
  let initial = 0
  var answer = (arr.reduce((acc, cur) => acc + cur, initial)) / arr.length;
  return answer;
}