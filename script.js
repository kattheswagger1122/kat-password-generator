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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

