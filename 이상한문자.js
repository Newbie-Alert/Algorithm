https://school.programmers.co.kr/learn/courses/30/lessons/12930


function solution(s) {
  var answer = '';
  return answer;
}


function solution(s) {
  var answer = '';
  let splited = s.split(' ');
  console.log(splited);
  for (let i = 0; i < splited.length; i++) {
    answer += Array.from(splited[i]).map(el => splited[i].indexOf(el) % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('') + ' '
  }

  return answer;
}

console.log(solution("try hello world"));