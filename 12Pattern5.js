let n=5;

function pattern5(n){
    let nsp = Math.floor(n / 2);
    let nst=1;
    for(let r=0;r<n;r++){
        let row=" ";
        for(let csp=1;csp<=nsp;csp++){
            row=row+" ";
        }
        for(let cst=1;cst<=nst;cst++){
            row=row+"*";
        }
        for(let csp=1;csp<=nsp;csp++){
            row=row+" ";
        }
        console.log(row);

         if (r < Math.floor(n / 2)) {
            nsp--;
            nst += 2;
        } else {
            nsp++;
            nst -= 2;
        }

    }

}
pattern5(n);