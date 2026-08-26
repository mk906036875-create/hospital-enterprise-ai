 /* =========================================================
   MEDORA AI v4.0
   PREMIUM HEALTHCARE COMMAND CENTER
   FULL INTERACTIVE SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  console.log("MEDORA AI v4.0 initialized.");

  /* =====================================================
     ELEMENTS
     ===================================================== */

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");

  const modalInput =
    document.getElementById("modalInput") ||
    document.getElementById("input");

  const runBtn =
    document.getElementById("runBtn");

  const modalResult =
    document.getElementById("modalResult") ||
    document.getElementById("result");

  const closeModal =
    document.getElementById("closeModal");

  const feed =
    document.getElementById("feed");

  const branch =
    document.getElementById("branch");


  /* =====================================================
     NAVIGATION
     ===================================================== */

  document.querySelectorAll(".nav").forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".nav")
        .forEach(item => {
          item.classList.remove("active");
        });

      button.classList.add("active");

      const section =
        button.innerText.trim();

      addActivity(
        section + " module opened"
      );

    });

  });


  /* =====================================================
     AI ACTION BUTTONS
     ===================================================== */

  const actionButtons =
    document.querySelectorAll(".action");

  actionButtons.forEach(button => {

    button.addEventListener("click", () => {

      const label =
        button.querySelector("span");

      if (!label) return;

      const action =
        label.innerText.trim();

      openDemo(action);

    });

  });


  /* =====================================================
     OPEN DEMO
     ===================================================== */

  window.openDemo = function(type) {

    if (!modal) {
      console.error("MEDORA modal not found.");
      return;
    }

    modal.classList.add("show");

    if (modalTitle) {

      modalTitle.innerHTML =
        "✦ " +
        escapeHTML(type) +
        " — MEDORA AI";

    }

    if (modalInput) {

      modalInput.value =
        getPrompt(type);

      modalInput.focus();

    }

    if (modalResult) {

      modalResult.style.display =
        "none";

      modalResult.innerHTML = "";

    }

    addActivity(
      type + " AI workflow opened"
    );

  };


  /* =====================================================
     CLOSE DEMO
     ===================================================== */

  function closeDemo() {

    if (!modal) return;

    modal.classList.remove("show");

  }


  window.closeDemo = closeDemo;


  if (closeModal) {

    closeModal.addEventListener(
      "click",
      closeDemo
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
     BACKDROP
     ===================================================== */

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
     DEFAULT PROMPTS
     ===================================================== */

  function getPrompt(type) {

    const prompts = {

      "Emergency":
        "Analyze an emergency workflow and suggest how requests can be captured, prioritized and routed.",

      "OPD Queue":
        "Analyze OPD queue management and suggest an automated patient-flow workflow.",

      "Resources":
        "Analyze hospital resource availability and suggest an operational monitoring workflow.",

      "Doctors":
        "Analyze doctor availability and suggest an intelligent scheduling workflow.",

      "Analytics":
        "Analyze hospital operational activity and generate an executive insight summary.",

      "AI Builder":
        "Create an AI-assisted workflow for a hospital operational process."

    };

    return prompts[type] ||
      "Create an AI-assisted healthcare operations workflow.";

  }


  /* =====================================================
     RUN MEDORA SIMULATION
     ===================================================== */

  if (runBtn) {

    runBtn.addEventListener(
      "click",
      runSimulation
    );

  }


  function runSimulation() {

    if (!modalInput || !modalResult) {

      console.error(
        "MEDORA simulation elements missing."
      );

      return;

    }

    const request =
      modalInput.value.trim();


    if (!request) {

      modalResult.innerHTML = `

        <strong>⚠️ MEDORA AI</strong>

        <br><br>

        Please describe the workflow
        you want to simulate.

      `;

      modalResult.style.display =
        "block";

      return;

    }


    /* Loading */

    modalResult.style.display =
      "block";

    modalResult.innerHTML = `

      <strong>
        ✦ MEDORA Intelligence Engine
      </strong>

      <br><br>

      Analyzing workflow signals...

    `;


    /* Simulated processing */

    setTimeout(() => {

      modalResult.innerHTML = `

        <strong>
          ✦ MEDORA AI — Workflow Insight
        </strong>

        <br><br>

        <strong>Request received:</strong>

        <br>

        ${escapeHTML(request)}

        <br><br>

        <strong>
          Recommended workflow
        </strong>

        <br><br>

        <span class="green">01</span>
        Capture incoming request

        <br>

        <span class="green">02</span>
        Classify workflow priority

        <br>

        <span class="green">03</span>
        Route to responsible team

        <br>

        <span class="green">04</span>
        Track workflow status

        <br>

        <span class="green">05</span>
        Generate follow-up task

        <br>

        <span class="green">06</span>
        Create management insight

        <br><br>

        <strong>
          MEDORA Recommendation
        </strong>

        <br>

        Centralize operational requests,
        automate repetitive coordination,
        and provide management with
        real-time workflow visibility.

        <br><br>

        <small style="color:#94a3b8">

          Simulated AI demonstration only.
          Not a medical diagnosis,
          treatment or emergency-response system.

        </small>

      `;

      addActivity(
        "MEDORA generated workflow insight"
      );

    }, 900);

  }


  /* =====================================================
     AI BUILDER
     ===================================================== */

  const builderButton =
    [...document.querySelectorAll("button")]
      .find(button =>
        button.innerText
          .toLowerCase()
          .includes("generate ai insight")
      );


  if (builderButton) {

    builderButton.addEventListener(
      "click",
      () => {

        openDemo("AI Builder");

      }
    );

  }


  /* =====================================================
     BRANCH SWITCH
     ===================================================== */

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


  /* =====================================================
     LIVE ACTIVITY
     ===================================================== */

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


    while (feed.children.length > 6) {

      feed.removeChild(
        feed.lastElementChild
      );

    }

  }


  /* =====================================================
     AUTOMATIC ACTIVITY
     ===================================================== */

  const events = [

    "AI monitoring cycle completed",

    "Operational dashboard synchronized",

    "Workflow queue refreshed",

    "Hospital resource status checked",

    "Doctor availability synchronized",

    "Command center intelligence updated",

    "AI workflow signal detected"

  ];


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
     SAFE HTML
     ===================================================== */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =====================================================
     SYSTEM READY
     ===================================================== */

  setTimeout(() => {

    addActivity(
      "MEDORA Intelligence Engine ready"
    );

  }, 1200);


  console.log(
    "✓ MEDORA AI v4.0 — All interactive modules ready."
  );

});
