const a = Math.floor(Math.random() * 100);
let result;

if ((a > 10 ? a : a * 2) > 5) {
    result = 2 * a + 1;
} 
else if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
    result = 5;
} 
else {
    result = a % 2 === 0 ? 6 : 7;
}

console.log(result);