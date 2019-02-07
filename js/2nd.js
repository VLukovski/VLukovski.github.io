function fib(a=parseInt(prompt("First number: ", 0)),b=parseInt(prompt("Second number: ",1)),count=0){
    let c = a + b;
    document.getElementById("fiboutput").innerHTML += b + " ";
    count = count + 1;
    if (count < 20) {
        fib(b,c,count);
    }
}

function clearFib() {
    document.getElementById("fiboutput").innerHTML = "";
}

function collatz(number = parseInt(prompt("First number: ", 11))) {
    document.getElementById("collatzoutput").innerHTML += number + " ";
    if (number == 1) {
        return;
    }
    else if (number % 2 == 0) {
        number = number / 2;
    }
    else if (number % 2 == 1) {
        number = number * 3 + 1;
    }
    collatz(number);
}

function clearCollatz() {
    document.getElementById("collatzoutput").innerHTML = "";
}
