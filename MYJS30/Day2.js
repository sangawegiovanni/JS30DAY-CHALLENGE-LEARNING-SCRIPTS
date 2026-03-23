function numberanalyzer(){
    let num = prompt("Input any number ");

    if (num % 2 === 0){
        console.log(`The number ${num} is even`);
    }
    else{
        console.log(`The number${num} is odd`);
    }

    let isPrime = true;

    if (num <2){
        isPrime = false;
    }
    else{
        for (let i=2; i<num; i++){
            if  (num % i === 0){
                isPrime =false;
            }else{
                isPrime =true;
            }
        }
    }
    console.log(`The number ${num} is ${isPrime ? 'pime number':'not a prime number'}`);
}

numberanalyzer();