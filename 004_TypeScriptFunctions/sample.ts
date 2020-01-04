function add(a: number, b: number): number {
    let sum: number = a + b;
    return sum;
}

console.log(add(2, 5));

// errors
// console.log(add(2, "5"));
// let s: string = add(2, 5);