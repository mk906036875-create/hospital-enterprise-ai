 /* =========================================================
   MEDORA AI v3 — PREMIUM COMMAND CENTER
   Complete Interactive Script
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  console.log("MEDORA AI Command Center initialized.");

  /* -------------------------------------------------------
     ELEMENTS
  ------------------------------------------------------- */

  const modal =
    document.getElementById("modal") ||
    document.querySelector(".modal");

  const modalTitle =
    document.getElementById("modalTitle");

  const input =
    document.getElementById("input");

  const result =
    document.getElementById("result");

  const feed =
    document.getElementById("feed");

  const branch =
    document.getElementById("branch");

  /* -------------------------------------------------------
     NAVIGATION
  ------------------------------------------------------- */

  const navButtons = document.querySelectorAll(".nav");

  navButtons.forEach(button => {

    button.addEventListener("click", () => {

      navButtons.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const section =
        button.textContent.trim();

      addActivity(
        `${section} module opened`
      );

    });

  });

  /* -------------------------------------------------------
     MODAL HELPERS
  ------------------------------------------------------- */

  window.openDemo = function(type) {

    if (!modal) return;

    modal.classList.add("show");

    if (modalTitle) {
      modalTitle.textContent =
        "✦ " + type + " — MEDORA AI";
    }

    if (input) {
      input.value =
        getDefaultPrompt(type);
      input.focus();
    }

    if (result) {
      result.style.display = "none";
      result.innerHTML = "";
    }

    addActivity(
      `${type} AI workflow opened`
    );
  };


  window.closeDemo = function() {

    if (!modal) return;

    modal.classList.remove("show");

  };


  /* -------------------------------------------------------
     DEFAULT PROMPTS
  ------------------------------------------------------- */

  function getDefaultPrompt(type) {

    const prompts = {

      "Emergency Workflow":
        "Analyze an emergency workflow and suggest how requests can be captured, prioritized and routed.",

      "OPD Queue":
        "Analyze OPD queue management and suggest an automated workflow for patient flow.",

      "Resource Monitor":
        "Analyze hospital resource availability and suggest an operational monitoring workflow.",

      "Doctor Availability":
        "Analyze doctor availability and suggest a workflow for scheduling and coordination.",

      "Hospital Analytics":
        "Analyze hospital operational data and generate an executive-level insight summary."

    };

    return prompts[type] ||
      "Explore an AI-assisted hospital workflow.";
  }


  /* -------------------------------------------------------
     RUN AI DEMO
  ------------------------------------------------------- */

  window.runAI = function() {

    if (!input || !result) return;

    const text =
      input.value.trim();

    if (!text) {

      result.innerHTML = `
        <strong>⚠️ MEDORA AI</strong><br><br>
        Please enter a workflow request first.
      `;

      result.style.display = "block";

      return;
    }

    result.style.display = "block";

    result.innerHTML = `
      <strong>✦ MEDORA AI — Intelligence Engine</strong>
      <br><br>

      <strong>Request received:</strong><br>
      ${escapeHTML(text)}

      <br><br>

      <strong>Simulated workflow analysis:</strong>

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
      Create follow-up action

      <br>

      <span class="green">06</span>
      Generate management insight

      <br><br>

      <strong>AI Recommendation:</strong><br>

      Automate repetitive coordination tasks,
      maintain a centralized workflow queue,
      and give operations
