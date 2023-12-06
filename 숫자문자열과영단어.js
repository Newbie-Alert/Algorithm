https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  var answer = 0;
  return answer;
}


function solution(s) {
  let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    // i = 0
    // [ 'one4seveneight' ] -> ['', '4seveneight']
    // i = 7
    // [ '14seveneight' ] -> ['14', 'eight']
    // i = 8
    // ['147', '']


    answer = arr.join(i);
    // i = 0
    // ['', '4seveneight'] -> 14seveneight
    // i = 7
    // 147eight
    // i = 8
    // 1478
    console.log(answer);
  }

  return Number(answer);
}


console.log(solution("one4seveneight"));