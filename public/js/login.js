document.getElementById('cropForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Validate form fields
    let isValid = true;
    isValid &= validateField('cropName', 'Crop name is required');
    isValid &= validateField('cropType', 'Crop type is required');
    isValid &= validateField('quantity', 'Quantity is required', true);
    isValid &= validateField('date', 'Date is required');

    // If form is valid, proceed with submission (for demo, we'll just log the values)
    if (isValid) {
        console.log('Form is valid. Submitting...');
        // Here you can add the code to submit the form data, e.g., via AJAX
    }
});

function validateField(fieldId, errorMessage, isNumber = false) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    if (field.value.trim() === '') {
        errorDiv.textContent = errorMessage;
        return false;
    }
    if (isNumber && isNaN(field.value)) {
        errorDiv.textContent = 'Please enter a valid number';
        return false;
    }
    return true;
}

function clearErrors() {
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(function(div) {
        div.textContent = '';
    });
}
