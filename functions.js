/* console.log("functionstest"); */

/* const nuggetizer = (animal) => {
    return `processed ${animal}`;

}

console.log(nuggetizer("pig"));
console.log(nuggetizer("fish"));
console.log(nuggetizer("chicken"));
console.log(nuggetizer("student"));
 */

//Write a function that takes any number and returns that number plus 42

/* const plusFortyTwo = (anyNumber) => {
    return (anyNumber + 42);
}

console.log(plusFortyTwo(8)); */

//Write a function that takes in the year you were born and figures out how old you will be in 2099

const futureAge = (futureYear, yearBorn) => {
    age = (futureYear - yearBorn);
    return (`In the year ${futureYear} you will be ${age} years old.`);
}

console.log(futureAge(2099, 1979));
