function calcPostCode() {
    const input = document.getElementById("plz");
    const span = document.getElementById("span");
    const alertMessage = document.getElementById("alert-message");

    var PostCode = input.value.trim(); // Remove any extra spaces

    //Validate input (check if it's a number)
    if (PostCode === "" || isNaN(PostCode) || PostCode <= 0) {
        span.textContent = ''; // Reset previous message
        alertMessage.textContent = 'Please enter a valid postcode.';
        alertMessage.style.color = 'red';
        return;
    }
    
    // onvert the post code to an integer
    PostCode = parseInt(PostCode);

    var Optimizability = ((PostCode / 2) * 3 + 1) / 1000;
    Optimizability = (Optimizability * 100) % 36;

    var txt = `Area of Postcode ${PostCode} can be optimized by ${Optimizability.toFixed(2)} Percent.`;

    // Update the result on the page
    span.textContent = txt; // Set the span text with the result message
    alertMessage.textContent = ''; // Clear any previous error messages
}

