document.addEventListener('DOMContentLoaded', function () {
    // Hide sections initially
    document.getElementById('schedule-section').style.display = 'none';
    document.getElementById('announcements-section').style.display = 'none';
    document.getElementById('attendance-section').style.display = 'none';
});

// Set user role and display appropriate sections
function setRole(role) {
    document.getElementById('user-role').innerText = role.charAt(0).toUpperCase() + role.slice(1);
    document.getElementById('role-selection').style.display = 'none';
    document.getElementById('schedule-section').style.display = 'block';

    if (role === 'admin' || role === 'faculty') {
        document.getElementById('schedule-creation').style.display = 'block';
        document.getElementById('announcements-section').style.display = 'block';
        document.getElementById('attendance-section').style.display = 'block';
    } else {
        document.getElementById('schedule-creation').style.display = 'none';
        document.getElementById('announcements-section').style.display = 'block';
        document.getElementById('attendance-section').style.display = 'none';
    }
}

// Add schedule (admin or faculty only)
function addSchedule() {
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;
    const subject = document.getElementById('subject').value;

    if (day && time && subject) {
        const tableBody = document.querySelector('#schedule-table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${time}</td>
                         <td>${day === 'Monday' ? subject : ''}</td>
                         <td>${day === 'Tuesday' ? subject : ''}</td>
                         <td>${day === 'Wednesday' ? subject : ''}</td>
                         <td>${day === 'Thursday' ? subject : ''}</td>
                         <td>${day === 'Friday' ? subject : ''}</td>`;
        tableBody.appendChild(row);
        clearScheduleForm();
    }
}

// Clear the schedule form after submission
function clearScheduleForm() {
    document.getElementById('day').value = 'Monday';
    document.getElementById('time').value = '';
    document.getElementById('subject').value = '';
}

// Add a new announcement (admin or faculty only)
function addAnnouncement() {
    const newAnnouncement = document.getElementById('new-announcement').value;
    if (newAnnouncement) {
        const announcementDiv = document.getElementById('announcements');
        const announcement = document.createElement('p');
        announcement.innerText = newAnnouncement;
        announcementDiv.appendChild(announcement);
        document.getElementById('new-announcement').value = '';
    }
}

// Mark attendance (admin or faculty only)
function markAttendance() {
    const studentName = document.getElementById('student-name').value;
    const status = document.getElementById('attendance-status').value;
    const date = document.getElementById('attendance-date').value;

    if (studentName && status && date) {
        const attendanceTable = document.querySelector('#attendance-table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${studentName}</td>
                         <td>${status === 'Present' ? '✔️' : ''}</td>
                         <td>${status === 'Absent' ? '❌' : ''}</td>
                         <td>${date}</td>`;
        attendanceTable.appendChild(row);
        clearAttendanceForm();
    }
}

// Clear attendance form after submission
function clearAttendanceForm() {
    document.getElementById('student-name').value = '';
    document.getElementById('attendance-status').value = 'Present';
    document.getElementById('attendance-date').value = '';
}

// Logout functionality
document.getElementById('logout').addEventListener('click', function () {
    window.location.reload();
});
