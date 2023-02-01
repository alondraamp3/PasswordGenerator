// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerChar = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specialChar = ['@', '!', '#', '$', '&', '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '?', '[', ']', '/', '?', '^', '_', '{', '}', '`', '~']
var numberChar = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 
function generatePassword ()
  var passwordLength = prompt ("How long would you like your password to be?")
  if (passwordLength <8){
    alert("Your password is too short! Must be more than 8 characters.")
  } if (passwordLength >128){
    alert("Your password is too long! Must be less than 128 characters.")
  } if (isNaN(passwordLength)) { 
    alert("Must enter a valid number.")
  }
  var upperCase = confirm ("Would you like to include uper case letters?")
  var lowerCase = confirm ("Would you like to include lower case letters?")
  var symbols = confirm ("Would you like to include symbols?")
  var numbers = confirm ("Would you like to include numbers?")

if (upperCase === false && lowerCase === false && symbols === false && numbers === false){
  alert("At least one character set must be chosen to form a password.")
}
 





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
