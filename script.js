const form = document.getElementById('feedback-form');
const responseMessage = document.querySelector('.response-message');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Send feedback data (replace with your actual feedback submission logic)
    console.log('Feedback submitted:', name, email, feedback);

    // Display success message
    responseMessage.textContent = 'Feedback submitted successfully!';
    form.reset(); // Clear form fields
});
