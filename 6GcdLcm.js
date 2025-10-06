let n1=30;
let n2=48;

function gcdlcm(n1,n2){
    let tn1=n1;
    let tn2=n2;

    while(n1%n2!=0){
        let rem=n1%n2;
        n1=n2;        
        n2=rem;
    }

    console.log('gcd ', n2 )
    console.log('lcm', (tn1*tn2)/n2)
}

gcdlcm(n1,n2);