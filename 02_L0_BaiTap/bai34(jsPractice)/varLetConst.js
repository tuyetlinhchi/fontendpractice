// About scope
function run() {
  var foo = "Foo";
  let bar = "Bar";
  console.log(foo, bar); // Foo Bar
  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
  }
  console.log(moo); // Mooo
  //console.log(baz); // ReferenceError
}
run();
//Creating global object property, At the top level, let, unlike var, does not create a property on the global object
var foo = "Foo"; // globally scoped
let bar = "Bar"; // not allowed to be globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined

//hoisting
function checkHoisting1() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}
checkHoisting1();
function checkHoisting2() {
  //console.log(foo); // ReferenceError
  let foo = "Foo";
  console.log(foo); // Foo
}
checkHoisting2();
//Redeclaration
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo1' is replaced with 'foo2'.

//let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
