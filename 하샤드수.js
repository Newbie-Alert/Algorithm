https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  var answer = true;
  return answer;
}

// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1 + 8=9이고
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
  // reduce를 통해 각 요소를 더할 임시 변수 temp입니다.
  let temp = 0
  // x를 문자열로 형변환 후 배열 메서드인 reduce를 통해 x의 각 자리수를 더합니다.
  let sum = ((String(x).split('')).reduce((acc, cur) => Number(acc) + Number(cur), temp));
  // x를 x의 각 자리 수를 더한 값으로 나눴을 때
  // false나머지가 0이면 answer = true 
  // 아니면 answer = false를 return 합니다
  let answer = x % sum === 0 ? true : false;
  return answer;
}


console.log(solution(11));