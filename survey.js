document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("survey_form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get form data
      const formData = new FormData(form);
      const surveyData = {};
  
      // Convert FormData to JSON
      formData.forEach(function(value, key) {
        surveyData[key] = value;
      });
  
      // Store data in localStorage
      localStorage.setItem("surveyData", JSON.stringify(surveyData));
  
      // Redirect to thank you page
      window.location.href = "http://127.0.0.1:5500/surveythanku.html";

      localStorage.getItem("surveyData");
    });
  });
  