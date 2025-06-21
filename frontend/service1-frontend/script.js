console.log("Login page loaded");

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    try {
      const response = await fetch('http://localhost:30002/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();

      if (result.status === "success") {
        alert(result.message);
        window.location.href = "http://localhost:30004";
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Error logging in.");
    }
  });
});
