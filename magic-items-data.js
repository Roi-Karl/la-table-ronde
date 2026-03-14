/**
 * ═══════════════════════════════════════════════════════════════
 * MAGIC-ITEMS-DATA.JS  ✦  Données des Objets Magiques
 * Sources : DMG 2024, XGTE, TCoE
 * ═══════════════════════════════════════════════════════════════
 */

const MAGIC_ITEMS_DATA = [
    // 🛡️ ARMURES & BOUCLIERS
    { nom: "Chemise de mailles en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5033 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Demi-plate en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "6188 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Harnois en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "7425 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Armure +1", type: "Armure", rarete: "Rare", lien: false, prix: "1980 po", note: "Bonus de +1 à la CA." },
    { nom: "Armure de vulnérabilité", type: "Armure", rarete: "Rare", lien: true, prix: "0 po", note: "Maudite. Résistance à un type de dégât, mais vulnérabilité à deux autres." },
    { nom: "Bouclier +1", type: "Armure", rarete: "Peu commun", lien: false, prix: "1518 po", note: "Bonus de +1 à la CA (en plus du bonus normal du bouclier)." },
    { nom: "Bouclier d'attraction des projectiles", type: "Armure", rarete: "Rare", lien: true, prix: "6000 po", note: "Maudit. Résistance aux dégâts à distance, mais attire les attaques." },

    // ⚔️ ARMES & MUNITIONS
    { nom: "Arme +1", type: "Arme", rarete: "Peu commun", lien: false, prix: "825 po", note: "Bonus de +1 aux jets d'attaque et de dégâts." },
    { nom: "Arme +2", type: "Arme", rarete: "Rare", lien: false, prix: "3300 po", note: "Bonus de +2 aux jets d'attaque et de dégâts." },
    { nom: "Arme d'Avertissement", type: "Arme", rarete: "Peu commun", lien: true, prix: "4500 po", note: "Avantage à l'initiative, empêche d'être surpris." },
    { nom: "Dague de venin", type: "Arme", rarete: "Rare", lien: false, prix: "2350 po", note: "Peut infliger la condition empoisonné et des dégâts de poison supplémentaires." },
    { nom: "Épée dansante", type: "Arme", rarete: "Très rare", lien: true, prix: "5400 po", note: "Peut être animée pour attaquer de manière autonome en action bonus." },
    { nom: "Épée de vie (Life Stealing)", type: "Arme", rarete: "Rare", lien: true, prix: "857 po", note: "Inflige des dégâts nécrotiques supplémentaires sur un 20 naturel et vous soigne." },
    { nom: "Langue de feu (Flame Tongue)", type: "Arme", rarete: "Rare", lien: true, prix: "1600 po", note: "S'enflamme sur commande, inflige 2d6 dégâts de feu supplémentaires." },
    { nom: "Munition +1", type: "Arme", rarete: "Peu commun", lien: false, prix: "297 po", note: "Bonus de +1 à l'attaque et aux dégâts." },
    { nom: "Vengeresse sacrée (Holy Avenger)", type: "Arme", rarete: "Légendaire", lien: true, prix: "39464 po", note: "Arme ultime de paladin, +3, dégâts radiants supplémentaires, aura de protection." },

    // 💍 ANNEAUX
    { nom: "Anneau de protection", type: "Anneau", rarete: "Rare", lien: true, prix: "3600 po", note: "Bonus de +1 à la CA et aux jets de sauvegarde." },
    { nom: "Anneau de résistance", type: "Anneau", rarete: "Rare", lien: true, prix: "9900 po", note: "Confère la résistance à un type de dégât spécifique." },
    { nom: "Anneau d'action libre", type: "Anneau", rarete: "Rare", lien: true, prix: "9000 po", note: "La magie ne peut ni réduire votre vitesse ni vous paralyser/entraver." },
    { nom: "Anneau de stockage de sorts", type: "Anneau", rarete: "Rare", lien: true, prix: "12600 po", note: "Peut stocker jusqu'à 5 niveaux de sorts." },

    // 🧪 POTIONS & HUILES
    { nom: "Potion de guérison", type: "Potion", rarete: "Commun", lien: false, prix: "55 po", note: "Restaure 2d4 + 2 PV." },
    { nom: "Potion de guérison supérieure", type: "Potion", rarete: "Peu commun", lien: false, prix: "165 po", note: "Restaure 4d4 + 4 PV." },
    { nom: "Potion de force de géant (Colline)", type: "Potion", rarete: "Peu commun", lien: false, prix: "3119 po", note: "Fixe la Force à 21 pendant 1 heure." },
    { nom: "Potion de vol", type: "Potion", rarete: "Très rare", lien: false, prix: "1485 po", note: "Confère une vitesse de vol pendant 1 heure." },
    { nom: "Potion d'invisibilité", type: "Potion", rarete: "Rare", lien: false, prix: "660 po", note: "Rend invisible pendant 1 heure ou jusqu'à ce que vous attaquiez/lanciez un sort." },

    // 🪄 BAGUETTES, BÂTONS & SCEPTRES
    { nom: "Baguette de projectiles magiques", type: "Baguette", rarete: "Peu commun", lien: false, prix: "1485 po", note: "7 charges. Permet de lancer Projectile magique sans composante." },
    { nom: "Baguette de boules de feu", type: "Baguette", rarete: "Rare", lien: true, prix: "6000 po", note: "7 charges. Permet de lancer Boule de feu (DD 15)." },
    { nom: "Bâton de la forêt", type: "Bâton", rarete: "Rare", lien: true, prix: "20400 po", note: "Arme +2. Permet de lancer divers sorts liés à la nature." },
    { nom: "Bâton de puissance", type: "Bâton", rarete: "Très rare", lien: true, prix: "39060 po", note: "Arme +2, +2 CA et JS, contient de puissants sorts de combat et de défense." },
    { nom: "Sceptre inamovible (Immovable Rod)", type: "Sceptre", rarete: "Peu commun", lien: false, prix: "7425 po", note: "Reste fixe dans l'espace lorsqu'on appuie sur son bouton, supporte jusqu'à 4000 kg." },

    // ✨ OBJETS MERVEILLEUX (Wondrous Items)
    { nom: "Amulette de santé", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "12600 po", note: "Fixe la Constitution à 19." },
    { nom: "Bandeau d'intelligence", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9450 po", note: "Fixe l'Intelligence à 19." },
    { nom: "Bottes elfiques", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2970 po", note: "Avantage aux jets de Dextérité (Discrétion) liés aux bruits de pas." },
    { nom: "Cape de déplacement", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6000 po", note: "Désavantage aux attaques dirigées contre vous grâce à une illusion." },
    { nom: "Ceinturon de force de géant (Colline)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "18900 po", note: "Fixe la Force à 21." },
    { nom: "Collier de boules de feu", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "5940 po", note: "Comporte des perles explosives permettant de lancer Boule de feu." },
    { nom: "Cruche alchimique", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4950 po", note: "Peut produire divers liquides (eau, bière, miel, poison, acide...)." },
    { nom: "Gantelets de puissance d'ogre", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9450 po", note: "Fixe la Force à 19." },
    { nom: "Manuel de santé corporelle", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43659 po", note: "Après 48h de lecture, augmente la Constitution et son maximum de +2." },
    { nom: "Pierre d'Ioun (Maîtrise)", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "82500 po", note: "Augmente le bonus de maîtrise de +1 pendant qu'elle orbite." },
    { nom: "Robe de l'archimage", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "43500 po", note: "CA = 15 + DEX, avantage aux JS contre la magie, +2 aux DD de sorts." },
    { nom: "Sac sans fond (Bag of Holding)", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1485 po", note: "Peut contenir jusqu'à 250 kg dans un espace extradimensionnel." }
];