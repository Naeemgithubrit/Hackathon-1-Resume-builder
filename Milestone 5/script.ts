declare const html2pdf :any;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const generateBtn = document.getElementById("generate") as HTMLButtonElement;
  const downloadBtn = document.getElementById("download") as HTMLButtonElement;
  const editBtn = document.getElementById("edit") as HTMLButtonElement;
  const preview = document.getElementById("resumePreview") as HTMLDivElement;
  const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;

  generateBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsInput = document.getElementById("skills") as HTMLTextAreaElement;
    const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const education = educationInput.value.trim();
    const experience = experienceInput.value.trim();
    const skills = skillsInput.value.trim();
    const profilePic = profilePicInput.files ? URL.createObjectURL(profilePicInput.files[0]) : null;

    const skillsArray = skills.split(/[\n,]+/).map(skill => skill.trim()).filter(skill => skill);

    if (!name || !email || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    resumeContent.innerHTML = `
      <div class="resume-container">
        ${profilePic ? `<img src="${profilePic}" alt="Profile Picture" class="profile-pic">` : ""}
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <ul>${skillsArray.map(skill => `<li>${skill}</li>`).join("")}</ul>
      </div>
    `;

    preview.classList.remove("hidden");
    form.style.display = "none";
  });

  editBtn.addEventListener("click", () => {
    preview.classList.add("hidden");
    form.style.display = "block";
  });

  downloadBtn.addEventListener("click", () => {
    const element = document.querySelector(".resume-container") as HTMLElement;
    const options = {
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
