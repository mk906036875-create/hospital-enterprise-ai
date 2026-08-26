 /* =========================================================
   MEDORA AI v3 — WORKING FRONTEND SCRIPT
   Compatible with current MEDORA HTML
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  console.log("MEDORA AI v3 loaded successfully.");

  /* =========================
     ELEMENTS
  ========================= */

  const modal =
    document.getElementById("modal");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalInput =
    document.getElementById("modalInput");

  const runBtn =
    document.getElementById("runBtn");

  const modalResult =
    document.getElementById("modalResult");

  const closeModalBtn =
    document.getElementById("closeModal");

  const feed =
    document.getElementById("feed");

  const branch =
    document.getElementById("branch");


  /* =========================
     OPEN DEMO
  ========================= */

  window.openDemo = function (type) {

    if (!modal) {
      console.error("Modal not found.");
      return;
    }

    modal.classList.add("show");

    if (modalTitle) {
      modalTitle.textContent =
        "✦ " + type + " — MEDORA AI";
    }

    if (modalInput) {

      const prompts = {

        "Emergency Workflow":
          "Simulate an emergency workflow for request capture, priority classification and team routing.",

        "OPD Queue":
          "Simulate an OPD queue workflow for patient flow and operational coordination.",

        "Resource Monitor":
          "Simulate hospital resource monitoring and availability tracking.",

        "Doctor Availability":
          "Simulate a doctor availability and scheduling workflow.",

        "Hospital Analytics":
          "Generate a simulated executive hospital operations insight."

      };

      modalInput.value =
        prompts[type] ||
        "Simulate an AI-assisted hospital workflow.";

      modalInput.focus();
    }

    if (modalResult) {
      modalResult.style.display = "none";
      modalResult.innerHTML = "";
    }

    addActivity(type + " demo opened");

  };


  /* =========================
     CLOSE MODAL
  ========================= */

  function closeDemo() {

    if (modal) {
      modal.classList.remove("show");
    }

  }


  if (closeModalBtn) {

    closeModalBtn.addEventListener(
      "click",
      closeDemo
    );

  }


  /* =========================
     RUN MEDORA AI
  ========================= */

  if (runBtn) {

    runBtn.addEventListener(
      "click",
      function () {

        if (!modalInput || !modalResult) {
          return;
        }

        const request =
          modalInput.value.trim();

        if (!request) {

          modalResult.innerHTML = `
            <strong>⚠️ MEDORA AI</strong>
            <br><br>
            Please describe a workflow first.
          `;

          modalResult.style.display =
            "block";

          return;
        }


        /* Loading */

        modalResult.style.display =
          "block";

        modalResult.innerHTML = `
          <strong>✦ MEDORA AI</strong>
          <br><br>
          Analyzing workflow...
        `;


        /* Simulated processing */

        setTimeout(function () {

          modalResult.innerHTML = `

            <strong>
              ✦ MEDORA AI — Workflow Intelligence
            </strong>

            <br><br>

            <strong>Request:</strong>

            <br>

            ${escapeHTML(request)}

            <br><br>

            <strong>Suggested workflow:</strong>

            <br><br>

            <span class="green">01</span>
            Capture request

            <br>

            <span class="green">02</span>
            Classify priority

            <br>

            <span class="green">03</span>
            Route to appropriate team

            <br>

            <span class="green">04</span>
            Track workflow status

            <br>

            <span class="green">05</span>
            Create follow-up task

            <br>

            <span class="green">06</span>
            Generate operational insight

            <br><br>

            <strong>
              MEDORA Recommendation
            </strong>

            <br>

            Centralize workflow requests,
            automate repetitive coordination,
            and provide management with
            real-time operational visibility.

            <br><br>

            <small style="color:#94a3b8">
              Simulated AI demonstration only.
              Not a medical diagnosis,
              treatment or emergency-response system.
            </small>

          `;

          addActivity(
            "MEDORA AI generated workflow insight"
          );

        }, 900);

      }
    );

  }


  /* =========================
     ESC KEY
  ========================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("show")
      ) {

        closeDemo();

      }

    }
  );


  /* =========================
     BACKDROP CLICK
  ========================= */

  if (modal) {

    modal.addEventListener(
      "click",
      function (event) {

        if (event.target === modal) {
          closeDemo();
        }

      }
    );

  }


  /* =========================
     BRANCH
  ========================= */

  if (branch) {

    branch.addEventListener(
      "change",
      function () {

        addActivity(
          "Branch switched to " +
          this.value
        );

      }
    );

  }


  /* =========================
     LIVE ACTIVITY
  ========================= */

  function addActivity(message) {

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

    while (feed.children.length > 7) {

      feed.removeChild(
        feed.lastElementChild
      );

    }

  }


  /* =========================
     AUTOMATIC LIVE EVENTS
  ========================= */

  const events = [

    "AI monitoring cycle completed",
    "Operational dashboard synchronized",
    "Workflow queue refreshed",
    "Resource status checked",
    "Command center updated"

  ];


  setInterval(function () {

    const event =
      events[
        Math.floor(
          Math.random() * events.length
        )
      ];

    addActivity(event);

  }, 7000);


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


  console.log(
    "✓ MEDORA AI — Interactive system ready."
  );

});
