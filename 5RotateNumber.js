let n=34567898765;
let k=100;

function rotate(n,k){
    let nod=0;
    let originaln=n;

    // Find number of digits
    while(n>0){
        n=Math.floor(n/10);
        nod++;
    }
    console.log(nod);
    if(k<0){
        k=k+nod;
    }
    k=k%nod;
    // Find Multiplier & Divisor
    let mult=1;
    let div=1;
    for(let i=1;i<=nod;i++){
        if(i<=k){
            div=div*10;
        }
        else{
            mult=mult*10;
        }
    }

    console.log(mult)
    console.log(div);
    let q=Math.floor(originaln/div);
    let rem=originaln%div;
    console.log(rem*mult+q);

}
rotate(n,k)