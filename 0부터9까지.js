https://school.programmers.co.kr/learn/courses/30/lessons/86051

// function solution(numbers) {
//   var answer = -1;
//   return answer;
// }


function solution(numbers) {
  let sorted = numbers.sort((a, b) => a - b)
  let answer = 0;

  for (let i = 0; i < 9; i++) {
    if (sorted[i + 1] - sorted[i] != 1) {
      answer += sorted[i] + 1
      console.log(answer);
    }
  }
  return answer
}

let numbers = [1, 2, 3, 4, 6, 7, 8, 0]

console.log(solution(numbers));