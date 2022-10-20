alert("Script is working!");

const person = new Array();
const salary = new Array();
var index = 0;

function addSalary() 
{
    var statusMessage = "The addSalary function has not been run yet.";
    
    employeeName = document.getElementById('employeeName').value;
    employeeSalary = parseInt(document.getElementById('employeeSalary').value);

    if(employeeSalary === isNaN || employeeSalary === "" || employeeName === "[Select]")
    {
        statusMessage = "Please enter a name and salary.";
        document.getElementById("addStatus").innerHTML = statusMessage;
        return 0;
    } 
    else 
    {
        for(var i in person)
        {
            if(employeeName === person[i])
            {
                salary[i] = employeeSalary;
                statusMessage = "Updated " + employeeName + "\'s salary to $" + employeeSalary + ".";
                document.getElementById("addStatus").innerHTML = statusMessage;
                return 0;
            }
        }
        person.push(employeeName);
        salary.push(employeeSalary);
        statusMessage = "Added " + employeeName + " with a salary of $" + employeeSalary + " at index " + index + "!";
        document.getElementById("addStatus").innerHTML = statusMessage;
        ++index;
    }
}

function displayResults() 
{
    var total = 0;
    var highest = 0;

    if(salary.length === 0 || person.length === 0)
    {
        statusMessage = "Nothing in the array yet!";
        document.getElementById("addStatus").innerHTML = statusMessage;
    }
    else
    {
        for(var i in salary)
        {
            total += salary[i];
            if(highest < salary[i])
            {
                highest = salary[i];
                console.log(highest);
            }
        }
        var avg = (total / salary.length).toFixed(2);
        console.log(avg);
        var avgMessage = "The average salary is $" + avg;
        var highestMessage = "The highest salary is $" + highest;
        document.getElementById("average").innerHTML = avgMessage;
        document.getElementById("highest").innerHTML = highestMessage;
        return 0;
    }
}

function displaySalary() 
{
    if(person.length === 0) 
    {
        statusMessage = "Nothing to display in the table yet!";
        document.getElementById("addStatus").innerHTML = statusMessage;
    }
    for(var i in person)
    {
        var employeeDetails = document.getElementById('employeeTableData').insertRow(i);
        var nameInTable = employeeDetails.insertCell(0);
        var salaryInTable = employeeDetails.insertCell(1);
        nameInTable.innerHTML = person[i];
        salaryInTable.innerHTML = "$" + salary[i];
    }
}