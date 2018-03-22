var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
}
var divide = function(number1, number2) {
  return number1 / number2;
}
var multiply = function(number1, number2) {
  return number1 * number2;
}
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
		$("#addoutput").text(result);
  });
	$("form#subtract").submit(function (event) {
		event.preventDefault();
		var number1=parseInt($(".num1").val());
		var number2=parseInt($(".num2").val());
		var result=subtract(number1,number2);
		console.log(result);
		$("#suboutput").text(result);
	});
	$("form#multiply").submit(function (event) {
		event.preventDefault();
		var number1=parseInt($(".mnum1").val());
		var number2=parseInt($(".mnum2").val());
		var result=multiply(number1,number2);
		console.log(result);
		$("#mutoutput").text(result);
	});
	$("form#divide").submit(function (event) {
		event.preventDefault();
		var number1=parseInt($(".dnum1").val());
		var number2=parseInt($(".dnum2").val());
		var result=divide(number1,number2);
		console.log(result);
		$("#divoutput").text(result);
	});
});
