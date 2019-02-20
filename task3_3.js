function sum() {
    var a = 0;
    for (var i=0; i < arguments.length; i++) {
        a += arguments[i];
    }
    return a;
}
 
console.log(sum(5, 2));         
console.log(sum(1, 1, 1, 1));  
console.log(sum());             
 