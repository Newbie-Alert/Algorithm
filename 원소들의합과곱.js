let mul;
let addMul;

function solution(num_list) {
  mul = num_list.reduce((acc, curVal) => {
    return acc * curVal
  })

  addMul = num_list.reduce((acc, curVal) => {
    return (acc + curVal)
  })
  return mul < addMul ** 2 ? 1 : 0
}

solution([3, 4, 5, 2, 1])