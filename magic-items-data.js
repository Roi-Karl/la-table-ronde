/**
 * ═══════════════════════════════════════════════════════════════
 * MAGIC-ITEMS-DATA.JS  ✦  Données des Objets Magiques
 * Mise à jour : descriptions sommaires et détaillées en français (avec accord de genre)
 * ═══════════════════════════════════════════════════════════════
 */

const MAGIC_ITEMS_DATA = [

    // ════════════════════════════════════════════════════════
    // SECTION 1 — Items traduits & annotés manuellement
    // ════════════════════════════════════════════════════════

    // 🛡️ ARMURES & BOUCLIERS
    { nom: "Chemise de mailles en adamantine",     type: "Armure", rarete: "Peu commun", lien: false, prix: "5033 po",  note: "Transforme les coups critiques subis en coups normaux.",
      description: "Une chemise de mailles forgée dans l'adamantine, métal légendaire d'une dureté absolue.",
      details: "Cette chemise de mailles est tissée d'anneaux d'adamantine — l'un des métaux les plus résistants des plans d'existence. Sa surface présente des reflets bleu-noir caractéristiques. Lorsque son porteur ou sa porteuse subit un coup critique, ce coup est automatiquement traité comme un coup normal. L'adamantine est si dense qu'elle absorbe l'énergie des frappes les plus précises."
    },
    { nom: "Demi-plate en adamantine",             type: "Armure", rarete: "Peu commun", lien: false, prix: "6188 po",  note: "Transforme les coups critiques subis en coups normaux.",
      description: "Une demi-plate forgée dans l'adamantine, capable d'absorber même les coups les plus précis.",
      details: "Forgée à partir du redoutable métal qu'est l'adamantine, cette demi-plaque conjugue mobilité et protection extraordinaire. Ses reflets sombres aux teintes bleutées témoignent de sa composition rare. Tout coup critique reçu par son porteur ou sa porteuse est automatiquement converti en coup normal — ses propriétés amortissantes sont capables d'annuler même les attaques les mieux ciblées."
    },
    { nom: "Harnois en adamantine",                type: "Armure", rarete: "Peu commun", lien: false, prix: "7425 po",  note: "Transforme les coups critiques subis en coups normaux.",
      description: "Un harnois complet en adamantine, offrant une protection maximale contre les coups critiques.",
      details: "Ce harnois complet est l'une des protections les plus lourdes qui soit, entièrement forgé dans l'adamantine. Chaque pièce de métal — jambières, plastron, spallières — luit d'un éclat bleu nuit. Tant que son porteur ou sa porteuse porte ce harnois, aucun coup critique ne peut lui être infligé : chacun est traité comme un coup normal. Sa masse imposante ne laisse aucun doute sur la protection absolue qu'il confère."
    },
    { nom: "Armure +1",                            type: "Armure", rarete: "Rare",       lien: false, prix: "1980 po",  note: "Bonus de +1 à la Classe d'Armure.",
      description: "Une armure enchantée qui confère un léger bonus de protection surnaturel.",
      details: "À première vue, cette armure ressemble à n'importe quel équipement de qualité — mais une légère aura magique enveloppe son métal. Des runes à peine visibles y sont gravées, diffusant une protection supplémentaire. Son porteur ou sa porteuse bénéficie d'un bonus de +1 à sa Classe d'Armure en plus de la protection normale de l'armure. Ce bonus se superpose à tous les autres modificateurs."
    },
    { nom: "Armure +2",                            type: "Armure", rarete: "Très rare",  lien: false, prix: "6000 po",  note: "Bonus de +2 à la Classe d'Armure.",
      description: "Une armure fortement enchantée qui projette un bouclier magique autour de son porteur.",
      details: "Les runes gravées sur cette armure brillent d'un éclat subtil lorsque la lumière se pose dessus. L'enchantement est bien plus puissant qu'une simple armure +1 — on sent presque la magie de protection vibrer dans le métal. Son porteur ou sa porteuse bénéficie d'un bonus de +2 à sa Classe d'Armure, rendant les attaques significativement plus difficiles à porter."
    },
    { nom: "Armure +3",                            type: "Armure", rarete: "Légendaire", lien: false, prix: "18000 po", note: "Bonus de +3 à la Classe d'Armure.",
      description: "Un chef-d'œuvre d'enchantement, cette armure repousse les attaques avec une efficacité légendaire.",
      details: "Forgée et enchantée par les plus grands maîtres artisans de leur époque, cette armure est un symbole de puissance défensive absolue. Des runes complexes parcourent toute sa surface, pulsant d'une magie ancienne. Son porteur ou sa porteuse bénéficie d'un bonus de +3 à sa Classe d'Armure — une protection qui peut faire la différence entre la vie et la mort face aux adversaires les plus redoutables."
    },
    { nom: "Bouclier +1",                          type: "Armure", rarete: "Peu commun", lien: false, prix: "1518 po",  note: "Bonus de +1 à la Classe d'Armure (en plus du bonus normal du bouclier).",
      description: "Un bouclier enchanté qui renforce magiquement la protection de son porteur.",
      details: "Ce bouclier arbore une légère aura magique, et une rune discrète est incrustée sur sa face intérieure. En plus de la protection physique qu'il offre normalement, cet enchantement ajoute un bonus de +1 à la Classe d'Armure de son porteur ou sa porteuse. Simple mais efficace, il représente souvent le premier équipement magique d'un aventurier ou d'une aventurière."
    },
    { nom: "Bouclier +2",                          type: "Armure", rarete: "Rare",       lien: false, prix: "6000 po",  note: "Bonus de +2 à la Classe d'Armure.",
      description: "Un bouclier enchantement puissant, repoussant les coups avec une force surnaturelle.",
      details: "Les runes gravées sur ce bouclier brillent d'une lueur stable. Lorsqu'une attaque approche son porteur ou sa porteuse, on peut presque voir l'aura magique se resserrer autour d'eux. Ce bouclier procure un bonus de +2 à la Classe d'Armure en plus de sa protection physique normale, combinant défense martiale et protection surnaturelle."
    },
    { nom: "Bouclier +3",                          type: "Armure", rarete: "Très rare",  lien: false, prix: "18000 po", note: "Bonus de +3 à la Classe d'Armure.",
      description: "Un bouclier légendaire dont l'enchantement crée une barrière quasi impénétrable.",
      details: "Ce bouclier est un artefact défensif de première importance. Ses runes d'un autre âge rayonnent d'une magie palpable, et son porteur ou sa porteuse sent une force invisible renforcer chaque parade. Le bonus de +3 à la Classe d'Armure s'ajoute à la protection physique du bouclier, faisant de son détenteur ou sa détentrice une cible remarquablement difficile à toucher."
    },
    { nom: "Armure de vulnérabilité",              type: "Armure", rarete: "Rare",       lien: true,  prix: "0 po",     note: "Maudite. Résistance à un type de dégât, mais vulnérabilité à deux autres types.",
      description: "Une armure maudite qui offre une résistance partielle au prix d'une terrifiante vulnérabilité.",
      details: "De prime abord, cette armure semble offrir une protection extraordinaire contre un certain type de dégâts. Mais une malédiction ancienne y est tapie : en portant cette armure, son porteur ou sa porteuse obtient la résistance à un type de dégât, mais devient vulnérable à deux autres types. Pire encore, la malédiction empêche de la retirer tant qu'elle n'a pas été levée par un sort de Délivrance des malédictions ou une magie similaire. Une fois identifié son origine maudite, on ne la retrouve généralement qu'abandonnée ou piégée."
    },
    { nom: "Bouclier d'attraction des projectiles", type: "Armure", rarete: "Rare",      lien: true,  prix: "6000 po",  note: "Maudit. Résistance aux dégâts à distance non magiques, mais attire les projectiles vers vous.",
      description: "Un bouclier maudit qui offre une résistance contre les projectiles... en attirant tous ceux des alentours.",
      details: "Ce bouclier prometteur confère une résistance aux dégâts des armes à distance non magiques, une protection appréciable en apparence. Cependant, une malédiction pernicieuse y est dissimulée : toute attaque à distance effectuée dans les environs est automatiquement redirigée vers son porteur ou sa porteuse. Les archers et arbalétriers ennemis semblent irrésistiblement guidés vers eux, même s'ils visaient ailleurs. Seul un sort de Délivrance des malédictions permet de se défaire de cet objet traître."
    },
    { nom: "Armure d'invulnérabilité",             type: "Armure", rarete: "Légendaire", lien: false, prix: "48000 po", note: "Vous pouvez utiliser une action pour devenir immunisé aux dégâts non magiques pendant 10 minutes (1 fois par jour).",
      description: "Une armure légendaire capable de rendre son porteur temporairement invulnérable aux attaques non magiques.",
      details: "Cette armure impressionnante, forgée dans un métal d'une pureté absolue et gravée de symboles ésotériques, est l'une des protections les plus convoitées des royaumes. En dépensant une action, son porteur ou sa porteuse peut activer son enchantement principal : pendant 10 minutes, il ou elle devient totalement immunisé(e) aux dégâts non magiques — épées, flèches, griffes et crocs ordinaires glissent sur l'armure comme sur du verre. Cette capacité est utilisable une fois par jour et se recharge à l'aube."
    },
    { nom: "Armure de résistance",                 type: "Armure", rarete: "Rare",       lien: false, prix: "12000 po", note: "Confère la résistance à un type de dégât spécifique.",
      description: "Une armure enchantée pour résister à un type de dégât particulier, déterminé lors de sa création.",
      details: "À la création de cette armure, un enchanteur spécialiste y a tissé une résistance à un type de dégât spécifique (acide, froid, feu, foudre, nécrotique, poison, psychique, radiant, tonnerre ou contondant/perforant/tranchant). Son porteur ou sa porteuse bénéficie de la résistance à ce type de dégât, réduisant de moitié tous les dommages de ce type. Des motifs liés à l'élément concerné courent souvent sur ses surfaces."
    },
    { nom: "Cape de protection",                   type: "Armure", rarete: "Peu commun", lien: false, prix: "3600 po",  note: "+1 à la CA et aux jets de sauvegarde.",
      description: "Une cape finement brodée de runes protectrices qui renforce la défense et la résistance de son porteur.",
      details: "Cette cape élégante, souvent ornée de broderies dorées ou argentées aux motifs ésotériques, dissimule une puissante magie défensive. Son porteur ou sa porteuse bénéficie d'un bonus de +1 à sa Classe d'Armure ainsi qu'à tous ses jets de sauvegarde. Bien qu'elle ne soit pas considérée comme une armure, sa protection s'applique en complément de toute autre défense. C'est l'un des objets magiques les plus polyvalents pour tout aventurier ou toute aventurière."
    },
    { nom: "Armure de mithral",                    type: "Armure", rarete: "Peu commun", lien: false, prix: "4000–8000 po", note: "Ignore les exigences de Force et de discrétion de l'armure.",
      description: "Une armure légère comme le vent grâce au mithral, métal elfique quasi miraculeux.",
      details: "Le mithral est un métal elfique d'une légèreté et d'une solidité remarquables. Cette armure forgée en mithral permet à son porteur ou sa porteuse d'ignorer les prérequis de Force normalement requis par ce type d'armure, et n'impose aucun désavantage aux jets de Discrétion — même les armures de plates en mithral permettent de se déplacer sans bruit. Sa surface argentée aux reflets bleutés la rend immédiatement reconnaissable."
    },
    { nom: "Armure de plates +1 en adamantine",    type: "Armure", rarete: "Rare",       lien: false, prix: "10000 po", note: "Combinaison +1 et adamantine.",
      description: "Un harnois alliant le bonus magique de +1 à l'invulnérabilité aux coups critiques de l'adamantine.",
      details: "Cette armure de plates d'exception combine deux enchantements redoutables : le métal d'adamantine qui la compose annule tous les coups critiques reçus (ils sont traités comme des coups normaux), et l'enchantement magique supplémentaire confère un bonus de +1 à la Classe d'Armure. Son porteur ou sa porteuse bénéficie ainsi d'une protection à la fois physique et surnaturelle d'une qualité exceptionnelle."
    },
    { nom: "Harnois de puissance démoniaque",      type: "Armure", rarete: "Très rare",  lien: false, prix: "32000 po", note: "Force 19, mais malédiction possible selon la campagne.",
      description: "Un harnois terrible forgé avec une puissance démoniaque, conférant une force surhumaine.",
      details: "Ce harnois impressionnant est imprégné d'une énergie infernale. Des visages démoniaques semblent grimacer depuis ses épaulières et son plastron, et de faibles émanations de chaleur s'en dégagent. Son porteur ou sa porteuse voit sa Force fixée à 19 tant qu'il ou elle le porte — une puissance musculaire comparable à celle d'un géant des collines. Certaines versions de cet objet recèlent cependant une malédiction occulte dont les effets se révèlent avec le temps."
    },
    { nom: "Armure de commandement draconique",    type: "Armure", rarete: "Légendaire", lien: false, prix: "65000 po", note: "CA 19 + DEX (max +2), résistance à un type de dégâts draconique, sorts liés aux dragons.",
      description: "Une armure légendaire forgée à partir d'écailles de dragon, conférant la puissance et l'autorité d'un dragon.",
      details: "Seuls les plus grands forgerons et enchanteurs peuvent façonner cette armure à partir d'écailles de dragon. Sa Classe d'Armure est de 19 + modificateur de Dextérité (maximum +2), ce qui en fait l'une des protections les plus efficaces qui soit. Son porteur ou sa porteuse bénéficie de la résistance au type de dégâts lié au dragon dont proviennent les écailles, ainsi que d'accès à de puissants sorts draconiques. Sa simple apparence inspire crainte et respect — ou terreur."
    },

    // ⚔️ ARMES
    { nom: "Arme +1", type: "Arme", rarete: "Peu commun", lien: false, prix: "825 po", note: "Bonus de +1 aux jets d'attaque et de dégâts.",
      description: "Une arme enchantée qui guide les attaques avec une précision magique.",
      details: "Cette arme est indiscernable d'une arme ordinaire de qualité, si ce n'est d'une légère lueur magique perceptible sous Détection de la magie. Elle confère un bonus de +1 aux jets d'attaque et de dégâts, ce qui signifie que ses attaques sont légèrement plus précises et légèrement plus blessantes. De plus, elle est considérée comme magique pour contourner les résistances et immunités des créatures sensibles aux attaques non magiques."
    },
    { nom: "Arme +2", type: "Arme", rarete: "Rare", lien: false, prix: "3300 po", note: "Bonus de +2 aux jets d'attaque et de dégâts.",
      description: "Une arme puissamment enchantée, d'une précision et d'une efficacité supérieures.",
      details: "Les runes gravées sur cette arme pulsent doucement d'une lumière intérieure. Le bonus de +2 qu'elle confère aux jets d'attaque et de dégâts la rend nettement plus efficace qu'une arme +1. Considérée comme une arme magique, elle peut blesser les créatures résistantes aux dégâts non magiques. Dans les mains d'un guerrier ou d'une guerrière compétent(e), elle peut faire toute la différence lors d'un combat décisif."
    },
    { nom: "Arme d'Avertissement", type: "Arme", rarete: "Peu commun", lien: true, prix: "4500 po", note: "Avantage à l'initiative, empêche d'être surpris.",
      description: "Une arme liée à son porteur qui lui murmure les dangers à venir, le protégeant des embuscades.",
      details: "Cette arme développe un lien mystique avec son porteur ou sa porteuse après un attunement. Elle perçoit les menaces avant même qu'elles se matérialisent, lui chuchotant des avertissements imperceptibles. Mécaniquement, son porteur ou sa porteuse bénéficie d'un avantage aux jets d'Initiative et ne peut être surpris(e) tant qu'il ou elle n'est pas incapable d'agir. De plus, les alliés dans un rayon de 9 mètres ne peuvent pas être surpris non plus. Une arme précieuse pour tout le groupe."
    },
    { nom: "Dague de venin", type: "Arme", rarete: "Rare", lien: false, prix: "2350 po", note: "Peut infliger la condition empoisonné et des dégâts de poison supplémentaires.",
      description: "Une dague dont la lame recèle un compartiment secret empli d'un poison magique inépuisable.",
      details: "La lame de cette dague présente un fin canal gravé en son centre, invisible à l'œil nu. Un compartiment caché dans la garde renferme une réserve magique de poison. En utilisant une action bonus, son porteur ou sa porteuse peut activer le poison : la prochaine cible touchée doit réussir un jet de sauvegarde de Constitution (DD 15) ou subir 2d10 dégâts de poison supplémentaires et devenir empoisonnée pendant 1 minute. La réserve contient assez de poison pour trois utilisations et se recharge à l'aube."
    },
    { nom: "Épée dansante", type: "Arme", rarete: "Très rare", lien: true, prix: "5400 po", note: "Peut être animée pour attaquer de manière autonome en action bonus.",
      description: "Une épée enchantée qui peut s'animer et combattre seule, prolongeant les efforts de son porteur.",
      details: "Cette épée est un prodige d'enchantement. En dépensant une action bonus, son porteur ou sa porteuse peut la lancer en l'air et l'animer. L'épée se déplace et attaque de façon autonome dans un rayon de 9 mètres, en utilisant le bonus d'attaque de son propriétaire. Chaque round, son porteur ou sa porteuse peut la déplacer et elle effectue une attaque par round via une action bonus. Elle reste animée jusqu'à ce que son propriétaire soit neutralisé ou s'en empare de nouveau."
    },
    { nom: "Épée de vie (Life Stealing)", type: "Arme", rarete: "Rare", lien: true, prix: "857 po", note: "Inflige des dégâts nécrotiques supplémentaires sur un 20 naturel et vous soigne.",
      description: "Une épée d'énergie nécrotique qui vole la vitalité de ses victimes pour la transmettre à son porteur.",
      details: "Cette épée à l'acier sombre est imprégnée d'énergie nécrotique. Son arête présente un léger reflet verdâtre dans l'obscurité. Lorsque son porteur ou sa porteuse obtient un 20 naturel sur un jet d'attaque contre une créature qui n'est pas un mort-vivant ni un artificiel, la cible subit 10 dégâts nécrotiques supplémentaires et son porteur ou sa porteuse récupère le même nombre de points de vie. Une arme particulièrement prisée des guerriers qui cherchent à se maintenir en vie dans les mêlées prolongées."
    },
    { nom: "Langue de feu (Flame Tongue)", type: "Arme", rarete: "Rare", lien: true, prix: "1600 po", note: "S'enflamme sur commande, inflige 2d6 dégâts de feu supplémentaires.",
      description: "Une arme redoutable qui s'embrase d'une flamme magique intense sur un simple mot de commande.",
      details: "La lame de cette arme est forgée dans un acier qui semble presque vivant. En prononçant le mot de commande (une action bonus), son porteur ou sa porteuse l'enflamme d'une flamme magique qui projette une lumière vive sur 6 mètres. Cette flamme inflige 2d6 dégâts de feu supplémentaires à chaque attaque réussie. Un autre mot de commande l'éteint. Elle est particulièrement redoutable contre les créatures régénérant sur commande, les morts-vivants et les créatures de glace."
    },
    { nom: "Munition +1", type: "Arme", rarete: "Peu commun", lien: false, prix: "297 po", note: "Bonus de +1 à l'attaque et aux dégâts.",
      description: "Des munitions enchantées qui améliorent la précision et les dégâts des attaques à distance.",
      details: "Ces munitions — flèches, carreaux d'arbalète ou billes de fronde selon le cas — sont finement travaillées et portent des runes discrètes sur leur hampe ou leur surface. Elles confèrent un bonus de +1 aux jets d'attaque et de dégâts, et sont considérées comme des armes magiques. Contrairement aux armes magiques, les munitions sont consommées après utilisation, bien que certains archers particulièrement habiles parviennent à les récupérer intactes après un combat."
    },
    { nom: "Vengeresse sacrée (Holy Avenger)", type: "Arme", rarete: "Légendaire", lien: true, prix: "39464 po", note: "Arme ultime de paladin, +3, dégâts radiants supplémentaires, aura de protection.",
      description: "L'arme sacrée par excellence des paladins, bénie par les dieux pour éradiquer le mal.",
      details: "La Vengeresse Sacrée est le rêve de tout paladin : une épée +3 qui, dans les mains d'un paladin, inflige 2d10 dégâts radiants supplémentaires aux fiélons et aux morts-vivants. Son porteur ou sa porteuse bénéficie également d'un avantage aux jets de sauvegarde contre les sorts et autres effets magiques. De plus, une aura s'étendant sur 3 mètres confère aux alliés l'avantage aux jets de sauvegarde contre les sorts et effets magiques. Sa lame scintille d'une lumière dorée et ses runes brillent d'un éclat sacré."
    },

    // 💍 ANNEAUX
    { nom: "Anneau de protection", type: "Anneau", rarete: "Rare", lien: true, prix: "3600 po", note: "Bonus de +1 à la CA et aux jets de sauvegarde.",
      description: "Un anneau enchanté qui étend une protection surnaturelle sur tout le corps de son porteur.",
      details: "Cet anneau, souvent orné d'une pierre précieuse au centre d'un motif de runes enchantées, diffuse une magie défensive constante. Son porteur ou sa porteuse bénéficie d'un bonus de +1 à sa Classe d'Armure et à tous ses jets de sauvegarde. Un objet magique particulièrement précieux car il améliore à la fois la capacité à éviter les coups et la résistance aux effets magiques — sans nécessiter le port d'une armure spécifique."
    },
    { nom: "Anneau de résistance", type: "Anneau", rarete: "Rare", lien: true, prix: "9900 po", note: "Confère la résistance à un type de dégât spécifique.",
      description: "Un anneau taillé dans un matériau particulier qui confère une résistance à un type de dégât.",
      details: "Chaque Anneau de résistance est lié à un type de dégât spécifique, déterminé par la gemme ou le matériau dont il est composé : perle pour l'acide, tourmaline pour le froid, grenat pour le feu, spinelle bleue pour la foudre, onyx pour le nécrotique, tourmaline jaune pour le poison, aigue-marine pour le psychique, topaze pour le radiant, spinelle rouge pour le tonnerre, ou diamant pour les dégâts physiques. Son porteur ou sa porteuse bénéficie de la résistance à ce type de dégâts."
    },
    { nom: "Anneau d'action libre", type: "Anneau", rarete: "Rare", lien: true, prix: "9000 po", note: "La magie ne peut ni réduire votre vitesse ni vous paralyser/entraver.",
      description: "Un anneau qui brise les enchantements restrictifs, préservant la pleine liberté de mouvement de son porteur.",
      details: "Cet anneau est l'une des protections les plus efficaces contre les sorts de contrôle. Tant que son porteur ou sa porteuse le porte, la magie ne peut ni réduire sa vitesse de déplacement, ni le paralyser, ni l'entraver. Il peut se déplacer et agir normalement dans une zone de terrain magiquement difficile. De plus, les sorts comme Immobiliser une personne ou Enchevêtrement n'ont aucun effet sur lui. Une protection essentielle face aux mages ennemis."
    },
    { nom: "Anneau de stockage de sorts", type: "Anneau", rarete: "Rare", lien: true, prix: "12600 po", note: "Peut stocker jusqu'à 5 niveaux de sorts.",
      description: "Un anneau capable de stocker des sorts pour les libérer au moment opportun.",
      details: "Cet anneau peut stocker jusqu'à 5 niveaux de sorts à la fois. Tout lanceur de sorts peut y placer un sort en le lançant directement dans l'anneau (1 action, sans effet immédiat). Son porteur ou sa porteuse peut ensuite libérer l'un des sorts stockés en utilisant une action. Les sorts libérés utilisent le niveau du slot d'origine et le DD du lanceur d'origine. Il peut contenir par exemple cinq sorts de niveau 1, ou un sort de niveau 3 et un de niveau 2."
    },

    // 🧪 POTIONS
    { nom: "Potion de guérison", type: "Potion", rarete: "Commun", lien: false, prix: "55 po", note: "Restaure 2d4 + 2 PV.",
      description: "Un élixir rouge vif à l'odeur légèrement sucrée qui soigne les blessures en quelques instants.",
      details: "La Potion de guérison est l'objet magique le plus répandu dans les royaumes. Son liquide rouge brillant dégage un léger parfum de fleur de cerisier. En la buvant en une action, son consommateur ou consommatrice récupère 2d4 + 2 points de vie. Elle ne guérit pas les maladies, les malédictions ni les afflictions spéciales, mais permet de se remettre rapidement de blessures de combat. Indispensable dans le sac de tout aventurier ou aventurière."
    },
    { nom: "Potion de guérison supérieure", type: "Potion", rarete: "Peu commun", lien: false, prix: "165 po", note: "Restaure 4d4 + 4 PV.",
      description: "Un puissant élixir de guérison qui referme même les blessures sérieuses en une gorgée.",
      details: "Cette potion de teinte rouge plus profonde que la version ordinaire dégage un arôme plus intense, presque épicé. Elle restaure 4d4 + 4 points de vie à son consommateur ou consommatrice en une action. Bien plus puissante qu'une potion de guérison standard, elle est capable de soigner des blessures sérieuses. On la trouve chez les apothicaires de renom ou comme récompense d'une mission particulièrement dangereuse."
    },
    { nom: "Potion de force de géant (Colline)", type: "Potion", rarete: "Peu commun", lien: false, prix: "3119 po", note: "Fixe la Force à 21 pendant 1 heure.",
      description: "Un élixir qui gonfle les muscles et confère temporairement la force d'un géant des collines.",
      details: "Ce liquide trouble de couleur grisâtre dégage une odeur de terre et de pierre. Pendant 1 heure après avoir bu cette potion, la Force de son consommateur ou consommatrice est fixée à 21 — à moins qu'elle ne soit déjà supérieure. La force d'un géant des collines permet de porter des charges extraordinaires, de frapper avec une puissance dévastatrice et d'accomplir des prouesses physiques normalement impossibles. C'est souvent la potion idéale avant de forcer une porte ou de soulever une herse."
    },
    { nom: "Potion de vol", type: "Potion", rarete: "Très rare", lien: false, prix: "1485 po", note: "Confère une vitesse de vol pendant 1 heure.",
      description: "Un élixir rare aux reflets célestes qui permet de s'élever dans les airs pendant une heure.",
      details: "Cette potion contient un liquide d'un bleu-gris lumineux qui tourbillonne doucement, comme animé d'une brise intérieure. Après l'avoir bue, son consommateur ou consommatrice acquiert une vitesse de vol de 18 mètres pendant 1 heure, avec la capacité de flotter et de manœuvrer librement dans les trois dimensions. L'effet prend fin si la personne est rendue inconsciente. Une chute depuis une grande hauteur à la fin de l'effet peut s'avérer fatale sans précaution."
    },
    { nom: "Potion d'invisibilité", type: "Potion", rarete: "Rare", lien: false, prix: "660 po", note: "Rend invisible pendant 1 heure ou jusqu'à ce que vous attaquiez/lanciez un sort.",
      description: "Un élixir qui dissout littéralement la silhouette de son buveur dans l'air ambiant.",
      details: "Lorsqu'elle est agitée, cette potion semble contenir un liquide transparent — difficile à voir dans son flacon. Une fois bue, son consommateur ou consommatrice et tout ce qu'il ou elle porte deviennent invisibles pendant 1 heure. L'effet prend fin immédiatement s'il ou elle attaque une cible ou lance un sort. Les objets déposés ou lâchés redeviennent visibles. Un outil précieux pour les espions, les voleurs et tous ceux qui doivent traverser discrètement un endroit gardé."
    },

    // 🪄 BAGUETTES, BÂTONS & SCEPTRES
    { nom: "Baguette de projectiles magiques", type: "Baguette", rarete: "Peu commun", lien: false, prix: "1485 po", note: "7 charges. Permet de lancer Projectile magique sans composante.",
      description: "Une baguette magique permettant de lancer Projectile magique sans composante ni slot de sort.",
      details: "Cette baguette fine et effilée, souvent taillée dans du bois de frêne ou d'acajou, contient 7 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Projectile magique (comme au niveau 1) sans avoir besoin de composantes ni de slot de sort. Il est possible de dépenser jusqu'à 3 charges pour lancer le sort à un niveau supérieur. La baguette récupère 1d6 + 1 charges à l'aube. Si la dernière charge est dépensée lors d'un 1 naturel, la baguette se désintègre."
    },
    { nom: "Baguette de boules de feu", type: "Baguette", rarete: "Rare", lien: true, prix: "6000 po", note: "7 charges. Permet de lancer Boule de feu (DD 15).",
      description: "Une baguette terrifiante capable de déchaîner des boules de feu dévastatrices sur commande.",
      details: "Cette baguette noircie à l'extrémité contient 7 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Boule de feu avec un DD de sauvegarde de 15 et un bonus d'attaque de +7. Des charges supplémentaires permettent de lancer le sort à un niveau plus élevé (dépenser 2 charges = niveau 4, 3 charges = niveau 5, etc.). La baguette récupère 1d6 + 1 charges à l'aube. Une arme redoutable pour semer le chaos au sein des rangs ennemis, attention aux alliés à proximité."
    },
    { nom: "Bâton de la forêt", type: "Bâton", rarete: "Rare", lien: true, prix: "20400 po", note: "Arme +2. Permet de lancer divers sorts liés à la nature.",
      description: "Un bâton noueux d'origine sylvestre qui canalise la puissance de la nature sauvage.",
      details: "Ce bâton semble avoir poussé naturellement, ses nœuds et sa texture évoquant un bois vivant. En plus d'être une arme de bâton +2, il contient de nombreuses charges permettant de lancer des sorts liés à la nature : Animer les plantes, Brume, Communication avec les animaux, Communication avec les plantes, Convocation d'animaux, Convocation d'élémentaires, Couteau de nature, Croissance végétale, Épines, Lumière du jour, Nuage pestilentiel, et Passe-muraille de nature. Réservé aux druides, rangers, et figures similaires."
    },
    { nom: "Bâton de puissance", type: "Bâton", rarete: "Très rare", lien: true, prix: "39060 po", note: "Arme +2, +2 CA et JS, contient de puissants sorts de combat et de défense.",
      description: "L'un des bâtons magiques les plus polyvalents, alliant protection et puissance offensive.",
      details: "Ce bâton imposant confère un bonus de +2 aux jets d'attaque, aux dégâts, à la Classe d'Armure et aux jets de sauvegarde. Il contient 20 charges permettant de lancer de nombreux sorts : Boule de feu, Éclair, Lueur des fées, Mains brûlantes, Porte dimensionnelle, Rayon affaiblissant, etc. La charge finale peut être utilisée pour un Rayon de désintégration. Si la dernière charge est retirée, lancez 1d20 : sur un 1, le bâton libère toute son énergie en une explosion de force et disparaît."
    },
    { nom: "Sceptre inamovible (Immovable Rod)", type: "Sceptre", rarete: "Peu commun", lien: false, prix: "7425 po", note: "Reste fixe dans l'espace lorsqu'on appuie sur son bouton, supporte jusqu'à 4000 kg.",
      description: "Une barre métallique qui peut être fixée immoblement dans l'air en appuyant sur un bouton.",
      details: "Ce sceptre d'acier plat avec un bouton à son extrémité est un objet d'une utilité surprenante. En appuyant sur le bouton, il reste immobile dans l'espace, résistant à une force allant jusqu'à 4 000 kilogrammes sans bouger. Pour le déplacer, il faut appuyer de nouveau sur le bouton. Jusqu'à trois individus peuvent tenter de le déplacer de force avec un test de Force DD 30. Ses utilisations incluent : créer des marche-pieds dans les airs, bloquer des portes, soutenir une chute imminente, ou piéger des créatures."
    },

    // ✨ OBJETS MERVEILLEUX
    { nom: "Amulette de santé", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "12600 po", note: "Fixe la Constitution à 19.",
      description: "Une amulette dorée qui renforce la robustesse physique de son porteur de façon permanente.",
      details: "Cette amulette en or massif est souvent ornée d'un rubis ou d'une pierre rouge symbolisant la vitalité. Tant que son porteur ou sa porteuse la porte, sa valeur de Constitution est fixée à 19 — sauf si elle est déjà supérieure. Une Constitution de 19 signifie un bonus de +4 aux tests et jets de sauvegarde de Constitution, ainsi qu'un nombre de points de vie supplémentaires considérable. Prisée des guerriers, des clercs et de tous ceux qui cherchent à endurer les épreuves physiques les plus dures."
    },
    { nom: "Bandeau d'intelligence", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9450 po", note: "Fixe l'Intelligence à 19.",
      description: "Un bandeau argenté qui aiguise l'esprit et stimule les facultés intellectuelles de son porteur.",
      details: "Ce fin bandeau métallique, souvent orné de petites gemmes bleues ou blanches, canalise une énergie cognitive remarquable. Tant que son porteur ou sa porteuse le porte, sa valeur d'Intelligence est fixée à 19 — sauf si elle est déjà supérieure. Une Intelligence de 19 améliore les tests liés aux connaissances, la mémoire, le raisonnement logique et les compétences intellectuelles en général. Particulièrement précieux pour les mages, les érudits et toute personne devant résoudre des énigmes complexes."
    },
    { nom: "Bottes elfiques", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2970 po", note: "Avantage aux jets de Dextérité (Discrétion) liés aux bruits de pas.",
      description: "Des bottes légères de confection elfique qui permettent de se déplacer en silence absolu.",
      details: "Ces bottes souples en cuir tanné selon des techniques elfiques ancestrales semblent presque immatérielles. Elles sont si légèrement construites qu'on a du mal à croire qu'elles protègent vraiment les pieds. Leur porteur ou porteuse bénéficie d'un avantage à tous les jets de Dextérité (Discrétion) impliquant les bruits de pas. Même sur des planchers craquants ou des graviers, ses pas sont silencieux comme ceux d'un chat. Un outil idéal pour les roublards, les rangers et tous les infiltrateurs."
    },
    { nom: "Cape de déplacement", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6000 po", note: "Désavantage aux attaques dirigées contre vous grâce à une illusion.",
      description: "Une cape mystérieuse qui crée une illusion de déplacement, rendant son porteur difficile à atteindre.",
      details: "En portant cette cape, son porteur ou sa porteuse génère une illusion constante qui le ou la fait apparaître légèrement décalé(e) de sa position réelle. Tant qu'il ou elle n'est pas neutralisé(e), toutes les attaques contre lui ou elle ont un désavantage — les ennemis frappent constamment à côté. L'illusion est temporairement dissipée si son porteur ou sa porteuse prend des dégâts ou est affecté(e) par certains effets (incapacité, paralysie). Elle se réactive au début de son tour suivant."
    },
    { nom: "Ceinturon de force de géant (Colline)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "18900 po", note: "Fixe la Force à 21.",
      description: "Un large ceinturon qui confère la puissance musculaire titanesque d'un géant des collines.",
      details: "Ce ceinturon épais orné de motifs martiaux est forgé dans du cuir tanné renforcé de métal. Tant que son porteur ou sa porteuse le porte, sa valeur de Force est fixée à 21 — sauf si elle est déjà supérieure. Une Force de 21 représente une puissance physique bien au-delà des limites humaines habituelles, permettant de soulever des charges massives, de frapper avec une puissance dévastatrice et d'intimider par la seule présence physique. Les aventuriers de toutes classes apprécient cet objet."
    },
    { nom: "Collier de boules de feu", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "5940 po", note: "Comporte des perles explosives permettant de lancer Boule de feu.",
      description: "Un collier de perles aux apparences anodines dont chacune renferme une boule de feu prête à exploser.",
      details: "Ce collier porte 3d4 perles d'apparence ordinaire. Chaque perle peut être détachée et lancée (portée 18 m) en une action. À l'impact, elle explose comme un sort de Boule de feu de niveau 3 (DD 15). Des perles supplémentaires peuvent être lancées simultanément pour augmenter l'effet (2 perles = niveau 4, 3 perles = niveau 5, etc. jusqu'à 5 perles maximum). Si le collier est détruit ou si une flamme le touche, toutes les perles explosent simultanément — une explosion dévastatrice pour tout le monde aux alentours."
    },
    { nom: "Cruche alchimique", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4950 po", note: "Peut produire divers liquides (eau, bière, miel, poison, acide...).",
      description: "Une cruche magique capable de produire à la demande une grande variété de liquides utiles.",
      details: "Cette cruche en céramique ou en métal possède un couvercle orné d'un motif alchimique. En prononçant le nom d'un liquide, elle peut en produire une quantité prédéfinie une fois par jour : 2 gallons d'acide, ½ gallon de bière noire, ⅓ gallon d'huile, 1 gallon d'eau douce ou salée, ½ gallon de vin, 1 once de poison basique, 1 gallon de vinaigrette, 1 quart de miel, ½ gallon de lait, ou 2 onces d'eau bénite. Un outil indispensable lors des longues expéditions en terrain hostile."
    },
    { nom: "Gantelets de puissance d'ogre", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9450 po", note: "Fixe la Force à 19.",
      description: "Des gantelets grossiers mais puissants qui confèrent la force brutale d'un ogre.",
      details: "Ces lourds gantelets d'apparence rustique, souvent ornés de rivets ou de motifs primitifs, semblent avoir été fabriqués pour des mains bien plus grandes que les mains humaines. Tant que leur porteur ou porteuse les porte et reste syntonisé(e), sa valeur de Force est fixée à 19 — sauf si elle est déjà supérieure. Moins raffinés que les ceinturons de force de géant, ils sont néanmoins fort appréciés des personnages qui cherchent une amélioration de leur puissance physique sans se ruiner."
    },
    { nom: "Manuel de santé corporelle", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43659 po", note: "Après 48h de lecture, augmente la Constitution et son maximum de +2.",
      description: "Un tome précieux qui enseigne des méthodes secrètes pour fortifier définitivement le corps.",
      details: "Ce manuel relié de cuir épais contient des exercices, des régimes et des techniques ésotériques censés renforcer le corps de façon permanente. Pour en tirer profit, son lecteur ou lectrice doit lire le tome pendant 48 heures sur 6 jours consécutifs. À la fin de la lecture, sa Constitution augmente de 2 points, ainsi que son maximum pour cette caractéristique. Une fois lu, le manuel perd son enchantement pendant 100 ans avant de pouvoir être utilisé à nouveau. Un objet rare et convoité."
    },

    // ════════════════════════════════════════════════════════
    // SECTION 2 — Items issus du fichier MagicItemPricing (traduits en FR)
    // ════════════════════════════════════════════════════════

    // 🛡️ ARMURE
    { nom: "Cotte de mailles en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5 074 po", note: "nan",
      description: "Une cotte de mailles en adamantine qui annule les coups critiques subis.",
      details: "Cette cotte de mailles tissée d'anneaux en adamantine possède les mêmes propriétés que toute armure en ce métal légendaire. Sa surface sombre aux reflets bleutés témoigne de la pureté de l'adamantine utilisé. Tout coup critique reçu par son porteur ou sa porteuse est automatiquement traité comme un coup normal — l'armure absorbe l'énergie des frappes précises avec une efficacité remarquable. Elle est légèrement plus lourde qu'une cotte de mailles ordinaire."
    },
    { nom: "Cotte de plates en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5 000 po", note: "nan",
      description: "Une cotte de plates en adamantine offrant une immunité aux coups critiques.",
      details: "Combinant les plaques renforcées de la cotte de plates avec le métal indestructible de l'adamantine, cette armure offre une protection remarquable. Elle est forgée avec soin pour équilibrer la mobilité et la défense, tout en garantissant que chaque coup critique reçu soit traité comme un coup normal. Les reflets caractéristiques de l'adamantine lui confèrent une apparence distinctive sur le champ de bataille."
    },
    { nom: "Cotte de plaques en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5 033 po", note: "nan",
      description: "Une cotte de plaques en adamantine combinant flexibilité et protection contre les coups critiques.",
      details: "Cette armure intermédiaire entre la cotte de mailles et les plates complètes bénéficie des propriétés de l'adamantine : tout coup critique subi est traité comme un coup normal. Sa construction hybride offre un bon compromis entre mobilité et protection, ce qui en fait un choix populaire parmi les guerriers qui ne veulent pas sacrifier leur agilité pour une protection maximale."
    },
    { nom: "Bouclier animé", type: "Armure", rarete: "Très rare", lien: true, prix: "2 700 po", note: "nan",
      description: "Un bouclier enchanté qui flotte de lui-même pour se positionner là où la protection est la plus nécessaire.",
      details: "Ce bouclier est imprégné d'un enchantement d'animation qui lui permet d'agir de façon semi-autonome. En utilisant une action bonus, son porteur ou sa porteuse peut l'animer. Une fois animé, il flotte à portée de main et son porteur ou sa porteuse peut utiliser les deux mains librement tout en bénéficiant du bonus CA du bouclier. Le bouclier reste animé pendant 1 minute, se déplaçant avec son propriétaire pour bloquer les attaques entrantes. Il peut être désanimé par une autre action bonus."
    },
    { nom: "Armure étincelante", type: "Armure", rarete: "Commun", lien: false, prix: "330 po", note: "add armor to total; based: prestidigitation",
      description: "Une armure enchantée qui reste magiquement propre et brillante en toutes circonstances.",
      details: "Cette armure dispose d'un enchantement de prestidigitation permanent qui la maintient dans un état impeccable. Peu importe les conditions — boue, sang, rouille ou intempéries — elle retrouve automatiquement son aspect neuf et brillant après quelques instants. Si cet avantage est surtout esthétique, il contribue également à impressionner lors des audiences officielles et à maintenir l'armure en bon état de conservation, lui évitant la dégradation habituelle des armures ordinaires."
    },
    { nom: "Armure de résistance (plastron)", type: "Armure", rarete: "Rare", lien: true, prix: "9 800 po", note: "based: protection from energy (plus 1 level, no concentration)",
      description: "Un plastron enchanté qui confère une résistance permanente à un type de dégât spécifique.",
      details: "Ce plastron d'apparence solide porte des gravures liées au type de dégât qu'il repousse. Son porteur ou sa porteuse bénéficie en permanence de la résistance à un type de dégât déterminé lors de la création de l'objet (acide, froid, feu, foudre, nécrotique, poison, psychique, radiant, ou tonnerre). Contrairement au sort Protection contre l'énergie, cet effet ne nécessite pas de concentration et est constant, ce qui en fait une protection très fiable."
    },
    { nom: "Armure de résistance (chemise de mailles)", type: "Armure", rarete: "Rare", lien: true, prix: "9 100 po", note: "based: protection from energy (plus 1 level, no concentration)",
      description: "Une chemise de mailles enchantée offrant une résistance permanente à un type d'énergie.",
      details: "Les anneaux de cette chemise de mailles sont gravés de minuscules runes protectrices invisibles à l'œil nu. Son porteur ou sa porteuse bénéficie d'une résistance permanente à un type de dégât spécifique sans nécessiter de concentration. Cette légère armure de résistance est particulièrement appréciée des personnages qui portent déjà une armure plus lourde par-dessus, ou qui ont besoin d'une protection discrète."
    },
    { nom: "Armure de résistance (cuir)", type: "Armure", rarete: "Rare", lien: true, prix: "9 020 po", note: "based: protection from energy (plus 1 level, no concentration)",
      description: "Une armure de cuir traitée avec des substances magiques qui la rendent résistante à un type d'énergie.",
      details: "Ce cuir souple a été traité avec des substances alchimiques et des enchantements spéciaux liés à un type d'énergie particulier. Des motifs ésotériques sont toolés dans le cuir, presque invisibles mais palpables au toucher. Son porteur ou sa porteuse bénéficie d'une résistance permanente au type de dégâts correspondant, idéale pour une protection légère et discrète."
    },
    { nom: "Armure de résistance (harnois)", type: "Armure", rarete: "Rare", lien: true, prix: "12 000 po", note: "based: protection from energy (plus 1 level, no concentration)",
      description: "Un harnois complet enchanté pour résister en permanence à un type de dégât particulier.",
      details: "Ce harnois lourd porte des inscriptions runiques liées à un élément ou type d'énergie spécifique, forgées directement dans le métal. La résistance au type de dégâts correspondant est permanente et ne nécessite aucune concentration. C'est l'une des armures de résistance les plus coûteuses de la gamme, mais aussi la plus protectrice dans l'ensemble — combinant la CA élevée d'un harnois à une résistance élémentaire."
    },
    { nom: "Broche de protection", type: "Armure", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: shield for immunity",
      description: "Une broche magique qui peut générer un éclair de protection contre un sort ou attaque.",
      details: "Cette broche ornementale cache un enchantement défensif puissant. Son porteur ou sa porteuse peut utiliser sa réaction pour activer la broche lorsqu'il ou elle est ciblé(e) par un sort de la magie des projectiles magiques : il ou elle bénéficie d'une immunité contre ce sort. En alternative, la broche peut être utilisée une fois par jour pour obtenir l'effet du sort Bouclier sans dépenser de slot de sort. Elle se recharge à l'aube."
    },
    { nom: "Armure à dégrafage rapide", type: "Armure", rarete: "Commun", lien: false, prix: "330 po", note: "add armor cost; based: cantrip power",
      description: "Une armure enchantée qui peut être enfilée ou retirée en un instant.",
      details: "Cette armure est équipée de fermoirs et de sangles magiques qui permettent de l'enfiler ou de la retirer en une seule action (au lieu des 5 ou 10 minutes habituelles pour une armure lourde). L'enchantement ajuste également les pièces d'armure à la morphologie de son porteur ou sa porteuse, assurant un ajustement parfait sans nécessiter de modifications. Idéale pour ceux qui doivent changer rapidement de tenue ou qui ont besoin de flexibilité dans leur équipement."
    },
    { nom: "Cape de la chauve-souris", type: "Armure", rarete: "Rare", lien: true, prix: "15 600 po", note: "based: enhance ability (plus 1 level, no concentration), fly (no change in level due to requirments), polymorph",
      description: "Une cape en cuir de chauve-souris qui confère vision dans le noir, capacité de vol et transformation.",
      details: "Cette cape sombre, taillée dans le cuir d'une grande chauve-souris, confère plusieurs capacités liées à ces créatures nocturnes. Son porteur ou sa porteuse peut se suspendre à l'envers à une surface (tenant avec les pieds), bénéficie d'une vision dans le noir de 18 mètres. En utilisant une action, il ou elle peut se transformer en chauve-souris (conservant son Intelligence, Sagesse et Charisme) ou déployer la cape pour voler à 9 m/round. La transformation dure jusqu'à l'aube ou jusqu'à annulation."
    },
    { nom: "Cape de la raie manta", type: "Armure", rarete: "Peu commun", lien: false, prix: "9 900 po", note: "based: water breathing & alter self (plus 1 level, no concentration)",
      description: "Une cape aquatique qui transforme son porteur en nageur aussi gracieux qu'une raie manta.",
      details: "Fabriquée à partir de la peau d'une raie manta, cette cape confère des aptitudes aquatiques remarquables. Son porteur ou sa porteuse peut respirer sous l'eau, nager à une vitesse de 18 mètres, et peut se déplacer à la surface de l'eau sans couler. Les bords de la cape s'élargissent dans l'eau, formant des ailes qui lui permettent de se propulser avec une agilité remarquable. Ces capacités fonctionnent de façon permanente sans nécessiter de concentration."
    },
    { nom: "Armure démoniaque", type: "Armure", rarete: "Très rare", lien: true, prix: "13 200 po", note: "nan",
      description: "Un harnois terrifiable orné de motifs infernaux qui confère des capacités démoniaques.",
      details: "Cette armure d'apparence terrifiante est ornée de têtes démoniaques, de griffes et d'inscriptions infernales. Elle confère un bonus de +1 à la CA et permet à son porteur ou sa porteuse d'utiliser Griffes de la forge — ses attaques à mains nues infligent des dégâts de perforant. Elle permet également de lancer Porte de feu une fois par jour sans slot de sort. Cependant, une malédiction latente peut affecter progressivement l'alignement et le comportement de son porteur."
    },
    { nom: "Cotte de plaques draconiques", type: "Armure", rarete: "Très rare", lien: true, prix: "21 900 po", note: "based: locate creature, protection from energy (plus 1 level, no concentration)",
      description: "Une armure forgée à partir d'écailles de dragon qui confère des résistances et des capacités draconiques.",
      details: "Forgée à partir d'écailles d'un dragon spécifique, cette cotte de plaques confère la résistance au type de dégâts lié à ce dragon. Son porteur ou sa porteuse peut également utiliser une action une fois par jour pour localiser le dragon le plus proche. L'armure est en harmonie avec les dragons de la même espèce que celle dont elle est issue — ils peuvent reconnaître qui la porte et montrer une certaine déférence ou hostilité accrue selon leur personnalité."
    },
    { nom: "Harnois nain", type: "Armure", rarete: "Très rare", lien: false, prix: "18 810 po", note: "nan",
      description: "Un chef-d'œuvre de l'artisanat nain offrant une protection maximale et une résistance aux effets de déplacement.",
      details: "Forgé selon les techniques ancestrales de la forge naine, ce harnois est l'un des équipements défensifs les plus impressionnants qui soit. En plus d'une CA élevée, son porteur ou sa porteuse ne peut pas être déplacé(e) contre sa volonté et bénéficie d'un avantage aux jets de sauvegarde contre les sorts de paralysie et de pétrification. Il ignore les exigences de Force habituelles et, si son porteur est un nain, il peut dormir dans cette armure sans subir d'épuisement."
    },
    { nom: "Armure ensorcelée (niv. 1)", type: "Armure", rarete: "Peu commun", lien: true, prix: "1 215 po", note: "Add armor cost for total",
      description: "Une armure imbibée d'un sort de niveau 1, libérable au combat.",
      details: "Cette armure a été enchantée pour stocker un sort de niveau 1 spécifique, choisi lors de sa création. Son porteur ou sa porteuse peut libérer ce sort en dépensant une action, sans utiliser de slot de sort ni composantes. Le sort utilise les caractéristiques de lancement du créateur ou de la créatrice de l'armure. Idéale pour les guerriers souhaitant accéder à quelques sorts sans être lanceurs de sorts."
    },
    { nom: "Armure ensorcelée (niv. 2)", type: "Armure", rarete: "Rare", lien: true, prix: "3 240 po", note: "Add armor cost for total",
      description: "Une armure stockant un sort de niveau 2, offrant un avantage tactique en combat.",
      details: "Cette armure renferme un sort de niveau 2 intégré lors de sa fabrication. Son porteur ou sa porteuse peut l'activer à tout moment en utilisant une action, libérant le sort sans dépenser de ressource magique. Les sorts de niveau 2 disponibles peuvent inclure Invisibilité, Pas brumeux, Flamme de Prométhée, ou d'autres effets utiles selon les besoins du commanditaire de l'armure."
    },
    { nom: "Armure ensorcelée (niv. 3)", type: "Armure", rarete: "Rare", lien: true, prix: "5 400 po", note: "Add armor cost for total",
      description: "Une armure imprégnée d'un sort de niveau 3 prêt à être libéré.",
      details: "Cette armure est forgée avec un sort de niveau 3 intégré dans son métal même. Les effets disponibles à ce niveau sont considérables : Boule de feu, Contresort, Lumière du jour, Dissipation de la magie, et bien d'autres. Son porteur ou sa porteuse peut activer ce sort en une action, sans contrainte magique. Une fois utilisé, l'armure perd temporairement son enchantement jusqu'à ce qu'elle soit rechargée par un lanceur de sorts compétent."
    },
    { nom: "Armure ensorcelée (niv. 4)", type: "Armure", rarete: "Très rare", lien: true, prix: "12 150 po", note: "Add armor cost for total",
      description: "Une armure renfermant un sort de niveau 4 d'une puissance remarquable.",
      details: "Rares et précieuses, les armures ensorcelées de niveau 4 contiennent des sorts comme Bouclier de feu, Bannissement, Porte dimensionnelle ou Protection contre l'énergie. L'enchantement est tissé dans les runes qui ornent l'armure, pulsant d'une légère lueur colorée liée au type de sort stocké. Son porteur ou sa porteuse dispose d'un sort de niveau 4 utilisable une fois, libéré en une action."
    },
    { nom: "Armure ensorcelée (niv. 5)", type: "Armure", rarete: "Très rare", lien: true, prix: "17 010 po", note: "Add armor cost for total",
      description: "Une armure dotée d'un sort de niveau 5, outil défensif ou offensif de haute puissance.",
      details: "Cette armure d'exception contient l'énergie d'un sort de niveau 5, parmi les plus puissants sorts accessibles par magie imbibée. Des sorts comme Cône de froid, Domination de personne, Modification de mémoire ou Téléportation peuvent y être stockés. L'armure rayonne d'une aura magique perceptible sous Détection de la magie. Une ressource précieuse utilisable au moment le plus critique d'un combat."
    },
    { nom: "Armure ensorcelée (niv. 6)", type: "Armure", rarete: "Légendaire", lien: true, prix: "37 800 po", note: "Add armor cost for total",
      description: "Une armure légendaire qui renferme la puissance destructrice d'un sort de niveau 6.",
      details: "Cette armure appartient à la catégorie des objets légendaires. Elle renferme un sort de niveau 6 d'une puissance dévastatrice — Désintégration, Guérison, Regard pétrifiant, Contingence, ou d'autres sorts de ce rang. Les runes qui l'ornent brillent d'un éclat constant, témoignant de l'énergie considérable qui y est comprimée. Son porteur ou sa porteuse dispose d'une ressource magique extraordinaire, utilisable une seule fois avant recharge."
    },
    { nom: "Armure ensorcelée (niv. 7)", type: "Armure", rarete: "Légendaire", lien: true, prix: "48 600 po", note: "Add armor cost for total",
      description: "Une armure légendaire imprégnée d'un sort de niveau 7, réservée aux héros de légende.",
      details: "Objet d'une rareté extrême, cette armure légendaire contient un sort de niveau 7 comme Régénération, Résurrection, Mot de pouvoir aveuglant, Cage de force ou Tempête de feu. Sa surface est parcourue de runes lumineuses qui pulsent d'une magie ancienne. Forger une telle armure nécessite des décennies de maîtrise et des ressources colossales. Elle est réservée aux plus grands héros ou héroïnes des royaumes."
    },
    { nom: "Armure ensorcelée (niv. 8)", type: "Armure", rarete: "Légendaire", lien: true, prix: "60 750 po", note: "Add armor cost for total",
      description: "Une armure légendaire au summum de l'enchantement, capable de libérer un sort de niveau 8.",
      details: "Cette armure représente le pinnacle de l'art du forgeron-mage. Elle contient un sort de niveau 8 comme Esprit dominator, Puissance de la nature, Sunburst, ou Mot de pouvoir étourdissant. Son aura magique est visible à l'œil nu même sans Détection de la magie — une légère lumière irradie constamment de ses runes. Posséder une telle armure est un symbole de statut et de puissance parmi les plus puissants aventuriers."
    },
    { nom: "Armure ensorcelée (tour de magie)", type: "Armure", rarete: "Peu commun", lien: true, prix: "405 po", note: "Add armor cost for total",
      description: "Une armure enchantée pour lancer un tour de magie à volonté.",
      details: "Cette armure contient un tour de magie spécifique, utilisable à volonté sans coût magique. Son porteur ou sa porteuse peut lancer ce tour de magie en dépensant une action, aussi souvent qu'il ou elle le souhaite. Les tours de magie disponibles incluent Lumière, Prestidigitation, Coup des ténèbres, ou d'autres cantrips utiles. Bien que modeste, cet enchantement permet à un guerrier non-mage d'accéder à quelques effets magiques pratiques."
    },
    { nom: "Armure de cuir ensorcelée (tour de magie)", type: "Armure", rarete: "Peu commun", lien: true, prix: "420 po", note: "Add armor cost for total",
      description: "Une légère armure de cuir permettant de lancer un tour de magie à volonté.",
      details: "Cette armure de cuir souple est traitée avec des substances alchimiques et des runes runiques qui y intègrent un tour de magie. Son porteur ou sa porteuse peut l'utiliser à volonté. La légèreté du cuir combinée à l'utilité d'un cantrip en fait un choix populaire parmi les roublards et les rangers qui souhaitent une touche de magie sans sacrifier leur mobilité."
    },
    { nom: "Harnois ensorcelé (niv. 8)", type: "Armure", rarete: "Légendaire", lien: true, prix: "68 250 po", note: "Add armor cost for total",
      description: "Le summum de l'armure légendaire : un harnois complet renfermant un sort de niveau 8.",
      details: "La combinaison de la protection maximale d'un harnois complet et d'un sort de niveau 8 fait de cet objet l'une des pièces d'équipement les plus convoitées des plans. Sa CA élevée et son sort de niveau 8 disponible en font un équipement digne des champions légendaires. Des runes de la taille d'un poing ornent ses pièces, rayonnant d'une lumière colorée selon le sort qu'elles renferment."
    },
    { nom: "Armure du marin", type: "Armure", rarete: "Peu commun", lien: false, prix: "2 970 po", note: "based: alter self",
      description: "Une armure enchantée pour les aventuriers marins, offrant des capacités aquatiques.",
      details: "Fabriquée pour les aventuriers qui passent du temps en mer ou près de l'eau, cette armure bénéficie d'un enchantement inspiré du sort Altération personnelle. Son porteur ou sa porteuse peut respirer sous l'eau et nage à une vitesse égale à sa vitesse de marche. L'armure résiste également à la corrosion de l'eau salée et ne rouille pas. Un équipement idéal pour les pirates, les marins aventuriers et tous ceux qui explorent les fonds marins."
    },
    { nom: "Plastron en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "2 310 po", note: "nan",
      description: "Un plastron en mithral, léger et silencieux, supprimant les désavantages habituels d'une armure lourde.",
      details: "Ce plastron forgé en mithral combine la protection d'une armure solide avec la légèreté caractéristique du métal elfique. Il n'impose aucun désavantage aux jets de Discrétion et ne requiert pas de prérequis de Force, contrairement aux armures de plates ordinaires. Sa surface argentée aux reflets bleutés est à la fois esthétique et fonctionnelle. Les aventuriers qui ont besoin d'une protection solide sans sacrifier leur mobilité le prisent particulièrement."
    },
    { nom: "Cotte de mailles en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "1 774 po", note: "nan",
      description: "Une cotte de mailles en mithral, aussi légère que du tissu épais mais d'une résistance extraordinaire.",
      details: "Les anneaux de mithral qui composent cette cotte sont d'une finesse et d'une pureté exceptionnelles. Elle offre une protection remarquable sans aucun des inconvénients habituels : pas de désavantage à la Discrétion, pas de prérequis de Force. Sa légèreté est telle que son porteur ou sa porteuse oublie parfois qu'il ou elle porte une armure. Elle est particulièrement appréciée des elfes et de tous ceux qui valorisent à la fois discrétion et protection."
    },
    { nom: "Chemise de mailles en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "1 733 po", note: "nan",
      description: "Une chemise de mailles en mithral d'une légèreté surprenante, portée aisément sous des vêtements.",
      details: "Si légère qu'elle peut être portée sous une tenue ordinaire sans que personne ne le remarque, cette chemise de mailles en mithral offre une protection discrète mais efficace. Les voyageurs prudents et les émissaires qui naviguent dans des cours royales dangereuses apprécient de pouvoir porter une protection sans en faire étalage. Elle n'impose aucun désavantage à la Discrétion et ne requiert aucun prérequis particulier."
    },
    { nom: "Demi-plate en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "2 888 po", note: "nan",
      description: "Une demi-plate en mithral alliant mobilité, légèreté et protection efficace.",
      details: "Cette demi-plate en mithral est forgée pour offrir le meilleur des deux mondes : la protection d'une armure semi-lourde et la légèreté du mithral. Elle n'impose aucun désavantage à la Discrétion et ne requiert pas de Force particulière. Sa surface lisse aux reflets d'argent bleuté permet un mouvement fluide et silencieux — remarquable pour une armure aussi protectrice. Idéale pour les paladins, les guerriers et tous ceux qui ont besoin d'être à la fois mobiles et bien protégés."
    },
    { nom: "Harnois en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "4 125 po", note: "nan",
      description: "Un harnois complet en mithral offrant une protection maximale sans les contraintes habituelles.",
      details: "Un harnois en mithral est un trésor inestimable. Il combine la CA maximale d'un harnois complet avec les propriétés magiques du mithral : aucun désavantage à la Discrétion, aucun prérequis de Force. Certains guerriers le comparent à porter des plumes tant il est léger — bien qu'un léger tintement métallique soit toujours perceptible lors des mouvements vifs. Sa valeur est principalement liée à la rareté du mithral et à la difficulté de le travailler."
    },
    { nom: "Cotte de plates en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "1 700 po", note: "nan",
      description: "Une cotte de plates en mithral légère et silencieuse, idéale pour les combattants mobiles.",
      details: "Cette cotte de plates forgée en mithral pur offre une protection solide tout en éliminant les inconvénients habituels d'une armure de plaques. Son porteur ou sa porteuse peut se déplacer silencieusement, sans prérequis de Force. La qualité du mithral garantit également une durabilité exceptionnelle — cette armure résiste à la corrosion, à la rouille et aux chocs beaucoup mieux que ses homologues en acier ordinaire."
    },
    { nom: "Cotte de plaques en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "1 733 po", note: "nan",
      description: "Une cotte de plaques en mithral combinant les avantages de la cotte de mailles et des plaques.",
      details: "Cette armure hybride tire le meilleur parti du mithral : la protection des plaques renforcées combinée à la légèreté caractéristique du métal elfique. Elle n'impose pas de désavantage à la Discrétion et ne requiert aucune Force minimale. Forgerons elfes et humains rivalisent de talent pour créer ces armures, dont chaque exemplaire est considéré comme une œuvre d'art autant qu'un équipement de combat."
    },
    { nom: "Broigne en mithral", type: "Armure", rarete: "Peu commun", lien: false, prix: "1 980 po", note: "nan",
      description: "Une broigne en mithral, armure légère et silencieuse qui allie discrétion et protection.",
      details: "La broigne est déjà une armure relativement légère, mais forgée en mithral, elle devient presque invisible à porter. Son porteur ou sa porteuse bénéficie d'une protection efficace sans aucun désavantage à la Discrétion et sans prérequis de Force. Sa surface de cuir traité renforcé d'anneaux de mithral lui confère une apparence modeste qui dissimule bien ses propriétés magiques — un atout pour ceux qui veulent passer inaperçus."
    },
    { nom: "Harnois d'éthéralité", type: "Armure", rarete: "Légendaire", lien: true, prix: "24 300 po", note: "based: etherealness (minus 1 level due to short duration)",
      description: "Un harnois légendaire capable de rendre son porteur temporairement éthéré et intangible.",
      details: "Ce harnois d'une facture exceptionnelle possède un enchantement rare et redoutable. En utilisant une action, son porteur ou sa porteuse peut entrer dans le Plan Éthéré pour une courte durée, devenant intangible et invisible pour la plupart des créatures du Plan Matériel. Cette capacité peut être utilisée pour traverser des murs solides, éviter des attaques, ou se repositionner tactiquement. La durée de l'état éthéré est limitée, et le retour est involontaire si le porteur est rendu inconscient."
    },
    { nom: "Anneau de protection mentale", type: "Armure", rarete: "Peu commun", lien: true, prix: "12 600 po", note: "based: mind blank (minus 2 levels for less abilities)",
      description: "Un anneau qui blinde l'esprit de son porteur contre les intrusions mentales et la divination.",
      details: "Cet anneau simple en apparence renferme une protection mentale remarquable. Son porteur ou sa porteuse est immunisé(e) à la lecture des pensées, à la divination et aux effets qui devineraient ses émotions ou sa localisation. Il est également protégé(e) contre les effets de charme et les attaques psychiques. Une protection précieuse pour les espions, les émissaires et tous ceux qui évoluent dans des environnements politiquement sensibles."
    },
    { nom: "Bouclier sentinelle", type: "Armure", rarete: "Peu commun", lien: false, prix: "2 970 po", note: "based: enhanced ability",
      description: "Un bouclier enchanté qui améliore la perception de son porteur, lui conférant un avantage en initiative.",
      details: "Ce bouclier porte gravé un œil stylisé sur sa face externe, symbole de vigilance. Son porteur ou sa porteuse bénéficie d'un avantage aux tests de Sagesse (Perception) et aux jets d'Initiative. En restant aux aguets, les porteurs de ce bouclier sont rarement pris par surprise — ils perçoivent les menaces avant même qu'elles se manifestent. Un équipement idéal pour les éclaireurs et les avant-gardes de groupe."
    },
    { nom: "Bouclier expressif", type: "Armure", rarete: "Commun", lien: false, prix: "341 po", note: "based: minor illusion",
      description: "Un bouclier magique dont la surface peut afficher des images ou des motifs au gré de son porteur.",
      details: "La surface de ce bouclier peut être modifiée par son porteur ou sa porteuse en utilisant une action bonus. Il peut afficher n'importe quel motif, image ou symbole imaginé par son propriétaire — un blason, un message, une image intimidante ou un portrait. Les images sont parfaitement réalistes mais clairement statiques. Populaire chez les nobles guerriers qui souhaitent afficher leurs armoiries en combat, et chez les excentriques qui y voient une façon de s'exprimer artistiquement."
    },
    { nom: "Bouclier d'attraction des projectiles", type: "Armure", rarete: "Rare", lien: true, prix: "6 000 po", note: "based: protection from energy",
      description: "Un bouclier maudit qui résiste aux projectiles tout en attirant les attaques à distance vers son porteur.",
      details: "Ce bouclier offre la résistance aux dégâts des armes à distance non magiques à son porteur ou sa porteuse. Cependant, une malédiction y est tapie : toute attaque à distance effectuée dans un rayon de 9 mètres est magiquement attirée vers lui ou elle si l'attaque rate sa cible initiale. Cette mécanique dual rend le bouclier à la fois utile et terriblement dangereux selon le contexte. Seul un sort de Délivrance des malédictions permet de s'en défaire volontairement."
    },
    { nom: "Bouclier du cavalier", type: "Armure", rarete: "Très rare", lien: true, prix: "15 518 po", note: "based: resilient sphere",
      description: "Un bouclier magique qui peut générer une sphère de force protégeant son porteur et sa monture.",
      details: "Ce large bouclier est conçu pour être utilisé à cheval. En dépensant une action bonus, son porteur ou sa porteuse peut générer une sphère de force translucide qui l'enveloppe lui ou elle et sa monture, fonctionnant comme la sphère résiliente du sort Sphère résiliente. La sphère protège des dégâts extérieurs mais emprisonne également son porteur à l'intérieur. Elle peut être maintenue un certain temps avant de disparaître. Idéal pour les chevaliers confrontés à des dangers massifs."
    },
    { nom: "Armure fumante", type: "Armure", rarete: "Commun", lien: false, prix: "330 po", note: "add armor to total; based: minor illusion",
      description: "Une armure qui dégage en permanence une fumée mystérieuse et intimidante.",
      details: "Cette armure émet un léger filet de fumée sombre en permanence, comme si elle sortait d'une forge ardente. L'effet est purement esthétique, produit par un tour de magie d'illusion mineure intégré. Si la fumée ne nuit pas à la vision du porteur ou de la porteuse, elle peut avoir un effet intimidant sur certains adversaires peu avertis. Elle est populaire dans les arènes de gladiateurs et chez les guerriers qui cherchent à impressionner avant même d'avoir frappé."
    },
    { nom: "Bouclier de protection magique", type: "Armure", rarete: "Très rare", lien: true, prix: "25 200 po", note: "based: circle of power (plus 1 level, no concentration)",
      description: "Un bouclier légendaire qui génère un cercle de pouvoir protégeant son porteur et ses alliés.",
      details: "Ce bouclier impressionnant est gravé de runes de protection complexes. En l'activant, son porteur ou sa porteuse génère une aura de puissance magique d'un rayon de 9 mètres. Les créatures amies dans cette zone bénéficient d'un avantage aux jets de sauvegarde contre les sorts et autres effets magiques. De plus, tout effet magique qui permettrait aux créatures amies un jet de sauvegarde pour n'encaisser que la moitié des dégâts leur permet d'en encaisser aucun en cas de réussite. L'aura dure sans nécessiter de concentration."
    },

    // ⚔️ ARME
    { nom: "Épée de puissance niveau 10", type: "Arme", rarete: "Légendaire", lien: true, prix: "114 050 po", note: "nan",
      description: "Une épée légendaire d'une puissance absolument redoutable, enchantée au plus haut niveau.",
      details: "Cette épée est le fruit de décennies de travail de forge et d'enchantement par les plus grands maîtres des arcanes. Son niveau d'enchantement exceptionnel lui confère des bonus massifs aux jets d'attaque et aux dégâts, ainsi que des capacités spéciales dévastatrices. Son aura magique est perceptible à plusieurs mètres, et les créatures sensibles à la magie peuvent la sentir arriver. Elle représente le pinnacle de ce qu'un artisan peut créer dans la tradition de l'épée enchantée."
    },
    { nom: "Munitions en adamantine", type: "Arme", rarete: "Peu commun", lien: false, prix: "4 950 po", note: "Add ammunition cost for a 'quiver' of them in Armor Cost column",
      description: "Des munitions forgées en adamantine qui ignorent les immunités des créatures non magiques.",
      details: "Ces munitions — flèches, carreaux ou billes — sont forgées dans l'adamantine pur. Leur pointe ou leur surface d'impact est taillée pour pénétrer les matériaux les plus durs. Ces munitions sont considérées comme magiques pour contourner les résistances et immunités. De plus, contre les objets et structures, elles infligent des dégâts maximaux — particulièrement utiles pour détruire des serrures, des barreaux ou des obstacles mécaniques."
    },
    { nom: "Flèches en adamantine (20)", type: "Arme", rarete: "Peu commun", lien: false, prix: "4 952 po", note: "Cost is for 1 quiver of 20 arrows",
      description: "Un carquois de vingt flèches en adamantine, efficaces contre toutes les armures et obstacles.",
      details: "Ces vingt flèches aux pointes en adamantine sont d'une précision et d'une pénétration remarquables. Contre les constructions et objets inanimés, elles infligent des dégâts maximaux. Considérées comme des armes magiques, elles contournent les résistances et immunités des créatures nécessitant des armes magiques pour être blessées. Leurs hampes sont taillées dans un bois dense qui supporte la pointe d'adamantine sans se briser à l'impact."
    },
    { nom: "Arme en adamantine", type: "Arme", rarete: "Peu commun", lien: false, prix: "5 445 po", note: "Add weapon cost in Armor Cost column, added cantrip for magic weapon property",
      description: "Une arme forgée en adamantine qui détruit les objets et ignore les immunités aux armes non magiques.",
      details: "Cette arme forgée en adamantine est à la fois un outil de combat redoutable et un instrument de destruction matérielle. Contre les objets non animés, elle inflige des dégâts maximaux à chaque coup. Elle est considérée comme une arme magique pour les besoins de contournement des résistances. Sa lame ou sa tête d'arme présente l'éclat sombre et bleuté caractéristique de l'adamantine, difficile à confondre avec un alliage ordinaire."
    },
    { nom: "Munitions de mise à mort", type: "Arme", rarete: "Très rare", lien: true, prix: "267 po", note: "nan",
      description: "Des munitions conçues pour terrasser instantanément les créatures d'un type spécifique.",
      details: "Ces munitions sont spécialement conçues pour tuer un type précis de créature (humanoïdes, dragons, morts-vivants, etc.). Lorsqu'elles touchent une créature de ce type, celle-ci doit réussir un jet de sauvegarde de Constitution (DD 17) ou tomber à 0 point de vie. Même en cas de réussite, la créature subit 6d10 dégâts perforants supplémentaires. Ces munitions sont consommées à l'utilisation, qu'elles touchent ou non leur cible."
    },
    { nom: "Munitions +2", type: "Arme", rarete: "Rare", lien: false, prix: "990 po", note: "nan",
      description: "Des munitions enchantées avec un bonus de +2, nettement plus précises et puissantes.",
      details: "Ces munitions — flèches, carreaux ou billes selon le cas — sont gravées de runes d'enchantement qui pulsent d'une légère luminescence. Elles confèrent un bonus de +2 aux jets d'attaque et de dégâts. Considérées comme des armes magiques, elles peuvent blesser les créatures résistantes aux armes ordinaires. Elles sont consommées après utilisation mais certains tireurs d'élite les récupèrent intactes après les combats."
    },
    { nom: "Munitions +3", type: "Arme", rarete: "Très rare", lien: false, prix: "2 772 po", note: "nan",
      description: "Des munitions dotées d'un puissant enchantement +3, capables d'atteindre les cibles les plus évasives.",
      details: "Ces munitions exceptionnelles portent un enchantement +3, le plus élevé de la gamme. Leur précision magique est telle qu'elles semblent guidées vers leur cible. Le bonus de +3 aux jets d'attaque et de dégâts en fait les munitions les plus efficaces disponibles. Elles illuminent légèrement en vol, laissant une traînée lumineuse trop fugace pour être vue facilement. Prisées des tireurs d'élite et des archers légendaires."
    },
    { nom: "Flèche de mise à mort", type: "Arme", rarete: "Très rare", lien: true, prix: "267 po", note: "nan",
      description: "Une flèche mortelle conçue pour tuer instantanément les créatures d'un type spécifique.",
      details: "Cette flèche individuelle est similaire aux munitions de mise à mort mais se présente sous forme d'une seule flèche soigneusement ouvragée. La pointe est traitée avec des substances alchimiques liées à la destruction d'un type précis de créature. Lorsqu'elle touche une créature de ce type, celle-ci doit réussir un jet de sauvegarde de Constitution (DD 17) ou mourir instantanément. En cas de réussite, la créature subit 6d10 dégâts perforants supplémentaires. Une seule utilisation."
    },
    { nom: "Hache des seigneurs nains", type: "Arme", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact nain légendaire, symbole du pouvoir ancestral des clans nains.",
      details: "Cette hache de bataille légendaire est l'un des objets les plus sacrés des cultures naines. Forgée dans les âges anciens par des maîtres forgerons divins, elle porte des runes d'un pouvoir absolu. Son porteur ou sa porteuse jouit d'une autorité divine sur les nains, bénéficie d'aptitudes de combat extraordinaires, et peut accomplir des prouesses réservées aux demi-dieux. Elle choisit parfois elle-même ses porteurs et peut refuser d'obéir à ceux qu'elle juge indignes de son héritage."
    },
    { nom: "Hache du berserker", type: "Arme", rarete: "Rare", lien: true, prix: "— po", note: "Cursed, not priced",
      description: "Une hache maudite qui déchaîne une rage meurtrière incontrôlable chez son porteur.",
      details: "Cette hache d'apparence robuste est imprégnée d'une malédiction ancienne qui éveille la rage berserker chez quiconque la porte. En combat, son porteur ou sa porteuse ressent une fureur croissante qui le ou la pousse à attaquer tout ce qui bouge — alliés compris. Les dégâts sont considérables grâce à la rage, mais le contrôle est perdu. Une fois l'attunement établi, la hache résiste à tout effort pour s'en séparer. Seul Délivrance des malédictions, lancé par un prêtre puissant, peut briser son emprise."
    },
    { nom: "Coupe de commandement des élémentaires d'eau", type: "Arme", rarete: "Rare", lien: false, prix: "7 392 po", note: "based: conjure elemental (plus 1 level, no cocentration)",
      description: "Une coupe mystique qui permet d'invoquer et de contrôler des élémentaires d'eau.",
      details: "Cette coupe taillée dans du cristal marin ou de la jade aquatique contient toujours une petite quantité d'eau, même si on la retourne. En la remplissant d'eau douce ou salée et en prononçant un mot de commande, son porteur ou sa porteuse peut invoquer un élémentaire d'eau qui obéit à ses ordres. L'élémentaire reste invoqué sans nécessiter de concentration, ce qui rend cet objet particulièrement efficace. Il peut être utilisé une fois par jour."
    },
    { nom: "Arc d'énergie", type: "Arme", rarete: "Très rare", lien: true, prix: "12 570 po", note: "based: misty step (plus 2 levels, increased range and affect others), spider climb",
      description: "Un arc magique qui permet à son tireur de se téléporter et d'escalader les surfaces.",
      details: "Cet arc exceptionnel ne se contente pas de tirer des flèches — il confère à son porteur ou sa porteuse des capacités de mobilité exceptionnelles. En utilisant une action bonus, il ou elle peut se téléporter à n'importe quel endroit visible dans un rayon de 18 mètres (comme Pas brumeux mais à plus grande portée). Il peut également escalader toutes les surfaces, même verticales, à sa vitesse normale. Ces capacités en font un outil idéal pour les archers qui doivent constamment se repositionner."
    },
    { nom: "Glaive ensorcelé (niv. 8)", type: "Arme", rarete: "Légendaire", lien: true, prix: "60 850 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Un glaive légendaire renfermant un sort de niveau 8, combinant puissance martiale et magique.",
      details: "Ce glaive impressionnant combine les propriétés d'une arme de corps à corps de qualité exceptionnelle avec un sort de niveau 8 stocké dans sa lame. Les runes qui ornent le fer rayonnent d'une lumière pulsée. En plus de ses capacités de combat, son porteur ou sa porteuse peut libérer le sort stocké en une action, déchaînant une magie dévastatrice sur ses ennemis. Une arme digne des plus grands champions des royaumes."
    },
    { nom: "Épée courte ensorcelée (tour de magie)", type: "Arme", rarete: "Peu commun", lien: true, prix: "420 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une épée courte enchantée permettant de lancer un tour de magie à volonté.",
      details: "Cette épée courte contient un tour de magie intégré dans sa lame fine. Son porteur ou sa porteuse peut l'activer à volonté, lançant le sort sans coût magique. Les tours de magie disponibles peuvent inclure Lumières dansantes, Illusion mineure, Prestidigitation ou d'autres cantrips utilitaires ou offensifs. La combinaison d'une épée courte efficace en mêlée et d'un cantrip à volonté en fait un outil polyvalent pour les roublards et les guerriers."
    },
    { nom: "Arme ensorcelée (niv. 1)", type: "Arme", rarete: "Peu commun", lien: true, prix: "1 215 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme enchantée pour libérer un sort de niveau 1 en combat.",
      details: "Cette arme renferme l'énergie d'un sort de niveau 1, sélectionné lors de sa création. Son porteur ou sa porteuse peut l'activer en une action pour libérer ce sort sans dépenser de ressource magique. Des sorts comme Armure du mage, Soin des blessures, Coup du tonnerre ou Marque du chasseur peuvent être intégrés selon les besoins. Un premier pas vers l'arsenal magique pour les guerriers non lanceurs de sorts."
    },
    { nom: "Arme ensorcelée (niv. 2)", type: "Arme", rarete: "Rare", lien: true, prix: "3 240 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme infusée d'un sort de niveau 2, offrant une option tactique supplémentaire.",
      details: "Ce niveau d'enchantement permet d'intégrer des sorts plus puissants comme Fracassement, Agrandissement/Rétrécissement, Pas brumeux, Immobiliser une personne ou Invisibilité. L'arme libère ce sort en une action, sans slot de sort. Les runes de la lame s'illuminent brièvement lors de l'activation. Un objet précieux pour les guerriers qui souhaitent accéder à quelques effets magiques décisifs en combat."
    },
    { nom: "Arme ensorcelée (niv. 3)", type: "Arme", rarete: "Rare", lien: true, prix: "5 400 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme renfermant un sort de niveau 3, équilibrant puissance martiale et magique.",
      details: "Les sorts de niveau 3 disponibles dans ces armes incluent Boule de feu, Contresort, Dissipation de la magie, Lumière du jour, Convocation d'animaux ou Retardement. L'arme peut libérer ce sort en combat, offrant une ressource tactique considérable. Les runes qui ornent la lame réagissent à la magie environnante, scintillant légèrement quand d'autres sorts sont lancés à proximité."
    },
    { nom: "Arme ensorcelée (niv. 4)", type: "Arme", rarete: "Très rare", lien: true, prix: "12 150 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme portant un sort de niveau 4, capable d'effets dévastateurs hors de la simple mêlée.",
      details: "Ces armes contiennent des sorts comme Bouclier de feu, Bannissement, Façonner la pierre, Porte dimensionnelle ou Tempête de neige. L'activation libère le sort en une action, sans contrainte. Le métal de la lame vibre légèrement, comme si quelque chose voulait s'en échapper. Une arme à ce niveau d'enchantement représente une valeur considérable, tant pour ses capacités martiales que magiques combinées."
    },
    { nom: "Arme ensorcelée (niv. 5)", type: "Arme", rarete: "Très rare", lien: true, prix: "17 010 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme rare dotée d'un sort de niveau 5, réservée aux héros de haut rang.",
      details: "À ce niveau d'enchantement, les sorts disponibles incluent Cône de froid, Domination de personne, Passage dans les arbres, Nuage mortel ou Téléportation. Ces sorts de niveau 5 peuvent changer radicalement le cours d'un combat ou d'une situation. L'arme rayonne d'une aura magique puissante, perceptible sans Détection de la magie. Elle est souvent une pièce maîtresse de l'arsenal d'un héros légendaire."
    },
    { nom: "Arme ensorcelée (niv. 6)", type: "Arme", rarete: "Légendaire", lien: true, prix: "37 800 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme légendaire infusée d'un sort de niveau 6, d'une puissance dévastatrice.",
      details: "Rares et convoitées, ces armes légendaires contiennent des sorts comme Désintégration, Contingence, Éclair de soleil, Guérison ou Blocage des chaînes. L'activation de ce sort libère une énergie colossale. La lame de l'arme porte des runes qui brillent en permanence d'une lumière colorée liée à l'essence du sort qu'elle renferme. Seuls les plus grands artisans-mages peuvent créer de tels objets."
    },
    { nom: "Arme ensorcelée (niv. 7)", type: "Arme", rarete: "Légendaire", lien: true, prix: "48 600 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme légendaire au niveau d'enchantement quasi divin, libérant un sort de niveau 7.",
      details: "Ces armes exceptionnelles renferment des sorts de niveau 7 comme Tempête de feu, Mot de pouvoir aveuglant, Régénération, Cage de force ou Résurrection. L'énergie contenue est si puissante que l'arme dégage une chaleur ou un froid perceptible, et les objets sensibles à la magie peuvent réagir en sa présence. Chaque exemplaire est unique et représente des années de travail pour ses créateurs."
    },
    { nom: "Arme ensorcelée (niv. 8)", type: "Arme", rarete: "Légendaire", lien: true, prix: "60 750 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme au sommet de l'enchantement, libérant un sort de niveau 8 dévastateur.",
      details: "Ces armes légendaires représentent le maximum de puissance magique pouvant être comprimé dans une arme de main. Les sorts de niveau 8 qu'elles contiennent — Sunburst, Esprit dominator, Puissance de la nature, Tremblements de terre — peuvent dévaster des armées entières. L'arme elle-même est un chef-d'œuvre dont la création dépasse les capacités de la plupart des forgerons et mages de leur génération."
    },
    { nom: "Arme ensorcelée (tour de magie)", type: "Arme", rarete: "Peu commun", lien: true, prix: "405 po", note: "Add weapon cost (use Armor Cost column)",
      description: "Une arme permettant de lancer un tour de magie à volonté, sans ressource magique.",
      details: "Cette arme contient un tour de magie intégré utilisable à volonté. Son porteur ou sa porteuse peut activer le cantrip en une action, sans jamais épuiser de ressource. Les tours de magie offensifs comme Coup des ténèbres, Lame de tonnerre ou Empoisonnement peuvent en faire une arme particulièrement dangereuse entre les mains d'un guerrier. Les cantrips utilitaires offrent quant à eux une flexibilité quotidienne appréciable."
    },
    { nom: "Hache du bourreau", type: "Arme", rarete: "Très rare", lien: false, prix: "3 465 po", note: "nan",
      description: "Une hache à deux mains redoutable conçue pour infliger des blessures maximales.",
      details: "Cette lourde hache d'armes porte des entailles soigneusement calculées sur sa lame pour maximiser les lacérations. Son enchantement augmente la probabilité d'effets critiques lors des attaques. Dans les mains d'un bourgeois ou d'une bourreau expérimenté(e), elle peut raccourcir dramatiquement les interrogatoires. En combat, elle est réputée pour ses attaques particulièrement dévastatrices sur les créatures déjà affaiblies."
    },
    { nom: "Marteau du tonnerre", type: "Arme", rarete: "Légendaire", lien: false, prix: "72 545 po", note: "based: power word stun, additional 1260 gp for extra boost to STR",
      description: "Un marteau légendaire qui déchaîne la puissance du tonnerre à chaque frappe.",
      details: "Ce marteau de guerre massif est imprégné d'énergie du tonnerre. Chaque coup résonne comme un coup de foudre et peut étourdir les adversaires. Lorsqu'il est activé, son porteur ou sa porteuse peut prononcer un mot de pouvoir qui étourdit une créature visible dans un rayon de 9 mètres, similaire au sort Mot de pouvoir étourdissant. De plus, l'arme confère un boost à la Force de son porteur, en faisant une arme réservée aux plus puissants guerriers des royaumes."
    },
    { nom: "Javelot de foudre", type: "Arme", rarete: "Peu commun", lien: false, prix: "1 683 po", note: "based: lightning bolt (minus 1 level) and permanent cantrip for magic weapon property",
      description: "Un javelot enchanté qui déchaîne un éclair dévastateur lorsqu'il frappe sa cible.",
      details: "Ce javelot à la pointe argentée vibre légèrement d'énergie électrique. Quand il frappe une cible (ou une surface), il libère un éclair de foudre de 18 mètres dans une direction choisie par son lanceur ou sa lanceuse, infligeant 4d6 dégâts de foudre (jet de sauvegarde de Dextérité DD 13 pour la moitié). Après l'impact, le javelot retourne magiquement à la main de son lanceur. Il peut être utilisé deux fois par jour, se rechargeant à l'aube."
    },
    { nom: "Lame de chance", type: "Arme", rarete: "Légendaire", lien: true, prix: "37 750 po", note: "based: x3 wishes & enhance ability (plus 1 level, no concentration)",
      description: "Une lame légendaire qui porte la chance comme un bouclier et exauce des vœux en combat.",
      details: "Cette épée au métal scintillant semble vibrer d'un destin particulier. Son porteur ou sa porteuse bénéficie en permanence d'une chance remarquable — avantage à tous les jets de sauvegarde, capacité d'annuler des effets défavorables. De plus, la lame dispose de trois utilisations d'un effet similaire au sort Vœu, à utiliser avec sagesse car les vœux mal formulés peuvent avoir des conséquences imprévues. La lame disparaît une fois les trois vœux épuisés."
    },
    { nom: "Masse de disruption", type: "Arme", rarete: "Rare", lien: true, prix: "1 880 po", note: "cantrip magic weapon and light",
      description: "Une masse sacrée qui brûle les morts-vivants d'une lumière divine et peut les désintégrer.",
      details: "Cette masse sacrée est consacrée spécifiquement à la destruction des morts-vivants. Lorsqu'elle touche un mort-vivant, ce dernier doit réussir un jet de sauvegarde de Constitution (DD 15) ou une réaction se produit : si ses points de vie descendent en dessous de 25 après la frappe, il est détruit instantanément. La masse illumine magiquement la zone (lumière vive sur 6 mètres) et est considérée comme une arme magique. Elle dégage une légère chaleur et une lumière blanche en présence de morts-vivants."
    },
    { nom: "Masse de frappe sacrée", type: "Arme", rarete: "Rare", lien: false, prix: "8 140 po", note: "misc: halved cost of +3 weapon that deals 14",
      description: "Une masse bénie qui inflige des dégâts radiants supplementaires aux créatures maléfiques.",
      details: "Cette masse de guerre est consacrée par un rituel religieux puissant. En plus de ses dégâts physiques normaux, elle inflige 2d8 dégâts radiants supplémentaires aux fiélons et aux morts-vivants. Sa tête d'arme brillent d'un éclat doré en présence de ces créatures. Elle est considérée comme une arme magique et est particulièrement prisée des clercs, des paladins et de tous les champions divins qui combattent les forces du mal."
    },
    { nom: "Masse de terreur", type: "Arme", rarete: "Rare", lien: true, prix: "4 200 po", note: "based: fear & cantrip for magic weapon",
      description: "Une masse maudite qui sème la terreur panique chez les ennemis touchés.",
      details: "Cette masse sombre porte des gravures de visages torturés qui semblent crier en silence. En utilisant une action bonus lors d'un hit, son porteur ou sa porteuse peut activer l'enchantement de terreur : la cible doit réussir un jet de sauvegarde de Sagesse (DD 15) ou être effrayée pendant 1 minute. Une créature effrayée doit fuir son porteur ou sa porteuse lors de son tour. Elle peut retenter ce jet à la fin de chacun de ses tours. L'enchantement peut être utilisé 3 fois par jour."
    },
    { nom: "Faucille de lune +1", type: "Arme", rarete: "Peu commun", lien: true, prix: "4 815 po", note: "Spell Save DC = AC bonus, treat extra d4 healing as unlimited healing word, misc cost includes focus & spell attack bonus",
      description: "Une faucille bénie par la lune qui soigne son porteur et améliore ses sorts divins.",
      details: "Cette faucille en métal argenté est ornée de croissants de lune et d'inscriptions lunaires. Elle confère un bonus de +1 aux jets d'attaque et de dégâts et améliore les capacités druidiques de son porteur ou sa porteuse. Lorsqu'elle touche une cible, elle libère une énergie lunaire : son porteur ou sa porteuse récupère 1d4 points de vie. Le bonus de DD de sauvegarde et d'attaque aux sorts s'applique également. Une arme particulièrement prisée des druides lunaires et des gardiens des forêts."
    },
    { nom: "Faucille de lune +2", type: "Arme", rarete: "Rare", lien: true, prix: "15 620 po", note: "Spell Save DC = AC bonus, treat extra d4 healing as unlimited healing word, misc cost includes focus & spell attack bonus",
      description: "Une faucille lunaire améliorée, plus puissante dans ses effets de soin et ses bonus de sorts.",
      details: "Version supérieure de la faucille de lune, cet objet confère un bonus de +2 aux jets d'attaque et de dégâts. Son énergie lunaire est plus intense : son porteur ou sa porteuse récupère 1d4 points de vie à chaque touche. Le bonus au DD des sorts et aux jets d'attaque de sorts est également de +2. La lame scintille d'un argenté lumineux et son porteur ou sa porteuse peut sentir la puissance de la lune affluer en lui ou elle quand il ou elle la tient."
    },
    { nom: "Faucille de lune +3", type: "Arme", rarete: "Très rare", lien: true, prix: "44 130 po", note: "Spell Save DC = AC bonus, treat extra d4 healing as unlimited healing word, misc cost includes focus & spell attack bonus",
      description: "La faucille lunaire la plus puissante, symbole de l'harmonie entre combat et magie druidique.",
      details: "Cette faucille légendaire est un chef-d'œuvre de la forge druidique. Elle confère un bonus de +3 aux jets d'attaque et de dégâts, ainsi qu'aux jets d'attaque de sorts et au DD des sorts. À chaque touche, son porteur ou sa porteuse récupère 1d4 points de vie. La lame brille d'une lumière lunaire brillante, éclairant une zone autour de son porteur et impressionnant les ennemis par sa puissance évidente. Elle amplifie également les sorts de nature de son porteur."
    },
    { nom: "Épée touchée par la lune", type: "Arme", rarete: "Commun", lien: false, prix: "660 po", note: "based: light",
      description: "Une épée enchantée qui émet une douce lumière lunaire argentée sur commande.",
      details: "Cette épée possède un enchantement simple mais élégant : sur commande, sa lame émet une lumière douce argentée, identique à celle de la lune. Cette lumière vive éclaire sur 6 mètres et une lumière tamisée sur 6 mètres supplémentaires. L'effet peut être activé et désactivé à volonté. L'enchantement est utilitaire, mais il crée également une ambiance mystérieuse et peut servir à identifier l'arme lors des contes de barde. Populaire chez les chevaliers à l'esthétique soignée."
    },
    { nom: "Lame de lune", type: "Arme", rarete: "Légendaire", lien: true, prix: "— po", note: "Not priced, more like an Artifact and it chooses its wielder",
      description: "Une arme artefact d'origine divine liée à la lune, qui choisit elle-même son porteur.",
      details: "La Lame de lune est plus qu'une arme : c'est une entité dotée de conscience et de volonté. Elle choisit ses porteurs en fonction de critères mystérieux liés aux mystères lunaires et à la défense de la nature. Elle peut refuser d'obéir à quelqu'un qu'elle juge indigne. Entre les mains de son élu ou de son élue, elle confère des pouvoirs draconiques lunaires extraordinaires : résistances, capacités de transformation, sorts puissants et bonus de combat considérables. Elle est associée aux protectrices de la lune dans les mythologies elfiques."
    },
    { nom: "Arc du serment", type: "Arme", rarete: "Très rare", lien: true, prix: "6 471 po", note: "based: invisibility (for constant advantage)",
      description: "Un arc lié par un serment magique qui permet à son porteur de frapper depuis l'invisibilité.",
      details: "Cet arc de bois pâle est marqué de runes de serment — une promesse magique de mort silencieuse. Son porteur ou sa porteuse peut attaquer depuis une position invisible, l'arc occultant sa présence momentanément lors du tir. Il bénéficie d'un avantage aux jets d'attaque en raison de cet effet de dissimulation magique. De plus, les cibles touchées ont du mal à localiser leur attaquant, sauf si elles réussissent un test de Perception difficile."
    },
    { nom: "Jeton-plume de Quaal (fouet)", type: "Arme", rarete: "Rare", lien: false, prix: "660 po", note: "based: spiritual weapon (plus 1 level)",
      description: "Une plume enchantée qui se transforme en fouet spirituel animé pour attaquer les ennemis.",
      details: "Ce jeton prend la forme d'une plume légèrement luminescente. Lorsqu'il est activé (action), il se transforme en un fouet spectral animé qui attaque les ennemis de façon autonome pendant 1 minute. Ce fouet utilise les caractéristiques de son activateur pour attaquer et inflige des dégâts de force. Il peut être déplacé jusqu'à 6 mètres par round via une action bonus. Une fois le jeton utilisé, la plume disparaît."
    },
    { nom: "Bâton de l'acrobate", type: "Arme", rarete: "Très rare", lien: true, prix: "12 420 po", note: "based: light, enhance ability (minus 1 level due to limited, plus 1 level - no concentration), shield (3 charges)",
      description: "Un bâton d'acrobate enchanté qui améliore l'équilibre, la mobilité et offre une protection défensive.",
      details: "Ce bâton léger en bois de frêne poli est la marque de fabrique des acrobates-aventuriers. Il confère un avantage aux tests d'Athlétisme et d'Acrobaties, et permet à son porteur ou sa porteuse de se déplacer à travers l'espace des créatures hostiles sans provoquer d'attaques d'opportunité. De plus, il possède 3 charges de Bouclier, utilisables en réaction. L'extrémité du bâton s'illumine sur commande, servant également de torche. Il se recharge de 1d3 charges à l'aube."
    },
    { nom: "Cimeterre de rapidité", type: "Arme", rarete: "Très rare", lien: true, prix: "9 900 po", note: "based: haste (minus 1 level)",
      description: "Un cimeterre enchanté qui permet à son porteur d'attaquer une fois supplémentaire par round.",
      details: "Cette lame courbe finement travaillée semble trembler d'impatience entre les mains de son porteur ou sa porteuse. Elle lui permet d'effectuer une attaque supplémentaire en action bonus à chaque round, en plus de ses attaques normales. Cette capacité est permanente tant que l'arme est tenue, sans nécessiter d'activation ni de dépense de ressources. Dans les mains d'un guerrier expérimenté(e), cet avantage peut faire toute la différence dans un combat acharnée."
    },
    { nom: "Épée courte +1", type: "Arme", rarete: "Peu commun", lien: false, prix: "842 po", note: "nan",
      description: "Une épée courte enchantée avec un bonus de +1, plus précise et plus tranchante que la normale.",
      details: "Cette épée courte à la lame légèrement luminescente confère un bonus de +1 aux jets d'attaque et de dégâts. Elle est considérée comme une arme magique, capable de blesser les créatures résistantes ou immunisées aux dégâts non magiques. Sa garde finement travaillée et son équilibre parfait en font une arme de qualité supérieure, appréciée des roublards et des guerriers rapides qui favorisent la vitesse à la puissance brute."
    },
    { nom: "Grande hache argentée", type: "Arme", rarete: "Commun", lien: false, prix: "269 po", note: "nan",
      description: "Une grande hache dont la lame est recouverte d'argent, efficace contre les lycanthropes.",
      details: "Cette grande hache à deux mains possède une lame traitée à l'argent pur selon des techniques alchimiques précises. Elle est particulièrement efficace contre les lycanthropes (loups-garous, rats-garous, etc.) et les diables, pour lesquels les armes en argent contournent leurs résistances aux dégâts. En dehors de ces situations, elle fonctionne comme une grande hache ordinaire. La lame argentée reflète la lumière d'une façon caractéristique et est facile à entretenir pour maintenir ses propriétés."
    },
    { nom: "Épée courte argentée", type: "Arme", rarete: "Commun", lien: false, prix: "129 po", note: "nan",
      description: "Une épée courte argentée, arme de choix contre les créatures vulnérables à l'argent.",
      details: "Cette épée courte à la lame recouverte d'argent pur est l'outil traditionnel des chasseurs de monstres. L'argent permet de contourner les résistances de certaines créatures comme les lycanthropes et les diables. Légère et maniable, elle s'utilise de la même façon qu'une épée courte ordinaire, mais son efficacité contre ces créatures spécifiques peut faire toute la différence lors d'une rencontre nocturne avec un loup-garou."
    },
    { nom: "Arme argentée", type: "Arme", rarete: "Commun", lien: false, prix: "488 po", note: "add cost of weapon, default damage based on d8 for weapon damage die, cantrip power for magic weapon",
      description: "Une arme ordinaire dont la surface a été recouverte d'argent pour contourner certaines résistances.",
      details: "N'importe quelle arme peut recevoir un traitement à l'argent : lames, masses, flèches et d'autres encore. L'argent permet de contourner les résistances aux dégâts non magiques de certaines créatures comme les lycanthropes, les diables et d'autres êtres liés à la malédiction de l'argent. Ce traitement rend l'arme légèrement moins durable à long terme qu'une arme d'acier pur, mais l'avantage en combat contre les créatures concernées compense largement cette faiblesse."
    },
    { nom: "Lame de soleil", type: "Arme", rarete: "Rare", lien: true, prix: "3 886 po", note: "nan",
      description: "Une épée lumineuse qui émet un rayon de lumière solaire et détruit les morts-vivants.",
      details: "Cette épée courte à la lame blanche comme l'ivoire peut être activée pour émettre une lumière brillante (lumière vive 6 m, tamisée 6 m supplémentaires). En attaque, elle peut projeter un rayon de lumière solaire en remplacement d'une attaque de mêlée normale : attaque à distance (portée 9 m), infligeant 4d6 dégâts radiants. Les morts-vivants et les créatures de ténèbres ont un désavantage aux attaques contre son porteur ou sa porteuse. Elle est l'arme de prédilection des chasseurs de vampires."
    },
    { nom: "Épée de riposte", type: "Arme", rarete: "Légendaire", lien: true, prix: "30 000 po", note: "based: haste",
      description: "Une épée légendaire qui permet une contre-attaque instantanée après avoir subi une attaque.",
      details: "Cette lame à la garde dorée semble animée d'une intelligence propre. Lorsque son porteur ou sa porteuse est touché(e) par une attaque de mêlée, il ou elle peut utiliser sa réaction pour effectuer une attaque de riposte contre l'attaquant. Cette contre-attaque ne consomme pas d'action. De plus, l'épée confère un bonus de +3 aux jets d'attaque et de dégâts, et son porteur ou sa porteuse peut bénéficier d'une accélération magique similaire au sort Hâte une fois par jour."
    },
    { nom: "Épée de Kas", type: "Arme", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact maudit lié au légendaire Kas le Sanguinaire, vampire lieutenant de Vecna.",
      details: "Cette épée longue légendaire est liée à Kas le Sanguinaire, autrefois lieutenant fidèle de Vecna avant de se retourner contre lui. Elle est imprégnée d'une soif de sang et d'une malédiction nécrotique. Son porteur ou sa porteuse bénéficie de capacités vampiriques, de bonus de combat considérables et de pouvoirs nécromantiques. Mais l'épée susurre constamment des encouragements à trahir et à tuer. Elle aspire à détruire Vecna — et tout ce qui se trouve sur son chemin."
    },
    { nom: "Épée de tranchant", type: "Arme", rarete: "Très rare", lien: true, prix: "2 785 po", note: "extra damage based on greatsword max minus avg",
      description: "Une épée longue d'une tranchant magique capable d'amputer les membres de ses victimes.",
      details: "Lorsqu'elle obtient un 20 naturel sur un jet d'attaque, cette épée tranche le membre d'une créature — en supposant qu'elle ait des membres et que la cible soit tuable. L'effet du membre tranché dépend du membre concerné (selon les règles du MJ). La lame est enchantée pour maintenir un tranchant absolu, ne nécessitant jamais d'être affilée et traversant même les matériaux les plus durs avec une facilité déconcertante."
    },
    { nom: "Épée de vengeance", type: "Arme", rarete: "Peu commun", lien: true, prix: "750 po", note: "Cursed, not priced",
      description: "Une épée maudite qui consume son porteur dans une rage vengeresse incontrôlable.",
      details: "À première vue, cette épée semble une arme ordinaire de qualité. Mais une malédiction y sommeille : son porteur ou sa porteuse devient obsédé(e) par la vengeance. Il ou elle a un désavantage à l'utilisation de tout objet magique autre que cette épée et ne peut pas changer son comportement en état de rage. Le porteur doit attaquer la créature qui l'a le plus récemment blessé si possible. Seul un sort de Délivrance des malédictions permet de se défaire de cette épée traîtresse."
    },
    { nom: "Épée de blessure", type: "Arme", rarete: "Rare", lien: true, prix: "1 715 po", note: "treat bleeding comparable to poison; misc: difficult healing",
      description: "Une épée qui inflige des blessures qui saignent, difficiles à guérir naturellement.",
      details: "Lorsque cette épée blesse une créature (dégâts de perforant ou tranchant), la blessure continue de saigner. Au début de son tour, la créature blessée perd 1d4 points de vie supplémentaires pour chaque blessure active. Les effets se cumulent. Chaque blessure peut être refermée en dépensant une action et en réussissant un test de Médecine (DD 12), ou par magie de soin. Les créatures soignées par des sorts récupèrent des PV normalement mais la blessure saigne toujours jusqu'à être refermée."
    },
    { nom: "Grande massue tonnante", type: "Arme", rarete: "Très rare", lien: true, prix: "42 257 po", note: "based: earthquake (minus 1 level due to 1 round duration)",
      description: "Une massue légendaire dont les coups provoquent des tremblements de terre localisés.",
      details: "Lorsque cette massue géante frappe le sol ou une surface dure, elle génère une onde de choc comparable à un tremblement de terre concentré dans un rayon de 9 mètres. Les créatures dans cette zone doivent réussir un jet de sauvegarde de Dextérité (DD 17) ou être renversées et subir des dégâts de tonnerre massifs. Les constructions et terrains dans la zone sont fracturés et déstabilisés. Cette capacité est utilisable une fois par jour, mais chaque frappe normale de la massue inflige 2d8 dégâts de tonnerre supplémentaires."
    },
    { nom: "Trident de commandement des poissons", type: "Arme", rarete: "Peu commun", lien: true, prix: "4 050 po", note: "based: dominate beast",
      description: "Un trident magique qui permet de contrôler les créatures aquatiques.",
      details: "Ce trident orné de motifs marins et de corail permet à son porteur ou sa porteuse de commander les bêtes aquatiques. En utilisant une action, il peut cibler une créature aquatique dans un rayon de 18 mètres. Celle-ci doit réussir un jet de sauvegarde de Sagesse (DD 15) ou être dominée, obéissant aux ordres de son porteur ou sa porteuse comme avec le sort Domination des bêtes. Cette capacité est utilisable 3 fois par jour. Un outil précieux pour explorer les profondeurs marines."
    },
    { nom: "Flèche incassable", type: "Arme", rarete: "Commun", lien: false, prix: "330 po", note: "based: mending",
      description: "Une flèche enchantée qui se répare automatiquement et peut être réutilisée indéfiniment.",
      details: "Cette flèche est enchantée avec un sort de Réparation permanent. Elle ne peut pas être brisée : si elle se fracasse à l'impact, ses morceaux se reassemblent automatiquement en quelques secondes. Récupérable après chaque tir (elle revient toujours intacte), elle représente un investissement judicieux sur le long terme pour tout archer. Sa pointe reste toujours acérée et sa hampe toujours droite, quelle que soit la violence de l'impact subi."
    },
    { nom: "Arme vicieuse", type: "Arme", rarete: "Rare", lien: false, prix: "1 760 po", note: "cantrip for magic weapon, add cost for weapon",
      description: "Une arme cruelle dont les coups critiques infligent des dégâts supplémentaires brutaux.",
      details: "Cette arme semble ordinaire, mais des runes microscopiques gravées sur son arête lui donnent une cruauté particulière. Lorsque son porteur ou sa porteuse obtient un 20 naturel sur un jet d'attaque, l'arme inflige 7 dégâts supplémentaires du même type. L'arme est considérée comme magique. La nature vicieuse de cet objet est perceptible par les créatures sensibles à la magie — il dégage une légère aura de malveillance."
    },
    { nom: "Épée vorpale", type: "Arme", rarete: "Légendaire", lien: true, prix: "51 855 po", note: "based: protection from energy (plus 2 levels, no concentration, ignore resist)",
      description: "La légendaire lame tranchante qui peut décapiter instantanément n'importe quelle créature.",
      details: "L'Épée Vorpale est l'une des armes les plus redoutées des royaumes. Sa lame ignore toutes les résistances et immunités aux dégâts tranchants. Sur un jet de 20 naturel, si la cible a une tête, la lame décapite la créature instantanément — quelle que soit ses points de vie restants. Si la créature peut survivre sans tête, elle subit à la place 6d8 dégâts tranchants supplémentaires. Le mot vorpale résonne dans les légendes depuis des siècles comme synonyme de mort certaine."
    },
    { nom: "Munitions assommantes", type: "Arme", rarete: "Commun", lien: false, prix: "33 po", note: "nan",
      description: "Des munitions enchantées pour assommer les cibles plutôt que de les tuer.",
      details: "Ces munitions spéciales — généralement des billes de fronde ou des carreaux arrondis — sont enchantées pour assommer plutôt que blesser. Quand elles touchent une créature, les dégâts infligés sont des dégâts contondants et la créature doit réussir un jet de sauvegarde de Constitution (DD 10 + dégâts infligés) ou tomber inconsciente pendant 1 minute. Prisées des chasseurs de primes et de ceux qui ont besoin de capturer des cibles vivantes."
    },
    { nom: "Baguette d'éclairs", type: "Arme", rarete: "Rare", lien: true, prix: "6 000 po", note: "based: lightning bolts x7",
      description: "Une baguette qui peut déchaîner de puissants éclairs dévastateurs sur les ennemis.",
      details: "Cette baguette en bois de frêne carbonisé à l'extrémité contient 7 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Éclair (3d10 dégâts de foudre, JS Dextérité DD 15 pour la moitié). Des charges supplémentaires permettent de lancer le sort à un niveau supérieur. La baguette récupère 1d6 + 1 charges à l'aube. Si la dernière charge est utilisée lors d'un 1, la baguette explose en une ultime décharge électrique avant de se désintégrer."
    },
    { nom: "Arme +3", type: "Arme", rarete: "Très rare", lien: false, prix: "9 900 po", note: "add cost of weapon",
      description: "Une arme exceptionnellement enchantée avec un bonus de +3, la rendant redoutable en toutes circonstances.",
      details: "Le plus haut enchantement standard sur une arme, ce bonus de +3 aux jets d'attaque et de dégâts place son porteur ou sa porteuse parmi les combattants les plus efficaces qui soient. Les runes complexes qui ornent l'arme rayonnent d'une faible lueur même sans lumière ambiante. Elle est considérée comme une arme magique et surpasse les défenses de presque toutes les créatures résistantes aux dégâts. Un objet recherché par tous les grands guerriers des royaumes."
    },

    // 💍 ANNEAU
    { nom: "Anneau de commandement des élémentaires d'air", type: "Anneau", rarete: "Légendaire", lien: true, prix: "67 050 po", note: "based: protection from evil and good, dominate monster, featherfall; misc: protection from energy",
      description: "Un anneau légendaire conférant une autorité absolue sur les élémentaires d'air.",
      details: "Taillé dans un cristal de vent solidifié, cet anneau confère des pouvoirs extraordinaires sur les créatures de l'air. Son porteur ou sa porteuse peut chuter de plumes, respirer par tout vent, se déplacer dans l'air librement et est immunisé aux dégâts de foudre. Il peut invoquer un élémentaire d'air géant une fois par semaine, qui obéit à ses ordres sans restriction. Il peut également lancer Domination de monstre sur les créatures ayant un sous-type air."
    },
    { nom: "Anneau d'influence animale", type: "Anneau", rarete: "Rare", lien: false, prix: "4 290 po", note: "charges based on highest spell level, spell share charge sum of all available spells",
      description: "Un anneau qui permet d'influencer et de charmer les animaux naturels.",
      details: "Orné d'un motif d'animaux entrelacés, cet anneau possède des charges permettant de lancer plusieurs sorts liés aux animaux : Amitié avec les animaux, Communication avec les animaux, et Domination des bêtes. Ces sorts sont utilisables sans composantes, en dépensant les charges appropriées. L'anneau se recharge chaque aube. Son porteur ou sa porteuse peut communiquer basiquement avec les animaux même sans utiliser ses charges — une compréhension intuitive de leur comportement s'installe progressivement."
    },
    { nom: "Anneau d'invocation du djinn", type: "Anneau", rarete: "Légendaire", lien: true, prix: "33 000 po", note: "based: conjure elemental (9th-level)",
      description: "Un anneau légendaire contenant un djinn lié, prêt à exaucer les ordres de son porteur.",
      details: "Cet anneau d'or massif incrusté d'une gemme bleue renferme l'essence d'un djinn puissant. Une fois par jour, son porteur ou sa porteuse peut invoquer ce djinn qui apparaît dans une colonne de vent scintillant. Le djinn obéit aux ordres de son porteur pendant 1 heure avant de retourner dans l'anneau. Bien qu'il soit lié à l'obéissance, le djinn peut être sarcastique ou difficile selon son humeur — et exécute les ordres à la lettre, parfois de façon inattendue."
    },
    { nom: "Anneau de commandement des élémentaires de terre", type: "Anneau", rarete: "Légendaire", lien: true, prix: "67 650 po", note: "based: protection from evil and good, dominate monster, freedom of movement (minus 3 levels); misc: protection from energy",
      description: "Un anneau légendaire donnant le commandement absolu sur les élémentaires de terre.",
      details: "Forgé dans de l'or serti d'obsidienne, cet anneau confère la maîtrise des créatures de la terre. Son porteur ou sa porteuse peut traverser la pierre et la terre comme si c'était de l'eau (grâce à une marche terrestre), bénéficie d'une immunité aux dégâts d'acide, peut invoquer un élémentaire de terre géant une fois par semaine, et peut lancer Liberté de mouvement à volonté. Il peut également lancer Domination de monstre sur les créatures à sous-type terre."
    },
    { nom: "Anneau d'esquive", type: "Anneau", rarete: "Rare", lien: true, prix: "7 560 po", note: "based on 5th level spells",
      description: "Un anneau qui améliore les réflexes de son porteur, lui permettant d'esquiver les attaques de zone.",
      details: "Cet anneau confère à son porteur ou sa porteuse une agilité surnaturelle face aux explosions et effets de zone. Lorsqu'il ou elle effectue un jet de sauvegarde de Dextérité contre un effet qui inflige la moitié des dégâts en cas de réussite, il ou elle n'encaisse aucun dégât en cas de réussite, et seulement la moitié en cas d'échec. Cette capacité passive fait de son porteur un survivant remarquable face aux magiciens et aux créatures à attaques de souffle."
    },
    { nom: "Anneau de chute de plume", type: "Anneau", rarete: "Rare", lien: true, prix: "1 800 po", note: "based: featherfall",
      description: "Un anneau qui ralentit magiquement la chute de son porteur, le protégeant des dégâts de chute.",
      details: "Cet anneau léger, souvent orné d'une petite plume gravée, s'active automatiquement lorsque son porteur ou sa porteuse entame une chute. Sa vitesse de chute est immédiatement réduite à 18 mètres par round, annulant tout dégât de chute. Son porteur peut décider à tout moment pendant la chute d'atterrir doucement. L'anneau est passif et ne nécessite ni action ni réaction pour s'activer — une protection silencieuse mais essentielle pour les aventuriers en altitude."
    },
    { nom: "Anneau de commandement des élémentaires de feu", type: "Anneau", rarete: "Légendaire", lien: true, prix: "104 400 po", note: "based: protection from evil and good, dominate monster, investiture (immunity); misc: protection from energy resistance",
      description: "Un anneau légendaire conférant la maîtrise absolue sur les élémentaires et créatures de feu.",
      details: "Forgé dans un rubis fondu par les flammes d'un volcan primordial, cet anneau confère l'immunité aux dégâts de feu, une résistance aux dégâts de froid, et la capacité de nager dans la lave. Son porteur ou sa porteuse peut invoquer un élémentaire de feu géant une fois par semaine, utiliser Domination de monstre sur les créatures à sous-type feu, et projeter des flammes par simple désir. C'est le plus puissant des anneaux d'élémentaires."
    },
    { nom: "Anneau d'invisibilité", type: "Anneau", rarete: "Légendaire", lien: true, prix: "31 500 po", note: "based: greater invisibility (plus 1 level, no concentration)",
      description: "Un anneau légendaire qui rend son porteur constamment invisible, même en attaquant.",
      details: "Cet anneau incrusté d'un diamant translucide permet à son porteur ou sa porteuse de devenir invisible à volonté (action), bénéficiant d'un effet similaire à Invisibilité supérieure qui maintient l'invisibilité même après avoir attaqué ou lancé des sorts. L'effet dure jusqu'à ce qu'il ou elle le désactive. Un objet légendaire convoité par les espions, les assassins et tous ceux qui ont besoin de passer inaperçus en toutes circonstances."
    },
    { nom: "Anneau de saut", type: "Anneau", rarete: "Peu commun", lien: true, prix: "1 350 po", note: "based: jump",
      description: "Un anneau qui triple la capacité de saut de son porteur.",
      details: "Gravé d'un motif de grenouille bondissante, cet anneau amplifie magiquement la puissance musculaire des jambes de son porteur ou sa porteuse. Sa distance de saut est triplée, lui permettant de franchir des fossés ordinairement infranchissables et de sauter par-dessus des obstacles ou sur des ennemis depuis une distance considérable. Cette capacité est permanente et passive tant que l'anneau est porté."
    },
    { nom: "Anneau de régénération", type: "Anneau", rarete: "Très rare", lien: true, prix: "32 400 po", note: "based: regenerate",
      description: "Un anneau miraculeux qui permet à son porteur de se régénérer et de repousser ses membres perdus.",
      details: "Cet anneau en or vivant taillé en forme de serpent qui se mord la queue est un miracle de guérison. Son porteur ou sa porteuse récupère 1d6 points de vie toutes les 10 minutes, même s'il ou elle est réduit(e) à 0 PV (tant qu'il ne meurt pas instantanément). De plus, les membres perdus repoussent après 1d6 + 1 jours de port de l'anneau. Des effets comme la pétrification ou la désintégration restent létaux, mais les blessures ordinaires se referment avec le temps."
    },
    { nom: "Anneau d'étoiles filantes", type: "Anneau", rarete: "Très rare", lien: true, prix: "5 276 po", note: "based: fearie fire charges; misc: permanent dancing lights and light",
      description: "Un anneau brillant qui fait danser des lumières et peut lancer des éclairs de lumière féerique.",
      details: "Cet anneau incrusté de petites gemmes étincelantes produit en permanence des lumières dansantes autour de son porteur ou sa porteuse. Il possède 6 charges permettant de lancer Feu féerique (révèle les créatures invisibles et confère un avantage aux attaques contre elles). La fée lumière peut également être concentrée en un globe de lumière vive. Les charges se recharge à l'aube. L'anneau dispose aussi d'une lumière permanente modifiable à volonté."
    },
    { nom: "Anneau de renvoi des sorts", type: "Anneau", rarete: "Légendaire", lien: true, prix: "31 500 po", note: "based: circle of power",
      description: "Un anneau légendaire qui peut renvoyer les sorts qui ciblent son porteur contre leur lanceur.",
      details: "Cet anneau est la terreur des lanceurs de sorts. Lorsque son porteur ou sa porteuse est ciblé(e) par un sort qui n'affecte qu'une seule cible, il ou elle peut utiliser sa réaction pour tenter de renvoyer ce sort contre son lanceur ou lanceuse (test d'Intelligence opposé). En cas de succès, le sort est renvoyé comme si c'était son porteur qui l'avait lancé. L'anneau peut être utilisé ainsi 3 fois par jour. La résistance aux sorts et l'immunité de l'anneau est une protection supplémentaire."
    },
    { nom: "Anneau de natation", type: "Anneau", rarete: "Peu commun", lien: false, prix: "4 950 po", note: "based: alter self (plus 1 level, no concentration)",
      description: "Un anneau qui confère d'extraordinaires capacités de natation aquatique.",
      details: "Taillé dans un os de sirène ou façonné en forme de poisson, cet anneau confère une vitesse de natation de 12 mètres. Son porteur ou sa porteuse peut nager aussi naturellement qu'il ou elle marche et ne risque pas de se noyer même dans des eaux agitées. De plus, il peut respirer sous l'eau indéfiniment. Ces propriétés sont permanentes et passives, activées dès que l'anneau est porté."
    },
    { nom: "Anneau de télékinésie", type: "Anneau", rarete: "Très rare", lien: true, prix: "18 900 po", note: "based: telekinesis (no change to level due to restriction, even with no concentration)",
      description: "Un anneau qui confère le don de télékinésie, permettant de déplacer objets et créatures par la pensée.",
      details: "Cet anneau serti d'un cristal violacé confère la capacité de manipuler objets et créatures par la seule pensée. Son porteur ou sa porteuse peut déplacer un objet ou une créature de moins de 500 kg dans un rayon de 18 mètres (comme le sort Télékinésie). Cela ne requiert aucune action mais ne peut cibler qu'une chose à la fois. Les créatures peuvent résister (jet de sauvegarde de Force). Parfait pour écarter des obstacles, désarmer des ennemis, ou récupérer des objets hors d'atteinte."
    },
    { nom: "Anneau des trois vœux", type: "Anneau", rarete: "Légendaire", lien: false, prix: "27 225 po", note: "based: wish x3",
      description: "Un anneau légendaire qui renferme trois vœux capables d'exaucer n'importe quelle requête.",
      details: "Ce simple anneau doré est l'objet le plus convoité et le plus dangereux de cette liste. Il renferme trois utilisations du sort Vœu — le sort le plus puissant de l'univers. Chaque vœu peut exaucer n'importe quelle requête formulable, avec toutes les implications que cela comporte. La formulation du vœu est critique : les djinns et les entités qui interprètent ces vœux trouvent toujours une façon d'exaucer la lettre du vœu plutôt que son esprit. Une fois les trois vœux utilisés, l'anneau devient ordinaire."
    },
    { nom: "Anneau de chaleur", type: "Anneau", rarete: "Peu commun", lien: true, prix: "6 750 po", note: "based: protection from energy (plus 1 level, no concentration)",
      description: "Un anneau qui protège son porteur des effets néfastes du froid extrême.",
      details: "Cet anneau en fer rougeâtre dégage une chaleur subtile perceptible au toucher. Son porteur ou sa porteuse est immunisé aux dommages causés par le froid naturel (températures glaciales, blizzards) et bénéficie de la résistance aux dégâts de froid magiques. Il peut également marcher sur la glace sans risquer de glisser et résiste aux effets de paralysie liés au froid. Particulièrement utile dans les régions nordiques, les montagnes enneigées et les plans de glace."
    },
    { nom: "Anneau de commandement des élémentaires d'eau", type: "Anneau", rarete: "Légendaire", lien: true, prix: "72 450 po", note: "based: protection from evil and good, dominate monster, water walk (minus 1 level); misc: water breathing (minus 1 level)",
      description: "Un anneau légendaire conférant la maîtrise absolue des élémentaires et créatures aquatiques.",
      details: "Taillé dans un cristal de mer, cet anneau confère la capacité de respirer sous l'eau, de marcher sur l'eau, de nager à 18 mètres, et d'une immunité aux dégâts de froid. Son porteur ou sa porteuse peut invoquer un élémentaire d'eau géant une fois par semaine, utiliser Domination de monstre sur les créatures aquatiques, et contrôler les courants d'eau à proximité. Les créatures marines le reconnaissent comme une figure d'autorité."
    },
    { nom: "Anneau de marche sur l'eau", type: "Anneau", rarete: "Peu commun", lien: false, prix: "7 425 po", note: "based: water walking (plus 1 level, no concentration)",
      description: "Un anneau qui permet de marcher sur l'eau et autres liquides comme sur la terre ferme.",
      details: "Cet anneau transparent comme une goutte d'eau purifiée permet à son porteur ou sa porteuse de marcher sur n'importe quel liquide — eau douce, eau salée, lave (sans protection contre les dégâts), acide (idem), ou autres. Il ou elle peut également décider de s'enfoncer dans le liquide à volonté. La capacité est permanente et passive. Un outil précieux pour traverser des rivières, des marais et éviter les pièges à base de liquides."
    },
    { nom: "Anneau de vision aux rayons X", type: "Anneau", rarete: "Rare", lien: true, prix: "3 600 po", note: "based: arcane eye (minus 2 levels)",
      description: "Un anneau qui permet de voir à travers les matériaux solides dans un rayon limité.",
      details: "Cet anneau en métal sombre serti d'un petit cristal jaunâtre permet à son porteur ou sa porteuse de voir à travers la matière solide jusqu'à 30 centimètres d'épaisseur dans un rayon de 9 mètres. Il ne peut pas pénétrer les métaux précieux (or, argent, plomb) ou les pierres de plus de 30 cm. L'utilisation prolongée peut causer des maux de tête. En action bonus, son porteur active ou désactive la vision. Idéal pour chercher des passages secrets, des pièges cachés ou des ennemis embusqués."
    },
    { nom: "Anneau du bélier", type: "Anneau", rarete: "Rare", lien: true, prix: "708 po", note: "nan",
      description: "Un anneau qui peut projeter une force de bélier magique, repoussant les créatures et brisant les objets.",
      details: "Cet anneau possède 3 charges. Son porteur ou sa porteuse peut dépenser 1 à 3 charges pour projeter une force invisible similaire à un coup de bélier. Une charge inflige 2d10 dégâts de force à une créature ou un objet dans un rayon de 18 mètres et peut la repousser de 3 mètres. Des charges supplémentaires augmentent les dégâts et la distance de recul. La force peut briser des portes, briser des barreaux et déforcer des obstacles mécaniques. L'anneau récupère 1d3 charges à l'aube."
    },

    // 🧪 POTION
    { nom: "Élixir de santé", type: "Potion", rarete: "Rare", lien: false, prix: "396 po", note: "based: lesser restoration",
      description: "Un élixir doré qui guérit maladies, malédictions et plusieurs afflictions en une seule dose.",
      details: "Cet élixir doré à reflets verts dégage un parfum de plantes médicinales et de lumière de soleil captée. En le buvant, il guérit toutes les maladies, tous les poisons, toutes les cécités ou surdités non magiques, et annule les effets de charme, paralysie ou peur. Il restaure également les points de vie perdus. Un remède universel contre les afflictions courantes, précieux dans les donjons où les maladies et afflictions s'accumulent rapidement."
    },
    { nom: "Philtre d'amour", type: "Potion", rarete: "Peu commun", lien: false, prix: "1 040 po", note: "based: charm monster (plus 1 level)",
      description: "Une potion de charme puissante qui fait tomber sa victime éperdument amoureuse.",
      details: "Ce liquide rose au doux parfum floral provoque un effet de charme intense chez quiconque le boit. La cible considère le premier être vivant qu'elle voit après avoir bu la potion comme son amour véritable, cherchant à le protéger et à lui plaire. L'effet dure 1 heure. À la fin, la cible se souvient de ses actions mais peut interpréter ses comportements sous l'influence de la potion de différentes façons. Légalement et éthiquement controversé, ce philtre est banni dans certaines juridictions."
    },
    { nom: "Potion d'amitié animale", type: "Potion", rarete: "Peu commun", lien: false, prix: "149 po", note: "based: animal friendship",
      description: "Un élixir qui crée un lien instantané de confiance avec les animaux naturels.",
      details: "Cette potion à l'odeur terreux et végétale crée une aura de sérénité animale autour de son consommateur ou consommatrice. Pendant 24 heures, les animaux naturels ne sont pas hostiles envers lui ou elle et peuvent même s'approcher avec curiosité. Les animaux dressés pour attaquer peuvent résister, mais les créatures sauvages deviendront généralement amicales. Le consommateur ou la consommatrice ne peut pas communiquer directement avec eux, mais peut établir un rapport de confiance remarquable."
    },
    { nom: "Potion de clairvoyance", type: "Potion", rarete: "Rare", lien: false, prix: "990 po", note: "based: clairvoyance (plus 1 level, no concentration)",
      description: "Un élixir mystique qui ouvre un sens supplémentaire permettant d'observer un lieu distant.",
      details: "Ce liquide bleu pâle aux reflets étoilés confère une capacité de clairvoyance pendant 10 minutes après son ingestion. Son consommateur ou sa consommatrice peut choisir un lieu connu (qu'il a visité ou qui lui a été décrit) et y placer un sens invisible — ouïe ou vue — pour percevoir ce qui s'y passe. Il n'a pas besoin de concentration et peut agir normalement pendant cette période. Idéal pour surveiller une zone sans y être physiquement présent."
    },
    { nom: "Potion d'escalade", type: "Potion", rarete: "Commun", lien: false, prix: "693 po", note: "based: spider climb, enhance ability (plus 1 level, no concentration)",
      description: "Un élixir qui permet de s'accrocher et de grimper sur n'importe quelle surface pendant une heure.",
      details: "Ce liquide épais de couleur sable dégage une odeur de toile d'araignée fraîche. Après l'avoir bu, son consommateur ou consommatrice développe la capacité d'escalader toutes les surfaces — murs verticaux, plafonds, rochers mouillés — à sa vitesse normale. Ces surfaces adhèrent à ses mains et pieds sans effort particulier. L'effet dure 1 heure et peut être dissipé en dépensant une action. Indispensable pour les infiltrateurs qui doivent accéder à des endroits autrement inaccessibles."
    },
    { nom: "Potion de diminution", type: "Potion", rarete: "Rare", lien: false, prix: "660 po", note: "based: enlarge/reduce (plus 1 level, longer duration)",
      description: "Un élixir de rétrécissement qui réduit son consommateur à une fraction de sa taille normale.",
      details: "Ce minuscule flacon contient un liquide rouge foncé aux bulles microscopiques. Après ingestion, son consommateur ou sa consommatrice rétrécit progressivement jusqu'à un dixième de sa taille normale pendant 1d4 heures. À cette taille, ses armes infligent la moitié des dégâts normaux, il ou elle a un désavantage aux jets de Force, mais bénéficie d'un avantage aux jets de Dextérité et aux tests de Discrétion. Il peut se glisser dans des espaces minuscules. Très utile pour infiltrer des bâtiments verrouillés."
    },
    { nom: "Potion de souffle de feu", type: "Potion", rarete: "Peu commun", lien: false, prix: "297 po", note: "based: dragon's breath",
      description: "Un élixir enflammé qui confère temporairement le souffle de feu d'un dragon.",
      details: "Ce flacon de liquide orange vif est chaud au toucher et dégage des volutes de fumée quand son bouchon est ouvert. Après l'avoir bu, son consommateur ou sa consommatrice peut cracher un cône de flammes de 4,5 mètres (action bonus) pendant 1 minute — trois fois au total. Chaque cible dans le cône subit 4d6 dégâts de feu (jet de sauvegarde de Dextérité DD 13 pour la moitié). Son consommateur ou sa consommatrice ressent une chaleur intense mais pas douloureuse dans la gorge pendant l'effet."
    },
    { nom: "Potion de forme gazeuse", type: "Potion", rarete: "Rare", lien: false, prix: "990 po", note: "based: gaseous form (plus 1 level, no concentration)",
      description: "Un élixir qui transforme son consommateur en nuage de gaz pendant une heure.",
      details: "Ce flacon contient un liquide qui s'évapore partiellement, laissant le flacon rempli d'un mélange de vapeur et de liquide. Après l'avoir bu, son consommateur ou sa consommatrice se transforme en nuage de gaz pendant 1 heure. Dans cet état, il ou elle peut voler à 3 mètres/round, est immunisé aux dégâts non magiques, résistant aux dégâts magiques, et peut s'infiltrer dans les espaces les plus étroits. Il ne peut cependant pas attaquer, lancer des sorts ou interagir avec les objets. La transformation prend fin si ses PV tombent à 0."
    },
    { nom: "Potion de force de géant des nuages", type: "Potion", rarete: "Très rare", lien: false, prix: "37 422 po", note: "misc: belt of cloud, divided by 10",
      description: "Un élixir rarissime qui confère temporairement la force titanesque d'un géant des nuages.",
      details: "Ce flacon de cristal contient un liquide blanc nuageux qui tourbillonne lentement. Après ingestion, la Force de son consommateur ou sa consommatrice est fixée à 27 pendant 1 heure — une puissance proche de celle des demi-dieux. À cette Force, les limites habituelles du port de charge deviennent sans objet, et les coups peuvent renverser des murs entiers. Les géants des nuages sont connus pour leur intelligence et leur puissance — cette potion leur confère l'une de ces deux qualités."
    },
    { nom: "Potion de force de géant du feu", type: "Potion", rarete: "Rare", lien: false, prix: "11 643 po", note: "misc: belt of fire, divided by 10",
      description: "Un élixir brûlant qui donne temporairement la force d'un géant du feu.",
      details: "Ce flacon chaud au toucher contient un liquide rouge-orange qui semble brûler intérieurement. Après ingestion, la Force de son consommateur ou sa consommatrice est fixée à 25 pendant 1 heure. Cette puissance lui permet de soulever des blocs de pierre, d'écraser des adversaires avec une force dévastatrice et de pousser des obstacles normalement immovibles. Un léger parfum de soufre et de lave accompagne son porteur ou sa porteuse pendant toute la durée de l'effet."
    },
    { nom: "Potion de force de géant du givre/pierre", type: "Potion", rarete: "Rare", lien: false, prix: "8 732 po", note: "misc: belt of frost/storm, divided by 10",
      description: "Un élixir glacé ou pierreux qui confère temporairement la force d'un géant du givre ou de pierre.",
      details: "Ce flacon dense contient un liquide gris-bleu épais, presque gélatineux. Après ingestion, la Force de son consommateur ou sa consommatrice est fixée à 23 pendant 1 heure. Les géants du givre et de pierre sont connus pour leur endurance et leur brutalité — cette potion confère leur puissance musculaire, permettant d'arracher des rochers, de soulever des créatures entières et de frapper avec des dégâts considérables."
    },
    { nom: "Potion de force de géant des collines", type: "Potion", rarete: "Peu commun", lien: false, prix: "3 119 po", note: "misc: belt of hill, divided by 10",
      description: "Un élixir terreux qui confère temporairement la force brutale d'un géant des collines.",
      details: "Ce flacon contient un liquide épais de couleur terre, légèrement granuleux. Après ingestion, la Force de son consommateur ou sa consommatrice est fixée à 21 pendant 1 heure — la même que celle des gantelets de puissance d'ogre mais temporaire. Cette potion est la plus accessible de la gamme des géants, et reste néanmoins impressionnante. Les géants des collines sont les moins nobles mais les plus communs — cette potion reproduit fidèlement leur robustesse brute."
    },
    { nom: "Potion de force de géant des tempêtes", type: "Potion", rarete: "Légendaire", lien: false, prix: "77 963 po", note: "misc: belt of storm, divided by 10",
      description: "L'élixir de force le plus puissant, conférant la Force légendaire d'un géant des tempêtes.",
      details: "Ce flacon d'ambre rare contient un liquide lumineux qui change de couleur selon l'angle de vue. Après ingestion, la Force de son consommateur ou sa consommatrice est fixée à 29 pendant 1 heure — une puissance quasi divine. Les géants des tempêtes sont les plus puissants et les plus sages de leur espèce, lisant les présages dans les astres. Cette potion leur confère uniquement leur puissance physique légendaire. À cette Force, une personne pourrait soulever un dragon de taille G."
    },
    { nom: "Potion d'invisibilité supérieure", type: "Potion", rarete: "Très rare", lien: false, prix: "3 564 po", note: "based: greater invisibility (plus 3 levels, no concentration and lasts for 1 hour)",
      description: "Un élixir qui rend invisible même en attaquant, pendant une heure entière.",
      details: "Contrairement à la potion d'invisibilité ordinaire, cet élixir confère une Invisibilité supérieure qui ne prend pas fin lorsque son consommateur ou sa consommatrice attaque ou lance des sorts. Pendant 1 heure, il ou elle est totalement invisible, bénéficiant d'un avantage à toutes les attaques et forçant les adversaires à attaquer avec un désavantage. Un outil redoutable entre les mains d'un roublard ou d'un assassin."
    },
    { nom: "Potion de croissance", type: "Potion", rarete: "Peu commun", lien: false, prix: "495 po", note: "based: enlarge/reduce (plus 1 level, longer duration)",
      description: "Un élixir qui agrandit son consommateur jusqu'au double de sa taille normale.",
      details: "Ce flacon de grande taille contient un liquide vert vif légèrement luminescent. Après ingestion, son consommateur ou sa consommatrice double de taille (catégorie Grande) pendant 1d4 heures. Ses armes infligent 1d4 dégâts supplémentaires, il ou elle bénéficie d'un avantage aux jets de Force et inflige des dégâts supplémentaires lors de poussées. Sa taille imposante peut impressionner les adversaires et lui permettre de franchir certains obstacles. Ses vêtements et équipements magiques s'adaptent à sa nouvelle taille."
    },
    { nom: "Potion d'héroïsme", type: "Potion", rarete: "Rare", lien: false, prix: "792 po", note: "based: heroism & bless (plus 1 level, no concentration)",
      description: "Un élixir enflammant la bravoure et conférant des points de vie temporaires supplémentaires.",
      details: "Ce liquide rouge sang dégage une odeur légèrement métallique mais agréable. Pendant 1 heure après l'ingestion, son consommateur ou sa consommatrice est immunisé(e) à la condition Effrayé et gagne 10 points de vie temporaires à chaque début de ses tours. De plus, il ou elle bénéficie d'un bonus de +1d4 à tous ses jets d'attaque et jets de sauvegarde. Cette combinaison en fait l'une des potions de combat les plus efficaces disponibles pour les aventuriers."
    },
    { nom: "Potion d'invulnérabilité", type: "Potion", rarete: "Rare", lien: false, prix: "3 630 po", note: "based: invulnerability",
      description: "Un élixir qui confère une résistance temporaire à tous les types de dégâts.",
      details: "Ce liquide argenté dense et brillant est chaud au toucher. Pendant 1 minute après ingestion, son consommateur ou sa consommatrice bénéficie de la résistance à tous les types de dégâts, réduisant de moitié les dégâts reçus quelle qu'en soit la source — physique, magique, élémentaire. Une durée courte mais une protection absolue qui peut permettre de survivre aux situations les plus désespérées. Particulièrement utile lors des confrontations avec des boss puissants."
    },
    { nom: "Potion de longévité", type: "Potion", rarete: "Très rare", lien: false, prix: "5 445 po", note: "based: wish",
      description: "Un élixir mystique qui réduit l'âge physique de son consommateur de 1d6+6 années.",
      details: "Ce flacon de cristal taillé contient un liquide transparent qui semble contenir des étoiles en miniature. Après ingestion, son consommateur ou sa consommatrice rajeunit de 1d6 + 6 ans — son corps retrouve cet état physique plus jeune, avec toutes les implications en termes de santé et de vitalité. Chaque utilisation supplémentaire comporte un risque de 1% cumulatif que l'effet soit inversé et que la personne vieillisse considérablement à la place. Un élixir précieux mais à utiliser avec modération."
    },
    { nom: "Potion de lecture des pensées", type: "Potion", rarete: "Rare", lien: false, prix: "660 po", note: "based: detect thoughts (plus 1 level, no concentration)",
      description: "Un élixir qui ouvre l'esprit aux pensées superficielles des êtres vivants à proximité.",
      details: "Ce liquide bleu pâle semble briller d'une lumière intérieure. Pendant 1 heure après ingestion, son consommateur ou sa consommatrice peut, en se concentrant sur une créature à moins de 9 mètres, percevoir ses pensées superficielles — ses préoccupations immédiates et émotions du moment. En se concentrant plus profondément (action), il ou elle peut tenter d'accéder aux pensées plus profondes (la cible peut résister avec un jet de sauvegarde de Sagesse DD 13). Un outil précieux pour les négociations et les interrogatoires."
    },
    { nom: "Potion de poison", type: "Potion", rarete: "Peu commun", lien: false, prix: "1 103 po", note: "added magic aura for disguising it",
      description: "Un poison concentré déguisé magiquement en potion ordinaire, destiné à empoisonner un adversaire.",
      details: "Cette potion est un piège insidieux : elle est dissimulée sous une aura magique qui la fait apparaître comme une potion bénigne. Son véritable contenu est un poison puissant. Quiconque la boit subit 3d6 dégâts de poison et est empoisonné pendant 24 heures (jet de sauvegarde de Constitution DD 13 pour résister et ne subir que la moitié des dégâts). Un sort d'Identification ou de Détection du poison révèle sa vraie nature. Un outil d'assassin par excellence."
    },
    { nom: "Potion de pugilat", type: "Potion", rarete: "Peu commun", lien: false, prix: "248 po", note: "nan",
      description: "Un élixir qui renforce temporairement les attaques à mains nues de son consommateur.",
      details: "Ce liquide légèrement visqueux de couleur chair dégage une odeur de résine de bouleau. Pendant 1 heure après ingestion, les attaques à mains nues de son consommateur ou sa consommatrice infligent 1d6 dégâts contondants au lieu des dégâts normaux, et sont considérées comme des armes magiques. De plus, ces attaques bénéficient d'un bonus de +1 aux jets d'attaque et de dégâts. Un outil précieux pour les moines, les bardes acrobatiques et tous ceux dont le corps est leur arme."
    },
    { nom: "Potion de résistance", type: "Potion", rarete: "Peu commun", lien: false, prix: "743 po", note: "based: protection from energy (plus 1 level, no concentration)",
      description: "Un élixir qui confère une résistance temporaire à un type de dégât spécifique.",
      details: "Chaque Potion de résistance est liée à un type de dégât spécifique, dont la couleur du liquide est caractéristique (rouge pour le feu, blanc pour le froid, etc.). Pendant 1 heure après ingestion, son consommateur ou sa consommatrice bénéficie de la résistance à ce type de dégâts, réduisant de moitié tous les dommages correspondants. Une version temporaire et portable de la protection permanente qu'offrent certaines armures spécialisées."
    },
    { nom: "Potion de rapidité", type: "Potion", rarete: "Très rare", lien: false, prix: "1 485 po", note: "based: haste (plus 1 level, no concentration)",
      description: "Un élixir qui accélère temporairement les mouvements et le temps de réaction de son consommateur.",
      details: "Ce liquide jaune vif s'agite constamment dans son flacon, comme s'il cherchait à s'en échapper. Pendant 1 minute après ingestion, son consommateur ou sa consommatrice voit sa vitesse de déplacement doubler, bénéficie d'un bonus de +2 à la CA, a un avantage aux jets de sauvegarde de Dextérité et peut effectuer une action supplémentaire chaque round (uniquement pour Attaquer, Se désengager, Esquiver, Foncer ou Utiliser un objet). À la fin de l'effet, il ou elle est étourdi pendant 1 round."
    },
    { nom: "Potion de guérison supérieure", type: "Potion", rarete: "Rare", lien: false, prix: "440 po", note: "nan",
      description: "Une potion de guérison de haute qualité qui restaure une quantité significative de points de vie.",
      details: "Ce liquide rouge rubis dégage un parfum intense de plantes médicinales concentrées. En la buvant en une action, son consommateur ou sa consommatrice récupère 4d4 + 4 points de vie. Considérablement plus efficace que la potion de guérison standard, elle permet de soigner des blessures sérieuses en milieu de combat. On la distingue de la potion ordinaire par sa couleur plus profonde et son parfum plus prononcé."
    },
    { nom: "Potion de guérison suprême", type: "Potion", rarete: "Très rare", lien: false, prix: "1 061 po", note: "nan",
      description: "La potion de guérison la plus puissante, capable de restaurer presque tous les points de vie.",
      details: "Ce flacon contient un liquide rouge si brillant qu'il semble émettre sa propre lumière. En la buvant, son consommateur ou sa consommatrice récupère 8d4 + 8 points de vie — une restauration massive qui peut ramener même un personnage gravement blessé à pleine santé. La plus puissante des potions de guérison, elle se distingue par sa couleur presque orangée et son parfum d'ambroisie. Réservée aux aventuriers de haut rang, elle vaut son poids en or."
    },
    { nom: "Potion de vitalité", type: "Potion", rarete: "Très rare", lien: false, prix: "2 772 po", note: "based: greater restoration (plus 1 level for increased effect)",
      description: "Un élixir miraculeux qui restaure la vitalité, guérissant maladies, malédictions et épuisement.",
      details: "Ce liquide d'un violet profond dégage un parfum de fleurs de nuit et de racines anciennes. En la buvant, son consommateur ou sa consommatrice est soin de toutes les maladies, tous les poisons, toutes les malédictions, tous les niveaux d'épuisement, et tous les points de vie perdus. De plus, il ou elle bénéficie des effets de Restauration supérieure. Une potion précieuse pour récupérer complètement après un combat épuisant ou une maladie tenace."
    },
    { nom: "Potion de respiration aquatique", type: "Potion", rarete: "Peu commun", lien: false, prix: "297 po", note: "based: water breathing (minus 1 level for duration)",
      description: "Un élixir qui permet de respirer sous l'eau pendant quelques heures.",
      details: "Ce flacon contient un liquide bleu-vert légèrement translucide au parfum d'algues marines. Après ingestion, son consommateur ou sa consommatrice peut respirer normalement sous l'eau pendant 1 heure, comme s'il ou elle respirait de l'air. Ses poumons traitent l'eau comme de l'air, sans risque de noyade. À la fin de l'heure, les poumons retournent à la normale. Indispensable pour les plongées profondes, les temples sous-marins et les donjons aquatiques."
    },

    // 🪄 BAGUETTE
    { nom: "Baguette d'entrave", type: "Baguette", rarete: "Rare", lien: true, prix: "9 300 po", note: "based: hold monster x1, hold person x1, freedom of movement (minus 1 level)",
      description: "Une baguette capable d'immobiliser les créatures et de libérer les alliés des entraves.",
      details: "Cette baguette en bois noueux est entourée de bandes de métal croisées. Elle possède 7 charges. En dépensant 2 charges, son porteur ou sa porteuse peut lancer Immobilisation de monstre (DD 15) ou Immobilisation de personne (DD 15). En dépensant 3 charges, il ou elle peut lancer Liberté de mouvement sur une créature alliée, libérant ainsi un allié d'une entrave magique. La baguette récupère 1d6 + 1 charges à l'aube. Particulièrement utile pour contrôler le champ de bataille."
    },
    { nom: "Baguette de direction d'orchestre", type: "Baguette", rarete: "Commun", lien: false, prix: "198 po", note: "based: thaumaturgy",
      description: "Une baguette d'orchestre enchantée qui amplifie les sons et améliore les performances musicales.",
      details: "Cette baguette de chef d'orchestre possède un enchantement basé sur Thaumaturgie. En la brandissant, son porteur ou sa porteuse peut amplifier ou modifier les sons dans un rayon de 9 mètres, créer des effets sonores, ou améliorer la projection d'une performance musicale. Populaire parmi les bardes et les musiciens de cour, elle est parfois utilisée par les commandants militaires pour amplifier leurs ordres à travers le chaos d'une bataille."
    },
    { nom: "Baguette de détection des ennemis", type: "Baguette", rarete: "Rare", lien: true, prix: "9 000 po", note: "based: locate creature",
      description: "Une baguette de détection qui s'oriente vers les ennemis ou créatures proches.",
      details: "Cette baguette possède 7 charges. En utilisant une charge, son porteur ou sa porteuse peut percevoir la direction de la créature hostile la plus proche dans un rayon de 18 mètres. Il peut également nommer une créature spécifique : la baguette s'oriente dans sa direction si elle est dans un rayon de 300 mètres. Elle peut aussi être utilisée pour détecter les créatures cachées ou invisibles à proximité. La baguette récupère 1d6 + 1 charges à l'aube. Précieuse pour éviter les embuscades."
    },
    { nom: "Baguette de terreur", type: "Baguette", rarete: "Rare", lien: true, prix: "4 320 po", note: "based: fear x3, command x1",
      description: "Une baguette qui diffuse une terreur panique ou des ordres contraignants.",
      details: "Cette baguette taillée dans du bois d'ébène porte un crâne sculpté à son extrémité. Elle possède 7 charges. Dépenser 2 charges lance Terreur (DD 15), projetant une aura de peur conique. Dépenser 1 charge lance Commandement sur une créature (DD 15). Les créatures terrorisées fuient leur porteur ou sa porteuse jusqu'à la fin du sort. La baguette se recharge 1d6 + 1 charges à l'aube. Un outil efficace pour désorganiser les rangs ennemis et créer des brèches dans les formations adverses."
    },
    { nom: "Baguette de détection de la magie", type: "Baguette", rarete: "Peu commun", lien: false, prix: "891 po", note: "based: detect magic x3",
      description: "Une baguette permettant de détecter les auras magiques dans l'environnement.",
      details: "Cette baguette fine en bois de hêtre possède 3 charges. En utilisant une charge, son porteur ou sa porteuse peut lancer Détection de la magie, percevant pendant 10 minutes les auras magiques dans un rayon de 18 mètres. Cette capacité révèle la présence d'objets, zones ou créatures affectées par de la magie et en identifie l'école. La baguette récupère 1d3 charges à l'aube. Un outil indispensable lors de l'exploration de donjons, de ruines ou de lieux réputés magiquement actifs."
    },
    { nom: "Baguette d'Orcus", type: "Baguette", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "L'artefact maudit du Prince des Morts-vivants, symbole de sa puissance nécromantique absolue.",
      details: "La Baguette d'Orcus est l'un des objets les plus malveillants de tous les plans d'existence. Forgée à partir d'un os géant blanchi et couronnée d'un crâne humanoïde, elle est le symbole du pouvoir du Prince des Morts-vivants. Son porteur peut invoquer des légions de morts-vivants, déclencher des effets de mort massifs, communiquer avec Orcus lui-même, et bénéficier de capacités de nécromancien divine. Elle corrompt progressivement tout porteur qui n'est pas déjà au service d'Orcus."
    },
    { nom: "Baguette de paralysie", type: "Baguette", rarete: "Rare", lien: true, prix: "16 800 po", note: "based: hold monster (plus 1 level, no concentration) x7",
      description: "Une baguette capable de paralyser instantanément n'importe quelle créature sur sa trajectoire.",
      details: "Cette baguette en argent patiné possède 7 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Immobilisation de monstre (DD 15), paralysant une créature visible dans un rayon de 18 mètres. La créature est paralysée pendant 1 minute (jet de sauvegarde de Sagesse DD 15 pour résister). Elle peut retenter ce jet à la fin de chacun de ses tours. L'effet n'impose pas de concentration, permettant d'agir normalement. La baguette récupère 1d6 + 1 charges à l'aube."
    },
    { nom: "Baguette de métamorphose", type: "Baguette", rarete: "Très rare", lien: true, prix: "13 500 po", note: "based: polymorph x7",
      description: "Une baguette qui peut transformer des créatures en d'autres formes à volonté.",
      details: "Cette baguette irisée possède 7 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Métamorphose (DD 15), transformant une créature consentante ou résistante en une autre forme animale. Les créatures non consentantes peuvent résister avec un jet de sauvegarde de Sagesse DD 15. Les utilisations incluent transformer des ennemis en insectes, permettre à des alliés de prendre la forme d'oiseaux pour voler, ou transformer soi-même en bête puissante. La baguette récupère 1d6 + 1 charges à l'aube."
    },
    { nom: "Baguette de pyrotechnie", type: "Baguette", rarete: "Commun", lien: false, prix: "198 po", note: "based: light",
      description: "Une baguette qui génère des feux d'artifice colorés et lumineux pour l'amusement ou la signalisation.",
      details: "Cette baguette colorée produit des effets pyrotechniques spectaculaires mais inoffensifs. En l'agitant, son porteur ou sa porteuse peut créer des jets de lumières colorées, des petites explosions lumineuses et des fontaines d'étincelles dans un rayon de 9 mètres. Ces effets sont purement lumineux et peuvent servir de signaux, de distractions ou d'entertainement dans les célébrations. Très populaire lors des fêtes et des spectacles itinérants de bardes."
    },
    { nom: "Baguette des grimaces", type: "Baguette", rarete: "Commun", lien: false, prix: "198 po", note: "based: minor illusion",
      description: "Une baguette facétieuse qui crée des illusions de grimaces et d'expressions comiques.",
      details: "Cette baguette taillée de façon légèrement bouffonne est un favori des farceurs et des bardes comiques. En l'agitant vers une créature, elle projette une illusion de grimace — une expression grotesque, comique ou effrayante — sur le visage de la cible (visible seulement aux autres et non à la cible elle-même). L'effet est purement visuel et dure quelques secondes. Son utilité est essentiellement sociale et divertissante, mais peut briser la concentration ou l'autorité d'un ennemi."
    },
    { nom: "Baguette des secrets", type: "Baguette", rarete: "Peu commun", lien: false, prix: "1 782 po", note: "based: find traps x3",
      description: "Une baguette qui vibre en présence de pièges et de passages secrets cachés.",
      details: "Cette baguette fine en if possède 3 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Détection des pièges, percevant pendant 10 minutes tous les pièges dans un rayon de 9 mètres (mécanique ou magique). En plus de détecter les pièges, la baguette vibre légèrement en présence de passages secrets, de faux murs ou de compartiments cachés. La baguette récupère 1d3 charges à l'aube. Un outil indispensable pour les explorateurs de donjons et les chefs d'expédition prudents."
    },
    { nom: "Baguette des sourires", type: "Baguette", rarete: "Commun", lien: false, prix: "198 po", note: "based: minor illusion",
      description: "Une baguette qui force ses cibles à sourire involontairement, brisant la tension.",
      details: "Cet objet magique fantaisiste crée une illusion subtile sur les muscles faciaux de sa cible. Pendant quelques secondes, les muscles faciaux de la cible se contractent involontairement en un sourire (jet de sauvegarde de Charisme DD 10 pour résister). L'effet est visiblement surnaturel et purement divertissant. Très populaire dans les cours royales, les tavernes et les spectacles de rue, elle peut aussi être utilisée pour détendre une situation tendue."
    },
    { nom: "Baguette du mage de guerre +1", type: "Baguette", rarete: "Peu commun", lien: true, prix: "900 po", note: "misc: 100 for ignore cover",
      description: "Une baguette qui améliore les sorts offensifs de son porteur, lui donnant un avantage sur les cibles couvertes.",
      details: "Cette baguette confère un bonus de +1 aux jets d'attaque de sorts et permet d'ignorer la demi-couverture des cibles. Son porteur ou sa porteuse peut lancer ses sorts avec une précision accrue, ses attaques magiques atteignant même les cibles partiellement protégées. La baguette doit être tenue dans la main du lanceur ou lanceuse pour que le bonus s'applique. Un premier équipement idéal pour les mages débutants qui souhaitent améliorer leur précision offensive."
    },
    { nom: "Baguette du mage de guerre +2", type: "Baguette", rarete: "Rare", lien: true, prix: "3 200 po", note: "misc: 100 for ignore cover",
      description: "Une baguette améliorée conférant un bonus de +2 aux jets d'attaque de sorts et ignorant la couverture.",
      details: "Version supérieure de la baguette du mage de guerre, elle confère un bonus de +2 aux jets d'attaque de sorts et permet d'ignorer toute couverture partielle des cibles. Son porteur ou sa porteuse peut atteindre des ennemis qui se croient protégés derrière des obstacles partiels. La baguette vibre légèrement lors du lancer de sorts, comme si elle amplifiiait et guidait l'énergie magique vers sa cible."
    },
    { nom: "Baguette du mage de guerre +3", type: "Baguette", rarete: "Très rare", lien: true, prix: "9 300 po", note: "misc: 100 for ignore cover",
      description: "La baguette du mage de guerre la plus puissante, avec un bonus de +3 aux attaques de sorts.",
      details: "Cette baguette représente le summum de l'équipement offensif d'un mage. Elle confère un bonus de +3 aux jets d'attaque de sorts et permet d'ignorer toute couverture — même une couverture aux trois quarts n'a aucun effet. Les sorts offensifs de son porteur ou sa porteuse atteignent une précision quasi parfaite. La baguette rayonne d'une légère aura magique visible même sans Détection de la magie, témoignant de l'enchantement exceptionnel qui la parcourt."
    },
    { nom: "Baguette de toile d'araignée", type: "Baguette", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: web x7",
      description: "Une baguette qui projette des toiles d'araignée magiques pour piéger les ennemis.",
      details: "Cette baguette en bois foncé est ornée d'un motif de toile d'araignée. Elle possède 7 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Toile d'araignée (DD 15), créant une zone couverte de toiles épaisses sur 6 mètres. Les créatures dans la zone doivent réussir un jet de sauvegarde de Dextérité ou être entravées. La baguette récupère 1d6 + 1 charges à l'aube. La toile persiste pendant 1 heure ou jusqu'à dissipation. Un outil efficace pour contrôler le champ de bataille."
    },
    { nom: "Baguette des merveilles", type: "Baguette", rarete: "Rare", lien: true, prix: "20 400 po", note: "based: 6th level spell x7 charges",
      description: "Une baguette imprévisible dont les effets sont déterminés aléatoirement à chaque utilisation.",
      details: "Cette baguette est l'une des plus imprévisibles du marché magique. Elle possède 7 charges et à chaque utilisation, un d100 est lancé pour déterminer l'effet : cela peut aller d'une gerbe de papillons colorés à une boule de feu, en passant par une transformation temporaire, un éclair aveuglant, de la pluie de carottes, ou des effets cataclysmiques. L'utilisateur ne peut jamais savoir ce qui va se passer. Un outil de chaos adoré des aventuriers imprévisibles et redouté des plus stratèges."
    },

    // 🔱 BÂTON
    { nom: "Bâton ensorcelé (niv. 1)", type: "Bâton", rarete: "Peu commun", lien: true, prix: "1 216 po", note: "nan",
      description: "Un bâton de mage intégrant un sort de niveau 1 utilisable sans dépenser de ressource.",
      details: "Ce bâton en bois d'érable traité porte des runes discrètes liées au sort qu'il renferme. Son porteur ou sa porteuse peut activer ce sort en une action, libérant son énergie sans consommer de slot de sort. Les bâtons ensorcelés de niveau 1 conviennent aux mages en herbe ou aux guerriers qui souhaitent accéder à quelques effets magiques basiques. Le sort intégré est déterminé lors de la création du bâton."
    },
    { nom: "Bâton ensorcelé (niv. 2)", type: "Bâton", rarete: "Rare", lien: true, prix: "3 241 po", note: "nan",
      description: "Un bâton ensorcelé de niveau intermédiaire, offrant l'accès à un sort de niveau 2.",
      details: "Ce bâton en bois de chêne travaillé renferme un sort de niveau 2. Les runes qui l'ornent sont légèrement plus complexes que celles des bâtons de niveau 1. Son porteur ou sa porteuse peut activer ce sort en une action, sans ressource magique. Des sorts comme Invisibilité, Pas brumeux, Fracassement ou Lien paralysant peuvent y être intégrés selon les besoins du commanditaire."
    },
    { nom: "Bâton ensorcelé (niv. 3)", type: "Bâton", rarete: "Rare", lien: true, prix: "5 401 po", note: "nan",
      description: "Un bâton ensorcelé contenant un sort de niveau 3 activable sans coût magique.",
      details: "Ce bâton en bois de frêne poli possède des runes entrelacées qui rayonnent légèrement. Il renferme un sort de niveau 3 disponible sans dépenser de ressource. Boule de feu, Contresort, Dissipation de la magie, ou d'autres sorts de ce niveau peuvent y être intégrés. Son porteur ou sa porteuse dispose d'une puissante ressource tactique supplémentaire en dehors de ses propres capacités magiques."
    },
    { nom: "Bâton ensorcelé (niv. 4)", type: "Bâton", rarete: "Très rare", lien: true, prix: "12 151 po", note: "nan",
      description: "Un bâton magique de haute qualité, renfermant un sort de niveau 4.",
      details: "Ce bâton en bois de houx travaillé porte des gravures profondes liées à l'essence du sort qu'il contient. L'énergie d'un sort de niveau 4 y est comprimée — Porte dimensionnelle, Bouclier de feu, Bannissement, ou d'autres sorts puissants. Son porteur ou sa porteuse dispose d'un atout décisif à utiliser au moment opportun. La légère lueur qui émane des runes s'intensifie quand le sort est sur le point d'être libéré."
    },
    { nom: "Bâton ensorcelé (niv. 5)", type: "Bâton", rarete: "Très rare", lien: true, prix: "17 011 po", note: "nan",
      description: "Un bâton puissant renfermant un sort de niveau 5, réservé aux aventuriers expérimentés.",
      details: "Ce bâton en racine de chêne travaillée par un maître artisan porte des inscriptions runiques complexes. Il renferme un sort de niveau 5 — Cône de froid, Domination de personne, Nuage mortel, ou autres. La puissance contenue se fait sentir physiquement au porteur ou à la porteuse : une légère chaleur ou vibration selon le sort. Un objet rare réservé aux plus expérimentés."
    },
    { nom: "Bâton ensorcelé (niv. 6)", type: "Bâton", rarete: "Légendaire", lien: true, prix: "37 801 po", note: "nan",
      description: "Un bâton légendaire contenant un sort de niveau 6 d'une puissance remarquable.",
      details: "Ce bâton légendaire en bois pétrifié par des siècles de magie renferme un sort de niveau 6. Désintégration, Guérison, Blocage des chaînes, Contingence — les possibilités sont considérables. Les runes qui l'ornent brillent en permanence d'une lumière colorée. Créer un tel bâton nécessite les compétences d'un artisan-mage de premier plan et des ressources exceptionnelles."
    },
    { nom: "Bâton ensorcelé (niv. 7)", type: "Bâton", rarete: "Légendaire", lien: true, prix: "48 601 po", note: "nan",
      description: "Un bâton légendaire à l'enchantement de niveau 7, quasi divin en termes de puissance.",
      details: "Ce bâton d'exception en bois d'if noirci par des siècles de magie concentrée renferme un sort de niveau 7. Tempête de feu, Mot de pouvoir aveuglant, Régénération, Cage de force — sa puissance est quasi divine. Sa simple présence est perceptible pour les êtres sensibles à la magie dans un rayon de quelques mètres. Il représente des décennies de travail et une quantité extraordinaire de ressources magiques."
    },
    { nom: "Bâton ensorcelé (niv. 8)", type: "Bâton", rarete: "Légendaire", lien: true, prix: "60 751 po", note: "nan",
      description: "Le summum des bâtons ensorcelés, contenant un sort de niveau 8 dévastateur.",
      details: "Ce bâton légendaire représente le maximum de ce qu'un artisan peut intégrer dans un bâton de bois, aussi magique soit-il. Il renferme un sort de niveau 8 — Sunburst, Esprit dominator, Puissance de la nature, ou d'autres sorts de ce rang. L'aura magique de cet objet est perceptible sans Détection de la magie, et les créatures sensibles à la magie peuvent le sentir à distance. Chaque exemplaire est unique, fruit de décennies de recherche et de fabrication."
    },
    { nom: "Bâton ensorcelé (tour de magie)", type: "Bâton", rarete: "Peu commun", lien: true, prix: "406 po", note: "nan",
      description: "Un bâton permettant de lancer un tour de magie spécifique à volonté.",
      details: "Ce simple bâton en bois travaillé possède un tour de magie intégré, utilisable à volonté sans ressource. Son porteur ou sa porteuse peut activer ce cantrip en une action, aussi souvent que souhaité. La polyvalence de cet objet le rend populaire auprès des non-mages qui souhaitent un accès permanent à une capacité magique mineure. Selon le tour de magie intégré, les utilisations peuvent être offensives, utilitaires ou défensives."
    },
    { nom: "Bâton d'ornement", type: "Bâton", rarete: "Commun", lien: false, prix: "330 po", note: "based: cantrip power",
      description: "Un bâton de cérémonie enchanté pour impressionner lors des occasions officielles.",
      details: "Ce bâton de cérémonie en bois précieux incrusté de métaux est conçu pour impressionner lors des audiences royales et des cérémonies officielles. Son enchantement lui permet de changer d'apparence et de briller de mille feux sur commande — une démonstration de statut et de pouvoir magique. Il peut également amplifier légèrement la voix de son porteur ou sa porteuse pour les discours publics."
    },
    { nom: "Bâton des chants d'oiseaux", type: "Bâton", rarete: "Commun", lien: false, prix: "330 po", note: "based: thaumaturgy",
      description: "Un bâton enchanté qui imite les chants d'oiseaux et peut communiquer avec les oiseaux.",
      details: "Ce bâton en bois de cerisier est sculpté de petits oiseaux dans le bois. Son porteur ou sa porteuse peut reproduire parfaitement n'importe quel chant d'oiseau connu, dans n'importe quelle direction et à n'importe quel volume. Les oiseaux naturels réagissent positivement à ces chants et peuvent être attirés ou calmés par eux. Un outil apprécié des naturalistes, des rangers en forêt et des bardes qui cherchent des instruments de musique originaux."
    },
    { nom: "Bâton de charme", type: "Bâton", rarete: "Rare", lien: true, prix: "7 020 po", note: "based: on 1st level spell with 10 charges, 1 use per day of 5th level spell",
      description: "Un bâton de séduction qui charme les humanoïdes ou peut enchanter un groupe.",
      details: "Ce bâton en bois de cerisier lustré possède 10 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Charme personne (DD 15) sur un humanoïde visible. Une fois par jour, il ou elle peut dépenser 5 charges pour lancer Modification de mémoire (DD 15). La baguette se recharge 1d6 + 4 charges à l'aube. Un outil potentiellement problématique sur le plan éthique, mais précieux pour les espions, les diplomates et les agents infiltrés."
    },
    { nom: "Bâton de feu", type: "Bâton", rarete: "Très rare", lien: true, prix: "20 970 po", note: "based: wall of fire x2, protection from energy (plus 1 level, no concentration)",
      description: "Un bâton pyromantique conférant immunité au feu et des pouvoirs de contrôle des flammes.",
      details: "Ce bâton en obsidienne chaude au toucher possède 10 charges. Son porteur ou sa porteuse est immunisé aux dégâts de feu. Il peut dépenser 2 charges pour créer une Mur de feu et 1 charge pour des sorts mineurs liés au feu. Des torches s'allument sur son passage. La baguette se recharge 1d6 + 4 charges à l'aube. Si la dernière charge est utilisée lors d'un 1, le bâton s'embrase et disparaît dans une explosion de feu magique."
    },
    { nom: "Bâton des fleurs", type: "Bâton", rarete: "Commun", lien: false, prix: "330 po", note: "based: druidcraft",
      description: "Un bâton bucolique qui fait éclore des fleurs et crée des effets naturels enchanteurs.",
      details: "Ce bâton en bois de pommier fleuri est l'objet favori des druides et des amoureux de la nature. Sur commande, il peut faire éclore des fleurs le long de son fût, créer un parfum de fleurs printanières dans un rayon de 9 mètres, ou faire pousser instantanément une petite plante ornementale dans la terre. Ces effets sont purement esthétiques mais contribuent à créer une ambiance naturelle magique et à calmer les animaux à proximité."
    },
    { nom: "Bâton de givre", type: "Bâton", rarete: "Très rare", lien: true, prix: "27 540 po", note: "based: wall of ice x2, protection from energy (plus 1 level, no concentration)",
      description: "Un bâton glacial qui confère une immunité au froid et des pouvoirs de contrôle de la glace.",
      details: "Ce bâton en cristal de glace poli est froid au toucher même par temps chaud. Son porteur ou sa porteuse est immunisé aux dégâts de froid. Il possède 10 charges permettant de lancer Mur de glace, Cône de froid, et Tempête de glace. Les objets autour du bâton se couvrent parfois de givre et les sols mouillés gèlent sur son passage. La baguette se recharge 1d6 + 4 charges à l'aube. Un outil redoutable dans les régions nordiques et les donjons de glace."
    },
    { nom: "Bâton de guérison", type: "Bâton", rarete: "Rare", lien: true, prix: "6 780 po", note: "based: mass cure wounds x2",
      description: "Un bâton sacré qui permet de soigner plusieurs créatures à la fois.",
      details: "Ce bâton en bois de hêtre blanc possède 10 charges. En dépensant 2 charges, son porteur ou sa porteuse peut lancer Soin de groupe (ciblant jusqu'à 6 créatures dans un rayon de 9 mètres, chacune récupérant 3d8 + 3 PV). En dépensant 1 charge, il peut lancer Soin des blessures sur une créature. La baguette se recharge 1d6 + 4 charges à l'aube. Un outil précieux pour les clercs et autres soigneurs qui opèrent en groupe."
    },
    { nom: "Bâton de frappe", type: "Bâton", rarete: "Très rare", lien: true, prix: "9 429 po", note: "nan",
      description: "Un bâton d'arme puissant combinant force physique et puissance magique.",
      details: "Ce bâton massif en bois de chêne renforcé de métal est conçu pour le combat rapproché. En tant qu'arme, il inflige 1d6 dégâts contondants plus 1d6 dégâts de force sur toute attaque réussie. De plus, son porteur ou sa porteuse peut dépenser une action bonus pour lancer une frappe de force à distance (portée 18 m) infligeant 4d10 dégâts de force. Contrairement à la plupart des bâtons de lanceurs, celui-ci est autant une arme de combat qu'un outil magique."
    },
    { nom: "Bâton des nuées d'insectes", type: "Bâton", rarete: "Rare", lien: true, prix: "6 840 po", note: "based: insect plague x2",
      description: "Un bâton qui peut déchaîner des nuées d'insectes dévorantes sur les ennemis.",
      details: "Ce bâton en bois d'ébène est incrusté d'ailes d'insectes fossilisées. Il possède 10 charges. En dépensant 5 charges, son porteur ou sa porteuse peut lancer Nuée d'insectes (DD 15), créant un essaim de criquets qui inflige des dégâts aux créatures dans une sphère de 6 mètres de rayon. En dépensant 1 charge, il peut créer une nuée d'insectes ordinaires pour la distraction. La baguette se recharge 1d6 + 4 charges à l'aube. Particulièrement démoralisante psychologiquement pour les cibles."
    },
    { nom: "Bâton du tonnerre et de la foudre", type: "Bâton", rarete: "Très rare", lien: true, prix: "12 630 po", note: "based: lightning bolt (plus 1 level), thunderclap based on 1st level",
      description: "Un bâton électrisant capable de déchaîner éclairs et ondes de choc tonitruantes.",
      details: "Ce bâton en métal sombre crépite d'électricité statique. Il possède 10 charges. En dépensant 2 charges, son porteur ou sa porteuse peut lancer Éclair (DD 15, 8d6 dégâts de foudre). En dépensant 1 charge, il peut frapper le sol pour créer un claquement de tonnerre qui assourdit temporairement les créatures adjacentes. La baguette se recharge 1d6 + 4 charges à l'aube. L'orage et la pluie chargent légèrement le bâton d'une énergie supplémentaire, perceptible au porteur."
    },
    { nom: "Bâton de flétrissement", type: "Bâton", rarete: "Rare", lien: true, prix: "12 960 po", note: "based: eyebite (plus 1 level)",
      description: "Un bâton nécromantique qui frappe les créatures d'un regard flétrissant aux effets variés.",
      details: "Ce bâton en os blanchi possède 10 charges. En dépensant 2 charges, son porteur ou sa porteuse peut lancer Œil de destruction (DD 15), forçant une cible à réussir un jet de sauvegarde de Sagesse ou souffrir d'un des effets suivants (au choix) : endormissement, panique ou maladie. En dépensant 1 charge, il peut affliger une cible d'un flétrissement mineur. La baguette se recharge 1d6 + 4 charges à l'aube. Un outil redouté par les ennemis qui rencontrent des mages nécromanciens."
    },
    { nom: "Bâton de la vipère", type: "Bâton", rarete: "Peu commun", lien: true, prix: "282 po", note: "nan",
      description: "Un bâton qui peut se transformer en vipère animée sur commande.",
      details: "Ce bâton en bois foncé est sculpté en forme de serpent enroulé. En utilisant une action bonus, son porteur ou sa porteuse peut le transformer en vipère géante vivante (utilisant les statistiques de ce monstre) qui attaque ses ennemis de façon autonome. Cette vipère obéit aux ordres de son porteur. En la rappelant ou en la touchant (action bonus), elle redevient un bâton. Si la vipère est réduite à 0 PV, elle redevient bâton et ne peut être réutilisée avant 24 heures."
    },
    { nom: "Bâton du mage", type: "Bâton", rarete: "Légendaire", lien: true, prix: "104 250 po", note: "based: circle of power, 7th-level spell x7 charges; misc: spells that don't take charges to cast",
      description: "L'arme légendaire du grand mage, combinant puissance défensive, offensive et polyvalence extraordinaire.",
      details: "Le Bâton du mage est l'un des artefacts magiques les plus convoités de tous les royaumes. Il confère un bonus de +2 à la CA et aux jets de sauvegarde, et possède 50 charges. Il permet de lancer une quantité impressionnante de sorts de niveau 1 à 7 en dépensant les charges appropriées. En outre, de nombreux sorts peuvent être lancés gratuitement à volonté. Si les 50 charges sont épuisées, lancez 1d20 : sur un 20, une nova magique absorbe le mage dans le bâton. Sur un 1, une explosion de 16d6 dégâts se produit."
    },
    { nom: "Bâton du python", type: "Bâton", rarete: "Peu commun", lien: true, prix: "4 500 po", note: "based: conjure animals",
      description: "Un bâton qui peut se transformer en un grand serpent constricteur sur commande.",
      details: "Ce bâton épais en bois sombre est sculpté de motifs d'écailles. En le jetant au sol (action), son porteur ou sa porteuse peut le transformer en un grand serpent constricteur qui obéit à ses ordres. Le serpent reste animé pendant 1 minute ou jusqu'à ce qu'il soit réduit à 0 PV, auquel cas il reprend sa forme de bâton brisé. Si le serpent n'est pas mort, son porteur peut le rappeler (action bonus) et il redevient bâton. Un outil à la fois offensif et utile pour contrôler des zones."
    },

    // ⚡ SCEPTRE
    { nom: "Sceptre d'absorption", type: "Sceptre", rarete: "Très rare", lien: true, prix: "43 650 po", note: "10 charges of 5th level spells, 6 uses of counterspell at 9th level",
      description: "Un sceptre capable d'absorber les sorts ennemis pour stocker leur énergie.",
      details: "Ce sceptre en métal à l'éclat nacré peut absorber les sorts. Lorsque son porteur ou sa porteuse est ciblé(e) par un sort, il ou elle peut utiliser sa réaction pour tenter de l'absorber (comme un Contresort de niveau 9). Si réussi, les niveaux du sort absorbé sont stockés dans le sceptre. Ces charges peuvent ensuite être utilisées pour lancer des sorts depuis le sceptre. La capacité maximale est 50 niveaux de sorts. Si le sceptre essaie d'absorber un sort qui le ferait dépasser 50 charges, il explose."
    },
    { nom: "Sceptre de vigilance", type: "Sceptre", rarete: "Très rare", lien: true, prix: "16 200 po", note: "based: enhance ability, similar auras at paladin 7th level, about 4th level spell power",
      description: "Un sceptre divin qui améliore la vigilance et les capacités protectrices de son porteur.",
      details: "Ce sceptre orné de gemmes de protection confère des capacités de vigilance et d'alerte exceptionnelles. Son porteur ou sa porteuse ne peut pas être surpris(e) et bénéficie de l'avantage aux jets de Perception passive. De plus, il ou elle bénéficie d'une aura de protection s'étendant sur 9 mètres, conférant aux alliés un bonus aux jets de sauvegarde. Il peut également lancer Alarme à volonté et Détection du mal et du bien plusieurs fois par jour."
    },
    { nom: "Sceptre de puissance seigneuriale", type: "Sceptre", rarete: "Légendaire", lien: true, prix: "24 893 po", note: "based on flame tongue; misc is frightened",
      description: "Un sceptre symbole d'autorité royale qui combine puissance magique et charisme imposant.",
      details: "Ce sceptre en or serti de gemmes précieuses est à la fois un symbole d'autorité et une arme redoutable. En combat, il peut s'embraser (comme une Langue de feu) et son porteur ou sa porteuse peut inspirer la terreur chez les adversaires. Une fois par jour, il peut être brandi pour lancer une aura de commandement dans un rayon de 9 mètres, forçant les créatures à réussir un jet de sauvegarde de Sagesse ou être effrayées pendant 1 minute. Il amplifie également le Charisme de son porteur."
    },
    { nom: "Sceptre de résurrection", type: "Sceptre", rarete: "Légendaire", lien: true, prix: "27 150 po", note: "based: heal x5",
      description: "Un sceptre sacré capable de ramener les morts à la vie et de guérir les mourants.",
      details: "Ce sceptre en ivoire blanc serti d'or ne peut être utilisé que par les clercs, druides et paladins. Il possède 5 charges permettant chacune de ressusciter une créature morte depuis moins de 100 ans (comme Résurrection). De plus, une fois par jour, son porteur ou sa porteuse peut toucher une créature à 0 PV et la stabiliser. Il récupère 1 charge par semaine. Perdre toutes ses charges ne le détruit pas — il devient simplement inactif jusqu'à recharge."
    },
    { nom: "Sceptre de domination", type: "Sceptre", rarete: "Rare", lien: true, prix: "6 720 po", note: "based: charm monster (plus 2 levels)",
      description: "Un sceptre de contrôle mental qui peut dominer les créatures et les forcer à obéir.",
      details: "Ce sceptre en métal sombre inséré d'une gemme violacée possède 3 charges. En dépensant 1 charge, son porteur ou sa porteuse peut lancer Domination de monstre (DD 15) sur une créature visible dans un rayon de 18 mètres. La créature dominée obéit aux ordres pour 1 heure ou jusqu'à ce qu'elle subisse des dégâts ou que son porteur ordonne quelque chose contraire à sa nature. Le sceptre récupère 1d3 charges à l'aube. Un outil puissant mais moralement controversé."
    },
    { nom: "Sceptre de sécurité", type: "Sceptre", rarete: "Très rare", lien: false, prix: "22 275 po", note: "based: magnificent mansion (plus 1 level) x2",
      description: "Un sceptre qui peut créer une demeure extradimensionnelle luxueuse et sécurisée.",
      details: "Ce sceptre en argent inséré de gemmes lumineuses peut, une fois par jour, ouvrir un portail vers une demeure extradimensionnelle semblable au Manoir de Mordenkainen. Jusqu'à 200 créatures peuvent y entrer, la demeure s'adaptant aux besoins de ses occupants. Elle dure 24 heures et disparaît après. Les créatures qui s'y trouvent à la fin de la durée en sont expulsées. La demeure offre une sécurité totale contre les intrusions extérieures. Un outil précieux pour le repos entre deux aventures."
    },
    { nom: "Sceptre du gardien du pacte +1", type: "Sceptre", rarete: "Peu commun", lien: true, prix: "2 640 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, regain spell slot treated as Lv1",
      description: "Un sceptre spécialement conçu pour les sorciers, améliorant leurs sorts et leur récupération de slots.",
      details: "Ce sceptre en bois noueux confère un bonus de +1 aux jets d'attaque de sorts et au DD de sauvegarde des sorts pour les sorciers. De plus, son porteur ou sa porteuse récupère son slot de sort expérimental (Invocation : Serment du gardien) plus rapidement. Il peut également être utilisé comme focaliseur magique, remplaçant les composantes matérielles de nombreux sorts. Un objet bien conçu pour soutenir les capacités uniques des sorciers."
    },
    { nom: "Sceptre du gardien du pacte +2", type: "Sceptre", rarete: "Rare", lien: true, prix: "9 120 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, regain spell slot treated as Lv1",
      description: "Une version supérieure du sceptre du gardien du pacte avec un bonus de +2.",
      details: "Cette version améliorée du sceptre du gardien du pacte confère un bonus de +2 aux jets d'attaque de sorts et au DD de sauvegarde des sorts. La récupération accélérée du slot du sorcier est légèrement plus efficace. Les runes gravées sur ce sceptre sont plus élaborées, reflétant le niveau supérieur de l'enchantement. Il brille légèrement d'une lumière liée à la couleur de l'entité patronne du sorcier."
    },
    { nom: "Sceptre du gardien du pacte +3", type: "Sceptre", rarete: "Très rare", lien: true, prix: "26 280 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, regain spell slot treated as Lv1",
      description: "Le summum du sceptre de pacte, avec un bonus de +3 qui maximise les capacités du sorcier.",
      details: "Ce sceptre légendaire est la pièce maîtresse de l'arsenal d'un sorcier de haut rang. Le bonus de +3 aux attaques de sorts et au DD de sorts le rend redoutable en combat magique. Sa capacité de récupération de slot de sort en fait également un outil de longévité en donjon. Il est souvent lié à une entité patronne spécifique, dont les symboles et couleurs parcourent le sceptre d'une lumière persistante."
    },
    { nom: "Sceptre tentacule", type: "Sceptre", rarete: "Rare", lien: true, prix: "3 228 po", note: "nan",
      description: "Un sceptre tentaculaire qui peut projeter des appendices pour saisir et entraîner des ennemis.",
      details: "Ce sceptre organique d'aspect troublant, aux contours semblables à des tentacules solidifiés, possède 3 charges. En dépensant 1 charge, son porteur ou sa porteuse peut projeter un tentacule magique vers une créature dans un rayon de 9 mètres. La créature doit réussir un jet de sauvegarde de Force (DD 15) ou être agrippée et tirée de 4,5 mètres vers son porteur ou sa porteuse. La condition agrippée peut être défaite par une action ou un jet de Force (DD 15). Se recharge de 1d3 charges à l'aube."
    },

    // 📜 PARCHEMIN
    { nom: "Parchemin de protection", type: "Parchemin", rarete: "Rare", lien: false, prix: "198 po", note: "based: protection from evil and good",
      description: "Un parchemin sacré qui protège contre un type de créature surnaturelle.",
      details: "Ce parchemin à l'encre argentée sur vélin sacré peut être lu en une action. En le lisant, son utilisateur ou utilisatrice crée un cercle de protection contre un type de créature surnaturelle (démons, diables, morts-vivants, fées, élémentaires ou célestes) pendant 5 minutes. Les créatures de ce type ont un désavantage aux jets d'attaque contre lui ou elle et ne peuvent pas le toucher ou l'agripper. Les créatures convoquées ou invoquées de ce type doivent réussir un jet de sauvegarde pour entrer dans le cercle."
    },
    { nom: "Parchemin d'invocation des titans", type: "Parchemin", rarete: "Légendaire", lien: false, prix: "10 890 po", note: "based: 10th level",
      description: "Un parchemin légendaire qui invoque une puissante créature titanesque pour aider son lecteur.",
      details: "Ce vaste parchemin couvert de runes dorées sur fond de peau de dragon contient un sort d'invocation d'une puissance extraordinaire. En le lisant (action), son utilisateur ou utilisatrice invoque un titan — une créature d'une puissance presque divine — qui agit selon ses instructions pendant 1 heure. La créature invoquée possède des capacités dévastatrices qui peuvent modifier le cours d'une bataille entière. Le parchemin se désintègre après utilisation."
    },
    { nom: "Parchemin de sort (niv. 1)", type: "Parchemin", rarete: "Commun", lien: false, prix: "99 po", note: "nan",
      description: "Un parchemin contenant un sort de niveau 1 prêt à être utilisé.",
      details: "Ce parchemin en vélin fin contient les incantations et gestures d'un sort de niveau 1, tracées à l'encre magique. N'importe quelle créature capable de lire peut tenter de l'utiliser. Un lanceur de sorts de la classe appropriée peut le lancer directement en une action. Pour les autres, un test d'Arcanes (DD 11) est requis. Le parchemin se désintègre après utilisation, que la tentative soit réussie ou non. Le sort spécifique est déterminé à la création."
    },
    { nom: "Parchemin de sort (niv. 2)", type: "Parchemin", rarete: "Peu commun", lien: false, prix: "297 po", note: "nan",
      description: "Un parchemin contenant un sort de niveau 2, offrant une capacité supplémentaire.",
      details: "Ce parchemin en vélin de qualité supérieure contient les formules d'un sort de niveau 2. Un lanceur de sorts de niveau 3 ou plus de la classe appropriée peut le lancer directement. Pour les autres, un test d'Arcanes (DD 13) est requis. Le parchemin se désintègre à l'utilisation. Particulièrement utile pour accéder à des sorts hors de la liste de son lanceur ou pour économiser des slots de sorts lors d'une longue journée d'aventure."
    },
    { nom: "Parchemin de sort (niv. 3)", type: "Parchemin", rarete: "Peu commun", lien: false, prix: "495 po", note: "nan",
      description: "Un parchemin renfermant un sort de niveau 3 prêt à être déclenché.",
      details: "Ce parchemin épais est couvert d'inscriptions complexes et d'un dessin du schéma du sort. Il requiert un lanceur de sorts de niveau 5 ou plus de la classe appropriée pour être utilisé sans risque (test d'Arcanes DD 15 pour les autres). Le sort est lancé au niveau 3, avec les caractéristiques du lanceur du parchemin. Un objet précieux pour les personnages qui ont besoin d'accéder à des sorts hors de leur portée habituelle en situation d'urgence."
    },
    { nom: "Parchemin de sort (niv. 4)", type: "Parchemin", rarete: "Rare", lien: false, prix: "990 po", note: "nan",
      description: "Un parchemin rare contenant un sort de niveau 4.",
      details: "Ce parchemin en parchemin de haute qualité porte un sort de niveau 4 écrit à l'encre d'élémental. Il requiert un lanceur de sorts de niveau 7 ou plus de la classe appropriée (test d'Arcanes DD 17 pour les autres). Le sort est lancé avec les attributs de son créateur ou créatrice. Ces parchemins sont souvent vendus à prix d'or car ils permettent à des personnages de niveau inférieur d'accéder à des sorts puissants dans des situations critiques."
    },
    { nom: "Parchemin de sort (niv. 5)", type: "Parchemin", rarete: "Rare", lien: false, prix: "1 386 po", note: "nan",
      description: "Un parchemin précieux contenant un sort de niveau 5.",
      details: "Ce parchemin en peau de dragon séché porte les formules d'un sort de niveau 5, traçées à l'encre magique de haute qualité. Il requiert un lanceur de sorts de niveau 9 ou plus (test d'Arcanes DD 19 pour les autres). En cas d'échec au test, l'effet peut être imprévu — le sort peut se déclencher de façon incontrôlée ou ne pas fonctionner. Ces parchemins sont des trésors précieux pour les groupes qui affrontent des menaces dépassant leurs capacités habituelles."
    },
    { nom: "Parchemin de sort (niv. 6)", type: "Parchemin", rarete: "Très rare", lien: false, prix: "2 772 po", note: "nan",
      description: "Un parchemin très rare renfermant un sort de niveau 6.",
      details: "Ce parchemin imposant en vélin de qualité légendaire porte un sort de niveau 6. Il requiert un lanceur de sorts de niveau 11 ou plus (test d'Arcanes DD 21 pour les autres). Ces parchemins sont extrêmement précieux car les sorts de niveau 6 sont hors de portée de la plupart des aventuriers. Ils sont souvent gardés comme ressources d'urgence absolue ou vendus pour des sommes considérables dans les grandes villes."
    },
    { nom: "Parchemin de sort (niv. 7)", type: "Parchemin", rarete: "Très rare", lien: false, prix: "3 564 po", note: "nan",
      description: "Un parchemin rarissime contenant un sort de niveau 7.",
      details: "Ce précieux parchemin, souvent roulé dans un étui de métal précieux, porte les formules d'un sort de niveau 7. Il requiert un lanceur de sorts de niveau 13 ou plus (test d'Arcanes DD 23 pour les autres). Le simple fait de posséder un tel parchemin est souvent suffisant pour conclure des négociations importantes ou compléter des collections de magie. Ces objets voyagent dans les plus grandes bibliothèques et les coffres des archimages."
    },
    { nom: "Parchemin de sort (niv. 8)", type: "Parchemin", rarete: "Très rare", lien: false, prix: "4 455 po", note: "nan",
      description: "Un parchemin légendaire (niveau très rare) contenant un sort de niveau 8.",
      details: "Ce parchemin en peau de dragon ancien porte les formules arcaïques d'un sort de niveau 8. Il requiert un lanceur de sorts de niveau 15 ou plus (test d'Arcanes DD 25 pour les autres). Ces parchemins sont si rares qu'ils ont parfois leur propre nom dans les archives des guildes de mages. Ils représentent des siècles de recherche et de perfectionnement magique comprimés dans quelques formules écrites à la main."
    },
    { nom: "Parchemin de sort (niv. 9)", type: "Parchemin", rarete: "Légendaire", lien: false, prix: "9 075 po", note: "nan",
      description: "Un parchemin légendaire contenant le sort le plus puissant accessible.",
      details: "Ce parchemin légendaire, souvent protégé par plusieurs couches d'enchantements défensifs, contient un sort de niveau 9. Il requiert un lanceur de sorts de niveau 17 ou plus (test d'Arcanes DD 27 pour les autres). Les sorts de niveau 9 peuvent changer le cours de l'histoire — Vœu, Porte, Résurrection véritable, Arrêt du temps. Un tel parchemin est un trésor de valeur incalculable dont on ne se sépare que contraint ou en échange de quelque chose d'aussi précieux."
    },
    { nom: "Parchemin de sort (tour de magie)", type: "Parchemin", rarete: "Commun", lien: false, prix: "33 po", note: "nan",
      description: "Un simple parchemin contenant un tour de magie utilisable une seule fois.",
      details: "Ce petit parchemin en vélin ordinaire contient les formules d'un tour de magie (cantrip) tracées à l'encre magique simple. N'importe qui peut tenter de l'utiliser (test d'Arcanes DD 10 si non lanceur). Le cantrip est lancé une seule fois et le parchemin se désintègre. Les plus courants incluent Lumière, Prestidigitation et Illusion mineure. Ces parchemins sont relativement accessibles et constituent souvent la première rencontre d'un aventurier avec la magie pratique."
    },
// ════════════════════════════════════════════════════════
    // SECTION 2 (suite) — OBJETS MERVEILLEUX
    // ════════════════════════════════════════════════════════

    { nom: "Tatouage absorbant", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "14 580 po", note: "based: protection from energy (plus 1 level, no concentration), immunity is based on absorb elements",
      description: "Un tatouage magique qui absorbe un type d'énergie et le convertit en vitalité.",
      details: "Ce tatouage complexe est lié à un type d'énergie spécifique — acide, froid, feu, foudre ou nécrotique — représenté par des motifs symboliques sur la peau de son porteur ou sa porteuse. Il confère la résistance permanente à ce type de dégâts. De plus, une fois par jour, lorsqu'il subit des dégâts de ce type, le tatouage peut en absorber jusqu'à 20 points et les convertir en points de vie temporaires. Il brille d'une couleur caractéristique au moment de l'absorption."
    },
    { nom: "Compendium alchimique", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 680 po", note: "Alchemy is treated as Fabricate spell (x3), Treat swap spells as Lv3 added to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un grimoire alchimique qui améliore la fabrication de substances et donne accès à des sorts de transformation.",
      details: "Ce livre épais relié en cuir de dragon est rempli de formules alchimiques, de schémas de distillation et d'annotations marginales cryptiques. Son porteur ou sa porteuse bénéficie d'un bonus aux tests d'Outils d'alchimiste et peut identifier n'importe quelle substance chimique ou magique en une minute. Il peut être utilisé comme focaliseur pour lancer des sorts liés à la transformation et à la fabrication. Des sorts comme Fabrication, Modification de matière et Création peuvent être lancés depuis le grimoire un certain nombre de fois par jour."
    },
    { nom: "Outil polyvalent +1", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 580 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Misc Cost: avg price for various tools/supplies",
      description: "Un outil enchanté qui s'adapte à différents métiers et améliore les compétences artisanales.",
      details: "Cet objet peut prendre la forme de n'importe quel outil d'artisan en 1 minute. Son porteur ou sa porteuse bénéficie d'un bonus de +1 aux jets d'attaque de sorts et au DD de sauvegarde lorsqu'il ou elle utilise l'outil comme focaliseur. Il peut être utilisé comme substitut à n'importe quel outil d'artisan pour les tests associés, conférant également un bonus de +1 à ces tests. Un objet précieux pour les artisans-mages et les personnages polyvalents."
    },
    { nom: "Outil polyvalent +2", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "9 040 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Misc Cost: avg price for various tools/supplies",
      description: "Une version améliorée de l'outil polyvalent, avec un bonus de +2 aux sorts et aux tests d'artisanat.",
      details: "Cette version supérieure de l'outil polyvalent confère un bonus de +2 aux jets d'attaque de sorts, au DD de sauvegarde des sorts et aux tests d'artisan effectués avec l'outil. La maîtrise artisanale qu'il procure est remarquable — les œuvres créées avec cet outil sont d'une qualité supérieure à la normale. Il peut se transformer en n'importe quel outil d'artisan en 1 minute, s'adaptant aux besoins du moment."
    },
    { nom: "Outil polyvalent +3", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "26 160 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Misc Cost: avg price for various tools/supplies",
      description: "Le summum des outils enchantés, conférant un bonus de +3 exceptionnel aux sorts et à l'artisanat.",
      details: "Cet outil extraordinaire représente le pinnacle de la maîtrise artisanale magique. Le bonus de +3 qu'il confère aux jets d'attaque de sorts, au DD de sauvegarde et aux tests d'artisanat en fait un objet convoité des maîtres artisans et des lanceurs de sorts spécialisés. Les créations réalisées avec cet outil sont de qualité magistrale, souvent indiscernables des œuvres créées par magie. Il prend la forme de n'importe quel outil en 1 minute."
    },
    { nom: "Amulette de protection contre la détection et la localisation", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "nan",
      description: "Une amulette qui rend son porteur invisible aux sorts de détection et de localisation.",
      details: "Cette amulette discrète, souvent en forme de plaque métallique gravée de runes de dissimulation, protège son porteur ou sa porteuse contre toutes les formes de détection magique. Il ou elle ne peut pas être la cible de sorts de divination qui tentent de le localiser, et son emplacement ne peut pas être déterminé par Localisation d'objet, Localisation de créatures, Scrutation ou sorts similaires. Une protection précieuse pour les agents infiltrés, les fugitifs et les diplomates en mission sensible."
    },
    { nom: "Amulette du dévot +1", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 640 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Channel Divinty treated as extra Lv1 spell slot",
      description: "Une amulette sacrée qui renforce la connexion divine de son porteur et améliore ses sorts.",
      details: "Cette amulette ornée du symbole d'une divinité est conçue pour les clercs et paladins. Elle confère un bonus de +1 aux jets d'attaque de sorts et au DD de sauvegarde des sorts divins de son porteur ou sa porteuse. Elle peut également être utilisée comme focaliseur sacré. La connexion divine de son porteur est renforcée — l'utilisation de Canalisation divine se recharge légèrement plus vite. Un premier investissement judicieux pour les serviteurs divins débutants."
    },
    { nom: "Amulette du dévot +2", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "9 120 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Channel Divinty treated as extra Lv1 spell slot",
      description: "Une amulette divine de haut rang conférant un bonus de +2 aux sorts sacrés.",
      details: "Cette amulette en métal précieux incrusté de pierres sacrées renforce considérablement les pouvoirs divins de son porteur ou sa porteuse. Le bonus de +2 aux jets d'attaque de sorts et au DD de sauvegarde des sorts divins est ressenti comme une bénédiction directe de la divinité à laquelle l'amulette est consacrée. Sa lueur dorée est visible dans l'obscurité lorsque son porteur ou sa porteuse invoque sa foi en combat."
    },
    { nom: "Amulette du dévot +3", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "26 280 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Channel Divinty treated as extra Lv1 spell slot",
      description: "L'amulette divine la plus puissante, symbole d'une dévotion absolue à sa divinité.",
      details: "Cette amulette légendaire est considérée comme un don direct des dieux à leurs plus fervents serviteurs. Le bonus de +3 aux sorts divins qu'elle confère est inégalé dans sa catégorie. Son porteur ou sa porteuse rayonne d'une aura sacrée perceptible par les créatures sensibles à la magie divine. Les morts-vivants et fiélons à proximité ressentent un malaise inexplicable. Elle représente des années de dévotion récompensées."
    },
    { nom: "Amulette des plans", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "32 400 po", note: "nan",
      description: "Une amulette cosmique qui permet de se téléporter vers n'importe quel plan d'existence.",
      details: "Cette amulette porte gravée une carte schématique de l'arbre du cosmos — une représentation miniature de tous les plans d'existence connus. En se concentrant et en réussissant un test d'Intelligence (Arcanes) DD 15, son porteur ou sa porteuse peut se téléporter vers n'importe quel plan d'existence qu'il ou elle peut nommer. En cas d'échec, il ou elle est transporté(e) vers un plan aléatoire — ce qui peut être extrêmement dangereux. Réservée aux voyageurs planaires expérimentés."
    },
    { nom: "Appareil de Kwalish", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "137 500 po", note: "nan",
      description: "Un crabe mécanique géant — véhicule de combat légendaire créé par l'ingénieux Kwalish.",
      details: "L'Appareil de Kwalish est un crabe mécanique géant en métal, l'une des créations les plus extravagantes de l'inventeur Kwalish. Ce véhicule blindé peut transporter jusqu'à deux occupants dans son habitacle central. Il est capable de se déplacer sur terre et sous l'eau, possède deux pinces d'attaque dévastatrices, peut projeter de l'huile enflammée, résiste aux dégâts de froid et de feu, et l'habitacle protège ses occupants de la plupart des dangers. Son pilotage nécessite de manipuler une série de leviers cryptiques."
    },
    { nom: "Grimoire arcanique +1", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 640 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Extra Arcane Recovery treated as extra Lv1 spell slot",
      description: "Un grimoire enchanté qui améliore les sorts des magiciens et leur récupération arcanique.",
      details: "Ce grimoire relié en cuir souple est couvert de runes dorées qui pulsent légèrement au toucher. Il confère un bonus de +1 aux jets d'attaque de sorts et au DD de sauvegarde pour les magiciens qui l'utilisent comme focaliseur. Il améliore également la Récupération arcanique du magicien, lui permettant de récupérer un slot de sort supplémentaire lors des repos courts. Un investissement rentable pour les magiciens qui cherchent à optimiser leur puissance dès les premiers niveaux."
    },
    { nom: "Grimoire arcanique +2", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "9 120 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Extra Arcane Recovery treated as extra Lv1 spell slot",
      description: "Un grimoire arcanique de haute qualité conférant un bonus de +2 aux sorts.",
      details: "Ce grimoire épais à la reliure de dragon porte des inscriptions runiques complexes sur chaque page. Le bonus de +2 aux jets d'attaque de sorts et au DD de sauvegarde est considérable pour un lanceur de sorts. Sa Récupération arcanique améliorée permet au magicien de récupérer davantage de ressources lors des repos courts. Les sorts transcrits dans ce grimoire semblent plus nets, plus clairs — comme si le grimoire lui-même aidait à les mémoriser."
    },
    { nom: "Grimoire arcanique +3", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "26 280 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, Extra Arcane Recovery treated as extra Lv1 spell slot",
      description: "Le grimoire arcanique ultime, maximisant les capacités magiques d'un magicien.",
      details: "Ce grimoire légendaire est la pièce maîtresse de tout archimage. Le bonus de +3 qu'il confère aux jets d'attaque de sorts et au DD de sauvegarde est inégalé. La Récupération arcanique améliorée est si efficace que le magicien récupère une quantité remarquable de slots de sorts lors de chaque repos court. Le grimoire semble presque conscient — ses pages se tournent parfois seules vers les sorts les plus pertinents pour la situation actuelle."
    },
    { nom: "Éclat astral", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 020 po", note: "At-will Misty Step (plus 1 level for no action economy), Misc cost of focus",
      description: "Un fragment de matière astrale qui permet de se téléporter à volonté sur de courtes distances.",
      details: "Ce petit cristal translucide qui semble contenir des étoiles en mouvement est imprégné d'énergie du Plan Astral. Son porteur ou sa porteuse peut utiliser une action bonus pour se téléporter jusqu'à 9 mètres vers un endroit visible — similaire au sort Pas brumeux mais sans coût magique. Cette capacité est utilisable à volonté, limitée uniquement par les actions bonus disponibles. Une mobilité extraordinaire en combat, permettant de se repositionner constamment ou d'atteindre des positions avantageuses."
    },
    { nom: "Archives d'astromancie", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "5 360 po", note: "Treat swap spells as Lv3 (x3), reaction treated as Lv2 spell and add to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un recueil de divination astrale qui améliore les sorts de divination et offre une réaction prophétique.",
      details: "Ce livre relié en cuir d'étoile contient des cartes stellaires, des prophéties et des formules de divination complexes. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour améliorer ses sorts de divination et accéder à des sorts d'astromancie supplémentaires. Une fois par jour, il peut utiliser sa réaction pour une prédiction prophétique — un effet similaire au sort Augure — pour anticiper le résultat d'une action imminente. Il contient également plusieurs sorts supplémentaires de divination utilisables quotidiennement."
    },
    { nom: "Atlas des horizons sans fin", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 080 po", note: "Treat swap spells as Lv3 (x3), reaction treated as Lv2 spell added to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un atlas magique qui améliore les sorts de voyage et de connaissance géographique.",
      details: "Cet épais atlas à couverture de cuir bleu nuit semble contenir des cartes de royaumes qui n'existent peut-être pas encore — ou qui n'existent plus. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour améliorer ses sorts liés aux voyages et à la localisation. Une fois par jour, il peut utiliser sa réaction pour une analyse territoriale instantanée — lui fournissant des informations précises sur l'environnement dans un rayon de 90 mètres. Il contient également des sorts de voyage et de téléportation supplémentaires utilisables quotidiennement."
    },
    { nom: "Balai dansant de Baba Yaga", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: spiritual weapon",
      description: "Le balai magique légendaire de Baba Yaga, capable de combattre de manière autonome.",
      details: "Ce vieux balai à l'aspect négligé est l'un des objets les plus associés à la légendaire sorcière Baba Yaga. En utilisant une action bonus, son porteur ou sa porteuse peut l'animer : il se dresse et attaque les ennemis de façon autonome dans un rayon de 9 mètres, fonctionnant comme le sort Arme spirituelle. Il utilise le bonus d'attaque de son porteur et inflige des dégâts de force. Il peut être déplacé de 9 mètres par action bonus. Sa dimension magique surprend toujours ceux qui le voient en action pour la première fois."
    },
    { nom: "Sac de haricots", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "— po", note: "Random, not priced",
      description: "Un sac de haricots magiques aux effets totalement aléatoires et imprévisibles.",
      details: "Ce sac contient 3d4 haricots d'apparence ordinaire. Lorsqu'un haricot est planté dans la terre et arrosé, il produit un effet aléatoire déterminé par un jet de dé (table dans le DMG). Les effets vont du bénin (une petite maison, un trésor, des fleurs) au catastrophique (un monstre puissant, une explosion, une malédiction). Lancer un haricot sur une surface solide crée une explosion de 3 mètres de rayon infligeant 5d4 dégâts de feu. Un objet pour les aventuriers téméraires — ou très désespérés."
    },
    { nom: "Sac dévoreur", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "— po", note: "Cursed, not priced",
      description: "Un sac maudit qui dévore ce qu'on y place et aspire parfois les créatures à l'intérieur.",
      details: "Ce sac d'apparence ordinaire est en réalité un piège mortel. Les objets placés à l'intérieur disparaissent dans un espace extradimensionnel dont il est impossible de les récupérer. Pire encore, chaque fois qu'une main est introduite dans le sac, son possesseur risque d'être aspiré à l'intérieur (jet de sauvegarde de Dextérité DD 17). Une créature aspirée dans le sac est dévorée en 1d4 rounds si elle ne parvient pas à s'en échapper. Ce sac est impossible à distinguer d'un sac sans fond sans un test d'Intelligence (Arcanes) DD 20 ou un sort d'Identification."
    },
    { nom: "Sac sans fond", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 485 po", note: "based: floating disk",
      description: "Un sac à l'intérieur extradimensionnel pouvant contenir une quantité extraordinaire d'objets.",
      details: "Ce sac en toile robuste possède un intérieur extradimensionnel bien plus grand que son enveloppe externe ne le suggère. Il peut contenir jusqu'à 500 kg d'objets dont le volume total ne dépasse pas 2 mètres cubes, tout en ne pesant que 7,5 kg. Récupérer un objet demande une action. Si le sac est percé, déchiré, retourné ou mis dans un autre espace extradimensionnel, son contenu est dispersé dans le Plan Éthéré et le sac est détruit. Un outil indispensable pour tout aventurier chargé de butin."
    },
    { nom: "Sac à malices", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4 455 po", note: "based: conjure animals (plus 1 level, no concentraiton, highest level monster is CR 2)",
      description: "Un petit sac dont on peut tirer des pelotes de laine qui se transforment en créatures vivantes.",
      details: "Ce sac contient des pelotes de laine colorées qui semblent ordinaires. En sortant une pelote et en la lançant à 6 mètres de distance, elle se transforme en une créature aléatoire (selon la couleur du sac : gris, rouille ou tan, chaque couleur déterminant la table de créatures). La créature invoquée est amicale et obéit à son invocateur ou invocatrice pendant 1 minute. Elle agit à la fin du tour de son propriétaire. Chaque sac contient 3 pelotes qui se rechargent à l'aube."
    },
    { nom: "Tatouage de barrière (CA 12+Dex)", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "1 350 po", note: "based: mage armor",
      description: "Un tatouage protecteur qui génère une armure magique permanente sur son porteur.",
      details: "Ce tatouage élaboré couvre une grande partie du corps de son porteur ou sa porteuse, représentant des motifs géométriques ou des entrelacs qui semblent se déplacer légèrement. Tant qu'il est actif, son porteur ou sa porteuse non armé(e) bénéficie d'une CA de 12 + son modificateur de Dextérité — équivalent au sort Armure du mage mais permanent. Les effets s'annulent si une armure physique est portée par-dessus. Idéal pour les sorciers et les moines qui ne portent pas d'armure."
    },
    { nom: "Tatouage de barrière (CA 15+Dex)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "3 600 po", note: "based: barkskin",
      description: "Un tatouage de barrière plus puissant conférant une CA de 15 + Dextérité.",
      details: "Ce tatouage dense et complexe représente des écorces entrelacées, des runes de protection ou des motifs tribaux guerriers. Tant qu'il est actif, son porteur ou sa porteuse bénéficie d'une CA de 15 + son modificateur de Dextérité sans porter d'armure physique. Cette protection est légèrement supérieure à l'Armure du mage classique. Le tatouage peut être activé ou désactivé par une action bonus, permettant de combiner son effet avec d'autres protections ou de le mettre en veille selon les besoins."
    },
    { nom: "Tatouage de barrière (CA 18)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "9 000 po", note: "based: Lv3 spell",
      description: "Le tatouage de barrière le plus puissant, conférant une CA fixe de 18 sans armure.",
      details: "Ce tatouage extraordinaire couvre une grande partie du corps de son porteur ou sa porteuse dans un réseau dense de runes protectrices entrelacées. Il confère une CA fixe de 18, indépendamment de la Dextérité ou de l'armure portée — une protection équivalente à un harnois complet sans aucune des contraintes physiques. Cette CA de 18 ne se combine pas avec une armure physique mais fonctionne avec un bouclier. Prisé des sorciers, moines et barbares qui cherchent une protection maximale sans contrainte."
    },
    { nom: "Perle de force", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "13 933 po", note: "based: resilient sphere (plus 1 level, no concentration), add charges per bead",
      description: "Une petite perle qui explose en une sphère de force impénétrable emprisonnant sa cible.",
      details: "Cette perle de verre dense ne paie pas de mine, mais renferme une énergie de force comprimée. En la lançant sur une créature ou un espace (action, portée 18 m), elle explose en une sphère translucide de 3 mètres de diamètre — similaire au sort Sphère résiliente. La sphère est impénétrable et emprisonne tout ce qui s'y trouve. Elle peut être roulée mais pas brisée par des dégâts physiques. Seule la désintégration ou une dissipation réussie peuvent la détruire. Elle disparaît après 1 minute. Usage unique."
    },
    { nom: "Perle de nourrissement", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "99 po", note: "based: goodberry",
      description: "Une perle magique qui, lorsqu'elle est avalée, nourrit son consommateur pour une journée entière.",
      details: "Cette petite perle luisante blanche ou verte a la taille d'un petit pois. En l'avalant, elle nourrit suffisamment son consommateur ou sa consommatrice pour une journée entière, sans aucun autre besoin alimentaire. Elle ne restaure pas de points de vie et n'a aucun effet thérapeutique, mais élimine totalement la faim et la soif. Pratique lors des longues expéditions où les provisions sont limitées, ou lorsqu'il faut voyager rapidement sans s'arrêter pour chasser ou cuisiner."
    },
    { nom: "Perle de rafraîchissement", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "99 po", note: "based: create or destroy water",
      description: "Une perle magique qui étanche la soif et rafraîchit instantanément son utilisateur.",
      details: "Cette petite perle bleu pâle dégage une légère fraîcheur au toucher. En la tenant dans la main et en l'activant, elle génère suffisamment d'eau fraîche et pure pour désaltérer une personne complètement. Elle peut également être utilisée pour purifier de l'eau polluée ou contaminée : placée dans un récipient d'eau douteuse, elle la rend potable en quelques secondes. Modeste mais indispensable en milieu aride ou lors d'expéditions prolongées."
    },
    { nom: "Branche à clochettes", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 160 po", note: "based: protection spell (x3), detect evil & good, misc cost of focus",
      description: "Une branche sacrée ornée de clochettes qui protège contre les êtres surnaturels.",
      details: "Cette petite branche d'if ou de sorbier est ornée de trois clochettes en métal argenté. Elle peut être utilisée comme focaliseur sacré par les clercs et druides. Elle possède 3 charges permettant de lancer Protection contre le mal et le bien. Une fois par jour, son porteur ou sa porteuse peut l'agiter pour lancer Détection du mal et du bien sans charge. Lorsque des créatures surnaturelles approchent à moins de 9 mètres, les clochettes tintent doucement — un avertissement précieux. Se recharge de 1d3 charges à l'aube."
    },
    { nom: "Ceinturon de la gent naine", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "8 460 po", note: "not included: advantage on CHA, dwarven language",
      description: "Un large ceinturon nain qui transforme son porteur en stature naine avec les aptitudes correspondantes.",
      details: "Ce large ceinturon orné de motifs runiques nains transforme son porteur ou sa porteuse non-nain(e) de manière remarquable : sa taille diminue à celle d'un nain (environ 1,2-1,5 m), il ou elle acquiert la vision dans le noir de 18 mètres, la résistance aux poisons, l'avantage aux tests de Constitution contre les poisons, la maîtrise des outils de mineur et de maçon, et la connaissance du nain. Un objet apprécié dans les communautés naines qui accueillent des non-nains au sein de leurs clans."
    },
    { nom: "Ceinturon de force de géant des nuages", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "113 400 po", note: "nan",
      description: "Un ceinturon légendaire qui confère la force prodigieuse d'un géant des nuages.",
      details: "Ce ceinturon imposant taillé dans des nuages pétrifiés et serti de cristaux de brume fixe la Force de son porteur ou sa porteuse à 27 — une puissance quasi divine. Les géants des nuages sont connus comme les plus intelligents et les plus nobles de leur espèce. Avec une Force de 27, son porteur peut soulever des créatures de taille Gigantesque, défoncer des murailles d'un coup de poing et impressionner même les créatures les plus imposantes. Un objet réservé aux plus grands champions des royaumes."
    },
    { nom: "Ceinturon de force de géant du feu", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "52 920 po", note: "nan",
      description: "Un ceinturon ardent qui confère la force brûlante d'un géant du feu.",
      details: "Ce ceinturon de métal rougeâtre chaud au toucher fixe la Force de son porteur ou sa porteuse à 25. Légèrement moins puissant que le ceinturon de géant des nuages mais bien plus accessible, il confère néanmoins une puissance physique extraordinaire. Son porteur ou sa porteuse peut accomplir des prouesses physiques remarquables — soulever des pierres massives, frapper avec une puissance dévastatrice, impressionner par la seule démonstration de sa force. Un léger parfum de soufre accompagne parfois son porteur."
    },
    { nom: "Ceinturon de force de géant des collines", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "18 900 po", note: "nan",
      description: "Un ceinturon robuste qui confère la force brutale d'un géant des collines.",
      details: "Ce large ceinturon de cuir épais clouté de métal sombre fixe la Force de son porteur ou sa porteuse à 21. Les géants des collines sont les moins nobles mais les plus communs des géants — brutes puissantes et directes. Cette Force de 21 dépasse largement les limites humaines ordinaires, permettant une puissance de combat et de travail physique considérable. C'est le ceinturon de géant le plus fréquemment rencontré dans les aventures, et le premier que la plupart des aventuriers covpitent."
    },
    { nom: "Ceinturon de force de géant de pierre/givre", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "39 690 po", note: "nan",
      description: "Un ceinturon massif qui confère la force titanesque d'un géant de pierre ou de givre.",
      details: "Ce ceinturon taillé dans du granit poli ou de la glace éternelle fixe la Force de son porteur ou sa porteuse à 23. Les géants de pierre et de givre sont connus pour leur endurance et leur brutalité en combat. Avec cette Force exceptionnelle, son porteur peut arracher des rochers de la montagne, écraser ses adversaires avec une puissance dévastatrice et accomplir des prouesses physiques normalement réservées aux créatures de taille Gigantesque."
    },
    { nom: "Ceinturon de force de géant des tempêtes", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "141 750 po", note: "nan",
      description: "Le ceinturon le plus puissant qui soit, conférant la Force légendaire d'un géant des tempêtes.",
      details: "Ce ceinturon légendaire en métal tempéré par la foudre fixe la Force de son porteur ou sa porteuse à 29 — la Force la plus haute jamais conférée par un objet magique. Les géants des tempêtes sont les plus puissants et les plus sages de toute leur espèce, commandant le tonnerre et les océans. Avec une Force de 29, son porteur ou sa porteuse peut soulever un dragon adulte, frapper avec une puissance équivalente à un impact de météorite, et effectuer des prouesses physiques qui font entrer son nom dans la légende."
    },
    { nom: "Blackrazor", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact légendaire — épée noire insatiable qui dévore les âmes de ses victimes.",
      details: "Blackrazor est l'une des épées les plus redoutées de tous les plans d'existence. Sa lame d'un noir absolu semble absorber la lumière environnante. Elle est consciente, assoiffée d'âmes, et chuchote à son porteur ou sa porteuse pour l'inciter à tuer. Lorsqu'elle tue une créature, elle en absorbe l'âme, conférant des points de vie temporaires et un bonus de Force temporaire. Elle confère également la hâte, une immunité contre certains effets de peur, et d'autres capacités redoutables. Son influence corruptrice peut progressivement altérer la personnalité de son porteur."
    },
    { nom: "Tatouage de fureur sanguinaire", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "27 000 po", note: "treat reaction as hellish rebuke spell, necrotic damage as vampiric touch (+1 level)",
      description: "Un tatouage nécromantique qui déchaîne une fureur dévastatrice et vole la vitalité des ennemis.",
      details: "Ce tatouage sombre représente des flammes nécrotiques ou des motifs de rage qui s'animent lorsque son porteur ou sa porteuse entre en combat. Lorsqu'il ou elle subit des dégâts, il peut utiliser sa réaction pour déclencher une représaille nécrotique similaire au sort Représailles infernales, mais en dégâts nécrotiques. De plus, ses attaques à mains nues infligent des dégâts nécrotiques supplémentaires qui se convertissent en points de vie pour lui ou elle — une capacité vampirique redoutable en combat prolongé."
    },
    { nom: "Fiole du puits de sang +1", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "3 900 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, extra spell points = Lv3 spell",
      description: "Une fiole nécromantique conçue pour les sorciers de sang, améliorant leurs sorts et leur réserve.",
      details: "Cette fiole de verre sombre contient toujours une petite quantité de liquide rouge qui ne semble jamais se tarir. Elle est conçue pour les sorciers de la lignée de sang ou aux origines nécromantiques. Elle confère un bonus de +1 aux jets d'attaque de sorts et au DD de sauvegarde. Elle peut également être utilisée pour augmenter la réserve de points de sorcellerie d'un sorcier, fonctionnant comme des points supplémentaires. Un focaliseur puissant pour les sorciers qui manipulent les forces vitales."
    },
    { nom: "Fiole du puits de sang +2", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "10 800 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, extra spell points = Lv3 spell",
      description: "Une fiole nécromantique de haut rang offrant un bonus de +2 aux sorts de sorcier.",
      details: "Cette fiole d'un rouge profond et brillant amplifie considérablement les pouvoirs d'un sorcier de sang ou aux origines nécromantiques. Le bonus de +2 aux jets d'attaque de sorts et au DD de sauvegarde est notable. La réserve de points de sorcellerie supplémentaire qu'elle confère permet au sorcier d'utiliser davantage de métamagie ou d'autres capacités liées à ces points. Le liquide dans la fiole semble frémir légèrement en présence de magie nécromantique."
    },
    { nom: "Fiole du puits de sang +3", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "28 800 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, extra spell points = Lv3 spell",
      description: "La fiole nécromantique ultime pour un sorcier de sang, avec un bonus de +3.",
      details: "Cette fiole d'un rouge presque noir est l'ultime focaliseur pour un sorcier aux origines nécromantiques ou sanguinaires. Le bonus de +3 aux jets d'attaque de sorts et au DD de sauvegarde place son porteur ou sa porteuse parmi les lanceurs de sorts les plus puissants. La réserve supplémentaire de points de sorcellerie est considérable, permettant une utilisation intense de la métamagie. La fiole dégage une légère chaleur et son liquide semble pulser au rythme du cœur de son porteur."
    },
    { nom: "Livre des actes exaltés", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact sacré réservé aux êtres d'alignement bon, source de sagesse et de puissance divine.",
      details: "Ce livre à la couverture d'or et aux pages de lumière solidifiée ne peut être tenu ou lu que par des créatures d'alignement bon — les autres subissent des dégâts radiants au simple toucher. Son contenu est une compilation de sagesse divine, de rituels sacrés et de secrets théologiques d'une profondeur extraordinaire. Un lecteur ou une lectrice qui en étudie le contenu pendant 48 heures sur 6 jours gagne des capacités divines permanentes. Le livre lui-même dégage une aura de bienveillance perceptible par toutes les créatures sensibles à la magie sacrée."
    },
    { nom: "Livre des ténèbres viles", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact maudit réservé aux êtres maléfiques, source de pouvoirs nécromantiques corrompus.",
      details: "Ce livre à la couverture de cuir noir taché de sang et aux pages jaunies ne peut être touché sans souffrir par les créatures d'alignement bon. Son contenu est une compilation de rituels d'une malveillance absolue, de secrets nécromantiques interdits et de pactes démoniaques. Un lecteur ou une lectrice maléfique qui en étudie le contenu pendant 48 heures sur 6 jours gagne des capacités nécromantiques et des pouvoirs liés au mal permanent. Une odeur de soufre et de mort accompagne quiconque le porte."
    },
    { nom: "Bottes de fausses pistes", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: disguise self (minus 1 level)",
      description: "Des bottes enchantées qui laissent de fausses empreintes pour égarer les poursuivants.",
      details: "Ces bottes ordinaires en apparence possèdent un enchantement discret mais ingénieux. En les portant, leur porteur ou sa porteuse peut activer à volonté une fonction qui modifie les empreintes laissées dans le sol : elles peuvent représenter différentes pointures, différentes espèces (humain, nain, elfe), aller dans la direction opposée au sens de marche, ou même disparaître complètement sur les surfaces molles. Un outil apprécié des espions, des fugitifs et des chasseurs qui veulent semer les pisteurs."
    },
    { nom: "Bottes de lévitation", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "3 600 po", note: "based: levitate",
      description: "Des bottes magiques qui permettent de s'élever verticalement dans les airs à volonté.",
      details: "Ces bottes légèrement plus lourdes que la normale permettent à leur porteur ou sa porteuse de s'élever et de descendre verticalement à volonté, jusqu'à 18 mètres de hauteur, à une vitesse de 6 mètres par round. Il est possible de rester suspendu en l'air indéfiniment. La lévitation est uniquement verticale — se déplacer horizontalement nécessite de se pousser contre des surfaces ou d'utiliser des cordes. Idéales pour éviter les zones de sol dangereux, inspecter des plafonds de caverne ou prendre de la hauteur lors d'un combat."
    },
    { nom: "Bottes de rapidité", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 800 po", note: "based: zephyr strike",
      description: "Des bottes enchantées qui permettent à leur porteur de se déplacer avec une vitesse surnaturelle.",
      details: "Ces bottes légères aux semelles gravées de runes de vent permettent à leur porteur ou sa porteuse, une fois par jour, d'activer une rafale de vitesse : pendant 1 minute, sa vitesse de déplacement double, les attaques d'opportunité contre lui ou elle ont un désavantage, et il ou elle peut se déplacer de sa vitesse complète sans déclencher d'attaque d'opportunité pendant ce même tour. En combat, cette mobilité accrue peut permettre d'atteindre un ennemi distant ou de s'éloigner d'une situation dangereuse."
    },
    { nom: "Bottes de course et de bonds", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "1 350 po", note: "based: jump",
      description: "Des bottes qui triplent la capacité de saut de leur porteur et augmentent légèrement sa vitesse.",
      details: "Ces bottes robustes en cuir épais, dont les semelles sont marquées de runes de mouvement, donnent à leur porteur ou sa porteuse des jambes aux capacités remarquables. Sa distance de saut est triplée dans toutes les directions. De plus, sa vitesse de déplacement augmente de 3 mètres. Ces bottes sont populaires parmi les explorateurs, les rangers et tous ceux qui doivent traverser des terrains accidentés où les bonds sont nécessaires. Elles permettent souvent d'atteindre des passages qui seraient autrement inaccessibles."
    },
    { nom: "Bottes des terres hivernales", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "4 050 po", note: "based: freedom of movement minus 2 levels",
      description: "Des bottes fourrées qui protègent des terrains enneigés et permettent de marcher sur la glace.",
      details: "Ces bottes isolantes fourrées de laine magique protègent contre les rigueurs des hivers les plus sévères. Leur porteur ou sa porteuse ne subit aucun désavantage à la Discrétion lors des déplacements dans la neige, peut marcher normalement sur la glace sans risquer de glisser, est immunisé aux effets de froid climatique naturel (pas aux dégâts de froid magiques), et peut ignorer le terrain difficile causé par la neige ou la glace. Un équipement indispensable pour les expéditions nordiques."
    },
    { nom: "Brassards d'archerie", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 250 po", note: "nan",
      description: "Des brassards enchantés qui améliorent la précision et la portée des attaques à l'arc.",
      details: "Ces élégants brassards en cuir ou en métal léger sont gravés de motifs de flèches et de cibles. Leur porteur ou sa porteuse bénéficie d'un bonus de +2 aux jets d'attaque effectués avec des arcs, ainsi qu'une augmentation de 15 mètres de la portée normale et maximale de ses arcs. La stabilité que confèrent ces brassards permet au tireur ou à la tireuse d'annuler légèrement les effets du vent et du mouvement sur ses tirs. Très prisés des rangers, des archers de combat et des chasseurs."
    },
    { nom: "Brassards de défense", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "5 400 po", note: "nan",
      description: "Des brassards magiques qui confèrent une CA de 13 + Dextérité sans armure.",
      details: "Ces brassards solides, souvent en métal gravé de runes défensives, confèrent à leur porteur ou sa porteuse non armé(e) une CA de 13 + son modificateur de Dextérité. Contrairement aux armures physiques, ils ne nécessitent aucune maîtrise d'armure et ne peuvent pas être retirés de force en combat sauf par Délivrance des malédictions. Ils sont particulièrement utiles pour les moines et les sorciers qui ne peuvent ou ne veulent pas porter d'armure physique mais ont besoin d'une protection accrue."
    },
    { nom: "Brasero de commandement des élémentaires de feu", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "7 392 po", note: "based: conjure elemental (plus 1 level, no cocentration)",
      description: "Un brasero rituel permettant d'invoquer et de contrôler un élémentaire de feu.",
      details: "Ce brasero en bronze martelé est orné de motifs de flammes et de salamandres. En le remplissant de charbon ardent et en prononçant les formules adéquates (action), son utilisateur ou utilisatrice peut invoquer un élémentaire de feu qui obéit à ses ordres sans nécessiter de concentration. L'élémentaire reste invoqué pendant 1 heure ou jusqu'à ce qu'il soit réduit à 0 PV. Le brasero peut être utilisé une fois par jour. Son utilisation en intérieur présente un risque d'incendie selon le contexte."
    },
    { nom: "Balai volant", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "4 500 po", note: "based: fly",
      description: "Un balai enchanté qui vole à la demande, transportant son cavalier ou sa cavalière dans les airs.",
      details: "Ce balai ordinaire en apparence obéit à son propriétaire ou sa propriétaire attuné(e). Sur commande verbale, il peut voler à une vitesse de 15 mètres, pouvant transporter jusqu'à 120 kg (une personne de taille M avec son équipement). Son propriétaire peut monter dessus et le guider comme une monture aérienne, ou le faire voler seul pour transporter des objets. Il peut rester immobile dans les airs. S'il est monté mais que son porteur perd connaissance, il tombe. Un outil classique des sorcières et magiciens de la tradition populaire."
    },
    { nom: "Chandelle d'invocation", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "28 350 po", note: "based: gate & unlimited guardian of nature",
      description: "Une chandelle rituelle qui, allumée, ouvre un portail vers un plan d'existence externe.",
      details: "Cette chandelle noire aux reflets violets est faite d'une cire imbibée de substances planaires rares. En l'allumant lors d'un rituel (1 minute), son porteur ou sa porteuse peut ouvrir un portail vers un plan d'existence externe de son choix — similaire au sort Portail. Une créature planaire voisine peut émerger par ce portail et sera généralement disposée à négocier ou à aider. La chandelle brûle pendant 4 heures et doit être portée sur soi lors de l'utilisation. Elle se consume entièrement après usage et ne peut être rechargée."
    },
    { nom: "Chandelle des abysses", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: light",
      description: "Une chandelle mystérieuse à la flamme noire qui éclaire d'une lumière surnaturelle inquiétante.",
      details: "Cette chandelle noire brûle d'une flamme d'un violet sombre ou d'un rouge sang. Contrairement aux chandelles ordinaires, elle projette une lumière froide et surnaturelle dans un rayon de 3 mètres (lumière vive), sans dégager de chaleur. Elle peut être allumée et éteinte à volonté. Sa combustion n'est pas affectée par le vent. Les créatures qui voient uniquement dans le noir peuvent la voir normalement. Appréciée des nécromanciens et des adeptes du culte des ténèbres pour son esthétique particulière."
    },
    { nom: "Bonnet de respiration aquatique", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4 950 po", note: "based: water breathing",
      description: "Un bonnet magique qui permet de respirer sous l'eau indéfiniment.",
      details: "Ce bonnet en tissu imperméable tissé d'algues magiques permet à son porteur ou sa porteuse de respirer sous l'eau de façon permanente, aussi naturellement qu'en surface. Il ne confère pas la capacité de nager plus vite ni de voir dans les eaux troubles, mais élimine complètement le risque de noyade. Facile à porter sous d'autres coiffures, il est particulièrement discret. Idéal pour les aventuriers qui explorent régulièrement des environnements aquatiques sans vouloir dépendre de potions coûteuses."
    },
    { nom: "Cape du charlatan", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 960 po", note: "based: dimension door",
      description: "Une cape mystérieuse qui permet de se téléporter instantanément sur de courtes distances.",
      details: "Cette cape aux reflets changeants dissimule un enchantement de téléportation. Deux fois par jour, son porteur ou sa porteuse peut activer la cape en utilisant une action pour se téléporter jusqu'à 30 mètres vers un endroit visible ou connu — similaire au sort Porte dimensionnelle mais sans pouvoir emmener d'autres personnes. La cape tourbillonne dramatiquement lors de l'activation, laissant une légère traînée de lumière à l'endroit du départ. Un outil idéal pour les roublards et les escamoteurs qui aiment disparaître au moment opportun."
    },
    { nom: "Tapis volant (3x5)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "14 850 po", note: "based: fly, 1 creature (plus 1 level, no concentration)",
      description: "Un petit tapis volant pour une personne, capable de voler à 24 mètres par round.",
      details: "Ce tapis finement tissé de motifs géométriques en fils d'or et d'argent mesure environ 90 cm × 1,5 m. Sur commande verbale de son propriétaire ou sa propriétaire, il s'élève dans les airs et vole à une vitesse de 24 mètres. Il peut transporter une personne de taille M avec son équipement. Il obéit aux directives de son propriétaire, qui peut le piloter mentalement en le chevauchant. Il atterrit en douceur lorsqu'on lui en donne l'ordre ou lorsque son propriétaire en descend."
    },
    { nom: "Tapis volant (4x6)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "29 700 po", note: "based: fly, 2 creatures (plus 1 level, no concentration)",
      description: "Un tapis volant de taille moyenne pouvant transporter deux personnes.",
      details: "Ce tapis de taille respectable (1,2 m × 1,8 m) peut transporter jusqu'à deux personnes de taille M avec leur équipement standard. Il vole à une vitesse de 24 mètres et obéit aux directives vocales de son propriétaire ou sa propriétaire attuné(e). Ses motifs complexes témoignent d'un artisanat exceptionnel, probablement d'origine orientale ou exotique. Populaire pour les voyages discrets à deux, ou pour transporter un compagnon incapacité hors d'une zone de danger."
    },
    { nom: "Tapis volant (5x7)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "44 550 po", note: "based: fly, 3 creatures (plus 1 level, no concentration)",
      description: "Un grand tapis volant capable de transporter jusqu'à trois personnes.",
      details: "Ce grand tapis luxueux (1,5 m × 2,1 m) est assez grand pour transporter trois personnes confortablement. Il vole à une vitesse de 24 mètres et répond aux commandes vocales de son propriétaire ou sa propriétaire. Ses motifs élaborés évoquent des scènes de cités célestes et de nuages dorés. Un tapis de ce calibre est souvent un bien de famille noble ou un trésor de sultan — il attire les regards et signale inévitablement que son propriétaire est une personne d'importance."
    },
    { nom: "Tapis volant (6x9)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "59 400 po", note: "based: fly, 4 creatures (plus 1 level, no concentration)",
      description: "Le plus grand des tapis volants, transportant jusqu'à quatre personnes à grande vitesse.",
      details: "Ce tapis volant imposant (1,8 m × 2,7 m) peut transporter jusqu'à quatre personnes de taille M avec leur équipement. Ses tissages d'or et d'argent représentent des panoramas aériens de royaumes fantastiques. Il vole à une vitesse de 24 mètres. C'est un moyen de transport de luxe qui peut accueillir un petit groupe d'aventuriers — assez grand pour tenir assis confortablement pendant un long voyage. Son propriétaire ou sa propriétaire doit cependant veiller à l'équilibre de la charge lors des virages."
    },
    { nom: "Chaudron de renaissance", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "10 860 po", note: "based: raise dead, Misc cost for scrying focus",
      description: "Un chaudron mystique capable de ressusciter un mort ou de révéler l'avenir.",
      details: "Ce grand chaudron en bronze noirci est orné de motifs de renaissance — phénix, serpents se mordant la queue, spirales de vie et de mort. Si un corps entier y est placé avec des herbes rares (coût 300 po) et que le rituel est récité pendant 1 heure, la créature morte peut être ramenée à la vie comme avec le sort Rappel à la vie. De plus, une fois par jour, il peut être utilisé comme boule de scrutation pour observer un lieu distant. Un objet prisé des cercles druidiques et des traditions de magie des anciens."
    },
    { nom: "Encensoir de contrôle des élémentaires d'air", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "7 392 po", note: "based: conjure elemental (plus 1 level, no cocentration)",
      description: "Un encensoir rituel permettant d'invoquer et de contrôler un élémentaire d'air.",
      details: "Cet encensoir en argent poli finement ouvragé produit naturellement une légère brise. En le remplissant d'encens spécifique et en prononçant les formules adéquates (action), son utilisateur ou utilisatrice peut invoquer un élémentaire d'air qui obéit à ses ordres sans nécessiter de concentration. L'élémentaire reste invoqué pendant 1 heure ou jusqu'à sa réduction à 0 PV. Il peut être utilisé une fois par jour. La fumée d'encens prend des formes aériennes fantastiques lors de l'invocation."
    },
    { nom: "Dé du charlatan", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "300 po", note: "based: minor illusion",
      description: "Un dé magique qui peut afficher le résultat désiré par son propriétaire.",
      details: "Ce dé à six faces d'apparence ordinaire dissimule un enchantement d'illusion. Son porteur ou sa porteuse attuné(e) peut, en le lançant, décider mentalement du résultat apparent — les faces de l'illusion afficheront le chiffre désiré, tandis que le résultat réel (caché dessous) peut être différent. Les observateurs à moins de 1,5 mètre qui réussissent un test de Sagesse (Perception) DD 13 peuvent détecter que quelque chose est anormal. Un outil de triche pour les joueurs professionnels, les charlatans et les arnaqueurs avisés."
    },
    { nom: "Carillon d'ouverture", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "4 320 po", note: "based: knock",
      description: "Un carillon magique dont la sonnerie ouvre toutes les serrures et fixations dans un rayon proche.",
      details: "Ce petit carillon en argent émet une note pure et cristalline. Il possède 10 charges. En dépensant 1 charge et en l'agitant (action), son porteur ou sa porteuse peut lancer Débloquer sur tout ce qui est fermé à clé, verrouillé magiquement ou fermé dans un rayon de 18 mètres. La sonnerie est audible jusqu'à 90 mètres — discret n'est pas son point fort, mais son efficacité est inégalée pour ouvrir des portes, des coffres, des menottes ou des serrures complexes. Il récupère 1d10 charges à l'aube."
    },
    { nom: "Cerceau de déflagration", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 188 po", note: "based: scorching ray",
      description: "Un cerceau magique qui peut lancer des rayons enflammés sur des cibles multiples.",
      details: "Ce cerceau métallique gravé de flammes stylisées possède 3 charges. En le lançant (action) vers un ou plusieurs ennemis dans un rayon de 36 mètres, son porteur ou sa porteuse peut dépenser 1 charge pour projeter 3 rayons de feu distincts — similaires au sort Rayon ardent (DD d'attaque +5). Chaque rayon inflige 2d6 dégâts de feu. Les 3 rayons peuvent cibler une même créature ou être répartis sur plusieurs. Le cerceau revient à la main après utilisation. Il récupère 1d3 charges à l'aube."
    },
    { nom: "Cape de l'araignée", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "12 780 po", note: "based: spider climb (plus 1 level, no concentration), web",
      description: "Une cape en soie d'araignée qui permet d'escalader les surfaces et de lancer des toiles.",
      details: "Cette cape tissée de soie d'araignée géante est étonnamment légère et résistante. Son porteur ou sa porteuse peut escalader n'importe quelle surface, y compris les plafonds, à sa vitesse normale sans test requis. De plus, il ou elle peut lancer le sort Toile d'araignée deux fois par jour sans composantes. Les petites araignées semblent instinctivement éviter de mordre son porteur ou sa porteuse. Une cape très appréciée des espions et des infiltrateurs qui doivent accéder à des positions élevées ou piéger des zones stratégiques."
    },
    { nom: "Cape flottante", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: gust",
      description: "Une cape légère qui flotte gracieusement comme portée par une brise perpétuelle.",
      details: "Cette cape légère en tissu fin est toujours gonflée d'une légère brise magique, flottant et ondulant même par temps calme. L'effet est purement esthétique dans la plupart des conditions, mais sa légèreté surnaturelle permet à son porteur ou sa porteuse de ralentir légèrement une chute (réduisant les dégâts de chute de 10 pieds). Elle produit également un effet de Bourrasque mineur une fois par jour — suffisant pour éteindre des flammes ordinaires ou dévier de petits projectiles légers."
    },
    { nom: "Cape elfique", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9 000 po", note: "based: enhance ability x2  (plus 1 level, no concentration)",
      description: "Une cape confectionnée par des artisans elfes qui améliore la Dextérité et la discrétion.",
      details: "Cette cape légère aux reflets changeants — verts en forêt, gris en roche, blanc en neige — est un chef-d'œuvre de la confection elfique. Son porteur ou sa porteuse bénéficie d'un avantage aux tests de Dextérité (Discrétion), et sa cape adopte automatiquement les couleurs de son environnement. De plus, il ou elle bénéficie d'un avantage aux tests de Dextérité (Escamotage). Cette cape permet de se fondre dans presque tous les décors naturels, rendant son porteur extrêmement difficile à repérer même pour des observateurs attentifs."
    },
    { nom: "Cape d'invisibilité", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "42 000 po", note: "based: greater invisibility (plus 1 level, no concentration), 2 hours = effective permanent",
      description: "La cape légendaire d'invisibilité qui rend son porteur totalement invisible à volonté.",
      details: "Cette cape d'une texture presque immatérielle semble absorber la lumière. En la portant et en tirant le capuchon sur la tête (action), son porteur ou sa porteuse devient totalement invisible — même ses attaques et ses sorts ne la rompent pas. Cette invisibilité dure jusqu'à 2 heures cumulatives par jour (le temps se recharge à l'aube). Contrairement aux potions, l'effet résiste aux attaques. La cape légendaire par excellence — objet de convoitise, de légendes et de complots royaux depuis des siècles."
    },
    { nom: "Cape aux multiples apparences", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "990 po", note: "based: disguise self",
      description: "Une cape magique qui peut changer d'apparence à volonté pour imiter d'autres vêtements.",
      details: "Cette cape possède un enchantement d'illusion qui lui permet de changer complètement d'apparence sur commande (action). Elle peut imiter n'importe quel type de vêtement — une cape somptueuse pour la cour, une bure de moine, une veste de travailleur ou même un manteau militaire. L'illusion est visuelle uniquement — au toucher, la texture reste celle d'une cape ordinaire. Une créature qui inspecte l'apparence de près peut détecter l'illusion avec un test de Sagesse (Perception) DD 13. Idéale pour les aventuriers qui doivent s'adapter rapidement à différents contextes sociaux."
    },
    { nom: "Amulette mécanique", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "792 po", note: "based: 2nd-level spell power",
      description: "Une amulette à rouages qui peut stocker et libérer une petite charge magique.",
      details: "Cette amulette en métal présente de petits rouages et engrenages miniatures visibles à travers son boîtier de cristal. Elle peut être chargée par un lanceur de sorts (action, sort de niveau 1 ou 2) et libérer ce sort ultérieurement. Son porteur ou sa porteuse peut déclencher le sort stocké en une action, sans dépenser de ressource magique. Le sort utilise les paramètres de celui qui l'a chargé. L'amulette ne peut stocker qu'un seul sort à la fois. Un outil utile pour les non-mages qui souhaitent avoir accès à un sort d'urgence."
    },
    { nom: "Vêtements de réparation", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: mending",
      description: "Des vêtements enchantés qui se réparent automatiquement de toute déchirure ou dommage.",
      details: "Ces vêtements — généralement une tenue complète ou une pièce de valeur — sont enchantés avec un sort de Réparation permanent. Toute déchirure, brûlure ou dommage physique se répare automatiquement en quelques secondes : les fils se retissent, les taches disparaissent, les boutons arrachés se remplacent. Les vêtements restent toujours dans un état impeccable, comme fraîchement sortis d'un tailleur. Un luxe apprécié des nobles, des diplomates et de toute personne soucieuse de son apparence en toutes circonstances."
    },
    { nom: "Tatouage d'emprise enroulante", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "849 po", note: "nan",
      description: "Un tatouage représentant un serpent qui renforce les prises et agrippements de son porteur.",
      details: "Ce tatouage représente un serpent enroulé autour du bras ou du poignet de son porteur ou sa porteuse. Il renforce magiquement ses capacités de préhension et d'agrippement. Son porteur ou sa porteuse bénéficie d'un avantage aux tests de Force pour agripper des créatures ou résister à être désarmé. De plus, les créatures agrippées par son porteur ont un désavantage pour se libérer. Le tatouage semble s'animer légèrement lorsque son porteur agrippe quelque chose, les écailles se resserrant symboliquement."
    },
    { nom: "Boule de cristal", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "18 900 po", note: "based: scrying",
      description: "Une boule de cristal qui permet d'observer à distance des lieux et des personnes.",
      details: "Cette sphère de cristal parfaitement poli d'environ 15 cm de diamètre permet de lancer le sort Scrutation (DD 17) 3 fois par jour. Son porteur ou sa porteuse peut observer une créature ou un lieu familier, voyant et entendant comme si il ou elle se trouvait sur place. La cible peut tenter de résister (jet de sauvegarde de Sagesse DD 17). L'observation dure jusqu'à 10 minutes de concentration. La boule se recharge 3 utilisations à l'aube. Un outil indispensable pour les espions et les commandants qui doivent surveiller des positions distantes."
    },
    { nom: "Boule de cristal de lecture des pensées", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "36 000 po", note: "based: scrying & detect thoughts",
      description: "Une boule de cristal qui permet de scruter une cible et de lire ses pensées simultanément.",
      details: "Cette boule de cristal légendaire combine les capacités de scrutation standard avec la lecture des pensées. Lors de l'observation via Scrutation, son porteur ou sa porteuse peut également lancer Détection des pensées sur la cible observée sans dépenser de ressource supplémentaire. Il ou elle peut percevoir ses pensées superficielles et, en se concentrant davantage, ses pensées profondes. La cible peut résister aux deux effets avec ses jets de sauvegarde habituels. Un outil d'espionnage d'une efficacité redoutable entre de bonnes mains."
    },
    { nom: "Boule de cristal de télépathie", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "33 300 po", note: "based: scrying & suggestion",
      description: "Une boule de cristal qui permet d'observer une cible et de lui suggérer des actions mentalement.",
      details: "Cette boule de cristal aux reflets bleutés combine Scrutation et Suggestion. Après avoir établi une connexion de scrutation avec une cible, son porteur ou sa porteuse peut utiliser le sort Suggestion sans composantes verbales ni gestuelles — la suggestion est transmise télépathiquement. La cible entend cette suggestion dans sa tête comme une pensée qui lui semble parfois sienne. Un jet de sauvegarde de Sagesse (DD 17) est requis pour résister. Un outil d'influence mentale à distance d'une puissance effrayante."
    },
    { nom: "Boule de cristal de vision véritable", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "73 500 po", note: "based: scrying & truesight",
      description: "La boule de cristal ultime, combinant scrutation et vision véritable pour voir l'essence des choses.",
      details: "Cette boule de cristal exceptionnellement pure et transparente est la plus précieuse de toutes. Lors de la scrutation, son porteur ou sa porteuse bénéficie de la Vision véritable — il ou elle peut voir les créatures invisibles, percer les illusions, voir dans l'obscurité totale, percevoir les formes véritables des métamorphes et détecter les portails planaires. Aucun camouflage magique ne peut tromper son regard. Un objet convoité par les plus grands mages et monarques pour la surveillance absolue qu'il procure."
    },
    { nom: "Chronique cristalline", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "10 290 po", note: "Treat swap spells as Lv3 (x3), subtlecast as Lv3 spell added to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus + 300 for at-will cantrip",
      description: "Un grimoire de cristal qui amplifie les sorts discrets et confère des capacités de lanceur subreptice.",
      details: "Cette tablette de cristal gravée de formules magiques est conçue pour les sorciers ou magiciens qui souhaitent lancer leurs sorts en secret. Elle confère la capacité de lancer certains sorts sans composantes verbales ni gestuelles (comme la métamagie Sort subtil), ainsi qu'un bonus aux jets d'attaque de sorts et au DD de sauvegarde. Elle peut être utilisée comme focaliseur et contient plusieurs sorts supplémentaires utilisables quotidiennement. Elle permet également de lancer un tour de magie à volonté."
    },
    { nom: "Cube de force", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "17 880 po", note: "based: wall of force (plus 1 level, no concentration)",
      description: "Un petit cube qui peut générer des murs de force protégeant une zone ou bloquant des attaques.",
      details: "Ce cube métallique de 2,5 cm de côté possède 36 charges et 6 faces, chacune portant un symbole différent. En appuyant sur une face (action bonus), son porteur ou sa porteuse active un des six effets possibles, chacun consommant un certain nombre de charges : 1) arrêter les gaz et le vent, 2) arrêter la matière non vivante, 3) arrêter les projectiles, 4) créer un mur infranchissable, 5) bloquer les sorts, 6) bloquer tout. Le cube récupère 1d20 charges à l'aube. Si 0 charge reste, il se désintègre."
    },
    { nom: "Cube d'invocation", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "7 392 po", note: "based: 6th level spell (plus 1 level, no concentration)",
      description: "Un cube rituel permettant d'invoquer un élémentaire correspondant à l'un de ses côtés.",
      details: "Ce cube de métal gravé d'un symbole élémentaire sur chaque face peut être utilisé pour invoquer des élémentaires. Selon la face orientée vers le haut lors de l'activation (action), un type d'élémentaire différent est invoqué : feu, eau, terre ou air. L'élémentaire obéit aux ordres de l'invocateur ou de l'invocatrice pendant 1 heure sans nécessiter de concentration. Il peut être utilisé une fois par jour. Un outil précieux pour les lanceurs de sorts qui travaillent souvent en terrain dangereux et ont besoin d'un allié puissant."
    },
    { nom: "Portail cubique", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "60 390 po", note: "based: gate & planeshift (charges based on highest level spell)",
      description: "Un cube légendaire à six faces, chacune ouvrant un portail vers un plan d'existence différent.",
      details: "Ce cube légendaire en métal stellaire présente six faces gravées de symboles planaires distincts. En pressant une face (action), il ouvre un portail de 3 mètres vers le plan correspondant pendant 1 minute. Ce portail fonctionne dans les deux sens — des créatures du plan d'arrivée peuvent aussi le traverser. Le cube possède 6 charges, une par face. Chaque utilisation consomme 1 charge. Il en récupère 1d6 à l'aube. Un objet extraordinairement précieux pour les voyageurs des plans et les diplomates interplanaires."
    },
    { nom: "Forteresse instantanée de Daern", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "16 800 po", note: "based: magnificent mansion (minus 1 level)",
      description: "Un petit cube qui se déploie en une tour de métal indestructible sur commande.",
      details: "Ce petit cube de métal de 2,5 cm de côté, lorsqu'il est lancé au sol et qu'un mot de commande est prononcé (action), se déploie instantanément en une tour cylindrique de 3 mètres de diamètre et 9 mètres de hauteur. La tour est en métal adamantine — pratiquement indestructible. Elle possède une porte verrouillée de l'intérieur, des créneaux au sommet, et peut accueillir jusqu'à 8 personnes. Pour la replier, son propriétaire doit être à l'intérieur et prononcer le mot de commande inverse. Un refuge mobile d'une solidité absolue."
    },
    { nom: "Amulette d'éclat sombre", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "120 po", note: "based: cantrip power",
      description: "Une amulette sombre qui permet de lancer le tour de magie Éclat des ténèbres à volonté.",
      details: "Cette amulette en métal sombre aux reflets violets ou noirs permet à son porteur ou sa porteuse de lancer le tour de magie Éclat des ténèbres (Eldritch Blast) à volonté. Idéale pour les non-sorciers qui souhaitent accéder à cette attaque magique à distance distinctive, elle projette des rayons d'énergie mystique qui infligent des dégâts de force. La portée est de 36 mètres, les dégâts 1d10. Un premier pas abordable vers l'arsenal occulte pour les personnages aux origines non magiques."
    },
    { nom: "Carafe d'eau sans fin", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 570 po", note: "based: create or destroy water",
      description: "Une carafe magique qui produit de l'eau douce, de l'eau salée ou des torrents en quantités importantes.",
      details: "Cette carafe en métal gravé de vagues peut produire différents types de liquide selon la commande prononcée. En une action, elle peut verser de l'eau douce fraîche (1,5 litres/action, max 30 litres/jour), de l'eau salée (7,5 litres/action, max 150 litres/jour), ou un torrent d'eau bouillonnante (1,5 litres/action, projectable à 9 mètres pour 1d4 dégâts contondants). Elle peut également éteindre des flammes ordinaires dans un rayon de 4,5 mètres. Un outil indispensable pour les survivants et les navires en haute mer."
    },
    { nom: "Jeu d'illusions", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "16 200 po", note: "based: major image, add charges based on cards",
      description: "Un jeu de cartes enchanté dont chaque carte peut créer une puissante illusion tridimensionnelle.",
      details: "Ce jeu de cartes illustrées possède des charges (rechargées à l'aube). En utilisant l'une des cartes (action), son porteur ou sa porteuse peut créer une illusion tridimensionnelle de l'image représentée sur la carte. Cette illusion peut être animée, produire des sons, et persiste pendant 10 minutes de concentration. Elle fonctionne comme le sort Grande image (DD 15). Les cartes représentent des scènes variées — dragons, batailles, cités, monstres — offrant de nombreuses possibilités créatives ou tactiques."
    },
    { nom: "Jeu de nombreuses choses", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "— po", note: "haha",
      description: "Un jeu de cartes légendaire dont chaque tirage peut changer radicalement la destinée de son utilisateur.",
      details: "Ce jeu mystérieux contient entre 13 et 22 cartes selon les légendes, chacune portant un symbole arcane. Avant de tirer, son porteur ou sa porteuse doit déclarer combien de cartes il ou elle va tirer. Une fois engagé, il doit tirer ce nombre ou perdre les bénéfices. Chaque carte produit un effet immédiat — certains extraordinairement bénéfiques (un château, des niveaux d'expérience, un souhait), d'autres catastrophiques (perte de l'âme, apparition d'un ennemi mortel, destruction de tous les possessions). Le Jeu de nombreuses choses est à la fois la plus grande bénédiction et la plus grande malédiction des royaumes."
    },
    { nom: "Défenseur", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "15 000 po", note: "nan",
      description: "Une épée longue légendaire qui peut transférer son bonus offensif en protection défensive.",
      details: "Cette épée longue légendaire confère un bonus de +3 aux jets d'attaque et de dégâts. Sa caractéristique unique : au début de son tour, son porteur ou sa porteuse peut choisir de transférer tout ou partie de ce bonus offensif (de +1 à +3) vers sa Classe d'Armure jusqu'au début de son prochain tour. Cette flexibilité tactique remarquable — attaquer fort ou se défendre mieux — en fait une arme d'une valeur stratégique inestimable. Elle permet de s'adapter à chaque situation de combat de façon optimale."
    },
    { nom: "Demonomicon d'Iggwilv", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "L'artefact légendaire de la sorcière Iggwilv — traité ultime sur les démons et leurs invocations.",
      details: "Le Demonomicon d'Iggwilv est le traité le plus complet jamais écrit sur les démons des Abysses. Compilé par la légendaire sorcière Iggwilv (aussi connue sous le nom de Tasha), il contient les vrais noms de centaines de démons, des rituels d'invocation et de liaisons, des informations sur les hiérarchies abyssales et des secrets interdits. Son porteur ou sa porteuse peut lancer de puissants sorts de démonologie, contrôler les démons plus facilement et résister à leur corruption. Mais le livre lui-même est semi-conscient et attire progressivement son porteur vers le pouvoir et la folie."
    },
    { nom: "Encensoir du dévot", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 734 po", note: "Treat heal as Avg2 * 4 creatures * 10 rounds, Misc cost is focus",
      description: "Un encensoir sacré qui amplifie les sorts de soin lors des rituels divins.",
      details: "Cet encensoir en métal précieux gravé de symboles divins peut être utilisé comme focaliseur pour les sorts de soin. Lorsque son porteur ou sa porteuse (clerc, druide, paladin) l'utilise lors du lancer de sorts de soin de groupe, chaque créature soignée bénéficie d'un dé de soin supplémentaire. De plus, il peut être utilisé pour consacrer une zone de 3 mètres de rayon, rendant les sorts de soin lancés dans cette zone légèrement plus efficaces pendant 10 minutes. La fumée d'encens prend des formes angéliques lors de son utilisation."
    },
    { nom: "Entraves dimensionnelles", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "9 900 po", note: "based: counterspell (plus 1 level)",
      description: "Des entraves qui empêchent les créatures de se téléporter ou d'utiliser des capacités extradimensionnelles.",
      details: "Ces entraves en métal argent gravé de runes de bannissement s'attachent aux poignets ou aux chevilles d'une créature. Une créature menottée avec ces entraves ne peut pas utiliser de téléportation, de voyage dimensionnel, ni aucune capacité lui permettant de se déplacer entre plans ou dimensions. Elle ne peut pas non plus être la cible de tels sorts sans un test de Force (DD 20) pour se libérer. Les entraves peuvent s'ouvrir avec une clé spécifique ou en appliquant un sort de Délivrance des malédictions."
    },
    { nom: "Pourfendeur de dragons", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 886 po", note: "nan",
      description: "Une arme enchantée spécialement conçue pour maximiser les dégâts contre les dragons.",
      details: "Cette arme — souvent une épée longue ou une hache — est forgée et enchantée pour être particulièrement efficace contre les dragons. Lorsqu'elle touche un dragon, elle inflige 3d6 dégâts supplémentaires du type de l'arme. Elle est considérée comme une arme magique. Certaines versions légendaires de cette arme confèrent également des avantages aux jets de sauvegarde contre les souffles de dragon ou permettent de mieux résister aux sorts draconiques. Un outil précieux dans toute campagne impliquant des dragons."
    },
    { nom: "Heaume de terreur", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: minor illusion",
      description: "Un heaume enchantement pour projeter une apparence terrifiante sur commande.",
      details: "Ce heaume ordinaire en métal possède un enchantement d'illusion mineure sur sa visière. Son porteur ou sa porteuse peut activer cet enchantement (action bonus) pour projeter une expression terrifiante sur son visage — yeux incandescents, bouche démoniaque, crâne spectral ou autre image effrayante. Cette illusion visuelle n'a pas d'effet mécanique sur les créatures qui réussissent un test de Sagesse (Perception) DD 13, mais peut impressionner les adversaires peu avertis ou contribuer à une entrée dramatique."
    },
    { nom: "Globe flottant", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2 475 po", note: "based: light & daylight",
      description: "Une sphère lumineuse qui flotte autour de son propriétaire et peut illuminer une large zone.",
      details: "Ce globe de cristal de 10 cm de diamètre flotte à environ 1,5 mètre de son propriétaire ou sa propriétaire, l'accompagnant dans ses déplacements. Il émet normalement une lumière vive sur 6 mètres et tamisée sur 6 mètres supplémentaires. En dépensant une action, son propriétaire peut activer son intensité maximale — une lumière vive similaire à Lumière du jour sur 18 mètres qui affecte les créatures sensibles à la lumière solaire. Il peut être éteint à volonté. Sa forme flottante permet de l'envoyer explorer des zones proches (portée 18 mètres)."
    },
    { nom: "Manuscrit trompeur", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "4 820 po", note: "Treat swap spells as Lv3 (x3), reaction as Lv1 (silvery barbs inspiration) added to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un livre de tromperie qui améliore les sorts d'illusion et confère des capacités de manipulation.",
      details: "Ce livre à la couverture changeante semble présenter un contenu différent à chaque lecteur ou lectrice. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts d'illusion et de tromperie, bénéficiant d'un bonus au DD de sauvegarde. Une fois par jour, il peut utiliser sa réaction pour lancer Barbes argentées lorsqu'une créature réussit un jet d'attaque, de caractéristique ou de sauvegarde. Il contient également des sorts d'illusion supplémentaires utilisables quotidiennement."
    },
    { nom: "Poudre de disparition", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2 970 po", note: "based: invisible (plus 1 level, no concentration), x4 for AoE",
      description: "Une poudre magique qui rend invisible toute personne ou zone touchée.",
      details: "Ce sachet contient une poudre scintillante d'un blanc irisé. En la répandant sur soi-même ou sur une zone (action), son utilisateur ou utilisatrice peut créer un effet d'invisibilité sur une créature ou dans une zone de 3 mètres de rayon. Les créatures affectées sont invisibles pendant 10 minutes ou jusqu'à ce qu'elles attaquent. La poudre contient assez pour 3 utilisations. Elle est consommée à l'usage. Un outil utile pour créer des distractions ou permettre à un groupe de se dissimuler rapidement."
    },
    { nom: "Poudre de dessèchement", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "156 po", note: "multiply total based on charges",
      description: "Une poudre alchimique qui absorbe instantanément toute l'eau d'une zone ou d'une créature aquatique.",
      details: "Ce petit sachet contient une poudre grise terreuse d'une efficacité remarquable contre les créatures et zones aqueuses. En la répandant sur une créature aquatique ou dans une étendue d'eau (action), elle absorbe toute l'eau dans un rayon de 1,5 mètre. Une créature aquatique touchée doit réussir un jet de sauvegarde de Constitution (DD 13) ou subir 10d6 dégâts nécrotiques (moitié en cas de réussite). Elle peut également assécher des zones marécageuses ou transformer de petites flaques en sec. Le sachet contient 3 charges."
    },
    { nom: "Poudre d'éternuement et d'étouffement", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "— po", note: "Cursed, not priced",
      description: "Une poudre maudite qui provoque un éternuement et un étouffement incontrôlables.",
      details: "Cette poudre d'apparence innocente — souvent dans un petit flacon décoré comme un parfum — est un piège cruel. Toute créature qui la respire (dans un rayon de 1,5 mètre lors de la libération) doit réussir un jet de sauvegarde de Constitution (DD 15) ou être incapable d'agir pendant 1 minute, prise d'éternuements et d'étouffements violents. Les créatures affectées peuvent retenter le jet à la fin de chacun de leurs tours. L'objet est maudit — le flacon semble toujours se retrouver dans les mains de la mauvaise personne au mauvais moment."
    },
    { nom: "Lanceuse naine", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "9 964 po", note: "nan",
      description: "Un engin de guerre nain portable qui lance des projectiles avec une puissance dévastatrice.",
      details: "Cette arbalète lourde de construction naine est une merveille d'ingénierie mécanique. Elle tire des carreaux en acier renforcé avec une force extraordinaire, infligeant des dégâts supplémentaires aux structures et aux créatures en armure lourde. Son porteur ou sa porteuse bénéficie d'un bonus de +2 aux jets d'attaque et de dégâts. Elle peut être chargée avec des munitions spéciales naines (disponibles dans les forges naines) qui déclenchent des effets supplémentaires : carreaux explosifs, carreaux de gel, ou carreaux perceurs de magie."
    },
    { nom: "Cornet acoustique", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "990 po", note: "based: lesser restoration (minus 1 level, lesser effect)",
      description: "Un cornet magique qui améliore l'ouïe et permet de communiquer à grande distance.",
      details: "Ce cornet en métal poli possède des propriétés acoustiques magiques. Lorsqu'il est placé contre l'oreille, son porteur ou sa porteuse peut entendre les sons provenant d'une source distante de jusqu'à 300 mètres comme si elle se trouvait juste à côté de la source. Il peut également amplifier sa voix dans une direction conique de 30 mètres — utile pour donner des ordres sur un champ de bataille. De plus, il peut être utilisé pour soigner temporairement une surdité légère non magique, restaurant partiellement l'ouïe pendant 1 heure."
    },
    { nom: "Bouteille de l'efrit", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "32 670 po", note: "based: conjure elemental at 9th level",
      description: "Une bouteille de laiton ornementale renfermant un efrit puissant prêt à exaucer des souhaits.",
      details: "Cette bouteille ventrue en laiton gravée de motifs arabisants semble vibrer légèrement lorsqu'on la tient. En la débouchant, un efrit puissant en jaillit dans un nuage de fumée et de feu. Il y a 10% de chances que l'efrit soit hostile — sinon, il obéit à trois ordres (dont l'un peut être un vœu) avant de retourner dans la bouteille. Les ordres doivent être formulés avec précision car l'efrit les exécute à la lettre. Une fois les trois ordres accomplis, la bouteille devient vide et perd ses propriétés magiques."
    },
    { nom: "Chaîne de l'efrit", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "81 750 po", note: "based: primordial ward (plus 1 level, no concentration)",
      description: "Une chaîne légendaire forgée pour ligoter et contrôler les efrits et autres élémentaires de feu.",
      details: "Cette chaîne en métal rouge incandescent semble chaude au toucher même à froid. Elle confère à son porteur ou sa porteuse l'immunité aux dégâts de feu et la résistance aux dégâts de froid. Elle peut être utilisée pour ligoter un élémentaire de feu, un efrit ou une créature de type feu — la créature ligotée ne peut pas se libérer par ses propres moyens et doit obéir à son capteur. De plus, son porteur peut utiliser une action pour créer un cercle de feu protecteur qui inflige des dégâts aux créatures qui le traversent."
    },
    { nom: "Tatouage de griffe occulte", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "1 371 po", note: "treat extended reach as Lv1 spell",
      description: "Un tatouage représentant une griffe qui permet d'attaquer à distance avec les mains nues.",
      details: "Ce tatouage stylisé représentant une griffe spectrale s'étend sur le bras ou la main de son porteur ou sa porteuse. Il lui permet d'effectuer des attaques à mains nues à une portée de 3 mètres au lieu du corps à corps normal, sa main projetant une extension spectrale visible. Ces attaques utilisent ses statistiques normales d'attaque à mains nues. De plus, une fois par tour, l'une de ces attaques à distance peut agripper la cible à cette portée (la cible peut résister normalement). Particulièrement efficace pour les moines."
    },
    { nom: "Éclat d'essence élémentaire (air)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "3 620 po", note: "treat as 'unlimited' fly spell (-1 lv due to limited effect), Misc cost for focus",
      description: "Un fragment d'essence élémentaire d'air qui confère une capacité de vol à son porteur.",
      details: "Ce cristal translucide parcouru de courants d'air internes émet un léger sifflement. Son porteur ou sa porteuse peut activer une vitesse de vol de 9 mètres (action bonus) pour une durée illimitée, utilisable à volonté. La vitesse de vol est plus lente que celle d'autres objets similaires, mais la capacité est permanente et ne nécessite aucune charge ni recharge. Son porteur ou sa porteuse peut sentir les changements de pression atmosphérique et a un léger avantage pour détecter les courants d'air, les passages cachés et les souffles de créatures."
    },
    { nom: "Éclat d'essence élémentaire (terre)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 020 po", note: "treat as 'unlimited' protection from elements (-1 lv due to limited effect), Misc cost for focus",
      description: "Un fragment d'essence élémentaire de terre qui confère une résistance aux éléments.",
      details: "Ce fragment de roche dense aux reflets cristallins semble peser plus que sa taille ne le suggère. Son porteur ou sa porteuse bénéficie en permanence de la résistance aux dégâts d'acide, et peut activer une résistance à un autre type de dégâts élémentaires (feu, froid, foudre ou tonnerre) une fois par jour pendant 1 heure. De plus, il ou elle bénéficie d'un avantage aux jets de Dextérité (Acrobaties) pour rester debout sur un terrain instable ou en mouvement."
    },
    { nom: "Éclat d'essence élémentaire (feu)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "806 po", note: "Misc cost for focus",
      description: "Un fragment d'essence élémentaire de feu qui illumine et inflige des dégâts de feu.",
      details: "Ce petit éclat de obsidienne incandescente qui ne brûle jamais son porteur ou sa porteuse dégage une chaleur permanente. Son porteur ou sa porteuse peut l'activer pour émettre une lumière vive sur 9 mètres (remplaçant une torche). De plus, ses attaques à mains nues infligent 1d4 dégâts de feu supplémentaires. Une fois par jour, il peut projeter une boule de feu mineure — un projectile de feu infligeant 3d6 dégâts de feu à une cible dans un rayon de 18 mètres (jet de sauvegarde de Dextérité DD 13 pour la moitié)."
    },
    { nom: "Éclat d'essence élémentaire (eau)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 581 po", note: "AoE damage multiplied by 4 due to size of effect, Misc cost for focus",
      description: "Un fragment d'essence élémentaire d'eau qui permet de contrôler et de projeter de l'eau.",
      details: "Ce fragment de cristal d'eau gelée qui ne fond jamais dégage une fraîcheur permanente. Son porteur ou sa porteuse peut respirer sous l'eau et nager à une vitesse de 9 mètres. Une fois par jour, il peut déclencher un tourbillon d'eau dans une zone de 9 mètres de rayon autour de lui ou elle — toutes les créatures dans cette zone doivent réussir un jet de sauvegarde de Force (DD 14) ou subir 2d8 dégâts contondants et être renversées. Les dégâts sont doublés contre les créatures de type feu."
    },
    { nom: "Gemme élémentaire", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 386 po", note: "based: conjure elemental (plus 1 level, no concentration)",
      description: "Une gemme colorée qui, brisée, invoque un élémentaire correspondant à sa couleur.",
      details: "Cette gemme précieuse — rubis (feu), saphir (eau), émeraude (terre) ou topaze (air) selon le type — renferme l'essence d'un élémentaire. En la brisant (action), son porteur ou sa porteuse invoque un élémentaire du type correspondant qui obéit à ses ordres pendant 1 heure sans nécessiter de concentration. La gemme disparaît après utilisation. L'élémentaire invoqué est un individu de taille M (élémentaire standard). Usage unique — les voyageurs prudents en emportent souvent plusieurs."
    },
    { nom: "Chaîne elfique", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "2 200 po", note: "nan",
      description: "Une chaîne en mithral elfique quasi indestructible qui peut entraver n'importe quelle créature.",
      details: "Cette chaîne fine en mithral elfique est d'une résistance extraordinaire pour sa légèreté apparente. Elle peut être tendue entre deux points fixes pour créer une barrière, attachée à une créature pour la retenir, ou utilisée comme arme de fouet améliorée. Une créature attachée avec cette chaîne ne peut pas la briser par la force (elle a un indice de destruction très élevé). Elle peut également être activée magiquement pour se contracter autour d'une créature, l'entravant jusqu'à un jet de sauvegarde de Force (DD 20) réussi."
    },
    { nom: "Grimoire durable", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: mending",
      description: "Un grimoire magiquement renforcé qui se répare lui-même et résiste aux dommages.",
      details: "Ce grimoire possède une reliure enchantée et des pages traitées magiquement. Il se répare automatiquement de toute déchirure, brûlure légère ou dommage physique mineur en quelques minutes. Les pages ne se mouillent pas, ne se déchirent pas facilement et résistent à l'humidité et aux dommages ordinaires. Il bénéficie également d'une protection contre Flamme sacrée et sorts similaires qui détruisent les objets — sa CA est de 10 et il possède 30 points de vie. Un investissement indispensable pour tout magicien qui tient à ses sorts."
    },
    { nom: "Œil de remplacement", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "990 po", note: "based: lesser restoration (minus 1 level, lesser effect)",
      description: "Un œil de verre magique qui remplace fonctionnellement un œil perdu.",
      details: "Cet œil de verre taillé dans un cristal magique peut être inséré dans l'orbite d'une créature ayant perdu un œil. Il fonctionne comme un œil normal, permettant une vision normale. Bien qu'il ne confère pas de capacités spéciales, il élimine le malus dû à un œil manquant. Certaines versions plus rares de cet objet confèrent des capacités supplémentaires (vision dans le noir, vision des mensonges) mais celles-ci sont beaucoup plus coûteuses. L'insertion est indolore et il s'adapte à n'importe quelle orbite."
    },
    { nom: "Bouteille fumante perpétuelle", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2 970 po", note: "based: fog cloud (plus 1 level, no concentration)",
      description: "Une bouteille qui génère un brouillard épais et opaque sur commande.",
      details: "Cette petite bouteille de verre sombre dégage des filets de fumée grise même bouchée. En l'ouvrant et en prononçant le mot de commande (action), elle libère un épais brouillard qui obscurcit une zone de 6 mètres de rayon autour d'elle. Ce brouillard persiste pendant 10 minutes sans nécessiter de concentration, même en cas de vent modéré. Pour le dissiper prématurément, il faut un vent fort ou le sort Bourrasque. La bouteille peut être utilisée trois fois par jour et se recharge à l'aube. Idéale pour couvrir une retraite."
    },
    { nom: "Œil et main de Vecna", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Les reliques corrompues de l'archilliche Vecna — une main et un œil séparés de son corps divin.",
      details: "Ces deux artefacts maudits sont les restes préservés de Vecna, le Dieu Ultime du Secret. L'Œil doit remplacer l'œil gauche de son porteur (processus douloureux) et confère la vision dans le noir, le rayon désintégrateur et d'autres capacités divinatoires. La Main doit remplacer la main gauche et confère des attaques nécrotiques, des soins inversés et des capacités de destruction. Ensemble, ils sont encore plus puissants. Chaque objet impose une malédiction graduelle qui altère l'alignement du porteur vers le mal, lui faisant ultimement vénérer Vecna."
    },
    { nom: "Yeux de charme", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "810 po", note: "based: charm person",
      description: "Des lentilles magiques qui permettent de charmer les humanoïdes du regard.",
      details: "Ces lentilles de cristal légèrement teintées s'adaptent parfaitement aux yeux de leur porteur ou sa porteuse. Une fois par jour, en regardant un humanoïde dans les yeux et en activant l'objet (action bonus), son porteur ou sa porteuse peut tenter de le charmer — la cible doit réussir un jet de sauvegarde de Sagesse (DD 13) ou être charmée pendant 1 heure comme avec le sort Charme personne. Un contact visuel est nécessaire. Inutile contre les aveugles ou ceux qui évitent le regard. Un outil social puissant mais éthiquement problématique."
    },
    { nom: "Yeux de vision minutieuse", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4 950 po", note: "based: enhance ability (plus 1 level, no concentration)",
      description: "Des lunettes magiques qui permettent de voir les plus infimes détails à toute distance.",
      details: "Ces lunettes aux verres légèrement grossissants permettent à leur porteur ou sa porteuse de distinguer les détails les plus fins à n'importe quelle distance de vision normale. Il ou elle peut lire des inscriptions invisibles à l'œil nu, identifier des créatures ou objets à grande distance, distinguer des pièges mécaniques microscopiques, et bénéficie d'un avantage aux tests de Sagesse (Perception) basés sur la vue. Des pierres précieuses peuvent être identifiées qualitativement sans outils d'orfèvre."
    },
    { nom: "Yeux de l'aigle", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "4 500 po", note: "based: enhance ability (plus 1 level, no concentration)",
      description: "Des lunettes qui décuplent la vision à longue distance comme les yeux d'un aigle.",
      details: "Ces légères lunettes aux montures en métal gravé de plumes d'aigle sont des merveilles d'optique magique. Leur porteur ou sa porteuse peut voir jusqu'à 1 mile de distance sans perte de clarté, comme si les objets distants étaient proches. Il ou elle bénéficie d'un avantage aux tests de Sagesse (Perception) basés sur la vue et peut identifier des détails à des distances normalement impossibles. Dans la brume ou la tempête légère, cette vision reste plus nette que celle d'un humain normal. Idéales pour les éclaireurs et les archers de précision."
    },
    { nom: "Éclat du Royaume Lointain", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "736 po", note: "Misc cost for focus",
      description: "Un fragment de matière extraplanaire qui confère des pouvoirs psychiques aliénants.",
      details: "Ce fragment de roche noire aux reflets qui semblent venir de l'intérieur plutôt que de la surface provient des profondeurs du Far Realm. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts psioniques ou occultes. Il confère la capacité de lancer Détection des pensées une fois par jour et permet d'infliger la condition Effrayé à une créature adjacente une fois par jour (jet de sauvegarde de Sagesse DD 14). Cependant, sa présence expose subtilement son porteur à des chuchotements du Royaume Lointain — fascinants mais déstabilisants."
    },
    { nom: "Éclat du Féywilde", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "4 515 po", note: "wild magic treated as Lv3 spell, Misc cost for focus",
      description: "Un fragment du Féywilde débordant de magie sauvage et d'énergie féerique imprévisible.",
      details: "Ce cristal aux reflets irisés et changeants, vert, rose, doré, provient du Féywilde — le plan des fées. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts. Une fois par jour, il peut déclencher une surtension de magie sauvage féerique : un sort de niveau 1 à 3 se lance spontanément depuis l'éclat, choisi aléatoirement dans une table de sorts féeriques. Ses effets peuvent être merveilleux, utiles ou simplement étranges. L'éclat attire également les bonnes grâces des créatures féeriques — elles sont généralement bien disposées envers son porteur."
    },
    { nom: "Figurine aux pouvoirs merveilleux (chien)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 584 po", note: "based: conjure animals (minus 1 level)",
      description: "Une statuette de chien d'onyx qui peut s'animer en deux lévriers fidèles.",
      details: "Cette statuette d'onyx représente deux chiens couchés côte à côte. En prononçant le mot de commande, les deux chiens s'animent et obéissent aux ordres de leur invocateur ou invocatrice. Ils ont les statistiques de lévriers (utilisés comme destriers de combat). Ils peuvent être invoqués pendant 6 heures par tranche de 24 heures. Quand ils se transforment en statuette, ils restent dans cet état jusqu'à la prochaine invocation. Ils se battent loyalement pour leur propriétaire et ne peuvent pas être détruits de façon permanente."
    },
    { nom: "Figurine aux pouvoirs merveilleux (éléphant)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "7 392 po", note: "based: conjure animals (plus 3 levels)",
      description: "Une statuette d'ivoire d'éléphant qui s'anime en un éléphant de combat massif.",
      details: "Cette figurine taillée dans l'ivoire représente un éléphant en position de charge. Une fois par semaine, elle peut s'animer en un éléphant de taille H (utilisant les statistiques d'un éléphant) qui obéit aux ordres de son invocateur ou invocatrice pendant 24 heures. L'éléphant peut transporter de lourdes charges, participer activement au combat, et son simple poids et sa taille sont une arme en eux-mêmes. À la fin de la durée ou si réduit à 0 PV, il redevient figurine. Un allié de combat d'une puissance remarquable."
    },
    { nom: "Figurine aux pouvoirs merveilleux (mouche dorée)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 584 po", note: "based: conjure animals (minus 1 level)",
      description: "Une statuette dorée d'une mouche qui permet à son utilisateur de se transformer en mouche.",
      details: "Cette minuscule statuette en or pur représente une mouche aux ailes détaillées. En prononçant le mot de commande, son porteur ou sa porteuse peut se transformer en une mouche ordinaire pendant 12 heures. Dans cette forme, il ou elle conserve son Intelligence, Sagesse et Charisme, mais adopte les statistiques physiques d'une mouche. Il peut voler, se faufiler dans des espaces minuscules, et passer presque inaperçu. La transformation peut être utilisée une fois par jour. Idéale pour l'espionnage et l'infiltration."
    },
    { nom: "Figurine aux pouvoirs merveilleux (chèvres)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "2 376 po", note: "price for all 3; based: conjure animals (minus 1 level)",
      description: "Trois figurines de chèvres aux pouvoirs distincts : charge, saut et résistance.",
      details: "Ce jeu de trois figurines de chèvres en marbre représente des capacités différentes. La chèvre de charge s'anime en une chèvre de montagne de combat qui peut charger pour renverser les adversaires. La chèvre de saut peut faire effectuer à son cavalier des bonds extraordinaires. La chèvre de terreur intimide les ennemis par son apparence surnaturelle. Chaque figurine peut être invoquée une fois par semaine pendant une durée limitée. Ensemble, elles forment un ensemble versatile d'alliés équestres."
    },
    { nom: "Figurine aux pouvoirs merveilleux (griffon)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 960 po", note: "based: conjure animals (plus 1 level, no concentration)",
      description: "Une figurine en bronze d'un griffon qui s'anime en monture aérienne imposante.",
      details: "Cette magnifique figurine en bronze représente un griffon en position de vol. Elle peut être activée deux fois par semaine pour s'animer en un griffon de taille G qui sert de monture fidèle pendant 6 heures. Le griffon accepte d'être monté et obéit aux ordres de son invocateur ou invocatrice. Sa vitesse de vol de 24 mètres et sa puissance de combat en font une monture de première qualité pour les aventuriers qui ont besoin de se déplacer rapidement ou de combattre dans les airs."
    },
    { nom: "Figurine aux pouvoirs merveilleux (lions)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 300 po", note: "price for all 2; based: conjure animals",
      description: "Deux figurines de lions en marbre d'or qui s'animent en lions de combat redoutables.",
      details: "Ce duo de figurines représente deux lions majestueux en position d'attaque. Ensemble, ils peuvent être invoqués une fois par semaine pour s'animer en deux lions adultes (statistiques de lion) pendant 1 heure. Ces deux lions combattent côte à côte pour leur invocateur ou invocatrice, coordonnant leurs attaques de façon instinctive. Deux lions adultes sont une force de combat considérable — leur puissance d'attaque combinée peut terrasser des adversaires bien plus imposants."
    },
    { nom: "Figurine aux pouvoirs merveilleux (hibou)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 584 po", note: "based: conjure animals (minus 1 level)",
      description: "Une figurine de hibou en argent qui s'anime en familier espion doté de vision nocturne.",
      details: "Cette statuette d'argent représente un hibou aux yeux ouverts. Elle peut s'animer deux fois par semaine en un hibou géant obéissant aux ordres pendant 8 heures. Le hibou peut voler silencieusement à 24 mètres, a une vision nocturne parfaite, peut transporter de petites charges et peut servir d'espion dans l'obscurité. Son porteur ou sa porteuse peut voir à travers les yeux du hibou (action) comme avec un familier. Un outil de reconnaissance et de surveillance idéal."
    },
    { nom: "Figurine aux pouvoirs merveilleux (corbeau)", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 188 po", note: "based: conjure animals (minus 1 level)",
      description: "Une figurine de corbeau en obsidienne qui s'anime en corbeau communicateur intelligent.",
      details: "Cette statuette d'obsidienne polie représente un corbeau perché. Elle peut s'animer trois fois par semaine en un corbeau qui obéit aux ordres pendant 12 heures. Ce corbeau peut transporter de petits messages, répéter ce qu'il entend, accomplir de menues tâches et servir d'espion discret. Sa taille et sa discrétion naturelle lui permettent de passer presque partout inaperçu. Il peut rapporter fidèlement des conversations et des observations à son propriétaire ou sa propriétaire à son retour."
    },
    { nom: "Figurine aux pouvoirs merveilleux (destrier)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "8 316 po", note: "based: conjure animals (plus 2 levels)",
      description: "Une figurine d'obsidienne d'un destrier noir qui s'anime en puissante monture de guerre.",
      details: "Cette imposante figurine d'obsidienne représente un destrier caparaçonné. Elle peut s'animer une fois par jour pendant 24 heures en un destrier de guerre d'exception — plus rapide et plus résistant qu'un cheval ordinaire. Ce destrier est courageux, ne panique pas au combat, accepte un cavalier armé et peut combattre (avec ses sabots) si nécessaire. Contrairement à un cheval normal, il n'a pas besoin de soins ou de nourriture pendant qu'il est animé. Une monture digne des plus grands chevaliers."
    },
    { nom: "Barque pliante", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "8 800 po", note: "based on ships in DMG",
      description: "Un objet qui peut se déployer en une barque ou en un voilier selon le mot de commande.",
      details: "Cet objet plat en bois de teck ressemble à une grosse boîte plate. En prononçant le premier mot de commande, il se déploie en 1 minute en une barque de 3 mètres pouvant transporter 4 personnes avec leurs affaires. En prononçant le second mot de commande, il se déploie en un voilier de 24 mètres avec gréements, ancre et gouvernail, pouvant transporter jusqu'à 15 personnes. Un troisième mot de commande replie l'embarcation en sa forme compacte originale. Un trésor inestimable pour les aventuriers qui voyagent souvent sur les mers et les fleuves."
    },
    { nom: "Marque de givre", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "14 143 po", note: "based: protection from energy (plus 1 level, no concentration)",
      description: "Un tatouage runique de glace qui confère une résistance permanente au froid et des pouvoirs glaciaux.",
      details: "Ce tatouage en forme de cristaux de givre entrelacés couvre une partie du corps de son porteur ou sa porteuse. Il confère l'immunité aux dommages causés par le froid environnemental naturel et la résistance permanente aux dégâts de froid magiques. De plus, une fois par jour, ses attaques peuvent être enrobées de givre : la prochaine créature touchée subit 2d8 dégâts de froid supplémentaires et doit réussir un jet de sauvegarde de Constitution (DD 14) ou voir sa vitesse réduite de moitié jusqu'au début du prochain tour de son porteur."
    },
    { nom: "Traité fulminant", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "5 190 po", note: "Treat swap spells as Lv3 (x3), extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un grimoire d'invocation et d'appel qui améliore les sorts de convocation d'entités.",
      details: "Ce lourd grimoire à la couverture de cuir noir est rempli de rituels d'invocation, de cercles de protection et de noms véritables d'entités extraplanaires. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts d'invocation, bénéficiant d'un bonus au DD de sauvegarde et aux jets d'attaque. Il contient également des sorts d'invocation supplémentaires utilisables quotidiennement. Des sorts comme Cercle magique, Convocation d'esprits et Bannissement peuvent être lancés depuis ce grimoire."
    },
    { nom: "Gemme de lumière", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4 851 po", note: "based: light & color spray",
      description: "Une gemme lumineuse qui peut illuminer une large zone ou projeter un éblouissement coloré.",
      details: "Cette gemme taillée en facettes projette naturellement des arcs-en-ciel de lumière dans son environnement. En l'activant (action), son porteur ou sa porteuse peut choisir entre deux effets : 1) Lumière — la gemme illumine une zone de 18 mètres de lumière vive et 18 mètres supplémentaires de lumière tamisée pendant 1 heure ; 2) Éclat coloré — la gemme projette un flash de lumières colorées dans un cône de 4,5 mètres, les créatures dans la zone doivent réussir un jet de sauvegarde de Constitution (DD 14) ou être aveuglées jusqu'au début du prochain tour de son porteur."
    },
    { nom: "Gemme de vision", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "10 080 po", note: "based: true seeing",
      description: "Une gemme enchantée qui confère temporairement la vision véritable à son porteur.",
      details: "Cette gemme dorée aux reflets clairs peut être activée trois fois par jour. En la pressant contre son front (action), son porteur ou sa porteuse bénéficie de la Vision véritable pendant 10 minutes : il ou elle peut voir dans l'obscurité ordinaire et magique, détecter les créatures invisibles et les objets dissimulés, voir dans le Plan Éthéré jusqu'à 18 mètres, et distinguer les illusions des réalités. Une ressource précieuse pour dévoiler les tricheries magiques et les formes véritables cachées sous des apparences trompeuses."
    },
    { nom: "Tatouage du pas fantomatique", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "3 240 po", note: "based: blink (-1 lv spell due to short duration and effect)",
      description: "Un tatouage spectral qui permet de clignoter entre le plan matériel et le plan éthéré.",
      details: "Ce tatouage représentant des empreintes de pas fantomatiques couvre les pieds et les jambes de son porteur ou sa porteuse. Une fois par jour, il peut l'activer (action bonus) pour entrer dans un état de clignotement entre le Plan Matériel et le Plan Éthéré. Pendant 1 minute, à la fin de chacun de ses tours, son porteur est projeté dans le Plan Éthéré jusqu'au début de son prochain tour — il peut traverser les objets solides mais est invisible et intangible. Cette alternance le rend très difficile à attaquer de façon fiable."
    },
    { nom: "Pourfendeur de géants", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 716 po", note: "nan",
      description: "Une arme enchantée spécialisée contre les géants et les créatures de grande taille.",
      details: "Cette arme — souvent une hache ou une épée — est enchantée pour maximiser les dégâts contre les créatures de grande stature. Contre les géants et les créatures de taille G ou plus grande, elle inflige 2d6 dégâts supplémentaires à chaque touche. De plus, si la cible est de taille G ou plus, elle doit réussir un jet de sauvegarde de Force (DD 15) ou être renversée. Elle est considérée comme une arme magique. Populaire dans les régions où les géants de montagne, de collines ou de feu menacent les populations."
    },
    { nom: "Armure de cuir clouté glamorisée", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "4 158 po", note: "based: disguise self",
      description: "Une armure de cuir clouté enchantée pour changer d'apparence à volonté.",
      details: "Cette armure de cuir clouté de bonne facture bénéficie d'un enchantement d'illusion permanent. Sur commande (action), son porteur ou sa porteuse peut changer l'apparence de l'armure pour lui faire imiter n'importe quel autre type d'armure ou de vêtement. Elle peut ressembler à une robe de cour somptueuse, une tenue d'artisan ou un harnois de chevalier — tout en offrant la protection d'une armure de cuir clouté. L'illusion est visuelle uniquement — au toucher, la texture reste celle du cuir."
    },
    { nom: "Gants d'arrêt des projectiles", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: 2nd-level spell power as monks get it at 3rd level",
      description: "Des gants magiques qui permettent d'attraper ou de dévier les projectiles lancés vers leur porteur.",
      details: "Ces gants épais en cuir renforcé de métal permettent à leur porteur ou sa porteuse d'attraper ou de dévier les projectiles. Une fois par tour, en utilisant sa réaction, il ou elle peut tenter d'attraper un projectile non magique qui le cible (test de Dextérité DD 10 + bonus d'attaque du tireur). En cas de réussite, le projectile est intercepté et son porteur peut le relancer immédiatement contre une cible de son choix. Ces gants sont appréciés des moines et des guerriers qui affrontent régulièrement des archers ennemis."
    },
    { nom: "Gants de natation et d'escalade", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9 000 po", note: "based: alter self and spider climb (plus 1 level, no concentration)",
      description: "Des gants amphibies qui permettent d'escalader les surfaces et de nager à grande vitesse.",
      details: "Ces gants en matériau composite (mi-écailles, mi-cuir souple traité) offrent des capacités remarquables. Leur porteur ou sa porteuse peut escalader n'importe quelle surface à sa vitesse normale sans test requis, et nager à une vitesse de 12 mètres sans pénalité. De plus, ils confèrent un avantage aux tests de Force (Athlétisme) liés à l'escalade et à la natation. Un équipement idéal pour les aventuriers qui explorent des environnements mixtes où l'eau et les surfaces verticales se côtoient."
    },
    { nom: "Gants de malfaiteur", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4 950 po", note: "based: enhanced ability (plus 1 level, no concentration)",
      description: "Des gants sombres qui améliorent la dextérité et les aptitudes liées à la finesse et au vol.",
      details: "Ces gants fins en cuir souple et noir confèrent un avantage aux tests de Dextérité (Discrétion de la main), tests d'Escamotage, tests de Crochetage, et tests de manipulation fine en général. Ils permettent également d'interagir avec des pièges mécaniques à distance de 1,5 mètre sans contact direct, comme si les mains portaient des extensions invisibles. Populaires chez les voleurs, espions et malfaiteurs de tous horizons — et leur nom sans équivoque ne laisse aucun doute sur leur vocation."
    },
    { nom: "Lunettes de nuit", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2 970 po", note: "based: darkvision",
      description: "Des lunettes magiques qui confèrent une vision parfaite dans l'obscurité complète.",
      details: "Ces lunettes aux verres sombres et légèrement irisés paraissent ordinaires en pleine lumière. Dans l'obscurité, elles révèlent leur vraie valeur : leur porteur ou sa porteuse peut voir dans l'obscurité ordinaire jusqu'à 18 mètres comme en lumière tamisée, et en lumière tamisée comme en lumière vive. Cette vision dans le noir est incolore mais parfaitement fonctionnelle. Elles ne percent pas les ténèbres magiques créées par des sorts comme Ténèbres, mais fonctionnent dans toute obscurité naturelle ou non magique."
    },
    { nom: "Emblème gardien", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "825 po", note: "based: shield spell, Misc cost for focus",
      description: "Un emblème sacré qui peut invoquer un bouclier de force magique en réaction.",
      details: "Cet emblème — médaillon, broche ou insigne — porte le symbole d'une divinité protectrice ou d'une organisation guerrière. Son porteur ou sa porteuse peut l'utiliser comme focaliseur sacré. Une fois par jour, en réaction face à une attaque, il ou elle peut activer l'emblème pour un effet similaire au sort Bouclier : +5 à la CA jusqu'au début de son prochain tour (y compris contre l'attaque déclenchante), et immunité aux dégâts du sort Projectile magique. Léger et discret, il représente un investissement défensif accessible."
    },
    { nom: "Œil de sorcière", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "6 930 po", note: "based: scrying (minus 2 levels, very limited); true cost for players: 1980 w/out scry",
      description: "Un œil de cristal détachable qui peut être envoyé explorer des zones proches.",
      details: "Ce petit globe de cristal légèrement laiteux de la taille d'un œil peut être détaché et placé n'importe où dans un rayon de 9 mètres. Son porteur ou sa porteuse peut le voir magiquement — il perçoit ce que l'œil voit, dans toutes les directions autour de l'œil. Cette perception fonctionne pendant 1 heure par utilisation (3 fois par jour). Son porteur est aveugle lors de son utilisation s'il ferme ses propres yeux, mais peut jongler entre sa propre vision et celle de l'œil. Utile pour espionner des pièces sans s'y exposer."
    },
    { nom: "Chapeau de déguisement", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: disguise self (plus 1 level, no concentration)",
      description: "Un chapeau dont l'enchantement permet de changer complètement d'apparence à volonté.",
      details: "Ce chapeau d'apparence ordinaire recèle un puissant enchantement d'illusion. Son porteur ou sa porteuse peut, en le touchant (action), se donner l'apparence d'une créature humanoïde différente — changeant sa taille (dans des limites raisonnables), son apparence physique, ses vêtements et son équipement apparent. Cette illusion ne résiste pas au toucher d'autrui (texture et forme réelles restent perceptibles) mais est parfaitement réaliste visuellement. L'effet dure jusqu'à ce que son porteur change d'apparence à nouveau ou retire le chapeau."
    },
    { nom: "Chapeau aux sorts multiples", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "21 000 po", note: "misc cost: 1000 gp for material cost * unlimited charges (7)",
      description: "Un chapeau de mage légendaire qui stocke sept sorts différents activables à volonté.",
      details: "Ce chapeau pointu aux étoiles et lunes brodées est l'objet iconique du grand mage. Il renferme sept sorts, chacun associé à une étoile brodée de couleur différente. Son porteur ou sa porteuse peut activer n'importe lequel de ces sorts en touchant l'étoile correspondante (action). Chaque sort peut être utilisé une fois par jour. Les sorts stockés peuvent varier mais incluent généralement un assortiment d'utilité, de défense et d'attaque. Les sorts utilisent les paramètres du créateur du chapeau. Un objet magique complet pour les mages polyvalents."
    },
    { nom: "Chapeau à vermine", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "594 po", note: "based: conjure animals (minus 2 levels)",
      description: "Un chapeau qui peut invoquer de petits nuisibles qui distraient ou perturbent les ennemis.",
      details: "Ce chapeau à bord large dissimule un enchantement d'invocation de vermine. En enfonçant le bord du chapeau (action), son porteur ou sa porteuse peut en faire sortir 3d4 rats, 1d4 chauves-souris géantes, ou 1 nuée d'insectes (au choix). Ces créatures obéissent à ses ordres simples pendant 1 heure. Elles peuvent servir à distraire des ennemis, explorer des couloirs étroits ou déclencher des pièges. L'invocation ne peut être utilisée que trois fois par jour, se rechargeant à l'aube."
    },
    { nom: "Chapeau du magicien", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "120 po", note: "based: cantrip power",
      description: "Un chapeau de tour de magie enchanté qui permet de lancer un tour de magie à volonté.",
      details: "Ce chapeau haut-de-forme ou conique porte un enchantement d'un cantrip spécifique. Son porteur ou sa porteuse peut l'activer à volonté, lançant ce tour de magie sans ressource. Les options populaires incluent : Prestidigitation (pour les bardes et bateleurs), Illusion mineure (pour les illusionnistes), Lumière (pour les aventuriers), ou Amis (pour les diplomates). Abordable et polyvalent, ce chapeau est souvent le premier objet magique d'un jeune aventurier ou aventurière curieux ou curieuse de magie."
    },
    { nom: "Manuel du tisserand de cœurs", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "5 240 po", note: "Treat swap spells as Lv3 (x3), reaction as Lv1 (silvery barbs inspiration) added to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un manuel de manipulation émotionnelle qui améliore les sorts de charme et de soutien.",
      details: "Ce grimoire aux couvertures roses et dorées est rempli de techniques de manipulation émotionnelle, de psychologie arcane et de rituels de lien. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts de charme et de soutien. Une fois par jour, il peut utiliser sa réaction pour lancer Barbes argentées — forçant une créature qui vient de réussir un jet à le relancer et prendre le moins bon résultat. Des sorts supplémentaires liés aux émotions et à l'inspiration sont disponibles quotidiennement."
    },
    { nom: "Heaume d'éclat", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "125 850 po", note: "calculated with max jewels (Misc: 21,000 for x70 lv3 spells, 9,000 for x20 lv4 spells)",
      description: "Un heaume serti de gemmes magiques qui peut déchaîner des jets de lumière aveuglants.",
      details: "Ce heaume spectaculaire est serti de précieuses gemmes qui servent de réservoirs d'énergie lumineuse. Il possède 4 types de gemmes, chacune permettant un effet : diamants (20 charges) pour lancer Lumière du jour ; rubis (30 charges) pour Mur de feu ; opales de feu (10 charges) pour Boule de feu ; topazes jaunes (50 charges) pour Rayon de soleil. De plus, toute undead regardant son porteur doit réussir un jet de sauvegarde ou être aveuglé. Un heaume de grande valeur stratégique dans les combats impliquant des morts-vivants et de vastes espaces."
    },
    { nom: "Heaume de compréhension des langues", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 485 po", note: "based: comprehend languages",
      description: "Un heaume enchanté qui permet de comprendre et de parler toutes les langues.",
      details: "Ce heaume de métal gravé de glyphes dans des dizaines d'alphabets différents permet à son porteur ou sa porteuse de comprendre instantanément le sens littéral de toutes les langues parlées et écrites. Il peut également lire les documents dans n'importe quel script, même ancien ou codé. Cet effet fonctionne en permanence tant que le heaume est porté. Son porteur ou sa porteuse ne peut pas nécessairement parler les langues comprises, mais peut répondre par gestes ou dans sa propre langue en sachant que l'autre comprendra également grâce à un effet miroir."
    },
    { nom: "Heaume de télépathie", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 430 po", note: "based: detect thoughts & suggestion",
      description: "Un heaume qui permet de lire les pensées proches et de transmettre des suggestions mentalement.",
      details: "Ce heaume lisse et légèrement brillant permet à son porteur ou sa porteuse de lancer Détection des pensées à volonté (concentration jusqu'à 1 minute). Il peut percevoir les pensées superficielles des créatures dans un rayon de 9 mètres et tenter d'accéder aux pensées profondes. De plus, une fois par jour, il peut lancer Suggestion sur une créature dont il a lu les pensées (DD de sauvegarde 13). Toutes ces capacités fonctionnent sans composantes verbales ou gestuelles visibles."
    },
    { nom: "Heaume de téléportation", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "12 960 po", note: "based: teleport",
      description: "Un heaume légendaire qui permet de se téléporter vers des destinations connues.",
      details: "Ce heaume en métal aux runes changeantes possède 3 charges permettant de lancer Téléportation. Son porteur ou sa porteuse peut se téléporter lui ou elle-même et jusqu'à 8 autres créatures consentantes vers une destination connue, avec la précision habituelle du sort (consulter la table de précision du DMG). Le heaume récupère 1d3 charges à l'aube. Un outil de déplacement légendaire qui permet des mouvements stratégiques instantanés sur de très longues distances."
    },
    { nom: "Havresac commode de Heward", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 960 po", note: "based: floating disk x2",
      description: "Un sac à dos magique avec de multiples compartiments extradimensionnels bien organisés.",
      details: "Ce sac à dos ordinaire en apparence renferme trois espaces extradimensionnels distincts. Le compartiment central peut contenir jusqu'à 8 objets de taille quelconque. Les deux poches latérales peuvent chacune contenir jusqu'à 20 objets de taille P. Récupérer n'importe quel objet ne prend qu'une action libre ou une action bonus — son porteur ou sa porteuse pense à l'objet voulu et le sent immédiatement dans sa main. Le havresac pèse toujours 2,5 kg quelle que soit la charge. Si retourné, les objets tombent mais ne sont pas détruits."
    },
    { nom: "Sachet d'épices commode de Heward", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: prestidigitation",
      description: "Un petit sachet qui produit n'importe quelle épice ou condiment à la demande.",
      details: "Ce petit sachet de tissu brodé peut produire à la demande une pincée de n'importe quelle épice, herbe aromatique ou condiment imaginable — sel, poivre, cannelle, safran, herbes de Provence, ou même des mélanges exotiques. La quantité produite par utilisation est suffisante pour assaisonner un repas pour quatre personnes. Impossible d'en extraire des poisons ou substances dangereuses. Un luxe apprécié des aventuriers fatigués de manger des rations insipides, et un cadeau apprécié par tout cuisinier."
    },
    { nom: "Cor de déflagration", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "2 005 po", note: "while it is consumable, it has (likely) multiple uses",
      description: "Un cor de guerre enchanté dont la sonnerie crée une explosion de force dévastatrice.",
      details: "Ce cor de métal sombre est gravé de runes explosives. En soufflant dedans (action), son porteur ou sa porteuse émet une puissante onde de choc dans un cône de 9 mètres devant lui ou elle. Chaque créature dans cette zone doit réussir un jet de sauvegarde de Dextérité (DD 15) ou subir 3d6 dégâts de tonnerre et être renversée. Les structures non magiques dans la zone subissent des dommages. Le cor peut être utilisé 3 fois par jour, se rechargeant à l'aube. Sa détonation est audible jusqu'à 300 mètres à la ronde."
    },
    { nom: "Cor d'alarme silencieuse", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "693 po", note: "based: message (plus 1 level)",
      description: "Un cor qui envoie une alarme silencieuse à une liste de destinataires prédéfinis.",
      details: "Ce petit cor en bronze lisse peut être programmé (rituel de 1 minute) pour envoyer une alarme silencieuse — un son doux inaudible par tous sauf par des personnes désignées, dans un rayon de 300 mètres. En soufflant dedans, son porteur ou sa porteuse alerte jusqu'à 10 personnes spécifiques qui entendent une tonalité d'alarme douce dans leur tête. Ce système permet des communications discrètes en cas de danger. Il peut également émettre un son normal si on le souffle fort (à portée d'ouïe normale). Populaire dans les guildes de marchands et les familles nobles."
    },
    { nom: "Cor de Valhalla (argent)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "14 520 po", note: "based: conjure animals, avg summoned 7",
      description: "Un cor d'argent qui convoque 2d4 guerriers einherjars depuis les plaines de Valhalla.",
      details: "Ce cor en argent poli est gravé de scènes de bataille nordiques. En soufflant dedans, son utilisateur ou utilisatrice peut invoquer 2d4 berserkers (statistiques de berserker) qui lui obéissent pour 1 heure. Ces guerriers einherjars combattent sans peur et sans hésitation, mais disparaissent à la fin de la durée. Le cor peut être utilisé une fois tous les 7 jours. Seuls les guerriers et bardes peuvent le faire sonner efficacement — pour les autres, les guerriers invoqués peuvent se retourner contre eux."
    },
    { nom: "Cor de Valhalla (laiton)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "21 780 po", note: "based: conjure animals, avg summoned 10",
      description: "Un cor de laiton plus puissant qui convoque 3d4+3 guerriers vikings pour le combat.",
      details: "Ce cor de laiton patiné est gravé de runes de combat. En soufflant dedans, son utilisateur ou utilisatrice peut invoquer 3d4+3 berserkers einherjars qui lui obéissent pour 1 heure. Cette armée de guerriers éprouvés représente une force de combat considérable. Le cor peut être utilisé une fois tous les 7 jours. Guerriers, bardes et certains paladins peuvent le faire sonner. Pour les autres, une chance de 50% existe que les guerriers invoqués soient hostiles."
    },
    { nom: "Cor de Valhalla (bronze)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "38 115 po", note: "based: conjure animals, avg summoned 14",
      description: "Un puissant cor de bronze qui convoque une horde de 4d4+4 guerriers celestiaux.",
      details: "Ce cor de bronze patiné par les âges est gravé de représentations de batailles légendaires. En soufflant dedans, son utilisateur ou utilisatrice peut invoquer 4d4+4 berserkers einherjars qui combattent pour lui ou elle pendant 1 heure. Le nombre de guerriers invoqués est impressionnant — assez pour former une petite armée. Le cor peut être utilisé une fois tous les 7 jours. Seuls les guerriers, les bardes de haut rang et les paladins peuvent le faire sonner sans risque d'hostilité des invoqués."
    },
    { nom: "Cor de Valhalla (fer)", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "72 600 po", note: "based: conjure animals, avg summoned 17",
      description: "Le cor de Valhalla légendaire qui invoque une armée de 5d4+5 guerriers d'élite divins.",
      details: "Ce cor antique en fer noirci est le plus puissant des cors de Valhalla. En soufflant dedans, son utilisateur ou utilisatrice invoque 5d4+5 berserkers einherjars divins qui combattent avec une férocité légendaire pendant 1 heure. Cette armée invoquée peut renverser le cours d'une bataille entière. Le cor peut être utilisé une fois tous les 7 jours. Seuls les guerriers légendaires ou ceux en faveur d'Odin peuvent le faire sonner sans s'exposer à la colère des guerriers convoqués."
    },
    { nom: "Fers à cheval de rapidité", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 960 po", note: "based: longstrider (plus 1 level)",
      description: "Des fers enchantés qui augmentent considérablement la vitesse de la monture qui les porte.",
      details: "Ces quatre fers en métal brillant finement gravés, une fois posés sur les sabots d'une monture équidée, augmentent sa vitesse de déplacement de 9 mètres. Cette augmentation est permanente tant que les fers sont en place et ne nécessite aucune attunement ni activation. Un cheval de guerre avec ces fers peut facilement distancer n'importe quelle monture ordinaire. Ils peuvent être posés et retirés par un maréchal-ferrant compétent en 1 heure par paire. Idéaux pour les messagers royaux et les cavaliers d'élite."
    },
    { nom: "Fers à cheval du zéphyr", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "5 940 po", note: "based: freedom of movement minus 2 levels",
      description: "Des fers magiques qui permettent à une monture de galoper dans les airs et de ne jamais se fatiguer.",
      details: "Ces fers d'argent gravés de nuages et de vents permettent à la monture qui les porte de galoper dans les airs à une hauteur de 3 mètres au-dessus du sol, traitant l'air comme une surface solide. La monture ne se fatigue jamais, peut courir indéfiniment sans repos et peut traverser des zones de terrain difficile sans réduction de vitesse. Elle est également immunisée aux effets qui ralentissent ou bloquent les mouvements non magiques. Une monture ainsi ferrée est le rêve de tout cavalier ou cavalière aventurier ou aventurière."
    },
    { nom: "Tatouage de l'enlumineur", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "660 po", note: "based: illusory script x1/day, writing with finger as cantrip",
      description: "Un tatouage d'enlumineur qui permet d'écrire de façon magique et de créer des scripts illusoires.",
      details: "Ce tatouage en forme de plume ou de calligraphie stylisée couvre la main et les doigts de son porteur ou sa porteuse. Il lui permet d'écrire avec son doigt sur n'importe quelle surface comme s'il ou elle tenait une plume — sans encre ni outil. L'écriture peut être visible ou invisible selon son choix. Une fois par jour, il peut créer une Script illusoire : un document qui semble différent selon le lecteur — son vrai contenu n'est visible que par les créatures qu'il ou elle désigne."
    },
    { nom: "Instrument d'illusions", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "300 po", note: "based: minor illusion",
      description: "Un instrument de musique enchanté qui crée des accompagnements sonores illusoires.",
      details: "Cet instrument — luth, flûte, tambour ou autre — peut créer des illusions sonores d'accompagnement lors de ses performances. Son porteur ou sa porteuse peut jouer seul et sembler jouer en ensemble grâce aux accompagnements illusoires. Il peut également créer des ambiances sonores — bruit de foule, sons de nature, effets spéciaux sonores — dans un rayon de 9 mètres. Ces effets sont similaires à la composante sonore du sort Illusion mineure. Un outil populaire chez les bardes de rue qui cherchent à maximiser l'impact de leurs performances solo."
    },
    { nom: "Instrument de scription", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "180 po", note: "based: cantrip power",
      description: "Un outil magique qui transcrit automatiquement les textes dictés.",
      details: "Cet instrument — plume, stylet ou autre outil d'écriture — peut écrire de façon autonome. Son porteur ou sa porteuse le pose sur une surface écrivable, commence à dicter, et l'outil transcrit ses paroles en texte lisible. Il peut transcrire jusqu'à 3 pages de texte par heure, en adaptant l'écriture et le format selon les préférences de son propriétaire. Il peut également copier un document existant à la même vitesse. Un outil inestimable pour les scribes, clercs et érudits qui ont besoin de transcrire de grandes quantités de texte."
    },
    { nom: "Instrument des bardes (harpe d'Anstruth)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "42 840 po", note: "Misc: 3000 for fly, invisibility, levitate, protection from evil and good",
      description: "La harpe la plus puissante des instruments de bardes, permettant des sorts redoutables.",
      details: "La harpe d'Anstruth est l'un des deux instruments de bardes les plus prestigieux. Son porteur ou sa porteuse peut lancer Invoquer la foudre, Brume, Communication avec les animaux, Ténèbres, Dissipation de la magie, Lumière du jour, Ennemis à volonté, Nuage de brouillard et Vol. Ces sorts sont lancés sans composantes ni slots. De plus, son porteur peut lancer Vol, Invisibilité, Lévitation et Protection contre le mal et le bien une fois par jour chacun. Seuls les bardes de haut niveau peuvent la maîtriser pleinement."
    },
    { nom: "Instrument des bardes (mandoline de Canaith)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "13 200 po", note: "Misc: 3000 for fly, invisibility, levitate, protection from evil and good",
      description: "La mandoline de Canaith, instrument de barde permettant des sorts de protection et de soin.",
      details: "Cette mandoline finement ouvragée est l'un des instruments sacrés des bardes. Son porteur ou sa porteuse peut lancer Communication avec les animaux, Soins, Contresort, Dissipation de la magie, Croissance végétale et Guérison des blessures. Ces sorts sont lancés sans composantes ni slots. De plus, ses sorts de Vol, Invisibilité, Lévitation et Protection contre le mal et le bien peuvent être lancés une fois par jour chacun. Un instrument qui équilibre les capacités de soutien et de combat pour les bardes intermédiaires."
    },
    { nom: "Instrument des bardes (lyre de Cli)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "15 600 po", note: "Misc: 3000 for fly, invisibility, levitate, protection from evil and good",
      description: "La lyre de Cli, instrument sacré des bardes permettant des sorts de contrôle et de construction.",
      details: "Cette lyre d'argent est l'instrument favori des bardes constructeurs et organisateurs. Son porteur ou sa porteuse peut lancer Communication avec les animaux, Contresort, Dissipation de la magie, Vol, Invisibilité, Lévitation, Bâtisseur invisible et Protection contre le mal et le bien. Ces sorts sont lancés sans composantes ni slots (certains une fois par jour). Connue pour les lyristes qui bâtissaient des fortifications en jouant, elle est appréciée des bardes qui combinent aventure et gestion de ressources."
    },
    { nom: "Instrument des bardes (luth de Doss)", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "7 920 po", note: "Misc: 3000 for fly, invisibility, levitate, protection from evil and good",
      description: "Le luth de Doss, instrument de barde d'entrée de gamme avec des sorts d'utilité polyvalents.",
      details: "Ce luth joliment décoré est souvent le premier instrument de barde qu'un musicien magiquement doué peut obtenir. Son porteur ou sa porteuse peut lancer Communication avec les animaux, Amitié avec les animaux, Vol, Invisibilité, Lévitation et Protection contre le mal et le bien (certains une fois par jour, d'autres via charges). Ces sorts sont lancés sans composantes. Un outil polyvalent pour les bardes débutants qui souhaitent diversifier leur arsenal au-delà des sorts qu'ils connaissent naturellement."
    },
    { nom: "Instrument des bardes (bandore de Fochlucan)", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "6 300 po", note: "Misc: 3360 for fly, invisibility, levitate, protection from evil and good, speak with animals",
      description: "La bandore de Fochlucan, le plus humble des instruments de bardes avec des sorts naturels.",
      details: "Cette petite bandore rustique aux cordes de boyau est l'instrument de barde le plus accessible. Son porteur ou sa porteuse peut lancer Communication avec les animaux, Emmêler, Lumières féeriques, Soins des blessures, Vol, Invisibilité, Lévitation, Protection contre le mal et le bien et Parler avec les animaux. Ces sorts sont lancés sans composantes, certains une fois par jour. Sa connexion avec la nature en fait un choix populaire parmi les bardes druides et les chanteurs des bois."
    },
    { nom: "Instrument des bardes (cistre de Mac-Fuirmidh)", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "6 660 po", note: "Misc: 3000 for fly, invisibility, levitate, protection from evil and good",
      description: "Le cistre de Mac-Fuirmidh, instrument de barde orienté vers les sorts de protection et de soin.",
      details: "Ce cistre en bois de poirier est reconnaissable par ses motifs géométriques incrustés. Son porteur ou sa porteuse peut lancer Communication avec les animaux, Soins, Vol, Invisibilité, Lévitation et Protection contre le mal et le bien (certains une fois par jour, d'autres via charges). Ces sorts sont lancés sans composantes. L'instrument est connu pour favoriser les bardes qui privilégient la protection du groupe et le soin plutôt que le combat direct. Un investissement solide pour les bardes soutiens."
    },
    { nom: "Instrument des bardes (harpe d'Ollamh)", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "72 600 po", note: "Misc: 3000 for fly, invisibility, levitate, protection from evil and good",
      description: "La harpe d'Ollamh, l'instrument de barde légendaire le plus puissant, équivalent à un artefact.",
      details: "La harpe d'Ollamh est le summum des instruments de bardes — un objet quasi légendaire dont la seule possession est un honneur. Son porteur ou sa porteuse peut lancer Contrôle climatique, Mort (5 charges), Dissipation de la magie, Mot de puissance : étourdissement, Vol, Invisibilité, Lévitation et Protection contre le mal et le bien. Ces sorts sont lancés sans composantes ni slots. La harpe est consciente et n'accepte que les bardes de grande renommée dont le talent et la vertu la satisfont."
    },
{ nom: "Pierre d'Ioun (absorption)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "6 750 po", note: "based: counterspell (plus 1 level), charges based on highest level",
      description: "Une pierre d'Ioun qui orbite son porteur et absorbe les sorts de niveau bas.",
      details: "Cette pierre rose pâle tourne en orbite autour de la tête de son porteur ou sa porteuse. Elle possède 20 charges et peut absorber les sorts de niveau 1 à 4 qui ciblent uniquement son porteur. Chaque niveau de sort absorbé consomme 1 charge. Les charges absorbées peuvent être utilisées par son porteur pour lancer des sorts (si il ou elle est lanceur de sorts), dépensant les charges correspondant au niveau du sort. Se recharge à l'aube à raison de 1d3 charges. Une protection passive contre les sorts ciblés de bas niveau."
    },
    { nom: "Pierre d'Ioun (agilité)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "1 890 po", note: "nan",
      description: "Une pierre d'Ioun qui confère une amélioration permanente de la Dextérité.",
      details: "Cette pierre en cristal rouge-orangé tourne lentement autour de la tête de son porteur ou sa porteuse. Tant qu'elle est en orbite, sa Dextérité augmente de 2, jusqu'à un maximum de 20. Cette augmentation est permanente tant que l'attunement est maintenu. La pierre n'a pas besoin d'être activée — son effet est continu et passif. Une amélioration précieuse pour les personnages qui dépendent de la Dextérité pour leurs attaques, leur défense ou leurs compétences."
    },
    { nom: "Pierre d'Ioun (conscience)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 800 po", note: "based: alarm",
      description: "Une pierre d'Ioun qui veille sur son porteur pendant le sommeil, l'alertant des intrus.",
      details: "Cette petite pierre dorée tourne autour de la tête de son porteur ou sa porteuse. Lorsqu'il ou elle dort ou est inconscient(e), la pierre reste en orbite et surveille les environs. Elle alerte son porteur en cas de présence de créatures dans un rayon de 9 mètres — son porteur se réveille avec une conscience immédiate du danger. De plus, elle lui permet de rester éveillé en continu jusqu'à 24 heures sans subir d'épuisement lié au manque de sommeil. Un gardien silencieux d'une valeur inestimable."
    },
    { nom: "Pierre d'Ioun (endurance)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "1 890 po", note: "nan",
      description: "Une pierre d'Ioun qui améliore la Constitution de son porteur de façon permanente.",
      details: "Cette pierre en cristal violet clair tourne autour de la tête de son porteur ou sa porteuse. Tant qu'elle est en orbite, sa Constitution augmente de 2, jusqu'à un maximum de 20. Cette augmentation est permanente tant que l'attunement est maintenu et se traduit par des points de vie supplémentaires. La pierre est particulièrement prisée des guerriers et personnages au corps-à-corps qui souhaitent maximiser leur résistance physique. Comme toutes les pierres d'Ioun, elle peut être volée ou saisie en combat."
    },
    { nom: "Pierre d'Ioun (absorption supérieure)", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "47 250 po", note: "based: counterspell (plus 5 levels), charges based on highest level",
      description: "La pierre d'absorption légendaire qui peut contrer des sorts jusqu'au niveau 9.",
      details: "Cette pierre d'un blanc lumineux orbite autour de la tête de son porteur ou sa porteuse, laissant une légère traîne lumineuse. Elle peut absorber les sorts de niveau 1 à 9 qui ciblent uniquement son porteur. Elle possède 50 charges, chaque niveau de sort consommant 1 charge. Les charges peuvent ensuite être dépensées par son porteur lanceur de sorts. Se recharge de 1d6 charges à l'aube. Si les 50 charges sont épuisées lors d'un 1, la pierre disparaît dans un flash de lumière aveuglant. La protection ultime contre les sorts ciblés de toute puissance."
    },
    { nom: "Pierre d'Ioun (perspicacité)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "1 890 po", note: "nan",
      description: "Une pierre d'Ioun qui améliore la Sagesse de son porteur.",
      details: "Cette pierre translucide bleu-vert orbite tranquillement autour de la tête de son porteur ou sa porteuse. Tant qu'elle est en orbite, sa Sagesse augmente de 2, jusqu'à un maximum de 20. Cette augmentation est permanente tant que l'attunement est maintenu. Un bonus de Sagesse amélioré accroît la Perception passive, les tests de Perspicacité et de Médecine, les jets de sauvegarde de Sagesse, et le DD des sorts des lanceurs qui l'utilisent. Particulièrement prisée des clercs, druides et rangers."
    },
    { nom: "Pierre d'Ioun (intellect)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "1 890 po", note: "nan",
      description: "Une pierre d'Ioun qui augmente l'Intelligence de son porteur.",
      details: "Cette pierre en cristal bleu vif orbite légèrement plus rapidement que les autres pierres d'Ioun, comme animée d'une énergie intellectuelle. Tant qu'elle est en orbite, l'Intelligence de son porteur ou sa porteuse augmente de 2, jusqu'à un maximum de 20. Cette augmentation est permanente tant que l'attunement est maintenu. Pour les magiciens, cette augmentation se traduit directement par un DD de sort plus élevé et des bonus aux tests de connaissances arcanes. Un investissement inestimable pour les savants et les mages."
    },
    { nom: "Pierre d'Ioun (commandement)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "1 890 po", note: "nan",
      description: "Une pierre d'Ioun qui confère un bonus de Charisme exceptionnel.",
      details: "Cette pierre en cristal rouge cramoisi vibre légèrement d'une énergie sociale. Tant qu'elle est en orbite autour de la tête de son porteur ou sa porteuse, son Charisme augmente de 2, jusqu'à un maximum de 20. Cette augmentation est permanente tant que l'attunement est maintenu. Un Charisme élevé améliore toutes les interactions sociales, le DD des sorts des sorciers et bardes, et la puissance des sorts et capacités basés sur cette caractéristique. Populaire parmi les sorciers, bardes et diplomates."
    },
    { nom: "Pierre d'Ioun (maîtrise)", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "82 500 po", note: "based: wish",
      description: "La pierre d'Ioun légendaire qui confère la maîtrise de toutes les compétences.",
      details: "Cette pierre d'un éclat doré presque aveuglant orbite autour de la tête de son porteur ou sa porteuse, projetant parfois de petits éclairs dorés. Elle confère la compétence de maîtrise dans toutes les aptitudes de classe et tous les outils — son porteur ou sa porteuse peut réaliser n'importe quelle action avec une maîtrise parfaite. Elle offre également un bonus de +1 à toutes les caractéristiques, jusqu'à un maximum de 20. C'est l'une des pierres d'Ioun les plus précieuses et les plus convoitées de tous les plans."
    },
    { nom: "Pierre d'Ioun (protection)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 800 po", note: "nan",
      description: "Une pierre d'Ioun qui améliore la Classe d'Armure de son porteur.",
      details: "Cette pierre en cristal blanc-nacré orbite autour de la tête de son porteur ou sa porteuse, projetant de légères lueurs défensives. Tant qu'elle est en orbite, sa Classe d'Armure bénéficie d'un bonus de +1. Ce bonus s'applique à toutes les formes d'attaque et se superpose aux autres bonus de CA. Discret et constant, il représente une protection passive qui ne nécessite ni concentration ni activation. Une amélioration défensive précieuse pour tout personnage qui reçoit régulièrement des attaques en première ligne."
    },
    { nom: "Pierre d'Ioun (régénération)", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "15 000 po", note: "based: cure wounds (plus 2 levels), 24 charges a day",
      description: "Une pierre d'Ioun légendaire qui régénère progressivement les blessures de son porteur.",
      details: "Cette pierre rose vif orbite rapidement autour de la tête de son porteur ou sa porteuse, laissant une traîne rose lumineuse. Elle lui permet de récupérer 15 points de vie par heure tant qu'il lui reste au moins 1 PV. De plus, à moins d'être détruit(e) par des circonstances extrêmes (désintégration, mort instantanée), son porteur ou sa porteuse ne peut pas mourir de blessures et les membres perdus repoussent en 1d6+1 jours. La pierre de régénération est un objet particulièrement précieux pour les combattants de première ligne."
    },
    { nom: "Pierre d'Ioun (réserve)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "9 000 po", note: "based on 4th level spell power",
      description: "Une pierre d'Ioun qui stocke de l'énergie magique pour alimenter les sorts de son porteur.",
      details: "Cette pierre en cristal violet sombre orbite autour de la tête de son porteur ou sa porteuse, pulsant d'une énergie contenue. Elle peut stocker jusqu'à 3 niveaux de sorts. Un lanceur de sorts peut y déposer un sort en le lançant dans la pierre (l'énergie est stockée sans effet). Ces charges peuvent ensuite être libérées par son porteur pour alimenter ses propres sorts, comme des slots de sorts supplémentaires. Elle se recharge naturellement de 1d3 niveaux par long repos. Une réserve magique précieuse pour les lanceurs de sorts en longue journée."
    },
    { nom: "Pierre d'Ioun (force)", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "1 890 po", note: "nan",
      description: "Une pierre d'Ioun qui améliore la Force physique de son porteur.",
      details: "Cette pierre en granit rouge rubis orbite avec une gravité particulière autour de la tête de son porteur ou sa porteuse. Tant qu'elle est en orbite, sa Force augmente de 2, jusqu'à un maximum de 20. Cette augmentation est permanente tant que l'attunement est maintenu. Une Force améliorée augmente les dégâts des attaques au corps à corps, la capacité de port de charge, et les tests d'athlétisme. Particulièrement appréciée des guerriers et barbares qui cherchent à maximiser leur impact physique en combat."
    },
    { nom: "Pierre d'Ioun (subsistance)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 800 po", note: "based: goodberry",
      description: "Une pierre d'Ioun qui élimine le besoin de nourriture et d'eau pour son porteur.",
      details: "Cette petite pierre verte et dorée orbite tranquillement autour de la tête de son porteur ou sa porteuse. Tant qu'elle est en orbite, il ou elle n'a plus besoin de manger ni de boire — la pierre absorbe l'énergie ambiante et la convertit en sustentation vitale. Son porteur ou sa porteuse ne peut pas non plus mourir de faim ou de soif. Un avantage pratique pour les longues expéditions en terrain hostile où les provisions manquent, et une économie considérable sur les dépenses quotidiennes d'alimentation."
    },
    { nom: "Bandes de fer de Bilarro", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 980 po", note: "based on restrained multiplied by 10",
      description: "Un objet sphérique qui se déploie en bandes d'acier pour immobiliser une créature.",
      details: "Cette petite sphère de métal semble solide mais renferme des bandes d'acier enroulées en spirale. En la lançant sur une créature de taille TG ou moins (portée 9 m), son porteur ou sa porteuse effectue un jet d'attaque à distance (bonus d'attaque +8). En cas de touche, la sphère se déploie en une multitude de bandes qui enserrent la cible — elle devient entravée. Elle peut tenter de se libérer avec un jet de Force (DD 20). Seul le jet de Force ou un sort de Désintégration peut libérer la cible. Usage unique, sauf récupération après combat."
    },
    { nom: "Flasque de fer", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "24 750 po", note: "based: charm monster for an empty flask",
      description: "Une flasque légendaire qui peut capturer et emprisonner des créatures extraplanaires.",
      details: "Cette flasque en fer rouillé avec un bouchon de plomb semble ordinaire mais renferme un espace extradimensionnel. Son porteur ou sa porteuse peut tenter de capturer une créature extraplanaire (fiélon, céleste, élémentaire, etc.) en pointant la flasque vers elle et en prononçant le sort (action). La créature doit réussir un jet de sauvegarde de Sagesse (DD 17) ou être aspirée dans la flasque. Elle y reste prisonnière indéfiniment. La flasque peut contenir une seule créature. Déboucher la flasque libère la créature captive, qui peut être hostile ou non selon comment elle a été traitée."
    },
    { nom: "Onguent de Keoghtom", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 391 po", note: "for 5 doses",
      description: "Un onguent miraculeux qui guérit les blessures, les maladies et les poisons en une application.",
      details: "Ce pot contient 5 doses d'un onguent épais aux reflets dorés dégageant une légère odeur de miel et d'herbes médicinales. En appliquant une dose sur une créature blessée (action), elle récupère 2d8 + 2 points de vie, est guérie de toute maladie et est débarrassée de tout poison qui l'affectait. La créature cible peut être consciente ou non. L'application est simple et rapide — aucune compétence médicale n'est requise. Ces 5 doses représentent suffisamment de soins pour traverser même les aventures les plus difficiles."
    },
    { nom: "Lanterne de révélation", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4 950 po", note: "based: see invisibility (plus 1 level)",
      description: "Une lanterne dont la lumière révèle les créatures et objets invisibles dans son rayon.",
      details: "Cette lanterne d'aspect élaboré avec des verres colorés jette une lumière normale sur 9 mètres. Dans son rayon lumineux, toutes les créatures et objets invisibles deviennent visibles — la lumière magique de la lanterne perce l'invisibilité naturelle et magique, révélant ce qui se cache dans l'obscurité ou derrière des enchantements. Les créatures éthérées proches du Plan Matériel sont également partiellement visibles. La lanterne brûle de l'huile normale et dure 6 heures par flacon. Précieuse dans les donjons infestés de créatures invisibles."
    },
    { nom: "Libram des âmes et de la chair", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "5 240 po", note: "Treat swap spells as Lv3 (x3), treat indifferent undead as Lv1 spell and added to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un traité de nécromancie qui améliore les sorts nécromantiques et facilite le contrôle des morts-vivants.",
      details: "Ce grimoire noir à l'encre rouge contient des formules de nécromancie, des rituels de liaison des âmes et des techniques de contrôle des morts-vivants. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts nécromantiques, bénéficiant d'un bonus au DD. Il permet également de tenter de commander des morts-vivants indifférents (non contrôlés) dans un rayon de 9 mètres. Des sorts supplémentaires de nécromancie sont disponibles quotidiennement depuis le libram. Un outil essentiel pour les nécromanciens."
    },
    { nom: "Tatouage du puits de vie", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "18 900 po", note: "based: protection from energy (plus 1 level, no concentration) and death ward",
      description: "Un tatouage de vitalité qui protège son porteur de la mort et renforce sa résistance.",
      details: "Ce tatouage représente une source de lumière ou un symbole de vie sur le torse de son porteur ou sa porteuse. Il lui confère la résistance aux dégâts nécrotiques permanente. De plus, une fois par jour, quand son porteur ou sa porteuse tomberait à 0 PV à cause de dégâts nécrotiques ou d'un effet mortel direct, le tatouage se consume pour maintenir son porteur à 1 PV au lieu de 0 — similaire au sort Garde contre la mort. Cette protection se réinitialise à l'aube. Un tatouage salvateur pour ceux qui affrontent régulièrement la nécromancie ou les morts-vivants."
    },
    { nom: "Verrou de tromperie", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "990 po", note: "based: bane (sort of)",
      description: "Un verrou enchanté qui inflige un malus discret aux actions de ceux qui tentent de l'ouvrir.",
      details: "Ce verrou d'apparence ordinaire possède un enchantement discret. Toute créature qui tente de crocheter ce verrou ou de forcer la serrure subit un désavantage à ses tests. De plus, si quelqu'un d'autre que le propriétaire légitime tente d'ouvrir la porte ou le conteneur verrouillé, une alarme silencieuse avertit ce propriétaire (dans un rayon de 90 mètres) de la tentative. Le verrou peut être ouvert normalement avec sa clé. Un excellent outil pour sécuriser les coffres, armoires et portes importantes sans attirer l'attention."
    },
    { nom: "Luth de fracas tonnant", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "11 550 po", note: "treat weapon as if +3 weapon (as bard Cha bonus is typically at least that much higher than Str)",
      description: "Un luth légendaire dont la musique peut déchaîner des ondes soniques dévastatrices.",
      details: "Ce luth aux cordes de métal et à la caisse en bois de fer peut être utilisé comme arme contondante +3 et comme instrument de musique exceptionnel. En jouant un accord de puissance (action), son porteur ou sa porteuse peut déclencher une onde sonique dans un cône de 9 mètres — chaque créature dans la zone subit 3d8 dégâts de tonnerre (jet de sauvegarde de Constitution DD 15 pour la moitié) et doit réussir ce même jet ou être repoussée de 3 mètres et renversée. Utilisable 3 fois par jour, se recharge à l'aube."
    },
    { nom: "Lyre de construction", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "23 160 po", note: "based: mending, reaction as shield (plus 1 level), and misc cost includes extra 1/day spells you can cast",
      description: "Une lyre dont la musique répare les structures, les objets et peut générer un bouclier de force.",
      details: "Cette magnifique lyre en bois doré est réputée pour ses propriétés constructrices. En jouant (action), son porteur ou sa porteuse peut réparer des objets ou des structures dans un rayon de 18 mètres — comme plusieurs lancers de Réparation simultanés. Une fois par jour, une mélodie spéciale peut lancer Fabrication (créer un objet à partir de matières premières). En réaction, son porteur peut jouer un accord protecteur pour créer un bouclier de force (+5 CA jusqu'à son prochain tour). Deux de ces accords sont disponibles par jour."
    },
    { nom: "Manteau de résistance aux sorts", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "9 000 po", note: "based: circle of power (minus 1 level)",
      description: "Un manteau enchanté qui confère un avantage aux jets de sauvegarde contre les sorts.",
      details: "Ce manteau en tissu épais et légèrement lustré, souvent de couleur bleu nuit ou argenté, est tissé de fils enchantés. Son porteur ou sa porteuse bénéficie d'un avantage à tous les jets de sauvegarde contre les sorts et autres effets magiques. De plus, lorsqu'un sort lui permet de ne subir que la moitié des dégâts en cas de réussite, il n'en subit aucun. Cette double protection en fait l'un des objets les plus efficaces pour survivre face aux lanceurs de sorts adverses."
    },
    { nom: "Manuel d'exercice profitable", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43 659 po", note: "due to max increase, uses set score",
      description: "Un livre d'entraînement magique qui augmente définitivement la Force et son maximum.",
      details: "Ce manuel épais illustré d'exercices et de techniques corporelles contient des programmes d'entraînement magiquement intensifiés. En le lisant pendant 48 heures sur 6 jours consécutifs, son lecteur ou lectrice augmente sa Force de 2 points ainsi que son maximum pour cette caractéristique. La lecture est épuisante mais transformatrice. Le manuel perd son enchantement après une lecture et ne peut être réutilisé qu'après 100 ans de régénération. Un investissement permanent inestimable pour les guerriers et barbares."
    },
    { nom: "Manuel des golems (argile)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "16 335 po", note: "based: conjure elemental (9th-level)",
      description: "Un manuel de création détaillant la construction et l'animation d'un golem d'argile.",
      details: "Ce grimoire poussiéreux contient les rituels et formules nécessaires pour créer un golem d'argile — l'une des constructions magiques les plus puissantes. La lecture et l'utilisation du manuel (30 jours de travail, 65 000 po de matériaux) permettent de construire un golem d'argile entièrement fonctionnel. Le golem obéit à ses créateurs et ne peut être contrôlé que par eux. Le manuel se désintègre après utilisation. Un golem d'argile est une arme défensive formidable, résistante à la magie et d'une puissance physique écrasante."
    },
    { nom: "Manuel des golems (chair)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "6 237 po", note: "based: conjure elemental",
      description: "Un manuel sinistre décrivant la création d'un golem de chair assemblé à partir de cadavres.",
      details: "Ce grimoire à l'aspect macabre contient les rituels de nécromancie avancée pour créer un golem de chair — une horreur construite à partir de parties de cadavres humanoïdes. La construction (60 jours, 50 000 po) produit un golem de chair qui obéit à son créateur ou créatrice. Moins résistant que d'autres golems mais capable de régénérer des blessures minimes, le golem de chair est une construction haïssable qui provoque généralement révulsion et terreur chez ceux qui le voient. Le manuel se désintègre après utilisation."
    },
    { nom: "Manuel des golems (fer)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "27 225 po", note: "based: conjure elemental (x3 9th level)",
      description: "Un traité métallurgique magique pour la création d'un redoutable golem de fer.",
      details: "Ce manuel technique rigoureusement rédigé contient les formules pour construire un golem de fer — la construction magique la plus résistante disponible. La construction (120 jours, 100 000 po) produit un golem de fer massif qui obéit à son créateur ou créatrice. Le golem de fer est immunisé à la magie non transmutative, possède une résistance extraordinaire aux dégâts, et son souffle empoisonné peut dévaster une zone. Presque indestructible en combat, il représente l'investissement ultime en termes de défense permanente."
    },
    { nom: "Manuel des golems (pierre)", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "21 780 po", note: "based: conjure elemental (x2 9th level)",
      description: "Un manuel de taille et d'animation pour créer un puissant golem de pierre.",
      details: "Ce manuel gravé de motifs géométriques contient les instructions pour créer un golem de pierre — taille de la roche, animation et programmation de ses directives. La construction (90 jours, 80 000 po) produit un golem de pierre imposant qui obéit à son créateur ou créatrice. Le golem de pierre peut ralentir ses ennemis par magie, est immunisé aux sorts de bas niveau et possède une durabilité extraordinaire. Moins absolu que le golem de fer mais bien plus accessible, il représente une protection permanente de valeur pour une forteresse ou un trésor."
    },
    { nom: "Manuel de vivacité", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43 659 po", note: "due to max increase, uses set score",
      description: "Un livre d'entraînement mental qui augmente définitivement la Dextérité et son maximum.",
      details: "Ce manuel illustré de techniques de coordination, d'acrobaties et de réflexes contient des exercices magiquement intensifiés. En le lisant pendant 48 heures sur 6 jours consécutifs, son lecteur ou lectrice augmente sa Dextérité de 2 points ainsi que son maximum pour cette caractéristique. Les exercices sont épuisants mais transforment définitivement les réflexes et la coordination du lecteur. Après lecture, le manuel perd son enchantement pendant 100 ans. Un objet précieux pour les roublards, moines et rangers."
    },
    { nom: "Tatouage de mascarade", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "660 po", note: "based: fluid ink as cantrip, disguise self 1/day",
      description: "Un tatouage de métamorphe qui permet des changements d'apparence subtils à volonté.",
      details: "Ce tatouage de motifs changeants permet à son porteur ou sa porteuse de modifier légèrement son apparence à volonté — changer la couleur des cheveux ou des yeux, modifier légèrement les traits du visage, altérer la teinte de la peau. Ces changements mineurs sont permanents jusqu'au prochain changement. Une fois par jour, il peut activer un déguisement complet similaire au sort Déguisement illusoire — changeant entièrement d'apparence pendant 1 heure. Un outil de camouflage polyvalent pour les espions discrets."
    },
    { nom: "Médaillon des pensées", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 160 po", note: "based: detect thoughts",
      description: "Un médaillon qui permet de percevoir les pensées des êtres proches.",
      details: "Ce médaillon en forme d'œil ou de crâne stylisé permet à son porteur ou sa porteuse de lancer Détection des pensées 3 fois par jour, sans composantes. Il peut percevoir les émotions et pensées superficielles des créatures dans un rayon de 9 mètres, et tenter d'accéder aux pensées profondes (jet de sauvegarde de Sagesse DD 13 pour la cible). Les créatures qui résistent savent que quelqu'un a tenté de lire leurs pensées. Une aide précieuse lors des interrogatoires, négociations et situations où détecter le mensonge est crucial."
    },
    { nom: "Miroir de capture des âmes", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "20 790 po", note: "based: banishment x12",
      description: "Un miroir sombre qui peut capturer l'âme ou l'image d'une créature qui se regarde dedans.",
      details: "Ce miroir à l'encadrement sombre et au verre légèrement teinté est extrêmement dangereux. Toute créature qui se regarde dans ce miroir et échoue un jet de sauvegarde de Charisme (DD 15) est aspirée dans le miroir, son corps disparaissant. La créature est prisonnière dans une dimension de miroir jusqu'à ce que le miroir soit brisé ou qu'un sort de Déblocage soit lancé dessus. Il peut contenir jusqu'à 12 créatures simultanément. Briser le miroir libère toutes les créatures capturées. Un piège mortel et un outil d'emprisonnement unique."
    },
    { nom: "Clé mystérieuse", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "99 po", note: "based: knock (minus 1 level)",
      description: "Une clé magique qui peut ouvrir n'importe quelle serrure non magique.",
      details: "Cette petite clé dorée d'apparence ordinaire possède un enchantement polyvalent. En l'insérant dans n'importe quelle serrure non magique (action), elle peut l'ouvrir comme si elle était la bonne clé — elle s'adapte à la serrure. Cet effet fonctionne sur les serrures mécaniques de toute complexité mais ne peut pas ouvrir les verrous magiques ni les portes scellées par des sorts. La clé peut être utilisée 3 fois par jour avant de devoir se recharger au clair de lune suivant. Un outil pratique pour les aventuriers qui préfèrent les entrées discrètes."
    },
    { nom: "Manteau de la nature", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: invisibility",
      description: "Un manteau en fibres naturelles qui se fond dans le décor naturel, rendant son porteur invisible dans la nature.",
      details: "Ce manteau tissé de feuilles, d'herbes et de fibres naturelles sèches possède un enchantement de camouflage naturel. Dans tout environnement naturel (forêt, prairie, montagne, marais), son porteur ou sa porteuse devient pratiquement invisible tant qu'il reste immobile — un observateur doit réussir un test de Sagesse (Perception) DD 15 pour le repérer. En mouvement, il bénéficie d'un avantage aux tests de Discrétion dans ces environnements. Hors de la nature (donjons, villes), l'effet ne fonctionne pas."
    },
    { nom: "Collier d'adaptation", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9 000 po", note: "based: water breathing & protection from poison",
      description: "Un collier polyvalent qui permet de respirer sous l'eau et confère une résistance au poison.",
      details: "Ce collier de perles de jade ou de corail possède deux enchantements simultanés. Son porteur ou sa porteuse peut respirer normalement sous l'eau aussi facilement qu'en surface. De plus, il bénéficie de la résistance aux dégâts de poison et est immunisé à la condition empoisonné. Ces deux effets fonctionnent simultanément et en permanence. Un collier particulièrement précieux pour les aventuriers qui explorent les donjons côtiers, les ruines sous-marines, ou les environnements où les poisons sont fréquents."
    },
    { nom: "Collier de perles de prière (bénédiction)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1 440 po", note: "based: bless (plus 1 level for BA cast)",
      description: "Un collier sacré dont les perles permettent de lancer le sort Bénédiction en action bonus.",
      details: "Ce collier en métal précieux porte des perles sacrées gravées de symboles divins. Son porteur ou sa porteuse peut lancer Bénédiction (ciblant jusqu'à 3 alliés, +1d4 aux attaques et jets de sauvegarde pendant 1 minute) en dépensant une action bonus au lieu d'une action complète. Cet avantage tactique permet de lancer Bénédiction sans sacrifier son action principale. Le collier peut utiliser cette capacité 5 fois avant recharge à l'aube. Idéal pour les clercs et paladins qui souhaitent préparer leurs alliés rapidement avant un combat."
    },
    { nom: "Collier de perles de prière (guérison)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "2 400 po", note: "based: cure wounds & lesser restoration (plus 1 level for BA cast)",
      description: "Un collier sacré qui permet de soigner et de guérir des afflictions en action bonus.",
      details: "Ce collier porte des perles de soin imprégné d'énergie divine. Son porteur ou sa porteuse peut dépenser une perle (action bonus) pour lancer soit Soin des blessures (2d8 + modificateur de Charisme) soit Restauration inférieure sur une créature à portée de contact. L'utilisation en action bonus (au lieu d'une action normale) est un avantage considérable en combat. Le collier contient 6 perles qui se rechargent (1d3) à l'aube. Les clercs et paladins qui doivent soigner régulièrement en combat en apprécient particulièrement la flexibilité."
    },
    { nom: "Collier de perles de prière (faveur divine)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 720 po", note: "based: greater restoration (plus 1 level for BA cast)",
      description: "Un collier qui permet de lancer Restauration supérieure rapidement en action bonus.",
      details: "Ce précieux collier porte des perles d'une valeur extraordinaire imprégné d'une grâce divine puissante. Son porteur ou sa porteuse peut dépenser une perle (action bonus) pour lancer Restauration supérieure, soignant une créature d'une malédiction, d'une pétrification, d'un empoisonnement, d'une réduction de caractéristique ou de points de vie maximums, ou d'un niveau d'épuisement. L'utilisation en action bonus est un avantage vital dans les situations critiques. Le collier contient 3 perles qui se rechargent (1) à l'aube."
    },
    { nom: "Collier de perles de prière (châtiment)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "2 400 po", note: "based: branding smite (plus 1 level for BA cast)",
      description: "Un collier qui amplifie les attaques divines du paladin, permettant un châtiment en action bonus.",
      details: "Ce collier porte des perles dorées gravées de flammes stylisées. Son porteur ou sa porteuse (paladin principalement) peut dépenser une perle (action bonus) pour imprégner sa prochaine attaque d'un châtiment divin similaire à Châtiment flamboyant — la cible subit 2d6 dégâts radiants supplémentaires à la touche et est rendue visible si invisible. L'utilisation en action bonus permet d'activer le châtiment sans sacrifier une action. Le collier contient 6 perles qui se rechargent (1d3) à l'aube."
    },
    { nom: "Collier de perles de prière (convocation)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "8 640 po", note: "based: planar ally (plus 1 level for BA cast)",
      description: "Un collier sacré permettant d'invoquer des alliés célestes ou planaires en action bonus.",
      details: "Ce collier porte des perles d'une clarté cristalline imprégné d'une connexion aux plans célestes. Son porteur ou sa porteuse peut dépenser une perle (action bonus) pour lancer Allié planaire en version mineure — invoquant un céleste ou une créature divine de CR modéré qui aide son invocateur ou invocatrice pendant 1 heure. L'utilisation en action bonus est un avantage tactique majeur en combat. Le collier contient 3 perles qui se rechargent (1) à l'aube. L'allié invoqué peut être influencé par la réputation et la piété de son porteur."
    },
    { nom: "Collier de perles de prière (marche du vent)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "8 640 po", note: "based: wind walk (plus 1 level for BA cast)",
      description: "Un collier qui permet de se transformer en nuage de brume et de voyager à grande vitesse.",
      details: "Ce collier porte des perles légères comme des plumes et translucides comme des nuages. Son porteur ou sa porteuse peut dépenser une perle (action bonus) pour lancer Marche du vent sur lui ou elle-même et jusqu'à 10 alliés consentants. Pendant 8 heures, les créatures affectées peuvent se transformer en nuage de brume à volonté, se déplaçant à une vitesse de 90 mètres. Cette transformation prend 1 minute dans chaque sens. Un outil de voyage extraordinaire pour les missions nécessitant une discrétion absolue et un déplacement rapide sur de longues distances."
    },
    { nom: "Voleur des neuf vies", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "40 950 po", note: "9 charges, based: power word kill (minus 1 level due to save)",
      description: "Une épée courte maudite qui vole les vies de ses victimes pour les stocker dans sa lame.",
      details: "Cette épée courte au métal sombre possède 9 charges. Sur un 20 naturel contre une créature qui n'est pas un mort-vivant ou un artificiel, sa cible doit réussir un jet de sauvegarde de Constitution (DD 15) ou mourir instantanément — la vie dérobée est stockée dans la lame. Chaque charge permet également d'accorder à son porteur ou sa porteuse une guérison de 2d8 + 4 PV ou de ressusciter instantanément si réduit à 0 PV (en dépensant 1 charge). Si les 9 charges sont dépensées, l'épée perd ses propriétés et devient une épée courte ordinaire. "
    },
    { nom: "Pigments merveilleux de Nolzur", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "14 850 po", note: "per pot; based: fabricate (permanent)",
      description: "Un pot de peinture magique qui crée des objets réels à partir de représentations peintes.",
      details: "Ce pot contient des pigments d'un blanc éclatant qui prennent la couleur de tout ce qu'on peint avec. En peignant une représentation d'un objet (1 minute par 10 m² de surface peinte), cet objet devient réel et fonctionnel. Les objets complexes (mécanismes, créatures vivantes) ne peuvent pas être créés, mais des décors, structures, meubles, armes et objets ordinaires sont possibles. Les objets créés sont permanents. Les fausses ouvertures (portes, fenêtres peintes) peuvent aussi être créées et fonctionnent. Chaque pot permet de peindre jusqu'à 100 m²."
    },
    { nom: "Huile d'éthéralité", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "2 376 po", note: "nan",
      description: "Une huile qui rend son porteur éthéré et intangible temporairement.",
      details: "Cette huile dorée légèrement transparente, contenue dans un flacon de verre fumé, rend éthéré tout ce qu'elle enveloppe. En appliquant la totalité du flacon sur soi-même et son équipement (action), son utilisateur ou utilisatrice entre dans le Plan Éthéré pendant 1 heure. Il ou elle peut se déplacer dans n'importe quelle direction, traverser les objets solides (à 1,5 m par déplacement), est invisible et intangible pour les créatures du Plan Matériel, mais ne peut pas affecter ni être affecté par quoi que ce soit du Plan Matériel."
    },
    { nom: "Huile de tranchant", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "2 772 po", note: "based: magic weapon",
      description: "Une huile qui confère temporairement à une arme un bonus de +3 aux attaques et dégâts.",
      details: "Ce flacon d'huile dorée presque translucide dégage un léger parfum métallique. En l'appliquant sur une arme (action), elle devient une arme magique +3 pendant 1 heure. Le tranchant de la lame s'affine magiquement, permettant même à une arme ordinaire de toucher des créatures normalement immunisées aux armes non magiques. Le bonus de +3 aux jets d'attaque et aux dégâts est considérable. Le flacon contient assez d'huile pour 1 application. Une ressource précieuse à réserver aux combats les plus critiques."
    },
    { nom: "Huile de glissance", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "743 po", note: "based: freedom of movement",
      description: "Une huile qui rend son porteur glissant et imperméable à toutes les formes d'entrave.",
      details: "Cette huile transparente et légèrement iridescente rend toute surface sur laquelle elle est appliquée extrêmement glissante. En l'appliquant sur soi-même (action), son utilisateur ou utilisatrice ne peut pas être saisi ni entravé — les prises et les liens se défont immédiatement. Il ou elle peut se déplacer normalement dans un terrain difficile et est immunisé(e) à tous les effets qui réduiraient sa vitesse ou qui l'immobiliseraient. L'effet dure 8 heures. Le flacon contient assez d'huile pour 1 application. Idéal pour les prisonniers et les aventuriers en difficulté."
    },
    { nom: "Orbe de direction", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: cantrip power",
      description: "Un petit orbe de navigation qui indique toujours le nord magnétique.",
      details: "Cette petite sphère de cristal lisse pointe toujours vers le nord magnétique quand elle est tenue en équilibre ou suspendue. Elle fonctionne même sous terre, dans des environnements clos et dans des tempêtes. Elle ne fonctionne pas dans les plans non magnétiques. En plus de l'indication du nord, elle peut indiquer la direction d'un lieu précédemment visité (1 fois par jour), fonctionnant comme une boussole améliorée. Un accessoire indispensable pour les explorateurs qui voyagent dans des territoires inconnus ou sous des ciels couverts."
    },
    { nom: "Orbe des dracoïdes", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact légendaire d'une puissance absolue sur les dragons — l'un des cinq orbes des dracoïdes.",
      details: "Les Orbes des dracoïdes sont parmi les objets les plus puissants jamais créés. Chaque orbe est lié à une couleur de dragon chromatique. Son porteur ou sa porteuse peut tenter de contrôler les dragons de cette couleur dans un rayon de 40 km, communiquer télépathiquement avec tous les dragons, devenir immunisé à leur souffle, et acquérir une connexion directe avec Tiamat elle-même. Cependant, l'orbe est semi-conscient et peut influencer son porteur vers la domination et la tyrannie. Il s'accompagne invariablement de complications catastrophiques."
    },
    { nom: "Orbe du temps", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: cantrip power",
      description: "Un orbe de cristal qui prédit avec précision la météo des prochaines 24 heures.",
      details: "Cette sphère de cristal d'environ 10 cm présente des formations nuageuses en miniature qui se déplacent à l'intérieur. En la consultant (action), son propriétaire ou sa propriétaire peut obtenir une prévision météorologique précise pour les prochaines 24 heures dans un rayon de 50 km. La prédiction inclut la température approximative, les précipitations, le vent et tout phénomène météorologique notable comme les tempêtes ou les brouillards. Elle ne peut pas prédire les phénomènes météorologiques magiquement créés. Utile pour planifier les voyages et les campagnes militaires."
    },
    { nom: "Éclat d'essence des plans extérieurs (chaos)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 020 po", note: "based: 'unlimited' blur spell (plus 1 level due to increase effect), misc cost for focus",
      description: "Un fragment d'énergie chaotique qui brouille les attaques contre son porteur.",
      details: "Ce fragment instable aux reflets multicolores et changeants provient des plans du chaos. Son porteur ou sa porteuse peut l'activer (action bonus) pour générer une aura de distorsion chaotique autour de lui ou elle — similaire au sort Flou. Les attaquants ont un désavantage aux jets d'attaque contre son porteur pendant 1 minute. Cette capacité est utilisable à volonté sans limite de durée. La nature chaotique du fragment se manifeste parfois par de petites anomalies visuelles autour de son porteur : couleurs qui se décalent, contours qui vibrent légèrement."
    },
    { nom: "Éclat d'essence des plans extérieurs (mal)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "734 po", note: "misc cost for focus",
      description: "Un fragment de mal condensé qui amplifie les sorts de ténèbres de son porteur.",
      details: "Ce fragment opaque d'un noir profond avec des reflets rouges provient des plans du mal. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts nécromantiques et malveillants. Il amplifie légèrement la puissance de ces sorts et permet d'ajouter 1d4 dégâts nécrotiques supplémentaires à ses sorts qui infligent des dégâts. La présence de ce fragment perturbe légèrement les créatures célestes et les animaux inoffensifs, qui sentent instinctivement l'énergie malveillante qu'il dégage."
    },
    { nom: "Éclat d'essence des plans extérieurs (bien)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "3 620 po", note: "based: Lv2 false life, misc cost for focus",
      description: "Un fragment de bienveillance divine qui protège son porteur et réconforte ses alliés.",
      details: "Ce fragment translucide d'un blanc doré provient des plans du bien — celestia ou paradis. Son porteur ou sa porteuse bénéficie en permanence de points de vie temporaires (2d4 + 2) qui se régénèrent au début de chaque tour s'ils ont disparu. Il peut également être utilisé comme focaliseur pour les sorts divins et bénéfiques. Les créatures fiélonnes à proximité ressentent une gêne face à sa présence, et les animaux inoffensifs sont instinctivement attirés par son porteur. Un fragment qui procure protection et sérénité constantes."
    },
    { nom: "Éclat d'essence des plans extérieurs (loi)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "12 620 po", note: "based: 'unlimited' greater restoration, Misc cost for focus",
      description: "Un fragment d'ordre cosmique qui restaure régulièrement les conditions de son porteur.",
      details: "Ce fragment d'un blanc parfait aux arêtes géométriques précises provient des plans de la loi — Mécanus ou Arcadia. Son porteur ou sa porteuse peut l'activer (action) pour bénéficier des effets de Restauration supérieure une fois par jour. Il peut être utilisé comme focaliseur pour les sorts d'ordre et de restauration. La présence ordonnée de ce fragment stabilise les effets chaotiques environnants — les zones de magie sauvage ont moins d'effets près de son porteur, et les effets aléatoires tendent à être moins imprévisibles."
    },
    { nom: "Perle de puissance", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: 4th level spells",
      description: "Une perle magique qui peut restaurer instantanément un slot de sort dépensé.",
      details: "Cette petite perle sphérique parfaite dégage une lueur d'un blanc nacré. Son porteur ou sa porteuse peut l'utiliser en action bonus pour récupérer un slot de sort dépensé de niveau 3 ou moins. La perle peut être utilisée une fois par jour, se rechargeant à l'aube. Un outil indispensable pour les lanceurs de sorts qui se retrouvent à court de ressources au milieu d'un donjon sans pouvoir se reposer. Sa simplicité d'utilisation et sa fiabilité en font l'un des objets magiques les plus populaires parmi les mages voyageurs."
    },
    { nom: "Parfum d'envoûtement", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "198 po", note: "based: enhance ability",
      description: "Un parfum magique qui confère un charme irrésistible et une présence magnétique.",
      details: "Ce petit flacon de cristal contient un parfum d'une complexité extraordinaire — notes florales, musquées et légèrement ensorcelées. En l'appliquant sur soi (action), son utilisateur ou utilisatrice bénéficie d'un avantage à tous les tests de Charisme pendant 1 heure. Le parfum est subtil mais crée une impression favorable presque irrésistible sur les interlocuteurs humanoïdes. Les effets ne fonctionnent pas contre les créatures sans odorat ni contre celles qui ont précédemment reconnu l'enchantement. Le flacon contient 3 doses."
    },
    { nom: "Périapte de santé", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2 970 po", note: "based: lesser restoration",
      description: "Un périapte de protection qui immunise contre les maladies et accélère la guérison naturelle.",
      details: "Ce médaillon en métal poli, souvent en argent ou en or, dégageant une légère chaleur, protège son porteur ou sa porteuse contre les maladies. Il est immunisé à toutes les maladies non magiques et sa guérison naturelle lors des repos est légèrement accélérée (+1d4 PV supplémentaires par repos long). Il ne protège pas des malédictions ou des poisons, mais aucun virus, bactérie ou pathogène ordinaire ne peut l'affecter. Très prisé dans les environnements insalubres — donjons, cités surpeuplées, régions touchées par une épidémie."
    },
    { nom: "Périapte de protection contre le poison", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 000 po", note: "based: protection from poison (plus 1 level)",
      description: "Un périapte qui neutralise les poisons et confère une résistance permanente à leurs effets.",
      details: "Ce périapte en pierre verte ou en jade sombre est la protection ultime contre les empoisonnements. Son porteur ou sa porteuse est immunisé à la condition empoisonné, bénéficie de la résistance aux dégâts de poison, et si affecté par un poison, l'effet est neutralisé au bout d'une heure. Si consommé à titre préventif avant d'être empoisonné, aucun poison ordinaire ne peut avoir d'effet. En présence d'une créature venimeuse ou d'une substance empoisonnée à moins de 1,5 mètre, le périapte se réchauffe légèrement pour alerter son porteur."
    },
    { nom: "Périapte de cicatrisation", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 700 po", note: "based: stabilize (plus 2 levels)",
      description: "Un périapte de guérison qui empêche son porteur de mourir d'hémorragie et stabilise ses blessures.",
      details: "Ce périapte en métal rouge-orangé est chaud au toucher et légèrement luminescent. Tant que son porteur ou sa porteuse est attuné(e), si réduit(e) à 0 PV, il ou elle est automatiquement stabilisé(e) et ne perd pas de PV supplémentaires due aux jets de mort ratés (bien qu'il faille toujours réussir les jets de mort pour se stabiliser normalement). De plus, les potions de soin utilisées par ou sur son porteur récupèrent le maximum de PV possible (pas de lancer de dés). Un périapte qui peut faire la différence entre la vie et la mort."
    },
    { nom: "Pipe à monstres de fumée", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: minor illusion",
      description: "Une pipe enchantée qui produit des volutes de fumée formant des créatures animées.",
      details: "Cette pipe en bois sculpté produit une fumée d'une blancheur et d'une densité particulières. En fumant cette pipe (action), son porteur ou sa porteuse peut façonner la fumée produite en illusions de créatures — dragons en miniature, chauves-souris, serpents, ou toute autre forme imaginée. Ces formes de fumée sont animées et se déplacent selon la volonté de leur créateur pendant 1 minute avant de se dissiper. Elles sont clairement illusoires mais peuvent distraire, impressionner ou servir de distraction visuelle efficace."
    },
    { nom: "Flûteaux de hantise", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2 970 po", note: "based: cause fear (3rd level)",
      description: "Une série de flûteaux qui produisent une mélodie terrifiante causant la panique.",
      details: "Ces petites flûtes reliées ensemble produisent une mélodie discordante et inquiétante. En jouant ces flûteaux (action), leur utilisateur ou utilisatrice peut tenter de paniquer les créatures proches. Chaque créature dans un rayon de 9 mètres doit réussir un jet de sauvegarde de Sagesse (DD 14) ou devenir effrayée pendant 1 minute, fuyant son porteur ou sa porteuse. Elle peut retenter ce jet à la fin de chacun de ses tours. Les flûteaux peuvent être utilisés 3 fois par jour, se rechargeant à l'aube. Leur mélodie est audible jusqu'à 90 mètres."
    },
    { nom: "Flûteaux des égouts", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "1 620 po", note: "based: conjure animals (minus 1 level)",
      description: "Des flûteaux qui convoquent des nuées de rats et autres vermine obéissants.",
      details: "Ces petites flûtes en os produisent un son ultrasonique inaudible pour la plupart des créatures. En jouant (action), leur porteur ou sa porteuse peut convoquer 3d6 rats ou 1 nuée de rats dans un rayon de 18 mètres. Ces créatures obéissent aux ordres simples de son porteur pendant 10 minutes. Elles peuvent explorer des zones, transmettre des messages, distraire des gardes ou même attaquer des ennemis en grand nombre. Les flûteaux peuvent être utilisés 3 fois par jour, se rechargeant à l'aube. Populaires dans les bas-fonds des grandes cités."
    },
    { nom: "Codex de l'invocateur des plans", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "5 240 po", note: "Treat swap spells as Lv3 (x3), adv on attacks as beast bond, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un grimoire d'invocation qui améliore les sorts de convocation et donne accès à des invocations planaires.",
      details: "Ce grimoire épais couvert de glyphes planaires est rempli de rituels d'invocation, de noms véritables d'entités extraplanaires et de formules de contrôle. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts d'invocation, bénéficiant d'un avantage aux jets d'attaque pour les créatures invoquées. Des sorts supplémentaires d'invocation — Invocation d'entité planaire, Cercle magique, Bannissement — sont disponibles quotidiennement. Les créatures invoquées avec ce codex sont légèrement plus puissantes et coopératives."
    },
    { nom: "Perche de pêche", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: cantrip power",
      description: "Une canne à pêche enchantée qui garantit toujours une prise.",
      details: "Cette canne à pêche d'aspect ordinaire possède un enchantement de pêche magique. Lorsqu'elle est utilisée dans un plan d'eau contenant des poissons, son utilisateur ou utilisatrice attrape toujours au moins un poisson lors d'une heure de pêche — jamais une mauvaise sortie. La taille et l'espèce du poisson restent aléatoires, mais la prise est garantie. Elle peut également détecter la présence de poissons dans un rayon de 9 mètres, son hameçon tressautant légèrement dans leur direction. Un outil apprécié des survivants et des cuisiniers ambulants."
    },
    { nom: "Perche rétractable", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: cantrip power",
      description: "Une perche magique qui peut s'étendre jusqu'à 9 mètres ou se replier à 30 cm à volonté.",
      details: "Cette petite perche de 30 cm peut s'étendre en une fraction de seconde jusqu'à 9 mètres, puis se rétracter tout aussi rapidement. Elle est suffisamment solide pour supporter 250 kg dans une direction perpendiculaire à son axe. Elle peut être utilisée comme perche d'escalade, comme élément de construction temporaire, pour activer des leviers à distance, ou pour créer des ponts de fortune sur des chasmes étroits. Le déclenchement de l'extension ou de la rétraction est une action bonus. Un outil d'exploration polyvalent à un prix accessible."
    },
    { nom: "Trou portable", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 960 po", note: "based: floating disk (plus 1 level, carries more)",
      description: "Un disque de tissu noir qui crée un espace extradimensionnel cylindrique profond.",
      details: "Ce disque de soie noire de 1,8 m de diamètre est un portail vers un espace extradimensionnel. Lorsqu'il est placé sur une surface plane, il crée un trou cylindrique de 90 cm de profondeur — un espace qui peut être utilisé comme compartiment de rangement ou comme cachette. Des objets ou créatures peuvent y entrer. Le trou peut être replié avec son contenu à l'intérieur — mais les créatures vivantes à l'intérieur peuvent mourir d'étouffement après 10 minutes. Si placé dans un autre espace extradimensionnel, les deux espaces se brisent créant un portail vers le Plan Éthéré."
    },
    { nom: "Pot d'éveil", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "198 po", note: "based: conjure animal (minus 1 level)",
      description: "Un pot de potions magiques qui, administré à une plante, l'éveille à la conscience.",
      details: "Ce petit pot d'argile contient une décoction végétale magique. En la versant sur une plante (arbre, buisson, même une simple fleur), celle-ci s'éveille à la conscience en 24 heures. La plante éveillée peut parler une langue parlée par son cultivateur ou cultivatrice, percevoir son environnement (rayon de 9 mètres), et développer une personnalité propre. Elle reste attachée au sol et ne peut pas se déplacer, mais peut communiquer et partager des informations sur son environnement immédiat. Elle n'a pas de statistiques de combat améliorées."
    },
    { nom: "Membre prothétique", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: mage hand",
      description: "Un membre artificiel enchanté qui remplace fonctionnellement un membre perdu.",
      details: "Ce membre prothétique — bras, jambe, main, pied ou autre — est taillé dans du bois, sculpté dans de l'ivoire ou forgé dans du métal selon sa destination. Il s'adapte à l'anatomie de son porteur ou sa porteuse et fonctionne comme un membre normal — avec les mêmes capacités de force, de précision et de sensibilité (bien que la sensibilité soit légèrement réduite). Il peut être détaché et réattaché à volonté. Si détaché, son porteur peut le contrôler à distance dans un rayon de 9 mètres comme une Main du mage."
    },
    { nom: "Versets protecteurs", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "5 240 po", note: "Treat swap spells as Lv3 (x3), temp HP as false life added to extra spells, extra spells are treated as if it were a staff, Misc Cost: 10 gp for focus",
      description: "Un recueil de versets de protection qui améliore les sorts de défense de son porteur.",
      details: "Ce livre de parchemin épais contient des versets divins et arcaniques de protection, écrits dans plusieurs scripts sacrés. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts de protection et défensifs. Il confère un bonus au DD de ses sorts défensifs et génère des points de vie temporaires (1d4 + son modificateur de lanceur) chaque fois qu'il lance un sort de protection. Des sorts supplémentaires de protection sont disponibles quotidiennement. Un grimoire précieux pour les clercs et palladins qui se spécialisent dans la protection du groupe."
    },
    { nom: "Jeton-plume de Quaal (ancre)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "2 376 po", note: "based: hold monster (plus 2 levels for duration, no concentration)",
      description: "Une plume magique qui se transforme en ancre spectrale immobilisant un navire ou une créature.",
      details: "Cette petite plume de couleur gris acier s'active en la lançant ou en la touchant un navire ou une grande créature (action). Elle se transforme en une ancre spectrale massive qui fixe l'objet ou la créature ciblé(e) en place — similaire au sort Immobilisation de monstre mais sans concentration et d'une durée pouvant atteindre 24 heures. Un navire ancré de cette façon ne peut pas être déplacé par les courants ni par les vents. Une créature ciblée peut résister avec un jet de sauvegarde de Force (DD 15). Usage unique."
    },
    { nom: "Jeton-plume de Quaal (oiseau)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 630 po", note: "based: conjure elemental (9th-level)",
      description: "Une plume qui se transforme en un grand oiseau de feu capable de transporter son porteur.",
      details: "Cette plume écarlate aux reflets dorés s'active en la lançant dans l'air (action). Elle se transforme en un grand oiseau flamboyant capable de transporter jusqu'à 500 kg. L'oiseau vole à une vitesse de 30 mètres par round et obéit aux commandes verbales simples de son invocateur ou invocatrice. Il peut transporter un ou deux passagers selon leur taille. L'oiseau persiste pendant 8 heures avant de se retransformer en plume — inerte après cela. Usage unique."
    },
    { nom: "Jeton-plume de Quaal (éventail)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "660 po", note: "based: gust of wind (plus 1 level, no concentration)",
      description: "Une plume qui crée un vent puissant capable de propulser les navires ou repousser les ennemis.",
      details: "Cette plume légère et fine s'active en la faisant tournoyer dans l'air (action). Elle génère un vent puissant similaire au sort Bourrasque — une ligne de vent fort de 18 mètres de longueur et 6 mètres de largeur qui persiste pendant 1 minute sans nécessiter de concentration. Ce vent peut propulser un voilier à vitesse maximale, repousser les créatures de petite taille, éteindre des flammes et disperser des gaz. Il peut être utilisé offensivement ou comme outil de navigation maritime. Usage unique."
    },
    { nom: "Jeton-plume de Quaal (barque-cygne)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "660 po", note: "based on similar boats",
      description: "Une plume qui se transforme en une barque en forme de cygne pour naviguer.",
      details: "Cette plume d'un blanc pur s'active en la posant sur une surface d'eau (action). En quelques secondes, elle se déploie en une barque élégante en forme de cygne d'environ 4 mètres de longueur, pouvant transporter jusqu'à 6 personnes et leurs affaires. La barque est équipée de rames et d'une petite voile. Elle ne peut pas se propulser par magie — elle nécessite rame ou vent — mais elle est d'une robustesse et d'une légèreté exceptionnelles. Pour la replier, il faut prononcer un mot de commande (action). Usage unique — la barque disparaît après 24 heures."
    },
    { nom: "Jeton-plume de Quaal (arbre)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "660 po", note: "based: druidcraft (permanent)",
      description: "Une plume qui pousse instantanément en un grand chêne fruitier adulte.",
      details: "Cette plume verte et dorée s'active en la plantant dans la terre (action). En quelques secondes, elle croît en un grand chêne adulte d'une quinzaine de mètres de haut, avec une couronne touffue et des branches chargées de glands. L'arbre est parfaitement sain et sa croissance est permanente — il reste en place indéfiniment. Il peut être utilisé comme tour de guet naturelle, comme source d'ombre ou de nourriture, comme barrière, ou comme matériau de construction. Les druides qui se souviennent du sort Croissance végétale apprécient la rapidité de l'effet. Usage unique."
    },
    { nom: "Carquois d'Ehlonna", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "495 po", note: "based: floating disk (minus 1 level, carries less)",
      description: "Un carquois extradimensionnel qui peut contenir une quantité extraordinaire de munitions.",
      details: "Ce carquois d'apparence ordinaire en cuir brun dissimule trois espaces extradimensionnels distincts. Le plus petit peut contenir 60 flèches ou carreaux, le moyen peut contenir jusqu'à 18 javelots ou armes similaires, et le plus grand peut accueillir jusqu'à 6 armes longues (arcs, lances, épées à deux mains). Récupérer un objet du carquois n'est pas plus long que dans un carquois normal. Il ne pèse jamais plus de 2,5 kg quelle que soit la charge. Un accessoire indispensable pour les archers qui partent en longue expédition."
    },
    { nom: "Concertina du fêtard", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "12 120 po", note: "based: irresitible dance, Spell Save DC = AC Bonus",
      description: "Un accordéon enchanté dont la musique force les auditeurs à danser incontrôlablement.",
      details: "Cet accordéon coloré et bruyant produit une musique irrésistiblement entraînante. En jouant (action), son porteur ou sa porteuse peut lancer Danse irrésistible (DD 15) sur une créature visible à moins de 18 mètres. La créature ciblée doit réussir un jet de sauvegarde de Sagesse ou commencer à danser — elle se déplace de façon aléatoire, a un désavantage aux jets d'attaque et de Dextérité, et les attaquants ont un avantage contre elle. Elle peut retenter le jet à chaque tour. L'instrument peut être utilisé 3 fois par jour, se rechargeant à l'aube."
    },
    { nom: "Tambour du rythmiste +1", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 640 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, treat recover inspiration as lv1 spell",
      description: "Un tambour enchanté +1 qui améliore les sorts du barde et sa récupération d'inspiration.",
      details: "Ce tambour finement ouvragé aux symboles de rythme et de musique confère un bonus de +1 aux jets d'attaque de sorts et au DD de sauvegarde des sorts du barde qui l'utilise. Il peut être utilisé comme focaliseur bardique. De plus, la récupération d'Inspiration bardique de son porteur ou sa porteuse est légèrement plus rapide — les sons rythmés du tambour l'aident à se recentrer et à inspirer ses alliés plus souvent. Un premier investissement appréciable pour les bardes qui cherchent à améliorer l'efficacité de leur magie."
    },
{ nom: "Tambour du rythmiste +2", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "9 120 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, treat recover inspiration as lv1 spell",
      description: "Un tambour bardique amélioré conférant un bonus de +2 aux sorts et à l'inspiration.",
      details: "Ce tambour de qualité supérieure aux ornements de métaux précieux confère un bonus de +2 aux jets d'attaque de sorts et au DD de sauvegarde des sorts bardiques. La récupération d'Inspiration bardique est améliorée — son porteur ou sa porteuse peut inspirer ses alliés plus fréquemment et avec plus d'efficacité. Le son du tambour porte plus loin et avec plus d'assurance, reflétant la puissance accrue de l'enchantement. Un investissement notable pour les bardes intermédiaires qui cherchent à maximiser leur utilité en groupe."
    },
    { nom: "Tambour du rythmiste +3", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "26 280 po", note: "Spell Save DC = AC bonus, spell attack = weapon bonus, treat recover inspiration as lv1 spell",
      description: "Le tambour bardique ultime avec un bonus de +3, maximisant l'inspiration et la puissance magique.",
      details: "Ce tambour légendaire aux ornements d'or et de gemmes résonne d'un son d'une clarté et d'une profondeur extraordinaires. Le bonus de +3 aux jets d'attaque de sorts et au DD de sauvegarde des sorts bardiques en fait l'instrument le plus efficace de sa catégorie. La récupération d'Inspiration bardique est maximisée — son porteur ou sa porteuse semble toujours avoir de l'inspiration à distribuer à ses alliés. Les ennemis qui l'entendent jouer sentent instinctivement que quelque chose de redoutable les attend."
    },
    { nom: "Pièce de rivalité", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "132 po", note: "based: vicious mockery",
      description: "Une pièce de monnaie enchantée qui peut infliger un désavantage psychologique à une cible.",
      details: "Cette pièce de monnaie ordinaire en apparence porte sur l'une de ses faces un visage moqueur en bas-relief. En la lançant vers une créature visible à moins de 18 mètres (action), son porteur ou sa porteuse peut activer son enchantement — similaire au sort Raillerie acerbe. La cible doit réussir un jet de sauvegarde de Sagesse (DD 13) ou avoir un désavantage à son prochain jet d'attaque avant la fin de son prochain tour. La pièce rebondit et peut être récupérée après utilisation. La capacité peut être utilisée 3 fois par jour."
    },
    { nom: "Robe des yeux", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "20 400 po", note: "based: enhance ability, true seeing",
      description: "Une robe couverte d'yeux magiques qui confère une vision extraordinaire dans toutes les directions.",
      details: "Cette robe somptueuse est brodée d'innombrables yeux stylisés de toutes tailles qui semblent parfois cligner ou se mouvoir légèrement. Son porteur ou sa porteuse bénéficie d'un avantage aux tests de Sagesse (Perception), ne peut pas être surpris(e), et voit dans toutes les directions simultanément (immunisé(e) à être flanqué). Il ou elle ne peut pas être aveuglé(e) par des effets ordinaires. Une fois par jour, il peut activer la Vision véritable pendant 1 minute — voyant les créatures invisibles, les illusions et les formes véritables. Cependant, le sort Ténèbres inflige un désavantage aux jets de sauvegarde pendant 1 minute si son porteur est exposé à la magie de ténèbres."
    },
    { nom: "Robe des couleurs scintillantes", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "6 750 po", note: "based: invisibility",
      description: "Une robe qui projette des lumières multicolores éblouissantes et peut rendre son porteur invisible.",
      details: "Cette robe éblouissante projette en permanence des éclats de lumière multicolores dans un rayon de 9 mètres. En action, son porteur ou sa porteuse peut activer l'effet principal : la robe projette des couleurs intenses pendant 1 minute, obligeant toute créature qui regarde dans sa direction à réussir un jet de sauvegarde de Sagesse (DD 15) ou être aveuglée pendant 1d4 rounds. Pendant cet effet, toutes les attaques contre son porteur ont un désavantage. Cependant, il bénéficie d'un avantage aux jets de Charisme (Représentation) lorsque la robe est active. Usage limité à 1 fois par jour."
    },
    { nom: "Robe des étoiles", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "19 710 po", note: "nan",
      description: "Une robe nocturne ornée d'étoiles magiques qui peuvent être utilisées comme projectiles.",
      details: "Cette robe noire parsemée d'étoiles dorées et argentées est une merveille d'enchantement. Son porteur ou sa porteuse peut arracher jusqu'à 6 étoiles de la robe (action) et les lancer — chaque étoile est traitée comme un dard magique infligeant 1d4 + 1 dégâts radiants, avec une portée de 18 mètres. Elle peut lancer jusqu'à 3 étoiles par action. La robe contient en permanence 6 étoiles qui se régénèrent à l'aube. De plus, une fois par jour, son porteur peut entrer dans le plan astral pendant 1 heure, y laissant son corps derrière lui, ou utiliser la robe pour lancer Projection astrale."
    },
    { nom: "Robe des objets utiles", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "— po", note: "raw materials of the cloak times 1.65 (rarity & attunement tax)",
      description: "Une robe dont les patchs se détachent pour devenir les objets qu'ils représentent.",
      details: "Cette robe de tissu épais est couverte de patchs cousus représentant divers objets. En tirant sur un patch (action), il se détache et se transforme en l'objet représenté — grandissant instantanément à taille normale et pleinement fonctionnel. La robe contient toujours les patchs suivants en quantités déterminées à la création : un couteau, une lanterne allumée, un miroir en acier, un poteau de 3 mètres, une corde de 15 mètres et un sac. Elle contient également 4d4 patchs supplémentaires d'objets aléatoires déterminés par le MD. Une fois un patch retiré, il ne repousse pas."
    },
    { nom: "Robe de l'archimage", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "43 500 po", note: "based: circle of power (minus 1 level); AC bonus is based on AC of 15 + Dex (difference between mage armor and 15)",
      description: "La robe légendaire de l'archimage — protection absolue, bonus aux sorts et résistance à la magie.",
      details: "Cette robe somptueuse représente le summum de l'équipement d'un magicien. Son porteur ou sa porteuse non armé(e) bénéficie d'une CA de 15 + modificateur de Dextérité. Il ou elle a l'avantage aux jets de sauvegarde contre les sorts et bénéficie de la résistance aux dégâts des sorts. De plus, le DD des sorts de son porteur augmente de 2, et son bonus aux jets d'attaque de sorts augmente de 2. Si son porteur est d'alignement bon ou neutre, la robe est blanche ; mauvais, elle est noire ; neutre, elle est grise. Porter une robe de la mauvaise couleur inflige 5d6 dégâts nécrotiques par heure."
    },
    { nom: "Corde d'escalade", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "495 po", note: "based: mage hand",
      description: "Une corde magique qui obéit aux ordres verbaux et peut grimper d'elle-même.",
      details: "Cette corde de 18 mètres obéit aux ordres verbaux simples de son propriétaire ou sa propriétaire. Sur commande, elle peut se nouer, se dénouer, s'attacher à un point fixe ou descendre. Elle peut grimper le long d'une surface verticale à une vitesse de 3 mètres par round si on lui en donne l'ordre. Elle peut supporter jusqu'à 700 kg. Elle peut également s'animer pour aider à hisser une créature — son porteur peut la lancer vers le haut et elle s'attache à n'importe quel point fixe dans un rayon de 18 mètres au-dessus. Une corde de 18 mètres obéissante est un outil d'exploration inestimable."
    },
    { nom: "Corde d'enchevêtrement", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "198 po", note: "nan",
      description: "Une corde enchantée qui s'enroule et entrave automatiquement les créatures qu'elle touche.",
      details: "Cette corde de 9 mètres en fibres magiques peut être lancée sur une créature (attaque à distance, portée 9 m, bonus +8). En cas de touche, la corde s'enroule automatiquement autour de la cible et l'entrave — elle est considérée comme entravée et ne peut pas se libérer par ses propres moyens sans un test de Force (DD 15) ou Dextérité (DD 15). Un allié peut aussi dépenser une action pour dénouer la corde. La corde est indestructible par les dégâts physiques ordinaires et peut être réutilisée indéfiniment."
    },
    { nom: "Corde de réparation", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: mending",
      description: "Une corde magique qui se répare elle-même et peut réparer les objets qu'elle touche.",
      details: "Cette corde de 15 mètres est enchantée avec un sort de Réparation permanent. Si elle est coupée ou endommagée, elle se répare automatiquement en quelques secondes — les fibres sectionnées se retissent, les nœuds se réparent. De plus, en enroulant la corde autour d'un objet brisé pendant 1 minute (action), elle transfère son enchantement à l'objet, réparant les petites fissures, cassures et déchirures. Elle ne peut pas reconstituer des objets détruits en plusieurs morceaux importants, mais peut réparer des dommages mineurs ou modérés. Idéale pour le voyage et la survie."
    },
    { nom: "Rubis du mage de guerre", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "300 po", note: "based: cantrip power",
      description: "Un rubis enchanté qui permet de lancer le tour de magie Éclat de feu à volonté.",
      details: "Ce petit rubis taillé en facette diffuse une légère chaleur et peut être serti dans une arme ou porté comme bijou. Son porteur ou sa porteuse peut l'utiliser pour lancer le tour de magie Éclat de feu (Fire Bolt) à volonté — un projectile de feu avec une portée de 36 mètres infligeant 1d10 dégâts de feu. La pierre peut être utilisée comme focaliseur magique. Un objet d'entrée de gamme pour les guerriers qui souhaitent avoir accès à une attaque magique à distance sans être lanceurs de sorts à part entière."
    },
    { nom: "Selle du cavalier", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4 950 po", note: "based: protection from evil and good (plus 2 levels, no concentration and can't be dismounted)",
      description: "Une selle enchantée qui lie magiquement le cavalier à sa monture et le protège des forces surnaturelles.",
      details: "Cette selle en cuir finement travaillé, ornée de runes de lien, crée un lien magique entre le cavalier ou la cavalière et sa monture. Son porteur ou sa porteuse ne peut pas être désarçonné(e) involontairement tant qu'il ou elle est monté(e) et conscient(e). De plus, ni la monture ni son cavalier ou cavalière ne peuvent être charmés, effrayés ou possédés par des créatures surnaturelles (fiélons, morts-vivants, célestes). La selle s'adapte à la taille de n'importe quelle monture et peut être transférée entre montures en 1 minute."
    },
    { nom: "Scarabée de protection", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "60 300 po", note: "based: circle of power (minus 1 level), additional effect based on x12 5 level spells",
      description: "Un scarabée légendaire qui protège contre les sorts et peut consumer les malédictions et effets néfastes.",
      details: "Ce scarabée en pierre précieuse sculptée est l'un des objets défensifs les plus puissants qui soit. Son porteur ou sa porteuse bénéficie d'un bonus de +1 à la CA et aux jets de sauvegarde. Lorsqu'il rate un jet de sauvegarde contre un sort ou un effet magique néfaste, il peut choisir de réussir à la place — le scarabée absorbe l'effet. Le scarabée possède 12 charges pour cet effet. Une fois toutes les charges épuisées, le scarabée se désintègre dans un flash de lumière. Un gardien ultime pour les aventuriers qui affrontent régulièrement des lanceurs de sorts puissants."
    },
    { nom: "Pierres de transmission", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 188 po", note: "based: sending (minus 1 level, limitations)",
      description: "Une paire de pierres qui permettent une communication télépathique entre leurs porteurs.",
      details: "Ces deux petits cailloux polis de la même roche, souvent vendus en paire, permettent une communication mentale entre leurs porteurs respectifs. Tant que les deux porteurs se trouvent sur le même plan d'existence, ils peuvent se parler télépathiquement à volonté — l'un pense à un message et l'autre l'entend dans sa tête. Cette communication est silencieuse et ne peut pas être interceptée par des tiers. Elle fonctionne sans limite de distance sur le même plan. Si l'une des pierres est détruite, l'autre devient inerte. Idéales pour les duos d'aventuriers qui se séparent fréquemment."
    },
    { nom: "Tatouage de la marque des Ombres", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 480 po", note: "based: darkvision (x3), enhance ability; shadowy defense as shield",
      description: "Un tatouage d'ombre qui confère la vision dans le noir et des capacités défensives obscures.",
      details: "Ce tatouage représentant des ombres entrelacées ou une silhouette obscure permet à son porteur ou sa porteuse de voir dans l'obscurité ordinaire jusqu'à 18 mètres en couleurs normales (pas seulement en nuances de gris). Dans les ténèbres magiques, il voit jusqu'à 9 mètres. Une fois par jour, en réaction face à une attaque, il peut déclencher une défense d'ombres — similaire au sort Bouclier mais conférant un bonus de +5 à la CA jusqu'au début de son prochain tour. Le tatouage laisse parfois de légères traînées d'ombre dans ses mouvements dans des environnements peu éclairés."
    },
    { nom: "Éclat des Ombres", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 020 po", note: "based: disadv as bestow curse, misc cost is focus",
      description: "Un fragment de ténèbres condensées qui peut maudire une cible d'un désavantage persistant.",
      details: "Ce fragment d'un noir absolu qui semble absorber toute lumière provient d'un plan d'ombre. Son porteur ou sa porteuse peut l'utiliser comme focaliseur pour ses sorts d'ombre et d'illusion. Une fois par jour (action), en ciblant une créature visible à moins de 18 mètres, il ou elle peut projeter une malédiction d'ombre — la cible doit réussir un jet de sauvegarde de Sagesse (DD 14) ou avoir un désavantage à tous ses jets d'attaque pendant 1 minute. La créature peut retenter ce jet à la fin de chacun de ses tours. Le fragment est froid au toucher et obscurcit légèrement la main qui le tient."
    },
    { nom: "Chaussons d'araignée", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "4 500 po", note: "based: spider climb (plus 1 level, no concentration)",
      description: "Des chaussons enchantés qui permettent d'escalader toutes les surfaces comme une araignée.",
      details: "Ces légers chaussons en soie d'araignée magique permettent à leur porteur ou sa porteuse de grimper sur toutes les surfaces verticales et même les plafonds, à sa vitesse normale de marche, sans aucun test requis. La surface peut être de n'importe quelle nature — pierre lisse, verre, métal poli, bois humide. Ses mains restent libres lors de l'escalade. Cette capacité est permanente et passive tant que les chaussons sont portés. Un équipement très apprécié des espions, voleurs et aventuriers qui doivent accéder à des positions élevées régulièrement."
    },
    { nom: "Colle souveraine", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "17 325 po", note: "price is 7 uses; based: fabricate",
      description: "Une colle magique d'une efficacité absolue qui fixe définitivement tout ce qu'elle touche.",
      details: "Ce petit pot de colle dorée contient suffisamment de substance pour 7 applications. Lorsqu'elle est appliquée sur une surface et mise en contact avec une autre (action), les deux surfaces sont collées de façon permanente et quasi indestructible — aucune force physique ordinaire ne peut les séparer. Seul le Solvant universel, un sort de Désintégration ou une intervention divine peut défaire ce collage. La colle peut coller n'importe quelle combinaison de matériaux. Elle doit être appliquée avec soin car le contact accidentel est permanent. Elle est inestimable pour les constructions d'urgence ou les pièges."
    },
    { nom: "Tatouage enchanté (tour de magie)", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "99 po", note: "cantrip (+1 lvl because anyone can cast it)",
      description: "Un tatouage qui permet à quiconque de lancer un tour de magie spécifique une fois par jour.",
      details: "Ce petit tatouage discret représente le symbole d'un sort particulier — une flamme pour Éclat de feu, une main pour Main du mage, une étoile pour Lumière, etc. Son porteur ou sa porteuse peut activer le tatouage (action) pour lancer le tour de magie correspondant une fois par jour, sans composantes, sans focaliseur et sans nécessiter de niveau de lanceur. Le tatouage est permanent jusqu'à détatouage. Contrairement aux tatouages nécessitant un attunement, celui-ci peut être utilisé par n'importe qui et ne compte pas dans la limite d'attunement."
    },
    { nom: "Tatouage enchanté (niv. 1)", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "198 po", note: "lv1 spell (+1 lvl because anyone can cast it)",
      description: "Un tatouage permettant de lancer un sort de niveau 1 spécifique une fois par jour.",
      details: "Ce tatouage représente les symboles d'un sort de niveau 1 — un bouclier pour Armure du mage, une goutte pour Soins des blessures, une flèche pour Projectile magique, etc. Son porteur ou sa porteuse peut activer le tatouage (action) pour lancer le sort correspondant une fois par jour. Le sort est lancé au niveau 1, sans composantes ni focaliseur, et sans nécessiter de classe de lanceur de sorts. Les paramètres de lancer (DD de sauvegarde, bonus d'attaque) utilisent le bonus de maîtrise du porteur. Le tatouage est permanent sur la peau."
    },
    { nom: "Tatouage enchanté (niv. 2)", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "495 po", note: "lv2 spell (+1 lvl because anyone can cast it)",
      description: "Un tatouage permettant de lancer un sort de niveau 2 une fois par jour.",
      details: "Ce tatouage détaillé représente les symboles et schémas runiques d'un sort de niveau 2. Il permet à son porteur ou sa porteuse de lancer ce sort une fois par jour, sans composantes ni connaissances magiques particulières. Des sorts comme Invisibilité, Pas brumeux, Fracassement ou Immobiliser une personne peuvent y être intégrés. Les paramètres de lancer utilisent le bonus de maîtrise du porteur. Le coût plus élevé reflète la complexité de l'enchantement et la puissance du sort stocké."
    },
    { nom: "Tatouage enchanté (niv. 3)", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "743 po", note: "lv3 spell (+1 lvl because anyone can cast it)",
      description: "Un tatouage permettant de lancer un sort de niveau 3 une fois par jour sans ressource magique.",
      details: "Ce tatouage complexe couvrant une zone plus large représente l'intégralité du schéma magique d'un sort de niveau 3. Son porteur ou sa porteuse peut le déclencher une fois par jour pour lancer le sort correspondant — Boule de feu, Contresort, Dissipation de la magie, ou autres — sans aucune ressource magique ni maîtrise particulière. La complexité de l'enchantement est visible dans la finesse des lignes et des symboles du tatouage, parfois luminescents par faible lumière."
    },
    { nom: "Tatouage enchanté (niv. 4)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 386 po", note: "lv4 spell (+1 lvl because anyone can cast it)",
      description: "Un tatouage rare permettant de lancer un sort de niveau 4 une fois par jour.",
      details: "Ce tatouage élaboré représente des formules arcanes complexes gravées dans la peau de façon permanente. Son porteur ou sa porteuse peut déclencher le sort de niveau 4 qu'il contient une fois par jour, sans composantes ni ressource magique. Des sorts comme Porte dimensionnelle, Bouclier de feu ou Bannissement représentent des atouts tactiques considérables accessibles à n'importe qui portant ce tatouage. La rareté de l'objet reflète la difficulté à créer l'enchantement et la puissance du sort stocké."
    },
    { nom: "Tatouage enchanté (niv. 5)", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "1 848 po", note: "lv5 spell (+1 lvl because anyone can cast it)",
      description: "Le tatouage de sort le plus puissant, permettant d'utiliser un sort de niveau 5 une fois par jour.",
      details: "Ce tatouage magistral couvre une grande portion du corps de son porteur ou sa porteuse avec des inscriptions runiques d'une complexité extraordinaire. Il permet de lancer un sort de niveau 5 — Cône de froid, Domination de personne, Téléportation — une fois par jour, sans aucune ressource magique ni prérequis de classe. La puissance stockée dans ce tatouage est si considérable qu'elle est parfois perceptible par les créatures sensibles à la magie. L'enchantement de ce tatouage nécessite des jours de travail de la part d'un maître tatoueur-mage."
    },
    { nom: "Sphère d'annihilation", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "46 200 po", note: "based: disintegrate",
      description: "Une sphère de néant absolu qui détruit tout ce qu'elle touche de façon permanente.",
      details: "Cette sphère de 60 cm de diamètre d'un noir absolu flotte dans l'air, dévorant toute matière qui la touche — similaire à de multiples lancers de Désintégration simultanés. Elle détruit 2d4 × 10 kg de matière non magique par round de contact. Une créature touchée subit 4d10 × 10 dégâts de force. Les objets magiques en contact ont 50% de chances d'être détruits. Son propriétaire ou sa propriétaire peut la contrôler mentalement (test de Charisme DD 10 modifié par la présence d'autres lanceurs). Si elle rencontre un Portail cubique ou un Trou portable, les deux sont détruits dans une explosion dévastatrice."
    },
    { nom: "Tableau spirite", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "13 167 po", note: "nan",
      description: "Un tableau mystique qui permet de communiquer avec les esprits des défunts.",
      details: "Ce tableau de bois poli et noirci porte gravés des symboles du monde des esprits. En le posant sur une surface et en plaçant les mains dessus avec d'autres personnes (rituel de 10 minutes), son porteur ou sa porteuse peut établir une communication avec l'esprit d'un mort récent (moins de 10 ans). L'esprit répond aux questions par des mouvements du curseur. Les réponses sont limitées à des mots ou phrases courtes. L'esprit peut refuser de répondre. Des entités malveillantes peuvent parfois se faire passer pour l'esprit ciblé — la prudence est de mise lors de l'utilisation de cet objet."
    },
    { nom: "Pierre de contrôle des élémentaires de terre", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "7 392 po", note: "based: conjure elemental (plus 1 level, no cocentration)",
      description: "Une pierre rituelle permettant d'invoquer et de commander un élémentaire de terre.",
      details: "Cette pierre lourde et dense, marquée de glyphes géomantiques gravés en profondeur, vibre légèrement au toucher. En la plaçant dans de la terre ou de la roche et en prononçant les formules adéquates (action), son utilisateur ou utilisatrice peut invoquer un élémentaire de terre qui obéit à ses ordres sans nécessiter de concentration. L'élémentaire reste invoqué pendant 1 heure ou jusqu'à sa réduction à 0 PV. La pierre peut être utilisée une fois par jour. Sa présence sur le sol durant l'invocation crée souvent de légères vibrations dans le sol alentour."
    },
    { nom: "Pierre de chance", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "2 100 po", note: "ability bonus = weapon bonus",
      description: "Une pierre polie qui améliore la chance de son porteur, conférant un bonus à une caractéristique.",
      details: "Cette pierre polie et légèrement irisée est agréable à tenir dans la paume. Son porteur ou sa porteuse bénéficie d'un bonus de +1 à tous les tests de la caractéristique liée à la pierre — chaque pierre est associée à une caractéristique spécifique (Force, Dextérité, Constitution, Intelligence, Sagesse ou Charisme). Ce bonus est passif et constant tant que la pierre est portée. En tenant la pierre dans la main lors d'un test de cette caractéristique, son porteur peut également relancer un dé et garder le meilleur résultat, une fois par jour."
    },
    { nom: "Serre sylvestre", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "420 po", note: "based: comprehend language (minus 1 level for limited), message",
      description: "Une serre en bois qui permet de communiquer avec les plantes et de comprendre leur langage.",
      details: "Cette petite serre de poignet taillée dans du bois de forêt vivant permet à son porteur ou sa porteuse de comprendre les signaux et émotions basiques des plantes naturelles — un arbre peut indiquer si des créatures sont passées récemment, si la zone est saine ou polluée, ou l'état général de la forêt. Il peut également envoyer de brefs messages (quelques mots) à une plante dans un rayon de 100 mètres. Cette communication est rudimentaire — les plantes ne parlent pas, elles transmettent des impressions. Les druides et rangers apprécient particulièrement cet objet."
    },
    { nom: "Talisman du bien absolu", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "65 250 po", note: "fissure equal to 9th level spell",
      description: "Un talisman de lumière absolue qui peut engloutir les maléfiques dans une fissure divine.",
      details: "Ce talisman en métal doré gravé d'un soleil rayonnant ne peut être tenu sans douleur que par des créatures d'alignement bon. Son porteur ou sa porteuse bénéficie d'un bonus de +2 à la CA et aux jets de sauvegarde. Une fois par jour, il peut être utilisé pour pointer vers une créature maléfique visible à moins de 36 mètres : si la cible est un fiélon ou un mort-vivant, une fissure s'ouvre sous elle (jet de sauvegarde de Dextérité DD 20). En cas d'échec, la créature est détruite instantanément et envoyée dans un néant béni. En cas de réussite, elle subit 10d6 dégâts radiants."
    },
    { nom: "Talisman du mal absolu", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "57 000 po", note: "fissure equal to 9th level spell",
      description: "Un talisman de ténèbres absolues qui peut engloutir les créatures bonnes dans un abîme infernal.",
      details: "Ce talisman en métal noir gravé d'un œil inversé n'est portables que par des créatures d'alignement mauvais. Son porteur ou sa porteuse bénéficie d'un bonus de +2 à la CA et aux jets de sauvegarde. Une fois par jour, il peut être brandi vers une créature bonne visible à moins de 36 mètres : si la cible est un céleste ou une créature d'alignement bon, une fissure s'ouvre sous elle (jet de sauvegarde de Dextérité DD 20). En cas d'échec, la créature est détruite et envoyée dans les profondeurs des Abysses. En cas de réussite, elle subit 10d6 dégâts nécrotiques."
    },
    { nom: "Talisman de la sphère", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "15 000 po", note: "based: enhance ability (plus 1 level)",
      description: "Un talisman légendaire qui permet de contrôler la redoutable Sphère d'annihilation.",
      details: "Ce talisman d'obsidienne polie gravé de motifs de néant absolu est conçu pour être utilisé en conjonction avec une Sphère d'annihilation. Son porteur ou sa porteuse bénéficie d'un avantage à tous les tests de Charisme effectués pour contrôler la sphère, et son DD de contrôle est réduit de 2. De plus, il peut déplacer la sphère de 9 mètres supplémentaires par action. Sans ce talisman, contrôler une Sphère d'annihilation est extrêmement difficile — avec lui, les chances de maintenir le contrôle sont considérablement augmentées. Un objet dangereux mais précieux."
    },
    { nom: "Poupée parlante", type: "Objet merveilleux", rarete: "Commun", lien: true, prix: "900 po", note: "based: magic mouth (minus 1 level)",
      description: "Une poupée enchantée qui peut répéter des messages enregistrés ou converser simplement.",
      details: "Cette poupée articulée de qualité peut être programmée avec jusqu'à 6 messages différents (de 25 mots chacun) qui se déclenchent sur des conditions spécifiques définies lors de la programmation — quand on la serre, quand on tire sur une ficelle, quand une personne nommée s'approche, etc. Son porteur ou sa porteuse peut effacer et reprogrammer les messages à volonté (1 minute par message). La poupée peut également répéter mot pour mot les 6 dernières phrases qu'elle a entendues dans un rayon de 3 mètres. Utilisée comme jouet, message, alarme ou agent d'information discrète."
    },
    { nom: "Chope de sobriété", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "330 po", note: "based: prestidigitation",
      description: "Une chope enchantée qui neutralise les effets de l'alcool de ce qu'elle contient.",
      details: "Cette robuste chope en bois ou en métal, souvent ornée d'un symbole de lune ou d'œil sobre, neutralise les propriétés enivrantes de tout liquide qu'elle contient. La bière, le vin et les spiritueux conservent leur goût originel mais ne causent ni ivresse ni gueule de bois. De plus, si une potion de soin ou un autre liquide magique bénéfique est versé dedans, son efficacité est légèrement améliorée (+1d4 PV). Elle neutralise également les poisons ordinaires dans les boissons — elle ne peut pas neutraliser les poisons de contact ou aériens. Un outil populaire dans les tavernes et auprès des diplomates méfiants."
    },
    { nom: "Tome de pensée claire", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43 659 po", note: "due to max increase, uses set score",
      description: "Un tome d'exercices mentaux qui augmente définitivement l'Intelligence et son maximum.",
      details: "Ce livre à la reliure d'argent et aux pages de vélin de haute qualité contient des exercices de mémorisation, des puzzles arcanes et des techniques de concentration magiquement intensifiées. En le lisant pendant 48 heures sur 6 jours consécutifs, son lecteur ou lectrice augmente son Intelligence de 2 points ainsi que son maximum pour cette caractéristique. Cette amélioration est permanente et transforme fondamentalement les capacités cognitives de son lecteur. Après utilisation, le tome perd son enchantement pendant 100 ans. Particulièrement précieux pour les magiciens."
    },
    { nom: "Tome de commandement et d'influence", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43 659 po", note: "due to max increase, uses set score",
      description: "Un tome d'éloquence et de leadership qui augmente définitivement le Charisme et son maximum.",
      details: "Ce livre à la reliure d'or et aux enluminures sophistiquées contient des techniques d'éloquence, des stratégies de persuasion et des exercices de leadership magiquement intensifiés. En le lisant pendant 48 heures sur 6 jours consécutifs, son lecteur ou lectrice augmente son Charisme de 2 points ainsi que son maximum pour cette caractéristique. La transformation est permanente — sa présence, sa voix et son autorité naturelle s'en trouvent fondamentalement renforcées. Après utilisation, le tome perd son enchantement pendant 100 ans. Précieux pour les bardes, sorciers et paladins."
    },
    { nom: "Tome de compréhension", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43 659 po", note: "due to max increase, uses set score",
      description: "Un tome de sagesse profonde qui augmente définitivement la Sagesse et son maximum.",
      details: "Ce livre à la reliure de bois précieux naturellement veiné contient des méditations, des pratiques contemplatives et des exercices de discernement magiquement intensifiés. En le lisant pendant 48 heures sur 6 jours consécutifs, son lecteur ou lectrice augmente sa Sagesse de 2 points ainsi que son maximum pour cette caractéristique. Cette amélioration permanente affûte le jugement, améliore la perception et renforce la connexion avec le monde naturel et divin. Après utilisation, le tome perd son enchantement pendant 100 ans. Précieux pour les clercs, druides et rangers."
    },
    { nom: "Tome de la langue figée", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "33 000 po", note: "treat as 9th level for bonus action casting",
      description: "Un tome légendaire qui permet de lancer Mot de pouvoir en action bonus.",
      details: "Ce tome noir aux lettres dorées contient des formulations de Mots de pouvoir dans leur forme la plus condensée et immédiatement utilisable. Son porteur ou sa porteuse (lanceur de sorts) peut, une fois par jour, prononcer un Mot de pouvoir (Étourdissement, Guérison ou Mort selon la version du tome) en action bonus plutôt qu'en action complète. Cette vitesse d'exécution extraordinaire peut faire toute la différence dans les situations critiques — un Mot de pouvoir mort prononcé en réaction à l'action d'un ennemi est quasiment impossible à contrer. Un tome jalousement gardé par les plus grands mages."
    },
    { nom: "Solvant universel", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "4 620 po", note: "based: disintegrate",
      description: "Un liquide universel qui dissout instantanément tout ce qu'il touche, y compris la Colle souveraine.",
      details: "Ce petit flacon de liquide incolore presque invisible est la solution à tous les problèmes de collage et d'adhésion magique. Lorsqu'il est appliqué sur une surface (action), il dissout instantanément tout adhésif — y compris la Colle souveraine, les toiles d'araignée magiques et d'autres substances similaires. Il peut être appliqué sur des surfaces collées ensemble pour les séparer. De plus, il peut dissoudre les matériaux ordinaires non magiques — une application suffit pour dissoudre une serrure en métal ordinaire ou créer un passage dans une porte de bois. Il contient 7 doses. Usage unique par dose."
    },
    { nom: "Canne du vétéran", type: "Objet merveilleux", rarete: "Commun", lien: false, prix: "99 po", note: "based: disguise self",
      description: "Une canne de marche enchantée qui permet de modifier subtilement l'apparence de son porteur.",
      details: "Cette canne robuste en bois poli, au pommeau gravé, possède un enchantement discret d'illusion. En la tenant et en se concentrant (action), son porteur ou sa porteuse peut se donner l'apparence d'une personne plus âgée, plus jeune, plus grande ou plus petite, ou d'une apparence légèrement différente. L'illusion ne change pas la taille de plus de 30 cm et affecte principalement le visage et la posture. Elle est difficile à percevoir sans examen attentif (test de Sagesse DD 13). La canne peut aussi fonctionner normalement comme aide à la marche. Populaire parmi les espions et agents infiltrés."
    },
    { nom: "Vague", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact légendaire — trident de la mer doté de pouvoirs aquatiques absolus.",
      details: "La Vague est un trident légendaire d'une puissance dévastatrice sur les mers et ses habitants. Forgé dans les profondeurs de l'océan primordial, il permet à son porteur ou sa porteuse de respirer sous l'eau, de nager à vitesse extraordinaire, de contrôler les créatures aquatiques et les tempêtes, et d'invoquer des élémentaires d'eau. Il confère également un bonus de +3 aux attaques, inflige des dégâts supplémentaires aux créatures aquatiques, et peut transformer son porteur en forme aquatique. Sa conscience semi-divine l'amène parfois à imposer sa volonté — il cherche toujours à retourner à la mer."
    },
    { nom: "Puits des nombreux mondes", type: "Objet merveilleux", rarete: "Légendaire", lien: false, prix: "47 520 po", note: "based: planeshift x5",
      description: "Un disque de tissu noir qui ouvre un portail bidirectionnel vers un autre plan d'existence.",
      details: "Ce disque de soie noire de 1,8 m de diamètre semble ordinaire au repos. Lorsqu'il est posé sur une surface ou lancé dans l'air, il s'ouvre en un portail vers un plan d'existence aléatoire ou choisi (test d'Intelligence Arcanes DD 15 pour choisir). Ce portail est bidirectionnel — des créatures des deux côtés peuvent le traverser. Il reste ouvert pendant 1d4 × 10 minutes avant de se fermer automatiquement. Le puits peut être utilisé 5 fois avant de se désintégrer. C'est un outil de voyage planaire extraordinaire, mais aussi un danger potentiel si mal utilisé — des créatures indésirables peuvent s'en approcher."
    },
    { nom: "Écraseur", type: "Objet merveilleux", rarete: "Artefact", lien: true, prix: "— po", note: "Artifact, not priced",
      description: "Un artefact légendaire — marteau de la montagne d'une puissance dévastatrice et terrestre.",
      details: "L'Écraseur est un marteau de guerre légendaire forgé dans les entrailles de la terre par des titans anciens. Sa tête en métal sombre laisse des marques de tremblements de terre à chaque impact sur le sol. Il confère un bonus de +3 aux attaques, inflige des dégâts massifs aux structures et créatures de grande taille, peut déclencher des séismes localisés, et permet à son porteur ou sa porteuse de communiquer avec les élémentaires de terre. Sa conscience primordiale le pousse vers la destruction des artifices construits par les mortels. Il est associé à des légendes de nains et de géants des ères anciennes."
    },
    { nom: "Éventail du vent", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 188 po", note: "based: gust of wind",
      description: "Un éventail magique qui génère des rafales de vent puissantes et directionnelles.",
      details: "Cet éventail pliant aux lamelles légères peut, lorsqu'il est ouvert et agité (action), projeter une puissante rafale de vent similaire au sort Bourrasque. Ce vent souffle dans une ligne de 18 mètres de long et 6 mètres de large, poussant les créatures de petite taille ou repoussant les grandes d'au moins 4,5 mètres, éteignant les flammes ordinaires et dispersant les brouillards non magiques. L'éventail peut être utilisé 3 fois par jour (les charges se rechargent à l'aube). Repliez l'éventail pour arrêter l'effet. Un outil utile en navigation, pour disperser des gaz ou contrôler le champ de bataille."
    },
    { nom: "Bottes ailées", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "4 725 po", note: "based: fly (plus 1 level, no concentration)",
      description: "Des bottes ornées de petites ailes qui permettent de voler pendant plusieurs heures par jour.",
      details: "Ces bottes légères arborent de petites ailes décoratives au niveau des chevilles — les ailes sont ornementales en apparence mais magiquement fonctionnelles. En les activant (action bonus), leur porteur ou sa porteuse acquiert une vitesse de vol de 9 mètres. Cette vitesse de vol peut être utilisée jusqu'à 4 heures par jour, divisibles par tranche de 1 minute. Elles se rechargent à l'aube. Le vol est stable et contrôlable. Si les 4 heures sont épuisées en plein vol, le porteur tombe — à utiliser avec précaution à haute altitude. Un outil de mobilité verticale apprécié des éclaireurs et des paladins célestes."
    },
    { nom: "Ailes du vol", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6 300 po", note: "based: fly (plus 1 level, no concentration) x4",
      description: "Un manteau qui se déploie en ailes permettant un vol continu et rapide.",
      details: "Ce manteau en tissu léger aux reflets d'oiseau se déploie en deux grandes ailes fonctionnelles en quelques secondes (action bonus). Son porteur ou sa porteuse acquiert une vitesse de vol de 18 mètres. Les ailes peuvent être portées en permanence sans fatiguer leur porteur — il n'y a pas de limite de durée. Elles peuvent être rétractées dans le manteau (action bonus). En portant les ailes, leur porteur peut planer indéfiniment et effectuer des piqués contrôlés. Un objet légèrement moins discret que les bottes ailées mais bien plus performant en termes de liberté et de durée de vol."
    },
    { nom: "Protège-poings de puissance à mains nues +1", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1 320 po", note: "added cantrip for Force damage",
      description: "Des protège-poings enchantés qui améliorent les attaques à mains nues de leur porteur.",
      details: "Ces solides protège-poings en métal renforcé, gravés de runes de frappe, confèrent un bonus de +1 aux jets d'attaque et de dégâts des attaques à mains nues. De plus, les attaques à mains nues de leur porteur ou sa porteuse sont considérées comme des armes magiques et infligent des dégâts de force supplémentaires sur chaque frappe (1d4). Idéaux pour les moines, les combattants sans armes et tous les personnages dont les mains sont leurs principales armes. Légers et discrets, ils peuvent être portés sous d'autres gants."
    },
    { nom: "Protège-poings de puissance à mains nues +2", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3 960 po", note: "added cantrip for Force damage",
      description: "Des protège-poings améliorés conférant un bonus de +2 aux frappes à mains nues.",
      details: "Ces protège-poings de qualité supérieure en alliage enchanté confèrent un bonus de +2 aux jets d'attaque et de dégâts des attaques à mains nues, ainsi que des dégâts de force supplémentaires (1d4) à chaque frappe. Le bonus considérable qu'ils apportent en fait des équipements recherchés par les moines de haut rang et les combattants qui maîtrisent les arts martiaux. Leur métal présente une légère luminescence bleue révélatrice de l'énergie de force qu'ils contiennent, visible surtout dans l'obscurité lors des frappes."
    },
    { nom: "Protège-poings de puissance à mains nues +3", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "10 890 po", note: "added cantrip for Force damage",
      description: "Les protège-poings magiques les plus puissants, conférant un bonus de +3 et des dégâts de force massifs.",
      details: "Ces protège-poings légendaires en métal d'arcane pur sont le summum de l'équipement pour le combat à mains nues. Ils confèrent un bonus de +3 aux jets d'attaque et de dégâts des attaques à mains nues, ainsi que des dégâts de force supplémentaires (1d4) à chaque frappe. Leurs frappes sont considérées comme des armes magiques +3. L'énergie de force qu'ils dégagent est visible à l'œil nu — une légère aura bleue entoure les mains de leur porteur ou sa porteuse en combat. Entre les mains d'un moine maître, ces protège-poings peuvent rivaliser avec les armes magiques les plus redoutables."
    },

];
