// 2. Fibonacci series

let num = parseInt(prompt("Enter a number:"));
let n1 = 0, n2 = 1, n3;
for (let i = 1; i <= num; i++) {
    // console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    console.log("Fibonacci series:" + n1);
}