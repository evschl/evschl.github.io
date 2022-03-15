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
var sum_salaries;
var avg_salary;

function addSalary(name, salary)
{
    person[person.length] = name;
    salaries[salaries.length] = salary;
}

/*POSSIBLE ERRORS: 
    JS MAY NOT SUPPORT +=
*/
function displayResults()
{
    for (var i = 0; i < salaries.length; ++i)
    {
        sum_salaries += salaries[i];
    }

    avg_salary = (sum_salaries / salaries.length);
}

function displaySalary()
{
    
}

