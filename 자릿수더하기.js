https://school.programmers.co.kr/learn/courses/30/lessons/12931


function solution(n) {
  var answer = 0;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript')

  return answer;
}



function solution(n) {
  let arr = String(n).split('').map(el => Number(el))
  let sum = 0;
  let answer = arr.reduce((acc, cur) => acc + cur, sum);
  return answer
}

console.log(solution(123))