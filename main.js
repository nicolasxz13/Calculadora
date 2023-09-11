var display = 0;
var tempvalue1 = "";
var tempvalue2 = "";

var firstvalue = true;
var operationselect = "";

function clr() {
    operationselect = "";
    tempvalue1 = "";
    tempvalue2 = "";
    firstvalue = true;
    document.getElementById("display").innerHTML = 0;
}

function press(value) {
    if (firstvalue) {
        tempvalue1 += value;
        document.getElementById("display").innerHTML = tempvalue1;
    } else {
        tempvalue2 += value;
        document.getElementById("display").innerHTML = tempvalue2;
    }


}

function setOP(operation) {
    if (operation == "+") {
        operationselect = operation;
        firstvalue = false;
    }else if(operation == "/"){
        operationselect = operation;
        firstvalue = false;
    }else if(operation == "*"){
        operationselect = operation;
        firstvalue = false;
    }else if(operation == "-"){
        operationselect = operation;
        firstvalue = false;
    }
}

function calculate(){
    var result = 0;
    if(operationselect == "+"){
        result = parseInt(tempvalue1) + parseInt(tempvalue2);
    }else if(operationselect == "-"){
        result = tempvalue1 - tempvalue2;
    }else if(operationselect == "*"){
        result = tempvalue1 * tempvalue2;
    }else if(operationselect == "/"){
        result = tempvalue1 / tempvalue2;
    }
    document.getElementById("display").innerHTML = result;
}
