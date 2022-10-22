const btn = document.querySelector('.button');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    btn.classList.add('dark');
}
function toggleTheme () {
    if (btn) {
        btn.classList.toggle('dark');
        body.classList.toggle('dark');
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    }
}

btn.addEventListener("click", toggleTheme);