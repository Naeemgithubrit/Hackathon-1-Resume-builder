var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Function to handle changes in education level and display relevant fields
function handleEducationChange() {
    var educationLevel = document.getElementById("educationLevel").value;
    // Hide all fields initially
    var matricFields = document.getElementById("matricFields");
    var intermediateFields = document.getElementById("intermediateFields");
    var universityFields = document.getElementById("universityFields");
    matricFields.style.display = "none";
    intermediateFields.style.display = "none";
    universityFields.style.display = "none";
    // Display fields based on selected education level
    if (educationLevel === "matric") {
        matricFields.style.display = "block";
    }
    else if (educationLevel === "intermediate") {
        intermediateFields.style.display = "block";
    }
    else if (educationLevel === "university") {
        universityFields.style.display = "block";
    }
}
// Function to read profile picture as base64 string
function getProfilePicture() {
    return new Promise(function (resolve) {
        var profileInput = document.getElementById("profilePicture");
        if (profileInput && profileInput.files && profileInput.files[0]) {
            var reader_1 = new FileReader();
            reader_1.onload = function () { return resolve(reader_1.result); };
            reader_1.readAsDataURL(profileInput.files[0]);
        }
        else {
            resolve(undefined);
        }
    });
}
// Async function to generate resume
function generateResume(event) {
    return __awaiter(this, void 0, void 0, function () {
        var data, _a, resumeOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    data = {
                        name: document.getElementById("name").value,
                        email: document.getElementById("email").value,
                        phone: document.getElementById("phone").value,
                        github: document.getElementById("github").value,
                        linkedin: document.getElementById("linkedin").value,
                        educationLevel: document.getElementById("educationLevel").value,
                        jobTitle: document.getElementById("jobTitle").value,
                        company: document.getElementById("company").value,
                        jobDescription: document.getElementById("jobDescription").value,
                        skills: document.getElementById("skills").value,
                    };
                    // Handle education fields based on level selected
                    if (data.educationLevel === "matric") {
                        data.school = document.getElementById("school").value;
                        data.matricYear = parseInt(document.getElementById("matricYear").value);
                        data.matricSpecialization = document.getElementById("matricSpecialization").value;
                    }
                    else if (data.educationLevel === "intermediate") {
                        data.college = document.getElementById("college").value;
                        data.intermediateYear = parseInt(document.getElementById("intermediateYear").value);
                        data.intermediateSpecialization = document.getElementById("intermediateSpecialization").value;
                    }
                    else if (data.educationLevel === "university") {
                        data.degree = document.getElementById("degree").value;
                        data.university = document.getElementById("university").value;
                        data.gradYear = parseInt(document.getElementById("gradYear").value);
                        data.universitySpecialization = document.getElementById("universitySpecialization").value;
                    }
                    // Get profile picture
                    _a = data;
                    return [4 /*yield*/, getProfilePicture()];
                case 1:
                    // Get profile picture
                    _a.profilePicture = _b.sent();
                    resumeOutput = document.getElementById("resumeOutput");
                    resumeOutput.innerHTML = "\n    <div class=\"resume\">\n      ".concat(data.profilePicture ? "<img src=\"".concat(data.profilePicture, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : "", "\n      <h2>").concat(data.name, "</h2>\n      <p>Email: ").concat(data.email, "</p>\n      <p>Phone: ").concat(data.phone, "</p>\n      ").concat(data.github ? "<p>GitHub: <a href=\"".concat(data.github, "\" target=\"_blank\">").concat(data.github, "</a></p>") : "", "\n      ").concat(data.linkedin ? "<p>LinkedIn: <a href=\"".concat(data.linkedin, "\" target=\"_blank\">").concat(data.linkedin, "</a></p>") : "", "\n\n      <h3>Education</h3>\n      <p>").concat(data.educationLevel === "matric"
                        ? "School: ".concat(data.school, ", Year: ").concat(data.matricYear, ", Specialization: ").concat(data.matricSpecialization)
                        : data.educationLevel === "intermediate"
                            ? "College: ".concat(data.college, ", Year: ").concat(data.intermediateYear, ", Specialization: ").concat(data.intermediateSpecialization)
                            : "Degree: ".concat(data.degree, ", University: ").concat(data.university, ", Graduation Year: ").concat(data.gradYear, ", Specialization: ").concat(data.universitySpecialization), "</p>\n\n      <h3>Work Experience</h3>\n      <p><strong>").concat(data.jobTitle, "</strong> at ").concat(data.company, "</p>\n      <p>").concat(data.jobDescription, "</p>\n\n      <h3>Skills</h3>\n      <p>").concat(data.skills, "</p>\n    </div>\n  ");
                    return [2 /*return*/];
            }
        });
    });
}
// Event Listeners
document.getElementById("educationLevel").addEventListener("change", handleEducationChange);
document.getElementById("resumeForm").addEventListener("submit", generateResume);
