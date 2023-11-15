https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  var answer = '';
  return answer;
}

function solution(phone_number) {
  var answer = '';
  // 번호 뒷자리 전까지를 추출
  let front = phone_number.substring(0, phone_number.length - 4)
  // 번호 뒤 ~ 뒤에서 4번째까지 추출
  let back = phone_number.substring(phone_number.length, phone_number.length - 4)
  // 정규표현식이랑 맞는 부분을 *로 변경
  let star = front.replace(/[0-9]/g, '*')

  answer = star + back

  return answer;
}








let phone_number = "01033334444"

let star = (phone_number.substring(0, phone_number.length - 4))
// let back = phone_number.substring(phone_number.length, phone_number.length - 4)

console.log(star.replace(/[0-9]/g, '*'))



console.log(solution(phone_number));