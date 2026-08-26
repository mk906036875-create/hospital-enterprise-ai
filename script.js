 /* =========================================================
   MEDORA AI v3 — PREMIUM COMMAND CENTER
   COMPLETE WORKING SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  console.log("MEDORA AI v3 initialized successfully.");

  /* =========================
     ELEMENTS
  ========================= */

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const input = document.getElementById("input");
  const result = document.getElementById("result");
  const feed = document.getElementById("feed");
  const branch = document.getElementById("branch");

  /* =========================
     NAVIGATION
  ========================= */

  const navButtons = document.querySelectorAll(".nav");

  navButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      navButtons.forEach(function (item) {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const section = button.textContent.trim();

      addActivity(
        section + " module opened"
      );

    });

  });


  /* =========================
     DEFAULT AI PROMPTS
  ========================= */

  function getDefaultPrompt(type) {

    const prompts = {

      "Emergency Workflow":
        "Analyze an emergency workflow and suggest how requests can be captured, prioritized and routed.",

      "OPD Queue":
        "Analyze OPD queue management and suggest an automated patient-flow workflow.",

      "Resource Monitor":
        "Analyze hospital resource availability and suggest an operational monitoring workflow.",

      "Doctor Availability":
        "Analyze doctor availability and suggest an automated scheduling workflow.",

      "Hospital Analytics":
        "Analyze hospital operational data and generate an executive-level insight summary."

    };

    return prompts[type] ||
      "Explore an AI-assisted hospital workflow.";

  }


  /* =========================
     OPEN AI DEMO
  ========================= */

  window.openDemo = function (type) {

    if (!modal) {
      alert("MEDORA AI Demo window is not available.");
      return;
    }

    modal.classList.add("show");

    if (modalTitle) {

      modalTitle.textContent =
        "✦ " + type + " — MEDORA AI";

    }

    if (input) {

      input.value =
        getDefaultPrompt(type);

      setTimeout(function () {
        input.focus();
      }, 100);

    }

    if (result) {

      result.style.display = "none";
      result.innerHTML = "";

    }

    addActivity(
      type + " workflow opened"
    );

  };


  /* =========================
     CLOSE DEMO
  ========================= */

  window.closeDemo = function () {

    if (!modal) return;

    modal.classList.remove("show");

  };


  /* =========================
     RUN AI
  ========================= */

  window.runAI = function () {

    if (!input || !result) {
      alert("AI Demo elements are missing.");
      return;
    }

    const text = input.value.trim();

    if (!text) {

      result.innerHTML = `
        <strong>⚠️ MEDORA AI</strong>
        <br><br>
        Please enter a workflow request first.
      `;

      result.style.display = "block";

      return;

    }


    /* Loading state */

    result.style.display = "block";

    result.innerHTML = `
      <strong>✦ MEDORA AI</strong>
      <br><br>
      Analyzing workflow...
    `;


    /* Simulated AI processing */

    setTimeout(function () {

      result.innerHTML = `

        <strong>✦ MEDORA AI — Intelligence Engine</strong>

        <br><br>

        <strong>Request received:</strong>

        <br>

        ${escapeHTML(text)}

        <br><br>

        <strong>Workflow Analysis</strong>

        <br><br>

        <span class="green">01</span>
        Capture incoming request

        <br>

        <span class="green">02</span>
        Classify operational priority

        <br>

        <span class="green">03</span>
        Route to the appropriate team

        <br>

        <span class="green">04</span>
        Track workflow status

        <br>

        <span class="green">05</span>
        Create follow-up task

        <br>

        <span class="green">06</span>
        Generate management insight

        <br><br>

        <strong>AI Recommendation</strong>

        <br>

        Automate repetitive coordination tasks,
        maintain a centralized workflow queue,
        and provide operations teams with
        real-time visibility.

        <br><br>

        <span style="color:#94a3b8">

        ✓ Demo workflow generated successfully.

        <br>

        Simulated intelligence only —
        not a medical diagnosis,
        treatment or emergency-response system.

        </span>

      `;

      addActivity(
        "MEDORA AI generated a workflow insight"
      );

    }, 900);

  };


  /* =========================
     HTML ESCAPE
  ========================= */

  function escapeHTML(value) {

    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =========================
     BRANCH SWITCH
  ========================= */

  if (branch) {

    branch.addEventListener("change", function () {

      addActivity(
        "Branch switched to " + this.value
      );

    });

  }


  /* =========================
     ACTION BUTTONS
  ========================= */

  const actionButtons =
    document.querySelectorAll(".action");

  actionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const label =
        button.querySelector("span");

      if (!label) return;

      const name =
        label.textContent.trim();

      const workflows = {

        "Emergency":
          "Emergency Workflow",

        "OPD Queue":
          "OPD Queue",

        "Resources":
          "Resource Monitor",

        "Doctors":
          "Doctor Availability",

        "Analytics":
          "Hospital Analytics"

      };

      if (workflows[name]) {

        openDemo(
          workflows[name]
        );

      }

    });

  });


  /* =========================
     LIVE ACTIVITY
  ========================= */

  const events = [

    "AI workflow signal refreshed",

    "Operational dashboard synchronized",

    "New workflow event simulated",

    "Resource status check completed",

    "Command center activity updated",

    "AI monitoring cycle completed",

    "Operational priority recalculated",

    "Workflow queue synchronized",

    "Executive dashboard refreshed"

  ];


  window.addActivity = function (message) {

    if (!feed) return;

    const item =
      document.createElement("div");

    item.className =
      "activityItem";

    item.innerHTML = `

      <span class="activityDot"></span>

      <div>

        <strong>
          ${escapeHTML(message)}
        </strong>

        <small>
          Just now • MEDORA AI
        </small>

      </div>

    `;

    feed.prepend(item);


    /* Keep maximum 7 activities */

    while (feed.children.length > 7) {

      feed.removeChild(
        feed.lastElementChild
      );

    }

  };


  /* =========================
     AUTOMATIC LIVE EVENTS
  ========================= */

  setInterval(function () {

    const randomEvent =
      events[
        Math.floor(
          Math.random() * events.length
        )
      ];

    addActivity(randomEvent);

  }, 7000);


  /* =========================
     MODAL BACKDROP
  ========================= */

  if (modal) {

    modal.addEventListener("click", function (event) {

      if (event.target === modal) {

        closeDemo();

      }

    });

  }


  /* =========================
     ESC KEY
  ========================= */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      modal &&
      modal.classList.contains("show")
    ) {

      closeDemo();

    }

  });


  /* =========================
     CTRL + ENTER
  ========================= */

  if (input) {

    input.addEventListener("keydown", function (event) {

      if (
        event.ctrlKey &&
        event.key === "Enter"
      ) {

        runAI();

      }

    });

  }


  /* =========================
     INITIAL SYSTEM MESSAGE
  ========================= */

  setTimeout(function () {

    addActivity(
      "MEDORA Intelligence Engine initialized"
    );

  }, 1200);


  /* =========================
     SYSTEM READY
  ========================= */

  console.log(
    "✓ MEDORA AI v3 — All modules ready."
  );

});  addActivity(
    "MEDORA Intelligence Engine initialized"
  );

}, 1200);


/* =========================
   SYSTEM READY
========================= */

console.log(
  "✓ MEDORA AI v3 — All modules ready."
);

});
