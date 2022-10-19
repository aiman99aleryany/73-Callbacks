// Write a function called printAsyncName, which will take as parameters a callback and a string (which will be name). The callback function will simply print "Hello". The printAsyncName function will have to execute the callback function after an interval of 1 second. After an interval of 2 seconds, we must print the name that we take as a parameter.

// The callback function must be an arrow function, can you also explain why?
// The only good reason I found is that the arrow function doesn't have its binding to the "this" keyword,
// so it is easy to access the lexical scope of the parent function, which is ideally good because
// when you pass functions you don't want them to take something/data with them.
// you just want to send it in a clear classic fashion way.

const printHello = () => console.log("Hello");

function printAsyncName(callback, name) {
  setTimeout(() => callback(), 1000);
  setTimeout(() => console.log(name), 2000);
}

printAsyncName(printHello, "Aiman");
