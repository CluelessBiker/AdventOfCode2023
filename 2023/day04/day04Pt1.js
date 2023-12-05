const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
	const lines = data.split('\n').filter((n) => n);

	/**
	 * An interesting thing happened when I used .split(' ')
	 * Numbers such as 3 became two entries in the new array
	 * [0, 3]
	 * To resolve this, I switched to .match(/\b\d+\b/g)
	 */
	const sides = (parts, ind) => {
		const newSide = parts[ind]
			.trim()
			.match(/\b\d+\b/g)
			.map(Number);
		return (uniqueUniqueNumbers = [...new Set(newSide)]);
	};

	const matchingNumbers = (data) => {
		const numbers = data.split(': ');
		const parts = numbers[1].split(' | ');

		const leftSide = sides(parts, 0);
		const rightSide = sides(parts, 1);

		let match = 0;

		for (const number of leftSide) {
			if (rightSide.includes(number)) {
				match++;
			}
		}

		return match;
	};

	const allMatches = lines
		.map((it) => matchingNumbers(it))
		.filter((num) => num !== 0);

	const calculateCards = allMatches.map((it) => Math.pow(2, it - 1));
	const tally = calculateCards.map((x) => x).reduce((a, x) => a + x, 0);
	console.log(tally);
});
