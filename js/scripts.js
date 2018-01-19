//function that takes a number and returns a number or exception from sepcs for 1, 0 and multiples of 3
function numberEvaluator(number, userName){
    if (number%3 === 0) {return "I'm sorry, " + userName + ". I'm afraid I can't do that.";};
    if (/[0]/.test(number)) {return "beep!";};
    if (/[1]/.test(number)) {return "boop!";};
    return(number);
}
///function that creates than fills an array with numbers for output
function createArray(input){
  var inputArray = [];
  var inputInt = parseInt(input)
  for (var i = 0; i <= inputInt; i++) {
    inputArray.push(numberEvaluator(i));
  }
  return inputArray;
}
function output(input){
  var outputArray = createArray(input);
  outputArray.forEach(function(number){
    $("#numberList").append("<li>"+number+"</li>");
  });
}
//***********************************************///
$(document).ready(function(){
  $("#robotForm").submit(function(event){
    event.preventDefault();
    $("#numberList").empty();
    var userInput = $("input#inputNumber").val();
    output(userInput);
  });
});
