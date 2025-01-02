$(document).ready(function () {
    // Slick slider initialization
    $(".slider").slick({
      arrows: false,
      dots: true,
      appendDots: ".slider-dots",
      dotsClass: "dots",
    });
  
    // Mobile navigation toggle
    let hamberger = document.querySelector(".hamberger");
    let times = document.querySelector(".times");
    let mobileNav = document.querySelector(".mobile-nav");
  
    hamberger.addEventListener("click", function () {
      mobileNav.classList.add("open");
    });
  
    times.addEventListener("click", function () {
      mobileNav.classList.remove("open");
    });
  
    // Form validation and submission
    document.querySelector("#contact-form").addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const form = event.target;
      const formData = new FormData(form);
  
      // Validate form inputs
      const name = formData.get("name").trim();
      const email = formData.get("email").trim();
      const message = formData.get("message").trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all required fields.");
        return;
      }
  
      try {
        // Send the form data to Formspree
        const response = await fetch("https://formspree.io/f/xzzzkzew", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
  
        if (response.ok) {
          // Success feedback
          showDialog("Success", "Message sent successfully!", "success");
  
          // Reset the form fields
          form.reset();
        } else {
          const result = await response.json();
          showDialog("Error", result.error || "Failed to send message.", "error");
        }
      } catch (error) {
        showDialog("Error", "An error occurred. Please try again later.", "error");
      }
    });
  
    // Function to show feedback dialog
    function showDialog(title, message, type) {
      const dialogBox = document.createElement("div");
      dialogBox.style.position = "fixed";
      dialogBox.style.top = "50%";
      dialogBox.style.left = "50%";
      dialogBox.style.transform = "translate(-50%, -50%)";
      dialogBox.style.padding = "20px";
      dialogBox.style.backgroundColor = type === "success" ? "#4CAF50" : "#f44336";
      dialogBox.style.color = "#fff";
      dialogBox.style.borderRadius = "8px";
      dialogBox.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.26)";
      dialogBox.style.zIndex = "1000";
  
      const titleElement = document.createElement("h2");
      titleElement.textContent = title;
      titleElement.style.marginBottom = "10px";
  
      const messageElement = document.createElement("p");
      messageElement.textContent = message;
  
      const closeButton = document.createElement("button");
      closeButton.textContent = "Close";
      closeButton.style.marginTop = "10px";
      closeButton.style.padding = "5px 10px";
      closeButton.style.border = "none";
      closeButton.style.borderRadius = "5px";
      closeButton.style.cursor = "pointer";
      closeButton.style.backgroundColor = "#fff";
      closeButton.style.color = type === "success" ? "#4CAF50" : "#f44336";
  
      closeButton.addEventListener("click", () => {
        document.body.removeChild(dialogBox);
      });
  
      dialogBox.appendChild(titleElement);
      dialogBox.appendChild(messageElement);
      dialogBox.appendChild(closeButton);
  
      document.body.appendChild(dialogBox);
    }
  });
  