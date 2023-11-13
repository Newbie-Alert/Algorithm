https://school.programmers.co.kr/learn/courses/30/lessons/12934

// function solution(n) {
//   var answer = 0;
//   return answer;
// }

function solution(n) {
  let root = Math.sqrt(n);
  var answer = Math.pow(root + 1, 2);
  if (root % 1 !== 0) {
    answer = -1;
  }

  return answer;
}


console.log(solution(121));