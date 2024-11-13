function calcPostCode() {
    const input = document.getElementById("plz");
    const alertMessage = document.getElementById("alert-message");

    let postCode = input.value.trim(); // Remove any extra spaces

    // Validate input (check if it's a number)
    if (postCode === "" || isNaN(postCode) || postCode <= 0) {
        alertMessage.textContent = 'Please enter a valid postcode.';
        alertMessage.style.color = 'red';
        return;
    } else {
        postCode = parseInt(postCode); // Convert the post code to an integer

        // Calculate optimizability
        let optimizability = ((postCode / 2) * 3 + 1) / 1000;
        optimizability = (optimizability * 100) % 36;
        let resultText = `Area of Postcode ${postCode} can be optimized by ${optimizability.toFixed(2)} Percent.`;

        // Calculate sensor requirements inversely based on optimizability
        const maxSensors = 20; // Example maximum number of sensors for lowest optimizability
        const minSensors = 2;  // Minimum number of sensors for highest optimizability

        // Calculate the number of each type of sensor inversely
        const cameras = Math.floor(maxSensors - (optimizability / 36) * (maxSensors - minSensors));
        const irSensors = Math.floor((maxSensors - 5) - (optimizability / 36) * ((maxSensors - 5) - minSensors));
        const otherSensors = Math.floor((maxSensors - 10) - (optimizability / 36) * ((maxSensors - 10) - minSensors));

        // Store results in sessionStorage
        sessionStorage.setItem("postcodeResult", `Postcode ${postCode}`);
        sessionStorage.setItem("percentageResult", optimizability.toFixed(2));
        sessionStorage.setItem("cameras", cameras);
        sessionStorage.setItem("irSensors", irSensors);
        sessionStorage.setItem("otherSensors", otherSensors);

        // Redirect to the new page
        window.location.href = "/newpage"; // Ensure "/newpage" is the actual path
    }
}
