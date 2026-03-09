import { db, auth } from './firebase-config.js';
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Change la couleur du profil selon l'alignement
export function appliquerThemeAlignement(alignement) {
    const section = document.getElementById('section-profil');
    section.classList.remove('alignement-loyal', 'alignement-chaotique', 'alignement-neutre');

    if (alignement.includes('Loyal')) {
        section.classList.add('alignement-loyal');
    } else if (alignement.includes('Chaotique')) {
        section.classList.add('alignement-chaotique');
    } else {
        section.classList.add('alignement-neutre');
    }
}

// Animation et logique des dés
export async function lancerDe(statName) {
    const deElement = document.querySelector(`[data-carac="${statName}"] .carac-icone`);
    const valeurAffichage = document.getElementById(`carac-${statName}`);

    // Déclenchement de l'animation CSS
    deElement.classList.add('roule');
    
    setTimeout(async () => {
        const resultat = Math.floor(Math.random() * 20) + 1; // Un D20
        deElement.classList.remove('roule');
        valeurAffichage.innerText = resultat;

        // Sauvegarde dans Firestore
        if (auth.currentUser) {
            const userRef = doc(db, "membres", auth.currentUser.uid);
            await updateDoc(userRef, { [`carac-${statName}`]: resultat });
        }
    }, 1200);
}
