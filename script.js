document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".event-checkbox");
    const totalFeeElement = document.getElementById("total-fee");

    function updateTotal() {
        let total = 0;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.getAttribute("data-price"));
            }
        });
        totalFeeElement.textContent = total;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateTotal);
    });
});
