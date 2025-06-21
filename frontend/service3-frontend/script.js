console.log("Contact page loaded");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const result = document.getElementById('result');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('http://localhost:30005/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.status === 'success') {
        result.innerHTML = `<div class="success">${data.message}</div>`;
        form.reset();
      } else {
        result.innerHTML = `<div class="error">Error: ${data.message}</div>`;
      }
    } catch (error) {
      console.error('Error sending message:', error);
      result.innerHTML = '<div class="error">Error sending message. Please try again.</div>';
    }
  });
});
