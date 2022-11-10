alert("script is loading");

function display(archeId)
{
    archeArray = document.getElementsByClassName("displayArchetypeInfo");
    for(let i in archeArray)
    {
        if(archeArray[i].id == archeId)
        {
            archeArray[i].style.display = "block";
            let hideBtn = archeId + 100;
            document.getElementById(hideBtn).innerHTML.style.display = "none";
        }
    }
}

function hide(btnId)
{
    archeArray = document.getElementsByClassName("displayArchetypeInfo");
    for(let i in archeArray)
    {
        if(archeArray[i].id == btnId)
        {
            archeArray[i].style.display = "none";
            let hideBtn = btnId + 100;
            document.getElementById(hideBtn).innerHTML.style.display = "block";
        }
    }
}