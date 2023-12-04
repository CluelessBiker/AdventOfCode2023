const fs = require('fs');

const listArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')


const arrayOfNum = (array) => {
  const banana = array.map(str => str.replace(/[^0-9]/g, ""));
  return banana
}

// console.log(arrayOfNum(listArray))
const numArray = arrayOfNum(listArray)

const codeNums = (array) => {
  return array.map(num => {
    return num[0] + num[num.length -1]
  })
}

// console.log(codeNums(numArray))
const codeDigits = codeNums(numArray)

const finalCode = (array) => {
  return array.map(num => Number(num)).reduce((acc, num) => acc + num, 0)
}

console.log(finalCode(codeDigits))
// 54597