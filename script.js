const bookingForm = document.getElementById("booking-form");
const bookingConfirmation = document.getElementById("booking-confirmation");

bookingForm.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    bookingConfirmation.innerHTML = `Thank you ${name}! Your booking for ${guests} guests on ${date} at ${time} has been confirmed. We will send a confirmation email to ${email}.`;
});
