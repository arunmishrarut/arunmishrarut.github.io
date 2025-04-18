// script.js
const profileData = {
  name: "Arun Mishra",
  bio: "Data Scientist and Data Analyst ",
  github: "arunmishrarut",
  email: "john@example.com",
  location: "San Francisco, CA",
  profileImg: "assets/profile.jpeg"
};

const projects = [
  { name: "personal-website", description: "Kickstart a personal website...", language: "HTML", stars: 4925, forks: 3324, link: "https://github.com/johndoe/personal-website" },
  { name: "time-elements",      description: "Web component extensions...", language: "JavaScript", stars: 1698, forks: 98,    link: "https://github.com/johndoe/time-elements" },
  { name: "opensource.guide",   description: "Community guides for...",    language: "JavaScript", stars: 5516, forks: 3984,  link: "https://github.com/johndoe/opensource.guide" }
];

document.addEventListener("DOMContentLoaded", () => {
  // Populate profile
  document.getElementById("name").textContent   = profileData.name;
  document.getElementById("bio").textContent    = profileData.bio;
  document.getElementById("github").textContent = "@" + profileData.github;
  document.getElementById("github").href        = `https://github.com/${profileData.github}`;
  document.getElementById("email").textContent  = profileData.email;
  document.getElementById("email").href         = `mailto:${profileData.email}`;
  document.getElementById("location").textContent = profileData.location;
  document.getElementById("profile-img").src    = profileData.profileImg;

  // Populate projects grid
  const container = document.getElementById("projects-container");
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <a href="${project.link}" target="_blank" class="project-link">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="meta">
          <span class="language">${project.language}</span>
          <span>★ ${project.stars}</span>
          <span>🍴 ${project.forks}</span>
        </div>
      </a>`;
    container.appendChild(card);
  });

  // Panel elements
  const homePanel     = document.getElementById("home-panel");
  const projectsPanel = document.getElementById("projects-panel");
  const resumePanel   = document.getElementById("resume-panel");

  // Nav links
  const projectsLink = document.querySelector('a[href="#projects-panel"]');
  const resumeLink   = document.querySelector('a[href="#resume-panel"]');
  const homeLink     = document.querySelector('a[href="#home-panel"]');

  // Show Projects
  if (projectsLink) {
    projectsLink.addEventListener("click", e => {
      e.preventDefault();
      homePanel.classList.add("slide-left");
      projectsPanel.classList.add("slide-in");
      resumePanel.classList.remove("slide-in");
    });
  }

  // Show Resume
  if (resumeLink) {
    resumeLink.addEventListener("click", e => {
      e.preventDefault();
      homePanel.classList.add("slide-left");
      projectsPanel.classList.remove("slide-in");
      resumePanel.classList.add("slide-in");
    });
  }

  // Show Home
  const showHome = e => {
    e.preventDefault();
    homePanel.classList.remove("slide-left");
    projectsPanel.classList.remove("slide-in");
    resumePanel.classList.remove("slide-in");
  };
  if (homeLink) {
    homeLink.addEventListener("click", showHome);
  }
});

// Zoom logic for resume iframe
let zoomLevel = 1;
const ZOOM_STEP = 0.1;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const iframe = document.getElementById("resume-iframe");
const btnIn  = document.getElementById("zoom-in");
const btnOut = document.getElementById("zoom-out");

function updateZoom() {
  iframe.style.transform = `scale(${zoomLevel})`;
  // optionally adjust iframe container scrollbars if needed
}

btnIn.addEventListener("click", () => {
  zoomLevel = Math.min(zoomLevel + ZOOM_STEP, MAX_ZOOM);
  updateZoom();
});

btnOut.addEventListener("click", () => {
  zoomLevel = Math.max(zoomLevel - ZOOM_STEP, MIN_ZOOM);
  updateZoom();
});

