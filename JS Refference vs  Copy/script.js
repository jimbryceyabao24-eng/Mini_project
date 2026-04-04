//start with strings numbers and booleans
//let age = 100;
//let age2 = age;
//console.log(age, age2);

//age = 200;
//console.log(age, age2);

//let name = 'bryce';
//let name2 = name;
//console.log(name, name2);

//name = 'jonathan';
//console.log(name, name2);

//Let's say we have on array
const players = ['jordan', 'Kobe', 'Wesbrook', 'jackson'];
//and we want to make a copy of it.
const team = players;
console.log(players, team);
//You might  think we can just do something like this.
team[3] = 'Micheal';
//However what happens when we update that array?

//now here's the problem

//oh no - we have edited the original array too!

//Why? It's because that is an array reference, not an array copy.They both point to the same array!

//So, how do we fix this? We take a copy instead!
const team2 = players.slice();
//one day 

//or create a new array and concat the old one in 
const team3 = [].concat(players);

//or use the new ES6 spread
const team4 = [...players];
team4[3] = 'Mamba';

const team5 = Array.from(players);
//now when we update it, the orignal one isn't changed

//The same thing goes for objects , let's say we have a person object 

//With objects
const person = {
    name: 'Wes Bos',
    age: 50
}

//and think we make a copy:
const captain = person;
captain.number = 99;

//how do we take a copy instead?
const cap2 = Object.assign({}, person, {number : 99 , age: 12});
console.log(cap2);

//We will hopefully soon see the object ...spread
//const cap3 = {...person}

//Things to note - this is only 1 level deep - both for arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name : 'wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: '@bryce'
    }
}

console.clear();
console.log(wes);


const dev = Object.assign({}, wes);