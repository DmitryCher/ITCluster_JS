var str = " Hello World   and Coders";
var tempStr = "";
var newStr = "";
var counter = 0;
var arr = [];

console.log(joinArray(splitString(str)));

function splitString(str) {
    for(i=0; i<=str.length; i++) {    
        if((str.charAt(i) == " ") || (i == str.length)) {
            arr[counter++] = tempStr;
            tempStr = "";
        } else {
            tempStr += str.charAt(i);        
        }
    }
    return arr;
}

function joinArray(array) {
    for(i=arr.length-1; i>=0; i--) {
        newStr += arr[i];
        if(i!=0) {
            newStr += " ";
        }
    }
    return newStr;
}


