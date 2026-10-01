/**
 * Project Filtering System
 * Filters projects dynamically with animated state transitions
 */

export function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Update active button state
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedCategory = button.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "";
          setTimeout(() => {
            card.classList.remove("filtered-out");
            card.classList.add("filtered-in");
          }, 10);
        } else {
          card.classList.remove("filtered-in");
          card.classList.add("filtered-out");
          setTimeout(() => {
            if (card.classList.contains("filtered-out")) {
              card.style.display = "none";
            }
          }, 300);
        }
      });
    });
  });
}
