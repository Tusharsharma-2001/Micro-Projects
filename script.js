// Append numbers to the display
function appendNumber(number) {
    let display = document.getElementById("result");
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Append operators to the display
function appendOperator(operator) {
    let display = document.getElementById("result");
    display.value += " " + operator + " ";
}

// Calculate the result of the expression
function calculateResult() {
    let display = document.getElementById("result").value;
    try {
        display = display.replace('x', '*');
        document.getElementById("result").value = eval(display);
    } catch (e) {
        alert("Invalid Expression");
    }
}

// Clear the display (RESET) with default value of 0
function resetScreen() {
    document.getElementById("result").value = "0";
}

// Delete the last character from the display (DEL)
function deleteLast() {
    let display = document.getElementById("result").value;
    
    // Prevent deletion beyond the default value of "0"
    if (display.length === 1) {
        document.getElementById("result").value = "0";
    } else {
        document.getElementById("result").value = display.slice(0, -1);
    }
}
