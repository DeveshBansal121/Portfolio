const text = "Greetings, I'm Devesh Bansal";
let index = 0;
const speed = 100; 
const target = document.getElementById("typewriter");

// Clear the initial text
target.innerHTML = "";

function typeWriter() {
    if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Initialize animation on load
window.onload = () => {
    typeWriter();
};

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});