let n=5;

function pattern6(n){
    let nsp=1;
    let nst=Math.ceil(n/2);
    console.log(nst)

    for(let r=0;r<n;r++){
        let row=" ";
        for(let cst=1;cst<=nst;cst++){
            row=row+"*";
        }
        for(let csp=1;csp<=nsp;csp++){
            row=row+" ";
        }
        for(let cst=1;cst<=nst;cst++){
            row=row+"*";
        }
        console.log(row);
        if(r<Math.floor(n/2)){
            nst--;
            nsp=nsp+2;
        }
        else{
            nst++;
            nsp=nsp-2;
        }
    }
}

pattern6(n)