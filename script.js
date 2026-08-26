 /* =========================================================
   MEDORA AI v4.0
   Healthcare Intelligence Command Center
   COMPLETE INTERACTIVE SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  "use strict";

  console.log("MEDORA AI v4.0 initializing...");

  /* =======================================================
     ELEMENTS
     ======================================================= */

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalInput = document.getElementById("modalInput");
  const modalResult = document.getElementById("modalResult");
  const closeModalBtn = document.getElementById("closeModal");
  const runBtn = document.getElementById("runBtn");

  const workflowInput = document.getElementById("workflowInput");
  const generateBtn = document.getElementById("generateBtn");
  const builderResult = document.getElementById("builderResult");

  const feed = document.getElementById("feed");
  const branch = document.getElementById("branch");

  const patientsEl = document.getElementById("patients");
  const emergencyEl = document.getElementById("emergency");
  const doctorsEl = document.getElementById("doctors");
  const bedsEl = document.getElementById("beds");

  /* =======================================================
     STATE
     ======================================================= */

  let currentDemo = "AI Workflow";
  let activityCount = 0;

  /* =======================================================
     SAFE HTML ESCAPE
     ======================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }

  /* =======================================================
     ACTIVITY FEED
     ======================================================= */

  function addActivity(message) {

    if (!feed) return;

    const item = document.createElement("div");

    item.className = "activityItem";

    item.innerHTML = `
      <span class="activityDot"></span>

      <div>
        <strong>${escapeHTML(message)}</strong>
        <small>Just now • MEDORA AI</small>
      </div>
    `;

    feed.prepend(item);

    activityCount++;

    while (feed.children.length > 7) {
      feed.removeChild(feed.lastElementChild);
    }

  }

  /* =======================================================
     NAVIGATION
     ======================================================= */

  const navButtons = document.querySelectorAll(".nav");

  navButtons.forEach((button) => {

    button.addEventListener("click", () => {

      navButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const section =
        button.dataset.section ||
        button.textContent.trim();

      addActivity(`${section} module opened`);

      const demoMap = {

        "Emergency": "Emergency Workflow",

        "OPD Queue": "OPD Queue",

        "Doctors": "Doctor Availability",

        "Resources": "Resource Monitor",

        "Analytics": "Hospital Analytics"

      };

      if (demoMap[section]) {

        openDemo(demoMap[section]);

      }

    });

  });

  /* =======================================================
     ACTION BUTTONS
     ======================================================= */

  const actionButtons =
    document.querySelectorAll(".action[data-demo]");

  actionButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const demoType =
        button.dataset.demo || "AI Workflow";

      openDemo(demoType);

    });

  });

  /* =======================================================
     DEFAULT PROMPTS
     ======================================================= */

  function getDefaultPrompt(type) {

    const prompts = {

      "Emergency Workflow":
        "Design an AI-assisted emergency workflow that captures requests, classifies operational priority and routes them to the appropriate hospital team.",

      "OPD Queue":
        "Create an AI-assisted OPD queue workflow that monitors waiting volume and recommends operational actions when the queue becomes critical.",

      "Resource Monitor":
        "Create a hospital resource monitoring workflow for beds, rooms and operational capacity.",

      "Doctor Availability":
        "Create a doctor availability workflow that monitors schedules and coordinates operational requests.",

      "Hospital Analytics":
        "Generate an executive hospital operations insight covering patient flow, resources, staff availability and workflow performance.",

      "AI Workflow Builder":
        "Create an automated hospital workflow based on the business requirement entered by the user."

    };

    return prompts[type] ||
      "Explore an AI-assisted hospital workflow.";

  }

  /* =======================================================
     OPEN DEMO
     ======================================================= */

  function openDemo(type) {

    currentDemo = type;

    if (!modal) {

      console.warn("MEDORA modal not found.");

      return;

    }

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    if (modalTitle) {

      modalTitle.textContent =
        "✦ " + type + " — MEDORA AI";

    }

    if (modalInput) {

      modalInput.value =
        getDefaultPrompt(type);

      setTimeout(() => {

        modalInput.focus();

      }, 100);

    }

    if (modalResult) {

      modalResult.style.display = "none";

      modalResult.innerHTML = "";

    }

    addActivity(`${type} simulation opened`);

  }

  /* =======================================================
     CLOSE DEMO
     ======================================================= */

  function closeDemo() {

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

  }

  if (closeModalBtn) {

    closeModalBtn.addEventListener(
      "click",
      closeDemo
    );

  }

  /* =======================================================
     CLICK OUTSIDE MODAL
     ======================================================= */

  if (modal) {

    modal.addEventListener("click", (event) => {

      if (event.target === modal) {

        closeDemo();

      }

    });

  }

  /* =======================================================
     ESC KEY
     ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      closeDemo();

    }

  });

  /* =======================================================
     RUN MODAL AI
     ======================================================= */

  if (runBtn) {

    runBtn.addEventListener(
      "click",
      runModalAI
    );

  }

  function runModalAI() {

    if (!modalInput || !modalResult) return;

    const text =
      modalInput.value.trim();

    if (!text) {

      modalResult.innerHTML = `
        <strong>⚠️ MEDORA AI</strong><br><br>
        Please describe a workflow before running
        the simulation.
      `;

      modalResult.style.display = "block";

      return;

    }

    if (runBtn) {

      runBtn.disabled = true;

      runBtn.textContent =
        "⏳ MEDORA is analyzing...";

    }

    modalResult.style.display = "block";

    modalResult.innerHTML = `
      <strong>✦ MEDORA AI Intelligence Engine</strong>
      <br><br>
      Processing workflow request...
    `;

    setTimeout(() => {

      const analysis =
        generateWorkflowAnalysis(
          text,
          currentDemo
        );

      modalResult.innerHTML = analysis;

      if (runBtn) {

        runBtn.disabled = false;

        runBtn.textContent =
          "✦ Run MEDORA Simulation";

      }

      addActivity(
        `${currentDemo} simulation completed`
      );

    }, 900);

  }

  /* =======================================================
     WORKFLOW ANALYSIS
     ======================================================= */

  function generateWorkflowAnalysis(text, type) {

    return `
      <strong>✦ MEDORA AI — Intelligence Result</strong>

      <br><br>

      <strong>Workflow Request:</strong><br>
      ${escapeHTML(text)}

      <br><br>

      <strong>AI Workflow Model</strong>

      <br><br>

      <span class="green">01</span>
      Capture incoming request

      <br>

      <span class="green">02</span>
      Classify operational priority

      <br>

      <span class="green">03</span>
      Route request to the appropriate team

      <br>

      <span class="green">04</span>
      Track workflow status

      <br>

      <span class="green">05</span>
      Trigger follow-up action

      <br>

      <span class="green">06</span>
      Generate management insight

      <br><br>

      <strong>MEDORA Recommendation:</strong><br>

      Centralize this workflow inside a single
      operational queue with automated routing,
      ownership tracking and follow-up visibility.

      <br><br>

      <span style="color:#94a3b8">
        ${escapeHTML(type)}
        • Simulated AI output
        • Demo environment only
      </span>
    `;

  }

  /* =======================================================
     AI WORKFLOW BUILDER
     ======================================================= */

  if (generateBtn) {

    generateBtn.addEventListener(
      "click",
      generateBuilderInsight
    );

  }

  function generateBuilderInsight() {

    if (!workflowInput || !builderResult) return;

    const text =
      workflowInput.value.trim();

    if (!text) {

      builderResult.innerHTML = `
        <strong>⚠️ MEDORA AI</strong><br><br>
        Please enter a hospital workflow requirement.
      `;

      builderResult.style.display = "block";

      workflowInput.focus();

      return;

    }

    generateBtn.disabled = true;

    generateBtn.textContent =
      "⏳ Generating...";

    builderResult.style.display = "block";

    builderResult.innerHTML = `
      <strong>✦ MEDORA AI</strong><br><br>
      Analyzing your workflow requirement...
    `;

    setTimeout(() => {

      builderResult.innerHTML = `
        <strong>✦ MEDORA AI — Generated Workflow</strong>

        <br><br>

        <strong>Business Requirement:</strong><br>

        ${escapeHTML(text)}

        <br><br>

        <strong>Recommended Automation:</strong>

        <br><br>

        <span class="green">①</span>
        Capture workflow request

        <br>

        <span class="green">②</span>
        Identify workflow category

        <br>

        <span class="green">③</span>
        Assign priority and ownership

        <br>

        <span class="green">④</span>
        Route task to responsible team

        <br>

        <span class="green">⑤</span>
        Monitor completion status

        <br>

        <span class="green">⑥</span>
        Generate operational report

        <br><br>

        <strong>Executive Insight:</strong><br>

        The workflow can be structured into a
        centralized command queue with automated
        routing, monitoring and follow-up visibility.

        <br><br>

        <span style="color:#94a3b8">
          Simulated intelligence — not medical advice,
          diagnosis or emergency decision-making.
        </span>
      `;

      generateBtn.disabled = false;

      generateBtn.textContent =
        "✦ Generate AI Insight";

      addActivity(
        "AI Workflow Builder generated a new insight"
      );

    }, 1000);

  }

  /* =======================================================
     BRANCH SWITCH
     ======================================================= */

  if (branch) {

    branch.addEventListener("change", () => {

      const selectedBranch =
        branch.value;

      addActivity(
        `Command center switched to ${selectedBranch}`
      );

      updateDashboard();

    });

  }

  /* =======================================================
     LIVE ACTIVITY EVENTS
     ======================================================= */

  const events = [

    "MEDORA Intelligence Engine synchronized",

    "Hospital workflow signal refreshed",

    "Operational dashboard updated",

    "Resource monitoring cycle completed",

    "AI command layer synchronized",

    "Workflow queue status refreshed",

    "Operational insight generated",

    "Hospital activity stream updated"

  ];

  /* =======================================================
     AUTOMATIC ACTIVITY
     ======================================================= */

  setInterval(() => {

    const randomEvent =
      events[
        Math.floor(
          Math.random() * events.length
        )
      ];

    addActivity(randomEvent);

  }, 7000);

  /* =======================================================
     DASHBOARD SIMULATION
     ======================================================= */

  function updateDashboard() {

    if (
      !patientsEl ||
      !emergencyEl ||
      !doctorsEl ||
      !bedsEl
    ) {

      return;

    }

    const patients =
      1260 +
      Math.floor(Math.random() * 50);

    const emergency =
      5 +
      Math.floor(Math.random() * 6);

    const doctors =
      80 +
      Math.floor(Math.random() * 12);

    const beds =
      14 +
      Math.floor(Math.random() * 10);

    animateNumber(
      patientsEl,
      patients,
      false
    );

    animateNumber(
      emergencyEl,
      emergency,
      true
    );

    animateNumber(
      doctorsEl,
      doctors,
      false
    );

    animateNumber(
      bedsEl,
      beds,
      false
    );

  }

  /* =======================================================
     NUMBER ANIMATION
     ======================================================= */

  function animateNumber(
    element,
    target,
    padded = false
  ) {

    if (!element) return;

    const start =
      parseInt(
        element.textContent.replace(
          /,/g,
          ""
        ),
        10
      ) || 0;

    const duration = 650;

    const startTime = performance.now();

    function update(currentTime) {

      const progress =
        Math.min(
          (currentTime - startTime) /
          duration,
          1
        );

      const eased =
        1 - Math.pow(
          1 - progress,
          3
        );

      const current =
        Math.round(
          start +
          (target - start) *
          eased
        );

      if (padded) {

        element.textContent =
          String(current).padStart(
            2,
            "0"
          );

      } else {

        element.textContent =
          current.toLocaleString();

      }

      if (progress < 1) {

        requestAnimationFrame(update);

      }

    }

    requestAnimationFrame(update);

  }

  /* =======================================================
     KEYBOARD SHORTCUT
     ======================================================= */

  document.addEventListener("keydown", (event) => {

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key.toLowerCase() === "k"
    ) {

      event.preventDefault();

      openDemo("AI Workflow Builder");

    }

  });

  /* =======================================================
     INITIAL SYSTEM UPDATE
     ======================================================= */

  setTimeout(() => {

    addActivity(
      "MEDORA Intelligence Engine initialized"
    );

  }, 1200);

  /* =======================================================
     INITIAL DASHBOARD REFRESH
     ======================================================= */

  setTimeout(() => {

    updateDashboard();

  }, 1800);

  /* =======================================================
     SYSTEM READY
     ======================================================= */

  console.log(
    "✓ MEDORA AI v4.0 — All modules ready."
  );

});
