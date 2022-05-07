// Assignment Code
// array variables
var generateBtn = document.querySelector("#generate");
var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*","(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", "`", "~", "<", ">", ".", "?", "/", "|"]

// declaration
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// determine length of the password
function determinePassword () {
  passwordLength = prompt("Choose your own password length (between 8-30 characters): ");

  if (passwordLength<8){
    alert("Password length must be a number between 8-30 characters");
    determinePassword();
  }else if (passwordLength>30){
    alert("Password length must be a number between 8-30 characters");
    determinePassword();
  }else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8-30 characters");
    determinePassword();
  }else{
  alert("Password length must be between 8-30 characters Try again");
  }
  return passwordLength;
}

//for users to see if they want uppercase
function determineUppercase(){
    uppercaseCheck = confirm("Do you want to include uppercase letters in your password? \n(Yes or No)");
      return uppercaseCheck;
  }



//for users to see if they want numbers
function determineNumbers(){
  numberCheck = confirm("Do you want to include numbers in your password? \n(Yes or No)");
    return numberCheck;
}

// function for special characters
function determineSpecial(){
    specialCheck = confirm("Do you want to include special characters in your password? \n(Yes or No)");
      return specialCheck;
  }

// random number generator
function generatePassword(){
    determinePassword();
    console.log(passwordLength);
    determineUppercase();
    console.log(uppercaseCheck);
    determineNumbers();
    console.log(numberCheck);
    determineSpecial();
    console.log(specialCheck);
  
  var characters = [];
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
      //replace all += to use the push method for arrays in order to combine the arrays 
    characters += uppercaseChar + numberChar + specialChar;
  
  }else if (uppercaseCheck && numberCheck){
    characters += uppercaseChar + numberChar;
  
  }else if (numberCheck && specialCheck){
    characters += numberChar + specialChar;
  
  }else if (uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;
  
  }else if (uppercaseCheck){
    characters += uppercaseChar;
  
  }else if(numberCheck){
    characters += numberChar;
  
  }else if (specialCheck){
    characters += specialChar;
  
  }else{
    characters === lowercaseChar;
  }
    for(var i = 0; i < passwordLength; i++){
        // change the code so instead of getting random character we want to get random index of the array that we push into the pasword variable 
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

  // wrtie password function
function writePassword() {
    var password1 = "";
    password1 = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password1;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

