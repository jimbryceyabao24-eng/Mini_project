const bands = [
    "The Beatles",
    "A Tribe Called Quest",
    "Anberlin",
    "The Rolling Stones",
    "The Police",
    "Aerosmith",
    "The Killers",
    "The Weeknd",
    "An Endless Sporadic",
    "The Script",
    "A Perfect Circle",
    "The Cranberries",
    "The Smashing Pumpkins",
    "The Black Keys",
    "A Day To Remember",
    "The Chainsmokers",
    "An Horse",
    "The Strokes",
    "A Great Big World",
    "The Arctic Monkeys"
];

function strip(bandName){
    return bandName.replace(/^(a | the |an)/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.log(sortedBands);