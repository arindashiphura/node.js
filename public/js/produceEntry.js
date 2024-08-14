document.getElementById('produceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate form fields
    let produceName = document.getElementById('produceName').value.trim();
    let produceType = document.getElementById('produceType').value.trim();
    let tonnage = document.getElementById('tonnage').value;
    let cost = document.getElementById('cost').value;
    let dealerName = document.getElementById('dealerName').value.trim();
    let contact = document.getElementById('contact').value;

    if (produceName === "" || produceType === "" || dealerName === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (tonnage < 1000) {
        alert("Tonnage must be at least 1000 kg.");
        return;
    }

    if (cost < 10000) {
        alert("Cost must be at least 10000 UgX.");
        return;
    }

    if (!/^[0-9]{10}$/.test(contact)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // If all validations pass
    alert("Produce entry recorded successfully!");
    // You can now send this data to your server or process it further
});
