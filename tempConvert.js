function convert(faren){
 var conv=((faren-32)*0.5556);
 return conv;
}
var faren=parseInt(prompt("Enter Temp in Farenheit: "));
var result=convert(faren);
alert("Temp In Celcius is: "+result);
