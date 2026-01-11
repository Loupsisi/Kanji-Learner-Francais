// Loupsisi
// 01/01/2026-06/01/2026
// Page Wab Pour apprendre les kanjis 

//-------------------Tableau de Kanji-----------------------

const kanjiDataBase = [
    // ------------------JLPT N5 Groupe 1------------------- 
    {kanji: "一", sens: "un", On: "Ichi ; Itsu", kun: "hito ; hitotsu"},
    {kanji: "二", sens: "deux", On: "Ni", kun: "futa ; futatsu"},
    {kanji: "三", sens: "trois", On: "San", kun: "mi ; mittsu"},
    {kanji: "四", sens: "quatre", On: "Shi", kun: "yo ; yon ; yotsu ; yottsu"},
    {kanji: "五", sens: "cinq", On: "Go", kun: "itsu ; itsutsu"},
    {kanji: "六", sens: "six", On: "Roku", kun: "mu ; mutsu ; muttsu"},
    {kanji: "七", sens: "sept", On: "Shichi", kun: "nana ; nanatsu"},
    {kanji: "八", sens: "huit", On: "Hachi", kun: "ya ; yatsu ; yattsu"},
    {kanji: "九", sens: "neuf", On: "Kyuu ; Ku", kun: "kokono ; kokonotsu"},
    {kanji: "十", sens: "dix", On: "Juu", kun: "too ; to"},
    {kanji: "百", sens: "cent", On: "Hyaku", kun: "momo"},
    {kanji: "千", sens: "mille", On: "Sen", kun: "chi"},
    {kanji: "万", sens: "dix mille", On: "Man ; Ban", kun: "yorozu"},
    {kanji: "円", sens: "cercle, yen", On: "En", kun: "marui"},
    {kanji: "日", sens: "jour, soleil", On: "Nichi ; Jitsu", kun: "hi ; ka"},
    {kanji: "月", sens: "mois, lune", On: "Getsu ; Gatsu", kun: "tsuki"},
    {kanji: "火", sens: "feu", On: "Ka", kun: "hi ; ho"},
    {kanji: "水", sens: "eau", On: "Sui", kun: "mizu"},
    {kanji: "木", sens: "arbre, bois", On: "Moku ; Boku", kun: "ki ; ko"},
    {kanji: "金", sens: "or, métal, argent", On: "Kin ; Kon", kun: "kane ; kana"},  
    {kanji: "土", sens: "terre, sol", On: "Do ; To", kun: "tsuchi"},
    {kanji: "山", sens: "montagne", On: "San", kun: "yama"},
    {kanji: "川", sens: "rivière", On: "Sen", kun: "kawa"},
    {kanji: "田", sens: "rizière", On: "Den", kun: "ta"},
    {kanji: "人", sens: "personne, humain", On: "Jin ; Nin", kun: "hito"},
    {kanji: "子", sens: "enfant", On: "Shi ; Su", kun: "ko"},
    {kanji: "女", sens: "femme", On: "Jo ; Nyo", kun: "onna ; me"},
    {kanji: "男", sens: "homme", On: "Dan ; Nan", kun: "otoko ; o"},
    {kanji: "先", sens: "avant, précédent", On: "Sen", kun: "saki"},
    {kanji: "生", sens: "vie, naissance", On: "Sei ; Shou", kun: "i ; u ; o ; ha ; nama ; ki"},
    {kanji: "学", sens: "étude, science", On: "Gaku", kun: "manabu"},
    {kanji: "校", sens: "école", On: "Kou", kun: ""},
    {kanji: "年", sens: "année", On: "Nen", kun: "toshi"},
    {kanji: "何", sens: "quoi, quel", On: "Ka", kun: "nani ; nan"},
    {kanji: "名", sens: "nom, réputation", On: "Mei ; Myou", kun: "na"},
    {kanji: "前", sens: "avant, devant", On: "Zen", kun: "mae"},
    {kanji: "後", sens: "après, derrière", On: "Go ; Kou", kun: "nochi ; ushiro ; ato"},
    {kanji: "外", sens: "extérieur", On: "Gai ; Ge", kun: "soto ; hoka ; hazu"},
    {kanji: "左", sens: "gauche", On: "Sa", kun: "hidari"},
    {kanji: "右", sens: "droite", On: "U ; Yuu", kun: "migi"},
    // --------------------JLPT N5 Groupe 2----------------
    {kanji: "中", sens: "milieu, intérieur", On: "Chuu", kun: "naka ; uchi"},
    {kanji: "大", sens: "grand", On: "Dai ; Tai", kun: "oo"},
    {kanji: "小", sens: "petit", On: "Shou", kun: "chii ; ko ; o"},
    {kanji: "上", sens: "dessus, monter", On: "Jou", kun: "ue ; upa ; ageru ; agaru"},
    {kanji: "下", sens: "dessous, descendre", On: "Ka ; Ge", kun: "shita ; moto ; sageru ; sagaru ; kudaru"},
    {kanji: "本", sens: "livre, origine", On: "Hon", kun: "moto"},
    {kanji: "休", sens: "repos", On: "Kyuu", kun: "yasumu ; yasumi"},
    {kanji: "行", sens: "aller, ligne", On: "Kou ; Gyou", kun: "iku ; yuku ; okonau"},
    {kanji: "来", sens: "venir", On: "Rai", kun: "kuru ; kitaru"},
    {kanji: "出", sens: "sortir", On: "Shutsu", kun: "deru ; dasu"},
    {kanji: "入", sens: "entrer", On: "Nyuu", kun: "hairu ; ireru"},
    {kanji: "口", sens: "bouche", On: "Kou ; Ku", kun: "kuchi"},
    {kanji: "白", sens: "blanc", On: "Haku ; Byaku", kun: "shiro"},
    {kanji: "目", sens: "oeil", On: "Moku", kun: "me"},
    {kanji: "耳", sens: "oreille", On: "Ji", kun: "mimi"},
    {kanji: "手", sens: "main", On: "Shu", kun: "te"},
    {kanji: "足", sens: "pied, jambe, suffire", On: "Soku", kun: "ashi ; tariru"},
    {kanji: "見", sens: "voir, regarder", On: "Ken", kun: "miru ; mieru ; miseru"},
    {kanji: "聞", sens: "écouter, entendre", On: "Bun ; Mon", kun: "kiku ; kikoeru"},
    {kanji: "書", sens: "écrire", On: "Sho", kun: "kaku"},
    {kanji: "話", sens: "parler, histoire", On: "Wa", kun: "hanasu ; hanashi"},
    {kanji: "語", sens: "langue, mot", On: "Go", kun: "kataru"},
    {kanji: "食", sens: "manger, nourriture", On: "Shoku", kun: "taberu ; kuu"},
    {kanji: "時", sens: "temps, heure", On: "Ji", kun: "toki"},
    {kanji: "間", sens: "intervalle, espace", On: "Kan ; Ken", kun: "aida ; ma"},
    {kanji: "分", sens: "partie, minute, comprendre", On: "Bun ; Fun", kun: "wakaru ; wakeru"},
    {kanji: "半", sens: "moitié", On: "Han", kun: "nakaba"},
    {kanji: "午", sens: "midi", On: "Go", kun: ""},
    {kanji: "今", sens: "maintenant", On: "Kon ; Kin", kun: "ima"},
    {kanji: "友", sens: "ami", On: "Yuu", kun: "tomo"},
    {kanji: "父", sens: "père", On: "Fu", kun: "chichi"},
    {kanji: "母", sens: "mère", On: "Bo", kun: "haha"},
    {kanji: "高", sens: "haut, cher", On: "Kou", kun: "takai"},
    {kanji: "安", sens: "bon marché, paisible", On: "An", kun: "yasui"},
    {kanji: "長", sens: "long, chef", On: "Chou", kun: "nagai"},
    {kanji: "多", sens: "beaucoup", On: "Ta", kun: "ooi"},
    // ------------JLPT N4 Groupe 1------------------
    {kanji: "読", sens: "lire", On: "Doku", kun: "yomu"},
    {kanji: "飲", sens: "boire", On: "In", kun: "nomu"},
    {kanji: "買", sens: "acheter", On: "Bai", kun: "kau"},
    {kanji: "物", sens: "chose, objet", On: "Butsu ; Motsu", kun: "mono"},
    {kanji: "事", sens: "chose, fait, affaire", On: "Ji ; Zu", kun: "koto"},
    {kanji: "会", sens: "rencontre, réunion", On: "Kai ; E", kun: "au"},
    {kanji: "自", sens: "soi-même", On: "Ji ; Shi", kun: "mizukara"},
    {kanji: "手", sens: "main", On: "Shu", kun: "te"},
    {kanji: "言", sens: "dire, mot", On: "Gen ; Gon", kun: "iu ; koto"},
    {kanji: "者", sens: "quelqu'un, personne", On: "Sha", kun: "mono"},
    {kanji: "同", sens: "identique, même", On: "Dou", kun: "onaji"},
    {kanji: "方", sens: "direction, manière", On: "Hou", kun: "kata"},
    {kanji: "目", sens: "oeil, point", On: "Moku ; Boku", kun: "me ; ma"},
    {kanji: "理", sens: "raison, logique", On: "Ri", kun: "kotowari"},
    {kanji: "力", sens: "force, puissance", On: "Ryoku ; Riki", kun: "chikara"},
    {kanji: "場", sens: "lieu, endroit", On: "Jou", kun: "ba"},
    {kanji: "思", sens: "penser", On: "Shi", kun: "omou"},
    {kanji: "動", sens: "bouger, mouvement", On: "Dou", kun: "ugoku ; ugokasu"},
    {kanji: "家", sens: "maison, famille", On: "Ka ; Ke", kun: "ie ; ya"},
    {kanji: "地", sens: "terre, sol", On: "Chi ; Ji", kun: ""},
    {kanji: "体", sens: "corps, substance", On: "Tai ; Tei", kun: "karada"},
    {kanji: "作", sens: "faire, fabriquer", On: "Saku ; Sa", kun: "tsukuru"},
    {kanji: "持", sens: "tenir, posséder", On: "Ji", kun: "motsu"},
    {kanji: "明", sens: "clair, brillant", On: "Mei ; Myou", kun: "akarui ; akiraka ; akari"},
    {kanji: "私", sens: "je, privé", On: "Shi", kun: "watashi ; watakushi"},
    {kanji: "発", sens: "départ, émission", On: "Hatsu ; Hotsu", kun: ""},
    {kanji: "心", sens: "coeur, esprit", On: "Shin", kun: "kokoro"},
    {kanji: "意", sens: "idée, pensée, attention", On: "I", kun: ""},
    {kanji: "度", sens: "degré, fois", On: "Do ; To ; Taku", kun: "tabi"},
    {kanji: "知", sens: "savoir, connaître", On: "Chi", kun: "shiru"},
    {kanji: "立", sens: "se tenir debout, établir", On: "Ritsu ; Ryuu", kun: "tatsu ; tateru"},
    {kanji: "用", sens: "utiliser, affaire", On: "You", kun: "mochiiru"},
    {kanji: "通", sens: "traverser, passer", On: "Tsuu ; Tsu", kun: "tooru ; kayou"},
    {kanji: "政", sens: "politique, gouvernement", On: "Sei ; Shou", kun: "matsurigoto"},
    {kanji: "市", sens: "ville, marché", On: "Shi", kun: "ichi"},
    {kanji: "界", sens: "monde, limite", On: "Kai", kun: ""},
    {kanji: "業", sens: "industrie, travail", On: "Gyou ; Gou", kun: "waza"},
    {kanji: "題", sens: "sujet, titre", On: "Dai", kun: ""},
    {kanji: "員", sens: "membre, employé", On: "In", kun: ""},
    {kanji: "開", sens: "ouvrir", On: "Kai", kun: "hiraku ; akeru"},
    {kanji: "問", sens: "question, problème", On: "Mon", kun: "tou"},
    {kanji: "代", sens: "remplacer, génération", On: "Dai ; Tai", kun: "kawaru ; yo ; shiro"},
    {kanji: "成", sens: "devenir, accomplir", On: "Sei ; Jou", kun: "naru ; nasu"},
    {kanji: "主", sens: "maître, principal", On: "Shu ; Su", kun: "nushi ; omo"},
    {kanji: "正", sens: "correct, juste", On: "Sei ; Shou", kun: "tadashii ; masa"},
    {kanji: "真", sens: "vrai, pur", On: "Shin", kun: "ma"},
    // --------------JLPT N4 Groupe 2-------------
    {kanji: "使", sens: "utiliser, messager", On: "Shi", kun: "tsukau"},
    {kanji: "考", sens: "penser, considérer", On: "Kou", kun: "kangaeru"},
    {kanji: "別", sens: "séparer, autre", On: "Betsu", kun: "wakare ; wakeru"},
    {kanji: "以", sens: "au moyen de, depuis", On: "I", kun: "motte"},
    {kanji: "元", sens: "origine, base", On: "Gen ; Gan", kun: "moto"},
    {kanji: "待", sens: "attendre", On: "Tai", kun: "matsu"},
    {kanji: "安", sens: "bon marché, paisible", On: "An", kun: "yasui"},
    {kanji: "近", sens: "proche", On: "Kin", kun: "chikai"},
    {kanji: "少", sens: "peu, petit", On: "Shou", kun: "sukunai ; sukoshi"},
    {kanji: "切", sens: "couper", On: "Setsu ; Sai", kun: "kiru"},
    {kanji: "終", sens: "fin, terminer", On: "Shuu", kun: "owaru ; owari"},
    {kanji: "楽", sens: "musique, confort, joie", On: "Gaku ; Raku", kun: "tanoshii"},
    {kanji: "音", sens: "son", On: "On ; In", kun: "oto ; ne"},
    {kanji: "道", sens: "chemin, route", On: "Dou", kun: "michi"},
    {kanji: "親", sens: "parent, proche", On: "Shin", kun: "oya ; shitashii"},
    {kanji: "着", sens: "arriver, porter , ( porter = vêtement)", On: "Chaku ; Jaku", kun: "kiru ; tsuku"},
    {kanji: "始", sens: "commencer", On: "Shi", kun: "hajimeru ; hajimaru"},
    {kanji: "多", sens: "beaucoup", On: "Ta", kun: "ooi"},
    {kanji: "早", sens: "tôt, rapide", On: "Sou ; Sattsu", kun: "hayai"},
    {kanji: "仕", sens: "servir, faire", On: "Shi ; Ji", kun: "tsukaeru"},
    {kanji: "海", sens: "mer, océan", On: "Kai", kun: "umi"},
    {kanji: "悪", sens: "mauvais, méchant", On: "Aku ; O", kun: "warui"},
    {kanji: "止", sens: "arrêter", On: "Shi", kun: "tomaru ; tomeru"},
    {kanji: "重", sens: "lourd, important", On: "Juu ; Chou", kun: "omoi ; kasaneru"},
    {kanji: "画", sens: "dessin, trait", On: "Ga ; Kaku", kun: ""},
    {kanji: "口", sens: "bouche, ouverture", On: "Kou ; Ku", kun: "kuchi"},
    {kanji: "味", sens: "goût, saveur", On: "Mi", kun: "aji"},
    {kanji: "空", sens: "ciel, vide", On: "Kuu", kun: "sora ; aki ; kara"},
    {kanji: "身", sens: "corps, soi-même", On: "Shin", kun: "mi"},
    {kanji: "運", sens: "destin, transporter", On: "Un", kun: "hakobu"},
    {kanji: "帰", sens: "rentrer chez soi", On: "Ki", kun: "kaeru"},
    {kanji: "集", sens: "rassembler", On: "Shuu", kun: "atsumeru ; atsumaru"},
    {kanji: "急", sens: "urgent, rapide", On: "Kyuu", kun: "isogu"},
    {kanji: "足", sens: "pied, jambe, suffire", On: "Soku", kun: "ashi ; tariru"},
    {kanji: "売", sens: "vendre", On: "Bai", kun: "uru"},
    {kanji: "起", sens: "se lever, se produire", On: "Ki", kun: "okiru ; okosu"},
    {kanji: "夜", sens: "nuit", On: "Ya", kun: "yoru ; yo"},
    {kanji: "料", sens: "frais, ingrédient", On: "Ryou", kun: ""},
    {kanji: "特", sens: "spécial", On: "Toku", kun: ""},
    {kanji: "品", sens: "article, qualité", On: "Hin", kun: "shina"},
    {kanji: "計", sens: "mesurer, planifier", On: "Kei", kun: "hakaru"},
    {kanji: "店", sens: "magasin", On: "Ten", kun: "mise"},
    {kanji: "送", sens: "envoyer", On: "Sou", kun: "okuru"},
    {kanji: "族", sens: "tribu, famille", On: "Zoku", kun: ""},
    {kanji: "文", sens: "phrase, littérature", On: "Bun ; Mon", kun: "fumi"},
    // ------------------------JLPT N4 Groupe 3------------------------
    {kanji: "英", sens: "brillant, Angleterre", On: "Ei", kun: "hanabusa"},
    {kanji: "映", sens: "projeter, reflet", On: "Ei", kun: "utsuru ; utsusu"},
    {kanji: "走", sens: "courir", On: "Sou", kun: "hashiru"},
    {kanji: "曜", sens: "jour de la semaine", On: "You", kun: ""},
    {kanji: "習", sens: "apprendre", On: "Shuu ; Ju", kun: "narau"},
    {kanji: "研", sens: "polir, recherche", On: "Ken", kun: "togu"},
    {kanji: "究", sens: "rechercher, approfondir", On: "Kyuu ; Ku", kun: "kiwameru"},
    {kanji: "質", sens: "qualité, question", On: "Shitsu ; Shichi ; Chi", kun: "tachi"},
    {kanji: "答", sens: "réponse", On: "Tou", kun: "kotaeru ; kotae"},
    {kanji: "宿", sens: "loger, auberge", On: "Shuku", kun: "yado"},
    {kanji: "建", sens: "construire", On: "Ken ; Kon", kun: "tateru ; tatsu"},
    {kanji: "説", sens: "expliquer, théorie", On: "Setsu ; Zei", kun: "toku"},
    {kanji: "医", sens: "médecine, docteur", On: "I", kun: ""},
    {kanji: "薬", sens: "médicament", On: "Yaku", kun: "kusuri"},
    {kanji: "院", sens: "institution, temple", On: "In", kun: ""},
    {kanji: "産", sens: "produire, naissance", On: "San", kun: "umu ; umareru"},
    {kanji: "広", sens: "large, vaste", On: "Kou", kun: "hiroi ; hirogeru"},
    {kanji: "門", sens: "porte", On: "Mon", kun: "kado ; to"},
    {kanji: "閉", sens: "fermer", On: "Hei", kun: "tojiru ; tateru"},
    {kanji: "階", sens: "étage, escalier", On: "Kai", kun: "kizahashi"},
    {kanji: "旅", sens: "voyage", On: "Ryo", kun: "tabi"},
    {kanji: "写", sens: "copier, photographier", On: "Sha ; Ja", kun: "utsusu ; utsuru"},
    {kanji: "昼", sens: "midi, jour", On: "Chuu", kun: "hiru"},
    {kanji: "春", sens: "printemps", On: "Shun", kun: "haru"},
    {kanji: "夏", sens: "été", On: "Ka ; Ge", kun: "natsu"},
    {kanji: "秋", sens: "automne", On: "Shuu", kun: "aki"},
    {kanji: "冬", sens: "hiver", On: "Tou", kun: "fuyu"},
    {kanji: "不", sens: "négatif, non", On: "Fu ; Bu", kun: ""},
    {kanji: "世", sens: "monde, génération", On: "Sei ; Se", kun: "yo"},
    {kanji: "乗", sens: "monter , ( monter --> dans véhicule)", On: "Jou ; Shou", kun: "noru ; noseru"},
    {kanji: "写", sens: "copier, décrire", On: "Sha ; Ja", kun: "utsusu ; utsuru"},
    {kanji: "低", sens: "bas", On: "Tei", kun: "hikui ; hiku"},
    {kanji: "住", sens: "habiter", On: "Juu ; Chu ; Su", kun: "sumu ; sumau"},
    {kanji: "勉", sens: "effort", On: "Ben", kun: "tsutomeru"},
    {kanji: "強", sens: "fort", On: "Kyou ; Gou", kun: "tsuyoi ; shiiru"},
    {kanji: "図", sens: "dessin, plan", On: "Zu ; To", kun: "hakaru"},
    {kanji: "室", sens: "chambre, pièce", On: "Shitsu", kun: "muro"},
    {kanji: "味", sens: "goût", On: "Mi", kun: "aji ; ajiwau"},
    {kanji: "好", sens: "aimer", On: "Kou", kun: "konomu ; suku"},
    {kanji: "曜", sens: "jour de la semaine", On: "You", kun: ""},
    {kanji: "書", sens: "écrire", On: "Sho", kun: "kaku"},
    {kanji: "朝", sens: "matin", On: "Chou", kun: "asa"},
    // ------------------------JLPT N4 Groupe 4---------------------------------
    {kanji: "肉", sens: "viande", On: "Niku", kun: ""},
    {kanji: "弟", sens: "petit frère", On: "Tei ; Dai ; De", kun: "otouto"},
    {kanji: "犬", sens: "chien", On: "Ken", kun: "inu"},
    {kanji: "飯", sens: "repas, riz cuit", On: "Han", kun: "meshi"},
    {kanji: "館", sens: "bâtiment, hall", On: "Kan", kun: "yakata ; tate"},
    {kanji: "貸", sens: "prêter", On: "Tai", kun: "kasu"},
    {kanji: "堂", sens: "hall, temple", On: "Dou", kun: ""},
    {kanji: "借", sens: "emprunter", On: "Shaku", kun: "kariru"},
    {kanji: "姉", sens: "grande soeur", On: "Shi", kun: "ane"},
    {kanji: "鳥", sens: "oiseau", On: "Chou", kun: "tori"},
    {kanji: "夕", sens: "soirée", On: "Seki", kun: "yuu"},
    {kanji: "茶", sens: "thé", On: "Cha ; Sa", kun: ""},
    {kanji: "魚", sens: "poisson", On: "Gyo", kun: "uwo ; sakana"},
    {kanji: "妹", sens: "petite soeur", On: "Mai", kun: "imouto"},
    {kanji: "洋", sens: "océan, occidental", On: "You", kun: ""},
    {kanji: "牛", sens: "vache, boeuf", On: "Gyuu", kun: "ushi"},
    {kanji: "駅", sens: "gare", On: "Eki", kun: ""},
    {kanji: "漢", sens: "Chine, dynastie Han", On: "Kan", kun: ""},
    {kanji: "病", sens: "maladie", On: "Byou ; Hei", kun: "yamai ; yamu"},
    {kanji: "勉", sens: "effort", On: "Ben", kun: "tsutomeru"},
    {kanji: "験", sens: "test, effet", On: "Ken ; Gen", kun: "akashi ; shirushi"},
    {kanji: "風", sens: "vent, style", On: "Fuu ; Fu", kun: "kaze ; kaza"},
    {kanji: "題", sens: "sujet, question", On: "Dai", kun: ""},
    {kanji: "有", sens: "avoir, exister", On: "Yuu ; U", kun: "aru"},
    {kanji: "便", sens: "commodité, courrier", On: "Ben ; Bin", kun: "tayori"},
    {kanji: "利", sens: "profit, avantage", On: "Ri", kun: "kiku"},
    {kanji: "借", sens: "emprunter", On: "Shaku", kun: "kariru"},
    {kanji: "忙", sens: "occupé", On: "Bou", kun: "isogashii"},
    {kanji: "忘", sens: "oublier", On: "Bou", kun: "wasureru"},
    {kanji: "和", sens: "paix, harmonie, japonais", On: "Wa ; O", kun: "yawaragu ; nagomu"},
    {kanji: "暗", sens: "sombre", On: "An", kun: "kurai"},
    {kanji: "遠", sens: "loin", On: "En ; On", kun: "tooi"},
    {kanji: "寒", sens: "froid , (froid --> température)", On: "Kan", kun: "samui"},
    {kanji: "顔", sens: "visage", On: "Gan", kun: "kao"},
    {kanji: "試", sens: "essayer, test", On: "Shi", kun: "kokoromiru ; tamesu"},
    {kanji: "験", sens: "test, preuve", On: "Ken", kun: ""},
    {kanji: "願", sens: "souhaiter, prier", On: "Gan", kun: "negau"},
    {kanji: "色", sens: "couleur", On: "Shoku ; Shiki", kun: "iro"},
    {kanji: "走", sens: "courir", On: "Sou", kun: "hashiru"},
    {kanji: "運", sens: "transporter, chance", On: "Un", kun: "hakobu"},
    {kanji: "都", sens: "capitale, métropole", On: "To ; Tsu", kun: "miyako"},
    {kanji: "県", sens: "préfecture", On: "Ken", kun: "kakeru"},
    {kanji: "村", sens: "village", On: "Son", kun: "mura"},
    {kanji: "町", sens: "ville, quartier", On: "Chou", kun: "machi"},
    // ----------------------JLPT N3 Groupe 1----------------
    {kanji: "部", sens: "section, partie", On: "Bu", kun: "-be"},
    {kanji: "合", sens: "s'ajuster, se joindre", On: "Gou ; Gatsu ; Katsu", kun: "au ; awaseru"},
    {kanji: "最", sens: "le plus, extrême", On: "Sai", kun: "motto ; mottomo"},
    {kanji: "当", sens: "frapper, correspondre", On: "Tou", kun: "ataru ; ateru"},
    {kanji: "全", sens: "tout, entier", On: "Zen", kun: "mattaku ; subete"},
    {kanji: "回", sens: "fois, tourner", On: "Kai ; E", kun: "mawaru ; mawasu"},
    {kanji: "戦", sens: "guerre, combat", On: "Sen", kun: "tatakau ; ikusa"},
    {kanji: "実", sens: "réalité, fruit", On: "Jitsu", kun: "mi ; minoru"},
    {kanji: "性", sens: "sexe, nature, genre", On: "Sei ; Shou", kun: "saga"},
    {kanji: "連", sens: "emporter, lien", On: "Ren", kun: "tsureru ; tsuranaru"},
    {kanji: "取", sens: "prendre", On: "Shu", kun: "toru"},
    {kanji: "要", sens: "besoin, essentiel", On: "You", kun: "iru ; kaname"},
    {kanji: "対", sens: "vis-à-vis, s'opposer", On: "Tai ; Tsui", kun: "aite ; sorou"},
    {kanji: "決", sens: "décider", On: "Ketsu", kun: "kimeru ; kimaru"},
    {kanji: "変", sens: "inhabituel, changer", On: "Hen", kun: "kawaru ; kaeru"},
    {kanji: "所", sens: "lieu, endroit", On: "Sho", kun: "tokoro"},
    {kanji: "相", sens: "mutuel, aspect", On: "Sou ; Shou", kun: "ai"},
    {kanji: "関", sens: "connexion, barrière", On: "Kan", kun: "seki ; kaka-waru"},
    {kanji: "信", sens: "foi, confiance", On: "Shin", kun: "shinjiru"},
    {kanji: "感", sens: "émotion, sentiment", On: "Kan", kun: ""},
    {kanji: "勝", sens: "victoire, gagner", On: "Shou", kun: "katsu ; masaru"},
    {kanji: "解", sens: "démêler, résoudre", On: "Kai ; Ge", kun: "toku ; tokeru"},
    {kanji: "調", sens: "mélodie, enquêter", On: "Chou", kun: "shiraberu ; totonou"},
    {kanji: "初", sens: "première fois, début", On: "Sho", kun: "hajime ; hatsu ; ui-"},
    {kanji: "法", sens: "méthode, loi", On: "Hou ; Hattsu", kun: "nori"},
    {kanji: "違", sens: "différence, erreur", On: "I", kun: "chigau ; chigaeru"},
    {kanji: "現", sens: "présent, apparaître", On: "Gen", kun: "arawareru ; arawasu"},
    {kanji: "夫", sens: "mari, homme", On: "Fu ; Fuu ; Bu", kun: "otto"},
    {kanji: "内", sens: "intérieur", On: "Nai ; Dai", kun: "uchi"},
    {kanji: "選", sens: "élire, choisir", On: "Sen", kun: "erabu"},
    {kanji: "次", sens: "suivant", On: "Ji ; Shi", kun: "tsugi ; tsu-gu"},
    {kanji: "機", sens: "machine, opportunité", On: "Ki", kun: "hata"},
    {kanji: "面", sens: "masque, face", On: "Men", kun: "omo ; omote ; tsura"},
    {kanji: "必", sens: "invariablement, certain", On: "Hitsu", kun: "kanarazu"},
    {kanji: "定", sens: "déterminer, fixer", On: "Tei ; Jou", kun: "sadamaru ; sadameru"},
    {kanji: "受", sens: "recevoir", On: "Ju", kun: "ukeru ; ukaru"},
    {kanji: "記", sens: "noter, scribe", On: "Ki", kun: "shirusu"},
    {kanji: "点", sens: "point, tache", On: "Ten", kun: "tsu-keru ; tsu-ku"},
    {kanji: "政", sens: "politique, gouvernement", On: "Sei ; Shou", kun: "matsurigoto"},
    {kanji: "位", sens: "rang, position", On: "I", kun: "kurai"},
    {kanji: "置", sens: "poser, placer", On: "Chi", kun: "oku"},
    {kanji: "結", sens: "lier, conclure", On: "Ketsu ; Ke-", kun: "musubu ; yu-u"},
    {kanji: "報", sens: "rapport, récompense", On: "Hou", kun: "muku-iru"},
    {kanji: "和", sens: "paix, harmonie, japonais", On: "Wa ; O", kun: "yawaragu ; nagomu"},
    {kanji: "活", sens: "vif, énergie", On: "Katsu", kun: "ikiru"},
    {kanji: "原", sens: "origine, prairie", On: "Gen", kun: "hara"},
    {kanji: "共", sens: "ensemble, avec", On: "Kyou", kun: "tomo"},
    // ---------------------JLPT N3 Groupe 2-----------------
    {kanji: "得", sens: "gain, acquérir", On: "Toku", kun: "eru ; uru"},
    {kanji: "解", sens: "comprendre, dénouer", On: "Kai ; Ge", kun: "toku ; hodo-ku"},
    {kanji: "使", sens: "utiliser", On: "Shi", kun: "tsukau"},
    {kanji: "際", sens: "occasion, bord", On: "Sai", kun: "kiwa"},
    {kanji: "勝", sens: "gagner", On: "Shou", kun: "katsu ; masaru"},
    {kanji: "面", sens: "face, surface", On: "Men", kun: "omote ; tsura"},
    {kanji: "告", sens: "annoncer", On: "Koku", kun: "tsugeru"},
    {kanji: "反", sens: "anti-, s'opposer", On: "Han ; Hon", kun: "soru ; sorasu"},
    {kanji: "判", sens: "jugement, sceau", On: "Han ; Ban", kun: "wakaru"},
    {kanji: "認", sens: "reconnaître", On: "Nin", kun: "mitomeru"},
    {kanji: "参", sens: "participer, venir", On: "San", kun: "mairu"},
    {kanji: "利", sens: "profit", On: "Ri", kun: "kiku"},
    {kanji: "組", sens: "équipe, assembler", On: "So", kun: "kumu ; kumi"},
    {kanji: "信", sens: "croire", On: "Shin", kun: "shinjiru"},
    {kanji: "在", sens: "exister, être situé", On: "Zai", kun: "aru"},
    {kanji: "件", sens: "affaire, cas", On: "Ken", kun: ""},
    {kanji: "側", sens: "côté", On: "Soku", kun: "gawa"},
    {kanji: "任", sens: "confier, responsabilité", On: "Nin", kun: "makaseru"},
    {kanji: "引", sens: "tirer", On: "In", kun: "hiku"},
    {kanji: "求", sens: "chercher, demander", On: "Kyuu", kun: "motomeru"},
    {kanji: "所", sens: "lieu", On: "Sho", kun: "tokoro"},
    {kanji: "次", sens: "suivant", On: "Ji", kun: "tsugi"},
    {kanji: "昨", sens: "passé, hier", On: "Saku", kun: ""},
    {kanji: "論", sens: "théorie, argument", On: "Ron", kun: ""},
    {kanji: "官", sens: "gouvernement, bureaucrate", On: "Kan", kun: ""},
    {kanji: "増", sens: "augmenter", On: "Zou", kun: "fueru ; fuyasu"},
    {kanji: "係", sens: "responsable, lien", On: "Kei", kun: "kakari"},
    {kanji: "感", sens: "sentiment", On: "Kan", kun: ""},
    {kanji: "情", sens: "émotion, compassion", On: "Jou", kun: "nasake"},
    {kanji: "投", sens: "lancer, jeter", On: "Tou", kun: "nageru"},
    {kanji: "示", sens: "montrer", On: "Ji ; Shi", kun: "shimesu"},
    {kanji: "打", sens: "frapper", On: "Da", kun: "utsu"},
    {kanji: "予", sens: "préfixe , (pré-), moi", On: "Yo", kun: "arakajime"},
    {kanji: "向", sens: "direction, faire face", On: "Kou", kun: "muku ; mukau"},
    {kanji: "更", sens: "encore, renouveler", On: "Kou", kun: "sara ; fukeru"},
    {kanji: "直", sens: "droit, réparer", On: "Choku ; Jiki", kun: "naosu ; tada"},
    {kanji: "両", sens: "les deux", On: "Ryou", kun: "teru"},
    {kanji: "式", sens: "style, cérémonie", On: "Shiki", kun: ""},
    {kanji: "欠", sens: "manque, absence", On: "Ketsu", kun: "kaku"},
    {kanji: "更", sens: "plus, tard", On: "Kou", kun: "sara ; fukeru"},
    {kanji: "認", sens: "admettre", On: "Nin", kun: "mitomeru"},
    {kanji: "指", sens: "doigt", On: "Shi", kun: "yubi ; sasu"},
    {kanji: "問", sens: "question", On: "Mon", kun: "tou"},
    {kanji: "付", sens: "attacher", On: "Fu", kun: "tsuku ; tsukeru"},
    {kanji: "件", sens: "sujet", On: "Ken", kun: ""},
    {kanji: "各", sens: "chaque", On: "Kaku", kun: "onoono"},
    // ---------------------JLPT N3 Groupe 3--------------
    {kanji: "査", sens: "enquêter, examiner", On: "Sa", kun: ""},
    {kanji: "果", sens: "fruit, résultat, accomplir", On: "Ka", kun: "hatasu ; hate"},
    {kanji: "番", sens: "tour, numéro", On: "Ban", kun: ""},
    {kanji: "状", sens: "état, condition, lettre", On: "Jou", kun: ""},
    {kanji: "独", sens: "seul, Allemagne", On: "Doku", kun: "hitori"},
    {kanji: "済", sens: "terminer, régler, économie", On: "Sai ; Sei", kun: "sumu ; sumasu"},
    {kanji: "備", sens: "préparer, fournir", On: "Bi", kun: "sonaeru ; sonawaru"},
    {kanji: "識", sens: "connaissance, discerner", On: "Shiki", kun: "shiru"},
    {kanji: "願", sens: "souhaiter, prier", On: "Gan", kun: "negau"},
    {kanji: "期", sens: "période, temps, espoir", On: "Ki ; Go", kun: ""},
    {kanji: "報", sens: "rapport, récompense", On: "Hou", kun: "mukuiru"},
    {kanji: "導", sens: "guider, mener", On: "Dou", kun: "michibiku"},
    {kanji: "芸", sens: "art, technique, performance", On: "Gei", kun: ""},
    {kanji: "術", sens: "art, technique, moyen", On: "Jutsu", kun: "sube"},
    {kanji: "複", sens: "multiple, double", On: "Fuku", kun: ""},
    {kanji: "雑", sens: "varié, mélangé, bruit", On: "Zatsu ; Zou", kun: ""},
    {kanji: "誌", sens: "magazine, document", On: "Shi", kun: ""},
    {kanji: "指", sens: "doigt, désigner", On: "Shi", kun: "yubi ; sasu"},
    {kanji: "務", sens: "devoir, tâche, service", On: "Mu", kun: "tsutomeru"},
    {kanji: "演", sens: "jouer, présenter, théâtre", On: "En", kun: ""},
    {kanji: "技", sens: "talent, technique", On: "Gi", kun: "waza"},
    {kanji: "態", sens: "état, apparence", On: "Tai", kun: ""},
    {kanji: "設", sens: "établir, créer", On: "Setsu", kun: "moukeru"},
    {kanji: "支", sens: "soutenir, branche", On: "Shi", kun: "sasaeru"},
    {kanji: "止", sens: "arrêter", On: "Shi", kun: "tomaru ; tomeru"},
    {kanji: "種", sens: "espèce, graine", On: "Shu", kun: "tane"},
    {kanji: "類", sens: "genre, sorte", On: "Rui", kun: "tagui"},
    {kanji: "昨", sens: "hier, passé", On: "Saku", kun: ""},
    {kanji: "晩", sens: "soir", On: "Ban", kun: ""},
    {kanji: "昼", sens: "midi, jour", On: "Chuu", kun: "hiru"},
    {kanji: "夜", sens: "nuit", On: "Ya", kun: "yoru ; yo"},
    {kanji: "朝", sens: "matin", On: "Chou", kun: "asa"},
    {kanji: "春", sens: "printemps", On: "Shun", kun: "haru"},
    {kanji: "夏", sens: "été", On: "Ka ; Ge", kun: "natsu"},
    {kanji: "秋", sens: "automne", On: "Shuu", kun: "aki"},
    {kanji: "冬", sens: "hiver", On: "Tou", kun: "fuyu"},
    {kanji: "寺", sens: "temple", On: "Ji", kun: "tera"},
    {kanji: "橋", sens: "pont", On: "Kyou", kun: "hashi"},
    {kanji: "河", sens: "rivière", On: "Ka", kun: "kawa"},
    {kanji: "岸", sens: "rive, côte", On: "Gan", kun: "kishi"},
    {kanji: "湖", sens: "lac", On: "Ko", kun: "mizuumi"},
    {kanji: "坂", sens: "pente, colline", On: "Han", kun: "saka"},
    {kanji: "谷", sens: "vallée", On: "Koku", kun: "tani"},
    {kanji: "雲", sens: "nuage", On: "Un", kun: "kumo"},
    {kanji: "波", sens: "vague", On: "Ha", kun: "nami"},
    {kanji: "岩", sens: "rocher", On: "Gan", kun: "iwa"},
    // -------------------JLPT N3 Groupe 4------------------
    {kanji: "練", sens: "pratiquer, pétrir", On: "Ren", kun: "neru"},
    {kanji: "習", sens: "apprendre", On: "Shuu", kun: "narau"},
    {kanji: "勉", sens: "effort, diligence", On: "Ben", kun: "tsutomeru"},
    {kanji: "強", sens: "fort", On: "Kyou ; Gou", kun: "tsuyoi ; shiiru"},
    {kanji: "研", sens: "polir, recherche", On: "Ken", kun: "togu"},
    {kanji: "究", sens: "rechercher, approfondir", On: "Kyuu", kun: "kiwameru"},
    {kanji: "留", sens: "retenir, rester", On: "Ryuu ; Ru", kun: "tomaru ; tomeru"},
    {kanji: "質", sens: "qualité, nature", On: "Shitsu ; Shichi", kun: ""},
    {kanji: "問", sens: "question", On: "Mon", kun: "tou"},
    {kanji: "題", sens: "sujet, titre", On: "Dai", kun: ""},
    {kanji: "答", sens: "réponse", On: "Tou", kun: "kotaeru ; kotae"},
    {kanji: "宿", sens: "logis, auberge", On: "Shuku", kun: "yado ; yadoru"},
    {kanji: "政", sens: "politique", On: "Sei ; Shou", kun: "matsurigoto"},
    {kanji: "治", sens: "gouverner, guérir", On: "Ji ; Chi", kun: "osameru ; naoru"},
    {kanji: "経", sens: "passer par, gérer", On: "Kei ; Kyou", kun: "heru"},
    {kanji: "済", sens: "terminer, régler", On: "Sai ; Sei", kun: "sumu"},
    {kanji: "識", sens: "connaître", On: "Shiki", kun: ""},
    {kanji: "法", sens: "loi, méthode", On: "Hou ; Hattsu", kun: ""},
    {kanji: "律", sens: "loi, rythme", On: "Ritsu ; Richi", kun: ""},
    {kanji: "規", sens: "règle, standard", On: "Ki", kun: ""},
    {kanji: "則", sens: "règle, loi", On: "Soku", kun: "notto-ru"},
    {kanji: "備", sens: "préparer", On: "Bi", kun: "sonaeru"},
    {kanji: "準", sens: "standard, préparer", On: "Jun", kun: ""},
    {kanji: "各", sens: "chaque", On: "Kaku", kun: "onoono"},
    {kanji: "個", sens: "individu, compteur", On: "Ko", kun: ""},
    {kanji: "別", sens: "séparer", On: "Betsu", kun: "wakeru ; chigau"},
    {kanji: "性", sens: "nature, sexe", On: "Sei ; Shou", kun: ""},
    {kanji: "格", sens: "statut, règle", On: "Kaku ; Kou", kun: ""},
    {kanji: "式", sens: "cérémonie, style", On: "Shiki", kun: ""},
    {kanji: "形", sens: "forme", On: "Kei ; Gyou", kun: "katachi"},
    {kanji: "状", sens: "état, lettre", On: "Jou", kun: ""},
    {kanji: "態", sens: "attitude, état", On: "Tai", kun: ""},
    {kanji: "容", sens: "contenir, apparence", On: "You", kun: ""},
    {kanji: "様", sens: "apparence, Monsieur/Madame", On: "You", kun: "sama"},
    {kanji: "比", sens: "comparer", On: "Hi", kun: "kuraberu"},
    {kanji: "検", sens: "examiner", On: "Ken", kun: ""},
    {kanji: "査", sens: "enquêter", On: "Sa", kun: ""},
    {kanji: "再", sens: "encore, à nouveau", On: "Sai ; Sa", kun: "futatabi"},
    {kanji: "度", sens: "degré, fois", On: "Do ; To", kun: "tabi"},
    {kanji: "番", sens: "numéro, tour", On: "Ban", kun: ""},
    {kanji: "次", sens: "suivant", On: "Ji", kun: "tsugi"},
    {kanji: "等", sens: "classe, égal, et cætera", On: "Tou", kun: "hitoshii ; nado"},
    {kanji: "共", sens: "ensemble", On: "Kyou", kun: "tomo"},
    {kanji: "全", sens: "tout, entier", On: "Zen", kun: "subete"},
    {kanji: "最", sens: "le plus", On: "Sai", kun: "motto ; mottomo"},
    {kanji: "無", sens: "rien, néant", On: "Mu ; Bu", kun: "nai"},
    {kanji: "非", sens: "non, erreur", On: "Hi", kun: "arazu"},
    // -----------------JLPT N3 Groupe 5------------ 
    {kanji: "第", sens: "ordinal , (ordinal = préfixe)", On: "Dai", kun: ""},
    {kanji: "成", sens: "devenir, accomplir", On: "Sei ; Jou", kun: "naru"},
    {kanji: "的", sens: "cible, suffixe d'adjectif", On: "Teki", kun: "mato"},
    {kanji: "期", sens: "période", On: "Ki", kun: ""},
    {kanji: "限", sens: "limite", On: "Gen", kun: "kagiru"},
    {kanji: "続", sens: "continuer", On: "Zoku", kun: "tsuduku"},
    {kanji: "過", sens: "passer, dépasser", On: "Ka", kun: "sugiru"},
    {kanji: "進", sens: "avancer", On: "Shin", kun: "susumu"},
    {kanji: "常", sens: "normal, toujours", On: "Jou", kun: "tsune"},
    {kanji: "欠", sens: "manque", On: "Ketsu", kun: "kaku"},
    {kanji: "現", sens: "présent, apparaître", On: "Gen", kun: "arawareru"},
    {kanji: "在", sens: "exister", On: "Zai", kun: "aru"},
    {kanji: "在", sens: "être situé", On: "Zai", kun: "aru"},
    {kanji: "実", sens: "réalité", On: "Jitsu", kun: "mi"},
    {kanji: "確", sens: "sûr, certain", On: "Kaku", kun: "tashika"},
    {kanji: "認", sens: "reconnaître", On: "Nin", kun: "mitomeru"},
    {kanji: "表", sens: "surface, exprimer", On: "Hyou", kun: "omote ; arawasu"},
    {kanji: "示", sens: "montrer", On: "Ji ; Shi", kun: "shimesu"},
    {kanji: "判", sens: "jugement", On: "Han", kun: "wakaru"},
    {kanji: "断", sens: "couper, refuser", On: "Dan", kun: "kotowaru ; tatsu"},
    {kanji: "認", sens: "admettre", On: "Nin", kun: "mitomeru"},
    {kanji: "可", sens: "possible", On: "Ka", kun: ""},
    {kanji: "否", sens: "non, nier", On: "Hi", kun: "ina"},
    {kanji: "権", sens: "droit, pouvoir", On: "Ken", kun: ""},
    {kanji: "制", sens: "système, contrôle", On: "Sei", kun: ""},
    {kanji: "務", sens: "devoir, tâche", On: "Mu", kun: "tsutomeru"},
    {kanji: "総", sens: "total, général", On: "Sou", kun: ""},
    {kanji: "領", sens: "territoire, recevoir", On: "Ryou", kun: ""},
    {kanji: "設", sens: "établir", On: "Setsu", kun: "moukeru"},
    {kanji: "保", sens: "préserver", On: "Ho", kun: "tamotsu"},
    {kanji: "守", sens: "protéger", On: "Shu", kun: "mamoru"},
    {kanji: "留", sens: "retenir", On: "Ryuu", kun: "tomaru"},
    {kanji: "付", sens: "attacher", On: "Fu", kun: "tsuku"},
    {kanji: "受", sens: "recevoir", On: "Ju", kun: "ukeru"},
    {kanji: "配", sens: "distribuer", On: "Hai", kun: "kubaru"},
    {kanji: "委", sens: "confier", On: "I", kun: "yudaneru"},
    {kanji: "任", sens: "confier", On: "Nin", kun: "makaseru"},
    {kanji: "解", sens: "résoudre, comprendre", On: "Kai", kun: "toku"},
    {kanji: "説", sens: "expliquer", On: "Setsu", kun: "toku"},
    {kanji: "言", sens: "dire", On: "Gen ; Gon", kun: "iu"},
    {kanji: "信", sens: "croire", On: "Shin", kun: "shinjiru"},
    {kanji: "念", sens: "pensée, désir", On: "Nen", kun: ""},
    {kanji: "指", sens: "désigner", On: "Shi", kun: "sasu"},
    {kanji: "導", sens: "guider", On: "Dou", kun: "michibiku"},
    {kanji: "報", sens: "rapport", On: "Hou", kun: "mukuiru"},
    {kanji: "告", sens: "annoncer", On: "Koku", kun: "tsugeru"},
    // ---------------JLPT N3 Groupe 6----------------
    {kanji: "呼", sens: "appeler, inviter", On: "Ko", kun: "yobu"},
    {kanji: "吸", sens: "aspirer, fumer, sucer", On: "Kyuu", kun: "suu"},
    {kanji: "吹", sens: "souffler", On: "Sui", kun: "fuku"},
    {kanji: "殺", sens: "tuer", On: "Satsu ; Sai", kun: "korosu"},
    {kanji: "追", sens: "poursuivre, chasser", On: "Tsui", kun: "ou"},
    {kanji: "捨", sens: "jeter, abandonner", On: "Sha", kun: "suteru"},
    {kanji: "拾", sens: "ramasser, cueillir", On: "Shuu ; Juu", kun: "hirou"},
    {kanji: "曲", sens: "courbe, mélodie", On: "Kyoku", kun: "mageru ; magaru"},
    {kanji: "脱", sens: "enlever, (enlever --> vêtement), s'échapper", On: "Datsu", kun: "nugu ; nuyeru"},
    {kanji: "踊", sens: "danser", On: "You", kun: "odoru ; odori"},
    {kanji: "眠", sens: "dormir", On: "Min", kun: "nemuru ; nemui"},
    {kanji: "怖", sens: "peur, effrayant", On: "Fu", kun: "kowai"},
    {kanji: "誘", sens: "inviter, tenter", On: "Yuu", kun: "sasou"},
    {kanji: "亡", sens: "mort, défunt", On: "Bou ; Mou", kun: "nakunaru"},
    {kanji: "忙", sens: "occupé", On: "Bou", kun: "isogashii"},
    {kanji: "忘", sens: "oublier", On: "Bou", kun: "wasureru"},
    {kanji: "置", sens: "poser, placer", On: "Chi", kun: "oku"},
    {kanji: "蔵", sens: "entrepôt, posséder", On: "Zou", kun: "kura"},
    {kanji: "諸", sens: "divers, plusieurs", On: "Sho", kun: "moro"},
    {kanji: "非", sens: "non, injustice", On: "Hi", kun: "arazu"},
    {kanji: "罪", sens: "crime, péché", On: "Zai", kun: "tsumi"},
    {kanji: "候", sens: "climat, saison, attendre", On: "Kou", kun: ""},
    {kanji: "補", sens: "compléter, compenser", On: "Ho", kun: "oginau"},
    {kanji: "刻", sens: "graver, temps, hacher", On: "Koku", kun: "kizamu"},
    {kanji: "劇", sens: "drame, théâtre", On: "Geki", kun: ""},
    {kanji: "演", sens: "jouer , (jouer --> théâtre), présenter", On: "En", kun: ""},
    {kanji: "観", sens: "observer, vue", On: "Kan", kun: "miru"},
    {kanji: "視", sens: "vision, regarder", On: "Shi", kun: "miru"},
    {kanji: "覚", sens: "mémoriser, s'éveiller", On: "Kaku", kun: "oboeru ; sameru"},
    {kanji: "覧", sens: "regarder, examiner", On: "Ran", kun: ""},
    {kanji: "疑", sens: "douter, soupçon", On: "Gi", kun: "utagau"},
    {kanji: "範", sens: "modèle, exemple", On: "Han", kun: ""},
    {kanji: "囲", sens: "entourer, enceinte", On: "I", kun: "kakomu ; kakou"},
    {kanji: "採", sens: "cueillir, adopter, (adopter --> idée)", On: "Sai", kun: "toru"},
    {kanji: "探", sens: "chercher, explorer", On: "Tan", kun: "sagasu ; saguru"},
    {kanji: "接", sens: "toucher, contacter", On: "Setsu", kun: "tsugu"},
    {kanji: "断", sens: "couper, refuser, décider", On: "Dan", kun: "kotowaru ; tatsu"},
    {kanji: "破", sens: "déchirer, briser", On: "Ha", kun: "yaburu ; yabureru"},
    {kanji: "編", sens: "tricoter, compiler", On: "Hen", kun: "amu"},
    {kanji: "捜", sens: "rechercher , (dans le contexte policier)", On: "Sou", kun: "sagasu"},
    {kanji: "換", sens: "échanger, remplacer", On: "Kan", kun: "kaeru ; kawaru"},
    {kanji: "混", sens: "mélanger", On: "Kon", kun: "mazeru ; mazaru"},
    {kanji: "及", sens: "atteindre, égaler", On: "Kyuu", kun: "oyobu ; oyobosu"},
    {kanji: "吸", sens: "aspirer", On: "Kyuu", kun: "suu"},
    {kanji: "突", sens: "pousser, brusque", On: "Totsu", kun: "tsuku"},
    {kanji: "抜", sens: "extraire, dépasser", On: "Batsu", kun: "nuku ; nukeru"},
    // ------------------JLPT N3 Groupe 7 --------------------
    {kanji: "胃", sens: "estomac", On: "I", kun: ""},
    {kanji: "肩", sens: "épaule", On: "Ken", kun: "kata"},
    {kanji: "胸", sens: "poitrine", On: "Kyou", kun: "mune"},
    {kanji: "腰", sens: "taille, hanches", On: "You", kun: "koshi"},
    {kanji: "腹", sens: "ventre", On: "Fuku", kun: "hara"},
    {kanji: "肌", sens: "peau", On: "Ki", kun: "hada"},
    {kanji: "髪", sens: "cheveux", On: "Hatsu", kun: "kami"},
    {kanji: "血", sens: "sang", On: "Ketsu", kun: "chi"},
    {kanji: "骨", sens: "os", On: "Kotsu", kun: "hone"},
    {kanji: "毒", sens: "poison", On: "Doku", kun: ""},
    {kanji: "菌", sens: "germe, bactérie", On: "Kin", kun: ""},
    {kanji: "録", sens: "enregistrer", On: "Roku", kun: ""},
    {kanji: "器", sens: "ustensile, instrument", On: "Ki", kun: "utsuwa"},
    {kanji: "具", sens: "outil, ingrédient", On: "Gu", kun: "sonaeru"},
    {kanji: "枚", sens: "compteur des objets plats", On: "Mai", kun: ""},
    {kanji: "冊", sens: "compteur des livres", On: "Satsu ; Saku", kun: ""},
    {kanji: "個", sens: "individu, compteur", On: "Ko", kun: ""},
    {kanji: "香", sens: "parfum, encens", On: "Kou ; Kyou", kun: "kaori ; ka"},
    {kanji: "煙", sens: "fumée", On: "En", kun: "kemuri"},
    {kanji: "末", sens: "fin, poudre", On: "Matsu ; Batsu", kun: "sue"},
    {kanji: "未", sens: "pas encore", On: "Mi", kun: "imada"},
    {kanji: "源", sens: "source, origine", On: "Gen", kun: "minamoto"},
    {kanji: "洗", sens: "laver", On: "Sen", kun: "arau"},
    {kanji: "浄", sens: "purifier", On: "Jou", kun: "kiyoi"},
    {kanji: "層", sens: "couche, strate", On: "Sou", kun: ""},
    {kanji: "砂", sens: "sable", On: "Sa ; Sha", kun: "suna"},
    {kanji: "泥", sens: "boue", On: "Dei", kun: "doro"},
    {kanji: "炭", sens: "charbon", On: "Tan", kun: "sumi"},
    {kanji: "油", sens: "huile", On: "Yu", kun: "abura"},
    {kanji: "液", sens: "liquide", On: "Eki", kun: ""},
    {kanji: "蒸", sens: "vapeur, étuver", On: "Jou", kun: "musu"},
    {kanji: "凍", sens: "geler", On: "Tou", kun: "kooru ; kogoeru"},
    {kanji: "温", sens: "tiède, chaud", On: "On", kun: "atatakai"},
    {kanji: "冷", sens: "froid, refroidir", On: "Rei", kun: "tsumetai ; hiyasu"},
    {kanji: "涼", sens: "frais", On: "Ryou", kun: "suzushii"},
    {kanji: "鋭", sens: "aiguisé, tranchant", On: "Ei", kun: "surudoi"},
    {kanji: "鈍", sens: "émoussé, lent", On: "Don", kun: "nibui"},
    {kanji: "険", sens: "escarpé, risque", On: "Ken", kun: "kewashii"},
    {kanji: "震", sens: "trembler, séisme", On: "Shin", kun: "furu-eru"},
    {kanji: "災", sens: "catastrophe", On: "Sai", kun: "wazawai"},
    {kanji: "害", sens: "dommage, mal", On: "Gai", kun: ""},
    {kanji: "爆", sens: "exploser", On: "Baku", kun: ""},
    {kanji: "破", sens: "briser", On: "Ha", kun: "yaburu"},
    {kanji: "防", sens: "prévenir, protéger", On: "Bou", kun: "fusegu"},
    {kanji: "救", sens: "sauver, secourir", On: "Kyuu", kun: "sukuu"},
    {kanji: "助", sens: "aider", On: "Jo", kun: "tasukeru"},
    // -------------JLPT N3 Groupe 8---------------------
    {kanji: "雇", sens: "employer, louer", On: "Ko", kun: "yatou"},
    {kanji: "礼", sens: "salut, merci, rite", On: "Rei ; Rai", kun: ""},
    {kanji: "祝", sens: "célébrer", On: "Shuku", kun: "iwa-u"},
    {kanji: "祭", sens: "fête, festival", On: "Sai", kun: "matsuri"},
    {kanji: "贈", sens: "offrir, cadeau", On: "Zou ; Sou", kun: "okuru"},
    {kanji: "包", sens: "envelopper", On: "Hou", kun: "tsutsumu"},
    {kanji: "豊", sens: "abondant", On: "Hou", kun: "yutaka"},
    {kanji: "富", sens: "richesse", On: "Fu", kun: "tomi"},
    {kanji: "貧", sens: "pauvre", On: "Hin ; Bin", kun: "mazushii"},
    {kanji: "乏", sens: "manquer de", On: "Bou", kun: "toboshii"},
    {kanji: "等", sens: "égal, etc.", On: "Tou", kun: "hitoshii ; nado"},
    {kanji: "恵", sens: "bénédiction, faveur", On: "Kei ; E", kun: "megumu"},
    {kanji: "招", sens: "inviter", On: "Shou", kun: "maneku"},
    {kanji: "欲", sens: "désirer", On: "Yoku", kun: "hoshii"},
    {kanji: "喜", sens: "se réjouir", On: "Ki", kun: "yorokobu"},
    {kanji: "怒", sens: "colère", On: "Do", kun: "okoru ; ikaru"},
    {kanji: "哀", sens: "pathétique, tristesse", On: "Ai", kun: "aware"},
    {kanji: "幸", sens: "bonheur", On: "Kou", kun: "shiawase ; sachi"},
    {kanji: "福", sens: "fortune, chance", On: "Fuku", kun: ""},
    {kanji: "健", sens: "santé, vigoureux", On: "Ken", kun: "sukoyaka"},
    {kanji: "康", sens: "santé, paix", On: "Kou", kun: ""},
    {kanji: "診", sens: "examiner , (examiner = médical)", On: "Shin", kun: "miru"},
    {kanji: "療", sens: "soigner", On: "Ryou", kun: ""},
    {kanji: "命", sens: "vie, destin", On: "Mei ; Myou", kun: "inochi"},
    {kanji: "居", sens: "résider, être là", On: "Kyo", kun: "iru"},
    {kanji: "留", sens: "rester, fixer", On: "Ryuu ; Ru", kun: "tomaru"},
    {kanji: "守", sens: "protéger, garder", On: "Shu ; Su", kun: "mamoru"},
    {kanji: "召", sens: "appeler, manger , (manger = honorifique)", On: "Shou", kun: "mesu"},
    {kanji: "願", sens: "souhaiter", On: "Gan", kun: "negau"},
    {kanji: "件", sens: "affaire, cas", On: "Ken", kun: ""},
    {kanji: "再", sens: "à nouveau", On: "Sai ; Sa", kun: "futatabi"},
    {kanji: "接", sens: "contacter", On: "Setsu", kun: "tsugu"},
    {kanji: "給", sens: "fournir, salaire", On: "Kyuu", kun: "tamau"},
    {kanji: "由", sens: "raison, cause", On: "Yu ; Yui", kun: "yoshi"},
    {kanji: "委", sens: "confier, comité", On: "I", kun: "yudaneru"},
    {kanji: "展", sens: "exposer, étaler", On: "Ten", kun: ""},
    {kanji: "衆", sens: "masse, peuple", On: "Shuu ; Shu", kun: ""},
    {kanji: "憲", sens: "constitution", On: "Ken", kun: ""},
    {kanji: "域", sens: "zone, région", On: "Iki", kun: ""},
    {kanji: "宇", sens: "univers, ciel", On: "U", kun: ""},
    {kanji: "宙", sens: "espace, air", On: "Chuu", kun: ""},
    {kanji: "墓", sens: "tombe", On: "Bo", kun: "haka"},
    {kanji: "尊", sens: "vénérer, précieux", On: "Son", kun: "toutoi"},
    {kanji: "厚", sens: "épais, gentil", On: "Kou", kun: "atsui"},
    {kanji: "濃", sens: "concentré, sombre", On: "Nou", kun: "koi"},
    {kanji: "薄", sens: "fin, léger", On: "Haku", kun: "usui"}
];

//------------------Variables------------------

let NombreRandom = 0;

let PartieLength = 30;

let Item = kanjiDataBase[NombreRandom];

let ReponseType = 3;

let HistoriquePourVrai = [];
let HistoriquePourFaux = [];
let HistoriqueVrai = document.getElementById("HistoriqueJuste");
let HistoriqueFaux = document.getElementById("HistoriqueFaux");
let HistoriqueString = "";

let CompteurVrai = 0;
let CompteurFaux = 0;

let AfficheKanjiLock = 0;

let ContenuBody = "";

let ComboString = localStorage.getItem("ComboSaved")
let CompteurCombo = parseInt(ComboString);

let CompteurPartie = 0;

let CalculPx = 0;
let LastPosVrai = "50%";
let LastPosFaux = "50%";

let ZoneKanjiPrecedant = document.getElementById("KanjiPrecedant");
let ZoneHistorique = document.querySelector(".HistoriqueBox");

let AffichageJuste = document.getElementById("JusteAvancement");
let AffichageFaux = document.getElementById("FauxAvancement");

let AffichageMode = document.getElementById("ModeText");
let BoutonOn = document.getElementById("On"); 
let BoutonSens = document.getElementById("Sens"); 
let BoutonKun = document.getElementById("Kun"); 

let BestComboString = localStorage.getItem("BestComboSaved");
let BestCombo = parseInt(BestComboString);

let CompteurPartieOpen = false; 

let JLPTSelectString = localStorage.getItem("JLPTSaved");
let JLPTSelect = parseInt(JLPTSelectString) || 5;
let GroupSelectString = localStorage.getItem("GroupSaved");
let GroupSelect = parseInt(GroupSelectString) || 1;

let SelectionKanji = JSON.parse(localStorage.getItem("SelectionSaved")) || [0,39];
let JLPTAfficheTrue = false;

let AfficheKanjiNow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let NumJLPT = 0;
let LockTableau = false; 

let HistoriqueNombreRandom = [];

let RNG = false; 

//-------------------------------------------Fonctions------------------------------------------

// ------------------------------Gestion des réponses-----------------------

function getValue(EnterPressed) { // Compare la réponse de l'utilisateur avec la réponse attendue



    Item = kanjiDataBase[NombreRandom];

    Sens = Item.sens.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(","); // Crée les réponses à comparé avec l'utilisateur
    On = Item.On.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
    Kun = Item.kun.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");


    let SensCorrect = Sens.some(possibilite => { // Compartitionne les réponses
                                                 // Les met dans un tableau sans les ";" et met en minuscule et enlève les espaces
                                                // pour qu'elles soient individuelles
        return possibilite.trim().toLowerCase() === ReponseUtilisateur();
    });

     let OnCorrect = On.some(possibilite => {
        return possibilite.trim().toLowerCase() === ReponseUtilisateur();
    });

     let KunCorrect = Kun.some(possibilite => {
        return possibilite.trim().toLowerCase() === ReponseUtilisateur();
    });



    if (EnterPressed == 1) // Si on apuie sur "Entrer" enlève la réponse du champ d'input
    {
         WipeInput();
        // HistoriqueReponses(0);
    }

    if (ReponseType == 1) { // Si le mode est Signification, regarde si la réponse est juste
         if (SensCorrect) {
            LastKanji(); // Affiche le kanji qui vient d'être répondu à droite 
            BonneReponse(); // Affiche le message de bonne réponse 
            HistoriqueReponses(1); // Affiche le kanji dans l'historique des bonnes réposnes
            ComboMeter(1); // Met à jour le combo
            PartieMeter(0); // met à jour l'affichage du nombre de réponses
            UpdateAffichagePartie(1); // met à jour l'affichage des bonnes & mauvaises réponses
            AffichageKanji(); // Affiche un nouveau Kanji 
            WipeInput(); // enlève la réponse de l'utilisateur
        }
        else { // Sinon affiche message de mauvaise réposne (si Entrer est appuyé)
        if (EnterPressed == 1){
            MauvaiseReponse(); 
        }
        }
    }
    else if (ReponseType == 2) { // Pareil pour le mode Lecture On

        if (OnCorrect) {
            LastKanji();
            BonneReponse();
            HistoriqueReponses(1);
            ComboMeter(1);
            PartieMeter(0);
            UpdateAffichagePartie(1);
            AffichageKanji();
            WipeInput();
        }
        else {
        if (EnterPressed == 1){
            MauvaiseReponse();
        }
        }
    
    }
    else if (ReponseType == 3) { // Pareil pour le mode Lecture Kun 

          if (KunCorrect) {
            LastKanji();
            BonneReponse();
            HistoriqueReponses(1);
            ComboMeter(1);
            PartieMeter(0);
            UpdateAffichagePartie(1);
            AffichageKanji();
            WipeInput();
        }
        else {
        if (EnterPressed == 1){
            MauvaiseReponse();
        }
        }
    }

    boxInput = "";

}

function Skip() { // Skip le kanji actuel 

    LastKanji(); // affiche le kanji à gauche
    HistoriqueReponses(0); // Affiche le kanji dans l'historique des skips (rouge)
    ComboMeter(0); // met à 0 le combo 
    PartieMeter(0); // met à jour l'affichage de la partie 
    UpdateAffichagePartie(0);
}

function ReponseUtilisateur() { // Prend ce que l'utilisateur écrit dans le input box

    boxInput = document.getElementById("Answer");

    const Reponse = boxInput.value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    return Reponse;
}

function NombreReponse() { // Calcul le nombre de réponse possible (Useless je crois)

    let ReponseString = "";
    let NombreReponse = 5;
    Item = kanjiDataBase[NombreRandom];

    if (ReponseType == 1) { // Si Le mode de jeu est Signification

        ReponseString = Item.sens.trim(); // Regarde Le ou les sen(s) du kanji 
        //console.log(ReponseString); 
        if (ReponseString === ""){ // Si y'en à pas (impossible) ça re-roll le kanji

            //console.log("L'intru est là");
            AffichageKanji();
        }
        else { // sinon ça met à jour le nombre de réponses possibles par l'utilisateur dans ce mode
            NombreReponse = ReponseString.indexOf(",") + 1;
        }
        
    } 
    else if (ReponseType == 2) { // Si le mode de jeu est Lectur On
        
        ReponseString = Item.On.trim(); // Regarde les Lectures On du kanji 
       // console.log(ReponseString);
        if (ReponseString === "") { // Si y'en a pas ça re-roll le kanji 
          //  console.log("L'intru est là");
            AffichageKanji();
        }
        else { // Sinon ça met le nombre de réponses dans la variable
           NombreReponse = ReponseString.indexOf(",") + 1;  
        }
       

    }
    else if (ReponseType == 3) { // Si le mode de jeu est Lecture Kun 
    
    ReponseString = Item.kun.trim();
   // console.log(ReponseString);

    if (ReponseString.length === "") {

       // console.log("L'intru est là");
        AffichageKanji();
    }
    else {
       NombreReponse = ReponseString.indexOf(",") + 1; 
    }

    }
    else 
    { 
        ReponseString = Item.On.trim();
       // console.log(ReponseString);
        if (ReponseString === "") {

            console.log("L'intru est là");
            AffichageKanji();
        }
        else {
            NombreReponse = ReponseString.indexOf(",") + 1;
        }
        
    }

    return NombreReponse;

}

function BonneReponse() { // Nom

   // document.getElementById("affichage").innerText = "Bonne réponse !!";

}

function MauvaiseReponse() { // Nom

   // document.getElementById("affichage").innerText = "NUUUULLLL";

}

// -----------------------------Gestion Reset----------------------------

function PartieReset() { // Remet à 0 quasiment tout sauf le Combo Max et le mode sélectionné
    ZoneKanjiPrecedant = document.getElementById("KanjiPrecedant");
    HistoriqueVrai = document.getElementById("HistoriqueJuste");
    HistoriqueFaux = document.getElementById("HistoriqueFaux");

    HistoriquePourVrai = []; // remet à 0 les historiques
    HistoriquePourFaux = [];
    HistoriqueVrai.innerText = "";
    HistoriqueFaux.innerText = "";
    ZoneKanjiPrecedant.innerHTML = ""; // enlève l'affichage du dèrnier kanji
    PartieMeter(1); // remet à 0 tout les affichages 
    ResetAffichagePartie();
    AffichageKanji();
    AnimationScore(1);
    ToggleLastKanjiBorder(0);
    // ComboMeter(0);
    LongueurPartieUnclicked();
    ResetWallAnimation();


}

function ResetAffichagePartie() { // Remet les affichages Vert et rouge à 0 (Reset ou Restart)

    const AffichageJuste = document.getElementById("JusteAvancement");
    const AffichageFaux = document.getElementById("FauxAvancement");

    AffichageJuste.innerText = 0;


    AffichageFaux.innerText = 0; 
 


}

function WipeInput() { // Suprime la réponse de l'utilisateur de l'Input box

    document.getElementById("Answer").value = ""; 
}

// ----------------------------Gestion Fin de partie--------------------------

function RecommencerPartie() { // Remet les éléments de la page dans le <body> et reset la partie

    document.body.innerHTML = ContenuBody;
    PartieReset();

}

function FinPartie() { // Affiche l'écran de fin de partie 

    ContenuBody = document.body.innerHTML;
    // remplace le contenu du <body> avec les élements de fin de partie 
    document.body.innerHTML = `
     <div class="FinPartieBox">
        <h1>Kanji Learner</h1>
        <div>Resultats : ${HistoriquePourVrai.length}/${PartieLength}</div><BR>
        <div>Vous avez fait ${HistoriquePourFaux.length} fautes !</div>
        <button class="RecommencerButton" onclick="RecommencerPartie()">Recommencer une partie</button>
        <BR>
        <div>Voici votre historique :</div><BR>
    </div>
    <div class="HistoriqueBox">
        <div id="HistoriqueJuste" class="HistoriqueVrai"></div>
        <div id="HistoriqueFaux" class="HistoriqueFaux"></div>
    </div>
       `;
    AfficherHistorique(); // Affiche les historiques de kanji

}

// ------------------------------Gestion Historiques-------------------------

function HistoriqueReponses(VraiOuFaux) { // Met à jour les historiques vert (Bonnes réponses) et rouge (Skips)
 
    HistoriqueVrai = document.getElementById("HistoriqueJuste");
    HistoriqueFaux = document.getElementById("HistoriqueFaux");

    HistoriqueString = "";
    Item = kanjiDataBase[NombreRandom];

    ToggleLastKanjiBorder(1); // Active la bordure du Kanji kanji précédant 

    if (VraiOuFaux == 0) { // Si la réponse est fausse (Skip) 
          HistoriqueFaux.innerText = `
          `;

        HistoriquePourFaux.push(NombreRandom); // Ajoute le kanji au tableau 
  
        CompteurFaux ++;
        
        let j = HistoriquePourFaux.length;
        for (let i = 0;  i < HistoriquePourFaux.length; i++) { // Pour chaque éléments dans le tableau(valeurs) 
                                                               // crée un tableau de 2cases / 2cases avec leur ordre de réponse
            j --;
                
            let LeKanji = kanjiDataBase[HistoriquePourFaux[j]];
            if (j+1 == HistoriquePourFaux.length ) {
                HistoriqueString +=`   
                    <tr class="ApparitionHistorique" ><td class="KanjiFauxTd">${j+1 + ". " + LeKanji.kanji}</td>
                    <td>${LeKanji.On}</td></tr>
                    <tr class="ApparitionHistorique"><td>${LeKanji.sens}</td>
                    <td>${LeKanji.kun}</td></tr>
                    `;
            }
            else {
                HistoriqueString +=`   
                    <tr><td class="KanjiFauxTd">${j+1 + ". " + LeKanji.kanji}</td>
                    <td>${LeKanji.On}</td></tr>
                    <tr><td>${LeKanji.sens}</td>
                    <td>${LeKanji.kun}</td></tr>
                    `;
            }
    }
    HistoriqueFaux.innerHTML += `<table class="Tableau_Kanji"><br><br> ${HistoriqueString} 
        </table>
        `;
    }
    else { // Pareil pour l'Historique des bonnes réponses 
        HistoriqueVrai.innerText = `
        `;

        HistoriquePourVrai.push(NombreRandom);
         let k = HistoriquePourVrai.length;
         CompteurVrai ++;
        for (let i = 0;  i < HistoriquePourVrai.length; i++) {
            
            k --;
                
            let LaKanji = kanjiDataBase[HistoriquePourVrai[k]];
            if (k+1 == HistoriquePourVrai.length) {
                HistoriqueString +=`   
                    <tr class="ApparitionHistorique" ><td class="KanjiVraiTd">${k+1 + ". " + LaKanji.kanji}</td>
                    <td>${LaKanji.On}</td></tr>
                    <tr class="ApparitionHistorique"><td>${LaKanji.sens}</td>
                    <td>${LaKanji.kun}</td></tr>
                    `;
            }
            else {
                HistoriqueString +=`   
                    <tr><td class="KanjiVraiTd">${k + 1 + ". " + LaKanji.kanji}</td>
                    <td> ${LaKanji.On}</td></tr>
                    <tr><td>${LaKanji.sens}</td>
                    <td>${LaKanji.kun}</td></tr>
                    `;
            }
    }
     HistoriqueVrai.innerHTML += `<table class="Tableau_Kanji"><br><br> ${HistoriqueString} 
        </table>
        `;
    }

   
}

function AfficherHistorique() { // Affiche l'historique à la fin de la partie 

    let k = HistoriquePourVrai.length;
    let AffHistoriqueString = "";
    HistoriqueVrai = document.getElementById("HistoriqueJuste");
    HistoriqueFaux = document.getElementById("HistoriqueFaux");
  
    for (let i = 0;  i < HistoriquePourVrai.length; i++) { // Affiche l'historique des bonnes réponses comme dans HistoriqueReponses()

        k --;
            
        let LaKanji = kanjiDataBase[HistoriquePourVrai[i]];
       AffHistoriqueString += `
            <tr><td class="KanjiVraiTd">${LaKanji.kanji}</td>
            <td>${LaKanji.On}</td></tr>
            <tr><td>${LaKanji.sens}</td>
            <td>${LaKanji.kun}</td></tr>
            `;
        
    }
   
    HistoriqueVrai.innerHTML += `<table class="Tableau_Kanji">${AffHistoriqueString}</table>`;
    AffHistoriqueString = "";
    let j = HistoriquePourFaux.length;

    for (let i = 0;  i < HistoriquePourFaux.length; i++) { // Pareil pour les skips 
        
        j --;
            
        let LeKanji = kanjiDataBase[HistoriquePourFaux[i]];

        AffHistoriqueString += `
            <tr><td class="KanjiFauxTd">${LeKanji.kanji}</td>
            <td>${LeKanji.On}</td></tr>
            <tr><td>${LeKanji.sens}</td>
            <td>${LeKanji.kun}</td></tr>
            `;
        
    }

    HistoriqueFaux.innerHTML += `<table class="Tableau_Kanji">${AffHistoriqueString}</table>`;

}

// -------------------------------Gestion Bouton Kanjis------------------------------
function KanjiSelectionOnLoad() {

    const TextJLPTElement = document.getElementById("TextJLPTSelected");

    TextJLPTElement.innerText = "Niveau : JLPT N" + JLPTSelect + " Groupe " +GroupSelect;

}


function KanjiSelectionApparition() {

    const AffichageJLPTElement = document.getElementById("AffichageJLPTConteneur");

    const AffichageJLPTContent = `<p id="PageOpacitor" class="PageOpacitor"></p>
    <div class="AffichageJLPT">
        <div class="JLPTText">Un carré ≈ 50 kanji</div>
        <div class="JLPTText">JLPT N5 : <button class="JLPTButton" onclick="KanjiSelection(5,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(5, 2) ; KanjiSelectionApparition()">2</button></div>
        <div class="JLPTText">JLPT N4 : <button class="JLPTButton" onclick="KanjiSelection(4,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(4, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(4, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(4, 4) ; KanjiSelectionApparition()">4</button></div>
        <div class="JLPTText">JLPT N3 : <button class="JLPTButton" onclick="KanjiSelection(3,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(3, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(3, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(3, 4) ; KanjiSelectionApparition()">4</button><button class="JLPTButton" onclick="KanjiSelection(3, 5) ; KanjiSelectionApparition()">5</button><button class="JLPTButton" onclick="KanjiSelection(3, 6) ; KanjiSelectionApparition()">6</button><button class="JLPTButton" onclick="KanjiSelection(3, 7) ; KanjiSelectionApparition()">7</button><button class="JLPTButton" onclick="KanjiSelection(3, 8) ; KanjiSelectionApparition()">8</button></div>
        <button class="JLPTRetour" onclick="KanjiSelectionApparition()">Retour</button>
    </div>`;

    if (JLPTAfficheTrue == false) {

        AffichageJLPTElement.innerHTML = AffichageJLPTContent;
        JLPTAfficheTrue = true;
 
    }
    else {

        AffichageJLPTElement.innerHTML = "";
        JLPTAfficheTrue = false;
    }

   

}

function KanjiSelection(JLPT, Group) {

    const TextJLPTElement = document.getElementById("TextJLPTSelected");


    JLPTSelect = JLPT;
    GroupSelect = Group;

    if (JLPT == 5 && Group == 1) {SelectionKanji = [0,39];}
    if (JLPT == 5 && Group == 2) {SelectionKanji = [40, 75];}
    if (JLPT == 4 && Group == 1) {SelectionKanji = [76, 121];}
    if (JLPT == 4 && Group == 2) {SelectionKanji = [122, 166];}
    if (JLPT == 4 && Group == 3) {SelectionKanji = [167, 208];}
    else if (JLPT == 4 && Group == 4) {SelectionKanji = [209, 252];}
    else if (JLPT == 3 && Group == 1) {SelectionKanji = [253, 299];}
    else if (JLPT == 3 && Group == 2) {SelectionKanji = [300, 345];}
    else if (JLPT == 3 && Group == 3) {SelectionKanji = [346, 391];}
    else if (JLPT == 3 && Group == 4) {SelectionKanji = [392, 438];}
    else if (JLPT == 3 && Group == 5) {SelectionKanji = [449, 484];}
    else if (JLPT == 3 && Group == 6) {SelectionKanji = [485, 530];}
    else if (JLPT == 3 && Group == 7) {SelectionKanji = [531, 576];}
    else if (JLPT == 3 && Group == 8) {SelectionKanji = [577, 622];}

    localStorage.setItem("SelectionSaved", JSON.stringify(SelectionKanji));
    localStorage.setItem("JLPTSaved", JLPT);
    localStorage.setItem("GroupSaved", Group);

    TextJLPTElement.innerText = "Niveau : JLPT N" + JLPT + " Groupe " +Group;

    PartieReset();
}

function KanjiDansTableau(Kanji) { //  Crée une variable string qui contient tout le contenu du tableau de kanji

    let CeKanji = "";
    let KanjiDuTableau = kanjiDataBase[0];

    for (let i = Kanji[0]; i <= Kanji[1]; i++) { // Pour chaque éléments dans le tableau(valeurs) de kanji crée une ligne dans un tableau

        KanjiDuTableau = kanjiDataBase[i];
        CeKanji += `
            <tr>
                <td>${KanjiDuTableau.kanji}</td>
                <td>${KanjiDuTableau.sens}</td>
                <td>${KanjiDuTableau.On}</td>
                <td>${KanjiDuTableau.kun}</td>
            </tr>`;

    }

    return CeKanji; 

}

function AfficheTableauKanji() {

    const TableauKanjiElement = document.getElementById("TableauKanjiConteneur");

    if (LockTableau == false) {

        TableauKanjiElement.innerHTML = `
        <p id="PageOpacitor" class="PageOpacitor"></p>
        <div id="ZoneTableau" class="TableauKanjiBox">
            <div class="TableauKanjiBox2">
                <p>Tableau de kanji</p>
                <p>--- JLPT N5 ---</p>
                <p>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(5, 1)">+</button><div id="JLPT5G1Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(5, 2)">+</button><div id="JLPT5G2Tableau" class="JLPTTableau"></div></p>
                <p>--- JLPT N4 ---</p>
                <p>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 1)">+</button><div id="JLPT4G1Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 2)">+</button><div id="JLPT4G2Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 3 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 3)">+</button><div id="JLPT4G3Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 4 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 4)">+</button><div id="JLPT4G4Tableau" class="JLPTTableau"></div></p>
                <p>--- JLPT N3 ---</p>
                <p>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 1)">+</button><div id="JLPT3G1Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 2)">+</button><div id="JLPT3G2Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 3 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 3)">+</button><div id="JLPT3G3Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 4 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 4)">+</button><div id="JLPT3G4Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 5 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 5)">+</button><div id="JLPT3G5Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 6 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 6)">+</button><div id="JLPT3G6Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 7 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 7)">+</button><div id="JLPT3G7Tableau" class="JLPTTableau"></div></p>
                <p>Groupe 8 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 8)">+</button><div id="JLPT3G8Tableau" class="JLPTTableau"></div></p>
                <button onclick="AfficheTableauKanji()">Retour</button>
            </div>
        </div>`;

        LockTableau = true;
    } else  {

        TableauKanjiElement.innerHTML = "";
        LockTableau = false;
    }



}

function AfficheKanji(JLPT, Group) { // Affiche le tableau de kanji à l'aide de la fonction KanjiDansTableau()

    
    const Zone = document.getElementById("ZoneTableau");

    let KanjiDisplayed = [];

    AfficheKanjiLock = 1;
    
    const AfficheTableauJLPT = [document.getElementById("JLPT5G1Tableau"), document.getElementById("JLPT5G2Tableau") ,
        document.getElementById("JLPT4G1Tableau") , document.getElementById("JLPT4G2Tableau") , document.getElementById("JLPT4G3Tableau") ,
        document.getElementById("JLPT4G4Tableau") , document.getElementById("JLPT3G1Tableau") , document.getElementById("JLPT3G2Tableau") , 
        document.getElementById("JLPT3G3Tableau") , document.getElementById("JLPT3G4Tableau") , document.getElementById("JLPT3G5Tableau") , 
        document.getElementById("JLPT3G6Tableau") , document.getElementById("JLPT3G7Tableau") , document.getElementById("JLPT3G8Tableau")]

    let MonAffichage = document.getElementById("JLPT5G1Tableau");
  

    if (JLPT == 5 && Group == 1) {KanjiDisplayed = [0,39]; MonAffichage = AfficheTableauJLPT[0]; if (AfficheKanjiNow[0] == 0) {AfficheKanjiNow[0] = 1; NumJLPT = 1;} else {AfficheKanjiNow[0] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 5 && Group == 2) {KanjiDisplayed = [40, 75]; MonAffichage = AfficheTableauJLPT[1]; if (AfficheKanjiNow[1] == 0) {AfficheKanjiNow[1] = 1; NumJLPT = 1;} else {AfficheKanjiNow[1] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 4 && Group == 1) {KanjiDisplayed = [76, 121]; MonAffichage = AfficheTableauJLPT[2]; if (AfficheKanjiNow[2] == 0) {AfficheKanjiNow[2] = 1; NumJLPT = 1;} else {AfficheKanjiNow[2] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 4 && Group == 2) {KanjiDisplayed = [122, 166]; MonAffichage = AfficheTableauJLPT[3]; if (AfficheKanjiNow[3] == 0) {AfficheKanjiNow[3] = 1; NumJLPT = 1;} else {AfficheKanjiNow[3] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 4 && Group == 3) {KanjiDisplayed = [167, 208]; MonAffichage = AfficheTableauJLPT[4]; if (AfficheKanjiNow[4] == 0) {AfficheKanjiNow[4] = 1; NumJLPT = 1;} else {AfficheKanjiNow[4] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 4 && Group == 4) {KanjiDisplayed = [209, 252]; MonAffichage = AfficheTableauJLPT[5]; if (AfficheKanjiNow[5] == 0) {AfficheKanjiNow[5] = 1; NumJLPT = 1;} else {AfficheKanjiNow[5] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 1) {KanjiDisplayed = [253, 299]; MonAffichage = AfficheTableauJLPT[6]; if (AfficheKanjiNow[6] == 0) {AfficheKanjiNow[6] = 1; NumJLPT = 1;} else {AfficheKanjiNow[6] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 2) {KanjiDisplayed = [300, 345]; MonAffichage = AfficheTableauJLPT[7]; if (AfficheKanjiNow[7] == 0) {AfficheKanjiNow[7] = 1; NumJLPT = 1;} else {AfficheKanjiNow[7] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 3) {KanjiDisplayed = [346, 391]; MonAffichage = AfficheTableauJLPT[8]; if (AfficheKanjiNow[8] == 0) {AfficheKanjiNow[8] = 1; NumJLPT = 1;} else {AfficheKanjiNow[8] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 4) {KanjiDisplayed = [392, 438]; MonAffichage = AfficheTableauJLPT[9]; if (AfficheKanjiNow[9] == 0) {AfficheKanjiNow[9] = 1; NumJLPT = 1;} else {AfficheKanjiNow[9] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 5) {KanjiDisplayed = [449, 484]; MonAffichage = AfficheTableauJLPT[10]; if (AfficheKanjiNow[10] == 0) {AfficheKanjiNow[10] = 1; NumJLPT = 1;} else {AfficheKanjiNow[10] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 6) {KanjiDisplayed = [485, 530]; MonAffichage = AfficheTableauJLPT[11]; if (AfficheKanjiNow[11] == 0) {AfficheKanjiNow[11] = 1; NumJLPT = 1;} else {AfficheKanjiNow[11] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 7) {KanjiDisplayed = [531, 576]; MonAffichage = AfficheTableauJLPT[12]; if (AfficheKanjiNow[12] == 0) {AfficheKanjiNow[12] = 1; NumJLPT = 1;} else {AfficheKanjiNow[12] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 3 && Group == 8) {KanjiDisplayed = [577, 622]; MonAffichage = AfficheTableauJLPT[13]; if (AfficheKanjiNow[13] == 0) {AfficheKanjiNow[13] = 1; NumJLPT = 1;} else {AfficheKanjiNow[13] = 0 ; NumJLPT = 0;};}


    if (NumJLPT == 1) { //Affiche le tableau des kanji en suprimant tous les élements du <body>
                                 // Si le bouton est préssé pour la première fois
        ContenuBody = document.body.innerHTML;
        MonAffichage.innerHTML = ` 
        <table class="Tableau_Kanji">
            <tr>
                <td>Kanji</td>
                <td>Sens</td>
                <td>Lecture On</td>
                <td>lecture Kun</td>
            </tr>
            ${KanjiDansTableau(KanjiDisplayed)}


        </table>`;
        
        /*let ContenuTableau = MonAffichage.innerHTML; 
        document.body.innerHTML = `<h1>Kanji Learner</h1>
        <button class="KanjiButton" onclick="AfficheKanji()">Retour au jeu</button>
        <div id="ZoneTableau"></div><Br>` + ContenuTableau; // remplace le contenu du <body> avec le tableau et le titre 
        */

    }
    else { // Si le bouton est préssé une deuxième fois
           // Suprime le tableau de kanji et réaffiche tous les élement de la page
           console.log("0");
        MonAffichage.innerHTML = "";
      //  document.body.innerHTML = ContenuBody;
    }




}

//---------------------------------Modes de jeux-------------------------------------

function LongueurPartieClicked() { // Affiche les boutons pour changer la longueur de la partie

    const PartieBoxElement = document.getElementById("CompteurPartieBox");

    if (CompteurPartieOpen == false) { // Si les boutons ne sont pas affiché, les affiche
    CompteurPartieOpen = true;
    PartieBoxElement.innerHTML = `
    <button class="CompteurPartieButtons" onclick="ChangerLongueurPartie(-10)">-10</button>
    <button class="CompteurPartieButtons" onclick="ChangerLongueurPartie(-5)">-5</button>
    <button id="CompteurPartie" class="CompteurPartie" onclick="LongueurPartieClicked()">${CompteurPartie}/${PartieLength}</button>
    <button class="CompteurPartieButtons" onclick="ChangerLongueurPartie(5)">+5</button>
    <button class="CompteurPartieButtons" onclick="ChangerLongueurPartie(10)">+10</button>
    `;
    }
    else { // Si les boutons sont déja affiché et que le compteur est re-cliqué, les suprime 
        LongueurPartieUnclicked();
    }

}

function LongueurPartieUnclicked() { // Suprime les boutons +5 +10... à coté du compteur de la partie

    CompteurPartieOpen = false;

    const PartieBoxElement = document.getElementById("CompteurPartieBox");

    PartieBoxElement.innerHTML = `

    <button id="CompteurPartie" class="CompteurPartie" onclick="LongueurPartieClicked()">${CompteurPartie}/${PartieLength}</button>

    `;

}

function ChangerLongueurPartie(Number) { // Change la valeur de la longueur de la partie en fonction du bouton préssé 

    const CompteurPartieElement = document.getElementById("CompteurPartie");

    const ResultatPartieLength = PartieLength + Number;

    if (ResultatPartieLength <= CompteurPartie) {

        PartieLength = PartieLength; 
    }
    else {

        PartieLength += Number; 

    }

    CompteurPartieElement.innerText = CompteurPartie + "/" + PartieLength;
    
}


function ModeOn() { // Choisit le mode de jeu --> Lecture On 
    BoutonOn = document.getElementById("On"); 
    BoutonSens = document.getElementById("Sens"); 
    BoutonKun = document.getElementById("Kun"); 
    ReponseType = 2;
    // -------- Bouton On --------------
    if (BoutonOn.classList.contains("BoutonClique") == false){BoutonOn.classList.add("BoutonClique");}
    BoutonOn.style.backgroundColor = "rgb(158, 158, 158)"; // Met le bouton On en valeur
    BoutonOn.style.borderWidth = "4px";
    // -------- Bouton Sens ------
    if (BoutonSens.classList.contains("BoutonClique") == true){BoutonSens.classList.toggle("BoutonClique");}
    BoutonSens.style.backgroundColor = "";
    BoutonSens.style.borderWidth = ""; 
    // ------- Bouton Kun--------
    if (BoutonKun.classList.contains("BoutonClique") == true){BoutonKun.classList.toggle("BoutonClique");} 
    BoutonKun.style.backgroundColor = ""; 
    BoutonKun.style.borderWidth = ""; 
}

function ModeKun() { // Choisit le mode de jeu --> Lecture On 
    ReponseType = 3;
    BoutonOn = document.getElementById("On"); 
    BoutonSens = document.getElementById("Sens"); 
    BoutonKun = document.getElementById("Kun"); 
   // ---------- Bouton On---------
    if (BoutonOn.classList.contains("BoutonClique") == true){BoutonOn.classList.toggle("BoutonClique");}
    BoutonOn.style.backgroundColor = "";
    BoutonOn.style.borderWidth = ""; 
    //------------ Bouton Sens----------
    if (BoutonSens.classList.contains("BoutonClique") == true){BoutonSens.classList.toggle("BoutonClique");}
    BoutonSens.style.backgroundColor = ""; 
    BoutonSens.style.borderWidth = ""; 
    // ----------- Bouton Kun ---------
    if (BoutonKun.classList.contains("BoutonClique") == false){BoutonKun.classList.add("BoutonClique");}
    BoutonKun.style.backgroundColor = "rgb(158, 158, 158)"; // Met le bouton Kun en valeur
    BoutonKun.style.borderWidth = "4px"; 
}

function ModeSens() { // Choisit le mode de jeu --> Lecture On 
    ReponseType = 1;
    BoutonOn = document.getElementById("On"); 
    BoutonSens = document.getElementById("Sens"); 
    BoutonKun = document.getElementById("Kun"); 
   // ------------ Bouton On ----------
   if (BoutonOn.classList.contains("BoutonClique") == true){BoutonOn.classList.toggle("BoutonClique");}
    BoutonOn.style.backgroundColor = ""; 
    BoutonOn.style.borderWidth = ""; 
    // ----------- Bouton Sens ----------
   if (BoutonSens.classList.contains("BoutonClique") == false) {BoutonSens.classList.add("BoutonClique");}
    BoutonSens.style.backgroundColor = "rgb(158, 158, 158)";  // Met le bouton Signification en valeur
    BoutonSens.style.borderWidth = "4px"; 
    // ----------- Bouton Kun ----------
    if (BoutonKun.classList.contains("BoutonClique") == true){BoutonKun.classList.toggle("BoutonClique");}
    BoutonKun.style.backgroundColor = ""; 
    BoutonKun.style.borderWidth = ""; 
}

//-----------------------------------Gestion du Combo---------------------------

function InitCombo() {

    if (BestCombo <= 0 || BestCombo >= 0)
    { BestCombo = BestCombo;}
    else 
    {
        BestCombo = 0;
    }

     if (CompteurCombo <= 0 || CompteurCombo >= 0)
    { CompteurCombo = CompteurCombo;}
    else 
    {
        CompteurComboCombo = 0;
    }

    document.getElementById("BestComboNumber").innerText = BestCombo;
    document.getElementById("ComboNumber").innerText = CompteurCombo; // Affiche le nombre du combo 
}

function ComboMeter(Gagner) { // Gestion du Combo et du Meilleur Combo 

    const ComboCSS = document.querySelector(".ComboNumber");
    const BestComboCSS = document.querySelector(".BestComboNumber");

    if (Gagner == 0) { // Si c'est un skip remet le combo à 0 
        CompteurCombo = 0;

        const AnimatonComboMort = ComboCSS.animate([ // Animation qu tourne le 0 du combo
            {  rotate: "360deg"},
            { rotate: "0deg"} // From
        ], {
            duration: 750,
            fill: 'forwards',   // Garde la position finale
            easing: 'ease-out'
        });
    }
    else { // Sinon incrémente le combo
        CompteurCombo ++;
        if (CompteurCombo > BestCombo) { // Et si le combo est supérieur au Meilleur Combo remplace le meilleur combo avec le combo actuel 

            BestCombo = CompteurCombo; 
            document.getElementById("BestComboNumber").innerText = BestCombo;
            BestComboCSS.animate([ // Animation de Fade-out & Fade-in 
                { color: "black"},
                { color: "white"},
                { color: "black"}
            ], {
                duration: 600,
                fill: "forwards",
                easing: "ease-out"
            });

        }

            ComboCSS.animate([ // Animation du Nombre du combo devient plus grand puis rapticie (devient + petit)
            { color: "black"},
            { color: "white"},
            { color: "black"}
        ], {
            duration: 750,
            fill: 'forwards',   // Garde la position finale
            easing: 'ease-out'
        });
    }
    localStorage.setItem("ComboSaved", CompteurCombo);
    localStorage.setItem("BestComboSaved", BestCombo);
    document.getElementById("ComboNumber").innerText = CompteurCombo; // Affiche le nombre du combo 

}

//-------------------------------Gestion de la Affichage--------------------------

function UpdateAffichagePartie(Juste) { // Met à jour l'affichage [Bonne Réponses / Skips]

   HistoriqueVrai = document.getElementById("HistoriqueJuste");
   HistoriqueFaux = document.getElementById("HistoriqueFaux");

   AffichageJuste = document.getElementById("JusteAvancement");
   AffichageFaux = document.getElementById("FauxAvancement");

   LastPosVrai = AffichageJuste.style.width;
   LastPosFaux = AffichageFaux.style.width;
   
   if (Juste == 1) { // Si Bonne réponse change le texte de la partie verte 
    
    AffichageJuste.innerText = HistoriquePourVrai.length;
    


   } else { // sinon change le texte de la partie rouge

    AffichageFaux.innerText = HistoriquePourFaux.length; 

   } // Si le nombre de réponses fauses est 0 alors n'affiche rien 

   if (HistoriquePourFaux.length == 0) {

    AffichageFaux.innerText = ""; 

   } // Pareil pour les bonnes réponses
   else if (HistoriquePourVrai.length == 0) {

    AffichageJuste.innerText = "";

   }

   CalculPx = 180/CompteurPartie
   // AffichageFaux.style.width = `${HistoriquePourFaux.length * CalculPx}px`; 
   // AffichageJuste.style.width = `${HistoriquePourVrai.length * CalculPx}px`;
   AnimationScore(0); // Animation qui changement la proportion des carrés rouge et vert

}

function PartieMeter(DemandeReset) { // Met à jour le Compteur de la partie (../30)

    const AffichagePartie = document.getElementById("CompteurPartie");

    CompteurPartie++;
    if (DemandeReset == 1) // Si il y a un reset 
    {
        CompteurPartie = 0;
    }
    if (CompteurPartie == PartieLength) // Si il y a eu 30 kanji, enclenche l'écran de fin de partie
    {
        CompteurPartie = 0;
        AffichagePartie.innerText = CompteurPartie + "/" + PartieLength;
        FinPartie();
    }

    AffichagePartie.innerText = CompteurPartie + "/" + PartieLength; // met à jour le compteur de la partie
 
}

function LastKanji() { // Affiche le kanji qui vient d'être répondu à droite du kanji principal

    ZoneKanjiPrecedant = document.getElementById("KanjiPrecedant");
    Item = kanjiDataBase[NombreRandom];
    // Crée un tableau avec le kanji précédant dedans 
    ZoneKanjiPrecedant.innerHTML = `<table class="Tableau_Kanji"> 
            <tr>
                <td>${Item.kanji}</td>

            </tr>
            <tr><td>${Item.sens}</td></tr>
            <tr><td>${Item.On}</td></tr>
            <tr><td>${Item.kun}</td></tr>
        </table>`;

}

function RNGToggle() {

    const RNGElement = document.getElementById("RNGButton");

    if (RNG == false) {
        RNG =true;
        RNGElement.innerText = "Random"
    }
    else {RNG = false; RNGElement.innerText = "Every Kanji";}

}

function AffichageKanji() { // Affiche le kanji actuel (celui au milieu de la page)


    if (RNG == false)
    {
        if (HistoriqueNombreRandom == []) {

            NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0])) + SelectionKanji[0];
            HistoriqueNombreRandom.push(NombreRandom);
        }
        else if (CompteurPartie <=30 && CompteurPartie > 0)
        {
            while (HistoriqueNombreRandom.includes(NombreRandom)) {

                NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0])) + SelectionKanji[0];
            }
            HistoriqueNombreRandom.push(NombreRandom);
        }
        else {
            HistoriqueNombreRandom = [];
            NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0])) + SelectionKanji[0];
            HistoriqueNombreRandom.push(NombreRandom);
        }
    }
    else {

        NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0])) + SelectionKanji[0];

    }
    PremierItem = kanjiDataBase[NombreRandom];

    premierKanji = PremierItem.kanji;

    //console.log(premierKanji);

   

    document.getElementById("Kanji").innerText = premierKanji; // Affiche le kanji obtenu 

    NombreReponse();

   
}

//-------------------------------Gestion Cosmétique------------------------------

function AnimationScore(Reset) { // Gère l'animation des carré de vert et rouge (BR et Skips)

    HistoriqueVrai = document.getElementById("HistoriqueJuste");
    HistoriqueFaux = document.getElementById("HistoriqueFaux");

    const AffichageVraiCSS = document.querySelector(".JusteAvancement");
    const AffichageFauxCSS = document.querySelector(".FauxAvancement");

    if (Reset == 0) { // Si il n'y a pas de reset 

    const AnimationVrai = AffichageVraiCSS.animate([ // fait grossir le carré vert de sa position actuelle à la nouvelle
        { width: `${LastPosVrai}`},  // From
        { width: (HistoriquePourVrai.length * CalculPx)+`%` }  // To
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    const AnimationFaux = AffichageFauxCSS.animate([ // Pareil pour que le carré vert 
        { width: LastPosFaux},  // From
        { width: (HistoriquePourFaux.length * CalculPx)+`%` }  // To
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    LastPosFaux = `${HistoriquePourFaux.length * CalculPx}%`;
    LastPosVrai = `${HistoriquePourVrai.length * CalculPx}%`;;

    }
    else if (Reset == 1) { // Si il y a Reset met l'animation de reset

    const AnimationVrai = AffichageVraiCSS.animate([ // fait grossir le carré vert de sa position jusquà la position initiale
        { width: `${LastPosVrai}`}, 
        { width: '50%' }  
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    const AnimationFaux = AffichageFauxCSS.animate([ // pareil que le carré vert 
        { width: `${LastPosFaux}`},  
        { width:'50%' }  
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    LastPosFaux = "50%";
    LastPosVrai = "50%";

}

}

function ToggleLastKanjiBorder(Switch) { // Affiche ou Fait disparaitre la bordure de l'élément KanjiPrécédant

    ZoneHistorique = document.querySelector(".HistoriqueBox");

    if (Switch == 0) { // Si il n'y a pas encore de kanji précédent 
        ZoneKanjiPrecedant.style.borderWidth = "0px";
        ZoneHistorique.style.borderWidth = "0px";
    }
    else { // Si il y a un kanji précédent
        ZoneKanjiPrecedant.style.borderWidth = "3px";
        ZoneHistorique.style.borderWidth = "3px";
    }

}



function ResetWallAnimation() {

    const ResetWallBoxElement = document.getElementById("ResetWallBox");

    ResetWallBoxElement.innerHTML = `
    <div class="ResetWall1"></div>
    <div class="ResetWall2"></div>
    <div class="ResetWall3"></div>
    <div class="ResetWall4"></div>
    `;

    const ResetWall1Element = document.querySelector(".ResetWall1");
    const ResetWall2Element = document.querySelector(".ResetWall2");
    const ResetWall3Element = document.querySelector(".ResetWall3");
    const ResetWall4Element = document.querySelector(".ResetWall4");

    ResetWall1Element.classList.add("ResetWall1InAnimation");
    ResetWall2Element.classList.add("ResetWall2InAnimation");
    ResetWall3Element.classList.add("ResetWall3InAnimation");
    ResetWall4Element.classList.add("ResetWall4InAnimation");

    setTimeout(() => {
        ResetWall1Element.style.backgroundColor = "transparent";
        ResetWall1Element.style.color = "transparent";
        ResetWall1Element.style.border = "transparent";
        ResetWall1Element.classList.remove("ResetWall1InAnimation");
        ResetWall2Element.style.backgroundColor = "transparent";
        ResetWall2Element.style.color = "transparent";
        ResetWall2Element.style.border = "transparent";
        ResetWall2Element.classList.remove("ResetWall2InAnimation");
        ResetWall3Element.style.backgroundColor = "transparent";
        ResetWall3Element.style.color = "transparent";
        ResetWall3Element.style.border = "transparent";
        ResetWall3Element.classList.remove("ResetWall3InAnimation");
        ResetWall4Element.style.backgroundColor = "transparent";
        ResetWall4Element.style.color = "transparent";
        ResetWall4Element.style.border = "transparent";
        ResetWall4Element.classList.remove("ResetWall4InAnimation");
    }, 570);
     
    
}
    