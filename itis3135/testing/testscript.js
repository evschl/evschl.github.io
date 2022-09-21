/*
alert("Welcome to my page! Give me money.");

var money = 0;

while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");
*/

function displayDateTime() 
{
    let today = new Date();
    let year = today.getYear();
    let month = today.getMonth();
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let meridian = "PLACEHOLDER";

    if(hour >= 13)
    {
        hour -= 12;
        meridian = "PM";
    }
    else
    {
        meridian = "AM";
    }

    if(date % 10 == 1) 
    {
        date = date + "st";
    } 
    else if(date % 10 == 2) 
    {
        date = date + "nd";
    }
    else if(date % 10 == 3)
    {
        date = date + "rd";
    }
    else
    {
        date = date + "th";
    }

    var monthsAsText = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
 
    var dateText = "Today is " + monthsAsText[month + 1] + " " + date + ", " + year;
    var clockText = hour + ":" + minute + ":" + second + " " + meridian;

    document.getElementById('dateDisplay').innerHTML = dateText;
    document.getElementById('clockDisplay').innerHTML = clockText;
    setTimeout(displayDateTime, 1000);
}