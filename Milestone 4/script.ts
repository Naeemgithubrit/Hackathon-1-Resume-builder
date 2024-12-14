// Updated Interface with Education Details
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  profilePicture?: string;
  educationLevel: string;
  school?: string;
  matricYear?: number;
  matricSpecialization?: string;
  college?: string;
  intermediateYear?: number;
  intermediateSpecialization?: string;
  degree?: string;
  university?: string;
  gradYear?: number;
  universitySpecialization?: string;
  jobTitle: string;
  company: string;
  jobDescription: string;
  skills: string;
}

// Function to handle changes in education level and display relevant fields
function handleEducationChange() {
  const educationLevel = (document.getElementById("educationLevel") as HTMLSelectElement).value;
  
  // Hide all fields initially
  const matricFields = document.getElementById("matricFields")!;
  const intermediateFields = document.getElementById("intermediateFields")!;
  const universityFields = document.getElementById("universityFields")!;
  matricFields.style.display = "none";
  intermediateFields.style.display = "none";
  universityFields.style.display = "none";

  // Display fields based on selected education level
  if (educationLevel === "matric") {
    matricFields.style.display = "block";
  } else if (educationLevel === "intermediate") {
    intermediateFields.style.display = "block";
  } else if (educationLevel === "university") {
    universityFields.style.display = "block";
  }
}

// Function to read profile picture as base64 string
function getProfilePicture(): Promise<string | undefined> {
  return new Promise((resolve) => {
    const profileInput = document.getElementById("profilePicture") as HTMLInputElement;
    if (profileInput && profileInput.files && profileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(profileInput.files[0]);
    } else {
      resolve(undefined);
    }
  });
}

// Async function to generate resume
async function generateResume(event: Event) {
  event.preventDefault();

  // Collecting form data
  const data: ResumeData = {
    name: (document.getElementById("name") as HTMLInputElement).value,
    email: (document.getElementById("email") as HTMLInputElement).value,
    phone: (document.getElementById("phone") as HTMLInputElement).value,
    github: (document.getElementById("github") as HTMLInputElement).value,
    linkedin: (document.getElementById("linkedin") as HTMLInputElement).value,
    educationLevel: (document.getElementById("educationLevel") as HTMLSelectElement).value,
    jobTitle: (document.getElementById("jobTitle") as HTMLInputElement).value,
    company: (document.getElementById("company") as HTMLInputElement).value,
    jobDescription: (document.getElementById("jobDescription") as HTMLTextAreaElement).value,
    skills: (document.getElementById("skills") as HTMLInputElement).value,
  };

  // Handle education fields based on level selected
  if (data.educationLevel === "matric") {
    data.school = (document.getElementById("school") as HTMLInputElement).value;
    data.matricYear = parseInt((document.getElementById("matricYear") as HTMLInputElement).value);
    data.matricSpecialization = (document.getElementById("matricSpecialization") as HTMLInputElement).value;
  } else if (data.educationLevel === "intermediate") {
    data.college = (document.getElementById("college") as HTMLInputElement).value;
    data.intermediateYear = parseInt((document.getElementById("intermediateYear") as HTMLInputElement).value);
    data.intermediateSpecialization = (document.getElementById("intermediateSpecialization") as HTMLInputElement).value;
  } else if (data.educationLevel === "university") {
    data.degree = (document.getElementById("degree") as HTMLInputElement).value;
    data.university = (document.getElementById("university") as HTMLInputElement).value;
    data.gradYear = parseInt((document.getElementById("gradYear") as HTMLInputElement).value);
    data.universitySpecialization = (document.getElementById("universitySpecialization") as HTMLInputElement).value;
  }

  // Get profile picture
  data.profilePicture = await getProfilePicture();

  // Generate resume content with profile picture and enhanced styling
  const resumeOutput = document.getElementById("resumeOutput")!;
  resumeOutput.innerHTML = `
    <div class="resume">
      ${data.profilePicture ? `<img src="${data.profilePicture}" alt="Profile Picture" class="profile-picture">` : ""}
      <h2>${data.name}</h2>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      ${data.github ? `<p>GitHub: <a href="${data.github}" target="_blank">${data.github}</a></p>` : ""}
      ${data.linkedin ? `<p>LinkedIn: <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>` : ""}

      <h3>Education</h3>
      <p>${
        data.educationLevel === "matric" 
          ? `School: ${data.school}, Year: ${data.matricYear}, Specialization: ${data.matricSpecialization}`
          : data.educationLevel === "intermediate" 
          ? `College: ${data.college}, Year: ${data.intermediateYear}, Specialization: ${data.intermediateSpecialization}`
          : `Degree: ${data.degree}, University: ${data.university}, Graduation Year: ${data.gradYear}, Specialization: ${data.universitySpecialization}`
      }</p>

      <h3>Work Experience</h3>
      <p><strong>${data.jobTitle}</strong> at ${data.company}</p>
      <p>${data.jobDescription}</p>

      <h3>Skills</h3>
      <p>${data.skills}</p>
    </div>
  `;
}

// Event Listeners
document.getElementById("educationLevel")!.addEventListener("change", handleEducationChange);
document.getElementById("resumeForm")!.addEventListener("submit", generateResume);
