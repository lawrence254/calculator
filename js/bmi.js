var bmi=function(height,weight){
  result=weight/height;
  bmi=result/height;
};

var weight=parseInt(prompt("Enter your weight: "));
var height=parseInt(prompt("Enter your height: "));
alert("Your BMI is:",bmi(weight,height))
