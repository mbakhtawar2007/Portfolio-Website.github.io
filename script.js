document.addEventListener("DOMContentLoaded", () => {
  createStars();
  setSkillBarWidths();
});

function createStars() {
  const numStars = 100;
  const starsContainer = document.querySelector(".stars");

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starsContainer.appendChild(star);
  }
}

function setSkillBarWidths() {
  const skillBars = document.querySelectorAll(".progress");
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.setProperty('--skill-width', width);
  });
}
