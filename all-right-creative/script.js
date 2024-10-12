document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
      alert('Your message has been sent successfully!');
      // Optionally clear form fields
      document.getElementById('contactForm').reset();
  } else {
      alert('Please fill in all fields.');
  }
});
