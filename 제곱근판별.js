https://school.programmers.co.kr/learn/courses/30/lessons/12934

// function solution(n) {
//   var answer = 0;
//   return answer;
// }

function solution(n) {
  let root = Math.sqrt(n); // 제곱근 구하기
  var answer = Math.pow(root + 1, 2); // answer는 (제곱근 + 1)을 제곱
  if (root % 1 !== 0) { // 정수인지 판별하려면 1로 나누었을 때 0 되어야 하는데 아니라면 answer = -1로
    answer = -1;
  }

  return answer;
}


console.log(solution(121));