const fs = require('fs');

const listArray = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')

const textToNum = (string) => {
  //   const numbers = {
  //     one: '1',
  //     two: '2',
  //     three: '3',
  //     four: '4',
  //     five: '5',
  //     six: '6',
  //     seven: '7',
  //     eight: '8',
  //     nine: '9',
  //   }
    
  // return string.replace(/\b\s*(one|two|three|four|five|six|seven|eight|nine)\s*\b/gi, (matched, number) => numbers[number]);
  
    const one = string.replace(/one/gi, "o1e");
    const two = one.replace(/two/gi, "t2o");
    const three = two.replace(/three/gi, "th3ee");
    const four = three.replace(/four/gi, "f4ur");
    const five = four.replace(/five/gi, "f5ve");
    const six = five.replace(/six/gi, "s6x");
    const seven = six.replace(/seven/gi, "se7en");
    const eight = seven.replace(/eight/gi, "ei8ht");
    const nine = eight.replace(/nine/gi, "ni9e");
    
    return nine
  }
  
  const convertedArray = (array) => {
    return array.map(it => textToNum(it))
  }

const converted = convertedArray(listArray)

const arrayOfNum = (array) => {
  const banana = array.map(str => str.replace(/[^0-9]/g, ""));
  return banana
}

// console.log(arrayOfNum(listArray))
const numArray = arrayOfNum(converted)

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
// 54504