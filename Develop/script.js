//Created a number of variables that I will use to generate the password
var lower = ("abcdefghijklmnopqrstuvwxyz")
var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var specialChar = ("!@#$%^&*()")
var numbs = (1234567890)
var passwrd = lower //This is set to lower here because at min the user must have lower case letters
var passWordMin = 8
var passwordMax = 128
var passwordCases = ""



//Created an object to house the password detaisl that I may need later
var you = {
    codeLength: 8,
    upper: true,
    specialcharacter: true,
    numberin: true,
   }

// This code is to determine what string to use to create the password based on the boolean results of what the person entered on screen
    if(you.upper===true && you.specialcharacter===false && you.numberin ===false){
       var passwrd = passwrd.concat(upper)
       var passwordCases = "Lower and Upper"
    } 
    else if(you.upper===true && you.specialcharacter===true && you.numberin === false){
        var passwrd=passwrd.concat(upper, specialChar)
        var passwordCases = "Lower, Upper and Special"
    }
    else if (you.upper===true && you.specialcharacter===true && you.numberin === true){
        var passwrd=passwrd.concat(upper,specialChar,numbs)
        var passwordCases = "Lower,Upper, Special and Numbers"
    }
    else if(you.upper===true && you.specialcharacter===false && you.numberin === true){
        var passwrd=passwrd.concat(upper, numbs)
        var passwordCases = "Lower, Upper and Numbers"
    }
    else if (you.upper===false && you.specialcharacter===true && you.numberin === false){
        var passwrd=passwrd.concat(specialChar)
        var passwordCases = "Lower and Special"
    }
    else if (you.upper===false && you.specialcharacter===false && you.numberin === true){
        var passwrd=passwrd.concat(numbs)
        var passwordCases = "Lower and Numbers"
    }
    else { var passwrd=passwrd
            var passwordCases = "Lower"
    }



    console.log(passwordCases)

//This is test for to see if the code above works in producing the correct string based on the details
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

//Test to see if the code validation portionis working
validatePassword()

var patt = new RegExp("(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])");
var res = patt.test(passwordGenerated)
console.log(res)
console.log(passwordGenerated)



//I need a loop to generate passwords until a password is generated that meets all requirement
//I also need to update the validator to validate based on teh characters selected 




//THis is test code here

 






