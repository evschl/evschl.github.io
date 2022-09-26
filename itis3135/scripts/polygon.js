let polygon = 100;

alert("Welcome to the Earnest Squirrels!");

while(prompt < 0 || prompt > 10)
{
    polygon = Math.round(Math.abs(prompt("Can't remember the name of a polygon? Enter a number (1-10), and you will be given the name of the polygon with that many sides!")));
}

if(polygon == 1) 
{
    alert("The polygon with 1 side is known as a \"Henagon\"!");
} 
else if(polygon == 2)
{
    alert("The polygon with 2 sides is known as a \"Digon\"!");
}
else if(polygon == 3)
{
    alert("The polygon with 3 sides is known as a \"Trigon\" (or Triangle)!");
}
else if(polygon == 4)
{
    alert("The polygon with 4 sides is known as a \"Tetragon\" (or Quadrilateral)!");
}
else if(polygon == 5)
{
    alert("The polygon with 5 sides is known as a \"Pentagon\"!");
}
else if(polygon == 6)
{
    alert("The polygon with 6 sides is known as a \"Hexagon\"!");
}
else if(polygon == 7)
{
    alert("The polygon with 7 sides is known as a \"Heptagon\" (or Septagon)!");
}
else if(polygon == 8)
{
    alert("The polygon with 8 sides is known as a \"Octagon\"!");
}
else if(polygon == 9)
{
    alert("The polygon with 9 sides is known as a \"Enneagon\" (or Nonagon)!");
}
else if(polygon == 10)
{
    alert("The polygon with 10 sides is known as a \"Decagon\"!");
}
else
{
    alert("How did you get here?");
}