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
const results = [];

const hasSymbol = (string) => {
	if (string?.length && string.split('').find((x) => isNaN(x) && x !== '.'))
		return true;
	return false;
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

		if (
			hasSymbol(top) ||
			hasSymbol(bottom) ||
			hasSymbol(left) ||
			hasSymbol(right)
		)
			results.push(Number(num));
	}
}

const tally = results.reduce((acc, num) => acc + num, 0);
console.log(tally);
