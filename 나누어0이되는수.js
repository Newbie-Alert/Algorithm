https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  var answer = [];
  return answer;
}


function solution(arr, divisor) {
  var answer = [];
  arr.forEach(el => {
    if (el % divisor === 0) answer.push(el);
  })
  let sorted = answer.sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : sorted;
}