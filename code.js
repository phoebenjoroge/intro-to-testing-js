// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }
const helloWorld =function (){
    return "Hello, World!";
}
function sayHello(input){
    if(input == false || input == true){
        return "Hello, World!"
    }else
    return "Hello, " + input +"!";
}
function isFive(input){
    if(input === 5){
        return true;
    }else
        return false;
}
function isEven(input){
    if(input % 2 === 0){
        return true;
    }else
        return false;
}
function isVowel(input){
    if(input === 'a' || input === 'e' || input === 'i'|| input === 'o'|| input === 'u'){
        return true;
    }else if (input === 'A' || input === 'E' || input === 'I'|| input === 'O'|| input === 'U'){
        return true;
    }else
        return false;
}
function add(num1, num2){
    if(isNaN(num1)|| isNaN(num1)){
        return NaN;
    }else
    return parseFloat(num1)+ parseFloat(num2);
}