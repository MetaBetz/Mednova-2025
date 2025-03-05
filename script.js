document.addEventListener("DOMContentLoaded", function() {
    let checkboxes = document.querySelectorAll(".workshop-list input");
    let totalDisplay = document.getElementById("total");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            let total = 0;
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    total += parseInt(cb.value);
                }
            });
            totalDisplay.textContent = total;
        });
    });
});

function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let college = document.getElementById("college").value;
    let admissionYear = document.getElementById("admissionYear").value;
    let academicYear = document.getElementById("academicYear").value;
    let checkboxes = document.querySelectorAll(".workshop-list input:checked");
    let total = document.getElementById("total").textContent;

    if (!name || !email || !phone || !college || !admissionYear) {
        alert("Please fill all fields.");
        return;
    }

    let workshops = [];
    checkboxes.forEach(cb => workshops.push(cb.parentElement.textContent));

    alert(`Registered successfully!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCollege: ${college}\nYear of Admission: ${admissionYear}\nCurrent Year: ${academicYear}\nWorkshops: ${workshops.join(", ")}\nTotal Fees: ₹${total}`);
}
