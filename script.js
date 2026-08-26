 document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("modal");
  const title = document.getElementById("modalTitle");
  const input = document.getElementById("modalInput");
  const result = document.getElementById("modalResult");
  const runBtn = document.getElementById("runBtn");
  const closeBtn = document.getElementById("closeModal");
  const feed = document.getElementById("feed");

  function openMEDORA(type) {

    if (!modal) return;

    modal.classList.add("show");

    if (title) {
      title.textContent = "✦ " + type + " — MEDORA AI";
    }

    if (input) {
      input.value =
        "Analyze " + type +
        " workflow and suggest an automated hospital operations process.";
    }

    if (result) {
      result.style.display = "none";
      result.innerHTML = "";
    }

    addActivity(type + " workflow opened");

  }

  function closeMEDORA() {

    if (modal) {
      modal.classList.remove("show");
    }

  }

  window.openDemo = openMEDORA;
  window.closeDemo = closeMEDORA;


  /* AI ACTION BUTTONS */

  document.querySelectorAll(".action").forEach(function (button) {

    button.addEventListener("click", function () {

      const text = this.innerText.toLowerCase();

      let type = "AI Workflow";

      if (text.includes("emergency")) {
        type = "Emergency Workflow";
      }
      else if (text.includes("opd")) {
        type = "OPD Queue";
      }
      else if (text.includes("resource")) {
        type = "Resource Monitor";
      }
      else if (text.includes("doctor")) {
        type = "Doctor Availability";
      }
      else if (text.includes("analytic")) {
        type = "Hospital Analytics";
      }
      else if (text.includes("builder")) {
        type = "AI Workflow Builder";
      }

      openMEDORA(type);

    });

  });


  /* CLOSE */

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMEDORA);
  }


  if (modal) {

    modal.addEventListener("click", function (event) {

      if (event.target === modal) {
        closeMEDORA();
      }

    });

  }


  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeMEDORA();
    }

  });


  /* RUN AI */

  if (runBtn) {

    runBtn.addEventListener("click", function () {

      const request =
        input ? input.value.trim() : "";

      if (!request) {

        result.innerHTML =
          "<strong>⚠️ Please enter a workflow.</strong>";

        result.style.display = "block";

        return;
      }

      result.style.display = "block";

      result.innerHTML = `
        <strong>✦ MEDORA AI — Intelligence Engine</strong>
        <br><br>

        <strong>Request:</strong><br>
        ${safe(request)}

        <br><br>

        <strong>Recommended Automation Flow</strong>

        <br><br>

        <span class="green">01</span>
        Capture request

        <br>

        <span class="green">02</span>
        Classify priority

        <br>

        <span class="green">03</span>
        Route to responsible team

        <br>

        <span class="green">04</span>
        Track workflow

        <br>

        <span class="green">05</span>
        Create follow-up task

        <br>

        <span class="green">06</span>
        Generate management insight

        <br><br>

        <strong>MEDORA Recommendation</strong>

        <br>

        Centralize operational workflows
        and automate repetitive coordination
        tasks for better management visibility.

        <br><br>

        <small style="color:#94a3b8">
        Simulated AI demonstration only.
        Not a medical diagnosis or treatment system.
        </small>
      `;

      addActivity("MEDORA AI generated workflow insight");

    });

  }


  /* LIVE ACTIVITY */

  function addActivity(message) {

    if (!feed) return;

    const item = document.createElement("div");

    item.className = "activityItem";

    item.innerHTML = `
      <span class="activityDot"></span>

      <div>
        <strong>${safe(message)}</strong>
        <small>Just now • MEDORA AI</small>
      </div>
    `;

    feed.prepend(item);

    while (feed.children.length > 6) {
      feed.removeChild(feed.lastElementChild);
    }

  }


  /* AUTOMATIC ACTIVITY */

  const events = [
    "AI monitoring cycle completed",
    "Workflow queue synchronized",
    "Resource status refreshed",
    "Doctor availability updated",
    "Command center synchronized"
  ];

  setInterval(function () {

    const event =
      events[Math.floor(Math.random() * events.length)];

    addActivity(event);

  }, 7000);


  /* SAFE TEXT */

  function safe(text) {

    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  console.log(
    "MEDORA AI v4.0 — Interactive system ready."
  );

});
