alert("Welcome to my page! Give me money.");

/*
var money = 0;

while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");
*/

function displayDateTime() {
    today = new Date();
    document.writeln("Today's Date");
    document.writeln(today.toDateString());
    document.writeln("<br>");
    document.writeln("Today's Time");
    document.write(today.getHours());
    document.write(":");
    document.write(today.getMinutes());
}