// 1. Create an array named numbers and store 5 number values in it
let numbers = [69, 1, 420, 7, 999],sum=0,average;
// 2. Calculate the sum of array items and print it to the console using console.log()
for(let i=0; i< numbers.length; i++){
    sum+= numbers[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
for(let i=0; i< numbers.length; i++){
    sum+= numbers[i];
}
console.log(sum);
console.log(numbers.length);
average = sum/(numbers.length);
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
for(i=0; i< numbers.length-1; i++){
    numbers[i] >numbers[i + 1]? console.log(`${numbers[i]} is bigger than ${numbers[i + 1]}`) : console.log(`${numbers[i + 1]} is bigger than ${numbers[i]}`);
}


// 5. Find the lowest number in the array and print it to the console using console.log()
// let smallNo = numbers[0];
// for(i=0; i< numbers.length-1; i++){
//     // numbers[i] < numbers[i + 1]? console.log(`${numbers[i]} is smaller than ${numbers[i + 1]}`) : console.log(`${numbers[i + 1]} is smaller than ${numbers[i]}`);
//     smallNo= smallNo < numbers[i + 1]? smallNo :numbers[i + 1];
// }
// console.log(smallNo);
// 6. Find the even numbers in the array and print them to the console using console.log()
evenNo=[];
for(let number of numbers){
    if(number %2=== 0){
        evenNo.push(number);
    }
    else{
        console.log(number);
    }
}
console.log(`Even numbers are ${evenNo}`);

// 7. Find the odd numbers in the array and print them to the console using console.log()
oddNo=[];
for(let number of numbers){
    if(number %2=== 1){
        oddNo.push(number);
    }
    else{
        console.log(number);
    }
}
console.log(`Odd numbers are ${oddNo}`);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
divbyFive = [];
for(let number of numbers){
    if(number %5=== 0){
        divbyFive.push(number);
    }
    else{
        console.log(number);
    }
}
console.log(`Numbers divisible by 5 are ${divbyFive}`);
// 9. Log all the element of the array one by one
for(i=0; i< numbers.length; i++){
    console.log(divbyFive[i]);
}
// 10. Find all the number in the array that is divisible by 3
divbyThree = [];
for(let number of numbers){
    if(number %3=== 0){
        divbyThree.push(number);
    }
    else{
        console.log(number);
    }
}
console.log(`Numbers divisible by 3 are ${divbyThree}`);