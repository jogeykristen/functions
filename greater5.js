const greater = str=>{
    //const len = str.map(w=> w.length)
    return str.filter(newStr => newStr.length >5)
}
words = ["apple","asd","ssssss","asdfgh","as","sdaksbhdah"]
console.log(greater(words))