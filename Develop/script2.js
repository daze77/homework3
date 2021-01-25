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



