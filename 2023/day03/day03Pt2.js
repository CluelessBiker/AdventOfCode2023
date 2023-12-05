const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
	const lines = data.split('\n').filter((n) => n);
	let rows = lines.length;
	let cols = lines[0].length;

	const gears = {};

	const findGears = (str, num, i, j) => {
		j = j === -1 ? 0 : j;
		for (let k = 0; k < str.length; k++) {
			const ch = str.charAt(k);
			if (ch === '*') {
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

			findGears(top, num, i - 1, j - num.length - 1);
			findGears(bottom, num, i + 1, j - num.length - 1);
			findGears(left, num, i, j - num.length - 1);
			findGears(right, num, i, j);
		}
	}

	const tally = Object.values(gears)
		.filter((x) => x.length === 2)
		.map((x) => x[0] * x[1])
		.reduce((a, x) => a + x, 0);

	console.log(tally);
});
