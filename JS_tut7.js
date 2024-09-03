console.log("this is javascript");
let name1 = "harry";
let name2 = "shubham";
let name3 = "rahul";
let name4 = "rohan";
console.log(name1+ " good morning to you");
console.log(name2+ " good morning to you");
console.log(name3+ " good morning to you");
console.log(name4+ " good morning to you");
function greet(name){
    console.log(name+" good morning to you");
}
greet(name1);
greet(name2);
greet(name3);
greet(name4);
let greettext = "good morning to you";
function greetings(name, greettext){
    console.log(greettext+" "+name);
}
greetings(name1,greettext);
greetings(name2,greettext);
greetings(name3,greettext);
greetings(name4,greettext);

let a=5;
let b=6;
let c=7;
function sum(a,b,c){
    let sum=a+b+c;
    return sum;
}
console.log(sum(a,b,c));

