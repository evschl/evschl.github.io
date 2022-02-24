var displayNum = '0';
var oldNum = 0.0;
var operator = 'none';
var inFunctOperator = 'none'
                    
function addNum(addToString) 
{
    if (displayNum == '0') 
    {
        displayNum = displayNum + toString(addToString);
    } 
    else
    {
        displayNum = toString(addToString);
    }

    document.getElementById("toDisplay").innerHTML = displayNum;
}

function operation(operationToPerform)
{
    switch (operationToPerform)
    {
        case 0:
            prompt("You didn't select an operator");
            break;
        case 1:
            oldNum = parseFloat(document.getElementById("toDisplay").value);
            document.getElementById("toDisplay") = '0';
            inFunctOperator = 'addition';
            break;
        case 2:
            oldNum = parseFloat(document.getElementById("toDisplay").value);
            document.getElementById("toDisplay") = '0';
            inFunctOperator = 'subtraction';
            break;
        case 3:
            oldNum = parseFloat(document.getElementById("toDisplay").value);
            document.getElementById("toDisplay") = '0';
            inFunctOperator = 'multiplication';
            break;
        case 4:
            oldNum = parseFloat(document.getElementById("toDisplay").value);
            document.getElementById("toDisplay") = '0';
            inFunctOperator = 'division';
            break;
        case 5:
            switch (inFunctOperator)
            {
                case 'addition':
                    break;
                case 'subtraction':
                    break;
                case 'multiplication':
                    break;
                case 'division':
                    document.getElementById("toDisplay") = oldNum * parseFloat(displayNum);
                break;
            }
        }
}