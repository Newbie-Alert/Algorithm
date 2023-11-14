https://school.programmers.co.kr/learn/courses/30/lessons/12912


function solution(a, b) {
  var answer = 0;
  return answer;
}



function solution(a, b) {
  var answer = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i
    }
  }
  if (b < a) {
    for (let i = b; i <= a; i++) {
      answer += i
    }
  }
  if (a == b) {
    return answer = a
  }

  return answer;
}