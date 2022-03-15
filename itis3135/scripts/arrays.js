var person = 
[
    "Evan Schlee",
    "Luke Marchesa",
    "Coby Saints",
    "Noah Johnson",
    "Christopher Moltisanti",
    "Akira Otoishi",
    "Gale Boetticher",
    "Elincia R. Crimea",
    "Owen Kung"
];
var salaries = [
    600000,
    275000,
    250000,
    225000,
    2000000,
    150000,
    5000000,
    4000000,
    100000
];

function addSalary()
{
    var name = "";
    var salary = 0;

    name = document.getElementById("newName");
    salary = document.getElementById("newSalary");
    
    person[person.length] = name;
    salaries[salaries.length] = salary;

    document.getElementById("newest_person") = person[person.length - 1];
    document.getElementById("newest_salary") = salaries[salaries.length - 1];
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
        sum_salaries += salaries[i];
    }

    avg_salary = (sum_salaries / salaries.length);
    document.getElementById("display_avg") = avg_salary;
    document.getElementById("display_sum") = sum_salaries;
}

function displaySalary()
{

}

