alert("Script is working!");

const person = [];
const salary = [];

function addSalary(newEmployee/*, newSalary*/) 
{
    person.push(newEmployee);
    //salary.push(newSalary);
    return 0;
}

function displayResults() 
{
    var total = 0;
    var highest = 0;
    for(var i = 0; i < salary.length; ++i)
    {
        total += salary[i];
        if(highest < salary[i])
        {
            highest = salary[i];
        }
    }
    var avg = total / salary.length;
    document.getElementById("average").innerHTML = avg;
    document.getElementById("highest").innerHTML = highest;
    return 0;
}

function displaySalary() 
{
    var x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);

    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode("cell");
    z.appendChild(t);
    document.getElementById("myTr").appendChild(z);

    
    /*
    for(let x in person)
    {
        //person[x]
        //salary[x]
        //Add info to array
    }
    */
}