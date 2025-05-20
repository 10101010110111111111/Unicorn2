const a = 15;
const b = 20;
const c = 25;
let num = 0;

let sum = ["sum", a + b + c];
let average = ["average", (a + b + c) / 3];
let product = ["product", a * b * c];
let difference = ["difference", a - b - c];
let quotient = ["quotient", a / b / c];
let remainder = ["remainder", a % b % c];
let power = ["power", a ** b ** c];
let squareRoot = ["squareRootOFA", Math.sqrt(a)];
let cubeRoot = ["cubeRootOFA", Math.cbrt(a)];
let max = ["max", Math.max(a, b, c)];
let min = ["min", Math.min(a, b, c)];
let abs = ["absOFA", Math.abs(a)];
let round = ["roundAverage", Math.round(average[1])];
let ceil = ["ceilAverage", Math.ceil(average[1])];
let floor = ["floorAverage", Math.floor(average[1])];
let random = ["random", Math.random()];
let random2 = ["random2", Math.random() * 100];
let pi = ["pi", Math.PI];

function changeText() {
    const listF = [
        sum, average, product, difference, quotient, remainder, power,
        squareRoot, cubeRoot, max, min, abs, round, ceil, floor,
        random, random2, pi
    ];

    // Correct way to get a random item
    const randomIndex = Math.floor(Math.random() * listF.length);
    const element = listF[randomIndex];

    // Display name and value
    document.getElementById('my-text').textContent = element[0] + ": " + element[1];
}
function changeText2() {
    const listF = [
        sum, average, product, difference, quotient, remainder, power,
        squareRoot, cubeRoot, max, min, abs, round, ceil, floor,
        random, random2, pi
    ];
    

    // Correct way to get a random item
    const randomIndex = Math.floor(Math.random() * listF.length);
    const element = listF[num];
    num++;
    if (num >= listF.length) {
        num = 0; // Reset to 0 if it exceeds the length
    }
    // Display name and value
    document.getElementById('my-text2').textContent = element[0] + ": " + element[1];
}
function changeText3() {
    const listF = [
        sum, average, product, difference, quotient, remainder, power,
        squareRoot, cubeRoot, max, min, abs, round, ceil, floor,
        random, random2, pi
    ];
    let text = "";
    for (let i = 0; i < listF.length; i++) {
        const element = listF[i];
        let textToWorkWith = element[0] + ": " + element[1];
        text += textToWorkWith + ";   ";
        
    }
    

    // Display name and value
    document.getElementById('my-text3').textContent = text;
}
