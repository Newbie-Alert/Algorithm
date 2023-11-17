https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  var answer = -1;

  return answer;
}


function solution(price, money, count) {
  var answer = -1;
  let sum = 0
  for (let i = 1; i <= count; i++) {
    sum += price * i
    money < sum ? answer = sum - money : answer = 0
  }
  return answer;
}