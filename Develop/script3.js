// Assignment Code
var generateBtn = document.querySelector("#generate");


//generate the variables to be used within the password generator
var a = ("abcdefghijklmnopqrstuvwxyz")
var b = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var c = ("!@#$%^&*()")
var d = (1234567890)
var baseCharSet = a


//////////Testing variables are showing up properly
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(baseCharSet)


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
}
 

//generate user prompts for inputs to questions
    var passwordLength = parseInt(prompt("Please select the length of your password", "Password from 8 - 128 characters!"))
    // if(passwordLength < 8 || passwordLength > 128){
    //     var passwordLength = parseInt(prompt("Please try again, password length must be no less than 7 characters and no greater than 128 characters", "Pleas try again"))
    // }



    var upperLetters = confirm("password to include uppers?")
    var specialLetters = confirm("password to include special characters?")
    var numberstoo = confirm("password to include numbers?")
    var lowerLetters = true

console.log(baseCharSet)
console.log(newbaseCharSet)


//Console.log to verify the input is being logged  
console.log(passwordLength)
console.log(upperLetters)
console.log(specialLetters)
console.log(numberstoo)

// This code is to determine what string to use to create the password based on the boolean results of what the person entered on screen

if(upperLetters===true && specialLetters===false && numberstoo===false){
var newbaseCharSet =  baseCharSet.concat(b)
console.log(newbaseCharSet)
}

else if(upperLetters===true && specialLetters===true && numberstoo=== false){
var newbaseCharSet=baseCharSet.concat(b, c)
console.log(newbaseCharSet)
}

else if(upperLetters===true && specialLetters===true && numberstoo=== true){
newbaseCharSet=baseCharSet.concat(b, c, d)
console.log(newbaseCharSet)
}

else if(upperLetters===true && specialLetters===false && numberstoo=== true){
var newbaseCharSet=baseCharSet.concat(b, d)
console.log(newbaseCharSet)
}

else if (upperLetters===false && specialLetters===true && numberstoo=== false){
var newbaseCharSet=baseCharSet.concat(c)
console.log(newbaseCharSet)
}
else if (upperLetters===false && specialLetters===false && numberstoo=== true){
var newbaseCharSet=baseCharSet.concat(d)
console.log(newbaseCharSet)
}
else { (newbaseCharSet=baseCharSet)
console.log(newbaseCharSet)
    
}
//testing of if statements based on inputs
console.log(baseCharSet)
console.log(newbaseCharSet)

//generate the password based on inputs

function generatePassword(){
    console.log(newbaseCharSet)
    console.log(passwordLength)
    console.log(newbaseCharSet.length)
    //produce password based on length requested by user
    var password = ""
    for (   var i=0; i<passwordLength; i++) {
            var charPick = Math.floor(Math.random()*newbaseCharSet.length)
            password += newbaseCharSet[charPick]
    }        
         console.log(charPick)
         console.log(newbaseCharSet)
         console.log(newbaseCharSet.length)
         console.log(password)

         document.querySelector('#password').value = password
         
}

//listen for generate password button click - when clicked run 
generateBtn.addEventListener("click", writePassword);
console.log("Butten clicked")


writePassword()



