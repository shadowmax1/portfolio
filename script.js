// Smooth Scrolling for Internal Section Links (Same Page Navigation)

// Wait until the entire window is fully loaded (including images and stylesheets)
window.onload = function() {
    // Fade out the preloader and display the content
    document.getElementById("preloader").style.display = "none";
    document.querySelector(".content").style.display = "block";
};

window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
  const href = anchor.getAttribute('href');

  // Check if the link points to an ID on the same page (starting with '#')
  if (href.startsWith('#')) {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({
              behavior: 'smooth'
          });
      });
  } else {
      // Allow normal navigation for external links (links to other pages)
      anchor.addEventListener('click', function () {
          window.location.href = href; // Navigates to the external page
      });
  }
});

function formatNumber(value) {
    if (value >= 1000) {
        return (value / 1000).toFixed(1) + 'k';
    }
    return value;
}

// Function to animate number counting with formatting option
function countUp(elementId, start, end, duration, useFormatting = false) {
    const element = document.getElementById(elementId);
    let startTime = null;

    function updateCount(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentNumber = Math.floor(progress * (end - start) + start);
        element.innerText = useFormatting ? formatNumber(currentNumber) : currentNumber;
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        }
    }
    requestAnimationFrame(updateCount);
}

// Call the countUp function for each stat with optimized duration and formatting
window.onload = function() {
    countUp("reputation-count", 0, 147, 1000); // StackOverflow Reputation
    countUp("github-count", 0, 239, 1000);     // GitHub Contributions
    countUp("subscribers-count", 0, 11900, 1000, true); // YouTube Subscribers with "k" formatting
};