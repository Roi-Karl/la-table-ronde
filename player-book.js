/**
 * ═══════════════════════════════════════════════════════════════
 *  PLAYER-BOOK.JS  ✦  Le Codex du Domaine du Roi Karl
 *  Design : Parchemin Vivant — Version Complète
 * ═══════════════════════════════════════════════════════════════
 */

(function injectCodexStyles() {
    if (document.getElementById('codex-styles')) return;
    const style = document.createElement('style');
    style.id = 'codex-styles';
    style.textContent = `
:root {
    --bk-parchment:  #f5ead4;
    --bk-leather:    #3e2006;
    --bk-leather2:   #5c3210;
    --bk-ink:        #1e1509;
    --bk-royal:      #7a0000;
    --bk-royal2:     #5a0000;
    --bk-gold:       #c8a84b;
    --bk-gold2:      #a8882b;
    --bk-gold-light: #f0d070;
    --bk-font-body:  'Lora', Georgia, serif;
    --bk-font-title: 'Cinzel', 'Times New Roman', serif;
    --bk-sidebar-w:  265px;
    --bk-radius:     4px;
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
.book-frame::after  { content:'✦'; position:absolute; top:6px; right:8px; color:var(--bk-gold); font-size:16px; z-index:5; pointer-events:none; }
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
.stat-tag.dv  { background:#3a1a00; color:#e8a060; }
.stat-tag.ca  { background:#0d2040; color:#80b0e0; }
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
.dmg-tag.tranchant  { background:#3a1a1a; color:#e88080; }
.dmg-tag.perforant  { background:#1a2a3a; color:#80aacc; }
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
.modif-pos  { color:#2a7a2a; font-weight:bold; }
.modif-neg  { color:#8a2020; font-weight:bold; }
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


// Utilitaire : convertir description (string, array ou objet {masculin/féminin}) en string propre
function _descStr(val) {
    if (!val) return '';
    if (Array.isArray(val)) return val.join('\n').trim();
    if (typeof val === 'object') return String(val.masculin || val.feminin || val.féminin || val.description || Object.values(val)[0] || '').trim();
    return String(val).trim();
}

/* ═══════════════════════════════════════════════════════════════
 *  SORTS PAR CLASSE — Données Phase 3
 *  Chaque classe lanceuse de sorts avec ses sorts emblématiques
 * ═══════════════════════════════════════════════════════════════ */

const SORTS_PAR_CLASSE = {

    "Barde": {
        carac_sort: "CHA",
        carac_sort_complet: "Charisme — DD de sauvegarde = 8 + bonus maîtrise + mod. CHA",
        methode: "Sorts connus (nombre limité, toujours disponibles)",
        ressource_speciale: "Inspiration bardique (dé bonus d6→d12 offert à un allié)",
        style: "Soutien, contrôle et polyvalence magique",
        sorts_connus: "4 au niveau 1",
        emplacements_niv1: 2,
        table_emplacements: [
            { niveau:1,  slots:{0:2,1:2} },
            { niveau:2,  slots:{0:2,1:3} },
            { niveau:3,  slots:{0:2,1:4,2:2} },
            { niveau:4,  slots:{0:3,1:4,2:3} },
            { niveau:5,  slots:{0:3,1:4,2:3,3:2} },
        ],
        sorts: [
            // Tours de magie
            { niveau:0, nom:"Bouffonneries", icone:"🎭", ecole:"Enchantement", temps_incantation:"1 action", portee:"18 m", duree:"Concentration, 1 min", description:"La cible ratée un jet de sagesse DD doit accomplir une action idiote à son prochain tour — danser, rire, imiter un animal." },
            { niveau:0, nom:"Lumière", icone:"💡", ecole:"Évocation", temps_incantation:"1 action", portee:"Contact", duree:"1 heure", description:"Un objet touché émet une lumière vive sur 6 m et faible sur 6 m supplémentaires. Peut être dissipé par Ténèbres." },
            { niveau:0, nom:"Prestidigitation", icone:"✨", ecole:"Transmutation", temps_incantation:"1 action", portee:"3 m", duree:"1 heure max", description:"Effets magiques mineurs à volonté : flamme, nettoyage, odeur, son illusoire, réchauffer un aliment, marquer un objet..." },
            { niveau:0, nom:"Illusion mineure", icone:"🔮", ecole:"Illusion", temps_incantation:"1 action", portee:"9 m", duree:"Concentration, 1 min", description:"Crée un son ou une image inerte d'un cube de 1,5 m. L'image ne résiste pas à l'investigation (elle est translucide au toucher)." },
            // Niveau 1
            { niveau:1, nom:"Soins", icone:"❤️", ecole:"Évocation", temps_incantation:"1 action", portee:"Contact", duree:"Instantané", description:"Restaure 1d8 + mod. SAG PV à une créature. Amplifiable : +1d8 par emplacement supplémentaire." },
            { niveau:1, nom:"Héroïsme", icone:"🛡️", ecole:"Enchantement", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 1 min", description:"La cible est immunisée à la peur et gagne mod. CHA PV temporaires à chaque début de son tour." },
            { niveau:1, nom:"Charme-personne", icone:"💫", ecole:"Enchantement", temps_incantation:"1 action", portee:"9 m", duree:"1 heure", description:"JS Sagesse ou la cible vous considère comme un ami. Annulé si elle ou ses alliés sont attaqués. La cible sait qu'elle était charmée après." },
            { niveau:1, nom:"Sommeil", icone:"💤", ecole:"Enchantement", temps_incantation:"1 action", portee:"27 m", duree:"1 min", description:"Affecte 5d8 PV de créatures (les plus basses d'abord). Elles s'endorment. Réveillées si blessées ou secouées." },
            { niveau:1, nom:"Lueurs féeriques", icone:"🌟", ecole:"Évocation", concentration:true, temps_incantation:"1 action", portee:"18 m", duree:"Concentration, 1 min", description:"Chaque créature dans un cube de 6 m doit réussir un JS Dextérité ou être soulignée de lumière. Les attaques contre ces cibles ont l'avantage." },
            // Niveau 2
            { niveau:2, nom:"Suggestion", icone:"🗣️", ecole:"Enchantement", concentration:true, temps_incantation:"1 action", portee:"9 m", duree:"Concentration, 8h", description:"JS Sagesse ou la cible suit une suggestion raisonnable (pas suicidaire). Ex : 'Posez votre arme et rentrez chez vous.'" },
            { niveau:2, nom:"Fracas", icone:"🔔", ecole:"Évocation", temps_incantation:"1 action", portee:"18 m", duree:"Instantané", description:"Explosion sonore dans une sphère de 3 m. JS Constitution DD ou 3d8 tonnerre + sourd 1 round. Objets non portés automatiquement touchés." },
        ],
    },

    "Clerc": {
        carac_sort: "SAG",
        carac_sort_complet: "Sagesse — DD de sauvegarde = 8 + bonus maîtrise + mod. SAG",
        methode: "Sorts préparés chaque jour (nombre = mod. SAG + niveau)",
        ressource_speciale: "Canal divin (2/repos court à haut niveau) — Renvoi des morts-vivants",
        style: "Guérison, soutien divin et combat sacré",
        emplacements_niv1: 2,
        table_emplacements: [
            { niveau:1,  slots:{0:3,1:2} },
            { niveau:2,  slots:{0:3,1:3} },
            { niveau:3,  slots:{0:3,1:4,2:2} },
            { niveau:4,  slots:{0:4,1:4,2:3} },
            { niveau:5,  slots:{0:4,1:4,2:3,3:2} },
        ],
        sorts: [
            { niveau:0, nom:"Flamme sacrée", icone:"🔥", ecole:"Évocation", temps_incantation:"1 action", portee:"18 m", duree:"Instantané", description:"JS Dextérité DD ou 1d8 dégâts radiants. Ignore la couverture. (2d8 niv.5, 3d8 niv.11, 4d8 niv.17)" },
            { niveau:0, nom:"Guidance", icone:"📿", ecole:"Divination", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 1 min", description:"La cible peut ajouter 1d4 à un test de caractéristique de son choix avant la fin du sort." },
            { niveau:0, nom:"Résistance", icone:"🛡️", ecole:"Abjuration", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 1 min", description:"La cible peut ajouter 1d4 à un jet de sauvegarde de son choix avant la fin du sort." },
            { niveau:1, nom:"Soins", icone:"❤️", ecole:"Évocation", temps_incantation:"1 action", portee:"Contact", duree:"Instantané", description:"Restaure 1d8 + mod. SAG PV. +1d8 par emplacement supérieur." },
            { niveau:1, nom:"Bénédiction", icone:"✨", ecole:"Enchantement", concentration:true, temps_incantation:"1 action", portee:"9 m", duree:"Concentration, 1 min", description:"3 créatures au choix ajoutent 1d4 à tous leurs jets d'attaque et de sauvegarde." },
            { niveau:1, nom:"Bouclier de la foi", icone:"🛡️", ecole:"Abjuration", concentration:true, temps_incantation:"1 action bonus", portee:"18 m", duree:"Concentration, 10 min", description:"+2 CA à une créature visible." },
            { niveau:1, nom:"Injonction", icone:"🗣️", ecole:"Enchantement", temps_incantation:"1 action", portee:"18 m", duree:"1 round", description:"JS Sagesse ou la cible obéit à un mot d'ordre : Approche, Fuis, Tombe, Halte, Pars." },
            { niveau:2, nom:"Soins de groupe", icone:"💚", ecole:"Évocation", temps_incantation:"1 action", portee:"9 m", duree:"Instantané", description:"Jusqu'à 6 créatures récupèrent chacune 1d4 + mod. SAG PV. +1d4 par emplacement supérieur." },
            { niveau:2, nom:"Arme spirituelle", icone:"⚔️", ecole:"Évocation", concentration:false, temps_incantation:"1 action bonus", portee:"18 m", duree:"1 min", description:"Invoque une arme flottante. Chaque tour : attaque bonus (1d8 + mod. SAG radiant). +1d8 par 2 emplacements supérieurs." },
            { niveau:3, nom:"Revigorer", icone:"💛", ecole:"Nécromancie", temps_incantation:"1 action", portee:"9 m", duree:"Instantané", description:"Restaure 3d8 + mod. SAG PV. La cible ne peut pas bénéficier du sort à nouveau avant un repos court." },
        ],
    },

    "Druide": {
        carac_sort: "SAG",
        carac_sort_complet: "Sagesse — DD de sauvegarde = 8 + bonus maîtrise + mod. SAG",
        methode: "Sorts préparés chaque jour (liste complète de sorts de druide disponibles)",
        ressource_speciale: "Forme sauvage (2/repos court) — transformation en bête",
        style: "Nature, métamorphose et magie élémentaire",
        emplacements_niv1: 2,
        table_emplacements: [
            { niveau:1,  slots:{0:2,1:2} },
            { niveau:2,  slots:{0:2,1:3} },
            { niveau:3,  slots:{0:2,1:4,2:2} },
            { niveau:4,  slots:{0:3,1:4,2:3} },
            { niveau:5,  slots:{0:3,1:4,2:3,3:2} },
        ],
        sorts: [
            { niveau:0, nom:"Poignée de foudre", icone:"⚡", ecole:"Évocation", temps_incantation:"1 action", portee:"Contact", duree:"Instantané", description:"JS Dextérité DD ou 1d8 foudre. La cible ne peut pas effectuer de réaction jusqu'à son prochain tour. (2d8 niv.5)" },
            { niveau:0, nom:"Flammes", icone:"🔥", ecole:"Évocation", temps_incantation:"1 action", portee:"Contact", duree:"10 min", description:"Flamme dans la main : attaque à distance (portée 9 m) qui inflige 1d8 feu. Peut éclairer 3 m." },
            { niveau:0, nom:"Épines", icone:"🌿", ecole:"Transmutation", temps_incantation:"1 action", portee:"Contact", duree:"Instantané", description:"JS Constitution DD ou 1d6 perforants. Si la cible réussit, les dégâts sont ignorés. Croît avec le niveau." },
            { niveau:1, nom:"Soin des blessures", icone:"❤️", ecole:"Évocation", temps_incantation:"1 action", portee:"Contact", duree:"Instantané", description:"Restaure 1d8 + mod. SAG PV." },
            { niveau:1, nom:"Enchevêtrement", icone:"🌱", ecole:"Conjuration", concentration:true, temps_incantation:"1 action", portee:"27 m", duree:"Concentration, 1 min", description:"Plantes entravantes dans un carré de 6 m. JS Force ou entravé. Réitéré chaque tour." },
            { niveau:1, nom:"Brise-tempête", icone:"🌊", ecole:"Évocation", temps_incantation:"1 action", portee:"9 m", duree:"Instantané", description:"JS Force ou la cible est repoussée de 3 m et tombe à terre. Dégâts : 1d8 tonnerre." },
            { niveau:2, nom:"Rayon de lune", icone:"🌕", ecole:"Évocation", concentration:true, temps_incantation:"1 action", portee:"45 m", duree:"Concentration, 1 min", description:"Cylindre lumineux de 1,5 m, 12 m de haut. Toute créature dedans : JS Constitution ou 2d10 radiants. Métamorphes font la transformation." },
            { niveau:2, nom:"Peau d'écorce", icone:"🌳", ecole:"Transmutation", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 1h", description:"CA minimum 16 pour la cible (si sa CA naturelle est inférieure)." },
            { niveau:3, nom:"Appel de la foudre", icone:"🌩️", ecole:"Conjuration", concentration:true, temps_incantation:"1 action", portee:"36 m (nuage à 90-120 m de hauteur)", duree:"Concentration, 10 min", description:"Nuage d'orage. Chaque tour (action bonus) : foudre sur un point visible → JS Dextérité DD ou 3d10 foudre." },
        ],
    },

    "Ensorceleur": {
        carac_sort: "CHA",
        carac_sort_complet: "Charisme — DD de sauvegarde = 8 + bonus maîtrise + mod. CHA",
        methode: "Sorts connus (nombre limité mais toujours disponibles, magie innée)",
        ressource_speciale: "Points de sorcellerie (modifient les sorts via Métamagie)",
        style: "Magie brute et flexible, sorts connus mais puissamment personnalisés",
        sorts_connus: "2 au niveau 1",
        emplacements_niv1: 2,
        table_emplacements: [
            { niveau:1,  slots:{0:4,1:2} },
            { niveau:2,  slots:{0:4,1:3} },
            { niveau:3,  slots:{0:4,1:4,2:2} },
            { niveau:4,  slots:{0:5,1:4,2:3} },
            { niveau:5,  slots:{0:5,1:4,2:3,3:2} },
        ],
        sorts: [
            { niveau:0, nom:"Rayon de givre", icone:"❄️", ecole:"Évocation", temps_incantation:"1 action", portee:"18 m", duree:"Instantané", description:"Attaque à distance : 1d8 froid. La cible voit sa vitesse réduite de 3 m jusqu'à son prochain tour." },
            { niveau:0, nom:"Aspersion acide", icone:"💚", ecole:"Conjuration", temps_incantation:"1 action", portee:"18 m", duree:"Instantané", description:"JS Dextérité DD ou 1d6 acide (2 cibles adjacentes). (2d6 niv.5, 3d6 niv.11, 4d6 niv.17)" },
            { niveau:0, nom:"Contact glacial", icone:"💀", ecole:"Nécromancie", temps_incantation:"1 action", portee:"18 m", duree:"1 round", description:"Attaque à distance : 1d8 nécrotique. La cible ne peut pas récupérer de PV jusqu'à son prochain tour." },
            { niveau:0, nom:"Trait de feu", icone:"🔥", ecole:"Évocation", temps_incantation:"1 action", portee:"36 m", duree:"Instantané", description:"Attaque à distance : 1d10 feu. (2d10 niv.5, 3d10 niv.11, 4d10 niv.17)" },
            { niveau:1, nom:"Bouclier", icone:"🛡️", ecole:"Abjuration", temps_incantation:"1 réaction", portee:"Personnel", duree:"1 round", description:"Réaction contre une attaque qui vous toucherait : +5 CA jusqu'au début de votre prochain tour. Bloque aussi Projectile magique." },
            { niveau:1, nom:"Projectile magique", icone:"💫", ecole:"Évocation", temps_incantation:"1 action", portee:"36 m", duree:"Instantané", description:"3 fléchettes magiques, 1d4+1 force chacune, infaillibles. +1 fléchette par emplacement supérieur." },
            { niveau:1, nom:"Mains brûlantes", icone:"🔥", ecole:"Évocation", temps_incantation:"1 action", portee:"Personnel (cône 4,5 m)", duree:"Instantané", description:"JS Dextérité DD ou 3d6 feu (moitié en cas de succès). +1d6 par emplacement supérieur." },
            { niveau:2, nom:"Invisibilité", icone:"👻", ecole:"Illusion", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 1h", description:"Cible invisible jusqu'à ce qu'elle attaque ou lance un sort. +1 cible par emplacement supérieur." },
            { niveau:2, nom:"Flétrissement", icone:"💀", ecole:"Nécromancie", temps_incantation:"1 action", portee:"9 m", duree:"Instantané", description:"JS Constitution DD ou 3d8 nécrotique (moitié en cas de succès). Aucun effet sur les morts-vivants et constructions." },
        ],
    },

    "Sorcier": {
        carac_sort: "CHA",
        carac_sort_complet: "Charisme — DD de sauvegarde = 8 + bonus maîtrise + mod. CHA",
        methode: "Sorts connus (très peu, mais emplacements récupérés au repos court)",
        ressource_speciale: "Invocations occultes (capacités passives de pacte) + Bénédiction de pacte (Lame/Tome/Chaîne)",
        style: "Puissance sombre, pacte avec une entité, peu d'emplacements mais récupérés fréquemment",
        sorts_connus: "2 au niveau 1",
        emplacements_niv1: 1,
        table_emplacements: [
            { niveau:1,  slots:{0:2,1:1} },
            { niveau:2,  slots:{0:2,1:2} },
            { niveau:3,  slots:{0:2,2:2} },
            { niveau:4,  slots:{0:3,2:2} },
            { niveau:5,  slots:{0:3,3:2} },
        ],
        sorts: [
            { niveau:0, nom:"Eldritch Blast", icone:"⚡", ecole:"Évocation", temps_incantation:"1 action", portee:"36 m", duree:"Instantané", description:"1 rayon de force : attaque à distance, 1d10 force. Personnalisable via Invocations (explosif, répulsif, affaiblissant, effrayant...). Devient 2 rayons niv.5, 3 niv.11, 4 niv.17." },
            { niveau:0, nom:"Contact venimeux", icone:"☠️", ecole:"Conjuration", temps_incantation:"1 action", portee:"Contact", duree:"Instantané", description:"Attaque de mêlée : JS Constitution DD ou 1d10 poison. (2d10 niv.5, 3d10 niv.11, 4d10 niv.17)" },
            { niveau:0, nom:"Bouffée de poison", icone:"💚", ecole:"Nécromancie", temps_incantation:"1 action", portee:"3 m", duree:"Instantané", description:"JS Constitution DD ou 1d12 poison. (2d12 niv.5, 3d12 niv.11, 4d12 niv.17)" },
            { niveau:0, nom:"Frissons", icone:"🌀", ecole:"Enchantement", temps_incantation:"1 action", portee:"18 m", duree:"Instantané", description:"JS Sagesse DD ou la cible subit désavantage à ses jets d'attaque jusqu'à la fin de votre prochain tour." },
            { niveau:1, nom:"Armure d'Agathys", icone:"❄️", ecole:"Abjuration", temps_incantation:"1 action", portee:"Personnel", duree:"1 heure", description:"5 PV temporaires. Quiconque vous frappe en mêlée subit 5 dégâts de froid. +5 par emplacement supérieur." },
            { niveau:1, nom:"Maléfice", icone:"👁️", ecole:"Enchantement", concentration:true, temps_incantation:"1 action bonus", portee:"27 m", duree:"Concentration, 1h", description:"Cible maudite : +1d6 nécrotique sur vos attaques. Elle a désavantage aux jets d'une caractéristique choisie. Se déplace sur une nouvelle cible si la première meurt." },
            { niveau:1, nom:"Protection contre le Bien et le Mal", icone:"🔮", ecole:"Abjuration", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 10 min", description:"La cible est protégée contre : aberrations, célestes, élémentaires, fées, fiélons, morts-vivants. Ces créatures ont désavantage à l'attaquer et ne peuvent pas la charmer, effrayer ou posséder." },
            { niveau:2, nom:"Rayon d'affaiblissement", icone:"💀", ecole:"Nécromancie", temps_incantation:"1 action", portee:"18 m", duree:"Instantané", description:"Attaque à distance : 4d8+mod. CHA nécrotique. Si la cible tombe à 0 PV, elle se dissout en poussière — aucune résurrection sans sort puissant." },
            { niveau:2, nom:"Ténèbres", icone:"🌑", ecole:"Évocation", concentration:true, temps_incantation:"1 action", portee:"18 m", duree:"Concentration, 10 min", description:"Obscurité magique dans une sphère de 4,5 m. Aucune lumière (même magique inférieure) ne peut la pénétrer. Peut être lancé sur un objet." },
            { niveau:3, nom:"Contresort", icone:"🚫", ecole:"Abjuration", temps_incantation:"1 réaction", portee:"18 m", duree:"Instantané", description:"Réaction : interrompt un sort de niveau 3 ou moins (automatique). Pour niveau 4+ : JS INT DD 10+niveau du sort. En cas d'échec, le sort adverse fonctionne." },
        ],
    },

    "Magicien": {
        carac_sort: "INT",
        carac_sort_complet: "Intelligence — DD de sauvegarde = 8 + bonus maîtrise + mod. INT",
        methode: "Grimoire — prépare INT + niveau sorts par jour, liste illimitée copiable",
        ressource_speciale: "Récupération arcanique (emplacements récupérés au repos court), École de magie (spécialisation)",
        style: "Puissance maximale à haut niveau, fragilité physique, préparation et polyvalence absolues",
        emplacements_niv1: 2,
        table_emplacements: [
            { niveau:1,  slots:{0:3,1:2} },
            { niveau:2,  slots:{0:3,1:3} },
            { niveau:3,  slots:{0:3,1:4,2:2} },
            { niveau:4,  slots:{0:4,1:4,2:3} },
            { niveau:5,  slots:{0:4,1:4,2:3,3:2} },
        ],
        sorts: [
            // Tours de magie
            { niveau:0, nom:"Trait de feu", icone:"🔥", ecole:"Évocation", temps_incantation:"1 action", portee:"36 m", duree:"Instantané", description:"Attaque à distance : 1d10 feu. (2d10 niv.5, 3d10 niv.11, 4d10 niv.17). Le plus puissant tour de magie offensif." },
            { niveau:0, nom:"Rayon de givre", icone:"❄️", ecole:"Évocation", temps_incantation:"1 action", portee:"18 m", duree:"Instantané", description:"Attaque à distance : 1d8 froid. Réduit la vitesse de la cible de 3 m jusqu'à son prochain tour." },
            { niveau:0, nom:"Illusion mineure", icone:"🔮", ecole:"Illusion", temps_incantation:"1 action", portee:"9 m", duree:"Concentration, 1 min", description:"Son ou image inerte (cube 1,5 m). Très utile pour distraction et reconnaissance." },
            { niveau:0, nom:"Prestidigitation", icone:"✨", ecole:"Transmutation", temps_incantation:"1 action", portee:"3 m", duree:"Jusqu'à 1h", description:"Effets mineurs à volonté : flamme, nettoyage, marquage, son, odeur, chaleur. Outil de roleplay constant." },
            // Niveau 1
            { niveau:1, nom:"Projectile magique", icone:"💫", ecole:"Évocation", temps_incantation:"1 action", portee:"36 m", duree:"Instantané", description:"3 fléchettes (1d4+1 chacune) infaillibles, touchent une ou plusieurs cibles. +1 fléchette par emplacement supérieur." },
            { niveau:1, nom:"Bouclier", icone:"🛡️", ecole:"Abjuration", temps_incantation:"1 réaction", portee:"Personnel", duree:"1 round", description:"+5 CA jusqu'au début du prochain tour, en réaction à une attaque. Bloque aussi Projectile magique. Le sort défensif le plus efficace du jeu." },
            { niveau:1, nom:"Mains brûlantes", icone:"🔥", ecole:"Évocation", temps_incantation:"1 action", portee:"Cône 4,5 m", duree:"Instantané", description:"JS Dextérité DD ou 3d6 feu (moitié si réussite). +1d6 par emplacement supérieur. Parfait contre plusieurs ennemis proches." },
            { niveau:1, nom:"Sommeil", icone:"💤", ecole:"Enchantement", temps_incantation:"1 action", portee:"27 m", duree:"1 min", description:"Endort des créatures représentant 5d8 PV cumulés (les plus basses d'abord). Ne fonctionne pas sur les morts-vivants et constructions." },
            { niveau:1, nom:"Identification", icone:"🔍", ecole:"Divination", rituel:true, temps_incantation:"1 min (rituel)", portee:"Contact", duree:"Instantané", description:"Révèle les propriétés magiques d'un objet et les sorts actifs sur une créature. Peut être lancé comme rituel (sans emplacement)." },
            // Niveau 2
            { niveau:2, nom:"Invisibilité", icone:"👻", ecole:"Illusion", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 1h", description:"Cible invisible jusqu'à ce qu'elle attaque ou lance un sort. +1 cible par emplacement supérieur. Indispensable pour l'infiltration." },
            { niveau:2, nom:"Flèche acide de Melf", icone:"💚", ecole:"Évocation", temps_incantation:"1 action", portee:"27 m", duree:"Instantané + 1 round", description:"Attaque à distance : 4d4 acide immédiat + 2d4 acide à la fin du prochain tour de la cible. +1d4 par emplacement supérieur." },
            { niveau:2, nom:"Bouche magique", icone:"🗣️", ecole:"Illusion", rituel:true, temps_incantation:"1 min (rituel)", portee:"9 m", duree:"Jusqu'à la déclenchement", description:"Programme un message de 25 mots (avec voix et gestes) sur un objet, déclenché par une condition que vous définissez." },
            // Niveau 3
            { niveau:3, nom:"Boule de feu", icone:"💥", ecole:"Évocation", temps_incantation:"1 action", portee:"45 m", duree:"Instantané", description:"Explosion dans une sphère de 6 m. JS Dextérité DD ou 8d6 feu (moitié si réussite). Enflamme les objets non portés. +1d6 par emplacement supérieur." },
            { niveau:3, nom:"Contre-sort", icone:"🚫", ecole:"Abjuration", temps_incantation:"1 réaction", portee:"18 m", duree:"Instantané", description:"Annule automatiquement un sort de niv.3 ou moins. Pour niv.4+ : JS INT DD 10+niveau. La réaction ultime du Magicien." },
            { niveau:3, nom:"Vol", icone:"🦅", ecole:"Transmutation", concentration:true, temps_incantation:"1 action", portee:"Contact", duree:"Concentration, 10 min", description:"Confère une vitesse de vol de 18 m. +1 cible par emplacement supérieur." },
        ],
    },

    "Paladin": {
        carac_sort: "CHA",
        carac_sort_complet: "Charisme — DD de sauvegarde = 8 + bonus maîtrise + mod. CHA",
        methode: "Sorts préparés (mod. CHA + ½ niveau Paladin)",
        ressource_speciale: "Châtiment divin (1d8 rayonnant supplémentaire sur une attaque), Imposition des mains",
        style: "Combat sacré, protection divine, sorts de soutien offensifs",
        emplacements_niv1: 2,
        table_emplacements: [
            { niveau:2,  slots:{1:2} },
            { niveau:3,  slots:{1:3} },
            { niveau:4,  slots:{1:3} },
            { niveau:5,  slots:{1:4,2:2} },
        ],
        sorts: [
            { niveau:1, nom:"Châtiment destructeur", icone:"⚡", ecole:"Évocation", concentration:true, temps_incantation:"1 action bonus", portee:"Personnel", duree:"Concentration, 1 min", description:"Prochaine attaque réussie : +2d6 foudre supplémentaires. La cible et les créatures dans 1,5 m doivent réussir un JS Dextérité ou être aveuglées jusqu'à la fin de votre prochain tour." },
            { niveau:1, nom:"Bouclier de la foi", icone:"🛡️", ecole:"Abjuration", concentration:true, temps_incantation:"1 action bonus", portee:"18 m", duree:"Concentration, 10 min", description:"+2 CA à une créature visible." },
            { niveau:1, nom:"Soins", icone:"❤️", ecole:"Évocation", temps_incantation:"1 action", portee:"Contact", duree:"Instantané", description:"Restaure 1d8 + mod. CHA PV." },
            { niveau:1, nom:"Bénédiction", icone:"✨", ecole:"Enchantement", concentration:true, temps_incantation:"1 action", portee:"9 m", duree:"Concentration, 1 min", description:"3 créatures ajoutent 1d4 à leurs jets d'attaque et JS." },
            { niveau:2, nom:"Aide", icone:"💪", ecole:"Abjuration", temps_incantation:"1 action", portee:"9 m", duree:"8 heures", description:"Jusqu'à 3 alliés : +5 PV maximum et actuels. +5 PV par emplacement supérieur." },
            { niveau:2, nom:"Trouver destrier", icone:"🐴", ecole:"Invocation", rituel:false, temps_incantation:"10 min", portee:"9 m", duree:"Instantané", description:"Convoque un esprit en forme de destrier (cheval, poney, mastiff...). Lien télépathique. Disparaît à 0 PV." },
        ],
    },

    "Moine": {
        carac_sort: "SAG",
        carac_sort_complet: "Sagesse (traditions de certains archétypes uniquement)",
        methode: "Capacités de ki — pas de sorts classiques au niveau de base",
        ressource_speciale: "Points de ki (égaux au niveau) — Coup étourdissant, Déluge de coups, Pas du vent",
        style: "Arts martiaux, vitesse surhumaine, ki élémentaire selon tradition",
        emplacements_niv1: 0,
        table_emplacements: [],
        sorts: [
            { niveau:0, nom:"Déluge de coups (ki)", icone:"👊", ecole:"Capacité de ki", temps_incantation:"1 action bonus", portee:"Mêlée", duree:"Instantané", description:"Dépensez 1 ki : effectuez 2 attaques à mains nues supplémentaires en action bonus." },
            { niveau:0, nom:"Coup étourdissant (ki)", icone:"💫", ecole:"Capacité de ki", temps_incantation:"Lors d'une attaque", portee:"Mêlée", duree:"1 round", description:"Dépensez 1 ki après avoir touché : JS Constitution DD ou la cible est étourdie jusqu'au début de votre prochain tour (pas d'action, pas de réaction, attaques contre elle avec avantage)." },
            { niveau:0, nom:"Pas du vent (ki)", icone:"💨", ecole:"Capacité de ki", temps_incantation:"1 action bonus", portee:"Personnel", duree:"1 tour", description:"Dépensez 1 ki : Désengagez ou Foncez en action bonus. Peut courir sur les surfaces verticales et l'eau jusqu'à la fin du tour." },
            { niveau:0, nom:"Arrêt du temps (ki)", icone:"⏸️", ecole:"Capacité de ki", temps_incantation:"Réaction", portee:"Personnel", duree:"Instantané", description:"Dépensez 1 ki : réaction pour dévier un projectile (réduit les dégâts de 1d10 + DEX + niveau Moine). À haut niveau, peut renvoyer le projectile." },
        ],
    },

    "Roublard": {
        carac_sort: "INT",
        carac_sort_complet: "Intelligence (Escroc arcanique uniquement, sous-classe niv.3)",
        methode: "Sorts connus (Escroc arcanique uniquement — quelques sorts de Mage)",
        ressource_speciale: "Attaque sournoise (dés bonus si avantage ou allié adjacent), Ruse (action bonus polyvalente)",
        style: "Furtivité, burst de dégâts, compétences élargies — magie optionnelle selon archétype",
        emplacements_niv1: 0,
        table_emplacements: [],
        sorts: [
            { niveau:0, nom:"Attaque sournoise", icone:"🗡️", ecole:"Capacité de classe", temps_incantation:"Lors d'une attaque", portee:"Mêlée ou distance", duree:"Instantané", description:"1 fois par tour, si avantage au jet d'attaque ou si un allié non neutralisé est adjacent à la cible : +1d6 dégâts (croît avec le niveau : 2d6 niv.3, 3d6 niv.5...)." },
            { niveau:0, nom:"Ruse", icone:"🃏", ecole:"Capacité de classe", temps_incantation:"1 action bonus", portee:"Variable", duree:"1 tour", description:"Permet d'utiliser Se cacher, Foncer ou Se désengager en action bonus chaque tour." },
            { niveau:0, nom:"Coup bas", icone:"👊", ecole:"Capacité de classe (niv.2)", temps_incantation:"Réaction", portee:"Mêlée", duree:"Instantané", description:"Réaction contre une créature qui rate une attaque de mêlée contre vous : effectuez une attaque de mêlée contre elle." },
            { niveau:1, nom:"Couleur vaporisée (Escroc)", icone:"🌈", ecole:"Illusion", temps_incantation:"1 action", portee:"Personnel", duree:"1 round", description:"(Escroc arcanique) Raies colorées aveuglantes dans un cône de 4,5 m. JS Dextérité DD ou aveuglé 1 round." },
            { niveau:1, nom:"Serviteur invisible (Escroc)", icone:"👻", ecole:"Conjuration", rituel:true, temps_incantation:"1 action", portee:"18 m", duree:"1 heure", description:"(Escroc arcanique) Entité invisible qui accomplit des tâches simples : porter, nettoyer, ouvrir des portes. CA 10, 1 PV." },
        ],
    },
};

// Dédoublonner si "Barde" défini deux fois (la seconde définition simple est un bug — supprimer)
// (Version complète utilisée par renderSortsClasse)
window.MAGIC_ITEMS_DATA = window.MAGIC_ITEMS_DATA || [];
const Codex = {
    sections: [
        { id:'accueil', tit:'Introduction', ico:'📜' },
        { id:'regles', tit:'Règles Fondamentales', ico:'🎲' },
        { id:'caracteristiques', tit:'Caractéristiques', ico:'⚡' },
        { id:'niveaux', tit:'Niveaux & Progression', ico:'📈' },
        { id:'races', tit:'Les Peuples', ico:'🧑', subs:()=>Object.keys(window.RPG_RACES||{}).map(k=>({id:'race__'+k,tit:(window.RPG_RACES[k].icone||'')+' '+k})) },
        { id:'classes', tit:'Les Vocations', ico:'⚔️', subs:()=>Object.keys(window.RPG_CLASSES||{}).map(k=>({id:'classe__'+k,tit:(window.RPG_CLASSES[k].icone||'')+' '+k})) },
        { id:'alignements', tit:'Les Alignements', ico:'⚖️' },
        { id:'armes', tit:"L'Arsenal", ico:'🗡️' },
        { id:'armures', tit:'Les Armures', ico:'🛡️' },
        { id:'equipement', tit:"L'Équipement", ico:'🎒' },
        { id:'auberge', tit:'Auberge & Services', ico:'🏨' },
        { id:'montures', tit:'Montures & Véhicules', ico:'🐎' },
        { id:'monnaie', tit:'Monnaie & Commerce', ico:'🪙' },
        { id:'grades', tit:'La Hiérarchie', ico:'👑' },
        { id:'lois', tit:'Les Lois', ico:'📋' },
        { id:'sorts', tit:'Sorts & Magie', ico:'✨', subs:()=> {
            const cl=window.RPG_CLASSES||{};
            const lanceurs=window.SORTS_PAR_CLASSE||{};
            return Object.keys(cl).filter(k=>lanceurs[k]!==undefined).map(k=>({id:'sorts__'+k,tit:(cl[k].icone||'')+' '+k}));
        }},
        { id:'bestiaire', tit:'Bestiaire', ico:'🐉', subs:()=> {
            const cats=window.RPG_BESTIAIRE_CATEGORIES||[];
            return cats.map(c=>({id:'bestiaire__'+c.id,tit:c.icone+' '+c.label}));
        }},
        { id:'objets-magiques', tit:'Objets Magiques', ico:'🪄' },
    ],

    init() {
        const trigger = document.getElementById('book-trigger');
        const close   = document.getElementById('close-book');
        const modal   = document.getElementById('player-book-modal');

        if (!trigger || !close || !modal) return;

        trigger.style.display = 'none';

        const _waitAuth = setInterval(() => {
            const auth = window._firebaseAuth;
            if (!auth) return;
            clearInterval(_waitAuth);
            auth.onAuthStateChanged(user => {
                trigger.style.display = user ? 'flex' : 'none';
            });
        }, 150);

        const frame = document.querySelector('.book-frame');
        if (frame && !frame.querySelector('.bk-corner-bl')) {
            ['bk-corner-bl','bk-corner-br'].forEach(cls=>{ const d=document.createElement('span'); d.className=cls; d.textContent='✦'; frame.appendChild(d); });
        }
        trigger.onclick = () => {
            document.getElementById('player-book-modal').style.display='block';
            this.renderTOC(); this.loadChapter('accueil');
        };
        close.onclick = () => { document.getElementById('player-book-modal').style.display='none'; };
        document.getElementById('player-book-modal').addEventListener('click', e=>{
            if (e.target===e.currentTarget) document.getElementById('player-book-modal').style.display='none';
        });
    },
    // Tu peux ajouter d'autres méthodes du Codex ici
    


    renderTOC() {
        const toc = document.getElementById('book-toc');
        const self = this;
        toc.innerHTML = this.sections.map(s=>{
            const hasSubs = typeof s.subs==='function';
            const subs    = hasSubs ? s.subs() : [];
            const arrow   = hasSubs ? `<span class="toc-arrow">▶</span>` : '';
            const subHtml = hasSubs && subs.length ? `<ul class="toc-sub">${subs.map(sub=>`<li data-id="${sub.id}"><span class="toc-item">${sub.tit}</span></li>`).join('')}</ul>` : '';
            return `<li data-id="${s.id}" data-has-subs="${hasSubs}"><span class="toc-item"><span class="toc-ico">${s.ico}</span>${s.tit}${arrow}</span>${subHtml}</li>`;
        }).join('');
            
        const si = document.getElementById('book-search-input');
        if (si) si.addEventListener('input', e=>{
            const q=e.target.value.toLowerCase();
            toc.querySelectorAll(':scope > li').forEach(li=>{ li.style.display=(!q||li.textContent.toLowerCase().includes(q))?'':'none'; });
        });


        // Listeners items parents
        toc.querySelectorAll(':scope > li[data-id]').forEach(li=>{
            const item=li.querySelector(':scope > .toc-item');
            if (!item) return;
            item.addEventListener('click', ()=>{
                if (li.dataset.hasSubs==='true') li.classList.toggle('open');
                self.loadChapter(li.dataset.id);
            });
        });

        // Listeners sous-items (stopPropagation pour éviter de déclencher le parent)
        toc.querySelectorAll('.toc-sub li[data-id]').forEach(li=>{
            const item=li.querySelector(':scope > .toc-item');
            if (!item) return;
            item.addEventListener('click', (e)=>{
                e.stopPropagation();
                self.loadChapter(li.dataset.id);
            });
        });
    },

    setActiveLink(id) {
        document.querySelectorAll('#book-toc li').forEach(li=>li.classList.remove('active'));
        document.querySelectorAll(`#book-toc li[data-id="${id}"]`).forEach(li=>{
            li.classList.add('active');
            const p=li.closest('.toc-sub')?.closest('li'); if(p) p.classList.add('open');
        });
    },

    loadChapter(id) {
        this.setActiveLink(id);
        const d = document.getElementById('book-display-area');
        let html='';
        if      (id.startsWith('race__'))        html=this.renderRaceDetail(id.replace('race__',''));
        else if (id.startsWith('classe__'))      html=this.renderClasseDetail(id.replace('classe__',''));
        else if (id.startsWith('sorts__'))       html=this.renderSortsClasse(id.replace('sorts__',''));
        else if (id.startsWith('bestiaire__'))   html=this.renderBestiaireCat(id.replace('bestiaire__',''));
        else {
            const map={
                accueil:()=>this.renderAccueil(), regles:()=>this.renderRegles(),
                caracteristiques:()=>this.renderCaracs(), niveaux:()=>this.renderNiveaux(),
                races:()=>this.renderRaces(), classes:()=>this.renderClasses(),
                alignements:()=>this.renderAlignements(),
                armes:()=>this.renderArmes(), armures:()=>this.renderArmures(),
                equipement:()=>this.renderEquipement(), auberge:()=>this.renderAuberge(),
                montures:()=>this.renderMontures(), monnaie:()=>this.renderMonnaie(),
                grades:()=>this.renderGrades(), lois:()=>this.renderLois(),
                sorts:()=>this.renderSorts(), bestiaire:()=>this.renderBestiaire(),
                'objets-magiques':()=>this.renderObjetsMagiques(),
            };
            html = map[id] ? map[id]() : `<div class="book-page"><p>Chapitre introuvable.</p></div>`;
        }
        d.innerHTML=html; d.scrollTop=0; this.bindEvents(id);
    },

    bindEvents(id) {
        document.querySelectorAll('.card-desc-toggle').forEach(btn=>{
            btn.addEventListener('click',()=>{
                const body=btn.nextElementSibling; if(!body) return;
                const open=body.classList.toggle('open');
                btn.querySelector('.toggle-arrow').textContent=open?'▾':'▸';
                btn.querySelector('.toggle-label').textContent=open?'Réduire':'Lire la description';
            });
        });
        document.querySelectorAll('.bk-filter-btn').forEach(btn=>{
            btn.addEventListener('click',()=>{
                const grp=btn.closest('.bk-filters');
                grp.querySelectorAll('.bk-filter-btn').forEach(b=>b.classList.remove('active'));
                btn.classList.add('active');
                const cat=btn.dataset.cat; const tid=btn.dataset.table;
                const tbody=tid?document.getElementById(tid):null;
                if(tbody) tbody.querySelectorAll('tr').forEach(tr=>tr.classList.toggle('hidden',cat!=='all'&&tr.dataset.cat!==cat));
            });
        });
        if (id==='grades'||id==='alignements') {
            document.querySelectorAll('.grade-card,.align-card').forEach(card=>{
                card.addEventListener('click',()=>{
                    const panelId='grade-detail-'+card.dataset.idx||'align-detail-'+card.dataset.idx;
                    const idx=card.dataset.idx;
                    const pid=card.classList.contains('align-card')?'align-detail-'+idx:'grade-detail-'+idx;
                    const panel=document.getElementById(pid);
                    const open=panel?.classList.contains('open');
                    document.querySelectorAll('.grade-detail-panel').forEach(p=>p.classList.remove('open'));
                    if(panel&&!open){panel.classList.add('open');panel.scrollIntoView({behavior:'smooth',block:'nearest'});}
                });
            });
        }
        document.querySelectorAll('[data-nav]').forEach(el=>el.addEventListener('click',()=>this.loadChapter(el.dataset.nav)));
    },

    /* ─────────────────── CHAPITRES ─────────────────── */

    renderAccueil() {
        return `<div class="book-page">
        <h1 class="page-title cinzel">Codex du Royaume</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <div class="legal-notice">Le genre masculin est utilisé sans discrimination, dans le seul but d'alléger le texte.</div>
        <div class="book-intro-box">Bienvenue, noble voyageur, dans les archives sacrées du Domaine du Roi Karl. Ce Codex réunit les savoirs fondamentaux de la Table Ronde — peuples, vocations, règles, équipement et hiérarchie. Que votre lecture forge votre destinée.<cite>— Le Conseil de la Table, Archives Royales</cite></div>
        <div class="welcome-crest">🏰</div>
        <div class="welcome-columns">
        <div class="welcome-col"><h3>📖 Chapitres</h3><ul>
            <li data-nav="regles">🎲 Règles fondamentales</li>
            <li data-nav="caracteristiques">⚡ Les 6 caractéristiques</li>
            <li data-nav="niveaux">📈 Niveaux & progression</li>
            <li data-nav="races">🧑 Les Peuples — races & traits</li>
            <li data-nav="classes">⚔️ Les Vocations — classes</li>
            <li data-nav="alignements">⚖️ Les 9 Alignements</li>
            <li data-nav="armes">🗡️ L'Arsenal — armes</li>
            <li data-nav="armures">🛡️ Les Armures</li>
            <li data-nav="equipement">🎒 L'Équipement d'aventure</li>
            <li data-nav="auberge">🏨 Auberge & Services</li>
            <li data-nav="montures">🐎 Montures & Véhicules</li>
            <li data-nav="monnaie">🪙 Monnaie & Commerce</li>
            <li data-nav="grades">👑 La Hiérarchie des rangs</li>
            <li data-nav="lois">📋 Les Lois du Royaume</li>
        </ul></div>
        <div class="welcome-col"><h3>⚔️ À Savoir en Priorité</h3><ul>
            <li>Jet de base = d20 + modificateur vs DD</li>
            <li>Avantage : 2d20, garder le plus haut</li>
            <li>Désavantage : 2d20, garder le plus bas</li>
            <li>Modificateur = (Score − 10) ÷ 2</li>
            <li>Bonus maîtrise : +2 (niv.1) → +6 (niv.17)</li>
            <li>Repos court = récupérer des Dés de Vie</li>
            <li>Repos long = récupérer toutes ressources</li>
            <li>CA = Classe d'Armure (résistance aux coups)</li>
        </ul></div>
        </div></div>`;
    },

    renderRegles() {
        return `<div class="book-page">
        <h1 class="page-title cinzel">Règles Fondamentales</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <h2>🎲 Les Types de Dés</h2>
        <div class="stat-grid" style="gap:8px;">
        ${[['d4','Dégâts faibles, capacités mineures'],['d6','Dégâts courants, Dés de Vie'],['d8','Armes moyennes'],['d10','Armes lourdes à deux mains'],['d12','Hache à deux mains, Barbare'],['d20','Tout jet d\'action ou d\'attaque'],['d100','Tables aléatoires, événements']].map(([d,u])=>`
        <div style="flex:1;min-width:120px;background:rgba(255,255,255,.35);border:1px solid rgba(200,168,75,.3);border-radius:3px;padding:9px 12px;">
            <div style="font-family:var(--bk-font-title);color:var(--bk-royal);font-size:.95rem;margin-bottom:2px;">${d}</div>
            <div style="font-size:.74rem;color:rgba(30,21,9,.55);font-style:italic;">${u}</div>
        </div>`).join('')}
        </div>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>⚔️ Structure d'un Tour de Combat</h2>
        <div class="book-card"><p>Chaque round (~6 secondes). À votre tour :</p>
        <ul class="trait-list">
            <li><span class="trait-ico">🏃</span><span><span class="trait-name">Déplacement :</span> Jusqu'à votre vitesse (généralement 9 m / 30 pieds).</span></li>
            <li><span class="trait-ico">⚔️</span><span><span class="trait-name">Action :</span> Attaquer, lancer un sort, se cacher, aider, foncer, se désengager…</span></li>
            <li><span class="trait-ico">⚡</span><span><span class="trait-name">Action bonus :</span> Certaines capacités ou sorts (une seule par tour).</span></li>
            <li><span class="trait-ico">💬</span><span><span class="trait-name">Réaction :</span> Une seule par round — attaque d'opportunité, sort Bouclier…</span></li>
            <li><span class="trait-ico">🔄</span><span><span class="trait-name">Interaction libre :</span> Dégainer une arme, ouvrir une porte (une par tour).</span></li>
        </ul></div>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>🎯 Table des Degrés de Difficulté (DD)</h2>
        <table class="bk-table">
        <thead><tr><th>DD</th><th>Difficulté</th><th>Exemple</th></tr></thead>
        <tbody>
            <tr><td>5</td><td>Trivial</td><td>Se rappeler son propre nom</td></tr>
            <tr><td>10</td><td>Facile</td><td>Escalader un mur avec des prises</td></tr>
            <tr><td>15</td><td>Modéré</td><td>Crocheter une serrure simple</td></tr>
            <tr><td>20</td><td>Difficile</td><td>Convaincre un garde corrompu</td></tr>
            <tr><td>25</td><td>Très difficile</td><td>Traverser un gouffre à la corde</td></tr>
            <tr><td>30</td><td>Légendaire</td><td>Mentir à un dieu</td></tr>
        </tbody>
        </table>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>💤 Repos</h2>
        <div class="book-card"><ul class="trait-list">
            <li><span class="trait-ico">☀️</span><span><span class="trait-name">Repos court (1h min) :</span> Dépenser des Dés de Vie pour récupérer des PV. Certaines classes récupèrent des ressources spéciales.</span></li>
            <li><span class="trait-ico">🌙</span><span><span class="trait-name">Repos long (8h) :</span> Récupère tous les PV, la moitié des DV, tous les emplacements de sorts et capacités quotidiennes. Max 1 fois/24h.</span></li>
        </ul></div>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>⚠️ États Spéciaux</h2>
        <table class="bk-table"><thead><tr><th>État</th><th>Effet principal</th></tr></thead><tbody>
        ${[['😵 Assommé','Incapacité + tombe à terre + rate jets Force/Dex'],['😨 Charmé','Ne peut pas attaquer le charmeur, avantage pour lui en Charisme'],['🔒 Entravé','Vitesse 0, désavantage attaque, avantage adversaires'],['😱 Effrayé','Désavantage jets+attaques si source visible, ne peut pas s\'approcher'],['🤢 Empoisonné','Désavantage aux jets d\'attaque et de caractéristique'],['❌ Incapacité','Ne peut plus agir ni réagir'],['🫥 Invisible','Avantage attaque, adversaires désavantagés, impossible à cibler certains sorts'],['💀 Mort','Jets sauvegarde mort — 3 succès = stable, 3 échecs = mort'],['🧊 Pétrifié','Transformé en pierre, résistances, immunisé poison/maladie'],['😵 Sonné','Rate tout JS, tombe KO sur attaque, avantage total ennemis']].map(([e,d])=>`<tr><td><strong>${e}</strong></td><td style="font-size:.82rem;">${d}</td></tr>`).join('')}
        </tbody></table></div>`;
    },

    renderCaracs() {
        const caracs=[
            {abr:'FOR',nom:'Force',desc:'Puissance physique. Attaques CC, escalade, poussée, port de charge.',classes:'Guerrier, Barbare, Paladin',ex:'Attaque à la hache, enfoncer une porte'},
            {abr:'DEX',nom:'Dextérité',desc:'Agilité, réflexes. CA armure légère, attaques à distance, discrétion, pièges.',classes:'Roublard, Rôdeur, Moine',ex:'Tir à l\'arc, crocheter une serrure'},
            {abr:'CON',nom:'Constitution',desc:'Santé, endurance. Chaque point de modificateur augmente les PV à chaque niveau.',classes:'Toutes (PV)',ex:'Résister au poison, maintenir concentration'},
            {abr:'INT',nom:'Intelligence',desc:'Mémoire, raisonnement. Magie des Magiciens. Arcanes, Histoire, Enquête, Nature.',classes:'Magicien, Artificier',ex:'Identifier un sort, déchiffrer une carte'},
            {abr:'SAG',nom:'Sagesse',desc:'Perception, intuition. Magie divine Clerc/Druide. Perception, Perspicacité, Médecine.',classes:'Clerc, Druide, Rôdeur',ex:'Repérer une embuscade, soigner une blessure'},
            {abr:'CHA',nom:'Charisme',desc:'Présence, persuasion. Magie Barde/Paladin/Ensorceleur/Sorcier. Tromperie, Intimidation.',classes:'Barde, Paladin, Ensorceleur, Sorcier',ex:'Convaincre un roi, intimider des gardes'},
        ];
        const cards=caracs.map(c=>`
        <div class="book-card">
            <div class="book-card-header">
                <span style="background:var(--bk-royal);color:var(--bk-gold-light);font-family:var(--bk-font-title);font-size:.95rem;padding:7px 11px;border-radius:3px;font-weight:bold;min-width:42px;text-align:center;">${c.abr}</span>
                <div class="book-card-title"><h2 style="border:none;margin:0;padding:0;">${c.nom}</h2></div>
            </div>
            <p>${c.desc}</p>
            <div style="display:flex;gap:10px;flex-wrap:wrap;font-size:.79rem;">
                <div style="flex:1;min-width:150px;"><strong style="color:var(--bk-royal);">Classes :</strong> <em style="color:rgba(30,21,9,.6);">${c.classes}</em></div>
                <div style="flex:1;min-width:150px;"><strong style="color:var(--bk-royal);">Exemples :</strong> <em style="color:rgba(30,21,9,.6);">${c.ex}</em></div>
            </div>
        </div>`).join('');

        return `<div class="book-page">
        <h1 class="page-title cinzel">Les 6 Caractéristiques</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>Six valeurs définissent chaque personnage. Le <strong>modificateur</strong> = (Score − 10) ÷ 2, arrondi à l'inférieur. C'est lui — pas le score brut — qui est ajouté à la plupart des jets.</p>
        ${cards}
        <div class="ornament-divider"><span>✦</span></div>
        <h2>📊 Scores → Modificateurs</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
        <table class="carac-table"><thead><tr><th>Score</th><th>Modificateur</th></tr></thead><tbody>
        ${Array.from({length:20},(_,i)=>{const s=i+1,m=Math.floor((s-10)/2),c=m<0?'modif-neg':m>0?'modif-pos':'modif-zero';return `<tr><td>${s}</td><td class="${c}" style="font-weight:bold;">${m>=0?'+'+m:m}</td></tr>`;}).join('')}
        </tbody></table>
        <div><h3>💡 Échelle des Scores</h3>
        <table class="bk-table"><thead><tr><th>Score</th><th>Niveau</th></tr></thead><tbody>
        ${[['1','Catastrophique'],['2–3','Pitoyable'],['4–5','Très faible'],['6–7','Faible'],['8–9','En dessous de la moyenne'],['10–11','Humain moyen'],['12–13','Légèrement supérieur'],['14–15','Nettement supérieur'],['16–17','Remarquable'],['18–19','Exceptionnel'],['20','Limite humaine']].map(([s,n])=>`<tr><td style="font-family:var(--bk-font-title);">${s}</td><td style="font-size:.8rem;">${n}</td></tr>`).join('')}
        </tbody></table></div>
        </div>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>🎯 Jets de Sauvegarde</h2>
        <p>d20 + modificateur + maîtrise (si applicable) ≥ DD de l'effet.</p>
        <table class="bk-table"><thead><tr><th>Sauvegarde</th><th>Protège contre…</th></tr></thead><tbody>
        ${[['Force','Être repoussé, retenu, déplacé'],['Dextérité','Explosions, souffles, pièges de zone'],['Constitution','Poisons, maladies, concentration'],['Intelligence','Illusions, possession mentale'],['Sagesse','Charme, peur, domination'],['Charisme','Bannissement, intrusion d\'entité']].map(([s,d])=>`<tr><td style="font-family:var(--bk-font-title);font-weight:bold;">${s}</td><td style="font-size:.83rem;">${d}</td></tr>`).join('')}
        </tbody></table>
        </div>`;
    },

    renderNiveaux() {
        const bm=[0,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6];
        const xp=[0,300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000];
        const desc={1:'Novice',2:'Apprenti',3:'Archétype débloqué',4:'Amél. carac.',5:'Attaque extra',6:'Cap. archétype',7:'Maîtrise++',8:'Amél. carac.',9:'Sorts niv.5',10:'Cap. archétype',11:'Sorts niv.6',12:'Amél. carac.',13:'Sorts niv.7',14:'Cap. archétype',15:'Sorts niv.8',16:'Amél. carac.',17:'Sorts niv.9',18:'Maîtrise sorts',19:'Amél. carac.',20:'Capacité légendaire'};
        const rows=Array.from({length:20},(_,i)=>{
            const n=i+1,xpn=xp[i+1]?xp[i+1].toLocaleString('fr'):'—';
            return `<tr><td><span class="niveau-badge">${n}</span></td><td style="font-family:var(--bk-font-title);color:var(--bk-royal);">+${bm[n]}</td><td>${xp[i].toLocaleString('fr')}</td><td>${xpn}</td><td style="font-size:.78rem;color:rgba(30,21,9,.55);">${desc[n]||'—'}</td></tr>`;
        }).join('');
        return `<div class="book-page">
        <h1 class="page-title cinzel">Niveaux & Progression</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>Les personnages progressent en accumulant de l'<strong>expérience (XP)</strong>. À chaque niveau : nouveaux PV, améliorations de classe, et parfois une <strong>Amélioration de Caractéristique</strong> (+2 à une carac ou +1 à deux).</p>
        <h2>📈 Table de Progression</h2>
        <table class="niveau-table"><thead><tr><th>Niv.</th><th>Bonus Maîtrise</th><th>XP requis</th><th>XP prochain niv.</th><th>Palier</th></tr></thead><tbody>${rows}</tbody></table>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>💪 Améliorations de Caractéristiques</h2>
        <p>Aux niveaux <strong>4, 8, 12, 16 et 19</strong> (variables selon la classe), vous choisissez :</p>
        <div class="book-card"><ul class="trait-list">
            <li><span class="trait-ico">⬆️</span><span><span class="trait-name">+2 à une caractéristique</span> (maximum 20 sans magie)</span></li>
            <li><span class="trait-ico">⬆️</span><span><span class="trait-name">+1 à deux caractéristiques</span> différentes (maximum 20 chacune)</span></li>
            <li><span class="trait-ico">🎓</span><span><span class="trait-name">Don</span> — talent spécial si les Dons sont activés</span></li>
        </ul></div>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>🏆 Points de Vie & Dés de Vie</h2>
        <div class="book-card">
            <p><strong>PV niv.1 :</strong> DV max + modificateur CON</p>
            <p><strong>PV chaque niveau :</strong> jet DV (ou moyenne) + modificateur CON</p>
            <p><strong>Repos court :</strong> dépenser des DV → récupérer PV (jet DV + mod. CON par dé dépensé).</p>
            <p><strong>Repos long :</strong> récupère la moitié des DV totaux.</p>
        </div></div>`;
    },

    renderRaces() {
        const races=window.RPG_RACES||{};
        let h=`<div class="book-page"><h1 class="page-title cinzel">Les Peuples du Royaume</h1><div class="ornament-center">❧ ✦ ❧</div><p>Choisissez le peuple qui résonne avec votre âme — il façonnera vos capacités, vos traits et votre rôle dans le monde.</p>`;
        for (let [nom,d] of Object.entries(races)) {
            const bon=Object.entries(d.bonus||{}).map(([s,v])=>`<span class="stat-tag">${s.toUpperCase()} +${v}</span>`).join('');
            h+=`<div class="book-card">
            <div class="book-card-header"><span class="book-card-icon">${d.icone}</span><div class="book-card-title"><h2>${nom}</h2><div class="card-subtitle">${_descStr(d.tooltip)}</div></div></div>
            <div class="stat-grid">${bon}</div>
            ${d.traits?`<ul class="trait-list">${d.traits.map(t=>`<li><span class="trait-ico">${t.icone}</span><span><span class="trait-name">${t.nom} :</span>${t.desc}</span></li>`).join('')}</ul>`:''}
            <button class="card-desc-toggle"><span class="toggle-label">Lire la description</span><span class="toggle-arrow">▸</span></button>
            <div class="card-desc-body">${_descStr(d.description_joueur)}</div></div>`;
        }
        return h+`</div>`;
    },

    renderRaceDetail(nom) {
        const d=(window.RPG_RACES||{})[nom]; if(!d) return `<div class="book-page"><p>Race introuvable.</p></div>`;
        const bon=Object.entries(d.bonus||{}).map(([s,v])=>`<span class="stat-tag">${s.toUpperCase()} +${v}</span>`).join('');
        return `<div class="book-page">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:5px;"><span style="font-size:2.8rem;">${d.icone}</span><div><h1 class="page-title cinzel" style="text-align:left;margin:0;">${nom}</h1><div style="font-style:italic;color:rgba(62,32,6,.55);margin-top:2px;">${_descStr(d.tooltip)}</div></div></div>
        <div class="ornament-center">❧ ✦ ❧</div>
        <h2>⚡ Bonus</h2><div class="stat-grid">${bon}</div>
        ${d.traits?`<h2>🌟 Traits Raciaux</h2><ul class="trait-list">${d.traits.map(t=>`<li><span class="trait-ico">${t.icone}</span><span><span class="trait-name">${t.nom} :</span>${t.desc}</span></li>`).join('')}</ul>`:''}
        <h2>📖 Description</h2><div class="book-intro-box" style="font-style:normal;white-space:pre-line;">${_descStr(d.description_joueur)}</div>
        </div>`;
    },

    renderClasses() {
        const cl=window.RPG_CLASSES||{};
        let h=`<div class="book-page"><h1 class="page-title cinzel">Les Vocations</h1><div class="ornament-center">❧ ✦ ❧</div><p>Votre vocation est le chemin que votre âme a choisi. Chaque classe offre un style de jeu unique.</p>`;
        for (let [nom,d] of Object.entries(cl)) {
            const bon=Object.entries(d.bonus||{}).map(([s,v])=>`<span class="stat-tag positive">${s.toUpperCase()} +${v}</span>`).join('');
            h+=`<div class="book-card">
            <div class="book-card-header"><span class="book-card-icon">${d.icone}</span><div class="book-card-title"><h2>${nom}</h2><div class="card-subtitle">${_descStr(d.tooltip)}</div></div><span class="stat-tag dv">d${d.de_vie||d.des_vie||'?'}</span></div>
            <div class="stat-grid">${bon}</div>
            ${d.traits?`<ul class="trait-list">${d.traits.map(t=>`<li><span class="trait-ico">${t.icone}</span><span><span class="trait-name">${t.nom} :</span>${t.desc}</span></li>`).join('')}</ul>`:''}
            <button class="card-desc-toggle"><span class="toggle-label">Lire la description</span><span class="toggle-arrow">▸</span></button>
            <div class="card-desc-body">${_descStr(d.description_joueur||d.description)}</div></div>`;
        }
        return h+`</div>`;
    },

    renderClasseDetail(nom) {
        const d=(window.RPG_CLASSES||{})[nom]; if(!d) return `<div class="book-page"><p>Classe introuvable.</p></div>`;
        const bon=Object.entries(d.bonus||{}).map(([s,v])=>`<span class="stat-tag positive">${s.toUpperCase()} +${v}</span>`).join('');
        return `<div class="book-page">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:5px;"><span style="font-size:2.8rem;">${d.icone}</span><div><h1 class="page-title cinzel" style="text-align:left;margin:0;">${nom}</h1><div style="font-style:italic;color:rgba(62,32,6,.55);margin-top:2px;">${_descStr(d.tooltip)}</div></div></div>
        <div class="ornament-center">❧ ✦ ❧</div>
        <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:16px;"><span class="stat-tag dv">Dé de Vie : d${d.de_vie||d.des_vie||'?'}</span>${bon}</div>
        ${d.traits?`<h2>⚡ Capacités</h2><ul class="trait-list">${d.traits.map(t=>`<li><span class="trait-ico">${t.icone}</span><span><span class="trait-name">${t.nom} :</span>${t.desc}</span></li>`).join('')}</ul>`:''}
        <h2>📖 Description</h2><div class="book-intro-box" style="font-style:normal;white-space:pre-line;">${_descStr(d.description_joueur||d.description)}</div>
        </div>`;
    },

    renderAlignements() {
        const al=window.RPG_ALIGNEMENTS||{};
        const entries=Object.entries(al);
        const cards=entries.map(([nom,d],i)=>`
        <div class="align-card" data-idx="${i}" style="border-top:3px solid ${d.couleur||'var(--bk-royal)'};">
            <div class="align-card-top"><span class="align-ico">${d.icone}</span><div><div class="align-name">${nom}</div><div class="align-titre">${d.titre||''}</div></div></div>
            <div class="align-desc">${_descStr(d.desc||d.tooltip)}</div>
        </div>
        <div class="grade-detail-panel" id="align-detail-${i}">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:13px;padding-bottom:11px;border-bottom:1px solid rgba(200,168,75,.3);">
                <span style="font-size:1.9rem;">${d.icone}</span>
                <h2 style="margin:0;padding:0;border:none;font-family:var(--bk-font-title);color:var(--bk-royal);font-size:1.05rem;">${nom} — ${d.titre||''}</h2>
            </div>
            <div style="white-space:pre-line;font-size:.86rem;line-height:1.78;color:#1e1509;">${_descStr(d.description_joueur||d.desc)}</div>
        </div>`).join('');

        return `<div class="book-page">
        <h1 class="page-title cinzel">Les 9 Alignements</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>L'alignement est la boussole morale d'un personnage — une tendance, pas une cage. <em>Cliquez pour en savoir plus.</em></p>
        <div class="align-grid">${cards}</div>
        </div>`;
    },

    renderArmes() {
        const armes=window.MATERIEL_ARMES||{};
        const cats=[...new Set(Object.values(armes).map(a=>a.categorie).filter(Boolean))];
        let rows='';
        for (let [nom,a] of Object.entries(armes)) {
            const dc=a.type_degats==='tranchant'?'tranchant':a.type_degats==='perforant'?'perforant':'contondant';
            const props=(a.proprietes||[]).map(p=>`<span class="prop">${p}</span>`).join(' · ');
            rows+=`<tr data-cat="${a.categorie||''}"><td><strong>${a.icone||'⚔️'} ${nom}</strong>${props?`<div style="margin-top:2px;">${props}</div>`:''}</td><td style="font-family:var(--bk-font-title);font-weight:bold;">${a.degats||'—'}</td><td><span class="dmg-tag ${dc}">${a.type_degats||'—'}</span></td><td>${a.poids||'—'}</td><td><span class="price-tag">${a.prix||'—'}</span></td></tr>`;
        }
        return `<div class="book-page">
        <h1 class="page-title cinzel">L'Arsenal Royal</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>De la humble dague à la grande épée bâtarde. Les armes <em>courantes</em> sont utilisables par tous ; les armes <em>de guerre</em> requièrent une maîtrise spécifique.</p>
        <div class="bk-filters"><button class="bk-filter-btn active" data-cat="all" data-table="armes-tb">Toutes</button>${cats.map(c=>`<button class="bk-filter-btn" data-cat="${c}" data-table="armes-tb">${c}</button>`).join('')}</div>
        <table class="bk-table"><thead><tr><th>Arme</th><th>Dégâts</th><th>Type</th><th>Poids</th><th>Prix</th></tr></thead><tbody id="armes-tb">${rows}</tbody></table>
        </div>`;
    },

    renderArmures() {
        const armures=window.MATERIEL_ARMURES||{};
        const cats=[...new Set(Object.values(armures).map(a=>a.categorie).filter(Boolean))];
        let rows='';
        for (let [nom,a] of Object.entries(armures)) {
            const disc=a.discretion?`<span class="stat-tag warn" style="font-size:.67rem;">Désavantage Discrétion</span>`:'';
            const fm=a.force_min?`<span class="stat-tag" style="font-size:.67rem;">FOR ${a.force_min}+</span>`:'';
            rows+=`<tr data-cat="${a.categorie||''}"><td><strong>${a.icone||'🛡️'} ${nom}</strong>${fm||disc?`<div style="margin-top:3px;display:flex;gap:3px;flex-wrap:wrap;">${fm}${disc}</div>`:''}</td><td><span class="stat-tag ca">${a.ca||'—'}</span></td><td>${a.poids||'—'}</td><td><span class="price-tag">${a.prix||'—'}</span></td></tr>`;
        }
        return `<div class="book-page">
        <h1 class="page-title cinzel">Les Armures</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>La <strong>Classe d'Armure (CA)</strong> détermine votre résistance aux coups.</p>
        <div class="book-card"><ul class="trait-list">
            <li><span class="trait-ico">🥋</span><span><span class="trait-name">Légère :</span> CA = base + mod. DEX (sans limite). Idéale pour les classes agiles.</span></li>
            <li><span class="trait-ico">🔗</span><span><span class="trait-name">Intermédiaire :</span> CA = base + mod. DEX (max +2). Compromis protection/mobilité.</span></li>
            <li><span class="trait-ico">⚔️</span><span><span class="trait-name">Lourde :</span> CA fixe. Peut exiger une Force minimum + désavantage Discrétion.</span></li>
            <li><span class="trait-ico">🛡️</span><span><span class="trait-name">Bouclier :</span> +2 CA. Incompatible avec armes à deux mains.</span></li>
        </ul></div>
        <div class="bk-filters"><button class="bk-filter-btn active" data-cat="all" data-table="armures-tb">Toutes</button>${cats.map(c=>`<button class="bk-filter-btn" data-cat="${c}" data-table="armures-tb">${c}</button>`).join('')}</div>
        <table class="bk-table"><thead><tr><th>Armure</th><th>CA</th><th>Poids</th><th>Prix</th></tr></thead><tbody id="armures-tb">${rows}</tbody></table>
        </div>`;
    },

    renderEquipement() {
        const eq=window.MATERIEL_EQUIPEMENT||{};
        const ob=window.MATERIEL_OBJETS||{};
        const cats=[...new Set(Object.values(eq).map(e=>e.categorie).filter(Boolean))];
        let rows='';
        for (let [nom,e] of Object.entries(eq)) {
            const props=(e.proprietes||[]).map(p=>`<span class="prop">${p}</span>`).join(' · ');
            rows+=`<tr data-cat="${e.categorie||''}"><td><strong>${e.icone||'📦'} ${nom}</strong>${props?`<div style="margin-top:2px;">${props}</div>`:''}</td><td>${e.poids||'—'}</td><td><span class="price-tag">${e.prix||'—'}</span></td></tr>`;
        }
        let rowsOb='';
        for (let [nom,e] of Object.entries(ob)) {
            const props=(e.proprietes||[]).map(p=>`<span class="prop">${p}</span>`).join(' · ');
            rowsOb+=`<tr data-cat="${e.categorie||''}"><td><strong>${e.icone||'🎵'} ${nom}</strong>${props?`<div style="margin-top:2px;">${props}</div>`:''}</td><td>${e.poids||'—'}</td><td><span class="price-tag">${e.prix||'—'}</span></td></tr>`;
        }
        return `<div class="book-page">
        <h1 class="page-title cinzel">L'Équipement d'Aventure</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>De la fiole d'acide à la corde de chanvre — l'équipement bien choisi fait souvent la différence entre la victoire et le désastre.</p>
        <div class="bk-filters"><button class="bk-filter-btn active" data-cat="all" data-table="eq-tb">Tout</button>${cats.map(c=>`<button class="bk-filter-btn" data-cat="${c}" data-table="eq-tb">${c}</button>`).join('')}</div>
        <h2>🎒 Équipement & Substances</h2>
        <table class="bk-table"><thead><tr><th>Objet</th><th>Poids</th><th>Prix</th></tr></thead><tbody id="eq-tb">${rows}</tbody></table>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>🎵 Instruments, Jeux & Divers</h2>
        <table class="bk-table"><thead><tr><th>Objet</th><th>Poids</th><th>Prix</th></tr></thead><tbody>${rowsOb}</tbody></table>
        </div>`;
    },

    renderAuberge() {
        const hebergement=[
            {nom:'Lit en dortoir',ico:'🛏️',prix:'7 pc/nuit',desc:'Salle partagée avec inconnus. Peu confortable mais économique.'},
            {nom:'Chambre simple',ico:'🛏️',prix:'5 pa/nuit',desc:'Chambre individuelle, lit, chandelle, porte verrouillable.'},
            {nom:'Chambre confortable',ico:'🏨',prix:'8 pa/nuit',desc:'Lit de qualité, table, bassin d\'eau chaude. Repas livrable.'},
            {nom:'Suite privée',ico:'🏰',prix:'2 po/nuit',desc:'Plusieurs pièces, serviteurs, bain chaud sur demande.'},
            {nom:'Repas frugal',ico:'🥣',prix:'3 pc',desc:'Soupe épaisse, pain rassis, eau ou petite bière.'},
            {nom:'Repas ordinaire',ico:'🍖',prix:'1 pa',desc:'Ragoût, légumes, pain frais, chopine de bière.'},
            {nom:'Repas de qualité',ico:'🍗',prix:'5 pa',desc:'Viande rôtie, légumes de saison, vin correct.'},
            {nom:'Repas de banquet',ico:'🍽️',prix:'10 po',desc:'Table d\'apparat, plusieurs plats, vin millésimé, service.'},
            {nom:'Bain chaud',ico:'🛁',prix:'3 pa',desc:'Cuve de bois, eau chaude parfumée aux herbes.'},
            {nom:'Blanchisserie',ico:'👕',prix:'1 pa',desc:'Nettoyage d\'un ensemble de vêtements ou équipement léger.'},
            {nom:'Soins de base',ico:'💊',prix:'5 pa',desc:'Pansements, herbes. Récupérer 1d4 PV sans dépenser de DV.'},
            {nom:'Garde du cheval (nuit)',ico:'🐴',prix:'5 pa',desc:'Stalle, foin, eau, surveillance pour une monture.'},
            {nom:'Passage par bac',ico:'⛵',prix:'1 pc – 1 pa',desc:'Traversée d\'une rivière ou bras de mer court.'},
            {nom:'Messager (local)',ico:'📨',prix:'2 pc',desc:'Livraison d\'un message dans la même ville.'},
            {nom:'Messager (longue distance)',ico:'📜',prix:'2 pa / lieue',desc:'Transport d\'un parchemin entre agglomérations.'},
            {nom:'Service de garde (nuit)',ico:'⚔️',prix:'2 pa',desc:'Un garde armé surveille votre chambre ou campement.'},
            {nom:'Location de cheval (jour)',ico:'🐎',prix:'3 pa',desc:'Monture de selle pour la journée. À rendre en bon état.'},
        ];
        const rows=hebergement.map(h=>`<tr><td><strong>${h.ico} ${h.nom}</strong></td><td><span class="price-tag">${h.prix}</span></td><td style="font-size:.81rem;color:rgba(30,21,9,.65);">${h.desc}</td></tr>`).join('');
        return `<div class="book-page">
        <h1 class="page-title cinzel">Auberge, Services & Vie Courante</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>Chaque nuit sans abri est un risque supplémentaire. Les auberges et services du royaume offrent gîte, couvert et bien d'autres commodités.</p>
        <div class="book-card">
        <h3>🏰 Mode de Vie Hebdomadaire</h3>
        <table class="bk-table"><thead><tr><th>Mode de vie</th><th>Coût/semaine</th><th>Description</th></tr></thead><tbody>
        ${[['😔 Misérable','Rien','Mendier, ruelles, déchets'],['🏚️ Pauvre','1 pa','Dortoir ou chez l\'habitant, repas maigres'],['🏘️ Modeste','1 po','Chambre simple, repas ordinaires, bière'],['🏠 Confortable','2 po','Chambre propre, bonne table, petits luxes'],['🏡 Aisé','4 po','Belle chambre, bons vins, serviteurs ponctuels'],['🏰 Aristocratique','10 po+','Suite, banquets, serviteurs dédiés, luxe']].map(([m,c,d])=>`<tr><td style="font-family:var(--bk-font-title);font-size:.83rem;">${m}</td><td><span class="price-tag">${c}</span></td><td style="font-size:.79rem;">${d}</td></tr>`).join('')}
        </tbody></table></div>
        <h2>🍺 Services à la Carte</h2>
        <table class="bk-table"><thead><tr><th>Service</th><th>Prix</th><th>Description</th></tr></thead><tbody>${rows}</tbody></table>
        </div>`;
    },

    renderMontures() {
        const mo=window.MATERIEL_MONTURES||{};
        const ve=window.MATERIEL_VEHICULES||{};
        const cats=[...new Set(Object.values(mo).map(m=>m.categorie).filter(Boolean))];
        let rowsM='';
        for (let [nom,m] of Object.entries(mo)) {
            const props=(m.proprietes||[]).map(p=>`<span class="prop">${p}</span>`).join(' · ');
            rowsM+=`<tr data-cat="${m.categorie||''}"><td><strong>${m.icone||'🐎'} ${nom}</strong><br><span style="font-size:.7rem;color:rgba(62,32,6,.45);font-style:italic;">${m.categorie||''}</span></td><td>${m.vitesse||'—'}</td><td>${m.charge_max||'—'}</td><td><span class="price-tag">${m.cout||'—'}</span></td></tr>`;
        }
        let rowsV='';
        for (let [nom,v] of Object.entries(ve)) {
            rowsV+=`<tr><td><strong>${v.icone||'🚗'} ${nom}</strong><br><span style="font-size:.7rem;color:rgba(62,32,6,.45);">${v.categorie||''}</span></td><td>${v.vitesse||'—'}</td><td>${v.charge_max||'—'}</td><td><span class="price-tag">${v.cout||'—'}</span></td></tr>`;
        }
        return `<div class="book-page">
        <h1 class="page-title cinzel">Montures & Véhicules</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>Une monture multiplie votre vitesse et votre capacité de transport. Un cheval de selle couvre ~55 km/jour sur route dégagée (vs ~30 km à pied).</p>
        <div class="book-card"><ul class="trait-list">
            <li><span class="trait-ico">⚔️</span><span><span class="trait-name">Combat monté :</span> Seuls les chevaux de guerre sont entraînés. Les autres paniqueront au premier sang.</span></li>
            <li><span class="trait-ico">⚖️</span><span><span class="trait-name">Surcharge :</span> Au-delà du poids max, la monture ralentit ou refuse d'avancer.</span></li>
        </ul></div>
        <div class="bk-filters"><button class="bk-filter-btn active" data-cat="all" data-table="mo-tb">Toutes</button>${cats.map(c=>`<button class="bk-filter-btn" data-cat="${c}" data-table="mo-tb">${c}</button>`).join('')}</div>
        <h2>🐎 Montures</h2>
        <table class="bk-table"><thead><tr><th>Monture</th><th>Vitesse</th><th>Charge max</th><th>Prix</th></tr></thead><tbody id="mo-tb">${rowsM}</tbody></table>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>🚗 Véhicules & Transports</h2>
        <table class="bk-table"><thead><tr><th>Véhicule</th><th>Vitesse</th><th>Capacité</th><th>Prix</th></tr></thead><tbody>${rowsV}</tbody></table>
        </div>`;
    },

    renderMonnaie() {
        const mo=window.RPG_MONNAIE||{};
        const or=window.RPG_MONNAIE_ORDRE||Object.keys(mo);
        const cards=or.map(a=>{const m=mo[a];if(!m)return'';return`<div class="monnaie-card" style="border-top:3px solid ${m.couleur||'var(--bk-gold)'};">
        <div class="monnaie-icon">${m.icone}</div><div class="monnaie-nom">${m.nom} (${a})</div><div class="monnaie-valeur">= ${m.valeur_pc} pc</div>
        <div style="font-size:.75rem;color:rgba(30,21,9,.55);margin-top:7px;line-height:1.55;">${m.description||''}</div></div>`;}).join('');
        return `<div class="book-page">
        <h1 class="page-title cinzel">Monnaie & Commerce</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>Cinq devises frappées à l'effigie du Roi Karl. La pièce d'or est la référence du marchand ; la pièce de cuivre, celle du quotidien.</p>
        <div class="monnaie-grid">${cards}</div>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>🔄 Table de Conversion</h2>
        <table class="bk-table"><thead><tr><th>Devise</th><th>en pp</th><th>en po</th><th>en pe</th><th>en pa</th><th>en pc</th></tr></thead><tbody>
        <tr><td><strong>1 Platine (pp)</strong></td><td>1</td><td>10</td><td>20</td><td>100</td><td>1 000</td></tr>
        <tr><td><strong>1 Or (po)</strong></td><td>0,1</td><td>1</td><td>2</td><td>10</td><td>100</td></tr>
        <tr><td><strong>1 Électrum (pe)</strong></td><td>0,05</td><td>0,5</td><td>1</td><td>5</td><td>50</td></tr>
        <tr><td><strong>1 Argent (pa)</strong></td><td>0,01</td><td>0,1</td><td>0,2</td><td>1</td><td>10</td></tr>
        <tr><td><strong>1 Cuivre (pc)</strong></td><td>0,001</td><td>0,01</td><td>0,02</td><td>0,1</td><td>1</td></tr>
        </tbody></table>
        <div class="ornament-divider"><span>✦</span></div>
        <h2>💼 Repères de Prix</h2>
        <table class="bk-table"><thead><tr><th>Article</th><th>Prix typique</th></tr></thead><tbody>
        ${[['Repas frugal','3 pc'],['Nuit en dortoir','7 pc'],['Repas ordinaire','1 pa'],['Chambre simple','5 pa/nuit'],['Cheval de selle','75 po'],['Armure de plaques','1 500 po'],['Manoir moyen','25 000 po'],['Château royal','500 000 po+']].map(([a,p])=>`<tr><td>${a}</td><td><span class="price-tag">${p}</span></td></tr>`).join('')}
        </tbody></table></div>`;
    },

    renderGrades() {
        const grades=window.RPG_GRADES||[];
        const cards=grades.map((g,i)=>{
            const seuil=g.seuil===0?'Dès le 1er jour':`À partir de ${g.seuil} jour${g.seuil>1?'s':''}`;
            const desc=_descStr(g.description_joueur||g.tooltip);
            const tooltipTxt=_descStr(g.tooltip||g.description_joueur);
            return `
            <div class="grade-card" data-idx="${i}" style="padding-left:18px;">
                <div style="position:absolute;left:0;top:0;bottom:0;width:4px;background:${g.coul||'var(--bk-royal)'};border-radius:2px 0 0 2px;"></div>
                <div class="grade-card-header"><span class="grade-ico">${g.icone}</span><div><div class="grade-name">${g.nom}</div><div class="grade-seuil">${seuil}</div></div></div>
                <div class="grade-tooltip">${tooltipTxt}</div>
            </div>
            <div class="grade-detail-panel" id="grade-detail-${i}">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:13px;padding-bottom:11px;border-bottom:1px solid rgba(200,168,75,.3);">
                    <span style="font-size:1.8rem;">${g.icone}</span>
                    <div><h2 style="margin:0;padding:0;border:none;font-family:var(--bk-font-title);color:var(--bk-royal);font-size:1.05rem;">${g.nom}</h2><div style="font-size:.7rem;color:rgba(62,32,6,.45);">${seuil}</div></div>
                </div>
                <div style="white-space:pre-line;font-size:.86rem;line-height:1.78;color:#1e1509;">${desc}</div>
            </div>`;
        }).join('');
        return `<div class="book-page">
        <h1 class="page-title cinzel">Noblesse & Hiérarchie</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>Les rangs s'obtiennent par la fidélité et la présence. Chaque jour passé parmi les frères et sœurs d'armes forge la réputation et élève le rang. <em>Cliquez sur un rang pour en savoir plus.</em></p>
        <div class="grade-grid">${cards}</div>
        </div>`;
    },

    renderLois() {
        const lois=[
            {ico:'🤝',titre:'Courtoisie',texte:"L'insulte, le mépris ou le harcèlement envers un frère ou une sœur d'armes est proscrit. Le respect est la première armure de la Table Ronde.",sanction:'Avertissement, puis exclusion temporaire ou définitive.'},
            {ico:'⚜️',titre:'Allégeance',texte:"Le respect envers le Roi Karl et le Conseil est absolu. Les décisions du Conseil sont finales. La contestation se fait par voie diplomatique, jamais par la subversion.",sanction:'Rétrogradation de rang, exclusion selon la gravité.'},
            {ico:'🔒',titre:'Sagesse & Discrétion',texte:"Le respect de la vie privée de chaque membre est sacré. Aucune information personnelle ne sera partagée sans consentement explicite. Ce qui se dit au feu de camp reste au feu de camp.",sanction:'Bannissement immédiat sans appel.'},
            {ico:'🏆',titre:'Honneur & Probité',texte:"La fourberie, la triche et la tricherie dans les tournois ou les débats mènent au bannissement définitif. Un chevalier vaut sa parole.",sanction:'Exclusion définitive des archives royales.'},
            {ico:'🛡️',titre:'Loyauté',texte:"L'entraide est le ciment de notre Table. Nul ne laissera un compagnon dans le besoin sans offrir son aide ou signaler la situation au Conseil.",sanction:'Mise à l\'écart des missions royales.'},
        ];
        const items=lois.map((l,i)=>`
        <div class="law-item">
            <div class="law-number">${l.ico}</div>
            <div class="law-content">
                <h3>Loi ${['I','II','III','IV','V'][i]} — ${l.titre}</h3>
                <p>${l.texte}</p>
                <p style="font-size:.78rem;color:rgba(122,0,0,.6);margin-top:4px;">⚖️ <em>${l.sanction}</em></p>
            </div>
        </div>`).join('');
        return `<div class="book-page">
        <h1 class="page-title cinzel">Lois du Royaume</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <div class="book-intro-box">Ces lois ne sont pas des suggestions — elles sont les piliers qui maintiennent debout la Table Ronde depuis sa fondation.<cite>— Proclamation du Roi Karl, Année de fondation</cite></div>
        ${items}
        <div class="ornament-divider"><span>✦</span></div>
        <div style="text-align:center;font-family:var(--bk-font-title);font-size:.82rem;color:rgba(122,0,0,.5);letter-spacing:.08em;">Signé et scellé de la Main du Roi Karl<br><span style="font-size:1.3rem;opacity:.3;margin-top:4px;display:block;">⚜️</span></div>
        </div>`;
    },

    /* ─────────────────── SORTS & MAGIE ─────────────────── */

    renderSorts() {
        const cl = window.RPG_CLASSES || {};
        const lanceurs = Object.entries(cl).filter(([k]) => (window.SORTS_PAR_CLASSE||{})[k] !== undefined);
        const cartes = lanceurs.map(([nom, d]) => {
            const info = SORTS_PAR_CLASSE[nom] || {};
            const carac = info.carac_sort || '—';
            const slots = info.emplacements_niv1 || '—';
            return `<div class="book-card" style="cursor:pointer;" data-nav="sorts__${nom}">
                <div class="book-card-header">
                    <span class="book-card-icon">${d.icone}</span>
                    <div class="book-card-title">
                        <h2 style="margin:0;padding:0;border:none;">${nom}</h2>
                        <div class="card-subtitle">${info.style||_descStr(d.tooltip)}</div>
                    </div>
                    <span class="stat-tag" style="background:#1a2a4a;color:#80aaff;margin-left:auto;">${carac}</span>
                </div>
                <div style="display:flex;gap:6px;flex-wrap:wrap;font-size:.78rem;">
                    <span style="color:rgba(30,21,9,.6);">Sorts niv.1 : <strong>${slots}</strong> emplacements</span>
                    ${info.sorts_connus ? `<span style="color:rgba(30,21,9,.6);">· Sorts connus : <strong>${info.sorts_connus}</strong></span>` : ''}
                </div>
            </div>`;
        }).join('');
        return `<div class="book-page">
        <h1 class="page-title cinzel">Sorts & Magie</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <div class="book-intro-box">La magie est une force qui imprègne le monde. Certains la canalisent par la foi, d'autres par l'étude, d'autres encore la portent dans leur sang. Choisissez votre vocation pour découvrir ses secrets.<cite>— Archives de la Tour des Arcanes</cite></div>
        <div class="book-card" style="margin-bottom:20px;"><ul class="trait-list">
            <li><span class="trait-ico">📖</span><span><span class="trait-name">Sorts préparés :</span> Clerc, Druide, Paladin — préparent leurs sorts chaque jour depuis une liste complète.</span></li>
            <li><span class="trait-ico">🧬</span><span><span class="trait-name">Sorts connus :</span> Barde, Ensorceleur, Occultiste — apprennent un nombre limité de sorts, toujours disponibles.</span></li>
            <li><span class="trait-ico">📚</span><span><span class="trait-name">Grimoire :</span> Le Mage copie ses sorts dans un livre — peut en préparer autant que SAG + niveau.</span></li>
            <li><span class="trait-ico">⚡</span><span><span class="trait-name">Emplacements de sort :</span> Ressource dépensée pour lancer un sort. Récupérés au repos long (Occultiste : repos court).</span></li>
            <li><span class="trait-ico">🌀</span><span><span class="trait-name">Tours de magie :</span> Sorts mineurs lancés à volonté — illimités, jamais épuisés.</span></li>
        </ul></div>
        <h2>✨ Classes qui lancent des sorts</h2>
        ${cartes}
        </div>`;
    },

    renderSortsClasse(nom) {
        const d = (window.RPG_CLASSES || {})[nom];
        if (!d) return `<div class="book-page"><p>Classe introuvable.</p></div>`;
        const info = SORTS_PAR_CLASSE[nom] || {};
        const sorts = info.sorts || [];
        const niveaux = [0,1,2,3,4,5,6,7,8,9];

        // Table emplacements
        const slotRows = (info.table_emplacements || []).map(r => {
            const cells = niveaux.map(n => `<td style="text-align:center;">${r.slots[n]||'—'}</td>`).join('');
            return `<tr><td style="text-align:center;"><span class="niveau-badge">${r.niveau}</span></td>${cells}</tr>`;
        }).join('');

        // Sorts par niveau
        const sortsSections = niveaux.map(n => {
            const liste = sorts.filter(s => s.niveau === n);
            if (!liste.length) return '';
            const label = n === 0 ? 'Tours de magie (niveau 0)' : `Niveau ${n}`;
            const coulBg = n === 0 ? 'rgba(200,168,75,0.08)' : 'rgba(255,255,255,0.3)';
            const items = liste.map(s => `
                <div style="padding:10px 14px;border-bottom:1px solid rgba(0,0,0,.06);display:flex;gap:10px;align-items:flex-start;">
                    <div style="min-width:22px;text-align:center;">${s.icone||'✦'}</div>
                    <div style="flex:1;">
                        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                            <strong style="font-family:var(--bk-font-title);font-size:.88rem;color:var(--bk-royal);">${s.nom}</strong>
                            ${s.concentration ? `<span class="stat-tag warn" style="font-size:.64rem;">Concentration</span>` : ''}
                            ${s.rituel ? `<span class="stat-tag" style="font-size:.64rem;">Rituel</span>` : ''}
                            <span style="font-size:.7rem;color:rgba(62,32,6,.45);">${s.ecole||''}</span>
                        </div>
                        <div style="font-size:.78rem;color:rgba(30,21,9,.55);margin-top:2px;">
                            ${s.temps_incantation ? `⏱ ${s.temps_incantation}` : ''} 
                            ${s.portee ? `· 📍 ${s.portee}` : ''} 
                            ${s.duree ? `· ⌛ ${s.duree}` : ''}
                        </div>
                        <div style="font-size:.82rem;color:rgba(30,21,9,.7);margin-top:4px;line-height:1.55;">${s.description}</div>
                    </div>
                </div>`).join('');
            return `<div style="margin-bottom:16px;border:1px solid rgba(200,168,75,.3);border-radius:3px;overflow:hidden;">
                <div style="background:var(--bk-leather);color:var(--bk-gold);padding:7px 14px;font-family:var(--bk-font-title);font-size:.78rem;letter-spacing:.06em;">${label} <span style="opacity:.5;font-size:.7rem;">(${liste.length} sort${liste.length>1?'s':''})</span></div>
                <div style="background:${coulBg};">${items}</div>
            </div>`;
        }).join('');

        const slotTable = slotRows ? `
        <h2>📊 Emplacements de sorts par niveau</h2>
        <div style="overflow-x:auto;"><table class="bk-table" style="min-width:500px;">
        <thead><tr><th style="text-align:center;">Niv.</th>${niveaux.map(n=>`<th style="text-align:center;">${n===0?'Tours':n}</th>`).join('')}</tr></thead>
        <tbody>${slotRows}</tbody></table></div>
        <div class="ornament-divider"><span>✦</span></div>` : '';

        return `<div class="book-page">
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:5px;">
            <span style="font-size:2.8rem;">${d.icone}</span>
            <div>
                <h1 class="page-title cinzel" style="text-align:left;margin:0;">${nom}</h1>
                <div style="font-style:italic;color:rgba(62,32,6,.55);margin-top:2px;">${info.style||''}</div>
            </div>
        </div>
        <div class="ornament-center">❧ ✦ ❧</div>
        <div class="book-card" style="margin-bottom:20px;"><ul class="trait-list">
            <li><span class="trait-ico">⚡</span><span><span class="trait-name">Caractéristique :</span> ${info.carac_sort_complet||'—'}</span></li>
            <li><span class="trait-ico">📖</span><span><span class="trait-name">Méthode :</span> ${info.methode||'—'}</span></li>
            ${info.ressource_speciale ? `<li><span class="trait-ico">⚗️</span><span><span class="trait-name">Ressource spéciale :</span> ${info.ressource_speciale}</span></li>` : ''}
        </ul></div>
        ${slotTable}
        <h2>✨ Répertoire de sorts</h2>
        ${sortsSections || '<p>Aucun sort référencé pour cette classe.</p>'}
        </div>`;
    },

    /* ─────────────────── BESTIAIRE ─────────────────── */

    renderBestiaire() {
        const b = window.RPG_BESTIAIRE || {};
        const cats = window.RPG_BESTIAIRE_CATEGORIES || [];
        const resume = cats.map(c => {
            const nb = Object.values(b).filter(e => e.categorie === c.id).length;
            if (!nb) return '';
            return `<div class="book-card" style="cursor:pointer;padding:14px 18px;" data-nav="bestiaire__${c.id}">
                <div style="display:flex;align-items:center;gap:12px;">
                    <span style="font-size:2rem;">${c.icone}</span>
                    <div><div style="font-family:var(--bk-font-title);color:var(--bk-royal);font-size:.95rem;">${c.label}</div>
                    <div style="font-size:.75rem;color:rgba(62,32,6,.5);">${nb} créature${nb>1?'s':''}</div></div>
                    <span style="margin-left:auto;font-size:.75rem;color:var(--bk-gold2);">▶ Voir</span>
                </div>
            </div>`;
        }).join('');
        return `<div class="book-page">
        <h1 class="page-title cinzel">Bestiaire du Royaume</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <div class="book-intro-box">Ces pages recensent les créatures documentées par les éclaireurs de la Table Ronde. Chaque entrée représente un danger potentiel ou un allié improbable. Que le lecteur reste toujours sur ses gardes.<cite>— Frère Aldric, Archiviste Royal</cite></div>
        <div class="book-card" style="margin-bottom:20px;"><ul class="trait-list">
            <li><span class="trait-ico">⚔️</span><span><span class="trait-name">FD (Facteur de Danger) :</span> Indique la menace relative. FD 1/4 = débutant, FD 10+ = vétéran expérimenté requis.</span></li>
            <li><span class="trait-ico">✨</span><span><span class="trait-name">XP :</span> Expérience accordée à chaque membre du groupe si la créature est vaincue.</span></li>
            <li><span class="trait-ico">🛡️</span><span><span class="trait-name">CA :</span> Classe d'Armure — difficulté à toucher la créature au corps à corps ou à distance.</span></li>
        </ul></div>
        <h2>🐉 Catégories</h2>
        ${resume}
        </div>`;
    },

    renderBestiaireCat(catId) {
        const b = window.RPG_BESTIAIRE || {};
        const cats = window.RPG_BESTIAIRE_CATEGORIES || [];
        const cat = cats.find(c => c.id === catId);
        if (!cat) return `<div class="book-page"><p>Catégorie introuvable.</p></div>`;
        const creatures = Object.entries(b).filter(([,e]) => e.categorie === catId);

        const cartes = creatures.map(([nom, e], idx) => {
            const caracHtml = Object.entries(e.carac||{}).map(([k,v]) => {
                const mod = Math.floor((v-10)/2);
                const cls = mod > 0 ? 'modif-pos' : mod < 0 ? 'modif-neg' : 'modif-zero';
                return `<div style="text-align:center;flex:1;min-width:44px;">
                    <div style="font-family:var(--bk-font-title);font-size:.68rem;color:rgba(62,32,6,.5);">${k}</div>
                    <div style="font-size:.95rem;font-weight:bold;">${v}</div>
                    <div class="${cls}" style="font-size:.75rem;">${mod>=0?'+'+mod:mod}</div>
                </div>`;
            }).join('');
            const traitsHtml = (e.traits||[]).map(t =>
                `<li><span class="trait-ico">⚡</span><span><span class="trait-name">${t.nom} :</span> ${t.desc}</span></li>`
            ).join('');
            const actionsHtml = (e.actions||[]).map(a =>
                `<li><span class="trait-ico">⚔️</span><span><span class="trait-name">${a.nom} :</span> ${a.desc}</span></li>`
            ).join('');
            const reactionsHtml = (e.reactions||[]).map(r =>
                `<li><span class="trait-ico">🔄</span><span><span class="trait-name">${r.nom} :</span> ${r.desc}</span></li>`
            ).join('');
            const tags = [
                e.resistances?.length ? `<span class="stat-tag" style="background:#2a3a1a;color:#90c080;">Résist: ${e.resistances.join(', ')}</span>` : '',
                e.immunites?.length ? `<span class="stat-tag" style="background:#1a1a3a;color:#8080d0;">Immun: ${e.immunites.join(', ')}</span>` : '',
            ].filter(Boolean).join('');

            return `<div class="book-card" style="border-left:4px solid ${e.couleur||'var(--bk-royal)'};margin-bottom:14px;">
                <div class="book-card-header" style="cursor:pointer;" onclick="this.nextElementSibling.classList.toggle('open');this.querySelector('.bst-arrow').textContent=this.nextElementSibling.classList.contains('open')?'▾':'▸';">
                    <span style="font-size:1.8rem;">${e.icone}</span>
                    <div class="book-card-title" style="flex:1;">
                        <h2 style="margin:0;padding:0;border:none;">${nom}</h2>
                        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:3px;">
                            <span class="stat-tag">FD ${e.fd}</span>
                            <span class="stat-tag" style="background:#2a1a0a;color:#e8c080;">${e.xp} XP</span>
                            <span class="stat-tag ca">CA ${e.ca}</span>
                            <span style="font-size:.72rem;color:rgba(62,32,6,.5);align-self:center;">${e.taille} · ${e.categorie} · ${e.alignement}</span>
                        </div>
                    </div>
                    <span class="bst-arrow" style="font-size:1.1rem;color:var(--bk-gold2);">▸</span>
                </div>
                <div class="card-desc-body" style="margin:0;padding:0;border:none;background:transparent;">
                    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:10px;font-size:.8rem;">
                        <div>❤️ <strong>PV :</strong> ${e.pv}</div>
                        <div>🏃 <strong>Vitesse :</strong> ${e.vitesse}</div>
                        <div style="grid-column:1/-1;">👁️ <strong>Sens :</strong> ${e.sens}</div>
                    </div>
                    <div style="display:flex;gap:4px;margin-bottom:12px;background:rgba(255,255,255,.3);padding:8px;border-radius:3px;">${caracHtml}</div>
                    ${tags ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px;">${tags}</div>` : ''}
                    ${traitsHtml ? `<h3 style="margin-top:8px;">⚡ Traits</h3><ul class="trait-list">${traitsHtml}</ul>` : ''}
                    ${actionsHtml ? `<h3 style="margin-top:8px;">⚔️ Actions</h3><ul class="trait-list">${actionsHtml}</ul>` : ''}
                    ${reactionsHtml ? `<h3 style="margin-top:8px;">🔄 Réactions</h3><ul class="trait-list">${reactionsHtml}</ul>` : ''}
                    <div style="margin-top:10px;padding:10px 12px;background:rgba(255,255,255,.25);border-left:3px solid ${e.couleur||'var(--bk-gold2)'};font-style:italic;font-size:.83rem;line-height:1.6;border-radius:0 3px 3px 0;">${e.description}</div>
                    ${e.environnement?.length ? `<div style="margin-top:8px;font-size:.75rem;color:rgba(62,32,6,.5);">🌍 Environnements : ${e.environnement.join(', ')}</div>` : ''}
                </div>
            </div>`;
        }).join('');

        return `<div class="book-page">
        <h1 class="page-title cinzel">${cat.icone} ${cat.label}</h1>
        <div class="ornament-center">❧ ✦ ❧</div>
        <p>${creatures.length} créature${creatures.length>1?'s':''} répertoriée${creatures.length>1?'s':''}. <em>Cliquez sur une créature pour voir ses statistiques complètes.</em></p>
        ${cartes}
        </div>`;
    },

    renderObjetsMagiques() {
        const items = window.MAGIC_ITEMS_DATA || [];

        const parType = {};
        items.forEach(item => {
            const t = item.type || "Autres";
            if (!parType[t]) parType[t] = [];
            parType[t].push(item);
        });

        let html = `<div class="book-page">`;

        Object.entries(parType).forEach(([type, liste]) => {

            const rareteMap = {
                "Commun": "stat-tag",
                "Peu commun": "stat-tag positive",
                "Rare": "stat-tag dv",
                "Très rare": "stat-tag warn",
                "Légendaire": "stat-tag"
            };

            html += `<h2>${type} (${liste.length})</h2><div class="grade-grid">`;

            liste.forEach(item => {

                const rareteClass = rareteMap[item.rarete] || "stat-tag";

                html += `
                <div class="grade-card">
                    <div class="grade-name">${item.nom}</div>
                    <div class="grade-seuil ${rareteClass}">
                        ${item.rarete} · ${item.prix}
                    </div>
                    <div class="grade-tooltip">
                        ${item.note || "—"}
                    </div>
                </div>
                `;
            });

            html += `</div>`;
        });

        html += `</div>`;
        return html;
    },
};
document.addEventListener('DOMContentLoaded', () => {
    // Exposer les données globales si elles existent
    if (typeof MAGIC_ITEMS_DATA !== 'undefined') {
        window.MAGIC_ITEMS_DATA = MAGIC_ITEMS_DATA;
    }

    // Lancement de l'initialisation
    if (typeof Codex !== 'undefined' && typeof Codex.init === 'function') {
        Codex.init();
    } else {
        console.error("Codex ou Codex.init introuvable – vérifiez la déclaration");
    }
});
