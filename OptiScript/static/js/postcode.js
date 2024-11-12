function calcPostCode() {
    //general
    const newpage = "/newpage"

    //before switching page
    const input = document.getElementById("plz");

    var PostCode = input.value.trim(); // Remove any extra spaces

    //Validate input (check if it's a number)
    if (PostCode === "" || isNaN(PostCode) || PostCode <= 0) {
        const alertMessage = document.getElementById("alert-message");

        span.textContent = ''; // Reset previous message
        alertMessage.textContent = '';
        alertMessage.textContent = 'Please enter a valid postcode.';
        alertMessage.style.color = 'red';
        return;
    }
    else {
        // onvert the post code to an integer
        PostCode = parseInt(PostCode);

        //switching page
        window.location.href = newpage;

        //after switching page
        const span = document.getElementById("span");

        var Optimizability = ((PostCode / 2) * 3 + 1) / 1000;
        Optimizability = (Optimizability * 100) % 36;

        var txt = `Area of Postcode ${PostCode} can be optimized by ${Optimizability.toFixed(2)} Percent.`;
    }

    // Update the result on the page
    span.textContent = txt; // Set the span text with the result message
    alertMessage.textContent = ''; // Clear any previous error messages
    
}

