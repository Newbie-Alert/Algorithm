https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  var answer = [];
  return answer;
}

function solution(arr) {
  var answer = arr.length <= 1 ? [-1] : arr
  arr.splice(arr.indexOf(Math.min(...arr)), 1)


  return answer;
}