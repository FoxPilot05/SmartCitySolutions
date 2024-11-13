function calcPostCode() {
    const input = document.getElementById("plz");
    const alertMessage = document.getElementById("alert-message");

    var PostCode = input.value.trim(); // Remove any extra spaces

    // Validate input (check if it's a number)
    if (PostCode === "" || isNaN(PostCode) || PostCode <= 0) {
        alertMessage.textContent = 'Please enter a valid postcode.';
        alertMessage.style.color = 'red';
        return;
    } else {
        PostCode = parseInt(PostCode); // Convert the post code to an integer

        // Calculate optimizability
        var Optimizability = ((PostCode / 2) * 3 + 1) / 1000;
        Optimizability = (Optimizability * 100) % 36;
        var txt = `Area of Postcode ${PostCode} can be optimized by ${Optimizability.toFixed(2)} Percent.`;

        // Store result in sessionStorage
        sessionStorage.setItem("postcodeResult", txt);

        // Redirect to the new page
        window.location.href = "/newpage";
    }
}
