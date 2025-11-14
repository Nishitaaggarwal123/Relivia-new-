document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#requestform");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.querySelector("#name").value,
      phone: document.querySelector("#phone").value,
      category: document.querySelector("#category").value,
      location: document.querySelector("#location").value,
      description: document.querySelector("#description").value,
      priority: document.querySelector("#priority").value
    };

    try {
      const res = await fetch("http://localhost:5000/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || "Request submitted successfully!");
      form.reset();
    } catch (err) {
      console.error("Error submitting request:", err);
      alert("Something went wrong. Please try again.");
    }
  });
});
