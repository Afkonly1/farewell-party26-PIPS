document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const status = document.getElementById("status").value;
  const message = document.getElementById("message");

  if (!name || !status) {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbyn9f8sE6FEfulaTKjJGjwcHn0yy0cLlmJmCESEsYBIEJKuyTquB7u2mBBF_G6nr03V/exec", {
    method: "POST",
    mode: "no-cors",   // 🔥 THIS FIXES MOST ISSUES
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, status })
  })
  .then(() => {
    message.textContent = "Thank you! Your response has been recorded.";
    message.style.color = "white";
    document.getElementById("rsvpForm").reset();
  })
  .catch(err => {
    message.textContent = "Submission failed.";
    message.style.color = "red";
    console.error(err);
  });
});
