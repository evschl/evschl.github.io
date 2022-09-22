/*
alert("Welcome to my page! Give me money.");

var money = 0;

while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");
*/
function userFeeling() {
    let name = document.getElementById("yourName").value;
    let mood = document.getElementById("yourMood").value;
    document.getElementById("displayGreeting").innerHTML = "Welcome to the Earnest Squirrels, " + name + "! We're glad OR SORRY that you're feeling " + mood + ".";
}

function displayDateTime() 
{
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let meridian = "PLACEHOLDER";

    if(hour >= 13)
    {
        hour = hour - 12;
        meridian = "PM";
    }
    else
    {
        meridian = "AM";
    }

    if(minute < 10)
    {
        minute = "0" + minute;
    }

    if(second < 10)
    {
        second = "0" + second;
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

    let monthsAsText = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    document.getElementById('dateDisplay').innerHTML = "Today is " + monthsAsText[month] + " " + date + ", " + year;
    document.getElementById('clockDisplay').innerHTML = hour + ":" + minute + ":" + second + " " + meridian;
    setTimeout(displayDateTime, 1000);
}