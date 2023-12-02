const fs = require('fs');

const lines = fs.readFileSync('docs/day2.txt', 'utf-8').trim().split('\n')

const max = {
  red: 12,
  green: 13,
  blue: 14,
}
  
const separateGames = (data) => {
  return data.map(it => it.split(': ')[1])
}
  
// console.log('>>> SETS')
// console.log(separateGames(strings))
const sets = (separateGames(lines))
  
const separateRounds = (data) => {
  const allGames = data.map(it => {
    const games = it.split('; ');

    const gameResults = games.map((game, index) => {
      const colorCounts = game.split(', ');

      const gameObj = {
        game: index + 1,
        red: 0,
        green: 0,
        blue: 0,
      };

      colorCounts.forEach(colorCount => {
        const [count, color] = colorCount.split(' ');
        switch (color) {
          case 'red':
            gameObj.red = parseInt(count, 10);
            break;
          case 'green':
            gameObj.green = parseInt(count, 10);
            break;
          case 'blue':
            gameObj.blue = parseInt(count, 10);
            break;
        }
      });
      return gameObj;
    });
    return gameResults;
  });
  return allGames;
};

// console.log('>>> ROUNDS')
// console.log(separateRounds(sets))
const allGames = separateRounds(sets)

const checkMax = (data) => {
  return data.map(gameSet => {
    return gameSet.every(obj => {
      return obj.red <= max.red && obj.green <= max.green && obj.blue <= max.blue;
    });
  });
}
// console.log('>>> VALID GAMES')
// console.log(checkMax(allGames));

const valid = checkMax(allGames);

const validGames = valid.map((value, index) => (value ? index + 1 : 0));
// console.log(validGames);

const tally = validGames.reduce((sum, index) => sum + index, 0);
console.log(tally);