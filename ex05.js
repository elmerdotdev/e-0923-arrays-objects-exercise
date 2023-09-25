/**
 * Create an object named 'student' with the following properties:
 * 
 * - firstname
 * - lastname
 * - age
 * - address
 * 
 * Print all properties using one console.log. Use template literals.
 * 
 * Example output:
 * Elmer Balbin is 50 years old and lives in Vancouver.
 * 
 */

let student = {
  firstname: 'Elmer',
  lastname: 'Balbin',
  age: 30,
  address: 'Vancouver'
}

console.log(`${student.firstname} ${student.lastname} is ${student.age} years old.`)