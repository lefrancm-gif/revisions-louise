export const geometry = {
  "id": "math-geometrie",
  "title": "Triangles, angles et justifications",
  "subject": "Géométrie",
  "description": "Les notions des fiches retrouvées : constructions, hauteurs, médianes, médiatrices, aires et raisonnement. Les compléments du cours sont distingués du socle de 5e.",
  "questions": [
    {
      "id": "math-geometrie-q1",
      "topic": "Droites remarquables",
      "type": "mcq",
      "prompt": "M est le milieu de [BC]. Que représente [AM] dans ABC ?",
      "choices": [
        "Une médiane",
        "Une hauteur forcément",
        "Une médiatrice forcément"
      ],
      "answer": 0,
      "memo": "Une médiane relie un sommet au milieu du côté opposé."
    },
    {
      "id": "math-geometrie-q2",
      "topic": "Droites remarquables",
      "type": "mcq",
      "prompt": "H appartient à (BC) et (AH) est perpendiculaire à (BC). (AH) est…",
      "choices": [
        "La médiatrice de [BC] forcément",
        "La hauteur issue de A",
        "La médiane issue de A forcément"
      ],
      "answer": 1,
      "memo": "La hauteur passe par A et est perpendiculaire à la droite du côté opposé."
    },
    {
      "id": "math-geometrie-q3",
      "topic": "Droites remarquables",
      "type": "mcq",
      "prompt": "Une médiatrice passe par…",
      "choices": [
        "Le milieu sans condition d’angle",
        "Le milieu du segment, perpendiculairement",
        "Un sommet quelconque"
      ],
      "answer": 1,
      "memo": "Il faut les deux conditions : milieu et angle droit."
    },
    {
      "id": "math-geometrie-q4",
      "topic": "Aires",
      "type": "mcq",
      "prompt": "Base 8 cm, hauteur correspondante 3 cm : aire ?",
      "choices": [
        "11 cm²",
        "12 cm²",
        "24 cm²"
      ],
      "answer": 1,
      "memo": "8 × 3 ÷ 2 = 12 cm²."
    },
    {
      "id": "math-geometrie-q5",
      "topic": "Aires",
      "type": "mcq",
      "prompt": "Pourquoi une médiane partage-t-elle un triangle en deux aires égales ?",
      "choices": [
        "Les deux triangles sont toujours identiques",
        "Bases égales et hauteur commune",
        "Elle est toujours une hauteur"
      ],
      "answer": 1,
      "memo": "BM = MC et les deux bases sont sur la même droite (BC), donc la hauteur issue de A est commune."
    },
    {
      "id": "math-geometrie-q6",
      "topic": "Angles",
      "type": "mcq",
      "prompt": "Deux angles d’un triangle mesurent 48° et 67°. Le troisième ?",
      "choices": [
        "115°",
        "75°",
        "65°"
      ],
      "answer": 2,
      "memo": "180 − 48 − 67 = 65°."
    },
    {
      "id": "math-geometrie-q7",
      "topic": "Angles",
      "type": "mcq",
      "prompt": "ABC est isocèle en A, avec Â = 40°. Les angles B et C valent chacun…",
      "choices": [
        "140°",
        "70°",
        "40°"
      ],
      "answer": 1,
      "memo": "Les angles à la base sont égaux : (180 − 40) ÷ 2 = 70°."
    },
    {
      "id": "math-geometrie-q8",
      "topic": "Angles",
      "type": "mcq",
      "prompt": "Dans un triangle rectangle, un angle aigu vaut 35°. L’autre ?",
      "choices": [
        "145°",
        "65°",
        "55°"
      ],
      "answer": 2,
      "memo": "Les angles aigus totalisent 90° : 90 − 35 = 55°."
    },
    {
      "id": "math-geometrie-q9",
      "topic": "Constructions",
      "type": "mcq",
      "prompt": "Peut-on construire un triangle non aplati de côtés 3, 4 et 8 cm ?",
      "choices": [
        "Oui, car 8 est le plus grand",
        "Oui, tous les nombres conviennent",
        "Non, car 8 > 3 + 4"
      ],
      "answer": 2,
      "memo": "La plus grande longueur dépasse la somme des deux autres."
    },
    {
      "id": "math-geometrie-q10",
      "topic": "Constructions",
      "type": "mcq",
      "prompt": "Des longueurs 3, 4 et 7 cm donnent…",
      "choices": [
        "Un triangle rectangle",
        "Un triangle équilatéral",
        "Des points alignés"
      ],
      "answer": 2,
      "memo": "7 = 3 + 4 : le triangle est aplati."
    },
    {
      "id": "math-geometrie-q11",
      "topic": "Constructions",
      "type": "mcq",
      "prompt": "Des longueurs 4, 5 et 7 cm donnent…",
      "choices": [
        "Un triangle impossible",
        "Un triangle forcément rectangle",
        "Un triangle constructible non aplati"
      ],
      "answer": 2,
      "memo": "7 < 4 + 5, donc la condition est satisfaite."
    },
    {
      "id": "math-geometrie-q12",
      "topic": "Médiatrice",
      "type": "mcq",
      "prompt": "P appartient à la médiatrice de [AB]. On peut conclure…",
      "choices": [
        "PA = PB",
        "PA = AB",
        "P est forcément le milieu de [AB]"
      ],
      "answer": 0,
      "memo": "Tout point de la médiatrice est équidistant des extrémités."
    },
    {
      "id": "math-geometrie-q13",
      "topic": "Médiatrice",
      "type": "mcq",
      "prompt": "Le centre du cercle circonscrit est à l’intersection…",
      "choices": [
        "Des médianes",
        "Des côtés",
        "Des médiatrices"
      ],
      "answer": 2,
      "memo": "L’intersection des médiatrices est équidistante des trois sommets."
    },
    {
      "id": "math-geometrie-q14",
      "topic": "Justifier",
      "type": "mcq",
      "prompt": "Quelle affirmation constitue une justification ?",
      "choices": [
        "M est le milieu de [BC], donc [AM] est une médiane",
        "Je vois que cela ressemble à une médiane",
        "Le dessin est joli, donc c’est exact"
      ],
      "answer": 0,
      "memo": "Une justification utilise une donnée et une propriété, pas seulement l’apparence."
    },
    {
      "id": "math-geometrie-q15",
      "topic": "Aires",
      "type": "mcq",
      "prompt": "Base 5 cm et hauteur 4 cm. Quelle aire ?",
      "choices": [
        "10 cm²",
        "20 cm²",
        "9 cm²"
      ],
      "answer": 0,
      "memo": "5 × 4 ÷ 2 = 10 cm²."
    },
    {
      "id": "math-geometrie-q16",
      "topic": "Angles",
      "type": "mcq",
      "prompt": "Un angle d’un triangle équilatéral mesure…",
      "choices": [
        "60°",
        "90°",
        "45°"
      ],
      "answer": 0,
      "memo": "Les trois angles sont égaux et leur somme est 180°."
    },
    {
      "id": "math-geometrie-q17",
      "topic": "Droites remarquables",
      "type": "mcq",
      "prompt": "Une médiane est-elle toujours une hauteur ?",
      "choices": [
        "Non",
        "Oui",
        "Seulement si elle est longue"
      ],
      "answer": 0,
      "memo": "Elle passe par le milieu ; cela ne garantit pas la perpendicularité."
    },
    {
      "id": "math-geometrie-q18",
      "topic": "Aires",
      "type": "mcq",
      "prompt": "Un triangle a une aire de 18 cm² et une base de 6 cm. Sa hauteur correspondante ?",
      "choices": [
        "12 cm",
        "6 cm",
        "3 cm"
      ],
      "answer": 1,
      "memo": "6 × h ÷ 2 = 18, donc h = 36 ÷ 6 = 6."
    },
    {
      "id": "math-geometrie-q19",
      "topic": "Angles",
      "type": "mcq",
      "prompt": "Deux angles opposés par le sommet…",
      "choices": [
        "Ont la même mesure",
        "Ont toujours une somme de 180°",
        "Sont toujours droits"
      ],
      "answer": 0,
      "memo": "Des angles opposés par le sommet ont la même mesure."
    },
    {
      "id": "math-geometrie-q20",
      "topic": "Angles",
      "type": "mcq",
      "prompt": "Deux angles adjacents forment un angle plat. L’un vaut 125°. L’autre ?",
      "choices": [
        "65°",
        "55°",
        "125°"
      ],
      "answer": 1,
      "memo": "Un angle plat vaut 180° ; 180 − 125 = 55°."
    },
    {
      "id": "math-geometrie-q21",
      "topic": "Compléments du cours",
      "type": "mcq",
      "prompt": "Le point de concours des hauteurs s’appelle…",
      "choices": [
        "Le centre du cercle circonscrit",
        "L’orthocentre",
        "Le centre de gravité"
      ],
      "answer": 1,
      "memo": "Les hauteurs sont concourantes en H, l’orthocentre."
    },
    {
      "id": "math-geometrie-q22",
      "topic": "Compléments du cours",
      "type": "mcq",
      "prompt": "Le point de concours des médianes s’appelle…",
      "choices": [
        "Le milieu de l’hypoténuse",
        "Le centre de gravité",
        "L’orthocentre"
      ],
      "answer": 1,
      "memo": "Les médianes sont concourantes au centre de gravité G."
    },
    {
      "id": "math-geometrie-q23",
      "topic": "Compléments du cours",
      "type": "mcq",
      "prompt": "Dans un triangle rectangle, l’hypoténuse mesure 10 cm. Le rayon du cercle circonscrit vaut…",
      "choices": [
        "20 cm",
        "5 cm",
        "10 cm"
      ],
      "answer": 1,
      "memo": "Rappel du cours : le diamètre est l’hypoténuse, donc le rayon vaut 10 ÷ 2 = 5 cm."
    },
    {
      "id": "math-geometrie-q24",
      "topic": "Médiatrice",
      "type": "mcq",
      "prompt": "Si PA = PB, alors P appartient…",
      "choices": [
        "Forcément à [AB]",
        "Forcément à la hauteur issue de A",
        "À la médiatrice de [AB]"
      ],
      "answer": 2,
      "memo": "C’est la réciproque de la propriété d’équidistance de la médiatrice."
    },
    {
      "id": "math-geometrie-o25",
      "topic": "Aires",
      "type": "open",
      "prompt": "Construis ABC avec BC = 8 cm, AB = 5 cm et AC = 7 cm. Trace la hauteur issue de A et la médiane [AM]. Explique pourquoi ABM et ACM ont la même aire.",
      "memo": "Trace BC, puis les arcs de centres B et C et de rayons 5 et 7 cm. Leur intersection donne A. Trace la perpendiculaire à (BC) passant par A ; place M au milieu de [BC]. BM = MC = 4 cm et les triangles partagent la même hauteur : leurs aires sont égales.",
      "criteria": [
        "Construction aux bonnes mesures",
        "Hauteur perpendiculaire et médiane vers le milieu",
        "Justification par bases égales et hauteur commune"
      ]
    },
    {
      "id": "math-geometrie-o26",
      "topic": "Angles",
      "type": "open",
      "prompt": "ABC est isocèle en A. L’angle B mesure 52°. Calcule C puis A en justifiant chaque étape.",
      "memo": "AB = AC, donc les angles à la base B et C sont égaux : C = 52°. La somme des angles d’un triangle est 180°, donc A = 180 − 52 − 52 = 76°.",
      "criteria": [
        "Je cite la propriété du triangle isocèle",
        "Je cite la somme de 180°",
        "C = 52° et A = 76°"
      ]
    },
    {
      "id": "math-geometrie-o27",
      "topic": "Médiatrice",
      "type": "open",
      "prompt": "Trace un triangle de côtés 5, 6 et 7 cm. Construis deux médiatrices puis le cercle circonscrit. Explique pourquoi son centre O est à égale distance des trois sommets.",
      "memo": "Trace les médiatrices de [AB] et [BC]. Leur intersection O vérifie OA = OB et OB = OC, donc OA = OB = OC. Le cercle de centre O et de rayon OA passe par A, B et C.",
      "criteria": [
        "Médiatrices perpendiculaires passant par les milieux",
        "Cercle passant par les trois sommets",
        "Justification OA = OB = OC"
      ]
    },
    {
      "id": "math-geometrie-o28",
      "topic": "Constructions",
      "type": "open",
      "prompt": "Peut-on construire un triangle de côtés 2,5 cm, 4 cm et 7 cm ? Rédige une justification.",
      "memo": "La plus grande longueur est 7 cm. Or 2,5 + 4 = 6,5 < 7. L’inégalité triangulaire n’est pas satisfaite : ce triangle est impossible.",
      "criteria": [
        "J’identifie 7 comme plus grande longueur",
        "Je calcule 2,5 + 4 = 6,5",
        "Je conclus en citant l’inégalité triangulaire"
      ]
    },
    {
      "id": "math-geometrie-o29",
      "topic": "Compléments du cours",
      "type": "open",
      "prompt": "Construis un triangle ABC rectangle en A avec AB = 3 cm et AC = 4 cm. Place le centre du cercle circonscrit puis trace ce cercle.",
      "memo": "Trace en A deux côtés perpendiculaires de 3 et 4 cm, puis relie B et C. Place O au milieu de l’hypoténuse [BC]. Le cercle de centre O passant par B passe aussi par A et C. Vérifie au compas.",
      "criteria": [
        "Angle droit en A et mesures correctes",
        "O est le milieu de [BC]",
        "Cercle passant par A, B et C"
      ]
    }
  ],
  "memos": [
    {
      "title": "1 · Trois droites différentes",
      "body": "Hauteur : passe par un sommet et est perpendiculaire à la droite du côté opposé. Médiane : joint un sommet au milieu du côté opposé. Médiatrice d’un segment : perpendiculaire au segment et passant par son milieu ; elle ne passe pas forcément par le sommet opposé."
    },
    {
      "title": "2 · Aire du triangle",
      "body": "Aire = base × hauteur correspondante ÷ 2. La hauteur doit être perpendiculaire à la base choisie. Avec une base de 8 cm et une hauteur de 3 cm, l’aire est 12 cm². Attention : un côté oblique n’est pas nécessairement une hauteur."
    },
    {
      "title": "3 · Pourquoi une médiane partage l’aire en deux",
      "body": "Si M est le milieu de [BC], les triangles ABM et ACM ont des bases BM et MC égales et la même hauteur issue de A sur (BC). La formule d’aire donne donc deux aires égales. Une médiane n’est pas forcément perpendiculaire au côté."
    },
    {
      "title": "4 · Angles et triangles particuliers",
      "body": "La somme des angles d’un triangle vaut 180°. Dans un triangle isocèle, les angles opposés aux deux côtés égaux sont égaux. Un triangle équilatéral a trois angles de 60°. Dans un triangle rectangle, les deux angles aigus ont une somme de 90°."
    },
    {
      "title": "5 · Construire un triangle",
      "body": "Pour trois longueurs, la plus grande doit être strictement inférieure à la somme des deux autres pour obtenir un triangle non aplati. Trace un côté, puis deux arcs de cercle de rayons égaux aux deux autres longueurs. Si la plus grande égale la somme, les points sont alignés."
    },
    {
      "title": "6 · Médiatrice et cercle circonscrit",
      "body": "Tout point de la médiatrice de [AB] est à la même distance de A et B. Réciproquement, un point équidistant de A et B appartient à cette médiatrice. Les médiatrices des côtés d’un triangle se coupent au centre du cercle passant par ses trois sommets."
    },
    {
      "title": "7 · Bien justifier",
      "body": "Je sais que… (données de l’énoncé). Or… (définition ou propriété). Donc… (conclusion). Exemple : M est le milieu de [BC]. Le segment qui joint A au milieu du côté opposé est une médiane. Donc [AM] est la médiane issue de A. Le dessin seul ne prouve pas une propriété."
    },
    {
      "title": "8 · Compléments déjà vus en cours",
      "body": "Les trois hauteurs sont concourantes en H, l’orthocentre ; les trois médianes en G, le centre de gravité. Pour un triangle rectangle, le centre du cercle circonscrit est le milieu de l’hypoténuse et son rayon vaut la moitié de l’hypoténuse. Ces rappels reprennent les révisions fournies ; le dernier résultat figure en 4e dans le programme national 2026."
    }
  ]
};
