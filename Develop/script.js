

var numbers = [0,1,2,3,4,5,6,7,8,9]
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specialchar = ["!","@","#","$","%","&","*","(",")"]



myName = "Bill"

console.log(letters)

numbers
letters
specialchar


console.log(Math.random(numbers))





function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(numbers))





//Prompts to be added somewhere


var upperCase = prompt("Upper Case Letters?", "");
var specialChar













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








// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page




//need a list of number
//need a list of lower case letters
//need a list of upper case letters
//need a list of special characters


//need to ask user - prompt - lenth of password (8 - 128 characters)
  //need to validate to ensure number provided is >8 < 128
//need to aks user - prompt - if they want Upper case letters
  //if yes add upper case letters to new string
//need to ask user - prompt - if they want special characters
  //if yes add upper case letters to new string


//create new string with all the variables required - need to figure out how to get minimum number of letters from each of the variables and then pass to new to create a new variable that matches the lenght provided above.












//This is the code to generate radom number at least two maybe more and have the numbers then sepearated to individual integers
var numbers = (
  Math.floor(Math.random() * 1000 +10).toString().split("")
)

//This will determine the split string for letters and characters

var lower = ("abcdefghijklmnopqrstuvwxyz".split(""))
var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""))
var special = ("!@#$%^&*()+=?").split("")




var a = ("abcdefghijklmnopqrstuvwxyz")
var b = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var c = ("!@#$%^&*()")
var d = (1234567890)
var z = a

var you = {
    codeLength: 0,
    upper: true,
    specialcharacter: true,
    numberin: true,
     }


     if(you.upper===true && you.specialcharacter===false && you.numberin ===false){
      var z = z.concat(b)
   } 
   else if(you.upper===true && you.specialcharacter===true && you.numberin === false){
       var z=z.concat(b, c)
   }
   else if (you.upper===true && you.specialcharacter===true && you.numberin === true){
       var z=z.concat(b,c,d)
   }
   else if(you.upper===true && you.specialcharacter===false && you.numberin === true){
       var z=z.concat(b, d)
   }
   else if (you.upper===false && you.specialcharacter===true && you.numberin === false){
       var z=z.concat(c)
   }
   else if (you.upper===false && you.specialcharacter===false && you.numberin === true){
       var z=z.concat(d)
   }
   else { var z=z}

 


console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(z)



// Determine the password up to the codelenght specified
var emptyString = "";

while (emptyString.length < you.codeLength){
    emptyString += z[Math.floor(Math.random() * z.length) ];
    console.log(emptyString)
}

console.log(emptyString)

function findpassWord(str){
    var strSplit = emptyString.split(" ")
    
}


//need to validate for all criteria - if met stop if not met try again


