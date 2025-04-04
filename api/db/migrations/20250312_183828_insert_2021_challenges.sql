alter table challenges
    alter column year set default (2021);

INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Dans le secteur de la zone 2 sur la carte en illustration on peut dire que',
        'le gradient horizontal de pression est faible.
        les vents sont du Nord-Est.
        les vents sont du Sud-Ouest modérés à forts.
        les nuages sont absents.',
        3,
        '2021-1-1.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le secteur de la zone 3 sur la carte en illustration correspond à :',
        'une traîne de Sud-Ouest.
        les vents viennent du Nord-Est.
        un secteur chaud.
        un secteur occlus.',
        3,
        '2021-1-1.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('On peut dire que la zone 4 est :',
        'très certainement nuageuse.
        une zone de vent fort.
        une dorsale.
        l’anticyclone des Açores.',
        4,
        '2021-1-1.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur une carte de pression, une ligne qui joint les points d’égale pression est nommée :',
        'une isotherme.
        une isocline.
        une isophyse.
        une isobare.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Dans un message aéronautique, le groupe de température indique +12°C sous abri, et +4°C de point de rosée. On peut dire que :',
        'la masse d’air est à 100% d’humidité.
        la température maximale sera de +12°C et la minimale de +4°C.
        la masse d’air serait saturée pour une température sous-abri de +4°C.
        la masse d’air serait saturée pour une température sous-abri de +8°C.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Une information sur une carte stipule l’ISO 0°C au FL80. Vous devez voler au FL60. En considérant le gradient standard, quelle est la bonne affirmation :',
        'le vol se fera en conditions à +4°C.
        le vol se fera en conditions à -4°C.
        le vol se fera en conditions à -2°C.
        le vol se fera en conditions à +2°C.',
        1,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Concernant la pression atmosphérique :',
        'elle est à l’origine du vent dans l’Atmosphère Standard Internationale.
        elle varie plus rapidement en altitude que proche de la surface.
        la valeur est de 1013 hPa partout sur la planète.
        elle diminue rapidement avec l’altitude dans les basses couches de l’atmosphère.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un altimètre :',
        'affiche la vitesse d’un aéronef.
        affiche la vitesse ascensionnelle d’un aéronef.
        est un baromètre qui transforme la pression en altitude.
        indique la hauteur par rapport à Paris.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour un anticyclone dans l’hémisphère Sud, les vents s’organisent autour de lui de telle sorte :',
        'qu’ils tournent en sens inverse des aiguilles d’une montre.
        qu’ils soufflent de façon concentrique vers le centre de l’anticyclone.
        qu’ils tournent dans le sens des aiguilles d’une montre.
        qu’ils se dirigent vers le pôle Sud.',
        1,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Une traine :',
        'est la partie sous le vent d’un cumulonimbus.
        correspond à une précipitation qui n’atteint pas le sol.
        est le nom donné aux perturbations qui avancent lentement.
        est une zone de bonne visibilité entrecoupée d’averses à l’arrière d’un front froid.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le nuage figurant sur la photo ci-dessous est un :',
        'cumulonimbus.
        cumulus.
        stratus.
        altocumulus.',
        2,
        '2023-1-12.png',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Lorsque des cumulus sont annoncés, cela indique au pilote que :',
        'des orages sont systématiquement à prévoir.
        des précipitations continues sont probables.
        la masse d’air est instable.
        la surface frontale est proche.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Des nuages lenticulaires dans le ciel sont le signe :',
        'd’une forte instabilité.
        de brouillard la nuit suivante.
        d’une masse d’air assez sèche.
        d’un vent fort perpendiculaire à un relief.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Parmi ces listes de nuages, quelle est celle qui ne contient que des nuages instables :',
        'cumulus, cirrostratus, stratocumulus.
        altostratus, cirrostratus, cumulonimbus.
        stratus, altocumulus, cirrus.
        altocumulus, cumulonimbus, cirrocumulus.',
        4,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La formation la plus commune du brouillard est due :',
        'au réchauffement nocturne de la masse d’air et sa condensation.
        au rayonnement nocturne du sol et à la condensation de la vapeur d’eau.
        à la marée barométrique qui détend l’atmosphère.
        à la convection de fin de nuit qui déclenche une condensation adiabatique.',
        2,
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
VALUES ('Dans l’atmosphère, parmi les propositions ci-dessous, quelle est la plus faible température à laquelle on peut encore trouver de l’eau à l’état liquide :',
        '-10°C.
        0°C.
        10°C.
        100°C.',
        1,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La cellule d’un avion peut givrer :',
        'en vol mais pas au sol.
        dans les nuages uniquement.
        dans les nuages, et hors nuages.
        dans un nuage composé exclusivement de cristaux de glace.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les courants de vent puissants que l’on rencontre à très haute altitude sont nommés :',
        'jet-stream.
        jet-lag.
        tornade.
        rafale.',
        1,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En plaine, dans les basses couches de l’atmosphère, des turbulences peuvent être générées par :',
        'le rayonnement.
        les trous d’air.
        la convection.
        le brouillard.',
        3,
        '',
        1,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’incidence est :',
        'l’angle entre l’horizontale et l’axe de l’avion.
        la distance maximale entre le bord d’attaque et le bord de fuite.
        la distance entre deux nervures d’aile.
        l’angle entre le vent relatif et la corde de l’aile.',
        4,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour calculer la distance de décollage d’un avion, il faut prendre en compte :',
        'la masse de l’avion uniquement.
        la température, l’altitude de l’aéroport, la masse de l’avion.
        l’altitude de l’aéroport uniquement.
        aucun de ces éléments.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur la polaire ci-dessous ont été définis plusieurs points Quel est le point correspondant à la finesse maximale ?',
        'A.
        B.
        C.
        D.',
        3,
        '2021-2-3.png',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le braquage des volets hypersustentateurs de bord de fuite :',
        'augmente les coefficients Cz de portance et Cx de traînée.
        augmente le coefficient Cz de portance et diminue le coefficient Cx de traînée.
        diminue le coefficient Cz de portance et augmente le coefficient Cx de traînée.
        diminue les coefficients Cz de portance et Cx de traînée.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La traînée induite d’une aile :',
        'diminue quand la portance augmente.
        est une conséquence des différences de pression entre l’intrados et l’extrados.
        augmente avec l’allongement.
        est la conséquence de moucherons collés sur le bord d’attaque.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La variation de l’assiette s’effectue autour de l’axe de :',
        'roulis.
        tangage.
        lacet.
        piste.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Parmi les éléments suivants, celui qui a une influence sur la position du centre de gravité est :',
        'la trajectoire (palier, montée, descente).
        la vitesse.
        le niveau de carburant dans les réservoirs.
        l’inclinaison.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour tourner selon l’axe de tangage, je dois :',
        'actionner le manche vers l’avant ou vers l’arrière.
        actionner le manche vers la gauche ou vers la droite.
        utiliser les palonniers.
        changer le pas d’hélice.',
        1,
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
VALUES ('Pour réaliser une mise en virage, on incline l’appareil en roulis. Il apparaît alors une rotation en lacet dans le sens opposé au sens du virage désiré. Ceci est dû :',
        'au lacet induit.
        au lacet inverse.
        au roulis inverse.
        au roulis induit.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour réaliser une mise en virage, on incline l’appareil en roulis. Il apparaît alors une
rotation en lacet dans le sens opposé au sens du virage désiré. Comment le pilote peut-il corriger ce phénomène ?',
        'par une action sur le palonnier.
        par une action à cabrer sur le manche.
        par une action à piquer sur le manche.
        en laissant faire.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En descente rectiligne uniforme sans traction :',
        'la portance et le poids sont directement opposés.
        la traînée et le poids sont directement opposés.
        la composante du poids parallèle à la trajectoire s’oppose à la traînée pour l’équilibrer.
        la composante du poids perpendiculaire à la trajectoire s’oppose à la traînée pour l’équilibrer.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour réduire la trainée induite, on peut :',
        'diminuer l’allongement.
        ajouter des becs de bord d’attaque.
        ajouter des aérofreins.
        ajouter des winglets.',
        4,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un parachutiste en chute libre',
        'ira de plus en plus vite quelle que soit sa position pendant toute la durée de la chute libre.
        atteindra une vitesse limite très tôt s’il est en position verticale.
        atteindra une vitesse limite très tôt s’il est en position horizontale (à plat ventre).
        verra sa vitesse augmenter puis diminuer quelle que soit sa position.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Une montgolfière se maintient à altitude constante. On peut alors affirmer que :',
        'son poids est supérieur à sa poussée d''Archimède.
        son poids est égal à sa poussée d''Archimède.
        son poids est inférieur à sa poussée d''Archimède.
        la force de trainée est égale au poids.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le profil d’une aile est lisse lorsque :',
        'le bec et les volets sont rentrés.
        le bec est rentré et les volets sont sortis.
        le bec est sorti et les volets sont rentrés.
        le bec et les volets sont sortis.',
        1,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('On multiplie par 3 la vitesse de l’écoulement et on divise par 9 la surface d’une aile. La portance est :',
        'multipliée par 9.
        multipliée par 3.
        inchangée.
        multipliée par 81.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En air calme, quelle est la distance horizontale qu’il est possible de parcourir avec une finesse de 30 si la hauteur est de 3 km :',
        '90 m.
        90 000 m.
        900 m
        90 000 km.',
        2,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Certains avions sont équipés d’aérofreins qui ont pour but de modifier les coefficients Cx (trainée) et Cz (portance). Préciser leurs effets :',
        'augmenter le Cx et le Cz.
        diminuer le Cx et le Cz.
        augmenter le Cx et diminuer le Cz.
        diminuer le Cx et augmenter le Cz.',
        3,
        '',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur le profil d’aile ci-dessous, l’intrados est représenté par la lettre :',
        'A.
        B.
        C.
        D.',
        4,
        '2021-2-21.png',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La photo ci-dessous indique :',
        'un virage à droite qui nécessite une action sur le palonnier droit.
        un virage à droite qui nécessite une action sur le palonnier gauche.
        un virage à droite symétrique, qui ne nécessite pas d’action sur le palonnier.
        un virage à gauche symétrique, qui ne nécessite pas d’action sur le palonnier.',
        1,
        '2021-2-22.png',
        2,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel est le nom de cet avion ?',
        'Alpha jet.
        Mirage IV.
        Ouragan.
        Fouga Magister.',
        4,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Cet avion est un :',
        'aérodyne.
        aérostat.
        moto-planeur.
        ULM.',
        1,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur cet avion, l’empennage est dit :',
        'canard.
        papillon.
        en L.
        cruciforme.',
        2,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Cet avion possède une aile :',
        'basse.
        médiane.
        haute.
        centrale.',
        2,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le train d’atterrissage est :',
        'classique.
        tricycle.
        fixe.
        amovible.',
        2,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Cet avion est biplace. En examinant la photo 2, quelle est la configuration des places des pilotes ?',
        'en côte à côte.
        en tandem.
        en push-pull.
        vis-à-vis.',
        2,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le dièdre de cet avion est :',
        'positif.
        négatif.
        nul.
        double.',
        3,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur le schéma, en vue de dessus, quelle désignation est correcte ?',
        'A = bord d’attaque et B= bord de fuite.
        A = bord d’attaque et C = bord de fuite.
        D = bord d’attaque et A = bord de fuite.
        D = bord d’attaque et B = bord de fuite.',
        1,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel est le type d’aile de cet avion ?',
        'Delta.
        Gothique.
        Elliptique.
        En flèche.',
        4,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur la photo 1, la flèche indique, en vol normal,',
        'extrados, siège d’une dépression en vol.
        intrados, siège d’une surpression en vol.
        extrados, siège d’une surpression en vol.
        intrados, siège d’une dépression en vol.',
        1,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Examiner les instruments de l’avion dont il est question dans cette partie. Quel instrument correspond à l’indicateur de virage ?',
        'A.
        B.
        C.
        D.',
        4,
        '2021-3-11.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Parmi les instruments de bord suivants, lequel fonctionne en utilisant la variation de pression statique ?',
        'l’altimètre.
        l’horizon artificiel.
        le conservateur de cap.
        le compas.',
        1,
        '2021-3-11.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le Badin mesure :',
        'l’altitude.
        le cap.
        la vitesse.
        la pression atmosphérique.',
        3,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Lorsque le pilote incline le manche de gauche à droite, l’avion pivote autour de son axe de :',
        'roulis.
        tangage.
        lacet.
        portance.',
        1,
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
VALUES ('Sur ce type d’avion, la visite prévol est :',
        'non obligatoire car c’est un ancien avion militaire.
        obligatoire comme sur tous les avions.
        facultatif dans le cas où cet avion militaire est déclassé.
        obligatoire car c’est un avion de collection.',
        2,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur la photo 3, comment s’appellent les dispositifs indiqués par les flèches blanches ?',
        'les aérofreins.
        les ailerons.
        les volets.
        les becs.',
        3,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Cet avion est propulsé par 2 turboréacteurs, lesquels sont chacun constitués de :',
        'tuyère et bielle.
        turbine et vilebrequin.
        chambre de combustion et piston.
        tuyère et turbine.',
        4,
        '2021-3.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un aéromodéliste a construit une maquette volante à l’échelle ¼ de cet avion. Quelle est l’envergure de ce modèle réduit ?',
        '2m11.
        2m22.
        2m825.
        3m25.',
        3,
        '2021-3-20.png',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En avion, l’action qui permet une rotation autour de l''axe de tangage est :',
        'un déplacement en avant ou en arrière du manche.
        un déplacement latéral du manche.
        une poussée à gauche ou à droite sur les palonniers.
        un déplacement latéral du manche et simultanément une poussée des palonniers.',
        1,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un autogire :',
        'est un petit hélicoptère.
        est un drone.
        peut décoller verticalement et effectuer un vol stationnaire.
        est équipé d’une hélice entraînée par le moteur et d’un rotor entraîné par le vent relatif.',
        4,
        '',
        3,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Lorsqu’un numéro de piste est entouré sur une carte VAC, il s’agit :',
        'de la piste à utiliser en cas de vent nul ou faible.
        du point bas d’une piste en pente.
        du point haut d’une piste en pente.
        de prévenir d’un obstacle en entrée de piste.',
        1,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un tour de piste à main gauche signifie :',
        'que l’avion doit se poser sur la partie gauche de la piste.
        que le pilote doit piloter avec la main gauche pour des raisons de sécurité.
        que le pilote effectue le dernier virage avec la piste à sa gauche.
        que la manche à air est à gauche de la piste. 1 2 Deux ULM numérotés 1 et 2 équipés de transpondeur « Mode S » sont en vol à proximité l’un de l’autre. Leurs transpondeurs envoient au contrôleur l’altitude pression de leur appareil. Rappel : Niveau de vol 22 = Altitude pression 2200 ft Les questions 4.3 à 4.8 sont associées à cet encadré.',
        3,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('A quelles catégories appartiennent ces deux ULM ?',
        '1 : Avion – 2 : Autogyre.
        1 : Avion – 2 : Hélicoptère.
        1 : Multiaxes – 2 : Autogyre.
        1 : Multiaxes – 2 : Hélicoptère.',
        4,
        '2021-4-3.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les appareils faisant route opposée. Compte tenu des calages et altitudes affichées, la collision est :',
        'impossible, 2 est forcément plus haut que 1.
        impossible, 1 est forcément plus haut que 2.
        possible.
        dépendante du calage.',
        3,
        '2021-4-3.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Pour afficher leur altitude par rapport au niveau moyen de la mer, les pilotes doivent afficher sur leur altimètre un calage :',
        'QNH.
        QFE.
        AMSL.
        1013.',
        1,
        '2021-4-3.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le contrôleur transmet le QNH de 1000 hPa par radio aux deux pilotes qui règlent leurs altimètres à cette valeur. Ceux-ci affichent alors :',
        '1300 ft chacun.
        1000 ft chacun.
        altimètre 1 : 1300 ft – Altimètre 2 : 1000 ft.
        altimètre 1 : 1000 ft – Altimètre 2 : 1300 ft.',
        2,
        '2021-4-3.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Compte tenu des règles de priorité, quelle manœuvre doivent réaliser chaque pilote pour éviter un accident ?',
        'chacun vire à gauche.
        chacun vire à droite.
        1 tourne à gauche et 2 tourne à droite.
        1 tourne à droite et 2 tourne à gauche.',
        2,
        '2021-4-3.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le calage de 1000 hPa étant affiché sur les deux appareils, 1 se rapproche d’une masse d’air froide tandis que 2 se rapproche d’une masse d’air chaude. A altitude indiquée constante, comment va évoluer l’altitude réelle des deux appareils ?',
        'l’altitude réelle de 1 diminue et l’altitude réelle de 2 augmente.
        l’altitude réelle de 1 augmente et l’altitude réelle de 2 diminue.
        les altitudes réelles de 1 et 2 restent constantes.
        les deux altitudes réelles évoluent de la même manière.',
        1,
        '2021-4-3.png',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('La hauteur minimale de survol d’une ville dont la largeur est comprise entre 1 200 m et 3 600 m est :',
        'fonction de la météo.
        fixée à 300 m (~1 000 ft).
        fixée à 500 m (~1 700 ft).
        fixée à 1 000 m (~3 300 ft).',
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
VALUES ('Afin de respecter la procédure d’atterrissage, vous adoptez comme altitude dans votre circuit de piste :',
        '1500 ft QNH.
        1500 ft QFE.
        1000 ft QNH.
        1500 ft calage 1013,25 hPa.',
        1,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Lors d’une conduite en vol de nuit vous apercevez des feux avec le vert à gauche et le rouge à droite. L’avion que je rencontre :',
        'se déplace vers la droite.
        se déplace vers la gauche.
        se déplace dans le même sens que moi.
        se déplace vers moi.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur tous les aérodromes ouverts à la circulation aérienne publique (CAP), la réglementation impose la présence :',
        'du numéro de la piste en service sur la tour de contrôle.
        d''une manche à air.
        d''un hangar pour héberger les avions de passage.
        d''un T indiquant la piste en service.',
        2,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Les espaces aériens de classe A :',
        'sont autorisés aux vols VFR.
        sont interdis aux vols IFR.
        sont autorisés aux vols VFR et IFR.
        sont interdis aux vols VFR.',
        4,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le vol VFR est interdit au-dessus du niveau :',
        '195.
        205.
        255.
        305.',
        1,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’hypoxie est due :',
        'à une trop forte quantité d’oxygène.
        à une trop faible quantité d’oxygène.
        à un manque de glucide dans l’organisme.
        à un surplus de glucide dans l’organisme.',
        2,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur la carte VAC d''un aérodrome, il est écrit "Ouvert à la CAP". Cela signifie :',
        'que seuls les avions équipés d''un conservateur de cap sont autorisés.
        que l''aérodrome est ouvert à la Circulation Aérienne Publique.
        que la Course à Pied est autorisée sur la piste de l''aérodrome.
        que les avions de voltige sont autorisés à évoluer au-dessus de l''aérodrome.',
        2,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Un avion de ligne effectue la liaison New York - Paris à la vitesse propre de 900 km/h. Il évolue dans un Jet Stream de 300 km/h orienté d''ouest en est. Quelle est alors sa vitesse- sol ?',
        '600 km/h.
        900 km/h.
        1200 km/h.
        300 km/h.',
        3,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Vous décidez de terminer votre navigation en cheminement, c’est une méthode qui consiste à suivre :',
        'des repères caractéristiques au sol.
        les chemins.
        les indications du GPS.
        la direction indiquée par le VOR.',
        1,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Sur une carte au 1/500 000, une distance mesurée de 10 cm correspond à une distance réelle de :',
        '50 km.
        5 km.
        15 km.
        150 km.',
        1,
        '',
        4,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Qui a effectué la première boucle à bord de son Blériot XI en 1913 et qui préfigurait l’art de l’acrobatie aérienne ?',
        'Charles Lindbergh.
        Louis Blériot.
        Adolphe Pégoud.
        Roland Garros.',
        3,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel raid aérien tire son nom du fondateur de l’Aéropostale ?',
        'Raid Saint-Exupéry.
        Raid Latécoère.
        Raid Roland Garros.
        Raid Lindbergh.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('L’avion illustré à la question 5.3 a aussi été utilisé comme avion de la patrouille de France. Par quel avion plus moderne a-t-il été remplacé ?',
        'Mirage IV.
        Alpha Jet.
        Rafale.
        Mirage 2000.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En quelle année a été créée la première patrouille de France ?',
        '1946.
        1953.
        1920.
        1961.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Dans quelle ville se trouve la base aérienne de la patrouille de France ?',
        'Salon de Provence.
        Istres.
        Étampes.
        Le Bourget.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Dans le monde de l’aviation, que signifie l’acronyme P A F ?',
        'Patrouille Aérienne Française.
        Pompier Aérien Français.
        Pilote d’Air France.
        Patrouille Acrobatique de France.',
        4,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel pilote américain légendaire, décédé en décembre 2020, avait été le premier à franchir le mur du son en 1947 ?',
        'Chuck Yeager.
        Alan Shepard.
        Charles Lindbergh.
        John Glenn.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le passage du mur du son en chute libre est :',
        'réalisé pour la première fois par l’autrichien Félix Baumgartner en 2012.
        réalisé pour la première fois par l’américain Joseph Kittinger en 1960.
        n’a jamais été réalisé.
        n’est physiquement pas réalisable.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Le Concorde a fait son premier vol en 1969. Quel autre avion mythique a également volé pour la première fois cette année-là ?',
        'Boeing 707.
        Boeing 747.
        Boeing 737.
        Boeing 777.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En 1901, quel monument Alberto Santos Dumont a-t-il contourné en dirigeable ?',
        'la Tour Eiffel.
        la statue de la Liberté.
        Notre Dame de la Garde.
        la tour de Pise.',
        1,
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
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel est le nom de l’avion avec lequel Charles Lindbergh a réussi la première traversée de l’Atlantique ?',
        'l’oiseau blanc.
        le point d’interrogation.
        le Flyer.
        le Spirit of Saint-Louis.',
        4,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel exploit, réalisé par le pilote Chesley Sullenberger en 15 janvier 2009, a permis de sauver tous ses passagers ?',
        'il a fait le plus long vol plané avec un Airbus A330 suite à l’arrêt des 2 moteurs.
        il a fait amerrir un airbus A320 sur le fleuve Hudson suite à une collision aviaire.
        il a posé un DC10 avec des commandes de vol non fonctionnelles suite à une panne hydraulique.
        il a posé un Boeing 737 sur le ventre à cause d’une panne du train d’atterrissage.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel film raconte l’exploit décrit dans la question précédente ?',
        'Flight.
        Sully.
        Aviator.
        Menphis Bell.',
        2,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quel évènement historique qui s’est déroulé en 1969, est retracé dans le film « First Man » ?',
        'la mission Apollo 11 et les premiers pas sur la Lune.
        les pionniers de l’aviation et le premier vol des plus lourds que l’air.
        la construction du Concorde et ses premiers vols supersoniques.
        l’essor de l’aviation commerciale et premier vol du Boeing 747.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('Quelle est la nationalité du premier homme dans l’espace ?',
        'Soviétique.
        Américaine.
        Française.
        Anglaise.',
        1,
        '',
        5,
        CURRENT_TIMESTAMP);
INSERT INTO challenges (question, proposals, solution, image_url, competence_id, created_at)
VALUES ('En quelle année a eu lieu le premier lancement de la navette Columbia ?',
        '1969.
        1981.
        1998.
        2001.',
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
VALUES ('Amelia Earhart, pilote américaine, reste célèbre pour avoir été la première femme seule aux commandes de son avion à :',
        'franchir la Cordillère des Andes.
        traverser la mer Méditerranée.
        survoler le Pôle Nord.
        traverser l''océan Atlantique.',
        4,
        '',
        5,
        CURRENT_TIMESTAMP);