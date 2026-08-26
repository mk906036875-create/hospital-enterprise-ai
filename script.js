 /* =========================================================
   MEDORA AI v3 — PREMIUM INTERACTIVE COMMAND CENTER
   script.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ELEMENTS
     ======================================================= */

  const navButtons = document.querySelectorAll(".nav");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const input = document.getElementById("input");
  const result = document.getElementById("result");
  const branch = document.getElementById("branch");
  const feed = document.getElementById("feed");

  /* =======================================================
     NAVIGATION
     ======================================================= */

  navButtons.forEach((button) => {

    button.addEventListener("click", () => {

      navButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const section = button.innerText.trim();

      addActivity(
        `Command module opened: ${section}`
      );

    });

  });


  /* =======================================================
     DEMO MODAL
     ======================================================= */

  window.openDemo = function(type) {

    if (!modal) return;

    modal.classList.add("show");

    if (modalTitle) {
      modalTitle.innerText =
        "✦ " + type + " — MEDORA AI";
    }

    if (input) {

      input.value =
        getDefaultPrompt(type);

      setTimeout(() => {
        input.focus();
      }, 100);

    }

    if (result) {
      result.style.display = "none";
      result.innerHTML = "";
    }

  };


  /* =======================================================
     DEFAULT AI PROMPTS
     ======================================================= */

  function getDefaultPrompt(type) {

    const prompts = {

      "Emergency Workflow":
        "Analyze an emergency workflow and suggest how MEDORA AI can route and track priority cases.",

      "OPD Queue":
        "Analyze an OPD queue and suggest an automated patient-flow workflow.",

      "Resource Monitor":
        "Monitor hospital resources and identify possible capacity issues.",

      "Doctor Availability":
        "Analyze doctor availability and suggest an automated scheduling workflow.",

      "Hospital Analytics":
        "Generate an operational hospital analytics workflow for management."
    };

    return prompts[type] ||
      "Explore an AI-assisted hospital workflow.";
  }


  /* =======================================================
     CLOSE MODAL
     ======================================================= */

  window.closeDemo = function() {

    if (!modal) return;

    modal.classList.remove("show");

  };


  /* =======================================================
     RUN AI DEMO
     ======================================================= */

  window.runAI = function() {

    if (!input || !result) return;

    const text = input.value.trim();

    if (!text) {

      result.innerHTML = `
        <strong>⚠ Please enter a workflow.</strong>
        <br><br>
        Example:
        <br>
        "Automate OPD appointment follow-up."
      `;

      result.style.display = "block";

      return;
    }


    /* Loading state */

    result.style.display = "block";

    result.innerHTML = `
      <strong>✦ MEDORA AI</strong>
      <br><br>
      Analyzing workflow signals...
      <br>
      <span style="color:#64748b">
      Processing command intelligence
      </span>
    `;


    /* Simulated processing */

    setTimeout(() => {

      const analysis =
        generateAIResponse(text);

      result.innerHTML = analysis;

      addActivity(
        "AI workflow analysis completed"
      );

    }, 900);

  };


  /* =======================================================
     AI RESPONSE ENGINE
     ======================================================= */

  function generateAIResponse(text) {

    const lower = text.toLowerCase();

    let workflow =
      "Workflow Automation";

    let priority =
      "NORMAL";

    let route =
      "Operations Team";


    if (
      lower.includes("emergency") ||
      lower.includes("urgent")
    ) {

      workflow =
        "Emergency Workflow";

      priority =
        "HIGH";

      route =
        "Emergency Operations";

    }

    else if (
      lower.includes("opd") ||
      lower.includes("appointment") ||
      lower.includes("queue")
    ) {

      workflow =
        "OPD Flow Automation";

      priority =
        "MEDIUM";

      route =
        "OPD Operations";

    }

    else if (
      lower.includes("doctor") ||
      lower.includes("doctor availability") ||
      lower.includes("schedule")
    ) {

      workflow =
        "Doctor Availability";

      priority =
        "MEDIUM";

      route =
        "Clinical Operations";

    }

    else if (
      lower.includes("bed") ||
      lower.includes("resource") ||
      lower.includes("capacity")
    ) {

      workflow =
        "Resource Monitoring";

      priority =
        "MEDIUM";

      route =
        "Hospital Operations";

    }

    else if (
      lower.includes("analytics") ||
      lower.includes("report") ||
      lower.includes("dashboard")
    ) {

      workflow =
        "Management Analytics";

      priority =
        "NORMAL";

      route =
        "Management Team";

    }


    return `
      <strong>✦ MEDORA AI — Workflow Intelligence</strong>

      <br><br>

      <b>Request received:</b>
      <br>
      ${escapeHTML(text)}

      <br><br>

      <b>Detected workflow:</b>
      <br>
      ${workflow}

      <br><br>

      <b>Priority:</b>
      <br>
      <span style="
        color:
        ${priority === "HIGH"
          ? "#fb7185"
          : priority === "MEDIUM"
          ? "#facc15"
          : "#34d399"};
        font-weight:800;
      ">
        ${priority}
      </span>

      <br><br>

      <b>Suggested automation:</b>

      <br>
      ① Capture workflow request
      <br>
      ② Classify priority
      <br>
      ③ Route to ${route}
      <br>
      ④ Track workflow status
      <br>
      ⑤
