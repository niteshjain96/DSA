let n=1440;

function primefactorization(n){
    for(let i=2;i*i<=n;i++){
        while(n%i==0){
            console.log(i+"  ");
            n=Math.floor(n/i);
        }
    }
    if(n>1){
        console.log(n+" ");
    }
}

primefactorization(n);