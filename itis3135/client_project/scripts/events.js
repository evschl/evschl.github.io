const date = new Date();
let dayOfWeek = date.getDay();

function getNextDay(eventDay)
{
    if((eventDay - dayOfWeek) >= 4)
    {
        return (7 - eventDay - dayOfWeek);
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
        return ("1 Day (Tomorrow)")
    }
    if(n >= 2)
    {
        return (n.toString() + " Days")
    }
}

function setNextDates() 
{
    let numDaysAway = 0;
    let awayString = "null";
    eventArray = document.getElementsByClassName("eventContainer");
    for(let i in eventArray)
    {
        if(eventArray[i].id == "sun") 
        {
            numDaysAway = getNextDay(0);
        }
        if(eventArray[i].id == "mon") 
        {
            numDaysAway = getNextDay(1);
        }
        if(eventArray[i].id == "tue") 
        {
            numDaysAway = getNextDay(2);
        }
        if(eventArray[i].id == "wed") 
        {
            numDaysAway = getNextDay(3);
        }
        if(eventArray[i].id == "thu") 
        {
            numDaysAway = getNextDay(4);
        }
        if(eventArray[i].id == "fri") 
        {
            numDaysAway = getNextDay(5);
        }
        if(eventArray[i].id == "sat") 
        {
            numDaysAway = getNextDay(6);
        }
        awayString = daysAwayString(numDaysAway);
    }
}