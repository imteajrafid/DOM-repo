let balance = 5500; // Initial balance

function customDonate(inputId, totalId) {
    const donationAmount = parseInt(document.getElementById(inputId).value);
    const totalDonatedElem = document.getElementById(totalId);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    if (donationAmount > balance) {
        alert("Insufficient balance!");
        return; // Prevent donation if insufficient balance
    }

    // Deduct the donation amount from the balance
    balance -= donationAmount;

    const currentTotal = parseInt(totalDonatedElem.innerText) || 0;
    const newTotal = currentTotal + donationAmount;

    totalDonatedElem.innerText = `${newTotal} BDT`; // Update total donated
    document.getElementById(inputId).value = ""; // Clear input field

    // Update remaining balance in the navbar
    document.getElementById("balance").innerText = `${balance} BDT`;

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("successModal").classList.add("hidden");
}