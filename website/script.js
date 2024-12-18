document.addEventListener("DOMContentLoaded", () => {
    // Create the modal HTML dynamically
    const modalHTML = `
        <div id="modal" style="
            display: none; 
            position: fixed; 
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
            background-color: rgba(0, 0, 0, 0.5); 
            z-index: 1000;">
            <div id="modal-content" style="
                background: white; 
                width: 90%; 
                max-width: 400px; 
                margin: 10% auto; 
                padding: 20px; 
                border-radius: 8px; 
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); 
                text-align: center;">
                <h2>Enter Payment Details</h2>
                <form id="payment-form">
                    <input type="text" id="card-number" placeholder="Card Number" style="width: 90%; margin-bottom: 10px; padding: 8px;"/>
                    <input type="text" id="cvv" placeholder="CVV" style="width: 90%; margin-bottom: 10px; padding: 8px;"/>
                    <input type="text" id="name" placeholder="Name" style="width: 90%; margin-bottom: 10px; padding: 8px;"/>
                    <input type="text" id="address" placeholder="Address" style="width: 90%; margin-bottom: 20px; padding: 8px;"/>
                    <button type="button" id="submit-btn" style="background-color: red; color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 4px;">Submit</button>
                    <button type="button" id="close-btn" style="background-color: gray; color: white; border: none; padding: 8px 12px; cursor: pointer; border-radius: 4px; margin-left: 5px;">Close</button>
                </form>
            </div>
        </div>
    `;

    // Append the modal HTML to the body
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Get references to the modal and buttons
    const modal = document.getElementById("modal");
    const buyButtons = document.querySelectorAll(".grid-item button"); // Select all BUY buttons
    const closeBtn = document.getElementById("close-btn");
    const submitBtn = document.getElementById("submit-btn");

    // Open modal when a "BUY" button is clicked
    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "block"; // Show modal
        });
    });

    // Close modal when "Close" button is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
        clearInputs();
    });

    // Submit button functionality
    submitBtn.addEventListener("click", () => {
        const name = document.getElementById("name").value; // Get the name entered by the user
        alert("Thank you for your purchase, " + name + "!"); // Show name in alert
        modal.style.display = "none"; // Hide modal after submit
        clearInputs();
    });

    // Function to clear input fields
    function clearInputs() {
        document.getElementById("card-number").value = "";
        document.getElementById("cvv").value = "";
        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
    }

    // Close modal if clicking outside of the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            clearInputs();
        }
    });
});
