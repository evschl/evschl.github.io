window.onload = function()
{
const calculate = (n1, operator, n2) =>
{
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    if(operator === 'add')
    {
        return firstNum + secondNum;
    }
    else if(operator === 'subtract')
    {
        return firstNum - secondNum;
    }
    else if(operator === 'multiply')
    {
        return firstNum * secondNum;
    }
    else if(operator === 'divide')
    {
        return firstNum / secondNum;
    }
}

const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');  
const display = document.querySelector('.calculator_display');

keys.addEventListener('click', e => 
{
    if(e.target.matches('button')) 
    {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));

        if(action !== 'clear')
        {
            const clearButton = calculator.querySelector('[data-action=clear]');
            clearButton.textContent = 'CE';
        }

        if(!action) 
        {
            if
            (
                displayedNum === '0' || 
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            )
            {
                display.textContent = keyContent;
            }
            else
            {
                display.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }

        if
        (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) 
        {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if
            (
                firstValue && 
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
            )
            {
                const calcValue = calculate(firstValue, operator, secondValue);
                display.textContent = calcValue;
                calculator.dataset.firstValue = calcValue;
            }
            else
            {
                calculator.dataset.firstValue = displayedNum;
            }
            
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
        }

        if(action === 'decimal') 
        {
            if(!displayedNum.includes('.'))
            {
                display.textContent = displayedNum + '.';
            }
            else if
            (
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            )
            {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }

        if(action === 'clear') 
        {
            if(key.textContent === 'AC')
            {
                calculator.dataset.firstValue = '';
                calculator.dataset.modValuie = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
            }
            else
            {
                key.textContent = 'AC';
            }

            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }

        if(action === 'calculate') 
        {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if(firstValue)
            {
                if(previousKeyType === 'calculate')
                {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = calculate(firstValue, operator, secondValue);
            }

            calculator.dataset.modValue = secondValue;
            calculator.dataset.previousKeyType = 'calculate';
        }
    }
})
}