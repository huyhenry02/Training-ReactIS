//khain bao bien var
var a = 10;
var b = 2;
a = 20;
function add(num1,num2){
    //biến cục bộ
    var sum = num1+num2;
    return sum;
}
function sub(num){
    //biến cục bộ
    var sub = num-a;
    return sub;
}
console.log('a = '+a);
console.log('hiệu 2 só '+sub(20));

