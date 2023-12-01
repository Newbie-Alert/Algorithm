https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  var answer = '';
  return answer;
}



function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    // 공백은 공백
    if (s[i] === " ") answer += " ";
    else {
      // 주어진 s를 ascii 코드로 변환 "AB" => A.charCodeAt(0) = 65, B.charCodeAt(1) = 66 
      let charCode = s.charCodeAt(i);
      console.log(charCode)
      if (charCode <= 90) {  // 대문자
        charCode += n;
        // ascii 코드가 대문자 범위를 넘어가면 -26을 해서 대문자 문자열 범위 내로
        if (charCode > 90) charCode -= 26;
      }
      else { // 소문자
        charCode += n;
        // ascii 코드가 대문자 범위를 넘어가면 -26을 해서 소문자 문자열 범위 내로
        if (charCode > 122) charCode -= 26;
      }
      answer += String.fromCharCode(charCode);
    }
  }
  return answer;
}