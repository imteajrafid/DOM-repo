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