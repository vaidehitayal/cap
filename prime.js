let num = 5
let count =0

for(i=1;i<=num;i++){
if(num%i==0){
count++
}
}

if (count==2){
console.log("prime no.")
}

else{
console.log("Not a prime no.")
}