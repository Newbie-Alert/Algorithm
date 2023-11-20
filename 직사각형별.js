https://school.programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  console.log(a);
  console.log(b);
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");  // data = '5 3' 입력 시, split을 적용하여 n = ['5', '3']
  const a = Number(n[0]), b = Number(n[1]);  // a = 5, b = 3
  let star = '';

  for (let i = 0; i < b; i++) {  // 0 줄, 1 줄,  2 줄 - b번째 줄까지......
    for (let j = 0; j < a; j++) { // 0 ~ a번 만큼 별 찍기
      star += '*'
    }
    star += '\n' // 다음 줄로
  }

  console.log(star) // 출력
});