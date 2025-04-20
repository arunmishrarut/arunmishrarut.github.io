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
  {
    "name": "Diffusion-Models-Time-Series-Forecasting",
    "description": "Built generative diffusion-based models to forecast complex time series patterns with higher accuracy.",
    "language": ["Python", "Jupyter Notebook", "PyTorch", "Diffusion Models", "NumPy", "Pandas", "Matplotlib"],
    "link": "https://github.com/rohit-vernekar/Diffusion-Models-Time-Series-Forecasting"
  },
  {
    "name": "Portfolio-website-using-JS-HTML-CSS",
    "description": "Designed and deployed a responsive personal portfolio website using HTML, CSS, and JavaScript.",
    "language": ["HTML", "JavaScript", "CSS"],
    "link": "https://github.com/arunmishrarut/Portfolio-website-using-JS-HTML-css.git"
  },
  {
    "name": "Ensembled-Model-Credit-Card-Fraud-Detection",
    "description": "Developed an ensemble ML model to detect fraudulent credit card transactions with improved precision.",
    "language": ["Python", "Jupyter Notebook"],
    "link": "https://github.com/arunmishrarut/ensembled_model_credit_card_fraud_detection"
  },
  {
    "name": "Bellman-Conformal-Inference-BCI-Time-Series-Prediction",
    "description": "Implemented Bellman Conformal Inference to generate reliable prediction intervals for time series forecasting.",
    "language": ["Python"],
    "link": "https://github.com/arunmishrarut/Bellman_Conformal_Inference_BCI_Time_Series_Prediction"
  },
  {
    "name": "Dengue-Prediction-Model",
    "description": "Built regression-based models to predict dengue outbreaks using historical and environmental data.",
    "language": ["Python", "Jupyter Notebook"],
    "link": "https://github.com/arunmishrarut/Dengue_Prediction_Model"
  },
  {
    "name": "Regression-Analysis-on-Household-Victimization",
    "description": "Performed regression analysis to identify key factors associated with household victimization rates.",
    "language": ["Python"],
    "link": "https://github.com/arunmishrarut/Regression_Analysis_on_Household_Victimization"
  },
  {
    "name": "Bayesian-Logistic-Regression-for-Diabetes-Prediction",
    "description": "Applied Bayesian logistic regression to predict diabetes risk while quantifying model uncertainty.",
    "language": ["Python"],
    "link": "https://github.com/arunmishrarut/Bayesian_Logistic_Regression_for_Diabetes_Prediction"
  },
  {
    "name": "Twitter-Search-App",
    "description": "Built a Python-based search interface leveraging the Twitter API to retrieve and display real-time tweets.",
    "language": ["Python", "Jupyter Notebook"],
    "link": "https://github.com/arunmishrarut/Twitter_Search_App"
  },
  {
    "name": "Sentiment-Analysis-of-Popular-Songs-Lyrics",
    "description": "Performed sentiment analysis on song lyrics to uncover emotional trends across popular music.",
    "language": ["R"],
    "link": "https://github.com/arunmishrarut/Sentiment_Analysis_of_Popular_Songs-Lyrics-"
  }
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
          <span class="language">${Array.isArray(project.language) ? project.language.join('&nbsp;&nbsp;&nbsp;') : project.language}</span>   
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

