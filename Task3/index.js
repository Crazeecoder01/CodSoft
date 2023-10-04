let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            if (expression.includes('/0')) {
                input.value = 'Error: Division by zero';
            }
            else if(expression == ""){
                input.value = 'undefined';
            }
            
            else{
                expression = eval(expression);
                input.value = expression;
                e.preventDefault();
            }
            
        }
        
        else if(e.target.innerHTML == 'AC'){
            expression = "";
            input.value = expression;
        }
        else if(e.target.innerHTML == 'C'){
            expression = expression.substring(0, expression.length-1);
            input.value = expression;
            e.preventDefault();
        }
        else{
            expression += e.target.innerHTML;
            input.value = expression;
            e.preventDefault();
        }
        // e.preventDefault();
    })
})