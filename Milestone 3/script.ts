
const form = document.getElementById("resume-form") as HTMLFormElement;
const educationLevel = document.getElementById("education-level") as HTMLSelectElement;
const educationDetails = document.getElementById("education-details") as HTMLElement;
const resumeContainer = document.getElementById("resume-container") as HTMLElement;
const resume = document.getElementById("resume") as HTMLElement;

// Show/hide education details based on education level selection
educationLevel.addEventListener("change", () => {
  educationDetails.classList.toggle("hidden", !educationLevel.value);
});

// Form submission event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect data from the form fields
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const institutionName = (document.getElementById("institution-name") as HTMLInputElement).value;
  const completionYear = (document.getElementById("completion-year") as HTMLInputElement).value;
  const specialization = (document.getElementById("custom-specialization") as HTMLInputElement).value ||
    (document.getElementById("specialization-options") as HTMLSelectElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim());
  const workExperience = (document.getElementById("work-experience") as HTMLTextAreaElement).value;
  const profilePicFile = (document.getElementById("profile-pic") as HTMLInputElement).files?.[0];

  // Construct the profile picture HTML
  let profilePicHTML = "";
  if (profilePicFile) {
    const imageUrl = URL.createObjectURL(profilePicFile);
    profilePicHTML = `<img src="${imageUrl}" alt="Profile Picture" class="profile-pic">`;
  }

  // Populate the resume section with collected data
  resume.innerHTML = `
    <div class="header">
      ${profilePicHTML}
      <h2>${name}</h2>
      <p>${email} | ${phone}</p>
    </div>
    <div class="section">
      <h3>Education</h3>
      <p><strong>Institution:</strong> ${institutionName}</p>
      <p><strong>Year:</strong> ${completionYear}</p>
      <p><strong>Specialization:</strong> ${specialization}</p>
    </div>
    <div class="section">
      <h3>Skills</h3>
      <ul>
        ${skills.map(skill => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
    <div class="section">
      <h3>Work Experience</h3>
      <p>${workExperience}</p>
    </div>
  `;

  // Hide the form and show the generated resume
  document.querySelector(".form-container")!.classList.add("hidden");
  resumeContainer.classList.remove("hidden");
});
