// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define veriables or lists of like items that we are choosing from
//in this case for passwords lowercase letters, uppercase letter,
//numbers, and special characters
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = lowercase.map((lowercase) => lowercase.toUpperCase());
var numbers = "0123456789".split("");
var special = "!@#$%^&*".split("");

//proves all arrays show what we need
console.log(lowercase);
console.log(uppercase);
console.log(numbers);
console.log(special);

//ask for the length of the password
var length = prompt("How long would you like your password to be?");
console.log("Your password length will be " + length + " digits long.");

//What characters are we adding?
//there must be a way to for loop this, I got stuck on this and this
//is why I'm turning in late. I didn't think to just make it work
//and turn it in and bother on specifics later.
var all = []; //represents all selected characters to include
//Lowercase Letters
if (confirm("Would you like to include lowercase letters?")) {
  // Save it!
  console.log("Lowercase letters added the database.");
  //add it to new full array of chosen characters
  var all = all.concat(lowercase);
} else {
  // Do nothing!
  console.log("Lowercase letters not added to the database.");
}
//Uppercase letter
if (confirm("Would you like to include uppercase letters?")) {
  console.log("Uppercase letters added the database.");
  var all = all.concat(uppercase);
} else {
  console.log("Uppercase letters not added to the database.");
}
//numbers
if (confirm("Would you like to include numbers?")) {
  console.log("Numbers added the database.");
  var all = all.concat(numbers);
} else {
  console.log("Numbers not added to the database.");
}
//special characters
if (confirm("Would you like to include special characters?")) {
  console.log("Special characters added the database.");
  var all = all.concat(special);
} else {
  console.log("Special characters not added to the database.");
}

var range = all.length;
console.log(all);
console.log(range);

//to choose a random character out of all of the variable selected
var random = [];
var pass = [];
while (random.length < length) {
  var r = Math.floor(Math.random() * range) + 1;
  if (random.indexOf(r) === -1) random.push(r);
  //basically r is a chosen random number
  //random is an array of the chosen numbers which idk if I need but
  //I'll keep for now.
  //This is to pull from the array of ALL of the characters
  //where the random numbers allign in the array.
  //so if I randomly got r as a 0 and a 1,
  //I'd expect pass a & b to be returned.
  var pass = pass.concat(all[r]);
}

console.log(random);
console.log(pass); //shows each character of the password.
password = pass.join("");
console.log(password);
//now I need to take those characters and call them to a format
//that can be copypastaed
console.log("Your password is " + password);
alert(password);

//I was able to get to this point but I just don't understand how to make
//this into a working fuction where you select the Generate button
//to be handed the prompts and then the password shows in
//the your password field.
