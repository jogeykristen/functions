const sum=numbers=>{
    let sum = 0;
    
    for (x in numbers){
        sum += numbers[x]
    }
    return sum
}
//const numbers=[4,5,6,7,8,9]
console.log(sum([4,5,6,7,8,9]));

// const add = (a,b)=>{
//     return s = a*b
// }
// console.log(add(10,10))