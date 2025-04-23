// register.js

import './style.css';
// Function to create a table and populate it with data from localStorage
function createStudentRegisterTable() {
    const tableContainer = document.getElementById('table-container');

    // Create table element
    const table = document.createElement('table');
    table.border = '1';

    // Create table header
    const headerRow = document.createElement('tr');
    const headers = ['Registration Number', 'Date'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Retrieve data from localStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];

    // Populate table rows
    students.forEach(student => {
        const row = document.createElement('tr');
        const regNumberCell = document.createElement('td');
        const dateCell = document.createElement('td');

        regNumberCell.textContent = student.registrationNumber;
        dateCell.textContent = student.date;

        row.appendChild(regNumberCell);
        row.appendChild(dateCell);
        table.appendChild(row);
    });

    // Append table to container
    tableContainer.innerHTML = ''; // Clear previous content
    tableContainer.appendChild(table);
}

// Function to add a new student to the register
function addStudentToRegister(registrationNumber) {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const newStudent = {
        registrationNumber: registrationNumber,
        date: new Date().toLocaleDateString()
    };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    createStudentRegisterTable(); // Refresh the table
}

// Event listener for form submission
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const registrationNumber = document.getElementById('registration-number').value;
    if (registrationNumber) {
        addStudentToRegister(registrationNumber);
        document.getElementById('registration-number').value = ''; // Clear input field
    } else {
        alert('Please enter a registration number.');
    }
});

// Initialize table on page load
document.addEventListener('DOMContentLoaded', createStudentRegisterTable);

export default createStudentRegisterTable;