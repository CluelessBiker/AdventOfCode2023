const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'docs', 'input.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const lines = data.split('\n').filter((n) => n);

  const sides = (ind) => {
    const newSide = lines[ind]
      .trim()
      .replace(/[^0-9]/g, "")
    
    return Number(newSide)
  }

  const time = sides(0);
  const distance = sides(1)
  
  
  /**
   * This solution broke the matrix. 
   * Going to need proper math....
  */
  // const ways = []
  // for (let i = 0; i <= i; i++) {
  //   const millie = i * (time - i);
  //   if (millie > distance) {
  //     ways.push(i)
  //   }
  // }

  // ...found the math, it is not my own.
  const sqrt = Math.sqrt(time ** 2 - 4 * distance);
  const total = Math.ceil((time + sqrt) / 2) - Math.floor((time - sqrt) / 2) - 1;

  console.log(total);

});
