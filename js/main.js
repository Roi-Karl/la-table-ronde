import { initAuth, deconnexion } from './auth.js';
import { toggleMenu, gererModale } from './ui.js';
import { lancerDe } from './rpg-system.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation
    initAuth();

    // Menu Hamburger
    document.getElementById('nav-hamburger').addEventListener('click', toggleMenu);

    // Boutons de dés (Délégation d'événement pour plus de performance)
    document.querySelectorAll('.btn-lancer-de').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const stat = e.currentTarget.getAttribute('data-carac');
            lancerDe(stat);
        });
    });

    // Déconnexion
    document.getElementById('btn-deconnexion').addEventListener('click', deconnexion);

    // Exemple de gestion de modale
    document.getElementById('btn-ouvrir-quiz').addEventListener('click', () => {
        gererModale('modal-quiz', 'ouvrir');
    });
    
    // Fermeture des modales sur clic extérieur
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            e.target.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});
