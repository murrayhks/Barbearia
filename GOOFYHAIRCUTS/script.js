setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
}, 5000);

function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}
