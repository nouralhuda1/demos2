document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("dashboard-page")) {
    const stats = {
      totalEvents: 12,
      pendingRequests: 3,
      availableHalls: 5,
      upcomingAppointments: 4
    };

    // Example of updating stats dynamically
    document.getElementById("total-events").textContent = stats.totalEvents;
    document.getElementById("pending-requests").textContent = stats.pendingRequests;
    document.getElementById("available-halls").textContent = stats.availableHalls;
    document.getElementById("upcoming-appointments").textContent = stats.upcomingAppointments;

    // Add hover effect for recent events
    const events = document.querySelectorAll("#event-list li");
    events.forEach(event => {
      event.addEventListener("mouseenter", () => event.style.backgroundColor = "#f0f0f0");
      event.addEventListener("mouseleave", () => event.style.backgroundColor = "white");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Approve/Reject functionality
  const approveButtons = document.querySelectorAll(".approve-btn");
  const rejectButtons = document.querySelectorAll(".reject-btn");

  approveButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr");
      const statusCell = row.querySelector(".status");
      statusCell.textContent = "Approved";
      statusCell.className = "status approved";
    });
  });

  rejectButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const row = btn.closest("tr");
      const statusCell = row.querySelector(".status");
      statusCell.textContent = "Rejected";
      statusCell.className = "status rejected";
    });
  });
});
// ===== Manage Halls JS =====
document.addEventListener("DOMContentLoaded", () => {

    const addHallBtn = document.getElementById("addHallBtn");
    const newHallName = document.getElementById("newHallName");
    const hallsTable = document.getElementById("hallsTable").querySelector("tbody");

    // Add new hall
    addHallBtn.addEventListener("click", () => {
        const hallName = newHallName.value.trim();
        if(hallName === "") return;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${hallName}</td>
            <td><button class="remove-btn">Remove</button></td>
        `;
        hallsTable.appendChild(tr);
        newHallName.value = "";

        // Attach remove listener to new button
        tr.querySelector(".remove-btn").addEventListener("click", () => {
            tr.remove();
        });
    });

    // Remove existing halls
    document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.target.closest("tr").remove();
        });
    });
});
// ===== Admin Login =====
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("adminLoginForm");

    if(loginForm){
        loginForm.addEventListener("submit", function(e){
            e.preventDefault();
            const username = document.getElementById("adminUsername").value.trim();
            const password = document.getElementById("adminPassword").value.trim();

            if(username === "admin" && password === "admin123"){
                window.location.href = "dashboard.html"; // redirect to dashboard
            } else {
                alert("Invalid credentials!");
            }
        });
    }
});
// ===== Admin Login with Smooth Transition =====
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("adminLoginForm");
    const body = document.body;

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault(); // prevent default form submission

            const username = document.getElementById("adminUsername").value.trim();
            const password = document.getElementById("adminPassword").value.trim();

            if (username === "admin" && password === "admin123") {
                // Add fade-out class
                body.classList.add("fade-out");

                // Wait for animation to finish (500ms) then redirect
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 500);
            } else {
                alert("Invalid credentials!");
            }
        });
    }
});
// ===== Dashboard Sidebar & Active Links =====
document.addEventListener("DOMContentLoaded", () => {
    // Highlight active link based on current page
    const links = document.querySelectorAll('.sidebar-nav .nav-link');
    links.forEach(link => {
        if(link.href === window.location.href){
            link.classList.add('active');
        }
    });
});

// Example: Add dynamic updates for stats (can later connect to backend)
const stats = {
    totalEvents: 12,
    pendingRequests: 3,
    availableHalls: 5,
    upcomingAppointments: 4
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("total-events").textContent = stats.totalEvents;
    document.getElementById("pending-requests").textContent = stats.pendingRequests;
    document.getElementById("available-halls").textContent = stats.availableHalls;
    document.getElementById("upcoming-appointments").textContent = stats.upcomingAppointments;
});
