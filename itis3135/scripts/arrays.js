alert("Script is working!");

const person = [];
const salary = [];

function addSalary(newEmployee, newSalary) 
{
    person.push(newEmployee);
    salary.push(newSalary);
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
    
}