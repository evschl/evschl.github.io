/*
alert("Welcome to my page! Give me money.");

var money = 0;

while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");
*/

today = new Date();
year = today.getYear();
month = today.getMonth();
date = today.getDate();
hour = today.getHours();
minute = today.getMinutes();
second = today.getSeconds();

function displayDateTime(){
    document.writeln(hour);
}