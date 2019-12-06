// number
function getNumber(number) {
    let getValue = document.getElementById("output-value");
    switch (number) {
        case 1:
            getValue.innerHTML += '1';
            break;
        case 2:
            getValue.innerHTML += '2';
            break;
        case 3:
            getValue.innerHTML += '3';
            break;
        case 4:
            getValue.innerHTML += '4';
            break;
        case 5:
            getValue.innerHTML += '5';
            break;
        case 6:
            getValue.innerHTML += '6';
            break;
        case 7:
            getValue.innerHTML += '7';
            break;
        case 8:
            getValue.innerHTML += '8';
            break;
        case 9:
            getValue.innerHTML += '9';
            break;
        case 0:
            getValue.innerHTML += '0';
            break;
    }
}
function getoperater(operator) {
    let getValue = document.getElementById("output-value");
    switch (operator) {
        case '-':
            getValue.innerHTML += "-";
            break;
        case '+':
            getValue.innerHTML += "+";
            break;
        case '*':
            getValue.innerHTML += "*";
            break;
        case '/':
            getValue.innerHTML += "/";
            break;
        case '%':
            getValue.innerHTML += "%";
            break;
    }
}
// clear
function getclearSreen() {
    let clear = document.getElementById("output-value").innerHTML = " ";
}
// backspace
function getbackSpace() {
    let back = document.getElementById("output-value");
    let space = back.innerHTML;
    if (space.length > 0) {
        space = space.substring(0, space.length - 1);
        back.innerHTML = space;
    }
}
// =
function getnum() {
    let num = document.getElementById("output-value");
    let sum = Math.abs(eval(num.innerHTML));
    document.getElementById("output-value").innerHTML = sum;
}
// sounds
var sounds = document.getElementById("output-value");
var spn = document.querySelector("#microphone");
spn.addEventListener('click', userSpeak);
function userSpeak() {
    if ('webkitSpeechRecognition' in window) {
        let speak = new webkitSpeechRecognition();
        speak.continuous = true;
        speak.interimResult = true;
        speak.lang = "en-IN";
        speak.start();
        operator = { "plus": "+", "divid": "/", "multiply": "*", "minus": "-" };
        let finalSpeak = '';
        speak.onresult = function (event) {
            let inherimTransript = ' ';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                let transripts = event.results[i][0].transcript;
                transripts.replace('\n', "<br>");
                if (event.results[i].isFinal) {
                    finalSpeak += transripts;
                } else {
                    inherimTransript += transripts;
                }
            }
            sounds.innerHTML = finalSpeak + inherimTransript;
            let speaker = document.getElementById("output-value").innerHTML;
            setTimeout(function () {
                document.getElementById("output-value").innerHTML = eval(speaker);
            }, 1000);
        }
    } else {
        sounds.innerHTML = " Browser is not support";
    }
}

