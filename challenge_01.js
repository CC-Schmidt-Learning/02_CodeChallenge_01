
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

var x = prompt ("Enter a integer","0");
var y = prompt ("Enter a integer","0");

var num1 = parseInt(x);
var num2 = parseInt(y);

let sum = (num1 + num2); 

console.log ("Die Summe der Zahlen ist: " + sum);


// 2. variante //

let a = +prompt ("Enter first number");
let b = +prompt ("Enter second number");

alert(a+b);

//3. Variante //

let number1 = prompt("Enter your 1st Number: ");
    let number2 = prompt("Enter your 2nd Number: ");
    let result = parseFloat(number1) + parseFloat(number2);
    console.log(result);

    //4. Variante //

    console.log(
        "die Summe ist: " +
        (parseFloat(prompt ("Bitte eine Zahl angeben"))+
        parseFloat(prompt ("Bitte zweite Zahl angeben")))
    );
