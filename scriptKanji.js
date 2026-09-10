// Loupsisi
// 01/01/2026-06/01/2026
// Page Wab Pour apprendre les kanjis 

//-------------------Tableau de Kanji-----------------------

const kanjiDataBase = [
    // ------------------JLPT N5 Groupe 1------------------- 
    {kanji: "一", sens: "un", On: "Ichi ; Itsu", kun: "hito ; hitotsu", hira: "ひと, ひとつ", kata: "イチ, イツ"},
    {kanji: "二", sens: "deux", On: "Ni", kun: "futa ; futatsu", hira: "ふた, ふたつ", kata: "ニ"},
    {kanji: "三", sens: "trois", On: "San", kun: "mi ; mittsu", hira: "み, みっつ", kata: "サン"},
    {kanji: "四", sens: "quatre", On: "Shi", kun: "yo ; yon ; yotsu ; yottsu", hira: "よ, よん, よつ, よっつ", kata: "シ"},
    {kanji: "五", sens: "cinq", On: "Go", kun: "itsu ; itsutsu", hira: "いつ, いつつ", kata: "ゴ"},
    {kanji: "六", sens: "six", On: "Roku", kun: "mu ; mutsu ; muttsu", hira: "む, むつ, むっつ", kata: "ロク"},
    {kanji: "七", sens: "sept", On: "Shichi", kun: "nana ; nanatsu", hira: "なな, ななつ", kata: "シチ"},
    {kanji: "八", sens: "huit", On: "Hachi", kun: "ya ; yatsu ; yattsu", hira: "や, やつ, やっつ", kata: "ハチ"},
    {kanji: "九", sens: "neuf", On: "Kyuu ; Ku", kun: "kokono ; kokonotsu", hira: "ここの, ここのつ", kata: "キュウ, ク"},
    {kanji: "十", sens: "dix", On: "Juu", kun: "too ; to", hira: "とお, と", kata: "ジュウ"},
    {kanji: "百", sens: "cent", On: "Hyaku", kun: "momo", hira: "もも", kata: "ヒャク"},
    {kanji: "千", sens: "mille", On: "Sen", kun: "chi", hira: "ち", kata: "セン"},
    {kanji: "万", sens: "dix mille", On: "Man ; Ban", kun: "yorozu", hira: "よろず", kata: "マン, バン"},
    {kanji: "円", sens: "cercle, yen", On: "En", kun: "marui", hira: "まるい", kata: "エン"},
    {kanji: "日", sens: "jour, soleil", On: "Nichi ; Jitsu", kun: "hi ; ka", hira: "ひ, か", kata: "ニチ, ジツ"},
    {kanji: "月", sens: "mois, lune", On: "Getsu ; Gatsu", kun: "tsuki", hira: "つき", kata: "ゲツ, ガツ"},
    {kanji: "火", sens: "feu", On: "Ka", kun: "hi ; ho", hira: "ひ, ほ", kata: "カ"},
    {kanji: "水", sens: "eau", On: "Sui", kun: "mizu", hira: "みず", kata: "スイ"},
    {kanji: "木", sens: "arbre, bois", On: "Moku ; Boku", kun: "ki ; ko", hira: "き, こ", kata: "モク, ボク"},
    {kanji: "金", sens: "or, métal, argent", On: "Kin ; Kon", kun: "kane ; kana", hira: "かね, かな", kata: "キン, コン"},
    {kanji: "土", sens: "terre, sol", On: "Do ; To", kun: "tsuchi", hira: "つち", kata: "ド, ト"},
    {kanji: "山", sens: "montagne", On: "San", kun: "yama", hira: "やま", kata: "サン"},
    {kanji: "川", sens: "rivière", On: "Sen", kun: "kawa", hira: "かわ", kata: "セン"},
    {kanji: "田", sens: "rizière", On: "Den", kun: "ta", hira: "た", kata: "デン"},
    {kanji: "人", sens: "personne, humain", On: "Jin ; Nin", kun: "hito", hira: "ひと", kata: "ジン, ニン"},
    {kanji: "子", sens: "enfant", On: "Shi ; Su", kun: "ko", hira: "こ", kata: "シ, ス"},
    {kanji: "女", sens: "femme", On: "Jo ; Nyo", kun: "onna ; me", hira: "おんな, め", kata: "ジョ, ニョ"},
    {kanji: "男", sens: "homme", On: "Dan ; Nan", kun: "otoko ; o", hira: "おとこ, お", kata: "ダン, ナン"},
    {kanji: "先", sens: "avant, précédent", On: "Sen", kun: "saki", hira: "さき", kata: "セン"},
    {kanji: "生", sens: "vie, naissance", On: "Sei ; Shou", kun: "i ; u ; o ; ha ; nama ; ki", hira: "い, う, お, は, なま, き", kata: "セイ, ショウ"},
    {kanji: "学", sens: "étude, science", On: "Gaku", kun: "manabu", hira: "まなぶ", kata: "ガク"},
    {kanji: "校", sens: "école", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "年", sens: "année", On: "Nen", kun: "toshi", hira: "とし", kata: "ネン"},
    {kanji: "何", sens: "quoi, quel", On: "Ka", kun: "nani ; nan", hira: "なに, なん", kata: "カ"},
    {kanji: "名", sens: "nom, réputation", On: "Mei ; Myou", kun: "na", hira: "な", kata: "メイ, ミョウ"},
    {kanji: "前", sens: "avant, devant", On: "Zen", kun: "mae", hira: "まえ", kata: "ゼン"},
    {kanji: "後", sens: "après, derrière", On: "Go ; Kou", kun: "nochi ; ushiro ; ato", hira: "のち, うしろ, あと", kata: "ゴ, コウ"},
    {kanji: "外", sens: "extérieur", On: "Gai ; Ge", kun: "soto ; hoka ; hazu", hira: "そと, ほか, はず", kata: "ガイ, ゲ"},
    {kanji: "左", sens: "gauche", On: "Sa", kun: "hidari", hira: "ひだり", kata: "サ"},
    {kanji: "右", sens: "droite", On: "U ; Yuu", kun: "migi", hira: "みぎ", kata: "ウ, ユウ"},
    // --------------------JLPT N5 Groupe 2----------------
    {kanji: "中", sens: "milieu, intérieur", On: "Chuu", kun: "naka ; uchi", hira: "なか, うち", kata: "チュウ"},
    {kanji: "大", sens: "grand", On: "Dai ; Tai", kun: "oo", hira: "おお", kata: "ダイ, タイ"},
    {kanji: "小", sens: "petit", On: "Shou", kun: "chii ; ko ; o", hira: "ちい, こ, お", kata: "ショウ"},
    {kanji: "上", sens: "dessus, monter", On: "Jou", kun: "ue ; upa ; ageru ; agaru", hira: "うえ, うぱ, あげる, あがる", kata: "ジョウ"},
    {kanji: "下", sens: "dessous, descendre", On: "Ka ; Ge", kun: "shita ; moto ; sageru ; sagaru ; kudaru", hira: "した, もと, さげる, さがる, くだる", kata: "カ, ゲ"},
    {kanji: "本", sens: "livre, origine", On: "Hon", kun: "moto", hira: "もと", kata: "ホン"},
    {kanji: "休", sens: "repos", On: "Kyuu", kun: "yasumu ; yasumi", hira: "やすむ, やすみ", kata: "キュウ"},
    {kanji: "行", sens: "aller, ligne", On: "Kou ; Gyou", kun: "iku ; yuku ; okonau", hira: "いく, ゆく, おこなう", kata: "コウ, ギョウ"},
    {kanji: "来", sens: "venir", On: "Rai", kun: "kuru ; kitaru", hira: "くる, きたる", kata: "ライ"},
    {kanji: "出", sens: "sortir", On: "Shutsu", kun: "deru ; dasu", hira: "でる, だす", kata: "シュツ"},
    {kanji: "入", sens: "entrer", On: "Nyuu", kun: "hairu ; ireru", hira: "はいる, いれる", kata: "ニュウ"},
    {kanji: "口", sens: "bouche", On: "Kou ; Ku", kun: "kuchi", hira: "くち", kata: "コウ, ク"},
    {kanji: "白", sens: "blanc", On: "Haku ; Byaku", kun: "shiro", hira: "しろ", kata: "ハク, ビャク"},
    {kanji: "目", sens: "oeil", On: "Moku", kun: "me", hira: "め", kata: "モク"},
    {kanji: "耳", sens: "oreille", On: "Ji", kun: "mimi", hira: "みみ", kata: "ジ"},
    {kanji: "手", sens: "main", On: "Shu", kun: "te", hira: "て", kata: "シュ"},
    {kanji: "足", sens: "pied, jambe, suffire", On: "Soku", kun: "ashi ; tariru", hira: "あし, たりる", kata: "ソク"},
    {kanji: "見", sens: "voir, regarder", On: "Ken", kun: "miru ; mieru ; miseru", hira: "みる, みえる, みせる", kata: "ケン"},
    {kanji: "聞", sens: "écouter, entendre", On: "Bun ; Mon", kun: "kiku ; kikoeru", hira: "きく, きこえる", kata: "ブン, モン"},
    {kanji: "書", sens: "écrire", On: "Sho", kun: "kaku", hira: "かく", kata: "ショ"},
    {kanji: "話", sens: "parler, histoire", On: "Wa", kun: "hanasu ; hanashi", hira: "はなす, はなし", kata: "ワ"},
    {kanji: "語", sens: "langue, mot", On: "Go", kun: "kataru", hira: "かたる", kata: "ゴ"},
    {kanji: "食", sens: "manger, nourriture", On: "Shoku", kun: "taberu ; kuu", hira: "たべる, くう", kata: "ショク"},
    {kanji: "時", sens: "temps, heure", On: "Ji", kun: "toki", hira: "とき", kata: "ジ"},
    {kanji: "間", sens: "intervalle, espace", On: "Kan ; Ken", kun: "aida ; ma", hira: "あいだ, ま", kata: "カン, ケン"},
    {kanji: "分", sens: "partie, minute, comprendre", On: "Bun ; Fun", kun: "wakaru ; wakeru", hira: "わかる, わける", kata: "ブン, フン"},
    {kanji: "半", sens: "moitié", On: "Han", kun: "nakaba", hira: "なかば", kata: "ハン"},
    {kanji: "午", sens: "midi", On: "Go", kun: "", hira: "", kata: "ゴ"},
    {kanji: "今", sens: "maintenant", On: "Kon ; Kin", kun: "ima", hira: "いま", kata: "コン, キン"},
    {kanji: "友", sens: "ami", On: "Yuu", kun: "tomo", hira: "とも", kata: "ユウ"},
    {kanji: "父", sens: "père", On: "Fu", kun: "chichi", hira: "ちち", kata: "フ"},
    {kanji: "母", sens: "mère", On: "Bo", kun: "haha", hira: "はは", kata: "ボ"},
    {kanji: "高", sens: "haut, cher", On: "Kou", kun: "takai", hira: "たかい", kata: "コウ"},
    {kanji: "安", sens: "bon marché, paisible", On: "An", kun: "yasui", hira: "やすい", kata: "アン"},
    {kanji: "長", sens: "long, chef", On: "Chou", kun: "nagai", hira: "ながい", kata: "チョウ"},
    {kanji: "多", sens: "beaucoup", On: "Ta", kun: "ooi", hira: "おおい", kata: "タ"},
    // ------------JLPT N4 Groupe 1------------------
    {kanji: "読", sens: "lire", On: "Doku", kun: "yomu", hira: "よむ", kata: "ドク"},
    {kanji: "飲", sens: "boire", On: "In", kun: "nomu", hira: "のむ", kata: "イン"},
    {kanji: "買", sens: "acheter", On: "Bai", kun: "kau", hira: "かう", kata: "バイ"},
    {kanji: "物", sens: "chose, objet", On: "Butsu ; Motsu", kun: "mono", hira: "もの", kata: "ブツ, モツ"},
    {kanji: "事", sens: "chose, fait, affaire", On: "Ji ; Zu", kun: "koto", hira: "こと", kata: "ジ, ズ"},
    {kanji: "会", sens: "rencontre, réunion", On: "Kai ; E", kun: "au", hira: "あう", kata: "カイ, エ"},
    {kanji: "自", sens: "soi-même", On: "Ji ; Shi", kun: "mizukara", hira: "みずから", kata: "ジ, シ"},
    {kanji: "手", sens: "main", On: "Shu", kun: "te", hira: "て", kata: "シュ"},
    {kanji: "言", sens: "dire, mot", On: "Gen ; Gon", kun: "iu ; koto", hira: "いう, こと", kata: "ゲン, ゴン"},
    {kanji: "者", sens: "quelqu'un, personne", On: "Sha", kun: "mono", hira: "もの", kata: "シャ"},
    {kanji: "同", sens: "identique, même", On: "Dou", kun: "onaji", hira: "おなじ", kata: "ドウ"},
    {kanji: "方", sens: "direction, manière", On: "Hou", kun: "kata", hira: "かた", kata: "ホウ"},
    {kanji: "目", sens: "oeil, point", On: "Moku ; Boku", kun: "me ; ma", hira: "め, ま", kata: "モク, ボク"},
    {kanji: "理", sens: "raison, logique", On: "Ri", kun: "kotowari", hira: "ことわり", kata: "リ"},
    {kanji: "力", sens: "force, puissance", On: "Ryoku ; Riki", kun: "chikara", hira: "ちから", kata: "リョク, リキ"},
    {kanji: "場", sens: "lieu, endroit", On: "Jou", kun: "ba", hira: "ば", kata: "ジョウ"},
    {kanji: "思", sens: "penser", On: "Shi", kun: "omou", hira: "おもう", kata: "シ"},
    {kanji: "動", sens: "bouger, mouvement", On: "Dou", kun: "ugoku ; ugokasu", hira: "うごく, うごかす", kata: "ドウ"},
    {kanji: "家", sens: "maison, famille", On: "Ka ; Ke", kun: "ie ; ya", hira: "いえ, や", kata: "カ, ケ"},
    {kanji: "地", sens: "terre, sol", On: "Chi ; Ji", kun: "", hira: "", kata: "チ, ジ"},
    {kanji: "体", sens: "corps, substance", On: "Tai ; Tei", kun: "karada", hira: "からだ", kata: "タイ, テイ"},
    {kanji: "作", sens: "faire, fabriquer", On: "Saku ; Sa", kun: "tsukuru", hira: "つくる", kata: "サク, サ"},
    {kanji: "持", sens: "tenir, posséder", On: "Ji", kun: "motsu", hira: "もつ", kata: "ジ"},
    {kanji: "明", sens: "clair, brillant", On: "Mei ; Myou", kun: "akarui ; akiraka ; akari", hira: "あかるい, あきらか, あかり", kata: "メイ, ミョウ"},
    {kanji: "私", sens: "je, privé", On: "Shi", kun: "watashi ; watakushi", hira: "わたし, わたくし", kata: "シ"},
    {kanji: "発", sens: "départ, émission", On: "Hatsu ; Hotsu", kun: "", hira: "", kata: "ハツ, ホツ"},
    {kanji: "心", sens: "coeur, esprit", On: "Shin", kun: "kokoro", hira: "こころ", kata: "シン"},
    {kanji: "意", sens: "idée, pensée, attention", On: "I", kun: "", hira: "", kata: "イ"},
    {kanji: "度", sens: "degré, fois", On: "Do ; To ; Taku", kun: "tabi", hira: "たび", kata: "ド, ト, タク"},
    {kanji: "知", sens: "savoir, connaître", On: "Chi", kun: "shiru", hira: "しる", kata: "チ"},
    {kanji: "立", sens: "se tenir debout, établir", On: "Ritsu ; Ryuu", kun: "tatsu ; tateru", hira: "たつ, たてる", kata: "リツ, リュウ"},
    {kanji: "用", sens: "utiliser, affaire", On: "You", kun: "mochiiru", hira: "もちいる", kata: "ヨウ"},
    {kanji: "通", sens: "traverser, passer", On: "Tsuu ; Tsu", kun: "tooru ; kayou", hira: "とおる, かよう", kata: "ツウ, ツ"},
    {kanji: "政", sens: "politique, gouvernement", On: "Sei ; Shou", kun: "matsurigoto", hira: "まつりごと", kata: "セイ, ショウ"},
    {kanji: "市", sens: "ville, marché", On: "Shi", kun: "ichi", hira: "いち", kata: "シ"},
    {kanji: "界", sens: "monde, limite", On: "Kai", kun: "", hira: "", kata: "カイ"},
    {kanji: "業", sens: "industrie, travail", On: "Gyou ; Gou", kun: "waza", hira: "わざ", kata: "ギョウ, ゴウ"},
    {kanji: "題", sens: "sujet, titre", On: "Dai", kun: "", hira: "", kata: "ダイ"},
    {kanji: "員", sens: "membre, employé", On: "In", kun: "", hira: "", kata: "イン"},
    {kanji: "開", sens: "ouvrir", On: "Kai", kun: "hiraku ; akeru", hira: "ひらく, あける", kata: "カイ"},
    {kanji: "問", sens: "question, problème", On: "Mon", kun: "tou", hira: "とう", kata: "モン"},
    {kanji: "代", sens: "remplacer, génération", On: "Dai ; Tai", kun: "kawaru ; yo ; shiro", hira: "かわる, よ, しろ", kata: "ダイ, タイ"},
    {kanji: "成", sens: "devenir, accomplir", On: "Sei ; Jou", kun: "naru ; nasu", hira: "なる, なす", kata: "セイ, ジョウ"},
    {kanji: "主", sens: "maître, principal", On: "Shu ; Su", kun: "nushi ; omo", hira: "ぬし, おも", kata: "シュ, ス"},
    {kanji: "正", sens: "correct, juste", On: "Sei ; Shou", kun: "tadashii ; masa", hira: "ただしい, まさ", kata: "セイ, ショウ"},
    {kanji: "真", sens: "vrai, pur", On: "Shin", kun: "ma", hira: "ま", kata: "シン"},
    // --------------JLPT N4 Groupe 2-------------
    {kanji: "使", sens: "utiliser, messager", On: "Shi", kun: "tsukau", hira: "つかう", kata: "シ"},
    {kanji: "考", sens: "penser, considérer", On: "Kou", kun: "kangaeru", hira: "かんがえる", kata: "コウ"},
    {kanji: "別", sens: "séparer, autre", On: "Betsu", kun: "wakare ; wakeru", hira: "わかれ, わける", kata: "ベツ"},
    {kanji: "以", sens: "au moyen de, depuis", On: "I", kun: "motte", hira: "もって", kata: "イ"},
    {kanji: "元", sens: "origine, base", On: "Gen ; Gan", kun: "moto", hira: "もと", kata: "ゲン, ガン"},
    {kanji: "待", sens: "attendre", On: "Tai", kun: "matsu", hira: "まつ", kata: "タイ"},
    {kanji: "安", sens: "bon marché, paisible", On: "An", kun: "yasui", hira: "やすい", kata: "アン"},
    {kanji: "近", sens: "proche", On: "Kin", kun: "chikai", hira: "ちかい", kata: "キン"},
    {kanji: "少", sens: "peu, petit", On: "Shou", kun: "sukunai ; sukoshi", hira: "すくない, すこし", kata: "ショウ"},
    {kanji: "切", sens: "couper", On: "Setsu ; Sai", kun: "kiru", hira: "きる", kata: "セツ, サイ"},
    {kanji: "終", sens: "fin, terminer", On: "Shuu", kun: "owaru ; owari", hira: "おわる, おわり", kata: "シュウ"},
    {kanji: "楽", sens: "musique, confort, joie", On: "Gaku ; Raku", kun: "tanoshii", hira: "たのしい", kata: "ガク, ラク"},
    {kanji: "音", sens: "son", On: "On ; In", kun: "oto ; ne", hira: "おと, ね", kata: "オン, イン"},
    {kanji: "道", sens: "chemin, route", On: "Dou", kun: "michi", hira: "みち", kata: "ドウ"},
    {kanji: "親", sens: "parent, proche", On: "Shin", kun: "oya ; shitashii", hira: "おや, したしい", kata: "シン"},
    {kanji: "着", sens: "arriver, porter , ( porter = vêtement)", On: "Chaku ; Jaku", kun: "kiru ; tsuku", hira: "きる, つく", kata: "チャク, ジャク"},
    {kanji: "始", sens: "commencer", On: "Shi", kun: "hajimeru ; hajimaru", hira: "はじめる, はじまる", kata: "シ"},
    {kanji: "多", sens: "beaucoup", On: "Ta", kun: "ooi", hira: "おおい", kata: "タ"},
    {kanji: "早", sens: "tôt, rapide", On: "Sou ; Sattsu", kun: "hayai", hira: "はやい", kata: "ソウ, サッツ"},
    {kanji: "仕", sens: "servir, faire", On: "Shi ; Ji", kun: "tsukaeru", hira: "つかえる", kata: "シ, ジ"},
    {kanji: "海", sens: "mer, océan", On: "Kai", kun: "umi", hira: "うみ", kata: "カイ"},
    {kanji: "悪", sens: "mauvais, méchant", On: "Aku ; O", kun: "warui", hira: "わるい", kata: "アク, オ"},
    {kanji: "止", sens: "arrêter", On: "Shi", kun: "tomaru ; tomeru", hira: "とまる, とめる", kata: "シ"},
    {kanji: "重", sens: "lourd, important", On: "Juu ; Chou", kun: "omoi ; kasaneru", hira: "おもい, かさねる", kata: "ジュウ, チョウ"},
    {kanji: "画", sens: "dessin, trait", On: "Ga ; Kaku", kun: "", hira: "", kata: "ガ, カク"},
    {kanji: "口", sens: "bouche, ouverture", On: "Kou ; Ku", kun: "kuchi", hira: "くち", kata: "コウ, ク"},
    {kanji: "味", sens: "goût, saveur", On: "Mi", kun: "aji", hira: "あじ", kata: "ミ"},
    {kanji: "空", sens: "ciel, vide", On: "Kuu", kun: "sora ; aki ; kara", hira: "そら, あき, から", kata: "クウ"},
    {kanji: "身", sens: "corps, soi-même", On: "Shin", kun: "mi", hira: "み", kata: "シン"},
    {kanji: "運", sens: "destin, transporter", On: "Un", kun: "hakobu", hira: "はこぶ", kata: "ウン"},
    {kanji: "帰", sens: "rentrer chez soi", On: "Ki", kun: "kaeru", hira: "かえる", kata: "キ"},
    {kanji: "集", sens: "rassembler", On: "Shuu", kun: "atsumeru ; atsumaru", hira: "あつめる, あつまる", kata: "シュウ"},
    {kanji: "急", sens: "urgent, rapide", On: "Kyuu", kun: "isogu", hira: "いそぐ", kata: "キュウ"},
    {kanji: "足", sens: "pied, jambe, suffire", On: "Soku", kun: "ashi ; tariru", hira: "あし, たりる", kata: "ソク"},
    {kanji: "売", sens: "vendre", On: "Bai", kun: "uru", hira: "うる", kata: "バイ"},
    {kanji: "起", sens: "se lever, se produire", On: "Ki", kun: "okiru ; okosu", hira: "おきる, おこす", kata: "キ"},
    {kanji: "夜", sens: "nuit", On: "Ya", kun: "yoru ; yo", hira: "よる, よ", kata: "ヤ"},
    {kanji: "料", sens: "frais, ingrédient", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "特", sens: "spécial", On: "Toku", kun: "", hira: "", kata: "トク"},
    {kanji: "品", sens: "article, qualité", On: "Hin", kun: "shina", hira: "しな", kata: "ヒン"},
    {kanji: "計", sens: "mesurer, planifier", On: "Kei", kun: "hakaru", hira: "はかる", kata: "ケイ"},
    {kanji: "店", sens: "magasin", On: "Ten", kun: "mise", hira: "みせ", kata: "テン"},
    {kanji: "送", sens: "envoyer", On: "Sou", kun: "okuru", hira: "おくる", kata: "ソウ"},
    {kanji: "族", sens: "tribu, famille", On: "Zoku", kun: "", hira: "", kata: "ゾク"},
    {kanji: "文", sens: "phrase, littérature", On: "Bun ; Mon", kun: "fumi", hira: "ふみ", kata: "ブン, モン"},
    // ------------------------JLPT N4 Groupe 3------------------------
    {kanji: "英", sens: "brillant, Angleterre", On: "Ei", kun: "hanabusa", hira: "はなぶさ", kata: "エイ"},
    {kanji: "映", sens: "projeter, reflet", On: "Ei", kun: "utsuru ; utsusu", hira: "うつる, うつす", kata: "エイ"},
    {kanji: "走", sens: "courir", On: "Sou", kun: "hashiru", hira: "はしる", kata: "ソウ"},
    {kanji: "曜", sens: "jour de la semaine", On: "You", kun: "", hira: "", kata: "ヨウ"},
    {kanji: "習", sens: "apprendre", On: "Shuu ; Ju", kun: "narau", hira: "ならう", kata: "シュウ, ジュ"},
    {kanji: "研", sens: "polir, recherche", On: "Ken", kun: "togu", hira: "とぐ", kata: "ケン"},
    {kanji: "究", sens: "rechercher, approfondir", On: "Kyuu ; Ku", kun: "kiwameru", hira: "きわめる", kata: "キュウ, ク"},
    {kanji: "質", sens: "qualité, question", On: "Shitsu ; Shichi ; Chi", kun: "tachi", hira: "たち", kata: "シツ, シチ, チ"},
    {kanji: "答", sens: "réponse", On: "Tou", kun: "kotaeru ; kotae", hira: "こたえる, こたえ", kata: "トウ"},
    {kanji: "宿", sens: "loger, auberge", On: "Shuku", kun: "yado", hira: "やど", kata: "シュク"},
    {kanji: "建", sens: "construire", On: "Ken ; Kon", kun: "tateru ; tatsu", hira: "たてる, たつ", kata: "ケン, コン"},
    {kanji: "説", sens: "expliquer, théorie", On: "Setsu ; Zei", kun: "toku", hira: "とく", kata: "セツ, ゼイ"},
    {kanji: "医", sens: "médecine, docteur", On: "I", kun: "", hira: "", kata: "イ"},
    {kanji: "薬", sens: "médicament", On: "Yaku", kun: "kusuri", hira: "くすり", kata: "ヤク"},
    {kanji: "院", sens: "institution, temple", On: "In", kun: "", hira: "", kata: "イン"},
    {kanji: "産", sens: "produire, naissance", On: "San", kun: "umu ; umareru", hira: "うむ, うまれる", kata: "サン"},
    {kanji: "広", sens: "large, vaste", On: "Kou", kun: "hiroi ; hirogeru", hira: "ひろい, ひろげる", kata: "コウ"},
    {kanji: "門", sens: "porte", On: "Mon", kun: "kado ; to", hira: "かど, と", kata: "モン"},
    {kanji: "閉", sens: "fermer", On: "Hei", kun: "tojiru ; tateru", hira: "とじる, たてる", kata: "ヘイ"},
    {kanji: "階", sens: "étage, escalier", On: "Kai", kun: "kizahashi", hira: "きざはし", kata: "カイ"},
    {kanji: "旅", sens: "voyage", On: "Ryo", kun: "tabi", hira: "たび", kata: "リョ"},
    {kanji: "写", sens: "copier, photographier", On: "Sha ; Ja", kun: "utsusu ; utsuru", hira: "うつす, うつる", kata: "シャ, ジャ"},
    {kanji: "昼", sens: "midi, jour", On: "Chuu", kun: "hiru", hira: "ひる", kata: "チュウ"},
    {kanji: "春", sens: "printemps", On: "Shun", kun: "haru", hira: "はる", kata: "シュン"},
    {kanji: "夏", sens: "été", On: "Ka ; Ge", kun: "natsu", hira: "なつ", kata: "カ, ゲ"},
    {kanji: "秋", sens: "automne", On: "Shuu", kun: "aki", hira: "あき", kata: "シュウ"},
    {kanji: "冬", sens: "hiver", On: "Tou", kun: "fuyu", hira: "ふゆ", kata: "トウ"},
    {kanji: "不", sens: "négatif, non", On: "Fu ; Bu", kun: "", hira: "", kata: "フ, ブ"},
    {kanji: "世", sens: "monde, génération", On: "Sei ; Se", kun: "yo", hira: "よ", kata: "セイ, セ"},
    {kanji: "乗", sens: "monter , ( monter --> dans véhicule)", On: "Jou ; Shou", kun: "noru ; noseru", hira: "のる, のせる", kata: "ジョウ, ショウ"},
    {kanji: "写", sens: "copier, décrire", On: "Sha ; Ja", kun: "utsusu ; utsuru", hira: "うつす, うつる", kata: "シャ, ジャ"},
    {kanji: "低", sens: "bas", On: "Tei", kun: "hikui ; hiku", hira: "ひくい, ひく", kata: "テイ"},
    {kanji: "住", sens: "habiter", On: "Juu ; Chu ; Su", kun: "sumu ; sumau", hira: "すむ, すまう", kata: "ジュウ, チュ, ス"},
    {kanji: "勉", sens: "effort", On: "Ben", kun: "tsutomeru", hira: "つとめる", kata: "ベン"},
    {kanji: "強", sens: "fort", On: "Kyou ; Gou", kun: "tsuyoi ; shiiru", hira: "つよい, しいる", kata: "キョウ, ゴウ"},
    {kanji: "図", sens: "dessin, plan", On: "Zu ; To", kun: "hakaru", hira: "はかる", kata: "ズ, ト"},
    {kanji: "室", sens: "chambre, pièce", On: "Shitsu", kun: "muro", hira: "むろ", kata: "シツ"},
    {kanji: "味", sens: "goût", On: "Mi", kun: "aji ; ajiwau", hira: "あじ, あじわう", kata: "ミ"},
    {kanji: "好", sens: "aimer", On: "Kou", kun: "konomu ; suku", hira: "このむ, すく", kata: "コウ"},
    {kanji: "曜", sens: "jour de la semaine", On: "You", kun: "", hira: "", kata: "ヨウ"},
    {kanji: "書", sens: "écrire", On: "Sho", kun: "kaku", hira: "かく", kata: "ショ"},
    {kanji: "朝", sens: "matin", On: "Chou", kun: "asa", hira: "あさ", kata: "チョウ"},
    // ------------------------JLPT N4 Groupe 4---------------------------------
    {kanji: "肉", sens: "viande", On: "Niku", kun: "", hira: "", kata: "ニク"},
    {kanji: "弟", sens: "petit frère", On: "Tei ; Dai ; De", kun: "otouto", hira: "おとうと", kata: "テイ, ダイ, デ"},
    {kanji: "犬", sens: "chien", On: "Ken", kun: "inu", hira: "いぬ", kata: "ケン"},
    {kanji: "飯", sens: "repas, riz cuit", On: "Han", kun: "meshi", hira: "めし", kata: "ハン"},
    {kanji: "館", sens: "bâtiment, hall", On: "Kan", kun: "yakata ; tate", hira: "やかた, たて", kata: "カン"},
    {kanji: "貸", sens: "prêter", On: "Tai", kun: "kasu", hira: "かす", kata: "タイ"},
    {kanji: "堂", sens: "hall, temple", On: "Dou", kun: "", hira: "", kata: "ドウ"},
    {kanji: "借", sens: "emprunter", On: "Shaku", kun: "kariru", hira: "かりる", kata: "シャク"},
    {kanji: "姉", sens: "grande soeur", On: "Shi", kun: "ane", hira: "あね", kata: "シ"},
    {kanji: "鳥", sens: "oiseau", On: "Chou", kun: "tori", hira: "とり", kata: "チョウ"},
    {kanji: "夕", sens: "soirée", On: "Seki", kun: "yuu", hira: "ゆう", kata: "セキ"},
    {kanji: "茶", sens: "thé", On: "Cha ; Sa", kun: "", hira: "", kata: "チャ, サ"},
    {kanji: "魚", sens: "poisson", On: "Gyo", kun: "uwo ; sakana", hira: "うを, さかな", kata: "ギョ"},
    {kanji: "妹", sens: "petite soeur", On: "Mai", kun: "imouto", hira: "いもうと", kata: "マイ"},
    {kanji: "洋", sens: "océan, occidental", On: "You", kun: "", hira: "", kata: "ヨウ"},
    {kanji: "牛", sens: "vache, boeuf", On: "Gyuu", kun: "ushi", hira: "うし", kata: "ギュウ"},
    {kanji: "駅", sens: "gare", On: "Eki", kun: "", hira: "", kata: "エキ"},
    {kanji: "漢", sens: "Chine, dynastie Han", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "病", sens: "maladie", On: "Byou ; Hei", kun: "yamai ; yamu", hira: "やまい, やむ", kata: "ビョウ, ヘイ"},
    {kanji: "勉", sens: "effort", On: "Ben", kun: "tsutomeru", hira: "つとめる", kata: "ベン"},
    {kanji: "験", sens: "test, effet", On: "Ken ; Gen", kun: "akashi ; shirushi", hira: "あかし, しるし", kata: "ケン, ゲン"},
    {kanji: "風", sens: "vent, style", On: "Fuu ; Fu", kun: "kaze ; kaza", hira: "かぜ, かざ", kata: "フウ, フ"},
    {kanji: "題", sens: "sujet, question", On: "Dai", kun: "", hira: "", kata: "ダイ"},
    {kanji: "有", sens: "avoir, exister", On: "Yuu ; U", kun: "aru", hira: "ある", kata: "ユウ, ウ"},
    {kanji: "便", sens: "commodité, courrier", On: "Ben ; Bin", kun: "tayori", hira: "たより", kata: "ベン, ビン"},
    {kanji: "利", sens: "profit, avantage", On: "Ri", kun: "kiku", hira: "きく", kata: "リ"},
    {kanji: "借", sens: "emprunter", On: "Shaku", kun: "kariru", hira: "かりる", kata: "シャク"},
    {kanji: "忙", sens: "occupé", On: "Bou", kun: "isogashii", hira: "いそがしい", kata: "ボウ"},
    {kanji: "忘", sens: "oublier", On: "Bou", kun: "wasureru", hira: "わすれる", kata: "ボウ"},
    {kanji: "和", sens: "paix, harmonie, japonais", On: "Wa ; O", kun: "yawaragu ; nagomu", hira: "やわらぐ, なごむ", kata: "ワ, オ"},
    {kanji: "暗", sens: "sombre", On: "An", kun: "kurai", hira: "くらい", kata: "アン"},
    {kanji: "遠", sens: "loin", On: "En ; On", kun: "tooi", hira: "とおい", kata: "エン, オン"},
    {kanji: "寒", sens: "froid , (froid --> température)", On: "Kan", kun: "samui", hira: "さむい", kata: "カン"},
    {kanji: "顔", sens: "visage", On: "Gan", kun: "kao", hira: "かお", kata: "ガン"},
    {kanji: "試", sens: "essayer, test", On: "Shi", kun: "kokoromiru ; tamesu", hira: "こころみる, ためす", kata: "シ"},
    {kanji: "験", sens: "test, preuve", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "願", sens: "souhaiter, prier", On: "Gan", kun: "negau", hira: "ねがう", kata: "ガン"},
    {kanji: "色", sens: "couleur", On: "Shoku ; Shiki", kun: "iro", hira: "いろ", kata: "ショク, シキ"},
    {kanji: "走", sens: "courir", On: "Sou", kun: "hashiru", hira: "はしる", kata: "ソウ"},
    {kanji: "運", sens: "transporter, chance", On: "Un", kun: "hakobu", hira: "はこぶ", kata: "ウン"},
    {kanji: "都", sens: "capitale, métropole", On: "To ; Tsu", kun: "miyako", hira: "みやこ", kata: "ト, ツ"},
    {kanji: "県", sens: "préfecture", On: "Ken", kun: "kakeru", hira: "かける", kata: "ケン"},
    {kanji: "村", sens: "village", On: "Son", kun: "mura", hira: "むら", kata: "ソン"},
    {kanji: "町", sens: "ville, quartier", On: "Chou", kun: "machi", hira: "まち", kata: "チョウ"},
    // ----------------------JLPT N3 Groupe 1----------------
    {kanji: "部", sens: "section, partie", On: "Bu", kun: "-be", hira: "べ", kata: "ブ"},
    {kanji: "合", sens: "s'ajuster, se joindre", On: "Gou ; Gatsu ; Katsu", kun: "au ; awaseru", hira: "あう, あわせる", kata: "ゴウ, ガツ, カツ"},
    {kanji: "最", sens: "le plus, extrême", On: "Sai", kun: "motto ; mottomo", hira: "もっと, もっとも", kata: "サイ"},
    {kanji: "当", sens: "frapper, correspondre", On: "Tou", kun: "ataru ; ateru", hira: "あたる, あてる", kata: "トウ"},
    {kanji: "全", sens: "tout, entier", On: "Zen", kun: "mattaku ; subete", hira: "まったく, すべて", kata: "ゼン"},
    {kanji: "回", sens: "fois, tourner", On: "Kai ; E", kun: "mawaru ; mawasu", hira: "まわる, まわす", kata: "カイ, エ"},
    {kanji: "戦", sens: "guerre, combat", On: "Sen", kun: "tatakau ; ikusa", hira: "たたかう, いくさ", kata: "セン"},
    {kanji: "実", sens: "réalité, fruit", On: "Jitsu", kun: "mi ; minoru", hira: "み, みのる", kata: "ジツ"},
    {kanji: "性", sens: "sexe, nature, genre", On: "Sei ; Shou", kun: "saga", hira: "さが", kata: "セイ, ショウ"},
    {kanji: "連", sens: "emporter, lien", On: "Ren", kun: "tsureru ; tsuranaru", hira: "つれる, つらなる", kata: "レン"},
    {kanji: "取", sens: "prendre", On: "Shu", kun: "toru", hira: "とる", kata: "シュ"},
    {kanji: "要", sens: "besoin, essentiel", On: "You", kun: "iru ; kaname", hira: "いる, かなめ", kata: "ヨウ"},
    {kanji: "対", sens: "vis-à-vis, s'opposer", On: "Tai ; Tsui", kun: "aite ; sorou", hira: "あいて, そろう", kata: "タイ, ツイ"},
    {kanji: "決", sens: "décider", On: "Ketsu", kun: "kimeru ; kimaru", hira: "きめる, きまる", kata: "ケツ"},
    {kanji: "変", sens: "inhabituel, changer", On: "Hen", kun: "kawaru ; kaeru", hira: "かわる, かえる", kata: "ヘン"},
    {kanji: "所", sens: "lieu, endroit", On: "Sho", kun: "tokoro", hira: "ところ", kata: "ショ"},
    {kanji: "相", sens: "mutuel, aspect", On: "Sou ; Shou", kun: "ai", hira: "あい", kata: "ソウ, ショウ"},
    {kanji: "関", sens: "connexion, barrière", On: "Kan", kun: "seki ; kaka-waru", hira: "せき, かかわる", kata: "カン"},
    {kanji: "信", sens: "foi, confiance", On: "Shin", kun: "shinjiru", hira: "しんじる", kata: "シン"},
    {kanji: "感", sens: "émotion, sentiment", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "勝", sens: "victoire, gagner", On: "Shou", kun: "katsu ; masaru", hira: "かつ, まさる", kata: "ショウ"},
    {kanji: "解", sens: "démêler, résoudre", On: "Kai ; Ge", kun: "toku ; tokeru", hira: "とく, とける", kata: "カイ, ゲ"},
    {kanji: "調", sens: "mélodie, enquêter", On: "Chou", kun: "shiraberu ; totonou", hira: "しらべる, ととのう", kata: "チョウ"},
    {kanji: "初", sens: "première fois, début", On: "Sho", kun: "hajime ; hatsu ; ui-", hira: "はじめ, はつ, うい", kata: "ショ"},
    {kanji: "法", sens: "méthode, loi", On: "Hou ; Hattsu", kun: "nori", hira: "のり", kata: "ホウ, ハッツ"},
    {kanji: "違", sens: "différence, erreur", On: "I", kun: "chigau ; chigaeru", hira: "ちがう, ちがえる", kata: "イ"},
    {kanji: "現", sens: "présent, apparaître", On: "Gen", kun: "arawareru ; arawasu", hira: "あらわれる, あらわす", kata: "ゲン"},
    {kanji: "夫", sens: "mari, homme", On: "Fu ; Fuu ; Bu", kun: "otto", hira: "おっと", kata: "フ, フウ, ブ"},
    {kanji: "内", sens: "intérieur", On: "Nai ; Dai", kun: "uchi", hira: "うち", kata: "ナイ, ダイ"},
    {kanji: "選", sens: "élire, choisir", On: "Sen", kun: "erabu", hira: "えらぶ", kata: "セン"},
    {kanji: "次", sens: "suivant", On: "Ji ; Shi", kun: "tsugi ; tsu-gu", hira: "つぎ, つぐ", kata: "ジ, シ"},
    {kanji: "機", sens: "machine, opportunité", On: "Ki", kun: "hata", hira: "はた", kata: "キ"},
    {kanji: "面", sens: "masque, face", On: "Men", kun: "omo ; omote ; tsura", hira: "おも, おもて, つら", kata: "メン"},
    {kanji: "必", sens: "invariablement, certain", On: "Hitsu", kun: "kanarazu", hira: "かならず", kata: "ヒツ"},
    {kanji: "定", sens: "déterminer, fixer", On: "Tei ; Jou", kun: "sadamaru ; sadameru", hira: "さだまる, さだめる", kata: "テイ, ジョウ"},
    {kanji: "受", sens: "recevoir", On: "Ju", kun: "ukeru ; ukaru", hira: "うける, うかる", kata: "ジュ"},
    {kanji: "記", sens: "noter, scribe", On: "Ki", kun: "shirusu", hira: "しるす", kata: "キ"},
    {kanji: "点", sens: "point, tache", On: "Ten", kun: "tsu-keru ; tsu-ku", hira: "つける, つく", kata: "テン"},
    {kanji: "政", sens: "politique, gouvernement", On: "Sei ; Shou", kun: "matsurigoto", hira: "まつりごと", kata: "セイ, ショウ"},
    {kanji: "位", sens: "rang, position", On: "I", kun: "kurai", hira: "くらい", kata: "イ"},
    {kanji: "置", sens: "poser, placer", On: "Chi", kun: "oku", hira: "おく", kata: "チ"},
    {kanji: "結", sens: "lier, conclure", On: "Ketsu ; Ke-", kun: "musubu ; yu-u", hira: "むすぶ, ゆう", kata: "ケツ, ケ"},
    {kanji: "報", sens: "rapport, récompense", On: "Hou", kun: "muku-iru", hira: "むくいる", kata: "ホウ"},
    {kanji: "和", sens: "paix, harmonie, japonais", On: "Wa ; O", kun: "yawaragu ; nagomu", hira: "やわらぐ, なごむ", kata: "ワ, オ"},
    {kanji: "活", sens: "vif, énergie", On: "Katsu", kun: "ikiru", hira: "いきる", kata: "カツ"},
    {kanji: "原", sens: "origine, prairie", On: "Gen", kun: "hara", hira: "はら", kata: "ゲン"},
    {kanji: "共", sens: "ensemble, avec", On: "Kyou", kun: "tomo", hira: "とも", kata: "キョウ"},
    // ---------------------JLPT N3 Groupe 2-----------------
    {kanji: "得", sens: "gain, acquérir", On: "Toku", kun: "eru ; uru", hira: "える, うる", kata: "トク"},
    {kanji: "解", sens: "comprendre, dénouer", On: "Kai ; Ge", kun: "toku ; hodo-ku", hira: "とく, ほどく", kata: "カイ, ゲ"},
    {kanji: "使", sens: "utiliser", On: "Shi", kun: "tsukau", hira: "つかう", kata: "シ"},
    {kanji: "際", sens: "occasion, bord", On: "Sai", kun: "kiwa", hira: "きわ", kata: "サイ"},
    {kanji: "勝", sens: "gagner", On: "Shou", kun: "katsu ; masaru", hira: "かつ, まさる", kata: "ショウ"},
    {kanji: "面", sens: "face, surface", On: "Men", kun: "omote ; tsura", hira: "おもて, つら", kata: "メン"},
    {kanji: "告", sens: "annoncer", On: "Koku", kun: "tsugeru", hira: "つげる", kata: "コク"},
    {kanji: "反", sens: "anti-, s'opposer", On: "Han ; Hon", kun: "soru ; sorasu", hira: "そる, そらす", kata: "ハン, ホン"},
    {kanji: "判", sens: "jugement, sceau", On: "Han ; Ban", kun: "wakaru", hira: "わかる", kata: "ハン, バン"},
    {kanji: "認", sens: "reconnaître", On: "Nin", kun: "mitomeru", hira: "みとめる", kata: "ニン"},
    {kanji: "参", sens: "participer, venir", On: "San", kun: "mairu", hira: "まいる", kata: "サン"},
    {kanji: "利", sens: "profit", On: "Ri", kun: "kiku", hira: "きく", kata: "リ"},
    {kanji: "組", sens: "équipe, assembler", On: "So", kun: "kumu ; kumi", hira: "くむ, くみ", kata: "ソ"},
    {kanji: "信", sens: "croire", On: "Shin", kun: "shinjiru", hira: "しんじる", kata: "シン"},
    {kanji: "在", sens: "exister, être situé", On: "Zai", kun: "aru", hira: "ある", kata: "ザイ"},
    {kanji: "件", sens: "affaire, cas", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "側", sens: "côté", On: "Soku", kun: "gawa", hira: "がわ", kata: "ソク"},
    {kanji: "任", sens: "confier, responsabilité", On: "Nin", kun: "makaseru", hira: "まかせる", kata: "ニン"},
    {kanji: "引", sens: "tirer", On: "In", kun: "hiku", hira: "ひく", kata: "イン"},
    {kanji: "求", sens: "chercher, demander", On: "Kyuu", kun: "motomeru", hira: "もとめる", kata: "キュウ"},
    {kanji: "所", sens: "lieu", On: "Sho", kun: "tokoro", hira: "ところ", kata: "ショ"},
    {kanji: "次", sens: "suivant", On: "Ji", kun: "tsugi", hira: "つぎ", kata: "ジ"},
    {kanji: "昨", sens: "passé, hier", On: "Saku", kun: "", hira: "", kata: "サク"},
    {kanji: "論", sens: "théorie, argument", On: "Ron", kun: "", hira: "", kata: "ロン"},
    {kanji: "官", sens: "gouvernement, bureaucrate", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "増", sens: "augmenter", On: "Zou", kun: "fueru ; fuyasu", hira: "ふえる, ふやす", kata: "ゾウ"},
    {kanji: "係", sens: "responsable, lien", On: "Kei", kun: "kakari", hira: "かかり", kata: "ケイ"},
    {kanji: "感", sens: "sentiment", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "情", sens: "émotion, compassion", On: "Jou", kun: "nasake", hira: "なさけ", kata: "ジョウ"},
    {kanji: "投", sens: "lancer, jeter", On: "Tou", kun: "nageru", hira: "なげる", kata: "トウ"},
    {kanji: "示", sens: "montrer", On: "Ji ; Shi", kun: "shimesu", hira: "しめす", kata: "ジ, シ"},
    {kanji: "打", sens: "frapper", On: "Da", kun: "utsu", hira: "うつ", kata: "ダ"},
    {kanji: "予", sens: "préfixe , (pré-), moi", On: "Yo", kun: "arakajime", hira: "あらかじめ", kata: "ヨ"},
    {kanji: "向", sens: "direction, faire face", On: "Kou", kun: "muku ; mukau", hira: "むく, むかう", kata: "コウ"},
    {kanji: "更", sens: "encore, renouveler", On: "Kou", kun: "sara ; fukeru", hira: "さら, ふける", kata: "コウ"},
    {kanji: "直", sens: "droit, réparer", On: "Choku ; Jiki", kun: "naosu ; tada", hira: "なおす, ただ", kata: "チョク, ジキ"},
    {kanji: "両", sens: "les deux", On: "Ryou", kun: "teru", hira: "てる", kata: "リョウ"},
    {kanji: "式", sens: "style, cérémonie", On: "Shiki", kun: "", hira: "", kata: "シキ"},
    {kanji: "欠", sens: "manque, absence", On: "Ketsu", kun: "kaku", hira: "かく", kata: "ケツ"},
    {kanji: "更", sens: "plus, tard", On: "Kou", kun: "sara ; fukeru", hira: "さら, ふける", kata: "コウ"},
    {kanji: "認", sens: "admettre", On: "Nin", kun: "mitomeru", hira: "みとめる", kata: "ニン"},
    {kanji: "指", sens: "doigt", On: "Shi", kun: "yubi ; sasu", hira: "ゆび, さす", kata: "シ"},
    {kanji: "問", sens: "question", On: "Mon", kun: "tou", hira: "とう", kata: "モン"},
    {kanji: "付", sens: "attacher", On: "Fu", kun: "tsuku ; tsukeru", hira: "つく, つける", kata: "フ"},
    {kanji: "件", sens: "sujet", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "各", sens: "chaque", On: "Kaku", kun: "onoono", hira: "おのおの", kata: "カク"},
    // ---------------------JLPT N3 Groupe 3--------------
    {kanji: "査", sens: "enquêter, examiner", On: "Sa", kun: "", hira: "", kata: "サ"},
    {kanji: "果", sens: "fruit, résultat, accomplir", On: "Ka", kun: "hatasu ; hate", hira: "はたす, はて", kata: "カ"},
    {kanji: "番", sens: "tour, numéro", On: "Ban", kun: "", hira: "", kata: "バン"},
    {kanji: "状", sens: "état, condition, lettre", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "独", sens: "seul, Allemagne", On: "Doku", kun: "hitori", hira: "ひとり", kata: "ドク"},
    {kanji: "済", sens: "terminer, régler, économie", On: "Sai ; Sei", kun: "sumu ; sumasu", hira: "すむ, すます", kata: "サイ, セイ"},
    {kanji: "備", sens: "préparer, fournir", On: "Bi", kun: "sonaeru ; sonawaru", hira: "そなえる, そなわる", kata: "ビ"},
    {kanji: "識", sens: "connaissance, discerner", On: "Shiki", kun: "shiru", hira: "しる", kata: "シキ"},
    {kanji: "願", sens: "souhaiter, prier", On: "Gan", kun: "negau", hira: "ねがう", kata: "ガン"},
    {kanji: "期", sens: "période, temps, espoir", On: "Ki ; Go", kun: "", hira: "", kata: "キ, ゴ"},
    {kanji: "報", sens: "rapport, récompense", On: "Hou", kun: "mukuiru", hira: "むくいる", kata: "ホウ"},
    {kanji: "導", sens: "guider, mener", On: "Dou", kun: "michibiku", hira: "みちびく", kata: "ドウ"},
    {kanji: "芸", sens: "art, technique, performance", On: "Gei", kun: "", hira: "", kata: "ゲイ"},
    {kanji: "術", sens: "art, technique, moyen", On: "Jutsu", kun: "sube", hira: "すべ", kata: "ジュツ"},
    {kanji: "複", sens: "multiple, double", On: "Fuku", kun: "", hira: "", kata: "フク"},
    {kanji: "雑", sens: "varié, mélangé, bruit", On: "Zatsu ; Zou", kun: "", hira: "", kata: "ザツ, ゾウ"},
    {kanji: "誌", sens: "magazine, document", On: "Shi", kun: "", hira: "", kata: "シ"},
    {kanji: "指", sens: "doigt, désigner", On: "Shi", kun: "yubi ; sasu", hira: "ゆび, さす", kata: "シ"},
    {kanji: "務", sens: "devoir, tâche, service", On: "Mu", kun: "tsutomeru", hira: "つとめる", kata: "ム"},
    {kanji: "演", sens: "jouer, présenter, théâtre", On: "En", kun: "", hira: "", kata: "エン"},
    {kanji: "技", sens: "talent, technique", On: "Gi", kun: "waza", hira: "わざ", kata: "ギ"},
    {kanji: "態", sens: "état, apparence", On: "Tai", kun: "", hira: "", kata: "タイ"},
    {kanji: "設", sens: "établir, créer", On: "Setsu", kun: "moukeru", hira: "もうける", kata: "セツ"},
    {kanji: "支", sens: "soutenir, branche", On: "Shi", kun: "sasaeru", hira: "ささえる", kata: "シ"},
    {kanji: "止", sens: "arrêter", On: "Shi", kun: "tomaru ; tomeru", hira: "とまる, とめる", kata: "シ"},
    {kanji: "種", sens: "espèce, graine", On: "Shu", kun: "tane", hira: "たね", kata: "シュ"},
    {kanji: "類", sens: "genre, sorte", On: "Rui", kun: "tagui", hira: "たぐい", kata: "ルイ"},
    {kanji: "昨", sens: "hier, passé", On: "Saku", kun: "", hira: "", kata: "サク"},
    {kanji: "晩", sens: "soir", On: "Ban", kun: "", hira: "", kata: "バン"},
    {kanji: "昼", sens: "midi, jour", On: "Chuu", kun: "hiru", hira: "ひる", kata: "チュウ"},
    {kanji: "夜", sens: "nuit", On: "Ya", kun: "yoru ; yo", hira: "よる, よ", kata: "ヤ"},
    {kanji: "朝", sens: "matin", On: "Chou", kun: "asa", hira: "あさ", kata: "チョウ"},
    {kanji: "春", sens: "printemps", On: "Shun", kun: "haru", hira: "はる", kata: "シュン"},
    {kanji: "夏", sens: "été", On: "Ka ; Ge", kun: "natsu", hira: "なつ", kata: "カ, ゲ"},
    {kanji: "秋", sens: "automne", On: "Shuu", kun: "aki", hira: "あき", kata: "シュウ"},
    {kanji: "冬", sens: "hiver", On: "Tou", kun: "fuyu", hira: "ふゆ", kata: "トウ"},
    {kanji: "寺", sens: "temple", On: "Ji", kun: "tera", hira: "てら", kata: "ジ"},
    {kanji: "橋", sens: "pont", On: "Kyou", kun: "hashi", hira: "はし", kata: "キョウ"},
    {kanji: "河", sens: "rivière", On: "Ka", kun: "kawa", hira: "かわ", kata: "カ"},
    {kanji: "岸", sens: "rive, côte", On: "Gan", kun: "kishi", hira: "きし", kata: "ガン"},
    {kanji: "湖", sens: "lac", On: "Ko", kun: "mizuumi", hira: "みずうみ", kata: "コ"},
    {kanji: "坂", sens: "pente, colline", On: "Han", kun: "saka", hira: "さか", kata: "ハン"},
    {kanji: "谷", sens: "vallée", On: "Koku", kun: "tani", hira: "たに", kata: "コク"},
    {kanji: "雲", sens: "nuage", On: "Un", kun: "kumo", hira: "くも", kata: "ウン"},
    {kanji: "波", sens: "vague", On: "Ha", kun: "nami", hira: "なみ", kata: "ハ"},
    {kanji: "岩", sens: "rocher", On: "Gan", kun: "iwa", hira: "いわ", kata: "ガン"},
    // -------------------JLPT N3 Groupe 4------------------
    {kanji: "練", sens: "pratiquer, pétrir", On: "Ren", kun: "neru", hira: "ねる", kata: "レン"},
    {kanji: "習", sens: "apprendre", On: "Shuu", kun: "narau", hira: "ならう", kata: "シュウ"},
    {kanji: "勉", sens: "effort, diligence", On: "Ben", kun: "tsutomeru", hira: "つとめる", kata: "ベン"},
    {kanji: "強", sens: "fort", On: "Kyou ; Gou", kun: "tsuyoi ; shiiru", hira: "つよい, しいる", kata: "キョウ, ゴウ"},
    {kanji: "研", sens: "polir, recherche", On: "Ken", kun: "togu", hira: "とぐ", kata: "ケン"},
    {kanji: "究", sens: "rechercher, approfondir", On: "Kyuu", kun: "kiwameru", hira: "きわめる", kata: "キュウ"},
    {kanji: "留", sens: "retenir, rester", On: "Ryuu ; Ru", kun: "tomaru ; tomeru", hira: "とまる, とめる", kata: "リュウ, ル"},
    {kanji: "質", sens: "qualité, nature", On: "Shitsu ; Shichi", kun: "", hira: "", kata: "シツ, シチ"},
    {kanji: "問", sens: "question", On: "Mon", kun: "tou", hira: "とう", kata: "モン"},
    {kanji: "題", sens: "sujet, titre", On: "Dai", kun: "", hira: "", kata: "ダイ"},
    {kanji: "答", sens: "réponse", On: "Tou", kun: "kotaeru ; kotae", hira: "こたえる, こたえ", kata: "トウ"},
    {kanji: "宿", sens: "logis, auberge", On: "Shuku", kun: "yado ; yadoru", hira: "やど, やどる", kata: "シュク"},
    {kanji: "政", sens: "politique", On: "Sei ; Shou", kun: "matsurigoto", hira: "まつりごと", kata: "セイ, ショウ"},
    {kanji: "治", sens: "gouverner, guérir", On: "Ji ; Chi", kun: "osameru ; naoru", hira: "おさめる, なおる", kata: "ジ, チ"},
    {kanji: "経", sens: "passer par, gérer", On: "Kei ; Kyou", kun: "heru", hira: "へる", kata: "ケイ, キョウ"},
    {kanji: "済", sens: "terminer, régler", On: "Sai ; Sei", kun: "sumu", hira: "すむ", kata: "サイ, セイ"},
    {kanji: "識", sens: "connaître", On: "Shiki", kun: "", hira: "", kata: "シキ"},
    {kanji: "法", sens: "loi, méthode", On: "Hou ; Hattsu", kun: "", hira: "", kata: "ホウ, ハッツ"},
    {kanji: "律", sens: "loi, rythme", On: "Ritsu ; Richi", kun: "", hira: "", kata: "リツ, リチ"},
    {kanji: "規", sens: "règle, standard", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "則", sens: "règle, loi", On: "Soku", kun: "notto-ru", hira: "のっとる", kata: "ソク"},
    {kanji: "備", sens: "préparer", On: "Bi", kun: "sonaeru", hira: "そなえる", kata: "ビ"},
    {kanji: "準", sens: "standard, préparer", On: "Jun", kun: "", hira: "", kata: "ジュン"},
    {kanji: "各", sens: "chaque", On: "Kaku", kun: "onoono", hira: "おのおの", kata: "カク"},
    {kanji: "個", sens: "individu, compteur", On: "Ko", kun: "", hira: "", kata: "コ"},
    {kanji: "別", sens: "séparer", On: "Betsu", kun: "wakeru ; chigau", hira: "わける, ちがう", kata: "ベツ"},
    {kanji: "性", sens: "nature, sexe", On: "Sei ; Shou", kun: "", hira: "", kata: "セイ, ショウ"},
    {kanji: "格", sens: "statut, règle", On: "Kaku ; Kou", kun: "", hira: "", kata: "カク, コウ"},
    {kanji: "式", sens: "cérémonie, style", On: "Shiki", kun: "", hira: "", kata: "シキ"},
    {kanji: "形", sens: "forme", On: "Kei ; Gyou", kun: "katachi", hira: "かたち", kata: "ケイ, ギョウ"},
    {kanji: "状", sens: "état, lettre", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "態", sens: "attitude, état", On: "Tai", kun: "", hira: "", kata: "タイ"},
    {kanji: "容", sens: "contenir, apparence", On: "You", kun: "", hira: "", kata: "ヨウ"},
    {kanji: "様", sens: "apparence, Monsieur/Madame", On: "You", kun: "sama", hira: "さま", kata: "ヨウ"},
    {kanji: "比", sens: "comparer", On: "Hi", kun: "kuraberu", hira: "くらべる", kata: "ヒ"},
    {kanji: "検", sens: "examiner", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "査", sens: "enquêter", On: "Sa", kun: "", hira: "", kata: "サ"},
    {kanji: "再", sens: "encore, à nouveau", On: "Sai ; Sa", kun: "futatabi", hira: "ふたたび", kata: "サイ, サ"},
    {kanji: "度", sens: "degré, fois", On: "Do ; To", kun: "tabi", hira: "たび", kata: "ド, ト"},
    {kanji: "番", sens: "numéro, tour", On: "Ban", kun: "", hira: "", kata: "バン"},
    {kanji: "次", sens: "suivant", On: "Ji", kun: "tsugi", hira: "つぎ", kata: "ジ"},
    {kanji: "等", sens: "classe, égal, et cætera", On: "Tou", kun: "hitoshii ; nado", hira: "ひとしい, など", kata: "トウ"},
    {kanji: "共", sens: "ensemble", On: "Kyou", kun: "tomo", hira: "とも", kata: "キョウ"},
    {kanji: "全", sens: "tout, entier", On: "Zen", kun: "subete", hira: "すべて", kata: "ゼン"},
    {kanji: "最", sens: "le plus", On: "Sai", kun: "motto ; mottomo", hira: "もっと, もっとも", kata: "サイ"},
    {kanji: "無", sens: "rien, néant", On: "Mu ; Bu", kun: "nai", hira: "ない", kata: "ム, ブ"},
    {kanji: "非", sens: "non, erreur", On: "Hi", kun: "arazu", hira: "あらず", kata: "ヒ"},
    // -----------------JLPT N3 Groupe 5------------ 
    {kanji: "第", sens: "ordinal , (ordinal = préfixe)", On: "Dai", kun: "", hira: "", kata: "ダイ"},
    {kanji: "成", sens: "devenir, accomplir", On: "Sei ; Jou", kun: "naru", hira: "なる", kata: "セイ, ジョウ"},
    {kanji: "的", sens: "cible, suffixe d'adjectif", On: "Teki", kun: "mato", hira: "まと", kata: "テキ"},
    {kanji: "期", sens: "période", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "限", sens: "limite", On: "Gen", kun: "kagiru", hira: "かぎる", kata: "ゲン"},
    {kanji: "続", sens: "continuer", On: "Zoku", kun: "tsuduku", hira: "つづく", kata: "ゾク"},
    {kanji: "過", sens: "passer, dépasser", On: "Ka", kun: "sugiru", hira: "すぎる", kata: "カ"},
    {kanji: "進", sens: "avancer", On: "Shin", kun: "susumu", hira: "すすむ", kata: "シン"},
    {kanji: "常", sens: "normal, toujours", On: "Jou", kun: "tsune", hira: "つね", kata: "ジョウ"},
    {kanji: "欠", sens: "manque", On: "Ketsu", kun: "kaku", hira: "かく", kata: "ケツ"},
    {kanji: "現", sens: "présent, apparaître", On: "Gen", kun: "arawareru", hira: "あらわれる", kata: "ゲン"},
    {kanji: "在", sens: "exister", On: "Zai", kun: "aru", hira: "ある", kata: "ザイ"},
    {kanji: "在", sens: "être situé", On: "Zai", kun: "aru", hira: "ある", kata: "ザイ"},
    {kanji: "実", sens: "réalité", On: "Jitsu", kun: "mi", hira: "み", kata: "ジツ"},
    {kanji: "確", sens: "sûr, certain", On: "Kaku", kun: "tashika", hira: "たしか", kata: "カク"},
    {kanji: "認", sens: "reconnaître", On: "Nin", kun: "mitomeru", hira: "みとめる", kata: "ニン"},
    {kanji: "表", sens: "surface, exprimer", On: "Hyou", kun: "omote ; arawasu", hira: "おもて, あらわす", kata: "ヒョウ"},
    {kanji: "示", sens: "montrer", On: "Ji ; Shi", kun: "shimesu", hira: "しめす", kata: "ジ, シ"},
    {kanji: "判", sens: "jugement", On: "Han", kun: "wakaru", hira: "わかる", kata: "ハン"},
    {kanji: "断", sens: "couper, refuser", On: "Dan", kun: "kotowaru ; tatsu", hira: "ことわる, たつ", kata: "ダン"},
    {kanji: "認", sens: "admettre", On: "Nin", kun: "mitomeru", hira: "みとめる", kata: "ニン"},
    {kanji: "可", sens: "possible", On: "Ka", kun: "", hira: "", kata: "カ"},
    {kanji: "否", sens: "non, nier", On: "Hi", kun: "ina", hira: "いな", kata: "ヒ"},
    {kanji: "権", sens: "droit, pouvoir", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "制", sens: "système, contrôle", On: "Sei", kun: "", hira: "", kata: "セイ"},
    {kanji: "務", sens: "devoir, tâche", On: "Mu", kun: "tsutomeru", hira: "つとめる", kata: "ム"},
    {kanji: "総", sens: "total, général", On: "Sou", kun: "", hira: "", kata: "ソウ"},
    {kanji: "領", sens: "territoire, recevoir", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "設", sens: "établir", On: "Setsu", kun: "moukeru", hira: "もうける", kata: "セツ"},
    {kanji: "保", sens: "préserver", On: "Ho", kun: "tamotsu", hira: "たもつ", kata: "ホ"},
    {kanji: "守", sens: "protéger", On: "Shu", kun: "mamoru", hira: "まもる", kata: "シュ"},
    {kanji: "留", sens: "retenir", On: "Ryuu", kun: "tomaru", hira: "とまる", kata: "リュウ"},
    {kanji: "付", sens: "attacher", On: "Fu", kun: "tsuku", hira: "つく", kata: "フ"},
    {kanji: "受", sens: "recevoir", On: "Ju", kun: "ukeru", hira: "うける", kata: "ジュ"},
    {kanji: "配", sens: "distribuer", On: "Hai", kun: "kubaru", hira: "くばる", kata: "ハイ"},
    {kanji: "委", sens: "confier", On: "I", kun: "yudaneru", hira: "ゆだねる", kata: "イ"},
    {kanji: "任", sens: "confier", On: "Nin", kun: "makaseru", hira: "まかせる", kata: "ニン"},
    {kanji: "解", sens: "résoudre, comprendre", On: "Kai", kun: "toku", hira: "とく", kata: "カイ"},
    {kanji: "説", sens: "expliquer", On: "Setsu", kun: "toku", hira: "とく", kata: "セツ"},
    {kanji: "言", sens: "dire", On: "Gen ; Gon", kun: "iu", hira: "いう", kata: "ゲン, ゴン"},
    {kanji: "信", sens: "croire", On: "Shin", kun: "shinjiru", hira: "しんじる", kata: "シン"},
    {kanji: "念", sens: "pensée, désir", On: "Nen", kun: "", hira: "", kata: "ネン"},
    {kanji: "指", sens: "désigner", On: "Shi", kun: "sasu", hira: "さす", kata: "シ"},
    {kanji: "導", sens: "guider", On: "Dou", kun: "michibiku", hira: "みちびく", kata: "ドウ"},
    {kanji: "報", sens: "rapport", On: "Hou", kun: "mukuiru", hira: "むくいる", kata: "ホウ"},
    {kanji: "告", sens: "annoncer", On: "Koku", kun: "tsugeru", hira: "つげる", kata: "コク"},
    // ---------------JLPT N3 Groupe 6----------------
    {kanji: "呼", sens: "appeler, inviter", On: "Ko", kun: "yobu", hira: "よぶ", kata: "コ"},
    {kanji: "吸", sens: "aspirer, fumer, sucer", On: "Kyuu", kun: "suu", hira: "すう", kata: "キュウ"},
    {kanji: "吹", sens: "souffler", On: "Sui", kun: "fuku", hira: "ふく", kata: "スイ"},
    {kanji: "殺", sens: "tuer", On: "Satsu ; Sai", kun: "korosu", hira: "ころす", kata: "サツ, サイ"},
    {kanji: "追", sens: "poursuivre, chasser", On: "Tsui", kun: "ou", hira: "おう", kata: "ツイ"},
    {kanji: "捨", sens: "jeter, abandonner", On: "Sha", kun: "suteru", hira: "すてる", kata: "シャ"},
    {kanji: "拾", sens: "ramasser, cueillir", On: "Shuu ; Juu", kun: "hirou", hira: "ひろう", kata: "シュウ, ジュウ"},
    {kanji: "曲", sens: "courbe, mélodie", On: "Kyoku", kun: "mageru ; magaru", hira: "まげる, まがる", kata: "キョク"},
    {kanji: "脱", sens: "enlever, (enlever --> vêtement), s'échapper", On: "Datsu", kun: "nugu ; nuyeru", hira: "ぬぐ, ぬゆる", kata: "ダツ"},
    {kanji: "踊", sens: "danser", On: "You", kun: "odoru ; odori", hira: "おどる, おどり", kata: "ヨウ"},
    {kanji: "眠", sens: "dormir", On: "Min", kun: "nemuru ; nemui", hira: "ねむる, ねむい", kata: "ミン"},
    {kanji: "怖", sens: "peur, effrayant", On: "Fu", kun: "kowai", hira: "こわい", kata: "フ"},
    {kanji: "誘", sens: "inviter, tenter", On: "Yuu", kun: "sasou", hira: "さそう", kata: "ユウ"},
    {kanji: "亡", sens: "mort, défunt", On: "Bou ; Mou", kun: "nakunaru", hira: "なくなる", kata: "ボウ, モウ"},
    {kanji: "忙", sens: "occupé", On: "Bou", kun: "isogashii", hira: "いそがしい", kata: "ボウ"},
    {kanji: "忘", sens: "oublier", On: "Bou", kun: "wasureru", hira: "わすれる", kata: "ボウ"},
    {kanji: "置", sens: "poser, placer", On: "Chi", kun: "oku", hira: "おく", kata: "チ"},
    {kanji: "蔵", sens: "entrepôt, posséder", On: "Zou", kun: "kura", hira: "くら", kata: "ゾウ"},
    {kanji: "諸", sens: "divers, plusieurs", On: "Sho", kun: "moro", hira: "もろ", kata: "ショ"},
    {kanji: "非", sens: "non, injustice", On: "Hi", kun: "arazu", hira: "あらず", kata: "ヒ"},
    {kanji: "罪", sens: "crime, péché", On: "Zai", kun: "tsumi", hira: "つみ", kata: "ザイ"},
    {kanji: "候", sens: "climat, saison, attendre", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "補", sens: "compléter, compenser", On: "Ho", kun: "oginau", hira: "おぎなう", kata: "ホ"},
    {kanji: "刻", sens: "graver, temps, hacher", On: "Koku", kun: "kizamu", hira: "きざむ", kata: "コク"},
    {kanji: "劇", sens: "drame, théâtre", On: "Geki", kun: "", hira: "", kata: "ゲキ"},
    {kanji: "演", sens: "jouer , (jouer --> théâtre), présenter", On: "En", kun: "", hira: "", kata: "エン"},
    {kanji: "観", sens: "observer, vue", On: "Kan", kun: "miru", hira: "みる", kata: "カン"},
    {kanji: "視", sens: "vision, regarder", On: "Shi", kun: "miru", hira: "みる", kata: "シ"},
    {kanji: "覚", sens: "mémoriser, s'éveiller", On: "Kaku", kun: "oboeru ; sameru", hira: "おぼえる, さめる", kata: "カク"},
    {kanji: "覧", sens: "regarder, examiner", On: "Ran", kun: "", hira: "", kata: "ラン"},
    {kanji: "疑", sens: "douter, soupçon", On: "Gi", kun: "utagau", hira: "うたがう", kata: "ギ"},
    {kanji: "範", sens: "modèle, exemple", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "囲", sens: "entourer, enceinte", On: "I", kun: "kakomu ; kakou", hira: "かこむ, かこう", kata: "イ"},
    {kanji: "採", sens: "cueillir, adopter, (adopter --> idée)", On: "Sai", kun: "toru", hira: "とる", kata: "サイ"},
    {kanji: "探", sens: "chercher, explorer", On: "Tan", kun: "sagasu ; saguru", hira: "さがす, さぐる", kata: "タン"},
    {kanji: "接", sens: "toucher, contacter", On: "Setsu", kun: "tsugu", hira: "つぐ", kata: "セツ"},
    {kanji: "断", sens: "couper, refuser, décider", On: "Dan", kun: "kotowaru ; tatsu", hira: "ことわる, たつ", kata: "ダン"},
    {kanji: "破", sens: "déchirer, briser", On: "Ha", kun: "yaburu ; yabureru", hira: "やぶる, やぶれる", kata: "ハ"},
    {kanji: "編", sens: "tricoter, compiler", On: "Hen", kun: "amu", hira: "あむ", kata: "ヘン"},
    {kanji: "捜", sens: "rechercher , (dans le contexte policier)", On: "Sou", kun: "sagasu", hira: "さがす", kata: "ソウ"},
    {kanji: "換", sens: "échanger, remplacer", On: "Kan", kun: "kaeru ; kawaru", hira: "かえる, かわる", kata: "カン"},
    {kanji: "混", sens: "mélanger", On: "Kon", kun: "mazeru ; mazaru", hira: "まぜる, まざる", kata: "コン"},
    {kanji: "及", sens: "atteindre, égaler", On: "Kyuu", kun: "oyobu ; oyobosu", hira: "およぶ, およぼす", kata: "キュウ"},
    {kanji: "吸", sens: "aspirer", On: "Kyuu", kun: "suu", hira: "すう", kata: "キュウ"},
    {kanji: "突", sens: "pousser, brusque", On: "Totsu", kun: "tsuku", hira: "つく", kata: "トツ"},
    {kanji: "抜", sens: "extraire, dépasser", On: "Batsu", kun: "nuku ; nukeru", hira: "ぬく, ぬける", kata: "バツ"},
    // ------------------JLPT N3 Groupe 7 --------------------
    {kanji: "胃", sens: "estomac", On: "I", kun: "", hira: "", kata: "イ"},
    {kanji: "肩", sens: "épaule", On: "Ken", kun: "kata", hira: "かた", kata: "ケン"},
    {kanji: "胸", sens: "poitrine", On: "Kyou", kun: "mune", hira: "むね", kata: "キョウ"},
    {kanji: "腰", sens: "taille, hanches", On: "You", kun: "koshi", hira: "こし", kata: "ヨウ"},
    {kanji: "腹", sens: "ventre", On: "Fuku", kun: "hara", hira: "はら", kata: "フク"},
    {kanji: "肌", sens: "peau", On: "Ki", kun: "hada", hira: "はだ", kata: "キ"},
    {kanji: "髪", sens: "cheveux", On: "Hatsu", kun: "kami", hira: "かみ", kata: "ハツ"},
    {kanji: "血", sens: "sang", On: "Ketsu", kun: "chi", hira: "ち", kata: "ケツ"},
    {kanji: "骨", sens: "os", On: "Kotsu", kun: "hone", hira: "ほね", kata: "コツ"},
    {kanji: "毒", sens: "poison", On: "Doku", kun: "", hira: "", kata: "ドク"},
    {kanji: "菌", sens: "germe, bactérie", On: "Kin", kun: "", hira: "", kata: "キン"},
    {kanji: "録", sens: "enregistrer", On: "Roku", kun: "", hira: "", kata: "ロク"},
    {kanji: "器", sens: "ustensile, instrument", On: "Ki", kun: "utsuwa", hira: "うつわ", kata: "キ"},
    {kanji: "具", sens: "outil, ingrédient", On: "Gu", kun: "sonaeru", hira: "そなえる", kata: "グ"},
    {kanji: "枚", sens: "compteur des objets plats", On: "Mai", kun: "", hira: "", kata: "マイ"},
    {kanji: "冊", sens: "compteur des livres", On: "Satsu ; Saku", kun: "", hira: "", kata: "サツ, サク"},
    {kanji: "個", sens: "individu, compteur", On: "Ko", kun: "", hira: "", kata: "コ"},
    {kanji: "香", sens: "parfum, encens", On: "Kou ; Kyou", kun: "kaori ; ka", hira: "かおり, か", kata: "コウ, キョウ"},
    {kanji: "煙", sens: "fumée", On: "En", kun: "kemuri", hira: "けむり", kata: "エン"},
    {kanji: "末", sens: "fin, poudre", On: "Matsu ; Batsu", kun: "sue", hira: "すえ", kata: "マツ, バツ"},
    {kanji: "未", sens: "pas encore", On: "Mi", kun: "imada", hira: "いまだ", kata: "ミ"},
    {kanji: "源", sens: "source, origine", On: "Gen", kun: "minamoto", hira: "みなもと", kata: "ゲン"},
    {kanji: "洗", sens: "laver", On: "Sen", kun: "arau", hira: "あらう", kata: "セン"},
    {kanji: "浄", sens: "purifier", On: "Jou", kun: "kiyoi", hira: "きよい", kata: "ジョウ"},
    {kanji: "層", sens: "couche, strate", On: "Sou", kun: "", hira: "", kata: "ソウ"},
    {kanji: "砂", sens: "sable", On: "Sa ; Sha", kun: "suna", hira: "すな", kata: "サ, シャ"},
    {kanji: "泥", sens: "boue", On: "Dei", kun: "doro", hira: "どろ", kata: "デイ"},
    {kanji: "炭", sens: "charbon", On: "Tan", kun: "sumi", hira: "すみ", kata: "タン"},
    {kanji: "油", sens: "huile", On: "Yu", kun: "abura", hira: "あぶら", kata: "ユ"},
    {kanji: "液", sens: "liquide", On: "Eki", kun: "", hira: "", kata: "エキ"},
    {kanji: "蒸", sens: "vapeur, étuver", On: "Jou", kun: "musu", hira: "むす", kata: "ジョウ"},
    {kanji: "凍", sens: "geler", On: "Tou", kun: "kooru ; kogoeru", hira: "こおる, こごえる", kata: "トウ"},
    {kanji: "温", sens: "tiède, chaud", On: "On", kun: "atatakai", hira: "あたたかい", kata: "オン"},
    {kanji: "冷", sens: "froid, refroidir", On: "Rei", kun: "tsumetai ; hiyasu", hira: "つめたい, ひやす", kata: "レイ"},
    {kanji: "涼", sens: "frais", On: "Ryou", kun: "suzushii", hira: "すずしい", kata: "リョウ"},
    {kanji: "鋭", sens: "aiguisé, tranchant", On: "Ei", kun: "surudoi", hira: "するどい", kata: "エイ"},
    {kanji: "鈍", sens: "émoussé, lent", On: "Don", kun: "nibui", hira: "にぶい", kata: "ドン"},
    {kanji: "険", sens: "escarpé, risque", On: "Ken", kun: "kewashii", hira: "けわしい", kata: "ケン"},
    {kanji: "震", sens: "trembler, séisme", On: "Shin", kun: "furu-eru", hira: "ふるえる", kata: "シン"},
    {kanji: "災", sens: "catastrophe", On: "Sai", kun: "wazawai", hira: "わざわい", kata: "サイ"},
    {kanji: "害", sens: "dommage, mal", On: "Gai", kun: "", hira: "", kata: "ガイ"},
    {kanji: "爆", sens: "exploser", On: "Baku", kun: "", hira: "", kata: "バク"},
    {kanji: "破", sens: "briser", On: "Ha", kun: "yaburu", hira: "やぶる", kata: "ハ"},
    {kanji: "防", sens: "prévenir, protéger", On: "Bou", kun: "fusegu", hira: "ふせぐ", kata: "ボウ"},
    {kanji: "救", sens: "sauver, secourir", On: "Kyuu", kun: "sukuu", hira: "すくう", kata: "キュウ"},
    {kanji: "助", sens: "aider", On: "Jo", kun: "tasukeru", hira: "たすける", kata: "ジョ"},
    // -------------JLPT N3 Groupe 8---------------------
    {kanji: "雇", sens: "employer, louer", On: "Ko", kun: "yatou", hira: "やとう", kata: "コ"},
    {kanji: "礼", sens: "salut, merci, rite", On: "Rei ; Rai", kun: "", hira: "", kata: "レイ, ライ"},
    {kanji: "祝", sens: "célébrer", On: "Shuku", kun: "iwa-u", hira: "いわう", kata: "シュク"},
    {kanji: "祭", sens: "fête, festival", On: "Sai", kun: "matsuri", hira: "まつり", kata: "サイ"},
    {kanji: "贈", sens: "offrir, cadeau", On: "Zou ; Sou", kun: "okuru", hira: "おくる", kata: "ゾウ, ソウ"},
    {kanji: "包", sens: "envelopper", On: "Hou", kun: "tsutsumu", hira: "つつむ", kata: "ホウ"},
    {kanji: "豊", sens: "abondant", On: "Hou", kun: "yutaka", hira: "ゆたか", kata: "ホウ"},
    {kanji: "富", sens: "richesse", On: "Fu", kun: "tomi", hira: "とみ", kata: "フ"},
    {kanji: "貧", sens: "pauvre", On: "Hin ; Bin", kun: "mazushii", hira: "まずしい", kata: "ヒン, ビン"},
    {kanji: "乏", sens: "manquer de", On: "Bou", kun: "toboshii", hira: "とぼしい", kata: "ボウ"},
    {kanji: "等", sens: "égal, etc.", On: "Tou", kun: "hitoshii ; nado", hira: "ひとしい, など", kata: "トウ"},
    {kanji: "恵", sens: "bénédiction, faveur", On: "Kei ; E", kun: "megumu", hira: "めぐむ", kata: "ケイ, エ"},
    {kanji: "招", sens: "inviter", On: "Shou", kun: "maneku", hira: "まねく", kata: "ショウ"},
    {kanji: "欲", sens: "désirer", On: "Yoku", kun: "hoshii", hira: "ほしい", kata: "ヨク"},
    {kanji: "喜", sens: "se réjouir", On: "Ki", kun: "yorokobu", hira: "よろこぶ", kata: "キ"},
    {kanji: "怒", sens: "colère", On: "Do", kun: "okoru ; ikaru", hira: "おこる, いかる", kata: "ド"},
    {kanji: "哀", sens: "pathétique, tristesse", On: "Ai", kun: "aware", hira: "あわれ", kata: "アイ"},
    {kanji: "幸", sens: "bonheur", On: "Kou", kun: "shiawase ; sachi", hira: "しあわせ, さち", kata: "コウ"},
    {kanji: "福", sens: "fortune, chance", On: "Fuku", kun: "", hira: "", kata: "フク"},
    {kanji: "健", sens: "santé, vigoureux", On: "Ken", kun: "sukoyaka", hira: "すこやか", kata: "ケン"},
    {kanji: "康", sens: "santé, paix", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "診", sens: "examiner , (examiner = médical)", On: "Shin", kun: "miru", hira: "みる", kata: "シン"},
    {kanji: "療", sens: "soigner", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "命", sens: "vie, destin", On: "Mei ; Myou", kun: "inochi", hira: "いのち", kata: "メイ, ミョウ"},
    {kanji: "居", sens: "résider, être là", On: "Kyo", kun: "iru", hira: "いる", kata: "キョ"},
    {kanji: "留", sens: "rester, fixer", On: "Ryuu ; Ru", kun: "tomaru", hira: "とまる", kata: "リュウ, ル"},
    {kanji: "守", sens: "protéger, garder", On: "Shu ; Su", kun: "mamoru", hira: "まもる", kata: "シュ, ス"},
    {kanji: "召", sens: "appeler, manger , (manger = honorifique)", On: "Shou", kun: "mesu", hira: "めす", kata: "ショウ"},
    {kanji: "願", sens: "souhaiter", On: "Gan", kun: "negau", hira: "ねがう", kata: "ガン"},
    {kanji: "件", sens: "affaire, cas", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "再", sens: "à nouveau", On: "Sai ; Sa", kun: "futatabi", hira: "ふたたび", kata: "サイ, サ"},
    {kanji: "接", sens: "contacter", On: "Setsu", kun: "tsugu", hira: "つぐ", kata: "セツ"},
    {kanji: "給", sens: "fournir, salaire", On: "Kyuu", kun: "tamau", hira: "たまう", kata: "キュウ"},
    {kanji: "由", sens: "raison, cause", On: "Yu ; Yui", kun: "yoshi", hira: "よし", kata: "ユ, ユイ"},
    {kanji: "委", sens: "confier, comité", On: "I", kun: "yudaneru", hira: "ゆだねる", kata: "イ"},
    {kanji: "展", sens: "exposer, étaler", On: "Ten", kun: "", hira: "", kata: "テン"},
    {kanji: "衆", sens: "masse, peuple", On: "Shuu ; Shu", kun: "", hira: "", kata: "シュウ, シュ"},
    {kanji: "憲", sens: "constitution", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "域", sens: "zone, région", On: "Iki", kun: "", hira: "", kata: "イキ"},
    {kanji: "宇", sens: "univers, ciel", On: "U", kun: "", hira: "", kata: "ウ"},
    {kanji: "宙", sens: "espace, air", On: "Chuu", kun: "", hira: "", kata: "チュウ"},
    {kanji: "墓", sens: "tombe", On: "Bo", kun: "haka", hira: "はか", kata: "ボ"},
    {kanji: "尊", sens: "vénérer, précieux", On: "Son", kun: "toutoi", hira: "とうとい", kata: "ソン"},
    {kanji: "厚", sens: "épais, gentil", On: "Kou", kun: "atsui", hira: "あつい", kata: "コウ"},
    {kanji: "濃", sens: "concentré, sombre", On: "Nou", kun: "koi", hira: "こい", kata: "ノウ"},
    {kanji: "薄", sens: "fin, léger", On: "Haku", kun: "usui", hira: "うすい", kata: "ハク"},
    // ------------------JLPT N2 Groupe 1-------------------
    {kanji: "羽", sens: "plume, aile", On: "U", kun: "ha ; hane", hira: "は, はね", kata: "ウ"},
    {kanji: "皿", sens: "assiette", On: "Bei", kun: "sara", hira: "さら", kata: "ベイ"},
    {kanji: "寺", sens: "temple bouddhiste", On: "Ji", kun: "tera", hira: "てら", kata: "ジ"},
    {kanji: "練", sens: "pratique, pétrir", On: "Ren", kun: "neru", hira: "ねる", kata: "レン"},
    {kanji: "戸", sens: "porte", On: "Ko", kun: "to", hira: "と", kata: "コ"},
    {kanji: "貝", sens: "coquillage", On: "Bai", kun: "kai", hira: "かい", kata: "バイ"},
    {kanji: "丸", sens: "cercle, rond", On: "Gan", kun: "maru ; marui", hira: "まる, まるい", kata: "ガン"},
    {kanji: "黄", sens: "jaune", On: "Kou ; Ou", kun: "ki", hira: "き", kata: "コウ, オウ"},
    {kanji: "雲", sens: "nuage", On: "Un", kun: "kumo", hira: "くも", kata: "ウン"},
    {kanji: "岩", sens: "rocher", On: "Gan", kun: "iwa", hira: "いわ", kata: "ガン"},
    {kanji: "毛", sens: "poil, cheveu", On: "Mou", kun: "ke", hira: "け", kata: "モウ"},
    {kanji: "油", sens: "huile", On: "Yu", kun: "abura", hira: "あぶら", kata: "ユ"},
    {kanji: "岸", sens: "côte, rivage", On: "Gan", kun: "kishi", hira: "きし", kata: "ガン"},
    {kanji: "島", sens: "île", On: "Tou", kun: "shima", hira: "しま", kata: "トウ"},
    {kanji: "荷", sens: "bagage, charge", On: "Ka", kun: "ni", hira: "に", kata: "カ"},
    {kanji: "波", sens: "vague", On: "Ha", kun: "nami", hira: "なみ", kata: "ハ"},
    {kanji: "麦", sens: "blé, orge", On: "Baku", kun: "mugi", hira: "むぎ", kata: "バク"},
    {kanji: "州", sens: "état, province", On: "Shuu", kun: "su", hira: "す", kata: "シュウ"},
    {kanji: "虫", sens: "insecte", On: "Chuu", kun: "mushi", hira: "むし", kata: "チュウ"},
    {kanji: "板", sens: "planche", On: "Han ; Ban", kun: "ita", hira: "いた", kata: "ハン, バン"},
    {kanji: "児", sens: "enfant, nouveau-né", On: "Ji ; Ni", kun: "ko", hira: "こ", kata: "ジ, ニ"},
    {kanji: "底", sens: "fond", On: "Tei", kun: "soko", hira: "そこ", kata: "テイ"},
    {kanji: "皮", sens: "peau", On: "Hi", kun: "kawa", hira: "かわ", kata: "ヒ"},
    {kanji: "委", sens: "confier, comité", On: "I", kun: "yudaneru", hira: "ゆだねる", kata: "イ"},
    {kanji: "竹", sens: "bambou", On: "Chiku", kun: "take", hira: "たけ", kata: "チク"},
    {kanji: "糸", sens: "fil", On: "Shi", kun: "ito", hira: "いと", kata: "シ"},
    {kanji: "秒", sens: "seconde", On: "Byou", kun: "", hira: "", kata: "ビョウ"},
    {kanji: "柱", sens: "pilier", On: "Chuu", kun: "hashira", hira: "はしら", kata: "チュウ"},
    {kanji: "星", sens: "étoile", On: "Sei ; Shou", kun: "hoshi", hira: "ほし", kata: "セイ, ショウ"},
    {kanji: "角", sens: "angle, corne", On: "Kaku", kun: "kado ; tsuno", hira: "かど, つの", kata: "カク"},
    {kanji: "湖", sens: "lac", On: "Ko", kun: "mizuumi", hira: "みずうみ", kata: "コ"},
    {kanji: "毒", sens: "poison", On: "Doku", kun: "", hira: "", kata: "ドク"},
    {kanji: "線", sens: "ligne", On: "Sen", kun: "suji", hira: "すじ", kata: "セン"},
    {kanji: "温", sens: "tiède, chaud", On: "On", kun: "atatakai", hira: "あたたかい", kata: "オン"},
    {kanji: "央", sens: "centre", On: "Ou", kun: "", hira: "", kata: "オウ"},
    {kanji: "谷", sens: "vallée", On: "Koku", kun: "tani", hira: "たに", kata: "コク"},
    {kanji: "仲", sens: "relation, entremise", On: "Chuu", kun: "naka", hira: "なか", kata: "チュウ"},
    {kanji: "史", sens: "histoire, chronique", On: "Shi", kun: "", hira: "", kata: "シ"},
    {kanji: "固", sens: "dur, solide", On: "Ko", kun: "katai ; katamaru", hira: "かたい, かたまる", kata: "コ"},
    {kanji: "令", sens: "ordre, commandement", On: "Rei", kun: "", hira: "", kata: "レイ"},
    {kanji: "鼻", sens: "nez", On: "Bi", kun: "hana", hira: "はな", kata: "ビ"},
    {kanji: "導", sens: "guider", On: "Dou", kun: "michibiku", hira: "みちびく", kata: "ドウ"},
    {kanji: "無", sens: "rien, aucun", On: "Mu ; Bu", kun: "nai", hira: "ない", kata: "ム, ブ"},
    {kanji: "照", sens: "éclairer, briller", On: "Shou", kun: "teru ; terasu", hira: "てる, てらす", kata: "ショウ"},
    {kanji: "周", sens: "circonférence, tour", On: "Shuu", kun: "mawari", hira: "まわり", kata: "シュウ"},
    {kanji: "複", sens: "double, composé", On: "Fuku", kun: "", hira: "", kata: "フク"},
// ------------------JLPT N2 Groupe 2-------------------
    {kanji: "冊", sens: "tome, volume", On: "Satsu ; Saku", kun: "", hira: "", kata: "サツ, サク"},
    {kanji: "清", sens: "pur, propre", On: "Sei ; Shou", kun: "kiyoi", hira: "きよい", kata: "セイ, ショウ"},
    {kanji: "枚", sens: "feuille, objet plat", On: "Mai", kun: "", hira: "", kata: "マイ"},
    {kanji: "兵", sens: "soldat, armée", On: "Hei ; Hyou", kun: "tsuwamono", hira: "つわもの", kata: "ヘイ, ヒョウ"},
    {kanji: "季", sens: "saison", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "干", sens: "sécher", On: "Kan", kun: "hosu ; hiru", hira: "ほす, ひる", kata: "カン"},
    {kanji: "炭", sens: "charbon", On: "Tan", kun: "sumi", hira: "すみ", kata: "タン"},
    {kanji: "競", sens: "concourir", On: "Kyou ; Kei", kun: "kiso ; seru", hira: "きそ, せる", kata: "キョウ, ケイ"},
    {kanji: "枝", sens: "branche", On: "Shi", kun: "eda", hira: "えだ", kata: "シ"},
    {kanji: "歴", sens: "curriculum, passage du temps", On: "Reki", kun: "", hira: "", kata: "レキ"},
    {kanji: "比", sens: "comparer", On: "Hi", kun: "kuraberu", hira: "くらべる", kata: "ヒ"},
    {kanji: "届", sens: "livrer, atteindre", On: "Kai", kun: "todoku ; todokeru", hira: "とどく, とどける", kata: "カイ"},
    {kanji: "簡", sens: "simple, bref", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "包", sens: "envelopper", On: "Hou", kun: "tsutsumu", hira: "つつむ", kata: "ホウ"},
    {kanji: "庫", sens: "entrepôt", On: "Ko ; Ku", kun: "kura", hira: "くら", kata: "コ, ク"},
    {kanji: "緑", sens: "vert", On: "Ryoku ; Roku", kun: "midori", hira: "みどり", kata: "リョク, ロク"},
    {kanji: "浴", sens: "baigner", On: "Yoku", kun: "abiru", hira: "あびる", kata: "ヨク"},
    {kanji: "個", sens: "individu, pièce", On: "Ko", kun: "", hira: "", kata: "コ"},
    {kanji: "氷", sens: "glace", On: "Hyou", kun: "koori", hira: "こおり", kata: "ヒョウ"},
    {kanji: "希", sens: "espoir, rare", On: "Ki", kun: "mare", hira: "まれ", kata: "キ"},
    {kanji: "課", sens: "leçon, section", On: "Ka", kun: "", hira: "", kata: "カ"},
    {kanji: "卵", sens: "œuf", On: "Ran", kun: "tamago", hira: "たまご", kata: "ラン"},
    {kanji: "停", sens: "arrêt", On: "Tei", kun: "tomaru", hira: "とまる", kata: "テイ"},
    {kanji: "勇", sens: "courage", On: "Yuu", kun: "isamu", hira: "いさむ", kata: "ユウ"},
    {kanji: "境", sens: "frontière", On: "Kyou ; Kei", kun: "sakai", hira: "さかい", kata: "キョウ, ケイ"},
    {kanji: "億", sens: "cent millions", On: "Oku", kun: "", hira: "", kata: "オク"},
    {kanji: "卒", sens: "diplôme, soldat", On: "Sotsu", kun: "", hira: "", kata: "ソツ"},
    {kanji: "胃", sens: "estomac", On: "I", kun: "", hira: "", kata: "イ"},
    {kanji: "効", sens: "effet, efficacité", On: "Kou", kun: "kiku", hira: "きく", kata: "コウ"},
    {kanji: "農", sens: "agriculture", On: "Nou", kun: "", hira: "", kata: "ノウ"},
    {kanji: "永", sens: "éternité, long", On: "Ei", kun: "nagai", hira: "ながい", kata: "エイ"},
    {kanji: "城", sens: "château", On: "Jou", kun: "shiro", hira: "しろ", kata: "ジョウ"},
    {kanji: "血", sens: "sang", On: "Ketsu", kun: "chi", hira: "ち", kata: "ケツ"},
    {kanji: "囲", sens: "entourer", On: "I", kun: "kakomu ; kakou", hira: "かこむ, かこう", kata: "イ"},
    {kanji: "漁", sens: "pêche", On: "Gyo ; Ryou", kun: "asaru", hira: "あさる", kata: "ギョ, リョウ"},
    {kanji: "副", sens: "vice-, secondaire", On: "Fuku", kun: "", hira: "", kata: "フク"},
    {kanji: "河", sens: "fleuve, rivière", On: "Ka", kun: "kawa", hira: "かわ", kata: "カ"},
    {kanji: "準", sens: "standard, semi-", On: "Jun", kun: "nazoraeru", hira: "なぞらえる", kata: "ジュン"},
    {kanji: "脳", sens: "cerveau", On: "Nou", kun: "", hira: "", kata: "ノウ"},
    {kanji: "童", sens: "enfant", On: "Dou", kun: "warabe", hira: "わらべ", kata: "ドウ"},
    {kanji: "塩", sens: "sel", On: "En", kun: "shio", hira: "しお", kata: "エン"},
    {kanji: "衣", sens: "vêtement", On: "I ; E", kun: "koromo", hira: "ころも", kata: "イ, エ"},
    {kanji: "防", sens: "défendre, prévenir", On: "Bou", kun: "fusegu", hira: "ふせぐ", kata: "ボウ"},
    {kanji: "鉄", sens: "fer", On: "Tetsu", kun: "kurogane", hira: "くろがね", kata: "テツ"},
    {kanji: "仏", sens: "Bouddha, France", On: "Butsu ; Futsu", kun: "hotoke", hira: "ほとけ", kata: "ブツ, フツ"},
    {kanji: "均", sens: "égal, niveau", On: "Kin", kun: "", hira: "", kata: "キン"},
// ------------------JLPT N2 Groupe 3-------------------
    {kanji: "骨", sens: "os", On: "Kotsu", kun: "hone", hira: "ほね", kata: "コツ"},
    {kanji: "協", sens: "coopération", On: "Kyou", kun: "", hira: "", kata: "キョウ"},
    {kanji: "再", sens: "à nouveau, re-", On: "Sai ; Sa", kun: "futatabi", hira: "ふたたび", kata: "サイ, サ"},
    {kanji: "片", sens: "un côté, fragment", On: "Hen", kun: "kata", hira: "かた", kata: "ヘン"},
    {kanji: "刷", sens: "imprimer", On: "Satsu", kun: "suru", hira: "する", kata: "サツ"},
    {kanji: "灯", sens: "lampe, lumière", On: "Tou", kun: "hi", hira: "ひ", kata: "トウ"},
    {kanji: "団", sens: "groupe, association", On: "Dan ; Ton", kun: "katamari", hira: "かたまり", kata: "ダン, トン"},
    {kanji: "武", sens: "militaire, guerrier", On: "Bu ; Mu", kun: "take", hira: "たけ", kata: "ブ, ム"},
    {kanji: "禁", sens: "interdiction", On: "Kin", kun: "", hira: "", kata: "キン"},
    {kanji: "印", sens: "marque, sceau", On: "In", kun: "shirushi", hira: "しるし", kata: "イン"},
    {kanji: "芸", sens: "art, artisanat", On: "Gei", kun: "uete", hira: "うえて", kata: "ゲイ"},
    {kanji: "象", sens: "éléphant, phénomène", On: "Shou ; Zou", kun: "katadoru", hira: "かたどる", kata: "ショウ, ゾウ"},
    {kanji: "久", sens: "longtemps", On: "Kyuu ; Ku", kun: "hisashii", hira: "ひさしい", kata: "キュウ, ク"},
    {kanji: "像", sens: "statue, image", On: "Zou", kun: "", hira: "", kata: "ゾウ"},
    {kanji: "将", sens: "commandant, futur", On: "Shou", kun: "masa", hira: "まさ", kata: "ショウ"},
    {kanji: "泉", sens: "source", On: "Sen", kun: "izumi", hira: "いずみ", kata: "セン"},
    {kanji: "各", sens: "chaque", On: "Kaku", kun: "ono-ono", hira: "おのおの", kata: "カク"},
    {kanji: "浅", sens: "peu profond", On: "Sen", kun: "asai", hira: "あさい", kata: "セン"},
    {kanji: "軍", sens: "armée", On: "Gun", kun: "", hira: "", kata: "グン"},
    {kanji: "編", sens: "compiler, tricoter", On: "Hen", kun: "amu", hira: "あむ", kata: "ヘン"},
    {kanji: "宇", sens: "univers, toit", On: "U", kun: "", hira: "", kata: "ウ"},
    {kanji: "翌", sens: "suivant", On: "Yoku", kun: "", hira: "", kata: "ヨク"},
    {kanji: "詞", sens: "mot, poésie", On: "Shi", kun: "kotoba", hira: "ことば", kata: "シ"},
    {kanji: "植", sens: "planter", On: "Shoku", kun: "ueru ; uwaru", hira: "うえる, うわる", kata: "ショク"},
    {kanji: "航", sens: "navigation", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "営", sens: "gérer, camp", On: "Ei", kun: "itonamu", hira: "いとなむ", kata: "エイ"},
    {kanji: "採", sens: "récolter, adopter", On: "Sai", kun: "toru", hira: "とる", kata: "サイ"},
    {kanji: "逆", sens: "inverse, opposé", On: "Gyaku", kun: "saka", hira: "さか", kata: "ギャク"},
    {kanji: "域", sens: "région, domaine", On: "Iki", kun: "", hira: "", kata: "イキ"},
    {kanji: "担", sens: "porter (sur l'épaule)", On: "Tan", kun: "katsugu ; ninau", hira: "かつぐ, になう", kata: "タン"},
    {kanji: "根", sens: "racine", On: "Kon", kun: "ne", hira: "ね", kata: "コン"},
    {kanji: "貨", sens: "monnaie, biens", On: "Ka", kun: "takara", hira: "たから", kata: "カ"},
    {kanji: "布", sens: "tissu", On: "Fu", kun: "nuno", hira: "ぬの", kata: "フ"},
    {kanji: "燃", sens: "brûler", On: "Nen", kun: "moeru ; moyasu", hira: "もえる, もやす", kata: "ネン"},
    {kanji: "版", sens: "édition, impression", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "群", sens: "troupeau, groupe", On: "Gun", kun: "mureru ; mure", hira: "むれる, むれ", kata: "グン"},
    {kanji: "述", sens: "exprimer, relater", On: "Jutsu", kun: "noberu", hira: "のべる", kata: "ジュツ"},
    {kanji: "銅", sens: "cuivre", On: "Dou", kun: "akagane", hira: "あかがね", kata: "ドウ"},
    {kanji: "並", sens: "aligner, moyen", On: "Hei", kun: "nami ; narabu", hira: "なみ, ならぶ", kata: "ヘイ"},
    {kanji: "乱", sens: "désordre, émeute", On: "Ran", kun: "midareru", hira: "みだれる", kata: "ラン"},
    {kanji: "誌", sens: "magazine", On: "Shi", kun: "", hira: "", kata: "シ"},
    {kanji: "章", sens: "chapitre, badge", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "賞", sens: "prix, récompense", On: "Shou", kun: "homeru", hira: "ほめる", kata: "ショウ"},
    {kanji: "刊", sens: "publier, éditer", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "鉱", sens: "minerai", On: "Kou", kun: "aragane", hira: "あらがね", kata: "コウ"},
    {kanji: "庁", sens: "agence gouvernementale", On: "Chou", kun: "yakusho", hira: "やくしょ", kata: "チョウ"},
// ------------------JLPT N2 Groupe 4-------------------
    {kanji: "祝", sens: "célébrer", On: "Shuku", kun: "iwau", hira: "いわう", kata: "シュク"},
    {kanji: "管", sens: "tuyau, contrôle", On: "Kan", kun: "kuda", hira: "くだ", kata: "カン"},
    {kanji: "辺", sens: "environs", On: "Hen", kun: "atari ; be", hira: "あたり, べ", kata: "ヘン"},
    {kanji: "技", sens: "technique, art", On: "Gi", kun: "waza", hira: "わざ", kata: "ギ"},
    {kanji: "測", sens: "mesurer", On: "Soku", kun: "hakaru", hira: "はかる", kata: "ソク"},
    {kanji: "専", sens: "spécialité", On: "Sen", kun: "moppara", hira: "もっぱら", kata: "セン"},
    {kanji: "署", sens: "station, signature", On: "Sho", kun: "", hira: "", kata: "ショ"},
    {kanji: "巻", sens: "enrouler, volume", On: "Kan", kun: "maku", hira: "まく", kata: "カン"},
    {kanji: "筆", sens: "pinceau, écriture", On: "Hitsu", kun: "fude", hira: "ふで", kata: "ヒツ"},
    {kanji: "装", sens: "vêtement, équiper", On: "Sou ; Shou", kun: "yosou", hira: "よそおう", kata: "ソウ, ショウ"},
    {kanji: "玉", sens: "bijou, balle", On: "Gyoku", kun: "tama", hira: "たま", kata: "ギョク"},
    {kanji: "府", sens: "préfecture urbaine", On: "Fu", kun: "", hira: "", kata: "フ"},
    {kanji: "訓", sens: "instruction, lecture", On: "Kun", kun: "oshieru", hira: "おしえる", kata: "クン"},
    {kanji: "順", sens: "ordre, tour", On: "Jun", kun: "", hira: "", kata: "ジュン"},
    {kanji: "則", sens: "règle, loi", On: "Soku", kun: "nottoru", hira: "のっとる", kata: "ソク"},
    {kanji: "築", sens: "construire", On: "Chiku", kun: "kizuku", hira: "きずく", kata: "チク"},
    {kanji: "純", sens: "pur, innocent", On: "Jun", kun: "", hira: "", kata: "ジュン"},
    {kanji: "橋", sens: "pont", On: "Kyou", kun: "hashi", hira: "はし", kata: "キョウ"},
    {kanji: "改", sens: "réformer, changer", On: "Kai", kun: "aratameru", hira: "あらためる", kata: "カイ"},
    {kanji: "札", sens: "billet, étiquette", On: "Satsu", kun: "fuda", hira: "ふだ", kata: "サツ"},
    {kanji: "粉", sens: "poudre, farine", On: "Fun", kun: "ko ; kona", hira: "こ, こな", kata: "フン"},
    {kanji: "臣", sens: "serviteur, ministre", On: "Shin ; Jin", kun: "", hira: "", kata: "シン, ジン"},
    {kanji: "講", sens: "conférence, cours", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "預", sens: "déposer, confier", On: "Yo", kun: "azukeru ; azukaru", hira: "あずける, あずかる", kata: "ヨ"},
    {kanji: "尊", sens: "précieux, respecter", On: "Son", kun: "toutoi ; tattobu", hira: "とうとい, たっとぶ", kata: "ソン"},
    {kanji: "著", sens: "auteur, remarquable", On: "Cho", kun: "arawasu ; ichijirushii", hira: "あらわす, いちじるしい", kata: "チョ"},
    {kanji: "算", sens: "calculer", On: "San", kun: "", hira: "", kata: "サン"},
    {kanji: "倍", sens: "double, fois", On: "Bai", kun: "", hira: "", kata: "バイ"},
    {kanji: "湯", sens: "eau chaude, bain", On: "Tou", kun: "yu", hira: "ゆ", kata: "トウ"},
    {kanji: "量", sens: "quantité, peser", On: "Ryou", kun: "hakaru", hira: "はかる", kata: "リョウ"},
    {kanji: "液", sens: "liquide", On: "Eki", kun: "", hira: "", kata: "エキ"},
    {kanji: "綿", sens: "coton", On: "Men", kun: "wata", hira: "わた", kata: "メン"},
    {kanji: "乳", sens: "lait", On: "Nyuu", kun: "chichi", hira: "ちち", kata: "ニュウ"},
    {kanji: "宝", sens: "trésor", On: "Hou", kun: "takara", hira: "たから", kata: "ホウ"},
    {kanji: "律", sens: "loi, rythme", On: "Ritsu ; Richi", kun: "", hira: "", kata: "リツ, リチ"},
    {kanji: "占", sens: "deviner, occuper", On: "Sen", kun: "uranau ; shimeru", hira: "うらなう, しめる", kata: "セン"},
    {kanji: "爆", sens: "explosion", On: "Baku", kun: "hazeru", hira: "はぜる", kata: "バク"},
    {kanji: "拾", sens: "ramasser", On: "Shuu", kun: "hirou", hira: "ひろう", kata: "シュウ"},
    {kanji: "孫", sens: "petit-enfant", On: "Son", kun: "mago", hira: "まご", kata: "ソン"},
    {kanji: "復", sens: "revenir, répéter", On: "Fuku", kun: "", hira: "", kata: "フク"},
    {kanji: "査", sens: "enquêter", On: "Sa", kun: "", hira: "", kata: "サ"},
    {kanji: "拝", sens: "vénérer, adorer", On: "Hai", kun: "ogamu", hira: "おがむ", kata: "ハイ"},
    {kanji: "胸", sens: "poitrine", On: "Kyou", kun: "mune", hira: "むね", kata: "キョウ"},
    {kanji: "郵", sens: "courrier", On: "Yuu", kun: "", hira: "", kata: "ユウ"},
    {kanji: "祭", sens: "festival", On: "Sai", kun: "matsuri", hira: "まつり", kata: "サイ"},
    {kanji: "輪", sens: "roue, anneau", On: "Rin", kun: "wa", hira: "わ", kata: "リン"},
// ------------------JLPT N2 Groupe 5-------------------
    {kanji: "設", sens: "établir", On: "Setsu", kun: "moukeru", hira: "もうける", kata: "セツ"},
    {kanji: "領", sens: "territoire", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "接", sens: "connecter, toucher", On: "Setsu", kun: "tsugu", hira: "つぐ", kata: "セツ"},
    {kanji: "針", sens: "aiguille", On: "Shin", kun: "hari", hira: "はり", kata: "シン"},
    {kanji: "細", sens: "mince, fin", On: "Sai", kun: "hosoi ; komakai", hira: "ほそい, こまかい", kata: "サイ"},
    {kanji: "券", sens: "ticket, billet", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "机", sens: "bureau", On: "Ki", kun: "tsukue", hira: "つくえ", kata: "キ"},
    {kanji: "香", sens: "parfum", On: "Kou ; Kyou", kun: "kaori", hira: "かおり", kata: "コウ, キョウ"},
    {kanji: "械", sens: "machine, appareil", On: "Kai", kun: "kase", hira: "かせ", kata: "カイ"},
    {kanji: "焼", sens: "cuire, brûler", On: "Shou", kun: "yaku", hira: "やく", kata: "ショウ"},
    {kanji: "劇", sens: "drame, pièce", On: "Geki", kun: "", hira: "", kata: "ゲキ"},
    {kanji: "幼", sens: "enfance", On: "You", kun: "osanai", hira: "おさない", kata: "ヨウ"},
    {kanji: "裏", sens: "dos, envers", On: "Ri", kun: "ura", hira: "うら", kata: "リ"},
    {kanji: "補", sens: "compléter", On: "Ho", kun: "oginau", hira: "おぎなう", kata: "ホ"},
    {kanji: "革", sens: "cuir", On: "Kaku", kun: "kawa", hira: "かわ", kata: "カク"},
    {kanji: "型", sens: "modèle, type", On: "Kei", kun: "kata", hira: "かた", kata: "ケイ"},
    {kanji: "材", sens: "matériau, talent", On: "Zai", kun: "", hira: "", kata: "ザイ"},
    {kanji: "普", sens: "universel, ordinaire", On: "Fu", kun: "amaneku", hira: "あまねく", kata: "フ"},
    {kanji: "齢", sens: "âge", On: "Rei", kun: "yowai", hira: "よわい", kata: "レイ"},
    {kanji: "了", sens: "complet, fin", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "極", sens: "pôle, extrême", On: "Kyoku ; Goku", kun: "kiwameru", hira: "きわめる", kata: "キョク, ゴク"},
    {kanji: "勢", sens: "force, énergie", On: "Sei", kun: "ikioi", hira: "いきおい", kata: "セイ"},
    {kanji: "陸", sens: "terre", On: "Riku", kun: "", hira: "", kata: "リク"},
    {kanji: "損", sens: "perte, dommage", On: "Son", kun: "sokonau", hira: "そこなう", kata: "ソン"},
    {kanji: "階", sens: "étage, marche", On: "Kai", kun: "kizahashi", hira: "きざはし", kata: "カイ"},
    {kanji: "帯", sens: "ceinture, zone", On: "Tai", kun: "obi ; obiru", hira: "おび, おびる", kata: "タイ"},
    {kanji: "層", sens: "couche, strate", On: "Sou", kun: "", hira: "", kata: "ソウ"},
    {kanji: "貯", sens: "épargner", On: "Cho", kun: "takuwaeru", hira: "たくわえる", kata: "チョ"},
    {kanji: "汚", sens: "sale, polluer", On: "O", kun: "kitanai ; yogoreru", hira: "きたない, よごれる", kata: "オ"},
    {kanji: "兆", sens: "signe, billion", On: "Chou", kun: "kizashi", hira: "きざし", kata: "チョウ"},
    {kanji: "移", sens: "déplacer", On: "I", kun: "utsuru", hira: "うつる", kata: "イ"},
    {kanji: "税", sens: "taxe, impôt", On: "Zei", kun: "", hira: "", kata: "ゼイ"},
    {kanji: "績", sens: "succès, filage", On: "Seki", kun: "", hira: "", kata: "セキ"},
    {kanji: "延", sens: "prolonger", On: "En", kun: "nobasu", hira: "のばす", kata: "エン"},
    {kanji: "紅", sens: "rouge cramoisi", On: "Kou ; Ku", kun: "beni ; kurenai", hira: "べに, くれない", kata: "コウ, ク"},
    {kanji: "坂", sens: "pente, colline", On: "Han", kun: "saka", hira: "さか", kata: "ハン"},
    {kanji: "省", sens: "réfléchir, omettre, ministère", On: "Sei ; Shou", kun: "kaerimiru ; habuku", hira: "かえりみる, はぶく", kata: "セイ, ショウ"},
    {kanji: "造", sens: "créer, fabriquer", On: "Zou", kun: "tsukuru", hira: "つくる", kata: "ゾウ"},
    {kanji: "党", sens: "parti (politique)", On: "Tou", kun: "", hira: "", kata: "トウ"},
    {kanji: "震", sens: "trembler", On: "Shin", kun: "furueru", hira: "ふるえる", kata: "シン"},
    {kanji: "硬", sens: "dur", On: "Kou", kun: "katai", hira: "かたい", kata: "コウ"},
    {kanji: "承", sens: "accepter, écouter", On: "Shou", kun: "uketamawaru", hira: "うけたまわる", kata: "ショウ"},
    {kanji: "灰", sens: "cendre", On: "Kai", kun: "hai", hira: "はい", kata: "カイ"},
    {kanji: "砂", sens: "sable", On: "Sa ; Sha", kun: "suna", hira: "すな", kata: "サ, シャ"},
    {kanji: "栄", sens: "prospérer, gloire", On: "Ei", kun: "sakaeru", hira: "さかえる", kata: "エイ"},
    {kanji: "蔵", sens: "grenier, posséder", On: "Zou", kun: "kura", hira: "くら", kata: "ゾウ"},
// ------------------JLPT N2 Groupe 6-------------------
    {kanji: "悩", sens: "s'inquiéter", On: "Nou", kun: "nayamu", hira: "なやむ", kata: "ノウ"},
    {kanji: "快", sens: "agréable, rapide", On: "Kai", kun: "kokoroyoi", hira: "こころよい", kata: "カイ"},
    {kanji: "旧", sens: "ancien, vieux", On: "Kyuu", kun: "furui", hira: "ふるい", kata: "キュウ"},
    {kanji: "貿", sens: "commerce", On: "Bou", kun: "", hira: "", kata: "ボウ"},
    {kanji: "甘", sens: "doux, sucré", On: "Kan", kun: "amai", hira: "あまい", kata: "カン"},
    {kanji: "録", sens: "enregistrer", On: "Roku", kun: "", hira: "", kata: "ロク"},
    {kanji: "厚", sens: "épais", On: "Kou", kun: "atsui", hira: "あつい", kata: "コウ"},
    {kanji: "輸", sens: "transporter", On: "Yu", kun: "", hira: "", kata: "ユ"},
    {kanji: "混", sens: "mélanger", On: "Kon", kun: "mazeru", hira: "まぜる", kata: "コン"},
    {kanji: "贈", sens: "offrir, cadeau", On: "Zou ; Sou", kun: "okuru", hira: "おくる", kata: "ゾウ, ソウ"},
    {kanji: "袋", sens: "sac", On: "Tai", kun: "fukuro", hira: "ふくろ", kata: "タイ"},
    {kanji: "圧", sens: "pression", On: "Atsu", kun: "", hira: "", kata: "アツ"},
    {kanji: "減", sens: "diminuer", On: "Gen", kun: "heru ; herasu", hira: "へる, へらす", kata: "ゲン"},
    {kanji: "略", sens: "abréviation", On: "Ryaku", kun: "", hira: "", kata: "リャク"},
    {kanji: "耕", sens: "cultiver", On: "Kou", kun: "tagayasu", hira: "たがやす", kata: "コウ"},
    {kanji: "捨", sens: "jeter", On: "Sha", kun: "suteru", hira: "すてる", kata: "シャ"},
    {kanji: "臓", sens: "organe", On: "Zou", kun: "harawata", hira: "はらわた", kata: "ゾウ"},
    {kanji: "伸", sens: "s'étirer", On: "Shin", kun: "nobasu", hira: "のばす", kata: "シン"},
    {kanji: "肩", sens: "épaule", On: "Ken", kun: "kata", hira: "かた", kata: "ケン"},
    {kanji: "泊", sens: "passer la nuit", On: "Haku", kun: "tomaru", hira: "とまる", kata: "ハク"},
    {kanji: "枯", sens: "se faner", On: "Ko", kun: "kareru", hira: "かれる", kata: "コ"},
    {kanji: "暴", sens: "violence", On: "Bou ; Baku", kun: "abareru", hira: "あばれる", kata: "ボウ, バク"},
    {kanji: "販", sens: "vendre", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "駐", sens: "résider, stationner", On: "Chuu", kun: "", hira: "", kata: "チュウ"},
    {kanji: "紹", sens: "présenter", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "額", sens: "front, montant", On: "Gaku", kun: "hitai", hira: "ひたい", kata: "ガク"},
    {kanji: "郊", sens: "banlieue", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "召", sens: "appeler, manger (honorifique)", On: "Shou", kun: "mesu", hira: "めす", kata: "ショウ"},
    {kanji: "菓", sens: "confiserie", On: "Ka", kun: "", hira: "", kata: "カ"},
    {kanji: "含", sens: "inclure", On: "Gan", kun: "fukumu", hira: "ふくむ", kata: "ガン"},
    {kanji: "超", sens: "dépasser, super-", On: "Chou", kun: "koeru", hira: "こえる", kata: "チョウ"},
    {kanji: "辛", sens: "épicé, difficile", On: "Shin", kun: "karai ; tsurai", hira: "からい, つらい", kata: "シン"},
    {kanji: "濯", sens: "laver", On: "Taku", kun: "susugu", hira: "すすぐ", kata: "タク"},
    {kanji: "総", sens: "général, total", On: "Sou", kun: "subete", hira: "すべて", kata: "ソウ"},
    {kanji: "豊", sens: "abondant", On: "Hou", kun: "yutaka", hira: "ゆたか", kata: "ホウ"},
    {kanji: "棒", sens: "bâton", On: "Bou", kun: "", hira: "", kata: "ボウ"},
    {kanji: "薄", sens: "mince, pâle", On: "Haku", kun: "usui", hira: "うすい", kata: "ハク"},
    {kanji: "双", sens: "paire", On: "Sou", kun: "futa", hira: "ふた", kata: "ソウ"},
    {kanji: "刺", sens: "poignarder, piquer", On: "Shi", kun: "sasu", hira: "さす", kata: "シ"},
    {kanji: "符", sens: "signe, marque", On: "Fu", kun: "", hira: "", kata: "フ"},
    {kanji: "雇", sens: "employer", On: "Ko", kun: "yatou", hira: "やとう", kata: "コ"},
    {kanji: "埋", sens: "enterrer", On: "Mai", kun: "umeru", hira: "うめる", kata: "マイ"},
    {kanji: "封", sens: "sceller", On: "Fuu ; Hou", kun: "", hira: "", kata: "フウ, ホウ"},
    {kanji: "凍", sens: "geler", On: "Tou", kun: "kooru", hira: "こおる", kata: "トウ"},
    {kanji: "肌", sens: "peau", On: "Ki", kun: "hada", hira: "はだ", kata: "キ"},
    {kanji: "被", sens: "subir, recouvrir", On: "Hi", kun: "koumuru", hira: "こうむる", kata: "ヒ"},
// ------------------JLPT N2 Groupe 7-------------------
    {kanji: "般", sens: "généralement", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "巨", sens: "géant", On: "Kyo", kun: "", hira: "", kata: "キョ"},
    {kanji: "詰", sens: "bourrer, emballer", On: "Kitsu", kun: "tsumeru", hira: "つめる", kata: "キツ"},
    {kanji: "荒", sens: "rude, sauvage", On: "Kou", kun: "arai", hira: "あらい", kata: "コウ"},
    {kanji: "賢", sens: "sage", On: "Ken", kun: "kashikoi", hira: "かしこい", kata: "ケン"},
    {kanji: "腕", sens: "bras", On: "Wan", kun: "ude", hira: "うで", kata: "ワン"},
    {kanji: "殿", sens: "palais, seigneur", On: "Den ; Ten", kun: "tono", hira: "との", kata: "デン, テン"},
    {kanji: "零", sens: "zéro", On: "Rei", kun: "kobosere", hira: "こぼせれ", kata: "レイ"},
    {kanji: "恋", sens: "amour", On: "Ren", kun: "koi", hira: "こい", kata: "レン"},
    {kanji: "療", sens: "traiter, guérir", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "募", sens: "recruter", On: "Bo", kun: "tsunoru", hira: "つのる", kata: "ボ"},
    {kanji: "腰", sens: "hanche", On: "You", kun: "koshi", hira: "こし", kata: "ヨウ"},
    {kanji: "匹", sens: "compteur pour animaux", On: "Hitsu", kun: "hiki", hira: "ひき", kata: "ヒツ"},
    {kanji: "乾", sens: "sécher", On: "Kan", kun: "kawaku", hira: "かわく", kata: "カン"},
    {kanji: "脂", sens: "graisse", On: "Shi", kun: "abura", hira: "あぶら", kata: "シ"},
    {kanji: "欧", sens: "Europe", On: "Ou", kun: "", hira: "", kata: "オウ"},
    {kanji: "湾", sens: "baie", On: "Wan", kun: "irie", hira: "いりえ", kata: "ワン"},
    {kanji: "捜", sens: "chercher", On: "Sou", kun: "sagasu", hira: "さがす", kata: "ソウ"},
    {kanji: "介", sens: "intervenir, aide", On: "Kai", kun: "", hira: "", kata: "カイ"},
    {kanji: "磨", sens: "polir", On: "Ma", kun: "migaku", hira: "みがく", kata: "マ"},
    {kanji: "筒", sens: "cylindre, tube", On: "Tou", kun: "tsutsu", hira: "つつ", kata: "トウ"},
    {kanji: "膚", sens: "peau", On: "Fu", kun: "", hira: "", kata: "フ"},
    {kanji: "憎", sens: "haïr", On: "Zou", kun: "nikumu", hira: "にくむ", kata: "ゾウ"},
    {kanji: "畜", sens: "bétail", On: "Chiku", kun: "", hira: "", kata: "チク"},
    {kanji: "況", sens: "situation", On: "Kyou", kun: "", hira: "", kata: "キョウ"},
    {kanji: "依", sens: "dépendre de", On: "I ; E", kun: "yoru", hira: "よる", kata: "イ, エ"},
    {kanji: "柔", sens: "souple, doux", On: "Juu ; Nyuu", kun: "yawarakai", hira: "やわらかい", kata: "ジュウ, ニュウ"},
    {kanji: "軟", sens: "mou", On: "Nan", kun: "yawarakai", hira: "やわらかい", kata: "ナン"},
    {kanji: "珍", sens: "rare", On: "Chin", kun: "mezurashii", hira: "めずらしい", kata: "チン"},
    {kanji: "汗", sens: "sueur", On: "Kan", kun: "ase", hira: "あせ", kata: "カン"},
    {kanji: "隅", sens: "coin", On: "Guu", kun: "sumi", hira: "すみ", kata: "グウ"},
    {kanji: "帽", sens: "chapeau", On: "Bou", kun: "", hira: "", kata: "ボウ"},
    {kanji: "敬", sens: "respecter", On: "Kei", kun: "uyamau", hira: "うやまう", kata: "ケイ"},
    {kanji: "諸", sens: "divers", On: "Sho", kun: "moromoro", hira: "もろもろ", kata: "ショ"},
    {kanji: "幅", sens: "largeur", On: "Fuku", kun: "haba", hira: "はば", kata: "フク"},
    {kanji: "絡", sens: "emmêler, lier", On: "Raku", kun: "karamu", hira: "からむ", kata: "ラク"},
    {kanji: "泥", sens: "boue", On: "Dei", kun: "doro", hira: "どろ", kata: "デイ"},
    {kanji: "姓", sens: "nom de famille", On: "Sei ; Shou", kun: "", hira: "", kata: "セイ, ショウ"},
    {kanji: "曇", sens: "s'ennuager", On: "Don", kun: "kumoru", hira: "くもる", kata: "ドン"},
    {kanji: "触", sens: "toucher", On: "Shoku", kun: "fureru", hira: "ふれる", kata: "ショク"},
    {kanji: "鋭", sens: "tranchant, aigu", On: "Ei", kun: "surudoi", hira: "するどい", kata: "エイ"},
    {kanji: "叫", sens: "crier", On: "Kyou", kun: "sakebu", hira: "さけぶ", kata: "キョウ"},
    {kanji: "祈", sens: "prier", On: "Ki", kun: "inoru", hira: "いのる", kata: "キ"},
    {kanji: "咲", sens: "fleurir", On: "Shou", kun: "saku", hira: "さく", kata: "ショウ"},
    {kanji: "畳", sens: "tatami, plier", On: "Jou", kun: "tatami", hira: "たたみ", kata: "ジョウ"},
    {kanji: "塔", sens: "tour, pagode", On: "Tou", kun: "", hira: "", kata: "トウ"},
// ------------------JLPT N2 Groupe 8-------------------
    {kanji: "涼", sens: "frais", On: "Ryou", kun: "suzushii", hira: "すずしい", kata: "リョウ"},
    {kanji: "舟", sens: "petit bateau", On: "Shuu", kun: "fune", hira: "ふね", kata: "シュウ"},
    {kanji: "肯", sens: "affirmer", On: "Kou", kun: "unazuku", hira: "うなずく", kata: "コウ"},
    {kanji: "燥", sens: "sec", On: "Sou", kun: "hasyagu", hira: "はしゃぐ", kata: "ソウ"},
    {kanji: "挟", sens: "pincer, insérer", On: "Kyou", kun: "hasamu", hira: "はさむ", kata: "キョウ"},
    {kanji: "昇", sens: "monter", On: "Shou", kun: "noboru", hira: "のぼる", kata: "ショウ"},
    {kanji: "傾", sens: "incliner", On: "Kei", kun: "katamuku", hira: "かたむく", kata: "ケイ"},
    {kanji: "奥", sens: "intérieur, fond", On: "Ou", kun: "oku", hira: "おく", kata: "オウ"},
    {kanji: "濃", sens: "concentré, sombre", On: "Nou", kun: "koi", hira: "こい", kata: "ノウ"},
    {kanji: "蒸", sens: "vapeur", On: "Jou", kun: "musu", hira: "むす", kata: "ジョウ"},
    {kanji: "替", sens: "remplacer", On: "Tai", kun: "kaeru", hira: "かえる", kata: "タイ"},
    {kanji: "掃", sens: "balayer", On: "Sou", kun: "haku", hira: "はく", kata: "ソウ"},
    {kanji: "踊", sens: "danser", On: "You", kun: "odoru", hira: "おどる", kata: "ヨウ"},
    {kanji: "喫", sens: "consommer, boire", On: "Kitsu", kun: "nomu", hira: "のむ", kata: "キツ"},
    {kanji: "溶", sens: "fondre, dissoudre", On: "You", kun: "tokeru", hira: "とける", kata: "ヨウ"},
    {kanji: "換", sens: "échanger", On: "Kan", kun: "kaeru", hira: "かえる", kata: "カン"},
    {kanji: "床", sens: "lit, plancher", On: "Shou", kun: "yuka ; toko", hira: "ゆか, とこ", kata: "ショウ"},
    {kanji: "掘", sens: "creuser", On: "Kutsu", kun: "horu", hira: "ほる", kata: "クツ"},
    {kanji: "涙", sens: "larme", On: "Rui", kun: "namida", hira: "なみだ", kata: "ルイ"},
    {kanji: "塗", sens: "peindre, enduire", On: "To", kun: "nuru", hira: "ぬる", kata: "ト"},
    {kanji: "軒", sens: "avant-toit", On: "Ken", kun: "noki", hira: "のき", kata: "ケン"},
    {kanji: "沈", sens: "couler, sombrer", On: "Chin", kun: "shizumu", hira: "しずむ", kata: "チン"},
    {kanji: "鈍", sens: "émoussé, lent", On: "Don", kun: "nibui", hira: "にぶい", kata: "ドン"},
    {kanji: "滴", sens: "goutte", On: "Teki", kun: "shizuku", hira: "しずく", kata: "テキ"},
    {kanji: "伺", sens: "demander (humble)", On: "Shi", kun: "ukagau", hira: "うかがう", kata: "シ"},
    {kanji: "湿", sens: "humide", On: "Shitsu", kun: "shimeru", hira: "しめる", kata: "シツ"},
    {kanji: "粒", sens: "grain", On: "Ryuu", kun: "tsubu", hira: "つぶ", kata: "リュウ"},
    {kanji: "沸", sens: "bouillir", On: "Futsu", kun: "waku", hira: "わく", kata: "フツ"},
    {kanji: "患", sens: "maladie", On: "Kan", kun: "wazurau", hira: "わずらう", kata: "カン"},
    {kanji: "林", sens: "bois", On: "Rin", kun: "hayashi", hira: "はやし", kata: "リン"},
    {kanji: "村", sens: "village", On: "Son", kun: "mura", hira: "むら", kata: "ソン"},
    {kanji: "森", sens: "forêt", On: "Shin", kun: "mori", hira: "もり", kata: "シン"},
    {kanji: "弱", sens: "faible", On: "Jaku", kun: "yowai", hira: "よわい", kata: "ジャク"},
    {kanji: "池", sens: "étang", On: "Chi", kun: "ike", hira: "いけ", kata: "チ"},
    {kanji: "門", sens: "portail", On: "Mon", kun: "kado", hira: "かど", kata: "モン"},
    {kanji: "区", sens: "arrondissement", On: "Ku", kun: "", hira: "", kata: "ク"},
    {kanji: "県", sens: "préfecture", On: "Ken", kun: "kakeru", hira: "かける", kata: "ケン"},
    {kanji: "短", sens: "court", On: "Tan", kun: "mijikai", hira: "みじかい", kata: "タン"},
    {kanji: "軽", sens: "léger", On: "Kei", kun: "karui", hira: "かるい", kata: "ケイ"},
    {kanji: "低", sens: "bas", On: "Tei", kun: "hikui", hira: "ひくい", kata: "テイ"},
    {kanji: "菜", sens: "légume", On: "Sai", kun: "na", hira: "な", kata: "サイ"},
    {kanji: "籍", sens: "registre", On: "Seki", kun: "", hira: "", kata: "セキ"},
    {kanji: "跡", sens: "trace", On: "Seki", kun: "ato", hira: "あと", kata: "セキ"},
    {kanji: "瓶", sens: "bouteille", On: "Bin", kun: "kame", hira: "かめ", kata: "ビン"},
    {kanji: "缶", sens: "boîte de conserve", On: "Kan", kun: "kama", hira: "かま", kata: "カン"},
    {kanji: "隻", sens: "navire (compteur)", On: "Seki", kun: "", hira: "", kata: "セキ"},
    // ------------------JLPT N1 Groupe 1-------------------
    {kanji: "汽", sens: "vapeur", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "第", sens: "numéro, rang", On: "Dai", kun: "", hira: "", kata: "ダイ"},
    {kanji: "昭", sens: "lumineux", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "丁", sens: "quartier, compteur", On: "Chou ; Tei", kun: "", hira: "", kata: "チョウ, テイ"},
    {kanji: "詩", sens: "poème", On: "Shi", kun: "", hira: "", kata: "シ"},
    {kanji: "帳", sens: "registre", On: "Chou", kun: "", hira: "", kata: "チョウ"},
    {kanji: "功", sens: "mérite, succès", On: "Kou ; Ku", kun: "", hira: "", kata: "コウ, ク"},
    {kanji: "街", sens: "rue, ville", On: "Gai ; Kai", kun: "machi", hira: "まち", kata: "ガイ, カイ"},
    {kanji: "桜", sens: "cerisier", On: "Ou", kun: "sakura", hira: "さくら", kata: "オウ"},
    {kanji: "票", sens: "vote, billet", On: "Hyou", kun: "", hira: "", kata: "ヒョウ"},
    {kanji: "批", sens: "critique", On: "Hi", kun: "", hira: "", kata: "ヒ"},
    {kanji: "健", sens: "santé", On: "Ken", kun: "sukoyaka", hira: "すこやか", kata: "ケン"},
    {kanji: "授", sens: "enseigner, accorder", On: "Ju", kun: "sazukeru ; sazukaru", hira: "さずける, さずかる", kata: "ジュ"},
    {kanji: "泣", sens: "pleurer", On: "Kyuu", kun: "naku", hira: "なく", kata: "キュウ"},
    {kanji: "銭", sens: "monnaie", On: "Sen", kun: "zeni", hira: "ぜに", kata: "セン"},
    {kanji: "宙", sens: "espace, air", On: "Chuu", kun: "", hira: "", kata: "チュウ"},
    {kanji: "我", sens: "je, moi", On: "Ga", kun: "ware ; wa", hira: "われ, わ", kata: "ガ"},
    {kanji: "結", sens: "lier, conclure", On: "Ketsu", kun: "musubu ; yuu", hira: "むすぶ, ゆう", kata: "ケツ"},
    {kanji: "張", sens: "étirer, tendre", On: "Chou", kun: "haru", hira: "はる", kata: "チョウ"},
    {kanji: "墓", sens: "tombe", On: "Bo", kun: "haka", hira: "はか", kata: "ボ"},
    {kanji: "義", sens: "justice, honneur", On: "Gi", kun: "", hira: "", kata: "ギ"},
    {kanji: "志", sens: "volonté, ambition", On: "Shi", kun: "kokorozashi ; kokorozasu", hira: "こころざし, こころざす", kata: "シ"},
    {kanji: "忠", sens: "loyauté", On: "Chuu", kun: "", hira: "", kata: "チュウ"},
    {kanji: "節", sens: "saison, nœud", On: "Setsu ; Sechi", kun: "fushi", hira: "ふし", kata: "セツ, セチ"},
    {kanji: "案", sens: "idée, plan", On: "An", kun: "", hira: "", kata: "アン"},
    {kanji: "倉", sens: "entrepôt", On: "Sou", kun: "kura", hira: "くら", kata: "ソウ"},
    {kanji: "梅", sens: "prune, prunier", On: "Bai", kun: "ume", hira: "うめ", kata: "バイ"},
    {kanji: "皇", sens: "empereur", On: "Kou ; Ou", kun: "", hira: "", kata: "コウ, オウ"},
    {kanji: "源", sens: "source", On: "Gen", kun: "minamoto", hira: "みなもと", kata: "ゲン"},
    {kanji: "修", sens: "étudier, réparer", On: "Shuu ; Shu", kun: "osameru ; osamaru", hira: "おさめる, おさまる", kata: "シュウ, シュ"},
    {kanji: "災", sens: "désastre", On: "Sai", kun: "wazawai", hira: "わざわい", kata: "サイ"},
    {kanji: "宮", sens: "palais", On: "Kyuu ; Guu ; Ku", kun: "miya", hira: "みや", kata: "キュウ, グウ, ク"},
    {kanji: "康", sens: "paix, santé", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "弁", sens: "discours, valve", On: "Ben", kun: "", hira: "", kata: "ベン"},
    {kanji: "飼", sens: "élever (animal)", On: "Shi", kun: "kau", hira: "かう", kata: "シ"},
    {kanji: "密", sens: "secret, dense", On: "Mitsu", kun: "", hira: "", kata: "ミツ"},
    {kanji: "障", sens: "obstacle", On: "Shou", kun: "sawaru", hira: "さわる", kata: "ショウ"},
    {kanji: "旗", sens: "drapeau", On: "Ki", kun: "hata", hira: "はた", kata: "キ"},
    {kanji: "故", sens: "ancien, cause", On: "Ko", kun: "yue", hira: "ゆえ", kata: "コ"},
    {kanji: "肺", sens: "poumon", On: "Hai", kun: "", hira: "", kata: "ハイ"},
    {kanji: "価", sens: "valeur, prix", On: "Ka", kun: "atai", hira: "あたい", kata: "カ"},
    {kanji: "敵", sens: "ennemi", On: "Teki", kun: "kataki", hira: "かたき", kata: "テキ"},
    {kanji: "救", sens: "sauver", On: "Kyuu", kun: "sukuu", hira: "すくう", kata: "キュウ"},
    {kanji: "脈", sens: "veine, pouls", On: "Myaku", kun: "", hira: "", kata: "ミャク"},
    {kanji: "腸", sens: "intestin", On: "Chou", kun: "harawata", hira: "はらわた", kata: "チョウ"},
    {kanji: "芽", sens: "bourgeon", On: "Ga", kun: "me", hira: "め", kata: "ガ"},
    {kanji: "染", sens: "teindre", On: "Sen", kun: "someru ; somaru ; shimiru", hira: "そめる, そまる, しみる", kata: "セン"},
    {kanji: "系", sens: "système, lignée", On: "Kei", kun: "", hira: "", kata: "ケイ"},
    {kanji: "博", sens: "vaste, exposition", On: "Haku ; Baku", kun: "", hira: "", kata: "ハク, バク"},
    {kanji: "磁", sens: "magnétisme", On: "Ji", kun: "", hira: "", kata: "ジ"},
    {kanji: "宗", sens: "religion, secte", On: "Shuu ; Sou", kun: "mune", hira: "むね", kata: "シュウ, ソウ"},
    {kanji: "尺", sens: "règle, mesure", On: "Shaku", kun: "", hira: "", kata: "シャク"},
    {kanji: "鏡", sens: "miroir", On: "Kyou", kun: "kagami", hira: "かがみ", kata: "キョウ"},
    {kanji: "恩", sens: "grâce, faveur", On: "On", kun: "", hira: "", kata: "オン"},
    {kanji: "模", sens: "modèle, imitation", On: "Mo ; Bo", kun: "", hira: "", kata: "モ, ボ"},
    {kanji: "巣", sens: "nid", On: "Sou", kun: "su", hira: "す", kata: "ソウ"},
    {kanji: "紀", sens: "chronique, ère", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "俳", sens: "haïku, acteur", On: "Hai", kun: "", hira: "", kata: "ハイ"},
    {kanji: "孝", sens: "piété filiale", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "器", sens: "récipient, instrument", On: "Ki", kun: "utsuwa", hira: "うつわ", kata: "キ"},
    {kanji: "牧", sens: "pâturage", On: "Boku", kun: "maki", hira: "まき", kata: "ボク"},
    {kanji: "句", sens: "phrase, vers", On: "Ku", kun: "", hira: "", kata: "ク"},
    {kanji: "往", sens: "aller, passé", On: "Ou", kun: "", hira: "", kata: "オウ"},
    {kanji: "製", sens: "fabriquer", On: "Sei", kun: "", hira: "", kata: "セイ"},
    {kanji: "評", sens: "évaluer, critiquer", On: "Hyou", kun: "", hira: "", kata: "ヒョウ"},
    {kanji: "奏", sens: "jouer (musique)", On: "Sou", kun: "kanaderu", hira: "かなでる", kata: "ソウ"},
    {kanji: "径", sens: "diamètre, chemin", On: "Kei", kun: "michi", hira: "みち", kata: "ケイ"},
    {kanji: "益", sens: "bénéfice, profit", On: "Eki ; Yaku", kun: "", hira: "", kata: "エキ, ヤク"},
    {kanji: "興", sens: "intérêt, prospérer", On: "Kyou ; Kou", kun: "okoru ; okosu", hira: "おこる, おこす", kata: "キョウ, コウ"},
    {kanji: "舎", sens: "hutte, bâtiment", On: "Sha", kun: "", hira: "", kata: "シャ"},
    {kanji: "暖", sens: "chaud, se réchauffer", On: "Dan", kun: "atatakai ; atatamaru", hira: "あたたかい, あたたまる", kata: "ダン"},
    {kanji: "蚕", sens: "ver à soie", On: "San ; Ten", kun: "kaiko", hira: "かいこ", kata: "サン, テン"},
    {kanji: "衆", sens: "masses, peuple", On: "Shuu ; Shu", kun: "ooi", hira: "おおい", kata: "シュウ, シュ"},
    {kanji: "標", sens: "marque, signe", On: "Hyou", kun: "", hira: "", kata: "ヒョウ"},
    {kanji: "織", sens: "tisser", On: "Shoku ; Shiki", kun: "oru", hira: "おる", kata: "ショク, シキ"},
    {kanji: "仁", sens: "humanité, vertu", On: "Jin ; Ni ; Nin", kun: "", hira: "", kata: "ジン, ニ, ニン"},
    {kanji: "派", sens: "faction, groupe", On: "Ha", kun: "", hira: "", kata: "ハ"},
    {kanji: "素", sens: "élémentaire, principe", On: "So ; Su", kun: "moto", hira: "もと", kata: "ソ, ス"},
    {kanji: "潮", sens: "marée", On: "Chou", kun: "shio", hira: "しお", kata: "チョウ"},
    {kanji: "看", sens: "veiller sur", On: "Kan", kun: "miru", hira: "みる", kata: "カン"},
    {kanji: "糖", sens: "sucre", On: "Tou", kun: "", hira: "", kata: "トウ"},
    {kanji: "郡", sens: "comté, district", On: "Gun", kun: "", hira: "", kata: "グン"},
    {kanji: "松", sens: "pin", On: "Shou", kun: "matsu", hira: "まつ", kata: "ショウ"},
    {kanji: "独", sens: "seul, Allemagne", On: "Doku", kun: "hitori", hira: "ひとり", kata: "ドク"},
    {kanji: "創", sens: "créer, blessure", On: "Sou", kun: "tsukuru", hira: "つくる", kata: "ソウ"},
    {kanji: "激", sens: "violent, extrême", On: "Geki", kun: "hageshii", hira: "はげしい", kata: "ゲキ"},
    {kanji: "穀", sens: "céréale", On: "Koku", kun: "", hira: "", kata: "コク"},
    {kanji: "隊", sens: "troupe, équipe", On: "Tai", kun: "", hira: "", kata: "タイ"},
    {kanji: "縮", sens: "rétrécir", On: "Shuku", kun: "chijimu ; chijimeru", hira: "ちぢむ, ちぢめる", kata: "シュク"},
    {kanji: "司", sens: "diriger, administrer", On: "Shi", kun: "tsukasadoru", hira: "つかさどる", kata: "シ"},
    {kanji: "検", sens: "examiner", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "樹", sens: "arbre, bois", On: "Ju", kun: "ki", hira: "き", kata: "ジュ"},
    {kanji: "盟", sens: "alliance, serment", On: "Mei", kun: "", hira: "", kata: "メイ"},
// ------------------JLPT N1 Groupe 2-------------------
    {kanji: "絹", sens: "soie", On: "Ken", kun: "kinu", hira: "きぬ", kata: "ケン"},
    {kanji: "挙", sens: "élever, nommer", On: "Kyo", kun: "ageru ; agaru", hira: "あげる, あがる", kata: "キョ"},
    {kanji: "眼", sens: "œil", On: "Gan ; Gen", kun: "manako", hira: "まなこ", kata: "ガン, ゲン"},
    {kanji: "傷", sens: "blessure", On: "Shou", kun: "kizu ; itamu", hira: "きず, いたむ", kata: "ショウ"},
    {kanji: "善", sens: "bonté, vertu", On: "Zen", kun: "yoi", hira: "よい", kata: "ゼン"},
    {kanji: "朗", sens: "clair, serein", On: "Rou", kun: "hogaraka", hira: "ほがらか", kata: "ロウ"},
    {kanji: "郷", sens: "village natal", On: "Kyou ; Gou", kun: "sato", hira: "さと", kata: "キョウ, ゴウ"},
    {kanji: "展", sens: "déployer, étendre", On: "Ten", kun: "", hira: "", kata: "テン"},
    {kanji: "幕", sens: "rideau, acte", On: "Maku ; Baku", kun: "", hira: "", kata: "マク, バク"},
    {kanji: "臨", sens: "affronter, assister", On: "Rin", kun: "nozomu", hira: "のぞむ", kata: "リン"},
    {kanji: "賀", sens: "félicitations", On: "Ga", kun: "", hira: "", kata: "ガ"},
    {kanji: "訳", sens: "traduction, raison", On: "Yaku", kun: "wake", hira: "わけ", kata: "ヤク"},
    {kanji: "推", sens: "déduire, pousser", On: "Sui", kun: "osu", hira: "おす", kata: "スイ"},
    {kanji: "策", sens: "plan, stratégie", On: "Saku", kun: "", hira: "", kata: "サク"},
    {kanji: "唱", sens: "chanter, réciter", On: "Shou", kun: "tonaeru", hira: "となえる", kata: "ショウ"},
    {kanji: "射", sens: "tirer (arme)", On: "Sha", kun: "iru", hira: "いる", kata: "シャ"},
    {kanji: "揮", sens: "manier, exercer", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "覧", sens: "voir, regarder", On: "Ran", kun: "miru", hira: "みる", kata: "ラン"},
    {kanji: "鋼", sens: "acier", On: "Kou", kun: "hagane", hira: "はがね", kata: "コウ"},
    {kanji: "整", sens: "arranger, préparer", On: "Sei", kun: "totonoeru ; totonou", hira: "ととのえる, ととのう", kata: "セイ"},
    {kanji: "仮", sens: "provisoire, faux", On: "Ka ; Ke", kun: "kari", hira: "かり", kata: "カ, ケ"},
    {kanji: "后", sens: "impératrice", On: "Kou ; Go", kun: "kisaki", hira: "きさき", kata: "コウ, ゴ"},
    {kanji: "討", sens: "attaquer, débattre", On: "Tou", kun: "utsu", hira: "うつ", kata: "トウ"},
    {kanji: "閣", sens: "tour, cabinet", On: "Kaku", kun: "", hira: "", kata: "カク"},
    {kanji: "憲", sens: "constitution, loi", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "沿", sens: "longer, suivre", On: "En", kun: "sou", hira: "そう", kata: "エン"},
    {kanji: "厳", sens: "strict, sévère", On: "Gen ; Gon", kun: "kibishii ; ogosoka", hira: "きびしい, おごそか", kata: "ゲン, ゴン"},
    {kanji: "基", sens: "base, fondation", On: "Ki", kun: "moto ; motozuku", hira: "もと, もとづく", kata: "キ"},
    {kanji: "提", sens: "présenter, tenir", On: "Tei", kun: "sageru", hira: "さげる", kata: "テイ"},
    {kanji: "養", sens: "nourrir, élever", On: "You", kun: "yashinau", hira: "やしなう", kata: "ヨウ"},
    {kanji: "応", sens: "répondre, accepter", On: "Ou", kun: "kotaeru", hira: "こたえる", kata: "オウ"},
    {kanji: "級", sens: "classe, rang", On: "Kyuu", kun: "", hira: "", kata: "キュウ"},
    {kanji: "序", sens: "ordre, préface", On: "Jo", kun: "", hira: "", kata: "ジョ"},
    {kanji: "徳", sens: "vertu, moralité", On: "Toku", kun: "", hira: "", kata: "トク"},
    {kanji: "率", sens: "ratio, mener", On: "Sotsu ; Ritsu", kun: "hikiiru", hira: "ひきいる", kata: "ソツ, リツ"},
    {kanji: "護", sens: "protéger", On: "Go", kun: "mamoru", hira: "まもる", kata: "ゴ"},
    {kanji: "典", sens: "code, cérémonie", On: "Ten", kun: "", hira: "", kata: "テン"},
    {kanji: "奮", sens: "exciter, s'efforcer", On: "Fun", kun: "furuu", hira: "ふるう", kata: "フン"},
    {kanji: "姿", sens: "forme, apparence", On: "Shi", kun: "sugata", hira: "すがた", kata: "シ"},
    {kanji: "条", sens: "article, rayon", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "筋", sens: "muscle, logique", On: "Kin", kun: "suji", hira: "すじ", kata: "キン"},
    {kanji: "属", sens: "appartenir", On: "Zoku", kun: "", hira: "", kata: "ゾク"},
    {kanji: "聖", sens: "saint, sacré", On: "Sei", kun: "hijiri", hira: "ひじり", kata: "セイ"},
    {kanji: "俵", sens: "sac de paille", On: "Hyou", kun: "tawara", hira: "たわら", kata: "ヒョウ"},
    {kanji: "従", sens: "obéir, suivre", On: "Juu ; Shou ; Ju", kun: "shitagau ; shitageru", hira: "したがう, したがえる", kata: "ジュウ, ショウ, ジュ"},
    {kanji: "陛", sens: "marches de l'empereur", On: "Hei", kun: "", hira: "", kata: "ヘイ"},
    {kanji: "潔", sens: "pur, propre", On: "Ketsu", kun: "isagiyoi", hira: "いさぎよい", kata: "ケツ"},
    {kanji: "証", sens: "preuve, témoignage", On: "Shou", kun: "akashi", hira: "あかし", kata: "ショウ"},
    {kanji: "謝", sens: "s'excuser, remercier", On: "Sha", kun: "ayamaru", hira: "あやまる", kata: "シャ"},
    {kanji: "酸", sens: "acide", On: "San", kun: "sui", hira: "すい", kata: "サン"},
    {kanji: "盛", sens: "prospérer, florissant", On: "Sei ; Jou", kun: "sakaru ; sakan", hira: "さかる, さかん", kata: "セイ, ジョウ"},
    {kanji: "態", sens: "condition, état", On: "Tai", kun: "waza", hira: "わざ", kata: "タイ"},
    {kanji: "衛", sens: "défendre, protéger", On: "Ei", kun: "", hira: "", kata: "エイ"},
    {kanji: "視", sens: "regarder, inspecter", On: "Shi", kun: "miru", hira: "みる", kata: "シ"},
    {kanji: "幹", sens: "tronc, principal", On: "Kan", kun: "miki", hira: "みき", kata: "カン"},
    {kanji: "班", sens: "escouade, groupe", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "誕", sens: "naissance", On: "Tan", kun: "", hira: "", kata: "タン"},
    {kanji: "笛", sens: "flûte", On: "Teki", kun: "fue", hira: "ふえ", kata: "テキ"},
    {kanji: "保", sens: "conserver, maintenir", On: "Ho", kun: "tamotsu", hira: "たもつ", kata: "ホ"},
    {kanji: "垂", sens: "pendre, suspendre", On: "Sui", kun: "tareru ; tarasu", hira: "たれる, たらす", kata: "スイ"},
    {kanji: "宣", sens: "proclamer, annoncer", On: "Sen", kun: "notamau", hira: "のたまう", kata: "セン"},
    {kanji: "操", sens: "manipuler, chasteté", On: "Sou", kun: "ayatsuru ; misao", hira: "あやつる, みさお", kata: "ソウ"},
    {kanji: "秘", sens: "secret", On: "Hi", kun: "himeru", hira: "ひめる", kata: "ヒ"},
    {kanji: "肥", sens: "engraisser, fumier", On: "Hi", kun: "koeru ; koyasu", hira: "こえる, こやす", kata: "ヒ"},
    {kanji: "就", sens: "s'installer, concerner", On: "Shuu ; Ju", kun: "tsuku", hira: "つく", kata: "シュウ, ジュ"},
    {kanji: "拡", sens: "élargir, étendre", On: "Kaku", kun: "hirogeru ; hirogaru", hira: "ひろげる, ひろがる", kata: "カク"},
    {kanji: "納", sens: "fournir, payer", On: "Nou ; Tou ; Na ; Nan", kun: "osameru ; osamaru", hira: "おさめる, おさまる", kata: "ノウ, トウ, ナ, ナン"},
    {kanji: "環", sens: "anneau, environnement", On: "Kan", kun: "wa", hira: "わ", kata: "カン"},
    {kanji: "壁", sens: "mur", On: "Heki", kun: "kabe", hira: "かべ", kata: "ヘキ"},
    {kanji: "較", sens: "comparer", On: "Kaku", kun: "kuraberu", hira: "くらべる", kata: "カク"},
    {kanji: "異", sens: "différent, étrange", On: "I", kun: "kotonaru", hira: "ことなる", kata: "イ"},
    {kanji: "恵", sens: "bénédiction, faveur", On: "Kei ; E", kun: "megumu", hira: "めぐむ", kata: "ケイ, エ"},
    {kanji: "狭", sens: "étroit, se rétrécir", On: "Kyou", kun: "semai ; sebameru", hira: "せまい, せばめる", kata: "キョウ"},
    {kanji: "統", sens: "gouverner, unir", On: "Tou", kun: "suberu", hira: "すべる", kata: "トウ"},
    {kanji: "株", sens: "souche, action (finance)", On: "", kun: "kabu", hira: "かぶ", kata: ""},
    {kanji: "熟", sens: "mûrir", On: "Juku", kun: "ureru", hira: "うれる", kata: "ジュク"},
    {kanji: "裁", sens: "juger, couper", On: "Sai", kun: "sabaku ; tatsu", hira: "さばく, たつ", kata: "サイ"},
    {kanji: "縦", sens: "vertical", On: "Juu", kun: "tate", hira: "たて", kata: "ジュウ"},
    {kanji: "誠", sens: "sincérité, vérité", On: "Sei", kun: "makoto", hira: "まこと", kata: "セイ"},
    {kanji: "貴", sens: "", On: "", kun: "", hira: "", kata: ""},
    {kanji: "賃", sens: "loyer, salaire", On: "Chin", kun: "", hira: "", kata: "チン"},
    {kanji: "遺", sens: "léguer, laisser", On: "I ; Yui", kun: "nokosu", hira: "のこす", kata: "イ, ユイ"},
    {kanji: "援", sens: "aider, assister", On: "En", kun: "", hira: "", kata: "エン"},
    {kanji: "企", sens: "planifier, projeter", On: "Ki", kun: "kuwadateru", hira: "くわだてる", kata: "キ"},
    {kanji: "藤", sens: "glycine", On: "Tou", kun: "fuji", hira: "ふじ", kata: "トウ"},
    {kanji: "沢", sens: "marais, abondance", On: "Taku", kun: "sawa", hira: "さわ", kata: "タク"},
    {kanji: "施", sens: "exécuter, faire l'aumône", On: "Shi ; Se", kun: "hodokosu", hira: "ほどこす", kata: "シ, セ"},
    {kanji: "鮮", sens: "frais, vif", On: "Sen", kun: "azayaka", hira: "あざやか", kata: "セン"},
    {kanji: "監", sens: "superviser", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "審", sens: "examiner, juger", On: "Shin", kun: "tsumabiraka", hira: "つまびらか", kata: "シン"},
    {kanji: "訴", sens: "poursuivre en justice", On: "So", kun: "uttaeru", hira: "うったえる", kata: "ソ"},
    {kanji: "影", sens: "ombre, reflet", On: "Ei", kun: "kage", hira: "かげ", kata: "エイ"},
    {kanji: "撃", sens: "frapper, attaquer", On: "Geki", kun: "utsu", hira: "うつ", kata: "ゲキ"},
    // ------------------JLPT N1 Groupe 3-------------------
    {kanji: "佐", sens: "aider", On: "Sa", kun: "", hira: "", kata: "サ"},
    {kanji: "核", sens: "noyau, nucléaire", On: "Kaku", kun: "", hira: "", kata: "カク"},
    {kanji: "響", sens: "résonner, écho", On: "Kyou", kun: "hibiku", hira: "ひびく", kata: "キョウ"},
    {kanji: "請", sens: "demander, solliciter", On: "Sei ; Shin", kun: "kou ; ukeru", hira: "こう, うける", kata: "セイ, シン"},
    {kanji: "及", sens: "atteindre, s'étendre", On: "Kyuu", kun: "oyobu ; oyobosu", hira: "およぶ, およぼす", kata: "キュウ"},
    {kanji: "儀", sens: "cérémonie, règle", On: "Gi", kun: "", hira: "", kata: "ギ"},
    {kanji: "井", sens: "puits", On: "Sei ; Shou", kun: "i", hira: "い", kata: "セイ, ショウ"},
    {kanji: "融", sens: "fondre, finance", On: "Yuu", kun: "tokeru", hira: "とける", kata: "ユウ"},
    {kanji: "渉", sens: "traverser, relation", On: "Shou", kun: "wataru", hira: "わたる", kata: "ショウ"},
    {kanji: "攻", sens: "attaquer", On: "Kou", kun: "semeru", hira: "せめる", kata: "コウ"},
    {kanji: "催", sens: "organiser, tenir", On: "Sai", kun: "moyoosu", hira: "もよおす", kata: "サイ"},
    {kanji: "離", sens: "séparer, s'éloigner", On: "Ri", kun: "hanareru ; hanasu", hira: "はなれる, はなす", kata: "リ"},
    {kanji: "郎", sens: "fils, homme", On: "Rou", kun: "", hira: "", kata: "ロウ"},
    {kanji: "振", sens: "secouer, agiter", On: "Shin", kun: "furu ; furuu", hira: "ふる, ふるう", kata: "シン"},
    {kanji: "献", sens: "offrir, présenter", On: "Ken ; Kon", kun: "tatematsuru", hira: "たてまつる", kata: "ケン, コン"},
    {kanji: "維", sens: "maintenir, fibre", On: "I", kun: "", hira: "", kata: "イ"},
    {kanji: "浜", sens: "plage, côte", On: "Hin", kun: "hama", hira: "はま", kata: "ヒン"},
    {kanji: "塁", sens: "base, fort", On: "Rui", kun: "", hira: "", kata: "ルイ"},
    {kanji: "遣", sens: "envoyer, dépenser", On: "Ken", kun: "tsukau ; tsukawasu", hira: "つかう, つかわす", kata: "ケン"},
    {kanji: "抗", sens: "résister, s'opposer", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "雄", sens: "mâle, viril", On: "Yuu", kun: "osu ; o", hira: "おす, お", kata: "ユウ"},
    {kanji: "廃", sens: "abolir, obsolète", On: "Hai", kun: "sutareru ; sutaru", hira: "すたれる, すたる", kata: "ハイ"},
    {kanji: "江", sens: "crique, baie", On: "Kou", kun: "e", hira: "え", kata: "コウ"},
    {kanji: "崎", sens: "cap, promontoire", On: "Ki", kun: "saki", hira: "さき", kata: "キ"},
    {kanji: "督", sens: "superviser, diriger", On: "Toku", kun: "", hira: "", kata: "トク"},
    {kanji: "摘", sens: "pincer, cueillir", On: "Teki", kun: "tsumu", hira: "つむ", kata: "テキ"},
    {kanji: "邦", sens: "pays, nation", On: "Hou", kun: "kuni", hira: "くに", kata: "ホウ"},
    {kanji: "緊", sens: "tendu, serré", On: "Kin", kun: "", hira: "", kata: "キン"},
    {kanji: "僚", sens: "collègue", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "吉", sens: "bonne fortune", On: "Kichi ; Kitsu", kun: "yoshi", hira: "よし", kata: "キチ, キツ"},
    {kanji: "踏", sens: "marcher sur", On: "Tou", kun: "fumu ; fumaeru", hira: "ふむ, ふまえる", kata: "トウ"},
    {kanji: "壊", sens: "casser, détruire", On: "Kai", kun: "kowasu ; kowareru", hira: "こわす, こわれる", kata: "カイ"},
    {kanji: "債", sens: "dette, obligation", On: "Sai", kun: "", hira: "", kata: "サイ"},
    {kanji: "継", sens: "hériter, succéder", On: "Kei", kun: "tsugu", hira: "つぐ", kata: "ケイ"},
    {kanji: "闘", sens: "lutter, combattre", On: "Tou", kun: "tatakau", hira: "たたかう", kata: "トウ"},
    {kanji: "葬", sens: "enterrement", On: "Sou", kun: "houmuru", hira: "ほうむる", kata: "ソウ"},
    {kanji: "避", sens: "éviter", On: "Hi", kun: "sakeru", hira: "さける", kata: "ヒ"},
    {kanji: "逮", sens: "chasser, attraper", On: "Tai", kun: "", hira: "", kata: "タイ"},
    {kanji: "迫", sens: "presser, approcher", On: "Haku", kun: "semaru", hira: "せまる", kata: "ハク"},
    {kanji: "惑", sens: "être perplexe", On: "Waku", kun: "madou", hira: "まどう", kata: "ワク"},
    {kanji: "崩", sens: "s'effondrer", On: "Hou", kun: "kuzureru ; kuzusu", hira: "くずれる, くずす", kata: "ホウ"},
    {kanji: "聴", sens: "écouter", On: "Chou", kun: "kiku", hira: "きく", kata: "チョウ"},
    {kanji: "脱", sens: "enlever, s'échapper", On: "Datsu", kun: "nugu ; nukeru", hira: "ぬぐ, ぬける", kata: "ダツ"},
    {kanji: "締", sens: "serrer, nouer", On: "Tei", kun: "shimeru ; shimaru", hira: "しめる, しまる", kata: "テイ"},
    {kanji: "執", sens: "exécuter, persister", On: "Shitsu ; Shuu", kun: "toru", hira: "とる", kata: "シツ, シュウ"},
    {kanji: "房", sens: "chambre, grappe", On: "Bou", kun: "fusa", hira: "ふさ", kata: "ボウ"},
    {kanji: "撤", sens: "retirer", On: "Tetsu", kun: "", hira: "", kata: "テツ"},
    {kanji: "暑", sens: "chaud (climat)", On: "Sho", kun: "atsui", hira: "あつい", kata: "ショ"},
    {kanji: "削", sens: "gratter, réduire", On: "Saku", kun: "kezuru", hira: "けずる", kata: "サク"},
    {kanji: "措", sens: "mettre de côté", On: "So", kun: "oku", hira: "おく", kata: "ソ"},
    {kanji: "載", sens: "charger, publier", On: "Sai", kun: "noseru ; noru", hira: "のせる, のる", kata: "サイ"},
    {kanji: "陣", sens: "camp, bataille", On: "Jin", kun: "", hira: "", kata: "ジン"},
    {kanji: "為", sens: "faire, au profit de", On: "I", kun: "tame ; nasu", hira: "ため, なす", kata: "イ"},
    {kanji: "抑", sens: "réprimer", On: "Yoku", kun: "osaeru", hira: "おさえる", kata: "ヨク"},
    {kanji: "奈", sens: "Nara, comment", On: "Na", kun: "", hira: "", kata: "ナ"},
    {kanji: "択", sens: "choisir", On: "Taku", kun: "", hira: "", kata: "タク"},
    {kanji: "秀", sens: "exceller", On: "Shuu", kun: "hiideru", hira: "ひいでる", kata: "シュウ"},
    {kanji: "徴", sens: "signe, percevoir", On: "Chou", kun: "shirushi", hira: "しるし", kata: "チョウ"},
    {kanji: "弾", sens: "balle, rebondir", On: "Dan", kun: "tama ; hiku ; hazumu", hira: "たま, ひく, はずむ", kata: "ダン"},
    {kanji: "償", sens: "rembourser", On: "Shou", kun: "tsugunau", hira: "つぐなう", kata: "ショウ"},
    {kanji: "拠", sens: "basé sur", On: "Kyo ; Ko", kun: "yoru", hira: "よる", kata: "キョ, コ"},
    {kanji: "拒", sens: "refuser", On: "Kyo", kun: "kobamu", hira: "こばむ", kata: "キョ"},
    {kanji: "刑", sens: "punition", On: "Kei", kun: "", hira: "", kata: "ケイ"},
    {kanji: "塚", sens: "monticule", On: "Chou", kun: "tsuka", hira: "つか", kata: "チョウ"},
    {kanji: "致", sens: "faire (humble)", On: "Chi", kun: "itasu", hira: "いたす", kata: "チ"},
    {kanji: "繰", sens: "tourner, dévider", On: "Sou", kun: "kuru", hira: "くる", kata: "ソウ"},
    {kanji: "尾", sens: "queue", On: "Bi", kun: "o", hira: "お", kata: "ビ"},
    {kanji: "描", sens: "dessiner", On: "Byou", kun: "egaku ; kaku", hira: "えがく, かく", kata: "ビョウ"},
    {kanji: "鈴", sens: "clochette", On: "Rei ; Rin", kun: "suzu", hira: "すず", kata: "レイ, リン"},
    {kanji: "盤", sens: "plateau, disque", On: "Ban", kun: "", hira: "", kata: "バン"},
    {kanji: "項", sens: "article, clause", On: "Kou", kun: "unaji", hira: "うなじ", kata: "コウ"},
    {kanji: "喪", sens: "deuil, perdre", On: "Sou", kun: "mo", hira: "も", kata: "ソウ"},
    {kanji: "伴", sens: "accompagner", On: "Han ; Ban", kun: "tomonau", hira: "ともなう", kata: "ハン, バン"},
    {kanji: "懸", sens: "suspendre", On: "Ken ; Ke", kun: "kakeru ; kakaru", hira: "かける, かかる", kata: "ケン, ケ"},
    {kanji: "契", sens: "contrat, promesse", On: "Kei", kun: "chigiru", hira: "ちぎる", kata: "ケイ"},
    {kanji: "掲", sens: "afficher", On: "Kei", kun: "kakageru", hira: "かかげる", kata: "ケイ"},
    {kanji: "躍", sens: "sauter, bondir", On: "Yaku", kun: "odoru", hira: "おどる", kata: "ヤク"},
    {kanji: "棄", sens: "abandonner", On: "Ki", kun: "suteru", hira: "すてる", kata: "キ"},
    {kanji: "邸", sens: "résidence", On: "Tei", kun: "yashiki", hira: "やしき", kata: "テイ"},
    {kanji: "還", sens: "revenir", On: "Kan", kun: "kaeru", hira: "かえる", kata: "カン"},
    {kanji: "慮", sens: "réflexion", On: "Ryo", kun: "omompakaru", hira: "おもんぱかる", kata: "リョ"},
    {kanji: "枠", sens: "cadre", On: "", kun: "waku", hira: "わく", kata: ""},
    {kanji: "露", sens: "rosée, exposer", On: "Ro", kun: "tsuyu", hira: "つゆ", kata: "ロ"},
    {kanji: "沖", sens: "haute mer", On: "Chuu", kun: "oki", hira: "おき", kata: "チュウ"},
    {kanji: "緩", sens: "relâcher", On: "Kan", kun: "yurui ; yurumeru", hira: "ゆるい, ゆるめる", kata: "カン"},
    {kanji: "需", sens: "demande", On: "Ju", kun: "", hira: "", kata: "ジュ"},
    {kanji: "購", sens: "acheter", On: "Kou", kun: "aganau", hira: "あがなう", kata: "コウ"},
    {kanji: "充", sens: "remplir", On: "Juu", kun: "ateru", hira: "あてる", kata: "ジュウ"},
    {kanji: "貢", sens: "tribut", On: "Kou ; Ku", kun: "mitsugu", hira: "みつぐ", kata: "コウ, ク"},
    {kanji: "却", sens: "rejeter", On: "Kyaku", kun: "shirizoku", hira: "しりぞく", kata: "キャク"},
    {kanji: "端", sens: "bord, extrémité", On: "Tan", kun: "hashi ; ha ; hata", hira: "はし, は, はた", kata: "タン"},
    {kanji: "獲", sens: "capturer", On: "Kaku", kun: "eru", hira: "える", kata: "カク"},
    {kanji: "併", sens: "joindre", On: "Hei", kun: "awaseru", hira: "あわせる", kata: "ヘイ"},
// ------------------JLPT N1 Groupe 4-------------------
    {kanji: "徹", sens: "pénétrer, exhaustif", On: "Tetsu", kun: "", hira: "", kata: "テツ"},
    {kanji: "衝", sens: "collision", On: "Shou", kun: "tsuku", hira: "つく", kata: "ショウ"},
    {kanji: "焦", sens: "brûler, s'impatienter", On: "Shou", kun: "kogeru ; aseru", hira: "こげる, あせる", kata: "ショウ"},
    {kanji: "奪", sens: "voler, priver", On: "Datsu", kun: "ubau", hira: "うばう", kata: "ダツ"},
    {kanji: "浦", sens: "baie", On: "Ho", kun: "ura", hira: "うら", kata: "ホ"},
    {kanji: "析", sens: "analyser", On: "Seki", kun: "", hira: "", kata: "セキ"},
    {kanji: "譲", sens: "céder", On: "Jou", kun: "yuzuru", hira: "ゆずる", kata: "ジョウ"},
    {kanji: "称", sens: "nommer, louer", On: "Shou", kun: "tataeru", hira: "たたえる", kata: "ショウ"},
    {kanji: "挑", sens: "défier", On: "Chou", kun: "idomu", hira: "いどむ", kata: "チョウ"},
    {kanji: "誘", sens: "inviter, attirer", On: "Yuu", kun: "sasou", hira: "さそう", kata: "ユウ"},
    {kanji: "紛", sens: "distraire, se mêler", On: "Fun", kun: "magireru", hira: "まぎれる", kata: "フン"},
    {kanji: "促", sens: "stimuler, presser", On: "Soku", kun: "unagasu", hira: "うながす", kata: "ソク"},
    {kanji: "慎", sens: "prudent, discret", On: "Shin", kun: "tsutsushimu", hira: "つつしむ", kata: "シン"},
    {kanji: "控", sens: "s'abstenir, retenir", On: "Kou", kun: "hikaeru", hira: "ひかえる", kata: "コウ"},
    {kanji: "握", sens: "saisir, poignée", On: "Aku", kun: "nigiru", hira: "にぎる", kata: "アク"},
    {kanji: "俊", sens: "génie, talent", On: "Shun", kun: "", hira: "", kata: "シュン"},
    {kanji: "渋", sens: "astringent, hésiter", On: "Juu", kun: "shibui ; shiburu", hira: "しぶい, しぶる", kata: "ジュウ"},
    {kanji: "銃", sens: "fusil, arme à feu", On: "Juu", kun: "", hira: "", kata: "ジュウ"},
    {kanji: "携", sens: "porter, collaborer", On: "Kei", kun: "tazusaeru", hira: "たずさえる", kata: "ケイ"},
    {kanji: "診", sens: "examiner (médical)", On: "Shin", kun: "miru", hira: "みる", kata: "シン"},
    {kanji: "託", sens: "confier", On: "Taku", kun: "kakotsu", hira: "かこつ", kata: "タク"},
    {kanji: "撮", sens: "photographier", On: "Satsu", kun: "toru", hira: "とる", kata: "サツ"},
    {kanji: "侵", sens: "envahir", On: "Shin", kun: "okasu", hira: "おかす", kata: "シン"},
    {kanji: "括", sens: "attacher, résumer", On: "Katsu", kun: "kukuru", hira: "くくる", kata: "カツ"},
    {kanji: "駆", sens: "courir, chasser", On: "Ku", kun: "kakeru ; karu", hira: "かける, かる", kata: "ク"},
    {kanji: "透", sens: "transparent", On: "Tou", kun: "sukeru ; sukasu", hira: "すける, すかす", kata: "トウ"},
    {kanji: "津", sens: "port, havre", On: "Shin", kun: "tsu", hira: "つ", kata: "シン"},
    {kanji: "稲", sens: "plant de riz", On: "Tou", kun: "ine ; ina", hira: "いね, いな", kata: "トウ"},
    {kanji: "裂", sens: "déchirer", On: "Retsu", kun: "sakeru ; saku", hira: "さける, さく", kata: "レツ"},
    {kanji: "敏", sens: "agile, vif", On: "Bin", kun: "satoi", hira: "さとい", kata: "ビン"},
    {kanji: "是", sens: "juste, correct", On: "Ze ; Ji", kun: "kore", hira: "これ", kata: "ゼ, ジ"},
    {kanji: "排", sens: "rejeter, éliminer", On: "Hai", kun: "", hira: "", kata: "ハイ"},
    {kanji: "裕", sens: "abondant, riche", On: "Yuu", kun: "", hira: "", kata: "ユウ"},
    {kanji: "堅", sens: "dur, solide", On: "Ken", kun: "katai", hira: "かたい", kata: "ケン"},
    {kanji: "芝", sens: "gazon", On: "Shi", kun: "shiba", hira: "しば", kata: "シ"},
    {kanji: "綱", sens: "corde, câble", On: "Kou", kun: "tsuna", hira: "つな", kata: "コウ"},
    {kanji: "扱", sens: "manipuler", On: "Shou", kun: "atsukau", hira: "あつかう", kata: "ショウ"},
    {kanji: "顧", sens: "regarder en arrière", On: "Ko", kun: "kaerimiru", hira: "かえりみる", kata: "コ"},
    {kanji: "訟", sens: "poursuivre en justice", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "戒", sens: "avertir, précepte", On: "Kai", kun: "imashimeru", hira: "いましめる", kata: "カイ"},
    {kanji: "祉", sens: "bien-être", On: "Shi", kun: "", hira: "", kata: "シ"},
    {kanji: "誉", sens: "honneur, gloire", On: "Yo", kun: "homare", hira: "ほまれ", kata: "ヨ"},
    {kanji: "歓", sens: "joie", On: "Kan", kun: "yorokobu", hira: "よろこぶ", kata: "カン"},
    {kanji: "勧", sens: "recommander", On: "Kan", kun: "susumeru", hira: "すすめる", kata: "カン"},
    {kanji: "騒", sens: "faire du bruit", On: "Sou", kun: "sawagu", hira: "さわぐ", kata: "ソウ"},
    {kanji: "閥", sens: "clique, faction", On: "Batsu", kun: "", hira: "", kata: "バツ"},
    {kanji: "甲", sens: "armure, carapace", On: "Kou ; Kan", kun: "kinoe", hira: "きのえ", kata: "コウ, カン"},
    {kanji: "縄", sens: "corde", On: "Jou", kun: "nawa", hira: "なわ", kata: "ジョウ"},
    {kanji: "揺", sens: "trembler, secouer", On: "You", kun: "yureru ; yurasu", hira: "ゆれる, ゆらす", kata: "ヨウ"},
    {kanji: "免", sens: "excuser, échapper", On: "Men", kun: "manukareru", hira: "まぬかれる", kata: "メン"},
    {kanji: "既", sens: "déjà", On: "Ki", kun: "sude ni", hira: "すでに", kata: "キ"},
    {kanji: "薦", sens: "recommander", On: "Sen", kun: "susumeru", hira: "すすめる", kata: "セン"},
    {kanji: "隣", sens: "voisin", On: "Rin", kun: "tonari", hira: "となり", kata: "リン"},
    {kanji: "華", sens: "fleur, brillant", On: "Ka ; Ke", kun: "hana", hira: "はな", kata: "カ, ケ"},
    {kanji: "範", sens: "modèle", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "隠", sens: "cacher", On: "In ; On", kun: "kakusu ; kakureru", hira: "かくす, かくれる", kata: "イン, オン"},
    {kanji: "哲", sens: "philosophie", On: "Tetsu", kun: "", hira: "", kata: "テツ"},
    {kanji: "杉", sens: "cèdre", On: "San", kun: "sugi", hira: "すぎ", kata: "サン"},
    {kanji: "釈", sens: "expliquer, relâcher", On: "Shaku", kun: "", hira: "", kata: "シャク"},
    {kanji: "妥", sens: "paisible, compromis", On: "Da", kun: "", hira: "", kata: "ダ"},
    {kanji: "威", sens: "autorité, intimidation", On: "I", kun: "odosu", hira: "おどす", kata: "イ"},
    {kanji: "豪", sens: "puissant, somptueux", On: "Gou", kun: "", hira: "", kata: "ゴウ"},
    {kanji: "熊", sens: "ours", On: "Yuu", kun: "kuma", hira: "くま", kata: "ユウ"},
    {kanji: "滞", sens: "stagner", On: "Tai", kun: "todokooru", hira: "とどこおる", kata: "タイ"},
    {kanji: "微", sens: "délicat, infime", On: "Bi", kun: "kasuka", hira: "かすか", kata: "ビ"},
    {kanji: "隆", sens: "prospérité", On: "Ryuu", kun: "", hira: "", kata: "リュウ"},
    {kanji: "症", sens: "symptôme", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "暫", sens: "temporaire", On: "Zan", kun: "shibaraku", hira: "しばらく", kata: "ザン"},
    {kanji: "肝", sens: "foie, courage", On: "Kan", kun: "kimo", hira: "きも", kata: "カン"},
    {kanji: "喚", sens: "crier, appeler", On: "Kan", kun: "wameku", hira: "わめく", kata: "カン"},
    {kanji: "妙", sens: "étrange, excellent", On: "Myou", kun: "tae", hira: "たえ", kata: "ミョウ"},
    {kanji: "索", sens: "corde, chercher", On: "Saku", kun: "", hira: "", kata: "サク"},
    {kanji: "襲", sens: "attaquer", On: "Shuu", kun: "osou", hira: "おそう", kata: "シュウ"},
    {kanji: "懇", sens: "amical", On: "Kon", kun: "nengoro", hira: "ねんごろ", kata: "コン"},
    {kanji: "柄", sens: "motif, poignée", On: "Hei", kun: "e ; gara", hira: "え, がら", kata: "ヘイ"},
    {kanji: "驚", sens: "être surpris", On: "Kyou", kun: "odoroku", hira: "おどろく", kata: "キョウ"},
    {kanji: "剤", sens: "médicament, dose", On: "Zai", kun: "", hira: "", kata: "ザイ"},
    {kanji: "瀬", sens: "rapides, courant", On: "Rai", kun: "se", hira: "せ", kata: "ライ"},
    {kanji: "趣", sens: "intérêt, goût", On: "Shu", kun: "omomuki", hira: "おもむき", kata: "シュ"},
    {kanji: "陥", sens: "tomber, piéger", On: "Kan", kun: "ochiiru ; otoshiireru", hira: "おちいる, おとしいれる", kata: "カン"},
    {kanji: "斎", sens: "purification, repas", On: "Sai", kun: "itsuku", hira: "いつく", kata: "サイ"},
    {kanji: "貫", sens: "percer, persévérer", On: "Kan", kun: "tsuranuku", hira: "つらぬく", kata: "カン"},
    {kanji: "仙", sens: "ermite, immortel", On: "Sen", kun: "", hira: "", kata: "セン"},
    {kanji: "慰", sens: "réconforter", On: "I", kun: "nagusameru", hira: "なぐさめる", kata: "イ"},
    {kanji: "旬", sens: "saison (produits)", On: "Jun ; Shun", kun: "", hira: "", kata: "ジュン, シュン"},
    {kanji: "兼", sens: "combiner", On: "Ken", kun: "kaneru", hira: "かねる", kata: "ケン"},
    {kanji: "旨", sens: "délicieux, volonté", On: "Shi", kun: "umai ; mune", hira: "うまい, むね", kata: "シ"},
    {kanji: "即", sens: "immédiatement", On: "Soku", kun: "tsuku ; sunawachi", hira: "つく, すなわち", kata: "ソク"},
    {kanji: "柳", sens: "saule", On: "Ryuu", kun: "yanagi", hira: "やなぎ", kata: "リュウ"},
    {kanji: "偽", sens: "faux, tromper", On: "Gi", kun: "itsuwaru ; nise", hira: "いつわる, にせ", kata: "ギ"},
    {kanji: "覇", sens: "hégémonie", On: "Ha", kun: "", hira: "", kata: "ハ"},
    {kanji: "詳", sens: "détaillé", On: "Shou", kun: "kuwashii", hira: "くわしい", kata: "ショウ"},
    {kanji: "抵", sens: "résister", On: "Tei", kun: "", hira: "", kata: "テイ"},
    // ------------------JLPT N1 Groupe 5-------------------
    {kanji: "脅", sens: "menacer", On: "Kyou", kun: "obiyakasu ; odosu", hira: "おびやかす, おどす", kata: "キョウ"},
    {kanji: "茂", sens: "pousser dru, luxurieux", On: "Mo", kun: "shigeru", hira: "しげる", kata: "モ"},
    {kanji: "犠", sens: "sacrifice", On: "Gi ; Ki", kun: "", hira: "", kata: "ギ, キ"},
    {kanji: "距", sens: "distance", On: "Kyo", kun: "", hira: "", kata: "キョ"},
    {kanji: "雅", sens: "élégant", On: "Ga", kun: "miyabi", hira: "みやび", kata: "ガ"},
    {kanji: "飾", sens: "décorer", On: "Shoku", kun: "kazaru", hira: "かざる", kata: "ショク"},
    {kanji: "網", sens: "filet, réseau", On: "Mou", kun: "ami", hira: "あみ", kata: "モウ"},
    {kanji: "繁", sens: "prospérer", On: "Han", kun: "shigeru", hira: "しげる", kata: "ハン"},
    {kanji: "翼", sens: "aile", On: "Yoku", kun: "tsubasa", hira: "つばさ", kata: "ヨク"},
    {kanji: "潟", sens: "lagune", On: "Seki", kun: "kata", hira: "かた", kata: "セキ"},
    {kanji: "魅", sens: "fasciner", On: "Mi", kun: "", hira: "", kata: "ミ"},
    {kanji: "嫌", sens: "détester", On: "Ken ; Gen", kun: "kirau ; iya", hira: "きらう, いや", kata: "ケン, ゲン"},
    {kanji: "敷", sens: "étaler, répandre", On: "Fu", kun: "shiku", hira: "しく", kata: "フ"},
    {kanji: "擁", sens: "étreindre, protéger", On: "You", kun: "", hira: "", kata: "ヨウ"},
    {kanji: "圏", sens: "sphère, cercle", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "罰", sens: "punition", On: "Batsu ; Bachi", kun: "", hira: "", kata: "バツ, バチ"},
    {kanji: "滅", sens: "détruire, périr", On: "Metsu", kun: "horobiru ; horobosu", hira: "ほろびる, ほろぼす", kata: "メツ"},
    {kanji: "礎", sens: "fondation", On: "So", kun: "ishizue", hira: "いしずえ", kata: "ソ"},
    {kanji: "腐", sens: "pourrir", On: "Fu", kun: "kusaru", hira: "くさる", kata: "フ"},
    {kanji: "脚", sens: "jambe", On: "Kyaku ; Kak", kun: "ashi", hira: "あし", kata: "キャク, カク"},
    {kanji: "尽", sens: "épuiser, faire de son mieux", On: "Jin", kun: "tsukusu ; tsukiru", hira: "つくす, つきる", kata: "ジン"},
    {kanji: "僕", sens: "je, moi (masculin)", On: "Boku", kun: "", hira: "", kata: "ボク"},
    {kanji: "滑", sens: "glisser", On: "Katsu ; Kotsu", kun: "suberu ; nameraka", hira: "すべる, なめらか", kata: "カツ, コツ"},
    {kanji: "孤", sens: "orphelin, seul", On: "Ko", kun: "", hira: "", kata: "コ"},
    {kanji: "炎", sens: "flamme, inflammation", On: "En", kun: "honoo", hira: "ほのお", kata: "エン"},
    {kanji: "賠", sens: "indemniser", On: "Bai", kun: "", hira: "", kata: "バイ"},
    {kanji: "頑", sens: "têtu, robuste", On: "Gan", kun: "", hira: "", kata: "ガン"},
    {kanji: "鎖", sens: "chaîne", On: "Sa", kun: "kusari", hira: "くさり", kata: "サ"},
    {kanji: "彩", sens: "colorer", On: "Sai", kun: "irodoru", hira: "いろどる", kata: "サイ"},
    {kanji: "摩", sens: "frotter", On: "Ma", kun: "sasuru", hira: "さする", kata: "マ"},
    {kanji: "励", sens: "encourager", On: "Rei", kun: "hagemu ; hagemasu", hira: "はげむ, はげます", kata: "レイ"},
    {kanji: "輝", sens: "briller", On: "Ki", kun: "kagayaku", hira: "かがやく", kata: "キ"},
    {kanji: "蓄", sens: "accumuler", On: "Chiku", kun: "takuwaeru", hira: "たくわえる", kata: "チク"},
    {kanji: "軸", sens: "axe", On: "Jiku", kun: "", hira: "", kata: "ジク"},
    {kanji: "巡", sens: "circuler", On: "Jun", kun: "meguru", hira: "めぐる", kata: "ジュン"},
    {kanji: "稼", sens: "gagner (sa vie)", On: "Ka", kun: "kasegu", hira: "かせぐ", kata: "カ"},
    {kanji: "瞬", sens: "clin d'œil", On: "Shun", kun: "matataku", hira: "またたく", kata: "シュン"},
    {kanji: "砲", sens: "canon", On: "Hou", kun: "", hira: "", kata: "ホウ"},
    {kanji: "噴", sens: "jaillir", On: "Fun", kun: "fuku", hira: "ふく", kata: "フン"},
    {kanji: "誇", sens: "se vanter", On: "Ko", kun: "hokoru", hira: "ほこる", kata: "コ"},
    {kanji: "祥", sens: "auspicieux", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "牲", sens: "sacrifice", On: "Sei", kun: "", hira: "", kata: "セイ"},
    {kanji: "秩", sens: "ordre", On: "Chitsu", kun: "", hira: "", kata: "チツ"},
    {kanji: "帝", sens: "empereur", On: "Tei", kun: "mikado", hira: "みかど", kata: "テイ"},
    {kanji: "唆", sens: "inciter", On: "Sa", kun: "sosonokasu", hira: "そそのかす", kata: "サ"},
    {kanji: "阻", sens: "empêcher", On: "So", kun: "habamu", hira: "はばむ", kata: "ソ"},
    {kanji: "泰", sens: "paisible", On: "Tai", kun: "", hira: "", kata: "タイ"},
    {kanji: "賄", sens: "pot-de-vin, financer", On: "Wai", kun: "makanau", hira: "まかなう", kata: "ワイ"},
    {kanji: "撲", sens: "frapper", On: "Boku", kun: "", hira: "", kata: "ボク"},
    {kanji: "堀", sens: "fossé", On: "Kutsu", kun: "hori", hira: "ほり", kata: "クツ"},
    {kanji: "菊", sens: "chrysanthème", On: "Kiku", kun: "", hira: "", kata: "キク"},
    {kanji: "絞", sens: "étrangler, tordre", On: "Kou", kun: "shiboru ; shimeru", hira: "しぼる, しめる", kata: "コウ"},
    {kanji: "縁", sens: "lien, bord", On: "En", kun: "fuchi", hira: "ふち", kata: "エン"},
    {kanji: "唯", sens: "seulement", On: "Yui ; I", kun: "tada", hira: "ただ", kata: "ユイ, イ"},
    {kanji: "膨", sens: "enfler", On: "Bou", kun: "fukuramu", hira: "ふくらむ", kata: "ボウ"},
    {kanji: "耐", sens: "endurer", On: "Tai", kun: "taeru", hira: "たえる", kata: "タイ"},
    {kanji: "塾", sens: "école privée (cram school)", On: "Juku", kun: "", hira: "", kata: "ジュク"},
    {kanji: "漏", sens: "fuir (liquide, secret)", On: "Rou", kun: "moru ; moreru", hira: "もる, もれる", kata: "ロウ"},
    {kanji: "慶", sens: "se réjouir, félicitations", On: "Kei", kun: "", hira: "", kata: "ケイ"},
    {kanji: "猛", sens: "féroce", On: "Mou", kun: "", hira: "", kata: "モウ"},
    {kanji: "芳", sens: "parfumé", On: "Hou", kun: "kanbashii", hira: "かんばしい", kata: "ホウ"},
    {kanji: "懲", sens: "punir, corriger", On: "Chou", kun: "koriru ; korasu", hira: "こりる, こらす", kata: "チョウ"},
    {kanji: "剣", sens: "épée", On: "Ken", kun: "tsurugi", hira: "つるぎ", kata: "ケン"},
    {kanji: "彰", sens: "reconnaissance, clair", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "棋", sens: "échecs (japonais), shogi", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "恒", sens: "constant", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "揚", sens: "hisser, frire", On: "You", kun: "ageru ; agaru", hira: "あげる, あがる", kata: "ヨウ"},
    {kanji: "冒", sens: "risquer, oser", On: "Bou", kun: "okasu", hira: "おかす", kata: "ボウ"},
    {kanji: "倫", sens: "éthique", On: "Rin", kun: "", hira: "", kata: "リン"},
    {kanji: "陳", sens: "exposer, vieux", On: "Chin", kun: "", hira: "", kata: "チン"},
    {kanji: "憶", sens: "mémoire, se souvenir", On: "Oku", kun: "", hira: "", kata: "オク"},
    {kanji: "潜", sens: "plonger, se cacher", On: "Sen", kun: "hisomu ; moguru", hira: "ひそむ, もぐる", kata: "セン"},
    {kanji: "梨", sens: "poire", On: "Ri", kun: "nashi", hira: "なし", kata: "リ"},
    {kanji: "克", sens: "surmonter", On: "Koku", kun: "katsu", hira: "かつ", kata: "コク"},
    {kanji: "岳", sens: "pic, montagne", On: "Gaku", kun: "take", hira: "たけ", kata: "ガク"},
    {kanji: "概", sens: "concept, en général", On: "Gai", kun: "", hira: "", kata: "ガイ"},
    {kanji: "拘", sens: "arrêter, se soucier de", On: "Kou", kun: "kakawaru", hira: "かかわる", kata: "コウ"},
    {kanji: "黙", sens: "silence", On: "Moku", kun: "damaru", hira: "だまる", kata: "モク"},
    {kanji: "須", sens: "devoir (must)", On: "Shu", kun: "subekaraku", hira: "すべからく", kata: "シュ"},
    {kanji: "偏", sens: "partial, pencher", On: "Hen", kun: "katayoru", hira: "かたよる", kata: "ヘン"},
    {kanji: "雰", sens: "atmosphère", On: "Fun", kun: "", hira: "", kata: "フン"},
    {kanji: "遇", sens: "traiter, rencontrer", On: "Guu", kun: "", hira: "", kata: "グウ"},
    {kanji: "諮", sens: "consulter", On: "Shi", kun: "hakaru", hira: "はかる", kata: "シ"},
    {kanji: "卓", sens: "table, éminent", On: "Taku", kun: "", hira: "", kata: "タク"},
    {kanji: "糧", sens: "provisions", On: "Ryou ; Rou", kun: "kate", hira: "かて", kata: "リョウ, ロウ"},
    {kanji: "簿", sens: "registre", On: "Bo", kun: "", hira: "", kata: "ボ"},
    {kanji: "炉", sens: "foyer, four", On: "Ro", kun: "", hira: "", kata: "ロ"},
    {kanji: "殊", sens: "particulièrement", On: "Shu", kun: "koto", hira: "こと", kata: "シュ"},
    {kanji: "殖", sens: "multiplier, augmenter", On: "Shoku", kun: "fueru ; fuyasu", hira: "ふえる, ふやす", kata: "ショク"},
    {kanji: "艦", sens: "navire de guerre", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "輩", sens: "camarade, groupe", On: "Hai", kun: "", hira: "", kata: "ハイ"},
    {kanji: "奇", sens: "étrange, impair", On: "Ki", kun: "kushii", hira: "くしい", kata: "キ"},
    {kanji: "慢", sens: "arrogance, paresse", On: "Man", kun: "", hira: "", kata: "マン"},
// ------------------JLPT N1 Groupe 6-------------------
    {kanji: "鶴", sens: "grue (oiseau)", On: "Kaku", kun: "tsuru", hira: "つる", kata: "カク"},
    {kanji: "謀", sens: "comploter", On: "Bou ; Mu", kun: "hakaru", hira: "はかる", kata: "ボウ, ム"},
    {kanji: "拍", sens: "battre (mesure)", On: "Haku ; Hyou", kun: "", hira: "", kata: "ハク, ヒョウ"},
    {kanji: "寛", sens: "tolérant", On: "Kan", kun: "kutsurogu", hira: "くつろぐ", kata: "カン"},
    {kanji: "覆", sens: "couvrir, renverser", On: "Fuku", kun: "oou ; kutsugaeru", hira: "おおう, くつがえる", kata: "フク"},
    {kanji: "胞", sens: "placenta, cellule", On: "Hou", kun: "", hira: "", kata: "ホウ"},
    {kanji: "隔", sens: "séparer", On: "Kaku", kun: "hedateru", hira: "へだてる", kata: "カク"},
    {kanji: "浄", sens: "purifier", On: "Jou", kun: "kiyomeru", hira: "きよめる", kata: "ジョウ"},
    {kanji: "没", sens: "sombrer, mourir", On: "Motsu ; Botsu", kun: "", hira: "", kata: "モツ, ボツ"},
    {kanji: "暇", sens: "temps libre", On: "Ka", kun: "hima", hira: "ひま", kata: "カ"},
    {kanji: "貞", sens: "chasteté, fidèle", On: "Tei", kun: "sada", hira: "さだ", kata: "テイ"},
    {kanji: "鑑", sens: "modèle, examiner", On: "Kan", kun: "kangamiru", hira: "かんがみる", kata: "カン"},
    {kanji: "陰", sens: "ombre, yin", On: "In", kun: "kage", hira: "かげ", kata: "イン"},
    {kanji: "銘", sens: "inscription, graver", On: "Mei", kun: "", hira: "", kata: "メイ"},
    {kanji: "随", sens: "suivre", On: "Zui", kun: "", hira: "", kata: "ズイ"},
    {kanji: "烈", sens: "violent, ardent", On: "Retsu", kun: "hageshii", hira: "はげしい", kata: "レツ"},
    {kanji: "尋", sens: "chercher, demander", On: "Jin", kun: "tazuneru", hira: "たずねる", kata: "ジン"},
    {kanji: "稿", sens: "brouillon, manuscrit", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "丹", sens: "rouge, sincérité", On: "Tan", kun: "", hira: "", kata: "タン"},
    {kanji: "啓", sens: "éclairer, révéler", On: "Kei", kun: "hiraku", hira: "ひらく", kata: "ケイ"},
    {kanji: "丘", sens: "colline", On: "Kyuu", kun: "oka", hira: "おか", kata: "キュウ"},
    {kanji: "棟", sens: "faîte, bâtiment", On: "Tou", kun: "mune", hira: "むね", kata: "トウ"},
    {kanji: "壌", sens: "terre, sol", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "漫", sens: "involontaire, manga", On: "Man", kun: "", hira: "", kata: "マン"},
    {kanji: "粘", sens: "collant", On: "Nen", kun: "nebaru", hira: "ねばる", kata: "ネン"},
    {kanji: "悟", sens: "comprendre, réaliser", On: "Go", kun: "satoru", hira: "さとる", kata: "ゴ"},
    {kanji: "舗", sens: "boutique, paver", On: "Ho", kun: "", hira: "", kata: "ホ"},
    {kanji: "妊", sens: "grossesse", On: "Nin", kun: "haramu", hira: "はらむ", kata: "ニン"},
    {kanji: "騰", sens: "s'élever, monter", On: "Tou", kun: "agaru", hira: "あがる", kata: "トウ"},
    {kanji: "遂", sens: "accomplir", On: "Sui", kun: "togeru", hira: "とげる", kata: "スイ"},
    {kanji: "狂", sens: "fou, dérangé", On: "Kyou", kun: "kuruu", hira: "くるう", kata: "キョウ"},
    {kanji: "岐", sens: "bifurcation", On: "Ki ; Gi", kun: "", hira: "", kata: "キ, ギ"},
    {kanji: "緯", sens: "latitude, trame", On: "I", kun: "yokoito", hira: "よこいと", kata: "イ"},
    {kanji: "培", sens: "cultiver", On: "Bai", kun: "tsuchikau", hira: "つちかう", kata: "バイ"},
    {kanji: "衰", sens: "décliner", On: "Sui", kun: "otoroeru", hira: "おとろえる", kata: "スイ"},
    {kanji: "艇", sens: "petit bateau", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "屈", sens: "se plier, céder", On: "Kutsu", kun: "kagamaru", hira: "かがまる", kata: "クツ"},
    {kanji: "淡", sens: "clair, pâle", On: "Tan", kun: "awai", hira: "あわい", kata: "タン"},
    {kanji: "抽", sens: "extraire", On: "Chuu", kun: "hiku", hira: "ひく", kata: "チュウ"},
    {kanji: "披", sens: "ouvrir, exposer", On: "Hi", kun: "", hira: "", kata: "ヒ"},
    {kanji: "廷", sens: "cour", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "錦", sens: "brocart", On: "Kin", kun: "nishiki", hira: "にしき", kata: "キン"},
    {kanji: "准", sens: "quasi, associé", On: "Jun", kun: "", hira: "", kata: "ジュン"},
    {kanji: "奨", sens: "encourager", On: "Shou", kun: "susumeru", hira: "すすめる", kata: "ショウ"},
    {kanji: "浸", sens: "tremper", On: "Shin", kun: "hitasu ; hitaru", hira: "ひたす, ひたる", kata: "シン"},
    {kanji: "剰", sens: "surplus", On: "Jou", kun: "amatsusae", hira: "あまつさえ", kata: "ジョウ"},
    {kanji: "胆", sens: "vésicule biliaire, courage", On: "Tan", kun: "kimo", hira: "きも", kata: "タン"},
    {kanji: "繊", sens: "mince, fibre", On: "Sen", kun: "", hira: "", kata: "セン"},
    {kanji: "駒", sens: "pièce (shogi), poulain", On: "Ku", kun: "koma", hira: "こま", kata: "ク"},
    {kanji: "虚", sens: "vide, faux", On: "Kyo ; Ko", kun: "munashii", hira: "むなしい", kata: "キョ, コ"},
    {kanji: "霊", sens: "esprit, âme", On: "Rei ; Ryou", kun: "tama", hira: "たま", kata: "レイ, リョウ"},
    {kanji: "悔", sens: "regretter", On: "Kai", kun: "kuyamu ; kuyashii", hira: "くやむ, くやしい", kata: "カイ"},
    {kanji: "諭", sens: "admonester, persuader", On: "Yu", kun: "satosu", hira: "さとす", kata: "ユ"},
    {kanji: "惨", sens: "misérable, cruel", On: "San ; Zan", kun: "mijime", hira: "みじめ", kata: "サン, ザン"},
    {kanji: "虐", sens: "tyranniser", On: "Gyaku", kun: "shiitageru", hira: "しいたげる", kata: "ギャク"},
    {kanji: "翻", sens: "retourner, traduire", On: "Hon", kun: "hirugaeru", hira: "ひるがえる", kata: "ホン"},
    {kanji: "墜", sens: "tomber", On: "Tsui", kun: "ochiru", hira: "おちる", kata: "ツイ"},
    {kanji: "沼", sens: "marais", On: "Shou", kun: "numa", hira: "ぬま", kata: "ショウ"},
    {kanji: "据", sens: "installer", On: "Kyo", kun: "sueru ; suwaru", hira: "すえる, すわる", kata: "キョ"},
    {kanji: "徐", sens: "lentement", On: "Jo", kun: "omomuro ni", hira: "おもむろに", kata: "ジョ"},
    {kanji: "搭", sens: "monter à bord", On: "Tou", kun: "", hira: "", kata: "トウ"},
    {kanji: "盾", sens: "bouclier", On: "Jun", kun: "tate", hira: "たて", kata: "ジュン"},
    {kanji: "滝", sens: "cascade", On: "Rou", kun: "taki", hira: "たき", kata: "ロウ"},
    {kanji: "軌", sens: "orbite, voie", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "妨", sens: "obstruer", On: "Bou", kun: "samatageru", hira: "さまたげる", kata: "ボウ"},
    {kanji: "擦", sens: "frotter", On: "Satsu", kun: "sasuru ; kosuru", hira: "さする, こする", kata: "サツ"},
    {kanji: "鯨", sens: "baleine", On: "Gei", kun: "kujira", hira: "くじら", kata: "ゲイ"},
    {kanji: "荘", sens: "villa, solennel", On: "Sou", kun: "ogosoka", hira: "おごそか", kata: "ソウ"},
    {kanji: "諾", sens: "consentir", On: "Daku", kun: "", hira: "", kata: "ダク"},
    {kanji: "雷", sens: "tonnerre", On: "Rai", kun: "kaminari", hira: "かみなり", kata: "ライ"},
    {kanji: "漂", sens: "dériver", On: "Hyou", kun: "tadayou", hira: "ただよう", kata: "ヒョウ"},
    {kanji: "懐", sens: "poche, nostalgie", On: "Kai", kun: "futokoro ; natsukashii", hira: "ふところ, なつかしい", kata: "カイ"},
    {kanji: "勘", sens: "intuition", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "栽", sens: "planter", On: "Sai", kun: "", hira: "", kata: "サイ"},
    {kanji: "拐", sens: "kidnapper", On: "Kai", kun: "", hira: "", kata: "カイ"},
    {kanji: "駄", sens: "fardeau, inutile", On: "Da", kun: "", hira: "", kata: "ダ"},
    {kanji: "添", sens: "joindre, ajouter", On: "Ten", kun: "soeru ; sou", hira: "そえる, そう", kata: "テン"},
    {kanji: "冠", sens: "couronne", On: "Kan", kun: "kanmuri", hira: "かんむり", kata: "カン"},
    {kanji: "斜", sens: "oblique", On: "Sha", kun: "naname", hira: "ななめ", kata: "シャ"},
    {kanji: "浪", sens: "vague, errer", On: "Rou", kun: "", hira: "", kata: "ロウ"},
    {kanji: "亜", sens: "Asie, sous-", On: "A", kun: "", hira: "", kata: "ア"},
    {kanji: "詐", sens: "tromper", On: "Sa", kun: "itsuwaru", hira: "いつわる", kata: "サ"},
    {kanji: "壇", sens: "estrade", On: "Dan ; Tan", kun: "", hira: "", kata: "ダン, タン"},
    {kanji: "勲", sens: "mérite", On: "Kun", kun: "isao", hira: "いさお", kata: "クン"},
    {kanji: "魔", sens: "démon, magie", On: "Ma", kun: "", hira: "", kata: "マ"},
    {kanji: "酬", sens: "récompenser", On: "Shuu", kun: "mukuiru", hira: "むくいる", kata: "シュウ"},
    {kanji: "紫", sens: "violet", On: "Shi", kun: "murasaki", hira: "むらさき", kata: "シ"},
    {kanji: "紋", sens: "blason, motif", On: "Mon", kun: "", hira: "", kata: "モン"},
    {kanji: "卸", sens: "vente en gros", On: "Sha", kun: "orosu ; oroshi", hira: "おろす, おろし", kata: "シャ"},
    {kanji: "欄", sens: "colonne", On: "Ran", kun: "", hira: "", kata: "ラン"},
    {kanji: "逸", sens: "dévier, excellent", On: "Itsu", kun: "sureru", hira: "すれる", kata: "イツ"},
    {kanji: "涯", sens: "horizon, limite", On: "Gai", kun: "", hira: "", kata: "ガイ"},
    {kanji: "拓", sens: "défricher", On: "Taku", kun: "hiraku", hira: "ひらく", kata: "タク"},
    // ------------------JLPT N1 Groupe 7-------------------
    {kanji: "獄", sens: "prison", On: "Goku", kun: "", hira: "", kata: "ゴク"},
    {kanji: "尚", sens: "de plus", On: "Shou", kun: "nao", hira: "なお", kata: "ショウ"},
    {kanji: "彫", sens: "sculpter", On: "Chou", kun: "horu", hira: "ほる", kata: "チョウ"},
    {kanji: "穏", sens: "calme", On: "On", kun: "odayaka", hira: "おだやか", kata: "オン"},
    {kanji: "顕", sens: "apparent", On: "Ken", kun: "arawareru", hira: "あらわれる", kata: "ケン"},
    {kanji: "巧", sens: "habile", On: "Kou", kun: "takumi", hira: "たくみ", kata: "コウ"},
    {kanji: "垣", sens: "clôture", On: "En", kun: "kaki", hira: "かき", kata: "エン"},
    {kanji: "欺", sens: "tromper", On: "Gi", kun: "azamuku", hira: "あざむく", kata: "ギ"},
    {kanji: "釣", sens: "pêcher", On: "Chou", kun: "tsuru", hira: "つる", kata: "チョウ"},
    {kanji: "粛", sens: "solennel", On: "Shuku", kun: "", hira: "", kata: "シュク"},
    {kanji: "愚", sens: "stupide", On: "Gu", kun: "oroka", hira: "おろか", kata: "グ"},
    {kanji: "遭", sens: "rencontrer (problème)", On: "Sou", kun: "au", hira: "あう", kata: "ソウ"},
    {kanji: "架", sens: "suspendre, pont", On: "Ka", kun: "kakeru", hira: "かける", kata: "カ"},
    {kanji: "庶", sens: "multitude", On: "Sho", kun: "", hira: "", kata: "ショ"},
    {kanji: "稚", sens: "immature", On: "Chi", kun: "", hira: "", kata: "チ"},
    {kanji: "滋", sens: "nourrissant", On: "Ji", kun: "", hira: "", kata: "ジ"},
    {kanji: "幻", sens: "illusion", On: "Gen", kun: "maboroshi", hira: "まぼろし", kata: "ゲン"},
    {kanji: "煮", sens: "bouillir, cuire", On: "Sha", kun: "niru", hira: "にる", kata: "シャ"},
    {kanji: "姫", sens: "princesse", On: "Ki", kun: "hime", hira: "ひめ", kata: "キ"},
    {kanji: "誓", sens: "jurer", On: "Sei", kun: "chikau", hira: "ちかう", kata: "セイ"},
    {kanji: "把", sens: "saisir", On: "Ha", kun: "", hira: "", kata: "ハ"},
    {kanji: "践", sens: "pratiquer", On: "Sen", kun: "", hira: "", kata: "セン"},
    {kanji: "呈", sens: "présenter", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "疎", sens: "aliéné, clairsemé", On: "So", kun: "utoi ; orosoka", hira: "うとい, おろそか", kata: "ソ"},
    {kanji: "仰", sens: "regarder en haut", On: "Gyou ; Kou", kun: "aogu ; ossharu", hira: "あおぐ, おっしゃる", kata: "ギョウ, コウ"},
    {kanji: "剛", sens: "robuste", On: "Gou", kun: "", hira: "", kata: "ゴウ"},
    {kanji: "疾", sens: "maladie, rapide", On: "Shitsu", kun: "", hira: "", kata: "シツ"},
    {kanji: "征", sens: "soumettre", On: "Sei", kun: "", hira: "", kata: "セイ"},
    {kanji: "砕", sens: "briser", On: "Sai", kun: "kudaku", hira: "くだく", kata: "サイ"},
    {kanji: "謡", sens: "chant", On: "You", kun: "utau ; utai", hira: "うたう, うたい", kata: "ヨウ"},
    {kanji: "嫁", sens: "mariée, belle-fille", On: "Ka", kun: "yome ; totsugu", hira: "よめ, とつぐ", kata: "カ"},
    {kanji: "謙", sens: "modeste", On: "Ken", kun: "", hira: "", kata: "ケン"},
    {kanji: "嘆", sens: "déplorer, soupirer", On: "Tan", kun: "nageku", hira: "なげく", kata: "タン"},
    {kanji: "菌", sens: "bactérie, champignon", On: "Kin", kun: "", hira: "", kata: "キン"},
    {kanji: "鎌", sens: "faucille", On: "Ren", kun: "kama", hira: "かま", kata: "レン"},
    {kanji: "頻", sens: "fréquemment", On: "Hin", kun: "", hira: "", kata: "ヒン"},
    {kanji: "琴", sens: "koto (instrument)", On: "Kin", kun: "koto", hira: "こと", kata: "キン"},
    {kanji: "棚", sens: "étagère", On: "Hou", kun: "tana", hira: "たな", kata: "ホウ"},
    {kanji: "酷", sens: "cruel", On: "Koku", kun: "hidoi", hira: "ひどい", kata: "コク"},
    {kanji: "宰", sens: "dirigeant", On: "Sai", kun: "", hira: "", kata: "サイ"},
    {kanji: "廊", sens: "couloir", On: "Rou", kun: "", hira: "", kata: "ロウ"},
    {kanji: "寂", sens: "solitaire", On: "Jaku", kun: "sabishii", hira: "さびしい", kata: "ジャク"},
    {kanji: "伏", sens: "se prosterner", On: "Fuku", kun: "fuseru", hira: "ふせる", kata: "フク"},
    {kanji: "碁", sens: "jeu de go", On: "Go", kun: "", hira: "", kata: "ゴ"},
    {kanji: "俗", sens: "vulgaire, coutume", On: "Zoku", kun: "", hira: "", kata: "ゾク"},
    {kanji: "漠", sens: "vaste, désert", On: "Baku", kun: "", hira: "", kata: "バク"},
    {kanji: "邪", sens: "mal, méchant", On: "Ja", kun: "", hira: "", kata: "ジャ"},
    {kanji: "晶", sens: "cristal", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "墨", sens: "encre de Chine", On: "Boku", kun: "sumi", hira: "すみ", kata: "ボク"},
    {kanji: "鎮", sens: "tranquilliser", On: "Chin", kun: "shizumeru", hira: "しずめる", kata: "チン"},
    {kanji: "洞", sens: "grotte", On: "Dou", kun: "hora", hira: "ほら", kata: "ドウ"},
    {kanji: "履", sens: "chaussure, exécuter", On: "Ri", kun: "haku", hira: "はく", kata: "リ"},
    {kanji: "劣", sens: "inférieur", On: "Retsu", kun: "otoru", hira: "おとる", kata: "レツ"},
    {kanji: "那", sens: "quel, quoi", On: "Na", kun: "", hira: "", kata: "ナ"},
    {kanji: "殴", sens: "frapper, battre", On: "Ou", kun: "naguru", hira: "なぐる", kata: "オウ"},
    {kanji: "娠", sens: "grossesse", On: "Shin", kun: "", hira: "", kata: "シン"},
    {kanji: "奉", sens: "offrir, dédier", On: "Hou ; Bu", kun: "tatematsuru", hira: "たてまつる", kata: "ホウ, ブ"},
    {kanji: "憂", sens: "mélancolie, s'inquiéter", On: "Yuu", kun: "urei ; ureeru", hira: "うれい, うれえる", kata: "ユウ"},
    {kanji: "朴", sens: "simple", On: "Boku", kun: "", hira: "", kata: "ボク"},
    {kanji: "亭", sens: "pavillon", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "怪", sens: "suspect, mystérieux", On: "Kai", kun: "ayashii", hira: "あやしい", kata: "カイ"},
    {kanji: "酔", sens: "s'enivrer", On: "Sui", kun: "you", hira: "よう", kata: "スイ"},
    {kanji: "惜", sens: "regrettable, chérir", On: "Seki", kun: "oshii ; oshimu", hira: "おしい, おしむ", kata: "セキ"},
    {kanji: "穫", sens: "récolte", On: "Kaku", kun: "", hira: "", kata: "カク"},
    {kanji: "佳", sens: "excellent, beau", On: "Ka", kun: "", hira: "", kata: "カ"},
    {kanji: "潤", sens: "humide, profit", On: "Jun", kun: "uruou ; uruosu", hira: "うるおう, うるおす", kata: "ジュン"},
    {kanji: "悼", sens: "pleurer (un mort)", On: "Tou", kun: "itamu", hira: "いたむ", kata: "トウ"},
    {kanji: "乏", sens: "pauvre, manquer de", On: "Bou", kun: "toboshii", hira: "とぼしい", kata: "ボウ"},
    {kanji: "該", sens: "ledit, pertinent", On: "Gai", kun: "", hira: "", kata: "ガイ"},
    {kanji: "赴", sens: "se rendre à", On: "Fu", kun: "omomuku", hira: "おもむく", kata: "フ"},
    {kanji: "桑", sens: "mûrier", On: "Sou", kun: "kuwa", hira: "くわ", kata: "ソウ"},
    {kanji: "髄", sens: "moelle", On: "Zui", kun: "", hira: "", kata: "ズイ"},
    {kanji: "盆", sens: "plateau, fête d'Obon", On: "Bon", kun: "", hira: "", kata: "ボン"},
    {kanji: "穂", sens: "épi", On: "Sui", kun: "ho", hira: "ほ", kata: "スイ"},
    {kanji: "壮", sens: "robuste, grand", On: "Sou", kun: "", hira: "", kata: "ソウ"},
    {kanji: "堤", sens: "digue", On: "Tei", kun: "tsutsumi", hira: "つつみ", kata: "テイ"},
    {kanji: "飢", sens: "faim, affamer", On: "Ki", kun: "ueru", hira: "うえる", kata: "キ"},
    {kanji: "傍", sens: "près de", On: "Bou", kun: "katawara", hira: "かたわら", kata: "ボウ"},
    {kanji: "疫", sens: "épidémie", On: "Eki ; Yaku", kun: "", hira: "", kata: "エキ, ヤク"},
    {kanji: "累", sens: "accumuler", On: "Rui", kun: "", hira: "", kata: "ルイ"},
    {kanji: "痴", sens: "stupide", On: "Chi", kun: "", hira: "", kata: "チ"},
    {kanji: "搬", sens: "transporter", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "癒", sens: "guérir", On: "Yu", kun: "iyasu", hira: "いやす", kata: "ユ"},
    {kanji: "郭", sens: "enceinte", On: "Kaku", kun: "", hira: "", kata: "カク"},
    {kanji: "尿", sens: "urine", On: "Nyou", kun: "", hira: "", kata: "ニョウ"},
    {kanji: "凶", sens: "malheur, criminel", On: "Kyou", kun: "", hira: "", kata: "キョウ"},
    {kanji: "吐", sens: "vomir, cracher", On: "To", kun: "haku", hira: "はく", kata: "ト"},
    {kanji: "宴", sens: "banquet", On: "En", kun: "utage", hira: "うたげ", kata: "エン"},
    {kanji: "賓", sens: "invité de marque", On: "Hin", kun: "", hira: "", kata: "ヒン"},
    {kanji: "虜", sens: "captif", On: "Ryo", kun: "toriko", hira: "とりこ", kata: "リョ"},
    {kanji: "陶", sens: "poterie", On: "Tou", kun: "", hira: "", kata: "トウ"},
    {kanji: "鐘", sens: "cloche", On: "Shou", kun: "kane", hira: "かね", kata: "ショウ"},
    {kanji: "憾", sens: "regretter", On: "Kan", kun: "", hira: "", kata: "カン"},
// ------------------JLPT N1 Groupe 8-------------------
    {kanji: "弥", sens: "de plus en plus", On: "Ya ; Mi", kun: "", hira: "", kata: "ヤ, ミ"},
    {kanji: "昆", sens: "insecte", On: "Kon", kun: "", hira: "", kata: "コン"},
    {kanji: "粗", sens: "grossier", On: "So", kun: "arai", hira: "あらい", kata: "ソ"},
    {kanji: "訂", sens: "réviser", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "傘", sens: "parapluie", On: "San", kun: "kasa", hira: "かさ", kata: "サン"},
    {kanji: "騎", sens: "équitation", On: "Ki", kun: "", hira: "", kata: "キ"},
    {kanji: "寧", sens: "plutôt, courtois", On: "Nei", kun: "", hira: "", kata: "ネイ"},
    {kanji: "循", sens: "circuler", On: "Jun", kun: "", hira: "", kata: "ジュン"},
    {kanji: "忍", sens: "endurer, cacher", On: "Nin", kun: "shinobu", hira: "しのぶ", kata: "ニン"},
    {kanji: "怠", sens: "négliger, paresse", On: "Tai", kun: "okotaru ; namakeru", hira: "おこたる, なまける", kata: "タイ"},
    {kanji: "如", sens: "comme, ressembler", On: "Jo ; Nyo", kun: "gotoshi", hira: "ごとし", kata: "ジョ, ニョ"},
    {kanji: "寮", sens: "dortoir", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "鉛", sens: "plomb", On: "En", kun: "namari", hira: "なまり", kata: "エン"},
    {kanji: "珠", sens: "perle", On: "Shu", kun: "tama", hira: "たま", kata: "シュ"},
    {kanji: "凝", sens: "se figer, se concentrer", On: "Gyou", kun: "koru", hira: "こる", kata: "ギョウ"},
    {kanji: "苗", sens: "jeune pousse", On: "Byou", kun: "nae", hira: "なえ", kata: "ビョウ"},
    {kanji: "獣", sens: "bête, animal", On: "Juu", kun: "kemono", hira: "けもの", kata: "ジュウ"},
    {kanji: "哀", sens: "pathétique, triste", On: "Ai", kun: "aware", hira: "あわれ", kata: "アイ"},
    {kanji: "跳", sens: "sauter", On: "Chou", kun: "haneru ; tobu", hira: "はねる, とぶ", kata: "チョウ"},
    {kanji: "匠", sens: "artisan", On: "Shou", kun: "takumi", hira: "たくみ", kata: "ショウ"},
    {kanji: "蛇", sens: "serpent", On: "Ja ; Da", kun: "hebi", hira: "へび", kata: "ジャ, ダ"},
    {kanji: "澄", sens: "clair, limpide", On: "Chou", kun: "sumu ; sumasu", hira: "すむ, すます", kata: "チョウ"},
    {kanji: "縫", sens: "coudre", On: "Hou", kun: "nuu", hira: "ぬう", kata: "ホウ"},
    {kanji: "僧", sens: "moine", On: "Sou", kun: "", hira: "", kata: "ソウ"},
    {kanji: "眺", sens: "regarder au loin", On: "Chou", kun: "nagameru", hira: "ながめる", kata: "チョウ"},
    {kanji: "呉", sens: "Kure (ville), donner", On: "Go", kun: "kureru", hira: "くれる", kata: "ゴ"},
    {kanji: "凡", sens: "médiocre, ordinaire", On: "Bon ; Han", kun: "", hira: "", kata: "ボン, ハン"},
    {kanji: "憩", sens: "se reposer", On: "Kei", kun: "ikou", hira: "いこう", kata: "ケイ"},
    {kanji: "媛", sens: "princesse, belle femme", On: "En", kun: "hime", hira: "ひめ", kata: "エン"},
    {kanji: "溝", sens: "fossé, ravin", On: "Kou", kun: "mizo", hira: "みぞ", kata: "コウ"},
    {kanji: "恭", sens: "respectueux", On: "Kyou", kun: "uyauyashii", hira: "うやうやしい", kata: "キョウ"},
    {kanji: "刈", sens: "couper, tondre", On: "Gai", kun: "karu", hira: "かる", kata: "ガイ"},
    {kanji: "睡", sens: "sommeil", On: "Sui", kun: "", hira: "", kata: "スイ"},
    {kanji: "錯", sens: "mélanger, illusion", On: "Saku", kun: "", hira: "", kata: "サク"},
    {kanji: "伯", sens: "oncle, comte", On: "Haku", kun: "", hira: "", kata: "ハク"},
    {kanji: "陵", sens: "colline, mausolée", On: "Ryou", kun: "misasagi", hira: "みささぎ", kata: "リョウ"},
    {kanji: "霧", sens: "brouillard", On: "Mu", kun: "kiri", hira: "きり", kata: "ム"},
    {kanji: "魂", sens: "âme", On: "Kon", kun: "tamashii", hira: "たましい", kata: "コン"},
    {kanji: "弊", sens: "abus, mal", On: "Hei", kun: "", hira: "", kata: "ヘイ"},
    {kanji: "妃", sens: "reine, princesse", On: "Hi", kun: "kisaki", hira: "きさき", kata: "ヒ"},
    {kanji: "舶", sens: "navire", On: "Haku", kun: "", hira: "", kata: "ハク"},
    {kanji: "餓", sens: "mourir de faim", On: "Ga", kun: "ueru", hira: "うえる", kata: "ガ"},
    {kanji: "窮", sens: "être dans le besoin", On: "Kyuu", kun: "kiwameru", hira: "きわめる", kata: "キュウ"},
    {kanji: "掌", sens: "paume", On: "Shou", kun: "tenohira", hira: "てのひら", kata: "ショウ"},
    {kanji: "麗", sens: "magnifique", On: "Rei", kun: "uruwashii", hira: "うるわしい", kata: "レイ"},
    {kanji: "臭", sens: "odeur", On: "Shuu", kun: "kusai", hira: "くさい", kata: "シュウ"},
    {kanji: "悦", sens: "joie, extase", On: "Etsu", kun: "", hira: "", kata: "エツ"},
    {kanji: "刃", sens: "lame", On: "Jin", kun: "ha", hira: "は", kata: "ジン"},
    {kanji: "縛", sens: "attacher", On: "Baku", kun: "shibaru", hira: "しばる", kata: "バク"},
    {kanji: "暦", sens: "calendrier", On: "Reki", kun: "koyomi", hira: "こよみ", kata: "レキ"},
    {kanji: "宜", sens: "convenable", On: "Gi", kun: "yoroshii", hira: "よろしい", kata: "ギ"},
    {kanji: "盲", sens: "aveugle", On: "Mou", kun: "", hira: "", kata: "モウ"},
    {kanji: "粋", sens: "chic, pur", On: "Sui", kun: "iki", hira: "いき", kata: "スイ"},
    {kanji: "辱", sens: "humilier", On: "Joku", kun: "hazukashimeru", hira: "はずかしめる", kata: "ジョク"},
    {kanji: "轄", sens: "contrôle", On: "Katsu", kun: "", hira: "", kata: "カツ"},
    {kanji: "猿", sens: "singe", On: "En", kun: "saru", hira: "さる", kata: "エン"},
    {kanji: "弦", sens: "corde d'arc ou instrument", On: "Gen", kun: "tsuru", hira: "つる", kata: "ゲン"},
    {kanji: "窒", sens: "étouffer", On: "Chitsu", kun: "", hira: "", kata: "チツ"},
    {kanji: "炊", sens: "cuire (riz)", On: "Sui", kun: "taku", hira: "たく", kata: "スイ"},
    {kanji: "洪", sens: "inondation", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "摂", sens: "assimiler, prendre", On: "Setsu", kun: "", hira: "", kata: "セツ"},
    {kanji: "飽", sens: "se rassasier", On: "Hou", kun: "akiru", hira: "あきる", kata: "ホウ"},
    {kanji: "冗", sens: "superflu", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "桃", sens: "pêche", On: "Tou", kun: "momo", hira: "もも", kata: "トウ"},
    {kanji: "狩", sens: "chasser", On: "Shu", kun: "karu ; kari", hira: "かる, かり", kata: "シュ"},
    {kanji: "朱", sens: "vermillon", On: "Shu", kun: "", hira: "", kata: "シュ"},
    {kanji: "渦", sens: "tourbillon", On: "Ka", kun: "uzu", hira: "うず", kata: "カ"},
    {kanji: "紳", sens: "gentleman", On: "Shin", kun: "", hira: "", kata: "シン"},
    {kanji: "枢", sens: "charnière, centre", On: "Suu", kun: "", hira: "", kata: "スウ"},
    {kanji: "碑", sens: "monument en pierre", On: "Hi", kun: "ishibumi", hira: "いしぶみ", kata: "ヒ"},
    {kanji: "鍛", sens: "forger", On: "Tan", kun: "kitaeru", hira: "きたえる", kata: "タン"},
    {kanji: "裸", sens: "nu", On: "Ra", kun: "hadaka", hira: "はだか", kata: "ラ"},
    {kanji: "猶", sens: "reporter, d'autant plus", On: "Yuu", kun: "nao", hira: "なお", kata: "ユウ"},
    {kanji: "塊", sens: "bloc, masse", On: "Kai", kun: "katamari", hira: "かたまり", kata: "カイ"},
    {kanji: "旋", sens: "rotation", On: "Sen", kun: "", hira: "", kata: "セン"},
    {kanji: "幣", sens: "monnaie, devise", On: "Hei", kun: "nusa", hira: "ぬさ", kata: "ヘイ"},
    {kanji: "膜", sens: "membrane", On: "Maku", kun: "", hira: "", kata: "マク"},
    {kanji: "扇", sens: "éventail", On: "Sen", kun: "ougi", hira: "おうぎ", kata: "セン"},
    {kanji: "槽", sens: "cuve, réservoir", On: "Sou", kun: "", hira: "", kata: "ソウ"},
    {kanji: "慈", sens: "pitié, amour", On: "Ji", kun: "itsukushimu", hira: "いつくしむ", kata: "ジ"},
    {kanji: "伐", sens: "abattre", On: "Batsu", kun: "kiru", hira: "きる", kata: "バツ"},
    {kanji: "漬", sens: "mariner", On: "Shi", kun: "tsukeru ; tsukaru", hira: "つける, つかる", kata: "シ"},
    {kanji: "糾", sens: "tordre, examiner", On: "Kyuu", kun: "", hira: "", kata: "キュウ"},
    {kanji: "墳", sens: "tombe antique", On: "Fun", kun: "", hira: "", kata: "フン"},
    {kanji: "坪", sens: "tsubo (mesure de surface)", On: "Hei", kun: "tsubo", hira: "つぼ", kata: "ヘイ"},
    {kanji: "紺", sens: "bleu marine", On: "Kon", kun: "", hira: "", kata: "コン"},
    {kanji: "娯", sens: "divertissement", On: "Go", kun: "", hira: "", kata: "ゴ"},
    {kanji: "羅", sens: "soie fine, englober", On: "Ra", kun: "", hira: "", kata: "ラ"},
    {kanji: "峡", sens: "gorge, ravin", On: "Kyou", kun: "", hira: "", kata: "キョウ"},
    {kanji: "俸", sens: "salaire, traitement", On: "Hou", kun: "", hira: "", kata: "ホウ"},
    {kanji: "厘", sens: "rin (monnaie), petit", On: "Rin", kun: "", hira: "", kata: "リン"},
    {kanji: "峰", sens: "pic", On: "Hou", kun: "mine", hira: "みね", kata: "ホウ"},
    {kanji: "醸", sens: "brasser", On: "Jou", kun: "kamosu", hira: "かもす", kata: "ジョウ"},
    // ------------------JLPT N1 Groupe 9-------------------
    {kanji: "弔", sens: "funérailles", On: "Chou", kun: "tomurau", hira: "とむらう", kata: "チョウ"},
    {kanji: "汁", sens: "soupe, jus", On: "Juu", kun: "shiru", hira: "しる", kata: "ジュウ"},
    {kanji: "尼", sens: "nonne", On: "Ni", kun: "ama", hira: "あま", kata: "ニ"},
    {kanji: "遍", sens: "partout, fois", On: "Hen", kun: "amaneku", hira: "あまねく", kata: "ヘン"},
    {kanji: "衡", sens: "équilibre", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "薫", sens: "parfumé", On: "Kun", kun: "kaoru", hira: "かおる", kata: "クン"},
    {kanji: "猟", sens: "chasse", On: "Ryou", kun: "kari", hira: "かり", kata: "リョウ"},
    {kanji: "款", sens: "article, clause", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "閲", sens: "inspecter", On: "Etsu", kun: "", hira: "", kata: "エツ"},
    {kanji: "偵", sens: "espionner", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "喝", sens: "réprimander", On: "Katsu", kun: "", hira: "", kata: "カツ"},
    {kanji: "敢", sens: "oser", On: "Kan", kun: "aete", hira: "あえて", kata: "カン"},
    {kanji: "胎", sens: "utérus", On: "Tai", kun: "", hira: "", kata: "タイ"},
    {kanji: "酵", sens: "fermentation", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "憤", sens: "ressentiment", On: "Fun", kun: "ikidooru", hira: "いきどおる", kata: "フン"},
    {kanji: "豚", sens: "porc", On: "Ton", kun: "buta", hira: "ぶた", kata: "トン"},
    {kanji: "遮", sens: "intercepter", On: "Sha", kun: "saegiru", hira: "さえぎる", kata: "シャ"},
    {kanji: "扉", sens: "porte", On: "Hi", kun: "tobira", hira: "とびら", kata: "ヒ"},
    {kanji: "硫", sens: "soufre", On: "Ryuu", kun: "", hira: "", kata: "リュウ"},
    {kanji: "赦", sens: "pardonner", On: "Sha", kun: "", hira: "", kata: "シャ"},
    {kanji: "窃", sens: "voler, secret", On: "Setsu", kun: "hisoka", hira: "ひそか", kata: "セツ"},
    {kanji: "泡", sens: "bulle", On: "Hou", kun: "awa", hira: "あわ", kata: "ホウ"},
    {kanji: "慨", sens: "déplorer", On: "Gai", kun: "", hira: "", kata: "ガイ"},
    {kanji: "紡", sens: "filer", On: "Bou", kun: "tsumugu", hira: "つむぐ", kata: "ボウ"},
    {kanji: "恨", sens: "rancune", On: "Kon", kun: "uramu", hira: "うらむ", kata: "コン"},
    {kanji: "肪", sens: "graisse", On: "Bou", kun: "", hira: "", kata: "ボウ"},
    {kanji: "扶", sens: "aider", On: "Fu", kun: "", hira: "", kata: "フ"},
    {kanji: "戯", sens: "jouer", On: "Gi ; Ge", kun: "tawamureru", hira: "たわむれる", kata: "ギ, ゲ"},
    {kanji: "忌", sens: "deuil, détester", On: "Ki", kun: "imu", hira: "いむ", kata: "キ"},
    {kanji: "濁", sens: "trouble, impur", On: "Daku", kun: "nigoru", hira: "にごる", kata: "ダク"},
    {kanji: "奔", sens: "courir vite", On: "Hon", kun: "", hira: "", kata: "ホン"},
    {kanji: "迅", sens: "rapide", On: "Jin", kun: "", hira: "", kata: "ジン"},
    {kanji: "肖", sens: "ressemblance", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "鉢", sens: "bol", On: "Hachi", kun: "", hira: "", kata: "ハチ"},
    {kanji: "朽", sens: "pourrir", On: "Kyuu", kun: "kuchiru", hira: "くちる", kata: "キュウ"},
    {kanji: "殻", sens: "coquille", On: "Kaku", kun: "kara", hira: "から", kata: "カク"},
    {kanji: "享", sens: "recevoir", On: "Kyou", kun: "ukeru", hira: "うける", kata: "キョウ"},
    {kanji: "藩", sens: "domaine clanique", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "沙", sens: "sable", On: "Sa ; Sha", kun: "", hira: "", kata: "サ, シャ"},
    {kanji: "媒", sens: "médiateur", On: "Bai", kun: "", hira: "", kata: "バイ"},
    {kanji: "鶏", sens: "poulet", On: "Kei", kun: "niwatori", hira: "にわとり", kata: "ケイ"},
    {kanji: "禅", sens: "bouddhisme zen", On: "Zen", kun: "", hira: "", kata: "ゼン"},
    {kanji: "嘱", sens: "confier", On: "Shoku", kun: "", hira: "", kata: "ショク"},
    {kanji: "胴", sens: "torse", On: "Dou", kun: "", hira: "", kata: "ドウ"},
    {kanji: "迭", sens: "alterner", On: "Tetsu", kun: "", hira: "", kata: "テツ"},
    {kanji: "挿", sens: "insérer", On: "Sou", kun: "sasu", hira: "さす", kata: "ソウ"},
    {kanji: "嵐", sens: "tempête", On: "Ran", kun: "arashi", hira: "あらし", kata: "ラン"},
    {kanji: "椎", sens: "chêne, vertèbre", On: "Tsui", kun: "shii", hira: "しい", kata: "ツイ"},
    {kanji: "陪", sens: "accompagner", On: "Bai", kun: "", hira: "", kata: "バイ"},
    {kanji: "剖", sens: "diviser, autopsie", On: "Bou", kun: "", hira: "", kata: "ボウ"},
    {kanji: "譜", sens: "partition musicale", On: "Fu", kun: "", hira: "", kata: "フ"},
    {kanji: "悠", sens: "lointain, calme", On: "Yuu", kun: "", hira: "", kata: "ユウ"},
    {kanji: "淑", sens: "gracieux", On: "Shuku", kun: "shitoyaka", hira: "しとやか", kata: "シュク"},
    {kanji: "帆", sens: "voile", On: "Han", kun: "ho", hira: "ほ", kata: "ハン"},
    {kanji: "暁", sens: "aube", On: "Gyou", kun: "akatsuki", hira: "あかつき", kata: "ギョウ"},
    {kanji: "傑", sens: "excellence", On: "Ketsu", kun: "", hira: "", kata: "ケツ"},
    {kanji: "奴", sens: "esclave, type", On: "Do", kun: "yatsu", hira: "やつ", kata: "ド"},
    {kanji: "錠", sens: "serrure, pilule", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "拳", sens: "poing", On: "Ken", kun: "kobushi", hira: "こぶし", kata: "ケン"},
    {kanji: "遷", sens: "transition", On: "Sen", kun: "utsuru", hira: "うつる", kata: "セン"},
    {kanji: "拙", sens: "maladroit", On: "Setsu", kun: "tsutanai", hira: "つたない", kata: "セツ"},
    {kanji: "侍", sens: "samouraï", On: "Ji", kun: "samurai", hira: "さむらい", kata: "ジ"},
    {kanji: "峠", sens: "col de montagne", On: "", kun: "touge", hira: "とうげ", kata: ""},
    {kanji: "篤", sens: "sérieux, sincère", On: "Toku", kun: "atsui", hira: "あつい", kata: "トク"},
    {kanji: "渇", sens: "soif", On: "Katsu", kun: "kawaku", hira: "かわく", kata: "カツ"},
    {kanji: "叔", sens: "oncle (jeune)", On: "Shuku", kun: "", hira: "", kata: "シュク"},
    {kanji: "雌", sens: "femelle", On: "Shi", kun: "mesu", hira: "めす", kata: "シ"},
    {kanji: "堪", sens: "endurer", On: "Kan", kun: "taeru", hira: "たえる", kata: "カン"},
    {kanji: "叙", sens: "décrire, conférer", On: "Jo", kun: "", hira: "", kata: "ジョ"},
    {kanji: "酢", sens: "vinaigre", On: "Saku", kun: "su", hira: "す", kata: "サク"},
    {kanji: "吟", sens: "réciter, chanter", On: "Gin", kun: "", hira: "", kata: "ギン"},
    {kanji: "逓", sens: "relais", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "甚", sens: "extrême", On: "Jin", kun: "hanahada", hira: "はなはだ", kata: "ジン"},
    {kanji: "崇", sens: "adorer", On: "Suu", kun: "agameru", hira: "あがめる", kata: "スウ"},
    {kanji: "漆", sens: "laque", On: "Shitsu", kun: "urushi", hira: "うるし", kata: "シツ"},
    {kanji: "岬", sens: "cap", On: "Kou", kun: "misaki", hira: "みさき", kata: "コウ"},
    {kanji: "癖", sens: "habitude", On: "Heki", kun: "kuse", hira: "くせ", kata: "ヘキ"},
    {kanji: "愉", sens: "joyeux", On: "Yu", kun: "tanoshii", hira: "たのしい", kata: "ユ"},
    {kanji: "礁", sens: "récif", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "屯", sens: "garnison", On: "Ton", kun: "tamuro", hira: "たむろ", kata: "トン"},
    {kanji: "姻", sens: "mariage", On: "In", kun: "", hira: "", kata: "イン"},
    {kanji: "擬", sens: "imiter", On: "Gi", kun: "", hira: "", kata: "ギ"},
    {kanji: "塀", sens: "mur, clôture", On: "Hei", kun: "", hira: "", kata: "ヘイ"},
    {kanji: "唇", sens: "lèvres", On: "Shin", kun: "kuchibiru", hira: "くちびる", kata: "シン"},
    {kanji: "睦", sens: "amical", On: "Boku", kun: "mutsumajii", hira: "むつまじい", kata: "ボク"},
    {kanji: "閑", sens: "loisir", On: "Kan", kun: "", hira: "", kata: "カン"},
    {kanji: "幽", sens: "sombre, reclus", On: "Yuu", kun: "", hira: "", kata: "ユウ"},
    {kanji: "曹", sens: "fonctionnaire", On: "Sou", kun: "", hira: "", kata: "ソウ"},
    {kanji: "詠", sens: "composer un poème", On: "Ei", kun: "yomu", hira: "よむ", kata: "エイ"},
    {kanji: "卑", sens: "humble, bas", On: "Hi", kun: "iyashii", hira: "いやしい", kata: "ヒ"},
    {kanji: "侮", sens: "mépriser", On: "Bu", kun: "anadoru", hira: "あなどる", kata: "ブ"},
    {kanji: "鋳", sens: "fondre (métal)", On: "Chuu", kun: "iru", hira: "いる", kata: "チュウ"},
    {kanji: "抹", sens: "effacer, frotter", On: "Matsu", kun: "", hira: "", kata: "マツ"},
// ------------------JLPT N1 Groupe 10-------------------
    {kanji: "尉", sens: "officier", On: "I", kun: "", hira: "", kata: "イ"},
    {kanji: "隷", sens: "subordonné", On: "Rei", kun: "", hira: "", kata: "レイ"},
    {kanji: "禍", sens: "désastre", On: "Ka", kun: "wazawai", hira: "わざわい", kata: "カ"},
    {kanji: "酪", sens: "produits laitiers", On: "Raku", kun: "", hira: "", kata: "ラク"},
    {kanji: "茎", sens: "tige", On: "Kei", kun: "kuki", hira: "くき", kata: "ケイ"},
    {kanji: "帥", sens: "commandant", On: "Sui", kun: "", hira: "", kata: "スイ"},
    {kanji: "逝", sens: "décéder", On: "Sei", kun: "yuku", hira: "ゆく", kata: "セイ"},
    {kanji: "匿", sens: "cacher", On: "Toku", kun: "kakumau", hira: "かくまう", kata: "トク"},
    {kanji: "襟", sens: "col", On: "Kin", kun: "eri", hira: "えり", kata: "キン"},
    {kanji: "蛍", sens: "luciole", On: "Kei", kun: "hotaru", hira: "ほたる", kata: "ケイ"},
    {kanji: "寡", sens: "veuve, peu nombreux", On: "Ka", kun: "", hira: "", kata: "カ"},
    {kanji: "痢", sens: "diarrhée", On: "Ri", kun: "", hira: "", kata: "リ"},
    {kanji: "庸", sens: "ordinaire", On: "You", kun: "", hira: "", kata: "ヨウ"},
    {kanji: "坑", sens: "fosse", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "藍", sens: "indigo", On: "Ran", kun: "ai", hira: "あい", kata: "ラン"},
    {kanji: "賊", sens: "voleur, rebelle", On: "Zoku", kun: "", hira: "", kata: "ゾク"},
    {kanji: "搾", sens: "presser, extraire", On: "Saku", kun: "shiboru", hira: "しぼる", kata: "サク"},
    {kanji: "畔", sens: "rive, bord", On: "Han", kun: "hotori", hira: "ほとり", kata: "ハン"},
    {kanji: "唄", sens: "chanson", On: "Bai", kun: "uta", hira: "うた", kata: "バイ"},
    {kanji: "孔", sens: "trou, Confucius", On: "Kou", kun: "ana", hira: "あな", kata: "コウ"},
    {kanji: "呂", sens: "ton (musique)", On: "Ryo ; Ro", kun: "", hira: "", kata: "リョ, ロ"},
    {kanji: "拷", sens: "torture", On: "Gou", kun: "", hira: "", kata: "ゴウ"},
    {kanji: "嬢", sens: "jeune fille", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "渓", sens: "vallée", On: "Kei", kun: "tani", hira: "たに", kata: "ケイ"},
    {kanji: "翁", sens: "vieil homme", On: "Ou", kun: "okina", hira: "おきな", kata: "オウ"},
    {kanji: "廉", sens: "honnête, bon marché", On: "Ren", kun: "", hira: "", kata: "レン"},
    {kanji: "謹", sens: "humble, discret", On: "Kin", kun: "tsutsushimu", hira: "つつしむ", kata: "キン"},
    {kanji: "瞳", sens: "pupille", On: "Dou", kun: "hitomi", hira: "ひとみ", kata: "ドウ"},
    {kanji: "湧", sens: "jaillir", On: "Yuu", kun: "waku", hira: "わく", kata: "ユウ"},
    {kanji: "窯", sens: "four", On: "You", kun: "kama", hira: "かま", kata: "ヨウ"},
    {kanji: "褒", sens: "louer, féliciter", On: "Hou", kun: "homeru", hira: "ほめる", kata: "ホウ"},
    {kanji: "醜", sens: "laid", On: "Shuu", kun: "minikui", hira: "みにくい", kata: "シュウ"},
    {kanji: "升", sens: "mesure (shou)", On: "Shou", kun: "masu", hira: "ます", kata: "ショウ"},
    {kanji: "殉", sens: "martyr", On: "Jun", kun: "", hira: "", kata: "ジュン"},
    {kanji: "煩", sens: "ennui", On: "Han ; Bon", kun: "wazurau", hira: "わずらう", kata: "ハン, ボン"},
    {kanji: "劾", sens: "censurer", On: "Gai", kun: "", hira: "", kata: "ガイ"},
    {kanji: "堕", sens: "tomber, dégénérer", On: "Da", kun: "ochiru", hira: "おちる", kata: "ダ"},
    {kanji: "租", sens: "taxe", On: "So", kun: "", hira: "", kata: "ソ"},
    {kanji: "桟", sens: "jetée", On: "San", kun: "kakehashi", hira: "かけはし", kata: "サン"},
    {kanji: "婿", sens: "gendre", On: "Sei", kun: "muko", hira: "むこ", kata: "セイ"},
    {kanji: "慕", sens: "aspirer à, aimer", On: "Bo", kun: "shitau", hira: "したう", kata: "ボ"},
    {kanji: "罷", sens: "cesser, licencier", On: "Hi", kun: "yameru", hira: "やめる", kata: "ヒ"},
    {kanji: "矯", sens: "redresser", On: "Kyou", kun: "tameru", hira: "ためる", kata: "キョウ"},
    {kanji: "某", sens: "certain, un tel", On: "Bou", kun: "nanigashi", hira: "なにがし", kata: "ボウ"},
    {kanji: "囚", sens: "prisonnier", On: "Shuu", kun: "torawareru", hira: "とらわれる", kata: "シュウ"},
    {kanji: "虹", sens: "arc-en-ciel", On: "Kou", kun: "niji", hira: "にじ", kata: "コウ"},
    {kanji: "泌", sens: "sécréter", On: "Hitsu ; Hi", kun: "", hira: "", kata: "ヒツ, ヒ"},
    {kanji: "漸", sens: "progressivement", On: "Zen", kun: "yoyaku", hira: "ようやく", kata: "ゼン"},
    {kanji: "蚊", sens: "moustique", On: "Bun", kun: "ka", hira: "か", kata: "ブン"},
    {kanji: "厄", sens: "infortune", On: "Yaku", kun: "", hira: "", kata: "ヤク"},
    {kanji: "藻", sens: "algue", On: "Sou", kun: "mo", hira: "も", kata: "ソウ"},
    {kanji: "嫡", sens: "héritier légitime", On: "Chaku", kun: "", hira: "", kata: "チャク"},
    {kanji: "嚇", sens: "intimider", On: "Kaku", kun: "odosu", hira: "おどす", kata: "カク"},
    {kanji: "凸", sens: "convexe", On: "Totsu", kun: "deko", hira: "でこ", kata: "トツ"},
    {kanji: "韻", sens: "rime", On: "In", kun: "", hira: "", kata: "イン"},
    {kanji: "霜", sens: "givre", On: "Sou", kun: "shimo", hira: "しも", kata: "ソウ"},
    {kanji: "硝", sens: "nitrate", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "勅", sens: "décret impérial", On: "Choku", kun: "", hira: "", kata: "チョク"},
    {kanji: "棺", sens: "cercueil", On: "Kan", kun: "hitsugi", hira: "ひつぎ", kata: "カン"},
    {kanji: "儒", sens: "confucianisme", On: "Ju", kun: "", hira: "", kata: "ジュ"},
    {kanji: "愁", sens: "chagrin", On: "Shuu", kun: "uree", hira: "うれえ", kata: "シュウ"},
    {kanji: "楼", sens: "tour", On: "Rou", kun: "", hira: "", kata: "ロウ"},
    {kanji: "眉", sens: "sourcil", On: "Bi", kun: "mayu", hira: "まゆ", kata: "ビ"},
    {kanji: "薪", sens: "bois de chauffage", On: "Shin", kun: "maki", hira: "まき", kata: "シン"},
    {kanji: "褐", sens: "brun", On: "Katsu", kun: "", hira: "", kata: "カツ"},
    {kanji: "賜", sens: "accorder", On: "Shi", kun: "tamawaru", hira: "たまわる", kata: "シ"},
    {kanji: "繕", sens: "réparer", On: "Zen", kun: "tsukurou", hira: "つくろう", kata: "ゼン"},
    {kanji: "栓", sens: "bouchon", On: "Sen", kun: "", hira: "", kata: "セン"},
    {kanji: "凹", sens: "concave", On: "Ou", kun: "kubomu", hira: "くぼむ", kata: "オウ"},
    {kanji: "艶", sens: "brillant, charme", On: "En", kun: "tsuya", hira: "つや", kata: "エン"},
    {kanji: "錬", sens: "forger, affiner", On: "Ren", kun: "neru", hira: "ねる", kata: "レン"},
    {kanji: "衷", sens: "cœur, intérieur", On: "Chuu", kun: "", hira: "", kata: "チュウ"},
    {kanji: "逐", sens: "poursuivre", On: "Chiku", kun: "", hira: "", kata: "チク"},
    {kanji: "斥", sens: "rejeter", On: "Seki", kun: "shirizokeru", hira: "しりぞける", kata: "セキ"},
    {kanji: "詔", sens: "édit impérial", On: "Shou", kun: "mikotonori", hira: "みことのり", kata: "ショウ"},
    {kanji: "憧", sens: "aspirer à", On: "Shou", kun: "akogareru", hira: "あこがれる", kata: "ショウ"},
    {kanji: "宵", sens: "soirée", On: "Shou", kun: "yoi", hira: "よい", kata: "ショウ"},
    {kanji: "妄", sens: "illusion, absurde", On: "Mou ; Bou", kun: "", hira: "", kata: "モウ, ボウ"},
    {kanji: "酌", sens: "verser à boire", On: "Shaku", kun: "kumu", hira: "くむ", kata: "シャク"},
    {kanji: "頒", sens: "distribuer", On: "Han", kun: "", hira: "", kata: "ハン"},
    {kanji: "肢", sens: "membre", On: "Shi", kun: "", hira: "", kata: "シ"},
    {kanji: "謄", sens: "copier", On: "Tou", kun: "", hira: "", kata: "トウ"},
    {kanji: "嗣", sens: "héritier", On: "Shi", kun: "", hira: "", kata: "シ"},
    {kanji: "畝", sens: "crête, sillon", On: "Ho", kun: "une", hira: "うね", kata: "ホ"},
    {kanji: "抄", sens: "extrait", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "爽", sens: "rafraîchissant", On: "Sou", kun: "sawayaka", hira: "さわやか", kata: "ソウ"},
    {kanji: "惰", sens: "paresse", On: "Da", kun: "", hira: "", kata: "ダ"},
    {kanji: "蛮", sens: "barbare", On: "Ban", kun: "", hira: "", kata: "バン"},
    {kanji: "旺", sens: "prospère", On: "Ou", kun: "", hira: "", kata: "オウ"},
    {kanji: "壱", sens: "un (document)", On: "Ichi", kun: "", hira: "", kata: "イチ"},
    {kanji: "瑠", sens: "lapis-lazuli", On: "Ru", kun: "", hira: "", kata: "ル"},
    {kanji: "侯", sens: "marquis", On: "Kou", kun: "", hira: "", kata: "コウ"},
    {kanji: "弧", sens: "arc", On: "Ko", kun: "", hira: "", kata: "コ"},
    // ------------------JLPT N1 Groupe 11-------------------
    {kanji: "附", sens: "joindre", On: "Fu", kun: "tsuku ; tsukeru", hira: "つく, つける", kata: "フ"},
    {kanji: "但", sens: "cependant", On: "Tan", kun: "tadashi", hira: "ただし", kata: "タン"},
    {kanji: "芋", sens: "pomme de terre", On: "U", kun: "imo", hira: "いも", kata: "ウ"},
    {kanji: "婆", sens: "vieille femme", On: "Ba", kun: "baba", hira: "ばば", kata: "バ"},
    {kanji: "倣", sens: "imiter", On: "Hou", kun: "narae", hira: "ならえ", kata: "ホウ"},
    {kanji: "倹", sens: "frugal", On: "Ken", kun: "tsumashii", hira: "つましい", kata: "ケン"},
    {kanji: "繭", sens: "cocon", On: "Ken", kun: "mayu", hira: "まゆ", kata: "ケン"},
    {kanji: "謁", sens: "audience", On: "Etsu", kun: "etsu", hira: "えつ", kata: "エツ"},
    {kanji: "箇", sens: "compteur", On: "Ka", kun: "", hira: "", kata: "カ"},
    {kanji: "且", sens: "de plus", On: "Sho", kun: "katsu", hira: "かつ", kata: "ショ"},
    {kanji: "伎", sens: "art, compétence", On: "Gi ; Ki", kun: "", hira: "", kata: "ギ, キ"},
    {kanji: "虞", sens: "crainte", On: "Gu", kun: "osore", hira: "おそれ", kata: "グ"},
    {kanji: "墾", sens: "défricher", On: "Kon", kun: "", hira: "", kata: "コン"},
    {kanji: "采", sens: "apparence, dé", On: "Sai", kun: "tori", hira: "とり", kata: "サイ"},
    {kanji: "爵", sens: "titre de noblesse", On: "Shaku", kun: "", hira: "", kata: "シャク"},
    {kanji: "遵", sens: "obéir", On: "Jun", kun: "", hira: "", kata: "ジュン"},
    {kanji: "塑", sens: "modeler", On: "So", kun: "", hira: "", kata: "ソ"},
    {kanji: "汰", sens: "sélectionner", On: "Ta", kun: "ta", hira: "た", kata: "タ"},
    {kanji: "旦", sens: "aube", On: "Tan ; Dan", kun: "akatsuki", hira: "あかつき", kata: "タン, ダン"},
    {kanji: "朕", sens: "nous (empereur)", On: "Chin", kun: "", hira: "", kata: "チン"},
    {kanji: "痘", sens: "variole", On: "Tou", kun: "", hira: "", kata: "トウ"},
    {kanji: "弐", sens: "deux (falsification)", On: "Ni", kun: "futatsu", hira: "ふたつ", kata: "ニ"},
    {kanji: "賦", sens: "lever (impôt)", On: "Fu", kun: "", hira: "", kata: "フ"},
    {kanji: "丙", sens: "troisième", On: "Hei", kun: "hinoe", hira: "ひのえ", kata: "ヘイ"},
    {kanji: "耗", sens: "diminuer", On: "Mou ; Kou", kun: "heru", hira: "へる", kata: "モウ, コウ"},
    {kanji: "冶", sens: "métallurgie", On: "Ya", kun: "", hira: "", kata: "ヤ"},
    {kanji: "濫", sens: "excessif", On: "Ran", kun: "midari", hira: "みだり", kata: "ラン"},
    {kanji: "吏", sens: "officier", On: "Ri", kun: "tsukasa", hira: "つかさ", kata: "リ"},
    {kanji: "璃", sens: "verre", On: "Ri", kun: "", hira: "", kata: "リ"},
    {kanji: "瞭", sens: "clair", On: "Ryou", kun: "akiraka", hira: "あきらか", kata: "リョウ"},
    {kanji: "岡", sens: "colline", On: "Kou", kun: "oka", hira: "おか", kata: "コウ"},
    {kanji: "狙", sens: "viser", On: "So", kun: "nerau", hira: "ねらう", kata: "ソ"},
    {kanji: "丑", sens: "bœuf (zodiaque)", On: "Chuu", kun: "ushi", hira: "うし", kata: "チュウ"},
    {kanji: "丞", sens: "aider", On: "Jou", kun: "", hira: "", kata: "ジョウ"},
    {kanji: "乃", sens: "par conséquent", On: "Nai", kun: "sunawachi", hira: "すなわち", kata: "ナイ"},
    {kanji: "之", sens: "ce, de", On: "Shi", kun: "kore ; no", hira: "これ, の", kata: "シ"},
    {kanji: "也", sens: "être, aussi", On: "Ya", kun: "nari", hira: "なり", kata: "ヤ"},
    {kanji: "亘", sens: "s'étendre", On: "Kou", kun: "wataru", hira: "わたる", kata: "コウ"},
    {kanji: "亥", sens: "sanglier (zodiaque)", On: "Gai", kun: "i", hira: "い", kata: "ガイ"},
    {kanji: "亦", sens: "aussi", On: "Eki", kun: "mata", hira: "また", kata: "エキ"},
    {kanji: "亨", sens: "passer à travers", On: "Kyou", kun: "", hira: "", kata: "キョウ"},
    {kanji: "亮", sens: "clair", On: "Ryou", kun: "akiraka", hira: "あきらか", kata: "リョウ"},
    {kanji: "伊", sens: "Italie, ce", On: "I", kun: "kare", hira: "かれ", kata: "イ"},
    {kanji: "伍", sens: "cinq, troupe", On: "Go", kun: "itsutsu", hira: "いつつ", kata: "ゴ"},
    {kanji: "伶", sens: "acteur", On: "Rei", kun: "wazaoki", hira: "わざおき", kata: "レイ"},
    {kanji: "伽", sens: "soin, conte", On: "Ka ; Ga", kun: "togi", hira: "とぎ", kata: "カ, ガ"},
    {kanji: "佑", sens: "aider", On: "Yuu", kun: "tasukeru", hira: "たすける", kata: "ユウ"},
    {kanji: "侃", sens: "juste, fort", On: "Kan", kun: "tsuyoi", hira: "つよい", kata: "カン"},
    {kanji: "侑", sens: "offrir, aider", On: "Yuu", kun: "susumeru", hira: "すすめる", kata: "ユウ"},
    {kanji: "倖", sens: "bonheur", On: "Kou", kun: "shiawase", hira: "しあわせ", kata: "コウ"},
    {kanji: "倭", sens: "ancien Japon", On: "Wa", kun: "yamato", hira: "やまと", kata: "ワ"},
    {kanji: "偲", sens: "se souvenir", On: "Shi", kun: "shinobu", hira: "しのぶ", kata: "シ"},
    {kanji: "允", sens: "permettre", On: "In", kun: "yurusu", hira: "ゆるす", kata: "イン"},
    {kanji: "冴", sens: "être clair/froid", On: "Go", kun: "saeru", hira: "さえる", kata: "ゴ"},
    {kanji: "凌", sens: "dépasser", On: "Ryou", kun: "shinogu", hira: "しのぐ", kata: "リョウ"},
    {kanji: "凜", sens: "froid, digne", On: "Rin", kun: "kibishii", hira: "きびしい", kata: "リン"},
    {kanji: "凪", sens: "calme plat", On: "", kun: "nagi ; nagu", hira: "なぎ, なぐ", kata: ""},
    {kanji: "凱", sens: "chant de victoire", On: "Gai", kun: "kachidoki", hira: "かちどき", kata: "ガイ"},
    {kanji: "勁", sens: "fort", On: "Kei", kun: "tsuyoi", hira: "つよい", kata: "ケイ"},
    {kanji: "勺", sens: "louche, mesure", On: "Shaku", kun: "", hira: "", kata: "シャク"},
    {kanji: "匁", sens: "monme, mesure", On: "", kun: "monme", hira: "もんめ", kata: ""},
    {kanji: "匡", sens: "corriger", On: "Kyou", kun: "tadasu", hira: "ただす", kata: "キョウ"},
    {kanji: "卯", sens: "lièvre (zodiaque)", On: "Bou", kun: "u", hira: "う", kata: "ボウ"},
    {kanji: "叡", sens: "intelligence", On: "Ei", kun: "kashikoi", hira: "かしこい", kata: "エイ"},
    {kanji: "只", sens: "seulement", On: "Shi", kun: "tada", hira: "ただ", kata: "シ"},
    {kanji: "叶", sens: "se réaliser", On: "Kyou", kun: "kanau", hira: "かなう", kata: "キョウ"},
    {kanji: "哉", sens: "suffixe exclamatif", On: "Sai", kun: "kana", hira: "かな", kata: "サイ"},
    {kanji: "啄", sens: "picorer", On: "Taku", kun: "tsuibamu", hira: "ついばむ", kata: "タク"},
    {kanji: "喬", sens: "haut", On: "Kyou", kun: "takai", hira: "たかい", kata: "キョウ"},
    {kanji: "嘉", sens: "excellent", On: "Ka", kun: "yoi", hira: "よい", kata: "カ"},
    {kanji: "圭", sens: "bijou en jade", On: "Kei", kun: "", hira: "", kata: "ケイ"},
    {kanji: "奎", sens: "étoile, écriture", On: "Kei", kun: "", hira: "", kata: "ケイ"},
    {kanji: "嬉", sens: "heureux", On: "Ki", kun: "ureshii", hira: "うれしい", kata: "キ"},
    {kanji: "孟", sens: "aîné, chef", On: "Mou", kun: "kashira", hira: "かしら", kata: "モウ"},
    {kanji: "宏", sens: "vaste", On: "Kou", kun: "hiroi", hira: "ひろい", kata: "コウ"},
    {kanji: "宥", sens: "pardonner", On: "Yuu", kun: "nadameru", hira: "なだめる", kata: "ユウ"},
    {kanji: "寅", sens: "tigre (zodiaque)", On: "In", kun: "tora", hira: "とら", kata: "イン"},
    {kanji: "尭", sens: "haut, lointain", On: "Gyou", kun: "takai", hira: "たかい", kata: "ギョウ"},
    {kanji: "峻", sens: "raide, sévère", On: "Shun", kun: "kewashii", hira: "けわしい", kata: "シュン"},
    {kanji: "崚", sens: "montagne abrupte", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "嵩", sens: "volume, s'accumuler", On: "Suu", kun: "kasa", hira: "かさ", kata: "スウ"},
    {kanji: "嵯", sens: "escarpé", On: "Sa", kun: "kewashii", hira: "けわしい", kata: "サ"},
    {kanji: "嶺", sens: "pic de montagne", On: "Rei", kun: "mine", hira: "みね", kata: "レイ"},
    {kanji: "巌", sens: "gros rocher", On: "Gan", kun: "iwa", hira: "いわ", kata: "ガン"},
    {kanji: "巴", sens: "tourbillon", On: "Ha", kun: "tomoe", hira: "ともえ", kata: "ハ"},
    {kanji: "巽", sens: "sud-est", On: "Son", kun: "tatsumi", hira: "たつみ", kata: "ソン"},
    {kanji: "庄", sens: "village, manoir", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "弘", sens: "vaste", On: "Kou", kun: "hiroi", hira: "ひろい", kata: "コウ"},
    {kanji: "彗", sens: "comète", On: "Sui", kun: "houki", hira: "ほうき", kata: "スイ"},
    {kanji: "彦", sens: "jeune homme", On: "Gen", kun: "hiko", hira: "ひこ", kata: "ゲン"},
    {kanji: "彪", sens: "tacheté", On: "Hyou", kun: "", hira: "", kata: "ヒョウ"},
    {kanji: "彬", sens: "raffiné", On: "Hin", kun: "uruwashii", hira: "うるわしい", kata: "ヒン"},
    {kanji: "怜", sens: "intelligent", On: "Rei", kun: "satoi", hira: "さとい", kata: "レイ"},
// ------------------JLPT N1 Groupe 12-------------------
    {kanji: "恕", sens: "excuser", On: "Jo", kun: "yurusu", hira: "ゆるす", kata: "ジョ"},
    {kanji: "悌", sens: "amour fraternel", On: "Tei", kun: "", hira: "", kata: "テイ"},
    {kanji: "惇", sens: "sincère", On: "Jun", kun: "atsui", hira: "あつい", kata: "ジュン"},
    {kanji: "惟", sens: "penser", On: "I", kun: "omou", hira: "おもう", kata: "イ"},
    {kanji: "惣", sens: "tout", On: "Sou", kun: "subete", hira: "すべて", kata: "ソウ"},
    {kanji: "慧", sens: "sagesse", On: "Kei", kun: "satoi", hira: "さとい", kata: "ケイ"},
    {kanji: "捷", sens: "victoire, rapide", On: "Shou", kun: "katsu", hira: "かつ", kata: "ショウ"},
    {kanji: "捺", sens: "presser", On: "Natsu", kun: "osu", hira: "おす", kata: "ナツ"},
    {kanji: "敦", sens: "gentil, industrieux", On: "Ton", kun: "atsui", hira: "あつい", kata: "トン"},
    {kanji: "斐", sens: "beau", On: "Hi", kun: "", hira: "", kata: "ヒ"},
    {kanji: "於", sens: "à, dans", On: "O", kun: "oite", hira: "おいて", kata: "オ"},
    {kanji: "旭", sens: "soleil levant", On: "Kyoku", kun: "asahi", hira: "あさひ", kata: "キョク"},
    {kanji: "昂", sens: "s'élever", On: "Kou", kun: "takaburu", hira: "たかぶる", kata: "コウ"},
    {kanji: "昌", sens: "prospère", On: "Shou", kun: "sakan", hira: "さかん", kata: "ショウ"},
    {kanji: "昴", sens: "Pléiades", On: "Bou ; Kou", kun: "subaru", hira: "すばる", kata: "ボウ, コウ"},
    {kanji: "晃", sens: "clair", On: "Kou", kun: "akiraka", hira: "あきらか", kata: "コウ"},
    {kanji: "晋", sens: "avancer", On: "Shin", kun: "susumu", hira: "すすむ", kata: "シン"},
    {kanji: "晏", sens: "paisible, tard", On: "An", kun: "osoi", hira: "おそい", kata: "アン"},
    {kanji: "晟", sens: "brillant", On: "Sei", kun: "akiraka", hira: "あきらか", kata: "セイ"},
    {kanji: "晨", sens: "matin", On: "Shin", kun: "ashita", hira: "あした", kata: "シン"},
    {kanji: "智", sens: "sagesse", On: "Chi", kun: "", hira: "", kata: "チ"},
    {kanji: "暉", sens: "briller", On: "Ki", kun: "kagayaku", hira: "かがやく", kata: "キ"},
    {kanji: "暢", sens: "sans entrave", On: "Chou", kun: "nobiru", hira: "のびる", kata: "チョウ"},
    {kanji: "曙", sens: "aube", On: "Sho", kun: "akebono", hira: "あけぼこ", kata: "ショ"},
    {kanji: "朋", sens: "ami", On: "Hou", kun: "tomo", hira: "とも", kata: "ホウ"},
    {kanji: "朔", sens: "premier jour du mois", On: "Saku", kun: "tsuitachi", hira: "ついたち", kata: "サク"},
    {kanji: "李", sens: "prune (arbre)", On: "Ri", kun: "sumomo", hira: "すもも", kata: "リ"},
    {kanji: "杏", sens: "abricot", On: "Kyou", kun: "anzu", hira: "あんず", kata: "キョウ"},
    {kanji: "杜", sens: "bois", On: "To", kun: "mori", hira: "もり", kata: "ト"},
    {kanji: "柊", sens: "houx", On: "Shuu", kun: "hiiragi", hira: "ひいらぎ", kata: "シュウ"},
    {kanji: "柚", sens: "yuzu", On: "Yuu", kun: "yuzu", hira: "ゆず", kata: "ユウ"},
    {kanji: "柾", sens: "grain droit", On: "", kun: "masame", hira: "まさめ", kata: ""},
    {kanji: "栗", sens: "châtaigne", On: "Ritsu", kun: "kuri", hira: "くり", kata: "リツ"},
    {kanji: "栞", sens: "marque-page", On: "Kan", kun: "shiori", hira: "しおり", kata: "カン"},
    {kanji: "桂", sens: "laurier", On: "Kei", kun: "katsura", hira: "かつら", kata: "ケイ"},
    {kanji: "桐", sens: "paulownia", On: "Tou", kun: "kiri", hira: "きり", kata: "トウ"},
    {kanji: "梓", sens: "catalpa", On: "Shi", kun: "azusa", hira: "あずさ", kata: "シ"},
    {kanji: "梢", sens: "cime des arbres", On: "Shou", kun: "kozue", hira: "こずえ", kata: "ショウ"},
    {kanji: "梧", sens: "parasol chinois", On: "Go", kun: "aogiri", hira: "あおぎり", kata: "ゴ"},
    {kanji: "椋", sens: "muku (arbre)", On: "Ryou", kun: "muku", hira: "むく", kata: "リョウ"},
    {kanji: "椰", sens: "cocotier", On: "Ya", kun: "yashi", hira: "やし", kata: "ヤ"},
    {kanji: "椿", sens: "camélia", On: "Chin", kun: "tsubaki", hira: "つばき", kata: "チン"},
    {kanji: "楊", sens: "saule", On: "You", kun: "yanagi", hira: "やなぎ", kata: "ヨウ"},
    {kanji: "楓", sens: "érable", On: "Fuu", kun: "kaede", hira: "かえで", kata: "フウ"},
    {kanji: "楠", sens: "camphrier", On: "Nan", kun: "kusunoki", hira: "くすのき", kata: "ナン"},
    {kanji: "榛", sens: "noisetier", On: "Shin", kun: "hashibami", hira: "はしばみ", kata: "シン"},
    {kanji: "槙", sens: "pin bouddhiste", On: "Ten", kun: "maki", hira: "まき", kata: "テン"},
    {kanji: "槻", sens: "zelkova", On: "Ki", kun: "tsuki", hira: "つき", kata: "キ"},
    {kanji: "樺", sens: "bouleau", On: "Ka", kun: "kaba", hira: "かば", kata: "カ"},
    {kanji: "橘", sens: "mandarinier", On: "Kitsu", kun: "tachibana", hira: "たちばな", kata: "キツ"},
    {kanji: "檀", sens: "bois de santal", On: "Dan", kun: "mayumi", hira: "まゆみ", kata: "ダン"},
    {kanji: "欣", sens: "joie", On: "Kin", kun: "yorokobu", hira: "よろこぶ", kata: "キン"},
    {kanji: "欽", sens: "respecter", On: "Kin", kun: "tsutsushimu", hira: "つつしむ", kata: "キン"},
    {kanji: "毅", sens: "ferme", On: "Ki", kun: "tsuyoi", hira: "つよい", kata: "キ"},
    {kanji: "毬", sens: "balle", On: "Kyuu", kun: "iga ; mari", hira: "いが, まり", kata: "キュウ"},
    {kanji: "汐", sens: "marée", On: "Seki", kun: "shio", hira: "しお", kata: "セキ"},
    {kanji: "洲", sens: "continent", On: "Shuu", kun: "su", hira: "す", kata: "シュウ"},
    {kanji: "洵", sens: "vérité", On: "Jun", kun: "makoto", hira: "まこと", kata: "ジュン"},
    {kanji: "洸", sens: "eau bouillonnante", On: "Kou", kun: "waku", hira: "わく", kata: "コウ"},
    {kanji: "浩", sens: "vaste", On: "Kou", kun: "hiroi", hira: "ひろい", kata: "コウ"},
    {kanji: "淳", sens: "pur, gentil", On: "Jun", kun: "atsui", hira: "あつい", kata: "ジュン"},
    {kanji: "渚", sens: "rivage", On: "Sho", kun: "nagisa", hira: "なぎさ", kata: "ショ"},
    {kanji: "渥", sens: "gentillesse", On: "Aku", kun: "atsui", hira: "あつい", kata: "アク"},
    {kanji: "滉", sens: "profond (eau)", On: "Kou", kun: "fukai", hira: "ふかい", kata: "コウ"},
    {kanji: "漱", sens: "se gargariser", On: "Sou", kun: "kuchisusugu", hira: "くちすすぐ", kata: "ソウ"},
    {kanji: "澪", sens: "sillage", On: "Rei", kun: "mio", hira: "みお", kata: "レイ"},
    {kanji: "熙", sens: "brillant", On: "Ki", kun: "hikaru", hira: "ひかる", kata: "キ"},
    {kanji: "燎", sens: "brûler", On: "Ryou", kun: "kagaribi", hira: "かがりび", kata: "リョウ"},
    {kanji: "燦", sens: "brillant", On: "San", kun: "kirameku", hira: "きらめく", kata: "サン"},
    {kanji: "燿", sens: "briller", On: "You", kun: "kagayaku", hira: "かがやく", kata: "ヨウ"},
    {kanji: "爾", sens: "toi, ainsi", On: "Ji", kun: "nanji", hira: "なんじ", kata: "ジ"},
    {kanji: "猪", sens: "sanglier", On: "Cho", kun: "inoshishi", hira: "いのしし", kata: "チョ"},
    {kanji: "玖", sens: "neuf, beau jade", On: "Kyuu", kun: "", hira: "", kata: "キュウ"},
    {kanji: "玲", sens: "son de bijoux", On: "Rei", kun: "", hira: "", kata: "レイ"},
    {kanji: "琉", sens: "lapis-lazuli", On: "Ryuu", kun: "", hira: "", kata: "リュウ"},
    {kanji: "琢", sens: "polir", On: "Taku", kun: "migaku", hira: "みがく", kata: "タク"},
    {kanji: "琳", sens: "joyau", On: "Rin", kun: "", hira: "", kata: "リン"},
    {kanji: "瑚", sens: "corail", On: "Ko", kun: "", hira: "", kata: "コ"},
    {kanji: "瑛", sens: "cristal", On: "Ei", kun: "", hira: "", kata: "エイ"},
    {kanji: "瑞", sens: "auspicieux", On: "Zui", kun: "mizu", hira: "みず", kata: "ズイ"},
    {kanji: "瑳", sens: "polir", On: "Sa", kun: "migaku", hira: "みがく", kata: "サ"},
    {kanji: "瑶", sens: "beau jade", On: "You", kun: "tama", hira: "たま", kata: "ヨウ"},
    {kanji: "甫", sens: "commencement", On: "Ho", kun: "hajimete", hira: "はじめて", kata: "ホ"},
    {kanji: "皐", sens: "mai (lunaire)", On: "Kou", kun: "satsuki", hira: "さつき", kata: "コウ"},
    {kanji: "皓", sens: "blanc", On: "Kou", kun: "shiroi", hira: "しろい", kata: "コウ"},
    {kanji: "眸", sens: "pupille", On: "Bou", kun: "hitomi", hira: "ひとみ", kata: "ボウ"},
    {kanji: "碧", sens: "bleu-vert", On: "Heki", kun: "midori", hira: "みどり", kata: "ヘキ"},
    {kanji: "碩", sens: "grand", On: "Seki", kun: "ookii", hira: "おおきい", kata: "セキ"},
    {kanji: "磯", sens: "rivage rocheux", On: "Ki", kun: "iso", hira: "いそ", kata: "キ"},
    {kanji: "祐", sens: "aide divine", On: "Yuu", kun: "tasukeru", hira: "たすける", kata: "ユウ"},
    {kanji: "禄", sens: "stipende", On: "Roku", kun: "fuchi", hira: "ふち", kata: "ロク"},
    {kanji: "禎", sens: "auspicieux", On: "Tei", kun: "saiwai", hira: "さいわい", kata: "テイ"},
    {kanji: "秦", sens: "dynastie Qin", On: "Shin", kun: "hata", hira: "はた", kata: "シン"},
// ------------------JLPT N1 Groupe 13-------------------
    {kanji: "稀", sens: "rare", On: "Ki", kun: "mare", hira: "まれ", kata: "キ"},
    {kanji: "稔", sens: "récolte", On: "Nen", kun: "minoru", hira: "みのる", kata: "ネン"},
    {kanji: "稜", sens: "arête", On: "Ryou", kun: "kado", hira: "かど", kata: "リョウ"},
    {kanji: "穣", sens: "récolte abondante", On: "Jou", kun: "yutaka", hira: "ゆたか", kata: "ジョウ"},
    {kanji: "竣", sens: "finir", On: "Shun", kun: "owaru", hira: "おわる", kata: "シュン"},
    {kanji: "笙", sens: "orgue à bouche", On: "Shou", kun: "fue", hira: "ふえ", kata: "ショウ"},
    {kanji: "笹", sens: "bambou nain", On: "", kun: "sasa", hira: "ささ", kata: ""},
    {kanji: "紗", sens: "gaze", On: "Sa", kun: "usuginu", hira: "うすぎぬ", kata: "サ"},
    {kanji: "紘", sens: "vaste", On: "Kou", kun: "ootsuna", hira: "おおつな", kata: "コウ"},
    {kanji: "紬", sens: "soie pongee", On: "Chuu", kun: "tsumugi", hira: "つむぎ", kata: "チュウ"},
    {kanji: "絃", sens: "corde (instrument)", On: "Gen", kun: "ito", hira: "いと", kata: "ゲン"},
    {kanji: "絢", sens: "brillant", On: "Ken", kun: "aya", hira: "あや", kata: "ケン"},
    {kanji: "綜", sens: "rassembler", On: "Sou", kun: "suberu", hira: "すべる", kata: "ソウ"},
    {kanji: "綸", sens: "fil, édit", On: "Rin", kun: "ito", hira: "いと", kata: "リン"},
    {kanji: "綺", sens: "magnifique", On: "Ki", kun: "kirei", hira: "きれい", kata: "キ"},
    {kanji: "綾", sens: "motif sergé", On: "Ryou", kun: "aya", hira: "あや", kata: "リョウ"},
    {kanji: "緋", sens: "écarlate", On: "Hi", kun: "ake", hira: "あけ", kata: "ヒ"},
    {kanji: "翔", sens: "voler", On: "Shou", kun: "kakeru ; tobu", hira: "かける, とぶ", kata: "ショウ"},
    {kanji: "翠", sens: "vert, martin-pêcheur", On: "Sui", kun: "midori", hira: "みどり", kata: "スイ"},
    {kanji: "耀", sens: "briller", On: "You", kun: "kagayaku", hira: "かがやく", kata: "ヨウ"},
    {kanji: "耶", sens: "particule interrogative", On: "Ya", kun: "ka", hira: "か", kata: "ヤ"},
    {kanji: "聡", sens: "intelligent", On: "Sou", kun: "satoi", hira: "さとい", kata: "ソウ"},
    {kanji: "肇", sens: "début", On: "Chou", kun: "hajimeru", hira: "はじめる", kata: "チョウ"},
    {kanji: "胡", sens: "barbare", On: "Ko", kun: "ebisu", hira: "えびす", kata: "コ"},
    {kanji: "胤", sens: "descendance", On: "In", kun: "tane", hira: "たね", kata: "イン"},
    {kanji: "脩", sens: "discipline", On: "Shuu", kun: "osameru", hira: "おさめる", kata: "シュウ"},
    {kanji: "脹", sens: "enfler", On: "Chou", kun: "fukuramu", hira: "ふくらむ", kata: "チョウ"},
    {kanji: "舜", sens: "Shun (empereur mythique)", On: "Shun", kun: "", hira: "", kata: "シュン"},
    {kanji: "芙", sens: "lotus", On: "Fu", kun: "", hira: "", kata: "フ"},
    {kanji: "芹", sens: "persil", On: "Kin", kun: "seri", hira: "せり", kata: "キン"},
    {kanji: "苑", sens: "jardin", On: "En", kun: "sono", hira: "その", kata: "エン"},
    {kanji: "茄", sens: "aubergine", On: "Ka", kun: "nasu", hira: "なす", kata: "カ"},
    {kanji: "茅", sens: "miscanthus", On: "Bou", kun: "kaya", hira: "かや", kata: "ボウ"},
    {kanji: "茉", sens: "jasmin", On: "Matsu", kun: "", hira: "", kata: "マツ"},
    {kanji: "茜", sens: "garance", On: "Sen", kun: "akane", hira: "あかね", kata: "セン"},
    {kanji: "莉", sens: "jasmin", On: "Ri", kun: "", hira: "", kata: "リ"},
    {kanji: "莞", sens: "souriant", On: "Kan", kun: "igusa", hira: "いぐさ", kata: "カン"},
    {kanji: "菖", sens: "iris", On: "Shou", kun: "ayame", hira: "あやめ", kata: "ショウ"},
    {kanji: "菫", sens: "violette", On: "Kin", kun: "sumire", hira: "すみれ", kata: "キン"},
    {kanji: "萌", sens: "bourgeonner", On: "Hou", kun: "moeru", hira: "もえる", kata: "ホウ"},
    {kanji: "萩", sens: "lespédèze", On: "Shuu", kun: "hagi", hira: "はぎ", kata: "シュウ"},
    {kanji: "葵", sens: "rose trémière", On: "Ki", kun: "aoi", hira: "あおい", kata: "キ"},
    {kanji: "蒔", sens: "semer", On: "Shi", kun: "maku", hira: "まく", kata: "シ"},
    {kanji: "蒼", sens: "bleu pâle", On: "Sou", kun: "aoi", hira: "あおい", kata: "ソウ"},
    {kanji: "蓉", sens: "lotus", On: "You", kun: "", hira: "", kata: "ヨウ"},
    {kanji: "蓮", sens: "lotus", On: "Ren", kun: "hasu", hira: "はす", kata: "レン"},
    {kanji: "蔦", sens: "lierre", On: "Chou", kun: "tsuta", hira: "つた", kata: "チョウ"},
    {kanji: "蕉", sens: "bananier", On: "Shou", kun: "", hira: "", kata: "ショウ"},
    {kanji: "蕗", sens: "pétasite", On: "Ro", kun: "fuki", hira: "ふき", kata: "ロ"},
    {kanji: "蘭", sens: "orchidée", On: "Ran", kun: "", hira: "", kata: "ラン"},
    {kanji: "蝶", sens: "papillon", On: "Chou", kun: "", hira: "", kata: "チョウ"},
    {kanji: "衿", sens: "col", On: "Kin", kun: "eri", hira: "えり", kata: "キン"},
    {kanji: "袈", sens: "kesa (vêtement moine)", On: "Ke", kun: "", hira: "", kata: "ケ"},
    {kanji: "裟", sens: "kesa", On: "Sa", kun: "", hira: "", kata: "サ"},
    {kanji: "詢", sens: "consulter", On: "Jun", kun: "hakaru", hira: "はかる", kata: "ジュン"},
    {kanji: "誼", sens: "amitié", On: "Gi", kun: "yoshimi", hira: "よしみ", kata: "ギ"},
    {kanji: "諄", sens: "répétitif", On: "Shun", kun: "kudoi", hira: "くどい", kata: "シュン"},
    {kanji: "諒", sens: "comprendre", On: "Ryou", kun: "makoto", hira: "まこと", kata: "リョウ"},
    {kanji: "赳", sens: "fort et brave", On: "Kyuu", kun: "", hira: "", kata: "キュウ"},
    {kanji: "輔", sens: "aider", On: "Ho", kun: "tasukeru", hira: "たすける", kata: "ホ"},
    {kanji: "迪", sens: "voie", On: "Teki", kun: "michi", hira: "みち", kata: "テキ"},
    {kanji: "遥", sens: "lointain", On: "You", kun: "haruka", hira: "はるか", kata: "ヨウ"},
    {kanji: "遼", sens: "lointain", On: "Ryou", kun: "", hira: "", kata: "リョウ"},
    {kanji: "郁", sens: "parfumé", On: "Iku", kun: "kaoru", hira: "かおる", kata: "イク"},
    {kanji: "銑", sens: "fonte (métal)", On: "Sen", kun: "", hira: "", kata: "セン"},
    {kanji: "錘", sens: "poids, fuseau", On: "Sui", kun: "tsumu", hira: "つむ", kata: "スイ"},
    {kanji: "阿", sens: "flatter", On: "A", kun: "omoneru", hira: "おもねる", kata: "ア"},
    {kanji: "隼", sens: "faucon pèlerin", On: "Shun", kun: "hayabusa", hira: "はやぶさ", kata: "シュン"},
    {kanji: "雛", sens: "poussin", On: "Suu", kun: "hina", hira: "ひな", kata: "スウ"},
    {kanji: "霞", sens: "brume", On: "Ka", kun: "kasumi", hira: "かすみ", kata: "カ"},
    {kanji: "靖", sens: "pacifier", On: "Sei", kun: "yasunjiru", hira: "やすんじる", kata: "セイ"},
    {kanji: "鞠", sens: "balle", On: "Kiku", kun: "mari", hira: "まり", kata: "キク"},
    {kanji: "頌", sens: "éloge", On: "Shou", kun: "homeru", hira: "ほめる", kata: "ショウ"},
    {kanji: "颯", sens: "soudain", On: "Satsu", kun: "satto", hira: "さっと", kata: "サツ"},
    {kanji: "馨", sens: "parfum", On: "Kei", kun: "kaoru", hira: "かおる", kata: "ケイ"},
    {kanji: "駿", sens: "cheval rapide", On: "Shun", kun: "", hira: "", kata: "シュン"},
    {kanji: "魁", sens: "pionnier", On: "Kai", kun: "sakigake", hira: "さきがけ", kata: "カイ"},
    {kanji: "鮎", sens: "ayu (poisson)", On: "Nen", kun: "ayu", hira: "あゆ", kata: "ネン"},
    {kanji: "鯉", sens: "carpe", On: "Ri", kun: "koi", hira: "こい", kata: "リ"},
    {kanji: "鯛", sens: "dorade", On: "Chou", kun: "tai", hira: "たい", kata: "チョウ"},
    {kanji: "鳩", sens: "pigeon", On: "Kyuu", kun: "hato", hira: "はと", kata: "キュウ"},
    {kanji: "鳳", sens: "phénix", On: "Hou", kun: "", hira: "", kata: "ホウ"},
    {kanji: "鴻", sens: "grand oiseau", On: "Kou", kun: "ootori", hira: "おおとり", kata: "コウ"},
    {kanji: "鵬", sens: "oiseau géant mythique", On: "Hou", kun: "ootori", hira: "おおとり", kata: "ホウ"},
    {kanji: "鷹", sens: "faucon, aigle", On: "You", kun: "taka", hira: "たか", kata: "ヨウ"},
    {kanji: "麟", sens: "kirin", On: "Rin", kun: "", hira: "", kata: "リン"},
    {kanji: "麿", sens: "maro", On: "", kun: "maro", hira: "まろ", kata: ""},
    {kanji: "黎", sens: "aube", On: "Rei", kun: "kuroi", hira: "くろい", kata: "レイ"},
    {kanji: "黛", sens: "sourcils noircis", On: "Tai", kun: "mayuzumi", hira: "まゆずみ", kata: "タイ"},
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

let KanjiStat = JSON.parse(localStorage.getItem('KanjiStatData')) || [
    {niveau: "N5G1", kanji: "一", fail: 1, win: 0, number: 0}
];
let NiveauJLPT = [
// ------------- -JLPT N1 ----------
    {niveau: "N1G1", place: [992, 1084]},
    {niveau: "N1G2", place: [1085, 1177]},
    {niveau: "N1G3", place: [1178, 1270]},
    {niveau: "N1G4", place: [1271, 1363]},
    {niveau: "N1G5", place: [1364, 1456]},
    {niveau: "N1G6", place: [1457, 1549]},
    {niveau: "N1G7", place: [1550, 1642]},
    {niveau: "N1G8", place: [1643, 1735]},
    {niveau: "N1G9", place: [1736, 1828]},
    {niveau: "N1G10", place: [1829, 1921]},
    {niveau: "N1G11", place: [1922, 2014]},
    {niveau: "N1G12", place: [2015, 2107]},
    {niveau: "N1G13", place: [2108, 2196]},
//---------- JLPT N2 ---------
    {niveau: "N2G1", place: [623, 668]},
    {niveau: "N2G2", place: [669, 714]},
    {niveau: "N2G3", place: [715, 760]},
    {niveau: "N2G4", place: [761, 806]},
    {niveau: "N2G5", place: [807, 852]},
    {niveau: "N2G6", place: [853, 898]},
    {niveau: "N2G7", place: [899, 944]},
    {niveau: "N2G8", place: [945, 991]},
// ------- JLPT N3v --------
    {niveau: "N3G1", place: [253, 299]},
    {niveau: "N3G2", place: [300, 345]},
    {niveau: "N3G3", place: [346, 391]},
    {niveau: "N3G4", place: [392, 438]},
    {niveau: "N3G5", place: [439, 484]},
    {niveau: "N3G6", place: [485, 530]},
    {niveau: "N3G7", place: [531, 576]},
    {niveau: "N3G8", place: [577, 622]},
// -------- JLPT N4 --------
    {niveau: "N4G1", place: [76, 121]},
    {niveau: "N4G2", place: [122, 166]},
    {niveau: "N4G3", place: [167, 208]},
    {niveau: "N4G4", place: [209, 252]},
    //-------- JLPT N5 -----
    {niveau: "N5G1", place: [0, 39]},
    {niveau: "N5G2", place: [40, 75]}

];

let KanjiRevisionList = [];

let CompteurVrai = 0;
let CompteurFaux = 0;
let CompteurKanji = 0; 

let AfficheKanjiLock = 0;

let ContenuBody = "";

let ComboString = localStorage.getItem("ComboSaved");
let CompteurCombo = (parseInt(ComboString) || 0);

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
let JLPTRevisionAfficheTrue = false;

let AfficheKanjiNow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let NumJLPT = 0;
let LockTableau = false; 

let HistoriqueNombreRandom = [];

let RNG = false; 

//-------------------------------------------Fonctions------------------------------------------

// ------------------------------Gestion des réponses-----------------------

function getValue(EnterPressed) { // Compare la réponse de l'utilisateur avec la réponse attendue

    Item = kanjiDataBase[NombreRandom];

    const ItemSens = Item.sens; 
    const ItemOn = Item.On; 
    const ItemKun = Item.kun; 
    const ItemHira = Item.hira; 
    const ItemKata = Item.kata; 

    let Sens = [];
    let On = [];
    let Kun = [];
    let Hira = [];
    let Kata = [];






    On = Item.On.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(";"); // Crée les réponses à comparé avec l'utilisateur
    Kun = Item.kun.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(";"); // Crée les réponses à comparé avec l'utilisateur
    Sens = Item.sens.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(","); // Crée les réponses à comparé avec l'utilisateur
    Hira = Item.hira.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(","); // Crée les réponses à comparé avec l'utilisateur
    Kata = Item.kata.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(","); // Crée les réponses à comparé avec l'utilisateur




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

    let KunCorrectHira = Hira.some(possibilite => {
        return possibilite.trim().toLowerCase() === ReponseUtilisateur();
    });

    let OnCorrectKata = Kata.some(possibilite => {
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
            HistoriqueStat(1);
            BonneReponse(); // Affiche le message de bonne réponse 
            HistoriqueReponses(1); // Affiche le kanji dans l'historique des bonnes réposnes
            ComboMeter(1); // Met à jour le combo
            PartieMeter(0); // met à jour l'affichage du nombre de réponses
            UpdateAffichagePartie(1); // met à jour l'affichage des bonnes & mauvaises réponses
            AffichageKanji(); // Affiche un nouveau Kanji 
            WipeInput(); // enlève la réponse de l'utilisateur
            BackgroundAnimation(1);
        }
        else { // Sinon affiche message de mauvaise réposne (si Entrer est appuyé)
        if (EnterPressed == 1){
            MauvaiseReponse(); 
        }
        }
    }
    else if (ReponseType == 2) { // Pareil pour le mode Lecture On

        if (OnCorrect || OnCorrectKata) {
            LastKanji();
            HistoriqueStat(1);
            BonneReponse();
            HistoriqueReponses(1);
            ComboMeter(1);
            PartieMeter(0);
            UpdateAffichagePartie(1);
            AffichageKanji();
            WipeInput();
            BackgroundAnimation(1);
        }
        else {
        if (EnterPressed == 1){
            MauvaiseReponse();
        }
        }
    
    }
    else if (ReponseType == 3) { // Pareil pour le mode Lecture Kun 

          if (KunCorrect || KunCorrectHira) {
            LastKanji();
            HistoriqueStat(1);
            BonneReponse();
            HistoriqueReponses(1);
            ComboMeter(1);
            PartieMeter(0);
            UpdateAffichagePartie(1);
            AffichageKanji();
            WipeInput();
            BackgroundAnimation(1);
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
    HistoriqueStat(0);
    HistoriqueReponses(0); // Affiche le kanji dans l'historique des skips (rouge)
    ComboMeter(0); // met à 0 le combo 
    PartieMeter(0); // met à jour l'affichage de la partie 
    UpdateAffichagePartie(0);
    BackgroundAnimation(0);
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

   BackgroundAnimation(0);

}

// -----------------------------Gestion Reset----------------------------

function PartieReset() { // Remet à 0 quasiment tout sauf le Combo Max et le mode sélectionné


    document.getElementById("HistoriqueBox").innerHTML = `
    <div id="HistoriqueJuste" class="HistoriqueVrai"></div>
    <div id="HistoriqueFaux" class="HistoriqueFaux"></div>
    `;
    CompteurKanji = 0;
    HistoriqueNombreRandom = [];
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

    PartieReset();
    
}

function FinPartie() { // Affiche l'écran de fin de partie 

    const AffichageJLPTContent = document.getElementById("AffichageJLPTConteneur");

    document.getElementById("HistoriqueBox").innerHTML = ``;

   AffichageJLPTContent.innerHTML = `
    <p id="PageOpacitor" class="PageOpacitor" onclick="ClearKanjisSelection()"></p>
    <div class="FinPartieBox">
        <h1>Kanji Learner</h1>
        <div>Resultats : ${HistoriquePourVrai.length}/${PartieLength}</div><BR>
        <div>Vous avez fait ${HistoriquePourFaux.length} fautes !</div>
        <button class="RecommencerButton" onclick="RecommencerPartie() ; ClearKanjisSelection()">Recommencer une partie</button>
        <BR>
        <div>Voici votre historique :</div><BR>
        <div class="HistoriqueBox">
            <div id="HistoriqueJuste" class="HistoriqueVrai"></div>
            <div id="HistoriqueFaux" class="HistoriqueFaux"></div>
        </div>
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
                    <td>${LeKanji.kata}</td></tr>
                    <tr class="ApparitionHistorique"><td>${LeKanji.sens}</td>
                    <td>${LeKanji.hira}</td></tr>
                    `;
            }
            else {
                HistoriqueString +=`   
                    <tr><td class="KanjiFauxTd">${j+1 + ". " + LeKanji.kanji}</td>
                    <td>${LeKanji.kata}</td></tr>
                    <tr><td>${LeKanji.sens}</td>
                    <td>${LeKanji.hira}</td></tr>
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
                    <td>${LaKanji.kata}</td></tr>
                    <tr class="ApparitionHistorique"><td>${LaKanji.sens}</td>
                    <td>${LaKanji.hira}</td></tr>
                    `;
            }
            else {
                HistoriqueString +=`   
                    <tr><td class="KanjiVraiTd">${k + 1 + ". " + LaKanji.kanji}</td>
                    <td> ${LaKanji.kata}</td></tr>
                    <tr><td>${LaKanji.sens}</td>
                    <td>${LaKanji.hira}</td></tr>
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
            <td>${LaKanji.kata}</td></tr>
            <tr><td>${LaKanji.sens}</td>
            <td>${LaKanji.hira}</td></tr>
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
            <td>${LeKanji.kata}</td></tr>
            <tr><td>${LeKanji.sens}</td>
            <td>${LeKanji.hira}</td></tr>
            `;
        
    }

    HistoriqueFaux.innerHTML += `<table class="Tableau_Kanji">${AffHistoriqueString}</table>`;

}

function HistoriqueStat(result) {

    let failed = 0;
    let won = 0;
    let exist = 0;
    let number = 0;

    let KanjiActuel = kanjiDataBase[NombreRandom].kanji;
    let KanjiIndex = 0;

    if (result == 0) { failed = 1} else { won = 1}

    KanjiStat.forEach(element => {
        number++;
        if (element.kanji == kanjiDataBase[NombreRandom].kanji) {
            exist = 1;
            KanjiIndex = number-1;
        } 

    });

    if (exist == 0) {

        NiveauJLPT.forEach(element => {

            if (NombreRandom >= element.place[0] && NombreRandom <= element.place[1])
            {
                KanjiStat.push({niveau:element.niveau, kanji:kanjiDataBase[NombreRandom].kanji, fail:failed, win:won, number:NombreRandom})
                console.log(NombreRandom);
            }

        });
    } 
    else 
    {
        KanjiStat[KanjiIndex].win += won;
        KanjiStat[KanjiIndex].fail += failed;

    }
    saveKanjiStat();

}

function saveKanjiStat() {
    localStorage.setItem('KanjiStatData', JSON.stringify(KanjiStat));
}

// -------------------------------Gestion Bouton Kanjis------------------------------
function KanjiSelectionOnLoad() {

    const TextJLPTElement = document.getElementById("TextJLPTSelected");

    TextJLPTElement.innerText = "Niveau : JLPT N" + JLPTSelect + " Groupe " +GroupSelect;

}


function KanjiSelectionApparition() {

    const AffichageJLPTElement = document.getElementById("AffichageJLPTConteneur");

    const AffichageJLPTContent = `<p id="PageOpacitor" class="PageOpacitor" onclick="ClearKanjisSelection()"></p>
    <div class="AffichageJLPT">
        <div class="JLPTText">Un carré ≈ 50 kanji (N1 ≈  100) </div>
        <div class="JLPTText">JLPT N5 : <button class="JLPTButton" onclick="KanjiSelection(5,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(5, 2) ; KanjiSelectionApparition()">2</button></div>
        <div class="JLPTText">JLPT N4 : <button class="JLPTButton" onclick="KanjiSelection(4,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(4, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(4, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(4, 4) ; KanjiSelectionApparition()">4</button></div>
        <div class="JLPTText">JLPT N3 : <button class="JLPTButton" onclick="KanjiSelection(3,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(3, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(3, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(3, 4) ; KanjiSelectionApparition()">4</button><button class="JLPTButton" onclick="KanjiSelection(3, 5) ; KanjiSelectionApparition()">5</button><button class="JLPTButton" onclick="KanjiSelection(3, 6) ; KanjiSelectionApparition()">6</button><button class="JLPTButton" onclick="KanjiSelection(3, 7) ; KanjiSelectionApparition()">7</button><button class="JLPTButton" onclick="KanjiSelection(3, 8) ; KanjiSelectionApparition()">8</button></div>
        <div class="JLPTText">JLPT N2 : <button class="JLPTButton" onclick="KanjiSelection(2,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(2, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(2, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(2, 4) ; KanjiSelectionApparition()">4</button><button class="JLPTButton" onclick="KanjiSelection(2, 5) ; KanjiSelectionApparition()">5</button><button class="JLPTButton" onclick="KanjiSelection(2, 6) ; KanjiSelectionApparition()">6</button><button class="JLPTButton" onclick="KanjiSelection(2, 7) ; KanjiSelectionApparition()">7</button><button class="JLPTButton" onclick="KanjiSelection(2, 8) ; KanjiSelectionApparition()">8</button></div>
        <div class="JLPTText">JLPT N1 : <button class="JLPTButton" onclick="KanjiSelection(1,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(1, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(1, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(1, 4) ; KanjiSelectionApparition()">4</button><button class="JLPTButton" onclick="KanjiSelection(1, 5) ; KanjiSelectionApparition()">5</button><button class="JLPTButton" onclick="KanjiSelection(1, 6) ; KanjiSelectionApparition()">6</button><button class="JLPTButton" onclick="KanjiSelection(1, 7) ; KanjiSelectionApparition()">7</button><button class="JLPTButton" onclick="KanjiSelection(1, 8) ; KanjiSelectionApparition()">8</button><button class="JLPTButton" onclick="KanjiSelection(1, 9) ; KanjiSelectionApparition()">9</button><button class="JLPTButton" onclick="KanjiSelection(1, 10) ; KanjiSelectionApparition()">10</button><button class="JLPTButton" onclick="KanjiSelection(1, 11) ; KanjiSelectionApparition()">11</button><button class="JLPTButton" onclick="KanjiSelection(1, 12) ; KanjiSelectionApparition()">12</button><button class="JLPTButton" onclick="KanjiSelection(1, 13) ; KanjiSelectionApparition()">13</button></div>
        <div><button class="RevoirButton" onclick="RevisionMode()">Practice / Révisions</button> <button class="JLPTRetour" onclick="KanjiSelectionApparition()">Retour</button></div>
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

function RevisionMode() {


    const AffichageJLPTElement = document.getElementById("AffichageJLPTConteneur");

    const AffichageJLPTContent = `<p id="PageOpacitor" class="PageOpacitor" onclick="ClearKanjisSelection()"></p>
    <div class="AffichageJLPTRevision">
        <div class="JLPTText">Un carré ≈ 50 kanji (N1 ≈  100) Mode révisions</div>
        <div class="JLPTText">Tout les ratés : <button class="JLPTButtonRevision" data-level="5" data-index="1" onclick="KanjiRevisionSelection(0 ,0)">0</button></div>
        <div class="JLPTText">JLPT N5 : <button class="JLPTButtonRevision" data-level="5" data-index="1" onclick="KanjiRevisionSelection(5,1)">1</button><button class="JLPTButtonRevision" data-level="5" data-index="2" onclick="KanjiRevisionSelection(5, 2)">2</button></div>
        <div class="JLPTText">JLPT N4 : <button class="JLPTButtonRevision" data-level="4" data-index="1" onclick="KanjiRevisionSelection(4,1)">1</button><button class="JLPTButtonRevision" data-level="4" data-index="2" onclick="KanjiRevisionSelection(4, 2)">2</button><button class="JLPTButtonRevision" data-level="4" data-index="3" onclick="KanjiRevisionSelection(4, 3)">3</button><button class="JLPTButtonRevision" data-level="4" data-index="4" onclick="KanjiRevisionSelection(4, 4)">4</button></div>
        <div class="JLPTText">JLPT N3 : <button class="JLPTButtonRevision" data-level="3" data-index="1" onclick="KanjiRevisionSelection(3,1)">1</button><button class="JLPTButtonRevision" data-level="3" data-index="2" onclick="KanjiRevisionSelection(3, 2)">2</button><button class="JLPTButtonRevision" data-level="3" data-index="3" onclick="KanjiRevisionSelection(3, 3)">3</button><button class="JLPTButtonRevision" data-level="3" data-index="4" onclick="KanjiRevisionSelection(3, 4)">4</button><button class="JLPTButtonRevision" data-level="3" data-index="5" onclick="KanjiRevisionSelection(3, 5)">5</button><button class="JLPTButtonRevision" data-level="3" data-index="6" onclick="KanjiRevisionSelection(3, 6)">6</button><button class="JLPTButtonRevision" data-level="3" data-index="7" onclick="KanjiRevisionSelection(3, 7)">7</button><button class="JLPTButtonRevision" data-level="3" data-index="8" onclick="KanjiRevisionSelection(3, 8)">8</button></div>
        <div class="JLPTText">JLPT N2 : <button class="JLPTButtonRevision" data-level="2" data-index="1" onclick="KanjiRevisionSelection(2,1)">1</button><button class="JLPTButtonRevision" data-level="2" data-index="2" onclick="KanjiRevisionSelection(2, 2)">2</button><button class="JLPTButtonRevision" data-level="2" data-index="3" onclick="KanjiRevisionSelection(2, 3)">3</button><button class="JLPTButtonRevision" data-level="2" data-index="4" onclick="KanjiRevisionSelection(2, 4)">4</button><button class="JLPTButtonRevision" data-level="2" data-index="5" onclick="KanjiRevisionSelection(2, 5)">5</button><button class="JLPTButtonRevision" data-level="2" data-index="6" onclick="KanjiRevisionSelection(2, 6)">6</button><button class="JLPTButtonRevision" data-level="2" data-index="7" onclick="KanjiRevisionSelection(2, 7)">7</button><button class="JLPTButtonRevision" data-level="2" data-index="8" onclick="KanjiRevisionSelection(2, 8)">8</button></div>
        <div class="JLPTText">JLPT N1 : <button class="JLPTButtonRevision" data-level="1" data-index="1" onclick="KanjiRevisionSelection(1,1)">1</button><button class="JLPTButtonRevision" data-level="1" data-index="2" onclick="KanjiRevisionSelection(1, 2)">2</button><button class="JLPTButtonRevision" data-level="1" data-index="3" onclick="KanjiRevisionSelection(1, 3)">3</button><button class="JLPTButtonRevision" data-level="1" data-index="4" onclick="KanjiRevisionSelection(1, 4)">4</button><button class="JLPTButtonRevision" data-level="1" data-index="5" onclick="KanjiRevisionSelection(1, 5)">5</button><button class="JLPTButtonRevision" data-level="1" data-index="6" onclick="KanjiRevisionSelection(1, 6)">6</button><button class="JLPTButtonRevision" data-level="1" data-index="7" onclick="KanjiRevisionSelection(1, 7)">7</button><button class="JLPTButtonRevision" data-level="1" data-index="8" onclick="KanjiRevisionSelection(1, 8)">8</button><button class="JLPTButtonRevision" data-level="1" data-index="9" onclick="KanjiRevisionSelection(1, 9)">9</button><button class="JLPTButtonRevision" data-level="1" data-index="10" onclick="KanjiRevisionSelection(1, 10)">10</button><button class="JLPTButtonRevision" data-level="1" data-index="11" onclick="KanjiRevisionSelection(1, 11)">11</button><button class="JLPTButtonRevision" data-level="1" data-index="12" onclick="KanjiRevisionSelection(1, 12)">12</button><button class="JLPTButtonRevision" data-level="1" data-index="13" onclick="KanjiRevisionSelection(1, 13)">13</button></div>
    <div><button class="RevoirButton" onclick="RevisionMode()">Practice / Révisions</button> <button class="JLPTRetour" onclick="KanjiSelectionApparition()">Retour</button></div>
    </div>`;

    if (JLPTRevisionAfficheTrue == false) {

        AffichageJLPTElement.innerHTML = AffichageJLPTContent;
        JLPTRevisionAfficheTrue = true;
 
    }
    else {
        JLPTAfficheTrue = false;
        KanjiSelectionApparition();
        JLPTRevisionAfficheTrue = false;

    }
    ButtonColor();



}

function KanjiRevisionSelection(JLPT, Group) {

const TextJLPTElement = document.getElementById("TextJLPTSelected");
   

    JLPTSelect = JLPT;
    GroupSelect = Group;
    KanjiRevisionList = [];
    const AffichageJLPTElement = document.getElementById("AffichageJLPTConteneur");

    let Niveau = "N"+JLPT+"G"+Group;
    if (JLPT == 0 && Group == 0) {
         KanjiStat.forEach(element => {
            if (element.win <= element.fail)
            {
                KanjiRevisionList.push(element.number);
            }
        
    });
    
    } else 
    {
        KanjiStat.forEach(element => {

            if (element.niveau == Niveau) 
                {
                    if (element.win <= element.fail)
                    {
                        KanjiRevisionList.push(element.number);
                    }
                }
            
        });
    }
    

    if (KanjiRevisionList.length <= 0) {
        const AffichageJLPTContent = `<p id="PageOpacitor" class="PageOpacitor" onclick="ClearKanjisSelection()"></p>
        <div class="AffichageJLPTRevision">
        <div class="JLPTText">Un carré ≈ 50 kanji (N1 ≈  100) Mode révisions</div>
        <div class="JLPTText">Tout les ratés : <button class="JLPTButtonRevision ; vert" data-level="5" data-index="1" onclick="KanjiRevisionSelection(0 ,0)">0</button></div>
        <div class="JLPTText">JLPT N5 : <button class="JLPTButtonRevision" data-level="5" data-index="1" onclick="KanjiRevisionSelection(5,1)">1</button><button class="JLPTButtonRevision" data-level="5" data-index="2" onclick="KanjiRevisionSelection(5, 2)">2</button></div>
        <div class="JLPTText">JLPT N4 : <button class="JLPTButtonRevision" data-level="4" data-index="1" onclick="KanjiRevisionSelection(4,1)">1</button><button class="JLPTButtonRevision" data-level="4" data-index="2" onclick="KanjiRevisionSelection(4, 2)">2</button><button class="JLPTButtonRevision" data-level="4" data-index="3" onclick="KanjiRevisionSelection(4, 3)">3</button><button class="JLPTButtonRevision" data-level="4" data-index="4" onclick="KanjiRevisionSelection(4, 4)">4</button></div>
        <div class="JLPTText">JLPT N3 : <button class="JLPTButtonRevision" data-level="3" data-index="1" onclick="KanjiRevisionSelection(3,1)">1</button><button class="JLPTButtonRevision" data-level="3" data-index="2" onclick="KanjiRevisionSelection(3, 2)">2</button><button class="JLPTButtonRevision" data-level="3" data-index="3" onclick="KanjiRevisionSelection(3, 3)">3</button><button class="JLPTButtonRevision" data-level="3" data-index="4" onclick="KanjiRevisionSelection(3, 4)">4</button><button class="JLPTButtonRevision" data-level="3" data-index="5" onclick="KanjiRevisionSelection(3, 5)">5</button><button class="JLPTButtonRevision" data-level="3" data-index="6" onclick="KanjiRevisionSelection(3, 6)">6</button><button class="JLPTButtonRevision" data-level="3" data-index="7" onclick="KanjiRevisionSelection(3, 7)">7</button><button class="JLPTButtonRevision" data-level="3" data-index="8" onclick="KanjiRevisionSelection(3, 8)">8</button></div>
        <div class="JLPTText">JLPT N2 : <button class="JLPTButtonRevision" data-level="2" data-index="1" onclick="KanjiRevisionSelection(2,1)">1</button><button class="JLPTButtonRevision" data-level="2" data-index="2" onclick="KanjiRevisionSelection(2, 2)">2</button><button class="JLPTButtonRevision" data-level="2" data-index="3" onclick="KanjiRevisionSelection(2, 3)">3</button><button class="JLPTButtonRevision" data-level="2" data-index="4" onclick="KanjiRevisionSelection(2, 4)">4</button><button class="JLPTButtonRevision" data-level="2" data-index="5" onclick="KanjiRevisionSelection(2, 5)">5</button><button class="JLPTButtonRevision" data-level="2" data-index="6" onclick="KanjiRevisionSelection(2, 6)">6</button><button class="JLPTButtonRevision" data-level="2" data-index="7" onclick="KanjiRevisionSelection(2, 7)">7</button><button class="JLPTButtonRevision" data-level="2" data-index="8" onclick="KanjiRevisionSelection(2, 8)">8</button></div>
        <div class="JLPTText">JLPT N1 : <button class="JLPTButtonRevision" data-level="1" data-index="1" onclick="KanjiRevisionSelection(1,1)">1</button><button class="JLPTButtonRevision" data-level="1" data-index="2" onclick="KanjiRevisionSelection(1, 2)">2</button><button class="JLPTButtonRevision" data-level="1" data-index="3" onclick="KanjiRevisionSelection(1, 3)">3</button><button class="JLPTButtonRevision" data-level="1" data-index="4" onclick="KanjiRevisionSelection(1, 4)">4</button><button class="JLPTButtonRevision" data-level="1" data-index="5" onclick="KanjiRevisionSelection(1, 5)">5</button><button class="JLPTButtonRevision" data-level="1" data-index="6" onclick="KanjiRevisionSelection(1, 6)">6</button><button class="JLPTButtonRevision" data-level="1" data-index="7" onclick="KanjiRevisionSelection(1, 7)">7</button><button class="JLPTButtonRevision" data-level="1" data-index="8" onclick="KanjiRevisionSelection(1, 8)">8</button><button class="JLPTButtonRevision" data-level="1" data-index="9" onclick="KanjiRevisionSelection(1, 9)">9</button><button class="JLPTButtonRevision" data-level="1" data-index="10" onclick="KanjiRevisionSelection(1, 10)">10</button><button class="JLPTButtonRevision" data-level="1" data-index="11" onclick="KanjiRevisionSelection(1, 11)">11</button><button class="JLPTButtonRevision" data-level="1" data-index="12" onclick="KanjiRevisionSelection(1, 12)">12</button><button class="JLPTButtonRevision" data-level="1" data-index="13" onclick="KanjiRevisionSelection(1, 13)">13</button></div>
        <div><button class="RevoirButton" onclick="RevisionMode()">Practice / Révisions</button> Pas de Kanji dans la liste</div>
        </div>`;
        
        AffichageJLPTElement.innerHTML = AffichageJLPTContent;
        JLPTRevisionAfficheTrue = true;
        ButtonColor();
    }
    else {
        SelectionKanji = [0, KanjiRevisionList.length-1];

        localStorage.setItem("SelectionSaved", JSON.stringify(SelectionKanji));
        localStorage.setItem("JLPTSaved", JLPT);
        localStorage.setItem("GroupSaved", Group);

        TextJLPTElement.innerText = "Niveau : JLPT N" + JLPT + " Groupe " +Group + "Révision";
        AffichageJLPTElement.innerHTML = "";
        JLPTRevisionAfficheTrue = false;
        JLPTAfficheTrue = false;
        PartieReset();
    }


}

function ButtonColor() {

    const boutons = document.querySelectorAll('.JLPTButtonRevision');

    boutons.forEach(element => {
        element.classList.remove('vert', 'rouge');
        const niveau = element.getAttribute('data-level');
        const index = element.getAttribute('data-index')

            if ( KanjiStat.some(kanji => kanji.niveau === `N${niveau}G${index}` && kanji.win <= kanji.fail))  
                {
                    element.classList.add('vert');
                }
            else {element.classList.add('rouge');}

        
   });


}

function ClearKanjisSelection() {

    const AffichageJLPTElement = document.getElementById("AffichageJLPTConteneur");

    AffichageJLPTElement.innerHTML = "";
    JLPTAfficheTrue = false;

}

function KanjiSelection(JLPT, Group) {

    const TextJLPTElement = document.getElementById("TextJLPTSelected");
    KanjiRevisionList = [];

    JLPTSelect = JLPT;
    GroupSelect = Group;

    if (JLPT == 5 && Group == 1) {SelectionKanji = [0,39];}
    else if (JLPT == 5 && Group == 2) {SelectionKanji = [40, 75];}
    else if (JLPT == 4 && Group == 1) {SelectionKanji = [76, 121];}
    else if (JLPT == 4 && Group == 2) {SelectionKanji = [122, 166];}
    else if (JLPT == 4 && Group == 3) {SelectionKanji = [167, 208];}
    else if (JLPT == 4 && Group == 4) {SelectionKanji = [209, 252];}
    else if (JLPT == 3 && Group == 1) {SelectionKanji = [253, 299];}
    else if (JLPT == 3 && Group == 2) {SelectionKanji = [300, 345];}
    else if (JLPT == 3 && Group == 3) {SelectionKanji = [346, 391];}
    else if (JLPT == 3 && Group == 4) {SelectionKanji = [392, 438];}
    else if (JLPT == 3 && Group == 5) {SelectionKanji = [439, 484];}
    else if (JLPT == 3 && Group == 6) {SelectionKanji = [485, 530];}
    else if (JLPT == 3 && Group == 7) {SelectionKanji = [531, 576];}
    else if (JLPT == 3 && Group == 8) {SelectionKanji = [577, 622];}

    else if (JLPT == 2 && Group == 1) {SelectionKanji = [623, 668];}
    else if (JLPT == 2 && Group == 2) {SelectionKanji = [669, 714];}
    else if (JLPT == 2 && Group == 3) {SelectionKanji = [715, 760];}
    else if (JLPT == 2 && Group == 4) {SelectionKanji = [761, 806];}
    else if (JLPT == 2 && Group == 5) {SelectionKanji = [807, 852];}
    else if (JLPT == 2 && Group == 6) {SelectionKanji = [853, 898];}
    else if (JLPT == 2 && Group == 7) {SelectionKanji = [899, 944];}
    else if (JLPT == 2 && Group == 8) {SelectionKanji = [945, 991];}   

    else if (JLPT == 1 && Group == 1) {SelectionKanji = [992, 1084];}
    else if (JLPT == 1 && Group == 2) {SelectionKanji = [1085, 1177];}
    else if (JLPT == 1 && Group == 3) {SelectionKanji = [1178, 1270];}
    else if (JLPT == 1 && Group == 4) {SelectionKanji = [1271, 1363];}
    else if (JLPT == 1 && Group == 5) {SelectionKanji = [1364, 1456];}
    else if (JLPT == 1 && Group == 6) {SelectionKanji = [1457, 1549];}
    else if (JLPT == 1 && Group == 7) {SelectionKanji = [1550, 1642];}
    else if (JLPT == 1 && Group == 8) {SelectionKanji = [1643, 1735];}
    else if (JLPT == 1 && Group == 9) {SelectionKanji = [1736, 1828];}
    else if (JLPT == 1 && Group == 10) {SelectionKanji = [1829, 1921];}
    else if (JLPT == 1 && Group == 11) {SelectionKanji = [1922, 2014];}
    else if (JLPT == 1 && Group == 12) {SelectionKanji = [2015, 2107];}
    else if (JLPT == 1 && Group == 13) {SelectionKanji = [2108, 2196];}

    

    localStorage.setItem("SelectionSaved", JSON.stringify(SelectionKanji));
    localStorage.setItem("JLPTSaved", JLPT);
    localStorage.setItem("GroupSaved", Group);

    TextJLPTElement.innerText = "Niveau : JLPT N" + JLPT + " Groupe " +Group;

    PartieReset();
}

function KanjiDansTableau(Kanji) { //  Crée une variable string qui contient tout le contenu du tableau de kanji

    let CeKanji = "";
    let KanjiDuTableau = kanjiDataBase[0];
    if (Kanji != 0) 
    {
        for (let i = Kanji[0]; i <= Kanji[1]; i++) { // Pour chaque éléments dans le tableau(valeurs) de kanji crée une ligne dans un tableau

            KanjiDuTableau = kanjiDataBase[i];
            CeKanji += `
                <tr>
                    <td>${KanjiDuTableau.kanji}</td>
                    <td>${KanjiDuTableau.sens}</td>
                    <td>${KanjiDuTableau.kata}</td>
                    <td>${KanjiDuTableau.hira}</td>
                </tr>`;

        }
    } else {

        KanjiStat.forEach(element => {
            let W = element.win;
            let F = element.fail;
            let Perc = 0; // Valeur par défaut si 0 tentative

            let total = W + F;

            if (total > 0) {
                // On divise les victoires par le total (Victoires + Échecs)
                Perc = Math.round((W / total) * 100); 
            }

            CeKanji += `
                <tr>
                    <td>${element.niveau}</td>
                    <td>${element.kanji}</td>
                    <td>${element.fail}</td>
                    <td>${element.win}</td>
                    <td>${Perc}%</td>
                </tr>`;
        });



    }

    return CeKanji; 

}

function AfficheTableauKanji() {

    const TableauKanjiElement = document.getElementById("TableauKanjiConteneur");

    if (LockTableau == false) {

        TableauKanjiElement.innerHTML = `
        <p id="PageOpacitor" class="PageOpacitor" onclick="ClearTableauMenu()"></p>
        <div id="ZoneTableau" class="TableauKanjiBox">
            <div class="TableauKanjiBox2">
                <div> STATS KANJI <button class="KanjiTableauBouton" onclick="AfficheKanji(0, 0)">+</button></div>
                <div>--- JLPT N5 ---</div>
                <div class="JLPT5Section">
                    <div>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(5, 1)">+</button><div id="JLPT5G1Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(5, 2)">+</button><div id="JLPT5G2Tableau" class="JLPTTableau"></div></div>
                </div>
                <div>--- JLPT N4 ---</div>
                <div class="JLPT4Section">
                    <div>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 1)">+</button><div id="JLPT4G1Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 2)">+</button><div id="JLPT4G2Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 3 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 3)">+</button><div id="JLPT4G3Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 4 <button class="KanjiTableauBouton" onclick="AfficheKanji(4, 4)">+</button><div id="JLPT4G4Tableau" class="JLPTTableau"></div></div>
                </div>
                <div>--- JLPT N3 ---</div>
                <div class="JLPT3Section">
                    <div>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 1)">+</button><div id="JLPT3G1Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 2)">+</button><div id="JLPT3G2Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 3 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 3)">+</button><div id="JLPT3G3Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 4 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 4)">+</button><div id="JLPT3G4Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 5 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 5)">+</button><div id="JLPT3G5Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 6 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 6)">+</button><div id="JLPT3G6Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 7 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 7)">+</button><div id="JLPT3G7Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 8 <button class="KanjiTableauBouton" onclick="AfficheKanji(3, 8)">+</button><div id="JLPT3G8Tableau" class="JLPTTableau"></div></div>
                </div>
                 <div>--- JLPT N2 ---</div>
                <div class="JLPT3Section">
                    <div>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 1)">+</button><div id="JLPT2G1Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 2)">+</button><div id="JLPT2G2Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 3 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 3)">+</button><div id="JLPT2G3Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 4 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 4)">+</button><div id="JLPT2G4Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 5 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 5)">+</button><div id="JLPT2G5Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 6 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 6)">+</button><div id="JLPT2G6Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 7 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 7)">+</button><div id="JLPT2G7Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 8 <button class="KanjiTableauBouton" onclick="AfficheKanji(2, 8)">+</button><div id="JLPT2G8Tableau" class="JLPTTableau"></div></div>
                </div>
                 <div>--- JLPT N1 ---</div>
                <div class="JLPT3Section">
                    <div>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 1)">+</button><div id="JLPT1G1Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 2)">+</button><div id="JLPT1G2Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 3 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 3)">+</button><div id="JLPT1G3Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 4 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 4)">+</button><div id="JLPT1G4Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 5 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 5)">+</button><div id="JLPT1G5Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 6 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 6)">+</button><div id="JLPT1G6Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 7 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 7)">+</button><div id="JLPT1G7Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 8 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 8)">+</button><div id="JLPT1G8Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 9 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 9)">+</button><div id="JLPT1G9Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 10 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 10)">+</button><div id="JLPT1G10Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 11 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 11)">+</button><div id="JLPT1G11Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 12 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 12)">+</button><div id="JLPT1G12Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 13 <button class="KanjiTableauBouton" onclick="AfficheKanji(1, 13)">+</button><div id="JLPT1G13Tableau" class="JLPTTableau"></div></div>
                </div>
                <button onclick="AfficheTableauKanji()">Retour</button>
                <div id="JLPTTableauDisplay"  class="JLPTTableauDisplay"></div>
            </div>
        </div>`;

        LockTableau = true;
    } else  {

        TableauKanjiElement.innerHTML = "";
        LockTableau = false;
    }

    ChangerBoutonTableau();

}

function ChangerBoutonTableau() {


    const boutons = document.querySelectorAll('.KanjiTableauBouton');

    boutons.forEach(bouton => {
        bouton.addEventListener('click', function() {
      
            boutons.forEach((b => {b.innerText = "+"}));

          
            if (this.innerText === "+"){
                this.innerText = "-";
            }
            else {
                this.innerText = "+";
            }

        });
    });

}

function ClearTableauMenu() {

    const TableauKanjiElement = document.getElementById("TableauKanjiConteneur");

    TableauKanjiElement.innerHTML = "";
    LockTableau = false;

    AfficheKanjiNow.forEach(element => {

        AfficheKanjiNow[(AfficheKanjiNow.indexOf(element))] = 0;

    });

}

function AfficheKanji(JLPT, Group) { // Affiche le tableau de kanji à l'aide de la fonction KanjiDansTableau()

    
    const Zone = document.getElementById("JLPTTableauDisplay");
    

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
    else if (JLPT == 2 && Group == 1) {KanjiDisplayed = [623, 668]; MonAffichage = AfficheTableauJLPT[14]; if (AfficheKanjiNow[14] == 0) {AfficheKanjiNow[14] = 1; NumJLPT = 1;} else {AfficheKanjiNow[14] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 2 && Group == 2) {KanjiDisplayed = [669, 714]; MonAffichage = AfficheTableauJLPT[15]; if (AfficheKanjiNow[15] == 0) {AfficheKanjiNow[15] = 1; NumJLPT = 1;} else {AfficheKanjiNow[15] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 2 && Group == 3) {KanjiDisplayed = [715, 760]; MonAffichage = AfficheTableauJLPT[16]; if (AfficheKanjiNow[16] == 0) {AfficheKanjiNow[16] = 1; NumJLPT = 1;} else {AfficheKanjiNow[16] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 2 && Group == 4) {KanjiDisplayed = [761, 806]; MonAffichage = AfficheTableauJLPT[17]; if (AfficheKanjiNow[17] == 0) {AfficheKanjiNow[17] = 1; NumJLPT = 1;} else {AfficheKanjiNow[17] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 2 && Group == 5) {KanjiDisplayed = [807, 852]; MonAffichage = AfficheTableauJLPT[18]; if (AfficheKanjiNow[18] == 0) {AfficheKanjiNow[18] = 1; NumJLPT = 1;} else {AfficheKanjiNow[18] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 2 && Group == 6) {KanjiDisplayed = [853, 898]; MonAffichage = AfficheTableauJLPT[19]; if (AfficheKanjiNow[19] == 0) {AfficheKanjiNow[19] = 1; NumJLPT = 1;} else {AfficheKanjiNow[19] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 2 && Group == 7) {KanjiDisplayed = [899, 944]; MonAffichage = AfficheTableauJLPT[20]; if (AfficheKanjiNow[20] == 0) {AfficheKanjiNow[20] = 1; NumJLPT = 1;} else {AfficheKanjiNow[20] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 2 && Group == 8) {KanjiDisplayed = [945, 990]; MonAffichage = AfficheTableauJLPT[21]; if (AfficheKanjiNow[21] == 0) {AfficheKanjiNow[21] = 1; NumJLPT = 1;} else {AfficheKanjiNow[21] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 1) {KanjiDisplayed = [992, 1084]; MonAffichage = AfficheTableauJLPT[22]; if (AfficheKanjiNow[22] == 0) {AfficheKanjiNow[22] = 1; NumJLPT = 1;} else {AfficheKanjiNow[22] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 2) {KanjiDisplayed = [1085, 1177]; MonAffichage = AfficheTableauJLPT[23]; if (AfficheKanjiNow[23] == 0) {AfficheKanjiNow[23] = 1; NumJLPT = 1;} else {AfficheKanjiNow[23] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 3) {KanjiDisplayed = [1178, 1270]; MonAffichage = AfficheTableauJLPT[24]; if (AfficheKanjiNow[24] == 0) {AfficheKanjiNow[24] = 1; NumJLPT = 1;} else {AfficheKanjiNow[24] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 4) {KanjiDisplayed = [1271, 1363]; MonAffichage = AfficheTableauJLPT[25]; if (AfficheKanjiNow[25] == 0) {AfficheKanjiNow[25] = 1; NumJLPT = 1;} else {AfficheKanjiNow[25] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 5) {KanjiDisplayed = [1364, 1456]; MonAffichage = AfficheTableauJLPT[26]; if (AfficheKanjiNow[26] == 0) {AfficheKanjiNow[26] = 1; NumJLPT = 1;} else {AfficheKanjiNow[26] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 6) {KanjiDisplayed = [1457, 1549]; MonAffichage = AfficheTableauJLPT[27]; if (AfficheKanjiNow[27] == 0) {AfficheKanjiNow[27] = 1; NumJLPT = 1;} else {AfficheKanjiNow[27] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 7) {KanjiDisplayed = [1550, 1642]; MonAffichage = AfficheTableauJLPT[28]; if (AfficheKanjiNow[28] == 0) {AfficheKanjiNow[28] = 1; NumJLPT = 1;} else {AfficheKanjiNow[28] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 8) {KanjiDisplayed = [1643, 1735]; MonAffichage = AfficheTableauJLPT[29]; if (AfficheKanjiNow[29] == 0) {AfficheKanjiNow[29] = 1; NumJLPT = 1;} else {AfficheKanjiNow[29] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 9) {KanjiDisplayed = [1736, 1828]; MonAffichage = AfficheTableauJLPT[30]; if (AfficheKanjiNow[30] == 0) {AfficheKanjiNow[30] = 1; NumJLPT = 1;} else {AfficheKanjiNow[30] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 10) {KanjiDisplayed = [1829, 1921]; MonAffichage = AfficheTableauJLPT[31]; if (AfficheKanjiNow[31] == 0) {AfficheKanjiNow[31] = 1; NumJLPT = 1;} else {AfficheKanjiNow[31] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 11) {KanjiDisplayed = [1922, 2014]; MonAffichage = AfficheTableauJLPT[32]; if (AfficheKanjiNow[32] == 0) {AfficheKanjiNow[32] = 1; NumJLPT = 1;} else {AfficheKanjiNow[32] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 12) {KanjiDisplayed = [2015, 2107]; MonAffichage = AfficheTableauJLPT[33]; if (AfficheKanjiNow[33] == 0) {AfficheKanjiNow[33] = 1; NumJLPT = 1;} else {AfficheKanjiNow[33] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 1 && Group == 13) {KanjiDisplayed = [2108, 2196]; MonAffichage = AfficheTableauJLPT[34]; if (AfficheKanjiNow[34] == 0) {AfficheKanjiNow[34] = 1; NumJLPT = 1;} else {AfficheKanjiNow[34] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 0 && Group == 0) {KanjiDisplayed = 0; MonAffichage = AfficheTableauJLPT[34]; if (AfficheKanjiNow[34] == 0) {AfficheKanjiNow[34] = 1; NumJLPT = 1;} else {AfficheKanjiNow[34] = 0 ; NumJLPT = 0;};}


    AfficheTableauJLPT.forEach(element => {

        if (MonAffichage != element)
        {
            
            element.innerHTML = "";
            AfficheKanjiNow[(AfficheTableauJLPT.indexOf(element))] = 0;
        }

    });

    Zone.innerHTML = "";


    if (NumJLPT == 1) { //Affiche le tableau des kanji en suprimant tous les élements du <body>
                                 // Si le bouton est préssé pour la première fois
        ContenuBody = document.body.innerHTML;
        if (JLPT != 0) {
            Zone.innerHTML = ` 
            <table class="Tableau_Kanji">
                <tr>
                    <td>Kanji</td>
                    <td>Sens</td>
                    <td>Lecture On</td>
                    <td>lecture Kun</td>
                </tr>
                ${KanjiDansTableau(KanjiDisplayed)}


            </table>`;
        } else {

              Zone.innerHTML = ` 
            <table class="Tableau_Kanji">
                <tr>
                    <td>Niveau</td>
                    <td>Kanji</td>
                    <td>fail</td>
                    <td>win</td>
                    <td>Ratio</td>
                </tr>
                ${KanjiDansTableau(KanjiDisplayed)}


            </table>`;


        }
        
        /*let ContenuTableau = MonAffichage.innerHTML; 
        document.body.innerHTML = `<h1>Kanji Learner</h1>
        <button class="KanjiButton" onclick="AfficheKanji()">Retour au jeu</button>
        <div id="ZoneTableau"></div><Br>` + ContenuTableau; // remplace le contenu du <body> avec le tableau et le titre 
        */

    }
    else { // Si le bouton est préssé une deuxième fois
           // Suprime le tableau de kanji et réaffiche tous les élement de la page
           console.log("0");
            Zone.innerHTML = "";
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
    
    FillingAnswer();
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
            <tr><td>${Item.kata}</td></tr>
            <tr><td>${Item.hira}</td></tr>
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

    console.log((SelectionKanji[1] - SelectionKanji[0]+1));
    console.log(CompteurKanji+1);
    
    if (RNG == false)
    {   
        CompteurKanji++;
        if (HistoriqueNombreRandom == []) {

            NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0]+1)) + SelectionKanji[0];
            if (KanjiRevisionList.length >0) {NombreRandom = KanjiRevisionList[NombreRandom];}
            HistoriqueNombreRandom.push(NombreRandom);
        }
        else if (CompteurKanji <= ((SelectionKanji[1] - SelectionKanji[0])-1) && CompteurKanji > 0)
        {
            while (HistoriqueNombreRandom.includes(NombreRandom)) {

                NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0]+1)) + SelectionKanji[0];
                if (KanjiRevisionList.length >0) {NombreRandom = KanjiRevisionList[NombreRandom];}
            }
            HistoriqueNombreRandom.push(NombreRandom);
        }
        else {
            CompteurKanji = 0;
            HistoriqueNombreRandom = [];
            NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0]+1)) + SelectionKanji[0];
            if (KanjiRevisionList.length >0) {NombreRandom = KanjiRevisionList[NombreRandom];}
            HistoriqueNombreRandom.push(NombreRandom);
        }
    }
    else {

        NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0]+1)) + SelectionKanji[0];
        if (KanjiRevisionList.length >0) {NombreRandom = KanjiRevisionList[NombreRandom];}

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

function BackgroundAnimation(Result) {

    Body = document.body;

    if (Result == 1) {
        const AnimationJuste = Body.animate([ // fait grossir le carré vert de sa position actuelle à la nouvelle
            { backgroundColor: "rgb(240,240,240)" },  // From
            { backgroundColor: "rgba(0, 255, 0, 0.43)" },  // To
            { backgroundColor: "rgb(240,240,240)" }  // From
        ], {
            duration: 600,
            fill: 'forwards',   // Garde la position finale
            easing: 'ease-out'
        });
    }
    else {
        const AnimationFaux = Body.animate([ // fait grossir le carré vert de sa position actuelle à la nouvelle
            { backgroundColor: "rgb(240,240,240)" },  // From
            { backgroundColor: "rgba(243, 3, 3, 0.47)" },  // To
            { backgroundColor: "rgb(240,240,240)" }  // From
        ], {
            duration: 600,
            fill: 'forwards',   // Garde la position finale
            easing: 'ease-out'
        });
    }
}
    