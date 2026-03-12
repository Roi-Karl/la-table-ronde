/**
 * ═══════════════════════════════════════════════════════════════
 *  PLAYER-BOOK.JS  ✦  Le Codex du Domaine du Roi Karl
 *  Design : Parchemin Vivant — Version Enrichie
 * ═══════════════════════════════════════════════════════════════
 */

/* ── Injection du CSS du Codex ───────────────────────────────── */
(function injectCodexStyles() {
    if (document.getElementById('codex-styles')) return;
    const style = document.createElement('style');
    style.id = 'codex-styles';
    style.textContent = `
/* ═══════════════════════════════════════
   CODEX — VARIABLES & RESET
════════════════════════════════════════ */
:root {
    --bk-parchment:   #f5ead4;
    --bk-parchment2:  #ede0c4;
    --bk-parchment3:  #e8d5a8;
    --bk-leather:     #3e2006;
    --bk-leather2:    #5c3210;
    --bk-ink:         #1e1509;
    --bk-royal:       #7a0000;
    --bk-royal2:      #5a0000;
    --bk-gold:        #c8a84b;
    --bk-gold2:       #a8882b;
    --bk-gold-light:  #f0d070;
    --bk-shadow:      rgba(0,0,0,0.6);
    --bk-sidebar-w:   260px;
    --bk-radius:      4px;
    --bk-font-body:   'Lato', 'Georgia', serif;
    --bk-font-title:  'Cinzel', 'Times New Roman', serif;
    --bk-font-deco:   'MedievalSharp', 'Cinzel Decorative', serif;
}

/* ── Trigger Sceau ─────────────────────────────────────── */
.book-icon-trigger {
    position: fixed; bottom: 30px; right: 30px;
    width: 72px; height: 72px;
    background: radial-gradient(circle at 40% 35%, var(--bk-leather2), var(--bk-leather));
    border: 3px solid var(--bk-gold);
    border-radius: 50%;
    display: flex; justify-content: center; align-items: center;
    cursor: pointer; z-index: 1000;
    box-shadow: 0 6px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,220,100,0.2);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                box-shadow 0.3s ease;
}
.book-icon-trigger:hover {
    transform: scale(1.12) rotate(-8deg);
    box-shadow: 0 10px 40px rgba(200,168,75,0.4), inset 0 1px 0 rgba(255,220,100,0.3);
}
.book-icon-trigger::after {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1px solid rgba(200,168,75,0.4);
    border-radius: 50%;
    pointer-events: none;
}
.seal-inner { font-size: 34px; position: relative; z-index: 1; }

/* ── Modale Principale ─────────────────────────────────── */
.book-modal {
    display: none; position: fixed; z-index: 2000;
    inset: 0;
    background: rgba(10,5,0,0.92);
    backdrop-filter: blur(10px);
    animation: codexFadeIn 0.3s ease;
}
@keyframes codexFadeIn { from { opacity:0 } to { opacity:1 } }

.book-frame {
    position: relative;
    width: 96%; max-width: 1280px; height: 88vh;
    margin: 3vh auto;
    background: var(--bk-parchment);
    border: 12px solid var(--bk-leather);
    border-radius: 2px;
    box-shadow:
        0 0 0 3px var(--bk-gold2),
        0 0 0 5px var(--bk-leather),
        0 40px 120px rgba(0,0,0,0.9),
        inset 0 0 60px rgba(0,0,0,0.08);
    display: flex; flex-direction: column;
    overflow: hidden;
}

/* Coins ornementaux */
.book-frame::before, .book-frame::after,
.book-frame .bk-corner-bl, .book-frame .bk-corner-br {
    content: '✦';
    position: absolute;
    font-size: 18px;
    color: var(--bk-gold);
    line-height: 1;
    z-index: 5;
    pointer-events: none;
}
.book-frame::before { top: 6px; left: 8px; }
.book-frame::after  { top: 6px; right: 8px; }
.book-frame .bk-corner-bl { bottom: 6px; left: 8px; }
.book-frame .bk-corner-br { bottom: 6px; right: 8px; }

/* ── Bouton Fermer ─────────────────────────────────────── */
.book-close-btn {
    position: absolute; right: 14px; top: 14px;
    background: var(--bk-royal);
    color: var(--bk-gold-light);
    border: 2px solid var(--bk-gold2);
    border-radius: 50%;
    width: 38px; height: 38px;
    cursor: pointer; font-size: 20px; font-weight: bold;
    line-height: 1; display: flex; align-items: center; justify-content: center;
    z-index: 10;
    box-shadow: 0 3px 12px rgba(0,0,0,0.5);
    transition: all 0.2s;
}
.book-close-btn:hover {
    background: #9a1010;
    transform: scale(1.1);
    box-shadow: 0 4px 18px rgba(0,0,0,0.6);
}

/* ── Layout Livre ──────────────────────────────────────── */
.book-container {
    display: flex; height: 100%; overflow: hidden;
}

/* ── Barre latérale ────────────────────────────────────── */
.book-sidebar {
    width: var(--bk-sidebar-w);
    min-width: var(--bk-sidebar-w);
    background: linear-gradient(180deg, #2a1505 0%, #1a0d02 100%);
    border-right: 3px solid var(--bk-gold2);
    display: flex; flex-direction: column;
    overflow: hidden;
}

.book-sidebar-header {
    padding: 28px 20px 16px;
    text-align: center;
    border-bottom: 1px solid rgba(200,168,75,0.25);
    background: linear-gradient(180deg, rgba(200,168,75,0.08), transparent);
}
.book-sidebar-header .sidebar-blason {
    font-size: 36px; margin-bottom: 6px; display: block;
    filter: drop-shadow(0 2px 8px rgba(200,168,75,0.4));
}
.book-sidebar-header h2 {
    font-family: var(--bk-font-title);
    color: var(--bk-gold);
    font-size: 0.95rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin: 0;
}

/* Barre de recherche */
.book-search-bar {
    padding: 12px 14px;
    border-bottom: 1px solid rgba(200,168,75,0.15);
}
.book-search-bar input {
    width: 100%;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(200,168,75,0.3);
    border-radius: var(--bk-radius);
    color: rgba(255,220,120,0.8);
    padding: 7px 10px;
    font-size: 0.8rem;
    font-family: var(--bk-font-body);
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    box-sizing: border-box;
}
.book-search-bar input::placeholder { color: rgba(200,168,75,0.35); }
.book-search-bar input:focus {
    border-color: rgba(200,168,75,0.7);
    background: rgba(255,255,255,0.1);
}

/* TOC */
#book-toc {
    list-style: none;
    padding: 10px 0;
    margin: 0;
    overflow-y: auto;
    flex: 1;
}
#book-toc::-webkit-scrollbar { width: 4px; }
#book-toc::-webkit-scrollbar-track { background: transparent; }
#book-toc::-webkit-scrollbar-thumb { background: rgba(200,168,75,0.25); border-radius: 2px; }

#book-toc li {
    padding: 0;
    cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    transition: all 0.2s;
    position: relative;
}
#book-toc li > .toc-item {
    display: flex; align-items: center; gap: 10px;
    padding: 11px 18px;
    font-family: var(--bk-font-title);
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    color: rgba(230,195,120,0.75);
    transition: all 0.2s;
}
#book-toc li .toc-ico { font-size: 16px; flex-shrink: 0; }
#book-toc li:hover > .toc-item { color: var(--bk-gold-light); background: rgba(200,168,75,0.1); }
#book-toc li.active > .toc-item {
    color: var(--bk-gold-light);
    background: rgba(200,168,75,0.15);
    font-weight: bold;
}
#book-toc li.active::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, var(--bk-gold), var(--bk-gold2));
    border-radius: 0 2px 2px 0;
}

/* Sous-items TOC */
.toc-sub { list-style: none; padding: 0; margin: 0; display: none; }
#book-toc li.open .toc-sub { display: block; }
.toc-sub li > .toc-item {
    font-size: 0.72rem;
    padding-left: 36px;
    color: rgba(200,168,75,0.5);
}
.toc-sub li:hover > .toc-item,
.toc-sub li.active > .toc-item { color: rgba(230,195,120,0.85); }

/* Flèche expand */
.toc-arrow {
    margin-left: auto;
    font-size: 9px;
    opacity: 0.5;
    transition: transform 0.25s;
}
#book-toc li.open > .toc-item .toc-arrow { transform: rotate(90deg); opacity: 1; }

/* Pied sidebar */
.book-sidebar-footer {
    padding: 14px;
    text-align: center;
    border-top: 1px solid rgba(200,168,75,0.2);
    color: rgba(200,168,75,0.3);
    font-family: var(--bk-font-title);
    font-size: 22px;
    letter-spacing: 0.3em;
}

/* ── Zone de contenu ───────────────────────────────────── */
.book-content {
    flex: 1;
    overflow-y: auto;
    position: relative;
    background:
        radial-gradient(ellipse at 15% 15%, rgba(200,168,75,0.04) 0%, transparent 60%),
        radial-gradient(ellipse at 85% 85%, rgba(120,0,0,0.04) 0%, transparent 60%),
        var(--bk-parchment);
}
.book-content::-webkit-scrollbar { width: 8px; }
.book-content::-webkit-scrollbar-track { background: rgba(0,0,0,0.06); }
.book-content::-webkit-scrollbar-thumb {
    background: rgba(62,32,6,0.3);
    border-radius: 4px;
    border: 1px solid rgba(200,168,75,0.2);
}

.book-page {
    padding: 50px 60px 60px;
    max-width: 900px;
    margin: 0 auto;
    color: var(--bk-ink);
    animation: pageReveal 0.35s ease;
}
@keyframes pageReveal {
    from { opacity:0; transform: translateY(8px) }
    to   { opacity:1; transform: translateY(0) }
}

/* ── Typographie ───────────────────────────────────────── */
.book-page h1.page-title {
    font-family: var(--bk-font-title);
    font-size: 2.1rem;
    color: var(--bk-royal);
    text-align: center;
    margin: 0 0 6px;
    letter-spacing: 0.06em;
    text-shadow: 1px 1px 0 rgba(200,168,75,0.2);
}
.book-page h2 {
    font-family: var(--bk-font-title);
    font-size: 1.25rem;
    color: var(--bk-royal);
    margin: 28px 0 12px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(200,168,75,0.4);
    display: flex; align-items: center; gap: 10px;
}
.book-page h3 {
    font-family: var(--bk-font-title);
    font-size: 1rem;
    color: var(--bk-leather2);
    margin: 20px 0 8px;
}
.book-page p {
    line-height: 1.8;
    font-size: 0.95rem;
    margin: 0 0 14px;
    font-family: var(--bk-font-body);
}

/* Ornement central */
.ornament-center {
    text-align: center;
    color: var(--bk-gold2);
    font-size: 1.6rem;
    margin: 8px 0 24px;
    letter-spacing: 0.5em;
    opacity: 0.7;
}
.ornament-divider {
    display: flex; align-items: center; gap: 12px;
    margin: 30px 0;
    color: var(--bk-gold2); opacity: 0.5;
}
.ornament-divider::before,
.ornament-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--bk-gold2), transparent);
}

/* Encadré introduction */
.book-intro-box {
    background: rgba(255,255,255,0.35);
    border: 1px solid rgba(200,168,75,0.4);
    border-radius: var(--bk-radius);
    padding: 22px 28px;
    margin: 0 0 30px;
    font-style: italic;
    font-size: 1rem;
    line-height: 1.85;
    color: var(--bk-leather);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.06);
}
.book-intro-box cite {
    display: block; margin-top: 10px; text-align: right;
    font-size: 0.82rem; color: var(--bk-royal); opacity: 0.7;
    font-style: normal; font-family: var(--bk-font-title);
}

/* Note légale */
.legal-notice {
    font-size: 0.8rem;
    border: 1px dashed rgba(62,32,6,0.2);
    border-radius: var(--bk-radius);
    padding: 10px 16px;
    text-align: center;
    font-style: italic;
    margin-bottom: 28px;
    color: rgba(30,21,9,0.55);
    background: rgba(255,255,255,0.2);
}

/* ── Cartes Races & Classes ───────────────────────────── */
.book-card {
    background: rgba(255,255,255,0.38);
    border: 1px solid rgba(200,168,75,0.35);
    border-radius: var(--bk-radius);
    padding: 22px 24px;
    margin-bottom: 28px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6);
    transition: box-shadow 0.2s;
}
.book-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.6); }

.book-card-header {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 14px; padding-bottom: 12px;
    border-bottom: 1px solid rgba(200,168,75,0.3);
}
.book-card-icon { font-size: 2.2rem; line-height: 1; }
.book-card-title { flex: 1; }
.book-card-title h2 {
    margin: 0; padding: 0; border: none;
    font-family: var(--bk-font-title);
    font-size: 1.2rem; color: var(--bk-royal);
}
.book-card-title .card-subtitle {
    font-size: 0.78rem; color: rgba(62,32,6,0.5);
    font-style: italic; margin-top: 2px;
}

/* Grille de stats */
.stat-grid {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin: 12px 0;
}
.stat-tag {
    background: var(--bk-leather);
    color: var(--bk-gold);
    padding: 3px 10px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-family: var(--bk-font-title);
    letter-spacing: 0.05em;
    white-space: nowrap;
    border: 1px solid rgba(200,168,75,0.3);
}
.stat-tag.positive { background: #1a3a1a; color: #7ecb7e; }
.stat-tag.dv       { background: #3a1a00; color: #e8a060; }

/* Liste de traits */
.trait-list { list-style: none; padding: 0; margin: 12px 0 0; }
.trait-list li {
    display: flex; gap: 10px; padding: 8px 0;
    border-bottom: 1px solid rgba(0,0,0,0.06);
    font-size: 0.88rem; line-height: 1.55;
    align-items: flex-start;
}
.trait-list li:last-child { border: none; }
.trait-ico { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }
.trait-name { font-weight: bold; color: var(--bk-royal); margin-right: 4px; }

/* Accordéon description */
.card-desc-toggle {
    display: inline-flex; align-items: center; gap: 6px;
    margin-top: 12px;
    cursor: pointer;
    font-size: 0.8rem;
    color: var(--bk-royal2);
    font-family: var(--bk-font-title);
    border: 1px solid rgba(122,0,0,0.2);
    border-radius: 2px;
    padding: 4px 10px;
    background: rgba(122,0,0,0.05);
    transition: all 0.2s;
    user-select: none;
}
.card-desc-toggle:hover { background: rgba(122,0,0,0.12); }
.card-desc-body {
    display: none; margin-top: 14px;
    padding: 14px 16px;
    background: rgba(255,255,255,0.25);
    border-left: 3px solid var(--bk-gold2);
    font-size: 0.87rem; line-height: 1.75;
    white-space: pre-line;
    color: #2c241a;
    border-radius: 0 var(--bk-radius) var(--bk-radius) 0;
}
.card-desc-body.open { display: block; animation: pageReveal 0.25s ease; }

/* ── Tableau Arsenal ───────────────────────────────────── */
.arsenal-filters {
    display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;
}
.arsenal-filter-btn {
    padding: 5px 14px;
    border: 1px solid rgba(200,168,75,0.4);
    border-radius: 2px;
    background: transparent;
    color: var(--bk-leather2);
    font-family: var(--bk-font-title);
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.2s;
}
.arsenal-filter-btn:hover, .arsenal-filter-btn.active {
    background: var(--bk-leather);
    color: var(--bk-gold);
    border-color: var(--bk-gold2);
}

.arsenal-table {
    width: 100%; border-collapse: collapse; margin-top: 10px;
    font-size: 0.87rem;
}
.arsenal-table thead tr {
    background: var(--bk-leather);
}
.arsenal-table th {
    color: var(--bk-gold);
    padding: 10px 14px; text-align: left;
    font-family: var(--bk-font-title);
    font-size: 0.78rem; letter-spacing: 0.05em;
    font-weight: normal;
}
.arsenal-table td {
    padding: 10px 14px;
    border-bottom: 1px solid rgba(0,0,0,0.07);
    vertical-align: middle;
}
.arsenal-table tbody tr { transition: background 0.15s; }
.arsenal-table tbody tr:hover { background: rgba(200,168,75,0.1); }
.arsenal-table .hidden { display: none; }

/* Type dégats */
.dmg-tag {
    display: inline-block;
    font-size: 0.72rem; padding: 1px 7px;
    border-radius: 2px; font-family: var(--bk-font-title);
}
.dmg-tag.tranchant  { background: #3a1a1a; color: #e88080; }
.dmg-tag.perforant  { background: #1a2a3a; color: #80aacc; }
.dmg-tag.contondant { background: #2a2a1a; color: #c0b060; }

.price-tag { color: var(--bk-gold2); font-weight: bold; font-family: var(--bk-font-title); }

/* Propriétés */
.prop-list { display: flex; flex-wrap: wrap; gap: 4px; }
.prop { font-size: 0.7rem; color: rgba(62,32,6,0.55); font-style: italic; }

/* ── Grades ─────────────────────────────────────────────── */
.grade-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 16px;
    margin-top: 20px;
}
.grade-card {
    background: rgba(255,255,255,0.35);
    border-radius: var(--bk-radius);
    border: 1px solid rgba(200,168,75,0.3);
    padding: 18px 16px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
}
.grade-card::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
}
.grade-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    transform: translateY(-2px);
}
.grade-card-header {
    display: flex; align-items: center; gap: 10px; margin-bottom: 8px;
}
.grade-ico { font-size: 1.6rem; }
.grade-name { font-family: var(--bk-font-title); font-size: 0.9rem; color: var(--bk-royal); }
.grade-seuil { font-size: 0.72rem; color: rgba(62,32,6,0.45); margin-top: 1px; }
.grade-tooltip { font-size: 0.8rem; font-style: italic; color: rgba(30,21,9,0.6); line-height: 1.5; }

/* Panneau détail grade */
.grade-detail-panel {
    display: none;
    margin-top: 20px;
    padding: 24px 28px;
    background: rgba(255,255,255,0.4);
    border: 1px solid rgba(200,168,75,0.4);
    border-radius: var(--bk-radius);
    animation: pageReveal 0.25s ease;
}
.grade-detail-panel.open { display: block; }

/* ── Lois ────────────────────────────────────────────────── */
.law-item {
    display: flex; gap: 18px; align-items: flex-start;
    padding: 22px 0;
    border-bottom: 1px solid rgba(0,0,0,0.08);
}
.law-item:last-child { border: none; }
.law-number {
    flex-shrink: 0;
    width: 44px; height: 44px;
    background: var(--bk-royal);
    color: var(--bk-gold-light);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--bk-font-title);
    font-size: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.law-content h3 { margin: 0 0 6px; color: var(--bk-royal); font-family: var(--bk-font-title); }
.law-content p { margin: 0; font-size: 0.9rem; line-height: 1.7; }

/* ── Système monétaire ──────────────────────────────────── */
.monnaie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 14px; margin-top: 16px;
}
.monnaie-card {
    padding: 16px;
    border-radius: var(--bk-radius);
    border: 1px solid rgba(200,168,75,0.3);
    background: rgba(255,255,255,0.3);
    text-align: center;
}
.monnaie-icon { font-size: 2rem; margin-bottom: 6px; }
.monnaie-nom { font-family: var(--bk-font-title); font-size: 0.9rem; color: var(--bk-royal); }
.monnaie-valeur { font-size: 0.75rem; color: rgba(62,32,6,0.5); margin-top: 4px; }

/* ── Accueil décoratif ──────────────────────────────────── */
.welcome-crest {
    text-align: center;
    margin: 30px 0;
    opacity: 0.08;
    font-size: 6rem;
    line-height: 1;
    pointer-events: none;
    user-select: none;
}
.welcome-columns {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 24px 0;
}
.welcome-col {
    padding: 18px 20px;
    background: rgba(255,255,255,0.3);
    border: 1px solid rgba(200,168,75,0.3);
    border-radius: var(--bk-radius);
}
.welcome-col h3 {
    font-family: var(--bk-font-title); font-size: 0.85rem;
    color: var(--bk-royal); margin: 0 0 8px;
    display: flex; align-items: center; gap: 7px;
}
.welcome-col ul {
    list-style: none; padding: 0; margin: 0;
}
.welcome-col ul li {
    font-size: 0.82rem; padding: 4px 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    color: rgba(30,21,9,0.7);
    cursor: pointer;
    transition: color 0.2s;
}
.welcome-col ul li:hover { color: var(--bk-royal); }
.welcome-col ul li:last-child { border: none; }

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 768px) {
    .book-frame { width: 100%; height: 100vh; margin: 0; border-width: 0; }
    .book-sidebar { width: 220px; min-width: 220px; }
    .book-page { padding: 30px 24px 40px; }
    .book-page h1.page-title { font-size: 1.5rem; }
    .welcome-columns { grid-template-columns: 1fr; }
    .grade-grid { grid-template-columns: 1fr; }
}
@media (max-width: 540px) {
    .book-container { flex-direction: column; }
    .book-sidebar { width: 100%; min-width: unset; height: auto; border-right: none; border-bottom: 2px solid var(--bk-gold2); }
    #book-toc { display: flex; flex-wrap: wrap; padding: 8px; }
    #book-toc li { flex: 0 0 auto; }
    #book-toc li > .toc-item { padding: 8px 12px; font-size: 0.72rem; }
    .toc-sub, .book-sidebar-header, .book-search-bar, .book-sidebar-footer { display: none; }
}
`;
    document.head.appendChild(style);
})();


/* ══════════════════════════════════════════════════════════════
   CODEX — OBJET PRINCIPAL
══════════════════════════════════════════════════════════════ */
const Codex = {

    currentChapter: 'accueil',
    currentSub: null,

    sections: [
        {
            id: 'accueil',
            tit: 'Introduction',
            ico: '📜',
        },
        {
            id: 'races',
            tit: 'Les Peuples',
            ico: '🧑',
            subs: () => Object.keys(window.RPG_RACES || {}).map(k => ({
                id: 'race__' + k, tit: (window.RPG_RACES[k].icone || '') + ' ' + k
            }))
        },
        {
            id: 'classes',
            tit: 'Les Vocations',
            ico: '⚔️',
            subs: () => Object.keys(window.RPG_CLASSES || {}).map(k => ({
                id: 'classe__' + k, tit: (window.RPG_CLASSES[k].icone || '') + ' ' + k
            }))
        },
        {
            id: 'armes',
            tit: "L'Arsenal",
            ico: '🗡️',
        },
        {
            id: 'grades',
            tit: 'La Hiérarchie',
            ico: '👑',
        },
        {
            id: 'monnaie',
            tit: 'Monnaie & Commerce',
            ico: '🪙',
        },
        {
            id: 'lois',
            tit: 'Les Lois',
            ico: '⚖️',
        },
    ],

    /* ── Init ─────────────────────────────────────────────── */
    init() {
        const trigger = document.getElementById('book-trigger');
        const close   = document.getElementById('close-book');
        const frame   = document.querySelector('.book-frame');

        if (!trigger || !close) return;

        /* Coins déco */
        if (frame && !frame.querySelector('.bk-corner-bl')) {
            ['bk-corner-bl','bk-corner-br'].forEach(cls => {
                const d = document.createElement('span');
                d.className = cls;
                d.textContent = '✦';
                frame.appendChild(d);
            });
        }

        trigger.onclick = () => {
            document.getElementById('player-book-modal').style.display = 'block';
            this.renderTOC();
            this.loadChapter('accueil');
        };

        close.onclick = () => {
            document.getElementById('player-book-modal').style.display = 'none';
        };

        /* Fermer en cliquant hors du cadre */
        document.getElementById('player-book-modal').addEventListener('click', e => {
            if (e.target === e.currentTarget)
                document.getElementById('player-book-modal').style.display = 'none';
        });
    },

    /* ── Sommaire ─────────────────────────────────────────── */
    renderTOC() {
        const toc = document.getElementById('book-toc');
        toc.innerHTML = this.sections.map(s => {
            const hasSubs = typeof s.subs === 'function';
            const subs    = hasSubs ? s.subs() : [];
            const arrow   = hasSubs ? `<span class="toc-arrow">▶</span>` : '';
            const subHtml = hasSubs && subs.length
                ? `<ul class="toc-sub">${subs.map(sub =>
                    `<li data-id="${sub.id}"><span class="toc-item">${sub.tit}</span></li>`
                  ).join('')}</ul>`
                : '';
            return `
                <li data-id="${s.id}" data-has-subs="${hasSubs}">
                    <span class="toc-item">
                        <span class="toc-ico">${s.ico}</span>
                        ${s.tit}
                        ${arrow}
                    </span>
                    ${subHtml}
                </li>`;
        }).join('');

        /* Barre de recherche */
        const searchBar = document.querySelector('.book-search-bar input');
        if (searchBar) {
            searchBar.addEventListener('input', e => this.filterTOC(e.target.value));
        }

        /* Clics */
        toc.querySelectorAll('li[data-id]').forEach(li => {
            const item = li.querySelector(':scope > .toc-item');
            if (!item) return;
            item.addEventListener('click', () => {
                const id      = li.dataset.id;
                const hasSubs = li.dataset.hasSubs === 'true';
                if (hasSubs) {
                    li.classList.toggle('open');
                }
                if (!hasSubs || !li.classList.contains('open')) {
                    this.loadChapter(id);
                } else {
                    this.loadChapter(id);
                }
            });
        });
    },

    filterTOC(query) {
        const q = query.toLowerCase().trim();
        document.querySelectorAll('#book-toc > li').forEach(li => {
            const text = li.textContent.toLowerCase();
            li.style.display = (!q || text.includes(q)) ? '' : 'none';
        });
    },

    setActiveLink(id) {
        document.querySelectorAll('#book-toc li').forEach(li => li.classList.remove('active'));
        const base = id.includes('__') ? id.split('__')[0] + '__' : id;
        document.querySelectorAll(`#book-toc li[data-id="${id}"]`).forEach(li => {
            li.classList.add('active');
            /* Ouvrir parent si sous-item */
            const parent = li.closest('.toc-sub')?.closest('li');
            if (parent) parent.classList.add('open');
        });
        if (!id.includes('__')) {
            document.querySelectorAll(`#book-toc li[data-id="${id}"]`).forEach(li => li.classList.add('active'));
        }
    },

    /* ── Chargement des chapitres ─────────────────────────── */
    loadChapter(id) {
        this.currentChapter = id;
        this.setActiveLink(id);

        const display = document.getElementById('book-display-area');
        let html = '';

        /* Sous-chapitre race */
        if (id.startsWith('race__')) {
            const nom = id.replace('race__', '');
            html = this.renderRaceDetail(nom);
        }
        /* Sous-chapitre classe */
        else if (id.startsWith('classe__')) {
            const nom = id.replace('classe__', '');
            html = this.renderClasseDetail(nom);
        }
        else {
            switch (id) {
                case 'accueil':  html = this.renderAccueil();  break;
                case 'races':    html = this.renderRaces();    break;
                case 'classes':  html = this.renderClasses();  break;
                case 'armes':    html = this.renderArmes();    break;
                case 'grades':   html = this.renderGrades();   break;
                case 'monnaie':  html = this.renderMonnaie();  break;
                case 'lois':     html = this.renderLois();     break;
                default:         html = `<div class="book-page"><p>Chapitre inconnu.</p></div>`;
            }
        }

        display.innerHTML = html;
        display.scrollTop = 0;

        /* Événements post-rendu */
        this.bindPostRender(id);
    },

    /* ── Post-rendu (accordéons, filtres…) ───────────────── */
    bindPostRender(id) {
        /* Accordéons description */
        document.querySelectorAll('.card-desc-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const body = btn.nextElementSibling;
                if (!body) return;
                const open = body.classList.toggle('open');
                btn.querySelector('.toggle-arrow').textContent = open ? '▾' : '▸';
                btn.querySelector('.toggle-label').textContent = open ? 'Réduire' : 'Lire la description';
            });
        });

        /* Filtres Arsenal */
        if (id === 'armes') {
            document.querySelectorAll('.arsenal-filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.arsenal-filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const cat = btn.dataset.cat;
                    document.querySelectorAll('.arsenal-table tbody tr').forEach(tr => {
                        if (cat === 'all' || tr.dataset.cat === cat) {
                            tr.classList.remove('hidden');
                        } else {
                            tr.classList.add('hidden');
                        }
                    });
                });
            });
        }

        /* Grades — clic sur une carte */
        if (id === 'grades') {
            document.querySelectorAll('.grade-card').forEach(card => {
                card.addEventListener('click', () => {
                    const idx    = card.dataset.idx;
                    const panel  = document.getElementById('grade-detail-' + idx);
                    const isOpen = panel?.classList.contains('open');
                    document.querySelectorAll('.grade-detail-panel').forEach(p => p.classList.remove('open'));
                    if (panel && !isOpen) {
                        panel.classList.add('open');
                        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                });
            });
        }

        /* Liens rapides accueil */
        document.querySelectorAll('[data-nav]').forEach(el => {
            el.addEventListener('click', () => this.loadChapter(el.dataset.nav));
        });
    },

    /* ══════════════════════════════════════════════════════
       CHAPITRES
    ══════════════════════════════════════════════════════ */

    /* ── Accueil ──────────────────────────────────────────── */
    renderAccueil() {
        return `<div class="book-page">
            <h1 class="page-title cinzel">Codex du Royaume</h1>
            <div class="ornament-center">❧ ✦ ❧</div>

            <div class="legal-notice">
                Note : Dans ce recueil, le genre masculin est utilisé sans discrimination et uniquement dans le but d'alléger le texte.
            </div>

            <div class="book-intro-box">
                Bienvenue, noble voyageur, dans les archives sacrées du Domaine du Roi Karl.
                Ce Codex contient les savoirs fondamentaux de la Table Ronde — les peuples qui la peuplent,
                les vocations qui la défendent, les lois qui la gouvernent et la hiérarchie qui l'élève.
                Que votre lecture forge votre destinée.
                <cite>— Le Conseil de la Table, Archives Royales</cite>
            </div>

            <div class="welcome-crest">🏰</div>

            <div class="welcome-columns">
                <div class="welcome-col">
                    <h3>📖 Chapitres du Codex</h3>
                    <ul>
                        <li data-nav="races">🧑 Les Peuples — races & traits raciaux</li>
                        <li data-nav="classes">⚔️ Les Vocations — classes & capacités</li>
                        <li data-nav="armes">🗡️ L'Arsenal — armes & équipement</li>
                        <li data-nav="grades">👑 La Hiérarchie — grades & rangs</li>
                        <li data-nav="monnaie">🪙 Monnaie & Commerce</li>
                        <li data-nav="lois">⚖️ Les Lois du Royaume</li>
                    </ul>
                </div>
                <div class="welcome-col">
                    <h3>⚔️ Règles Essentielles</h3>
                    <ul>
                        <li>Dés de compétences : d4 → d20</li>
                        <li>Bonus de maîtrise : +2 à +6 selon niveau</li>
                        <li>Modificateur : (Score − 10) ÷ 2</li>
                        <li>Repos court : récupère des Dés de Vie</li>
                        <li>Repos long : récupère toutes ressources</li>
                        <li>Avantage / Désavantage : 2 dés, garder le meilleur/pire</li>
                    </ul>
                </div>
            </div>

            <div class="ornament-divider"><span>✦</span></div>

            <h2>🎲 Caractéristiques</h2>
            <div class="stat-grid">
                ${[
                    ['FOR','Force','Attaque physique, escalade, porter'],
                    ['DEX','Dextérité','Précision, esquive, discrétion'],
                    ['CON','Constitution','Points de vie, endurance'],
                    ['INT','Intelligence','Magie, connaissance, enquête'],
                    ['SAG','Sagesse','Perception, intuition, médecine'],
                    ['CHA','Charisme','Persuasion, intimidation, tromperie'],
                ].map(([abbr,nom,desc]) => `
                    <div style="flex:1; min-width:140px; background:rgba(255,255,255,0.35); border:1px solid rgba(200,168,75,0.3); border-radius:3px; padding:12px 14px;">
                        <div style="font-family:var(--bk-font-title); color:var(--bk-royal); font-size:0.95rem; margin-bottom:3px;">${abbr} — ${nom}</div>
                        <div style="font-size:0.78rem; color:rgba(30,21,9,0.55); font-style:italic;">${desc}</div>
                    </div>`).join('')}
            </div>
        </div>`;
    },

    /* ── Races — liste ─────────────────────────────────────── */
    renderRaces() {
        const races = window.RPG_RACES || {};
        let html = `<div class="book-page">
            <h1 class="page-title cinzel">Les Peuples du Royaume</h1>
            <div class="ornament-center">❧ ✦ ❧</div>
            <p>Le royaume du Roi Karl est peuplé d'êtres aux origines et aux dons fort différents. Choisissez le peuple qui résonne avec votre âme — il façonnera vos capacités, vos traits et votre rôle dans la grande tapisserie du monde.</p>`;

        for (let [nom, data] of Object.entries(races)) {
            const bonuses = Object.entries(data.bonus || {})
                .map(([s,v]) => `<span class="stat-tag">${s.toUpperCase()} +${v}</span>`).join('');
            html += `
            <div class="book-card">
                <div class="book-card-header">
                    <span class="book-card-icon">${data.icone}</span>
                    <div class="book-card-title">
                        <h2>${nom}</h2>
                        <div class="card-subtitle">${data.tooltip || ''}</div>
                    </div>
                </div>
                <div class="stat-grid">${bonuses}</div>
                ${data.traits ? `<ul class="trait-list">
                    ${data.traits.map(t => `
                        <li>
                            <span class="trait-ico">${t.icone}</span>
                            <span><span class="trait-name">${t.nom} :</span>${t.desc}</span>
                        </li>`).join('')}
                </ul>` : ''}
                <button class="card-desc-toggle" onclick="void(0)">
                    <span class="toggle-label">Lire la description</span>
                    <span class="toggle-arrow">▸</span>
                </button>
                <div class="card-desc-body">${(data.description_joueur || '').trim()}</div>
            </div>`;
        }
        html += `</div>`;
        return html;
    },

    /* ── Race — détail ─────────────────────────────────────── */
    renderRaceDetail(nom) {
        const data = (window.RPG_RACES || {})[nom];
        if (!data) return `<div class="book-page"><p>Race introuvable : ${nom}</p></div>`;

        const bonuses = Object.entries(data.bonus || {})
            .map(([s,v]) => `<span class="stat-tag">${s.toUpperCase()} +${v}</span>`).join('');

        return `<div class="book-page">
            <div style="display:flex; align-items:center; gap:18px; margin-bottom:6px;">
                <span style="font-size:3rem;">${data.icone}</span>
                <div>
                    <h1 class="page-title cinzel" style="text-align:left; margin:0;">${nom}</h1>
                    <div style="font-style:italic; color:rgba(62,32,6,0.55); margin-top:3px;">${data.tooltip || ''}</div>
                </div>
            </div>
            <div class="ornament-center">❧ ✦ ❧</div>

            <h2>⚡ Bonus de Caractéristiques</h2>
            <div class="stat-grid">${bonuses}</div>

            ${data.traits ? `
            <h2>🌟 Traits Raciaux</h2>
            <ul class="trait-list">
                ${data.traits.map(t => `
                <li>
                    <span class="trait-ico">${t.icone}</span>
                    <span><span class="trait-name">${t.nom} :</span>${t.desc}</span>
                </li>`).join('')}
            </ul>` : ''}

            <h2>📖 Description du Joueur</h2>
            <div class="book-intro-box" style="font-style:normal; white-space:pre-line;">${(data.description_joueur || 'Aucune description disponible.').trim()}</div>
        </div>`;
    },

    /* ── Classes — liste ───────────────────────────────────── */
    renderClasses() {
        const classes = window.RPG_CLASSES || {};
        let html = `<div class="book-page">
            <h1 class="page-title cinzel">Les Vocations</h1>
            <div class="ornament-center">❧ ✦ ❧</div>
            <p>La vocation est le chemin que votre âme a choisi — ou qui vous a choisi. Chaque classe apporte des capacités uniques, un style de jeu distinct et un rôle précieux dans n'importe quel groupe d'aventuriers.</p>`;

        for (let [nom, data] of Object.entries(classes)) {
            const bonuses = Object.entries(data.bonus || {})
                .map(([s,v]) => `<span class="stat-tag positive">${s.toUpperCase()} +${v}</span>`).join('');

            html += `
            <div class="book-card">
                <div class="book-card-header">
                    <span class="book-card-icon">${data.icone}</span>
                    <div class="book-card-title">
                        <h2>${nom}</h2>
                        <div class="card-subtitle">${data.tooltip || ''}</div>
                    </div>
                    <div>
                        <span class="stat-tag dv">Dé de vie : d${data.de_vie || data.des_vie || '?'}</span>
                    </div>
                </div>
                <div class="stat-grid">${bonuses}</div>
                ${data.traits ? `<ul class="trait-list">
                    ${data.traits.map(t => `
                    <li>
                        <span class="trait-ico">${t.icone}</span>
                        <span><span class="trait-name">${t.nom} :</span>${t.desc}</span>
                    </li>`).join('')}
                </ul>` : ''}
                <button class="card-desc-toggle" onclick="void(0)">
                    <span class="toggle-label">Lire la description</span>
                    <span class="toggle-arrow">▸</span>
                </button>
                <div class="card-desc-body">${(data.description_joueur || data.description || '').trim()}</div>
            </div>`;
        }
        html += `</div>`;
        return html;
    },

    /* ── Classe — détail ───────────────────────────────────── */
    renderClasseDetail(nom) {
        const data = (window.RPG_CLASSES || {})[nom];
        if (!data) return `<div class="book-page"><p>Classe introuvable : ${nom}</p></div>`;

        const bonuses = Object.entries(data.bonus || {})
            .map(([s,v]) => `<span class="stat-tag positive">${s.toUpperCase()} +${v}</span>`).join('');

        return `<div class="book-page">
            <div style="display:flex; align-items:center; gap:18px; margin-bottom:6px;">
                <span style="font-size:3rem;">${data.icone}</span>
                <div>
                    <h1 class="page-title cinzel" style="text-align:left; margin:0;">${nom}</h1>
                    <div style="font-style:italic; color:rgba(62,32,6,0.55); margin-top:3px;">${data.tooltip || ''}</div>
                </div>
            </div>
            <div class="ornament-center">❧ ✦ ❧</div>

            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:20px;">
                <span class="stat-tag dv">Dé de Vie : d${data.de_vie || data.des_vie || '?'}</span>
                ${bonuses}
            </div>

            ${data.traits ? `
            <h2>⚡ Capacités de Classe</h2>
            <ul class="trait-list">
                ${data.traits.map(t => `
                <li>
                    <span class="trait-ico">${t.icone}</span>
                    <span><span class="trait-name">${t.nom} :</span>${t.desc}</span>
                </li>`).join('')}
            </ul>` : ''}

            <h2>📖 Description du Joueur</h2>
            <div class="book-intro-box" style="font-style:normal; white-space:pre-line;">${(data.description_joueur || data.description || 'Aucune description.').trim()}</div>
        </div>`;
    },

    /* ── Arsenal ───────────────────────────────────────────── */
    renderArmes() {
        const armes = window.MATERIEL_ARMES || {};

        /* Collecter les catégories uniques */
        const cats = [...new Set(Object.values(armes).map(a => a.categorie).filter(Boolean))];

        const filterBtns = `<div class="arsenal-filters">
            <button class="arsenal-filter-btn active" data-cat="all">Toutes</button>
            ${cats.map(c => `<button class="arsenal-filter-btn" data-cat="${c}">${c}</button>`).join('')}
        </div>`;

        let rows = '';
        for (let [nom, a] of Object.entries(armes)) {
            const dmgClass = a.type_degats === 'tranchant' ? 'tranchant'
                           : a.type_degats === 'perforant' ? 'perforant' : 'contondant';
            const props = (a.proprietes || []).map(p => `<span class="prop">${p}</span>`).join(', ');
            rows += `<tr data-cat="${a.categorie || 'Autre'}">
                <td><strong>${a.icone || '⚔️'} ${nom}</strong><br>
                    ${props ? `<div class="prop-list">${props}</div>` : ''}</td>
                <td><strong>${a.degats || '—'}</strong></td>
                <td><span class="dmg-tag ${dmgClass}">${a.type_degats || '—'}</span></td>
                <td>${a.poids || '—'}</td>
                <td><span class="price-tag">${a.prix || '—'}</span></td>
            </tr>`;
        }

        return `<div class="book-page">
            <h1 class="page-title cinzel">L'Arsenal Royal</h1>
            <div class="ornament-center">❧ ✦ ❧</div>
            <p>Chaque arme a son histoire, sa noblesse et ses secrets. De la humble dague à la grande épée bâtarde, l'Arsenal du Roi Karl répertorie ici toutes les lames, haches et projectiles en usage dans le royaume.</p>

            ${filterBtns}

            <table class="arsenal-table">
                <thead>
                    <tr>
                        <th>Arme</th>
                        <th>Dégâts</th>
                        <th>Type</th>
                        <th>Poids</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        </div>`;
    },

    /* ── Grades ────────────────────────────────────────────── */
    renderGrades() {
        const grades = window.RPG_GRADES || [];

        const cards = grades.map((g, i) => {
            const seuil = g.seuil === 0 ? 'Dès le 1er jour' : `À partir de ${g.seuil} jour${g.seuil > 1 ? 's' : ''}`;
            return `
            <div class="grade-card" data-idx="${i}" style="--grade-color:${g.coul || '#8b0000'};">
                <div style="position:absolute;left:0;top:0;bottom:0;width:4px;background:${g.coul || 'var(--bk-royal)'}; border-radius:2px 0 0 2px;"></div>
                <div class="grade-card-header">
                    <span class="grade-ico">${g.icone}</span>
                    <div>
                        <div class="grade-name">${g.nom}</div>
                        <div class="grade-seuil">${seuil}</div>
                    </div>
                </div>
                <div class="grade-tooltip">${g.tooltip || ''}</div>
            </div>

            <div class="grade-detail-panel" id="grade-detail-${i}">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid rgba(200,168,75,0.3);">
                    <span style="font-size:2rem;">${g.icone}</span>
                    <div>
                        <h2 style="margin:0;padding:0;border:none;font-family:var(--bk-font-title);color:var(--bk-royal);font-size:1.15rem;">${g.nom}</h2>
                        <div style="font-size:0.78rem;color:rgba(62,32,6,0.5);">${seuil}</div>
                    </div>
                </div>
                <div style="white-space:pre-line;font-size:0.88rem;line-height:1.8;color:#1e1509;">${(g.description_joueur || g.tooltip || '').trim()}</div>
            </div>`;
        }).join('');

        return `<div class="book-page">
            <h1 class="page-title cinzel">Noblesse & Hiérarchie</h1>
            <div class="ornament-center">❧ ✦ ❧</div>
            <p>La hiérarchie est le pilier de l'ordre au sein du royaume. Les rangs s'obtiennent par la fidélité et la présence — chaque jour passé parmi les frères et sœurs d'armes forge la réputation et élève le rang. Cliquez sur un rang pour en apprendre davantage.</p>

            <div class="grade-grid">${cards}</div>
        </div>`;
    },

    /* ── Monnaie ───────────────────────────────────────────── */
    renderMonnaie() {
        const monnaie = window.RPG_MONNAIE || {};
        const ordre   = window.RPG_MONNAIE_ORDRE || Object.keys(monnaie);

        const cards = ordre.map(abrev => {
            const m = monnaie[abrev];
            if (!m) return '';
            return `<div class="monnaie-card" style="border-top: 3px solid ${m.couleur || 'var(--bk-gold)'};">
                <div class="monnaie-icon">${m.icone}</div>
                <div class="monnaie-nom">${m.nom} (${abrev})</div>
                <div class="monnaie-valeur">Valeur : ${m.valeur_pc} pc</div>
                <div style="font-size:0.77rem;color:rgba(30,21,9,0.55);margin-top:8px;line-height:1.55;">${m.description || ''}</div>
            </div>`;
        }).join('');

        /* Table de conversion */
        const convTable = `<table class="arsenal-table" style="margin-top:20px;">
            <thead><tr>
                <th>Devise</th><th>1 pp =</th><th>1 po =</th><th>1 pe =</th><th>1 pa =</th><th>1 pc =</th>
            </tr></thead>
            <tbody>
                <tr><td><strong>🪙 Platine (pp)</strong></td><td>1 pp</td><td>10 po</td><td>20 pe</td><td>100 pa</td><td>1 000 pc</td></tr>
                <tr><td><strong>🪙 Or (po)</strong></td><td>0,1 pp</td><td>1 po</td><td>2 pe</td><td>10 pa</td><td>100 pc</td></tr>
                <tr><td><strong>🪙 Électrum (pe)</strong></td><td>0,05 pp</td><td>0,5 po</td><td>1 pe</td><td>5 pa</td><td>50 pc</td></tr>
                <tr><td><strong>🪙 Argent (pa)</strong></td><td>0,01 pp</td><td>0,1 po</td><td>0,2 pe</td><td>1 pa</td><td>10 pc</td></tr>
                <tr><td><strong>🪙 Cuivre (pc)</strong></td><td>0,001 pp</td><td>0,01 po</td><td>0,02 pe</td><td>0,1 pa</td><td>1 pc</td></tr>
            </tbody>
        </table>`;

        return `<div class="book-page">
            <h1 class="page-title cinzel">Monnaie & Commerce</h1>
            <div class="ornament-center">❧ ✦ ❧</div>
            <p>Le commerce du royaume repose sur cinq devises frappées à l'effigie du Roi Karl. La pièce d'or reste la référence du marchand, tandis que la pièce de cuivre sert les échanges du quotidien. Connaître la valeur de votre bourse, c'est déjà une forme de sagesse.</p>

            <div class="monnaie-grid">${cards}</div>

            <div class="ornament-divider"><span>✦</span></div>
            <h2>🔄 Table de Conversion</h2>
            ${convTable}
        </div>`;
    },

    /* ── Lois ───────────────────────────────────────────────── */
    renderLois() {
        const lois = [
            {
                num: 'I', ico: '🤝', titre: 'Courtoisie',
                texte: "L'insulte, le mépris ou le harcèlement envers un frère ou une sœur d'armes est proscrit en toute circonstance. Le respect est la première armure de la Table Ronde.",
                sanction: "Avertissement, puis exclusion temporaire ou définitive."
            },
            {
                num: 'II', ico: '⚜️', titre: 'Allégeance',
                texte: "Le respect envers le Roi Karl et le Conseil de la Table est absolu. Les décisions du Conseil sont finales. La contestation se fait par voie diplomatique, jamais par la subversion.",
                sanction: "Rétrogradation de rang, exclusion selon la gravité."
            },
            {
                num: 'III', ico: '🔒', titre: 'Sagesse & Discrétion',
                texte: "Le respect de la vie privée de chaque membre est sacré. Aucune information personnelle ne sera partagée sans consentement explicite. Ce qui se dit au feu de camp reste au feu de camp.",
                sanction: "Bannissement immédiat sans appel."
            },
            {
                num: 'IV', ico: '🏆', titre: 'Honneur & Probité',
                texte: "La fourberie, la triche et la tricherie dans les tournois royaux ou les débats mènent au bannissement définitif. Un chevalier vaut sa parole.",
                sanction: "Exclusion définitive des archives royales."
            },
            {
                num: 'V', ico: '🛡️', titre: 'Loyauté',
                texte: "L'entraide est le ciment de notre Table. Nul ne laissera un compagnon dans le besoin sans offrir son aide ou signaler la situation au Conseil. La force d'un chevalier se mesure aussi à ses alliances.",
                sanction: "Mise à l'écart des missions royales."
            },
        ];

        const items = lois.map(l => `
        <div class="law-item">
            <div class="law-number">${l.ico}</div>
            <div class="law-content">
                <h3>Loi ${l.num} — ${l.titre}</h3>
                <p>${l.texte}</p>
                <p style="font-size:0.8rem; color:rgba(122,0,0,0.6); margin-top:6px;">
                    ⚖️ <em>${l.sanction}</em>
                </p>
            </div>
        </div>`).join('');

        return `<div class="book-page">
            <h1 class="page-title cinzel">Lois du Royaume</h1>
            <div class="ornament-center">❧ ✦ ❧</div>
            <div class="book-intro-box">
                Ces lois ne sont pas des suggestions — elles sont les piliers qui maintiennent debout
                la Table Ronde depuis sa fondation. Les ignorants les apprennent à leurs dépens ;
                les sages les honorent chaque jour.
                <cite>— Proclamation du Roi Karl, Année de fondation</cite>
            </div>

            ${items}

            <div class="ornament-divider"><span>✦</span></div>
            <div style="text-align:center; font-family:var(--bk-font-title); font-size:0.85rem; color:rgba(122,0,0,0.5); letter-spacing:0.08em;">
                Signé et scellé de la Main du Roi Karl<br>
                <span style="font-size:1.5rem; opacity:0.3; margin-top:6px; display:block;">⚜️</span>
            </div>
        </div>`;
    },
};

/* ── Initialisation ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => Codex.init());
