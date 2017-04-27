function multiply(number1, number2) {
    var multiplication = [];
    // checking for zero number
    if (parseInt(number1) === 0 || parseInt(number2) === 0) {
        return "0";
    }

    // reversing the numbers
    number1 = number1.split("").reverse();
    number2 = number2.split("").reverse();

    for (var i = 0; number1[i] >= 0; i++) {
        for (var j = 0; number2[j] >= 0; j++) {
            if (!multiplication[i + j]) {
                multiplication[i + j] = 0;
            }
            multiplication[i + j] += number1[i] * number2[j];
        }
    }

    for (var i = 0; multiplication[i] >= 0; i++) {
        if (multiplication[i] >= 10) {
            if (!multiplication[i + 1]) {
                multiplication[i + 1] = 0;
            }
            multiplication[i + 1] += parseInt(multiplication[i] / 10);
            multiplication[i] %= 10;
        }
    }

    while (multiplication[multiplication.length - 1] === 0) {
        multiplication.pop();
    }

    return multiplication.reverse().join("");
}

console.log("0 X 00 ==>", multiply("0", "00"));
console.log("123456789343244355465643534545 X 9876543210 ==>", multiply("123456789343244355465643534545", "9876543210"));
console.log("0123 X 004 ==>", multiply("0123", "004"));
