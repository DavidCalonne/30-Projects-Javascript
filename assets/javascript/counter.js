document.addEventListener('DOMContentLoaded', function() {
    const counter = document.querySelector('#counter');
    const projects = document.querySelectorAll('.project-unverified');
    const finishedProjects = document.querySelectorAll('.project-verified');
    counter.innerHTML = `${finishedProjects.length} / ${projects.length}`;
});