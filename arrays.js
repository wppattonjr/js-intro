//console.log("Arrays");

//SPLIT
/* const bestFriend = "Trinity,Remele,Oliva";

const bestFriendArray = bestFriend.split(",");

console.log("My best friend in array format", bestFriendArray);
 */


//JOIN
/* const array2 = ["cow", "dog", "cat"];
const string = array2.join(", ");
console.log(string.split(", ")); */

//POP
/* const animals = ["dog", "cat"]; */

/* const lastAnimal = animals.pop();
console.log("animals", animals);
console.log("last animal", lastAnimal);

console.log(typeof lastAnimal); */

/* const first = animals.shift()
console.log(first);
console.log("animals", animals); */

/* animals.unshift("bear");
console.log(animals);

animals.push("cow");
console.log(animals); */

//Write a function that takes an array and index and prints out that value

/* const animals = ["dog", "cat"];

const arrayAndIndex = (array, index) => {
    return array[index];

}

console.log(arrayAndIndex(animals, 1));
 */
//Write a function that takes an array of something and tells you if the name "Greg" is in that array

const names = ["Wendell", "Chris", "Dr. T", "Greg", "Jason"];

const searchForName = (arrayName) => {
  return arrayName.includes("Greg")
  
}

console.log(searchForName(names));