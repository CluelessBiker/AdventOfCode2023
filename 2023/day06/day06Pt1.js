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
	return newSide = lines[ind]
	  .trim()
	  .match(/\b\d+\b/g)
	  .map(Number)

  }

  const times = sides(0);
  const distances = sides(1)

  const numberOfWays = (time, ind) => {
    let ways = [];

    for (let i = 0; i <= time; i++) {
      const millie = i * (time - i);
      console.log(millie)

      if (millie > distances[ind]) {
        ways.push(i)
      }
	  }
	  return ways.length;
  }

  const tallyPerRace = times.map((time, ind) => numberOfWays(time, ind))

  const tally = tallyPerRace.map((x) => x).reduce((a, x) => a * x);
  console.log(tally);
});
