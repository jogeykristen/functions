var  a = [10,20,45,95,1,34,67,90,8];
temp = a[0];
temp_min = a[0];
max = 0;
min = 0;
for(x in a){
    if(a[x]>temp){
        temp = a[x];
       
    }
    else if(a[x]<temp_min){
        temp_min = a[x];
        
    }
    max = temp;
    min = temp_min;
    
}
console.log("max =",max);
console.log("min =",min);
console.log("temp_max =",temp);
console.log("temp_min =",temp_min);
