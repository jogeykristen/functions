const palind = str =>{
    var reversed = '';
    for (let x = str.length - 1; x>=0; x--){
        reversed += str[x]
        console.log("abc = ",reversed)
    }
    console.log("rev =",reversed)
    if(str == reversed){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
    return reversed
}
let str = 'malayalam';
palind(str)