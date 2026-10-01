/**
 * Main Application Orchestrator for Martin Emad Maher Portfolio
 * Renders structured content and handles interactivity, scrollspy, and UI states.
 */

import { 
  personalInfo, 
  coreExpertise, 
  technicalSkills, 
  projects, 
  experience, 
  education, 
  certifications, 
  achievements,
  portfolioSlides
} from "./data.js";

import { initNeuralCanvas } from "./canvas.js";
import { initProjectModal } from "./modal.js";
import { initProjectFilter } from "./filter.js";

document.addEventListener("DOMContentLoaded", () => {
  // Render Dynamic Content
  renderHeroDetails();
  renderExpertiseCards();
  renderTechnicalSkills();
  renderUrbanGuardianShowcase();
  renderProjectsGrid();
  renderSlidesGallery();
  renderExperienceTimeline();
  renderEducationGrid();
  renderCertificationsGrid();
  renderAchievements();
  renderContactDetails();

  // Initialize Interactive Modules
  initNeuralCanvas("neural-canvas");
  initProjectModal();
  initProjectFilter();
  initNavbarScroll();
  initMobileMenu();
  initScrollspy();
  initBackToTop();
  initCopyButtons();
  initContactForm();
  initCvSimulationBox();
  initSlideLightbox();
});

// Render Hero Section
function renderHeroDetails() {
  const nameEl = document.getElementById("hero-name");
  const titleEl = document.getElementById("hero-title");
  const taglineEl = document.getElementById("hero-tagline");
  const statusEl = document.getElementById("hero-status");

  if (nameEl) nameEl.textContent = personalInfo.name;
  if (titleEl) titleEl.textContent = personalInfo.title;
  if (taglineEl) taglineEl.textContent = personalInfo.tagline;
  if (statusEl) statusEl.textContent = personalInfo.status;
}

// Render Core Expertise
function renderExpertiseCards() {
  const container = document.getElementById("expertise-grid");
  if (!container) return;

  const iconMap = {
    eye: `<svg class="expertise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
    cpu: `<svg class="expertise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    mic: `<svg class="expertise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
    zap: `<svg class="expertise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    layout: `<svg class="expertise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    sliders: `<svg class="expertise-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`
  };

  container.innerHTML = coreExpertise.map(exp => `
    <div class="expertise-card">
      <div class="expertise-icon-wrapper">
        ${iconMap[exp.icon] || iconMap.cpu}
      </div>
      <h3 class="expertise-card-title">${exp.title}</h3>
      <p class="expertise-card-desc">${exp.description}</p>
      <div class="expertise-tags">
        ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// Render Technical Skills
function renderTechnicalSkills() {
  const container = document.getElementById("skills-grid");
  const softSkillsContainer = document.getElementById("soft-skills-container");

  if (container) {
    const categories = [
      technicalSkills.aiMl,
      technicalSkills.computerVision,
      technicalSkills.programming,
      technicalSkills.frameworksTools,
      technicalSkills.dataWorkflow,
      technicalSkills.webGuiHardware
    ];

    container.innerHTML = categories.map(cat => `
      <div class="skill-category-card">
        <div class="skill-cat-header">
          <h4 class="skill-cat-title">${cat.category}</h4>
        </div>
        <div class="skills-list">
          ${cat.skills.map(s => `
            <div class="skill-item">
              <span class="skill-name">${s.name}</span>
              <span class="skill-level">${s.level}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  if (softSkillsContainer && technicalSkills.softSkills) {
    softSkillsContainer.innerHTML = `
      <div class="soft-skills-card">
        <h4 class="soft-skills-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Professional & Collaborative Engineering Strengths
        </h4>
        <div class="soft-skills-badges">
          ${technicalSkills.softSkills.map(sk => `
            <div class="soft-skill-badge">
              <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${sk}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
}

// Render Flagship Urban AI Guardian Showcase (Tier 1)
function renderUrbanGuardianShowcase() {
  const guardianProject = projects.find(p => p.id === "urban-ai-guardian");
  const container = document.getElementById("urban-guardian-case-study");
  if (!container || !guardianProject) return;

  container.innerHTML = `
    <div class="flagship-container">
      <div class="flagship-badge-header">
        <span class="badge badge-accent">Flagship Project Showcase</span>
        <span class="badge badge-gold">DEPI Graduation Project</span>
      </div>

      <div class="flagship-hero-grid">
        <div class="flagship-info">
          <h2 class="flagship-title">${guardianProject.title}</h2>
          <p class="flagship-tagline">${guardianProject.shortTagline}</p>
          <p class="flagship-desc">${guardianProject.overview}</p>

          <div class="flagship-supervision">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            <div>
              <strong>Supervised by:</strong> Eng. Sara Abdelmoaty<br>
              <span class="text-secondary">Digital Egypt Pioneers Initiative (DEPI) – AI & Data Science | Microsoft Machine Learning Engineer Track</span>
            </div>
          </div>

          <div class="flagship-actions">
            <button class="btn btn-primary" data-project-id="urban-ai-guardian">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              Deep Dive Case Study
            </button>
            <a href="https://github.com/martin22308" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              View GitHub Profile
            </a>
          </div>
        </div>

        <div class="flagship-visual">
          <div class="vision-hud-card">
            <div class="hud-top-bar">
              <span class="hud-dot red"></span>
              <span class="hud-dot yellow"></span>
              <span class="hud-dot green"></span>
              <span class="hud-title">LIVE MULTI-YOLO INFERENCE ENGINE</span>
              <span class="hud-status">ACTIVE</span>
            </div>
            <div class="hud-display-screen" id="hud-simulation-screen">
              <!-- Visual Simulated Computer Vision Feed -->
              <div class="hud-grid-overlay"></div>
              <div class="bounding-box box-1">
                <span class="bbox-label">Waste: Detected</span>
                <span class="bbox-coords">[342, 180, 410, 260]</span>
              </div>
              <div class="bounding-box box-2">
                <span class="bbox-label">Bin Overflow: Triggered</span>
                <span class="bbox-coords">[120, 290, 220, 450]</span>
              </div>
              <div class="bounding-box box-3">
                <span class="bbox-label">Infrastructure: Monitored</span>
                <span class="bbox-coords">[480, 110, 560, 210]</span>
              </div>
              <div class="hud-scanline"></div>
            </div>
            <div class="hud-footer-bar">
              <span>Framework: FastAPI + Streamlit</span>
              <span>Models: 5 Specialized YOLO</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 5 Specialized Models Breakdown -->
      <div class="flagship-models-section">
        <h3 class="flagship-subheading">5 Specialized YOLO Vision Models</h3>
        <div class="models-card-row">
          ${guardianProject.specializedModels.map((m, idx) => `
            <div class="spec-model-card">
              <div class="spec-model-num">0${idx + 1}</div>
              <h4 class="spec-model-title">${m.name}</h4>
              <p class="spec-model-role">${m.role}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- System Architecture Diagram Visual -->
      <div class="architecture-diagram-container">
        <h3 class="flagship-subheading">End-to-End System Architecture</h3>
        <div class="arch-flow-grid">
          <div class="arch-step-card">
            <div class="arch-step-badge">Phase 1</div>
            <h4>Input Ingestion</h4>
            <p>Urban surveillance video feeds and municipal camera streams.</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-step-card highlight">
            <div class="arch-step-badge">Phase 2</div>
            <h4>Multi-YOLO Engine</h4>
            <p>5 Parallel models perform real-time detection & localization.</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-step-card">
            <div class="arch-step-badge">Phase 3</div>
            <h4>Alert Logic</h4>
            <p>Severity classification and incident trigger rules.</p>
          </div>
          <div class="arch-arrow">→</div>
          <div class="arch-step-card highlight">
            <div class="arch-step-badge">Phase 4</div>
            <h4>FastAPI + Streamlit</h4>
            <p>Live incident telemetry and operator monitoring dashboard.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Render Projects Showcase Grid (All Projects with Tier Hierarchy)
function renderProjectsGrid() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projects.map(proj => {
    const isTier1 = proj.tier === 1;
    const isTier2 = proj.tier === 2;

    return `
      <div class="project-card ${isTier1 ? "tier-1-card" : isTier2 ? "tier-2-card" : "tier-3-card"}" 
           data-category="${proj.category}" 
           data-id="${proj.id}">
        
        ${proj.image ? `
          <div class="project-card-image-box" data-project-id="${proj.id}" style="cursor: pointer;">
            <img src="${proj.image}" alt="${proj.title} artifact preview" class="project-card-img" loading="lazy">
            <div class="project-img-overlay">
              <span>View Case Study Artifact</span>
            </div>
          </div>
        ` : ""}

        <div class="project-card-header">
          <div class="project-badge-row">
            <span class="badge ${isTier1 ? "badge-gold" : "badge-accent"}">${proj.categoryLabel || proj.category}</span>
            ${proj.badge ? `<span class="badge badge-subtle">${proj.badge}</span>` : ""}
          </div>
          <h3 class="project-card-title">${proj.title}</h3>
          <p class="project-card-tagline">${proj.shortTagline}</p>
        </div>

        <div class="project-card-body">
          <p class="project-card-desc">${proj.overview.length > 170 ? proj.overview.slice(0, 170) + "..." : proj.overview}</p>
          
          <div class="project-tech-badges">
            ${proj.technologies.slice(0, 5).map(t => `<span class="tech-badge">${t}</span>`).join("")}
            ${proj.technologies.length > 5 ? `<span class="tech-badge-more">+${proj.technologies.length - 5}</span>` : ""}
          </div>
        </div>

        <div class="project-card-footer">
          <button class="btn btn-outline btn-sm" data-project-id="${proj.id}">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            Case Study
          </button>
          
          <div class="project-quick-links">
            <a href="https://github.com/martin22308" target="_blank" rel="noopener noreferrer" class="icon-link" title="GitHub Codebase">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Render Original Portfolio Presentation Artifacts & Slides
function renderSlidesGallery() {
  const container = document.getElementById("slides-gallery-grid");
  if (!container || !portfolioSlides) return;

  container.innerHTML = portfolioSlides.map(slide => `
    <div class="slide-card" data-lightbox-src="${slide.image}" data-lightbox-title="${slide.title} (Slide ${slide.slideNum})">
      <div class="slide-card-image-box">
        <img src="${slide.image}" alt="${slide.title}" class="slide-thumbnail" loading="lazy">
        <div class="slide-zoom-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          Zoom Slide
        </div>
      </div>
      <div class="slide-card-info">
        <div class="slide-meta-row">
          <span class="slide-num-pill">Slide 0${slide.slideNum < 10 ? '0' + slide.slideNum : slide.slideNum}</span>
          <span class="badge badge-subtle">${slide.category}</span>
        </div>
        <h4 class="slide-card-title">${slide.title}</h4>
      </div>
    </div>
  `).join("");
}

// Slide Lightbox Handler
function initSlideLightbox() {
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close-btn");

  if (!lightboxModal || !lightboxImg) return;

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-lightbox-src]");
    if (trigger) {
      e.preventDefault();
      const src = trigger.getAttribute("data-lightbox-src");
      const title = trigger.getAttribute("data-lightbox-title") || "Portfolio Slide";
      
      lightboxImg.src = src;
      lightboxCaption.textContent = title;
      lightboxModal.classList.add("active");
      document.body.classList.add("modal-open");
    }
  });

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal || e.target.closest(".lightbox-backdrop")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });
}

// Render Experience Timeline
function renderExperienceTimeline() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <span class="timeline-type">${exp.type}</span>
            <h3 class="timeline-role">${exp.role}</h3>
            <h4 class="timeline-subtitle">${exp.subtitle}</h4>
          </div>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-desc">${exp.description}</p>
        <ul class="timeline-highlights">
          ${exp.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

// Render Education
function renderEducationGrid() {
  const container = document.getElementById("education-grid");
  if (!container) return;

  container.innerHTML = education.map(edu => `
    <div class="education-card">
      <div class="edu-top">
        <span class="badge badge-accent">${edu.status}</span>
        <span class="edu-period">${edu.period}</span>
      </div>
      <h3 class="edu-degree">${edu.degree}</h3>
      <h4 class="edu-institution">${edu.institution}</h4>
      <p class="edu-location">
        <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${edu.location}
      </p>
      <ul class="edu-details-list">
        ${edu.details.map(d => `<li>${d}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

// Render Certifications Grid
function renderCertificationsGrid() {
  const container = document.getElementById("certifications-grid");
  if (!container) return;

  container.innerHTML = certifications.map(cert => `
    <div class="cert-card">
      <div class="cert-header">
        <span class="badge badge-gold">${cert.badge}</span>
        <span class="cert-date">${cert.date}</span>
      </div>
      <h4 class="cert-title">${cert.title}</h4>
      <p class="cert-issuer">
        <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        ${cert.issuer}
      </p>
    </div>
  `).join("");
}

// Render Achievements
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  if (!container) return;

  container.innerHTML = achievements.map(ach => `
    <div class="achievement-card">
      <div class="ach-metric">${ach.metric}</div>
      <h4 class="ach-title">${ach.title}</h4>
      <p class="ach-desc">${ach.description}</p>
    </div>
  `).join("");
}

// Render Contact Details
function renderContactDetails() {
  const emailEl = document.getElementById("contact-email");
  const phoneEl = document.getElementById("contact-phone");
  const locEl = document.getElementById("contact-location");
  const linkedinEl = document.getElementById("contact-linkedin");
  const githubEl = document.getElementById("contact-github");

  if (emailEl) {
    emailEl.href = `mailto:${personalInfo.email}`;
    emailEl.textContent = personalInfo.email;
  }
  if (phoneEl) {
    phoneEl.href = `tel:${personalInfo.phone}`;
    phoneEl.textContent = personalInfo.phoneFormatted;
  }
  if (locEl) {
    locEl.textContent = personalInfo.location;
  }
  if (linkedinEl) {
    linkedinEl.href = personalInfo.linkedin;
  }
  if (githubEl) {
    githubEl.href = personalInfo.github;
  }
}

// Sticky Navbar Scroll
function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });
}

// Mobile Menu Handler
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navLinks = document.getElementById("nav-links");
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !isExpanded);
    navLinks.classList.toggle("mobile-open");
    document.body.classList.toggle("mobile-menu-active");
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuBtn.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("mobile-open");
      document.body.classList.remove("mobile-menu-active");
    });
  });
}

// Scrollspy Navigation Indicator
function initScrollspy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  if (!sections.length || !navLinks.length) return;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, { passive: true });
}

// Back to Top Button
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 1-Click Copy Buttons
function initCopyButtons() {
  const copyBtns = document.querySelectorAll("[data-copy-target]");
  copyBtns.forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy-target");
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied!`;
        btn.classList.add("copied");

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("copied");
        }, 2000);
      } catch (err) {
        console.warn("Clipboard copy failed:", err);
      }
    });
  });
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#form-name")?.value || "";
    const email = form.querySelector("#form-email")?.value || "";
    const subject = form.querySelector("#form-subject")?.value || "Project Inquiry for Martin Emad Maher";
    const message = form.querySelector("#form-message")?.value || "";

    const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    // Open native email client
    window.location.href = mailtoUri;
    
    // Friendly UI confirmation
    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) {
      const prev = submitBtn.innerHTML;
      submitBtn.innerHTML = `Email Client Triggered!`;
      setTimeout(() => {
        submitBtn.innerHTML = prev;
        form.reset();
      }, 3500);
    }
  });
}

// Simulated dynamic bounding box movement in HUD
function initCvSimulationBox() {
  const screen = document.getElementById("hud-simulation-screen");
  if (!screen) return;

  const boxes = screen.querySelectorAll(".bounding-box");
  setInterval(() => {
    boxes.forEach(box => {
      const jitterX = (Math.random() - 0.5) * 6;
      const jitterY = (Math.random() - 0.5) * 6;
      box.style.transform = `translate(${jitterX}px, ${jitterY}px)`;
    });
  }, 1200);
}
