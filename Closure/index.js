function greet() {
  let n = "hello";
  return function () {
    console.log(n);
  };
}

let x=greet()
console.log(x())