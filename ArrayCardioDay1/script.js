const inventors = [
    { firstname: "John", lastname: "Doe", year: 1879, passed: 1955 },
    { firstname: "Jane", lastname: "Smith", year: 1645, passed: 1957 },
    { firstname: "Michael", lastname: "Johnson", year: 1564, passed: 1960 },
    { firstname: "Emily", lastname: "Davis", year: 1867, passed: 1990 },
    { firstname: "Daniel", lastname: "Martinez", year: 1855, passed: 2000 },
    { firstname: "Sophia", lastname: "Garcia", year: 1571, passed: 2011 },
    { firstname: "James", lastname: "Brown", year: 1647, passed: 2004 },
    { firstname: "Olivia", lastname: "Wilson", year: 1892, passed: 2021 },
    { firstname: "William", lastname: "Taylor", year: 1757, passed: 2003 },
    { firstname: "Ava", lastname: "Anderson", year: 1860, passed: 2002 }
];

const people = [ "John Doe", "Jane Smith", "Michael Johnson", "Emily Davis", "Daniel Martinez",
    "Sophia Garcia", "James Brown", "Olivia Wilson", "William Taylor", "Ava Anderson",
    "Alexander Thomas", "Isabella Hernandez", "Ethan Moore", "Mia Martin", "Jacob Jackson",
    "Charlotte Thompson", "Liam White", "Amelia Lopez", "Noah Lee", "Harper Gonzalez",
    "Lucas Harris", "Evelyn Clark", "Mason Lewis", "Abigail Robinson", "Logan Walker",
    "Ella Perez", "Elijah Hall", "Scarlett Young", "Oliver Allen", "Grace King",
    "Aiden Wright", "Chloe Scott", "Benjamin Green", "Victoria Adams", "Sebastian Baker",
    "Riley Nelson", "Jack Carter", "Aria Mitchell", "Owen Perez", "Lily Roberts",
    "Samuel Turner", "Zoey Phillips", "Matthew Campbell", "Nora Parker", "Joseph Evans",
    "Hannah Edwards", "David Collins", "Addison Stewart", "Carter Sanchez", "Leah Morris"
]


//Array protototype.filter()
//1.filter the list of investors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));


console.table(fifteen);

//Array prototype.map()
//2.Give us on array of the inventory first and last name.
const fullName = inventors.map(inventor => (`${inventor.firstname} ${inventor.lastname}`));
console.log(fullName);


//Array prototype.sort()
//3.Sort the inventors by birthdate, oldest to youngest.
const order = inventors.sort(function(a, b){
    if(a.year > b.year){
        return 1;
    }else{
        return -1;
    }
})

console.table(order);


//Array prototype.reduce()//
//4.How many years did all inventors live?//
const YearTotal = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(YearTotal);
//5.Sort the inventors by years lived//
const oldest = inventors.sort(function(a, b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if(lastGuy > nextGuy){
        return -1;
    }else{
        return 1;
    }
}) 

console.table(oldest);

//Sort Exercise
//6.Sort the people alphabetically by last name
const alpha = people.sort(function(lastOne, nextOne){
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');    

    return alast > blast ? 1: -1;
})

console.log(alpha);

//Reduce Exercise
//7.Sam up the instances of each of these

const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk',
    'car','van','car','truck'
];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }

    obj[item]++;
    return obj;
}, {});

console.log(transportation);
