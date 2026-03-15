/**
 * ═══════════════════════════════════════════════════════════════
 *  PLAYER-BOOK.JS  ✦  Le Codex du Domaine du Roi Karl
 * ═══════════════════════════════════════════════════════════════
 */

// ... (ton code existant : injectCodexStyles, _descStr, SORTS_PAR_CLASSE, etc.)

const Codex = {

    // Tu peux mettre ici tes sections si tu veux les centraliser
    // sections: [ ... ],   ← à décommenter / compléter quand tu seras prêt

    init() {
        console.log("Codex → Initialisation démarrée");

        // Récupération des éléments DOM essentiels
        const trigger = document.getElementById('book-trigger');
        const close   = document.getElementById('close-book');
        const modal   = document.getElementById('player-book-modal');
        const frame   = document.querySelector('.book-frame');

        // Garde de sécurité
        if (!trigger || !close || !modal) {
            console.warn("Codex → Éléments DOM principaux manquants (book-trigger, close-book, player-book-modal)");
            return;
        }

        // Cacher le trigger par défaut (on l'affichera après vérif si besoin)
        trigger.style.display = 'none';

        // Ajout des coins décoratifs si absents
        if (frame && !frame.querySelector('.bk-corner-bl')) {
            ['bk-corner-bl', 'bk-corner-br'].forEach(cls => {
                const span = document.createElement('span');
                span.className = cls;
                span.textContent = '✦';
                frame.appendChild(span);
            });
            console.log("Codex → Coins décoratifs ajoutés");
        }

        // Ouverture du codex
        trigger.addEventListener('click', () => {
            modal.classList.add('open');
            // Appel des méthodes de rendu si elles existent
            if (typeof this.renderTOC === 'function') {
                this.renderTOC();
            }
            if (typeof this.loadChapter === 'function') {
                this.loadChapter('accueil');
            } else {
                console.warn("Codex → loadChapter n'est pas encore implémenté");
            }
        });

        // Fermeture du codex
        close.addEventListener('click', () => {
            modal.classList.remove('open');
        });

        // Fermeture en cliquant à l'extérieur (sur le fond sombre)
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });

        // Optionnel : afficher le trigger une fois l'init terminée
        // (tu peux conditionner ça avec une vérification d'authentification plus tard)
        trigger.style.display = 'flex';

        console.log("Codex → Initialisation terminée – prêt à l'emploi");
    },

    // Placeholder pour les méthodes que tu vas implémenter ensuite
    renderTOC() {
        console.log("Codex → renderTOC appelé (à implémenter)");
        // Ici viendra le code pour générer la table des matières
    },

    loadChapter(id) {
        console.log(`Codex → Chargement du chapitre : ${id} (à implémenter)`);
        // Ici viendra le code pour afficher le contenu demandé
    }

    // ... tes autres méthodes viendront ici plus tard :
    // renderAccueil() { ... },
    // renderRegles() { ... },
    // renderSorts() { ... },
    // etc.
};

// Lancement automatique une fois le DOM prêt
document.addEventListener('DOMContentLoaded', () => {
    // On expose les données globales si nécessaire
    window.SORTS_PAR_CLASSE = window.SORTS_PAR_CLASSE || SORTS_PAR_CLASSE;

    // Sécurité supplémentaire pour MAGIC_ITEMS_DATA
    if (typeof MAGIC_ITEMS_DATA !== 'undefined') {
        window.MAGIC_ITEMS_DATA = MAGIC_ITEMS_DATA;
    }

    // Démarrage
    if (typeof Codex !== 'undefined' && typeof Codex.init === 'function') {
        Codex.init();
    } else {
        console.error("Codex ou Codex.init introuvable – vérifiez la déclaration");
    }
});
