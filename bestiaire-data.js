/**
 * ═══════════════════════════════════════════════════════════════
 *  LA TABLE RONDE (MAIS CARRÉE) — Bestiaire du Royaume
 *  Créatures, monstres et entités rencontrées en aventure
 * ═══════════════════════════════════════════════════════════════
 */

const RPG_BESTIAIRE = {

    // ── BÊTES ────────────────────────────────────────────────────
    "Loup": {
        icone: "🐺",
        categorie: "Bête",
        taille: "Moyen",
        alignement: "Non aligné",
        fd: "1/4",
        xp: 50,
        pv: "11 (2d8+2)",
        ca: 13,
        vitesse: "15 m",
        carac: { FOR:12, DEX:15, CON:12, INT:3, SAG:12, CHA:6 },
        resistances: [],
        immunites: [],
        sens: "Perception passive 13",
        traits: [
            { nom: "Odorat et ouïe aiguisés", desc: "Avantage aux tests de Perception basés sur l'odorat ou l'ouïe." },
            { nom: "Tactique de meute", desc: "Avantage aux jets d'attaque si un allié non neutralisé est adjacent à la cible." },
        ],
        actions: [
            { nom: "Morsure", desc: "Attaque de mêlée : +4 au toucher, portée 1,5 m. Dégâts : 2d4+2 perforants. Si la cible est de taille Moyenne ou inférieure, elle doit réussir un JS Force DD 11 ou être jetée à terre." },
        ],
        description: "Prédateur de meute redoutable. Un loup seul est prudent ; une meute est mortelle. Ils ciblent les créatures isolées et les harcèlent jusqu'à l'épuisement.",
        environnement: ["Forêt", "Toundra", "Collines"],
        couleur: "#5a6e3a",
    },

    "Sanglier géant": {
        icone: "🐗",
        categorie: "Bête",
        taille: "Grand",
        alignement: "Non aligné",
        fd: "2",
        xp: 450,
        pv: "42 (5d10+15)",
        ca: 12,
        vitesse: "12 m",
        carac: { FOR:17, DEX:10, CON:16, INT:2, SAG:7, CHA:5 },
        resistances: [],
        immunites: [],
        sens: "Perception passive 8",
        traits: [
            { nom: "Charge", desc: "Si le sanglier se déplace d'au moins 6 m vers une cible avant de frapper, elle subit 2d6 perforants supplémentaires et doit réussir un JS Force DD 13 ou être jetée à terre." },
            { nom: "Résolution brutale", desc: "Quand le sanglier descend à 0 PV, il effectue un dernier jet d'attaque de morsure avant de tomber." },
        ],
        actions: [
            { nom: "Défenses", desc: "Attaque de mêlée : +5 au toucher, portée 1,5 m. Dégâts : 2d6+3 tranchants." },
        ],
        description: "Imposant et agressif. Un sanglier géant défend son territoire avec une rage aveugle. Sa charge peut renverser un chevalier en armure.",
        environnement: ["Forêt", "Prairie"],
        couleur: "#7a5a2a",
    },

    "Ours brun": {
        icone: "🐻",
        categorie: "Bête",
        taille: "Grand",
        alignement: "Non aligné",
        fd: "1",
        xp: 200,
        pv: "34 (4d10+12)",
        ca: 11,
        vitesse: "12 m (6 m nage)",
        carac: { FOR:19, DEX:10, CON:16, INT:2, SAG:13, CHA:7 },
        resistances: [],
        immunites: [],
        sens: "Perception passive 13",
        traits: [
            { nom: "Odorat aiguisé", desc: "Avantage aux tests de Perception basés sur l'odorat." },
        ],
        actions: [
            { nom: "Attaques multiples", desc: "L'ours effectue deux attaques : une de griffes et une de morsure." },
            { nom: "Griffes", desc: "Attaque de mêlée : +6 au toucher. Dégâts : 2d6+4 tranchants." },
            { nom: "Morsure", desc: "Attaque de mêlée : +6 au toucher. Dégâts : 1d8+4 perforants." },
        ],
        description: "Solitaire et territorial. Généralement non-agressif à distance, l'ours brun devient imprévisible et dangereux si l'on s'approche de ses petits ou de sa nourriture.",
        environnement: ["Forêt", "Montagne", "Toundra"],
        couleur: "#8b6340",
    },

    "Araignée géante": {
        icone: "🕷️",
        categorie: "Bête",
        taille: "Grand",
        alignement: "Non aligné",
        fd: "1",
        xp: 200,
        pv: "26 (4d10+4)",
        ca: 14,
        vitesse: "9 m (escalade 9 m)",
        carac: { FOR:14, DEX:16, CON:12, INT:2, SAG:11, CHA:4 },
        resistances: [],
        immunites: [],
        sens: "Vision dans le noir 18 m, Perception passive 12, Sens des vibrations 18 m",
        traits: [
            { nom: "Marche sur les toiles", desc: "L'araignée ignore les difficultés de déplacement causées par les toiles." },
            { nom: "Sens des araignées", desc: "Perçoit les vibrations de toute créature en contact avec une toile reliée à la sienne." },
        ],
        actions: [
            { nom: "Morsure", desc: "Attaque de mêlée : +5 au toucher. Dégâts : 1d8+3 perforants. La cible doit réussir un JS Constitution DD 11 ou subir 2d8 dégâts de poison (la moitié en cas de succès). Si ce poison réduit les PV à 0, la cible est stabilisée mais empoisonnée pour 1 heure — paralysée si elle est inconsciente." },
        ],
        description: "Tisseuse de pièges silencieux. Les araignées géantes construisent des toiles dissimulées dans les grottes, ruines et forêts profondes. Elles attendent dans l'obscurité et frappent par surprise.",
        environnement: ["Donjon", "Grotte", "Forêt sombre"],
        couleur: "#2a1a3a",
    },

    // ── MORTS-VIVANTS ────────────────────────────────────────────
    "Squelette": {
        icone: "💀",
        categorie: "Mort-vivant",
        taille: "Moyen",
        alignement: "Neutre mauvais",
        fd: "1/4",
        xp: 50,
        pv: "13 (2d8+4)",
        ca: 13,
        vitesse: "9 m",
        carac: { FOR:10, DEX:14, CON:15, INT:6, SAG:8, CHA:5 },
        resistances: ["Perforants"],
        immunites: ["Poison", "Épuisement", "Empoisonné"],
        sens: "Vision dans le noir 18 m, Perception passive 9",
        traits: [],
        actions: [
            { nom: "Cimeterre", desc: "Attaque de mêlée : +4 au toucher. Dégâts : 1d6+2 tranchants." },
            { nom: "Arc court", desc: "Attaque à distance : +4 au toucher, portée 24/96 m. Dégâts : 1d6+2 perforants." },
        ],
        description: "Restes animés par une magie nécromantique. Les squelettes n'ont aucune volonté propre — ils obéissent aveuglement à celui qui les a invoqués, sans fatigue ni pitié. Faciles à détruire, dangereux en nombre.",
        environnement: ["Donjon", "Crypte", "Ruines"],
        couleur: "#c8b89a",
    },

    "Zombie": {
        icone: "🧟",
        categorie: "Mort-vivant",
        taille: "Moyen",
        alignement: "Neutre mauvais",
        fd: "1/4",
        xp: 50,
        pv: "22 (3d8+9)",
        ca: 8,
        vitesse: "6 m",
        carac: { FOR:13, DEX:6, CON:16, INT:3, SAG:6, CHA:5 },
        resistances: [],
        immunites: ["Poison", "Épuisement", "Empoisonné"],
        sens: "Vision dans le noir 18 m, Perception passive 8",
        traits: [
            { nom: "Robustesse du mort-vivant", desc: "Si les dégâts réduisent le zombie à 0 PV, il doit réussir un JS Constitution de DD 5+dégâts subis. En cas de succès, il reste à 1 PV. Impossible contre les dégâts radiants ou les coups critiques." },
        ],
        actions: [
            { nom: "Coup de poing", desc: "Attaque de mêlée : +3 au toucher. Dégâts : 1d6+1 contondants." },
        ],
        description: "Corps putréfié animé par une magie sombre. Le zombie est lent mais d'une résistance tenace — il peut encaisser des coups qui terrasseraient un homme vivant. Dangereux en meute, surtout dans les espaces confinés.",
        environnement: ["Crypte", "Donjon", "Village maudit"],
        couleur: "#4a5a2a",
    },

    "Spectre": {
        icone: "👻",
        categorie: "Mort-vivant",
        taille: "Moyen",
        alignement: "Chaotique mauvais",
        fd: "1",
        xp: 200,
        pv: "22 (5d8)",
        ca: 12,
        vitesse: "0 m (vol 18 m — sans possibilité de se suspendre)",
        carac: { FOR:1, DEX:14, CON:11, INT:10, SAG:10, CHA:11 },
        resistances: ["Acide", "Feu", "Foudre", "Tonnerre", "Contondants/Tranchants/Perforants non-magiques"],
        immunites: ["Froid", "Nécrotique", "Poison"],
        sens: "Vision dans le noir 18 m, Perception passive 10",
        traits: [
            { nom: "Passage à travers les objets", desc: "Peut se déplacer à travers objets et créatures comme terrain difficile. Subit 5 (1d10) dégâts de Force s'il finit son tour dans un objet." },
            { nom: "Luminosité incorporelle", desc: "Ne peut pas porter, ramasser ou manipuler des objets physiques." },
        ],
        actions: [
            { nom: "Drain de vie", desc: "Attaque de mêlée : +4 au toucher. Dégâts : 3d6 nécrotiques. La cible doit réussir un JS Constitution DD 10 ou voir son maximum de PV réduit du même montant jusqu'à un repos long. Si le maximum tombe à 0, la cible meurt." },
        ],
        description: "Âme torturée incapable de quitter le plan matériel. Les spectres hantent les lieux de leur mort violente, consumés par la rage et le regret. Leur toucher draine la force vitale et leur passage à travers les murs en fait des ennemis insaisissables.",
        environnement: ["Ruines", "Manoir hanté", "Ancien champ de bataille"],
        couleur: "#a0a0c0",
    },

    // ── HUMANOÏDES ───────────────────────────────────────────────
    "Gobelin": {
        icone: "👺",
        categorie: "Humanoïde",
        taille: "Petit",
        alignement: "Neutre mauvais",
        fd: "1/4",
        xp: 50,
        pv: "7 (2d6)",
        ca: 15,
        vitesse: "9 m",
        carac: { FOR:8, DEX:14, CON:10, INT:10, SAG:8, CHA:8 },
        resistances: [],
        immunites: [],
        sens: "Vision dans le noir 18 m, Perception passive 9",
        traits: [
            { nom: "Fuite nimble", desc: "Peut Désengager ou Se cacher en action bonus à chaque tour." },
        ],
        actions: [
            { nom: "Cimeterre", desc: "Attaque de mêlée : +4 au toucher. Dégâts : 1d6+2 tranchants." },
            { nom: "Arc court", desc: "Attaque à distance : +4 au toucher, portée 24/96 m. Dégâts : 1d6+2 perforants." },
        ],
        description: "Petits, rusés et lâches. Les gobelins évitent le combat direct et préfèrent tendre des embuscades, puis fuir si la situation tourne mal. Redoutables en groupe, pathétiques seuls. Souvent au service d'un chef plus puissant.",
        environnement: ["Donjon", "Forêt", "Caverne"],
        couleur: "#4a7a2a",
    },

    "Hobgobelin": {
        icone: "⚔️",
        categorie: "Humanoïde",
        taille: "Moyen",
        alignement: "Loyal mauvais",
        fd: "1/2",
        xp: 100,
        pv: "11 (2d8+2)",
        ca: 18,
        vitesse: "9 m",
        carac: { FOR:13, DEX:12, CON:12, INT:10, SAG:10, CHA:9 },
        resistances: [],
        immunites: [],
        sens: "Vision dans le noir 18 m, Perception passive 10",
        traits: [
            { nom: "Avantage martial", desc: "Une fois par tour, inflige 2d6 dégâts supplémentaires à une créature si un allié non neutralisé est adjacent à elle." },
        ],
        actions: [
            { nom: "Épée longue", desc: "Attaque de mêlée : +3 au toucher. Dégâts : 1d8+1 tranchants, ou 1d10+1 à deux mains." },
            { nom: "Arc long", desc: "Attaque à distance : +3 au toucher, portée 45/180 m. Dégâts : 1d8+1 perforants." },
        ],
        description: "Soldats disciplinés et militaristes. Contrairement aux gobelins, les hobgobelins tiennent le rang et obéissent aux ordres avec une rigueur terrifiante. Une troupe de hobgobelins est une véritable force militaire.",
        environnement: ["Forteresse", "Donjon", "Frontière"],
        couleur: "#8a3a1a",
    },

    "Bandit": {
        icone: "🗡️",
        categorie: "Humanoïde",
        taille: "Moyen",
        alignement: "Neutre mauvais",
        fd: "1/8",
        xp: 25,
        pv: "11 (2d8+2)",
        ca: 12,
        vitesse: "9 m",
        carac: { FOR:11, DEX:12, CON:12, INT:10, SAG:10, CHA:10 },
        resistances: [],
        immunites: [],
        sens: "Perception passive 10",
        traits: [],
        actions: [
            { nom: "Cimeterre", desc: "Attaque de mêlée : +3 au toucher. Dégâts : 1d6+1 tranchants." },
            { nom: "Arbalète de poing", desc: "Attaque à distance : +3 au toucher, portée 9/36 m. Dégâts : 1d6+1 perforants." },
        ],
        description: "Hors-la-loi des routes et des auberges. Les bandits opèrent en bandes, attaquant les voyageurs isolés ou les caravanes légèrement escortées. Ils fuient si la résistance est forte — leur survie prime sur le butin.",
        environnement: ["Route", "Forêt", "Ville"],
        couleur: "#6a4a2a",
    },

    "Capitaine des bandits": {
        icone: "🦹",
        categorie: "Humanoïde",
        taille: "Moyen",
        alignement: "Neutre mauvais",
        fd: "2",
        xp: 450,
        pv: "65 (10d8+20)",
        ca: 15,
        vitesse: "9 m",
        carac: { FOR:15, DEX:16, CON:14, INT:14, SAG:11, CHA:14 },
        resistances: [],
        immunites: [],
        sens: "Perception passive 10",
        traits: [],
        actions: [
            { nom: "Attaques multiples", desc: "Effectue trois attaques de mêlée : deux au cimeterre et une à la dague." },
            { nom: "Cimeterre", desc: "Attaque de mêlée : +5 au toucher. Dégâts : 1d6+3 tranchants." },
            { nom: "Dague", desc: "Attaque de mêlée ou à distance : +5 au toucher. Dégâts : 1d4+3 perforants." },
        ],
        reactions: [
            { nom: "Parade", desc: "Ajoute 3 à la CA contre une attaque de mêlée qui le toucherait, si le capitaine voit l'attaquant et tient une arme de mêlée." },
        ],
        description: "Chef d'une bande organisée. Le capitaine est plus intelligent, plus combatif et plus charismatique que ses hommes. Il inspire la loyauté par la peur autant que par le partage du butin. Dangereux au corps à corps et rusé en négociation.",
        environnement: ["Repaire", "Route", "Port"],
        couleur: "#6a2a2a",
    },

    // ── CRÉATURES MAGIQUES ────────────────────────────────────────
    "Fée follet": {
        icone: "✨",
        categorie: "Fée",
        taille: "Très petit",
        alignement: "Neutre bon",
        fd: "1/4",
        xp: 50,
        pv: "2 (1d4)",
        ca: 15,
        vitesse: "3 m (vol 12 m)",
        carac: { FOR:2, DEX:18, CON:6, INT:10, SAG:14, CHA:15 },
        resistances: [],
        immunites: [],
        sens: "Perception passive 12",
        traits: [
            { nom: "Lumière magique", desc: "Émet une lumière vive dans un rayon de 1,5 m et une lumière faible 3 m supplémentaires." },
            { nom: "Invisibilité", desc: "Peut devenir invisible jusqu'à ce qu'il attaque ou lance un sort. Objets portés et équipés également invisibles." },
        ],
        actions: [
            { nom: "Poussière de fée", desc: "(Recharge 5-6) La créature ciblée doit réussir un JS Constitution DD 10 ou être endormie pendant 1 minute. Peut réitérer le JS à chaque tour pour se réveiller." },
        ],
        description: "Petite créature lumineuse des forêts enchantées. Les fées follets sont curieuses et espièglèrent. Ils jouent des tours aux voyageurs, les égarant dans les bois — rarement avec malveillance, souvent sans conscience du danger qu'ils causent.",
        environnement: ["Forêt enchantée", "Clairière", "Marais féerique"],
        couleur: "#c0a0e0",
    },

    "Ogre": {
        icone: "👹",
        categorie: "Géant",
        taille: "Grand",
        alignement: "Chaotique mauvais",
        fd: "2",
        xp: 450,
        pv: "59 (7d10+21)",
        ca: 11,
        vitesse: "12 m",
        carac: { FOR:19, DEX:8, CON:16, INT:5, SAG:7, CHA:7 },
        resistances: [],
        immunites: [],
        sens: "Vision dans le noir 18 m, Perception passive 8",
        traits: [],
        actions: [
            { nom: "Gourdin", desc: "Attaque de mêlée : +6 au toucher. Dégâts : 2d8+4 contondants." },
            { nom: "Javelot", desc: "Attaque à distance : +6 au toucher, portée 9/36 m. Dégâts : 2d6+4 perforants." },
        ],
        description: "Brute stupide et vorace. Un ogre mange tout ce qu'il peut attraper — humains, animaux, gobelins. Il comprend le langage des géants mais parle à peine. Seule sa faim et sa colère le guident. Dangereux précisément parce qu'il ne raisonne pas.",
        environnement: ["Montagne", "Collines", "Marais"],
        couleur: "#7a6a3a",
    },

    "Dragon rouge (jeune)": {
        icone: "🐉",
        categorie: "Dragon",
        taille: "Grand",
        alignement: "Chaotique mauvais",
        fd: "10",
        xp: 5900,
        pv: "178 (17d10+85)",
        ca: 18,
        vitesse: "12 m (vol 24 m, grimper 12 m)",
        carac: { FOR:23, DEX:10, CON:21, INT:14, SAG:11, CHA:19 },
        resistances: [],
        immunites: ["Feu"],
        sens: "Vision dans le noir 36 m, Vision aveugle 9 m, Perception passive 16",
        traits: [
            { nom: "Résistance légendaire (3/jour)", desc: "Si le dragon rate un JS, il peut choisir de le réussir à la place." },
        ],
        actions: [
            { nom: "Attaques multiples", desc: "Le dragon effectue trois attaques : une de morsure et deux de griffes." },
            { nom: "Morsure", desc: "Attaque de mêlée : +10 au toucher. Dégâts : 2d10+6 perforants + 1d6 feu." },
            { nom: "Griffe", desc: "Attaque de mêlée : +10 au toucher. Dégâts : 2d6+6 tranchants." },
            { nom: "Souffle de feu", desc: "(Recharge 5-6) Cône de 9 m. JS Dextérité DD 17 : 16d6 feu en cas d'échec, la moitié en cas de succès." },
        ],
        description: "Incarnation de la tyrannie et de la cupidité. Un jeune dragon rouge est déjà une menace existentielle pour un village ou une ville de taille modeste. Arrogant, colérique, fasciné par l'or et le pouvoir. Il perçoit toute confrontation comme une offense à sa suprématie.",
        environnement: ["Montagne volcanique", "Caverne de lave", "Ruines fortifiées"],
        couleur: "#c0301a",
    },
};

// Ordre d'affichage par catégorie
const RPG_BESTIAIRE_CATEGORIES = [
    { id: "Bête",            icone: "🐾", label: "Bêtes" },
    { id: "Mort-vivant",     icone: "💀", label: "Morts-vivants" },
    { id: "Humanoïde",       icone: "👤", label: "Humanoïdes" },
    { id: "Fée",             icone: "✨", label: "Fées" },
    { id: "Géant",           icone: "🏔️", label: "Géants" },
    { id: "Dragon",          icone: "🐉", label: "Dragons" },
];

// Export
if (typeof window !== 'undefined') {
    window.RPG_BESTIAIRE            = RPG_BESTIAIRE;
    window.RPG_BESTIAIRE_CATEGORIES = RPG_BESTIAIRE_CATEGORIES;
}
if (typeof module !== 'undefined') {
    module.exports = { RPG_BESTIAIRE, RPG_BESTIAIRE_CATEGORIES };
}
