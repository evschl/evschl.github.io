alert("Script is working!");

const person = new Array();
const salary = new Array();
var index = 0;
//var hasExecuted = false;

function addSalary() 
{
    employeeName = document.getElementById('employeeName').value
    employeeSalary = parseInt(document.getElementById('employeeSalary').value)

    person.push(employeeName);
    salary.push(employeeSalary);

    var statusMessage = "Added " + employeeName + " with a salary of $" + employeeSalary + " at index " + index + "!";
    ++index;
    console.log(statusMessage);

    document.getElementById("addStatus").innerHTML = statusMessage;
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
    var avgMessage = "The average salary is $" + avg;
    var highestMessage = "The highest salary is $" + highest;
    document.getElementById("average").innerHTML = avgMessage;
    document.getElementById("highest").innerHTML = highestMessage;
    return 0;
}

function displaySalary() 
{
    /*
    if(!hasExecuted)
    {
        var employeeDetails = document.getElementById('employeeTable').insertRow(i);
        var nameHead = employeeDetails.createTHead(0);
        var salaryHead = employeeDetails.createTHead(1);
        nameHead.innerHTML = "Name:";
        salaryHead.innerHTML = "Salary:";
        hasExecuted = true;
    }
    */
    for(var i in person)
    {
        var employeeDetails = document.getElementById('employeeTableData').insertRow(i);
        var nameInTable = employeeDetails.insertCell(0);
        var salaryInTable = employeeDetails.insertCell(1);
        nameInTable.innerHTML = person[i];
        salaryInTable.innerHTML = "$" + salary[i];
    }
}