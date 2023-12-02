const fs = require('fs');

const lines = fs.readFileSync('docs/day2.txt', 'utf-8').trim().split('\n')

const separateGames = (data) => {
  return data.map(it => it.split(': ')[1])
}

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

const allGames = separateRounds(sets)

const findMaxColorsPerGame = (allGames) => {
  return allGames.map((gameSet) => {
    let maxColors = {
      red: 0,
      green: 0,
      blue: 0,
    };

    gameSet.forEach((game) => {
      maxColors.red = Math.max(maxColors.red, game.red);
      maxColors.green = Math.max(maxColors.green, game.green);
      maxColors.blue = Math.max(maxColors.blue, game.blue);
    });

    return maxColors;
  });
};

const maxColorsPerGame = findMaxColorsPerGame(allGames);
const thirdPower = maxColorsPerGame.map(num => num.red * num.blue * num.green)
const tally = thirdPower.reduce((sum, index) => sum + index, 0);
// console.log(tally)
// 71036
