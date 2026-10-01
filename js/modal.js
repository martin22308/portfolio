/**
 * Project Case Study Modal Handler
 * Renders comprehensive engineering breakdowns for projects
 */

import { projects } from "./data.js";

export function initProjectModal() {
  const modalOverlay = document.getElementById("project-modal");
  const modalContainer = document.getElementById("modal-container");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (!modalOverlay || !modalContainer) return;

  function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    // Render modal content
    modalContainer.innerHTML = generateModalHTML(project);
    modalOverlay.classList.add("active");
    document.body.classList.add("modal-open");

    // Accessible focus management
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  // Event delegation for opening modals
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-project-id]");
    if (trigger) {
      e.preventDefault();
      const projectId = trigger.getAttribute("data-project-id");
      openModal(projectId);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  // Click outside to close
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Keyboard navigation: Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // Expose globally for direct triggers
  window.openProjectModal = openModal;
  window.closeProjectModal = closeModal;
}

function generateModalHTML(project) {
  const isUrbanGuardian = project.id === "urban-ai-guardian";

  // Specialized models block for Urban AI Guardian
  let specializedModelsHTML = "";
  if (project.specializedModels && project.specializedModels.length > 0) {
    specializedModelsHTML = `
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          Integrated Multi-Model YOLO Detection Grid
        </h4>
        <div class="modal-models-grid">
          ${project.specializedModels.map((m, idx) => `
            <div class="modal-model-card">
              <div class="model-header">
                <span class="model-num">0${idx + 1}</span>
                <span class="model-name">${m.name}</span>
              </div>
              <p class="model-role">${m.role}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // Architecture block if available
  let architectureHTML = "";
  if (project.architecture) {
    architectureHTML = `
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          System Architecture & Data Flow
        </h4>
        <div class="modal-architecture-box">
          <div class="arch-item">
            <span class="arch-label">Video Feeds:</span>
            <span class="arch-value">${project.architecture.inputs}</span>
          </div>
          <div class="arch-item">
            <span class="arch-label">Inference Pipeline:</span>
            <span class="arch-value">${project.architecture.pipeline}</span>
          </div>
          <div class="arch-item">
            <span class="arch-label">Serving & Operations:</span>
            <span class="arch-value">${project.architecture.services}</span>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="modal-header-banner">
      <div class="modal-tag-row">
        <span class="badge badge-accent">${project.categoryLabel || project.category}</span>
        ${project.badge ? `<span class="badge badge-subtle">${project.badge}</span>` : ""}
      </div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-tagline">${project.shortTagline}</p>
    </div>

    <div class="modal-body-content">
      <!-- Project Context -->
      ${project.context ? `
        <div class="modal-callout">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <div>
            <strong>Project Context:</strong> ${project.context}
          </div>
        </div>
      ` : ""}

      <!-- Project Artifact / Slide Preview -->
      ${(project.image || project.slideImage) ? `
        <div class="modal-image-showcase">
          <img src="${project.image || project.slideImage}" alt="${project.title} Artifact" class="modal-showcase-img" loading="lazy" />
          <div class="modal-image-caption">
            <svg class="icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Verified Project Visual Artifact from Author's Portfolio Presentation
          </div>
        </div>
      ` : ""}

      <!-- Overview -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Project Overview & Engineering Purpose
        </h4>
        <p class="modal-text">${project.overview}</p>
      </div>

      <!-- Architecture if available -->
      ${architectureHTML}

      <!-- Specialized Models if available -->
      ${specializedModelsHTML}

      <!-- My Contributions / Engineering Role -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          My Role & Technical Contributions
        </h4>
        <ul class="modal-bullet-list">
          ${project.myRole.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>

      <!-- Key Capabilities & Features -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          Key Technical Features
        </h4>
        <ul class="modal-bullet-list">
          ${project.keyFeatures.map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>

      <!-- Technologies Used -->
      <div class="modal-section">
        <h4 class="modal-section-title">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
          Technologies & Frameworks
        </h4>
        <div class="modal-tech-pills">
          ${project.technologies.map(t => `<span class="tech-pill">${t}</span>`).join("")}
        </div>
      </div>

      <!-- Verified Links / Placeholders -->
      <div class="modal-footer-actions">
        <div class="placeholder-notice">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          <span>Verified project repositories and live deployments are accessible via author portfolio:</span>
        </div>
        <div class="btn-group">
          ${project.github 
            ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline"><svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> GitHub Repository</a>`
            : `<a href="https://github.com/martin22308" target="_blank" rel="noopener noreferrer" class="btn btn-outline" title="Official GitHub Profile"><svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> ${project.githubPlaceholder}</a>`
          }
          ${project.demo 
            ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Live Demo</a>`
            : `<button class="btn btn-disabled" disabled title="Deployment available on request"><svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> ${project.demoPlaceholder}</button>`
          }
          <button class="btn btn-subtle" onclick="window.closeProjectModal()">Close Case Study</button>
        </div>
      </div>
    </div>
  `;
}
