
const display = document.getElementById('display');
const buttons = document.querySelectorAll('#btn');

let input = '';

buttons.forEach(button => {button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === '='){
        try{
            input = eval(input).toString();
            display.textContent = input;
            if(input.length > 11){
                display.style.fontSize = "1.5rem";
                
            }
            
        }
        catch{
            display.textContent = 'Error';
            input = '';
        }
    }
    else if(button.classList.contains('del')){
        if(display.textContent.length === 1){
            display.textContent = "0";
            input = "";
        }
        else{
            display.textContent = display.textContent.slice(0, -1);
            input = display.textContent;
        }
        
    }
    else if(value === 'C'){
        input = '';
        display.style.fontSize = "3.8rem";
        display.textContent = 0;
    }
    else{
        input += value;
        if(input.length > 11){
            
            display.style.fontSize = "1.5rem";
            display.textContent = input;
            display.textContent = input.slice(-27);
        }
        else{
            display.textContent = input
        }
        
    }

  });
});


















