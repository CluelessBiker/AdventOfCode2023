const fs = require('fs');

const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

/**
 * Credit for this challenge goes to
 * https://www.youtube.com/@frontend-coder
 * as I struggled with the concept,
 * but wished to complete the challenge as a learning exercise
 */

const rows = lines.length;
const cols = lines[0].length;

let gears = {};

const findGears = (string, num, i, j) => {
	j = j === -1 ? 0 : j;

	for (let k = 0; string.length; k++) {
		const char = string.charAt(k);
		if (char === '*') {
			const ind = `${i}-${j + k}`;
			gears[ind] = gears[ind]
				? [...gears[ind], parseInt(num)]
				: [parseInt(num)];
		}
	}
};

for (let i = 0; i < rows; i++) {
	for (let j = 0; j < cols; j++) {
		const n = '' + lines[i][j];
		if (isNaN(n)) continue;

		let num = n;
		while (++j < cols) {
			if (Number.isInteger(parseInt(lines[i][j]))) num += lines[i][j];
			else break;
		}

		const top =
			i === 0 ? '' : lines[i - 1].substring(j - num.length - 1, j + 1);
		const bottom =
			i === rows - 1 ? '' : lines[i + 1].substring(j - num.length - 1, j + 1);
		const left = lines[i][j - num.length - 1] || '';
		const right = lines[i][j] || '';

		findGears(top, num, i - 1, num.length - 1);
		findGears(bottom, num, i + 1, j - num.length - 1);
		findGears(left, num, i, j - num.length - 1);
		findGears(right, num, i, j);
	}
}

const tally = Object.values(gears)
	.filter((it) => it.length === 2)
	.map((it) => it[0] * it[1])
	.reduce((acc, num) => acc + num, 0);
// console.log(tally);
console.log(gears);
