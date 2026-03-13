/**
 * ═══════════════════════════════════════════════════════════════
 *  LA TABLE RONDE (MAIS CARRÉE) — Messagerie Privée
 *  Phase 4 — Conversations entre membres
 *  Stockage : Firestore  /conversations/{convId}/messages/{msgId}
 * ═══════════════════════════════════════════════════════════════
 *
 *  Structure Firestore :
 *  conversations/{convId} :
 *    participants : [uid1, uid2]
 *    pseudos      : { uid1: "Galahad", uid2: "Morgane" }
 *    lastMessage  : "Texte tronqué..."
 *    lastAt       : Timestamp
 *    unread       : { uid1: 0, uid2: 3 }
 *
 *  conversations/{convId}/messages/{msgId} :
 *    from    : uid
 *    pseudo  : "Galahad"
 *    text    : "Contenu"
 *    sentAt  : Timestamp
 */

(function injectMessagerieStyles() {
    if (document.getElementById('msg-styles')) return;
    const s = document.createElement('style');
    s.id = 'msg-styles';
    s.textContent = `
/* ── Bouton flottant messagerie ── */
#msg-trigger {
    position: fixed; bottom: 110px; right: 30px;
    width: 56px; height: 56px;
    background: linear-gradient(135deg, #7a0000, #5a0000);
    border: 2px solid #c8a84b; border-radius: 50%;
    display: none; align-items: center; justify-content: center;
    cursor: pointer; z-index: 999;
    box-shadow: 0 4px 20px rgba(0,0,0,.5);
    transition: transform .25s, box-shadow .25s;
    font-size: 1.3rem;
}
#msg-trigger:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(200,168,75,.35); }
#msg-badge {
    position: absolute; top: -4px; right: -4px;
    background: #c8a84b; color: #1e1509;
    font-size: .62rem; font-weight: bold; font-family: 'Cinzel', serif;
    min-width: 18px; height: 18px; border-radius: 9px;
    display: none; align-items: center; justify-content: center;
    padding: 0 4px; border: 1px solid #fff;
}

/* ── Modal principale ── */
#msg-modal {
    display: none; position: fixed; inset: 0;
    background: rgba(10,5,0,.88); backdrop-filter: blur(8px);
    z-index: 2100; animation: msgFI .25s ease;
}
@keyframes msgFI { from{opacity:0} to{opacity:1} }
#msg-frame {
    position: relative; width: 94%; max-width: 960px; height: 86vh;
    margin: 4vh auto;
    background: #f5ead4;
    border: 10px solid #3e2006;
    box-shadow: 0 0 0 2px #c8a84b, 0 0 0 4px #3e2006, 0 30px 100px rgba(0,0,0,.9);
    display: flex; flex-direction: column; overflow: hidden; border-radius: 2px;
}
#msg-header {
    background: linear-gradient(90deg, #2a1505, #1a0d02);
    border-bottom: 2px solid #c8a84b;
    padding: 14px 18px; display: flex; align-items: center; gap: 12px; flex-shrink: 0;
}
#msg-header h2 {
    font-family: 'Cinzel', serif; color: #c8a84b; font-size: .9rem;
    letter-spacing: .12em; text-transform: uppercase; margin: 0; flex: 1;
}
#msg-close {
    background: #7a0000; color: #f0d070; border: 1px solid #c8a84b;
    border-radius: 50%; width: 32px; height: 32px; cursor: pointer;
    font-size: 16px; display: flex; align-items: center; justify-content: center;
    transition: background .2s;
}
#msg-close:hover { background: #9a1010; }

/* ── Corps : liste + conversation ── */
#msg-body { display: flex; flex: 1; overflow: hidden; }

/* ── Panneau gauche : liste des conversations ── */
#msg-liste {
    width: 260px; min-width: 260px;
    background: linear-gradient(180deg, #2a1505, #1e0e03);
    border-right: 2px solid rgba(200,168,75,.3);
    display: flex; flex-direction: column; overflow: hidden;
}
#msg-liste-header {
    padding: 12px 14px; border-bottom: 1px solid rgba(200,168,75,.2);
    display: flex; align-items: center; gap: 8px;
}
#msg-nouvelle-btn {
    background: #7a0000; color: #f0d070; border: 1px solid #c8a84b;
    border-radius: 2px; padding: 5px 10px; cursor: pointer;
    font-family: 'Cinzel', serif; font-size: .68rem; letter-spacing: .05em;
    transition: background .2s; white-space: nowrap;
}
#msg-nouvelle-btn:hover { background: #9a1010; }
#msg-convs { list-style: none; padding: 6px 0; margin: 0; overflow-y: auto; flex: 1; }
#msg-convs::-webkit-scrollbar { width: 3px; }
#msg-convs::-webkit-scrollbar-thumb { background: rgba(200,168,75,.2); }
.msg-conv-item {
    padding: 10px 14px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,.04);
    transition: background .15s; position: relative;
}
.msg-conv-item:hover { background: rgba(200,168,75,.08); }
.msg-conv-item.active { background: rgba(200,168,75,.14); }
.msg-conv-item.active::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0;
    width: 3px; background: #c8a84b;
}
.msg-conv-nom {
    font-family: 'Cinzel', serif; font-size: .74rem; color: rgba(230,195,120,.85);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.msg-conv-apercu {
    font-size: .69rem; color: rgba(200,168,75,.45); margin-top: 2px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.msg-conv-unread {
    position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
    background: #c8a84b; color: #1e1509; border-radius: 9px;
    font-size: .6rem; font-weight: bold; padding: 1px 6px; font-family: 'Cinzel', serif;
}
#msg-vide-liste {
    padding: 20px 14px; text-align: center;
    color: rgba(200,168,75,.3); font-size: .75rem; font-style: italic;
}

/* ── Panneau droit : conversation active ── */
#msg-conv-zone {
    flex: 1; display: flex; flex-direction: column; overflow: hidden;
    background: #f5ead4;
}
#msg-conv-header {
    padding: 12px 18px; border-bottom: 1px solid rgba(200,168,75,.3);
    background: rgba(255,255,255,.3); flex-shrink: 0;
    font-family: 'Cinzel', serif; font-size: .82rem; color: #5c3210;
    display: flex; align-items: center; gap: 8px;
}
#msg-conv-titre { flex: 1; }
#msg-messages {
    flex: 1; overflow-y: auto; padding: 16px 18px; display: flex; flex-direction: column; gap: 10px;
}
#msg-messages::-webkit-scrollbar { width: 5px; }
#msg-messages::-webkit-scrollbar-thumb { background: rgba(62,32,6,.2); border-radius: 3px; }
.msg-bulle-wrap { display: flex; flex-direction: column; max-width: 72%; }
.msg-bulle-wrap.moi { align-self: flex-end; align-items: flex-end; }
.msg-bulle-wrap.eux { align-self: flex-start; align-items: flex-start; }
.msg-auteur {
    font-family: 'Cinzel', serif; font-size: .64rem; color: rgba(62,32,6,.5);
    margin-bottom: 3px; padding: 0 6px;
}
.msg-bulle {
    padding: 9px 14px; border-radius: 3px; font-size: .85rem;
    line-height: 1.6; word-break: break-word; font-family: 'Lora', Georgia, serif;
    color: #1e1509; position: relative;
}
.msg-bulle-wrap.moi .msg-bulle {
    background: linear-gradient(135deg, #7a0000, #5a0000);
    color: #f0d070; border-bottom-right-radius: 0;
}
.msg-bulle-wrap.eux .msg-bulle {
    background: rgba(255,255,255,.55); border: 1px solid rgba(200,168,75,.3);
    border-bottom-left-radius: 0;
}
.msg-heure {
    font-size: .63rem; color: rgba(62,32,6,.4); margin-top: 3px; padding: 0 6px;
}
.msg-separateur {
    text-align: center; font-size: .68rem; color: rgba(62,32,6,.35);
    font-family: 'Cinzel', serif; margin: 6px 0;
    display: flex; align-items: center; gap: 8px;
}
.msg-separateur::before, .msg-separateur::after {
    content: ''; flex: 1; height: 1px; background: rgba(200,168,75,.2);
}
#msg-vide-conv {
    flex: 1; display: flex; align-items: center; justify-content: center;
    color: rgba(62,32,6,.35); font-style: italic; font-size: .85rem;
    font-family: 'Lora', Georgia, serif; text-align: center; padding: 20px;
}
#msg-saisie-zone {
    padding: 12px 16px; border-top: 1px solid rgba(200,168,75,.25);
    background: rgba(255,255,255,.3); display: flex; gap: 10px; align-items: flex-end; flex-shrink: 0;
}
#msg-input {
    flex: 1; background: rgba(255,255,255,.6); border: 1px solid rgba(200,168,75,.4);
    border-radius: 3px; padding: 9px 13px; font-family: 'Lora', Georgia, serif;
    font-size: .85rem; color: #1e1509; resize: none; min-height: 38px; max-height: 120px;
    outline: none; transition: border-color .2s; line-height: 1.5;
}
#msg-input:focus { border-color: rgba(200,168,75,.8); }
#msg-input::placeholder { color: rgba(62,32,6,.35); font-style: italic; }
#msg-envoyer {
    background: #7a0000; color: #f0d070; border: 1px solid #c8a84b;
    border-radius: 3px; padding: 9px 16px; cursor: pointer;
    font-family: 'Cinzel', serif; font-size: .72rem; letter-spacing: .05em;
    transition: background .2s; flex-shrink: 0; align-self: flex-end;
}
#msg-envoyer:hover { background: #9a1010; }
#msg-envoyer:disabled { opacity: .4; cursor: not-allowed; }

/* ── Modal nouvelle conversation ── */
#msg-new-modal {
    display: none; position: fixed; inset: 0;
    background: rgba(10,5,0,.7); z-index: 2200;
    align-items: center; justify-content: center;
}
#msg-new-modal.open { display: flex; }
#msg-new-box {
    background: #f5ead4; border: 6px solid #3e2006;
    box-shadow: 0 0 0 2px #c8a84b, 0 20px 60px rgba(0,0,0,.8);
    padding: 26px 28px; width: 420px; max-width: 94vw; border-radius: 2px;
}
#msg-new-box h3 {
    font-family: 'Cinzel', serif; color: #7a0000; font-size: 1rem;
    text-align: center; margin: 0 0 18px; letter-spacing: .08em;
}
.msg-membre-item {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 12px; cursor: pointer; border-radius: 2px;
    border-bottom: 1px solid rgba(200,168,75,.15); transition: background .15s;
}
.msg-membre-item:hover { background: rgba(200,168,75,.1); }
.msg-membre-icone { font-size: 1.3rem; flex-shrink: 0; }
.msg-membre-nom { font-family: 'Cinzel', serif; font-size: .78rem; color: #5c3210; }
.msg-membre-rang { font-size: .68rem; color: rgba(62,32,6,.5); }
#msg-new-liste { max-height: 260px; overflow-y: auto; margin: 0 0 14px; }
#msg-new-fermer {
    width: 100%; background: transparent; border: 1px solid rgba(200,168,75,.4);
    color: rgba(62,32,6,.6); font-family: 'Cinzel', serif; font-size: .72rem;
    padding: 8px; cursor: pointer; border-radius: 2px; transition: all .2s;
}
#msg-new-fermer:hover { background: rgba(200,168,75,.1); color: #5c3210; }

/* ── Responsive ── */
@media (max-width: 600px) {
    #msg-frame { width: 100%; height: 100dvh; height: 100vh; margin: 0; border: 0; }
    #msg-liste { width: 200px; min-width: 200px; }
    #msg-trigger { bottom: 100px; right: 16px; width: 48px; height: 48px; font-size: 1.1rem; }
}
@media (max-width: 480px) {
    #msg-body { flex-direction: column; }
    #msg-liste { width: 100%; min-width: unset; height: 140px; border-right: none; border-bottom: 2px solid rgba(200,168,75,.3); }
    #msg-convs { flex-direction: row; display: flex; overflow-x: auto; overflow-y: hidden; }
    .msg-conv-item { min-width: 140px; border-bottom: none; border-right: 1px solid rgba(255,255,255,.04); }
}
`;
    document.head.appendChild(s);
})();

/* ═══════════════════════════════════════════════════════════════
 *  MESSAGERIE — Logique principale
 * ═══════════════════════════════════════════════════════════════ */

const Messagerie = {
    convActive:    null,   // id conversation active
    unsubConvs:    null,   // listener conversations
    unsubMessages: null,   // listener messages
    convCache:     {},     // cache conversations { convId: data }
    totalNonLus:   0,

    // ── Helpers Firebase ──────────────────────────────────────────
    get db()          { return window._firebaseDb; },
    get auth()        { return window._firebaseAuth; },
    get uid()         { return this.auth?.currentUser?.uid; },
    get pseudo()      { return window._profilDataCourant?.pseudo || this.auth?.currentUser?.email?.split('@')[0] || '???'; },
    col(...args)      { return window._firebaseCollection(this.db, ...args); },
    docRef(...args)   { return window._firebaseDoc(this.db, ...args); },
    q(...args)        { return window._firebaseQuery(...args); },

    // ── Init ─────────────────────────────────────────────────────
    init() {
        this._injecterHTML();
        this._bindEvents();

        // Attendre Firebase Auth
        const wait = setInterval(() => {
            if (!window._firebaseAuth) return;
            clearInterval(wait);
            window._firebaseAuth.onAuthStateChanged(user => {
                const btn = document.getElementById('msg-trigger');
                if (!btn) return;
                if (user) {
                    btn.style.display = 'flex';
                    this._ecouterConversations();
                } else {
                    btn.style.display = 'none';
                    this._arreterEcoute();
                    this._fermer();
                }
            });
        }, 200);
    },

    // ── HTML ─────────────────────────────────────────────────────
    _injecterHTML() {
        if (document.getElementById('msg-trigger')) return;

        // Bouton flottant
        const btn = document.createElement('div');
        btn.id = 'msg-trigger';
        btn.innerHTML = `💬<div id="msg-badge"></div>`;
        btn.onclick = () => this._ouvrir();
        document.body.appendChild(btn);

        // Modal principale
        const modal = document.createElement('div');
        modal.id = 'msg-modal';
        modal.innerHTML = `
        <div id="msg-frame">
            <div id="msg-header">
                <span style="font-size:1.4rem;">💬</span>
                <h2>Messagerie du Royaume</h2>
                <button id="msg-close">✕</button>
            </div>
            <div id="msg-body">
                <div id="msg-liste">
                    <div id="msg-liste-header">
                        <button id="msg-nouvelle-btn">✉️ Nouveau</button>
                    </div>
                    <ul id="msg-convs"></ul>
                    <div id="msg-vide-liste">Aucun message pour l'instant.<br><em>Commencez une conversation !</em></div>
                </div>
                <div id="msg-conv-zone">
                    <div id="msg-vide-conv">
                        ✦ Sélectionnez une conversation<br>ou démarrez-en une nouvelle ✦
                    </div>
                </div>
            </div>
        </div>`;
        document.body.appendChild(modal);

        // Modal nouvelle conversation
        const newModal = document.createElement('div');
        newModal.id = 'msg-new-modal';
        newModal.innerHTML = `
        <div id="msg-new-box">
            <h3>✉️ Nouvelle Conversation</h3>
            <div id="msg-new-liste"></div>
            <button id="msg-new-fermer">Annuler</button>
        </div>`;
        document.body.appendChild(newModal);
    },

    _bindEvents() {
        document.addEventListener('click', e => {
            if (e.target.id === 'msg-close')       this._fermer();
            if (e.target.id === 'msg-nouvelle-btn') this._ouvrirSelectionMembre();
            if (e.target.id === 'msg-new-fermer')  this._fermerSelectionMembre();
            if (e.target.id === 'msg-modal' && e.target === e.currentTarget) this._fermer();
            if (e.target.id === 'msg-envoyer')     this._envoyerMessage();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') { this._fermer(); this._fermerSelectionMembre(); }
            if (e.key === 'Enter' && !e.shiftKey && document.activeElement?.id === 'msg-input') {
                e.preventDefault();
                this._envoyerMessage();
            }
        });
    },

    // ── Ouverture / Fermeture ─────────────────────────────────────
    _ouvrir() {
        document.getElementById('msg-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Marquer comme lus si conv active
        if (this.convActive) this._marquerLu(this.convActive);
    },

    _fermer() {
        const m = document.getElementById('msg-modal');
        if (m) m.style.display = 'none';
        document.body.style.overflow = '';
    },

    // ── Écoute temps réel des conversations ───────────────────────
    _ecouterConversations() {
        if (this.unsubConvs) this.unsubConvs();
        const uid = this.uid;
        if (!uid) return;

        const q = this.q(
            this.col('conversations'),
            window._firebaseWhere('participants', 'array-contains', uid),
            window._firebaseOrderBy('lastAt', 'desc')
        );

        this.unsubConvs = window._firebaseOnSnapshot(q, snap => {
            this.convCache = {};
            let totalNonLus = 0;
            snap.forEach(d => {
                this.convCache[d.id] = { id: d.id, ...d.data() };
                totalNonLus += (d.data().unread?.[uid] || 0);
            });
            this.totalNonLus = totalNonLus;
            this._mettreAJourBadge(totalNonLus);
            this._rendreListeConvs();
        });
    },

    _arreterEcoute() {
        if (this.unsubConvs)    { this.unsubConvs();    this.unsubConvs = null; }
        if (this.unsubMessages) { this.unsubMessages(); this.unsubMessages = null; }
        this.convActive = null;
        this.convCache  = {};
    },

    // ── Badge non-lus ─────────────────────────────────────────────
    _mettreAJourBadge(n) {
        const badge = document.getElementById('msg-badge');
        if (!badge) return;
        if (n > 0) {
            badge.textContent = n > 9 ? '9+' : n;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    },

    // ── Rendu liste des conversations ─────────────────────────────
    _rendreListeConvs() {
        const ul    = document.getElementById('msg-convs');
        const vide  = document.getElementById('msg-vide-liste');
        if (!ul) return;
        const uid   = this.uid;
        const convs = Object.values(this.convCache);

        if (!convs.length) {
            ul.innerHTML = '';
            if (vide) vide.style.display = 'block';
            return;
        }
        if (vide) vide.style.display = 'none';

        ul.innerHTML = convs.map(c => {
            const autreUid   = c.participants.find(p => p !== uid);
            const autreNom   = c.pseudos?.[autreUid] || '???';
            const nonLus     = c.unread?.[uid] || 0;
            const apercu     = c.lastMessage ? this._tronquer(c.lastMessage, 38) : 'Nouveau message…';
            const actif      = c.id === this.convActive ? 'active' : '';
            return `<li class="msg-conv-item ${actif}" data-conv-id="${c.id}">
                <div class="msg-conv-nom">${this._escHtml(autreNom)}</div>
                <div class="msg-conv-apercu">${this._escHtml(apercu)}</div>
                ${nonLus ? `<span class="msg-conv-unread">${nonLus}</span>` : ''}
            </li>`;
        }).join('');

        ul.querySelectorAll('.msg-conv-item').forEach(li => {
            li.addEventListener('click', () => this._ouvrirConversation(li.dataset.convId));
        });
    },

    // ── Ouvrir une conversation ───────────────────────────────────
    async _ouvrirConversation(convId) {
        this.convActive = convId;
        this._rendreListeConvs(); // mettre à jour l'item actif

        const conv    = this.convCache[convId];
        const uid     = this.uid;
        const autreUid = conv.participants.find(p => p !== uid);
        const autreNom = conv.pseudos?.[autreUid] || '???';

        // Afficher la zone de conversation
        const zone = document.getElementById('msg-conv-zone');
        zone.innerHTML = `
            <div id="msg-conv-header">
                <span>💬</span>
                <span id="msg-conv-titre">${this._escHtml(autreNom)}</span>
            </div>
            <div id="msg-messages"></div>
            <div id="msg-saisie-zone">
                <textarea id="msg-input" placeholder="Écrivez votre message… (Entrée pour envoyer)" rows="1"></textarea>
                <button id="msg-envoyer">Envoyer ⚔️</button>
            </div>`;

        // Auto-resize textarea
        const input = document.getElementById('msg-input');
        input.addEventListener('input', () => {
            input.style.height = 'auto';
            input.style.height = Math.min(input.scrollHeight, 120) + 'px';
        });

        // Marquer comme lu
        await this._marquerLu(convId);

        // Écouter les messages en temps réel
        if (this.unsubMessages) this.unsubMessages();
        const q = this.q(
            this.col('conversations', convId, 'messages'),
            window._firebaseOrderBy('sentAt', 'asc')
        );
        this.unsubMessages = window._firebaseOnSnapshot(q, snap => {
            this._rendreMessages(snap, uid);
        });
    },

    // ── Rendu des messages ────────────────────────────────────────
    _rendreMessages(snap, uid) {
        const zone = document.getElementById('msg-messages');
        if (!zone) return;

        let lastDate = null;
        let html     = '';

        snap.forEach(d => {
            const m    = d.data();
            const moi  = m.from === uid;
            const date = m.sentAt?.toDate ? m.sentAt.toDate() : new Date();
            const jourStr = this._formatDate(date);
            const heure   = date.toLocaleTimeString('fr-CA', { hour:'2-digit', minute:'2-digit' });

            if (jourStr !== lastDate) {
                html += `<div class="msg-separateur">${jourStr}</div>`;
                lastDate = jourStr;
            }

            html += `<div class="msg-bulle-wrap ${moi ? 'moi' : 'eux'}">
                ${!moi ? `<div class="msg-auteur">${this._escHtml(m.pseudo || '???')}</div>` : ''}
                <div class="msg-bulle">${this._escHtml(m.text)}</div>
                <div class="msg-heure">${heure}</div>
            </div>`;
        });

        if (!html) {
            zone.innerHTML = `<div style="text-align:center;color:rgba(62,32,6,.35);font-style:italic;margin-top:40px;">Commencez la conversation ✦</div>`;
        } else {
            zone.innerHTML = html;
            zone.scrollTop = zone.scrollHeight;
        }
    },

    // ── Envoyer un message ────────────────────────────────────────
    async _envoyerMessage() {
        const input   = document.getElementById('msg-input');
        const btnEnv  = document.getElementById('msg-envoyer');
        if (!input || !this.convActive) return;
        const texte = input.value.trim();
        if (!texte) return;

        btnEnv.disabled = true;
        input.value = '';
        input.style.height = 'auto';

        try {
            const uid    = this.uid;
            const pseudo = this.pseudo;
            const convId = this.convActive;
            const conv   = this.convCache[convId];
            const autreUid = conv.participants.find(p => p !== uid);

            // Ajouter le message
            await window._firebaseAddDoc(
                this.col('conversations', convId, 'messages'),
                { from: uid, pseudo, text: texte, sentAt: window._firebaseServerTimestamp() }
            );

            // Mettre à jour lastMessage + incrémenter unread de l'autre
            const unreadUpdate = {};
            unreadUpdate[`unread.${autreUid}`] = (conv.unread?.[autreUid] || 0) + 1;

            await window._firebaseUpdateDoc(
                this.docRef('conversations', convId),
                { lastMessage: texte, lastAt: window._firebaseServerTimestamp(), ...unreadUpdate }
            );
        } catch(err) {
            console.error('Erreur envoi message:', err);
        } finally {
            btnEnv.disabled = false;
            input.focus();
        }
    },

    // ── Marquer comme lu ─────────────────────────────────────────
    async _marquerLu(convId) {
        const uid = this.uid;
        if (!uid || !convId) return;
        try {
            const update = {};
            update[`unread.${uid}`] = 0;
            await window._firebaseUpdateDoc(this.docRef('conversations', convId), update);
        } catch(e) { /* conv peut ne pas exister encore */ }
    },

    // ── Sélection d'un membre pour nouvelle conv ──────────────────
    async _ouvrirSelectionMembre() {
        const modal = document.getElementById('msg-new-modal');
        const liste = document.getElementById('msg-new-liste');
        if (!modal || !liste) return;

        modal.classList.add('open');
        liste.innerHTML = `<div style="text-align:center;padding:20px;color:rgba(62,32,6,.45);font-style:italic;">Chargement des membres…</div>`;

        try {
            const uid      = this.uid;
            const getDocs  = window._firebaseGetDocs;
            const snap     = await getDocs(this.col('membres'));
            const membres  = [];
            snap.forEach(d => {
                if (d.id !== uid) membres.push({ uid: d.id, ...d.data() });
            });

            // Filtrer ceux avec qui on a déjà une conv
            const dejaChataves = new Set(
                Object.values(this.convCache).map(c => c.participants.find(p => p !== uid))
            );

            if (!membres.length) {
                liste.innerHTML = `<div style="text-align:center;padding:20px;color:rgba(62,32,6,.45);font-style:italic;">Aucun autre membre trouvé.</div>`;
                return;
            }

            liste.innerHTML = membres.map(m => {
                const nom   = m.pseudo || m.email?.split('@')[0] || '???';
                const grade = this._gradeLabel(m);
                const dejaConv = dejaChataves.has(m.uid);
                return `<div class="msg-membre-item" data-uid="${m.uid}" data-nom="${this._escAttr(nom)}" ${dejaConv ? 'style="opacity:.6"' : ''}>
                    <span class="msg-membre-icone">${m.race?.split('|')[1] || '👤'}</span>
                    <div>
                        <div class="msg-membre-nom">${this._escHtml(nom)}${dejaConv ? ' <span style="font-size:.65rem;opacity:.6;">(en cours)</span>' : ''}</div>
                        <div class="msg-membre-rang">${grade}</div>
                    </div>
                </div>`;
            }).join('');

            liste.querySelectorAll('.msg-membre-item').forEach(el => {
                el.addEventListener('click', () => {
                    this._demarrerConversation(el.dataset.uid, el.dataset.nom);
                    this._fermerSelectionMembre();
                });
            });

        } catch(err) {
            console.error('Erreur chargement membres:', err);
            liste.innerHTML = `<div style="text-align:center;padding:20px;color:#c00;font-size:.8rem;">Erreur : ${err.message}</div>`;
        }
    },

    _fermerSelectionMembre() {
        document.getElementById('msg-new-modal')?.classList.remove('open');
    },

    // ── Démarrer ou reprendre une conversation ────────────────────
    async _demarrerConversation(autreUid, autreNom) {
        const uid    = this.uid;
        const pseudo = this.pseudo;

        // Chercher si une conv existe déjà
        const existante = Object.values(this.convCache).find(c =>
            c.participants.includes(uid) && c.participants.includes(autreUid)
        );

        if (existante) {
            this._ouvrir();
            this._ouvrirConversation(existante.id);
            return;
        }

        // Créer la conversation
        try {
            const pseudos = {};
            pseudos[uid]      = pseudo;
            pseudos[autreUid] = autreNom;
            const unread  = {};
            unread[uid]      = 0;
            unread[autreUid] = 0;

            const ref = await window._firebaseAddDoc(this.col('conversations'), {
                participants: [uid, autreUid],
                pseudos,
                lastMessage: '',
                lastAt: window._firebaseServerTimestamp(),
                unread,
                creeLe: window._firebaseServerTimestamp(),
            });

            this._ouvrir();
            // Attendre que le listener temps-réel ait mis à jour convCache
            await new Promise(r => setTimeout(r, 600));
            this._ouvrirConversation(ref.id);
        } catch(err) {
            console.error('Erreur création conversation:', err);
        }
    },

    // ── Utilitaires ───────────────────────────────────────────────
    _escHtml(str) {
        return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    },
    _escAttr(str) {
        return String(str).replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    },
    _tronquer(str, n) {
        return str.length > n ? str.slice(0, n) + '…' : str;
    },
    _formatDate(date) {
        const auj = new Date();
        const hier = new Date(auj); hier.setDate(hier.getDate() - 1);
        if (date.toDateString() === auj.toDateString())  return "Aujourd'hui";
        if (date.toDateString() === hier.toDateString()) return "Hier";
        return date.toLocaleDateString('fr-CA', { day:'numeric', month:'long', year:'numeric' });
    },
    _gradeLabel(m) {
        const grades = window.RPG_GRADES || [];
        const jours  = m.jours_consecutifs || 0;
        let grade = grades[0]?.nom || '';
        for (const g of grades) { if (jours >= g.seuil) grade = g.nom; }
        return grade;
    },
};

// Exposition globale pour ouvrir une conversation depuis la cour (fiche membre)
window.Messagerie = Messagerie;
window.ouvrirMessageriePrive = (autreUid, autreNom) => {
    Messagerie._ouvrir();
    setTimeout(() => Messagerie._demarrerConversation(autreUid, autreNom), 300);
};

document.addEventListener('DOMContentLoaded', () => Messagerie.init());
