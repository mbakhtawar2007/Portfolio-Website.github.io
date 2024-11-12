// Function to create random stars
function createStars() {
    const starContainer = document.querySelector('.stars');
    const numStars = 100; // Adjust the number of stars as needed
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
  
      // Random position within the viewport
      star.style.width = `${Math.random() * 3}px`; // Randomize size
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
  
      // Random animation duration for variety
      star.style.animationDuration = `${3 + Math.random() * 3}s`;
  
      starContainer.appendChild(star);
    }
  }
  
  window.onload = createStars;
  