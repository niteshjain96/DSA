let number=10;

function fionaccitillN(n){
    let a=0;
    let b=1;
    console.log(a);
    console.log(b);
    for(i=2;i<n;i++){
        let res=a+b;
        console.log(res);
        a=b;
        b=res;
    }

}

fionaccitillN(number);