// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Get user input for password length.
function getPasswordLength() {

  let passwordLength = 0;

  do {
    const userInput = prompt("Enter the password length (min:10, max:64 characters)");
    if (!userInput) throw "User cancelled password length input.";

    passwordLength = Number.parseInt(userInput);

  } while (Number.isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64);

  return passwordLength;
}

// Get user input for characters types.
function getCharactersTypes() {

  let charactersTypes = [];

  while (!charactersTypes.length) {

    if (confirm("Include special characters?")) {
      charactersTypes = charactersTypes.concat(specialCharacters); 
    }

    if (confirm("Include numeric characters?")) {
      charactersTypes = charactersTypes.concat(numericCharacters); 
    }

    if (confirm("Include lower cased characters?")) {
      charactersTypes = charactersTypes.concat(lowerCasedCharacters); 
    }

    if (confirm("Include upper cased characters?")) {
      charactersTypes = charactersTypes.concat(upperCasedCharacters); 
    }
  }

  return charactersTypes;
}

// Function to prompt user for password options.
function getPasswordOptions() {
  let passwordOptions = {
    length: 0,
    charatersTypes: []
  };
  
  passwordOptions.length = getPasswordLength();
  passwordOptions.charatersTypes = getCharactersTypes();

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword(length, charactersTypes) {
  let password = "";

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(password) {

  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Event listener that handles the Generate Password click.
function eventHandler() {
  try {

    // Input
    const passwordOptions = getPasswordOptions();

    // Output
    const password = generatePassword(passwordOptions.length, passwordOptions.charatersTypes);
    writePassword(password); 

  } catch (error) {
    console.log(error);
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', eventHandler);