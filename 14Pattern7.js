let n=7;

function pattern7(n){
    let nsp=0;
    let nst=1;
    for(let r=0;r<n;r++){
        let row="";
        for(let csp=1;csp<=nsp;csp++){
            row=row+" ";
        }
        for(let cst=1;cst<=nst;cst++){
            row=row+"*";
        }
        console.log(row);
        nsp++;
    }
}

pattern7(n);