// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    // if (name === "Alex"){
    //     return "Hello, Alex!";
    // }else if (name ==="Pat"){
    //     return "Hello, Pat!";
    // }else {
    //     return "Hello, Jane!";
    // }
    if (typeof name !== "string"){
        name = "World";
    }
    return "Hello, "+ name+"!";
}

function isFive(val) {
    return val == 5;
}

function isEven(val) {
    return parseInt(val)% 2 === 0;
}

function isVowel(char) {
    return char === "a" || char === "A";
}

function add(val1,val2) {
        return parseFloat(val1) + parseFloat(val2);
}