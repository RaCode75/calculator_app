//------Screen calulator------------
const display = document.getElementById('display--val');
//---Key types-----------------------------------------
const numbs = document.getElementsByClassName('numb');
const operators = document.getElementsByClassName('operator');
const reset = document.getElementById('reset');
const dec = document.getElementById('dec');
const del = document.getElementById('del');
// numbers for binary operations
let operand_a = 0, operand_b = 0, operation='',result= '';

//------numbers keys--------------------
for(let i=0; i< numbs.length; i++){
    numbs[i].addEventListener('click', () =>{
        // no 0 , no result and no error msg
        if (display.innerHTML !== '0' && parseFloat(display.innerHTML) !== result &&  !isNaN(display.innerHTML)){
            display.innerHTML +=numbs[i].id;
            result = '';
        } else{
            display.innerHTML = numbs[i].id;
        }
        
    })
}
//-----------RESET Key---------------
reset.addEventListener('click', () =>{
    display.innerHTML = '0';
    operand_a = 0;
    operand_b = 0;
    operation = '';
    result = '';
})
//------Decimal key-------------------
dec.addEventListener('click', () =>{
    let str = display.innerHTML;
    
if(str.indexOf('.') == -1 && display.innerHTML !== result){
    display.innerHTML += '.';
}
});
//-------Del key--------------
del.addEventListener('click', () =>{
let digit = display.innerHTML;
let cut = digit.length-1;
if(digit.length>1){
    digit = digit.slice(0, cut);
    display.innerHTML = digit;
} else if (digit.length = 1){
    display.innerHTML = '0';
}
});
//-----Operators keys----------------
for(let i=0; i<operators.length; i++){
operators[i].addEventListener('click', () => {

// save the first operand and choose the operation
switch(operators[i].id){
    case 'plus': 
        {
            operand_a = parseFloat(display.innerHTML);
            display.innerHTML='0';
            operation = 'add';
        }
        break;
        
    case 'minus':
        {
            operand_a = parseFloat(display.innerHTML);
            display.innerHTML='0';
            operation = 'substract';    
        }
        
        break;
    case 'divide':
        {
            operand_a = parseFloat(display.innerHTML);
            display.innerHTML='0';
            operation = 'divide';
        }
        
        break;
    case 'mul':
        {
            operand_a = parseFloat(display.innerHTML);
            display.innerHTML='0';
            operation = 'multiply';
        }
        
        break;
    case 'equal':
        {
            if(operand_a && !operand_b){
                operand_b = parseFloat(display.innerHTML);
                //result='';
            }
        finalResult();
            
        }
        break;
}
});
}

// Lets go!
function finalResult (){
    switch (operation){
        case 'add':
            {
                result = operand_a + operand_b;
                display.innerHTML = result;
                operand_a = 0;
                operand_b = 0;
                operation='';
            }
            break;
        case 'substract':
            {
                result = operand_a - operand_b;
                display.innerHTML = result;
                operand_a = 0;
                operand_b = 0;
                operation='';
            
            }
            break;
        case 'divide':
            {
                if(operand_b !== 0){
                result = operand_a / operand_b;
                display.innerHTML = result;
                operand_a = 0;
                operand_b = 0;
                operation = '';
                }else{
                    display.innerHTML = 'Error = divide by zero';
                }
            }
            break;
        case 'multiply':
            {
                result = operand_a * operand_b;
                display.innerHTML = result;
                operand_a = 0;
                operand_b = 0;
                operation = '';
            }
            break;
            
    }
}