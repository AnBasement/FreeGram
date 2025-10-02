const plans = document.getElementById("plans");
plans.addEventListener("click", () => {
  plans.classList.add("clicked-button");
  setTimeout(() => {
    window.location.href = "plans.html";
  }, 300);
});

const repo = document.getElementById("repo");
repo.addEventListener("click", () => {
  repo.classList.add("clicked-button");
  setTimeout(() => {
    window.open = "https://github.com/AnBasement/FreeGram";
  }, 300);
});