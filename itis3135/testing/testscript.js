alert("Welcome to my page! Give me money.");

var money = 0;
var today = new Date();
while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");

void displayDate() {
    document.write(today.toDateString());
};