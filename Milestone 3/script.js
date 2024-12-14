var form = document.getElementById("resume-form");
var educationLevel = document.getElementById("education-level");
var educationDetails = document.getElementById("education-details");
var resumeContainer = document.getElementById("resume-container");
var resume = document.getElementById("resume");
// Show/hide education details based on education level selection
educationLevel.addEventListener("change", function () {
    educationDetails.classList.toggle("hidden", !educationLevel.value);
});
// Form submission event listener
form.addEventListener("submit", function (e) {
    var _a;
    e.preventDefault();
    // Collect data from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var institutionName = document.getElementById("institution-name").value;
    var completionYear = document.getElementById("completion-year").value;
    var specialization = document.getElementById("custom-specialization").value ||
        document.getElementById("specialization-options").value;
    var skills = document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); });
    var workExperience = document.getElementById("work-experience").value;
    var profilePicFile = (_a = document.getElementById("profile-pic").files) === null || _a === void 0 ? void 0 : _a[0];
    // Construct the profile picture HTML
    var profilePicHTML = "";
    if (profilePicFile) {
        var imageUrl = URL.createObjectURL(profilePicFile);
        profilePicHTML = "<img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" class=\"profile-pic\">");
    }
    // Populate the resume section with collected data
    resume.innerHTML = "\n    <div class=\"header\">\n      ".concat(profilePicHTML, "\n      <h2>").concat(name, "</h2>\n      <p>").concat(email, " | ").concat(phone, "</p>\n    </div>\n    <div class=\"section\">\n      <h3>Education</h3>\n      <p><strong>Institution:</strong> ").concat(institutionName, "</p>\n      <p><strong>Year:</strong> ").concat(completionYear, "</p>\n      <p><strong>Specialization:</strong> ").concat(specialization, "</p>\n    </div>\n    <div class=\"section\">\n      <h3>Skills</h3>\n      <ul>\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n      </ul>\n    </div>\n    <div class=\"section\">\n      <h3>Work Experience</h3>\n      <p>").concat(workExperience, "</p>\n    </div>\n  ");
    // Hide the form and show the generated resume
    document.querySelector(".form-container").classList.add("hidden");
    resumeContainer.classList.remove("hidden");
});
