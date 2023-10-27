
var num1=Math.random()*100;
var number1=Math.round(num1);
console.log(number1);
document.getElementById('firstNumber').value=number1;

var num2=Math.random()*100;
var number2=Math.round(num2);
console.log(number2);
document.getElementById('secondNumber').value=number2;

function check(){
    var solution=document.getElementById('result').value;
    if((number1+number2)==solution){
        document.getElementById('Description').innerHTML="👍🏻✅Correct Answer Keep Going";
        document.getElementById('Description').className="bg-success";
    }
    else{
        document.getElementById('Description').innerHTML="👎🏻🚫Wrong Answer Please Try Again";
        document.getElementById('Description').className="bg-danger";
    }
}
function reset(){
    document.getElementById('firstNumber').value="";
    document.getElementById('secondNumber').value="";
    document.getElementById('result').value="";
}
    


