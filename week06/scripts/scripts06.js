// scripts/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#main-nav ul');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('show');
    });
    
    // Dynamic service loading
    const servicesHighlight = document.querySelector('.services-highlight');
    
    const services = [
        {
            title: "Community Support",
            description: "Providing assistance to community members in need.",
            icon: "👥"
        },
        {
            title: "Educational Programs",
            description: "Organizing workshops and training sessions.",
            icon: "📚"
        },
        {
            title: "Cultural Events",
            description: "Celebrating our heritage through various activities.",
            icon: "🎭"
        }
    ];
    
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesHighlight.appendChild(card);
    });
    
    // Form validation for contact page
    if (document.getElementById('contact-form')) {
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            const email = document.getElementById('email').value;
            if (!email.includes('@')) {
                e.preventDefault();
                alert('Please enter a valid email address');
            }
        });
    }
});


// Additional event handling in scripts/main.js
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic event countdown
function updateEventCountdown() {
    const eventDate = new Date('2023-12-15').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const countdownElement = document.getElementById('event-countdown');
    if (countdownElement) {
        countdownElement.innerHTML = `Next big event in ${days}d ${hours}h`;
    }
}

// Update countdown every hour
updateEventCountdown();
setInterval(updateEventCountdown, 3600000);

// Dynamic testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    testimonials[index].classList.add('active');
}

document.querySelector('.testimonial-next').addEventListener('click', function() {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

document.querySelector('.testimonial-prev').addEventListener('click', function() {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});


// scripts/team.js
// API integration with project management tool
async function getTeamTasks() {
    try {
        const response = await fetch('https://api.projectmanagement.com/tasks');
        const tasks = await response.json();
        displayTeamTasks(tasks);
    } catch (error) {
        console.error('Error fetching team tasks:', error);
    }
}

function displayTeamTasks(tasks) {
    const taskList = document.getElementById('team-tasks');
    if (taskList) {
        taskList.innerHTML = tasks.map(task => `
            <li class="${task.completed ? 'completed' : ''}">
                <h4>${task.title}</h4>
                <p>Assigned to: ${task.assignedTo}</p>
                <p>Deadline: ${task.deadline}</p>
                <progress value="${task.progress}" max="100"></progress>
            </li>
        `).join('');
    }
}

// Update tasks every 5 minutes
getTeamTasks();
setInterval(getTeamTasks, 300000);

// scripts/team-scheduler.js
class MeetingScheduler {
    constructor() {
        this.meetings = [];
        this.loadMeetings();
    }
    
    async loadMeetings() {
        // In a real app, this would fetch from an API
        this.meetings = [
            { id: 1, title: 'Weekly Sync', date: '2023-11-15', time: '14:00', attendees: ['Nickson', 'Alice', 'Bob'] },
            { id: 2, title: 'Design Review', date: '2023-11-17', time: '10:30', attendees: ['Nickson', 'Charlie'] }
        ];
        this.renderMeetings();
    }
    
    renderMeetings() {
        const container = document.getElementById('meetings-container');
        if (container) {
            container.innerHTML = this.meetings.map(meeting => `
                <div class="meeting-card">
                    <h4>${meeting.title}</h4>
                    <p>${meeting.date} at ${meeting.time}</p>
                    <p>Attendees: ${meeting.attendees.join(', ')}</p>
                    <button class="join-meeting" data-id="${meeting.id}">Join</button>
                </div>
            `).join('');
            
            document.querySelectorAll('.join-meeting').forEach(button => {
                button.addEventListener('click', (e) => {
                    const meetingId = e.target.getAttribute('data-id');
                    this.joinMeeting(meetingId);
                });
            });
        }
    }
    
    joinMeeting(id) {
        const meeting = this.meetings.find(m => m.id == id);
        if (meeting) {
            alert(`Joining meeting: ${meeting.title}`);
            // In a real app, this would launch the meeting software
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MeetingScheduler();
});