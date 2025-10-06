let n=7;

function pattern8(n){
    let nsp=n-1;
    let nst=1;
    for(let r=0;r<n;r++){
        let row="";
        for(let csp=1;csp<=nsp;csp++){
            row=row+"   ";
        }
        for(let cst=1;cst<=nst;cst++){
            row=row+"*";
        }
        console.log(row);
        nsp--;
    }
}

pattern8(n);