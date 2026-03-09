/**
 * ═══════════════════════════════════════════════════════════════
 *  LA TABLE RONDE (MAIS CARRÉE) — Données RPG
 *  Races, Classes, Bonus de caractéristiques, Descriptions
 *  Usage : tooltips in-game + génération Livre du Joueur/Maître
 * ═══════════════════════════════════════════════════════════════
 */

const RPG_RACES = {

    "Humain": {
        icone: "🧑",
        bonus: { force: 1, dexterite: 1, constitution: 1, intelligence: 1, sagesse: 1, charisme: 1 },
        tooltip: "Adaptable et ambitieux — maître de toutes les disciplines.",
        description_joueur: `
Les Humains sont la race la plus répandue et la plus diverse du royaume.
Ni les plus forts, ni les plus agiles, ni les plus sages — mais les plus adaptables.
Là où d'autres races excellent dans un domaine unique, l'Humain progresse dans tous.
Cette polyvalence en fait des aventuriers redoutables sur le long terme.

Bonus : +1 à TOUTES les caractéristiques.

Traits raciaux :
• Polyvalence — Peut choisir une compétence ou un outil supplémentaire à la création.
• Ambition — Une fois par repos long, peut relancer un jet de compétence raté.
• Héritage varié — Accès à un talent racial au choix parmi trois options.

Apparence : Extrêmement variable selon les régions. Taille et corpulence moyennes.
Durée de vie : 70 à 100 ans.
Alignements fréquents : Tous, sans prédominance particulière.
        `,
        description_maitre: `
Les Humains sont le miroir du joueur lui-même : imprévisibles, ambitieux, capables du meilleur comme du pire.
En tant que Maître, utilisez les PNJ humains pour introduire la corruption, la trahison, mais aussi l'héroïsme inattendu.
Leur courte durée de vie les rend urgents dans leurs actes — ils veulent laisser une trace.

Motivations typiques : gloire, richesse, héritage familial, vengeance, amour, foi.
Factions : présents dans toutes les factions sans exception.
Rôle narratif : archétype du héros ordinaire qui accomplit l'extraordinaire.
Conseil au Maître : ne sous-estimez jamais un PNJ humain — leur adaptabilité en fait souvent la surprise de la session.
        `
    },

    "Elfe": {
        icone: "🧝",
        bonus: { dexterite: 2, intelligence: 1 },
        tooltip: "Grâce millénaire et acuité intellectuelle — l'élégance faite chair.",
        description_joueur: `
Les Elfes sont une race ancienne, liée à la magie primordiale du monde.
Ils perçoivent le monde avec une finesse sensorielle unique : leur ouïe capte les murmures à cent pas,
leurs yeux percent l'obscurité, et leur esprit retient chaque détail avec une précision cristalline.
Leur longévité leur permet d'accumuler un savoir encyclopédique, mais les rend parfois distants
vis-à-vis des races éphémères.

Bonus : +2 Dextérité, +1 Intelligence.

Traits raciaux :
• Vision dans le noir — Voit clairement jusqu'à 18 mètres dans l'obscurité totale.
• Sens aiguisés — Avantage aux tests de Perception basés sur la vue ou l'ouïe.
• Transe elfique — 4 heures de méditation remplacent un repos long complet.
• Immunité au sommeil magique — Les sorts de sommeil n'ont aucun effet.

Apparence : Grands et élancés, oreilles pointues, traits fins, yeux aux couleurs inhabituelles.
Durée de vie : 700 à 1000 ans.
Alignements fréquents : Chaotique Bon, Neutre Bon.
        `,
        description_maitre: `
Les Elfes sont des gardiens de la mémoire du monde. Ils ont vu des empires naître et mourir.
En tant que Maître, les PNJ elfes représentent la sagesse ancienne — mais aussi l'arrogance
d'une race qui se croit supérieure. Utilisez leur perspective millénaire pour offrir des informations
que nul autre PNJ ne pourrait fournir.

Motivations typiques : préservation de la nature, quête de savoir interdit, deuil d'un monde disparu.
Factions : Grands Cercles de Mages, Confréries des Forêts, Gardiens des Anciens.
Rôle narratif : mentor mystérieux, antagoniste froid et calculateur, ou allié imprévisible.
Conseil au Maître : un Elfe qui s'implique dans les affaires humaines a une raison très personnelle — explorez-la.
        `
    },

    "Nain": {
        icone: "⛏️",
        bonus: { constitution: 2, force: 1 },
        tooltip: "Indestructible et tenace — la montagne a trouvé sa forme humaine.",
        description_joueur: `
Les Nains sont forgés dans la pierre et le feu des profondeurs. Compacts, robustes,
et d'une endurance légendaire, ils sont les maîtres incontestés de la forge, de la mine et de la guerre de tranchées.
Leur parole est un serment gravé dans la roche — ils ne reviennent jamais sur leur engagement.
Cette loyauté indéfectible en fait des alliés précieux, mais des ennemis redoutables et tenaces.

Bonus : +2 Constitution, +1 Force.

Traits raciaux :
• Résistance au poison — Avantage aux jets de sauvegarde contre le poison, résistance aux dégâts de poison.
• Solidité naine — +1 PV supplémentaire par niveau.
• Maîtrise des armes naines — Hache de guerre, hachette, marteau léger et marteau de guerre.
• Vision dans le noir — 18 mètres en obscurité totale.
• Connaissance de la pierre — Avantage aux tests d'Histoire liés aux structures et mines.

Apparence : 1,20 à 1,50 m, corpulents, barbe longue (fierté culturelle).
Durée de vie : 350 à 450 ans.
Alignements fréquents : Loyal Bon, Loyal Neutre.
        `,
        description_maitre: `
Les Nains incarnent la valeur du travail, de l'honneur et de la tradition.
Un PNJ nain sera méfiant envers les inconnus, mais d'une loyauté absolue envers ceux qui ont prouvé leur valeur.
Utilisez leurs rancunes générationnelles — les Nains n'oublient jamais une offense.

Motivations typiques : honneur du clan, vengeance d'un affront ancestral, récupération d'une relique.
Factions : Guildes de Forgerons, Armées Souterraines, Clans montagnards.
Rôle narratif : allié bourru mais fiable, maître artisan avec des secrets, gardien d'une forteresse oubliée.
Conseil au Maître : donnez à chaque Nain une rancune et un point d'honneur — sa personnalité en découlera naturellement.
        `
    },

    "Halfelin": {
        icone: "🦶",
        bonus: { dexterite: 2, charisme: 1 },
        tooltip: "Chanceux et insaisissable — petit par la taille, immense par la fortune.",
        description_joueur: `
Les Halfelins sont une race de petits êtres joyeux, discrets et incroyablement chanceux.
Ils évitent rarement les problèmes par la force — ils les contournent avec grâce, humour et un sourire désarmant.
Leur taille leur vaut souvent d'être sous-estimés, une erreur que leurs adversaires ne commettent généralement qu'une fois.
La chance semble couler dans leurs veines : même dans les situations les plus désespérées, ils trouvent une issue.

Bonus : +2 Dextérité, +1 Charisme.

Traits raciaux :
• Chance halfeline — Quand un jet naturel donne 1, relancez le dé (obligatoire).
• Bravoure — Avantage aux jets de sauvegarde contre la peur.
• Discrétion naturelle — Peut se cacher derrière une créature d'une catégorie de taille supérieure.
• Agilité halfeline — Peut traverser l'espace d'une créature plus grande sans désavantage.

Apparence : 90 cm à 1,20 m, pieds larges et poilus, traits ronds et expressifs.
Durée de vie : 150 à 200 ans.
Alignements fréquents : Neutre Bon, Chaotique Bon.
        `,
        description_maitre: `
Les Halfelins sont des survivants nés. Ils ont traversé des siècles d'histoire en restant invisibles
aux yeux des grandes races. Un PNJ halfelin sera rarement celui qu'on remarque — mais celui qui
a tout entendu, tout vu, et qui revend l'information au bon moment.

Motivations typiques : confort de la communauté, protéger les leurs, curiosité d'aventure inattendue.
Factions : Réseaux marchands, espions, aubergistes et informateurs.
Rôle narratif : informateur inattendu, voleur au grand cœur, guide local irremplaçable.
Conseil au Maître : un Halfelin en difficulté est toujours plus dangereux qu'il n'y paraît — sa chance le sort toujours.
        `
    },

    "Gnome": {
        icone: "🍄",
        bonus: { intelligence: 2, sagesse: 1 },
        tooltip: "Inventeur compulsif et philosophe discret — le génie à l'état brut.",
        description_joueur: `
Les Gnomes sont les esprits les plus curieux et inventifs du royaume.
Là où un Humain voit un problème, un Gnome voit dix solutions — dont sept sont follement dangereuses
et deux sont brillantes. Leur rapport au monde est fondamentalement intellectuel :
tout est une énigme à résoudre, un mécanisme à démonter, un phénomène à cataloguer.
Leur sagesse innée leur permet de ne pas trop se perdre dans leurs propres théories.

Bonus : +2 Intelligence, +1 Sagesse.

Traits raciaux :
• Ruse gnome — Avantage aux jets de sauvegarde de Int, Sag et Cha contre la magie.
• Vision dans le noir — 18 mètres en obscurité totale.
• Connaissance naturelle — Maîtrise de l'Arcane, de l'Histoire ou de la Nature (au choix).
• Mémoire photographique — Peut mémoriser n'importe quel texte ou carte en 10 minutes.

Apparence : 90 cm à 1,15 m, nez proéminent, yeux vifs et curieux, souvent tachés d'encre ou de graisse.
Durée de vie : 350 à 500 ans.
Alignements fréquents : Neutre Bon, Chaotique Neutre.
        `,
        description_maitre: `
Les Gnomes sont l'incarnation de la curiosité sans limites. Ils s'intéressent à tout,
posent des questions embarrassantes et ont tendance à démontrer les choses au mauvais moment.
En tant que Maître, les PNJ gnomes sont d'excellents fournisseurs d'informations ésotériques
— mais ils exigent toujours quelque chose en échange : une découverte, un mystère, une réponse.

Motivations typiques : comprendre l'incompréhensible, inventer l'inutile nécessaire, cataloguer le monde.
Factions : Guildes des Inventeurs, Académies de Magie, Bibliothèques secrètes.
Rôle narratif : inventeur génial et inadapté, sage détenteur d'une connaissance cruciale, espion discret.
Conseil au Maître : laissez le PNJ gnome parler — il révèlera souvent plus que prévu par excitation intellectuelle.
        `
    },

    "Semi-Elfe": {
        icone: "🌗",
        bonus: { charisme: 1, dexterite: 1, intelligence: 1 },
        tooltip: "Pont entre deux mondes — ni tout à fait l'un, ni tout à fait l'autre.",
        description_joueur: `
Les Semi-Elfes naissent de l'union entre un Humain et un Elfe, héritant du meilleur des deux races
— et parfois du pire. Trop humains pour les Elfes, trop elfiques pour les Humains,
ils apprennent tôt à naviguer entre les mondes et à se faire accepter grâce à leur charme naturel.
Cette marginalité les rend exceptionnellement empathiques et adaptables.

Bonus : +1 Charisme, +1 Dextérité, +1 Intelligence.

Traits raciaux :
• Vision dans le noir — 18 mètres en obscurité totale.
• Héritage féerique — Avantage aux jets contre le charme, immunité au sommeil magique.
• Polyvalence semi-elfique — Maîtrise de deux compétences supplémentaires au choix.
• Diplomatie naturelle — Avantage aux tests de Persuasion avec des créatures d'Intelligence ≥ 8.

Apparence : Traits intermédiaires, légèrement plus grands que les Humains, oreilles discrètement pointues.
Durée de vie : 180 à 250 ans.
Alignements fréquents : Chaotique Bon, Neutre Bon, Chaotique Neutre.
        `,
        description_maitre: `
Les Semi-Elfes sont des personnages de l'entre-deux — ni appartenance pleine nulle part.
Cette dualité en fait des PNJ fascinants, tiraillés entre deux identités.
Ils sont d'excellents diplomates, espions ou médiateurs — ils comprennent instinctivement les deux camps.

Motivations typiques : trouver sa place, prouver sa valeur, réconcilier deux factions en conflit.
Factions : Aucune faction exclusive — présents partout comme intermédiaires.
Rôle narratif : messager entre factions, personnage à double identité, traître ou héros selon le contexte.
Conseil au Maître : jouez sur leur sentiment de ne jamais appartenir — c'est leur force et leur blessure.
        `
    },

    "Semi-Orc": {
        icone: "💀",
        bonus: { force: 2, constitution: 1 },
        tooltip: "Puissance brute et survie instinctive — le combat est sa langue natale.",
        description_joueur: `
Les Semi-Orcs portent l'héritage des Orcs avec une puissance physique hors du commun.
Souvent jugés sur leur apparence, ils doivent se forger une réputation par leurs actes.
Leur instinct de survie est légendaire — même à l'agonie, un Semi-Orc peut encore se battre.
Ceux qui les côtoient découvrent souvent une loyauté féroce et une détermination sans faille.

Bonus : +2 Force, +1 Constitution.

Traits raciaux :
• Endurance implacable — Une fois par repos long, quand réduit à 0 PV, tombe à 1 PV à la place.
• Attaque sauvage — Quand un coup critique est porté avec une arme de mêlée, ajoutez un dé de dégâts.
• Intimidation naturelle — Maîtrise de la compétence Intimidation.
• Vision dans le noir — 18 mètres en obscurité totale.

Apparence : 1,80 à 2,10 m, mâchoires proéminentes, teint grisâtre ou verdâtre, musculature impressionnante.
Durée de vie : 75 à 90 ans.
Alignements fréquents : Chaotique Neutre, Neutre Strict, Loyal Neutre.
        `,
        description_maitre: `
Les Semi-Orcs sont des survivants d'un monde qui ne voulait pas d'eux.
Chaque PNJ Semi-Orc a une histoire de rejet, de préjugé surmonté — ou pas.
Utilisez cette tension pour créer des personnages profonds, ni purement bons ni purement mauvais.

Motivations typiques : prouver sa valeur, protéger les marginaux, vengeance contre ceux qui méprisent les "monstres".
Factions : Bandes de mercenaires, tribus frontalières, armées d'élite comme briseurs de lignes.
Rôle narratif : guerrier au grand cœur incompris, garde du corps loyal, antagoniste tragique.
Conseil au Maître : ne réduisez jamais un Semi-Orc à sa seule violence — sa vraie force est sa résilience.
        `
    },

    "Tieffelin": {
        icone: "😈",
        bonus: { charisme: 2, intelligence: 1 },
        tooltip: "Héritage infernal et charme vénéneux — la séduction comme arme absolue.",
        description_joueur: `
Les Tiefelins portent en eux le sang d'un démon ou d'un diable lointain.
Leurs cornes, leur queue et leurs yeux incandescents les condamnent à la méfiance des autres.
Mais là où les autres voient une malédiction, les Tiefelins voient un pouvoir.
Leur charisme surnaturel et leur intellect acéré en font des manipulateurs redoutables —
ou des alliés d'une loyauté fanatique envers ceux qui les acceptent sans jugement.

Bonus : +2 Charisme, +1 Intelligence.

Traits raciaux :
• Résistance infernale — Résistance aux dégâts de feu.
• Héritage infernal — Accès à des sorts innés selon la lignée (lumières, ténèbres, feu infernal).
• Vision dans le noir — 18 mètres en obscurité totale.
• Mémoire démoniaque — Avantage aux tests d'Arcane liés aux plans inférieurs et aux démons.

Apparence : Cornes, queue, peau de couleur inhabituelle (rouge, violette, bleue), yeux sans pupilles.
Durée de vie : 90 à 120 ans.
Alignements fréquents : Chaotique Neutre, Neutre Mauvais, Chaotique Mauvais — mais aussi Loyal Bon (rédemption).
        `,
        description_maitre: `
Les Tiefelins sont des personnages de rédemption ou de damnation — rarement entre les deux.
La société les a rejetés, et ils ont appris à utiliser cela comme moteur.
En tant que Maître, jouez sur leur dualité : l'héritage infernal tire vers le bas, leur volonté tire vers le haut.

Motivations typiques : rédemption, prouve que l'héritage ne définit pas l'âme, vengeance contre ceux qui jugent.
Factions : Guildes de voleurs, cultes infernaux (pour les corrompus), ou solitaires errants.
Rôle narratif : anti-héros magnétique, informateur des bas-fonds, antagoniste tragiquement lucide.
Conseil au Maître : un Tieffelin qui fait confiance à quelqu'un lui donne tout — c'est sa grande vulnérabilité.
        `
    },

    "Dragonide": {
        icone: "🐉",
        bonus: { force: 2, charisme: 1 },
        tooltip: "Sang de dragon et prestance royale — né pour dominer les champs de bataille.",
        description_joueur: `
Les Dragonides descendent directement des dragons — les créatures les plus puissantes du monde connu.
Ils héritent de la force colossale de leurs ancêtres, de leur souffle dévastateur
et d'une présence naturelle qui impose le respect — ou la terreur.
Leur culture valorise l'excellence et l'honneur au combat, et un Dragonide sans clan est un être perdu.

Bonus : +2 Force, +1 Charisme.

Traits raciaux :
• Souffle draconique — Une attaque de souffle (type selon la lignée) utilisable une fois par repos court.
  Cônes ou lignes de 4,5 m ou 9 m, jet de sauvegarde (Con ou Dex selon le type).
• Résistance élémentaire — Résistance au type d'énergie de sa lignée.
• Intimidation draconique — Avantage aux tests d'Intimidation contre les créatures de taille M ou inférieure.
• Présence draconique — Une fois par jour, peut imposer un désavantage à un jet de sauvegarde ennemi.

Lignées disponibles : Or (feu), Argent (froid), Bronze (foudre), Cuivre (acide), Rouge (feu), Bleu (foudre).
Apparence : 1,90 à 2,20 m, écailles colorées selon la lignée, museau reptilien, queue puissante.
Durée de vie : 80 à 120 ans.
Alignements fréquents : Loyal Bon, Loyal Neutre, Neutre Strict.
        `,
        description_maitre: `
Les Dragonides sont des êtres de clan et d'honneur draconique. Sans clan, ils errent.
Avec un clan, ils meurent pour lui. Cette loyauté absolue en fait des PNJ extrêmement fiables
— ou des adversaires implacables si leur honneur a été bafoué.

Motivations typiques : restaurer l'honneur du clan, retrouver une lignée perdue, venger un ancêtre.
Factions : Ordres militaires, gardes d'élite, clans draconides nomades.
Rôle narratif : guerrier d'honneur, chef martial respecté, antagoniste noble et irréconciliable.
Conseil au Maître : blessez l'honneur d'un Dragonide pour créer le meilleur antagoniste — jamais oublié, jamais pardonné.
        `
    }
};


// ═══════════════════════════════════════════════════════════════
//  CLASSES
// ═══════════════════════════════════════════════════════════════

const RPG_CLASSES = {

    "Barbare": {
        icone: "🪓",
        bonus: { force: 2, constitution: 1 },
        tooltip: "Rage incontrôlable et corps d'acier — la tempête en forme humaine.",
        description_joueur: `
Le Barbare est le guerrier primitif qui puise sa force dans une rage instinctive et sauvage.
Là où d'autres s'entraînent des années pour maîtriser une technique, le Barbare laisse parler
son instinct de prédateur. En état de Rage, il dépasse les limites humaines du corps :
il ignore la douleur, multiplie sa force et se bat jusqu'à la mort sans fléchir.

Caractéristiques clés : Force, Constitution.
Bonus de classe : +2 Force, +1 Constitution.
Dé de vie : d12 (le plus élevé du jeu).

Capacités emblématiques :
• Rage — Résistance aux dégâts physiques + bonus de dégâts de mêlée. Dure 1 minute.
• Défense sans armure — Con remplace une partie de la CA sans armure.
• Attaque téméraire — Avantage garanti, mais l'ennemi aussi contre vous.
• Sens du danger — Avantage aux jets de sauvegarde contre les effets visibles.
• Mouvement rapide — +3 m de déplacement sans armure lourde.

Style de combat : mêlée rapprochée, encaissement maximum, dégâts bruts.
Armes favorites : haches, marteaux, armes à deux mains.
Armure : légère ou aucune (préfère la liberté de mouvement).

Rôle dans le groupe : ligne de front, absorbeur de dégâts, terreur psychologique des ennemis.
        `,
        description_maitre: `
Le Barbare est l'arme vivante du groupe. En tant que Maître, il fonctionne mieux dans
les combats chaotiques à plusieurs ennemis où sa résistance brille. Évitez les longues rencontres
de diplomatie où il sera frustré — ou exploitez cette frustration pour créer de la tension dramatique.

Archétypes de voie : Berserker (dégâts purs), Totem (connexion spirituelle animale), Tempête (électricité).
PNJ Barbare typique : chef de tribu, garde du corps impulsif, guerrier en quête de la mort honorable.
Défi narratif : l'incontrôlabilité de la Rage peut être une source de complication excellente.
Conseil au Maître : donnez-lui un code d'honneur tribal — même le Barbare a des règles.
        `
    },

    "Barde": {
        icone: "🎭",
        bonus: { charisme: 2, dexterite: 1 },
        tooltip: "Art et manipulation — chaque mot est une arme, chaque note un sort.",
        description_joueur: `
Le Barde est un artiste qui a découvert que la magie et l'art sont la même chose.
Sa voix, son instrument ou sa plume canalisent des pouvoirs qui altèrent la réalité.
Il excelle en soutien, en contrôle et en interaction sociale — et n'est jamais aussi dangereux
que quand on le sous-estime. Sa magie est universelle : il peut apprendre des sorts de n'importe quelle classe.

Caractéristiques clés : Charisme, Dextérité.
Bonus de classe : +2 Charisme, +1 Dextérité.
Dé de vie : d8.

Capacités emblématiques :
• Inspiration bardique — Donne un dé bonus à un allié pour un jet (d6 → d12 selon niveau).
• Jack-of-all-Trades — Ajoute la moitié du bonus de maîtrise à tous les jets sans maîtrise.
• Expertise — Double le bonus de maîtrise dans deux compétences choisies.
• Secrets magiques — Apprend des sorts de n'importe quelle liste de classe.
• Chant de repos — Accélère la récupération de PV des alliés pendant les repos courts.

Style de jeu : polyvalent, soutien, interaction sociale, contrôle de foule discret.
Armes favorites : rapières, arbalètes de poing, armes de finesse.

Rôle dans le groupe : couteau suisse, porte-parole, soutien et amplificateur des alliés.
        `,
        description_maitre: `
Le Barde est le personnage le plus social et narratif du jeu. En tant que Maître, offrez-lui
des situations où la parole est une arme : négociations, infiltrations, interrogatoires.
Sa maîtrise universelle en fait un personnage difficile à coincer — il aura toujours un outil.

Archétypes de collège : Savoir (sorts bonus, critique amélioré), Vaillance (combat + soutien).
PNJ Barde typique : ménestrel espion, négociateur de la cour, manipulateur politique.
Défi narratif : son charme peut créer des complications romantiques ou des jalousies.
Conseil au Maître : les Bardes récoltent des histoires — donnez-leur des rumeurs vraies et fausses mêlées.
        `
    },

    "Clerc": {
        icone: "✝️",
        bonus: { sagesse: 2, constitution: 1 },
        tooltip: "Canal de la volonté divine — soigne, protège et foudroie au nom des dieux.",
        description_joueur: `
Le Clerc n'est pas un simple prêtre — c'est un conduit vivant de la puissance divine.
Sa foi n'est pas une métaphore : elle se matérialise en sorts de guérison, en boucliers divins
et en jugements foudroyants contre les ennemis de son dieu. Selon la déité choisie,
le Clerc peut être soignant pacifique, guerrier sacré, ou nécromancien au service de la mort naturelle.

Caractéristiques clés : Sagesse, Constitution.
Bonus de classe : +2 Sagesse, +1 Constitution.
Dé de vie : d8.

Capacités emblématiques :
• Sorts divins — Liste complète de sorts préparés selon la Sagesse.
• Renvoi des morts-vivants — Fait fuir ou détruit les morts-vivants.
• Intervention divine — À haut niveau, appel direct à la déité.
• Domaine divin — Définit l'orientation du Clerc (Vie, Guerre, Lumière, Mort, Nature, Tempête...).
• Armure divine — Peut porter armures lourdes selon le domaine.

Style de jeu : soutien, guérison, contrôle moral, combat polyvalent.
Armes favorites : masses, fléaux, marteaux de guerre (selon domaine).

Rôle dans le groupe : pilier de survie, soutien moral, expert en créatures surnaturelles.
        `,
        description_maitre: `
Le Clerc est le personnage le plus connecté aux forces cosmiques du monde.
Utilisez sa déité comme fil narratif permanent : l'intervention divine, les signes divins, les missions sacrées.
Son domaine définit son identité plus que sa classe — un Clerc de la Guerre est radicalement différent d'un Clerc de la Vie.

Domaines emblématiques : Vie (guérison maximale), Guerre (DPS divin), Lumière (sorts de feu/radiance), Mort (nécromancie).
PNJ Clerc typique : grand prêtre corrompu, inquisiteur zélé, guérisseur de campagne.
Défi narratif : les conflits entre la volonté divine et l'intérêt du groupe sont riches en drame.
Conseil au Maître : définissez les tabous de la déité — certains actes lui coûteront ses pouvoirs.
        `
    },

    "Druide": {
        icone: "🌿",
        bonus: { sagesse: 2, intelligence: 1 },
        tooltip: "Voix de la nature ancienne — métamorphose, tempête et sagesse des siècles.",
        description_joueur: `
Le Druide est le gardien de l'équilibre naturel, héritier d'une tradition plus ancienne que les dieux civilisés.
Sa magie est celle de la terre, de la pluie, du feu et du vent. Sa capacité la plus redoutable
est la Métamorphose : il peut prendre la forme de n'importe quel animal, adaptant son corps au besoin.
Sa sagesse de la nature lui révèle des vérités que les citadins ne soupçonnent pas.

Caractéristiques clés : Sagesse, Intelligence.
Bonus de classe : +2 Sagesse, +1 Intelligence.
Dé de vie : d8.

Capacités emblématiques :
• Métamorphose — Se transforme en animal selon son niveau (CR limité par niveau).
• Sorts de nature — Contrôle du temps, croissance végétale, guérison, foudre.
• Langue primitive — Comprend les druides de tous les peuples, même sans langue commune.
• Résistance naturelle — Immunité aux poison et maladie à haut niveau.
• Mille formes — À haut niveau, peut prendre des formes élémentaires (air, eau, feu, terre).

Style de jeu : polyvalent, adaptatif, soutien et contrôle.
Armes favorites : bâton, serpe, fronde. Jamais d'armure métallique.

Rôle dans le groupe : adaptateur de terrain, contrôle environnemental, soignant secondaire.
        `,
        description_maitre: `
Le Druide est le personnage le plus connecté au territoire. Ses pouvoirs varient radicalement
selon l'environnement — en forêt, il est à son apogée ; en ville ou sous terre, il est bridé.
Jouez sur cette dimension géographique pour le récompenser ou le défier.

Cercles emblématiques : Lune (Métamorphose puissante), Terre (sorts élargis selon terrain), Spores (nécro végétale).
PNJ Druide typique : ermite sage, gardien territorial agressif, chef d'un culte naturel.
Défi narratif : sa priorité à la nature peut entrer en conflit avec les objectifs "civilisés" du groupe.
Conseil au Maître : les Druides refusent de tuer certains animaux ou plantes — créez des dilemmes autour de ça.
        `
    },

    "Guerrier": {
        icone: "⚔️",
        bonus: { force: 2, constitution: 1 },
        tooltip: "Maîtrise absolue du combat — chaque arme est une extension de son corps.",
        description_joueur: `
Le Guerrier est le maître des armes et du combat. Là où les autres classes ont des gadgets magiques
ou des pouvoirs spéciaux, le Guerrier a quelque chose de plus fondamental : la maîtrise parfaite
de l'art du combat. Il frappe plus fort, plus souvent et dans des conditions que les autres ne survivraient pas.
À haut niveau, il attaque quatre fois par round — aucune autre classe ne l'égale en cadence.

Caractéristiques clés : Force (ou Dextérité), Constitution.
Bonus de classe : +2 Force, +1 Constitution.
Dé de vie : d10.

Capacités emblématiques :
• Style de combat — Archerie, Combat à deux armes, Défense, Duel, Lutte, Protection.
• Second souffle — Récupère des PV une fois par repos court (bonus d10 + niveau).
• Ardeur — Attaque supplémentaire à volonté (récupère sur repos court).
• Attaque multiple — 2 attaques au niveau 5, 3 au niveau 11, 4 au niveau 20.
• Indomptable — Peut relancer un jet de sauvegarde raté (1 à 3 fois par repos long).

Style de jeu : ligne de front, dégâts soutenus, polyvalent selon le style choisi.
Armes favorites : toutes — c'est littéralement sa spécialité.

Rôle dans le groupe : colonne vertébrale du groupe, damage dealer fiable, protecteur.
        `,
        description_maitre: `
Le Guerrier est la classe la plus fiable et la moins capricieuse du jeu.
En tant que Maître, il fonctionnera bien dans presque toutes les situations de combat.
Son intérêt narratif vient de son archétype militaire : d'où vient-il ? Pour qui a-t-il combattu ?

Archétypes : Champion (critiques élargis), Maître de Bataille (manœuvres tactiques), Chevalier Eldritch (sorts).
PNJ Guerrier typique : capitaine de garde, mercenaire expérimenté, chevalier reconverti.
Défi narratif : sans pouvoirs magiques, il peut se sentir dépassé dans des intrigues surnaturelles.
Conseil au Maître : donnez-lui un rival militaire de valeur égale — la rivalité de combattants est intemporelle.
        `
    },

    "Moine": {
        icone: "☯️",
        bonus: { dexterite: 2, sagesse: 1 },
        tooltip: "Corps comme arme parfaite — ki, vitesse et discipline spirituelle absolue.",
        description_joueur: `
Le Moine est la classe la plus disciplinée du jeu. Son corps est son arme, son temple et son outil.
À travers des années de méditation et d'entraînement, il a appris à canaliser le ki —
l'énergie vitale universelle — pour accomplir des exploits qui défient la physique normale.
Il peut courir sur l'eau, tomber sans se blesser, arrêter des projectiles à mains nues et assommer d'un toucher.

Caractéristiques clés : Dextérité, Sagesse.
Bonus de classe : +2 Dextérité, +1 Sagesse.
Dé de vie : d8.

Capacités emblématiques :
• Arts martiaux — Les poings font des dégâts croissants (d4 → d10) + attaque bonus à mains nues.
• Défense sans armure — CA = 10 + Dex + Sag (souvent plus haute qu'une armure).
• Flurry of Blows — Deux attaques supplémentaires pour 1 ki.
• Pas du vent — Désingage ou désengagement + dash pour 1 ki.
• Frappe étourdissante — Étourdit une créature sur un ki + coup réussi.
• Déflection de projectiles — Réduit les dégâts de flèches à mains nues.

Style de jeu : mobilité extrême, harcèlement, contrôle par l'étourdissement.
Armes favorites : kamas, bâton, poings et pieds (principalement).

Rôle dans le groupe : assassin mobile, contrôleur de cibles prioritaires, soutien défensif.
        `,
        description_maitre: `
Le Moine est l'un des personnages les plus cinématiques du jeu — ses combats ressemblent à de la chorégraphie.
Créez des environnements verticaux et complexes qui valorisent sa mobilité unique.
Attention : son manque de points de vie et son absence d'armure le rendent vulnérable aux dégâts de zone.

Traditions : Poing Ouvert (contrôle pur), Ombre (ninja furtif), Éléments (sorts de ki élémentaires).
PNJ Moine typique : maître d'un monastère, assassin silencieux, pèlerin en quête spirituelle.
Défi narratif : son rapport au ki et à la discipline entre souvent en conflit avec le chaos de l'aventure.
Conseil au Maître : un Moine dont la concentration est brisée (trahison d'un élève, destruction de son monastère) est un personnage transformé.
        `
    },

    "Paladin": {
        icone: "🛡️",
        bonus: { force: 1, constitution: 1, charisme: 1 },
        tooltip: "Serment sacré et volonté de fer — la foi rendue invincible.",
        description_joueur: `
Le Paladin est la classe la plus exigeante moralement — et la plus puissante quand ses convictions tiennent.
Son serment sacré est le fondement de tout son pouvoir : le briser l'affaiblit considérablement.
Ce serment peut être de protection des innocents, de conquête sans merci, de dévouement à une déité,
ou même de vengeance froide. Sa Frappe Divine est l'une des capacités les plus dévastatrices du jeu.

Caractéristiques clés : Force, Charisme, Constitution (équilibre des trois).
Bonus de classe : +1 Force, +1 Constitution, +1 Charisme.
Dé de vie : d10.

Capacités emblématiques :
• Imposition des mains — Pool de guérison = 5 × niveau, utilisable en segments.
• Frappe Divine — Ajoute des dégâts de radiance (ou autre) sur n'importe quelle attaque.
• Aura de protection — Ajoute le modificateur de Cha aux jets de sauvegarde de tous les alliés proches.
• Sorts sacrés — Liste mixte de sorts divins préparés selon la Sagesse.
• Serment sacré — Définit des capacités uniques selon l'engagement (Dévotion, Anciens, Vengeance...).

Style de jeu : résistance, soutien d'aura, burst de dégâts concentré.
Armes favorites : épée longue + bouclier, hallebarde, masse d'armes.

Rôle dans le groupe : tank-soutien, leader moral, champion des batailles décisives.
        `,
        description_maitre: `
Le Paladin est le personnage le plus dramatique du jeu — son serment crée des dilemmes permanents.
Mettez-le face à des situations où respecter son serment coûte quelque chose d'important.
La rupture du serment est un moment narratif de première ordre — gérez-le comme tel.

Serments emblématiques : Dévotion (paladin classique), Vengeance (chasseur impitoyable), Anciens (nature sacrée), Conquête (tyran justifié).
PNJ Paladin typique : chevalier d'une ordre sacrée, inquisiteur intransigeant, protecteur d'une relique.
Défi narratif : la rigidité morale crée inévitablement des conflits avec les alliés moins scrupuleux.
Conseil au Maître : posez la question centrale — qu'est-ce qui ferait rompre son serment ? Construisez autour.
        `
    },

    "Rôdeur": {
        icone: "🏹",
        bonus: { dexterite: 2, sagesse: 1 },
        tooltip: "Chasseur sans égal des terres sauvages — l'ennemi juré ne lui échappe jamais.",
        description_joueur: `
Le Rôdeur est le maître de la survie et de la chasse dans les territoires sauvages.
Sa connaissance du terrain, sa précision au tir et son lien spirituel avec la faune en font
un éclaireur et un chasseur de prime incomparable. Il choisit un ennemi favori et un terrain favori —
dans son environnement idéal, face à sa proie préférée, il n'a pas d'égal.
Ses compagnons animaux combattent à ses côtés avec une fidélité absolue.

Caractéristiques clés : Dextérité, Sagesse.
Bonus de classe : +2 Dextérité, +1 Sagesse.
Dé de vie : d10.

Capacités emblématiques :
• Ennemi juré — Bonus aux jets de pistage, connaissance et dégâts contre un type ennemi.
• Explorateur naturel — Déplacement et survie optimaux dans un type de terrain.
• Style de combat — Archerie (bonus +2 aux tirs), Défense, Duel, Combat à deux armes.
• Compagnon animal — Un animal lié combat et explore aux côtés du Rôdeur.
• Attaque multiple — 2 attaques par round dès le niveau 5.

Style de jeu : harcèlement à distance, mobilité, connaissance du terrain, dégâts précis.
Armes favorites : arc long, deux lames courtes, arbalète.

Rôle dans le groupe : éclaireur, chasseur de cibles prioritaires, expert de survie.
        `,
        description_maitre: `
Le Rôdeur excelle hors des donjons et des villes — créez des rencontres en pleine nature pour qu'il brille.
En milieu urbain, il perd une grande partie de ses avantages : exploitez cette vulnérabilité dramatiquement.

Archétypes : Chasseur (dégâts purs), Maître des Bêtes (compagnon animal renforcé), Guetteur (magie de terrain).
PNJ Rôdeur typique : chasseur de primes solitaire, guide de frontière, éclaireur militaire d'élite.
Défi narratif : son lien avec un ennemi juré peut créer des conflits si le groupe doit s'allier à cet ennemi.
Conseil au Maître : le compagnon animal est son talon d'Achille émotionnel — utilisez-le avec précaution.
        `
    },

    "Roublard": {
        icone: "🗡️",
        bonus: { dexterite: 2, intelligence: 1 },
        tooltip: "Précision chirurgicale et discrétion absolue — frappe où ça fait le plus mal.",
        description_joueur: `
Le Roublard est le maître de l'opportunisme et de la précision. Il ne frappe pas souvent — il frappe juste.
Son Attaque sournoise lui permet d'infliger des dégâts massifs sur une cible qui ne s'y attend pas.
Sa polyvalence en compétences en fait le personnage le plus apte à gérer les situations hors-combat :
serrures, pièges, infiltration, déguisement, escroquerie. Un groupe sans Roublard manque souvent d'outils.

Caractéristiques clés : Dextérité, Intelligence.
Bonus de classe : +2 Dextérité, +1 Intelligence.
Dé de vie : d8.

Capacités emblématiques :
• Attaque sournoise — Dégâts bonus massifs (1d6 → 10d6) quand avantage ou allié adjacent.
• Action rusée — Chaque round, peut se désengager, se cacher ou foncer en action bonus.
• Expertise — Double le bonus de maîtrise dans 4 compétences.
• Esquive instinctive — Réduit les dégâts de zone de moitié même en cas d'échec.
• Évasion — Si jet de sauvegarde réussi sur une zone = aucun dégât.

Style de jeu : burst de dégâts, furtivité, compétences hors-combat, mobilité.
Armes favorites : rapière, dague, arbalète de poing.

Rôle dans le groupe : expert des situations spéciales, assassin de cibles uniques, espion.
        `,
        description_maitre: `
Le Roublard est le couteau suisse non-magique du groupe. Créez des rencontres qui valorisent
ses compétences hors-combat : infiltration, tromperie, désarmement de pièges complexes.
Sa furtivité peut complètement transformer la dynamique d'un donjon.

Archétypes : Assassin (burst d'initiative), Escroc arcanique (sorts de Mage), Érudit (compétences intellectuelles).
PNJ Roublard typique : maître voleur, espion de la couronne, informateur de guilde.
Défi narratif : sa méfiance naturelle peut compliquer la construction de confiance dans le groupe.
Conseil au Maître : donnez-lui des accès cachés, des passages secrets — laissez-le briller dans la préparation.
        `
    },

    "Ensorceleur": {
        icone: "✨",
        bonus: { charisme: 2, constitution: 1 },
        tooltip: "Magie dans le sang, non dans les livres — puissance brute canalisée par l'âme.",
        description_joueur: `
L'Ensorceleur ne choisit pas la magie — il est né avec elle. Un ancêtre dragon, un événement
cosmique, une bénédiction ou une malédiction divine : sa magie est inscrite dans ses cellules,
dans son souffle, dans ses émotions. Quand il est en colère, les objets bougent.
Quand il est terrifié, des flammes jaillissent. Cette magie impulsive et innée est sa force et son risque.
Sa ressource principale, les Points de Sorcellerie, lui permet de remodeler ses sorts en temps réel.

Différence fondamentale avec le Magicien et le Sorcier :
• L'Ensorceleur RESSENT la magie — elle coule en lui comme le sang.
• Il n'a pas besoin d'étudier ni de pactiser — c'est son ADN.
• Moins de sorts connus, mais une flexibilité de casting unique.

Caractéristiques clés : Charisme, Constitution.
Bonus de classe : +2 Charisme, +1 Constitution.
Dé de vie : d6.

Capacités emblématiques :
• Points de Sorcellerie — Ressource pour modifier les sorts (intensifier, rapprocher, silencieux...).
• Métamagie — Modifie les sorts en temps réel (Rapide, Jumeau, Étendu, Empuissanté...).
• Sorts innés — Accès automatique à des sorts selon l'Origine (sans les préparer).
• Origine de Sorcellerie — Dragon (dégâts et PV bonus), Magie Sauvage (imprévisible), Tempête (tonnerre/foudre).

Style de jeu : explosif, flexible, spécialisé par l'Origine.
Armes favorites : aucune (lancer de sorts exclusivement).

Rôle dans le groupe : lance-sort polyvalent, spécialiste du burst magique, adaptateur de style.
        `,
        description_maitre: `
L'Ensorceleur est le mage le plus instable et le plus dramatique. La Magie Sauvage peut déclencher
des effets aléatoires à chaque sort — source de chaos et d'humour garantie.
Son lien émotionnel à la magie crée des scènes riches : la peur qui déclenche une explosion involontaire.

Origines : Héritage Dragon (stabilité, dégâts), Magie Sauvage (chaos, tables aléatoires), Tempête (contrôle météo).
PNJ Ensorceleur typique : noble à la magie instable, enfant prodige incontrôlable, héritier d'une malédiction draconique.
Défi narratif : son manque de contrôle peut mettre le groupe en danger involontairement.
Conseil au Maître : demandez un jet de Magie Sauvage dans les moments de stress émotionnel intense — pas seulement au combat.
        `
    },

    "Sorcier": {
        icone: "🌑",
        bonus: { charisme: 2, sagesse: 1 },
        tooltip: "Pouvoir obtenu par un pacte obscur — l'entité donne, l'entité reprend.",
        description_joueur: `
Le Sorcier n'est pas né avec la magie et ne l'a pas étudiée. Il l'a négociée.
Quelque part dans son passé, il a conclu un pacte avec une Entité — un Grand Ancien,
un Fiélon, une Fée archétypale — et en a reçu des pouvoirs en échange d'un service indéterminé.
Cette relation de pouvoir déséquilibrée est le cœur de sa psychologie : il est puissant, mais redevable.
Sa magie est ciblée, efficace et récupère rapidement (sur repos court, pas long).

Différence fondamentale avec l'Ensorceleur et le Magicien :
• Le Sorcier NÉGOCIE la magie — elle lui est accordée par une entité.
• Peu de sorts, mais toujours au niveau maximum disponible.
• Il est le seul dont la magie a une personnalité propre (celle de l'Entité).
• Son Eldritch Blast est sa signature — une attaque magique infinie et personnalisable.

Caractéristiques clés : Charisme, Sagesse.
Bonus de classe : +2 Charisme, +1 Sagesse.
Dé de vie : d8.

Capacités emblématiques :
• Eldritch Blast — Attaque à distance infinie, personnalisable avec des Invocations.
• Invocations occultes — Capacités permanentes très variées (vision des ténèbres, armure de sorts, répulsion...).
• Sorts de pacte — Toujours au niveau de sort maximum, récupérés sur repos court.
• Bénédiction de pacte — Lame (arme liée), Tome (sorts bonus), Chaîne (familier puissant).

Style de jeu : économe en ressources, efficace au long terme, personnalisable à l'extrême.

Rôle dans le groupe : damage dealer magique polyvalent, utilitaire hors-combat, négociateur mystique.
        `,
        description_maitre: `
Le Sorcier est le personnage avec le lien NPC le plus intégré mécaniquement — son Entité.
Utilisez cette Entité comme fil narratif permanent : elle a des objectifs, elle communique (ou pas),
elle exige des actes. C'est une source de quêtes, de conflits et de révélations inépuisable.

Entités emblématiques : Grand Ancien (horreur cosmique), Fiélon (diable ou démon), Archefée (fée puissante et capricieuse).
PNJ Sorcier typique : politicien qui a vendu son âme, mystique en dette avec une entité, héros corrompu progressivement.
Défi narratif : l'Entité peut contacter le Sorcier au pire moment et exiger quelque chose d'impossible.
Conseil au Maître : l'Entité n'explique jamais tout — cultivez le mystère de ce qu'elle veut réellement.
        `
    },

    "Magicien": {
        icone: "📜",
        bonus: { intelligence: 2, sagesse: 1 },
        tooltip: "Savoir arcanique mémorisé — la magie comme science exacte et implacable.",
        description_joueur: `
Le Magicien est le mage le plus puissant au niveau maximum — et le plus fragile au combat.
Sa magie est pure connaissance : il a passé des années à étudier des grimoires, à mémoriser
des formules complexes et à comprendre les lois fondamentales de l'Arcane.
Il ne ressent pas la magie (contrairement à l'Ensorceleur) ni ne la négocie (contrairement au Sorcier) —
il la COMPREND. Et cette compréhension lui donne accès à la liste de sorts la plus large du jeu.

Différence fondamentale avec l'Ensorceleur et le Sorcier :
• Le Magicien MÉMORISE la magie — chaque sort est une équation gravée dans son esprit.
• Sa liste de sorts est illimitée en théorie (il peut copier tout sort trouvé).
• Il est le seul à pouvoir apprendre des sorts d'école exclusive.
• Fragile physiquement — ne touchez pas le Magicien.

Caractéristiques clés : Intelligence, Sagesse.
Bonus de classe : +2 Intelligence, +1 Sagesse.
Dé de vie : d6 (le plus faible).

Capacités emblématiques :
• Grimoire — Contient tous les sorts connus (copiables depuis d'autres sources).
• Récupération arcanique — Récupère des emplacements de sorts sur repos court.
• École de magie — Spécialisation dans une école (Évocation, Illusion, Divination, Nécromancie...).
• Maîtrise des sorts — À haut niveau, peut lancer Identification ou Bouclier sans emplacement.
• Génie des sorts — Peut lancer un sort de niveau 1 ou 2 à volonté sans emplacement.

Style de jeu : préparation, polyvalence maximale, puissance d'échelle.

Rôle dans le groupe : artilleur magique, solutionneur de problèmes complexes, expert théorique.
        `,
        description_maitre: `
Le Magicien est la classe qui récompense le plus la préparation — la sienne ET la vôtre.
Il connaît potentiellement la solution magique à chaque problème. Créez des situations où
aucun sort simple ne suffit, où il faut combiner les connaissances de manière créative.

Écoles emblématiques : Évocation (dégâts purs), Illusion (tromperie totale), Divination (connaissance future), Nécromancie (morts-vivants).
PNJ Magicien typique : archimage arrogant, professeur d'académie, bibliothécaire secret de sorts interdits.
Défi narratif : sa fragilité physique le rend dépendant des alliés — jouez sur cette vulnérabilité.
Conseil au Maître : donnez-lui des ennemis qui résistent à la magie ou l'annulent — c'est là qu'il doit improviser.
        `
    }
};

// ═══════════════════════════════════════════════════════════════
//  GRADES — Rangs du Royaume de la Table Ronde (mais carrée)
//  Source de vérité unique pour : tooltips, modals, livres
// ═══════════════════════════════════════════════════════════════

const RPG_GRADES = [

    {
        seuil: 0,
        nom: "Serf Égaré",
        icone: "🪵",
        coul: "#7f8c8d",
        tooltip: "Un inconnu qui a poussé la porte du royaume pour la première fois.",

        description_joueur: `
Vous venez d'arriver. La route est longue, votre nom est inconnu et votre cape est poussiéreuse. Mais vous êtes là — c'est déjà plus que la plupart.

Le Serf Égaré n'a pas encore de place à la Table, mais la porte lui est ouverte. Chaque jour passé dans le royaume forge un peu plus sa réputation. On ne devient pas chevalier en un soir — mais tout commence ici, dans cette première hésitation sur le seuil.

Regardez autour de vous. Les murs sont vieux, les pierres ont des histoires. Vous commencez à peine la vôtre.

Privilèges : accès aux archives publiques du royaume.
Prochain rang dans : 2 jours de présence.
        `,

        description_maitre: `
Le Serf Égaré représente le tout nouveau membre — curieux, intimidé, pas encore ancré. En tant que Maître de cérémonie ou gestionnaire de communauté, accueillez-le chaleureusement : la première impression définit tout.

Ce rang est volontairement humble pour que l'ascension soit significative. Ne donnez pas trop de pouvoir trop vite — la progression doit sembler méritée.

Rôle narratif : l'inconnu qui débarque dans la taverne. Il peut devenir n'importe quoi.
Conseil : envoyez un message de bienvenue personnalisé dès ce rang pour ancrer l'engagement.
        `
    },

    {
        seuil: 2,
        nom: "Vilein Courageux",
        icone: "🌾",
        coul: "#95a5a6",
        tooltip: "Le paysan qui ose lever les yeux vers l'horizon.",

        description_joueur: `
Deux jours dans le royaume, et vous êtes toujours là. Ce n'est pas rien. Là où beaucoup fuient dès le premier défi, vous avez choisi de rester.

Le Vilein Courageux est la première marche d'un long escalier. Il travaille dur, apprend vite et regarde les chevaliers avec des étoiles dans les yeux — et un peu d'envie dans le cœur. Ce n'est pas de l'arrogance : c'est de l'ambition légitime.

La terre qu'il laboure n'est pas la sienne encore. Mais un jour, peut-être, il aura son propre fief.

Privilèges : participation aux débats publics.
Prochain rang dans : 5 jours de présence.
        `,

        description_maitre: `
Le Vilein Courageux a passé le premier cap — les 48 heures critiques après l'inscription. Il est suffisamment intéressé pour revenir, mais pas encore ancré.

C'est le moment idéal pour l'exposer aux premières discussions, aux premières interactions avec la communauté. La rétention à ce stade dépend de la qualité des échanges.

Rôle narratif : le paysan ambitieux — archétype du "héros ordinaire avant la transformation".
Conseil : proposez-lui une première action simple (remplir son profil, commenter une vidéo) pour créer un premier geste d'engagement.
        `
    },

    {
        seuil: 5,
        nom: "Écuyer Novice",
        icone: "🛡️",
        coul: "#bc8f8f",
        tooltip: "Apprenti prometteur qui porte l'écu avec fierté.",

        description_joueur: `
Cinq jours et vous avez déjà la posture d'un combattant. L'Écuyer Novice a pris les armes — symboliquement — et s'entraîne chaque jour à mériter sa place.

Il suit les chevaliers, apprend leurs gestes, écoute leurs récits de bataille. Le métal de son bouclier est encore brillant car il n'a pas encore servi — mais cela ne saurait tarder. Son maître d'armes l'observe. La prochaine épreuve révélera ce qu'il vaut vraiment.

Chaque nuit, il repasse mentalement ce qu'il a appris. Chaque matin, il revient plus déterminé.

Privilèges : accès aux parchemins de formation.
Prochain rang dans : 10 jours de présence.
        `,

        description_maitre: `
L'Écuyer Novice est à un moment charnière : il a goûté à la communauté, mais n'est pas encore investi. Une semaine de présence représente un signal positif fort.

Introduisez-le aux rituels de la communauté (rendez-vous hebdomadaires, défis, discussions récurrentes). Il cherche sa place — aidez-le à la trouver.

Rôle narratif : l'apprenti plein de promesses. Excellent pour des missions d'introduction narrative.
Conseil : encouragez la complétion du profil (race, classe, alignement) à ce stade — cela renforce l'identité dans le royaume.
        `
    },

    {
        seuil: 10,
        nom: "Vassal du Fief",
        icone: "🏰",
        coul: "#cd7f32",
        tooltip: "Homme de fief lié par serment à la Table.",

        description_joueur: `
Dix jours. Vous avez prêté serment — tacitement — en restant. Le Vassal du Fief a choisi son camp : celui de la Table Ronde (mais carrée).

Il possède désormais une terre symbolique dans le royaume et une voix dans les affaires courantes. Les chevaliers le reconnaissent. Son nom commence à circuler dans les couloirs du château. On ne l'appelle plus "le nouveau" — on l'appelle par son nom.

Un serment de vassal n'est pas rien dans un royaume médiéval. C'est une promesse de fidélité. Et la fidélité, ici, est la monnaie la plus précieuse.

Privilèges : droit de vote sur les sujets royaux.
Prochain rang dans : 20 jours de présence.
        `,

        description_maitre: `
Dix jours de présence : c'est un membre qui a développé une habitude. La rétention à long terme devient probable.

Le Vassal du Fief devrait commencer à interagir activement. Encouragez-le à participer aux votes, à donner son avis sur les sujets proposés par le Roi Karl. Son sentiment d'appartenance se consolide.

Rôle narratif : l'homme de confiance local — pas encore un grand seigneur, mais quelqu'un sur qui on peut compter.
Conseil : reconnaître publiquement ce palier (dans une vidéo ou annonce) renforce l'attachement communautaire.
        `
    },

    {
        seuil: 20,
        nom: "Chevalier Errant",
        icone: "🐎",
        coul: "#bdc3c7",
        tooltip: "Chevalier libre qui sillonne le royaume en quête de gloire.",

        description_joueur: `
Vingt jours, et vous avez franchi le seuil de la chevalerie. L'épée est à votre ceinture, la monture sous vos pieds. Le Chevalier Errant n'est attaché à aucune cause fixe — il cherche encore sa voie — mais son courage est reconnu de tous.

On dit que les meilleurs chevaliers du Roi Karl ont tous commencé comme ça : sans destination, mais avec une volonté de fer. Les routes du royaume sont longues. Les défis sont nombreux. Et chaque victoire, petite ou grande, grave votre nom un peu plus profondément dans les chroniques.

Votre quête commence vraiment ici.

Privilèges : accès aux tournois et défis mensuels.
Prochain rang dans : 40 jours de présence.
        `,

        description_maitre: `
Trois semaines de présence : le Chevalier Errant est un membre actif et engagé. Il est familier avec la culture du royaume.

À ce stade, il peut devenir un ambassadeur informel — quelqu'un qui accueille les nouveaux, partage le contenu du Roi Karl, participe aux discussions avec une certaine autorité morale.

Rôle narratif : le héros en quête de sa destinée — polyvalent, adaptable, source de surprise narrative.
Conseil : proposez-lui des défis communautaires (partage de contenu, création, tournois) pour canaliser son engagement croissant.
        `
    },

    {
        seuil: 40,
        nom: "Héraut Royal",
        icone: "🎺",
        coul: "#f1c40f",
        tooltip: "Voix officielle du royaume, porteur des annonces du Roi.",

        description_joueur: `
Quarante jours de fidélité — vous avez mérité la trompette dorée. Le Héraut Royal est la voix du royaume. C'est lui qu'on entend annoncer les grandes nouvelles, les tournois, les décrets du Roi Karl.

Son prestige lui vient non pas de la force de son épée, mais de la force de sa parole. Dans une cour, une voix qui porte est parfois plus puissante qu'une armée. Le Héraut sait ça. Il choisit ses mots avec soin, il les lance avec conviction, il les fait résonner dans les salles de pierre.

Quand le Héraut parle, le royaume écoute.

Privilèges : mention spéciale dans les annonces royales.
Prochain rang dans : 70 jours de présence.
        `,

        description_maitre: `
Le Héraut Royal est l'un des membres les plus précieux de la communauté. Il est là depuis plus d'un mois, il connaît les codes, il participe activement.

Ces membres sont les piliers visibles de la communauté. Leur reconnaissance publique (dans les vidéos, les annonces) renforce leur engagement et envoie un signal fort aux nouveaux membres sur ce que la fidélité rapporte.

Rôle narratif : le messager officiel, figure de confiance et de continuité dans le royaume.
Conseil : identifiez les Hérauts Royaux pour en faire des modérateurs informels ou des "parrains" de nouveaux membres.
        `
    },

    {
        seuil: 70,
        nom: "Baron de la Carrée",
        icone: "🍷",
        coul: "#e67e22",
        tooltip: "Noble de la Table, hôte des grands festins royaux.",

        description_joueur: `
Soixante-dix jours. Vous êtes maintenant un noble à part entière — le Baron de la Carrée. La Table (ronde mais carrée, rappelons-le) a une place réservée à votre nom.

Les festins royaux ne sont pas complets sans vous. Votre opinion pèse dans les conseils. Le Roi Karl vous consulte — pas toujours, mais parfois — et c'est déjà un honneur immense. Votre château est petit mais solide. Votre bannière flotte fièrement.

Un baron sait recevoir, négocier, et — quand il le faut — trancher. Vous avez appris tout ça en soixante-dix jours de présence active.

Privilèges : accès aux archives secrètes du royaume.
Prochain rang dans : 120 jours de présence.
        `,

        description_maitre: `
Dix semaines de présence : c'est un investissement significatif. Le Baron de la Carrée est un membre de confiance absolue, profondément ancré dans la culture du royaume.

À ce stade, sa présence dans la communauté a une valeur sociale réelle. Il influence les nouveaux membres par l'exemple. Ses opinions ont du poids dans les discussions.

Rôle narratif : le seigneur local — important dans sa sphère d'influence, respecté de tous.
Conseil : consultez les Barons lors de décisions importantes pour la communauté. Leur sentiment de co-construction renforce leur fidélité à long terme.
        `
    },

    {
        seuil: 120,
        nom: "Maître d'Armes",
        icone: "⚔️",
        coul: "#8b0000",
        tooltip: "Guerrier d'élite, formateur des futures générations.",

        description_joueur: `
Cent vingt jours de présence forgent un Maître d'Armes. Vous n'apprenez plus : vous enseignez. Les jeunes serfs et vilains vous regardent avec admiration. Vos gestes sont précis, votre jugement sûr, votre loyauté éprouvée.

Le Maître d'Armes est le pilier militaire du royaume. Quand la Table a besoin d'un bras armé, c'est vers vous qu'on se tourne en premier. Vous avez vu passer assez de chevaliers pour savoir lesquels ont l'étoffe des grands — et lesquels prétendent seulement.

Quatre mois de royaume. Vous faites partie des meubles. Dans le meilleur sens du terme.

Privilèges : droit de former des recrues et d'organiser des tournois.
Prochain rang dans : 200 jours de présence.
        `,

        description_maitre: `
Quatre mois de présence : le Maître d'Armes est une institution vivante de la communauté. Sa constance est en elle-même un message pour les autres membres.

Il peut légitimement prendre un rôle de mentor, d'arbitre dans les débats, de référent pour les questions sur le royaume. Sa parole a du poids précisément parce qu'elle s'est construite dans le temps.

Rôle narratif : le vétéran — figure de sagesse combative, ni naïf ni cynique.
Conseil : offrez aux Maîtres d'Armes des responsabilités concrètes (organisation d'événements, curation de contenu) pour maintenir leur engagement sur la durée.
        `
    },

    {
        seuil: 200,
        nom: "Haut Connétable",
        icone: "🚩",
        coul: "#4a0404",
        tooltip: "Grand commandant des armées, second du Roi.",

        description_joueur: `
Deux cents jours de fidélité absolue. Le Haut Connétable est le commandant suprême des armées du Roi Karl. Au-dessus de lui, il n'y a qu'une seule personne.

Sa bannière rouge sang flotte sur les murs du château. Sa parole a force de loi dans les affaires militaires. Les ennemis du royaume ont appris à redouter son nom. Ce n'est pas un titre qu'on donne à la légère — c'est un titre qu'on gagne, jour après jour, bataille après bataille.

Six mois et demi de présence. Vous avez traversé des tempêtes avec le royaume et vous êtes toujours là. C'est ça, la vraie loyauté.

Privilèges : siège permanent au Conseil de la Table.
Prochain rang dans : 365 jours de présence.
        `,

        description_maitre: `
Deux cents jours : une présence extraordinaire qui mérite une reconnaissance extraordinaire. Le Haut Connétable est l'un des membres les plus précieux que le royaume puisse avoir.

À ce niveau, l'engagement dépasse la simple consommation de contenu — c'est une relation durable et mutuellement bénéfique. Ce membre est un ambassadeur naturel du royaume dans sa vie hors-ligne.

Rôle narratif : le lieutenant du roi — celui qui fait tourner le royaume au quotidien.
Conseil : contact direct avec le Roi Karl, accès à des coulisses exclusives, co-création de contenu. Ces membres méritent un traitement exceptionnel.
        `
    },

    {
        seuil: 365,
        nom: "Main du Roi Karl",
        icone: "👑",
        coul: "#d4af37",
        tooltip: "Le bras droit du Roi, gardien du royaume en son absence.",

        description_joueur: `
Un an. Trois cent soixante-cinq jours de présence, de loyauté et d'engagement. Vous êtes la Main du Roi Karl.

Ce titre n'est pas seulement un honneur — c'est une responsabilité. En l'absence du Roi, vous parlez en son nom. Votre sagesse guide le royaume, votre jugement tranche les conflits, votre vision façonne l'avenir de la Table Ronde (mais carrée).

On dit que derrière chaque grand roi, il y a une grande main. Une main qui ne vacille pas. Une main qui connaît la douceur de la paix et la dureté de la guerre. Une main qui a choisi, il y a un an, de pousser la porte d'un royaume un peu fou — et qui n'est jamais repartie.

Soyez digne de cette confiance. Le royaume vous regarde.

Privilèges : titre permanent, accès complet à toutes les archives, honneur éternel gravé dans les chroniques royales.
        `,

        description_maitre: `
La Main du Roi Karl est le summum de la fidélité communautaire : un an de présence continue. C'est exceptionnel et doit être traité comme tel.

Ces membres sont les légendes vivantes du royaume. Leur histoire inspire les nouveaux. Leur loyauté est la preuve que l'investissement dans la communauté en vaut la peine. Ils sont, en un sens, la meilleure publicité possible pour le Roi Karl.

Rôle narratif : la figure tutélaire — sage, puissante, permanente.
Conseil : célébrez publiquement chaque Main du Roi Karl. Mentionnez-les dans les vidéos, créez un hall of fame, personnalisez leur expérience au maximum. Un membre d'un an est un trésor irremplaçable.
        `
    }

];


// ═══════════════════════════════════════════════════════════════
//  UTILITAIRES
// ═══════════════════════════════════════════════════════════════

/**
 * Retourne les bonus cumulés race + classe pour un personnage
 */
function getBonusTotal(raceKey, classeKey) {
    const carac = ['force','dexterite','constitution','intelligence','sagesse','charisme'];
    const total = {};
    carac.forEach(c => total[c] = 0);

    const race   = RPG_RACES[raceKey];
    const classe = RPG_CLASSES[classeKey];

    if (race?.bonus)   Object.entries(race.bonus).forEach(([k,v])   => total[k] = (total[k] || 0) + v);
    if (classe?.bonus) Object.entries(classe.bonus).forEach(([k,v]) => total[k] = (total[k] || 0) + v);

    return total;
}

/**
 * Retourne le grade correspondant à un nombre de jours
 */
function getGradeFromJours(jours) {
    let actuel = RPG_GRADES[0];
    for (const g of RPG_GRADES) { if (jours >= g.seuil) actuel = g; else break; }
    return actuel;
}

// Export pour usage dans index.html (via window) et Node.js (livres)
if (typeof window !== 'undefined') {
    window.RPG_RACES    = RPG_RACES;
    window.RPG_CLASSES  = RPG_CLASSES;
    window.RPG_GRADES   = RPG_GRADES;
    window.getBonusTotal    = getBonusTotal;
    window.getGradeFromJours = getGradeFromJours;
}
if (typeof module !== 'undefined') {
    module.exports = { RPG_RACES, RPG_CLASSES, RPG_GRADES, getBonusTotal, getGradeFromJours };
}

