// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}


  function generatePassword(){
    
   
   
    console.log("Ok ready")
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
    
    
    //generate user prompts for inputs to questions




    var passwordLength = parseInt(prompt("Please select the length of your password", "Password from 8 - 128 characters!"))
    var upperLetters 
    var specialLetters 
    var numberstoo
    var lowerLetters

    if(passwordLength < 8 || passwordLength > 128){
       tryAgain()
    } else {
       proceed()
    }

    function tryAgain(){
      passwordLength = parseInt(prompt("Sorry your password doesn't meet the requireemnts", "Please select a passowrd from 8 to 128 characters"))
      if(passwordLength < 8 || passwordLength > 128){
        tryAgain()
     } else {
        proceed()
     }
        
    }



    function proceed(){
      upperLetters = confirm("password to include uppers?")
      specialLetters = confirm("password to include special characters?")
      numberstoo = confirm("password to include numbers?")
      lowerLetters = true


    }

    console.log(baseCharSet)
    // console.log(newbaseCharSet)
    
    
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
    passwordGO()




    function passwordGO() {
   
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
          //write password to html
          var passwordText = document.querySelector("#password");
          passwordText.value = password;

          
  }
    
}
   
   

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
