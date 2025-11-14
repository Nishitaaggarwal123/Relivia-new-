document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.getElementById("requestTableBody");

  const loadRequests = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/requests");
      const data = await res.json();

      tbody.innerHTML = data.map(req => `
        <tr>
          <td>${req.description}</td>
          <td>Relivia Form</td>
          <td>${req.name}<br><small>${req.phone}</small></td>
          <td>${new Date(req.createdAt).toLocaleString()}</td>
          <td>${req.status}</td>
          <td>
            <button class="btn-accept" onclick="updateStatus('${req._id}', 'Verified')">Accept</button>
            <button class="btn-decline" onclick="updateStatus('${req._id}', 'Declined')">Decline</button>
            <button class="btn-reject" onclick="updateStatus('${req._id}', 'Rejected')">Reject</button>
          </td>
          <td>${req.priority}</td>
        </tr>
      `).join("");

    } catch (err) {
      tbody.innerHTML = `<tr><td colspan="7">Error loading requests</td></tr>`;
    }
  };

  await loadRequests();

  // 🔥 IMPORTANT: Refresh function after update
  window.refreshRequests = loadRequests;
});

// 🌟 GLOBAL FUNCTION — REQUIRED FOR BUTTONS TO WORK
window.updateStatus = async (id, status) => {
  try {
    const res = await fetch(`http://localhost:5000/api/requests/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    if (!res.ok) {
      alert("Failed to update status");
      return;
    }

    alert("Status updated to " + status);

    // Reload table
    refreshRequests();

  } catch (err) {
    alert("Error updating status");
    console.error(err);
  }
};

