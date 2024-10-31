function showDonation() {
    document.getElementById('donation-btn').classList.add('active');
    document.getElementById('history-btn').classList.remove('active');
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
}

function showHistory() {
    document.getElementById('history-btn').classList.add('active');
    document.getElementById('donation-btn').classList.remove('active');
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');
}

// 

function toggleActive(button) {
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

// 

function showDonation() {
    document.getElementById('donation-content').style.display = 'block';
    document.getElementById('history-content').style.display = 'none';
    document.getElementById('donation-btn').classList.add('active');
    document.getElementById('history-btn').classList.remove('active');
}

function showHistory() {
    document.getElementById('donation-content').style.display = 'none';
    document.getElementById('history-content').style.display = 'none';//cng none blk
    document.getElementById('history-btn').classList.add('active');
    document.getElementById('donation-btn').classList.remove('active');
}

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




function showDonation() {
    // Show donation content and hide history content
    document.getElementById("donation-content").style.display = "block";
    document.getElementById("history-content").classList.add("hidden");
}

function toggleHistory() {
    // Toggle visibility of the history section
    const historyContent = document.getElementById("history-content");
    const donationContent = document.getElementById("donation-content");

    donationContent.style.display = "none"; // Hide donation content
    historyContent.classList.toggle("hidden"); // Toggle history content visibility
}








