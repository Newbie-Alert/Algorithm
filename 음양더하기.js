https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  var answer = 123456789;
  return answer;
}



function solution(absolutes, signs) {
  let answer = 0
  absolutes.forEach((absNum, index) => {
    answer += Number((signs[index] === true ? "+" : "-") + absNum);
  })
  return answer
}

console.log("-" + 5); // -5
console.log(typeof ("-" + 5)); // string