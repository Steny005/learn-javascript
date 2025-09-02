function testing (number){
    if (number>2)
    {
        console.log("greater than 2");
    }
    else if (number==1)
    {
        console.log("1");
    }
    else{
        console.log("it is zero or less than 1");
    }
}

const readlineSync = require('readline-sync');
const no= readlineSync.question('enter any number');
testing(no);
