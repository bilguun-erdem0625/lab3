
//var too=+prompt("toogoo oruulna uu");
//if(too % 2){
	//console.log("sondgoi too");
//}else{
	//console.log("tegsh too");
//}

//var number=+prompt("toogoo oruul");
//if(0 > number){
	//console.log("sorog too");
//}else{
	//console.log("eyreg too");
//}


var too1=+prompt("too1 oruulna uu");
var op = prompt("opertator oruulna uu(+,-,*,/)");
var too2=+prompt("too2 oruulna uu");
switch(op){
	case "+":
		alert(too1+too2);
		break;
	case "-":
		alert(too1-too2);
		break;
	case "*":
		alert(too1*too2);
		break;
	case "/":
		alert(too1/too2);
		break;
}