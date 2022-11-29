const date = new Date();
let dayOfWeek = date.getDay();

function getNextDay(eventDay)
{
    if(eventDay < dayOfWeek)
    {
        return (7 - (dayOfWeek - eventDay));
    }
    else
    {
        return (eventDay - dayOfWeek);
    }
}

function daysAwayString(n)
{
    if(n == 0) 
    {
        return ("Today");
    }
    if(n == 1) 
    {
        return ("1 Day (Tomorrow)");
    }
    if(n >= 2)
    {
        return (n.toString() + " Days");
    }
}

/*
function convertIdToDate(n)
{
    let year = n.slice(6, 11);
    alert(year);
}
*/

function setNextDates() 
{
    eventArray = document.getElementsByClassName("dayContainer");
    for(let i in eventArray)
    {
        if(eventArray[i].id == "sun") 
        {
            document.getElementById("sun").innerHTML = daysAwayString(getNextDay(0));
        }
        else if(eventArray[i].id == "mon") 
        {
            document.getElementById("mon").innerHTML = daysAwayString(getNextDay(1));
        }
        else if(eventArray[i].id == "tue") 
        {
            document.getElementById("tue").innerHTML = daysAwayString(getNextDay(2));
        }
        else if(eventArray[i].id == "wed") 
        {
            document.getElementById("wed").innerHTML = daysAwayString(getNextDay(3));
        }
        else if(eventArray[i].id == "thu") 
        {
            document.getElementById("thu").innerHTML = daysAwayString(getNextDay(4));
        }
        else if(eventArray[i].id == "fri") 
        {
            document.getElementById("fri").innerHTML = daysAwayString(getNextDay(5));
        }
        else if(eventArray[i].id == "sat") 
        {
            document.getElementById("sat").innerHTML = daysAwayString(getNextDay(6));
        }
        else
        {
            alert(eventArray[i].id);
        }
    }
}