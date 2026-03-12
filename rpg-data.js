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
        nom_f: "Humaine",
        bonus: { force: 1, dexterite: 1, constitution: 1, intelligence: 1, sagesse: 1, charisme: 1 },
        traits: [
            { nom: 'Polyvalence', icone: '🔄', desc: 'Peut choisir une compétence ou un outil supplémentaire à la création.' },
            { nom: 'Ambition', icone: '🔥', desc: 'Une fois par repos long, peut relancer un jet de compétence raté.' },
            { nom: 'Héritage varié', icone: '🌍', desc: 'Accès à un talent racial au choix parmi trois options.' },
        ],
        tooltip: "Adaptable et ambitieux — maître de toutes les disciplines.",
        tooltip_f: "Adaptable et ambitieuse — maîtresse de toutes les disciplines.",
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
        `,
        description_physique: {
            masculin: "Les hommes humains varient infiniment — grands ou trapus, pâles ou basanés, chevelus ou tondus. Aucun moule ne les définit, et c'est précisément leur force. Un visage humain peut exprimer mille origines, mille histoires.",
            feminin:  "Les femmes humaines portent cette même diversité infinie. Des traits fins ou marqués, une stature légère ou robuste — l'humanité se refuse à toute uniformité. Chaque visage est un continent à part entière."
        }
    },

    "Elfe": {
        icone: "🧝",
        bonus: { dexterite: 2, intelligence: 1 },
        traits: [
            { nom: 'Vision dans le noir', icone: '🌑', desc: 'Voit clairement jusqu\'à 18 mètres dans l\'obscurité totale.' },
            { nom: 'Sens aiguisés', icone: '👁️', desc: 'Avantage aux tests de Perception basés sur la vue ou l\'ouïe.' },
            { nom: 'Transe elfique', icone: '💤', desc: '4 heures de méditation remplacent un repos long complet.' },
            { nom: 'Immunité au sommeil', icone: '🛡️', desc: 'Les sorts de sommeil magique n\'ont aucun effet.' },
        ],
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
        `,
        description_physique: {
            masculin: "Grand et svelte, le mâle elfe se déplace comme si la gravité lui demandait poliment la permission. Traits anguleux, oreilles pointues, yeux en amande aux iris parfois dorés ou violets. Sa peau est nacrée, légèrement lumineuse à la lumière du soir.",
            feminin:  "La femelle elfe dégage une beauté qui dérange — trop parfaite pour être rassurante. Ses traits sont ciselés comme une lame fine, ses cheveux souvent clairs tombant en cascade. Ses yeux semblent toujours regarder un peu plus loin que ce que les autres voient."
        }
    },

    "Nain": {
        icone: "⛏️",
        nom_f: "Naine",
        bonus: { constitution: 2, force: 1 },
        traits: [
            { nom: 'Résistance au poison', icone: '☠️', desc: 'Avantage aux jets contre le poison, résistance aux dégâts de poison.' },
            { nom: 'Solidité naine', icone: '💪', desc: '+1 PV supplémentaire par niveau.' },
            { nom: 'Maîtrise des armes', icone: '🪓', desc: 'Hache de guerre, hachette, marteau léger et marteau de guerre.' },
            { nom: 'Vision dans le noir', icone: '🌑', desc: '18 mètres en obscurité totale.' },
            { nom: 'Connaissance de la pierre', icone: '🪨', desc: 'Avantage aux tests d\'Histoire liés aux structures et mines.' },
        ],
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
        `,
        description_physique: {
            masculin: "Trapu, large d'épaules, avec une barbe tressée qui lui descend jusqu'à la ceinture. Le mâle nain est compact comme un bloc de granit et presque aussi difficile à faire bouger. Ses mains sont larges, calleuses, marquées par des décennies de forge ou de mine.",
            feminin:  "La femelle nain est tout aussi solide que son homologue masculin — carrée, robuste, le regard direct et sans détour. Sa barbe, plus fine, est souvent tressée avec soin et ornée de perles de métal. Ne jamais faire l'erreur de la sous-estimer."
        }
    },

    "Halfelin": {
        icone: "🦶",
        nom_f: "Halfeline",
        bonus: { dexterite: 2, charisme: 1 },
        traits: [
            { nom: 'Chance halfeline', icone: '🎲', desc: 'Quand un jet naturel donne 1, relancez le dé (obligatoire).' },
            { nom: 'Bravoure', icone: '💛', desc: 'Avantage aux jets de sauvegarde contre la peur.' },
            { nom: 'Discrétion naturelle', icone: '👣', desc: 'Peut se cacher derrière une créature d\'une taille supérieure.' },
            { nom: 'Agilité halfeline', icone: '💨', desc: 'Peut traverser l\'espace d\'une créature plus grande sans désavantage.' },
        ],
        tooltip: "Chanceux et insaisissable — petit par la taille, immense par la fortune.",
        tooltip_f: "Chanceuse et insaisissable — petite par la taille, immense par la fortune.",
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
        `,
        description_physique: {
            masculin: "Petit — à peine un mètre de haut — mais proportionné et vif. Le mâle halfelin a des pieds larges et couverts d'un duvet naturel, un visage rond et perpétuellement avenant. Son expression invite à la confidence... ce dont il abuse volontiers.",
            feminin:  "La femelle halfelin a ce don rare de passer inaperçue dans une foule d'humains — et d'en profiter. Petite, légère, les traits doux et les yeux pétillants, elle dégage une chaleur naturelle qui met tout le monde à l'aise. Trop à l'aise, parfois."
        }
    },

    "Gnome": {
        icone: "🍄",
        bonus: { intelligence: 2, sagesse: 1 },
        traits: [
            { nom: 'Ruse gnome', icone: '🧠', desc: 'Avantage aux jets de sauvegarde Int, Sag et Cha contre la magie.' },
            { nom: 'Vision dans le noir', icone: '🌑', desc: '18 mètres en obscurité totale.' },
            { nom: 'Connaissance naturelle', icone: '📚', desc: 'Maîtrise de l\'Arcane, de l\'Histoire ou de la Nature (au choix).' },
            { nom: 'Mémoire photographique', icone: '📷', desc: 'Peut mémoriser n\'importe quel texte ou carte en 10 minutes.' },
        ],
        tooltip: "Inventeur compulsif et philosophe discret — le génie à l'état brut.",
        tooltip_f: "Inventrice compulsive et philosophe discrète — le génie à l'état brut.",
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
        `,
        description_physique: {
            masculin: "Encore plus petit que le halfelin, le mâle gnome compense en gesticulant beaucoup. Nez proéminent, cheveux ébouriffés dans toutes les directions, yeux grands et constamment en train d'analyser quelque chose. L'impression générale : un savant fou miniaturisé.",
            feminin:  "La femelle gnome a ce même regard vif et curieux, mais avec une économie de gestes que le mâle n'a jamais apprise. Petite, vive, les cheveux souvent coiffés en tours improbables retenues par des épingles et des outils. Elle pense trois fois plus vite qu'elle ne parle — et elle parle vite."
        }
    },

    "Semi-Elfe": {
        icone: "🌗",
        bonus: { charisme: 1, dexterite: 1, intelligence: 1 },
        traits: [
            { nom: 'Vision dans le noir', icone: '🌑', desc: '18 mètres en obscurité totale.' },
            { nom: 'Héritage féerique', icone: '🌺', desc: 'Avantage contre les charmes et sommeil magique.' },
            { nom: 'Polyvalence semi-elfique', icone: '⭐', desc: 'Maîtrise de deux compétences supplémentaires au choix.' },
            { nom: 'Diplomatie naturelle', icone: '🕊️', desc: 'Avantage aux tests de Persuasion et de Tromperie envers les humains.' },
        ],
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
        `,
        description_physique: {
            masculin: "Le mâle semi-elfe hérite du meilleur des deux mondes — la stature humaine avec les traits affinés de l'elfe. Ses oreilles sont légèrement pointues, son regard plus perçant qu'un humain ordinaire, ses mouvements plus fluides. Assez différent pour qu'on le remarque, assez familier pour qu'on lui fasse confiance.",
            feminin:  "La femelle semi-elfe attire l'œil sans effort. Sa beauté est accessible là où celle de l'elfe pure peut intimider. Les traits sont fins mais expressifs, les yeux souvent bicolores ou d'une teinte inhabituelle. Elle navigue entre les deux races sans jamais appartenir complètement à l'une."
        }
    },

    "Semi-Orc": {
        icone: "💀",
        nom_f: "Semi-Orque",
        bonus: { force: 2, constitution: 1 },
        traits: [
            { nom: 'Endurance implacable', icone: '💀', desc: 'Tombe à 1 PV au lieu de 0 une fois par repos long.' },
            { nom: 'Attaque sauvage', icone: '⚔️', desc: 'Un critique aux armes inflige un dé de dégâts supplémentaire.' },
            { nom: 'Intimidation naturelle', icone: '😤', desc: 'Maîtrise automatique de la compétence Intimidation.' },
            { nom: 'Vision dans le noir', icone: '🌑', desc: '18 mètres en obscurité totale.' },
        ],
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
        `,
        description_physique: {
            masculin: "Imposant, le mâle semi-orc dépasse souvent le mètre quatre-vingt-dix. Sa mâchoire est proéminente, ses canines légèrement saillantes, sa peau grisâtre ou verdâtre. Ses mains sont larges comme des battoirs. La première impression est celle de la menace — elle n'est pas toujours fausse.",
            feminin:  "La femelle semi-orc est grande, musclée, avec une présence physique qui commande le respect. Ses traits sont forts — mâchoire marquée, peau aux teintes sombres, regard intense sous des sourcils épais. Elle n'essaie pas de plaire. Elle n'en a pas besoin."
        }
    },

    "Tieffelin": {
        icone: "😈",
        nom_f: "Tieffeline",
        bonus: { charisme: 2, intelligence: 1 },
        traits: [
            { nom: 'Résistance infernale', icone: '🔥', desc: 'Résistance aux dégâts de feu.' },
            { nom: 'Héritage infernal', icone: '😈', desc: 'Accès à des sorts innés (Thaumaturgie, Mains brûlantes, Ténèbres).' },
            { nom: 'Vision dans le noir', icone: '🌑', desc: '18 mètres en obscurité totale.' },
            { nom: 'Mémoire démoniaque', icone: '💭', desc: 'Avantage aux tests d\'Arcane liés aux démons et fiélons.' },
        ],
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
        `,
        description_physique: {
            masculin: "Le mâle tieffelin porte son héritage infernal sur lui — cornes recourbées, queue préhensile, yeux monochromes en rouge ou en noir, peau aux teintes sombres de bordeaux à bleu nuit. Ses traits sont séduisants malgré — ou à cause de — tout cela. Une présence qui dérange et attire à la fois.",
            feminin:  "La femelle tieffelin est le genre de créature dont on se souvient longtemps après l'avoir croisée. Cornes élégantes, queue fine et mobile, peau couleur braise ou encre. Ses yeux ne cillent jamais tout à fait assez — et son sourire cache toujours quelque chose. Elle le sait. Elle l'utilise."
        }
    },

    "Dragonide": {
        icone: "🐉",
        bonus: { force: 2, charisme: 1 },
        traits: [
            { nom: 'Souffle draconique', icone: '🐉', desc: 'Attaque de souffle utilisable une fois par repos court.' },
            { nom: 'Résistance élémentaire', icone: '🛡️', desc: 'Résistance au type d\'énergie de sa lignée draconique.' },
            { nom: 'Intimidation draconique', icone: '😤', desc: 'Avantage aux tests d\'Intimidation contre les créatures de taille M ou inférieure.' },
            { nom: 'Présence draconique', icone: '👑', desc: 'Une fois par jour, impose un désavantage à un jet de sauvegarde ennemi.' },
        ],
        tooltip: "Sang de dragon et prestance royale — né pour dominer les champs de bataille.",
        tooltip_f: "Sang de dragon et prestance royale — née pour dominer les champs de bataille.",
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
        `,
        description_physique: {
            masculin: "Le mâle dragonide est massif — écailles dures couvrant tout le corps, museau allongé, queue épaisse servant de contrepoids naturel. Sa stature dépasse souvent les deux mètres. La couleur de ses écailles trahit son héritage draconique — rouge, or, bleu, vert ou blanc. Quand il inspire avant de parler, méfiez-vous.",
            feminin:  "La femelle dragonide porte les mêmes écailles brillantes, la même stature imposante — mais avec une agilité que sa masse ne laisse pas deviner. Son regard est celui d'un prédateur patient. Ses mouvements sont économes, précis. Elle ne gaspille ni ses mots, ni son souffle — surtout pas son souffle."
        }
    }
};


// ═══════════════════════════════════════════════════════════════
//  CLASSES
// ═══════════════════════════════════════════════════════════════

const RPG_CLASSES = {

    "Barbare": {
        icone: "🪓",
        bonus: { force: 2, constitution: 1 },
        de_vie: 12,
        traits: [
            { nom: 'Rage', icone: '😡', desc: 'Résistance aux dégâts physiques + bonus de dégâts de mêlée. Dure 1 minute.' },
            { nom: 'Défense sans armure', icone: '🧱', desc: 'Con remplace une partie de la CA sans armure.' },
            { nom: 'Attaque téméraire', icone: '⚔️', desc: 'Avantage garanti sur l\'attaque, mais l\'ennemi aussi contre vous.' },
            { nom: 'Sens du danger', icone: '🔮', desc: 'Avantage aux jets de sauvegarde contre les effets visibles.' },
            { nom: 'Mouvement rapide', icone: '💨', desc: '+3 m de déplacement sans armure lourde.' },
        ],
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
        `,
        description_physique: {
            masculin: "Le mâle dragonide est massif — écailles dures couvrant tout le corps, museau allongé, queue épaisse servant de contrepoids naturel. Sa stature dépasse souvent les deux mètres. La couleur de ses écailles trahit son héritage draconique — rouge, or, bleu, vert ou blanc. Quand il inspire avant de parler, méfiez-vous.",
            feminin:  "La femelle dragonide porte les mêmes écailles brillantes, la même stature imposante — mais avec une agilité que sa masse ne laisse pas deviner. Son regard est celui d'un prédateur patient. Ses mouvements sont économes, précis. Elle ne gaspille ni ses mots, ni son souffle — surtout pas son souffle."
        }
    },

    "Barde": {
        icone: "🎭",
        bonus: { charisme: 2, dexterite: 1 },
        de_vie: 8,
        traits: [
            { nom: 'Inspiration bardique', icone: '🎵', desc: 'Donne un dé bonus à un allié pour un jet (d6 → d12 selon niveau).' },
            { nom: 'Jack-of-all-Trades', icone: '🃏', desc: 'Ajoute la moitié du bonus de maîtrise à tous les jets sans maîtrise.' },
            { nom: 'Expertise', icone: '🎓', desc: 'Double le bonus de maîtrise dans deux compétences choisies.' },
            { nom: 'Secrets magiques', icone: '📖', desc: 'Apprend des sorts de n\'importe quelle liste de classe.' },
            { nom: 'Chant de repos', icone: '🎶', desc: 'Accélère la récupération de PV des alliés pendant les repos courts.' },
        ],
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
        de_vie: 8,
        traits: [
            { nom: 'Sorts divins', icone: '✨', desc: 'Liste complète de sorts préparés selon la Sagesse.' },
            { nom: 'Renvoi des morts-vivants', icone: '💀', desc: 'Fait fuir ou détruit les morts-vivants.' },
            { nom: 'Intervention divine', icone: '🙏', desc: 'À haut niveau, appel direct à la déité.' },
            { nom: 'Domaine divin', icone: '⛪', desc: 'Définit l\'orientation (Vie, Guerre, Lumière, Mort, Nature, Tempête...).' },
            { nom: 'Armure divine', icone: '🛡️', desc: 'Peut porter armures lourdes selon le domaine.' },
        ],
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
        nom_f: "Druidesse",
        bonus: { sagesse: 2, intelligence: 1 },
        de_vie: 8,
        traits: [
            { nom: 'Métamorphose', icone: '🐻', desc: 'Se transforme en animal selon son niveau (CR limité par niveau).' },
            { nom: 'Sorts de nature', icone: '🌩️', desc: 'Contrôle du temps, croissance végétale, guérison, foudre.' },
            { nom: 'Langue primitive', icone: '🌿', desc: 'Comprend les druides de tous les peuples, même sans langue commune.' },
            { nom: 'Résistance naturelle', icone: '🌱', desc: 'Immunité aux poison et maladie à haut niveau.' },
            { nom: 'Mille formes', icone: '🌪️', desc: 'À haut niveau, peut prendre des formes élémentaires.' },
        ],
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
        nom_f: "Guerrière",
        bonus: { force: 2, constitution: 1 },
        de_vie: 10,
        traits: [
            { nom: 'Style de combat', icone: '🗡️', desc: 'Archerie, Combat à deux armes, Défense, Duel, Lutte ou Protection.' },
            { nom: 'Second souffle', icone: '💉', desc: 'Récupère des PV une fois par repos court (bonus d10 + niveau).' },
            { nom: 'Ardeur', icone: '⚡', desc: 'Attaque supplémentaire à volonté (récupère sur repos court).' },
            { nom: 'Attaque multiple', icone: '💥', desc: '2 attaques au niveau 5, 3 au niveau 11, 4 au niveau 20.' },
            { nom: 'Indomptable', icone: '🔁', desc: 'Peut relancer un jet de sauvegarde raté (1 à 3 fois par repos long).' },
        ],
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
        de_vie: 8,
        traits: [
            { nom: 'Arts martiaux', icone: '👊', desc: 'Les poings font des dégâts croissants (d4 → d10) + attaque bonus.' },
            { nom: 'Défense sans armure', icone: '🧱', desc: 'CA = 10 + Dex + Sag, souvent supérieure à une armure.' },
            { nom: 'Flurry of Blows', icone: '💨', desc: 'Deux attaques supplémentaires pour 1 point de ki.' },
            { nom: 'Pas du vent', icone: '🌪️', desc: 'Désengagement ou dash en action bonus pour 1 ki.' },
            { nom: 'Frappe étourdissante', icone: '😵', desc: 'Étourdit une créature sur un ki + coup réussi.' },
            { nom: 'Déflection de projectiles', icone: '🏹', desc: 'Réduit les dégâts de projectiles à mains nues.' },
        ],
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
        nom_f: "Paladine",
        bonus: { force: 1, constitution: 1, charisme: 1 },
        de_vie: 10,
        traits: [
            { nom: 'Imposition des mains', icone: '🤲', desc: 'Pool de guérison = 5 × niveau, utilisable en segments.' },
            { nom: 'Frappe Divine', icone: '⚡', desc: 'Ajoute des dégâts de radiance sur n\'importe quelle attaque.' },
            { nom: 'Aura de protection', icone: '🛡️', desc: 'Ajoute le modificateur de Cha aux jets de sauvegarde de tous les alliés proches.' },
            { nom: 'Sorts sacrés', icone: '✨', desc: 'Liste mixte de sorts divins préparés selon la Sagesse.' },
            { nom: 'Serment sacré', icone: '📜', desc: 'Définit des capacités uniques (Dévotion, Anciens, Vengeance...).' },
        ],
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
        nom_f: "Rôdeuse",
        de_vie: 10,
        bonus: { dexterite: 2, sagesse: 1 },
        traits: [
            { nom: 'Ennemi juré', icone: '🎯', desc: 'Bonus aux jets de pistage, connaissance et dégâts contre un type ennemi.' },
            { nom: 'Explorateur naturel', icone: '🌲', desc: 'Déplacement et survie optimaux dans un type de terrain.' },
            { nom: 'Style de combat', icone: '🏹', desc: 'Archerie (+2 aux tirs), Défense, Duel ou Combat à deux armes.' },
            { nom: 'Compagnon animal', icone: '🐺', desc: 'Un animal lié combat et explore aux côtés du Rôdeur.' },
            { nom: 'Attaque multiple', icone: '💥', desc: '2 attaques par round dès le niveau 5.' },
        ],
        tooltip: "Chasseur sans égal des terres sauvages — l'ennemi juré ne lui échappe jamais.",
        tooltip_f: "Chasseuse sans égale des terres sauvages — l'ennemi juré ne lui échappe jamais.",
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
        nom_f: "Roublarde",
        bonus: { dexterite: 2, intelligence: 1 },
        de_vie: 8,
        traits: [
            { nom: 'Attaque sournoise', icone: '🗡️', desc: 'Dégâts bonus massifs (1d6 → 10d6) quand avantage ou allié adjacent.' },
            { nom: 'Action rusée', icone: '💨', desc: 'Se désengager, se cacher ou foncer en action bonus chaque round.' },
            { nom: 'Expertise', icone: '🎓', desc: 'Double le bonus de maîtrise dans 4 compétences.' },
            { nom: 'Esquive instinctive', icone: '🛡️', desc: 'Réduit les dégâts de zone de moitié même en cas d\'échec.' },
            { nom: 'Évasion', icone: '💨', desc: 'Si jet de sauvegarde réussi sur une zone = aucun dégât.' },
        ],
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
        nom_f: "Ensorceleuse",
        bonus: { charisme: 2, constitution: 1 },
        de_vie: 6,
        traits: [
            { nom: 'Points de Sorcellerie', icone: '⚗️', desc: 'Ressource pour modifier les sorts (intensifier, rapprocher, silencieux...).' },
            { nom: 'Métamagie', icone: '🔧', desc: 'Modifie les sorts en temps réel (Rapide, Jumeau, Étendu, Empuissanté...).' },
            { nom: 'Sorts innés', icone: '🧬', desc: 'Accès automatique à des sorts selon l\'Origine, sans préparation.' },
            { nom: 'Origine de Sorcellerie', icone: '🐉', desc: 'Dragon (PV bonus), Magie Sauvage (imprévisible), Tempête (tonnerre).' },
        ],
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
        nom_f: "Sorcière",
        bonus: { charisme: 2, sagesse: 1 },
        de_vie: 8,
        traits: [
            { nom: 'Eldritch Blast', icone: '⚡', desc: 'Attaque à distance infinie, personnalisable avec des Invocations.' },
            { nom: 'Invocations occultes', icone: '📿', desc: 'Capacités permanentes variées (vision des ténèbres, armure de sorts...).' },
            { nom: 'Sorts de pacte', icone: '🔗', desc: 'Toujours au niveau maximum, récupérés sur repos court.' },
            { nom: 'Bénédiction de pacte', icone: '📦', desc: 'Lame (arme liée), Tome (sorts bonus) ou Chaîne (familier puissant).' },
        ],
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
        nom_f: "Magicienne",
        bonus: { intelligence: 2, sagesse: 1 },
        de_vie: 6,
        traits: [
            { nom: 'Grimoire', icone: '📚', desc: 'Contient tous les sorts connus, copiables depuis d\'autres sources.' },
            { nom: 'Récupération arcanique', icone: '🔋', desc: 'Récupère des emplacements de sorts sur repos court.' },
            { nom: 'École de magie', icone: '🏫', desc: 'Spécialisation (Évocation, Illusion, Divination, Nécromancie...).' },
            { nom: 'Maîtrise des sorts', icone: '🌟', desc: 'À haut niveau, lance Identification ou Bouclier sans emplacement.' },
            { nom: 'Génie des sorts', icone: '♾️', desc: 'Peut lancer un sort de niveau 1 ou 2 à volonté sans emplacement.' },
        ],
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
//  ALIGNEMENTS — Les 9 boussoles morales du royaume
//  Structure morale en deux axes : Ordre↔Chaos / Bien↔Mal
//  Usage : tooltips, modals, quiz, Livre du Joueur/Maître
// ═══════════════════════════════════════════════════════════════

const RPG_ALIGNEMENTS = {

    // ── FAMILLE : BIEN ───────────────────────────────────────────

    "Loyal Bon": {
        icone: "😇",
        titre: "Le Croisé",
        titre_f: "La Croisée",
        famille: "Bien",
        couleur: "#4a90d9",
        tooltip: "L'honneur comme armure, la loi comme épée.",
        desc: "Vous êtes un paladin dans l'âme. Vous défendez la loi et protégez les innocents avec ferveur. Le Code de l'Honneur est votre bouclier.",

        description_joueur: `Vous êtes Le Croisé — l'âme la plus noble et la plus exigeante du royaume. Vous croyez profondément que la structure sociale, les lois et les codes d'honneur ne sont pas des contraintes : ce sont des remparts. Sans eux, les innocents sont à la merci des forts.

Votre parole est un contrat sacré. Vous ne la rompez jamais — même quand cela vous coûte cher, même quand personne ne regarde. C'est précisément ce qui vous distingue : votre intégrité n'est pas une performance, c'est une nature profonde.

Ce que vous défendez :
• L'ordre comme protection des innocents
• La parole donnée, toujours honorée
• Les institutions justes et légitimes
• La loyauté envers ceux qui méritent confiance

Ce que vous affrontez :
• La rigidité qui peut mener à l'injustice par application aveugle des règles
• La tentation de juger ceux qui ne partagent pas votre code
• Le sacrifice de soi poussé trop loin

Dans le royaume : Le Loyal Bon est le chevalier que le Roi Karl appelle en premier, et le dernier à rendre son épée. Sa présence inspire confiance. Ses alliés dorment bien la nuit.

Tension interne : Que faire quand la loi est injuste ? Le Croisé lutte parfois contre ce dilemme — et c'est là que son vrai caractère se révèle.
Personnages célèbres : Aragorn, Atticus Finch, Superman, Ned Stark.`,

        description_maitre: `Le Loyal Bon est l'alignement le plus "facile" en apparence — et le plus difficile à tenir sur la durée. C'est le personnage qui dit non à la torture même quand l'ennemi est en face, qui rend sa parole même quand ça le détruit.

En tant que Maître, cet alignement offre les conflits moraux les plus riches : quand les institutions qu'il protège deviennent injustes, que fait-il ? C'est la question centrale du Croisé.
Conseil narrative : placez-le face à une loi qu'il doit appliquer contre sa conscience. Le résultat révèle tout.
Archétype de campagne : le paladin, le chevalier de l'ordre, le juge intègre.`
    },

    "Neutre Bon": {
        icone: "🕊️",
        titre: "Le Bienfaiteur",
        titre_f: "La Bienfaitrice",
        famille: "Bien",
        couleur: "#5dade2",
        tooltip: "Le bien d'abord, les règles ensuite.",
        desc: "Vous faites le bien sans vous soucier des lois ou du chaos. Votre boussole est votre cœur, et il pointe toujours vers la lumière.",

        description_joueur: `Vous êtes Le Bienfaiteur — pragmatique du cœur. Votre priorité absolue est d'aider les autres, et vous choisissez le chemin le plus efficace pour y arriver, qu'il passe par les institutions ou autour d'elles.

Si les autorités servent le bien, vous coopérez volontiers. Si elles font obstacle, vous les contournez sans regret. Ce n'est pas de l'insubordination — c'est de la cohérence morale.

Ce que vous défendez :
• Le bien-être concret des personnes autour de vous
• La flexibilité morale au service de l'altruisme
• La coopération sans servilité, l'indépendance sans égoïsme
• La compassion comme mode de décision

Ce que vous affrontez :
• Le risque d'être manipulé par ceux qui savent jouer sur votre générosité
• L'absence de cadre qui peut rendre vos actions imprévisibles pour vos alliés
• La difficulté à dire non quand tout le monde a besoin de vous

Dans le royaume : Le Neutre Bon est l'ami que tout le monde veut à ses côtés. Pas forcément le plus puissant, mais toujours là quand ça compte vraiment.

Tension interne : Quand deux bonnes causes s'opposent, vers laquelle se tourner ? Le Bienfaiteur souffre parfois de ne pas pouvoir tout sauver.
Personnages célèbres : Gandalf, Samwise Gamgee, Robin Hood, Hermione Granger.`,

        description_maitre: `Le Neutre Bon est l'alignement le plus "jouable" et le moins conflictuel — ce qui en fait paradoxalement le plus difficile à rendre intéressant narrativement.

La clé : mettre le Bienfaiteur face à l'impossibilité de faire le bien. Ressources limitées, choix impossibles, manipulation par une bonne cause corrompue.
Conseil narratif : faites-lui rencontrer quelqu'un qui fait le mal pour de bonnes raisons — et donnez-lui raison.
Archétype de campagne : le clerc de la vie, le barde guérisseur, l'enquêteur avec une conscience.`
    },

    "Chaotique Bon": {
        icone: "🦅",
        titre: "Le Rebelle",
        titre_f: "La Rebelle",
        famille: "Bien",
        couleur: "#58d68d",
        tooltip: "La liberté d'abord, les règles jamais.",
        desc: "Rebelle au grand cœur. Vous brisez les chaînes de l'injustice et défendez les opprimés, même si cela vous met hors-la-loi.",

        description_joueur: `Vous êtes Le Rebelle — et vous portez ce titre comme un étendard, pas comme une honte. Les lois ? Vous les évaluez à l'aune d'une seule question : servent-elles les gens, ou les écrasent-elles ? Si la réponse est "elles écrasent", vous les ignorez.

Vous haïssez l'oppression d'un viscéral profond. Quand vous voyez quelqu'un subir une injustice au nom d'une règle absurde, quelque chose en vous se lève. Et cette chose ne se rassoit pas facilement.

Ce que vous défendez :
• La liberté individuelle comme valeur absolue
• Les opprimés, les oubliés, ceux que le système écrase
• L'instinct moral sur les règles écrites
• L'action spontanée guidée par la conviction

Ce que vous affrontez :
• La difficulté à travailler dans des structures ou des équipes
• Le risque que votre chaos blesse des innocents malgré vos bonnes intentions
• La tendance à renverser avant d'avoir un plan pour reconstruire

Dans le royaume : Le Chaotique Bon est l'étincelle. Il met le feu là où il faut — pas pour brûler, mais pour réchauffer. Ses alliés ne savent jamais exactement ce qu'il va faire. Mais ils savent pourquoi.

Tension interne : La liberté individuelle peut parfois nuire au collectif. Le Rebelle doit naviguer entre son refus de l'ordre et le chaos qu'il pourrait involontairement semer.
Personnages célèbres : Robin des Bois, Han Solo, Zorro, Jean Valjean, Tyrion Lannister à son meilleur.`,

        description_maitre: `Le Chaotique Bon est l'alignement préféré des joueurs qui veulent "faire le bien à leur façon". Il est entraînant, sympathique, et potentiellement explosif narrativement.

Le défi : l'empêcher de devenir simplement "je fais ce que je veux avec un prétexte moral". Le vrai Chaotique Bon a une boussole intérieure très forte — c'est son refus de l'autorité extérieure qui est radical, pas son éthique.
Conseil narratif : donnez-lui des alliés Loyaux Bons — le frottement sera narrativement riche.
Archétype de campagne : le roublard au grand cœur, le ranger solitaire, le révolutionnaire.`
    },

    // ── FAMILLE : NEUTRE ─────────────────────────────────────────

    "Loyal Neutre": {
        icone: "⚖️",
        titre: "Le Juge",
        titre_f: "La Juge",
        famille: "Neutre",
        couleur: "#aab7b8",
        tooltip: "La loi est la loi. Rien de plus, rien de moins.",
        desc: "La loi avant tout, ni plus ni moins. Vous êtes un gardien de l'ordre, sans vous laisser guider par la compassion ou la cruauté.",

        description_joueur: `Vous êtes Le Juge — et votre réputation n'est pas celle de la chaleur, mais de la prévisibilité absolue. Dans un monde corruptible et chaotique, c'est peut-être la vertu la plus rare qui soit.

Vous croyez en l'ordre. En la tradition. En un code — qu'il soit écrit dans les lois du royaume ou gravé dans vos propres principes. La loi est la loi, qu'elle soit juste ou non. La briser, même pour une bonne raison, ouvre une fissure.

Ce que vous défendez :
• L'ordre, la tradition, les institutions établies
• L'impartialité totale dans l'application des règles
• La fiabilité comme valeur morale en soi
• Un code personnel rigoureux et cohérent

Ce que vous affrontez :
• La loi injuste que vous appliquez quand même
• L'incapacité à faire des exceptions même quand le cœur le crie
• Être perçu comme froid, mécanique, sans âme

Dans le royaume : Le Loyal Neutre est le pilier administratif du château. Pas le plus populaire, mais celui qui fait tenir les choses. Quand tout le reste vacille, il est encore là, à son poste.

Tension interne : Que faire quand suivre la lettre de la loi trahit son esprit ? C'est la question qui garde Le Juge éveillé la nuit.
Personnages célèbres : Inspecteur Javert, Rorschach, Ned Stark (à sa façon rigide et fatale), Le Mandalorien.`,

        description_maitre: `Le Loyal Neutre est souvent sous-estimé comme alignement "fade". En réalité, c'est l'un des plus riches philosophiquement — et narrativement — dès qu'on le pousse dans ses retranchements.

La grande question : quand obéir aux règles devient-il complice du mal ? Javert est l'exemple parfait : un personnage profondément intègre que son propre code détruit.
Conseil narratif : faites-lui découvrir que l'institution qu'il protège est corrompue. Sa réaction révèle tout.
Archétype de campagne : le guerrier de l'ordre, le moine discipliné, l'officier de la loi.`
    },

    "Neutre Strict": {
        icone: "🌗",
        titre: "L'Équilibriste",
        titre_f: "L'Équilibriste",
        famille: "Neutre",
        couleur: "#808b96",
        tooltip: "Ni lumière ni ombre — juste l'équilibre.",
        desc: "L'équilibre est votre religion. Ni bien ni mal, ni ordre ni chaos — vous êtes le gardien de la balance universelle.",

        description_joueur: `Vous êtes L'Équilibriste — ou l'Indécis, selon comment le vent souffle ce jour-là. Ce n'est pas une critique : votre position au centre absolu de la boussole morale est l'une des plus honnêtes qui soit. Vous ne vous racontez pas d'histoires sur votre propre vertu.

Vous agissez par pragmatisme, par instinct, parfois par désir profond de maintenir un équilibre que vous sentez nécessaire. Vous n'avez pas d'agenda. Vous n'êtes pas en train de conquérir, de libérer, de juger ou de détruire.

Ce que vous incarnez :
• Le pragmatisme pur, sans idéologie
• L'observation avant l'action
• Le refus des extrêmes de tous bords
• Une sagesse tranquille qui peut paraître froide

Ce que vous affrontez :
• L'apparence d'indifférence aux yeux des autres
• La difficulté à choisir un camp quand il le faut vraiment
• Être instrumentalisé par les deux côtés

Dans le royaume : Le Neutre Strict est l'arbitre. Ni ami ni ennemi, ni héros ni traître. Il est là quand on a besoin de quelqu'un qui voit sans biais. Et parfois, c'est la personne la plus précieuse de la salle.

Tension interne : À force de ne pas choisir, risque-t-on de laisser le mal triompher par inaction ? C'est la grande question existentielle de cet alignement.
Personnages célèbres : Tom Bombadil, Dr. Manhattan, Le Chat du Cheshire.`,

        description_maitre: `Le Neutre Strict (Neutre Absolu) est l'alignement le plus difficile à jouer avec cohérence — et le plus fascinant philosophiquement. Il représente l'observateur, l'équilibriste, celui qui refuse de donner sa faveur.

L'enjeu narratif : pousser ce personnage à agir. Quand est-ce que l'équilibre devient complicité par inaction ? À quel moment doit-il choisir ?
Conseil narratif : faites-lui rencontrer une injustice si évidente que rester neutre devient moralement intenable.
Archétype de campagne : le druide de l'équilibre, le mage observateur, le voyageur sans attaches.`
    },

    "Chaotique Neutre": {
        icone: "🌀",
        titre: "L'Esprit Libre",
        titre_f: "L'Esprit Libre",
        famille: "Neutre",
        couleur: "#a569bd",
        tooltip: "Imprévisible. Incontrôlable. Libre.",
        desc: "Libre comme le vent. Vous suivez vos caprices et refusez toute contrainte — ni saint ni démon, juste imprévisible.",

        description_joueur: `Vous êtes L'Esprit Libre — et si quelqu'un essaie de vous définir plus précisément que ça, vous vous serez probablement déjà mis à faire autre chose. Les règles ? Pas pour vous. Les causes ? Peut-être, si ça vous inspire ce matin.

Vous ne cherchez pas à faire le mal. Ce serait trop d'investissement dans une direction. Vous refusez simplement toute contrainte — qu'elle vienne des tyrans, des héros, des lois ou des bonnes intentions des autres.

Ce que vous incarnez :
• La liberté totale comme mode de vie
• L'imprévisibilité comme protection et comme vérité
• L'action guidée par l'envie du moment
• L'individualisme absolu, sans cruauté délibérée

Ce que vous affrontez :
• L'impossibilité de maintenir des alliances durables
• Être perçu comme non fiable, même par ceux qui vous apprécient
• Le vide qui peut s'installer quand aucune contrainte ne donne de sens

Dans le royaume : Le Chaotique Neutre est l'électron libre. Il peut être l'atout le plus inattendu — ou la variable qui fait tout dérailler. Il ne fait pas ça exprès. Il fait juste… lui.

Tension interne : L'imprévisibilité isole. L'Esprit Libre finit parfois seul, non parce qu'il est mauvais, mais parce que personne ne peut compter sur lui durablement.
Personnages célèbres : Jack Sparrow, Deadpool, Loki (la plupart du temps).`,

        description_maitre: `Le Chaotique Neutre est souvent mal utilisé comme excuse pour jouer "sans conséquences". Il mérite mieux : c'est le personnage qui cherche authentiquement sa liberté, pas celui qui l'utilise pour éviter la responsabilité narrative.

La distinction clé : il n'est pas méchant — il est centré sur lui-même et réfractaire à toute autorité. Il peut faire de grandes choses, mais pour ses propres raisons.
Conseil narratif : donnez-lui une raison de s'attacher, puis menacez cette raison. C'est là qu'il devient intéressant.
Archétype de campagne : le rôdeur solitaire, le roublard sans cause, le barde imprévisible.`
    },

    // ── FAMILLE : MAL ────────────────────────────────────────────

    "Loyal Mauvais": {
        icone: "👹",
        titre: "Le Tyran",
        titre_f: "La Tyrane",
        famille: "Mal",
        couleur: "#c0392b",
        tooltip: "Le pouvoir par les règles, les règles pour le pouvoir.",
        desc: "Vous utilisez les règles et les structures pour asseoir votre pouvoir. Redoutable et méthodique, vous êtes un tyran organisé.",

        description_joueur: `Vous êtes Le Tyran — et vous êtes peut-être le plus dangereux des neuf alignements, précisément parce que vous n'avez pas l'air dangereux. Vous respectez les règles. Vous honorez vos contrats. Vous ne trahissez pas votre parole. Vous êtes... civilisé.

C'est ça, le problème. Vous utilisez l'ordre comme outil de domination. Les lois ne sont pas pour vous une protection des innocents — elles sont un levier.

Ce que vous incarnez :
• La discipline au service de l'ambition personnelle
• Un code d'honneur réel mais au service du contrôle
• La hiérarchie comme instrument de pouvoir
• L'efficacité froide et méthodique

Ce que vous affrontez :
• Votre propre rigidité qui peut devenir une prison
• La rébellion de ceux que vous avez trop longtemps exploités
• L'incapacité à improviser face au vrai chaos

Dans le royaume : Le Loyal Mauvais est le grand vizir que vous n'auriez jamais dû nommer. Impeccable en apparence, inarrêtable en pratique. Il construit son empire dans les règles. C'est pour ça qu'il est si difficile à arrêter.

Tension interne : Le Tyran doit constamment gérer la peur et le ressentiment de ceux qu'il domine. Un jour, quelqu'un se lèvera.
Personnages célèbres : Cersei Lannister, Dolores Ombrage, Grand Moff Tarkin, Thanos.`,

        description_maitre: `Le Loyal Mauvais est le meilleur antagoniste qui soit — parce qu'il est logique, cohérent, et difficile à critiquer formellement. Il respecte les règles. Il est juste dans ses traités. Et pourtant, tout ce qu'il fait sert son pouvoir.

L'enjeu narratif : montrer comment quelque chose de "légal" peut être profondément injuste.
Conseil narratif : donnez-lui un code d'honneur réel qu'il respecte même quand ça lui coûte — ça le rend plus complexe et plus effrayant.
Archétype de campagne : le seigneur de guerre discipliné, le inquisiteur, le bureaucrate corrompu mais cohérent.`
    },

    "Neutre Mauvais": {
        icone: "🗡️",
        titre: "Le Malfaisant",
        titre_f: "La Malfaisante",
        famille: "Mal",
        couleur: "#922b21",
        tooltip: "Ni loyal, ni chaotique — juste égoïste.",
        desc: "Vous faites ce qui vous profite, sans scrupules ni loyauté envers quiconque. Un mercenaire de votre propre ambition.",

        description_joueur: `Vous êtes Le Malfaisant — et vous êtes remarquablement honnête avec vous-même. Vous n'avez pas d'idéologie. Vous n'avez pas de cause. Vous avez des intérêts. Et vous les servez avec une efficacité remarquable.

Une loi qui vous profite ? Vous la respectez. Une alliance qui vous avantage ? Vous la maintenez. Jusqu'au moment où elle ne vous profite plus. À ce moment-là, vous passez à autre chose — sans drama, sans explication.

Ce que vous incarnez :
• L'égoïsme pur comme philosophie de vie
• L'absence totale de loyauté non rentable
• La flexibilité morale au service d'un seul maître : vous-même
• La clarté cynique sur la nature du monde

Ce que vous affrontez :
• L'isolement progressif à mesure que les autres apprennent à ne pas vous faire confiance
• L'absence de sens profond dans une existence centrée sur le gain
• La vulnérabilité face à quelqu'un qui joue mieux le même jeu

Dans le royaume : Le Neutre Mauvais est le mercenaire dans la salle. Il est là parce que c'est payant. Le jour où ça ne l'est plus, il sera ailleurs. Tout le monde le sait. Personne ne l'oublie.

Tension interne : À force de ne faire confiance à personne, Le Malfaisant finit par ne plus avoir personne sur qui compter quand ça tourne mal.
Personnages célèbres : Littlefinger, Gollum, Scar, Amy Dunne (Gone Girl).`,

        description_maitre: `Le Neutre Mauvais est l'alignement "pratique" du mal. Pas de dramaturgie, pas d'idéologie — juste de l'opportunisme. Ce qui le rend paradoxalement difficile à utiliser narrativement : il n'a pas de plan grandiose à déjouer.

Sa menace est diffuse, insidieuse. Il corrode les alliances de l'intérieur.
Conseil narratif : utilisez-le comme traître ou comme allié provisoire dont la trahison est inévitable mais dont le timing reste incertain.
Archétype de campagne : le mercenaire, l'espion sans loyauté, le voleur pragmatique.`
    },

    "Chaotique Mauvais": {
        icone: "💀",
        titre: "Le Destructeur",
        titre_f: "La Destructrice",
        famille: "Mal",
        couleur: "#6c3483",
        tooltip: "Chaos. Destruction. Plaisir.",
        desc: "La destruction et le chaos sont vos alliés. Vous ne suivez que vos désirs les plus sombres, sans foi ni loi.",

        description_joueur: `Vous êtes Le Destructeur — et le monde le sait, ou l'apprend à ses dépens. Vous ne suivez ni règles, ni codes, ni alliances. Vous suivez vos désirs. Et vos désirs pointent souvent vers quelque chose que d'autres préféreraient voir intact.

Ce n'est pas toujours de la haine pure. Parfois c'est de la frustration. Parfois du plaisir. Parfois simplement le vertige de sentir le monde brûler autour de soi.

Ce que vous incarnez :
• Le chaos comme fin en soi
• La destruction libératrice — ou simplement gratifiante
• L'absence absolue de contrainte intérieure ou extérieure
• Une énergie brute que rien ne canalise vraiment

Ce que vous affrontez :
• L'impossibilité de maintenir la moindre alliance sur la durée
• Être une menace perçue par tous — y compris vos "alliés"
• Le chaos qui finit par se retourner contre vous

Dans le royaume : Le Chaotique Mauvais est la tempête. On ne l'apprivoise pas. On l'évite, ou on l'affronte. Il n'y a pas de troisième option. Et si vous l'avez laissé entrer dans le château, c'est déjà trop tard.

Tension interne : Le Destructeur sabote souvent ses propres objectifs par impatience ou par incapacité à se contrôler. Son pire ennemi, c'est lui-même.
Personnages célèbres : Le Joker, Bellatrix Lestrange, Ramsay Bolton, Azula dans ses pires moments.`,

        description_maitre: `Le Chaotique Mauvais est l'alignement le plus "spectaculaire" — et le plus facile à mal utiliser. Un Destructeur unidimensionnel est ennuyeux. Un Destructeur avec une histoire, une blessure originelle, une logique interne brisée : c'est fascinant.

La clé : il ne détruit pas par méchanceté générique. Il détruit parce que quelque chose en lui est fondamentalement cassé — ou parce qu'il a appris que le monde ne mérite pas mieux.
Conseil narratif : montrez pourquoi il est devenu ce qu'il est. Rendez-le compréhensible sans le rendre sympathique.
Archétype de campagne : le barbare incontrôlable, l'ensorceleur corrompu, l'antagoniste final.`
    }

};
//  Source de vérité unique pour : tooltips, modals, livres
// ═══════════════════════════════════════════════════════════════

const RPG_GRADES = [

    {
        seuil: 0,
        nom: "Serf Égaré",
        nom_f: "Serve Égarée",
        icone: "🪵",
        coul: "#7f8c8d",
        tooltip: "Un inconnu qui a poussé la porte du royaume pour la première fois.",
        tooltip_f: "Une inconnue qui a poussé la porte du royaume pour la première fois.",

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
        nom_f: "Vilaine Courageuse",
        icone: "🌾",
        coul: "#95a5a6",
        tooltip: "Le paysan qui ose lever les yeux vers l'horizon.",
        tooltip_f: "La paysanne qui ose lever les yeux vers l'horizon.",

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
        nom_f: "Écuyère Novice",
        icone: "🛡️",
        coul: "#bc8f8f",
        tooltip: "Apprenti prometteur qui porte l'écu avec fierté.",
        tooltip_f: "Apprentie prometteuse qui porte l'écu avec fierté.",

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
        nom_f: "Vassale du Fief",
        icone: "🏰",
        coul: "#cd7f32",
        tooltip: "Homme de fief lié par serment à la Table.",
        tooltip_f: "Dame de fief liée par serment à la Table.",

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
        nom_f: "Chevalière Errante",
        icone: "🐎",
        coul: "#bdc3c7",
        tooltip: "Chevalier libre qui sillonne le royaume en quête de gloire.",
        tooltip_f: "Chevalière libre qui sillonne le royaume en quête de gloire.",

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
        nom_f: "Héraute Royale",
        icone: "🎺",
        coul: "#f1c40f",
        tooltip: "Voix officielle du royaume, porteur des annonces du Roi.",
        tooltip_f: "Voix officielle du royaume, porteuse des annonces du Roi.",

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
        nom_f: "Baronne de la Carrée",
        icone: "🍷",
        coul: "#e67e22",
        tooltip: "Noble de la Table, hôte des grands festins royaux.",
        tooltip_f: "Noble de la Table, hôtesse des grands festins royaux.",

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
        nom_f: "Maîtresse d'Armes",
        icone: "⚔️",
        coul: "#8b0000",
        tooltip: "Guerrier d'élite, formateur des futures générations.",
        tooltip_f: "Guerrière d'élite, formatrice des futures générations.",

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
        nom_f: "Haute Connétable",
        icone: "🚩",
        coul: "#4a0404",
        tooltip: "Grand commandant des armées, second du Roi.",
        tooltip_f: "Grande commandante des armées, seconde du Roi.",

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
        nom_f: "Main du Roi Karl",
        icone: "👑",
        coul: "#d4af37",
        tooltip: "Le bras droit du Roi, gardien du royaume en son absence.",
        tooltip_f: "Le bras droit du Roi, gardienne du royaume en son absence.",

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
 * Calcule le score total d'une caractéristique :
 *   score Firestore + bonus race + bonus classe + bonus futurs (équipement, sorts, etc.)
 *
 * @param {string}  carac      — 'force' | 'dexterite' | 'constitution' | ...
 * @param {number}  baseScore  — valeur stockée en Firestore (ex: 15)
 * @param {object}  bonusTotal — résultat de getBonusTotal(race, classe)
 * @param {object}  autresBonus — bonus supplémentaires futurs { force:1, ... } (optionnel)
 * @returns {number} score final
 *
 * Exemple : getScoreTotal('force', 15, {force:2}, {force:1}) → 18
 */
function getScoreTotal(carac, baseScore, bonusTotal, autresBonus) {
    const base   = baseScore   || 0;
    const bRace  = (bonusTotal  || {})[carac] || 0;
    const bExtra = (autresBonus || {})[carac] || 0;
    return base + bRace + bExtra;
}

/**
 * Calcule le modificateur D&D à partir d'un score total.
 *   floor((score - 10) / 2)
 *
 * | Score | Modificateur |
 * |-------|-------------|
 * |  8-9  |     -1      |
 * | 10-11 |      0      |
 * | 12-13 |     +1      |
 * | 14-15 |     +2      |
 * | 16-17 |     +3      |
 * | 18-19 |     +4      |
 * |  20   |     +5      |
 *
 * @param {number} scoreTotal — score final toutes sources confondues
 * @returns {number} modificateur (peut être négatif)
 */
function getModificateur(scoreTotal) {
    return Math.floor(((scoreTotal || 10) - 10) / 2);
}

/**
 * Raccourci : modificateur direct depuis base + bonus
 *
 * @param {string}  carac
 * @param {number}  baseScore
 * @param {object}  bonusTotal
 * @param {object}  autresBonus  (optionnel)
 * @returns {number} modificateur final
 *
 * Exemple : getModifCarac('constitution', 17, {constitution:2}) → +4
 */
function getModifCarac(carac, baseScore, bonusTotal, autresBonus) {
    return getModificateur(getScoreTotal(carac, baseScore, bonusTotal, autresBonus));
}

/**
 * Retourne le grade correspondant à un nombre de jours
 */
function getGradeFromJours(jours) {
    let actuel = RPG_GRADES[0];
    for (const g of RPG_GRADES) { if (jours >= g.seuil) actuel = g; else break; }
    return actuel;
}

// ═══════════════════════════════════════════════════════════════
//  SYSTÈME DE MONNAIE
//  Référence : 1 pp = 10 po = 20 pe = 100 pa = 1000 pc
//  Valeur pivot en pc (pièce de cuivre)
// ═══════════════════════════════════════════════════════════════

const RPG_MONNAIE = {
    pp: {
        nom:         "Platine",
        abrev:       "pp",
        icone:       "🪙",
        couleur:     "#e5e4e2",
        valeur_pc:   1000,   // 1 pp = 1000 pc
        description: "La pièce de platine — rare, précieuse, symbole de grande fortune. Rarement vue dans les bourses ordinaires, elle circule dans les hautes sphères du commerce et des trésors royaux.",
        conversions: { po: 10, pe: 20, pa: 100, pc: 1000 }
    },
    po: {
        nom:         "Or",
        abrev:       "po",
        icone:       "🪙",
        couleur:     "#d4af37",
        valeur_pc:   100,    // 1 po = 100 pc
        description: "La pièce d'or — monnaie de référence du commerce, frappée à l'effigie du Roi Karl. Dix pièces d'argent font une pièce d'or. Un aventurier débutant travaille pour quelques pièces d'or par mission.",
        conversions: { pp: 0.1, pe: 2, pa: 10, pc: 100 }
    },
    pe: {
        nom:         "Électrum",
        abrev:       "pe",
        icone:       "🪙",
        couleur:     "#a8c5c5",
        valeur_pc:   50,     // 1 pe = 50 pc
        description: "La pièce d'électrum — alliage naturel d'or et d'argent, moins courante que les autres. Vaut deux pièces d'argent ou la moitié d'une pièce d'or. Certains marchands méfiants les refusent.",
        conversions: { pp: 0.05, po: 0.5, pa: 5, pc: 50 }
    },
    pa: {
        nom:         "Argent",
        abrev:       "pa",
        icone:       "🪙",
        couleur:     "#c0c0c0",
        valeur_pc:   10,     // 1 pa = 10 pc
        description: "La pièce d'argent — monnaie du peuple et des artisans. Dix pièces de cuivre font une pièce d'argent. Le salaire journalier d'un ouvrier qualifié dans le royaume du Roi Karl.",
        conversions: { pp: 0.01, po: 0.1, pe: 0.2, pc: 10 }
    },
    pc: {
        nom:         "Cuivre",
        abrev:       "pc",
        icone:       "🪙",
        couleur:     "#b87333",
        valeur_pc:   1,      // valeur de base
        description: "La pièce de cuivre — la plus humble des monnaies, celle du marché et de la taverne. Un repas simple ou une bougie s'achète en cuivre. Dix pièces de cuivre font une pièce d'argent.",
        conversions: { pp: 0.001, po: 0.01, pe: 0.02, pa: 0.1 }
    }
};

// Ordre d'affichage standard (de la plus précieuse à la moins)
const RPG_MONNAIE_ORDRE = ['pp', 'po', 'pe', 'pa', 'pc'];

/**
 * Convertit un montant d'une devise vers une autre
 * ex: convertirMonnaie(5, 'po', 'pa') → 50
 */
function convertirMonnaie(montant, de, vers) {
    if (de === vers) return montant;
    const valPc = RPG_MONNAIE[de].valeur_pc;
    const cible = RPG_MONNAIE[vers].valeur_pc;
    return (montant * valPc) / cible;
}

/**
 * Calcule la valeur totale d'un trésor en pièces de cuivre
 * ex: totalTresorEnPo({ pp:1, po:5, pe:0, pa:10, pc:3 }) → 16.03
 */
function totalTresorEnPo(tresor) {
    const totalPc = RPG_MONNAIE_ORDRE.reduce((total, abrev) => {
        return total + ((tresor[abrev] || 0) * RPG_MONNAIE[abrev].valeur_pc);
    }, 0);
    return totalPc / 100;
}

/**
 * Exprime une valeur en pc dans la devise la plus lisible
 * ex: simplifierMonnaie(1550) → "1 pp, 5 po, 5 pa"
 */
function simplifierMonnaie(valeurPc) {
    let reste = valeurPc;
    const result = [];
    for (const abrev of RPG_MONNAIE_ORDRE) {
        const valeur = RPG_MONNAIE[abrev].valeur_pc;
        const nb = Math.floor(reste / valeur);
        if (nb > 0) { result.push(`${nb} ${abrev}`); reste -= nb * valeur; }
    }
    return result.length ? result.join(', ') : '0 pc';
}

// Export pour usage dans index.html (via window) et Node.js (livres)
if (typeof window !== 'undefined') {
    window.RPG_RACES          = RPG_RACES;
    window.RPG_CLASSES        = RPG_CLASSES;
    window.RPG_GRADES         = RPG_GRADES;
    window.RPG_ALIGNEMENTS    = RPG_ALIGNEMENTS;
    window.RPG_MONNAIE        = RPG_MONNAIE;
    window.RPG_MONNAIE_ORDRE  = RPG_MONNAIE_ORDRE;
    window.getBonusTotal       = getBonusTotal;
    window.getScoreTotal       = getScoreTotal;
    window.getModificateur     = getModificateur;
    window.getModifCarac       = getModifCarac;
    window.getGradeFromJours   = getGradeFromJours;
    window.convertirMonnaie    = convertirMonnaie;
    window.totalTresorEnPo     = totalTresorEnPo;
    window.simplifierMonnaie   = simplifierMonnaie;
}
if (typeof module !== 'undefined') {
    module.exports = {
        RPG_RACES, RPG_CLASSES, RPG_GRADES, RPG_ALIGNEMENTS,
        RPG_MONNAIE, RPG_MONNAIE_ORDRE,
        getBonusTotal, getScoreTotal, getModificateur, getModifCarac,
        getGradeFromJours,
        convertirMonnaie, totalTresorEnPo, simplifierMonnaie
    };
}

