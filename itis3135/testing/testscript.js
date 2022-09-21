/*
alert("Welcome to my page! Give me money.");

var money = 0;

while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");
*/

function displayDateTime(){
    var today = new Date();
    //let year = today.getYear();
    //let month = today.getMonth();
    //let date = today.getDate();
    //let hour = today.getHours();
    //let minute = today.getMinutes();
    var second = today.getSeconds();
    document.getElementById('clock').innerHTML = second;
    setTimeout(displayDateTime, 1000);
}