const reverse = str =>{
    let reversed = '';
    console.log("length =",str.length)
    //var splitString = str.split("");
    for (let x= str.length -1; x>=0; x-- ){
        reversed += str[x] 
    }
    return reversed
}
str = 'abcd'
console.log(reverse(str))