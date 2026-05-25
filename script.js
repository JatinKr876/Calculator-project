// Display element
const display = document.getElementById('display');
const notification = document.getElementById('notification');
const hiddenFileContainer = document.getElementById('hiddenFileContainer');
const secretCodeInput = document.getElementById('secretCode');

// Secret code
const SECRET_CODE = '12345';

// Append number to display
function appendNumber(num) {
    if (display.value === '0' && num !== '.') {
        display.value = num;
    } else if (num === '.' && display.value.includes('.')) {
        return; // Prevent multiple decimals
    } else {
        display.value += num;
    }
}

// Append operator to display
function appendOperator(op) {
    const lastChar = display.value[display.value.length - 1];
    
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }
    
    if (display.value === '') {
        return;
    }
    
    display.value += op;
}

// Clear display
function clearDisplay() {
    display.value = '0';
    showNotification('Display cleared', 'info');
}

// Delete last character
function deleteLastChar() {
    if (display.value.length === 1) {
        display.value = '0';
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Calculate result
function calculate() {
    try {
        // Check for division by zero
        if (display.value.includes('/0')) {
            showNotification('Cannot divide by zero!', 'error');
            return;
        }
        
        // Evaluate the expression
        const result = eval(display.value);
        
        // Round to avoid floating point issues
        display.value = Math.round(result * 10000000000) / 10000000000;
        showNotification('✓ Calculation complete', 'success');
    } catch (error) {
        showNotification('Invalid calculation', 'error');
        display.value = '0';
    }
}

// Unlock hidden file
function unlockHiddenFile() {
    const enteredCode = secretCodeInput.value;
    
    if (enteredCode === '') {
        showNotification('Please enter the secret code', 'error');
        return;
    }
    
    if (enteredCode === SECRET_CODE) {
        hiddenFileContainer.classList.remove('hidden');
        showNotification('🔓 Access Granted! Welcome to the Secret Vault!', 'success');
        secretCodeInput.value = ''; // Clear input
    } else {
        showNotification('❌ Incorrect secret code!', 'error');
        secretCodeInput.value = ''; // Clear input
        secretCodeInput.focus();
    }
}

// Close hidden file
function closeHiddenFile() {
    hiddenFileContainer.classList.add('hidden');
    showNotification('Hidden file closed', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    
    // Auto-hide notification after 3 seconds
    setTimeout(() => {
        notification.textContent = '';
        notification.className = 'notification';
    }, 3000);
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Number keys
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    }
    
    // Operators
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        e.preventDefault();
        appendOperator(key);
    }
    
    // Decimal point
    if (key === '.') {
        e.preventDefault();
        appendNumber('.');
    }
    
    // Calculate (Enter)
    if (key === 'Enter') {
        e.preventDefault();
        // Check if secret code input is focused
        if (document.activeElement === secretCodeInput) {
            unlockHiddenFile();
        } else {
            calculate();
        }
    }
    
    // Clear (Escape)
    if (key === 'Escape') {
        clearDisplay();
    }
    
    // Delete last character (Backspace)
    if (key === 'Backspace') {
        e.preventDefault();
        deleteLastChar();
    }
});

// Close hidden file when clicking outside
hiddenFileContainer.addEventListener('click', (e) => {
    if (e.target === hiddenFileContainer) {
        closeHiddenFile();
    }
});

// Close hidden file on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !hiddenFileContainer.classList.contains('hidden')) {
        if (document.activeElement !== display && document.activeElement !== secretCodeInput) {
            closeHiddenFile();
        }
    }
});

// Initialize display on page load
window.addEventListener('load', () => {
    display.value = '0';
    showNotification('🧮 Calculator ready! Enter secret code to unlock hidden file.', 'info');
});
