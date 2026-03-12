/**
 * PLAYER-BOOK.JS 
 * Le cerveau du Codex - Domaine du Roi Karl
 */

const Codex = {
    // Configuration des chapitres
    sections: [
        { id: 'accueil', tit: 'Introduction', ico: '📜' },
        { id: 'races',   tit: 'Les Peuples',  ico: '🧑' },
        { id: 'classes', tit: 'Les Vocations', ico: '⚔️' },
        { id: 'armes',   tit: 'L\'Arsenal',   ico: '🗡️' },
        { id: 'grades',  tit: 'La Hiérarchie', ico: '👑' },
        { id: 'lois',    tit: 'Les Lois',     ico: '⚖️' }
    ],

    init() {
        const trigger = document.getElementById('book-trigger');
        const close = document.getElementById('close-book');
        
        trigger.onclick = () => {
            document.getElementById('player-book-modal').style.display = 'block';
            this.renderTOC();
            this.loadChapter('accueil');
        };

        close.onclick = () => {
            document.getElementById('player-book-modal').style.display = 'none';
        };
    },

    renderTOC() {
        const toc = document.getElementById('book-toc');
        toc.innerHTML = this.sections.map(s => `
            <li onclick="Codex.loadChapter('${s.id}')">${s.ico} ${s.tit}</li>
        `).join('');
    },

    loadChapter(id) {
        const display = document.getElementById('book-display-area');
        let html = '';

        switch(id) {
            case 'accueil':
                html = `
                    <h1 class="cinzel">Codex du Royaume</h1>
                    <div class="ornament">❧</div>
                    <div class="legal-notice">
                        Note : Dans ce recueil, le genre masculin est utilisé sans discrimination et uniquement dans le but d'alléger le texte.
                    </div>
                    <p class="book-lead">Bienvenue, noble voyageur, dans les archives sacrées du Domaine du Roi Karl. Ce recueil contient les savoirs essentiels pour forger votre destinée.</p>
                    <div style="text-align:center; margin: 40px 0; font-size: 4rem; opacity: 0.1;">🏰</div>
                `;
                break;

            case 'races':
                html = `<h1 class="cinzel">Les Peuples</h1><div class="ornament">❧</div>`;
                for (let [nom, data] of Object.entries(window.RPG_RACES)) {
                    html += `
                        <div class="book-card">
                            <h2>${data.icone} ${nom}</h2>
                            <p><em>${data.tooltip}</em></p>
                            <p>${data.description_joueur}</p>
                            <div style="margin-top:10px;">
                                ${Object.entries(data.bonus).map(([s, v]) => `<span class="stat-tag">${s.toUpperCase()} +${v}</span>`).join('')}
                            </div>
                        </div>`;
                }
                break;

            case 'classes':
                html = `<h1 class="cinzel">Les Vocations</h1><div class="ornament">❧</div>`;
                for (let [nom, data] of Object.entries(window.RPG_CLASSES)) {
                    html += `
                        <div class="book-card">
                            <h2>${data.icone} ${nom}</h2>
                            <p>${data.description}</p>
                            <p><strong>Dés de Vie :</strong> <span class="stat-tag">${data.des_vie}</span></p>
                        </div>`;
                }
                break;

            case 'armes':
                html = `<h1 class="cinzel">L'Arsenal</h1><div class="ornament">❧</div>
                        <table class="arsenal-table">
                            <thead><tr><th>Arme</th><th>Dégâts</th><th>Type</th><th>Prix</th></tr></thead>
                            <tbody>`;
                for (let [nom, a] of Object.entries(window.MATERIEL_ARMES)) {
                    html += `<tr>
                        <td><strong>${a.icone} ${nom}</strong></td>
                        <td>${a.degats}</td>
                        <td>${a.type_degats}</td>
                        <td><span style="color:#b8860b; font-weight:bold;">${a.prix}</span></td>
                    </tr>`;
                }
                html += `</tbody></table>`;
                break;

            case 'grades':
                html = `<h1 class="cinzel">Noblesse & Rangs</h1><div class="ornament">❧</div>
                        <p>La hiérarchie est le pilier de notre ordre. Voici les titres octroyés par le Roi Karl :</p>
                        <ul class="book-trait-list" style="list-style:none; padding:0;">
                            ${window.RPG_GRADES.map(g => `<li style="padding:15px; border-bottom:1px solid rgba(0,0,0,0.05); font-family:'Cinzel'; color:#8b0000;">🛡️ ${g}</li>`).join('')}
                        </ul>`;
                break;

            case 'lois':
                html = `
                    <h1 class="cinzel">Lois du Royaume</h1>
                    <div class="ornament">❧</div>
                    <div class="book-card">
                        <h3>📜 I. Courtoisie</h3><p>L'insulte envers un frère ou une sœur d'armes est proscrite.</p>
                        <h3>📜 II. Allégeance</h3><p>Le respect du Roi Karl et du Conseil est absolu.</p>
                        <h3>📜 III. Sagesse</h3><p>Le respect de la vie privée des membres est sacré.</p>
                        <h3>📜 IV. Honneur</h3><p>La fourberie et la triche mènent au bannissement.</p>
                    </div>`;
                break;
        }

        display.innerHTML = `<div class="animate-fade-in">${html}</div>`;
        display.scrollTop = 0;
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => Codex.init());