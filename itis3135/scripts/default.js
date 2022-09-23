/*
alert("Welcome to my page! Give me money.");

var money = 0;

while(money < 500) {
    money = prompt("Enter the amount of money in USD you want to give. (minimum $500)");
}
alert("Thank you for $" + money + "!");
*/

let fibonacci = 0;
let fCurrent = 1;
let fLast = 0;
let count = 0;

function hexGenerator()
{
    
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");

    if(red.checked == true)
    {
        if(green.checked == true)
        {
            if(blue.checked == true)
            {
                document.getElementById("displayHex").innerHTML = "White, #FFFFFF";
            }
            else
            {
                document.getElementById("displayHex").innerHTML = "Yellow, #FFFF00";
            }
        }
        else
        {
            if(blue.checked == true)
            {
                document.getElementById("displayHex").innerHTML = "Magenta, #FF00FF";
            }
            else
            {
                document.getElementById("displayHex").innerHTML = "Red, #FF0000";
            }
        }
    }
    else 
    {
        if(green.checked == true)
        {
            if(blue.checked == true)
            {
                document.getElementById("displayHex").innerHTML = "Cyan, #00FFFF";
            }
            else
            {
                document.getElementById("displayHex").innerHTML = "Green, #00FF00";
            }
        }
        else
        {
            if(blue.checked == true)
            {
                document.getElementById("displayHex").innerHTML = "Blue, #0000FF";
            }
            else
            {
                document.getElementById("displayHex").innerHTML = "Black, #000000";
            }
        }
    }
}

function calcDistance()
{
    x1 = document.getElementById("x1").value;
    x2 = document.getElementById("x2").value;
    y1 = document.getElementById("y1").value;
    y2 = document.getElementById("y2").value;
    z1 = document.getElementById("z1").value;
    z2 = document.getElementById("z2").value;

    distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) + Math.pow((z2 - z1), 2));
    document.getElementById("displayDistance").innerHTML = parseFloat(distance.toFixed(2));
}

function fibonacciGenerator() 
{
    count += 1;
    fibonacci = fCurrent + fLast;
    fLast = fCurrent;
    fCurrent = fibonacci;
    document.getElementById("displayFibonacci").innerHTML = "#" + count + ": " + fibonacci;
}

function randomTask() 
{
    let task = new Array("Admire a squirrel", "Befriend a squirrel", "Tax Evasion", "Knit a squirrel-themed sweater (for a squirrel)", "Climb a tree");
    let randNum = Math.floor(Math.random() * 5);
    document.getElementById("displayRandomTask").innerHTML = task[randNum];
}

function calculateGas()
{
    let gasPrice = document.getElementById("gasPrice").value;
    let drivingMinutes = document.getElementById("numMinutes").value;
    let mpg = document.getElementById("gasMileage").value;
    let speed = document.getElementById("avgSpeed").value;

    let totalPrice = ((speed / 60) * drivingMinutes) * (gasPrice / mpg) * 7;
    totalPrice = parseFloat(totalPrice.toFixed(2));
    document.getElementById("displayGasSpending").innerHTML = "The average amount of money you spend on gas per week is: $" + totalPrice + ".";
}

function userFeeling() 
{
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