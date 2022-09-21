/*
alert("Welcome to my page! Give me money.");

var money = 0;

while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");
*/

var today = new Date();
var year = today.getYear();
var month = today.getMonth();
var date = today.getDate();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

function displayDateTime(){
    document.writeln(hour);
}