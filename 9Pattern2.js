let n=5;

function pattern2(n){
    let nst=n;
    let nsp=0;

    for(let r=0;r<n;r++){
        let row="";
        for(let cst=1;cst<=nst;cst++){
            row="*"+row;
        }
        console.log(row);
        nst--;
    }
}

pattern2(n);