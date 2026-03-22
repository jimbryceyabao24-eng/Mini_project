
let Barangays = [];

fetch('Data/calbayog_157_barangays_realistic.json')
    .then(response => response.json())
    .then(data => Barangays.push(...data))

    function FindMatch(wordToMatch, Barangays){
        return Barangays.filter(place => {
        //Here we need to figure out if the city or barangay state matches the what was searched
            const regex = new RegExp(wordToMatch, 'gi');
            return place.brgy.match(regex) || place.state.match(regex);
        })

    }

    function displayMatches() {
        const matchArray = FindMatch(this.value, Barangays).slice(0, 10);

        const regex = new RegExp(this.value, 'gi');

        const html = matchArray.map(place => {
            const brgyName = place.brgy.replace(regex, match =>
                `<span class="highlight">${match}</span>`
            );

            return `
            <li>
                <span class ="name">${brgyName}, ${place.state}</span>
                <span class = "population">${place.population}</span>
            </li>`;
        }).join('');

    suggestions.innerHTML = html;

    }

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


searchInput.addEventListener('input', displayMatches);
