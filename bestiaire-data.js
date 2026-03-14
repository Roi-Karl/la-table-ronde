/**
 * ═══════════════════════════════════════════════════════════════
 *  LA TABLE RONDE — Bestiaire du Royaume
 *  603 créatures · noms traduits en français
 * ═══════════════════════════════════════════════════════════════
 */

const RPG_BESTIAIRE = {
    "Aarakocra aéromancien": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "66",
        "ca": 16,
        "vitesse": "20 m, vol 50 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 12,
            "INT": 12,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 18 Contondant, Foudre."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 120 m. Dégâts : 18 Contondant, Foudre."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Feather Fall cast feather fall"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Plans (Plan Élémentaire de l'Air)"
        ],
        "couleur": "#2980b9"
    },
    "Aarakocra tirailleur": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 12,
        "vitesse": "20 m, vol 50 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Perforant, Tonnerre."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 30/120 m. Dégâts : 7 Perforant, Tonnerre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if  moving 30ft+ 9 damage"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Plans (Plan Élémentaire de l'Air)"
        ],
        "couleur": "#2980b9"
    },
    "Aboleth": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "10",
        "xp": 5900,
        "pv": "150",
        "ca": 17,
        "vitesse": "10 m, nage 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 8,
            "CON": 14,
            "INT": 18,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 120 m, Perception passive 20",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Restauration occulte",
                "desc": ""
            },
            {
                "nom": "Nuage de mucus",
                "desc": ""
            },
            {
                "nom": "Télépathie sondante",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 15 m. Dégâts : 12 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 grapples, 30ft that is charmed or grappled takes 10 psychic damage and gains memories if target is reduced to 0, 30ft charmes"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Sous-marin"
        ],
        "couleur": "#6b3fa0"
    },
    "Abomination yuan-ti": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "127",
        "ca": 15,
        "vitesse": "40 m, escalade 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 16,
            "INT": 16,
            "SAG": 18,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 17",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 21 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Constrict a target within 5ft on fail 28 Bludgeoning damage grappled and restrained, Poison Spray recharges 5-6 30ft cone on fail 21 poison damage poisoned and blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Acolyte prêtre": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Contondant, Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 60 m. Dégâts : 7 Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Agent marqué des ombres": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "7",
        "xp": 2900,
        "pv": "132",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 20,
            "CON": 12,
            "INT": 10,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 24 Perforant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 20/60 m. Dégâts : 24 Perforant, Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Agent phaerimm": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "123",
        "ca": 15,
        "vitesse": "10 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 12,
            "INT": 16,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 20 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 120 m. Dégâts : 13 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 hit charmed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protective Magic: cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#6b3fa0"
    },
    "Agrippeur": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "93",
        "ca": 20,
        "vitesse": "10 m, escalade 20 m",
        "carac": {
            "FOR": 18,
            "DEX": 8,
            "CON": 16,
            "INT": 6,
            "SAG": 16,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 16",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 17 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 60 m. Dégâts : 0 ."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 grapples and is poisoned, Reel pull a grappled target 30ft"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Aigle": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "4",
        "ca": 12,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 12,
            "INT": 2,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#5a8a3c"
    },
    "Aigle géant": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "1",
        "xp": 200,
        "pv": "26",
        "ca": 13,
        "vitesse": "10 m, vol 80 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 12,
            "INT": 8,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [
            "Nécrotique",
            "Radiant"
        ],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Tranchant, Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#d4a017"
    },
    "Allosaurus": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "51",
        "ca": 13,
        "vitesse": "60 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 15 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Claw attack give prone condition"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Amiral pirate": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "12",
        "xp": 8400,
        "pv": "182",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 22,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 23 Tranchant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 30/90 m. Dégâts : 28 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit either: Awestruck charmed, Poison poisoned"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Defensive Stance when hit by melee +4 to AC if missed attack"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Ankheg": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 14,
        "vitesse": "30 m, fouissement 10 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 0,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception des vibrations 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Fouisseur",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 13 Tranchant, Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Spray 30ft long 5ft wide line on fail 14 acid damage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie"
        ],
        "couleur": "#bf360c"
    },
    "Ankylosaurus": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "3",
        "xp": 700,
        "pv": "68",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Gives Prone Condition"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Apprenti mage": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "49",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 12,
            "INT": 16,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 14 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 120 m. Dégâts : 14 Force."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Araignée": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 12,
        "vitesse": "20 m, escalade 20 m",
        "carac": {
            "FOR": 2,
            "DEX": 14,
            "CON": 8,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 10",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Marcheur de toiles",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 3 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Araignée de phase": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "3",
        "xp": 700,
        "pv": "45",
        "ca": 14,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Ethereal Sight",
                "desc": ""
            },
            {
                "nom": "SPider Climb",
                "desc": ""
            },
            {
                "nom": "Marcheur de toiles",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 17 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if target reduces target to 0 the target is stable poisoned and paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Plans (Plan Éthéré)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Araignée géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "26",
        "ca": 14,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Marcheur de toiles",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Dex save restrained Recharges 5-6"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Araignée-loup géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 13,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Vision dans le noir 10 m, Perception passive 13",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Aranée": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "66",
        "ca": 14,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 12,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Marcheur de toiles",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30/120 m. Dégâts : 8 Bludeoning."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais"
        ],
        "couleur": "#bf360c"
    },
    "Arbre éveillé": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "59",
        "ca": 13,
        "vitesse": "20 m",
        "carac": {
            "FOR": 18,
            "DEX": 6,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [
            "Contondant",
            "Perforant"
        ],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 14 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Arbuste éveillé": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Petit",
        "alignement": "Neutre",
        "fd": "0",
        "xp": 10,
        "pv": "10",
        "ca": 9,
        "vitesse": "20 m",
        "carac": {
            "FOR": 2,
            "DEX": 8,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [
            "Perforant"
        ],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +1 au toucher, allonge 5 m. Dégâts : 1 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Arcanaloth": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "12",
        "xp": 8400,
        "pv": "175",
        "ca": 18,
        "vitesse": "30 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 20,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Acide",
            "Poison",
            "Charmé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Fiendish Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Soul Tome",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 31 Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 5 m. Dégâts : 120 Nécrotique."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 29 Tranchant, Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "On a fail saved the target is incapacitated and on 3 more fails it stay incapacitated"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast Counterspell"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs"
        ],
        "couleur": "#8b0000"
    },
    "Archesorcière": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "21",
        "xp": 33000,
        "pv": "333",
        "ca": 20,
        "vitesse": "40 m",
        "carac": {
            "FOR": 24,
            "DEX": 14,
            "CON": 22,
            "INT": 18,
            "SAG": 18,
            "CHA": 24
        },
        "resistances": [
            "Froid",
            "Feu",
            "Psychique"
        ],
        "immunites": [
            "Charmé",
            "Épuisement",
            "Effrayé"
        ],
        "sens": "Vision parfaite 60 m, Perception passive 21",
        "traits": [
            {
                "nom": "Coven Magic",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Spiteful Escape",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 17 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +14 au toucher, portée 60 m. Dégâts : 17 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Ark 1 makes the target prone, 60ft coone on fail 32 lightning damage and the target is cursed and can't take reactions"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast Counterspell, make curse worst and casters cannot cast spells with verbal component"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#e91e8c"
    },
    "Archimage": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "12",
        "xp": 8400,
        "pv": "170",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 20,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Psychique",
            "Charmé"
        ],
        "sens": "Perception passive 16",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 27 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 150 m. Dégâts : 27 Force."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protective Magic cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Archprêtre": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "12",
        "xp": 8400,
        "pv": "240",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 14,
            "SAG": 20,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 19",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 27 Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 60 m. Dégâts : 27 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Holy Word recharges 4-6 within 20ft on fail 21 radiant damage and stunned"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Archprêtre kuo-toa": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "105",
        "ca": 13,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 16,
            "INT": 12,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Vision parfaite 30 m, Perception passive 19",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 20 Lighting."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 120 m. Dégâts : 20 Foudre."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Archélon": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "4",
        "xp": 1100,
        "pv": "90",
        "ca": 17,
        "vitesse": "20 m, nage 80 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 12,
            "INT": 4,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Armure animée": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "33",
        "ca": 18,
        "vitesse": "25 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 0,
            "SAG": 2,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 6",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Artificier Cannith": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "71",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 14,
            "INT": 18,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 14 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 120 m. Dégâts : 22 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk1 : on hit larger of smaller creature is prone"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Artiste": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "27",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 12,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Uncanny Dodge"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Artiste légendaire": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "162",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 20,
            "CON": 14,
            "INT": 14,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 20 Contondant, Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Majestic Song 20ft sphere on fail 22 psychic and either charmed or frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Artiste maestro": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "110",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Perforant, Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Beguiling Song 20ft sphere on fail 20 psychic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Aspirant chevalier de la mort": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Chaotique mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "178",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 10,
            "CON": 18,
            "INT": 10,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Épuisement",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Marshal Undead",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 24 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Hellfire recharges 5-6 20ft sphere on fail 42 Fire and Necrotic Damage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry on hit +4 AC"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Assassin": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "8",
        "xp": 3900,
        "pv": "97",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 14,
            "INT": 16,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [
            "Poison"
        ],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 24 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 80/320 m. Dégâts : 29 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Azer pyromancien": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "97",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 16,
            "INT": 12,
            "SAG": 18,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Perception passive 17",
        "traits": [
            {
                "nom": "Fire Aura",
                "desc": ""
            },
            {
                "nom": "Illumination",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 120 m. Dégâts : 15 Feu."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Hellish Rebuke cast Hellish Rebuke"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Plans (Plan Élémentaire du Feu)"
        ],
        "couleur": "#2980b9"
    },
    "Azer sentinelle": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "2",
        "xp": 450,
        "pv": "39",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 12,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Perception passive 11",
        "traits": [
            {
                "nom": "Fire Aura",
                "desc": ""
            },
            {
                "nom": "Illumination",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 11 Contondant, Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Plans (Plan Élémentaire du Feu)"
        ],
        "couleur": "#2980b9"
    },
    "Babouin": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "3",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 10,
            "INT": 4,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +1 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Balai animé": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "14",
        "ca": 15,
        "vitesse": "5 m, vol 50 m (stationnaire)",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 10,
            "INT": 0,
            "SAG": 4,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 7",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Balor": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "19",
        "xp": 22000,
        "pv": "287",
        "ca": 19,
        "vitesse": "40 m, vol 80 m",
        "carac": {
            "FOR": 26,
            "DEX": 14,
            "CON": 22,
            "INT": 20,
            "SAG": 16,
            "CHA": 22
        },
        "resistances": [
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Death Throes",
                "desc": ""
            },
            {
                "nom": "Fire Aura",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 30 m. Dégâts : 35 Force, Feu."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 43 Force, Foudre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 target gets pulled 25ft and make prone, Akt 2 the target cannot take reactions"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Bandit": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "11",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 80/320 m. Dégâts : 5 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Bandit trompeur": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "7",
        "xp": 2900,
        "pv": "130",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 16,
            "CON": 14,
            "INT": 16,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 20/60 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Blinding Flash recharges on 4-6 in 10ft sphere on fail 13 radiant damage and blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Banshee": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "54",
        "ca": 12,
        "vitesse": "5 m, vol 40 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 14,
            "CON": 10,
            "INT": 12,
            "SAG": 10,
            "CHA": 16
        },
        "resistances": [
            "Acide",
            "Contondant",
            "Feu",
            "Foudre",
            "Perforant",
            "Tranchant",
            "Tonnerre"
        ],
        "immunites": [
            "Froid",
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Detect Life",
                "desc": ""
            },
            {
                "nom": "Déplacement incorporel",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Horrify within 60ft on fail frightened, Deathly Wail 1/day within 30ft on fail less than 26 hp drops to 0 otherwise 10 psychic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Barlgura": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "85",
        "ca": 15,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 6,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 24 Perforant, Psychique."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 makes prone"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Baron sahuagin": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "76",
        "ca": 16,
        "vitesse": "30 m, nage 50 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 14,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [
            "Acide",
            "Froid"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Frénésie sanguinaire",
                "desc": ""
            },
            {
                "nom": "Limited Amphibiousness",
                "desc": ""
            },
            {
                "nom": "Shark Telepathy",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 20/60 m. Dégâts : 13 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#8b0000"
    },
    "Basilic": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "3",
        "xp": 700,
        "pv": "52",
        "ca": 15,
        "vitesse": "20 m",
        "carac": {
            "FOR": 16,
            "DEX": 8,
            "CON": 14,
            "INT": 2,
            "SAG": 8,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 17 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Bec-de-hache": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "19",
        "ca": 11,
        "vitesse": "50 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Prairie",
            "Collines"
        ],
        "couleur": "#bf360c"
    },
    "Bec-de-hache géant": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "84",
        "ca": 15,
        "vitesse": "50 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 18,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 18 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit another creature with 5ft of target take 6 slashing damage, Atk 2 on hit prone"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Prairie",
            "Collines"
        ],
        "couleur": "#bf360c"
    },
    "Belette": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 2,
            "DEX": 16,
            "CON": 8,
            "INT": 2,
            "SAG": 12,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Belette géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "9",
        "ca": 13,
        "vitesse": "40 m, escalade 30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 10,
            "INT": 4,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Berserker": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "67",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 8,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Bloodied Frenzy",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 9 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Berserker rouillé": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "82",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 30/120 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Any atk on hit poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Forêt"
        ],
        "couleur": "#607d8b"
    },
    "Biha Babir": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "12",
        "xp": 8400,
        "pv": "229",
        "ca": 17,
        "vitesse": "30 m, vol 60 m, nage 90 m",
        "carac": {
            "FOR": 22,
            "DEX": 12,
            "CON": 26,
            "INT": 18,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [
            "Acide",
            "Froid",
            "Foudre"
        ],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Elemental Restoration",
                "desc": ""
            },
            {
                "nom": "Wishes",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 17 Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 60 m. Dégâts : 17 Froid."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 15 m. Dégâts : 13 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#2980b9"
    },
    "Blaireau": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "5",
        "ca": 11,
        "vitesse": "20 m, fouissement 5 m",
        "carac": {
            "FOR": 10,
            "DEX": 10,
            "CON": 16,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [
            "Poison"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#5a8a3c"
    },
    "Blaireau géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "15",
        "ca": 13,
        "vitesse": "30 m, fouissement 10 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 16,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [
            "Poison"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#5a8a3c"
    },
    "Blob d'annihilation": {
        "icone": "🟢",
        "categorie": "Vase",
        "taille": "Gigantesque",
        "alignement": "Neutre mauvais",
        "fd": "23",
        "xp": 50000,
        "pv": "448",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 26,
            "DEX": 14,
            "CON": 28,
            "INT": 10,
            "SAG": 16,
            "CHA": 10
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Acide",
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Étourdi",
            "Inconscient"
        ],
        "sens": "Vision aveugle 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Astral Implosion",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +15 au toucher, allonge 30 m. Dégâts : 24 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Engulf moves through a creature's space on fail is engulfed total cover 21 force damage every round suffocating restrained if reduced to 0hp dissolved to ash, Restraining Globe within 600ft on fail 18 acid damage moves 60ft to the Globe restrained."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#827717"
    },
    "Bonhomme de nuit guerrier": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "33",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 8,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Abduct",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 10 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 10 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 20/60 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit target is grappled, Akt 2 advantage on grappled targets"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Plans (Féerie Sauvage)",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Bonhomme de nuit traqueur": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 14,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Abduct",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30/120 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 12 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 advantage on grappled targets"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Plans (Féerie Sauvage)",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Bouche bavarde": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Chaotique neutre",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 9,
        "vitesse": "20 m, nage 20 m",
        "carac": {
            "FOR": 10,
            "DEX": 8,
            "CON": 16,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "À terre"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Aberrant Ground",
                "desc": ""
            },
            {
                "nom": "Gibbering",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 the target is prone and is dead if reduced to 0, In a 10ft sphere 7 radiant damage and the target is blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Brigand Tarkanan": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "32",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [
            {
                "nom": "Aberrant Surge when cast witch bolt roll a d8 on even gains temp hp on odd does damage to a target in 30ft",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 20/60 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Briseur d'esprit des Ténèbres Rêveuses": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "180",
        "ca": 19,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 18,
            "CON": 16,
            "INT": 20,
            "SAG": 18,
            "CHA": 16
        },
        "resistances": [
            "Psychique"
        ],
        "immunites": [
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision parfaite 30 m, Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 27 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 30 m. Dégâts : 27 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 and 2 on hit target is frightened and if already frightened does 10 extra psychic damage, Primal Fear once per day in 30ft sphere within 120ft on fail save 35 psychic damage and frightened and while frightened can only move take action or bonus action"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Buletin": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 16,
        "vitesse": "30 m, fouissement 20 m",
        "carac": {
            "FOR": 16,
            "DEX": 8,
            "CON": 16,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception des vibrations 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Bulette": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "94",
        "ca": 17,
        "vitesse": "40 m, fouissement 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 20,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception des vibrations 120 m, Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 17 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Deadly Leap within 15ft on fail 19 bludgeoning damage and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Bullywug guerrier": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 15,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Speak with Frogs and Toads",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 8 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Marais"
        ],
        "couleur": "#e91e8c"
    },
    "Bullywug sage des marais": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "52",
        "ca": 16,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 8,
            "DEX": 16,
            "CON": 14,
            "INT": 10,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Speak with Frogs and Toads",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 17 Contondant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 9 Empoisonné."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is a cast of Ray of Sickness"
            }
        ],
        "description": "",
        "environnement": [
            "Marais"
        ],
        "couleur": "#e91e8c"
    },
    "Béhir": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très grand",
        "alignement": "Neutre mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "168",
        "ca": 17,
        "vitesse": "50 m, escalade 50 m",
        "carac": {
            "FOR": 22,
            "DEX": 16,
            "CON": 18,
            "INT": 6,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision dans le noir 90 m, Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 30 Perforant, Foudre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Constrict within 5ft on fail grappled and restrained, Lightning Breath recharges on 5-6 within 90ft wide and 5ft line on fail 66 lightning damage"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Béhémoth rouillé": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "9",
        "xp": 5000,
        "pv": "157",
        "ca": 18,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 18,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 20 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 60/240 m. Dégâts : 15 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit poisoned"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Rust-Riddled Hide: when hit bludgeoning, piercing, or slashing con save within 5ft on fail poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Forêt"
        ],
        "couleur": "#607d8b"
    },
    "Bête de Malar": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "168",
        "ca": 17,
        "vitesse": "50 m, vol 60 m, nage 40 m, fouissement 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 16,
            "CON": 22,
            "INT": 10,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 20",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Divine Immortality",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 23 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 18 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Forêt",
            "Collines"
        ],
        "couleur": "#bf360c"
    },
    "Bête distordue": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "76",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 6,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Avoidance",
                "desc": ""
            },
            {
                "nom": "Displacement",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 9 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#bf360c"
    },
    "Calmar géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "6",
        "xp": 2300,
        "pv": "120",
        "ca": 12,
        "vitesse": "5 m, nage 80 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 12,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 28 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 15 m. Dégâts : 19 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Grapples on 2 Akt. and pulls 10ft too you."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Moves up to half its speed in water and creates a heavily obscured area."
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Cambion": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "105",
        "ca": 19,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 16,
            "INT": 14,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre",
            "Poison"
        ],
        "immunites": [
            "Poison"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 120 m. Dégâts : 13 Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#8b0000"
    },
    "Capitaine de garde": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "75",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 12,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 30/120 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 15 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Capitaine des bandits": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 14,
            "INT": 14,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30/90 m. Dégâts : 8 Perforant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry when hit by melee +2 to AC"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Capitaine hobgobelin": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "58",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 14,
            "INT": 12,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Aura of Authority",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 12 Tranchant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 150/600 m. Dégâts : 11 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne",
            "Plans (Achéron)",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Capitaine pirate": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "84",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 14,
            "INT": 10,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30/90 m. Dégâts : 15 Perforant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Riposte when hit by melee +3 to AC if missed attack"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Capitaine éclaireur": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "66",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 12,
            "INT": 14,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 150/600 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 and Atk 2 +10 damage if they have advantage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Uncanny Dodge"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Cataclysme élémentaire": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Gigantesque",
        "alignement": "Chaotique neutre",
        "fd": "22",
        "xp": 41000,
        "pv": "370",
        "ca": 20,
        "vitesse": "60 m, vol 80 m (stationnaire), nage 80 m, fouissement 60 m",
        "carac": {
            "FOR": 26,
            "DEX": 18,
            "CON": 26,
            "INT": 8,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Poison",
            "Tonnerre",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Étourdi",
            "Inconscient"
        ],
        "sens": "Vision parfaite 150 m, Perception passive 12",
        "traits": [
            {
                "nom": "Earth Glide",
                "desc": ""
            },
            {
                "nom": "Monstre de siège",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +15 au toucher, allonge 30 m. Dégâts : 25 Acide, Froid, Feu, Foudre, or Thunder."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +15 au toucher, portée 150 m. Dégâts : 25 Acide, Froid, Feu, Foudre, or Thunder."
            },
            {
                "nom": "Notes de combat",
                "desc": "Control Weather, cast control weather, Cataclysmic Event recharges on 4-6: Clinging Flame within 60ft sphere on fail 45 fire damage and burning, Freezing Waves 90ft cone on fail 44 bludgeoning and cold damage prone and speed reduced to 0, Raging Storm 60ft sphere when in blinded and deafened on fail 36 lightning and thunder damage, Swallowing Earth 90ft cube 36 bludgeoning and acid damage prone buried restrained total cover and suffocating"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Chaos Élémentaire)"
        ],
        "couleur": "#2980b9"
    },
    "Cauchemar": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "68",
        "ca": 13,
        "vitesse": "60 m, vol 90 m (stationnaire)",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Perception passive 11",
        "traits": [
            {
                "nom": "Confer Fire Resistance",
                "desc": ""
            },
            {
                "nom": "Illumination",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 23 Contondant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Ethereal Stride teleport itself and 3 others to the ethereal plane"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs"
        ],
        "couleur": "#8b0000"
    },
    "Centaure gardien": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Grand",
        "alignement": "Neutre bon",
        "fd": "7",
        "xp": 2900,
        "pv": "105",
        "ca": 16,
        "vitesse": "50 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 8,
            "SAG": 18,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 27 Contondant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 90 m. Dégâts : 14 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on hit the target is blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Centaure soldat": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Grand",
        "alignement": "Neutre bon",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 16,
        "vitesse": "50 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 8,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 9 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 150/600 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Cerf": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "4",
        "ca": 13,
        "vitesse": "50 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 10,
            "INT": 2,
            "SAG": 14,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Agile",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 2 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Chacal": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "3",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 90 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +1 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Chacal-garou": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Petit",
        "alignement": "Chaotique mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "18",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 12,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 90 m, Perception passive 14",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Sleep Gaze recharges 5-6 within 30ft on fail is unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie"
        ],
        "couleur": "#8b0000"
    },
    "Chameau": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "17",
        "ca": 10,
        "vitesse": "50 m",
        "carac": {
            "FOR": 14,
            "DEX": 8,
            "CON": 16,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#5a8a3c"
    },
    "Champignon crieur": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "13",
        "ca": 5,
        "vitesse": "5 m",
        "carac": {
            "FOR": 0,
            "DEX": 0,
            "CON": 10,
            "INT": 0,
            "SAG": 2,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 6",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +0 au toucher, allonge 0 m. Dégâts : 0 ."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Shriek When there is light it makes a shriek that be heard 300ft away"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Champignon violet": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "18",
        "ca": 5,
        "vitesse": "5 m",
        "carac": {
            "FOR": 2,
            "DEX": 0,
            "CON": 10,
            "INT": 0,
            "SAG": 2,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 6",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 10 m. Dégâts : 4 Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Champignon violet nécro-colosse": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "123",
        "ca": 17,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 18,
            "INT": 6,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 16 Contondant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Spore Bomb recharges 5-6 20ft sphere on fail 28 Necrotic damage poisoned and cannot regain HP"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Chasme": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "78",
        "ca": 15,
        "vitesse": "20 m, vol 60 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 37 Perforant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk1 targets max HP is decreases by the amount of necrotic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Chasseur Tharashk": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "97",
        "ca": 16,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 14,
            "INT": 10,
            "SAG": 16,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 150/600 m. Dégâts : 17 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on his target has dis adv on atks and checks, Atk2 speed reduced by 10"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Uncanny Dodge"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Chat": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "2",
        "ca": 12,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 2,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Jumper",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 1 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Chauve-souris": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 12,
        "vitesse": "5 m, vol 30 m",
        "carac": {
            "FOR": 2,
            "DEX": 14,
            "CON": 8,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Chauve-souris géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "22",
        "ca": 12,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 10,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 120 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Montagne",
            "Outreterre"
        ],
        "couleur": "#5a8a3c"
    },
    "Chef des durs à cuire": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "82",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 100/400 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit pushed 10ft"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Chef gobelin": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Petit",
        "alignement": "Chaotique neutre",
        "fd": "1",
        "xp": 200,
        "pv": "21",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 8,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 80/320 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 and Akt 2 does +2 damage if they have advantage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Switches places with an ally when attacked"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines",
            "Plans (Achéron)",
            "Féerie Sauvage",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Cheval de selle": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 11,
        "vitesse": "60 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Cheval de trait": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "15",
        "ca": 10,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 14,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 6 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Chevalier": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "52",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Effrayé"
        ],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 14 Tranchant, Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 5 m. Dégâts : 14 Perforant, Radiant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry hit by  melee +2 to AC"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Chevalier de la Griffe d'Émeraude": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 12,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30/120 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "When bloodied deals an extra 4 necrotic damage"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Chevalier de la mort": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Chaotique mauvais",
        "fd": "17",
        "xp": 18000,
        "pv": "199",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 10,
            "CON": 20,
            "INT": 12,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Épuisement",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Marshall Undead",
                "desc": ""
            },
            {
                "nom": "Undead Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 5 m. Dégâts : 25 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Hellfire recharges 5-6 20ft sphere on fail 70 Fire and Necrotic Damage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry on hit +6 AC"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Chevalier en quête": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "12",
        "xp": 8400,
        "pv": "202",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 16,
            "CON": 16,
            "INT": 10,
            "SAG": 12,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Charmé",
            "Effrayé"
        ],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Aura of Bravery",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 34 Tranchant, Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 150/600 m. Dégâts : 34 Tranchant, Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Chevalier githyanki": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "117",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 14,
            "INT": 14,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 24 Tranchant, Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Astral)"
        ],
        "couleur": "#6b3fa0"
    },
    "Chien clignotant": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Loyal bon",
        "fd": "1/4",
        "xp": 50,
        "pv": "22",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Chien de la mort": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "39",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé",
            "Étourdi",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail poisoned HP does not return to normal when finishing a long rest subsequent failed HP max decreases by 5"
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#bf360c"
    },
    "Chien des enfers": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "58",
        "ca": 15,
        "vitesse": "50 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Perforant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharges on 5-6 15ft coone on fail 17 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Plans Inférieurs",
            "Outreterre"
        ],
        "couleur": "#8b0000"
    },
    "Chimère": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "6",
        "xp": 2300,
        "pv": "114",
        "ca": 14,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 18,
            "INT": 2,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 10 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if they have advantage 18 piercing damage, Atk 3 on hit prone, Fire Breath recharges on 5-6 15ft cone on fail 31 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Chuul": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "16",
        "xp": 15000,
        "pv": "76",
        "ca": 16,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Sense Magic",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 grapples, Grappled targets are poisoned second fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Chèvre": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "4",
        "ca": 10,
        "vitesse": "40 m, escalade 30 m",
        "carac": {
            "FOR": 10,
            "DEX": 10,
            "CON": 10,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 1 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If charging, 2 damage"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines",
            "Montagne",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Chèvre géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "19",
        "ca": 11,
        "vitesse": "40 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If charging, +5 damage and gives prone condition"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#5a8a3c"
    },
    "Cloakeur": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Chaotique neutre",
        "fd": "8",
        "xp": 3900,
        "pv": "91",
        "ca": 14,
        "vitesse": "10 m, vol 40 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 12,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Effrayé"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Sensibilité à la lumière",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 attaches and makes the target blind and takes 1/2 the damage given to the cloaker"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Cockatrice": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 11,
        "vitesse": "20 m, vol 40 m",
        "carac": {
            "FOR": 6,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Pétrifié"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 3 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail restrained on second fail petrified"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#bf360c"
    },
    "Cogneur Daask": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "150",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 12,
            "CON": 16,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Frénésie sanguinaire",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 12 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "On fail saving throw target is frightened"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Smackback"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Colosse": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Gigantesque",
        "alignement": "Non aligné",
        "fd": "25",
        "xp": 75000,
        "pv": "553",
        "ca": 23,
        "vitesse": "60 m",
        "carac": {
            "FOR": 30,
            "DEX": 10,
            "CON": 30,
            "INT": 2,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [
            "Nécrotique",
            "Radiant"
        ],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "Étourdi",
            "Inconscient"
        ],
        "sens": "Vision parfaite 300 m, Perception passive 10",
        "traits": [
            {
                "nom": "Forme immuable",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Monstre de siège",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +18 au toucher, allonge 20 m. Dégâts : 32 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +18 au toucher, portée 300 m. Dégâts : 22 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit target is pushed 20ft, Akt 2 on hit target is prone, Divine Beam recharges 5-6 300ft long 10ft wide line on fail 65 radiant damage if reduced to 0 by this target turns into dust"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Colosse leste": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "7",
        "xp": 2900,
        "pv": "104",
        "ca": 18,
        "vitesse": "50 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 18,
            "INT": 10,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Épuisement",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 17",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 15 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 60 m. Dégâts : 14 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If atk 1 hits speed reduced to 0"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Commandant berserker": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "8",
        "xp": 3900,
        "pv": "136",
        "ca": 16,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 18,
            "INT": 10,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Bloodied Frenzy",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 20 Tranchant, Tonnerre."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30/120 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 and Atk 3 on hit target speed reduced by 5"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Commandant de la Griffe d'Émeraude": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "78",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 14,
            "INT": 14,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [
            {
                "nom": "Aura of Authority",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 8 Contondant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 30/120 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "When bloodied deals an extra 7 necrotic damage"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Commandant guerrier": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "161",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 20,
            "CON": 18,
            "INT": 14,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 19 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 150/600 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit: Sap target has disadvantage on its next attack roll, Maneuver an ally can move 1/2 its speed without provoking opportunity attacks, Atk 2 on hit reduce by 10ft"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Counterattack when hit +4 to AC if missed make an attack against attacker"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Contrebandier Boromar": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "27",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [
            {
                "nom": "Hustle",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 30/90 m. Dégâts : 7 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Contrôleur kuo-toa": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 13,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Vision parfaite 30 m, Perception passive 16",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 13 Tranchant, Lighting."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on a hit the target can't make opportunity attacks"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Corbeau": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "2",
        "ca": 12,
        "vitesse": "10 m, vol 50 m",
        "carac": {
            "FOR": 2,
            "DEX": 14,
            "CON": 10,
            "INT": 4,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Mimicry"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Marais",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Couatl": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Moyen",
        "alignement": "Loyal bon",
        "fd": "4",
        "xp": 1100,
        "pv": "60",
        "ca": 19,
        "vitesse": "30 m, vol 90 m",
        "carac": {
            "FOR": 16,
            "DEX": 20,
            "CON": 16,
            "INT": 18,
            "SAG": 20,
            "CHA": 18
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Psychique",
            "Radiant"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Shielded Mind",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 makes the target poisoned, Constrict 5 bludgeoning damage grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Urbain"
        ],
        "couleur": "#d4a017"
    },
    "Coursier leste": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "47",
        "ca": 16,
        "vitesse": "60 m",
        "carac": {
            "FOR": 16,
            "DEX": 18,
            "CON": 18,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Épuisement",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If moved 20ft deal 4 more damage and knock prone"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Crabe": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "3",
        "ca": 11,
        "vitesse": "20 m, nage 20 m",
        "carac": {
            "FOR": 6,
            "DEX": 10,
            "CON": 12,
            "INT": 0,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception passive 9",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 1 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Crabe géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "13",
        "ca": 15,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 10,
            "INT": 0,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception passive 9",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Crapaud géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "39",
        "ca": 11,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 10 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Grapples on Akt.1, Can swallow a target and they become blinded and restrained and gives 5 acid damage."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Forêt",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#5a8a3c"
    },
    "Crocodile": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "13",
        "ca": 12,
        "vitesse": "20 m, nage 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Apnée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Garbled on hit"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Marais",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Crocodile géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "85",
        "ca": 14,
        "vitesse": "30 m, nage 50 m",
        "carac": {
            "FOR": 20,
            "DEX": 8,
            "CON": 16,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Apnée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 21 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 18 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Target is grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Marais"
        ],
        "couleur": "#5a8a3c"
    },
    "Crâne de feu": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très petit",
        "alignement": "Neutre mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "40",
        "ca": 13,
        "vitesse": "5 m, vol 40 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 16,
            "CON": 14,
            "INT": 16,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné",
            "À terre"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Illumination",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Undead Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 13 Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 13 Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#37474f"
    },
    "Cube gélatineux": {
        "icone": "🟢",
        "categorie": "Vase",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "63",
        "ca": 6,
        "vitesse": "15 m",
        "carac": {
            "FOR": 14,
            "DEX": 2,
            "CON": 20,
            "INT": 0,
            "SAG": 6,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Acide",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "À terre"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Ooze Cubee",
                "desc": ""
            },
            {
                "nom": "Transparent",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 12 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Engulf moves through a creature's space on fail is engulfed total cover 10 acid damage every round suffocating restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#827717"
    },
    "Cultiste": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "9",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Tranchant, Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Cultiste aberrant": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "137",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 12,
            "INT": 16,
            "SAG": 18,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 90 m, Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grappled and restrained, Mind Rot within 90ft on fail poisoned"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Counterspell cast counterspell"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Cultiste de Demogorgon": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Chaotique mauvais",
        "fd": "1/8",
        "xp": 25,
        "pv": "9",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Tranchant, Nécrotique."
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#455a64"
    },
    "Cultiste de la mort": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "127",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 18,
            "INT": 12,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 20 Tranchant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 120 m. Dégâts : 22 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit target cannot regain HP"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Cultiste fiélon": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "127",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 12,
            "SAG": 18,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 90 m, Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 23 Tranchant, Feu."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Hellish Rebuke cast hellish rebuke"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Cultiste élémentaire": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "135",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 14,
            "SAG": 18,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 25 Acide, Froid, Feu, Lightning or Thunder."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 120 m. Dégâts : 22 Acide, Froid, Feu, Lightning or Thunder."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit move target 10ft"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Elemental Absorption takes elemental damage gives itself resistance and 10 temp hp"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Cultistes": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "142",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 12,
            "SAG": 18,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 18",
        "traits": [
            {
                "nom": "Determined Survivor",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 17 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 120 m. Dégâts : 16 Psychique."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Counterattacks when hit make an attack"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Cultistes de Bhaal": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "144",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 18,
            "INT": 14,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 16",
        "traits": [
            {
                "nom": "Blood-Soaked Resolved",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 20/80 m. Dégâts : 14 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Cultistes de Myrkul": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "204",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 18,
            "INT": 20,
            "SAG": 18,
            "CHA": 14
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Nearer to the Dead",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 27 Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 120 m. Dégâts : 27 Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Cyclope oracle": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Chaotique neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "207",
        "ca": 16,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 16,
            "SAG": 18,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision parfaite 30 m, Perception passive 22",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 22 Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 120 m. Dégâts : 17 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit target has disadvantage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Portent recharges on 4-6 on a d20 test cyclops rolls a d20 and choses which roll to use"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Prairie",
            "Collines",
            "Montagne",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Cyclope sentinelle": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Chaotique neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "138",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 8,
            "SAG": 6,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 8",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 16 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 30/120 m. Dégâts : 22 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit prone"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Limited Foresight recharges on 6 when someone makes an attack roll imposes disadvantage and gains advantage on attack rolls against the target"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Prairie",
            "Collines",
            "Montagne",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Cygne-fée": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Neutre bon",
        "fd": "14",
        "xp": 11500,
        "pv": "71",
        "ca": 14,
        "vitesse": "30 m, vol 40 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 14,
            "INT": 10,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Tranchant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 150/600 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 in swan form, Atk 2 and atk 3 in human form"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#e91e8c"
    },
    "Dao": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "11",
        "xp": 7200,
        "pv": "200",
        "ca": 18,
        "vitesse": "30 m, vol 30 m (stationnaire), fouissement 30 m",
        "carac": {
            "FOR": 22,
            "DEX": 12,
            "CON": 24,
            "INT": 12,
            "SAG": 12,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Pétrifié"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Earth Glide",
                "desc": ""
            },
            {
                "nom": "Elemental Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Wishes",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 20 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 120 m. Dégâts : 15 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 3 attacks if picked on hit large or smaller prone, Atk 2 2 attacks if picked also on within 10ft from target on fail 10 thunder damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Élémentaire de la Terre)",
            "Outreterre"
        ],
        "couleur": "#2980b9"
    },
    "Dardew": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "105",
        "ca": 19,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 16,
            "INT": 14,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre",
            "Poison"
        ],
        "immunites": [
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Tranchant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Power Chord a creature within 120ft on fail 13 thunder damage"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#8b0000"
    },
    "Demi-dragon": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "105",
        "ca": 18,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Draconic Origin",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 13 Tranchant, Based on type."
            },
            {
                "nom": "Notes de combat",
                "desc": "Breath Akt 30ft coone 28 damage based on type"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#c0392b"
    },
    "Demi-liche": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très petit",
        "alignement": "Neutre",
        "fd": "18",
        "xp": 20000,
        "pv": "180",
        "ca": 20,
        "vitesse": "5 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 20,
            "CON": 10,
            "INT": 20,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Étourdi"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Undead Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 5 m. Dégâts : 24 Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +11 au toucher, portée 120 m. Dégâts : 24 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Howl recharges on 5-6 Within 30ft on fail 70 Psychic damage and frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Destrier": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "5",
        "ca": 12,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If charging +5 to damage and gives prone"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Diable barbelé": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "110",
        "ca": 15,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 18,
            "INT": 12,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 18",
        "traits": [
            {
                "nom": "Barbed Hide",
                "desc": ""
            },
            {
                "nom": "Diabolical Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 10 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 14 Tranchant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 150 m. Dégâts : 17 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 grapples on a hit, Akt 3 can burn flammable objects"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable barbu": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "58",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 14,
            "INT": 8,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on fail target loses 5 hp reach round"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable cornu": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "199",
        "ca": 18,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 22,
            "DEX": 16,
            "CON": 20,
            "INT": 12,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 150 m, Perception passive 13",
        "traits": [
            {
                "nom": "Diabolical Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 24 Perforant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 150 m. Dégâts : 26 Fire damage."
            },
            {
                "nom": "Notes de combat",
                "desc": "Within 10ft on fail 10 necrotic damage 10 damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable de glace": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "14",
        "xp": 11500,
        "pv": "228",
        "ca": 18,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 18,
            "INT": 18,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Froid",
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Diabolical Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 24 Perforant, Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 30/120 m. Dégâts : 24 Perforant, Froid."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 33 Contondant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 and Akt 2 on hit target can't take a bonus action or reaction speed -10 and only move or take an action, Ice Wall recharge on 6 cast Wall of Ice"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable des chaînes": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "85",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 18,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Contondant",
            "Froid",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Feu, Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Diabolical Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 11 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 grappled and restrained on hit, On fail a target in 60ft 9 fire damage and restrained and is pulled"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable moissonneur": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 14,
            "INT": 14,
            "SAG": 12,
            "CHA": 18
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Charmé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Diabolic Ward",
                "desc": ""
            },
            {
                "nom": "Diabolic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 13 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 120 m. Dégâts : 13 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit no opportunity atk, Compelling Spell a creature within 30ft on fail charmed and stunned"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable orateur": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "12",
        "xp": 8400,
        "pv": "189",
        "ca": 17,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 20,
            "DEX": 18,
            "CON": 20,
            "INT": 22,
            "SAG": 18,
            "CHA": 16
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 18",
        "traits": [
            {
                "nom": "Diabolic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 30 Tranchant, Tonnerre."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable osseux": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "161",
        "ca": 16,
        "vitesse": "40 m, vol 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 18,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Diabolical Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 13 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 33 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on hit target is poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diable épineux": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Petit",
        "alignement": "Loyal mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 13,
        "vitesse": "20 m, vol 40 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 8 Perforant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 20/80 m. Dégâts : 7 Perforant, Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Diablotin": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Très petit",
        "alignement": "Loyal mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "21",
        "ca": 13,
        "vitesse": "20 m, vol 40 m",
        "carac": {
            "FOR": 6,
            "DEX": 16,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Vue du diable",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 13 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Can go invisible, Can shapeshift into a rat raven or spider"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#8b0000"
    },
    "Diablotin farceur": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Très petit",
        "alignement": "Loyal mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "21",
        "ca": 13,
        "vitesse": "20 m, vol 40 m",
        "carac": {
            "FOR": 6,
            "DEX": 16,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Vue du diable",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 13 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Can go invisible, Can shapeshift into a rat raven or spider"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#8b0000"
    },
    "Djinn": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "11",
        "xp": 7200,
        "pv": "218",
        "ca": 18,
        "vitesse": "30 m, vol 90 m (stationnaire)",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 22,
            "INT": 14,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Foudre",
            "Tonnerre"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Elemental Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Wishes",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 19 Tranchant, Foudre."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 120 m. Dégâts : 13 ."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit if target is large or smaller prone, Create Whirlwind 20ft radius 60ft high cylinder when target enters on fail restrained and 21 thunder damage"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Plans (Plan Élémentaire de l'Air)"
        ],
        "couleur": "#2980b9"
    },
    "Doppelgänger": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "52",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 14,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Read Thoughts cast detect thoughts, Unsettling Visage within 15ft on fail frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Draco-liche": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très grand ou Gigantesque",
        "alignement": "Loyal mauvais",
        "fd": "17",
        "xp": 18000,
        "pv": "225",
        "ca": 20,
        "vitesse": "40 m, vol 80 m, fouissement 30 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 22,
            "INT": 18,
            "SAG": 14,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 24",
        "traits": [
            {
                "nom": "Life Suppression",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Soul Gem",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 10 m. Dégâts : 22 Tranchant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +11 au toucher, portée 60 m. Dégâts : 14 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is a casting of Ray of Sickness (level 2), Necrotic Breath recharges 5-6 60ft coone on fail 52 necrotic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Dragon blanc adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "200",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, nage 40 m, fouissement 30 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 22,
            "INT": 8,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 21",
        "traits": [
            {
                "nom": "Ice Walk",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 17 Tranchant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cold Breath 60ft coone 54 cold damage"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#c0392b"
    },
    "Dragon blanc ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Chaotique mauvais",
        "fd": "20",
        "xp": 25000,
        "pv": "333",
        "ca": 20,
        "vitesse": "40 m, vol 80 m, nage 40 m, fouissement 40 m",
        "carac": {
            "FOR": 26,
            "DEX": 10,
            "CON": 26,
            "INT": 10,
            "SAG": 12,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 23",
        "traits": [
            {
                "nom": "Ice Walk",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 15 m. Dégâts : 24 Tranchant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cold Breath 90ft coone 63 cold damage"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#c0392b"
    },
    "Dragon bleu adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Loyal mauvais",
        "fd": "16",
        "xp": 15000,
        "pv": "212",
        "ca": 19,
        "vitesse": "40 m, vol 80 m, fouissement 30 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 22,
            "INT": 16,
            "SAG": 14,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 22",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Lighting."
            },
            {
                "nom": "Attaque 2",
                "desc": "Attaque : +0 au toucher. Dégâts : 14 Tonnerre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Lightning Breath recharges on 5-6 90ft 5ft wide line 60 lightning"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Dragon bleu ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Loyal mauvais",
        "fd": "23",
        "xp": 50000,
        "pv": "481",
        "ca": 22,
        "vitesse": "40 m, vol 80 m, fouissement 40 m",
        "carac": {
            "FOR": 28,
            "DEX": 10,
            "CON": 26,
            "INT": 18,
            "SAG": 16,
            "CHA": 24
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 27",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +16 au toucher, allonge 5 m. Dégâts : 29 Tranchant, Lighting."
            },
            {
                "nom": "Attaque 2",
                "desc": "Attaque : +0 au toucher. Dégâts : 18 Tonnerre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Lightning Breath recharges on 5-6 120ft 10ft wide line 88 lightning"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Dragon d'argent adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Loyal bon",
        "fd": "16",
        "xp": 15000,
        "pv": "216",
        "ca": 19,
        "vitesse": "40 m, vol 80 m",
        "carac": {
            "FOR": 26,
            "DEX": 10,
            "CON": 24,
            "INT": 16,
            "SAG": 12,
            "CHA": 22
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 21",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +11 au toucher, portée 60 m. Dégâts : 12 Perforant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting ice knife and failing the saving through, Cold Breath 60ft coone 54 cold damage, Paralyzing breath 60ft coone on fail incapacitated second fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Urbain"
        ],
        "couleur": "#c0392b"
    },
    "Dragon d'argent ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Loyal bon",
        "fd": "23",
        "xp": 50000,
        "pv": "468",
        "ca": 22,
        "vitesse": "40 m, vol 80 m",
        "carac": {
            "FOR": 30,
            "DEX": 10,
            "CON": 28,
            "INT": 18,
            "SAG": 14,
            "CHA": 26
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 26",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +17 au toucher, allonge 15 m. Dégâts : 28 Tranchant, Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +15 au toucher, portée 60 m. Dégâts : 16 Perforant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting ice knife (level 2) and failing the saving through, Cold Breath 60ft coone 54 cold damage, Paralyzing breath 60ft coone on fail incapacitated second fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Urbain"
        ],
        "couleur": "#c0392b"
    },
    "Dragon de bronze adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Loyal bon",
        "fd": "15",
        "xp": 13000,
        "pv": "212",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 22,
            "INT": 16,
            "SAG": 14,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 22",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Lighting."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 120 m. Dégâts : 18 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting Guiding Bolt (level 2), Lightning Breath recharges on 5-6 90ft 5ft wide line 55 lightning, Repulsion Breath 30ft coone targets are pushed 60ft and are prone"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier"
        ],
        "couleur": "#c0392b"
    },
    "Dragon de bronze ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Loyal bon",
        "fd": "22",
        "xp": 41000,
        "pv": "444",
        "ca": 22,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 28,
            "DEX": 10,
            "CON": 26,
            "INT": 18,
            "SAG": 16,
            "CHA": 24
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 27",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +16 au toucher, allonge 15 m. Dégâts : 27 Tranchant, Lighting."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 120 m. Dégâts : 18 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting Guiding Bolt (level 2), Lightning Breath recharges on 5-6 120ft 10ft wide line 82 lightning, Repulsion Breath 30ft coone targets are pushed 60ft and are prone"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier"
        ],
        "couleur": "#c0392b"
    },
    "Dragon de cuivre adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Chaotique bon",
        "fd": "14",
        "xp": 11500,
        "pv": "184",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, escalade 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 12,
            "CON": 20,
            "INT": 18,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 22",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Acide."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +0 au toucher, portée 120 m. Dégâts : 23 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting mind spike (level 4), Acid Breath recharges on 5-6 60ft 5ft wide line 54 acid damage, Slowing Breath 60ft coone target's speed is halved and can't take reactions, and either an action or bonus action"
            }
        ],
        "description": "",
        "environnement": [
            "Collines"
        ],
        "couleur": "#c0392b"
    },
    "Dragon de cuivre ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Chaotique bon",
        "fd": "21",
        "xp": 33000,
        "pv": "367",
        "ca": 21,
        "vitesse": "40 m, vol 80 m, escalade 40 m",
        "carac": {
            "FOR": 26,
            "DEX": 12,
            "CON": 24,
            "INT": 20,
            "SAG": 16,
            "CHA": 22
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 27",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +15 au toucher, allonge 15 m. Dégâts : 28 Tranchant, Acide."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +0 au toucher, portée 120 m. Dégâts : 27 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting mind spike (level 5), Acid Breath recharges on 5-6 60ft 5ft wide line 54 acid damage, Slowing Breath 60ft coone target's speed is halved and can't take reactions, and either an action or bonus action"
            }
        ],
        "description": "",
        "environnement": [
            "Collines"
        ],
        "couleur": "#c0392b"
    },
    "Dragon de laiton adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Chaotique bon",
        "fd": "13",
        "xp": 10000,
        "pv": "172",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, fouissement 30 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 14,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 21",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 120 m. Dégâts : 21 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting scorching ray, Fire Breath recharges on 5-6 60ft 5ft wide line 45 fire damage, Sleep Breath 60ft coone cause incapacitated and possibly unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Dragon de laiton ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Chaotique bon",
        "fd": "20",
        "xp": 25000,
        "pv": "332",
        "ca": 20,
        "vitesse": "40 m, vol 80 m, fouissement 40 m",
        "carac": {
            "FOR": 26,
            "DEX": 10,
            "CON": 24,
            "INT": 16,
            "SAG": 14,
            "CHA": 22
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 24",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 15 m. Dégâts : 26 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 120 m. Dégâts : 28 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting scorching ray (3rd level), Fire Breath recharges on 5-6 90ft 5ft wide line 58 fire damage, Sleep Breath 90ft coone cause incapacitated and possibly unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Dragon des ombres": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand ou Grand",
        "alignement": "Chaotique mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "189",
        "ca": 16,
        "vitesse": "40 m, vol 80 m, escalade 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 18,
            "CON": 18,
            "INT": 14,
            "SAG": 12,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 21",
        "traits": [
            {
                "nom": "Living Shadow",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 15 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Shadow Breath recharges 5-6 60ft coone 35 Necrotic if reduces a humanoid to 0 a shadow rises from its corpse"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre"
        ],
        "couleur": "#c0392b"
    },
    "Dragon des ombres juvénile": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "45",
        "ca": 15,
        "vitesse": "30 m, vol 60 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 16,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Nécrotique"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Living Shadow",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 10 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Shadow Breath recharges 5-6 30ft coone 17 Necrotic if reduces a humanoid to 0 a shadow rises from its corpse"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre"
        ],
        "couleur": "#c0392b"
    },
    "Dragon des profondeurs adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Neutre mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "161",
        "ca": 17,
        "vitesse": "40 m, vol 80 m, nage 40 m, fouissement 30 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 16,
            "INT": 16,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [
            "Poison",
            "Psychique"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 150 m, Perception passive 21",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 19 Tranchant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "30ft Cone on fail 38 psychic damage and frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#c0392b"
    },
    "Dragon des profondeurs ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Neutre mauvais",
        "fd": "18",
        "xp": 20000,
        "pv": "247",
        "ca": 20,
        "vitesse": "40 m, vol 80 m, nage 40 m, fouissement 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 16,
            "CON": 22,
            "INT": 18,
            "SAG": 18,
            "CHA": 20
        },
        "resistances": [
            "Poison",
            "Psychique"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 300 m, Perception passive 26",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 15 m. Dégâts : 22 Tranchant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "90ft Cone on fail 44 psychic damage and frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#c0392b"
    },
    "Dragon doré adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Loyal bon",
        "fd": "17",
        "xp": 18000,
        "pv": "243",
        "ca": 19,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 26,
            "DEX": 14,
            "CON": 24,
            "INT": 16,
            "SAG": 14,
            "CHA": 24
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 24",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +13 au toucher, portée 120 m. Dégâts : 18 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting guiding bolt (level 2), Fire Breath recharge on 5-6 60ft coone 66 fire damage, Waking Breath 60ft coone disadvantage on strength-based rolls and -3 on damage rolls"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie"
        ],
        "couleur": "#c0392b"
    },
    "Dragon doré ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Loyal bon",
        "fd": "24",
        "xp": 62000,
        "pv": "546",
        "ca": 22,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 30,
            "DEX": 14,
            "CON": 28,
            "INT": 18,
            "SAG": 16,
            "CHA": 28
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 27",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +17 au toucher, allonge 15 m. Dégâts : 28 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +16 au toucher, portée 120 m. Dégâts : 25 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting guiding bolt (level 4), Fire Breath recharge on 5-6 90ft coone 71 fire damage, Waking Breath 90ft coone disadvantage on strength-based rolls and -5 on damage rolls"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie"
        ],
        "couleur": "#c0392b"
    },
    "Dragon féerique adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très petit",
        "alignement": "Chaotique bon",
        "fd": "2",
        "xp": 450,
        "pv": "35",
        "ca": 15,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 2,
            "DEX": 20,
            "CON": 12,
            "INT": 14,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 10 Perforant, Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Euphoria Breath recharge on 5-6 15ft coone and incapacitated and moves in random directions"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#c0392b"
    },
    "Dragon noir adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "14",
        "xp": 11500,
        "pv": "195",
        "ca": 19,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 20,
            "INT": 14,
            "SAG": 12,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 21",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 17 Tranchant, Acide."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 90 m. Dégâts : 32 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Breath recharges on 5-6 Dex save 60ft 5ft wide line 54 Acid, Akt 2 is a casting of Melf's Acid Arrow"
            }
        ],
        "description": "",
        "environnement": [
            "Marais"
        ],
        "couleur": "#c0392b"
    },
    "Dragon noir ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Chaotique mauvais",
        "fd": "21",
        "xp": 33000,
        "pv": "367",
        "ca": 22,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 26,
            "DEX": 14,
            "CON": 24,
            "INT": 16,
            "SAG": 14,
            "CHA": 22
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 26",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +15 au toucher, allonge 15 m. Dégâts : 26 Tranchant, Acide."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +13 au toucher, portée 90 m. Dégâts : 41 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Breath recharges on 5-6 Dex save 90ft 10ft wide line 67 Acid, Akt 2 is a casting of Melf's Acid Arrow"
            }
        ],
        "description": "",
        "environnement": [
            "Marais"
        ],
        "couleur": "#c0392b"
    },
    "Dragon rouge adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "17",
        "xp": 18000,
        "pv": "256",
        "ca": 19,
        "vitesse": "40 m, vol 80 m, escalade 40 m",
        "carac": {
            "FOR": 26,
            "DEX": 10,
            "CON": 24,
            "INT": 16,
            "SAG": 12,
            "CHA": 22
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 23",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 18 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 120 m. Dégâts : 21 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting Scorching Ray, Fire Breath recharge on 5-6 60ft coone 59 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#c0392b"
    },
    "Dragon rouge ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Chaotique mauvais",
        "fd": "24",
        "xp": 62000,
        "pv": "507",
        "ca": 22,
        "vitesse": "40 m, vol 80 m, escalade 40 m",
        "carac": {
            "FOR": 30,
            "DEX": 10,
            "CON": 28,
            "INT": 18,
            "SAG": 14,
            "CHA": 26
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 26",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +17 au toucher, allonge 15 m. Dégâts : 29 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +15 au toucher, portée 120 m. Dégâts : 28 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting Scorching Ray (Level 3), Fire Breath recharge on 5-6 90ft coone 91 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#c0392b"
    },
    "Dragon spirituel adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "15",
        "xp": 13000,
        "pv": "207",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, fouissement 30 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 20,
            "INT": 20,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 22 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Ruinous Breath: 60ft cone con save on fail 63 necrotic damage, TimeWarping Breath: 60ft cone wis save on fail target's speed is 1/2 and can only take a bonus action or an action"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#c0392b"
    },
    "Dragon spirituel ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Neutre",
        "fd": "22",
        "xp": 41000,
        "pv": "420",
        "ca": 21,
        "vitesse": "40 m, vol 80 m, fouissement 30 m",
        "carac": {
            "FOR": 26,
            "DEX": 14,
            "CON": 24,
            "INT": 24,
            "SAG": 18,
            "CHA": 22
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 21",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +15 au toucher, allonge 15 m. Dégâts : 28 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Ruinous Breath: 60ft cone con save on fail 63 necrotic damage, TimeWarping Breath: 60ft cone wis save on fail target's speed is 1/2 and can only take a bonus action or an action"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#c0392b"
    },
    "Dragon vert adulte": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très grand",
        "alignement": "Loyal mauvais",
        "fd": "15",
        "xp": 13000,
        "pv": "207",
        "ca": 19,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 12,
            "CON": 20,
            "INT": 18,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 22",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 22 Tranchant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +0 au toucher, portée 120 m. Dégâts : 14 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting Mind Spike (level 3), Poison Breath recharge 5-6 60ft coone 56 poison damage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#c0392b"
    },
    "Dragon vert ancien": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Loyal mauvais",
        "fd": "22",
        "xp": 41000,
        "pv": "402",
        "ca": 21,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 26,
            "DEX": 12,
            "CON": 24,
            "INT": 20,
            "SAG": 16,
            "CHA": 22
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 27",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +15 au toucher, allonge 15 m. Dégâts : 27 Tranchant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +0 au toucher, portée 120 m. Dégâts : 21 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 is casting Mind Spike (level 5), poison Breath recharge 5-6 90ft coone 77 poison damage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet blanc": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "32",
        "ca": 16,
        "vitesse": "30 m, vol 60 m, nage 30 m, escalade 15 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 14,
            "INT": 4,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Ice Walk",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 8 Tranchant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cold Breath 15ft coone 22 cold damage"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet bleu": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 17,
        "vitesse": "30 m, vol 60 m, fouissement 15 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 11 Tranchant, Lighting."
            },
            {
                "nom": "Notes de combat",
                "desc": "Lightning Breath recharges on 5-6 30ft 5ft wide line 21 lightning"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet d'argent": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Loyal bon",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 17,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 9 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cold Breath 15ft coone 18 cold damage, Paralyzing breath 15ft coone on fail incapacitated second fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Urbain"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet de bronze": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Loyal bon",
        "fd": "2",
        "xp": 450,
        "pv": "39",
        "ca": 15,
        "vitesse": "30 m, vol 60 m, nage 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Lightning Breath recharges on 5-6 40ft 5ft wide line 16 lightning, Repulsion Breath 30ft coone targets are pushed 30ft and are prone"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet de cuivre": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Chaotique bon",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 16,
        "vitesse": "30 m, vol 60 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 12,
            "INT": 14,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Breath recharges on 5-6 20ft 5ft wide line 18 acid damage, Slowing Breath 15ft coone target's speed is halved and can't take reactions, and either an action or bonus action"
            }
        ],
        "description": "",
        "environnement": [
            "Collines"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet de laiton": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Chaotique bon",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 15,
        "vitesse": "30 m, vol 60 m, fouissement 15 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharges on 5-6 20ft 5ft wide line 14 fire damage, Sleep Breath 15ft coone cause incapacitated and possibly unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet des profondeurs": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "27",
        "ca": 15,
        "vitesse": "30 m, vol 60 m, nage 30 m, fouissement 15 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [
            "Poison",
            "Psychique"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "15ft Cone on fail 7 psychic damage and frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet doré": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Loyal bon",
        "fd": "3",
        "xp": 700,
        "pv": "60",
        "ca": 17,
        "vitesse": "30 m, vol 60 m, nage 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 14,
            "SAG": 10,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 9 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharge on 5-6 15ft coone 22 fire damage, Waking Breath 15ft coone disadvantage on strength-based rolls and -2 on damage rolls"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet noir": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "33",
        "ca": 17,
        "vitesse": "30 m, vol 60 m, nage 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant, Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Breath recharges on 5-6 Dex save 15ft 5ft wide line 22 Acid"
            }
        ],
        "description": "",
        "environnement": [
            "Marais"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet rouge": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "75",
        "ca": 17,
        "vitesse": "30 m, vol 60 m, escalade 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 12 Tranchant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharge on 5-6 15ft coone 24 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet spirituel": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 16,
        "vitesse": "30 m, vol 60 m, fouissement 20 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 14,
            "INT": 14,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 1,5 m."
            },
            {
                "nom": "Notes de combat",
                "desc": "Ruinous Breath: 15ft cone con save on fail 13 necrotic damage, TimeWarping Breath: 15ft cone wis save on fail target's speed is 1/2 and can only take a bonus action or an action"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#c0392b"
    },
    "Dragonnet vert": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "38",
        "ca": 17,
        "vitesse": "30 m, vol 60 m, nage 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 12,
            "INT": 14,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 10 Tranchant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "poison Breath recharge 5-6 15ft coone 21 poison damage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#c0392b"
    },
    "Dretch": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Petit",
        "alignement": "Chaotique mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "18",
        "ca": 11,
        "vitesse": "20 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 12,
            "INT": 4,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fetid Cloud 1/day within 10 ft on fail the target is poisoned and only take an action or a bonus action also no reactions"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Drider": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "123",
        "ca": 19,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 18,
            "CON": 18,
            "INT": 12,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            },
            {
                "nom": "Marcheur de toiles",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 120 m. Dégâts : 13 Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Drow de Lolth": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Ascendance féerique",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 30/120 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Hit the ranged attack, on fail poisoned or failed by 5 or more Unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Druide": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "44",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 12,
            "SAG": 16,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 9 Contondant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 90 m. Dégâts : 10 Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Dryade": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 10,
            "INT": 14,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Speak with Beasts and Plants",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 60 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Can cast Charm Monster as part of its Akt action"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#e91e8c"
    },
    "Duodrone modron": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 30 m. Dégâts : 4 Force."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Méchanus)"
        ],
        "couleur": "#607d8b"
    },
    "Dur à cuire": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "32",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 100/400 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Défenseur d'acier": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "",
        "xp": 0,
        "pv": "5+ 5* artificer lvl",
        "ca": 0,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 14,
            "INT": 4,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Steel Bond add caster's PB to checks and saves",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : Caster's Spell atk Mod au toucher, allonge 5 m. Dégâts : 6+caster's int. Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Repair regains hp 2d8 plus caster's int."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Deflect Attack when a creature makes atk opposes dis. adv."
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#607d8b"
    },
    "Démo-chauve-souris": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Très petit",
        "alignement": "Chaotique mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "21",
        "ca": 13,
        "vitesse": "10 m, vol 40 m",
        "carac": {
            "FOR": 4,
            "DEX": 16,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 adv if target is grappled, Atk 2 on hit grappled"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#8b0000"
    },
    "Démo-chien": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Petit",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "27",
        "ca": 14,
        "vitesse": "50 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit target prone"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#8b0000"
    },
    "Démo-dragon": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "102",
        "ca": 16,
        "vitesse": "40 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 14,
            "INT": 8,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [
            "Acide",
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Baleful Presence",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 15 Perforant, Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Breath each creature in 30ft line on fail 22 acid damage"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#8b0000"
    },
    "Démon des ombres": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "66",
        "ca": 14,
        "vitesse": "30 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 16,
            "CON": 12,
            "INT": 14,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Acide",
            "Contondant",
            "Froid",
            "Feu",
            "Foudre",
            "Perforant",
            "Tranchant",
            "Tonnerre"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Déplacement incorporel",
                "desc": ""
            },
            {
                "nom": "Sensibilité à la lumière",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 16 Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Dépanneur Ghallanda": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Petit",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "78",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 16,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Effrayé"
        ],
        "sens": "Perception passive 14",
        "traits": [
            {
                "nom": "Hustle",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 20/60 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit the target is poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Déva": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Moyen",
        "alignement": "Loyal bon",
        "fd": "10",
        "xp": 5900,
        "pv": "229",
        "ca": 17,
        "vitesse": "30 m, vol 90 m (stationnaire)",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 18,
            "INT": 16,
            "SAG": 20,
            "CHA": 20
        },
        "resistances": [
            "Radiant"
        ],
        "immunites": [
            "Charmé",
            "Épuisement",
            "Effrayé"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Exalted Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 25 Contondant, Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Dévoreur d'intellect": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Très petit",
        "alignement": "Loyal mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "28",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 12,
            "INT": 14,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [
            "Psychique"
        ],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Detect Intelligence",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Devour Intellect 11 psychic damage and stunned, Steal Body target with 10 or fewer hp and incapacitated gets taken over"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Empyréen": {
        "icone": "🐉",
        "categorie": "Celestial or Fiend",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "23",
        "xp": 50000,
        "pv": "346",
        "ca": 22,
        "vitesse": "50 m, vol 50 m (stationnaire), nage 50 m",
        "carac": {
            "FOR": 30,
            "DEX": 20,
            "CON": 30,
            "INT": 20,
            "SAG": 22,
            "CHA": 26
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Nécrotique",
            "Radiant"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 23",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +17 au toucher, allonge 10 m. Dégâts : 31 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +15 au toucher, portée 600 m. Dégâts : 35 Necrotic or Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 target is stunned or take 21 more damage"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#888888"
    },
    "Espion": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1",
        "xp": 200,
        "pv": "27",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 10,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 12 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 30/120 m. Dégâts : 12 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Ettercap": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "44",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 6,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Marcheur de toiles",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit poisoned, Web Strand recharges on 5-6 a target within 30ft on fail restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#bf360c"
    },
    "Ettin": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "85",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 8,
            "CON": 16,
            "INT": 6,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé",
            "Étourdi",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit prone, Atk 2 target has disadvantage on the next attack roll"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Exécuteur Orien": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "55",
        "ca": 16,
        "vitesse": "35 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 12,
            "INT": 16,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 16 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 20/60 m. Dégâts : 16 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Lightning Cage in a 20ft sphere within 60ft on fail 13 lightining damage and cannot take reactions"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Temporal Disruption once per day when takes melee damage teleports 30ft and anyone within 10ft makes con save on fail speed is 1/2"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Familier vampire": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 15,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Vampiric Connection",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Perforant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 20/60 m. Dégâts : 12 Perforant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 and Atk 2 if target is reduced to 0 hp becomes stable but poisoned and paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Fanatique cultiste": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "44",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 13 Tranchant, Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Fantassin guerrier": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "9",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 10,
            "INT": 8,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 20/60 m. Dégâts : 4 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Fantôme": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "67",
        "ca": 13,
        "vitesse": "5 m, vol 60 m (stationnaire)",
        "carac": {
            "FOR": 6,
            "DEX": 16,
            "CON": 16,
            "INT": 12,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [
            "Acide",
            "Contondant",
            "Froid",
            "Feu",
            "Nécrotique",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Déplacement incorporel",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 21 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 max HP decrease by the damage taken, Create Specter within 10ft of dead rise as a specter"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre"
        ],
        "couleur": "#37474f"
    },
    "Faucon": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 13,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 4,
            "DEX": 16,
            "CON": 8,
            "INT": 2,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 1 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Côtier",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#5a8a3c"
    },
    "Faucon sanglant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "7",
        "ca": 12,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 14,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 9",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Does +2 damage if target is bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Côtier",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#5a8a3c"
    },
    "Feu follet": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très petit",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "27",
        "ca": 19,
        "vitesse": "5 m, vol 50 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 28,
            "CON": 10,
            "INT": 12,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [
            "Acide",
            "Contondant",
            "Froid",
            "Feu",
            "Nécrotique",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Foudre",
            "Poison",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Ephemeral",
                "desc": ""
            },
            {
                "nom": "Illumination",
                "desc": ""
            },
            {
                "nom": "Déplacement incorporel",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 11 Foudre."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Fiélon des fosses": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "20",
        "xp": 25000,
        "pv": "337",
        "ca": 21,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 26,
            "DEX": 14,
            "CON": 24,
            "INT": 22,
            "SAG": 18,
            "CHA": 24
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 20",
        "traits": [
            {
                "nom": "Diabolical Restoration",
                "desc": ""
            },
            {
                "nom": "Fear Aura",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +14 au toucher, portée 10 m. Dégâts : 26 Nécrotique."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 43 Force, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit and fail the target is poisoned can't regain hp and takes 21 Poison damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Flagelleur mental": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "99",
        "ca": 15,
        "vitesse": "30 m, vol 15 m (stationnaire)",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 18,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [
            "Psychique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 22 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 grapples on a hit and gives the stunned condition, Extract Brian A Grappled target caused 55 piercing damage and kills the target at 0 hp, Mind Blast recharge on 5-6 60ft coone 31 psychic damage and the target is stunned"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Flagelleur mental arcaniste": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "143",
        "ca": 16,
        "vitesse": "30 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 20,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Psychique",
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 27 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 5 m. Dégâts : 120 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on a hit target can teleport 30ft and if reduced to 0 the target dies, Mind Burst recharge 5-6 40ft emanation 41 psychic and the target is stunned"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast Shield"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Flizzlebin": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Petit",
        "alignement": "Chaotique bon",
        "fd": "1",
        "xp": 200,
        "pv": "38",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 14,
            "INT": 16,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Ventriloquist",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 10 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Vanishing Trick 3/day is invisible for 10 min"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Distracting Glitter when hit increase AC by 2 possibly miss"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#455a64"
    },
    "Flumph": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Petit",
        "alignement": "Loyal bon",
        "fd": "1/8",
        "xp": 25,
        "pv": "7",
        "ca": 12,
        "vitesse": "5 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 10,
            "INT": 14,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Within 15ft poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Fomorien": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "172",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 8,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 15 m. Dégâts : 24 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Warping Hex within 120 ft on fail 21 psychic damage and 1 exhaustion level"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Fouetteur kuo-toa": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "45",
        "ca": 11,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Vision parfaite 30 m, Perception passive 16",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 10 m. Dégâts : 9 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 60 m. Dégâts : 9 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on a hit target is grappled"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Galeb Duhr": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "123",
        "ca": 16,
        "vitesse": "15 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 20,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception des vibrations 60 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 12 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 charge attack if moved 20ft+ extra 7 damage and prone, Animate Boulders 1/day creates one or two Galeb Duhr"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#2980b9"
    },
    "Gangrène aiguille": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "16",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 12,
            "INT": 4,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [
            "Assourdi"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 30/60 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Gangrène arboricole": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Très grand",
        "alignement": "Neutre mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "115",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 6,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [
            "Assourdi"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 15 m. Dégâts : 16 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Grasping Root within 15ft on fail pulled 10ft grappled and takes 13 bludgeoning damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Gangrène brindille": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/8",
        "xp": 25,
        "pv": "7",
        "ca": 14,
        "vitesse": "20 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 10,
            "INT": 4,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [
            "Assourdi"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Gangrène de Gulthias": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Gigantesque",
        "alignement": "Neutre",
        "fd": "16",
        "xp": 15000,
        "pv": "264",
        "ca": 20,
        "vitesse": "50 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 22,
            "INT": 10,
            "SAG": 18,
            "CHA": 12
        },
        "resistances": [
            "Feu",
            "Nécrotique"
        ],
        "immunites": [
            "Assourdi"
        ],
        "sens": "Vision aveugle 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Blight Seeds",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 10 m. Dégâts : 25 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 60/180 m. Dégâts : 20 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Life-Drain within 30ft on fail 14 necrotic damage grappled restrained 14 damage every round max hp decreases by 14 and the blight gains 14"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Gangrène vigne": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "19",
        "ca": 12,
        "vitesse": "20 m",
        "carac": {
            "FOR": 14,
            "DEX": 8,
            "CON": 14,
            "INT": 4,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [
            "Assourdi"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 10 m. Dégâts : 6 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grappled and takes 4 bludgeoning every round and the vine cannot attack, Entangling Plants recharges 5-6 cast entangle"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Gangrène vigne enchevêtrante": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "19",
        "ca": 12,
        "vitesse": "20 m",
        "carac": {
            "FOR": 14,
            "DEX": 8,
            "CON": 14,
            "INT": 4,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [
            "Assourdi"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 10 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grappled, Entangling Plants recharges 5-6 each enemy in a 10ft radius sphere on fail restrained until blight's next turn"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Garde": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "11",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 20/60 m. Dégâts : 4 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Gardien Kundarak": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "82",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 16,
            "INT": 16,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 13 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit target is prone and if already prone deals an extra 7 force, Shackling Glyph on fail target is grappled and restrained"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protective Magic cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Gardien vampire": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "190",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 18,
            "INT": 10,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [
            "Épuisement",
            "Effrayé"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 20",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Vampire Weakness",
                "desc": ""
            },
            {
                "nom": "Forbiddance",
                "desc": ""
            },
            {
                "nom": "Running Water",
                "desc": ""
            },
            {
                "nom": "Stake to the Heart",
                "desc": ""
            },
            {
                "nom": "Sunlight",
                "desc": ""
            },
            {
                "nom": "Immobile Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 21 Slashin, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grabbled, Bite one creature within 5ft on fail 14 piercing and necrotic, Guardian's Command cast compulsion"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Resillent Flesh when hit reduce damage by 11"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Gardien-bouclier": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "7",
        "xp": 2900,
        "pv": "142",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 8,
            "CON": 18,
            "INT": 6,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Bound",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            },
            {
                "nom": "Spell Storing",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 18 Contondant, Force."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protection on hit +5 AC"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Gargouille": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "67",
        "ca": 15,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 16,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#2980b9"
    },
    "Gelée ocre": {
        "icone": "🟢",
        "categorie": "Vase",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 8,
        "vitesse": "20 m, escalade 20 m",
        "carac": {
            "FOR": 14,
            "DEX": 6,
            "CON": 14,
            "INT": 2,
            "SAG": 6,
            "CHA": 0
        },
        "resistances": [
            "Acide"
        ],
        "immunites": [
            "Foudre",
            "Tranchant",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Agrippé"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Amorphous",
                "desc": ""
            },
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 12 Acide."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Split it becomes bloddied or hit by lightning or slashing the pudding splits"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#827717"
    },
    "Ghast": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "36",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Stench",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 16 Perforant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on hit and fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Ghast invocateur de tombes": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "97",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 14,
            "INT": 18,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Stench",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 13 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Nécrotique."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 120 m. Dégâts : 15 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit paralyzed, Akt 2 on hit Frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Githyanki dracomancien": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "16",
        "xp": 15000,
        "pv": "255",
        "ca": 18,
        "vitesse": "30 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 18,
            "INT": 20,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 29 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 120 m. Dégâts : 29 Tranchant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 gives the frightened condition, Dragon's Breath 90ft coone 54 fire and force damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Astral)"
        ],
        "couleur": "#6b3fa0"
    },
    "Glabrezu": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "189",
        "ca": 17,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 20,
            "INT": 18,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 16 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 grapples on hit, Pummel a target grappled and failed 15 bludgeoning damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Gladiateur": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "112",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 20/60 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Shield Bash within 5ft on fail 9 bludgeoning damage and prone"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry hit by  melee +3 to AC"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Gnoll crochet de Yeenoghu": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "71",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 13 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 7 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#8b0000"
    },
    "Gnoll démoniaque": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "135",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 14,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 20 Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 60 m. Dégâts : 20 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Hunger of Yeenoghu recharges on 5-6 30ft cube of darkness difficult terrain and on fail 28 necrotic damage and someone get 10 temp hp"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#8b0000"
    },
    "Gnoll guerrier": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "27",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 10,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 150/600 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie",
            "Collines"
        ],
        "couleur": "#8b0000"
    },
    "Gobelin ensorceleur": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Petit",
        "alignement": "Chaotique neutre",
        "fd": "3",
        "xp": 700,
        "pv": "45",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 16,
            "CON": 12,
            "INT": 16,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 12 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Can spell cast as part of the Akt"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "on fail save target misses it"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines",
            "Plans (Achéron)",
            "Féerie Sauvage",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Gobelin guerrier": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Petit",
        "alignement": "Chaotique neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "10",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 8,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 80/320 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 and Akt 2 does +2 damage if they have advantage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines",
            "Plans (Achéron)",
            "Féerie Sauvage",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Golem d'argile": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "9",
        "xp": 5000,
        "pv": "123",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 8,
            "CON": 18,
            "INT": 2,
            "SAG": 8,
            "CHA": 0
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Acide, Poison",
            "Psychique",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Acid Absorption",
                "desc": ""
            },
            {
                "nom": "Beserk",
                "desc": ""
            },
            {
                "nom": "Immutable Form shape-shift",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 16 Contondant, Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Makes a third Akt if it bonus action hasten"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Golem de chair": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "127",
        "ca": 9,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 8,
            "CON": 18,
            "INT": 6,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Foudre",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Aversion to Fire",
                "desc": ""
            },
            {
                "nom": "Frénésie",
                "desc": ""
            },
            {
                "nom": "Forme immuable",
                "desc": ""
            },
            {
                "nom": "Lightning Absorption",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 17 Contondant, Foudre."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Golem de fer": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "16",
        "xp": 15000,
        "pv": "252",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 24,
            "DEX": 8,
            "CON": 20,
            "INT": 2,
            "SAG": 10,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Psychique",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Fire Absorption",
                "desc": ""
            },
            {
                "nom": "Forme immuable",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 10 m. Dégâts : 30 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 120 m. Dégâts : 36 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Poison Breath recharges on 6 on 60ft cone on fail 55 poison"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Golem de pierre": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "10",
        "xp": 5900,
        "pv": "220",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 22,
            "DEX": 8,
            "CON": 20,
            "INT": 2,
            "SAG": 10,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Forme immuable",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 24 Contondant, Force."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Gorgone": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "114",
        "ca": 19,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 10,
            "CON": 18,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Épuisement",
            "Pétrifié"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 charge attack if move atleast 20ft prone, Petrifying Breath recharges on 5-6 30ft cone on fail restrained second fail petrified"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#607d8b"
    },
    "Gorgone d'airain": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "9",
        "xp": 5000,
        "pv": "161",
        "ca": 19,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 18,
            "INT": 2,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Épuisement",
            "Pétrifié"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 20",
        "traits": [
            {
                "nom": "Flame Aura",
                "desc": ""
            },
            {
                "nom": "Illumination",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 21 Perforant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Smelting Charge recharges on 5-6 moves without taking opportunity attack and move through other creature's spaces on fail 26 Piercing and Fire damage and either grappled or prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#607d8b"
    },
    "Goristro": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "19",
        "xp": 22000,
        "pv": "310",
        "ca": 19,
        "vitesse": "50 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 24,
            "INT": 6,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Monstre de siège",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 10 m. Dégâts : 40 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 10 m. Dégâts : 29 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit target is pushed 20ft and is prone"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Goule": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 10,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 8 Perforant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on hit and fail Paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Goule lacédon": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 12,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 10,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Froid."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit speed decrease by 5, Akt 2 on hit and fail and paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Grell": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "55",
        "ca": 12,
        "vitesse": "10 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 12,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Aveuglé",
            "À terre"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 10 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 grapples and on failed save target is poisoned and paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Grenouille": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "11",
        "ca": 10,
        "vitesse": "50 m",
        "carac": {
            "FOR": 0,
            "DEX": 12,
            "CON": 8,
            "INT": 0,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 11",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Saut sur place",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais"
        ],
        "couleur": "#5a8a3c"
    },
    "Grenouille géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "18",
        "ca": 11,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 10,
            "INT": 2,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Grapples on Akt.1, Can swallow a target and they become blinded and restrained and gives 5 acid damage."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais"
        ],
        "couleur": "#5a8a3c"
    },
    "Grick": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "54",
        "ca": 14,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 14,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 grapples"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Grick ancien": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "7",
        "xp": 2900,
        "pv": "135",
        "ca": 18,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 14,
            "INT": 4,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 22 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 15 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 makes prone, Akt 3 grapples"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Griffe rampante": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très petit",
        "alignement": "Neutre mauvais",
        "fd": "0",
        "xp": 10,
        "pv": "20",
        "ca": 15,
        "vitesse": "20 m, escalade 20 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 10,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Neutralisé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 2 Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Griffon": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "59",
        "ca": 12,
        "vitesse": "30 m, vol 80 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 2,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit grappled"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Côtier",
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Grimlock": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 11,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 8,
            "SAG": 8,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Contondant, Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Guerrier d'élite drow de Lolth": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "71",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 14,
            "INT": 10,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 14",
        "traits": [
            {
                "nom": "Ascendance féerique",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 21 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30/120 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Hit the ranged attack, on fail poisoned and unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Guerrier githyanki": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "49",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 12,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 16 Tranchant, Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Astral)"
        ],
        "couleur": "#6b3fa0"
    },
    "Guerrier sahuagin": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 12,
        "vitesse": "30 m, nage 40 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 12,
            "INT": 12,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [
            "Acide",
            "Froid"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Frénésie sanguinaire",
                "desc": ""
            },
            {
                "nom": "Limited Amphibiousness",
                "desc": ""
            },
            {
                "nom": "Shark Telepathy",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#8b0000"
    },
    "Guerrier vétéran": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 100/400 m. Dégâts : 12 Perforant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry when hit by a melee +2 to AC"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Guêpe géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 13,
        "vitesse": "10 m, vol 50 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 10,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 10 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Géant de Lorwyn": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Chaotique neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "115",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 12,
            "CON": 18,
            "INT": 8,
            "SAG": 16,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 15 m. Dégâts : 21 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 60/240 m. Dégâts : 14 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#795548"
    },
    "Géant de pierre": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "7",
        "xp": 2900,
        "pv": "126",
        "ca": 17,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 20,
            "INT": 10,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 15 m. Dégâts : 22 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 60/240 m. Dégâts : 15 Contondant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Deflect Missile recharges on 5-6 when hit by a ranged attack reduce the damage by 11 if reduced to 0 redirect the attack to target on fail 11 force damage"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Géant de Shadowmoor": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "172",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 20,
            "INT": 6,
            "SAG": 18,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 15 m. Dégâts : 17 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 60/240 m. Dégâts : 13 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Wild Magic Cataclysm creatures in a 20ft sphere within 120ft on fail 28 damage either acid, fire, lightning, or thunder half on fail"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#795548"
    },
    "Géant des collines": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "105",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 8,
            "CON": 18,
            "INT": 4,
            "SAG": 8,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 18 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 60/240 m. Dégâts : 16 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit prone, Atk 2 on hit poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Collines"
        ],
        "couleur": "#795548"
    },
    "Géant des nuages": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "9",
        "xp": 5000,
        "pv": "200",
        "ca": 14,
        "vitesse": "40 m, vol 20 m (stationnaire)",
        "carac": {
            "FOR": 26,
            "DEX": 10,
            "CON": 22,
            "INT": 12,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 21",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 10 m. Dégâts : 28 Contondant, Tonnerre."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 240 m. Dégâts : 18 Tonnerre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne"
        ],
        "couleur": "#795548"
    },
    "Géant des tempêtes": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Chaotique bon",
        "fd": "13",
        "xp": 10000,
        "pv": "230",
        "ca": 16,
        "vitesse": "50 m, vol 25 m (stationnaire), nage 50 m",
        "carac": {
            "FOR": 28,
            "DEX": 14,
            "CON": 20,
            "INT": 16,
            "SAG": 20,
            "CHA": 18
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Foudre",
            "Tonnerre"
        ],
        "sens": "Vision dans le noir 120 m, Vision parfaite 30 m, Perception passive 20",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 36 Tranchant, Foudre."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +14 au toucher, portée 500 m. Dégâts : 22 Foudre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit blinded and deafened, Lightning Storm recharges on 5-6 10ft radius and 40ft high cylinder on fail 55 lightning damage"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#795548"
    },
    "Géant du feu": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Loyal mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "162",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 24,
            "DEX": 8,
            "CON": 22,
            "INT": 10,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 31 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +11 au toucher, portée 60/240 m. Dégâts : 27 Contondant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit pushed 15ft and has disadvantage"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Géant du givre": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Très grand",
        "alignement": "Neutre mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "149",
        "ca": 15,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 8,
            "CON": 20,
            "INT": 8,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 28 Tranchant, Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 150/600 m. Dégâts : 24 Perforant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit reduce speed by 10ft"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Montagne"
        ],
        "couleur": "#795548"
    },
    "Harpie": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "38",
        "ca": 11,
        "vitesse": "20 m, vol 40 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Luring Song within 300ft on fail charmed and incapacitated moves toward the harpy"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Forêt",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Hezrou": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "157",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 20,
            "INT": 4,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Stench",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Tranchant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Hibou": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 11,
        "vitesse": "5 m, vol 60 m",
        "carac": {
            "FOR": 2,
            "DEX": 12,
            "CON": 8,
            "INT": 2,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 1 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Forêt",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Hibou géant": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "19",
        "ca": 12,
        "vitesse": "5 m, vol 60 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [
            "Nécrotique",
            "Radiant"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Forêt",
            "Collines"
        ],
        "couleur": "#d4a017"
    },
    "Hibours": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "3",
        "xp": 700,
        "pv": "59",
        "ca": 13,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 12,
            "CON": 16,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#bf360c"
    },
    "Hibours primordial": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "7",
        "xp": 2900,
        "pv": "126",
        "ca": 16,
        "vitesse": "40 m, vol 5 m, escalade 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 18,
            "INT": 8,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 18",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 15 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if moved 20+ on hit +9 slashing damage and prone, Screech recharges 5-6 within 30ft on fail 27 thunder damage and incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#bf360c"
    },
    "Hippocampe": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 12,
        "vitesse": "5 m, nage 20 m",
        "carac": {
            "FOR": 0,
            "DEX": 12,
            "CON": 8,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [
            {
                "nom": "Water Breathing",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +0 au toucher, allonge 0 m. Dégâts : 0 ."
            },
            {
                "nom": "Notes de combat",
                "desc": "Dash without provoking opportunity attacks"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Hippocampe géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "16",
        "ca": 14,
        "vitesse": "5 m, nage 40 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 10,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If charging, 11 damage"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Hippogriffe": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "26",
        "ca": 11,
        "vitesse": "40 m, vol 60 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Hippopotame": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "4",
        "xp": 1100,
        "pv": "82",
        "ca": 14,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 20,
            "DEX": 6,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [
            {
                "nom": "Apnée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 16 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Marais"
        ],
        "couleur": "#5a8a3c"
    },
    "Hiérophante cultiste": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "144",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 18,
            "CON": 18,
            "INT": 12,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 30 Tranchant, Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 120 m. Dégâts : 31 Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Hobgobelin guerrier": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "11",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 12 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 150/600 m. Dégâts : 12 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne",
            "Plans (Achéron)",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Homme-lézard géomancien": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "33",
        "ca": 13,
        "vitesse": "30 m, nage 30 m, fouissement 20 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 60 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Hail of Stone recharges on 5-6 within 20ft radius and 40ft high cylinder on fail 15 bludgeoning and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais"
        ],
        "couleur": "#2980b9"
    },
    "Homme-poisson dompteur de vagues": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "97",
        "ca": 14,
        "vitesse": "10 m, nage 40 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 14,
            "INT": 12,
            "SAG": 18,
            "CHA": 14
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [],
        "sens": "Perception passive 17",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 20 Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 60 m. Dégâts : 20 Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 or Atk 2 on hit prone"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Watery Rebuke comes within 5ft on fail 14 cold damage and pushed 30ft"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#2980b9"
    },
    "Homme-poisson tirailleur": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "11",
        "ca": 11,
        "vitesse": "10 m, nage 40 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 5 Perforant, Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +2 au toucher, portée 20/60 m. Dégâts : 5 Perforant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 or Atk 2 on hit speed decreases by 10ft"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#2980b9"
    },
    "Homoncule": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Très petit",
        "alignement": "Neutre",
        "fd": "0",
        "xp": 10,
        "pv": "4",
        "ca": 13,
        "vitesse": "20 m, vol 40 m",
        "carac": {
            "FOR": 4,
            "DEX": 14,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Telepathic Bond",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit and fail poisoned fail by 5 or more and unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Homoncule serviteur": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Très petit",
        "alignement": "Neutre",
        "fd": "",
        "xp": 0,
        "pv": "5+5*the level",
        "ca": 13,
        "vitesse": "20 m, vol 30 m",
        "carac": {
            "FOR": 4,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            },
            {
                "nom": "Magic bond add the spell's level to checks and saves",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : Casters attack mod. au toucher, allonge 5 m. Dégâts : 3 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : Casters attack mod. au toucher, portée 30 m. Dégâts : 3 Force."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Channel Magic deliver a touch spell through it"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#607d8b"
    },
    "Horreur heaumée": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "67",
        "ca": 20,
        "vitesse": "30 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "Étourdi"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Spell Immunity",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 13 Tranchant, Force."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Horreur à crochets": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "75",
        "ca": 15,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 14,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 11 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Hulk des ombres": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "93",
        "ca": 18,
        "vitesse": "30 m, fouissement 20 m",
        "carac": {
            "FOR": 20,
            "DEX": 12,
            "CON": 16,
            "INT": 8,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception des vibrations 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Fouisseur",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 12 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Hydre": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "8",
        "xp": 3900,
        "pv": "184",
        "ca": 15,
        "vitesse": "40 m, nage 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 12,
            "CON": 20,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé",
            "Étourdi",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 16",
        "traits": [
            {
                "nom": "Apnée",
                "desc": ""
            },
            {
                "nom": "Multiple Heads",
                "desc": ""
            },
            {
                "nom": "Creative Heads",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 10 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 it gets another attack for every head"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Marais"
        ],
        "couleur": "#bf360c"
    },
    "Hyène": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "5",
        "ca": 11,
        "vitesse": "50 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 3 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Hyène géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "45",
        "ca": 12,
        "vitesse": "50 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Héritier des Trois Morts": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "16",
        "xp": 15000,
        "pv": "221",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 18,
            "INT": 18,
            "SAG": 20,
            "CHA": 24
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Culling Aura",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 5 m. Dégâts : 25 Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 120 m. Dégâts : 21 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Bloodied creatures in 30ft on fail can't regain hit points"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Héritier Lyrandar": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "60",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 12,
            "INT": 12,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 20 Foudre, Tonnerre."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 30 m. Dégâts : 20 Foudre, Tonnerre."
            },
            {
                "nom": "Notes de combat",
                "desc": "On a crit the target is also deafened"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast feather fall"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Héritier Vadalis": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "52",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 14,
            "INT": 10,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 9 Tranchant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 9 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit target cannot benefit from being invisible"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Icône fiélonne": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Petit",
        "alignement": "Loyal mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [
            "Feu",
            "Poison"
        ],
        "immunites": [
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fiery Eruption creatures within 5ft on fail 7 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Incarnation de la fugacité": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "7",
        "xp": 2900,
        "pv": "142",
        "ca": 16,
        "vitesse": "40 m, nage 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 20,
            "CON": 16,
            "INT": 10,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Ephemeral Movement",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 60/120 m. Dégâts : 15 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit speed reduced by 10 ft, Spectral Stampede moves 80ft in a straight line each creature on fail save take 18 force damage on if creatureis a size smalerl is prone half if saved"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Incarnation de la vivacité": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "230",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 16,
            "CON": 20,
            "INT": 10,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [
            "Radiant"
        ],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 20 m. Dégâts : 18 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Radiant Blast creature within 20ft on fail save takes 14 radaint half on save,"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Incube": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "66",
        "ca": 15,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 8,
            "DEX": 16,
            "CON": 12,
            "INT": 14,
            "SAG": 12,
            "CHA": 20
        },
        "resistances": [
            "Froid",
            "Feu",
            "Poison",
            "Psychique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Succubus Form",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 On hit the target is cursed and can't get the benefits of a short rest"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs",
            "Urbain"
        ],
        "couleur": "#8b0000"
    },
    "Infiltrateur des Ténèbres Rêveuses": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "104",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 14,
            "INT": 18,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [
            "Psychique"
        ],
        "immunites": [],
        "sens": "Vision parfaite 30 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30 m. Dégâts : 14 Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Infiltrateur yuan-ti": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "40",
        "ca": 11,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 10,
            "INT": 12,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 120 m. Dégâts : 9 Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Inquisiteur Medani": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "45",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 14,
            "INT": 14,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit target is prone and if already prone deals an extra 7 radiant, Inquisitive eye within 60ft on fail 10 psychic damage and the monster has adv. on atks on it and knows where it is at."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Spontaneous Barrier when an ally is hit it adds 2 to its AC possibly missing"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Iota empyréen": {
        "icone": "🐉",
        "categorie": "Celestial or Fiend",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 13,
        "vitesse": "5 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 14,
            "CON": 10,
            "INT": 14,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "À terre"
        ],
        "sens": "Vision parfaite 30 m, Perception passive 15",
        "traits": [
            {
                "nom": "Incorporeal",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Necrotic or Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30 m. Dégâts : 7 Necrotic or Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#888888"
    },
    "Jeune dragon blanc": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "123",
        "ca": 17,
        "vitesse": "40 m, vol 80 m, nage 40 m, fouissement 20 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 18,
            "INT": 6,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Ice Walk",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 11 Tranchant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cold Breath 30ft coone 40 cold damage"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon bleu": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "152",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, fouissement 20 m",
        "carac": {
            "FOR": 20,
            "DEX": 10,
            "CON": 18,
            "INT": 14,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 19",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 17 Tranchant, Lighting."
            },
            {
                "nom": "Notes de combat",
                "desc": "Lightning Breath recharges on 5-6 60ft 5ft wide line 55 lightning"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon d'argent": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Loyal bon",
        "fd": "9",
        "xp": 5000,
        "pv": "168",
        "ca": 18,
        "vitesse": "40 m, vol 80 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 14,
            "SAG": 10,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 15 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cold Breath 30ft coone 49 cold damage, Paralyzing breath 30ft coone on fail causes incapacitated second fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Urbain"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon de bronze": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Loyal bon",
        "fd": "8",
        "xp": 3900,
        "pv": "142",
        "ca": 17,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 10,
            "CON": 18,
            "INT": 14,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Foudre"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 16 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Lightning Breath recharges on 5-6 60ft 5ft wide line 49 lightning, Repulsion Breath 30ft coone targets are pushed 40ft and are prone"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon de cuivre": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Chaotique bon",
        "fd": "7",
        "xp": 2900,
        "pv": "119",
        "ca": 17,
        "vitesse": "40 m, vol 80 m, escalade 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 16,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 15 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Breath recharges on 5-6 40ft 5ft wide line 40 acid damage, Slowing Breath 30ft coone target's speed is halved and can't take reactions, and either an action or bonus action"
            }
        ],
        "description": "",
        "environnement": [
            "Collines"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon de laiton": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Chaotique bon",
        "fd": "6",
        "xp": 2300,
        "pv": "110",
        "ca": 17,
        "vitesse": "40 m, vol 80 m, fouissement 20 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 15 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharges on 5-6 40ft 5ft wide line 38 fire damage, Sleep Breath 30ft coone cause incapacitated and possibly unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon des profondeurs": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "93",
        "ca": 16,
        "vitesse": "40 m, vol 80 m, nage 40 m, fouissement 20 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Poison",
            "Psychique"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 150 m, Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 14 Tranchant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "30ft Cone on fail 22 psychic damage and frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon doré": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Loyal bon",
        "fd": "10",
        "xp": 5900,
        "pv": "178",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 20,
            "INT": 16,
            "SAG": 12,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 17 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharge on 5-6 30ft coone 55 fire damage, Waking Breath 30ft coone disadvantage on strength-based rolls and -3 on damage rolls"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon féerique": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très petit",
        "alignement": "Chaotique bon",
        "fd": "1",
        "xp": 200,
        "pv": "21",
        "ca": 13,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 2,
            "DEX": 16,
            "CON": 12,
            "INT": 12,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Perforant, Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Euphoria Breath recharge on 5-6 15ft coone and incapacitated and moves in random directions"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon noir": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "127",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Acide"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 12 Tranchant, Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Acid Breath recharges on 5-6 Dex save 30ft 5ft wide line 49 Acid"
            }
        ],
        "description": "",
        "environnement": [
            "Marais"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon rouge": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "10",
        "xp": 5900,
        "pv": "178",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, escalade 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 14,
            "SAG": 10,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 16 Tranchant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharge on 5-6 30ft coone 56 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon spirituel": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "8",
        "xp": 3900,
        "pv": "152",
        "ca": 17,
        "vitesse": "40 m, vol 80 m, fouissement 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 18,
            "INT": 16,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Ruinous Breath: 30ft cone con save on fail 36 necrotic damage, TimeWarping Breath: 30ft cone wis save on fail target's speed is 1/2 and can only take a bonus action or an action"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#c0392b"
    },
    "Jeune dragon vert": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "136",
        "ca": 18,
        "vitesse": "40 m, vol 80 m, nage 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 16,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 30 m, Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 18 Tranchant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "poison Breath recharge 5-6 30ft coone 42 poison damage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#c0392b"
    },
    "Jeune phaerimm": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 12,
        "vitesse": "10 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 14,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 3 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#6b3fa0"
    },
    "Jeune remorhaz": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "93",
        "ca": 14,
        "vitesse": "30 m, fouissement 20 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Froid",
            "Feu"
        ],
        "sens": "Vision dans le noir 60 m, Perception des vibrations 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Heat Aura",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 28 Perforant, Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#bf360c"
    },
    "Karas Chembryl": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "104",
        "ca": 17,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 10,
            "DEX": 20,
            "CON": 12,
            "INT": 18,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Poison",
            "Psychique"
        ],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 18",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 14 Perforant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 5 m. Dégâts : 14 Perforant, Nécrotique."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit of atk 3 frightened and takes extra 10 phy damage if remains frightened"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Kenku": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Mimétisme",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 6 Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Feuilleombre)",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Kobold ailé": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Petit",
        "alignement": "Neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "10",
        "ca": 15,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 6,
            "DEX": 16,
            "CON": 8,
            "INT": 8,
            "SAG": 6,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30 m. Dégâts : 6 Acide, Froid, Feu, Foudre, or Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Côtier",
            "Désert",
            "Forêt",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#c0392b"
    },
    "Kobold guerrier": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Petit",
        "alignement": "Neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "7",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 8,
            "INT": 8,
            "SAG": 6,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 20/60 m. Dégâts : 4 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Côtier",
            "Désert",
            "Forêt",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#c0392b"
    },
    "Korex": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 14,
            "INT": 8,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Sewer Speech",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 15 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit poisoned, Entrancing Pipes one creature on fail 14 psychic damage and charmed"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#455a64"
    },
    "Kraken": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Gigantesque",
        "alignement": "Chaotique mauvais",
        "fd": "23",
        "xp": 50000,
        "pv": "481",
        "ca": 18,
        "vitesse": "30 m, nage 120 m",
        "carac": {
            "FOR": 30,
            "DEX": 10,
            "CON": 26,
            "INT": 22,
            "SAG": 18,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Froid",
            "Foudre",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Entravé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 21",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Monstre de siège",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +17 au toucher, allonge 30 m. Dégâts : 24 ."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fling throws grappled target 60ft on fail the thrown target and each creature in the throne space 18 bludgeoning, Lightning Strike within 120ft on fail 33 lightning damage, Swallow a grappled target on fail 23 piercing damage not grappled but restrained  total cover and 24 Acid damage on every round"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#bf360c"
    },
    "Kuo-toa": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "18",
        "ca": 13,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Vision parfaite 30 m, Perception passive 14",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 20/60 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Sticky Net 15ft range restrained on fail saved"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Grappled Condition on missed Akt and failed save DC 11"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Lame-venin vulkoori": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "27",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Ascendance féerique",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 30/120 m. Dégâts : 7 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Lamie": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "97",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 14,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 14 Tranchant, Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Within 5ft on fail 13 psychic damage and cursed charmed and poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#8b0000"
    },
    "Larve": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "0",
        "xp": 10,
        "pv": "9",
        "ca": 9,
        "vitesse": "20 m",
        "carac": {
            "FOR": 8,
            "DEX": 8,
            "CON": 10,
            "INT": 6,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +1 au toucher, allonge 5 m. Dégâts : 1 Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs"
        ],
        "couleur": "#8b0000"
    },
    "Lestes": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "67",
        "ca": 16,
        "vitesse": "60 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 16,
            "INT": 8,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Épuisement",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 80/320 m. Dégâts : 8 Perforant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry: when hit add 2 to ac"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Liche": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "21",
        "xp": 33000,
        "pv": "315",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 28,
            "INT": 20,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Spirit Jar",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 5 m. Dégâts : 31 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 120 m. Dégâts : 31 Force."
            },
            {
                "nom": "Attaque 3",
                "desc": "Attaque : +12 au toucher. Dégâts : 15 Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on hit paralyzed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protective Magic cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Licorne": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Loyal bon",
        "fd": "5",
        "xp": 1800,
        "pv": "97",
        "ca": 12,
        "vitesse": "50 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 10,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 11 Contondant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 9 Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#d4a017"
    },
    "Lion": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 12,
        "vitesse": "50 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Pact Tactics",
                "desc": ""
            },
            {
                "nom": "Saut en course",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Wis. save to cause fear"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#5a8a3c"
    },
    "Loup": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "19",
        "ca": 11,
        "vitesse": "60 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Gives the prone condition"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Loup des neiges": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "75",
        "ca": 13,
        "vitesse": "50 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 14,
            "INT": 6,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit prone, Cold Breath 15ft cone on fail 18 cold damage"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#bf360c"
    },
    "Loup terrible": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 14,
        "vitesse": "50 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Gives prone condition"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Loup-garou": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen ou Petit",
        "alignement": "Chaotique mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "71",
        "ca": 15,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Tranchant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 150/600 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail cursed if target drops to 0hp it becomes a werewolf"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Collines"
        ],
        "couleur": "#bf360c"
    },
    "Lutin": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Très petit",
        "alignement": "Neutre bon",
        "fd": "1/4",
        "xp": 50,
        "pv": "10",
        "ca": 15,
        "vitesse": "10 m, vol 40 m",
        "carac": {
            "FOR": 2,
            "DEX": 18,
            "CON": 10,
            "INT": 14,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 40/160 m. Dégâts : 1 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "The second attack is a ranged attack that charms creatures, knows creatures emotions and alignment, Invisibility"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Lémure": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "0",
        "xp": 10,
        "pv": "9",
        "ca": 9,
        "vitesse": "20 m",
        "carac": {
            "FOR": 10,
            "DEX": 4,
            "CON": 10,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Hellish Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 2 Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Lézard": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "2",
        "ca": 10,
        "vitesse": "20 m, escalade 20 m",
        "carac": {
            "FOR": 2,
            "DEX": 10,
            "CON": 10,
            "INT": 0,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 9",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Forêt",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#5a8a3c"
    },
    "Lézard géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "19",
        "ca": 12,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Spider climb",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Forêt",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#5a8a3c"
    },
    "Mage": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "81",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 10,
            "INT": 16,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 16 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 120 m. Dégâts : 16 Force."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protective Magic cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Mage drow de Lolth": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "81",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 10,
            "INT": 16,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 14",
        "traits": [
            {
                "nom": "Ascendance féerique",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 21 Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 120 m. Dégâts : 21 Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Mage sauvage noggle": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Petit",
        "alignement": "Chaotique neutre",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 14,
            "INT": 10,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Bloodied Wild Magic",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Contondant, Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 6 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit minus 1d4"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Magen chaudron": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "4",
        "xp": 1100,
        "pv": "67",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Acide",
            "Poison",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Perception passive 14",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 15 m. Dégâts : 13 Contondant, Acide."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 60 m. Dégâts : 13 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit is medium or smaller creature is grappled"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Magen terrien": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "8",
        "xp": 3900,
        "pv": "121",
        "ca": 21,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 12,
            "INT": 10,
            "SAG": 18,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Tonnerre",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Perception passive 17",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 29 Contondant, Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 60 m. Dégâts : 28 Tonnerre."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Magen vircos": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "6",
        "xp": 2300,
        "pv": "120",
        "ca": 21,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Perception passive 16",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 21 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 60 m. Dégâts : 21 Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#607d8b"
    },
    "Magmin": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Petit",
        "alignement": "Chaotique neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "13",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 12,
            "INT": 8,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit target starts burning"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Élémentaire du Feu)"
        ],
        "couleur": "#2980b9"
    },
    "Malison yuan-ti (type 1)": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "66",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 14,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 120 m. Dégâts : 12 Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Malison yuan-ti (type 2)": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "66",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 14,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 14 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Malison yuan-ti (type 3)": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "66",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 14,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 120 m. Dégâts : 12 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Constrict a target within 5ft on fail 21 Bludgeoning damage grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Mammouth": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "6",
        "xp": 2300,
        "pv": "126",
        "ca": 13,
        "vitesse": "50 m",
        "carac": {
            "FOR": 24,
            "DEX": 8,
            "CON": 20,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt. gives the prone condition"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#5a8a3c"
    },
    "Manshoon": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "214",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 14,
            "INT": 22,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Psychique"
        ],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 5 m. Dégâts : 32 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +11 au toucher, portée 120 m. Dégâts : 32 Force."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Manteau des ténèbres": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 11,
        "vitesse": "10 m, vol 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 attaches if it had advantage the target is blinded and is suffocating, Creates magica darkness in a 15ft emanation"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Manticore": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "68",
        "ca": 14,
        "vitesse": "30 m, vol 50 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 16,
            "INT": 6,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 100/200 m. Dégâts : 7 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Côtier",
            "Prairie",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Manès": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Petit",
        "alignement": "Chaotique mauvais",
        "fd": "1/8",
        "xp": 25,
        "pv": "9",
        "ca": 9,
        "vitesse": "20 m",
        "carac": {
            "FOR": 10,
            "DEX": 8,
            "CON": 12,
            "INT": 2,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 5 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Maraudeur Tarkanan": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Chaotique mauvais",
        "fd": "11",
        "xp": 7200,
        "pv": "247",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 20,
            "INT": 16,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if have adv. plus 21 force damage"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Marcheur des ombres umbragen": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "9",
        "xp": 5000,
        "pv": "162",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Ascendance féerique",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 14 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 120 m. Dégâts : 14 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Shadow Cowl a target within 120ft on fail 14 necrotic damage and blinded"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Marid": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Chaotique neutre",
        "fd": "11",
        "xp": 7200,
        "pv": "229",
        "ca": 17,
        "vitesse": "30 m, vol 60 m, nage 90 m",
        "carac": {
            "FOR": 22,
            "DEX": 12,
            "CON": 26,
            "INT": 18,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [
            "Acide",
            "Froid",
            "Foudre"
        ],
        "immunites": [],
        "sens": "Vision aveugle 30ft m, Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Elemental Restoration",
                "desc": ""
            },
            {
                "nom": "Wishes",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 15 m. Dégâts : 24 Tranchant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Water Jet 60ft long 10ft wide line on fail 31 cold damage pushed 20ft and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Plans (Plan Élémentaire de l'Eau)",
            "Sous-marin"
        ],
        "couleur": "#2980b9"
    },
    "Marilith": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "16",
        "xp": 15000,
        "pv": "220",
        "ca": 16,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 20,
            "CON": 20,
            "INT": 18,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 18",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Reactive",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 7 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 17 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Constrict within 5ft on fail 15 bludgeoning and are grappled and restrained"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "When hit with an attack +5 to AC"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Maréchal sentinelle": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "110",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 12,
            "INT": 10,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30/90 m. Dégâts : 15 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit target has dis. adv. on next atk"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast shield"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Maître de l'enfer salamandre": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "15",
        "xp": 13000,
        "pv": "256",
        "ca": 18,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 24,
            "DEX": 16,
            "CON": 18,
            "INT": 14,
            "SAG": 10,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Fire Aura",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 5 m. Dégâts : 30 Perforant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 30/90 m. Dégâts : 30 Perforant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Inferno Blast recharges on 5-6 30ft sphere on fail 35 damage and 5 fire damage every tune and 1 exhaustion level"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Élémentaire du Feu)",
            "Outreterre"
        ],
        "couleur": "#2980b9"
    },
    "Maître espion": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "137",
        "ca": 19,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 10,
            "DEX": 20,
            "CON": 12,
            "INT": 18,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 21",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 21 Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 30/120 m. Dégâts : 21 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Smoke Bomb within 20ft sphere on fail 28 poison damage and blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Membre de troll": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Petit",
        "alignement": "Chaotique mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "20",
        "ca": 14,
        "vitesse": "20 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 10,
            "INT": 0,
            "SAG": 8,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Régénération",
                "desc": ""
            },
            {
                "nom": "Troll Spawn",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 9 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Forêt",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Merrow": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 13,
        "vitesse": "10 m, nage 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 8,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 9 Tranchant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 4 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 5 m. Dégâts : 11 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#bf360c"
    },
    "Merrow double langage": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "67",
        "ca": 14,
        "vitesse": "20 m, nage 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 16,
            "INT": 12,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Mimétisme",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 20/60 m. Dégâts : 14 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#bf360c"
    },
    "Merrow harangueur": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "4",
        "ca": 14,
        "vitesse": "5 m, nage 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 16,
            "INT": 14,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 150/600 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Invective 3 creatures within 60ft on fail 14 psychic and dis adv on next atk roll half on save"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#bf360c"
    },
    "Mezzoloth": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "75",
        "ca": 18,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 6,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Acide",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Fiendish Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 9 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 18 Perforant, Force."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 20/60 m. Dégâts : 18 Perforant, Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit the target is grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Géhenne)"
        ],
        "couleur": "#8b0000"
    },
    "Mille-pattes géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "9",
        "ca": 14,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 4,
            "DEX": 14,
            "CON": 12,
            "INT": 0,
            "SAG": 6,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception passive 8",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Gives the poisoned condition"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Mimique": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "58",
        "ca": 12,
        "vitesse": "20 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 4,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Acide",
            "À terre"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Adhesive",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 11 Perforant, Acide."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 11 Contondant, Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if target grappled advantage and 16 piercing and acid damage, Atk 2 on hit grappled"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Minotaure de Baphomet": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "85",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 6,
            "SAG": 16,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 20 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 recharges on 5-6 if moved 10+ before attack on hit +10 piercing and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Moine githzerai": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "2",
        "xp": 450,
        "pv": "38",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 12,
            "INT": 12,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 15 Contondant, Psychique."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast Feather Fall or Shield"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Momie": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "58",
        "ca": 11,
        "vitesse": "20 m",
        "carac": {
            "FOR": 16,
            "DEX": 8,
            "CON": 16,
            "INT": 6,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 18 Contondant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit cursed can't regain HP even on long rest and HP max reduce by 10 and if reduced to 0 HP it turns to dust, Dreadful Glare within 60ft on fail frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Marais"
        ],
        "couleur": "#37474f"
    },
    "Monodrone modron": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "5",
        "ca": 15,
        "vitesse": "30 m, vol 20 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 120 m. Dégâts : 6 Force."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Méchanus)"
        ],
        "couleur": "#607d8b"
    },
    "Monstre rouilleur": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "33",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Iron Scent",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Antennae target one nonmagical metal within 5ft on fail -1 to AC or attack rolls, Destroy Metal destroy 1ft cube of a metal object not being worn"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Reflexive Antennae when hit use Antennae"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Mulet": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "11",
        "ca": 10,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Beast of Burden",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Collines",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Myconide adulte": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "16",
        "ca": 12,
        "vitesse": "20 m",
        "carac": {
            "FOR": 10,
            "DEX": 10,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Sun Sickness",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 7 Contondant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Pacifyin Spores 1/day within 10ft on fail stunned, Rapport Spores gives telepathy to creatures within 30ft"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Myconide pousse": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Petit",
        "alignement": "Loyal neutre",
        "fd": "0",
        "xp": 10,
        "pv": "3",
        "ca": 10,
        "vitesse": "10 m",
        "carac": {
            "FOR": 8,
            "DEX": 10,
            "CON": 10,
            "INT": 8,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Sun Sickness",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +1 au toucher, allonge 5 m. Dégâts : 3 Contondant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Rapport Spores gives telepathy to creatures within 30ft"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Mâtin": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "5",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Target becomes prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Collines",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Médecin Jorasco": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "58",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 16,
            "INT": 14,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Lucky",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30 m. Dégâts : 7 Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Méduse": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "127",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 16,
            "INT": 12,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 150 m, Vision parfaite 14 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 10 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 19 Perforant, Poison."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 150 m. Dégâts : 11 Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#bf360c"
    },
    "Méphit de boue": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 11,
        "vitesse": "20 m, vol 20 m, nage 20 m",
        "carac": {
            "FOR": 8,
            "DEX": 12,
            "CON": 12,
            "INT": 8,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Mud Breath recharges on 6 within 15ft on fail restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Marais",
            "Plans Élémentaires"
        ],
        "couleur": "#2980b9"
    },
    "Méphit de fumée": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 12,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cinder Breath recharges on 6 within 15ft on fail blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Élémentaires"
        ],
        "couleur": "#2980b9"
    },
    "Méphit de glace": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "21",
        "ca": 11,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 6,
            "DEX": 12,
            "CON": 10,
            "INT": 8,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Froid",
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 5 Tranchant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Frost Breath recharges on 6 15ft cone on fail 7 cold damage, Fod Cloud 1/day fod cloud"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Plans Élémentaires"
        ],
        "couleur": "#2980b9"
    },
    "Méphit de magma": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "18",
        "ca": 11,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 8,
            "DEX": 12,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 6 Tranchant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Fire Breath recharges on 6 15ft cone on fail 7 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Élémentaires"
        ],
        "couleur": "#2980b9"
    },
    "Méphit de poussière": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "17",
        "ca": 12,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 4,
            "DEX": 14,
            "CON": 10,
            "INT": 8,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Blinding Breath recharges on 6 15ft cone on fail blinded, Sleep 1/day cast sleep"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans Élémentaires"
        ],
        "couleur": "#2980b9"
    },
    "Méphit de vapeur": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "17",
        "ca": 10,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 4,
            "DEX": 10,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Blurred Form",
                "desc": ""
            },
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 4 Tranchant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Steam Breath recharges on 6 15ft cone on fail 5 fire damage and speed decreases by 10"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Élémentaires"
        ],
        "couleur": "#2980b9"
    },
    "Naga gardien": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Loyal bon",
        "fd": "10",
        "xp": 5900,
        "pv": "136",
        "ca": 18,
        "vitesse": "40 m, nage 40 m, escalade 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 16,
            "INT": 16,
            "SAG": 18,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Paralysé",
            "Empoisonné",
            "Entravé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Celestial Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 39 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Within 60ft on fale 31 poison damage and blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Naga osseux": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "65",
        "ca": 15,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 12,
            "INT": 16,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 17 Perforant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Serpentine Gaze within 60ft on fail 13 psychic damage and charmed"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#37474f"
    },
    "Naga spirituel": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "135",
        "ca": 17,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 14,
            "INT": 16,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Fiendish Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 21 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 60 m. Dégâts : 21 Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs",
            "Outreterre"
        ],
        "couleur": "#8b0000"
    },
    "Nalfeshnee": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "184",
        "ca": 18,
        "vitesse": "20 m, vol 30 m",
        "carac": {
            "FOR": 20,
            "DEX": 10,
            "CON": 22,
            "INT": 18,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 27 Tranchant, Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Teleport 120ft"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Teleport within 10ft of a target"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Noble": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "9",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 10,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry hit by  melee +2 to AC"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Nothic": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 16,
            "INT": 12,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision parfaite 120 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Rotting Gaze 17 necrotic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Nuée d'insectes": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "19",
        "ca": 11,
        "vitesse": "20 m, vol 20 m, escalade 20 m",
        "carac": {
            "FOR": 2,
            "DEX": 12,
            "CON": 14,
            "INT": 0,
            "SAG": 6,
            "CHA": 0
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 8",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 6 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Deals 3 damage if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Nuée de chauves-souris": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 12,
        "vitesse": "5 m, vol 30 m",
        "carac": {
            "FOR": 4,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Deals 2 damage if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Montagne",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Nuée de corbeaux": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 12,
        "vitesse": "10 m, vol 50 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 12,
            "INT": 4,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Deals 2 damage if bloodied,Wis. Save or be deafened recharges on a 6."
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Marais",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Nuée de dretchs": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "45",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 14,
            "INT": 4,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [
            "Contondant",
            "Froid",
            "Feu",
            "Foudre",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Fetid Aura",
                "desc": ""
            },
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 12 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Does 2 less damaged if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Nuée de griffes rampantes": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "49",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 10,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "Neutralisé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 10",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 20 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "11 damage if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#37474f"
    },
    "Nuée de larves": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 14,
            "INT": 6,
            "SAG": 12,
            "CHA": 2
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Does 2 less damaged if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs"
        ],
        "couleur": "#8b0000"
    },
    "Nuée de lémures": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "45",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 6,
            "CON": 14,
            "INT": 0,
            "SAG": 12,
            "CHA": 2
        },
        "resistances": [
            "Contondant",
            "Froid",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Hellish Restoration",
                "desc": ""
            },
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 11 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Does 2 less damaged if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Nuée de piranhas": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "28",
        "ca": 13,
        "vitesse": "5 m, nage 40 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 8,
            "INT": 0,
            "SAG": 6,
            "CHA": 2
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            },
            {
                "nom": "Water Breathing",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt. has adv. if the target is already hurt, Deals 5 damage if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Nuée de rats": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "14",
        "ca": 10,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 8,
            "DEX": 10,
            "CON": 8,
            "INT": 2,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 30 m, Perception passive 10",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Deals 2 damage if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Nuée de rats corrompus": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "27",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 30 m, Perception passive 10",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            },
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 becomes 4 when bloodied"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#bf360c"
    },
    "Nuée de serpents venimeux": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "36",
        "ca": 14,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 8,
            "DEX": 18,
            "CON": 10,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision aveugle 10 m, Perception passive 10",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Deals 2 damage if bloodied"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Marais"
        ],
        "couleur": "#5a8a3c"
    },
    "Nuée de stirges": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "36",
        "ca": 14,
        "vitesse": "10 m, vol 40 m",
        "carac": {
            "FOR": 4,
            "DEX": 16,
            "CON": 10,
            "INT": 2,
            "SAG": 8,
            "CHA": 6
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "À terre",
            "Entravé",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Nuée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if they are bloodied 8 damage and grappled and 7 necrotic damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Nycaloth": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "152",
        "ca": 18,
        "vitesse": "40 m, vol 60 m",
        "carac": {
            "FOR": 20,
            "DEX": 10,
            "CON": 18,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Acide",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Fiendish Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 28 Tranchant, Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 30/90 m. Dégâts : 28 Tranchant, Force."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Géhenne)"
        ],
        "couleur": "#8b0000"
    },
    "Ogre": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "68",
        "ca": 11,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 8,
            "CON": 16,
            "INT": 4,
            "SAG": 6,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 8",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 13 Contondant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 30/120 m. Dégâts : 11 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Ogre ogrillon": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "52",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 6,
            "SAG": 8,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30/120 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Ombre": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "27",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Amorphous",
                "desc": ""
            },
            {
                "nom": "Faiblesse au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "On a hit -1d4 to strength score if strength is reduced to 0 then dead"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Oni": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "7",
        "xp": 2900,
        "pv": "119",
        "ca": 17,
        "vitesse": "30 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 14,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 19 Tranchant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 9 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on hit target is frightened, Shape-shift"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Urbain"
        ],
        "couleur": "#8b0000"
    },
    "Orque tueuse": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "3",
        "xp": 700,
        "pv": "90",
        "ca": 12,
        "vitesse": "5 m, nage 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 12,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Apnée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 21 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Otyugh": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "104",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 18,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 12 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 12 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 Poisoned, Akt 2 Grappled, Tentacle Slam If target is grappled and failed 16 bludgeoning and stunned"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Ours brun": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 11,
        "vitesse": "40 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Claw attack gives pron condition"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Forêt",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Ours noir": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "19",
        "ca": 11,
        "vitesse": "30 m, nage 30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#5a8a3c"
    },
    "Ours polaire": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "42",
        "ca": 12,
        "vitesse": "40 m, nage 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 16,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 9 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#5a8a3c"
    },
    "Ours-garou": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre bon",
        "fd": "5",
        "xp": 1800,
        "pv": "135",
        "ca": 15,
        "vitesse": "40 m, escalade 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 10,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 17",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 17 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Tranchant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 20/60 m. Dégâts : 14 Tranchant."
            },
            {
                "nom": "Attaque 4 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail cursed if target drops to 0hp it becomes a werebear"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Forêt",
            "Collines"
        ],
        "couleur": "#bf360c"
    },
    "Paladin zhentilar de Bane": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "58",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 12,
            "SAG": 12,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [
            {
                "nom": "Aura of Dread",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 14 Contondant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 90 m. Dégâts : 16 Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Panthère": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 12,
        "vitesse": "50 m, escalade 40 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Move half up its speed and can then hide"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Parrain bandit": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "11",
        "xp": 7200,
        "pv": "169",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 20,
            "CON": 14,
            "INT": 18,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 20",
        "traits": [
            {
                "nom": "Evasion",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 26 Tranchant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 30/90 m. Dégâts : 24 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Pentadrone modron": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Loyal neutre",
        "fd": "2",
        "xp": 450,
        "pv": "32",
        "ca": 16,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 14",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 5 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 120 m. Dégâts : 5 Foudre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Paralysis recharges 5-6 30ft cone on fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Méchanus)"
        ],
        "couleur": "#607d8b"
    },
    "Perceur": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 15,
        "vitesse": "5 m, escalade 15 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 16,
            "INT": 0,
            "SAG": 6,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Vision dans le noir 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Drop 10 piercing"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Phaerimm": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Petit",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 12,
        "vitesse": "10 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 12,
            "INT": 14,
            "SAG": 16,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 3 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#6b3fa0"
    },
    "Phaerimm ancien": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Très grand",
        "alignement": "Neutre mauvais",
        "fd": "14",
        "xp": 11500,
        "pv": "218",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 16,
            "INT": 16,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 18",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 32 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 120 m. Dégâts : 32 Psychique."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 37 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Siphon Magic drains the magic from a magic item"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protective Magic cast countterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#6b3fa0"
    },
    "Pieuvre": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "3",
        "ca": 12,
        "vitesse": "5 m, nage 30 m",
        "carac": {
            "FOR": 4,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 12",
        "traits": [
            {
                "nom": "Compression",
                "desc": ""
            },
            {
                "nom": "Water Breathing",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 1 Contondant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Creates Heavy obscurment and gets full move speed"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Pieuvre géante": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "45",
        "ca": 11,
        "vitesse": "10 m, nage 60 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 10 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Grapples and restranies"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Moves up to half its speed in water and creates a heavily obscured area."
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Pillard Daask": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "33",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Contondant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Smackback"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Piranha": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 13,
        "vitesse": "5 m, nage 40 m",
        "carac": {
            "FOR": 2,
            "DEX": 16,
            "CON": 8,
            "INT": 0,
            "SAG": 6,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Water Breathing",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt. has adv. if the target is already hurt"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Pirate": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou plus petit",
        "alignement": "Neutre",
        "fd": "1",
        "xp": 200,
        "pv": "33",
        "ca": 14,
        "vitesse": "20 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 12,
            "INT": 8,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 20/60 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Enthralling Panache within 30ft on fail charmed"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Pixie": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Très petit",
        "alignement": "Neutre bon",
        "fd": "1/4",
        "xp": 50,
        "pv": "9",
        "ca": 15,
        "vitesse": "10 m, vol 30 m",
        "carac": {
            "FOR": 2,
            "DEX": 20,
            "CON": 8,
            "INT": 10,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 1 Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 60 m. Dégâts : 1 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 and Akt 2 on hit charms or poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Pixie porteur de merveilles": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Très petit",
        "alignement": "Neutre bon",
        "fd": "5",
        "xp": 1800,
        "pv": "60",
        "ca": 15,
        "vitesse": "10 m, vol 30 m",
        "carac": {
            "FOR": 2,
            "DEX": 20,
            "CON": 10,
            "INT": 10,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 15 Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 60 m. Dégâts : 15 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 and Akt 2 on hit charms or poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Planétaire": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Loyal bon",
        "fd": "16",
        "xp": 15000,
        "pv": "262",
        "ca": 19,
        "vitesse": "40 m, vol 120 m (stationnaire)",
        "carac": {
            "FOR": 24,
            "DEX": 20,
            "CON": 24,
            "INT": 18,
            "SAG": 22,
            "CHA": 24
        },
        "resistances": [
            "Radiant"
        ],
        "immunites": [
            "Charmé",
            "Épuisement",
            "Effrayé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 21",
        "traits": [
            {
                "nom": "Divine Awareness",
                "desc": ""
            },
            {
                "nom": "Exalted Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 10 m. Dégâts : 32 Tranchant, Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Holy Burst 20ft sphere 24 radiant damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Plésiosaure": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "68",
        "ca": 13,
        "vitesse": "20 m, nage 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [
            {
                "nom": "Apnée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 11 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Poltergeist": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou plus petit",
        "alignement": "Chaotique neutre",
        "fd": "2",
        "xp": 450,
        "pv": "22",
        "ca": 12,
        "vitesse": "5 m, vol 50 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [
            "Acide",
            "Contondant",
            "Froid",
            "Feu",
            "Foudre",
            "Perforant",
            "Tranchant",
            "Tonnerre"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Déplacement incorporel",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 30 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Telekinetic within 30ft 9 force damage and pushed 30ft"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Poney": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "11",
        "ca": 10,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Prodige noble": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "148",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 16,
            "CON": 12,
            "INT": 14,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 18 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 60 m. Dégâts : 18 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 and Atk 2 on hit charmed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Shield cast shield"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Prêtre": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "38",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 12,
            "INT": 12,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 11 Contondant, Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 60 m. Dégâts : 11 Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Prêtre du venin vulkoori": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "2",
        "xp": 450,
        "pv": "44",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 12,
            "INT": 10,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [
            "Poison"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Ascendance féerique",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit taret is poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Prêtre sahuagin": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "38",
        "ca": 12,
        "vitesse": "30 m, nage 40 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 12,
            "INT": 12,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [
            "Acide",
            "Froid"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Frénésie sanguinaire",
                "desc": ""
            },
            {
                "nom": "Limited Amphibiousness",
                "desc": ""
            },
            {
                "nom": "Shark Telepathy",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 11 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 120 m. Dégâts : 11 Force."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#8b0000"
    },
    "Prêtresse drow de Lolth": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "99",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 12,
            "SAG": 18,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Ascendance féerique",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 23 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Spider Vortex: within 20ft on fail 33 piercing damage and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#455a64"
    },
    "Pseudodragon": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Très petit",
        "alignement": "Neutre bon",
        "fd": "1/4",
        "xp": 50,
        "pv": "10",
        "ca": 14,
        "vitesse": "15 m, vol 60 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Con Save 5 poison damage and poison condition Fail by 5+ Unconscious"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Forêt",
            "Collines",
            "Montagne",
            "Urbain"
        ],
        "couleur": "#c0392b"
    },
    "Psion githzerai": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "12",
        "xp": 8400,
        "pv": "169",
        "ca": 18,
        "vitesse": "40 m, vol 40 m (stationnaire)",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 14,
            "INT": 18,
            "SAG": 18,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 26 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 120 m. Dégâts : 26 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Target is either charmed or prone after an Akt"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Ptéranodon": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 12,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Prairie",
            "Montagne"
        ],
        "couleur": "#5a8a3c"
    },
    "Pudding noir": {
        "icone": "🟢",
        "categorie": "Vase",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "4",
        "xp": 1100,
        "pv": "68",
        "ca": 7,
        "vitesse": "20 m, escalade 20 m",
        "carac": {
            "FOR": 16,
            "DEX": 4,
            "CON": 16,
            "INT": 0,
            "SAG": 6,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Acide",
            "Froid",
            "Foudre",
            "Tranchant",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "À terre",
            "Entravé"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Amorphous",
                "desc": ""
            },
            {
                "nom": "Corrosive Form",
                "desc": ""
            },
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 17 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit nonmagical armour -1 AC if reduced to 10 AC armour is destroyed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Split it becomes bloddied or hit by lightning or slashing the pudding splits"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#827717"
    },
    "Pégase": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Chaotique bon",
        "fd": "2",
        "xp": 450,
        "pv": "59",
        "ca": 12,
        "vitesse": "60 m, vol 90 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 14,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 12 Contondant, Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines",
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Péryton": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "33",
        "ca": 13,
        "vitesse": "20 m, vol 60 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 8,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if moved 30+ before attack on hit +9 piercing, Atk 2 if reduce target to 0 hp target is dead"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Quadrone modron": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 16,
        "vitesse": "30 m, vol 30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 320 m. Dégâts : 4 Force."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Méchanus)"
        ],
        "couleur": "#607d8b"
    },
    "Quaggoth": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Chaotique neutre",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Bloodied Fury",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if they are bloodied 13 damage"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Quasit": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Très petit",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "25",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 4,
            "DEX": 16,
            "CON": 10,
            "INT": 6,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Target is poisoned, Invisibility, frightened, Shape shift into a bat centipede or toad"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Rakshasa": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "221",
        "ca": 17,
        "vitesse": "40 m",
        "carac": {
            "FOR": 14,
            "DEX": 16,
            "CON": 18,
            "INT": 12,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision parfaite 60 m, Perception passive 18",
        "traits": [
            {
                "nom": "Greater Magic Resistance",
                "desc": ""
            },
            {
                "nom": "Fiendish Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 31 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit the target is cursed and can't gain any benefit from a short or long rest, Baleful Command recharges on 5-6 within 30ft on fail 28 psychic damage and frightened and incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)",
            "Urbain"
        ],
        "couleur": "#8b0000"
    },
    "Rampant charognard": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "51",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 16,
            "INT": 0,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 10 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Paralyzing Tentacles within 10ft on fail poisoned and paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Rat": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 10,
        "vitesse": "20 m, escalade 20 m",
        "carac": {
            "FOR": 2,
            "DEX": 10,
            "CON": 8,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Agile"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Rat corrompu": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 10,
        "vitesse": "20 m, escalade 20 m",
        "carac": {
            "FOR": 2,
            "DEX": 10,
            "CON": 8,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 30 m, Perception passive 11",
        "traits": [
            {
                "nom": "Agile",
                "desc": ""
            },
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 1 Perforant."
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#bf360c"
    },
    "Rat corrompu géant": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "18",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 6,
            "DEX": 16,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Death Brust",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 11 Perforant, Acide."
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#bf360c"
    },
    "Rat géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "7",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 6,
            "DEX": 16,
            "CON": 10,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#5a8a3c"
    },
    "Rat-garou": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "60",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30/120 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail cursed if target drops to 0hp it becomes a wererat"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Ravageur noggle": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Petit",
        "alignement": "Chaotique neutre",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 8,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Siege",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit reduces ac by 1"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Reine Forfallen": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "10",
        "xp": 5900,
        "pv": "153",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 18,
            "INT": 14,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Perception passive 17",
        "traits": [
            {
                "nom": "Inspiring Presence",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 18 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 22 Tranchant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 20/60 m. Dégâts : 22 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#607d8b"
    },
    "Rejeton de Demogorgon": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "44",
        "ca": 15,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 8,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Baleful Presence",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            },
            {
                "nom": "Saut en course",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit grappled and blinded"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#8b0000"
    },
    "Rejeton vampire": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "90",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 16,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Vampire Weakness: Forbiddance",
                "desc": ""
            },
            {
                "nom": "Running Water",
                "desc": ""
            },
            {
                "nom": "Stake of the Heart",
                "desc": ""
            },
            {
                "nom": "Sunlight",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit target grappled, Bite within 5ft that is grappled, incapacitated or restrained on fail 19 piercing, necrotic regains the HP"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Rejeton vapeur de manès": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "19",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 12,
            "CON": 14,
            "INT": 4,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "Empoisonné",
            "Entravé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Contortionist",
                "desc": ""
            },
            {
                "nom": "Sickening Vapors",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 10 Tranchant, Nécrotique."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Remorhaz": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "11",
        "xp": 7200,
        "pv": "195",
        "ca": 17,
        "vitesse": "40 m, fouissement 30 m",
        "carac": {
            "FOR": 24,
            "DEX": 12,
            "CON": 20,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Froid",
            "Feu"
        ],
        "sens": "Vision dans le noir 60 m, Perception des vibrations 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Heat Aura",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 32 Perforant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grappled and restrained, Swallow one target grappled on fail blinded restrained total cover and 20 acid and fire damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#bf360c"
    },
    "Requin chasseur": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 12,
        "vitesse": "5 m, nage 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 0,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Water Breathing",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt. has adv. if the target is already hurt"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Requin de récif": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 12,
        "vitesse": "5 m, nage 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 0,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception passive 12",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Requin géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "92",
        "ca": 13,
        "vitesse": "5 m, nage 60 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 0,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 22 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Advantage on the Akt if the target is already hurt"
            }
        ],
        "description": "",
        "environnement": [
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Revenant": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "127",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 18,
            "INT": 12,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [
            "Nécrotique",
            "Psychique"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné",
            "Étourdi"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Régénération",
                "desc": ""
            },
            {
                "nom": "Undead Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 11 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Vengeful Glare within 30ft on fail frightened second fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Revenant du cimetière": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très grand",
        "alignement": "Neutre",
        "fd": "7",
        "xp": 2900,
        "pv": "161",
        "ca": 14,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 20,
            "INT": 12,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [
            "Nécrotique",
            "Psychique"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "Étourdi",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Undead Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 20 Contondant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Suffocate on hit grappled and suffocating, Recharges on 5-6 within 30ft on fail paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Revenant hanté": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Gigantesque",
        "alignement": "Neutre",
        "fd": "10",
        "xp": 5900,
        "pv": "203",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 12,
            "CON": 18,
            "INT": 16,
            "SAG": 18,
            "CHA": 20
        },
        "resistances": [
            "Nécrotique",
            "Psychique"
        ],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision parfaite 60 m, Perception passive 14",
        "traits": [],
        "actions": [],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Rhinocéros": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 8,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 11",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 14 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Charge attack +9 to damage and gives pron condition"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Rilly June": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Petit",
        "alignement": "Neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "13",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "G'wan Git! 1/day one creature within 60ft on fail 10 psychic and frightened"
            }
        ],
        "description": "",
        "environnement": [],
        "couleur": "#455a64"
    },
    "Rokh": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Gigantesque",
        "alignement": "Non aligné",
        "fd": "11",
        "xp": 7200,
        "pv": "248",
        "ca": 15,
        "vitesse": "20 m, vol 120 m",
        "carac": {
            "FOR": 28,
            "DEX": 10,
            "CON": 20,
            "INT": 2,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 18",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 10 m. Dégâts : 28 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 5 m. Dégâts : 23 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Côtier",
            "Désert",
            "Collines",
            "Montagne"
        ],
        "couleur": "#bf360c"
    },
    "Roturier": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "0",
        "xp": 10,
        "pv": "4",
        "ca": 10,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 10,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [
            {
                "nom": "Training",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 2 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Régent cockatrice": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "8",
        "xp": 3900,
        "pv": "136",
        "ca": 15,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 2,
            "SAG": 16,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Pétrifié"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 13",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 18 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail restrained on second fail petrified"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Magical Backlash when damage is dealt to it on fail 13 force damage"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#bf360c"
    },
    "Salamandre": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "90",
        "ca": 15,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Fire Aura",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 20 Perforant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 20/60 m. Dégâts : 20 Perforant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Constrict within 10ft on fail 18 bludgeoning and fire damage grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Élémentaire du Feu)",
            "Outreterre"
        ],
        "couleur": "#2980b9"
    },
    "Salamandre serpent de feu": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "27",
        "ca": 14,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 10,
            "INT": 6,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Fire Aura",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Perforant, Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Plan Élémentaire du Feu)",
            "Outreterre"
        ],
        "couleur": "#2980b9"
    },
    "Sammaster (forme draco-liche)": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "22",
        "xp": 41000,
        "pv": "276",
        "ca": 20,
        "vitesse": "40 m, vol 80 m, fouissement 30 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 20,
            "INT": 22,
            "SAG": 14,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Acide",
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 26",
        "traits": [
            {
                "nom": "Life Suppression",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Soul Gem",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 36 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Corroding Breath: Con save 90ft cone on fail 52 acid or necrotic"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#37474f"
    },
    "Sammaster (forme liche)": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "22",
        "xp": 41000,
        "pv": "322",
        "ca": 22,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 16,
            "INT": 22,
            "SAG": 14,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Acide",
            "Froid",
            "Foudre",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Vision dans le noir 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Life Suppression",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Soul Gem",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 5 m. Dégâts : 38 Acid or Necrotic."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +13 au toucher, portée 120 m. Dégâts : 38 Acid or Necrotic."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 5 m. Dégâts : 16 Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 3 on hit paralyzed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protectice Magic: Cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#37474f"
    },
    "Sanglier": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 11,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 14,
            "INT": 2,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 9",
        "traits": [
            {
                "nom": "Bloodied Fury",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Charge attack +3 to damage and gives pron condition"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Sanglier géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "42",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 16,
            "INT": 2,
            "SAG": 6,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 8",
        "traits": [
            {
                "nom": "Bloodied Furry",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Does more damage on a charge and makes prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Sanglier-garou": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "97",
        "ca": 15,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30/120 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 4 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail cursed if target drops to 0hp it becomes a wereboar, Atk 3 if moved 20ft before attacking on hit +7 piercing damage and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#bf360c"
    },
    "Satyre": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Chaotique neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "31",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 10,
            "INT": 12,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 12",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 pushes 10ft on hit, Mockery 90ft on fail 5 psychic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Satyre maître des festivités": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Chaotique neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "82",
        "ca": 17,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 12,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 charmed on hit, Fey Melody recharges on 4-6 within 60ft on fail are charmed or takes 10 psychic damage and is frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Sbire gobelin": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Petit",
        "alignement": "Chaotique neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "7",
        "ca": 12,
        "vitesse": "30 m",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 8,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 4 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 20/60 m. Dégâts : 4 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines",
            "Plans (Achéron)",
            "Féerie Sauvage",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Scarabée de feu géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "4",
        "ca": 13,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 8,
            "DEX": 10,
            "CON": 12,
            "INT": 0,
            "SAG": 6,
            "CHA": 2
        },
        "resistances": [
            "Feu"
        ],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception passive 8",
        "traits": [
            {
                "nom": "Illumination",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +1 au toucher, allonge 5 m. Dégâts : 1 Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#5a8a3c"
    },
    "Scorpion": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "1",
        "ca": 11,
        "vitesse": "10 m",
        "carac": {
            "FOR": 2,
            "DEX": 10,
            "CON": 8,
            "INT": 0,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 4 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#5a8a3c"
    },
    "Scorpion géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "3",
        "xp": 700,
        "pv": "42",
        "ca": 15,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 0,
            "SAG": 8,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Contondant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Grabbles on Akt.1"
            }
        ],
        "description": "",
        "environnement": [
            "Désert"
        ],
        "couleur": "#5a8a3c"
    },
    "Scribe Sivis": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Petit",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "56",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 10,
            "INT": 16,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Words of Reason Allies within 10 ft have adv. on saving throws to aviod or end the charmed or frightened condition",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 13 Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 60 m. Dégâts : 13 Radiant."
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Scrutateur": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "190",
        "ca": 18,
        "vitesse": "5 m, vol 40 m (stationnaire)",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 18,
            "INT": 16,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "À terre"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 22",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "All of the eye rays: 13 psychic damage and charmed, Paralyzed, 14 psychic damage and frightened, 18 necrotic damage 1/2 speed no reactions and either an action or bonus action, 13 poison damage and poisoned, moved up to 30ft and restrained, Unconscious, Restrained on second fail petrified, 36 force damage, 55 necrotic damage and dies if the target is reduced to 0."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Scrutateur zombie": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "93",
        "ca": 15,
        "vitesse": "5 m, vol 20 m (stationnaire)",
        "carac": {
            "FOR": 14,
            "DEX": 8,
            "CON": 16,
            "INT": 2,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné",
            "À terre"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Robustesse du mort-vivant",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 16 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Eye Rays: Paralyzing Ray on fail Paralyzed, Fear Ray on fail 13 Psychic damage and frightened, Enervation Ray 10 Necrotic Damage and poisoned , Disintegration Ray on fail 27 Force damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Seigneur de guerre hobgobelin": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "112",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 16,
            "INT": 14,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Aura of Authority",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 30/120 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 12 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 and Akt 2 reduces speed by 10ft"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Parry hit by melee +3 AC"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne",
            "Plans (Achéron)",
            "Outreterre"
        ],
        "couleur": "#e91e8c"
    },
    "Seigneur de meute gnoll": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "49",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 12,
            "INT": 8,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 10 m. Dégâts : 8 Tranchant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 30/120 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Incite Rampage recharges on 5-6 has a gnoll rampage as a bonus action"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#8b0000"
    },
    "Seigneur des animaux": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "20",
        "xp": 25000,
        "pv": "323",
        "ca": 19,
        "vitesse": "60 m, vol 60 m (stationnaire), nage 60 m",
        "carac": {
            "FOR": 24,
            "DEX": 24,
            "CON": 20,
            "INT": 18,
            "SAG": 22,
            "CHA": 22
        },
        "resistances": [
            "Froid",
            "Feu",
            "Nécrotique",
            "Psychique",
            "Radiant"
        ],
        "immunites": [
            "Charmé",
            "Effrayé",
            "Étourdi"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 28",
        "traits": [
            {
                "nom": "Animal Lordship",
                "desc": ""
            },
            {
                "nom": "Lordly Presence",
                "desc": ""
            },
            {
                "nom": "Captivated (Forager)",
                "desc": ""
            },
            {
                "nom": "Fearful (Hunter)",
                "desc": ""
            },
            {
                "nom": "Mired (Sage)",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 5 m. Dégâts : 21 Tranchant, Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 120 m. Dégâts : 20 Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Animal Spirit 28 radiant damage, Fortify (Forger) 20 temp. HP, Marked as Prey (Hunter) Advantage on attacks, Pesky Swarm (Sage) Target has disadvantage on attacks and ability checks"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Pays des Bêtes)"
        ],
        "couleur": "#d4a017"
    },
    "Seigneur momie": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "15",
        "xp": 13000,
        "pv": "187",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 10,
            "SAG": 18,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 60 m, Perception passive 19",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Undead Restoration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 25 Contondant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +9 au toucher, portée 60 m. Dégâts : 25 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit cursed can't regain HP even on long rest and HP max reduce by 10 and if reduced to 0 HP it turns to dust, Dreadful Glare within 60ft on fail paralyzed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Whirlwind of Sand when hit +2 to AC teleports 60ft within 5ft Blinded"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Marais"
        ],
        "couleur": "#37474f"
    },
    "Seigneur vampire ombral": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "15",
        "xp": 13000,
        "pv": "187",
        "ca": 16,
        "vitesse": "40 m, vol 40 m (stationnaire), escalade 40 m",
        "carac": {
            "FOR": 20,
            "DEX": 18,
            "CON": 18,
            "INT": 18,
            "SAG": 16,
            "CHA": 20
        },
        "resistances": [],
        "immunites": [
            "Froid",
            "Nécrotique",
            "Charmé",
            "Épuisement"
        ],
        "sens": "Vision aveugle 120 m, Perception passive 23",
        "traits": [
            {
                "nom": "Shadow Escape",
                "desc": ""
            },
            {
                "nom": "Vampire Weakness: Forbiddance",
                "desc": ""
            },
            {
                "nom": "Running Water",
                "desc": ""
            },
            {
                "nom": "Stake of the Heart",
                "desc": ""
            },
            {
                "nom": "Sunlight",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 22 Tranchant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 120 m. Dégâts : 16 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 on hit poisoned, Hunger of Hadar recharges on 5-6 cast Hunger of Hadar"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Serpent constricteur": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 13,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Strength save 7 damage and grappled"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Serpent constricteur géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "60",
        "ca": 12,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 12,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Dex save 13 damage and gives grappled condition"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Marais",
            "Sous-marin"
        ],
        "couleur": "#5a8a3c"
    },
    "Serpent polaire": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "58",
        "ca": 14,
        "vitesse": "40 m, vol 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 12,
            "INT": 4,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Misty Slithering",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Perforant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Constrict: on fail within 10ft 10 bludgeoning and cold damage and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Outreterre"
        ],
        "couleur": "#2980b9"
    },
    "Serpent venimeux": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "5",
        "ca": 12,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 2,
            "DEX": 14,
            "CON": 10,
            "INT": 0,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Marais"
        ],
        "couleur": "#5a8a3c"
    },
    "Serpent venimeux géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 14,
        "vitesse": "40 m, nage 40 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 12,
            "INT": 2,
            "SAG": 10,
            "CHA": 2
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 10 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Marais"
        ],
        "couleur": "#5a8a3c"
    },
    "Serpent volant": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "5",
        "ca": 14,
        "vitesse": "30 m, vol 60 m, nage 30 m",
        "carac": {
            "FOR": 4,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 12,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 10 m, Perception passive 11",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie"
        ],
        "couleur": "#bf360c"
    },
    "Serviteur spore myconide": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Moyen ou Petit",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "37",
        "ca": 13,
        "vitesse": "20 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 2,
            "SAG": 6,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Aveuglé",
            "Charmé",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 8",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Contondant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Singe": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "19",
        "ca": 12,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 14,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 5 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 25/50 m. Dégâts : 10 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Attack 2 Recharges on 6"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#5a8a3c"
    },
    "Singe géant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "7",
        "xp": 2900,
        "pv": "168",
        "ca": 12,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 18,
            "INT": 4,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 22 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "AOE attack DEX save 5ft radius sphere 24 damage and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#5a8a3c"
    },
    "Slaad bleu": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Chaotique neutre",
        "fd": "7",
        "xp": 2900,
        "pv": "133",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 18,
            "INT": 6,
            "SAG": 6,
            "CHA": 8
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 15 Tranchant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Cured and if reduced to 0 target becomes a red slaad or green slaad"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Slaad de la mort": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "10",
        "xp": 5900,
        "pv": "178",
        "ca": 18,
        "vitesse": "40 m",
        "carac": {
            "FOR": 20,
            "DEX": 14,
            "CON": 18,
            "INT": 14,
            "SAG": 10,
            "CHA": 18
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Vision dans le noir 60 m, Perception passive 18",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 10 m. Dégâts : 21 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "After Akt 1 the target is either charmed frightened poisoned or incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Slaad gris": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Chaotique neutre",
        "fd": "9",
        "xp": 5000,
        "pv": "150",
        "ca": 18,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 16,
            "INT": 12,
            "SAG": 8,
            "CHA": 18
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [],
        "sens": "Vision aveugle 60 m, Vision dans le noir 60 m, Perception passive 17",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 20 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "After Akt 1 the target is either charmed frightened poisoned or incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Slaad rouge": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Chaotique neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "93",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 6,
            "SAG": 6,
            "CHA": 6
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 10 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "After Akt 1 and on fail save the target becomes cursed and has eggs implanted"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Slaad vert": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Grand",
        "alignement": "Chaotique neutre",
        "fd": "8",
        "xp": 3900,
        "pv": "144",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 8,
            "CHA": 18
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 8 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 60 m. Dégâts : 8 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "After Akt 1 or 2 the target is either charmed frightened poisoned or incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Solaire": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Loyal bon",
        "fd": "21",
        "xp": 33000,
        "pv": "297",
        "ca": 21,
        "vitesse": "50 m, vol 150 m (stationnaire)",
        "carac": {
            "FOR": 26,
            "DEX": 22,
            "CON": 26,
            "INT": 24,
            "SAG": 24,
            "CHA": 30
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Radiant",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 24",
        "traits": [
            {
                "nom": "Divine Awareness",
                "desc": ""
            },
            {
                "nom": "Exalted Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +15 au toucher, allonge 10 m. Dégâts : 58 Tranchant, Radiant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +15 au toucher, portée 120 m. Dégâts : 58 Tranchant, Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Slaying Bow within 600ft if failed and less than 101 hp it dies if not 60 Piercing and Radiant damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Soldat zhentilar": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 80/320 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Knock Down: One creature within 5ft on fail 4 bludgeoning and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Sorcière des mers": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 14,
        "vitesse": "30 m, nage 40 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 12,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Coven Magic",
                "desc": ""
            },
            {
                "nom": "Vile Appearance",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Death Glare recharges on 5-6 on fail and target is frightened and if less than 21 hp drops to 0 otherwise takes 13 psychic damage, Cast disguise self"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#e91e8c"
    },
    "Sorcière nocturne": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "112",
        "ca": 17,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 16,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Feu"
        ],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Coven Magic",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Soul Bag",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Nightmare Haunting cast dream"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs"
        ],
        "couleur": "#e91e8c"
    },
    "Sorcière verte": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "82",
        "ca": 17,
        "vitesse": "30 m, nage 30 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 12,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            },
            {
                "nom": "Coven Magic",
                "desc": ""
            },
            {
                "nom": "Mimétisme",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Tranchant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Collines",
            "Marais"
        ],
        "couleur": "#e91e8c"
    },
    "Sous-chef Boromar": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Petit",
        "alignement": "Loyal mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "104",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 18,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Poison"
        ],
        "immunites": [],
        "sens": "Perception passive 18",
        "traits": [
            {
                "nom": "Hustle",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 20 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30/90 m. Dégâts : 26 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk1: On hit poisoned and if poisoned deals 7 more poison damage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Uncanny Dodge"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#455a64"
    },
    "Souverain homme-lézard": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "78",
        "ca": 15,
        "vitesse": "30 m, nage 30 m, fouissement 20 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 14,
            "INT": 10,
            "SAG": 10,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Effrayé"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 8 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit gain temp hp based on damage, Ark 2 on hit prone"
            }
        ],
        "description": "",
        "environnement": [
            "Marais"
        ],
        "couleur": "#2980b9"
    },
    "Souverain myconide": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Grand",
        "alignement": "Loyal neutre",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 10,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Sun Sickness",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 11 Contondant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Animating Spores 3/day turns corpses into Myconid Spore Servant, Pacifyin Spores within 10ft on fail stunned, Rapport Spores gives telepathy to creatures within 30ft"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Spectateur": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "3",
        "xp": 700,
        "pv": "45",
        "ca": 14,
        "vitesse": "5 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 8,
            "DEX": 14,
            "CON": 14,
            "INT": 12,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Eye Rays: 5 psychic damage no reactions or movement and attacks a random person, Paralyzed, 5 psychic damage and frightened, 16 necrotic damage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Reflects missed spells or saved spells 10 force damage"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#6b3fa0"
    },
    "Spectre": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 12,
        "vitesse": "30 m, vol 50 m (stationnaire)",
        "carac": {
            "FOR": 0,
            "DEX": 14,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [
            "Acide",
            "Contondant",
            "Froid",
            "Feu",
            "Foudre",
            "Perforant",
            "Tranchant",
            "Tonnerre"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Déplacement incorporel",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 7 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit HP max decreased by damage taken"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Spectre guerrier": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "82",
        "ca": 14,
        "vitesse": "30 m",
        "carac": {
            "FOR": 14,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 12,
            "CHA": 14
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 10 Tranchant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 150/600 m. Dégâts : 10 Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 max HP decrease by the damage taken"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans (Feuilleombre)",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Sphinx de la valeur": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Loyal neutre",
        "fd": "17",
        "xp": 18000,
        "pv": "199",
        "ca": 17,
        "vitesse": "40 m, vol 60 m",
        "carac": {
            "FOR": 22,
            "DEX": 10,
            "CON": 20,
            "INT": 16,
            "SAG": 22,
            "CHA": 18
        },
        "resistances": [
            "Nécrotique",
            "Radiant"
        ],
        "immunites": [
            "Psychique",
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 22",
        "traits": [
            {
                "nom": "Inscrutable",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 5 m. Dégâts : 20 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "First Roar within 500ft on fail frightened, Second Roar within 500ft on fail Paralyzed, Third Roar within 500ft on fail 44 thunder damage and is prone"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Sphinx des merveilles": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Très petit",
        "alignement": "Loyal bon",
        "fd": "1",
        "xp": 200,
        "pv": "24",
        "ca": 12,
        "vitesse": "20 m, vol 40 m",
        "carac": {
            "FOR": 6,
            "DEX": 16,
            "CON": 12,
            "INT": 14,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [
            "Nécrotique",
            "Psychique",
            "Radiant"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 11",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Tranchant, Radiant."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "On ability checks and saves, +2 to creatures"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Sphinx des secrets": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Loyal neutre",
        "fd": "8",
        "xp": 3900,
        "pv": "136",
        "ca": 16,
        "vitesse": "40 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 18,
            "SAG": 18,
            "CHA": 18
        },
        "resistances": [
            "Nécrotique",
            "Radiant"
        ],
        "immunites": [
            "Psychique",
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Inscrutable",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 20 Tranchant, Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Curse of the Riddle within 60 ft on fail 21 psychic damage and cursed with disadvantage on ability checks and attack rolls and if they take the magic action they must make the save first"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Sphinx du savoir": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Grand",
        "alignement": "Loyal neutre",
        "fd": "11",
        "xp": 7200,
        "pv": "170",
        "ca": 17,
        "vitesse": "40 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 16,
            "INT": 18,
            "SAG": 18,
            "CHA": 18
        },
        "resistances": [
            "Nécrotique",
            "Radiant"
        ],
        "immunites": [
            "Psychique",
            "Charmé",
            "Effrayé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 18",
        "traits": [
            {
                "nom": "Inscrutable",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 14 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Mind-Rending Roar recharges on 5-6 each enemy within 300ft on fail 35 psychic and are incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans Supérieurs"
        ],
        "couleur": "#d4a017"
    },
    "Spore de Moander": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "12",
        "xp": 8400,
        "pv": "230",
        "ca": 19,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 22,
            "DEX": 8,
            "CON": 20,
            "INT": 4,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [
            "Acide",
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Aveuglé",
            "Assourdi",
            "Épuisement",
            "Paralysé",
            "Empoisonné",
            "À terre"
        ],
        "sens": "Vision aveugle 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Explosive Core",
                "desc": ""
            },
            {
                "nom": "Rolling Mass",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 20 m. Dégâts : 21 Perforant, Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Consume: Large or smaller creature within 5ft on fail grappled blinded and restrained and 17 acid damage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais"
        ],
        "couleur": "#388e3c"
    },
    "Spore gazeuse": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "13",
        "ca": 8,
        "vitesse": "5 m, vol 10 m (stationnaire)",
        "carac": {
            "FOR": 4,
            "DEX": 0,
            "CON": 2,
            "INT": 0,
            "SAG": 0,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Effrayé",
            "Paralysé",
            "Empoisonné",
            "À terre"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 5",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +0 au toucher, allonge 5 m. Dégâts : 3 Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#388e3c"
    },
    "Squelette": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 14,
            "INT": 6,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 80/320 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Squelette de destrier": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 13,
        "vitesse": "60 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 14,
            "INT": 2,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 7 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 charge if move at least 20ft 9 extra damage and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Squelette de minotaure": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "45",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 14,
            "INT": 6,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 15 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 charge if move at least 20ft 9 extra damage and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Squelette enflammé": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 14,
            "INT": 10,
            "SAG": 14,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [
            {
                "nom": "Death Burst",
                "desc": ""
            },
            {
                "nom": "Illumination",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 8 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 60 m. Dégâts : 7 Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Stirge": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très petit",
        "alignement": "Non aligné",
        "fd": "1/8",
        "xp": 25,
        "pv": "5",
        "ca": 14,
        "vitesse": "10 m, vol 40 m",
        "carac": {
            "FOR": 4,
            "DEX": 16,
            "CON": 10,
            "INT": 2,
            "SAG": 8,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 9",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit they attached and do 5 necrotic damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Succube": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "4",
        "xp": 1100,
        "pv": "71",
        "ca": 15,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 8,
            "DEX": 16,
            "CON": 12,
            "INT": 14,
            "SAG": 12,
            "CHA": 20
        },
        "resistances": [
            "Froid",
            "Feu",
            "Poison",
            "Psychique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Incubus Form",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 16 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Draining Kiss a charmed target within 5ft on fail 13 psychic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs",
            "Urbain"
        ],
        "couleur": "#8b0000"
    },
    "Sylvanien": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Très grand",
        "alignement": "Chaotique bon",
        "fd": "9",
        "xp": 5000,
        "pv": "138",
        "ca": 16,
        "vitesse": "30 m",
        "carac": {
            "FOR": 22,
            "DEX": 6,
            "CON": 20,
            "INT": 12,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [
            "Contondant",
            "Perforant"
        ],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [
            {
                "nom": "Monstre de siège",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 16 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +10 au toucher, portée 180 m. Dégâts : 28 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Animate trees 1/day makes 2 Treants"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt"
        ],
        "couleur": "#388e3c"
    },
    "Tapis étouffant animé": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "27",
        "ca": 12,
        "vitesse": "10 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 10,
            "INT": 0,
            "SAG": 2,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 6",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit grappled blinded restrained and suffocating"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Tarrasque": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Gigantesque",
        "alignement": "Non aligné",
        "fd": "30",
        "xp": 155000,
        "pv": "697",
        "ca": 25,
        "vitesse": "60 m, fouissement 40 m, escalade 60 m",
        "carac": {
            "FOR": 30,
            "DEX": 10,
            "CON": 30,
            "INT": 2,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Charmé",
            "Assourdi",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Swallow target is grapplied on fail swallowed blinded and restrained total cover 17 acid damage every round",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +18 au toucher, allonge 15 m. Dégâts : 36 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +19 au toucher, allonge 15 m. Dégâts : 28 Tranchant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +19 au toucher, allonge 30 m. Dégâts : 23 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grappled and restrained, Atk 2 on hit prone, Thunderous Bellow recharges on 5-6 150ft cone on fail 78 thunder damage deafened and frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#bf360c"
    },
    "Tas grouillant": {
        "icone": "🌿",
        "categorie": "Plante",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "110",
        "ca": 15,
        "vitesse": "30 m, nage 20 m",
        "carac": {
            "FOR": 18,
            "DEX": 8,
            "CON": 16,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [
            "Froid",
            "Feu"
        ],
        "immunites": [
            "Foudre",
            "Assourdi",
            "Épuisement"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Lightning Absorption",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 12 Contondant, Foudre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit pulls 5ft, Engulf within 5ft grappled blinded restrained and 10 lighting damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Marais"
        ],
        "couleur": "#388e3c"
    },
    "Thonot quaggoth": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Chaotique neutre",
        "fd": "3",
        "xp": 700,
        "pv": "67",
        "ca": 15,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 16,
            "INT": 6,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Bloodied Fury",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 if they are bloodied 13 damage"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Psionic Defense 3/day cast Feather Fall, or Shield"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Thri-kreen maraudeur": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "1",
        "xp": 200,
        "pv": "33",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 16,
            "CON": 12,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 7 Tranchant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 30/120 m. Dégâts : 5 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie"
        ],
        "couleur": "#bf360c"
    },
    "Thri-kreen psion": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "8",
        "xp": 3900,
        "pv": "149",
        "ca": 16,
        "vitesse": "40 m, vol 20 m (stationnaire)",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 18,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [
            "Psychique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 18 Psychique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 120 m. Dégâts : 18 Psychique."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie"
        ],
        "couleur": "#bf360c"
    },
    "Tigre": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "22",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If it has adv. on the Akt +3 to damage and gives prone condition, move up to half its speed that can hide"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Tigre à dents de sabre": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "2",
        "xp": 450,
        "pv": "52",
        "ca": 13,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 14,
            "INT": 2,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Saut en course",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 11 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Collines",
            "Montagne"
        ],
        "couleur": "#5a8a3c"
    },
    "Tigre-garou": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "4",
        "xp": 1100,
        "pv": "120",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 16,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 12 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 10 Tranchant."
            },
            {
                "nom": "Attaque 3 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 150/600 m. Dégâts : 11 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on fail cursed if target drops to 0hp it becomes a weretiger"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Forêt",
            "Prairie"
        ],
        "couleur": "#bf360c"
    },
    "Tortue-dragon": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Gigantesque",
        "alignement": "Neutre",
        "fd": "17",
        "xp": 18000,
        "pv": "356",
        "ca": 20,
        "vitesse": "20 m, nage 50 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 20,
            "INT": 10,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [
            "Feu"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Amphibie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 15 m. Dégâts : 30 Perforant, Feu."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +13 au toucher, allonge 15 m. Dégâts : 18 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 the water does not grant resistance to the fire, Akt 2 gives prone condition, Steam Breath recharges 5-6 60ft coone 56 fire damage"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Sous-marin"
        ],
        "couleur": "#c0392b"
    },
    "Tourbillon occulte": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Grand",
        "alignement": "Chaotique neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "144",
        "ca": 11,
        "vitesse": "10 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 16,
            "INT": 12,
            "SAG": 8,
            "CHA": 16
        },
        "resistances": [
            "Force"
        ],
        "immunites": [
            "Feu",
            "Foudre",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 13 Feu, Foudre."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 120 m. Dégâts : 14 Force."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Eldritch Overload when takes damage creatures within 5ft on fail take 7 force damage and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Traqueur invisible": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "97",
        "ca": 14,
        "vitesse": "50 m, vol 50 m (stationnaire)",
        "carac": {
            "FOR": 16,
            "DEX": 18,
            "CON": 14,
            "INT": 10,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Poison",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 18",
        "traits": [
            {
                "nom": "Air Form",
                "desc": ""
            },
            {
                "nom": "Invisibility",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 11 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Vortex on fail 7 thunder damage grappled cannot cast spells with verbal component and take 7 thunder damage every round"
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#2980b9"
    },
    "Tricératops": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "5",
        "xp": 1800,
        "pv": "114",
        "ca": 14,
        "vitesse": "50 m",
        "carac": {
            "FOR": 22,
            "DEX": 8,
            "CON": 16,
            "INT": 2,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 19 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Charge attack +9 to damage and gives pron condition"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Tridrone modron": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "16",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 12,
            "INT": 8,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 10",
        "traits": [
            {
                "nom": "Disintegration",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +3 au toucher, portée 120 m. Dégâts : 4 Force."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Méchanus)"
        ],
        "couleur": "#607d8b"
    },
    "Troglodyte": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "13",
        "ca": 11,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 14,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Stench",
                "desc": ""
            },
            {
                "nom": "Sensibilité au soleil",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Troll": {
        "icone": "🗿",
        "categorie": "Géant",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "5",
        "xp": 1800,
        "pv": "94",
        "ca": 15,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 20,
            "INT": 6,
            "SAG": 8,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Loathsome Limbs",
                "desc": ""
            },
            {
                "nom": "Régénération",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 11 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Arctique",
            "Forêt",
            "Collines",
            "Montagne",
            "Marais",
            "Outreterre"
        ],
        "couleur": "#795548"
    },
    "Tyran de la mort": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Grand",
        "alignement": "Loyal mauvais",
        "fd": "14",
        "xp": 11500,
        "pv": "195",
        "ca": 19,
        "vitesse": "5 m, vol 40 m (stationnaire)",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 14,
            "INT": 18,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 22",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Eye Rays: Charm Ray on fail 13 psychic damage charmed, Paralyzing on fail paralyzed, Fear Ray on fail 10 Psychic Damage and frightened, Slowing Ray on fail 18 Necrotic Damage and can't take reactions speed is 1/2 and either take an action or bonus action, Enervation Ray on fail 16 poison damage and poisoned, Telekinetic Ray on fail moved 30 ft and restrained and incapacitated, Sleep Ray on fail unconscious, Petrification Ray on fail restrained and second fail petrified, Disintegration Ray on fail 36 force damage a and if reduced to 0 turns into dust, Death Ray on fail 55 Necrotic Damage and if reduced to 0 target is dead"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#37474f"
    },
    "Tyrannosaure": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "8",
        "xp": 3900,
        "pv": "136",
        "ca": 13,
        "vitesse": "50 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 18,
            "INT": 2,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 10 m. Dégâts : 33 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 15 m. Dégâts : 25 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 grapples and restrained, Akt 2 prones"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Têtard slaad": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Très petit",
        "alignement": "Chaotique neutre",
        "fd": "1/8",
        "xp": 25,
        "pv": "7",
        "ca": 12,
        "vitesse": "30 m, fouissement 10 m",
        "carac": {
            "FOR": 6,
            "DEX": 14,
            "CON": 10,
            "INT": 2,
            "SAG": 4,
            "CHA": 2
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Foudre",
            "Tonnerre"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 7",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Ultroloth": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "221",
        "ca": 19,
        "vitesse": "30 m, vol 60 m (stationnaire)",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 18,
            "INT": 18,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Acide",
            "Poison",
            "Charmé",
            "Effrayé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Fiendish Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 15 m. Dégâts : 25 Force."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 teleport 10ft on hit, Hypnotic Gaze 30ft coone on fail 10 psychic damage and stunned"
            }
        ],
        "description": "",
        "environnement": [
            "Plans Inférieurs"
        ],
        "couleur": "#8b0000"
    },
    "Valindra Manteau-d'Ombre": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "21",
        "xp": 33000,
        "pv": "315",
        "ca": 20,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 16,
            "INT": 20,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Foudre"
        ],
        "immunites": [
            "Nécrotique",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 19",
        "traits": [
            {
                "nom": "Spirit Gem",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 5 m. Dégâts : 31 Force."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +12 au toucher, portée 120 m. Dégâts : 31 Force."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 5 m. Dégâts : 14 Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "On Atk 2 paralyzed on hit, Deathly Grasp: creatures within 30ft first fail 39 force and restrained continued failures 39 necrotic and gains 20 temp hp"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Protective Magic: Cast counterspell or shield"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#37474f"
    },
    "Vampire": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "13",
        "xp": 10000,
        "pv": "195",
        "ca": 16,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 18,
            "INT": 16,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 17",
        "traits": [
            {
                "nom": "Misty Escape",
                "desc": ""
            },
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Vampire Weakness: Forbiddance",
                "desc": ""
            },
            {
                "nom": "Running Water",
                "desc": ""
            },
            {
                "nom": "Stake of the Heart",
                "desc": ""
            },
            {
                "nom": "Sunlight",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 15 Contondant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit target grappled, Bite within 5ft that is grappled, incapacitated or restrained on fail 19 piercing, necrotic regains the HP and target reduced 0 HP comes back as a vampire"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Vampire apporteur de nuit": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "142",
        "ca": 16,
        "vitesse": "30 m, vol 30 m (stationnaire)",
        "carac": {
            "FOR": 16,
            "DEX": 18,
            "CON": 16,
            "INT": 12,
            "SAG": 14,
            "CHA": 14
        },
        "resistances": [],
        "immunites": [
            "Nécrotique",
            "Froid",
            "Charmé",
            "Épuisement",
            "Effrayé"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 15",
        "traits": [
            {
                "nom": "Sunlight Hypersensitivity",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 17 Perforant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 21 Tranchant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit HP max reduced by the damage taken and vampire regains HP"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Vampire infernaliste": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen ou Petit",
        "alignement": "Loyal mauvais",
        "fd": "14",
        "xp": 11500,
        "pv": "172",
        "ca": 16,
        "vitesse": "40 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 16,
            "INT": 20,
            "SAG": 16,
            "CHA": 18
        },
        "resistances": [
            "Feu",
            "Nécrotique",
            "Poison"
        ],
        "immunites": [
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 18",
        "traits": [
            {
                "nom": "Misty Escape",
                "desc": ""
            },
            {
                "nom": "Vampire Weakness",
                "desc": ""
            },
            {
                "nom": "Forbiddance",
                "desc": ""
            },
            {
                "nom": "Running Water",
                "desc": ""
            },
            {
                "nom": "Stake to the Heart",
                "desc": ""
            },
            {
                "nom": "Sunlight",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +9 au toucher, allonge 5 m. Dégâts : 23 Tranchant, Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grabbled, Bite one creature within 5ft on fail 22 piercing and necrotic and losses highest level spell slot"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Vase grise": {
        "icone": "🟢",
        "categorie": "Vase",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1/2",
        "xp": 100,
        "pv": "22",
        "ca": 9,
        "vitesse": "10 m, escalade 10 m",
        "carac": {
            "FOR": 12,
            "DEX": 6,
            "CON": 16,
            "INT": 0,
            "SAG": 6,
            "CHA": 2
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu"
        ],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "À terre",
            "Entravé"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Amorphous",
                "desc": ""
            },
            {
                "nom": "Corrosive Form",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 10 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit nonmagical armour -1 AC if reduced to 10 AC armour is destroyed"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#827717"
    },
    "Vase grise psychique": {
        "icone": "🟢",
        "categorie": "Vase",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "1",
        "xp": 200,
        "pv": "37",
        "ca": 9,
        "vitesse": "10 m, escalade 10 m",
        "carac": {
            "FOR": 12,
            "DEX": 8,
            "CON": 16,
            "INT": 10,
            "SAG": 6,
            "CHA": 2
        },
        "resistances": [
            "Acide",
            "Froid",
            "Feu",
            "Psychique"
        ],
        "immunites": [
            "Aveuglé",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Agrippé",
            "À terre",
            "Entravé"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Amorphous",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 11 Acide."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit disadvantage on intelligence saving throws until end of the ooze's turn, Psychic Crush on fail within 60ft 13 psychic damage"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre"
        ],
        "couleur": "#827717"
    },
    "Vautour": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Moyen",
        "alignement": "Non aligné",
        "fd": "0",
        "xp": 10,
        "pv": "5",
        "ca": 10,
        "vitesse": "10 m, vol 50 m",
        "carac": {
            "FOR": 6,
            "DEX": 12,
            "CON": 12,
            "INT": 10,
            "SAG": 2,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 13",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +2 au toucher, allonge 5 m. Dégâts : 2 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Vautour géant": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "25",
        "ca": 10,
        "vitesse": "10 m, vol 60 m",
        "carac": {
            "FOR": 14,
            "DEX": 10,
            "CON": 16,
            "INT": 6,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [
            "Nécrotique"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 13",
        "traits": [
            {
                "nom": "Tactique de meute",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 9 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Prairie",
            "Collines"
        ],
        "couleur": "#bf360c"
    },
    "Ver pourpre": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Gigantesque",
        "alignement": "Non aligné",
        "fd": "15",
        "xp": 13000,
        "pv": "247",
        "ca": 18,
        "vitesse": "50 m, fouissement 50 m",
        "carac": {
            "FOR": 28,
            "DEX": 6,
            "CON": 22,
            "INT": 0,
            "SAG": 8,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision aveugle 30 m, Perception des vibrations 60 m, Perception passive 9",
        "traits": [
            {
                "nom": "Fouisseur",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 22 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +14 au toucher, allonge 10 m. Dégâts : 51 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Outreterre"
        ],
        "couleur": "#bf360c"
    },
    "Vouivre": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "6",
        "xp": 2300,
        "pv": "127",
        "ca": 14,
        "vitesse": "30 m, vol 80 m",
        "carac": {
            "FOR": 18,
            "DEX": 10,
            "CON": 16,
            "INT": 4,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 10 m. Dégâts : 35 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 2 also causes the target to be poisoned"
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#c0392b"
    },
    "Vouivre-garou": {
        "icone": "🐉",
        "categorie": "Dragon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "8",
        "xp": 3900,
        "pv": "152",
        "ca": 16,
        "vitesse": "30 m, vol 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 20,
            "INT": 10,
            "SAG": 12,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 14",
        "traits": [
            {
                "nom": "Attaque en vol",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +7 au toucher, portée 30/120 m. Dégâts : 18 Perforant."
            },
            {
                "nom": "Attaque 3 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 18 Tranchant."
            },
            {
                "nom": "Attaque 4 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 23 Perforant, Poison."
            }
        ],
        "description": "",
        "environnement": [
            "Collines",
            "Montagne"
        ],
        "couleur": "#c0392b"
    },
    "Vrock": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "6",
        "xp": 2300,
        "pv": "152",
        "ca": 15,
        "vitesse": "40 m, vol 60 m",
        "carac": {
            "FOR": 16,
            "DEX": 14,
            "CON": 18,
            "INT": 8,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 11",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 20 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Spores recharges on 6 within 20ft on fail poisoned and takes 5 poison damage, Stunning Screech 1/day, within 20ft on fail 10 thunder damage and stunned"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Worg": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "1/2",
        "xp": 100,
        "pv": "26",
        "ca": 13,
        "vitesse": "50 m",
        "carac": {
            "FOR": 16,
            "DEX": 12,
            "CON": 12,
            "INT": 6,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 7 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 next Akt against target has advantage"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Worg terrible": {
        "icone": "🧚",
        "categorie": "Fée",
        "taille": "Très grand",
        "alignement": "Neutre mauvais",
        "fd": "10",
        "xp": 5900,
        "pv": "147",
        "ca": 16,
        "vitesse": "50 m",
        "carac": {
            "FOR": 22,
            "DEX": 14,
            "CON": 18,
            "INT": 6,
            "SAG": 16,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 120 m, Perception passive 21",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 22 Perforant, Poison."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 poisoned on hit, Dreadful Howl recharges on 5-6 30ft on fail 36 psychic damage and frightened"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines",
            "Plans (Féerie Sauvage)"
        ],
        "couleur": "#e91e8c"
    },
    "Wyrm rouillé": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Gigantesque",
        "alignement": "Neutre",
        "fd": "14",
        "xp": 11500,
        "pv": "231",
        "ca": 20,
        "vitesse": "40 m, nage 60 m",
        "carac": {
            "FOR": 24,
            "DEX": 12,
            "CON": 22,
            "INT": 8,
            "SAG": 14,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Feu",
            "Poison",
            "Épuisement",
            "Effrayé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +12 au toucher, allonge 20 m. Dégâts : 29 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Stream Breath: 60ft cone on fail 45 fire damage and burning"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Forêt"
        ],
        "couleur": "#607d8b"
    },
    "Xorn": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Moyen",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "84",
        "ca": 19,
        "vitesse": "20 m, fouissement 20 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 22,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception des vibrations 60 m, Perception passive 16",
        "traits": [
            {
                "nom": "Earth Glide",
                "desc": ""
            },
            {
                "nom": "Treasure Sense",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 17 Perforant."
            },
            {
                "nom": "Attaque 2 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 8 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Plans (Plan Élémentaire de la Terre)"
        ],
        "couleur": "#2980b9"
    },
    "Yochlol": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "10",
        "xp": 5900,
        "pv": "153",
        "ca": 15,
        "vitesse": "30 m, escalade 30 m",
        "carac": {
            "FOR": 14,
            "DEX": 18,
            "CON": 18,
            "INT": 12,
            "SAG": 14,
            "CHA": 16
        },
        "resistances": [
            "Froid",
            "Feu",
            "Foudre"
        ],
        "immunites": [
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Escalade d'araignée",
                "desc": ""
            },
            {
                "nom": "Marcheur de toiles",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 25 Acide."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 120 m. Dégâts : 25 Acide."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Toxic Escape when hit 1/2 damage and teleport 30ft any creature within 5ft on fail poisoned and incapacitated"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Abysses)"
        ],
        "couleur": "#8b0000"
    },
    "Yéti": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Grand",
        "alignement": "Chaotique mauvais",
        "fd": "3",
        "xp": 700,
        "pv": "51",
        "ca": 12,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 18,
            "DEX": 12,
            "CON": 16,
            "INT": 8,
            "SAG": 12,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Peur du feu",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 10 Tranchant, Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +6 au toucher, portée 30/120 m. Dégâts : 8 Contondant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Chilling Gaze within 30ft on fail 5 cold damage and paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#bf360c"
    },
    "Yéti abominable": {
        "icone": "👾",
        "categorie": "Monstruosité",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "9",
        "xp": 5000,
        "pv": "137",
        "ca": 15,
        "vitesse": "40 m, escalade 40 m",
        "carac": {
            "FOR": 24,
            "DEX": 10,
            "CON": 22,
            "INT": 8,
            "SAG": 12,
            "CHA": 8
        },
        "resistances": [],
        "immunites": [
            "Froid"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 19",
        "traits": [
            {
                "nom": "Peur du feu",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 5 m. Dégâts : 21 Tranchant, Froid."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +11 au toucher, portée 60/240 m. Dégâts : 19 Contondant, Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "Chilling Gaze within 30ft on fail 21 cold damage and paralyzed, Cold Breath recharges on 6 30ft cone on fail 45 cold damage"
            }
        ],
        "description": "",
        "environnement": [
            "Arctique"
        ],
        "couleur": "#bf360c"
    },
    "Zerth githzerai": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Loyal neutre",
        "fd": "6",
        "xp": 2300,
        "pv": "84",
        "ca": 17,
        "vitesse": "40 m",
        "carac": {
            "FOR": 12,
            "DEX": 18,
            "CON": 14,
            "INT": 16,
            "SAG": 16,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 16",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 24 Contondant, Psychique."
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Cast Feather Fall or Shield"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Limbes)"
        ],
        "couleur": "#6b3fa0"
    },
    "Zlan": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Très grand",
        "alignement": "Chaotique mauvais",
        "fd": "18",
        "xp": 20000,
        "pv": "199",
        "ca": 18,
        "vitesse": "30 m",
        "carac": {
            "FOR": 20,
            "DEX": 12,
            "CON": 18,
            "INT": 20,
            "SAG": 18,
            "CHA": 14
        },
        "resistances": [
            "Foudre",
            "Nécrotique"
        ],
        "immunites": [
            "Froid",
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 20",
        "traits": [
            {
                "nom": "Chardalyn Sense",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Next of the Seven",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +11 au toucher, allonge 10 m. Dégâts : 34 Contondant, Nécrotique."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +11 au toucher, portée 120 m. Dégâts : 27 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit charmed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Counterspell"
            }
        ],
        "description": "",
        "environnement": [
            "PNJ"
        ],
        "couleur": "#37474f"
    },
    "Zombie": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "1/4",
        "xp": 50,
        "pv": "15",
        "ca": 8,
        "vitesse": "20 m",
        "carac": {
            "FOR": 12,
            "DEX": 6,
            "CON": 16,
            "INT": 2,
            "SAG": 6,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Robustesse du mort-vivant",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 4 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Zombie ogre": {
        "icone": "💀",
        "categorie": "Mort-vivant",
        "taille": "Grand",
        "alignement": "Neutre mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "85",
        "ca": 8,
        "vitesse": "30 m",
        "carac": {
            "FOR": 18,
            "DEX": 6,
            "CON": 18,
            "INT": 2,
            "SAG": 6,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Empoisonné"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 8",
        "traits": [
            {
                "nom": "Robustesse du mort-vivant",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 13 Contondant."
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Feuilleombre)",
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#37474f"
    },
    "Éclaireur": {
        "icone": "🧑",
        "categorie": "Humanoïde",
        "taille": "Moyen ou Petit",
        "alignement": "Neutre",
        "fd": "1/2",
        "xp": 100,
        "pv": "16",
        "ca": 13,
        "vitesse": "30 m",
        "carac": {
            "FOR": 10,
            "DEX": 14,
            "CON": 12,
            "INT": 10,
            "SAG": 12,
            "CHA": 10
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 15",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 5 Perforant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +4 au toucher, portée 150/600 m. Dégâts : 6 Perforant."
            }
        ],
        "description": "",
        "environnement": [
            "Partout"
        ],
        "couleur": "#455a64"
    },
    "Éclaireur phaerimm": {
        "icone": "👁️",
        "categorie": "Aberration",
        "taille": "Moyen",
        "alignement": "Neutre mauvais",
        "fd": "2",
        "xp": 450,
        "pv": "44",
        "ca": 13,
        "vitesse": "10 m, vol 40 m",
        "carac": {
            "FOR": 12,
            "DEX": 12,
            "CON": 12,
            "INT": 14,
            "SAG": 16,
            "CHA": 16
        },
        "resistances": [],
        "immunites": [
            "Charmé"
        ],
        "sens": "Vision parfaite 60 m, Perception passive 15",
        "traits": [
            {
                "nom": "Résistance à la magie",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 13 Perforant, Poison."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +5 au toucher, portée 120 m. Dégâts : 6 Psychique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit charmed"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "Uncanny Dodge"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#6b3fa0"
    },
    "Éfrit": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "11",
        "xp": 7200,
        "pv": "212",
        "ca": 17,
        "vitesse": "40 m, vol 60 m (stationnaire)",
        "carac": {
            "FOR": 22,
            "DEX": 12,
            "CON": 24,
            "INT": 16,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [],
        "immunites": [
            "Feu"
        ],
        "sens": "Vision dans le noir 120 m, Perception passive 12",
        "traits": [
            {
                "nom": "Elemental Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Wishes",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 3 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +10 au toucher, allonge 5 m. Dégâts : 26 Tranchant, Feu."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 120 m. Dégâts : 24 Feu."
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans (Plan Élémentaire du Feu)"
        ],
        "couleur": "#2980b9"
    },
    "Élan": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Grand",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "11",
        "ca": 10,
        "vitesse": "50 m",
        "carac": {
            "FOR": 16,
            "DEX": 10,
            "CON": 10,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Vision dans le noir 60 m, Perception passive 12",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 5 m. Dégâts : 6 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If charging, +3 damage and gives prone condition"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie",
            "Collines"
        ],
        "couleur": "#5a8a3c"
    },
    "Élan géant": {
        "icone": "✨",
        "categorie": "Céleste",
        "taille": "Très grand",
        "alignement": "Neutre bon",
        "fd": "2",
        "xp": 450,
        "pv": "42",
        "ca": 14,
        "vitesse": "60 m",
        "carac": {
            "FOR": 18,
            "DEX": 18,
            "CON": 14,
            "INT": 6,
            "SAG": 14,
            "CHA": 10
        },
        "resistances": [
            "Nécrotique",
            "Radiant"
        ],
        "immunites": [],
        "sens": "Vision dans le noir 90 m, Perception passive 14",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 10 m. Dégâts : 16 Contondant, Radiant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 charge Akt +5 bludgeoning and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Forêt",
            "Prairie",
            "Collines"
        ],
        "couleur": "#d4a017"
    },
    "Élémentaire d'air": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "90",
        "ca": 15,
        "vitesse": "10 m, vol 90 m (stationnaire)",
        "carac": {
            "FOR": 14,
            "DEX": 20,
            "CON": 14,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [
            "Contondant",
            "Foudre",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Poison",
            "Tonnerre",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Air Form",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 14 Tonnerre."
            },
            {
                "nom": "Notes de combat",
                "desc": "Whirlwind recharges on 5-6 one target on fail 24 thunder damage pushed 20ft and prone"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Montagne",
            "Plans (Plan Élémentaire de l'Air)"
        ],
        "couleur": "#2980b9"
    },
    "Élémentaire d'eau": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "114",
        "ca": 14,
        "vitesse": "30 m, nage 90 m",
        "carac": {
            "FOR": 18,
            "DEX": 14,
            "CON": 18,
            "INT": 4,
            "SAG": 10,
            "CHA": 8
        },
        "resistances": [
            "Acide",
            "Feu"
        ],
        "immunites": [
            "Poison",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Freeze",
                "desc": ""
            },
            {
                "nom": "Water Form",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +7 au toucher, allonge 5 m. Dégâts : 13 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 1 on hit prone, Whelm recharges on 4-6 enter the same space on fail 22 bludgeoning damage grappled restrained suffocating and 9 bludgeoning damage every turn"
            }
        ],
        "description": "",
        "environnement": [
            "Côtier",
            "Plans (Plan Élémentaire de l'Eau)",
            "Marais",
            "Sous-marin"
        ],
        "couleur": "#2980b9"
    },
    "Élémentaire de feu": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "93",
        "ca": 13,
        "vitesse": "50 m",
        "carac": {
            "FOR": 10,
            "DEX": 16,
            "CON": 16,
            "INT": 6,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [
            "Contondant",
            "Perforant",
            "Tranchant"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Fire Aura",
                "desc": ""
            },
            {
                "nom": "Fire Form",
                "desc": ""
            },
            {
                "nom": "Illumination",
                "desc": ""
            },
            {
                "nom": "Water Susceptibility",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +6 au toucher, allonge 5 m. Dégâts : 10 Feu."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit starts burning"
            }
        ],
        "description": "",
        "environnement": [
            "Désert",
            "Plans (Plan Élémentaire du Feu)"
        ],
        "couleur": "#2980b9"
    },
    "Élémentaire de terre": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "5",
        "xp": 1800,
        "pv": "147",
        "ca": 17,
        "vitesse": "30 m, fouissement 30 m",
        "carac": {
            "FOR": 20,
            "DEX": 8,
            "CON": 20,
            "INT": 4,
            "SAG": 10,
            "CHA": 4
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Épuisement",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception des vibrations 60 m, Perception passive 10",
        "traits": [
            {
                "nom": "Earth Glide",
                "desc": ""
            },
            {
                "nom": "Monstre de siège",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 10 m. Dégâts : 14 Contondant."
            },
            {
                "nom": "Attaque 2 (distance)",
                "desc": "Attaque à distance : +8 au toucher, portée 60 m. Dégâts : 8 Contondant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Atk 2 on hit prone"
            }
        ],
        "description": "",
        "environnement": [
            "Montagne",
            "Plans (Plan Élémentaire de la Terre)",
            "Outreterre"
        ],
        "couleur": "#2980b9"
    },
    "Éléphant": {
        "icone": "🐾",
        "categorie": "Bête",
        "taille": "Très grand",
        "alignement": "Non aligné",
        "fd": "4",
        "xp": 1100,
        "pv": "76",
        "ca": 12,
        "vitesse": "40 m",
        "carac": {
            "FOR": 22,
            "DEX": 8,
            "CON": 16,
            "INT": 2,
            "SAG": 10,
            "CHA": 6
        },
        "resistances": [],
        "immunites": [],
        "sens": "Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 2 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 15 Perforant."
            },
            {
                "nom": "Notes de combat",
                "desc": "If charging, gives prone condition"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#5a8a3c"
    },
    "Épouvantail": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Moyen",
        "alignement": "Chaotique mauvais",
        "fd": "1",
        "xp": 200,
        "pv": "27",
        "ca": 11,
        "vitesse": "20 m",
        "carac": {
            "FOR": 10,
            "DEX": 12,
            "CON": 10,
            "INT": 10,
            "SAG": 10,
            "CHA": 12
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Charmé",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "Inconscient"
        ],
        "sens": "Vision dans le noir 60 m, Perception passive 10",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +3 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            },
            {
                "nom": "Notes de combat",
                "desc": "Akt 1 on hit frightened, Terrifying Glare within 30ft on fail frightened and paralyzed"
            }
        ],
        "description": "",
        "environnement": [
            "Prairie"
        ],
        "couleur": "#607d8b"
    },
    "Épée volante animée": {
        "icone": "⚙️",
        "categorie": "Artificiel",
        "taille": "Petit",
        "alignement": "Non aligné",
        "fd": "1/4",
        "xp": 50,
        "pv": "14",
        "ca": 17,
        "vitesse": "5 m, vol 50 m (stationnaire)",
        "carac": {
            "FOR": 12,
            "DEX": 14,
            "CON": 10,
            "INT": 0,
            "SAG": 4,
            "CHA": 0
        },
        "resistances": [],
        "immunites": [
            "Poison",
            "Psychique",
            "Charmé",
            "Assourdi",
            "Épuisement",
            "Effrayé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné"
        ],
        "sens": "Vision aveugle 60 m, Perception passive 7",
        "traits": [],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +4 au toucher, allonge 5 m. Dégâts : 6 Tranchant."
            }
        ],
        "description": "",
        "environnement": [
            "Urbain"
        ],
        "couleur": "#607d8b"
    },
    "Érinye": {
        "icone": "😈",
        "categorie": "Fiélon",
        "taille": "Moyen",
        "alignement": "Loyal mauvais",
        "fd": "12",
        "xp": 8400,
        "pv": "178",
        "ca": 18,
        "vitesse": "30 m, vol 60 m",
        "carac": {
            "FOR": 18,
            "DEX": 16,
            "CON": 18,
            "INT": 14,
            "SAG": 14,
            "CHA": 18
        },
        "resistances": [
            "Froid"
        ],
        "immunites": [
            "Feu",
            "Poison",
            "Empoisonné"
        ],
        "sens": "Vision parfaite 120 m, Perception passive 16",
        "traits": [
            {
                "nom": "Demonic Restoration",
                "desc": ""
            },
            {
                "nom": "Résistance à la magie",
                "desc": ""
            },
            {
                "nom": "Magic Rope",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaques multiples",
                "desc": "La créature effectue 4 attaques."
            },
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +8 au toucher, allonge 5 m. Dégâts : 24 Tranchant, Nécrotique."
            },
            {
                "nom": "Notes de combat",
                "desc": "Entangling Rope Within 120ft on fail a target 14 force damage and restrained"
            }
        ],
        "reactions": [
            {
                "nom": "Réaction",
                "desc": "When hit +4 to AC"
            }
        ],
        "description": "",
        "environnement": [
            "Plans (Neuf Enfers)"
        ],
        "couleur": "#8b0000"
    },
    "Étrange aquatique": {
        "icone": "🌊",
        "categorie": "Élémentaire",
        "taille": "Grand",
        "alignement": "Neutre",
        "fd": "3",
        "xp": 700,
        "pv": "65",
        "ca": 13,
        "vitesse": "5 m, nage 60 m",
        "carac": {
            "FOR": 16,
            "DEX": 16,
            "CON": 12,
            "INT": 10,
            "SAG": 10,
            "CHA": 10
        },
        "resistances": [
            "Feu"
        ],
        "immunites": [
            "Poison",
            "Épuisement",
            "Agrippé",
            "Paralysé",
            "Pétrifié",
            "Empoisonné",
            "À terre",
            "Entravé",
            "Inconscient"
        ],
        "sens": "Vision aveugle 30 m, Perception passive 10",
        "traits": [
            {
                "nom": "Invisible in Water",
                "desc": ""
            },
            {
                "nom": "Water Bound",
                "desc": ""
            }
        ],
        "actions": [
            {
                "nom": "Attaque 1 (mêlée)",
                "desc": "Attaque de mêlée : +5 au toucher, allonge 20 m. Dégâts : 13 Froid."
            },
            {
                "nom": "Notes de combat",
                "desc": "On hit grappled and restrained"
            }
        ],
        "description": "",
        "environnement": [
            "Outreterre",
            "Urbain"
        ],
        "couleur": "#2980b9"
    }
};

// Ordre d'affichage par catégorie
const RPG_BESTIAIRE_CATEGORIES = [
    { id: "Bête", icone: "🐾", label: "Bêtes" },
    { id: "Mort-vivant", icone: "💀", label: "Morts-vivants" },
    { id: "Humanoïde", icone: "👤", label: "Humanoïdes" },
    { id: "Fée", icone: "🧚", label: "Fées" },
    { id: "Géant", icone: "🗿", label: "Géants" },
    { id: "Dragon", icone: "🐉", label: "Dragons" },
    { id: "Fiélon", icone: "😈", label: "Fiélons" },
    { id: "Céleste", icone: "✨", label: "Célestes" },
    { id: "Aberration", icone: "👁️", label: "Aberrations" },
    { id: "Artificiel", icone: "⚙️", label: "Artificiels" },
    { id: "Élémentaire", icone: "🌊", label: "Élémentaires" },
    { id: "Monstruosité", icone: "👾", label: "Monstruosités" },
    { id: "Plante", icone: "🌿", label: "Plantes" },
    { id: "Vase", icone: "🟢", label: "Vases" },
    { id: "Celestial or Fiend", icone: "🐉", label: "Celestial or Fiends" }
];

// Export
if (typeof window !== 'undefined') {
    window.RPG_BESTIAIRE            = RPG_BESTIAIRE;
    window.RPG_BESTIAIRE_CATEGORIES = RPG_BESTIAIRE_CATEGORIES;
}
if (typeof module !== 'undefined') {
    module.exports = { RPG_BESTIAIRE, RPG_BESTIAIRE_CATEGORIES };
}
