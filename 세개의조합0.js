https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  var answer = 0;
  return answer;
}



function solution(number) {
  var answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        number[i] + number[j] + number[k] === 0 ? answer += 1 : answer += 0
      }
    }
  }
  return answer;
}