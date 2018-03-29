var str = " car iss red and   yel yoyoyoyo ";
var longestWord = str.split(" ").sort(compareNumeric);

console.log(longestWord[0]);

function compareNumeric(a, b) {
    return b.length - a.length;
}