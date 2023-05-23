const greater = str=>{
    //const len = str.map(w=> w.length)
    return str.filter(newStr => newStr.length >5)
}
words = ["rachel","austin","antony","hannah","keerthy","alexander","jogey"]
console.log(greater(words))