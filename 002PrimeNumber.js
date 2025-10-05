let number=5;

function primecheck(n){
    if(n<2){
        console.log('Not Prime');
        return;
    }
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            console.log('Not prime');
            return;
        }
    }
    console.log('Prime');
}

primecheck(number)