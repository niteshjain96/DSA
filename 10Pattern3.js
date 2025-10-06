let n=5;

function pattern3(n){
    let nst=1;
    let nsp=n-1;
    for(let r=0;r<n;r++){
        let row=" ";
        for(let csp=1;csp<=nsp;csp++){
            row=row+" ";
        }
        for(let cst=1;cst<=nst;cst++){
            row=row+"*";
        }
        console.log(row);
        nst++;
        nsp--;
    }
}
pattern3(n);