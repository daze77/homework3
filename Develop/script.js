
var lower = ("abcdefghijklmnopqrstuvwxyz")
var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var specialChar = ("!@#$%^&*()")
var numbs = (1234567890)
var passwrd = lower
var passWordMin = 8
var passwordMax = 128

// var passlenght = 8

var you = {
    codeLength: 8,
    upper: true,
    specialcharacter: true,
    numberin: true,
   }


    if(you.upper===true && you.specialcharacter===false && you.numberin ===false){
       var passwrd = passwrd.concat(upper)
    } 
    else if(you.upper===true && you.specialcharacter===true && you.numberin === false){
        var passwrd=passwrd.concat(upper, specialChar)
    }
    else if (you.upper===true && you.specialcharacter===true && you.numberin === true){
        var passwrd=passwrd.concat(upper,specialChar,numbs)
    }
    else if(you.upper===true && you.specialcharacter===false && you.numberin === true){
        var passwrd=passwrd.concat(upper, numbs)
    }
    else if (you.upper===false && you.specialcharacter===true && you.numberin === false){
        var passwrd=passwrd.concat(specialChar)
    }
    else if (you.upper===false && you.specialcharacter===false && you.numberin === true){
        var passwrd=passwrd.concat(numbs)
    }
    else { var passwrd=passwrd}

 
console.log(lower)
console.log(upper)
console.log(specialChar)
console.log(numbs)
console.log(passwrd)


// Determine the password up to the requested passwird length
var passwordGenerated = "";

while (passwordGenerated.length < you.codeLength){
    passwordGenerated += passwrd[Math.floor(Math.random() * passwrd.length) ];
    console.log(passwordGenerated)
}

//validating the output of the code generated
console.log(passwordGenerated)

var passlenght = passwordGenerated.length
console.log(passlenght)

function validatePassword() {
    var requiredChar = new RegExp("(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])");
    if(passwordGenerated.length >= passlenght){
        console.log(passwordGenerated.length>=you.codeLength)
        console.log(you.codeLength)
    }
    if (requiredChar.test(passwordGenerated)){
        console.log(requiredChar.test(passwordGenerated)) 
    }
}

validatePassword()

var patt = new RegExp("(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])");
var res = patt.test(passwordGenerated)
console.log(res)
console.log(passwordGenerated)


