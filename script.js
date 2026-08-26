 /* =========================================================
   MEDORA AI — EXECUTIVE HEALTHCARE COMMAND CENTER
   script.js
   Interactive Demo Engine
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  console.log("MEDORA AI Command Center initialized.");

  /* =====================================================
     ELEMENTS
  ===================================================== */

  const modal = document.querySelector(".modal");
  const modalTitle = document.querySelector(".modal h3");
  const closeBtn = document.querySelector(".close");

  const textarea =
    document.querySelector("textarea") ||
    document.querySelector("#workflowInput");

  const runBtn =
    document.querySelector(".run") ||
    document.querySelector("#runDemo");

  const result =
    document.querySelector(".result") ||
    document.querySelector("#demoResult");

  const feed =
    document.querySelector("#feed") ||
    document.querySelector(".feed");

  const facilitySelect =
    document.querySelector("#branch") ||
    document.querySelector("#facility") ||
    document.querySelector("select");


  /* =====================================================
     DEMO DATA
     ===================================================== */

  const workflowData = {

    "Emergency":
      "Emergency workflow",

    "OPD Queue":
      "OPD queue management",

    "Resources":
      "Hospital resource monitoring",

    "Doctors":
      "Doctor availability management",

    "Analytics":
      "Hospital analytics",

    "AI Builder":
      "Custom AI workflow"
  };


  /* =====================================================
     NAVIGATION
     ===================================================== */

  const navButtons = document.querySelectorAll(
    ".nav, .nav-btn, [data-nav]"
  );

  navButtons.forEach(button => {

    button.addEventListener("click", () => {

      navButtons.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const section =
        button.dataset.nav ||
        button.innerText.trim();

      addActivity(
        `Command center module opened: ${section}`
      );

    });

  });


  /* =====================================================
     OPEN AI DEMO
     ===================================================== */

  window.openDemo = function(type) {

    if (!modal) return;

    modal.classList.add("show");

    modal.style.display = "grid";

    if (modalTitle) {
      modalTitle.innerHTML =
        "✦ " + type + " — AI Workflow";
    }

    if (textarea) {

      textarea.value =
        "Explore " +
        type +
        " workflow for a modern hospital.";

      setTimeout(() => {
        textarea.focus();
      }, 100);

    }

    if (result) {
      result.style.display = "none";
      result.innerHTML = "";
    }

  };


  /* =====================================================
     CLOSE AI DEMO
     ===================================================== */

  window.closeDemo = function() {

    if (!modal) return;

    modal.classList.remove("show");

    setTimeout(() => {

      if (!modal.classList.contains("show")) {
        modal.style.display = "none";
      }

    }, 200);

  };


  /* =====================================================
     ACTION BUTTONS
     ===================================================== */

  const actionButtons = document.querySelectorAll(
    ".action, .actionBtn, [data-action]"
  );

  actionButtons.forEach(button => {

    button.addEventListener("click", () => {

      let action =
        button.dataset.action ||
        button.innerText.trim();

      let workflow = action;

      Object.keys(workflowData).forEach(key => {

        if (
          action.toLowerCase()
            .includes(key.toLowerCase())
        ) {
          workflow = workflowData[key];
        }

      });

      openDemo(workflow);

    });

  });


  /* =====================================================
     RUN MEDORA AI SIMULATION
     ===================================================== */

  if (runBtn) {

    runBtn.addEventListener("click", runSimulation);

  }


  window.runAI = runSimulation;


  function runSimulation() {

    if (!result) return;

    const userInput =
      textarea
        ? textarea.value.trim()
        : "";

    if (!userInput) {

      result.innerHTML = `
        <strong>⚠ Please describe a workflow.</strong>
        <br><br>
        Example:
        <br>
        "Reduce OPD waiting time"
      `;

      result.style.display = "block";

      return;
    }


    /* Loading state */

    if (runBtn) {

      runBtn.disabled = true;

      runBtn.innerHTML =
        "◌ MEDORA AI Processing...";

    }


    result.style.display = "block";

    result.innerHTML = `
      <strong>✦ MEDORA Intelligence Engine</strong>
      <br><br>
      Analyzing workflow signals...
    `;


    /* Simulated AI processing */

    setTimeout(() => {

      const response =
        generateInsight(userInput);


      result.innerHTML = `
        <strong>✦ MEDORA AI — Simulation Result</strong>

        <br><br>

        <b>Workflow received:</b>
        <br>
        ${escapeHTML(userInput)}

        <br><br>

        <b>Recommended automation:</b>

        <br>
        ① Capture workflow request
        <br>
        ② Classify priority
        <br>
        ③ Route to responsible team
        <br>
        ④ Monitor workflow status
        <br>
        ⑤ Trigger follow-up action

        <br><br>

        <b>AI Insight:</b>
        <br>
        ${response}

        <br><br>

        <span style="color:#94a3b8">
        Simulated intelligence only —
        not a medical decision system.
        </span>
      `;


      addActivity(
        "MEDORA AI simulation completed"
      );


      if (runBtn) {

        runBtn.disabled = false;

        runBtn.innerHTML =
          "✦ Run MEDORA Simulation";

      }

    }, 1200);

  }


  /* =====================================================
     AI INSIGHT GENERATOR
     ===================================================== */

  function generateInsight(text) {

    const value = text.toLowerCase();


    if (
      value.includes("emergency") ||
      value.includes("urgent")
    ) {

      return `
        Maintain real-time priority monitoring,
        escalate high-priority cases and notify
        the appropriate operational team.
      `;

    }


    if (
      value.includes("opd") ||
      value.includes("queue") ||
      value.includes("waiting")
    ) {

      return `
        Monitor queue length, identify peak periods
        and recommend workload redistribution
        to reduce simulated waiting time.
      `;

    }


    if (
      value.includes("doctor") ||
      value.includes("staff")
    ) {

      return `
        Track availability, workload and scheduling
        signals to improve operational coordination.
      `;

    }


    if (
      value.includes("bed") ||
      value.includes("resource")
    ) {

      return `
        Monitor resource utilization and highlight
        capacity signals requiring operational review.
      `;

    }


    if (
      value.includes("analytics") ||
      value.includes("report")
    ) {

      return `
        Consolidate operational signals into an
        executive dashboard for faster decision support.
      `;

    }


    return `
      MEDORA recommends converting this workflow
      into a measurable automation pipeline with
      capture, classification, routing, monitoring
      and follow-up stages.
    `;

  }


  /* =====================================================
     FACILITY SWITCH
     ===================================================== */

  if (facilitySelect) {

    facilitySelect.addEventListener(
      "change",
      function() {

        const facility =
          this.value || "Selected Facility";

        addActivity(
          "Facility switched to " + facility
        );

      }
    );

  }


  /* =====================================================
     LIVE SYSTEM FEED
     ===================================================== */

  const events = [

    "AI workflow signal detected",

    "Doctor availability synchronized",

    "Resource status refreshed",

    "Operational workflow monitored",

    "Command center data synchronized",

    "AI automation layer refreshed",

    "New simulated workflow event detected"

  ];


  function addActivity(message) {

    if (!feed) return;


    const item =
      document.createElement("div");

    item.className = "activityItem";


    item.innerHTML = `
      <span class="activityDot"></span>

      <div>

        <strong>
          ${escapeHTML(message)}
        </strong>

        <small>
          Just now • MEDORA Engine
        </small>

      </div>
    `;


    feed.prepend(item);


    /* Keep feed clean */

    while (feed.children.length > 6) {

      feed.removeChild(
        feed.lastElementChild
      );

    }

  }


  /* =====================================================
     AUTOMATIC LIVE FEED
     ===================================================== */

  setInterval(() => {

    const randomEvent =
      events[
        Math.floor(
          Math.random() * events.length
        )
      ];

    addActivity(randomEvent);

  }, 7000);


  /* =====================================================
     CLOSE MODAL
     ===================================================== */

  if (closeBtn) {

    closeBtn.addEventListener(
      "click",
      closeDemo
    );

  }


  if (modal) {

    modal.addEventListener(
      "click",
      event => {

        if (event.target === modal) {

          closeDemo();

        }

      }
    );

  }


  /* =====================================================
     ESC KEY
     ===================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("show")
      ) {

        closeDemo();

      }

    }
  );


  /* =====================================================
     SECURITY
     ===================================================== */

  function escapeHTML(value) {

    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =====================================================
     INITIAL STATUS
     ===================================================== */

  addActivity(
    "MEDORA Intelligence Engine initialized"
  );


  console.log(
    "MEDORA AI — Demo Engine Ready"
  );

});
