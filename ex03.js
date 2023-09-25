/**
 * Using the array from ex01.js, insert one new name into the array between the 5th and 6th names using the .splice method.
 * Print the array using for loop
 */

let names = ["John", "Joe", "Mark", "Moe", "May", "David", "Jen", "Yu", "Zhang", "Chen"]
names.splice(5, 0, "Elmer")
console.log(names)