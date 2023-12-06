/**
 * Function based on my original understanding of Pt.2
 * This logic is ultimately incorrect.
 * Logic is intended to tally up the score of the subsequesnt cards
 * index: 2 / count: 4 => it will calculate the total of
 * the values in positions 3, 4, 5, 6 of the array.
 */
// const calculateCards = allMatches.map((it) => it === 0 ? 0 : Math.pow(2, it - 1));
// const sumOfSubsequent = (count, index) => {
// 	const startIndex = index + 1;
// 	const endIndex = startIndex + count - 1;
// 	if (startIndex >= calculateCards.length) {
// 		return 0;
// 	}
// 	const selectedNumbers = calculateCards.slice(startIndex, endIndex + 1);
// 	return sum = selectedNumbers.reduce((acc, num) => acc + num, 0);
// }

// const bananaWaffle = allMatches.map((num, index) => sumOfSubsequent(num, index))

/**
 * Second function also incorrect.
 * Once again, have not understood what is being asked.
 */
// for (let i = 0; i < allMatches.length; i++) {
// 	const matches = allMatches[i];
// 	const startIndex = i + 1;
// 	const endIndex = startIndex + matches - 1;

// 	for (let j = startIndex; j <= endIndex && j < cardCount.length; j++) {
// 		cardCount[j]++;
// 	}
// }
