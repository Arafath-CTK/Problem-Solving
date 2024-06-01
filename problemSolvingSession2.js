// remove the odd numbered word from the string

let lengthGiver = (strg) => {
    return strg.split(" ").filter((e) => e.length % 2 === 0).join(" ");
};

console.log(lengthGiver("This is a python language"));
console.log(lengthGiver("i am laxmi"));
