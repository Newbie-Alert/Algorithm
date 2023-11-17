https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  var answer = true;

  return answer;
}


let s = 'a234'
console.log(s.match(/[a-zA-Z]/g))

function solution(s) {
  var answer = true;
  if (s.match(/[a-zA-Z]/g) === null && (s.length === 4 || s.length === 6)) {
    answer = true;
  } else {
    answer = false
  }
  return answer;
}