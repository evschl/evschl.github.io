alert("Welcome to the Earnest Squirrels!");

//Validates the entry
function validateEntry(entry) {
    while(entry < 1 || entry > 10 || isNaN(entry)) {
        entry = validateEntry(prompt("Can't remember the name of a polygon? Enter a number (1-10), and you will be given the name of the polygon with that many sides!"));
    }

    return entry;
}

//Prints an alert with the name and number of sides of the polygon
function getShape(sides) {
    if(sides == 1) 
    {
        alert("The polygon with 1 side is known as a \"Henagon\"!");
    } 
    else if(sides == 2)
    {
        alert("The polygon with 2 sides is known as a \"Digon\"!");
    }
    else if(sides == 3)
    {
        alert("The polygon with 3 sides is known as a \"Trigon\" (or Triangle)!");
    }
    else if(sides == 4)
    {
        alert("The polygon with 4 sides is known as a \"Tetragon\" (or Quadrilateral)!");
    }
    else if(sides == 5)
    {
        alert("The polygon with 5 sides is known as a \"Pentagon\"!");
    }
    else if(sides == 6)
    {
        alert("The polygon with 6 sides is known as a \"Hexagon\"!");
    }
    else if(sides == 7)
    {
        alert("The polygon with 7 sides is known as a \"Heptagon\" (or Septagon)!");
    }
    else if(sides == 8)
    {
        alert("The polygon with 8 sides is known as a \"Octagon\"!");
    }
    else if(sides == 9)
    {
        alert("The polygon with 9 sides is known as a \"Enneagon\" (or Nonagon)!");
    }
    else if(sides == 10)
    {
        alert("The polygon with 10 sides is known as a \"Decagon\"!");
    }
    else
    {
        alert("How did you get here?");
    }
}

//Takes user input
let polygon = validateEntry(prompt("Can't remember the name of a polygon? Enter a number (1-10), and you will be given the name of the polygon with that many sides!"));
//Takes the absolute value of, and also rounds the number the user enters
polygon = Math.round(Math.abs(polygon));

//Calls getShape function, passing the validated user-entered number
getShape(polygon);