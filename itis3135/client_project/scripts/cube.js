function display(archeId)
{
    archeArray = document.getElementsByClassName("displayArchetypeInfo");
    for(let i in archeArray)
    {
        if(archeArray[i].id == archeId && archeArray[i].style.display == "none")
        {
            archeArray[i].style.display = "block";
        }
        else
        {
            archeArray[i].style.display = "none";
        }
    }
}