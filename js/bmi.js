var bmi=function(height,weight){
  result=weight/height;
  bmi=result/height;
  return bmi;
};

var weight=parseInt(prompt("Enter your weight: "));
var height=parseInt(prompt("Enter your height: "));
final=bmi(weight,height);
alert("Your BMI is:",bmi(weight,height));
