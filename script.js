document.getElementById("payButton").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let event = document.getElementById("event").value;
    
    if (name && email && phone) {
        document.getElementById("paymentSection").style.display = "block";

        // Generate UPI payment link (Replace with your UPI ID)
        let upiId = "yourupi@upi";
        let amount = "100";
        let upiLink = `upi://pay?pa=${upiId}&pn=Mednova&mc=123456&tid=txn123&tr=order123&tn=EventFee&am=${amount}&cu=INR`;
        
        document.getElementById("upiPaymentLink").href = upiLink;
    } else {
        alert("Please fill all details.");
    }
});

document.getElementById("submitForm").addEventListener("click", function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let event = document.getElementById("event").value;

    saveToFirebase(name, email, phone, event);
    alert("Registration Successful!");
});

// Firebase Setup
function saveToFirebase(name, email, phone, event) {
    let firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_PROJECT.firebaseapp.com",
        databaseURL: "https://YOUR_PROJECT.firebaseio.com",
        projectId: "YOUR_PROJECT",
        storageBucket: "YOUR_PROJECT.appspot.com",
        messagingSenderId: "YOUR_SENDER_ID",
        appId: "YOUR_APP_ID"
    };
    
    firebase.initializeApp(firebaseConfig);
    let db = firebase.database();
    db.ref("registrations").push({
        name: name,
        email: email,
        phone: phone,
        event: event,
        paymentStatus: "Pending"
    });
}
