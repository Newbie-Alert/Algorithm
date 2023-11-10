https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
  var answer = 0;
  return answer;
}


function solution(n) {
  let min = []
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      min.push(i);
    }
  }
  console.log(min)
  return min[0];
}

solution(124058)