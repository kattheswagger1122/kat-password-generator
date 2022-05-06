// Assignment Code
// array variables
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"

// declaration
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordLength = prompt("Choose your own password length (between 8-30 characters): ");

  if (passwordLength<8){
    alert("Password length must be a number between 8-30 characters");
    determineLength();
  }else if (passwordLength>30){
    alert("Password length must be a number between 8-30 characters");
    determineLength();
  }else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-30 characters");
    determineLength();
  }else{
  alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
  }
  return passwordLength;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
