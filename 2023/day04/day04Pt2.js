const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
	const lines = data.split('\n').filter((n) => n);

	const cardCount = new Array(lines.length).fill(1);

	const sides = (parts, side) => {
		const newSide = parts[side]
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

	const allMatches = lines.map((it) => matchingNumbers(it));

	for (let i = 0; i < allMatches.length; i++) {
		const matches = allMatches[i];
		const startIndex = i + 1;

		if (matches > 0) {
			for (
				let j = startIndex;
				j < startIndex + matches && j < cardCount.length;
				j++
			) {
				if (cardCount[j]) {
					cardCount[j] += cardCount[i] || 0;
				}
			}
		}
	}

	const tally = cardCount.map((x) => x).reduce((a, x) => a + x, 0);
	// console.log(tally);
});
