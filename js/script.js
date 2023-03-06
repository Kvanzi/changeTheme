const button = document.querySelector(".button");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  button.classList.add("dark");
}
function toggleTheme() {
  if (button) {
    button.classList.toggle("dark");
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  }
}

button.addEventListener("click", toggleTheme);
