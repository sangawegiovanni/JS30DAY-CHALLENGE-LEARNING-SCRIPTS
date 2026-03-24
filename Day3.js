function analyzeArray(){
    let numbers = prompt ("Enter numbers separted by commas:");
    
    let numberArray = numbers.split(",").map(Number);

    let max = numberArray[0];
    let min = numberArray[0];
    let sum = 0;

    for (let i =0; i<numberArray.length; i++){
        let num = numberArray[i];

        if (num > max){
            max = num;
        }

        if (num < min){
            min =num
        }

        sum +=num;
    }

    console.log(`MAX: ${max}`);
    console.log(`MIN: ${min}`);
    console.log(`SUM: ${sum}`);
    console.log(`AVERAGE: ${sum / numberArray.length}`);
    
}

analyzeArray();
