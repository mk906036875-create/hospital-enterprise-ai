/* --- MedEnterprise AI - Frontend Interactive Script --- */

document.addEventListener("DOMContentLoaded", function() {
    console.log("MedEnterprise AI System Loaded Successfully.");

    // Smooth Scrolling for Action Buttons
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            
            if(targetId === "#contact") {
                alert("Thank you for your interest in MedEnterprise AI. Our enterprise sales team will get in touch for a boardroom presentation.");
            }
        });
    });

    // Dynamic Greeting or Status Log
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector("footer p");
    if(footerText) {
        footerText.innerHTML = `© ${currentYear} MedEnterprise AI Solutions. Designed for Tier-1 Healthcare Networks.`;
    }
});
               
