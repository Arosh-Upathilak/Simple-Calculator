let firstnumber;
let secondnumber;
let operator;

function f0(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"0";
    console.log("0");
}
function f1(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"1";
}
function f2(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"2";
}
function f3(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"3";
}
function f4(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"4";
}
function f5(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"5";
}
function f6(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"6";
}
function f7(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"7";
}
function f8(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"8";
}
function f9(){
    let previos=document.getElementById('display').value;
    document.getElementById('display').value= previos+"9";
}
function fAC(){
    document.getElementById('display').value= "";
}
function fback() {
    let previousValue = document.getElementById('display').value;
    // document.getElementById('display').value = previousValue.substring(0, (previousValue.length - 1));
    document.getElementById('display').value = previousValue.slice(0, -1);
    firstnumber = null;
    secondnumber = null;
    operator = null;
}


function fpluse(){
     firstnumber=parseFloat(document.getElementById('display').value);
    document.getElementById('display').value= "";

    operator="add";

}
function fminuse(){
    firstnumber=parseFloat(document.getElementById('display').value);
    document.getElementById('display').value= "";

    operator="sub";

}
function fmulti(){
    firstnumber=parseFloat(document.getElementById('display').value);
    document.getElementById('display').value= "";

    operator="mul";

}
function fdivi(){
    firstnumber=parseFloat(document.getElementById('display').value);
    document.getElementById('display').value= "";

    operator="div";

}

function fequal(){
    secondnumber=parseFloat(document.getElementById('display').value);
    if (operator=="add"){
        document.getElementById('display').value= String(firstnumber + secondnumber);
    }
    else if (operator=="sub"){
        document.getElementById('display').value= String(firstnumber - secondnumber);
    }
    else if (operator=="mul"){
        document.getElementById('display').value= String(firstnumber * secondnumber);
    }
    else if (operator=="div"){
        document.getElementById('display').value= String(firstnumber / secondnumber);
    }
    else{
        document.getElementById('display').value= "Invalid opration ";
    }
}


console.log(1/0);


