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

// Confirm to exit or continue Generate Password execution.
function confirmGeneratePassword(output) {
  const confirmMessage = `
${output}

Do you want to continue Generate Password ?
`;

  if (!confirm(confirmMessage)) {
    throw "User cancelled Generate Password.";
  }
}

// Validate password length.
function validPasswordLength(length) {
  return length && !Number.isNaN(length) && length >= 10 && length <= 64;
}

// Get user input for password length.
function getPasswordLength() {

  let passwordLength = 0;
  let isValidLength = false;

  do {
    const userInput = prompt("Enter password length (min:10, max:64 characters)");

    passwordLength = Number.parseInt(userInput);

    isValidLength = validPasswordLength(passwordLength);

    if (!isValidLength) {
      confirmGeneratePassword("The password length must be between 10 and 64 characters.");
    }
  } while (!isValidLength);

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

    if (!charactersTypes.length) {
      confirmGeneratePassword("At least one character type must be selected.");
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
  return Math.floor(Math.random() * arr.length);
}

// Function to generate password with user input
function generatePassword(passwordLength, passwordCharactersTypes) {

  let password = "";

  while (password.length < passwordLength) {

    const index = getRandom(passwordCharactersTypes);
    const character = passwordCharactersTypes[index];

    password += character;
  }

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
