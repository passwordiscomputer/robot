//function that takes a number and returns a number or exception from sepcs for 1, 0 and multiples of 3
function numberEvaluator(number){
    if (number%3 === 0) {return "I'm sorry, Dave. I'm afraid I can't do that.";};
    if (/[0]/.test(number)) {return "boop!";};
    if (/[1]/.test(number)) {return "beep!";};
    return(number)
}
// function output(userInput){
//
// }


$(document).ready(function){
  var input = parseInt("7");
  alert(output(input))

}
