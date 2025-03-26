alter table challenges
    alter column year set default (2022);

INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un front occlus est représenté sur les cartes météorologiques par :',
        'une ligne avec des demi-cercles accolés à elle.
        une ligne avec des triangles accolés à elle.
        une ligne avec une alternance de demi-cercles et de triangles.
        une ligne avec des dessins de nuages accolés.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les nuages plus particulièrement recherchés pour pratiquer le vol à voile sont :',
        'les cumulonimbus.
        les altos cirrus.
        les cumulus.
        les nimbostratus.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La visibilité en cas de brume :',
        'est comprise entre 1 kilomètre et 30 secondes de vol.
        est inférieur à 1 kilomètre.
        est comprise entre 1 et 5 kilomètres.
        peut aller de 0 à 5 kilomètres.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur la carte TEMSI, on peut lire une validité au 14/10/2019 15 UTC. Sachant que le 14 octobre 2019, la France était en « heure d’été », à quelle heure légale correspond cette prévision ?',
        '13h.
        14h.
        16h.
        17h.',
        4,
        '2022-1-4.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les fronts visibles sur la carte TEMSI sont des fronts :',
        'occlus.
        froids.
        chauds.
        tièdes.',
        2,
        '2022-1-4.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Compte tenu des observations des précipitations et des impacts de foudre, on peut conclure que l’atmosphère au niveau du front étudié est :',
        'chaude.
        stable.
        instable.
        froide.',
        3,
        '2022-1-6.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Au niveau du front étudié, on peut dire que :',
        'de l’air chaud passe au-dessus de l’air froid qui le précède.
        de l’air froid passe au-dessus de l’air chaud qui le précède.
        de l’air chaud passe en-dessous de l’air froid qui le précède.
        de l’air froid passe en-dessous de l’air chaud qui le précède.',
        4,
        '2022-1-7.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les orages observés se produisent :',
        'dans la zone chaude.
        dans la traine, dite active.
        dans la traine, dite inactive.
        dans l’occlusion.',
        2,
        '2022-1-6.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La tropopause :',
        'se trouve généralement à une altitude plus élevée aux pôles qu’à l’équateur.
        se trouve généralement à une altitude plus élevée à l’équateur qu’aux pôles.
        est toujours située à la limite supérieure des nuages.
        est toujours située à une altitude de 12000 mètres.',
        2,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En atmosphère standard, le gradient de température en s’élevant en altitude dans les basses couches est de :',
        '+ 2°C par 1000 pieds.
        - 2°C par 1000 pieds.
        - 2°C par 1000 mètres.
        + 2°C par 1000 mètres.',
        2,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Dans le dossier météorologique du pilote, on trouve un certain nombre de messages. Parmi eux le METAR est un message :',
        'd’observation du temps en un lieu donné.
        de prévision du temps en un lieu donné.
        de prévision du temps sous forme d’une carte.
        d’observation du temps sous forme de carte.',
        1,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le Mistral est un vent :',
        'du Sud sur Marseille.
        du Sud-Ouest qui souffle sur le Languedoc.
        du Nord-Ouest qui souffle sur le Languedoc.
        du Nord qui souffle dans la vallée du Rhône.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La brise de vallée descendante s’établit lorsque les versants montagneux :',
        'le jour, se réchauffent moins vite que les fonds des vallées.
        le jour, se réchauffent plus vite que les fonds des vallées.
        la nuit, se refroidissent plus vite que les fonds des vallées.
        la nuit, se refroidissent moins vite que les fonds des vallées.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Lorsque de la pluie surfondue touche le sol froid, il se forme :',
        'de la grêle.
        du brouillard.
        de la neige.
        du verglas.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le vent dans l’hémisphère nord :',
        'vient de la gauche quand on se dirige de la dépression vers l’anticyclone.
        vient de la droite quand on se dirige de l’anticyclone vers la dépression.
        est plus fort quand les isobares sont rapprochés.
        est moins fort lorsqu’il pleut.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En plaine, les vélivoles profitent d''un phénomène météorologique pour gagner de l''altitude. Il s''agit des :',
        'brises de vallée.
        ascendances.
        des turbulences.
        des cisaillements des couches d''air.',
        2,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En atmosphère standard, à 1000 ft, la température sera d’environ :',
        '8,5°C.
        13°C.
        0°C.
        -3°C.',
        2,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’atmosphère est principalement composée :',
        'de dioxygène.
        de diazote.
        de gaz carbonique.
        de vapeur d’eau.',
        2,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En atmosphère standard, la masse volumique de l’air est de :',
        '1225 kg/m3.
        1,225 g/m3.
        1,225 kg/m3.
        122,5 g/m3.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’épaisseur de l’atmosphère (limite de Karman) est de :',
        '100 km.
        10 000 km.
        100 000 km.
        30 km.',
        1,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Lorsque le vent est fort au sol :',
        'il y a peu de turbulences dans les basses couches de l’atmosphère.
        le ciel va systématiquement se dégager.
        il est nul en altitude.
        des turbulences dues aux imperfections du sol et aux obstacles se développent en basses couches.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Des mouvements aléatoires de petite échelle qui perturbent un flux d’air bien établi sont appelés :',
        'des cyclones.
        du cisaillement et de la turbulence.
        des ascendances.
        des mouvements laminaires.',
        2,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En vol plané à une hauteur d’un mètre, celui-ci parcourt une distance de 5 mètres avant de tomber à terre, le sol étant horizontal. Que vaut sa finesse lors de ce vol plané ?',
        '0,5.
        1.
        2.
        5.',
        4,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel est l’ordre de grandeur des finesses des avions et planeurs actuels ?',
        '1 à 70.
        30 à 40.
        1 à 10.
        50 à 100.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’avion ayant eu une tendance à piquer rapidement, on décide d’ajouter un peu de poids à l’arrière en scotchant une pièce le plus en arrière possible. Cela a pour effet',
        'd’avancer son centre de gravité, rendant son équilibre autour de l’axe de tangage moins stable.
        de reculer son centre de gravité, rendant son équilibre autour de l’axe de tangage moins stable.
        d’avancer son centre de gravité, rendant son équilibre autour de l’axe de tangage plus stable.
        de reculer son centre de gravité, rendant son équilibre autour de l’axe de tangage plus stable.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('On souhaite développer un avion en papier ayant d’excellentes performances de plané. Pour cela, on fait appel à un laboratoire possédant une soufflerie. L’objectif des mesures réalisées est',
        'de déterminer la portance maximale.
        d’obtenir une polaire.
        de déterminer la trainée minimale.
        de mesurer des pressions.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur la demi-aile associée à l’aileron baissé, la portance',
        'ne varie pas, la traînée augmente.
        augmente, la traînée augmente.
        augmente, la traînée ne varie pas.
        diminue, la traînée diminue.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('A tous paramètres identiques, quand un avion va deux fois plus vite sa portance :',
        'triple.
        quadruple.
        double.
        ne change pas.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le plus grand rapport Cz/Cx caractérise l’incidence de :',
        'décrochage.
        portance maximum.
        traînée minimum.
        finesse maximum.',
        4,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Certaines gouvernes génèrent la force nécessaire à la rotation en tangage, que modifient- elles ?',
        'le roulis.
        le centrage.
        l’assiette.
        le lacet.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le contrôle en tangage est obtenu en bougeant :',
        'la gouverne de profondeur.
        les ailerons.
        les volets.
        le palonnier.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour réduire la traînée induite d’une aile, on peut :',
        'augmenter l’allongement de l’aile.
        diminuer l’allongement de l’aile.
        augmenter la corde et diminuer l’envergure.
        supprimer les winglets.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le schéma ci-dessus représente :',
        'une soufflerie de type Eiffel où 1 désigne le collecteur et 3 désigne la veine d’essai.
        une soufflerie de type Eiffel où 2 désigne la veine d’essai et 3 le diffuseur.
        une soufflerie de type Prandtl où 1 désigne le collecteur et 2 la veine d’essai.
        une soufflerie de type Prandtl où 1 désigne le collecteur et 2 le diffuseur.',
        2,
        '2022-2-11.png',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le tube Prandtl est réalisé avec 2 sondes, pour déterminer les pressions, dynamiques et statiques :',
        'le tube extérieur s''ouvre perpendiculairement à l''écoulement du fluide et informe de la pression totale.
        le tube intérieur s’ouvre parallèlement à l''écoulement du fluide, et est ouvert en son bout et informe de la pression statique.
        le tube extérieur s''ouvre perpendiculairement à l''écoulement du fluide et informe de la pression statique.
        le tube intérieur s’ouvre parallèlement à l''écoulement du fluide, et est ouvert en son bout et informe de la pression dynamique.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Une hélice à pas variable réglée sur petit pas au décollage permet de :',
        'diminuer la distance de décollage et la pente de montée.
        augmenter la distance de décollage et diminuer la pente de montée.
        diminuer la distance de décollage et augmenter la pente de montée.
        augmenter la distance de décollage et la pente de montée.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Trop de poids sur l’arrière de votre avion :',
        'augmente la stabilité et la manœuvrabilité.
        diminue la stabilité et la manœuvrabilité.
        augmente la stabilité et diminue la manœuvrabilité.
        diminue la stabilité et augmente la manœuvrabilité.',
        4,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le fuselage de l’avion est générateur de :',
        'traînée de forme et traînée de frottements.
        traînée de frottements uniquement.
        traînée induite uniquement.
        traînée de forme uniquement.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En virage symétrique en palier, le facteur de charge :',
        'augmente si la vitesse augmente.
        augmente si l’inclinaison augmente.
        diminue si la vitesse augmente.
        diminue si l’inclinaison augmente.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Si la vitesse diminue, pour rester en palier, on doit :',
        'augmenter l’incidence.
        diminuer l’incidence.
        sortir le train d’atterrissage.
        se mettre en virage.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pendant un virage en palier à vitesse constante, le pilote doit :',
        'augmenter l’incidence et la puissance.
        diminuer l’incidence et la puissance.
        augmenter l’incidence et diminuer la puissance.
        diminuer l’incidence et augmenter la puissance.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La marge statique est :',
        'la distance entre le centre de gravité et le foyer de l’avion.
        la quantité d’électricité statique qu’un avion peut supporter.
        la place que l’avion en stationnement occupe sur le parking.
        la bande située sur la gauche des pages du manuel de vol.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La sortie des volets Fowler :',
        'augmente la surface de l’aile et la vitesse de décrochage.
        diminue la surface de l’aile et la vitesse de décrochage.
        diminue la surface de l’aile et augmente la vitesse de décrochage.
        augmente la surface de l’aile et diminue la vitesse de décrochage.',
        4,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le décrochage pour un profil d’aile précis arrive :',
        'toujours à la même vitesse.
        toujours à la même incidence.
        toujours à la même pente.
        toujours à la même assiette.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un avion en virage subit 2 g. Quel est son angle d’inclinaison ?',
        '40°.
        50°.
        60°.
        80°.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Combien existe-t-il de classe d’ULM ?',
        '2.
        4.
        6.
        8.',
        3,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le train d’atterrissage d’un planeur est :',
        'toujours fixe pour des raisons de sécurité.
        rétractable sur certains modèles de planeurs.
        toujours rétractable pour améliorer la finesse.
        rétractable automatiquement lorsqu’il ne touche plus le sol.',
        2,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Parmi les différentes classes d’ULM, le paramoteur est un ULM de la classe :',
        '1.
        2.
        3.
        4.',
        1,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L''action du réchauffage du carburateur se traduit par :',
        'une augmentation de la puissance.
        une diminution de la puissance.
        une réduction du débit carburant.
        une réduction de la pression essence.',
        2,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le pilote d’un avion braque le manche (ou le volant) à droite :',
        'la gouverne de direction se braque à droite.
        la gouverne de direction se braque à gauche.
        l’aileron droit s’abaisse.
        l’aileron droit se lève.',
        4,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Vous volez avec un avion équipé d’une hélice « petit pas » c’est-à-dire à faible calage. Vous vous attendez à :',
        'de bonnes performances au décollage sans conséquence sur les performances en croisière.
        de bonnes performances en croisière au détriment des performances au décollage.
        de bonnes performances au décollage au détriment des performances en croisière.
        de mauvaises performances au décollage ainsi qu’en croisière.',
        3,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’instrument qui vous permet de détecter une glissade est :',
        'le conservateur de cap.
        la bille.
        l’horizon artificiel.
        le variomètre.',
        2,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel instrument utilise la PT (Pression Totale) ?',
        'horizon artificiel.
        variomètre.
        altimètre.
        anémomètre.',
        4,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quels aéronefs peut-on classer dans les engins spatiaux ? 1 : Satellites 2 : Sondes 3 : Fusées 4 : Vaisseaux',
        '1 ; 4
        3 ; 4
        2 ; 3
        1 ; 2',
        4,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel nouveau prochain rôle peut-on espérer des satellites ?',
        'télécommunication.
        GPS.
        nettoyage de l’espace.
        météorologie.',
        3,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Comment se nomme la partie de l''aile qui assure la jonction avec le fuselage et son profilage aérodynamique ?',
        'l''emplanture et le Karman.
        l''envergure et le Karman.
        l’emplanture et le saumon.
        l''envergure et le saumon.',
        1,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Comment se nomme le profil d’aile ci-dessus ?',
        'auto stable.
        double courbure.
        déstabilisant deux fois.
        dissymétrique.',
        1,
        '2022-3-12.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur un turbopropulseur :',
        'le moteur à piston est suralimenté par un turbocompresseur.
        il n’y a aucune partie mobile contrairement au turboréacteur.
        la quasi-totalité de l’énergie de la turbine est utilisée pour entrainer l’hélice.
        le moteur à piston entraîne une hélice placée à l’arrière de l’avion.',
        3,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En vol en palier, l’aile est soumise à de la flexion qui engendre sur le longeron :',
        'de la compression sur l’extrados et sur l’intrados.
        de la compression sur l’extrados et de la traction sur l’intrados.
        de la traction sur l’extrados et sur l’intrados.
        de la traction sur l’extrados et de la compression sur l’intrados.',
        2,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Cette machine est équipée :',
        'd’un train classique et d’ailes hautes.
        d’un train tricycle et d’ailes hautes.
        d’un train classique et d’ailes basses.
        d’un train tricycle et d’ailes basses.',
        4,
        '2022-3-15.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’équipement du tableau de bord est un :',
        'EFIS.
        horizon artificiel.
        GPS.
        une carte déroulante.',
        1,
        '2022-3-15.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur l’instrument proposé, l’avion est en :',
        'inclinaison à gauche et assiette à piquer.
        inclinaison à gauche et assiette à cabrer.
        inclinaison à droite et assiette à piquer.
        inclinaison à droite et assiette à cabrer.',
        1,
        '2022-3-15.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Jean Delemontez disait "Ce qui n''existe pas, ne pèse rien, ne coûte rien, et ne tombe jamais en panne ! » Mais pour un ULM biplace de classe 3, quelle est la nouvelle limite autorisée sans équipement additionnel ?',
        'masse maxi 330 kg.
        il n''y a pas de limite.
        masse maxi 500kg.
        tout dépend des matériaux utilisés.',
        3,
        '2022-3-15.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La plupart des moteurs d’avion sont équipés d’un système de double allumage qui a pour but :',
        'd’améliorer la combustion et d’augmenter la sécurité en vol.
        de réguler la consommation électrique.
        de réduire la consommation de carburant.
        de diminuer l’usure des bougies.',
        1,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur un moteur à pistons, la bielle est un élément qui :',
        'permet la fixation du moteur à l''avion.
        assure l''entraînement de l''arbre à cames par l''intermédiaire du vilebrequin.
        commande l''ouverture et la fermeture des soupapes.
        relie le piston au vilebrequin.',
        4,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Lorsque le pilote incline le manche à droite :',
        'les ailerons se lèvent.
        les ailerons de baissent.
        l’aileron droit se lève et l’aileron gauche se baisse.
        l’aileron gauche se lève et l’aileron droit se baisse.',
        3,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les réservoirs de carburant situés en bout d’aile provoquent sur la structure de l’aile d’un avion au sol des contraintes :',
        'de torsion.
        de flexion.
        nulles.
        de contraction.',
        2,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Dans l’encart indiquant les fréquences radio sur une carte VAC, A/A signifie :',
        'qu’il faudra dire « alpha, alpha » au début de chaque message radio.
        que les militaires ont installé des missiles air/air sur l’aérodrome.
        annonce automatique. C’est la fréquence donnant des informations sur l’aérodrome.
        que les messages sont en auto-information air/air.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les numéros pour désigner les pistes sont :',
        'choisis par le maire de la ville où est implanté l’aérodrome.
        choisis par l’aviation civile en fonction des aérodromes alentours.
        les dizaines arrondies de l’orientation géographique de la piste.
        la longueur de la piste pour le chiffre le plus au nord, la largeur de la piste pour celui au sud.',
        3,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’indication sur le VOR dépend :',
        'de la position de l’avion, mais pas de son cap.
        de la position et du cap de l’avion.
        du cap et mais pas de la position de l’avion.
        ni du cap, ni de la position de l’avion.',
        1,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La formation FOX ALPHATANGO proposée par la DGAC est une formation à distance à effectuer pour le télépilotage de drones à partir de :',
        '0 g.
        1500 g.
        200 g.
        800 g.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En France métropolitaine, en un lieu déterminé, la nuit aéronautique commence :',
        '30 minutes après le coucher du soleil et se termine 30 minutes après le lever du soleil.
        30 minutes après le coucher du soleil et se termine 30 minutes avant le lever du soleil.
        30 minutes avant le coucher du soleil et se termine 30 minutes après le lever du soleil.
        30 minutes avant le coucher du soleil et se termine 30 minutes avant le lever du soleil.',
        2,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour voler en France, les avions certifiés doivent obligatoirement posséder :',
        'la licence de station d’aéronefs (LSA).
        l’habilitation de radiotéléphonie en langue française.
        la facture d’achat de l’avion.
        les certificats de navigabilité (CEN) et d’examen de navigabilité (CEDN).',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En vol de nuit, vous apercevez un avion qui s’éloigne de vous, quel est l’ordre de la couleur des feux de gauche à droite ?',
        'blanc, vert.
        vert, rouge.
        rouge, blanc
        rouge, blanc, vert.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le temps universel (UTC) en France :',
        'présente toujours le même écart avec l’heure légale.
        est supérieur de 2h en été et 1h en hiver à l’heure légale.
        est inférieur de 1h en été et 2h en hiver à l’heure légale.
        est inférieur de 2h en été et 1h en hiver à l’heure légale.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Deux aéronefs dont les routes convergent doivent :',
        's’éviter par en dessous.
        s’éviter en changeant d’altitude.
        s’éviter par la droite.
        s’éviter par la gauche.',
        3,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Vous mesurez sur la carte une route vraie de 124°, la déclinaison magnétique est de 1° E, la route magnétique :',
        'n’est pas prévisible car la déclinaison magnétique est très différente entre LFOZ et LFEI.
        est d’environ 123°
        est d’environ 124°
        est d’environ 125°',
        2,
        '2022-4-10.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La préparation du vol comprend l’étude des données météorologiques. Laquelle n’en fait pas partie :',
        'METAR.
        NOTAM.
        TAF.
        cartes TEMSI et WINTEM.',
        2,
        '2022-4-10.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Votre navigation est au cap théorique 134°, les bulletins météorologiques annoncent une prévision de vent du nord pour 20 kt :',
        'cela n''a aucune incidence sur votre navigation.
        le vent risque de vous obliger à diminuer votre cap pour le contrer.
        le vent risque de vous obliger à augmenter votre cap pour le contrer.
        le vent n''influencera que la durée de votre vol.',
        2,
        '2022-4-10.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En effectuant le tracé de votre navigation sur la carte, vous constatez que vous traversez la zone P 24, vous décidez :',
        'de suivre le tracé théorique car l''avantage de l''avion c''est de se déplacer en ligne droite.
        d''éviter la zone rouge P 24 car cette zone est réservée aux parachutistes.
        d’éviter la zone rouge P 24 car cette zone est interdite aux aéronefs.
        d''éviter la zone rouge P 24 car cette zone est une zone protégée.',
        3,
        '2022-4-10.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur quelle longitude approximative se trouve la zone P 24 :',
        '47,5° S.
        2,5° W.
        47,5° N.
        2,5° E.',
        4,
        '2022-4-10.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La cause d’accident la moins fréquente en aéronautique est :',
        'le pilote.
        la météo.
        les infrastructures.
        l’aéronef.',
        3,
        '2022-4-10.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quelle est la distance à vol d’oiseau entre les terrains LFOZ et LFEI ?',
        '10 nm.
        20 nm.
        30 nm.
        40 nm.',
        3,
        '2022-4-10.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’hyperventilation provoque :',
        'une trop forte concentration d’oxygène dans le sang et peut amener à une perte de conscience.
        une trop faible concentration d’oxygène dans le sang et peut amener à une perte de conscience.
        une trop forte concentration de gaz carbonique dans le sang et peut amener à une perte de conscience.
        une trop forte concentration d’oxygène dans le sang et est sans risque de perte de conscience.',
        1,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La piste d''un aéroport est identifiée par le numéro 23 R. Quel est le numéro inscrit à l''autre bout de la piste ?',
        '23 L.
        05 R.
        05 L.
        23 R.',
        3,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un avion passe le mur du son à 340 m/s. Cela correspond à une vitesse d’environ :',
        '170 mph.
        680 km/h.
        680 kt.
        170 kt.',
        3,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le pilote d''un aéronef immatriculé F-HBNU devra s''identifier à la radio par :',
        'Foxtrot - Hotel - Beta - November - Univers.
        France - Hotel - Bravo - November - Univers.
        Foxtrot - Hotel - Beta - November - Uniform.
        Foxtrot - Hotel - Bravo - November - Uniform.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Une carte Lambert est :',
        'une projection plane.
        une projection conique.
        une projection cylindrique.
        une projection elliptique.',
        2,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un DME affichera la distance entre la station et l’avion correspondant à :',
        'l’arc DME.
        la distance sol.
        l’altitude et la distance sol.
        la distance oblique qui les sépare.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel pays a mis sur orbite le premier satellite ?',
        'les Etats Unis d’Amérique.
        la France.
        l’Union Soviétique.
        la Grande Bretagne.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le X15 premier avion à avoir franchi (volontairement) le mur du son :',
        'décollait par ses propres moyens.
        était largué à partir d’un autre avion.
        était largué à partir d’une fusée.
        décollait à l’aide d’une rampe de lancement.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Au cours de la Première Guerre mondiale, quels sont les trois principaux apports militaires de l’armée aérienne ?',
        'Bombardement, Voltige, Ravitaillement.
        Bombardement, Ravitaillement, Domination aérienne.
        Voltige, Observation, Ravitaillement.
        Bombardement, Observation, Domination aérienne.',
        4,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le concorde est un avion franco-britannique, quelle était sa particularité ?',
        'il avait des ailes delta.
        il disposait de commandes de vol entièrement électriques et analogiques.
        il pouvait se poser sur un porte-avion.
        c’était le premier avion à réaction.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quelle innovation technologique a fortement contribué au succès de la résistance de la Royal Air Force lors de la bataille d’Angleterre ?',
        'le missile V2.
        le pudding.
        le radar.
        le moteur à réaction.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel est le nom du groupe d’aviation de chasse français ayant combattu sur le front de l’Est aux côtés de l’URSS ?',
        'Cigognes.
        Pyrénées.
        Normandie Niémen.
        Côte d’Or.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel est le nom de l’actuel lanceur spatial européen ?',
        'Discover.
        Astérix.
        Ariane V.
        Athéna.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Marcel Bloch, plus connu sous le nom de Marcel Dassault s’est fait connaître pendant la première guerre mondiale en créant une hélice très performante pour l’époque. Il s’agit de l’hélice :',
        'orage.
        ouragan.
        éclair.
        tornade.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le premier constructeur français à lancer une ligne aéropostale entre la France et l’Amérique du Sud est :',
        'Louis BREGUET.
        Georges LATECOERE.
        Louis BLERIOT.
        Henri FARMAN.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La française Adrienne BOLLAND est devenue célèbre en 1921 pour avoir franchi :',
        'les Alpes.
        les Andes.
        les Pyrénées.
        la Méditerranée.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Chuck YEAGER est le premier pilote au monde à avoir franchi le mur du son en 1947 sur :',
        'le BELL X-1.
        le North American F86 Sabre.
        le Hawker Sea Hawk.
        le MIG15.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Parmi ces grandes figures féminines de l’aéronautique, laquelle est allée dans l’espace ?',
        'Jacqueline AURIOL.
        Valentina TERECHKOVA.
        Jacqueline COCHRAN.
        Catherine MAUNOURY.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En quelle année Solar Impulse boucle-t-il son premier tour du monde ?',
        '2010.
        2012.
        2014.
        2016.',
        4,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Qui a réussi le premier looping ?',
        'Adolphe PEGOUD.
        Louis BLERIOT.
        Alberto SANTOS DUMONT.
        Henri FARMAN.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En 2014, quel robot atterrissait sur la comète « Tchouri » ?',
        'Sojourner.
        Perseverance.
        Philae.
        Curiosity.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le DR 400 fête ses 50 ans cette année (en 2022), quel constructeur l’a commercialisé à sa sortie en mars 1972 ?',
        'ROBIN.
        CESSNA.
        PIPER.
        MUDRY.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel est le plus gros avion de ligne fabriqué par Airbus ?',
        'A 380.
        A 320.
        A 340.
        A 400M.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le premier être vivant à être envoyé dans l''espace est :',
        'Youri GAGARINE.
        John GLENN.
        Neil ARMSTRONG.
        la chienne LAÏKA.',
        4,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La première traversée de la Manche avec un aéronef a été réalisée :',
        'en 1785 par Jean-Pierre BLANCHARD et John JEFFRIES.
        en 1852 par Henry GIFFARD.
        en 1901 par Alberto SANTOS-DUMONT.
        en 1909 par Louis BLÉRIOT.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le 17 novembre 2016 décolle, pour rejoindre la station spatiale internationale, à bord de Soyouz MS-03 :',
        'Patrick BAUDRY.
        Claudie HAIGNERÉ.
        Jean-Loup CHRÉTIEN.
        Thomas PESQUET.',
        4,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel aviateur a effectué la première traversée de la Manche en 1909 ?',
        'Clément Ader.
        Louis Blériot.
        Rolland Garros.
        Henri Fabre.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En quelle année Charles Lindbergh a-t-il traversé l’Atlantique pour la première fois ?',
        '1909.
        1913.
        1927.
        1941.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);