// Student Information Object
const student = {
    name: "Ira Marie Tagnipez",
    course: "Bachelor of Science in Information Technology",
    yearLevel: "3rd Year",
    favoriteProgrammingLanguage: "JavaScript"
};

// Function to display student information on the page
function displayStudentInfo() {
    // Update student name
    const studentNameElement = document.getElementById('student-name');
    if (studentNameElement) {
        studentNameElement.textContent = student.name;
    }

    // Update student course
    const studentCourseElement = document.getElementById('student-course');
    if (studentCourseElement) {
        studentCourseElement.textContent = student.course;
    }

    // Update student year level
    const studentYearElement = document.getElementById('student-year');
    if (studentYearElement) {
        studentYearElement.textContent = student.yearLevel;
    }

    // Update favorite programming language
    const studentLanguageElement = document.getElementById('student-language');
    if (studentLanguageElement) {
        studentLanguageElement.textContent = student.favoriteProgrammingLanguage;
    }
}

// Function to get all student information as an object
function getStudentInfo() {
    return student;
}

// Function to show alert with all student details
function showStudentAlert() {
    alert(`Student Profile\n\n` +
          `Name: ${student.name}\n` +
          `Course: ${student.course}\n` +
          `Year Level: ${student.yearLevel}\n` +
          `Favorite Language: ${student.favoriteProgrammingLanguage}\n\n` +
          `Thank you for exploring this interactive page!`);
}

// Function to log student information to console
function logStudentInfo() {
    console.log("=== Student Information ===");
    console.log("Name:", student.name);
    console.log("Course:", student.course);
    console.log("Year Level:", student.yearLevel);
    console.log("Favorite Programming Language:", student.favoriteProgrammingLanguage);
    console.log("============================");
}

// Display student info when the script loads (only in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', displayStudentInfo);
}

// Log student info when script runs in Node.js or at page load
if (typeof window === 'undefined') {
    logStudentInfo();
}
