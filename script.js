document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const totalPriceElement = document.getElementById("total-price");

    function updateTotal() {
        let total = 0;
        document.querySelectorAll("input[name='event']:checked").forEach(checkedBox => {
            total += parseInt(checkedBox.value); 
        });
        totalPriceElement.textContent = total;
    }

    document.querySelectorAll("input[name='event']").forEach(checkbox => {
        checkbox.addEventListener("change", updateTotal);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        const total
