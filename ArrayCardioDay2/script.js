//ArrayCardioDay2//
const people = [
    { name: "Alice", year: 2001 },
    { name: "Bob", year: 1999 },
    { name: "Charlie", year: 2015 },
    { name: "Diana", year: 2000 },
    { name: "Ethan", year: 2002 }
];

const comment = [
    { id: 145834, text: "Learn JavaScript basics" },
    { id: 299843, text: "Practice coding every day" },
    { id: 335353, text: "Build a small project" },
    { id: 435950, text: "Understand arrays and objects" },
    { id: 533695, text: "Improve problem-solving skills" }
]


//Some and Every Checks
//Array.prototype.some()//is at least one person 19?
/*const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19){
        return true;
    }
})*/
const isAdult = people.some(person =>((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});
//Array.prototype.every()// is everyone 19?
const allAdult = people.every(person =>((new Date()).getFullYear()) - person.year >= 19);

console.log({allAdult});

//Array.prototype.find()
//Find is like filter, but instead returns just the one you are looking for
//Find the comments with the ID of 335353
/*const comments = comment.find(function(comment){
    if(comment.id === 335353){
        return true;
    }
});*/
const comments = comment.find(comment => comment.id === 335353);

console.log(comments);

//Array.prototype.findIndex()
//Find the comment with this ID
//Delete the comment with the ID of 335353
const index = comment.findIndex(comment => comment.id === 335353);
console.log(index);

comment.splice(index, 1);
