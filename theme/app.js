document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkmode-toggle");
  const body = document.body;

  // Check for saved theme preference in localStorage
  const isDarkMode = localStorage.getItem("theme") === "dark";

  // Apply saved theme
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  // Toggle button click event
  darkModeToggle.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });

  function enableDarkMode() {
    body.classList.add("dark-mode");
    body.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkModeToggle.innerHTML = `<i class="fa-regular fa-sun"></i>`; // Sun icon for light mode toggle
  }

  function disableDarkMode() {
    body.classList.remove("dark-mode");
    body.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
    darkModeToggle.innerHTML = `<i class="fa-regular fa-moon"></i>`; // Moon icon for dark mode toggle
  }
});
