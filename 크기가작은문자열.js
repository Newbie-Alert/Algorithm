https://school.programmers.co.kr/learn/courses/30/lessons/147355


function solution(t, p) {
  var answer = 0;
  return answer;
}



function solution(t, p) {
  let count = 0;

  // t: "3141592", p: 271
  for (let i = 0; i < t.length; i++) {
    const sliced = t.slice(i, i + p.length);
    // i = 0: "314"
    // i = 1: "141"
    // i = 2: "415"
    // i = 3: "592"
    // i = 4: "92"
    // i = 5: "2"

    if (sliced.length === p.length && Number(sliced) <= Number(p)) {
      count += 1;
    }
  }

  return count;
}



console.log(solution(t, p))