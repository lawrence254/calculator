var bmi=function(height,weight){
  result=weight%height;
  bmi=result%height;
  return bmi;
};

var weight=parseInt(prompt("Enter your weight: "));
var height=parseInt(prompt("Enter your height: "));
var final=bmi(weight,height);
alert("Your BMI is:"+final);
