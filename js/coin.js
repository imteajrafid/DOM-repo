function donate(amount) {
    const balanceElement = document.getElementById('balance');
    let currentBalance = parseInt(balanceElement.textContent);

    // New balance after donation
    currentBalance -= amount;

    // Update the displayed balance
    balanceElement.textContent = currentBalance;

    // Optional: Change color based on remaining balance
    balanceElement.className = currentBalance > 0 ? 'text-lg font-bold text-green-600' : 'text-lg font-bold text-red-600';
  }

  // btn

  const donationBtn = document.getElementById("donation-btn");
const historyBtn = document.getElementById("history-btn");

// Function to handle button click and toggle active class
function toggleActive(button) {
  donationBtn.classList.remove("active");
  historyBtn.classList.remove("active");

  button.classList.add("active");
}

// Adding event listeners
donationBtn.addEventListener("click", () => toggleActive(donationBtn));
historyBtn.addEventListener("click", () => toggleActive(historyBtn));
