alert("Script is working!");

const person = ["Sol Horthman", "Ness Parcheesi", "Chase Batta", "Wagyu Pearlman", "Spencer Schlee", "Mohammed Boyd", "Stefanie Burnett", "Maisy Prudent"];
const salary = [50000, 75000, 50000, 65000, 85000, 100000, 100000, 75000];

function addSalary(salary) 
{

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
}

function displaySalary() 
{
    
}