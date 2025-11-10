document.addEventListener("DOMContentLoaded", () => {
  // ===== DASHBOARD STATS =====
  if(document.body.classList.contains("dashboard-page")) {
      const stats = {
        totalEvents: 12,
        pendingRequests: 3,
        availableHalls: 5,
        upcomingAppointments: 4
      };
      document.getElementById("total-events").textContent = stats.totalEvents;
      document.getElementById("pending-requests").textContent = stats.pendingRequests;
      document.getElementById("available-halls").textContent = stats.availableHalls;
      document.getElementById("upcoming-appointments").textContent = stats.upcomingAppointments;

      // Hover effect for recent events
      const events = document.querySelectorAll("#event-list li");
      events.forEach(event => {
        event.addEventListener("mouseenter", () => event.style.backgroundColor = "#f0f0f0");
        event.addEventListener("mouseleave", () => event.style.backgroundColor = "white");
      });
  }

  // ===== APPROVE/REJECT BUTTONS =====
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

  // ===== MANAGE HALLS =====
  const addHallBtn = document.getElementById("addHallBtn");
  const newHallName = document.getElementById("newHallName");
  const hallsTable = document.getElementById("hallsTable")?.querySelector("tbody");

  if(addHallBtn && hallsTable){
      addHallBtn.addEventListener("click", () => {
          const hallName = newHallName.value.trim();
          if(hallName === "") return;
          const tr = document.createElement("tr");
          tr.innerHTML = `<td>${hallName}</td><td><button class="remove-btn">Remove</button></td>`;
          hallsTable.appendChild(tr);
          newHallName.value = "";
          tr.querySelector(".remove-btn").addEventListener("click", () => tr.remove());
      });

      document.querySelectorAll(".remove-btn").forEach(btn => {
        btn.addEventListener("click", (e) => e.target.closest("tr").remove());
      });
  }

  // ===== ADMIN LOGIN WITH FADE =====
  const loginForm = document.getElementById("adminLoginForm");
  if(loginForm){
      loginForm.addEventListener("submit", function(e){
          e.preventDefault();
          const username = document.getElementById("adminUsername").value.trim();
          const password = document.getElementById("adminPassword").value.trim();
          if(username === "admin" && password === "admin123"){
              document.body.classList.add("fade-out");
              setTimeout(() => { window.location.href = "dashboard.html"; }, 500);
          } else {
              alert("Invalid credentials!");
          }
      });
  }

  // ===== SIDEBAR ACTIVE LINKS =====
  const links = document.querySelectorAll('.sidebar-nav .nav-link');
  links.forEach(link => {
    if(link.href === window.location.href){
        link.classList.add('active');
    }
  });

});
