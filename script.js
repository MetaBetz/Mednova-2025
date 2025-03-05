document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const totalPriceElement = document.getElementById("total-price");
    let selectedEvents = [];

    // Update total price when checkboxes are clicked
    document.querySelectorAll("input[name='event']").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            let total = 0;
            selectedEvents = [];

            document.querySelectorAll("input[name='event']:checked").forEach(checkedBox => {
                total += parseInt(checkedBox.value);
                selectedEvents.push(checkedBox.getAttribute("data-name"));
            });

            totalPriceElement.textContent = total;
        });
    });

    // Handle form submission & payment
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let college = document.getElementById("college").value;
        let admissionYear = document.getElementById("admission-year").value;
        let academicYear = document.getElementById("academic-year").value;
        let totalAmount = totalPriceElement.textContent;

        if (totalAmount == "0") {
            alert("Please select at least one event.");
            return;
        }

        // Generate UPI Payment Link (Replace UPI ID with yours)
        let upiID = "yourupi@upi";
        let upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&mc=&tid=&tr=&tn=Mednova+Registration&am=${totalAmount}&cu=INR`;

        alert(`Redirecting to UPI Payment for ₹${totalAmount}`);
        window.location.href = upiLink;
    });
});
