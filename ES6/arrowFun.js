// Arrow functions allow us to write shorter function syntax:

hello = function(){
    return "hello baby"

}
console.log(hello)


// more shorter
hello1 = ()=>{
    return "hello World"
}

console.log(hello1)

// arrow  functions return value by default 

hello3 = ()=> "Hello World"
console.log(hello3)








// What About this?
// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there is no binding of this.

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
