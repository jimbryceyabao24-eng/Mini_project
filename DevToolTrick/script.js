const dogs = [{name:'awki', age: 4},{name: 'browne', age: 6}];

function makeGreen(){
    const p = document.querySelector('p');

    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//Regular
console.log("Hello World");

//Interpolated
console.log('Hello I am a %s string!', 'Bryce');

//Styled
console.log('%c I am a Full stack web developer', 'font-size: 30px');

//Warning!
console.warn('Keep it up!');

//Error
console.error('Shit!');

//Info
console.info('Every year their is 365 days');

//Testing
p = document.querySelector('p');

console.assert(p.classList.contains('Hello'), 'That is wrong!' );

//Clearing
console.clear();

//Viewing DOM Elements
console.log(p);
console.dir(p);


console.clear();

//Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age * 2} old.`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count('wes');
console.count('wes');
console.count('wes');
console.count('you');
console.count('wes');
console.count('you');

//Timing
console.time('fetching data');
fetch('Data/calbayog_157_barangays_realistic.json')
    .then(data => data.json())
    .then(data =>{
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);    