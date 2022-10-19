// Write a function called printAsyncName, which will take as parameters a callback and a string (which will be name). The callback function will simply print "Hello". The printAsyncName function will have to execute the callback function after an interval of 1 second. After an interval of 2 seconds, we must print the name that we take as a parameter.

// The callback function must be an arrow function, can you also explain why?

const printHello = () => "Hello";

function printAsyncName(callback, name) {
  setTimeout(() => console.log(callback()), 1000);
  setTimeout(() => console.log(name), 2000);
}

printAsyncName(printHello, "Aiman");