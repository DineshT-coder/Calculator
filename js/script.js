// Append value to the display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Clear the entire display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

// Backspace: Remove the last character
function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Calculate the result (triggered only by the "=" button)
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch {
        display.value = "Error"; // Handle invalid expressions
    }
}

// Disable Enter Key to Avoid Accidental Input
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Stop Enter key from triggering any action
    }
});
