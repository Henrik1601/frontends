function factorial(num){
    if(num==1){
        return 1;
    }
    else{
        fact=factorial(num-1);
    }
    return fact;
}
console.log(factorial(3));