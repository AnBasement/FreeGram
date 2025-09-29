const plans = document.getElementById("plans");
plans.addEventListener("click", () => {
  plans.classList.add("clicked-plans");
  setTimeout(() => {
    window.location.href = "plans.html";
  }, 300);
});