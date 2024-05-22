function calculateRow(row) {
    let total = 0;
    for (let i = 0; i < 10; i++) {
        const inputElement = document.getElementById(`input-${row}-${i}`);
        const inputValue = parseInt(inputElement.value) || 0;

        // Update background color based on input value
        if (inputValue > 0) {
            inputElement.classList.add('positive');
            inputElement.classList.remove('negative');
        } else if (inputValue < 0) {
            inputElement.classList.add('negative');
            inputElement.classList.remove('positive');
        } else {
            inputElement.classList.remove('positive');
            inputElement.classList.remove('negative');
        }

        total += inputValue;
    }
    document.getElementById(`result-${row}`).value = total;
    calculateOverallTotal();
}

function calculateOverallTotal() {
    let overallTotal = 0;
    for (let i = 0; i < 10; i++) {
        const rowTotal = document.getElementById(`result-${i}`).value;
        overallTotal += parseInt(rowTotal) || 0;
    }
    document.getElementById('overall-total').value = overallTotal;
}
