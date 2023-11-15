// ===============================================
//           JS_math_methods_Uebungen
// ===============================================

console.log("%c ======== level 1_1 ========", "color: blue; background-color: gold");

const PI = Math.PI;

console.log(PI);

let roundedPI = PI.toFixed(2);

console.log(roundedPI);

console.log("%c ======== level 1_2 ========", "color: blue; background-color: gold");

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

const roundNum = () =>
{
    array.forEach((value) =>
    {
        console.log(Math.round(value));
    })
}

roundNum();

console.log("%c ======== level 1_3 ========", "color: blue; background-color: gold");

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10);
let randomNum1_100 = Math.floor(Math.random() * 100);

console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);

console.log("%c ======== level 1_4 ========", "color: blue; background-color: gold");

const numbers =
[393,205,479,47,376,267,385,2,190,383,286,462,115,138,331,409,427,245,224,276,483,55,147,177,208,347,135,282,33,270,475,426,476,453,474,351,219,358,354,410,240,139,371,356,277,202,264,204,447,488];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

console.log("%c ======== level 2_1 ========", "color: blue; background-color: gold");

const roundTo = (num, fixValue) =>
{
    console.log(num);
    return num.toFixed(fixValue);
};

console.log(roundTo(3.1415926535, 5));

console.log("%c ======== level 2_2 ========", "color: blue; background-color: gold");

const getNumber = (num) =>
{
    num = window.prompt("Versuche eine Zufahlszahl zwischen 0 - 10 zu erraten! Tippe dafür eine Ganzzahl zwischen 0 - 10 ein und klicke dann auf 'ok'!");

    let randNum = Math.floor(Math.random() * 11);
    if(num > 0 && num < 10 && isNaN(num) === false)
    {
        if(Number(num) === Number(randNum))
        {
            console.log("Richtig");
            window.confirm(`Richtig! Die Zufallszahl lautet ${randNum}!`);
        }
        else
        {
            console.log("Falsch");
            window.confirm(`Das ist leider falsch... Die Zufallszahl lautet ${randNum}!`);
        }
    } 
    else
    {
        window.confirm("Keine gültige Eingabe!");
    }
    // location.reload();
}

getNumber();
