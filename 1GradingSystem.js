let marks=99;

function gradecheck(marks){
    if(marks<0 || marks>100){
        console.log('Please Enter Valid marks');
        return;
    }

    if(marks>=90){
        console.log('Excelennet');
    }
    else if(marks>80 && marks<90){
        console.log('Very Good')
    }
    else if(marks>70 && marks<80){
        console.log('Good');
    }
    else{
        console.log('Fail')
    }
}

gradecheck(marks)