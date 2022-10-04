let calcDisplay = 0;
let prevNum = NULL;
let isPrevNum = false;
let hasDecimal = false;
let prevAction = "PLACEHOLDER";

function buttonPress(btnVal) {
    if(!isNaN(btnVal)) {
        if(prevAction != "numInput") 
        {
            calcDisplay = btnVal.toString();
        }
        else
        {
            calcDisplay += btnVal.toString();
        }

        prevAction = "numInput";
    }
    else if(btnVal == ".")
    {
        if(!hasDecimal)
        {
            calcDisplay += btnVal.toString();
        }

        hasDecimal = true;
        prevAction = "decimal";
    }
    else if(btnVal == "=")
    {
        if(prevAction == "multiply")
        {
            calcDisplay = parseFloat(prevNum) * parseFloat(calcDisplay);
        }
        else if(prevAction == "divide")
        {
            calcDisplay = parseFloat(prevNum) / parseFloat(calcDisplay);
        }
        else if(prevAction == "add")
        {
            calcDisplay = parseFloat(prevNum) + parseFloat(calcDisplay);
        }
        else if(prevAction == "subtract")
        {
            calcDisplay = parseFloat(prevNum) - parseFloat(calcDisplay);
        }

        prevNum = calcDisplay;
        hasDecimal = false;
        isPrevNum = true;
    }
    else if(btnVal == "ce")
    {

    }
    else if(btnVal == "c")
    {

    }
    else if(btnVal == "X")
    {
        if(isPrevNum) {
            calcDisplay = parseFloat(prevNum) * parseFloat(calcDisplay);
        }
        prevNum = calcDisplay;
        isPrevNum = true;
        hasDecimal = false;
        prevAction = "multiply";
    }
    else if(btnVal == "/")
    {
        if(isPrevNum) {
            calcDisplay = parseFloat(prevNum) * parseFloat(calcDisplay);
        }
        prevNum = calcDisplay;
        isPrevNum = true;
        hasDecimal = false;
        prevAction = "divide";
    }
    else if(btnVal == "-")
    {
        if(isPrevNum) {
            calcDisplay = parseFloat(prevNum) - parseFloat(calcDisplay);
        }
        prevNum = calcDisplay;
        isPrevNum = true;
        hasDecimal = false;
        prevAction = "subtract";
    }
    else if(btnVal == "+")
    {
        if(isPrevNum) {
            calcDisplay = parseFloat(prevNum) * parseFloat(calcDisplay);
        }
        prevNum = calcDisplay;
        isPrevNum = true;
        hasDecimal = false;
        prevAction = "add";
    }

    document.getElementById(calculatorDisplay).innerHTML = calcDisplay.toString();
}