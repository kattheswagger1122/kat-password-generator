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
    uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
      uppercaseCheck = uppercaseCheck.toLowerCase();
  
      if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer Yes or No");
        determineUppercase();
  
      }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;
  
      }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
        uppercaseCheck = false;
        return uppercaseCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineUppercase();
      }
      return uppercaseCheck;
  }



//for users to see if they want numbers
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

// function for special characters
function determineSpecial(){
    specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
      specialCheck = specialCheck.toLowerCase();
  
      if (specialCheck === null || specialCheck === ""){
        alert("Please answer Yes or No");
        determineSpecial();
  
      }else if (specialCheck === "yes" || specialCheck ==="y"){
        specialCheck = true;
        return specialCheck;
  
      }else if (specialCheck === "no" || specialCheck ==="n"){
        specialCheck = false;
        return specialCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineSpecial();
      }
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
  
  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
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

