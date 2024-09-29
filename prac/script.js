// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

// Append values (numbers and operators) to the display
function appendValue(value) {
    let display = document.getElementById('display').value;
    
    // Ensure that the first input is a valid number, not an operator
    if (display === '' && (value === '+' || value === '-' || value === '*' || value === '/')) {
        return;
    }
    
    document.getElementById('display').value += value;
}

// Calculate the result of the expression
function calculate() {
    let display = document.getElementById('display').value;

    try {
        // Use eval() to calculate the result
        let result = eval(display);

        // Display the result
        document.getElementById('display').value = result;
    } catch (e) {
        // If there is an error, display 'Error'
        document.getElementById('display').value = 'Error';
    }
}
