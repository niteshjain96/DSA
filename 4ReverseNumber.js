let n=98765;

function reversenumber(n){
    n = Math.abs(n);
    let res=0;
    let ans=0;
    while(n>0){
        let rem=n%10;
        ans= res*10 + rem;
        n=Math.floor(n/10);
        res=ans;
    }
    console.log(ans);

}

reversenumber(n);