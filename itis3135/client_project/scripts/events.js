const date = new Date();
let dayOfWeek = date.getDay();
let year = 0;
let month = 0;
let day = 0;

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
        return ("Next Event: Today");
    }
    if(n == 1) 
    {
        return ("Next Event: 1 Day (Tomorrow)");
    }
    if(n >= 2)
    {
        return ("Next Event: " + n.toString() + " Days");
    }
}

function convertIdToDate(n)
{
    const evtDate = new Date(n);
    return (((evtDate.getTime() - date.getTime())/86400000) - (((evtDate.getTime() - date.getTime())/86400000) % 1) + 1);
}

function setNextDates() 
{
    eventArray = document.getElementsByClassName("dayContainer");
    for(let i in eventArray)
    {
        if(eventArray[i].id == "sun") 
        {
            document.getElementById("sun").innerHTML = daysAwayString(getNextDay(0));
        } 
        if(eventArray[i].id == "mon") 
        {
            document.getElementById("mon").innerHTML = daysAwayString(getNextDay(1));
        } 
        if(eventArray[i].id == "tue") 
        {
            document.getElementById("tue").innerHTML = daysAwayString(getNextDay(2));
        } 
        if(eventArray[i].id == "wed") 
        {
            document.getElementById("wed").innerHTML = daysAwayString(getNextDay(3));
        } 
        if(eventArray[i].id == "thu") 
        {
            document.getElementById("thu").innerHTML = daysAwayString(getNextDay(4));
        } 
        if(eventArray[i].id == "fri") 
        {
            document.getElementById("fri").innerHTML = daysAwayString(getNextDay(5));
        } 
        if(eventArray[i].id == "sat") 
        {
            document.getElementById("sat").innerHTML = daysAwayString(getNextDay(6));
        } 
        if(eventArray[i].id.length == 10)
        {
            document.getElementById(eventArray[i].id).innerHTML = daysAwayString(convertIdToDate(eventArray[i].id));
        }
    }
}