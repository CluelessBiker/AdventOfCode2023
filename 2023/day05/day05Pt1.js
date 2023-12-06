const fs = require('fs');

fs.readFile('docs/input.txt', 'utf-8', (err, data) => {
	if (err) {
		console.error('Error reading the file:', err);
		return;
	}

	const lines = data.split('\n\n').filter((n) => n);

	const sections = (data) => {
		return (halves = data.split('\n').join(' ').split(': ')[1].split(' '));
		// .map(it => Number(it))
	};

	const instructions = {
		seeds: lines[0].split(': ')[1].split(' '), //.map(it => Number(it)),
		seedToSoil: sections(lines[1]),
		soilToFertilizer: sections(lines[2]),
		fertilizerToWater: sections(lines[3]),
		waterToLight: sections(lines[4]),
		temperatureToHumidity: sections(lines[5]),
		humidityToLocation: sections(lines[6]),
	};
});
