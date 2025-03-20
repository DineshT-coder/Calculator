function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}


function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}


function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}


function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch {
        display.value = "Error"; // Handle invalid expressions
    }
}


document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
    }
});
