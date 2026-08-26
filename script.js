 /* =========================================================
   MEDORA AI v2.0
   Hospital Intelligence Command Center
   Frontend Interactive Demo
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("MEDORA AI Command Center initialized.");

    /* ===============================
       ELEMENTS
    =============================== */

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const input = document.getElementById("input");
    const result = document.getElementById("result");
    const feed = document.getElementById("feed");
    const branch = document.getElementById("branch");

    /* ===============================
       SIDEBAR NAVIGATION
    =============================== */

    const navButtons = document.querySelectorAll(".nav");

    navButtons.forEach(button => {

        button.addEventListener("click", () => {

            navButtons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            const sectionName = button.innerText.trim();

            addActivity(
                `${sectionName} module selected`
            );

        });

    });


    /* ===============================
       AI DEMO MODAL
    =============================== */

    window.openDemo = function(type) {

        if (!modal) return;

        modal.classList.add("show");

        if (modalTitle) {
            modalTitle.innerText =
                "✦ " + type + " — AI Demo";
        }

        if (input) {
            input.value =
                "Explore " + type +
                " workflow for a hospital.";
            input.focus();
        }

        if (result) {
            result.style.display = "none";
            result.innerHTML = "";
        }

    };


    /* ===============================
       CLOSE MODAL
    =============================== */

    window.closeDemo = function() {

        if (!modal) return;

        modal.classList.remove("show");

    };


    /* ===============================
       RUN MEDORA AI DEMO
    =============================== */

    window.runAI = function() {

        if (!input || !result) return;

        const text = input.value.trim();

        if (!text) {

            result.innerHTML =
                "⚠️ Please enter a workflow you want to explore.";

            result.style.display = "block";

            return;
        }

        result.innerHTML = `

            <strong>✦ MEDORA AI — Intelligence Result</strong>

            <br><br>

            <span style="color:#94a3b8">
            Workflow received:
            </span>

            <br>

            ${escapeHTML(text)}

            <br><br>

            <strong>Suggested Automation Flow</strong>

            <br><br>

            ① Capture workflow request
            <br>
            ② Classify operational priority
            <br>
            ③ Route to responsible team
            <br>
            ④ Monitor workflow status
            <br>
            ⑤ Generate follow-up task
            <br>
            ⑥ Update command center activity

            <br><br>

            <span style="color:#34d399">
            ✓ MEDORA workflow simulation completed
            </span>

            <br><br>

            <span style="color:#64748b">
            Demo intelligence only — not a medical
            diagnosis, treatment or emergency-response system.
            </span>

        `;

        result.style.display = "block";

        add
