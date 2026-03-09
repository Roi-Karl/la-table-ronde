export function toggleMenu() {
    const dropdown = document.getElementById('nav-dropdown');
    const btn = document.getElementById('nav-hamburger');
    const isOuvert = dropdown.classList.toggle('ouvert');
    btn.innerText = isOuvert ? '✕' : '☰';
}

export function gererModale(id, action) {
    const modale = document.getElementById(id);
    if (modale) {
        modale.style.display = (action === 'ouvrir') ? 'flex' : 'none';
        document.body.style.overflow = (action === 'ouvrir') ? 'hidden' : '';
    }
}
