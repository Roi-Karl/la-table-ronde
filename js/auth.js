import { auth, db } from './firebase-config.js';
import { 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { appliquerThemeAlignement } from './rpg-system.js';

export function initAuth() {
    onAuthStateChanged(auth, async (user) => {
        const profilSection = document.getElementById('section-profil');
        if (user) {
            profilSection.style.display = 'block';
            chargerDonneesUtilisateur(user.uid);
        } else {
            profilSection.style.display = 'none';
        }
    });
}

async function chargerDonneesUtilisateur(uid) {
    const docRef = doc(db, "membres", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        document.getElementById('profil-alignement').innerText = data.alignement || "Inconnu";
        if (data.alignement) appliquerThemeAlignement(data.alignement);
        
        // Charger les statistiques (Force, etc.)
        ['force', 'dexterite', 'constitution', 'intelligence', 'sagesse', 'charisme'].forEach(stat => {
            const val = data[`carac-${stat}`] || "—";
            document.getElementById(`carac-${stat}`).innerText = val;
        });
    }
}

export async function deconnexion() {
    await signOut(auth);
    window.location.reload();
}
