//------Screen calulator------------
const display = document.getElementById('display--val');
//---Key types-----------------------------------------
const numbs = document.getElementsByClassName('numb');
const operators = document.getElementsByClassName('operator');
const reset = document.getElementById('reset');
const dec = document.getElementById('dec');
const del = document.getElementById('del');
// numbers for binary operations
let operand_a = 0, operand_b = 0, operation='',result= 0;

//------numbers keys--------------------
for(let i=0; i< numbs.length; i++){
    numbs[i].addEventListener('click', () =>{
        if (display.innerHTML !== '0' && parseFloat(display.innerHTML) !== result){
            display.innerHTML +=numbs[i].id;
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
})
//------Decimal key-------------------
dec.addEventListener('click', () =>{
    let str = display.innerHTML;
    
if(str.indexOf('.') == -1){
    display.innerHTML += '.';
}
});
//-------Del key--------------
del.addEventListener('click', () =>{
let digit = display.innerHTML;
let cut = digit.length-1;
if(digit.length>0){
    digit = digit.slice(0, cut);
    display.innerHTML = digit;
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
        operand_b = parseFloat(display.innerHTML);
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
            }
            break;
        case 'substract':
            {
                result = operand_a - operand_b;
                display.innerHTML = result;
                console.log(result);
            }
            break;
        case 'divide':
            {
                if(operand_b !== 0){
                result = operand_a / operand_b;
                display.innerHTML = result;
                }else{
                    display.innerHTML = 'Error = divide by zero';
                }
            }
            break;
        case 'multiply':
            {
                result = operand_a * operand_b;
                display.innerHTML = result;
            }
            break;
            
    }
}