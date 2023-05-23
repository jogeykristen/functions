const loop = words =>{
    for (let i = 0, j = words.length - 1; i <= j; i++, j--) {
            console.log("first loop =",words[i]);
            console.log("second loop =",words[j]);
            if(words[i]!==words[j]){
                console.log("not  palindrome")
                return false
            }
            
    }
    console.log("Palindrome");
    return true
}
str = "abcvba";
loop(str);