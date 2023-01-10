// Write your solution here!
let cats = ["Milo","Otis","Garfield"];
let copy = [];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    // return cats.splice(cats.leng,0,name);
    copy = cats.slice();
    copy.splice(cats.length,0,name);
    return copy;
}

function prependCat(name){
    copy = cats.slice();
    copy.splice(0,0,name);
    return copy;
}

function removeLastCat(){
    copy = cats.slice();
    copy.splice(cats.length-1,1);
    return copy;
}

function removeFirstCat(){
    copy = cats.slice();
    copy.splice(0,1);
    return copy;
}