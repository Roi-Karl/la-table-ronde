/**
 * ═══════════════════════════════════════════════════════════════
 * PLAYER-BOOK.JS ✦ Le Codex du Domaine du Roi Karl
 * Design : Parchemin Vivant — Version Complète
 * ═══════════════════════════════════════════════════════════════
 */
(function injectCodexStyles() {
    if (document.getElementById('codex-styles')) return;
    const style = document.createElement('style');
    style.id = 'codex-styles';
    style.textContent = `
:root {
    --bk-parchment: #f5ead4;
    --bk-leather: #3e2006;
    --bk-leather2: #5c3210;
    --bk-ink: #1e1509;
    --bk-royal: #7a0000;
    --bk-royal2: #5a0000;
    --bk-gold: #c8a84b;
    --bk-gold2: #a8882b;
    --bk-gold-light: #f0d070;
    --bk-font-body: 'Lora', Georgia, serif;
    --bk-font-title: 'Cinzel', 'Times New Roman', serif;
    --bk-sidebar-w: 265px;
    --bk-radius: 4px;
}
.book-icon-trigger {
    position:fixed; bottom:30px; right:30px; width:72px; height:72px;
    background:radial-gradient(circle at 40% 35%, var(--bk-leather2), var(--bk-leather));
    border:3px solid var(--bk-gold); border-radius:50%;
    display:flex; justify-content:center; align-items:center;
    cursor:pointer; z-index:1000;
    box-shadow:0 6px 30px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,220,100,.2);
    transition:transform .4s cubic-bezier(.175,.885,.32,1.275), box-shadow .3s;
}
.book-icon-trigger:hover { transform:scale(1.12) rotate(-8deg); box-shadow:0 10px 40px rgba(200,168,75,.4); }
.book-icon-trigger::after { content:''; position:absolute; inset:4px; border:1px solid rgba(200,168,75,.4); border-radius:50%; pointer-events:none; }
.seal-inner { font-size:34px; position:relative; z-index:1; }
.book-modal { display:none; position:fixed; z-index:2000; inset:0; background:rgba(10,5,0,.92); backdrop-filter:blur(10px); animation:bkFI .3s ease; }
@keyframes bkFI { from{opacity:0} to{opacity:1} }
.book-frame {
    position:relative; width:96%; max-width:1300px; height:88vh; margin:3vh auto;
    background:var(--bk-parchment);
    border:12px solid var(--bk-leather);
    box-shadow:0 0 0 3px var(--bk-gold2), 0 0 0 5px var(--bk-leather), 0 40px 120px rgba(0,0,0,.9);
    display:flex; flex-direction:column; overflow:hidden;
}
.book-frame::before { content:'✦'; position:absolute; top:6px; left:8px; color:var(--bk-gold); font-size:16px; z-index:5; pointer-events:none; }
.book-frame::after { content:'✦'; position:absolute; top:6px; right:8px; color:var(--bk-gold); font-size:16px; z-index:5; pointer-events:none; }
.bk-corner-bl { position:absolute; bottom:6px; left:8px; color:var(--bk-gold); font-size:16px; z-index:5; pointer-events:none; }
.bk-corner-br { position:absolute; bottom:6px; right:8px; color:var(--bk-gold); font-size:16px; z-index:5; pointer-events:none; }
.book-close-btn {
    position:absolute; right:14px; top:14px; background:var(--bk-royal); color:var(--bk-gold-light);
    border:2px solid var(--bk-gold2); border-radius:50%; width:38px; height:38px;
    cursor:pointer; font-size:20px; font-weight:bold; display:flex; align-items:center; justify-content:center;
    z-index:10; transition:all .2s;
}
.book-close-btn:hover { background:#9a1010; transform:scale(1.1); }
@media (max-width:540px) {
    .book-close-btn { width:34px; height:34px; font-size:17px; right:8px; top:5px; }
}
.book-container { display:flex; height:100%; overflow:hidden; }
.book-sidebar {
    width:var(--bk-sidebar-w); min-width:var(--bk-sidebar-w);
    background:linear-gradient(180deg,#2a1505,#1a0d02);
    border-right:3px solid var(--bk-gold2);
    display:flex; flex-direction:column; overflow:hidden;
}
.book-sidebar-header { padding:20px 16px 13px; text-align:center; border-bottom:1px solid rgba(200,168,75,.25); }
.book-sidebar-header .sidebar-blason { font-size:30px; display:block; margin-bottom:4px; }
.book-sidebar-header h2 { font-family:var(--bk-font-title); color:var(--bk-gold); font-size:.85rem; letter-spacing:.15em; text-transform:uppercase; margin:0; }
.book-search-bar { padding:9px 12px; border-bottom:1px solid rgba(200,168,75,.15); }
.book-search-bar input {
    width:100%; background:rgba(255,255,255,.06); border:1px solid rgba(200,168,75,.3);
    border-radius:var(--bk-radius); color:rgba(255,220,120,.8); padding:6px 10px;
    font-size:.77rem; font-family:var(--bk-font-body); outline:none; transition:border-color .2s; box-sizing:border-box;
}
.book-search-bar input::placeholder { color:rgba(200,168,75,.35); }
.book-search-bar input:focus { border-color:rgba(200,168,75,.7); }
#book-toc { list-style:none; padding:5px 0; margin:0; overflow-y:auto; flex:1; }
#book-toc::-webkit-scrollbar { width:3px; }
#book-toc::-webkit-scrollbar-thumb { background:rgba(200,168,75,.25); border-radius:2px; }
#book-toc > li { cursor:pointer; border-bottom:1px solid rgba(255,255,255,.04); position:relative; }
#book-toc > li > .toc-item { display:flex; align-items:center; gap:8px; padding:9px 15px; font-family:var(--bk-font-title); font-size:.74rem; letter-spacing:.04em; color:rgba(230,195,120,.75); transition:all .2s; }
#book-toc > li:hover > .toc-item { color:var(--bk-gold-light); background:rgba(200,168,75,.1); }
#book-toc > li.active > .toc-item { color:var(--bk-gold-light); background:rgba(200,168,75,.15); font-weight:bold; }
#book-toc > li.active::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:linear-gradient(180deg,var(--bk-gold),var(--bk-gold2)); border-radius:0 2px 2px 0; }
.toc-ico { font-size:14px; flex-shrink:0; }
.toc-arrow { margin-left:auto; font-size:9px; opacity:.5; transition:transform .25s; }
#book-toc > li.open > .toc-item .toc-arrow { transform:rotate(90deg); opacity:1; }
.toc-sub { list-style:none; padding:0; margin:0; display:none; background:rgba(0,0,0,.15); }
#book-toc > li.open .toc-sub { display:block; }
.toc-sub li { cursor:pointer; border-bottom:1px solid rgba(255,255,255,.03); }
.toc-sub li > .toc-item { padding:6px 13px 6px 32px; font-size:.69rem; color:rgba(200,168,75,.5); }
.toc-sub li:hover > .toc-item { color:rgba(230,195,120,.85); background:rgba(200,168,75,.08); }
.toc-sub li.active > .toc-item { color:rgba(240,210,100,.9); }
.book-sidebar-footer { padding:11px; text-align:center; border-top:1px solid rgba(200,168,75,.2); color:rgba(200,168,75,.3); font-size:19px; letter-spacing:.3em; }
.book-content { flex:1; overflow-y:auto; background:var(--bk-parchment); }
.book-content::-webkit-scrollbar { width:8px; }
.book-content::-webkit-scrollbar-thumb { background:rgba(62,32,6,.3); border-radius:4px; border:1px solid rgba(200,168,75,.2); }
.book-page { padding:44px 54px 58px; max-width:920px; margin:0 auto; color:var(--bk-ink); animation:bkRev .3s ease; }
@keyframes bkRev { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
.book-page h1.page-title { font-family:var(--bk-font-title); font-size:1.95rem; color:var(--bk-royal); text-align:center; margin:0 0 5px; letter-spacing:.06em; }
.book-page h2 { font-family:var(--bk-font-title); font-size:1.15rem; color:var(--bk-royal); margin:26px 0 11px; padding-bottom:5px; border-bottom:1px solid rgba(200,168,75,.4); display:flex; align-items:center; gap:8px; }
.book-page h3 { font-family:var(--bk-font-title); font-size:.93rem; color:var(--bk-leather2); margin:17px 0 7px; }
.book-page p { line-height:1.82; font-size:.92rem; margin:0 0 12px; font-family:var(--bk-font-body); }
.ornament-center { text-align:center; color:var(--bk-gold2); font-size:1.4rem; margin:5px 0 20px; letter-spacing:.5em; opacity:.7; }
.ornament-divider { display:flex; align-items:center; gap:12px; margin:26px 0; color:var(--bk-gold2); opacity:.5; }
.ornament-divider::before,.ornament-divider::after { content:''; flex:1; height:1px; background:linear-gradient(90deg,transparent,var(--bk-gold2),transparent); }
.book-intro-box { background:rgba(255,255,255,.35); border:1px solid rgba(200,168,75,.4); border-radius:var(--bk-radius); padding:19px 24px; margin:0 0 26px; font-style:italic; font-size:.93rem; line-height:1.85; color:var(--bk-leather); box-shadow:inset 0 1px 0 rgba(255,255,255,.5),0 2px 8px rgba(0,0,0,.06); }
.book-intro-box cite { display:block; margin-top:8px; text-align:right; font-size:.78rem; color:var(--bk-royal); opacity:.7; font-style:normal; font-family:var(--bk-font-title); }
.legal-notice { font-size:.78rem; border:1px dashed rgba(62,32,6,.2); border-radius:var(--bk-radius); padding:8px 14px; text-align:center; font-style:italic; margin-bottom:24px; color:rgba(30,21,9,.55); background:rgba(255,255,255,.2); }
.book-card { background:rgba(255,255,255,.38); border:1px solid rgba(200,168,75,.35); border-radius:var(--bk-radius); padding:18px 21px; margin-bottom:24px; box-shadow:0 2px 12px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.6); transition:box-shadow .2s; }
.book-card:hover { box-shadow:0 4px 20px rgba(0,0,0,.1),inset 0 1px 0 rgba(255,255,255,.6); }
.book-card-header { display:flex; align-items:center; gap:12px; margin-bottom:12px; padding-bottom:10px; border-bottom:1px solid rgba(200,168,75,.3); }
.book-card-icon { font-size:2rem; }
.book-card-title h2 { margin:0; padding:0; border:none; font-family:var(--bk-font-title); font-size:1.1rem; color:var(--bk-royal); }
.book-card-title .card-subtitle { font-size:.74rem; color:rgba(62,32,6,.5); font-style:italic; margin-top:2px; }
.stat-grid { display:flex; flex-wrap:wrap; gap:5px; margin:9px 0; }
.stat-tag { background:var(--bk-leather); color:var(--bk-gold); padding:2px 9px; border-radius:2px; font-size:.71rem; font-family:var(--bk-font-title); letter-spacing:.05em; white-space:nowrap; border:1px solid rgba(200,168,75,.3); }
.stat-tag.positive { background:#1a3a1a; color:#7ecb7e; }
.stat-tag.dv { background:#3a1a00; color:#e8a060; }
.stat-tag.ca { background:#0d2040; color:#80b0e0; }
.stat-tag.warn { background:#3a2a00; color:#e8c860; }
.trait-list { list-style:none; padding:0; margin:9px 0 0; }
.trait-list li { display:flex; gap:8px; padding:7px 0; border-bottom:1px solid rgba(0,0,0,.06); font-size:.86rem; line-height:1.55; align-items:flex-start; }
.trait-list li:last-child { border:none; }
.trait-ico { font-size:.95rem; flex-shrink:0; margin-top:1px; }
.trait-name { font-weight:bold; color:var(--bk-royal); margin-right:4px; }
.card-desc-toggle { display:inline-flex; align-items:center; gap:5px; margin-top:10px; cursor:pointer; font-size:.76rem; color:var(--bk-royal2); font-family:var(--bk-font-title); border:1px solid rgba(122,0,0,.2); border-radius:2px; padding:3px 9px; background:rgba(122,0,0,.05); transition:all .2s; user-select:none; }
.card-desc-toggle:hover { background:rgba(122,0,0,.12); }
.card-desc-body { display:none; margin-top:12px; padding:12px 14px; background:rgba(255,255,255,.25); border-left:3px solid var(--bk-gold2); font-size:.84rem; line-height:1.75; white-space:pre-line; color:#2c241a; border-radius:0 var(--bk-radius) var(--bk-radius) 0; }
.card-desc-body.open { display:block; animation:bkRev .22s ease; }
.bk-table { width:100%; border-collapse:collapse; margin-top:10px; font-size:.85rem; }
.bk-table thead tr { background:var(--bk-leather); }
.bk-table th { color:var(--bk-gold); padding:9px 12px; text-align:left; font-family:var(--bk-font-title); font-size:.74rem; letter-spacing:.05em; font-weight:normal; }
.bk-table td { padding:8px 12px; border-bottom:1px solid rgba(0,0,0,.07); vertical-align:middle; }
.bk-table tbody tr:hover { background:rgba(200,168,75,.1); }
.bk-table .hidden { display:none; }
.dmg-tag { display:inline-block; font-size:.7rem; padding:1px 7px; border-radius:2px; font-family:var(--bk-font-title); }
.dmg-tag.tranchant { background:#3a1a1a; color:#e88080; }
.dmg-tag.perforant { background:#1a2a3a; color:#80aacc; }
.dmg-tag.contondant { background:#2a2a1a; color:#c0b060; }
.price-tag { color:var(--bk-gold2); font-weight:bold; font-family:var(--bk-font-title); }
.prop { font-size:.69rem; color:rgba(62,32,6,.55); font-style:italic; }
.bk-filters { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px; }
.bk-filter-btn { padding:4px 12px; border:1px solid rgba(200,168,75,.4); border-radius:2px; background:transparent; color:var(--bk-leather2); font-family:var(--bk-font-title); font-size:.71rem; cursor:pointer; transition:all .2s; }
.bk-filter-btn:hover,.bk-filter-btn.active { background:var(--bk-leather); color:var(--bk-gold); border-color:var(--bk-gold2); }
.grade-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(232px,1fr)); gap:13px; margin-top:16px; }
.grade-card { background:rgba(255,255,255,.35); border-radius:var(--bk-radius); border:1px solid rgba(200,168,75,.3); padding:15px 14px 15px 18px; cursor:pointer; transition:all .2s; position:relative; overflow:hidden; }
.grade-card:hover { box-shadow:0 4px 16px rgba(0,0,0,.12); transform:translateY(-2px); }
.grade-card-header { display:flex; align-items:center; gap:8px; margin-bottom:6px; }
.grade-ico { font-size:1.4rem; }
.grade-name { font-family:var(--bk-font-title); font-size:.86rem; color:var(--bk-royal); }
.grade-seuil { font-size:.69rem; color:rgba(62,32,6,.45); margin-top:1px; }
.grade-tooltip { font-size:.76rem; font-style:italic; color:rgba(30,21,9,.6); line-height:1.5; }
.grade-detail-panel { display:none; margin-top:16px; padding:20px 24px; background:rgba(255,255,255,.4); border:1px solid rgba(200,168,75,.4); border-radius:var(--bk-radius); animation:bkRev .22s ease; }
.grade-detail-panel.open { display:block; }
.align-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:11px; margin:14px 0; }
.align-card { padding:14px; border-radius:var(--bk-radius); border:1px solid rgba(200,168,75,.3); background:rgba(255,255,255,.3); cursor:pointer; transition:all .2s; }
.align-card:hover { transform:translateY(-2px); box-shadow:0 4px 14px rgba(0,0,0,.1); }
.align-card-top { display:flex; align-items:center; gap:8px; margin-bottom:6px; }
.align-ico { font-size:1.5rem; }
.align-name { font-family:var(--bk-font-title); font-size:.83rem; color:var(--bk-royal); }
.align-titre { font-size:.7rem; color:rgba(62,32,6,.5); }
.align-desc { font-size:.76rem; font-style:italic; color:rgba(30,21,9,.65); line-height:1.5; }
.carac-table { width:100%; border-collapse:collapse; font-size:.84rem; }
.carac-table th { background:var(--bk-leather); color:var(--bk-gold); padding:8px 11px; font-family:var(--bk-font-title); font-size:.73rem; font-weight:normal; letter-spacing:.05em; text-align:left; }
.carac-table td { padding:7px 11px; border-bottom:1px solid rgba(0,0,0,.07); }
.carac-table tbody tr:hover { background:rgba(200,168,75,.08); }
.modif-pos { color:#2a7a2a; font-weight:bold; }
.modif-neg { color:#8a2020; font-weight:bold; }
.modif-zero { color:rgba(30,21,9,.4); }
.monnaie-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(165px,1fr)); gap:11px; margin-top:13px; }
.monnaie-card { padding:14px; border-radius:var(--bk-radius); border:1px solid rgba(200,168,75,.3); background:rgba(255,255,255,.3); text-align:center; }
.monnaie-icon { font-size:1.7rem; margin-bottom:5px; }
.monnaie-nom { font-family:var(--bk-font-title); font-size:.86rem; color:var(--bk-royal); }
.monnaie-valeur { font-size:.71rem; color:rgba(62,32,6,.5); margin-top:3px; }
.law-item { display:flex; gap:15px; align-items:flex-start; padding:18px 0; border-bottom:1px solid rgba(0,0,0,.08); }
.law-item:last-child { border:none; }
.law-number { flex-shrink:0; width:40px; height:40px; background:var(--bk-royal); color:var(--bk-gold-light); border-radius:50%; display:flex; align-items:center; justify-content:center; font-family:var(--bk-font-title); font-size:.9rem; box-shadow:0 2px 8px rgba(0,0,0,.3); }
.law-content h3 { margin:0 0 5px; color:var(--bk-royal); font-family:var(--bk-font-title); }
.law-content p { margin:0; font-size:.86rem; line-height:1.72; }
.welcome-crest { text-align:center; margin:26px 0; opacity:.07; font-size:5rem; line-height:1; pointer-events:none; user-select:none; }
.welcome-columns { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin:20px 0; }
.welcome-col { padding:15px 18px; background:rgba(255,255,255,.3); border:1px solid rgba(200,168,75,.3); border-radius:var(--bk-radius); }
.welcome-col h3 { font-family:var(--bk-font-title); font-size:.8rem; color:var(--bk-royal); margin:0 0 6px; display:flex; align-items:center; gap:5px; }
.welcome-col ul { list-style:none; padding:0; margin:0; }
.welcome-col ul li { font-size:.78rem; padding:4px 0; border-bottom:1px solid rgba(0,0,0,.05); color:rgba(30,21,9,.7); cursor:pointer; transition:color .2s; }
.welcome-col ul li:hover { color:var(--bk-royal); }
.welcome-col ul li:last-child { border:none; }
.niveau-table { width:100%; border-collapse:collapse; font-size:.82rem; }
.niveau-table th { background:var(--bk-leather); color:var(--bk-gold); padding:8px 10px; font-family:var(--bk-font-title); font-size:.72rem; font-weight:normal; letter-spacing:.04em; text-align:center; }
.niveau-table td { padding:6px 10px; border-bottom:1px solid rgba(0,0,0,.07); text-align:center; }
.niveau-table tbody tr:nth-child(odd) { background:rgba(255,255,255,.25); }
.niveau-table tbody tr:hover { background:rgba(200,168,75,.12); }
.niveau-badge { display:inline-block; background:var(--bk-royal); color:var(--bk-gold-light); border-radius:50%; width:24px; height:24px; line-height:24px; font-family:var(--bk-font-title); font-size:.75rem; font-weight:bold; }
@media (max-width:768px) {
    .book-frame { width:100%; height:100vh; max-width:none; margin:0; border:0; border-radius:0; }
    .book-sidebar { width:200px; min-width:200px; }
    .book-page { padding:26px 20px 36px; }
    .book-page h1.page-title { font-size:1.45rem; }
    .welcome-columns,.align-grid { grid-template-columns:1fr; }
    .grade-grid { grid-template-columns:1fr; }
    .book-icon-trigger { bottom:20px; right:20px; width:60px; height:60px; }
    .seal-inner { font-size:28px; }
}
@media (max-width:540px) {
    .book-modal { padding:0; }
    .book-frame { width:100%; height:100dvh; height:100vh; margin:0; border:0; border-radius:0; display:flex; flex-direction:column; }
    .book-container { flex-direction:column; flex:1; overflow:hidden; }
    .book-sidebar {
        width:100%; min-width:unset; height:auto; max-height:44px;
        border-right:none; border-bottom:2px solid var(--bk-gold2);
        overflow:hidden; flex-shrink:0;
    }
    .book-sidebar-header,.book-search-bar,.book-sidebar-footer { display:none; }
    #book-toc { display:flex; flex-wrap:nowrap; overflow-x:auto; padding:4px 6px; gap:2px; flex-shrink:0; }
    #book-toc::-webkit-scrollbar { display:none; }
    #book-toc > li { flex:0 0 auto; }
    #book-toc > li > .toc-item { padding:6px 9px; font-size:.62rem; white-space:nowrap; }
    .toc-sub { display:none !important; }
    .book-content { flex:1; overflow-y:auto; min-height:0; }
    .book-page { padding:20px 16px 30px; }
    .book-page h1.page-title { font-size:1.2rem; }
    .book-icon-trigger { bottom:16px; right:16px; width:54px; height:54px; }
    .seal-inner { font-size:24px; }
    .bk-table { font-size:.7rem; }
    .bk-table th, .bk-table td { padding:5px 6px; }
}
`;
    document.head.appendChild(style);
})();

function _descStr(val) {
    if (!val) return '';
    if (Array.isArray(val)) return val.join('\n').trim();
    if (typeof val === 'object') return String(val.masculin || val.feminin || val.féminin || val.description || Object.values(val)[0] || '').trim();
    return String(val).trim();
}

/* ═══════════════════════════════════════════════════════════════
 * SORTS PAR CLASSE (Phase 3)
 * ═══════════════════════════════════════════════════════════════ */
const SORTS_PAR_CLASSE = { /* ... ton code SORTS_PAR_CLASSE complet (identique à la version précédente) ... */ };

/* ═══════════════════════════════════════════════════════════════
 * CODEX PRINCIPAL
 * ═══════════════════════════════════════════════════════════════ */
const Codex = {
    sections: [ /* ... toutes tes sections (identiques) ... */ ],

    init() { /* ... identique ... */ },
    renderTOC() { /* ... identique ... */ },
    setActiveLink(id) { /* ... identique ... */ },
    loadChapter(id) { /* ... identique ... */ },
    bindEvents(id) { /* ... identique ... */ },

    /* Tous les renderXXX (Accueil, Regles, Caracs, etc.) restent exactement les mêmes */

    renderObjetsMagiques() {
        if (!window.MAGIC_ITEMS_DATA || window.MAGIC_ITEMS_DATA.length === 0) {
            return `<div class="book-page">
                <h1 class="page-title cinzel">Les Objets Magiques</h1>
                <div class="book-intro-box" style="color:#9a1010;">
                    Données des objets magiques introuvables.<br>
                    Vérifie que <strong>magic-items-data.js</strong> est chargé <strong>AVANT</strong> player-book.js
                </div>
            </div>`;
        }

        const categoriesOrdre = ["Armes", "Armures", "Anneaux", "Potions", "Baguettes", "Bâtons", "Sceptres", "Objet merveilleux"];

        const sectionsHtml = categoriesOrdre.map(cat => {
            const items = window.MAGIC_ITEMS_DATA.filter(o => o.type === cat);
            if (items.length === 0) return '';

            return `
                <div class="ornament-divider"><span>✦</span></div>
                <h2>${cat}</h2>
                <div style="overflow-x:auto;">
                    <table class="bk-table" style="min-width:600px;">
                        <thead><tr><th>Objet</th><th>Rareté</th><th style="text-align:center;">Lien</th><th>Prix</th></tr></thead>
                        <tbody>
                            ${items.map(o => `
                                <tr>
                                    <td><strong style="color:var(--bk-royal);">${o.nom}</strong>
                                        <div class="prop" style="margin-top:4px;">${o.note || ''}</div>
                                    </td>
                                    <td><span class="stat-tag ${this._getRareteClass(o.rarete)}">${o.rarete}</span></td>
                                    <td style="text-align:center;font-size:1.1rem;">${o.lien ? '🔗' : '<span style="opacity:0.2;">—</span>'}</td>
                                    <td><span class="price-tag">${o.prix}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>`;
        }).join('');

        return `
            <div class="book-page">
                <h1 class="page-title cinzel">Les Objets Magiques</h1>
                <div class="ornament-center">❧ ✦ ❧</div>
                <div class="book-intro-box">
                    Les reliques enchantées du Domaine sont rares, puissantes, et souvent dangereuses. 
                    Le symbole 🔗 indique que l'objet nécessite une harmonisation.
                </div>
                ${sectionsHtml}
            </div>`;
    },

    _getRareteClass(rarete) {
        switch(rarete) {
            case 'Commun':      return 'ca';
            case 'Peu commun':  return 'positive';
            case 'Rare':        return 'dv';
            case 'Très rare':   return 'warn';
            case 'Légendaire':  return 'royal';
            default:            return '';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.SORTS_PAR_CLASSE = SORTS_PAR_CLASSE;
    window.MAGIC_ITEMS_DATA = MAGIC_ITEMS_DATA;
    Codex.init();
});
