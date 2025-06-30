// Simple form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});
