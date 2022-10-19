alert("Script is working!");

const person = new Array();
const salary = new Array();

function addSalary() 
{
    person.push(document.getElementById('employeeName').value);
    salary.push(parseInt(document.getElementById('employeeSalary').value));
}

function displayResults() 
{
    var total = 0;
    var highest = 0;
    for(var i in salary)
    {
        total += salary[i];
        if(highest < salary[i])
        {
            highest = salary[i];
        }
    }
    var avg = (total / salary.length).toFixed(2);
    document.getElementById("average").innerHTML = avg;
    document.getElementById("highest").innerHTML = highest;
    return 0;
}

function displaySalary() 
{
    document.getElementById('employeeTable').innerHTML = "";
    for(var i in person)
    {
        var employeeDetails = document.getElementById('employeeTable').insertRow(i);
        var nameInTable = employeeDetails.insertCell(0);
        var salaryInTable = employeeDetails.insertCell(1);
        nameInTable.innerHTML = person[i];
        salaryInTable.innerHTML = salary[i];
    }
}