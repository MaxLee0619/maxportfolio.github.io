function submitForm() {
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display data in console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Show alert
    alert('Your message has been submitted!');
}
