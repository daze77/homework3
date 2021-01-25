// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


//generate password function



//check user inputs for characters


function generatePassword {
  // character sets
  var lowerChar = "abcdefghijklmnopqrstuvwxyz"
  var upperChar = lowerChar.toUpperCase()
  var numbchar = "012345679"
  var specialChar = "!@#$%^&*()_+"


  var passwordLength = prompt ("Please select the length of your password between 8-128 characters","enter password length between 8 and 128 characters");

  if( 7 > passwordLength < 129 ){
    
    }
    else {
      alert("Your password is invalid, please try again and ensure you select a Password no less than 8 and no greater than 128 characters")
      generatePassword();
    }
  
  var upperCharuse = confirm("Do you want to use UPPER CASE characters in your password?")
  var specialCharuse = confirm("Do you want to use Special '!@#$%^&*()' characters in your password?")
  var numbuse = confirm("Do you want to use Numbers in your password?")
  
  
  console.log(passwordLength)
  console.log(upperCharuse)
  console.log(specialCharuse)
  console.log(numbuse)










}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////
/*
//Fill's notes
// character sets
var charsLower = "abcdefghijklmnopqrstuvwxyz"
var charsUpper = charsLower.toUpperCase()
var charsNumbers = "012345679"
var charsSpecial = "!@#$%^&*()_+"
// TODO from user prompt
var userLength = 10
// TODO userLower/userUpper/userNums/userSpecial from confirm boxes.
var userLower = userUpper = userNums = userSpecial = true
// build the random picker string based on user prompts
var charSet =( userLower ? charsLower : '' )
            +( userUpper ? charsUpper : '' )
            +( userNums  ? charsNumbers : '' )
            +( userSpecial ? charsSpecial : '' )
// generate the string
var password = ""
for( var i=0; i<userLength; i++ ){
    var charPick = Math.floor(Math.random()*charSet.length)
    password += charSet[charPick]
}
// now plug this into the DOM
document.querySelector(".answer").value = password
//Fills nots
*/



//character sets







//request user inputs and set variables



document.querySelector('#generate').addEventListener('click', xxx)