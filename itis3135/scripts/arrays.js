let person = new Array(); 
person.push("Evan Schlee");
person.push("Luke Marchesa");
person.push("Coby Saints");
person.push("Noah Johnson");
person.push("Christopher Moltisanti");
person.push("Akira Otoishi");
person.push("Gale Boetticher");
person.push("Elincia R. Crimea");
person.push("Owen Kung");

let salaries = new Array();
salaries.push(600000);
salaries.push(275000);
salaries.push(250000);
salaries.push(225000);
salaries.push(2000000);
salaries.push(150000);
salaries.push(5000000);
salaries.push(4000000);
salaries.push(100000);

function addSalary()
{
    let name = document.getElementById("newName").value;
    let salary = document.getElementById("newSalary").value;

    person.push(name);
    salaries.push(salary);

    document.getElementById("newest_employee").innerHTML = name;
    document.getElementById("newest_salary").innerHTML = salary;
}

/*
    POSSIBLE ERRORS: 
    JS may not support +=,
    Declaring avg_salary inside of function may cause issues,
    Declaring sum_salary inside of function may cause issues,

*/
function displayResults()
{
    var sum_salaries = 0;
    var avg_salary = 0;
    
    for (var i = 0; i < salaries.length; ++i)
    {
        sum_salaries += parseInt(salaries[i]);
    }

    avg_salary = (sum_salaries / salaries.length);
    document.getElementById("display_avg").innerHTML = avg_salary;
    document.getElementById("display_sum").innerHTML = sum_salaries;
}

function displaySalary()
{
    for(var i = 0; i < person.length; ++i)
    {
        let row = document.getElementById("display_results").insertRow(i);

        let table_name = row.insertCell(i);
        table_name.innerHTML = person[i];

        let table_salary = row.insertCell(i);
        table_salary = salaries[i];
    }
}

