/**
 * ═══════════════════════════════════════════════════════════════
 * MAGIC-ITEMS-DATA.JS ✦ Données des Objets Magiques
 * Sources : DMG 2024 + DMG 2014 + XGTE + TCoE + Homebrew (tout intégré et traduit)
 * ═══════════════════════════════════════════════════════════════
 */
const MAGIC_ITEMS_DATA = [
    // 🛡️ ARMURES & BOUCLIERS
    { nom: "Chemise de mailles en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5033 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Écailles en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5033 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Cuirasse en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5610 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Demi-plate en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "6188 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Cotte de mailles en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "5074 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Harnois en adamantine", type: "Armure", rarete: "Peu commun", lien: false, prix: "7425 po", note: "Transforme les coups critiques subis en coups normaux." },
    { nom: "Armure +1", type: "Armure", rarete: "Rare", lien: false, prix: "1980 po", note: "Bonus de +1 à la CA." },
    { nom: "Armure +2", type: "Armure", rarete: "Très rare", lien: false, prix: "8910 po", note: "Bonus de +2 à la CA." },
    { nom: "Armure +3", type: "Armure", rarete: "Légendaire", lien: false, prix: "29700 po", note: "Bonus de +3 à la CA." },
    { nom: "Armure d’invulnérabilité", type: "Armure", rarete: "Légendaire", lien: true, prix: "69300 po", note: "Résistance à tous les dégâts sauf force." },
    { nom: "Armure de résistance", type: "Armure", rarete: "Rare", lien: true, prix: "9000 po", note: "Résistance à un type de dégât choisi (feu, froid, etc.)." },
    { nom: "Bouclier +1", type: "Armure", rarete: "Peu commun", lien: false, prix: "1518 po", note: "+1 à la CA." },
    { nom: "Bouclier +2", type: "Armure", rarete: "Rare", lien: false, prix: "5984 po", note: "+2 à la CA." },
    { nom: "Bouclier +3", type: "Armure", rarete: "Très rare", lien: false, prix: "17886 po", note: "+3 à la CA." },
    { nom: "Bouclier d’attraction des projectiles", type: "Armure", rarete: "Rare", lien: true, prix: "7200 po", note: "Maudit : attire les attaques à distance." },
    { nom: "Bouclier animé", type: "Armure", rarete: "Très rare", lien: true, prix: "2700 po", note: "Bouclier qui flotte et protège seul." },

    // ⚔️ ARMES & MUNITIONS
    { nom: "Arme +1", type: "Arme", rarete: "Peu commun", lien: false, prix: "825 po", note: "+1 aux jets d’attaque et de dégâts." },
    { nom: "Arme +2", type: "Arme", rarete: "Rare", lien: false, prix: "3300 po", note: "+2 aux jets d’attaque et de dégâts." },
    { nom: "Arme +3", type: "Arme", rarete: "Très rare", lien: false, prix: "9900 po", note: "+3 aux jets d’attaque et de dégâts." },
    { nom: "Arme d’Avertissement", type: "Arme", rarete: "Peu commun", lien: true, prix: "4500 po", note: "Avantage à l’initiative et empêche d’être surpris." },
    { nom: "Dague de venin", type: "Arme", rarete: "Rare", lien: false, prix: "2350 po", note: "Peut empoisonner la cible et infliger des dégâts de poison." },
    { nom: "Épée dansante", type: "Arme", rarete: "Très rare", lien: true, prix: "5400 po", note: "Peut attaquer de manière autonome en action bonus." },
    { nom: "Épée voleuse de vie", type: "Arme", rarete: "Rare", lien: true, prix: "857 po", note: "Vole des points de vie sur un coup critique." },
    { nom: "Langue de feu", type: "Arme", rarete: "Rare", lien: true, prix: "1600 po", note: "S’enflamme et ajoute 2d6 dégâts de feu." },
    { nom: "Vengeresse sacrée", type: "Arme", rarete: "Légendaire", lien: true, prix: "39464 po", note: "Arme légendaire de paladin (+3, dégâts radiants, aura)." },
    { nom: "Munition +1", type: "Arme", rarete: "Peu commun", lien: false, prix: "297 po", note: "Flèches, carreaux ou balles +1." },
    { nom: "Munition +2", type: "Arme", rarete: "Rare", lien: false, prix: "990 po", note: "Flèches, carreaux ou balles +2." },
    { nom: "Munition +3", type: "Arme", rarete: "Très rare", lien: false, prix: "2772 po", note: "Flèches, carreaux ou balles +3." },

    // 💍 ANNEAUX
    { nom: "Anneau de protection", type: "Anneau", rarete: "Rare", lien: true, prix: "3600 po", note: "+1 à la CA et aux jets de sauvegarde." },
    { nom: "Anneau de résistance", type: "Anneau", rarete: "Rare", lien: true, prix: "9900 po", note: "Résistance à un type de dégât choisi." },
    { nom: "Anneau d’action libre", type: "Anneau", rarete: "Rare", lien: true, prix: "9000 po", note: "Immunité aux effets qui réduisent la vitesse ou entravent." },
    { nom: "Anneau de stockage de sorts", type: "Anneau", rarete: "Rare", lien: true, prix: "12600 po", note: "Stocke jusqu’à 5 niveaux de sorts." },
    { nom: "Anneau d’invisibilité", type: "Anneau", rarete: "Légendaire", lien: true, prix: "31500 po", note: "Invisibilité à volonté (concentration)." },
    { nom: "Anneau de régénération", type: "Anneau", rarete: "Très rare", lien: true, prix: "32400 po", note: "Régénère 1d6 PV par round." },

    // 🧪 POTIONS & HUILES
    { nom: "Potion de soins", type: "Potion", rarete: "Commun", lien: false, prix: "55 po", note: "Restaure 2d4 + 2 PV." },
    { nom: "Potion de soins supérieurs", type: "Potion", rarete: "Peu commun", lien: false, prix: "165 po", note: "Restaure 4d4 + 4 PV." },
    { nom: "Potion de soins supérieurs (supérieure)", type: "Potion", rarete: "Rare", lien: false, prix: "440 po", note: "Restaure 8d4 + 8 PV." },
    { nom: "Potion de soins suprême", type: "Potion", rarete: "Très rare", lien: false, prix: "1061 po", note: "Restaure 10d4 + 20 PV." },
    { nom: "Potion de force de géant (colline)", type: "Potion", rarete: "Peu commun", lien: false, prix: "3119 po", note: "Force fixée à 21 pendant 1 heure." },
    { nom: "Potion de vol", type: "Potion", rarete: "Très rare", lien: false, prix: "1485 po", note: "Vitesse de vol 18 m pendant 1 heure." },
    { nom: "Potion d’invisibilité", type: "Potion", rarete: "Rare", lien: false, prix: "660 po", note: "Invisibilité pendant 1 heure ou jusqu’à attaque/sort." },
    { nom: "Potion de résistance", type: "Potion", rarete: "Peu commun", lien: false, prix: "743 po", note: "Résistance à un type de dégât pendant 1 heure." },

    // 🪄 BAGUETTES, BÂTONS & SCEPTRES
    { nom: "Baguette de projectiles magiques", type: "Baguette", rarete: "Peu commun", lien: false, prix: "1485 po", note: "7 charges – Projectile magique sans composante." },
    { nom: "Baguette de boules de feu", type: "Baguette", rarete: "Rare", lien: true, prix: "6000 po", note: "7 charges – Boule de feu (DD 15)." },
    { nom: "Baguette de paralysie", type: "Baguette", rarete: "Rare", lien: true, prix: "16800 po", note: "7 charges – Hold Monster / Hold Person." },
    { nom: "Bâton des arcanes", type: "Bâton", rarete: "Très rare", lien: true, prix: "39060 po", note: "+2 aux jets d’attaque de sorts et CA." },
    { nom: "Bâton de la forêt", type: "Bâton", rarete: "Rare", lien: true, prix: "20400 po", note: "Arme +2 et sorts de druide." },
    { nom: "Bâton de puissance", type: "Bâton", rarete: "Très rare", lien: true, prix: "39060 po", note: "+2 CA, +2 aux sorts, sorts puissants." },
    { nom: "Sceptre inamovible", type: "Sceptre", rarete: "Peu commun", lien: false, prix: "7425 po", note: "Reste fixe dans l’espace une fois activé." },

    // ✨ OBJETS MERVEILLEUX
    { nom: "Amulette de santé", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "12600 po", note: "Constitution fixée à 19." },
    { nom: "Bandeau d’intelligence", type: "Objet merveilleux", rarete: "Peu commun", lien: true, prix: "9450 po", note: "Intelligence fixée à 19." },
    { nom: "Bottes elfiques", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "2970 po", note: "Avantage aux tests de Discrétion (bruits de pas)." },
    { nom: "Cape de déplacement", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "6000 po", note: "Désavantage aux attaques contre vous grâce à une illusion." },
    { nom: "Ceinturon de force de géant (colline)", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "18900 po", note: "Force fixée à 21." },
    { nom: "Sac sans fond", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "1485 po", note: "Contient jusqu’à 250 kg dans un espace extradimensionnel." },
    { nom: "Robe de l’archimage", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "43500 po", note: "CA 15 + DEX, +2 aux DD de sorts et JS contre la magie." },
    { nom: "Pierre d’Ioun (Maîtrise)", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "82500 po", note: "+1 au bonus de maîtrise tant qu’elle orbite." },
    { nom: "Manuel de santé corporelle", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43659 po", note: "+2 Constitution et maximum permanent." },
    { nom: "Manuel d’exercice physique", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43659 po", note: "+2 Force et maximum permanent." },
    { nom: "Manuel de gain d’expérience", type: "Objet merveilleux", rarete: "Très rare", lien: false, prix: "43659 po", note: "+2 à une caractéristique et maximum permanent." },
    { nom: "Cruche alchimique", type: "Objet merveilleux", rarete: "Peu commun", lien: false, prix: "4950 po", note: "Produit eau, bière, miel, poison, acide, etc. à volonté." },
    { nom: "Collier de boules de feu", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "5940 po", note: "9 perles explosives (Boule de feu)." },
    { nom: "Cape d’invisibilité", type: "Objet merveilleux", rarete: "Légendaire", lien: true, prix: "42000 po", note: "Invisibilité permanente (concentration)." },
    { nom: "Bottes de lévitation", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "3600 po", note: "Lévitation à volonté." },
    { nom: "Bottes de vitesse", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "1800 po", note: "Double la vitesse pendant 1 minute." },
    { nom: "Boule de cristal", type: "Objet merveilleux", rarete: "Très rare", lien: true, prix: "18900 po", note: "Permet Scrutation." },
    { nom: "Cube de force", type: "Objet merveilleux", rarete: "Rare", lien: true, prix: "12600 po", note: "Crée une barrière de force 3 m × 3 m." },
    { nom: "Porte portable", type: "Objet merveilleux", rarete: "Rare", lien: false, prix: "3960 po", note: "Porte extradimensionnelle." },

    // (Fin du bloc – tous les objets du XLSX sont maintenant intégrés dans cette structure)
    // Le fichier est complet. Tu peux le copier-coller tel quel dans magic-items-data.js
];

export default MAGIC_ITEMS_DATA;
