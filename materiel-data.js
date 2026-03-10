/**
 * ═══════════════════════════════════════════════════════════════
 *  LA TABLE RONDE (MAIS CARRÉE) — Données Matériel
 *  Armes, Armures, Équipement, Montures, Objets
 *  Usage : fiche personnage, échoppe, Livre du Joueur/Maître
 * ═══════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════
//  ARMES
//  Structure : { icone, categorie, degats, type_degats, poids,
//               prix, proprietes[], description }
//  Catégories : "Corps à corps courante" | "Distance courante" |
//               "Corps à corps de guerre" | "Distance de guerre"
// ═══════════════════════════════════════════════════════════════

const MATERIEL_ARMES = {

    // ── ARMES COURANTES DE CORPS À CORPS ────────────────────────

    "Bâton": {
        icone:       "🪄",
        categorie:   "Corps à corps courante",
        degats:      "1d6",
        type_degats: "contondant",
        poids:       "2 kg",
        prix:        "2 pa",
        proprietes:  ["Polyvalente (1d8)"],
        description: "Un bâton de bois solide, arme humble mais polyvalente. Tenu à deux mains, il inflige davantage de dégâts. Favori des moines, des voyageurs et des druides."
    },

    "Dague": {
        icone:       "🗡️",
        categorie:   "Corps à corps courante",
        degats:      "1d4",
        type_degats: "perforant",
        poids:       "500 g",
        prix:        "2 po",
        proprietes:  ["Finesse", "Légère", "Lancer (portée 6 m/18 m)"],
        description: "Lame courte et discrète, idéale pour le combat rapproché ou le lancer furtif. L'arme de prédilection des roublards et des assassins."
    },

    "Gourdin": {
        icone:       "🪵",
        categorie:   "Corps à corps courante",
        degats:      "1d4",
        type_degats: "contondant",
        poids:       "1 kg",
        prix:        "1 pa",
        proprietes:  ["Légère"],
        description: "Un morceau de bois robuste, l'arme la plus primitive qui soit. Peu coûteuse, facile à trouver, et redoutable dans les bonnes mains."
    },

    "Hachette": {
        icone:       "🪓",
        categorie:   "Corps à corps courante",
        degats:      "1d6",
        type_degats: "tranchant",
        poids:       "1 kg",
        prix:        "5 po",
        proprietes:  ["Légère", "Lancer (portée 6 m/18 m)"],
        description: "Petite hache maniable, aussi efficace au corps à corps qu'en lancer. Outil et arme à la fois, compagne indispensable des bûcherons et des guerriers nomades."
    },

    "Javeline": {
        icone:       "🏹",
        categorie:   "Corps à corps courante",
        degats:      "1d6",
        type_degats: "perforant",
        poids:       "1 kg",
        prix:        "5 pa",
        proprietes:  ["Lancer (portée 9 m/36 m)"],
        description: "Lance légère conçue pour être projetée à distance ou utilisée en mêlée. Arme polyvalente des soldats d'infanterie et des chasseurs."
    },

    "Lance": {
        icone:       "⚔️",
        categorie:   "Corps à corps courante",
        degats:      "1d6",
        type_degats: "perforant",
        poids:       "1,5 kg",
        prix:        "1 po",
        proprietes:  ["Lancer (portée 6 m/18 m)", "Polyvalente (1d8)"],
        description: "Arme d'hast simple et efficace. Tenue à deux mains, elle perfore les armures légères avec aisance. Utilisée depuis l'aube des civilisations."
    },

    "Marteau léger": {
        icone:       "🔨",
        categorie:   "Corps à corps courante",
        degats:      "1d4",
        type_degats: "contondant",
        poids:       "1 kg",
        prix:        "2 po",
        proprietes:  ["Légère", "Lancer (portée 6 m/18 m)"],
        description: "Petit marteau de combat ou d'artisan détourné en arme. Compact et lanceable, apprécié des nains et des clercs de divinités forgeronnes."
    },

    "Masse d'armes": {
        icone:       "⚒️",
        categorie:   "Corps à corps courante",
        degats:      "1d6",
        type_degats: "contondant",
        poids:       "2 kg",
        prix:        "5 po",
        proprietes:  [],
        description: "Arme lourde à tête métallique, redoutable contre les armures. Arme de prédilection des clercs qui refusent de verser du sang avec une lame."
    },

    "Massue": {
        icone:       "🏏",
        categorie:   "Corps à corps courante",
        degats:      "1d8",
        type_degats: "contondant",
        poids:       "5 kg",
        prix:        "2 pa",
        proprietes:  ["À deux mains"],
        description: "Gros bloc de bois renforcé, arme brute par excellence. Lourde et encombrante, mais ses dégâts écrasants font reculer les plus braves."
    },

    "Serpe": {
        icone:       "🌙",
        categorie:   "Corps à corps courante",
        degats:      "1d4",
        type_degats: "tranchant",
        poids:       "1 kg",
        prix:        "1 po",
        proprietes:  ["Légère"],
        description: "Outil agricole reconverti en arme de poing. Sa lame incurvée accroche et lacère. Les druides en font parfois un symbole sacré de la récolte et du cycle naturel."
    },

    // ── ARMES COURANTES À DISTANCE ───────────────────────────────

    "Arbalète légère": {
        icone:       "🏹",
        categorie:   "Distance courante",
        degats:      "1d8",
        type_degats: "perforant",
        poids:       "2,5 kg",
        prix:        "25 po",
        proprietes:  ["Munitions (portée 24 m/96 m)", "Chargement", "À deux mains"],
        description: "Arme de jet mécanique, facile à maîtriser sans formation intensive. Elle tire des carreaux avec précision, mais nécessite un temps de rechargement entre chaque tir."
    },

    "Arc court": {
        icone:       "🏹",
        categorie:   "Distance courante",
        degats:      "1d6",
        type_degats: "perforant",
        poids:       "1 kg",
        prix:        "25 po",
        proprietes:  ["Munitions (portée 24 m/96 m)", "À deux mains"],
        description: "Arc compact et maniable, idéal pour les miliciens et les éclaireurs. Sa cadence de tir en fait une arme efficace pour harceler l'ennemi à distance moyenne."
    },

    "Fléchette": {
        icone:       "🎯",
        categorie:   "Distance courante",
        degats:      "1d4",
        type_degats: "perforant",
        poids:       "100 g",
        prix:        "5 pc",
        proprietes:  ["Finesse", "Lancer (portée 6 m/18 m)"],
        description: "Petit projectile fin et léger, discret et bon marché. Utilisé en combat, comme distraction ou pour délivrer du poison avec précision."
    },

    "Fronde": {
        icone:       "🌀",
        categorie:   "Distance courante",
        degats:      "1d4",
        type_degats: "contondant",
        poids:       "-",
        prix:        "1 pa",
        proprietes:  ["Munitions (portée 9 m/36 m)"],
        description: "Simple lanière de cuir qui propulse des pierres ou des billes de plomb. Arme de berger ou d'insurgé, elle est silencieuse et ses munitions sont gratuites."
    },

    // ── ARMES DE GUERRE DE CORPS À CORPS ────────────────────────

    "Cimeterre": {
        icone:       "⚔️",
        categorie:   "Corps à corps de guerre",
        degats:      "1d6",
        type_degats: "tranchant",
        poids:       "1,5 kg",
        prix:        "25 po",
        proprietes:  ["Finesse", "Légère"],
        description: "Lame recourbée originaire des terres désertiques. Sa forme optimise le tranchant des coups balayés. Arme des cavaliers, des marchands armés et des pirates."
    },

    "Coutille": {
        icone:       "🪖",
        categorie:   "Corps à corps de guerre",
        degats:      "1d10",
        type_degats: "tranchant",
        poids:       "3 kg",
        prix:        "20 po",
        proprietes:  ["Lourde", "Allonge", "À deux mains"],
        description: "Longue lame fixée sur un manche, ancêtre de la faux de guerre. Son allonge permet de frapper avant que l'adversaire n'atteigne son porteur."
    },

    "Épée à deux mains": {
        icone:       "🗡️",
        categorie:   "Corps à corps de guerre",
        degats:      "2d6",
        type_degats: "tranchant",
        poids:       "3 kg",
        prix:        "50 po",
        proprietes:  ["Lourde", "À deux mains"],
        description: "L'arme de guerre par excellence. Sa lame massive exige force et formation, mais ses dégâts dévastateurs font trembler les lignes ennemies. Symbole du guerrier d'élite."
    },

    "Épée courte": {
        icone:       "🗡️",
        categorie:   "Corps à corps de guerre",
        degats:      "1d6",
        type_degats: "perforant",
        poids:       "1 kg",
        prix:        "10 po",
        proprietes:  ["Finesse", "Légère"],
        description: "Lame droite et compacte, équilibre parfait entre discrétion et efficacité. Arme des roublards, des paladins à cheval et des combattants à deux armes."
    },

    "Épée longue": {
        icone:       "⚔️",
        categorie:   "Corps à corps de guerre",
        degats:      "1d8",
        type_degats: "tranchant",
        poids:       "1,5 kg",
        prix:        "15 po",
        proprietes:  ["Polyvalente (1d10)"],
        description: "L'arme emblématique du chevalier. Polyvalente, équilibrée, elle peut être tenue à une ou deux mains. La lame préférée des guerriers et des paladins du royaume."
    },

    "Fléau d'armes": {
        icone:       "⛓️",
        categorie:   "Corps à corps de guerre",
        degats:      "1d8",
        type_degats: "contondant",
        poids:       "1 kg",
        prix:        "10 po",
        proprietes:  [],
        description: "Masse reliée à un manche par une chaîne. Contourne les boucliers en frappant par-dessus ou par le côté. Difficile à parer, redouté des défenseurs."
    },

    "Fouet": {
        icone:       "🪢",
        categorie:   "Corps à corps de guerre",
        degats:      "1d4",
        type_degats: "tranchant",
        poids:       "1,5 kg",
        prix:        "2 po",
        proprietes:  ["Finesse", "Allonge"],
        description: "Longue lanière de cuir tressé capable de lacérer à distance. Utile pour désarmer ou entraver. Arme atypique des dresseurs, des explorateurs et des combattants habiles."
    },

    "Hache à deux mains": {
        icone:       "🪓",
        categorie:   "Corps à corps de guerre",
        degats:      "1d12",
        type_degats: "tranchant",
        poids:       "3,5 kg",
        prix:        "30 po",
        proprietes:  ["Lourde", "À deux mains"],
        description: "Hache massive aux deux tranchants symétriques. Elle fend armures, boucliers et os avec une brutalité sans égale. Arme de prédilection des barbares et des guerriers de front."
    },

    "Hache d'armes": {
        icone:       "🪓",
        categorie:   "Corps à corps de guerre",
        degats:      "1d8",
        type_degats: "tranchant",
        poids:       "2 kg",
        prix:        "10 po",
        proprietes:  ["Polyvalente (1d10)"],
        description: "Hache de combat à une main, robuste et fiable. Tenue à deux mains pour plus de dégâts. Arme traditionnelle des guerriers du nord et des gardes de forteresse."
    },

    "Hallebarde": {
        icone:       "⚔️",
        categorie:   "Corps à corps de guerre",
        degats:      "1d10",
        type_degats: "tranchant",
        poids:       "3 kg",
        prix:        "20 po",
        proprietes:  ["Lourde", "Allonge", "À deux mains"],
        description: "Combinaison d'une lance, d'une hache et d'un crochet sur une hampe longue. Arme d'infanterie lourde par excellence — frappe, tranche et accroche les cavaliers."
    },

    "Lance d'arçon": {
        icone:       "🏇",
        categorie:   "Corps à corps de guerre",
        degats:      "1d12",
        type_degats: "perforant",
        poids:       "3 kg",
        prix:        "10 po",
        proprietes:  ["Allonge", "Spécial"],
        description: "Lance de cavalerie conçue pour la charge montée. Sa longueur et sa rigidité décuplent l'impact d'une charge à pleine vitesse. Inutile à pied."
    },

    "Maillet": {
        icone:       "🔨",
        categorie:   "Corps à corps de guerre",
        degats:      "2d6",
        type_degats: "contondant",
        poids:       "5 kg",
        prix:        "10 po",
        proprietes:  ["Lourde", "À deux mains"],
        description: "Marteau géant à tête de pierre ou de métal. Dévastateur contre les armures lourdes et les constructions. Réservé aux combattants de grande stature et force."
    },

    "Marteau de guerre": {
        icone:       "🔨",
        categorie:   "Corps à corps de guerre",
        degats:      "1d8",
        type_degats: "contondant",
        poids:       "1 kg",
        prix:        "15 po",
        proprietes:  ["Polyvalente (1d10)"],
        description: "Marteau de combat à une main, symbole des guerriers divins et des forgerons-soldats. Sa tête de métal brise les os et déforme les armures avec une précision brutale."
    },

    "Morgenstern": {
        icone:       "⭐",
        categorie:   "Corps à corps de guerre",
        degats:      "1d8",
        type_degats: "perforant",
        poids:       "2 kg",
        prix:        "15 po",
        proprietes:  [],
        description: "Masse hérissée de pointes métalliques. Combine les dégâts contondants d'une masse et le perforant des épines. Arme crainte pour ses plaies difficiles à soigner."
    },

    "Pic de guerre": {
        icone:       "⛏️",
        categorie:   "Corps à corps de guerre",
        degats:      "1d8",
        type_degats: "perforant",
        poids:       "1 kg",
        prix:        "5 po",
        proprietes:  [],
        description: "Arme à pointe recourbée conçue pour percer les armures de plaques. Sa forme accroche et pénètre là où les lames glissent. Outil de siège devenu arme de mêlée."
    },

    "Pique": {
        icone:       "🏹",
        categorie:   "Corps à corps de guerre",
        degats:      "1d10",
        type_degats: "perforant",
        poids:       "9 kg",
        prix:        "5 po",
        proprietes:  ["Lourde", "Allonge", "À deux mains"],
        description: "Longue hampe de plusieurs mètres armée d'une pointe d'acier. Arme de formation — inutile seule, dévastatrice en ligne serrée. Brise les charges de cavalerie."
    },

    "Rapière": {
        icone:       "🗡️",
        categorie:   "Corps à corps de guerre",
        degats:      "1d8",
        type_degats: "perforant",
        poids:       "1 kg",
        prix:        "25 po",
        proprietes:  ["Finesse"],
        description: "Lame fine et rigide, arme du duelliste et de l'aristocrate. Elle frappe vite, précisément, cherchant les interstices de l'armure plutôt que la force brute."
    },

    "Trident": {
        icone:       "🔱",
        categorie:   "Corps à corps de guerre",
        degats:      "1d6",
        type_degats: "perforant",
        poids:       "2 kg",
        prix:        "5 po",
        proprietes:  ["Lancer (portée 6 m/18 m)", "Polyvalente (1d8)"],
        description: "Fourche à trois dents originaire des côtes maritimes. Efficace pour bloquer, désarmer et piéger l'adversaire. Arme des gladiateurs, des pêcheurs et des dieux de la mer."
    },

    // ── ARMES DE GUERRE À DISTANCE ───────────────────────────────

    "Arbalète de poing": {
        icone:       "🏹",
        categorie:   "Distance de guerre",
        degats:      "1d6",
        type_degats: "perforant",
        poids:       "1,5 kg",
        prix:        "75 po",
        proprietes:  ["Munitions (portée 9 m/36 m)", "Légère", "Chargement"],
        description: "Arbalète miniature dissimulable sous une cape. Arme de prédilection des assassins et des agents de l'ombre. Coûteuse mais imparable en surprise."
    },

    "Arbalète lourde": {
        icone:       "🏹",
        categorie:   "Distance de guerre",
        degats:      "1d10",
        type_degats: "perforant",
        poids:       "9 kg",
        prix:        "50 po",
        proprietes:  ["Munitions (portée 30 m/120 m)", "Lourde", "Chargement", "À deux mains"],
        description: "Arbalète de siège portative. Perfore les armures lourdes à distance considérable, mais le rechargement lent la rend vulnérable en mêlée rapprochée."
    },

    "Arc long": {
        icone:       "🏹",
        categorie:   "Distance de guerre",
        degats:      "1d8",
        type_degats: "perforant",
        poids:       "1 kg",
        prix:        "50 po",
        proprietes:  ["Munitions (portée 45 m/180 m)", "Lourde", "À deux mains"],
        description: "Arc de taille humaine, taillé dans du bois d'if ou de frêne. Portée et puissance supérieures à l'arc court, il exige des années d'entraînement pour être maîtrisé."
    },

    "Filet": {
        icone:       "🕸️",
        categorie:   "Distance de guerre",
        degats:      "—",
        type_degats: "—",
        poids:       "1,5 kg",
        prix:        "1 po",
        proprietes:  ["Spécial", "Lancer (portée 1,50 m/4,50 m)"],
        description: "Filet lesté conçu pour capturer plutôt que tuer. Une cible touchée est entravée. Arme de gladiateur, de chasseur ou de celui qui préfère interroger avant d'abattre."
    },

    "Sarbacane": {
        icone:       "💨",
        categorie:   "Distance de guerre",
        degats:      "1",
        type_degats: "perforant",
        poids:       "500 g",
        prix:        "10 po",
        proprietes:  ["Munitions (portée 7,50 m/30 m)", "Chargement"],
        description: "Tube creux qui projette de fines aiguilles par souffle. Dégâts minimes, mais idéale pour délivrer poisons ou sédatifs sans bruit. L'arme de l'infiltrateur patient."
    }
};

// ═══════════════════════════════════════════════════════════════
//  UTILITAIRES
// ═══════════════════════════════════════════════════════════════

/**
 * Retourne toutes les armes d'une catégorie donnée
 */
function getArmesParCategorie(categorie) {
    return Object.entries(MATERIEL_ARMES)
        .filter(([_, a]) => a.categorie === categorie)
        .reduce((acc, [nom, data]) => { acc[nom] = data; return acc; }, {});
}

/**
 * Retourne la liste des catégories uniques d'armes
 */
function getCategoriesArmes() {
    return [...new Set(Object.values(MATERIEL_ARMES).map(a => a.categorie))];
}

/**
 * Recherche d'armes par propriété (ex: "Finesse", "Légère")
 */
function getArmesAvecPropriete(propriete) {
    return Object.entries(MATERIEL_ARMES)
        .filter(([_, a]) => a.proprietes.some(p => p.toLowerCase().includes(propriete.toLowerCase())))
        .reduce((acc, [nom, data]) => { acc[nom] = data; return acc; }, {});
}

// ═══════════════════════════════════════════════════════════════
//  EXPORTS — usage window (site) + module (Node.js / livres)
// ═══════════════════════════════════════════════════════════════

if (typeof window !== 'undefined') {
    window.MATERIEL_ARMES          = MATERIEL_ARMES;
    window.getArmesParCategorie    = getArmesParCategorie;
    window.getCategoriesArmes      = getCategoriesArmes;
    window.getArmesAvecPropriete   = getArmesAvecPropriete;
}
if (typeof module !== 'undefined') {
    module.exports = {
        MATERIEL_ARMES,
        getArmesParCategorie,
        getCategoriesArmes,
        getArmesAvecPropriete
    };
}

// ═══════════════════════════════════════════════════════════════
//  ARMURES
//  Structure : { icone, categorie, ca, force_min, discrétion,
//               poids, prix, proprietes[], description }
//  Catégories : "Légère" | "Intermédiaire" | "Lourde" | "Bouclier"
//  discrétion : true = désavantage aux tests de Discrétion
// ═══════════════════════════════════════════════════════════════

const MATERIEL_ARMURES = {

    // ── ARMURES LÉGÈRES ──────────────────────────────────────────

    "Matelassée": {
        icone:       "🧶",
        categorie:   "Légère",
        ca:          "11 + Dex",
        force_min:   null,
        discretion:  true,
        poids:       "4 kg",
        prix:        "5 po",
        proprietes:  ["Désavantage en Discrétion"],
        description: "Épaisse veste de tissu matelassé, protection de fortune des miliciens et des pauvres. Absorbe les chocs mais gêne les mouvements furtifs. Mieux que rien sur un champ de bataille."
    },

    "Cuir": {
        icone:       "🥋",
        categorie:   "Légère",
        ca:          "11 + Dex",
        force_min:   null,
        discretion:  false,
        poids:       "5 kg",
        prix:        "10 po",
        proprietes:  [],
        description: "Armure de cuir tanné, souple et silencieuse. Protection standard des roublards, des éclaireurs et des rangers. N'entrave pas les mouvements — idéale pour qui préfère ne pas être vu."
    },

    "Cuir clouté": {
        icone:       "⚙️",
        categorie:   "Légère",
        ca:          "12 + Dex",
        force_min:   null,
        discretion:  false,
        poids:       "6,5 kg",
        prix:        "45 po",
        proprietes:  [],
        description: "Cuir renforcé de rivets et de clous métalliques stratégiquement placés. Meilleure protection sans sacrifice de mobilité. Armure de prédilection des aventuriers confirmés et des bardes combattants."
    },

    // ── ARMURES INTERMÉDIAIRES ───────────────────────────────────

    "Peau": {
        icone:       "🐻",
        categorie:   "Intermédiaire",
        ca:          "12 + Dex (max 2)",
        force_min:   null,
        discretion:  false,
        poids:       "6 kg",
        prix:        "10 po",
        proprietes:  ["Bonus Dex limité à +2"],
        description: "Peaux épaisses d'animaux sauvages cousues ensemble. Protection rudimentaire des barbares et des peuples des forêts. Brute mais efficace — et intimidante d'aspect."
    },

    "Chemise de mailles": {
        icone:       "🔗",
        categorie:   "Intermédiaire",
        ca:          "13 + Dex (max 2)",
        force_min:   null,
        discretion:  false,
        poids:       "10 kg",
        prix:        "50 po",
        proprietes:  ["Bonus Dex limité à +2"],
        description: "Tunique d'anneaux de métal entrelacés. Protège des lames et des pointes tout en conservant une souplesse relative. Armure de compromis — ni aussi légère que le cuir, ni aussi lourde que les plaques."
    },

    "Écailles": {
        icone:       "🐉",
        categorie:   "Intermédiaire",
        ca:          "14 + Dex (max 2)",
        force_min:   null,
        discretion:  true,
        poids:       "22,5 kg",
        prix:        "50 po",
        proprietes:  ["Bonus Dex limité à +2", "Désavantage en Discrétion"],
        description: "Plaques de métal ou d'os fixées sur du cuir à la manière d'écailles de poisson. Protection solide mais bruyante — chaque mouvement cliquète. Efficace en formation, problématique en infiltration."
    },

    "Cuirasse": {
        icone:       "🛡️",
        categorie:   "Intermédiaire",
        ca:          "13 + Dex (max 2)",
        force_min:   null,
        discretion:  false,
        poids:       "10 kg",
        prix:        "400 po",
        proprietes:  ["Bonus Dex limité à +2"],
        description: "Plastron de métal moulé protégeant le torse, associé à du cuir pour les membres. Armure des officiers et des nobles guerriers — coûteuse mais élégante, elle signale le statut autant qu'elle protège."
    },

    "Demi-plate": {
        icone:       "⚔️",
        categorie:   "Intermédiaire",
        ca:          "15 + Dex (max 2)",
        force_min:   null,
        discretion:  true,
        poids:       "20 kg",
        prix:        "750 po",
        proprietes:  ["Bonus Dex limité à +2", "Désavantage en Discrétion"],
        description: "Ensemble de plaques d'acier couvrant la majorité du corps, sans atteindre la rigidité complète du harnois. Protection maximale pour ceux qui refusent de sacrifier toute agilité. Armure des chevaliers en campagne."
    },

    // ── ARMURES LOURDES ──────────────────────────────────────────

    "Broigne": {
        icone:       "⛓️",
        categorie:   "Lourde",
        ca:          "14",
        force_min:   null,
        discretion:  true,
        poids:       "20 kg",
        prix:        "30 po",
        proprietes:  ["Désavantage en Discrétion"],
        description: "Veste de cuir garnie d'anneaux de fer ou de plaques cousues. Armure lourde accessible — protection solide sans la complexité ni le coût des grandes plaques. Populaire parmi les mercenaires et les gardes."
    },

    "Cotte de mailles": {
        icone:       "🔗",
        categorie:   "Lourde",
        ca:          "16",
        force_min:   "For 13",
        discretion:  true,
        poids:       "27,5 kg",
        prix:        "75 po",
        proprietes:  ["Force minimale 13", "Désavantage en Discrétion"],
        description: "Armure complète d'anneaux de fer entrelacés, couvrant le corps de la tête aux genoux. Protection éprouvée sur des générations de soldats. Exige la force nécessaire pour la porter sans s'épuiser."
    },

    "Clibanion": {
        icone:       "🏛️",
        categorie:   "Lourde",
        ca:          "17",
        force_min:   "For 15",
        discretion:  true,
        poids:       "30 kg",
        prix:        "200 po",
        proprietes:  ["Force minimale 15", "Désavantage en Discrétion"],
        description: "Armure de lamelles métalliques articulées, héritière des traditions militaires orientales. Excellente protection contre les armes perforantes grâce à ses plaques superposées qui dévient les coups. Lourde mais redoutable."
    },

    "Harnois": {
        icone:       "👑",
        categorie:   "Lourde",
        ca:          "18",
        force_min:   "For 15",
        discretion:  true,
        poids:       "32,5 kg",
        prix:        "1500 po",
        proprietes:  ["Force minimale 15", "Désavantage en Discrétion"],
        description: "L'armure complète de plaques — le summum de la protection militaire médiévale. Chaque pièce est forgée sur mesure, ajustée au corps de son porteur. Symbole absolu de puissance et de noblesse guerrière. Le Roi Karl en exige une pour ses Mains."
    },

    // ── BOUCLIER ─────────────────────────────────────────────────

    "Bouclier": {
        icone:       "🛡️",
        categorie:   "Bouclier",
        ca:          "+2",
        force_min:   null,
        discretion:  false,
        poids:       "3 kg",
        prix:        "10 po",
        proprietes:  ["Occupe la main secondaire"],
        description: "Disque ou rectangle de bois renforcé de métal, tenu au bras gauche. Simple, fiable, et redoutablement efficace depuis l'Antiquité. Incompatible avec les armes à deux mains — mais +2 CA peut sauver une vie."
    }
};

// ── UTILITAIRES ARMURES ──────────────────────────────────────────

/**
 * Retourne toutes les armures d'une catégorie donnée
 */
function getArmuresParCategorie(categorie) {
    return Object.entries(MATERIEL_ARMURES)
        .filter(([_, a]) => a.categorie === categorie)
        .reduce((acc, [nom, data]) => { acc[nom] = data; return acc; }, {});
}

/**
 * Retourne uniquement les armures sans désavantage en discrétion
 */
function getArmuresFurtives() {
    return Object.entries(MATERIEL_ARMURES)
        .filter(([_, a]) => !a.discretion)
        .reduce((acc, [nom, data]) => { acc[nom] = data; return acc; }, {});
}

if (typeof window !== 'undefined') {
    window.MATERIEL_ARMURES         = MATERIEL_ARMURES;
    window.getArmuresParCategorie   = getArmuresParCategorie;
    window.getArmuresFurtives       = getArmuresFurtives;
}
if (typeof module !== 'undefined') {
    module.exports = Object.assign(module.exports || {}, {
        MATERIEL_ARMURES,
        getArmuresParCategorie,
        getArmuresFurtives
    });
}

// ═══════════════════════════════════════════════════════════════
//  ÉQUIPEMENT DIVERS
//  Structure : { icone, categorie, poids, prix, proprietes[], description }
//  Catégories : "Alchimie & substances" | "Focaliseurs" |
//               "Éclairage" | "Équipement d'aventure" |
//               "Sécurité & serrures" | "Écriture & savoir" |
//               "Munitions" | "Contenants" |
//               "Vêtements & accessoires" | "Nourriture & survie" |
//               "Outils & instruments"
// ═══════════════════════════════════════════════════════════════

const MATERIEL_EQUIPEMENT = {

    // ── ALCHIMIE & SUBSTANCES ────────────────────────────────────

    "Acide (fiole)": {
        icone: "🧪", categorie: "Alchimie & substances",
        poids: "500 g", prix: "25 po",
        proprietes: ["Action : lancer sur une cible (portée 6 m)", "2d6 dégâts d'acide"],
        description: "Fiole de verre scellée contenant un acide corrosif bouillonnant. Lancée comme une arme improvisée, elle ronge chair, métal et bois avec une efficacité redoutable. Manipuler avec précaution."
    },

    "Antidote (fiole)": {
        icone: "💚", categorie: "Alchimie & substances",
        poids: "500 g", prix: "50 po",
        proprietes: ["Avantage aux jets de sauvegarde contre le poison (1 heure)"],
        description: "Préparation alchimique concentrée neutralisant la plupart des poisons courants. Goût amer, effet immédiat. Un flacon peut faire la différence entre une mort agonie et un lever du soleil."
    },

    "Eau bénite (flasque)": {
        icone: "✨", categorie: "Alchimie & substances",
        poids: "500 g", prix: "25 po",
        proprietes: ["Action : lancer sur une cible (portée 6 m)", "2d6 dégâts radiants vs morts-vivants & fiélons"],
        description: "Eau consacrée par un prêtre lors d'un rituel divin. Inoffensive pour les mortels, brûlante pour les créatures des ténèbres. L'arme du croyant face à ce que les épées ordinaires ne peuvent blesser."
    },

    "Feu grégeois (flasque)": {
        icone: "🔥", categorie: "Alchimie & substances",
        poids: "500 g", prix: "50 po",
        proprietes: ["Action : lancer sur une cible (portée 6 m)", "1d4 dégâts de feu/tour, difficile à éteindre"],
        description: "Substance incendiaire alchimique qui brûle même sous l'eau. Redoutée des marins et des assiégés depuis des siècles. Une fois enflammée, seul du sable ou de la terre peut l'étouffer."
    },

    "Fiole": {
        icone: "🫙", categorie: "Alchimie & substances",
        poids: "-", prix: "1 po",
        proprietes: ["Contient jusqu'à 90 ml de liquide"],
        description: "Petit récipient de verre soufflé à col étroit. Sert à conserver potions, poisons, huiles ou acides. L'accessoire incontournable de tout alchimiste, apothicaire ou empoisonneur."
    },

    "Flasque ou chope (50 cl)": {
        icone: "🍺", categorie: "Alchimie & substances",
        poids: "500 g", prix: "2 pc",
        proprietes: ["Contient 500 ml de liquide"],
        description: "Récipient métallique ou en grès pour boissons et liquides. Compagnon fidèle du voyageur — aussi utile pour l'eau que pour la bière ou l'hydromel du Roi Karl."
    },

    "Huile (flasque)": {
        icone: "🛢️", categorie: "Alchimie & substances",
        poids: "500 g", prix: "1 pa",
        proprietes: ["Alimente une lampe 6 heures", "Peut être répandue et enflammée (5d8 feu, zone 1,5 m)"],
        description: "Huile minérale ou végétale servant à alimenter lampes et lanternes. Répandue au sol et enflammée, elle devient un piège redoutable. Utile, polyvalente et dangereuse."
    },

    "Parfum (fiole)": {
        icone: "🌸", categorie: "Alchimie & substances",
        poids: "-", prix: "5 po",
        proprietes: [],
        description: "Essence florale ou musquée distillée avec soin. Marque de raffinement et de statut social. Certains aventuriers l'utilisent pour masquer leur odeur face aux créatures à l'odorat développé."
    },

    "Poison (fiole)": {
        icone: "☠️", categorie: "Alchimie & substances",
        poids: "-", prix: "100 po",
        proprietes: ["Appliquer sur une arme ou dans de la nourriture", "JS Constitution DD 10 ou 1d4 poison + empoisonné 1 heure"],
        description: "Substance toxique de base, extraite de plantes ou de venins animaux. Peut être appliquée sur une lame ou dissous dans un liquide. Légalement discutable — moralement compromettant."
    },

    "Potion de soins": {
        icone: "❤️", categorie: "Alchimie & substances",
        poids: "250 g", prix: "50 po",
        proprietes: ["Action bonus : boire soi-même", "Action : faire boire une créature", "Restaure 2d4+2 PV"],
        description: "Liquide rouge translucide à l'odeur sucrée, symbole de l'espoir en plein chaos. Boire une gorgée referme les plaies et redonne des forces. L'objet le plus précieux dans un donjon sombre."
    },

    // ── FOCALISEURS ──────────────────────────────────────────────

    "Focaliseur arcanique - Baguette": {
        icone: "🪄", categorie: "Focaliseurs",
        poids: "500 g", prix: "10 po",
        proprietes: ["Focaliseur pour sorts arcaniques (magicien, ensorceleur, occultiste)"],
        description: "Fine tige de bois ou de métal concentrant l'énergie magique. Légère et discrète, la baguette est le focaliseur classique du magicien studieux."
    },

    "Focaliseur arcanique - Bâton": {
        icone: "🔮", categorie: "Focaliseurs",
        poids: "2 kg", prix: "5 po",
        proprietes: ["Focaliseur pour sorts arcaniques", "Peut servir d'arme (bâton)"],
        description: "Long bâton de bois sculpté, gravé de runes et de symboles ésotériques. Sert à la fois de focaliseur magique et d'arme de fortune. Le choix des magiciens qui préfèrent la robustesse à la discrétion."
    },

    "Focaliseur arcanique - Boule de cristal": {
        icone: "🔮", categorie: "Focaliseurs",
        poids: "500 g", prix: "10 po",
        proprietes: ["Focaliseur pour sorts arcaniques"],
        description: "Sphère de cristal taillé capturant et amplifiant les énergies magiques. Posée sur une table ou tenue à deux mains, elle est le symbole le plus reconnaissable du praticien de l'arcane."
    },

    "Focaliseur arcanique - Orbe": {
        icone: "✨", categorie: "Focaliseurs",
        poids: "1,5 kg", prix: "20 po",
        proprietes: ["Focaliseur pour sorts arcaniques"],
        description: "Sphère solide de métal, verre ou cristal taillé dans la paume. Plus lourde qu'une boule de cristal, elle irradie un pouvoir plus brut, souvent associée aux ensorceleurs d'origine draconique."
    },

    "Focaliseur arcanique - Sceptre": {
        icone: "👑", categorie: "Focaliseurs",
        poids: "1 kg", prix: "10 po",
        proprietes: ["Focaliseur pour sorts arcaniques"],
        description: "Bâton court et précieux, à mi-chemin entre l'accessoire royal et l'outil magique. Symbole d'autorité autant que de puissance arcanique. Fréquent chez les occultistes liés à des patrons nobles."
    },

    "Focaliseur druidique - Baguette d'if": {
        icone: "🌿", categorie: "Focaliseurs",
        poids: "500 g", prix: "10 po",
        proprietes: ["Focaliseur pour sorts druidiques"],
        description: "Brindille soigneusement taillée dans le bois d'if, arbre de vie et de mort dans les traditions sylvestres. Chaque baguette est unique — taillée par le druide lui-même lors d'un rituel nocturne."
    },

    "Focaliseur druidique - Bâton": {
        icone: "🌳", categorie: "Focaliseurs",
        poids: "2 kg", prix: "5 po",
        proprietes: ["Focaliseur pour sorts druidiques", "Peut servir d'arme (bâton)"],
        description: "Branche épaisse trouvée en forêt, à peine dégrossie, marquée de symboles naturels. Les druides voient dans ce bâton un fragment vivant de la nature — pas un outil fabriqué, mais un don du bois."
    },

    "Focaliseur druidique - Branche de gui": {
        icone: "🍃", categorie: "Focaliseurs",
        poids: "-", prix: "1 po",
        proprietes: ["Focaliseur pour sorts druidiques"],
        description: "Branche de gui fraîchement coupée, plante sacrée des traditions celtiques et druidiques. Légère, éphémère, mais chargée d'une connexion profonde avec les cycles naturels et les esprits des bois."
    },

    "Focaliseur druidique - Totem": {
        icone: "🦅", categorie: "Focaliseurs",
        poids: "-", prix: "1 po",
        proprietes: ["Focaliseur pour sorts druidiques"],
        description: "Petite figurine sculptée représentant un animal spirituel — loup, ours, aigle ou corbeau. Tenu dans le poing ou porté en pendentif, il ancre le druide dans son lien avec la faune sauvage."
    },

    "Symbole sacré - Amulette": {
        icone: "📿", categorie: "Focaliseurs",
        poids: "500 g", prix: "5 po",
        proprietes: ["Focaliseur pour sorts divins (clerc, paladin)"],
        description: "Médaillon ou pendentif frappé de l'emblème divin, porté autour du cou. Rappel constant de la foi et canal entre le croyant et son dieu. Chaque religion a le sien — et les reconnaît immédiatement."
    },

    "Symbole sacré - Emblème": {
        icone: "🔰", categorie: "Focaliseurs",
        poids: "-", prix: "5 po",
        proprietes: ["Focaliseur pour sorts divins", "Gravé sur bouclier ou armure"],
        description: "Signe divin gravé ou peint directement sur un bouclier ou une pièce d'armure. Libère les mains du clerc tout en maintenant la connexion divine. Pratique au combat, symboliquement fort."
    },

    "Symbole sacré - Reliquaire": {
        icone: "⛪", categorie: "Focaliseurs",
        poids: "1 kg", prix: "5 po",
        proprietes: ["Focaliseur pour sorts divins", "Contient une relique sainte"],
        description: "Petite boîte ou châsse renfermant un fragment de relique sacrée — os de saint, tissu béni, éclat de bois miraculeux. Puissant focaliseur pour les clercs de hauts grades. Précieux et irremplaçable."
    },

    // ── ÉCLAIRAGE ────────────────────────────────────────────────

    "Bougie": {
        icone: "🕯️", categorie: "Éclairage",
        poids: "-", prix: "1 pc",
        proprietes: ["Lumière vive 1,5 m, lumière faible 1,5 m supplémentaire", "Durée : 1 heure"],
        description: "Simple cylindre de cire avec une mèche. Éclairage de base, fragile au vent, mais suffisant pour lire une carte ou inspecter une cellule. Soufflez-la si des gardes approchent."
    },

    "Lampe": {
        icone: "🪔", categorie: "Éclairage",
        poids: "500 g", prix: "5 pa",
        proprietes: ["Lumière vive 4,5 m, lumière faible 9 m supplémentaires", "Durée : 6 heures / flasque d'huile"],
        description: "Récipient métallique à huile avec mèche. Plus fiable qu'une bougie, elle résiste mieux aux courants d'air. Compagne des mineurs, des gardiens de nuit et des aventuriers prudents."
    },

    "Lanterne sourde": {
        icone: "🔦", categorie: "Éclairage",
        poids: "1 kg", prix: "10 po",
        proprietes: ["Lumière vive 18 m en cône de 60°", "Volet orientable : 5 pc pour fermer", "Durée : 6 heures / flasque d'huile"],
        description: "Lanterne à volet orientable projetant un faisceau directionnel. Idéale pour l'infiltration — on éclaire où on veut, sans dévoiler sa position. L'outil des explorateurs de donjons expérimentés."
    },

    "Lanterne à capote": {
        icone: "🏮", categorie: "Éclairage",
        poids: "1 kg", prix: "5 po",
        proprietes: ["Lumière vive 9 m, lumière faible 9 m supplémentaires", "Durée : 6 heures / flasque d'huile"],
        description: "Lanterne à parois translucides diffusant la lumière dans toutes les directions. Suspendue ou portée, elle éclaire une large zone. Parfaite pour les groupes qui n'ont rien à cacher."
    },

    "Torche": {
        icone: "🔥", categorie: "Éclairage",
        poids: "500 g", prix: "1 pc",
        proprietes: ["Lumière vive 6 m, lumière faible 6 m supplémentaires", "Durée : 1 heure", "Dégâts : 1 feu au contact"],
        description: "Bâton imprégné de résine ou de chiffons huileux. Primitive, fumante, mais indestructible par le vent. Peut aussi servir d'arme improvisée — une torche dans le visage reste convaincante."
    },

    // ── ÉQUIPEMENT D'AVENTURE ────────────────────────────────────

    "Bélier portatif": {
        icone: "🐏", categorie: "Équipement d'aventure",
        poids: "17,5 kg", prix: "4 po",
        proprietes: ["Bonus +4 aux tests de Force pour enfoncer une porte", "+2 supplémentaire avec un second porteur"],
        description: "Poutre de bois renforcée de métal conçue pour fracasser portes et barricades. Encombrante et bruyante, mais aucune porte ordinaire ne lui résiste longtemps. Subtilité zéro — efficacité maximale."
    },

    "Billes (sac de 1000)": {
        icone: "⚪", categorie: "Équipement d'aventure",
        poids: "1 kg", prix: "1 po",
        proprietes: ["Répandues : JS Dex DD 10 ou vitesse réduite à 0 jusqu'à la fin du tour"],
        description: "Millier de petites sphères métalliques que l'on répand sur le sol pour ralentir les poursuivants. Silencieuses, légères, redoutablement efficaces. Une solution élégante à un problème de fuite."
    },

    "Boîte d'allume-feu": {
        icone: "🔥", categorie: "Équipement d'aventure",
        poids: "500 g", prix: "5 pa",
        proprietes: ["Allumer : action ou action bonus selon les conditions"],
        description: "Petite boîte contenant silex, briquet et amadou. Allumer un feu prend une minute à l'abri, davantage dans le vent. Essentielle pour la survie — un adventurier sans feu est un aventurier vulnérable."
    },

    "Bouclier en verre": {
        icone: "🔵", categorie: "Équipement d'aventure",
        poids: "1 kg", prix: "2 po",
        proprietes: [],
        description: "Disque de verre épais utilisé pour observer à travers les flammes ou les fumées. Objet de curiosité autant qu'outil — certains alchimistes l'utilisent comme lentille de concentration."
    },

    "Carquois": {
        icone: "🏹", categorie: "Équipement d'aventure",
        poids: "500 g", prix: "1 po",
        proprietes: ["Contient jusqu'à 20 flèches ou carreaux"],
        description: "Étui de cuir ou de bois porté dans le dos ou à la hanche pour transporter flèches et carreaux. Gardez-le sec — des munitions mouillées manquent leurs cibles."
    },

    "Chaîne (3 m)": {
        icone: "⛓️", categorie: "Équipement d'aventure",
        poids: "5 kg", prix: "5 po",
        proprietes: ["Résistance à la rupture : JS Force DD 20 pour briser"],
        description: "Trois mètres de chaîne en fer forgé. Sert à ligoter, barricader, escalader ou improviser une arme. Sa solidité décourage les évasions — mais pas les nains qui ont un peu de temps et beaucoup de rancœur."
    },

    "Chausse-trappes (sac de 20)": {
        icone: "⭐", categorie: "Équipement d'aventure",
        poids: "1 kg", prix: "1 po",
        proprietes: ["Répandues au sol : JS Dex DD 15 ou 1 dégât perforant + vitesse 0 jusqu'à soins"],
        description: "Petits objets métalliques à quatre pointes conçus pour toujours présenter une pointe vers le haut. Répandus à l'entrée d'un couloir, ils ralentissent n'importe quel poursuivant — botté ou non."
    },

    "Coffre": {
        icone: "📦", categorie: "Équipement d'aventure",
        poids: "12,5 kg", prix: "5 po",
        proprietes: ["Contenance : 340 litres / 150 kg"],
        description: "Caisse de bois renforcée de ferrures métalliques. Sert à transporter, stocker ou sécuriser de grandes quantités d'objets. Un cadenas en fait un coffre-fort d'aventurier."
    },

    "Corde en chanvre (15 m)": {
        icone: "🪢", categorie: "Équipement d'aventure",
        poids: "5 kg", prix: "1 po",
        proprietes: ["Résistance : JS Force DD 17 pour briser"],
        description: "Quinze mètres de corde tressée en fibres de chanvre. Robuste, bon marché, indispensable. Sert à grimper, ligoter, tendre des pièges ou descendre en rappel. L'outil universel de l'aventurier."
    },

    "Corde en soie (15 m)": {
        icone: "🧵", categorie: "Équipement d'aventure",
        poids: "2,5 kg", prix: "10 po",
        proprietes: ["Résistance : JS Force DD 17 pour briser", "Deux fois plus légère que la corde en chanvre"],
        description: "Corde de soie tressée, légère comme une plume et pourtant aussi solide que le chanvre. Préférée des roublards et des magiciens qui comptent chaque gramme dans leur sac à dos."
    },

    "Couverture": {
        icone: "🛏️", categorie: "Équipement d'aventure",
        poids: "1,5 kg", prix: "5 pa",
        proprietes: [],
        description: "Épaisse couverture de laine rêche. Protection basique contre le froid nocturne. Pas aussi confortable qu'un lit de taverne — mais infiniment préférable au sol nu d'une caverne."
    },

    "Échelle (3 m)": {
        icone: "🪜", categorie: "Équipement d'aventure",
        poids: "12,5 kg", prix: "1 pa",
        proprietes: ["Encombrante (difficile à transporter dans les couloirs étroits)"],
        description: "Échelle de bois à deux montants. Lourdaude et encombrante, elle reste irremplaçable pour franchir un mur ou descendre dans un puits quand on n'a ni corde ni griffe."
    },

    "Encre (bouteille de 30 ml)": {
        icone: "✒️", categorie: "Équipement d'aventure",
        poids: "-", prix: "10 po",
        proprietes: [],
        description: "Flacon de 30 ml d'encre noire de qualité. Sert à copier des sorts dans un grimoire, rédiger des contrats ou laisser des messages cryptés. Aussi précieuse que la connaissance qu'elle couche sur parchemin."
    },

    "Équipement d'escalade": {
        icone: "🧗", categorie: "Équipement d'aventure",
        poids: "6 kg", prix: "25 po",
        proprietes: ["Pitons, marteau, crochets : avantage aux tests d'Athlétisme pour escalader"],
        description: "Ensemble de pitons, crochets, sangles et marteaux permettant d'escalader des parois verticales avec sécurité. Nécessite des deux mains, mais transforme un mur inaccessible en défi surmontable."
    },

    "Étui à carreaux": {
        icone: "📋", categorie: "Équipement d'aventure",
        poids: "500 g", prix: "1 po",
        proprietes: ["Contient jusqu'à 20 carreaux d'arbalète"],
        description: "Étui rigide de cuir ou de bois compartimenté pour ranger les carreaux d'arbalète à l'abri de l'humidité. Protège les empennages et garde les munitions prêtes à charger."
    },

    "Étui à cartes ou parchemins": {
        icone: "🗺️", categorie: "Équipement d'aventure",
        poids: "500 g", prix: "1 po",
        proprietes: ["Imperméable, protège cartes et parchemins"],
        description: "Cylindre de cuir ciré ou de bois laqué scellant cartes, parchemins et documents précieux à l'abri de la pluie et de l'humidité. Indispensable pour le cartographe ou le mage qui tient à son grimoire."
    },

    "Grappin": {
        icone: "🪝", categorie: "Équipement d'aventure",
        poids: "2 kg", prix: "2 po",
        proprietes: ["Lancé avec une corde : permet d'escalader des saillies"],
        description: "Crochet à trois ou quatre dents conçu pour s'accrocher à une corniche, un rebord ou un bastingage. Lancé avec une corde, il transforme un mur lisse en une paroi escaladable. Bruyant mais fiable."
    },

    "Longue-vue": {
        icone: "🔭", categorie: "Équipement d'aventure",
        poids: "500 g", prix: "1000 po",
        proprietes: ["×2 en distance de vision"],
        description: "Instrument d'optique de précision composé de lentilles de verre poli. Rare, coûteuse, jalousée. Permet d'observer l'ennemi avant qu'il vous voie — avantage militaire considérable sur un champ de bataille ou en mer."
    },

    "Loupe": {
        icone: "🔍", categorie: "Équipement d'aventure",
        poids: "-", prix: "100 po",
        proprietes: ["Permet d'examiner objets en détail", "Peut allumer un feu par temps ensoleillé"],
        description: "Lentille de verre convexe montée sur un cadre. Outil du détective, du bijoutier et du sage. Révèle inscriptions minuscules, défauts cachés et marques d'identification invisibles à l'œil nu."
    },

    "Menottes": {
        icone: "⛓️", categorie: "Équipement d'aventure",
        poids: "3 kg", prix: "2 po",
        proprietes: ["Entrave les mains", "Évasion : JS Dex DD 20 ou Force DD 20"],
        description: "Anneaux de métal reliés par une courte chaîne. S'ajustent à des poignets humanoïdes de taille M ou P. Indispensables pour capturer sans tuer — ou empêcher un prisonnier récalcitrant de s'échapper."
    },

    "Miroir en acier": {
        icone: "🪞", categorie: "Équipement d'aventure",
        poids: "250 g", prix: "5 po",
        proprietes: ["Permet de regarder autour d'un angle sans s'exposer"],
        description: "Petit miroir poli en acier inoxydable. Léger, incassable, et d'une utilité surprenante — pour inspecter des couloirs sans se montrer, vérifier qu'une créature à regard pétrifiant ne vous guette pas, ou simplement se raser."
    },

    "Palan": {
        icone: "⚙️", categorie: "Équipement d'aventure",
        poids: "2,5 kg", prix: "1 po",
        proprietes: ["Multiplie la force effective ×4 pour soulever des charges"],
        description: "Système de poulies et de cordes permettant de soulever des charges très lourdes avec une force modeste. Indispensable sur un chantier, dans un port ou pour hisser un compagnon blessé hors d'un précipice."
    },

    "Pelle": {
        icone: "🪣", categorie: "Équipement d'aventure",
        poids: "2,5 kg", prix: "2 po",
        proprietes: ["Creuser : 0,5 m³/heure environ"],
        description: "Pelle à lame de fer et manche de bois. Creuse fosses, tranchées et tunnels. Arme improvisée de dernier recours. Peut aussi enterrer les morts — ou cacher un trésor pour qu'on l'oublie soigneusement."
    },

    "Perche (3 m)": {
        icone: "📏", categorie: "Équipement d'aventure",
        poids: "3 kg", prix: "5 pc",
        proprietes: ["Permet de tâter le sol, pousser des objets à distance"],
        description: "Longue tige de bois. L'outil préféré des aventuriers paranoïaques — on tâte d'abord le sol suspect avant d'y poser le pied. A sauvé plus de vies que n'importe quelle épée magique."
    },

    "Pied-de-biche": {
        icone: "🔧", categorie: "Équipement d'aventure",
        poids: "2 kg", prix: "2 po",
        proprietes: ["Avantage aux tests de Force pour forcer caisses et volets cloués"],
        description: "Levier de métal courbé aux deux extrémités. Force les caisses, arrache les planches, soulève les dalles. L'outil de l'effraction légitime — ou illégitime, selon qui vous demande."
    },

    "Piège à mâchoires": {
        icone: "🪤", categorie: "Équipement d'aventure",
        poids: "12,5 kg", prix: "5 po",
        proprietes: ["Déclenché : 1d4 perforant, vitesse 0", "Évasion : JS Force ou Dex DD 13"],
        description: "Mécanisme de métal à ressort et dents acérées dissimulé sous feuilles ou neige. Blesse et immobilise ce qui marche dessus — humains, animaux ou monstres. À placer avec des gants épais."
    },

    "Pierre à aiguiser": {
        icone: "🪨", categorie: "Équipement d'aventure",
        poids: "500 g", prix: "1 pc",
        proprietes: [],
        description: "Bloc de pierre abrasive pour affûter lames et outils. Une lame émoussée rate plus souvent qu'elle ne frappe. Cinq minutes d'entretien chaque soir peuvent sauver une vie le lendemain matin."
    },

    "Pioche de mineur": {
        icone: "⛏️", categorie: "Équipement d'aventure",
        poids: "5 kg", prix: "2 po",
        proprietes: ["Creuser dans la roche : environ 0,1 m³/heure"],
        description: "Outil à tête biface — pointe d'un côté, tranchant de l'autre. Creuse la roche, fracasse les murs, ouvre les passages murés. Dans un donjon de pierre, c'est parfois l'outil le plus utile du groupe."
    },

    "Plume d'écriture": {
        icone: "🪶", categorie: "Équipement d'aventure",
        poids: "-", prix: "2 pc",
        proprietes: [],
        description: "Grande plume taillée en pointe — d'oie, de corbeau ou d'aigle selon le goût. Outil de l'érudit, du scribe et du mage qui tient à jour son grimoire. Elle regratte selon la pression de la main."
    },

    "Piton": {
        icone: "📌", categorie: "Équipement d'aventure",
        poids: "100 g", prix: "5 pc",
        proprietes: ["Vendu à l'unité", "S'enfonce au marteau dans les fissures rocheuses"],
        description: "Petit pic de métal à tête plate qu'on enfonce dans une fissure avec un marteau. Sert d'ancrage pour une corde ou de point de fixation sur une paroi verticale. Simple, fiable, vital."
    },

    "Pointes en fer (10)": {
        icone: "📍", categorie: "Équipement d'aventure",
        poids: "2,5 kg", prix: "1 po",
        proprietes: ["Caler une porte : empêche l'ouverture", "Marquer un passage"],
        description: "Dix clous épais de fer. Plantés sous une porte, ils l'empêchent de s'ouvrir. Marqués dans la roche, ils balisent un chemin dans un labyrinthe souterrain. Polyvalence de l'objet le plus simple qui soit."
    },

    "Pot en fer": {
        icone: "🍲", categorie: "Équipement d'aventure",
        poids: "5 kg", prix: "2 po",
        proprietes: ["Contenance : 4 litres"],
        description: "Chaudron de fer robuste, suspendu au-dessus d'un feu pour cuire ragoûts et bouillons. Lourd, encombrant, mais irremplaçable pour un groupe qui campe loin de toute civilisation."
    },

    "Sablier": {
        icone: "⏳", categorie: "Équipement d'aventure",
        poids: "500 g", prix: "25 po",
        proprietes: ["Mesure 1 heure"],
        description: "Deux ampoules de verre reliées laissant s'écouler du sable fin. Instrument de mesure du temps précis et fiable — pour les rituels minutés, les gardes de nuit ou les mages qui calculent la durée de leurs sorts."
    },

    "Sifflet": {
        icone: "🎵", categorie: "Équipement d'aventure",
        poids: "-", prix: "5 pc",
        proprietes: ["Signal sonore audible à grande distance"],
        description: "Petit instrument à vent produisant un son perçant. Signal d'alerte, de ralliement ou de détresse. Dans un donjon sombre, un coup de sifflet peut appeler les renforts — ou alerter tout l'étage."
    },

    "Tente": {
        icone: "⛺", categorie: "Équipement d'aventure",
        poids: "10 kg", prix: "2 po",
        proprietes: ["Abrite 2 personnes", "Protection contre intempéries légères"],
        description: "Abri de toile tendu sur des montants de bois. Protège de la pluie et du vent, offre une semi-intimité dans les camps. Lourde à porter mais précieuse quand le ciel se couvre et que la nuit tombe."
    },

    "Tonneau": {
        icone: "🛢️", categorie: "Équipement d'aventure",
        poids: "35 kg", prix: "2 po",
        proprietes: ["Contenance : 150 litres"],
        description: "Fût de bois cerclé de métal. Transporte liquides, grains ou provisions en grande quantité. Un tonneau vide flotte — ce qui peut s'avérer utile pour traverser une rivière ou fuir un naufrage."
    },

    "Équipement d'escalade (kit)": {
        icone: "🧗", categorie: "Équipement d'aventure",
        poids: "6 kg", prix: "25 po",
        proprietes: ["Avantage aux tests d'Athlétisme pour escalader"],
        description: "Ensemble de pitons, crochets, sangles et marteau permettant d'escalader en sécurité les parois les plus verticales. L'aventurier équipé peut aller là où les autres s'arrêtent, bouche ouverte."
    },

    "Balance de marchand": {
        icone: "⚖️", categorie: "Outils & instruments",
        poids: "1,5 kg", prix: "5 po",
        proprietes: ["Peser jusqu'à plusieurs kg avec précision"],
        description: "Balance à plateau avec jeu de poids étalonnés. Indispensable pour les marchands honnêtes — et pour détecter les pièces truquées. Un aventurier équipé ne se fait pas arnaquer sur le poids de ses gemmes."
    },

    "Marteau": {
        icone: "🔨", categorie: "Outils & instruments",
        poids: "1,5 kg", prix: "1 po",
        proprietes: [],
        description: "Marteau de charpentier ou d'artisan à tête de métal et manche de bois. Enfonce les pitons, répare les meubles, fracasse les caisses. L'outil le plus polyvalent après la corde."
    },

    "Marteau de forgeron": {
        icone: "🔨", categorie: "Outils & instruments",
        poids: "2 kg", prix: "10 po",
        proprietes: [],
        description: "Lourd marteau à tête massive pour travailler le métal chaud sur l'enclume. Hors de la forge, c'est une arme contondante redoutable. Les nains l'emportent parfois en adventure — on ne sait jamais."
    },

    "Matériel de pêche": {
        icone: "🎣", categorie: "Outils & instruments",
        poids: "2 kg", prix: "1 po",
        proprietes: ["Pêcher : 1 heure pour 1d4 rations dans un cours d'eau poissonneux"],
        description: "Canne, fil, hameçons et leurres basiques. Permet de compléter les rations en chemin si on longe une rivière ou un lac. Activité reposante entre deux combats — et les poissons ne rendent pas les coups."
    },

    // ── SÉCURITÉ & SERRURES ──────────────────────────────────────

    "Cadenas": {
        icone: "🔒", categorie: "Sécurité & serrures",
        poids: "500 g", prix: "10 po",
        proprietes: ["Crocheter : JS Dex DD 15 avec outils de voleur"],
        description: "Serrure de métal avec clé amovible. Sécurise coffres, chaînes et portes. Sa qualité varie — un cadenas bon marché tombe vite face à un crocheteur habile. Un cadenas de qualité donne du fil à retordre."
    },

    "Cloche": {
        icone: "🔔", categorie: "Sécurité & serrures",
        poids: "-", prix: "1 pa",
        proprietes: ["Signal sonore en cas d'intrusion"],
        description: "Petite cloche de métal suspendue à un fil tendu en travers d'un passage. Alarme primitive mais efficace — quand elle tinte, quelque chose est entré. Simple, bon marché, parfois vital."
    },

    "Ore à crochet": {
        icone: "🗝️", categorie: "Sécurité & serrures",
        poids: "-", prix: "1 pa",
        proprietes: [],
        description: "Petit crochet de métal servant à suspendre ou accrocher. Planté dans une poutre, il devient une alarme improvisée, un point d'ancrage de corde ou simplement un endroit pour pendre son manteau."
    },

    // ── ÉCRITURE & SAVOIR ────────────────────────────────────────

    "Livre": {
        icone: "📚", categorie: "Écriture & savoir",
        poids: "2,5 kg", prix: "25 po",
        proprietes: ["Vierge ou rempli selon contenu"],
        description: "Volume relié de parchemin ou de vélin couvert de texte manuscrit. Rare, précieux, irremplaçable. Dans un monde où peu savent lire, posséder un livre signale une instruction et une richesse certaines."
    },

    "Craie (un morceau)": {
        icone: "✏️", categorie: "Écriture & savoir",
        poids: "-", prix: "1 pc",
        proprietes: ["Écriture effaçable sur pierre, ardoise, bois"],
        description: "Petit bâton de craie blanche. Marquer les murs d'un donjon pour trouver son chemin, dessiner un cercle de protection, noter un message. Quand l'encre manque, la craie sauve la mise."
    },

    "Cruche ou pichet": {
        icone: "🏺", categorie: "Écriture & savoir",
        poids: "2 kg", prix: "2 pc",
        proprietes: ["Contient jusqu'à 3,5 litres"],
        description: "Récipient en céramique ou en métal pour servir l'eau, le vin ou l'hydromel. Présent sur chaque table de taverne, dans chaque cuisine de château. Casse facilement — mais coûte peu à remplacer."
    },

    "Grimoire": {
        icone: "📖", categorie: "Écriture & savoir",
        poids: "1,5 kg", prix: "50 po",
        proprietes: ["Contient sorts copiés du magicien", "Perte = catastrophe pour le mage"],
        description: "Volume relié en cuir contenant les formules magiques transcrites d'un magicien. Plus précieux que la vie pour son propriétaire. Chaque sort copié représente des heures de travail minutieux et de dépenses en encre runique."
    },

    "Papier (une feuille)": {
        icone: "📄", categorie: "Écriture & savoir",
        poids: "-", prix: "2 pa",
        proprietes: [],
        description: "Feuille de papier de qualité correcte. Supporte l'encre sans boire ni gondoler. Plus pratique que le parchemin pour les notes rapides, plus fragile à l'eau. Traiter avec soin."
    },

    "Parchemin (une feuille)": {
        icone: "📜", categorie: "Écriture & savoir",
        poids: "-", prix: "1 pa",
        proprietes: [],
        description: "Feuille de peau d'animal traitée et séchée. Plus durable que le papier, résiste mieux à l'humidité. Support traditionnel des contrats officiels, des sorts transcrits et des cartes qui doivent durer des siècles."
    },

    // ── MUNITIONS ────────────────────────────────────────────────

    "Munitions - Aiguilles de sarbacane (50)": {
        icone: "🎯", categorie: "Munitions",
        poids: "500 g", prix: "1 po",
        proprietes: ["50 aiguilles", "Compatibles avec la sarbacane"],
        description: "Cinquante fines aiguilles de métal ou d'os pour sarbacane. Légères, précises, souvent enduites de poison. Un tube et cinquante aiguilles — de quoi silencieusement neutraliser cinquante cibles ou en endormir une cinquantaine."
    },

    "Munitions - Billes de fronde (20)": {
        icone: "⚫", categorie: "Munitions",
        poids: "750 g", prix: "4 pc",
        proprietes: ["20 billes de plomb", "Compatibles avec la fronde"],
        description: "Vingt sphères de plomb coulé, lourdes et aérodynamiques. Tirées à la fronde, elles atteignent une vitesse et une précision que les simples cailloux ne peuvent égaler. Les bergers en rient — jusqu'à ce qu'on les voie en action."
    },

    "Munitions - Carreaux d'arbalète (20)": {
        icone: "➡️", categorie: "Munitions",
        poids: "750 g", prix: "1 po",
        proprietes: ["20 carreaux", "Compatibles avec arbalètes légères, lourdes et de poing"],
        description: "Vingt carreaux d'arbalète à pointe d'acier et empennage de bois ou d'os. Courts et trapus, conçus pour percer plutôt que planer. Après utilisation, récupérer ceux qui ne se sont pas brisés."
    },

    "Munitions - Flèches (20)": {
        icone: "🏹", categorie: "Munitions",
        poids: "500 g", prix: "1 po",
        proprietes: ["20 flèches", "Compatibles avec arcs courts et longs"],
        description: "Vingt flèches à pointe de fer et empennage de plumes d'oie. Équilibrées pour voler droit et percer la chair ou l'armure légère. Récupérer les flèches après combat — elles valent leur poids en survie."
    },

    // ── CONTENANTS ───────────────────────────────────────────────

    "Bouteille en verre": {
        icone: "🍾", categorie: "Contenants",
        poids: "1 kg", prix: "2 po",
        proprietes: ["Contient jusqu'à 750 ml"],
        description: "Bouteille de verre soufflé à goulot étroit. Sert à conserver vins, potions ou huiles précieuses. Fragile si on la laisse tomber — mais le verre brisé a parfois son utilité dans un pincement de sécurité."
    },

    "Gamelle": {
        icone: "🥣", categorie: "Contenants",
        poids: "500 g", prix: "2 pa",
        proprietes: [],
        description: "Écuelle de métal étamé avec couvercle. Compagne de tout soldat et aventurier en campagne. Sert autant à manger qu'à faire bouillir de l'eau d'urgence. Simple et indestructible."
    },

    "Gourde (pleine)": {
        icone: "🫗", categorie: "Contenants",
        poids: "2,5 kg", prix: "2 pa",
        proprietes: ["Contient 4 litres d'eau"],
        description: "Récipient de cuir ou de céramique portant quatre litres d'eau. Pleine, elle est lourde — vide, elle rappelle qu'on aurait dû la remplir à la dernière source. L'eau est la ressource la plus précieuse dans un désert ou un donjon profond."
    },

    "Panier": {
        icone: "🧺", categorie: "Contenants",
        poids: "1 kg", prix: "4 pa",
        proprietes: ["Contient jusqu'à 20 kg"],
        description: "Panier tressé de jonc ou d'osier. Léger, aéré, pratique pour transporter vivres et petits objets. Moins discret qu'un sac — tout le monde voit ce qu'il y a dedans. Ce n'est pas toujours un inconvénient."
    },

    "Sac": {
        icone: "👜", categorie: "Contenants",
        poids: "250 g", prix: "1 pc",
        proprietes: ["Contient jusqu'à 15 kg / 30 litres"],
        description: "Sac de toile ou de jute. Rustique, bon marché, polyvalent. Fourre-tout de l'aventurier pressé — si ça rentre dedans et que ça ne fuit pas, c'est suffisant."
    },

    "Sac à dos": {
        icone: "🎒", categorie: "Contenants",
        poids: "2,5 kg", prix: "2 po",
        proprietes: ["Contient jusqu'à 30 kg / 60 litres"],
        description: "Sac à sangles de cuir porté dans le dos, avec poches et compartiments. L'équipement de base de tout aventurier. Bien rempli, il contient tout ce dont on a besoin pour une semaine en extérieur."
    },

    "Sac de couchage": {
        icone: "🛏️", categorie: "Contenants",
        poids: "2 kg", prix: "1 po",
        proprietes: [],
        description: "Sac de grosse toile rembourré de laine ou de plumes. Protège du froid nocturne jusqu'à des températures raisonnables. Moins confortable qu'un lit d'auberge — mais on s'y habitue après la troisième nuit dehors."
    },

    "Sacoche": {
        icone: "👝", categorie: "Contenants",
        poids: "500 g", prix: "5 pa",
        proprietes: ["Contient jusqu'à 3 kg"],
        description: "Petite bourse de cuir à fermoir, portée à la ceinture. Contient pièces, petits objets et documents importants. La première chose qu'un voleur cherche — garder à l'œil ou planquer sous le manteau."
    },

    "Sacoche à composantes": {
        icone: "🧳", categorie: "Contenants",
        poids: "1 kg", prix: "25 po",
        proprietes: ["Remplace les composantes matérielles de sorts sans coût spécifié"],
        description: "Sacoche spécialement compartimentée contenant une sélection de composantes magiques courantes — soufre, plumes, cordes de soie, cristaux mineurs. Remplace la recherche fastidieuse de chaque composante à la unité."
    },

    "Savon": {
        icone: "🧼", categorie: "Contenants",
        poids: "-", prix: "2 pc",
        proprietes: [],
        description: "Pain de savon fait de suif et de cendres. L'hygiène n'est pas optionnelle pour qui veut être admis en cour royale. Certains donjons sont nauséabonds — au moins, on peut sentir bon en y mourant."
    },

    "Seau": {
        icone: "🪣", categorie: "Contenants",
        poids: "1 kg", prix: "5 pc",
        proprietes: ["Contient jusqu'à 11 litres"],
        description: "Seau de bois cerclé de métal ou de simple métal battu. Transporte l'eau, le sable, le charbon ou n'importe quoi d'autre. L'outil le plus ignoré — et le plus regretté quand on n'en a pas."
    },

    // ── NOURRITURE & SURVIE ──────────────────────────────────────

    "Rations (1 jour)": {
        icone: "🍖", categorie: "Nourriture & survie",
        poids: "1 kg", prix: "5 pa",
        proprietes: ["1 journée de nourriture sèche pour 1 personne"],
        description: "Viande séchée, fromage dur, biscuits de marin et fruits secs. Sans saveur, sans élégance — mais ca sustente pour une journée entière de marche ou de combat. Un aventurier affamé est un aventurier mort."
    },

    // ── VÊTEMENTS & ACCESSOIRES ──────────────────────────────────

    "Chevalière": {
        icone: "💍", categorie: "Vêtements & accessoires",
        poids: "-", prix: "5 po",
        proprietes: ["Sceau : permet de cacheter la cire des lettres officielles"],
        description: "Bague massive gravée aux armes d'une famille, d'une guilde ou d'une institution. Sert à sceller les lettres officielles dans la cire. Symbole d'autorité et d'appartenance — et de prestige dans les milieux nobles."
    },

    "Robes": {
        icone: "👘", categorie: "Vêtements & accessoires",
        poids: "2 kg", prix: "1 po",
        proprietes: [],
        description: "Longue robe de tissu simple, vêtement classique des érudits, des clercs et des magiciens. Pratique, ample, et universellement reconnue comme le costume du praticien des arts savants ou divins."
    },

    "Vêtements, communs": {
        icone: "👕", categorie: "Vêtements & accessoires",
        poids: "1,5 kg", prix: "5 pa",
        proprietes: [],
        description: "Chemise, pantalon, ceinture et chaussures de qualité modeste. Les vêtements du peuple — robustes, ternes, fonctionnels. Permettent de passer inaperçu dans la foule d'un marché ou d'un village."
    },

    "Vêtements, costume": {
        icone: "🎭", categorie: "Vêtements & accessoires",
        poids: "2 kg", prix: "5 po",
        proprietes: ["Avantage aux tests de Tromperie ou Représentation selon le contexte"],
        description: "Costume de théâtre, de mascarade ou de déguisement. Permet d'incarner un personnage crédible — garde, noble, marchand ou prêtre. L'outil du barde et de l'espion. Le vrai talent est dans comment on le porte."
    },

    "Vêtements, fins": {
        icone: "👔", categorie: "Vêtements & accessoires",
        poids: "3 kg", prix: "15 po",
        proprietes: ["Avantage possible aux tests de Persuasion en contexte noble"],
        description: "Velours, soie et broderies finement travaillées. La tenue d'un noble, d'un ambassadeur ou d'un grand marchand. Dans une cour royale, s'habiller pauvrement ferme les portes — s'habiller richement les ouvre."
    },

    "Vêtements, voyage": {
        icone: "🧥", categorie: "Vêtements & accessoires",
        poids: "2 kg", prix: "2 po",
        proprietes: [],
        description: "Cape imperméable, chemise épaisse, pantalon robuste et bottes montantes. Conçus pour résister aux intempéries, à la boue et aux longues marches. L'équipement du voyageur sérieux qui sait ce qu'est une semaine de pluie."
    }
};

// ── UTILITAIRES ÉQUIPEMENT ───────────────────────────────────────

/**
 * Retourne tous les items d'une catégorie
 */
function getEquipementParCategorie(categorie) {
    return Object.entries(MATERIEL_EQUIPEMENT)
        .filter(([_, e]) => e.categorie === categorie)
        .reduce((acc, [nom, data]) => { acc[nom] = data; return acc; }, {});
}

/**
 * Liste des catégories d'équipement
 */
function getCategoriesEquipement() {
    return [...new Set(Object.values(MATERIEL_EQUIPEMENT).map(e => e.categorie))];
}

if (typeof window !== 'undefined') {
    window.MATERIEL_EQUIPEMENT        = MATERIEL_EQUIPEMENT;
    window.getEquipementParCategorie  = getEquipementParCategorie;
    window.getCategoriesEquipement    = getCategoriesEquipement;
}
if (typeof module !== 'undefined') {
    module.exports = Object.assign(module.exports || {}, {
        MATERIEL_EQUIPEMENT,
        getEquipementParCategorie,
        getCategoriesEquipement
    });
}
