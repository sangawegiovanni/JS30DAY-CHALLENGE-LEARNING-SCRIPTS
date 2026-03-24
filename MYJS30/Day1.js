function calculate(){
    let num1 = Number(prompt("Input first number: "));
    let num2 = Number(prompt("Input second number:"));
    let operation = prompt("Input operation +,/,*,-");

    if (operation === "+"){
        result = num1 + num2;
    
    }
    else if (operation === "-"){
        result = num1 - num2;
    }
    else if (operation === "*"){
        result = num1 * num2;
    }
    else if (operation === "/"){
        result = num1 / num2;
    }
    else {
        console.log("Invalid operation");
        return;
    }
    
    console.log(`${num1} ${operation} ${num2} = ${result}`);
}

calculate();