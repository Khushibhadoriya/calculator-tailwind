const screen = document.getElementById("screen");
const numberContainer = document.getElementById("number");
const numbers = numberContainer.querySelectorAll('button');
const operationContainer = document.getElementById("operations");  
const operations = operationContainer.querySelectorAll('button')

 numbers.forEach((button, index) => {
    screen.textContent=""
    button.addEventListener('click',()=>{
        console.log(`button ${button.innerHTML} clicked`)
        const value = button.textContent;
        screen.textContent+= value
    })
 });

 operations.forEach((button, index) => {
    button.addEventListener('click',()=>{
        const value = button.textContent;
       console.log(`button ${button.innerHTML} clicked`)
       if(value ==='='){
        try{
            const expression = screen.textContent.replace(/×/g,'*').replace(/÷/g,'/');
        screen.textContent = eval(expression);
            }catch{
                screen.textContent="Error";
            }
       }else if(value==='C'){
          screen.textContent='';
       }else if(value==='⌫'){
        screen.textContent = screen.textContent.slice(0, -1);
       }else{
        screen.textContent+=value;
       }
    })
 });

