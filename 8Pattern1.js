// *
// *    *
// *    *   *
// *    *   *   *
// *    *   *   *   *

let n=5;

function pattern1(n){
    let nst=1;
    let nsp=0;

    for(let r=0;r<n;r++){
        let row="";
        for(let cst=1;cst<=nst;cst++){
            row = "*"+ row ;
        }
        for(let csp=1;csp<=nsp;csp++){
            row = "*"+ row ;
        }
        console.log(row);
        nst++;
    }
}

pattern1(n);