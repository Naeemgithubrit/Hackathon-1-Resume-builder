document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var generateBtn = document.getElementById("generate");
    var downloadBtn = document.getElementById("download");
    var editBtn = document.getElementById("edit");
    var preview = document.getElementById("resumePreview");
    var resumeContent = document.getElementById("resumeContent");
    generateBtn.addEventListener("click", function () {
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var phoneInput = document.getElementById("phone");
        var educationInput = document.getElementById("education");
        var experienceInput = document.getElementById("experience");
        var skillsInput = document.getElementById("skills");
        var profilePicInput = document.getElementById("profilePic");
        var name = nameInput.value.trim();
        var email = emailInput.value.trim();
        var phone = phoneInput.value.trim();
        var education = educationInput.value.trim();
        var experience = experienceInput.value.trim();
        var skills = skillsInput.value.trim();
        var profilePic = profilePicInput.files ? URL.createObjectURL(profilePicInput.files[0]) : null;
        var skillsArray = skills.split(/[\n,]+/).map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill; });
        if (!name || !email || !phone) {
            alert("Please fill in all required fields.");
            return;
        }
        resumeContent.innerHTML = "\n      <div class=\"resume-container\">\n        ".concat(profilePic ? "<img src=\"".concat(profilePic, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : "", "\n        <h2>").concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <ul>").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n      </div>\n    ");
        preview.classList.remove("hidden");
        form.style.display = "none";
    });
    editBtn.addEventListener("click", function () {
        preview.classList.add("hidden");
        form.style.display = "block";
    });
    downloadBtn.addEventListener("click", function () {
        var element = document.querySelector(".resume-container");
        var options = {
            margin: 1,
            filename: "resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        // Ensure that styles and images render correctly in the PDF
        html2pdf().set(options).from(element).save();
    });
});
