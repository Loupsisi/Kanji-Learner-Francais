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
    //---------------------Radicaux G1--------------------------
    {kanji: "一", sens: "un, trait horizontal", On: "Ichi ; Itsu", kun: "hito ; hitotsu", hira: "ひと, ひとつ", kata: "イチ, イツ"},
    {kanji: "丨", sens: "trait vertical", On: "Kon", kun: "tate", hira: "たて", kata: "コン"},
    {kanji: "丶", sens: "point", On: "Shu", kun: "ten", hira: "てん", kata: "シュ"},
    {kanji: "丿", sens: "trait oblique balayé", On: "Heetsu ; He", kun: "no ; harai", hira: "の, はらい", kata: "ヘツ, ヘ"},
    {kanji: "乙", sens: "le second, deuxième des tiges célestes", On: "Otsu ; Itsu", kun: "kinoto", hira: "きのと", kata: "オツ, イツ"},
    {kanji: "亅", sens: "trait vertical avec crochet", On: "Ketsu", kun: "hane", hira: "はね", kata: "ケツ"},
    {kanji: "二", sens: "deux", On: "Ni", kun: "futa ; futatsu", hira: "ふた, ふたつ", kata: "ニ"},
    {kanji: "亠", sens: "couvercle, haut", On: "Tou", kun: "nabebuta", hira: "なべぶた", kata: "トウ"},
    {kanji: "人", sens: "personne", On: "Jin ; Nin", kun: "hito", hira: "ひと", kata: "ジン, ニン"},
    {kanji: "儿", sens: "jambes humaines", On: "Jin ; Nin", kun: "hitoashi", hira: "ひとあし", kata: "ジン, ニン"},
    {kanji: "入", sens: "entrer", On: "Nyuu", kun: "hairu ; iru", hira: "はいる, いる", kata: "ニュウ"},
    {kanji: "八", sens: "huit", On: "Hachi", kun: "ya ; yatsu", hira: "や, やつ", kata: "ハチ"},
    {kanji: "冂", sens: "entourer, bornes", On: "Kei", kun: "makigamae", hira: "まきがまえ", kata: "ケイ"},
    {kanji: "冖", sens: "couvrir, couronne", On: "Myaku", kun: "wakanmuri", hira: "わかんむり", kata: "ミャク"},
    {kanji: "冫", sens: "glace", On: "Hyou", kun: "koori", hira: "こおり", kata: "ヒョウ"},
    {kanji: "几", sens: "table", On: "Ki", kun: "tsukue", hira: "つくえ", kata: "キ"},
    {kanji: "凵", sens: "récipient, boîte ouverte", On: "Kan", kun: "ukebako", hira: "うけばこ", kata: "カン"},
    {kanji: "刀", sens: "couteau, épée", On: "Tou", kun: "katana", hira: "かたな", kata: "トウ"},
    {kanji: "力", sens: "puissance, force", On: "Ryoku ; Riki", kun: "chikara", hira: "ちから", kata: "リョク, リキ"},
    {kanji: "勹", sens: "envelopper", On: "Hou", kun: "tsutsumu", hira: "つつむ", kata: "ホウ"},
    {kanji: "匕", sens: "cuillère", On: "Hi", kun: "saji", hira: "さじ", kata: "ヒ"},
    {kanji: "匚", sens: "boîte", On: "Hou", kun: "hakogamae", hira: "はこがまえ", kata: "ホウ"},
    {kanji: "匸", sens: "cacher, dissimuler", On: "Kei", kun: "kakushigamae", hira: "かくしがまえ", kata: "ケイ"},
    {kanji: "十", sens: "dix", On: "Juu", kun: "too ; to", hira: "とお, と", kata: "ジュウ"},
    {kanji: "卜", sens: "oracle, divination", On: "Boku", kun: "uranau", hira: "うらなう", kata: "ボク"},
    {kanji: "卩", sens: "sceau, timbre", On: "Setsu", kun: "fushizukuri", hira: "ふしづくり", kata: "セツ"},
    {kanji: "厂", sens: "falaise", On: "Kan", kun: "gandare", hira: "がんだれ", kata: "カン"},
    {kanji: "厶", sens: "privé", On: "Shi", kun: "watakushi", hira: "わたくし", kata: "シ"},
    {kanji: "又", sens: "encore, main droite", On: "Yuu", kun: "mata", hira: "また", kata: "ユウ"},
    {kanji: "口", sens: "bouche", On: "Kou ; Ku", kun: "kuchi", hira: "くち", kata: "コウ, ク"},
    {kanji: "囗", sens: "frontière, limites territoriales", On: "I", kun: "kunigamae", hira: "くにがまえ", kata: "イ"},
    {kanji: "土", sens: "terre", On: "Do ; To", kun: "tsuchi", hira: "つち", kata: "ド, ト"},
    {kanji: "士", sens: "homme, érudit, samouraï", On: "Shi", kun: "samurai", hira: "さむらい", kata: "シ"},
    {kanji: "夂", sens: "suivre, aller", On: "Chi", kun: "fuyugashira", hira: "ふゆがしら", kata: "チ"},
    {kanji: "夊", sens: "aller lentement", On: "Sui", kun: "natsuashi", hira: "なつあし", kata: "スイ"},
    {kanji: "夕", sens: "soir", On: "Seki", kun: "yuu", hira: "ゆう", kata: "セキ"},
    {kanji: "大", sens: "grand, gros", On: "Dai ; Tai", kun: "oo ; ookii", hira: "おお, おおきい", kata: "ダイ, タイ"},
    {kanji: "女", sens: "femme", On: "Jo ; Nyo", kun: "onna", hira: "おんな", kata: "ジョ, ニョ"},
    {kanji: "子", sens: "enfant, fils", On: "Shi ; Su", kun: "ko", hira: "こ", kata: "シ, ス"},
    {kanji: "宀", sens: "toit, maison", On: "Ben", kun: "ukanmuri", hira: "うかんむり", kata: "ベン"},
    {kanji: "寸", sens: "pouce (2,25 cm)", On: "Sun", kun: "", hira: "", kata: "スン"},
    {kanji: "小", sens: "petit", On: "Shou", kun: "chiisai ; ko", hira: "ちいさい, こ", kata: "ショウ"},
    {kanji: "尢", sens: "jambe boiteuse", On: "Ou", kun: "dainomageashi", hira: "だいのまげあし", kata: "オウ"},
    {kanji: "尸", sens: "cadavre, auvent", On: "Shi", kun: "shikabane", hira: "しかばね", kata: "シ"},
    {kanji: "屮", sens: "pousse", On: "Tetsu", kun: "mebae", hira: "めばえ", kata: "テツ"},
    {kanji: "山", sens: "montagne", On: "San", kun: "yama", hira: "やま", kata: "サン"},
    {kanji: "巛", sens: "rivière sinueuse", On: "Sen", kun: "kawa", hira: "かわ", kata: "セン"},
    {kanji: "工", sens: "travail, charpentier, compétence", On: "Kou ; Ku", kun: "takumi", hira: "たくみ", kata: "コウ, ク"},
    {kanji: "己", sens: "soi-même", On: "Ko ; Ki", kun: "onore", hira: "おのれ", kata: "コ, キ"},
    {kanji: "巾", sens: "tissu, serviette", On: "Kin", kun: "haba", hira: "はば", kata: "キン"},
    {kanji: "干", sens: "sécher, bouclier", On: "Kan", kun: "hosu ; hiiru", hira: "ほす, ひいる", kata: "カン"},
    {kanji: "幺", sens: "jeune, léger", On: "You", kun: "itogashira", hira: "いとがしら", kata: "ヨウ"},
    {kanji: "广", sens: "toit en pente", On: "Gen", kun: "madare", hira: "まだれ", kata: "ゲン"},
    //---------------------Radicaux G2--------------------------
    {kanji: "廴", sens: "bouger, étirer", On: "In", kun: "ennyou", hira: "えんにょう", kata: "イン"},
    {kanji: "廾", sens: "mains jointes", On: "Kyou", kun: "nijuuashi", hira: "にじゅうあし", kata: "キョウ"},
    {kanji: "弋", sens: "javelot", On: "Yoku", kun: "shikigamae", hira: "しきがまえ", kata: "ヨク"},
    {kanji: "弓", sens: "arc (tir à l'arc)", On: "Kyuu", kun: "yumi", hira: "ゆみ", kata: "キュウ"},
    {kanji: "彐", sens: "tête de porc", On: "Kei", kun: "keigashira", hira: "けいがしら", kata: "ケイ"},
    {kanji: "彡", sens: "coiffure, rayons de lumière", On: "San", kun: "sanzukuri", hira: "さんづくり", kata: "サン"},
    {kanji: "彳", sens: "pas, enjambée, rue, aller", On: "Teki", kun: "gyouninben", hira: "ぎょうにんべん", kata: "テキ"},
    {kanji: "心", sens: "cœur, esprit", On: "Shin", kun: "kokoro", hira: "こころ", kata: "シン"},
    {kanji: "戈", sens: "lance, hallebarde", On: "Ka", kun: "hoko", hira: "ほこ", kata: "カ"},
    {kanji: "戸", sens: "porte", On: "Ko", kun: "to", hira: "と", kata: "コ"},
    {kanji: "手", sens: "main", On: "Shu", kun: "te", hira: "て", kata: "シュ"},
    {kanji: "支", sens: "branche", On: "Shi", kun: "sasaeru", hira: "ささえる", kata: "シ"},
    {kanji: "攴", sens: "frapper, activité", On: "Hoku", kun: "bokuzukuri", hira: "ぼくづくり", kata: "ホク"},
    {kanji: "文", sens: "littérature, lettres", On: "Bun ; Mon", kun: "fumi", hira: "ふみ", kata: "ブン, モン"},
    {kanji: "斗", sens: "louche, grande ourse", On: "To", kun: "masu", hira: "ます", kata: "ト"},
    {kanji: "斤", sens: "hache", On: "Kin", kun: "ono", hira: "おの", kata: "キン"},
    {kanji: "方", sens: "direction, drapeau", On: "Hou", kun: "kata", hira: "かた", kata: "ホウ"},
    {kanji: "无", sens: "non, rien", On: "Bu", kun: "nashi", hira: "なし", kata: "ブ"},
    {kanji: "日", sens: "soleil, jour", On: "Nichi ; Jitsu", kun: "hi", hira: "ひ", kata: "ニチ, ジツ"},
    {kanji: "曰", sens: "dire", On: "Etsu", kun: "iwaku", hira: "いわく", kata: "エツ"},
    {kanji: "月", sens: "lune, mois", On: "Getsu ; Gatsu", kun: "tsuki", hira: "つき", kata: "ゲツ, ガツ"},
    {kanji: "木", sens: "arbre, bois", On: "Moku ; Boku", kun: "ki", hira: "き", kata: "モク, ボク"},
    {kanji: "欠", sens: "manquer, bâiller", On: "Ketsu", kun: "kaku ; akubi", hira: "かく, あくび", kata: "ケツ"},
    {kanji: "止", sens: "arrêter", On: "Shi", kun: "tomaru", hira: "とまる", kata: "シ"},
    {kanji: "歹", sens: "mort, mourir", On: "Gatsu", kun: "shinigamae", hira: "しにがまえ", kata: "ガツ"},
    {kanji: "殳", sens: "arme, lance", On: "Shu", kun: "rumata", hira: "るまた", kata: "シュ"},
    {kanji: "毋", sens: "ne pas, mère", On: "Bu", kun: "nakare", hira: "なかれ", kata: "ブ"},
    {kanji: "比", sens: "comparer", On: "Hi", kun: "kuraberu", hira: "くらべる", kata: "ヒ"},
    {kanji: "毛", sens: "poil, cheveu", On: "Mou", kun: "ke", hira: "け", kata: "モウ"},
    {kanji: "氏", sens: "famille, clan", On: "Shi", kun: "uji", hira: "うじ", kata: "シ"},
    {kanji: "气", sens: "vapeur, air", On: "Ki", kun: "kigamae", hira: "きがまえ", kata: "キ"},
    {kanji: "水", sens: "eau", On: "Sui", kun: "mizu", hira: "みず", kata: "スイ"},
    {kanji: "火", sens: "feu", On: "Ka", kun: "hi", hira: "ひ", kata: "カ"},
    {kanji: "爪", sens: "griffe, ongle", On: "Sou", kun: "tsume", hira: "つめ", kata: "ソウ"},
    {kanji: "父", sens: "père", On: "Fu", kun: "chichi", hira: "ちち", kata: "フ"},
    {kanji: "爻", sens: "mélanger, croiser", On: "Kou", kun: "majiwaru", hira: "まじわる", kata: "コウ"},
    {kanji: "爿", sens: "bois fendu (gauche)", On: "Shou", kun: "shouhen", hira: "しょうへん", kata: "ショウ"},
    {kanji: "片", sens: "bois fendu (droite), morceau", On: "Hen", kun: "kata", hira: "かた", kata: "ヘン"},
    {kanji: "牙", sens: "croc, canine", On: "Ga", kun: "kiba", hira: "きば", kata: "ガ"},
    {kanji: "牛", sens: "vache", On: "Gyuu", kun: "ushi", hira: "うし", kata: "ギュウ"},
    {kanji: "犬", sens: "chien", On: "Ken", kun: "inu", hira: "いぬ", kata: "ケン"},
    {kanji: "玄", sens: "mystérieux, profond", On: "Gen", kun: "kuro", hira: "くろ", kata: "ゲン"},
    {kanji: "玉", sens: "jade, bijou", On: "Gyoku", kun: "tama", hira: "たま", kata: "ギョク"},
    {kanji: "瓜", sens: "melon", On: "Ka", kun: "uri", hira: "うり", kata: "カ"},
    {kanji: "瓦", sens: "tuile", On: "Ga", kun: "kawara", hira: "かわら", kata: "ガ"},
    {kanji: "甘", sens: "doux, sucré", On: "Kan", kun: "amai", hira: "あまい", kata: "カン"},
    {kanji: "生", sens: "vie, naissance", On: "Sei ; Shou", kun: "ikiru ; umareru", hira: "いきる, うまれる", kata: "セイ, ショウ"},
    {kanji: "用", sens: "utiliser", On: "You", kun: "mochiiru", hira: "もちいる", kata: "ヨウ"},
    {kanji: "田", sens: "champ, rizière", On: "Den", kun: "ta", hira: "た", kata: "デン"},
    {kanji: "疋", sens: "rouleau de tissu", On: "Hiki", kun: "hiki", hira: "ひき", kata: "ヒキ"},
    {kanji: "疒", sens: "maladie", On: "Da", kun: "yamai", hira: "やまい", kata: "ダ"},
    {kanji: "癶", sens: "tente, pas", On: "Hatsu", kun: "hatsugashira", hira: "はつがしら", kata: "ハツ"},
    {kanji: "白", sens: "blanc", On: "Haku", kun: "shiro", hira: "しろ", kata: "ハク"},
    {kanji: "皮", sens: "peau, cuir", On: "Hi", kun: "kawa", hira: "かわ", kata: "ヒ"},
    {kanji: "皿", sens: "plat, assiette", On: "Bei", kun: "sara", hira: "さら", kata: "ベイ"},
    //---------------------Radicaux G3--------------------------
    {kanji: "目", sens: "œil", On: "Moku", kun: "me", hira: "め", kata: "モク"},
    {kanji: "矛", sens: "lance, pique", On: "Mu", kun: "hoko", hira: "ほこ", kata: "ム"},
    {kanji: "矢", sens: "flèche", On: "Shi", kun: "ya", hira: "や", kata: "シ"},
    {kanji: "石", sens: "pierre", On: "Seki", kun: "ishi", hira: "いし", kata: "セキ"},
    {kanji: "示", sens: "esprit, montrer, autel", On: "Ji ; Shi", kun: "shimesu", hira: "しめす", kata: "ジ, シ"},
    {kanji: "禸", sens: "trace, empreinte", On: "Juu", kun: "gu", hira: "ぐ", kata: "ジュウ"},
    {kanji: "禾", sens: "grain, céréale", On: "Ka", kun: "nogi", hira: "のぎ", kata: "カ"},
    {kanji: "穴", sens: "trou, caverne", On: "Ketsu", kun: "ana", hira: "あな", kata: "ケツ"},
    {kanji: "立", sens: "debout, se tenir", On: "Ritsu", kun: "tatsu", hira: "たつ", kata: "リツ"},
    {kanji: "竹", sens: "bambou", On: "Chiku", kun: "take", hira: "たけ", kata: "チク"},
    {kanji: "米", sens: "riz", On: "Bei ; Mai", kun: "kome", hira: "こめ", kata: "ベイ, マイ"},
    {kanji: "糸", sens: "fil, soie", On: "Shi", kun: "ito", hira: "いと", kata: "シ"},
    {kanji: "缶", sens: "jarre, pot", On: "Kan", kun: "kama", hira: "かま", kata: "カン"},
    {kanji: "网", sens: "filet", On: "Mou", kun: "ami", hira: "あみ", kata: "モウ"},
    {kanji: "羊", sens: "mouton", On: "You", kun: "hitsuji", hira: "ひつじ", kata: "ヨウ"},
    {kanji: "羽", sens: "plume, aile", On: "U", kun: "hane", hira: "はね", kata: "ウ"},
    {kanji: "老", sens: "vieux", On: "Rou", kun: "oi", hira: "おい", kata: "ロウ"},
    {kanji: "而", sens: "et, mais", On: "Ji", kun: "shikashite", hira: "しかして", kata: "ジ"},
    {kanji: "耒", sens: "charrue", On: "Rai", kun: "suki", hira: "すき", kata: "ライ"},
    {kanji: "耳", sens: "oreille", On: "Ji", kun: "mimi", hira: "みみ", kata: "ジ"},
    {kanji: "聿", sens: "pinceau", On: "Itsu", kun: "fude", hira: "ふで", kata: "イツ"},
    {kanji: "肉", sens: "viande", On: "Niku", kun: "shishi", hira: "しし", kata: "ニク"},
    {kanji: "臣", sens: "ministre, serviteur", On: "Shin", kun: "omi", hira: "おみ", kata: "シン"},
    {kanji: "自", sens: "soi-même", On: "Ji ; Shi", kun: "mizukara", hira: "みずから", kata: "ジ, シ"},
    {kanji: "至", sens: "arriver, atteindre", On: "Shi", kun: "itaru", hira: "いたる", kata: "シ"},
    {kanji: "臼", sens: "mortier", On: "Kyuu", kun: "usu", hira: "うす", kata: "キュウ"},
    {kanji: "舌", sens: "langue", On: "Zetsu", kun: "shita", hira: "した", kata: "ゼツ"},
    {kanji: "舛", sens: "opposé, erreur", On: "Sen", kun: "somuku", hira: "そむく", kata: "セン"},
    {kanji: "舟", sens: "bateau", On: "Shu", kun: "fune", hira: "ふね", kata: "シュ"},
    {kanji: "艮", sens: "s'arrêter, limite", On: "Kon", kun: "ushitora", hira: "うしとら", kata: "コン"},
    {kanji: "色", sens: "couleur", On: "Shoku", kun: "iro", hira: "いろ", kata: "ショク"},
    {kanji: "艸", sens: "herbe, plante", On: "Sou", kun: "kusa", hira: "くさ", kata: "ソウ"},
    {kanji: "虍", sens: "tigre", On: "Ko", kun: "tora", hira: "とら", kata: "コ"},
    {kanji: "虫", sens: "insecte, ver", On: "Chuu", kun: "mushi", hira: "むし", kata: "チュウ"},
    {kanji: "血", sens: "sang", On: "Ketsu", kun: "chi", hira: "ち", kata: "ケツ"},
    {kanji: "行", sens: "aller, ligne", On: "Kou ; Gyou", kun: "iku", hira: "いく", kata: "コウ, ギョウ"},
    {kanji: "衣", sens: "vêtement", On: "I", kun: "koromo", hira: "ころも", kata: "イ"},
    {kanji: "襾", sens: "couvrir, ouest", On: "A", kun: "nishi", hira: "にし", kata: "ア"},
    {kanji: "見", sens: "voir", On: "Ken", kun: "miru", hira: "みる", kata: "ケン"},
    {kanji: "角", sens: "corne, angle", On: "Kaku", kun: "tsuno", hira: "つの", kata: "カク"},
    {kanji: "言", sens: "dire, parole", On: "Gen ; Gon", kun: "koto ; iu", hira: "こと, いう", kata: "ゲン, ゴン"},
    {kanji: "谷", sens: "vallée", On: "Koku", kun: "tani", hira: "たに", kata: "コク"},
    {kanji: "豆", sens: "haricot, fève", On: "Tou", kun: "mame", hira: "まめ", kata: "トウ"},
    {kanji: "豕", sens: "cochon", On: "Shi", kun: "inoko", hira: "いのこ", kata: "シ"},
    {kanji: "豸", sens: "blaireau, animal rampant", On: "Chi", kun: "mujina", hira: "むじな", kata: "チ"},
    {kanji: "貝", sens: "coquillage", On: "Bai", kun: "kai", hira: "かい", kata: "バイ"},
    {kanji: "赤", sens: "rouge", On: "Seki", kun: "aka", hira: "あか", kata: "セキ"},
    {kanji: "走", sens: "courir", On: "Sou", kun: "hashiru", hira: "はしる", kata: "ソウ"},
    {kanji: "足", sens: "pied", On: "Soku", kun: "ashi", hira: "あし", kata: "ソク"},
    {kanji: "身", sens: "corps", On: "Shin", kun: "mi", hira: "み", kata: "シン"},
    {kanji: "車", sens: "voiture, charrette", On: "Sha", kun: "kuruma", hira: "くるま", kata: "シャ"},
    {kanji: "辛", sens: "épicé, amer", On: "Shin", kun: "karai", hira: "からい", kata: "シン"},
    {kanji: "辰", sens: "matin, dragon", On: "Shin", kun: "tatsu", hira: "たつ", kata: "シン"},
    {kanji: "辵", sens: "marcher, avancer", On: "Chaku", kun: "shinnyou", hira: "しんにょう", kata: "チャク"},
    {kanji: "邑", sens: "village, ville", On: "Yuu", kun: "mura", hira: "むら", kata: "ユウ"},
    //---------------------Radicaux G4--------------------------
    {kanji: "酉", sens: "vin, saké, oiseau", On: "Yuu", kun: "tori", hira: "とり", kata: "ユウ"},
    {kanji: "釆", sens: "distinguer, séparer", On: "Ben", kun: "nogome", hira: "のごめ", kata: "ベン"},
    {kanji: "里", sens: "village, lieue", On: "Ri", kun: "sato", hira: "さと", kata: "リ"},
    {kanji: "金", sens: "or, métal", On: "Kin", kun: "kane", hira: "かね", kata: "キン"},
    {kanji: "長", sens: "long", On: "Chou", kun: "nagai", hira: "ながい", kata: "チョウ"},
    {kanji: "門", sens: "porte", On: "Mon", kun: "kado", hira: "かど", kata: "モン"},
    {kanji: "阜", sens: "monticule, butte", On: "Fu", kun: "oka", hira: "おか", kata: "フ"},
    {kanji: "隶", sens: "esclave", On: "Rei", kun: "shimobe", hira: "しもべ", kata: "レイ"},
    {kanji: "隹", sens: "vieil oiseau", On: "Sui", kun: "furutori", hira: "ふるとり", kata: "スイ"},
    {kanji: "雨", sens: "pluie", On: "U", kun: "ame", hira: "あめ", kata: "ウ"},
    {kanji: "青", sens: "bleu, vert", On: "Sei", kun: "ao", hira: "あお", kata: "セイ"},
    {kanji: "非", sens: "faux, erreur", On: "Hi", kun: "arazu", hira: "あらず", kata: "ヒ"},
    {kanji: "面", sens: "visage, face", On: "Men", kun: "omo", hira: "おも", kata: "メン"},
    {kanji: "革", sens: "cuir, peau", On: "Kaku", kun: "kawa", hira: "かわ", kata: "カク"},
    {kanji: "韋", sens: "cuir tanné", On: "I", kun: "namegawa", hira: "なめがわ", kata: "イ"},
    {kanji: "韭", sens: "poireau", On: "Kyuu", kun: "nira", hira: "にら", kata: "キュウ"},
    {kanji: "音", sens: "son", On: "On", kun: "oto", hira: "おと", kata: "オン"},
    {kanji: "頁", sens: "page, tête", On: "Ketsu", kun: "oogai", hira: "おおがい", kata: "ケツ"},
    {kanji: "風", sens: "vent", On: "Fuu", kun: "kaze", hira: "かぜ", kata: "フウ"},
    {kanji: "飛", sens: "voler", On: "Hi", kun: "tobu", hira: "とぶ", kata: "ヒ"},
    {kanji: "食", sens: "manger, nourriture", On: "Shoku", kun: "taberu", hira: "たべる", kata: "ショク"},
    {kanji: "首", sens: "tête, cou", On: "Shu", kun: "kubi", hira: "くび", kata: "シュ"},
    {kanji: "香", sens: "parfum, encens", On: "Kou", kun: "kaori", hira: "かおり", kata: "コウ"},
    {kanji: "馬", sens: "cheval", On: "Ba", kun: "uma", hira: "うま", kata: "バ"},
    {kanji: "骨", sens: "os", On: "Kotsu", kun: "hone", hira: "ほね", kata: "コツ"},
    {kanji: "高", sens: "haut, élevé", On: "Kou", kun: "takai", hira: "たかい", kata: "コウ"},
    {kanji: "髟", sens: "cheveux longs", On: "Hyou", kun: "kamigashira", hira: "かみがしら", kata: "ヒョウ"},
    {kanji: "鬥", sens: "combat, lutte", On: "Tou", kun: "tatakau", hira: "たたかう", kata: "トウ"},
    {kanji: "鬯", sens: "vin sacrificiel, herbes", On: "Chou", kun: "nioizake", hira: "においざけ", kata: "チョウ"},
    {kanji: "鬲", sens: "chaudron, trépied", On: "Reki", kun: "kanae", hira: "かなえ", kata: "レキ"},
    {kanji: "鬼", sens: "fantôme, démon", On: "Ki", kun: "oni", hira: "おに", kata: "キ"},
    {kanji: "魚", sens: "poisson", On: "Gyo", kun: "sakana", hira: "さかな", kata: "ギョ"},
    {kanji: "鳥", sens: "oiseau", On: "Chou", kun: "tori", hira: "とり", kata: "チョウ"},
    {kanji: "鹵", sens: "sel", On: "Ro", kun: "shio", hira: "しお", kata: "ロ"},
    {kanji: "鹿", sens: "cerf", On: "Roku", kun: "shika", hira: "しか", kata: "ロク"},
    {kanji: "麥", sens: "blé", On: "Baku", kun: "mugi", hira: "むぎ", kata: "バク"},
    {kanji: "麻", sens: "chanvre", On: "Ma", kun: "asa", hira: "あさ", kata: "マ"},
    {kanji: "黄", sens: "jaune", On: "Kou", kun: "ki", hira: "き", kata: "コウ"},
    {kanji: "黍", sens: "millet", On: "Sho", kun: "kibi", hira: "きび", kata: "ショ"},
    {kanji: "黒", sens: "noir", On: "Koku", kun: "kuro", hira: "くろ", kata: "コク"},
    {kanji: "黹", sens: "broderie", On: "Chi", kun: "nui", hira: "ぬい", kata: "チ"},
    {kanji: "黽", sens: "grenouille, amphibien", On: "Bou", kun: "aogaeru", hira: "あおがえる", kata: "ボウ"},
    {kanji: "鼎", sens: "trépied", On: "Tei", kun: "kanae", hira: "かなえ", kata: "テイ"},
    {kanji: "鼓", sens: "tambour", On: "Ko", kun: "tsuzumi", hira: "つづみ", kata: "コ"},
    {kanji: "鼠", sens: "rat, souris", On: "So", kun: "nezumi", hira: "ねずみ", kata: "ソ"},
    {kanji: "鼻", sens: "nez", On: "Bi", kun: "hana", hira: "はな", kata: "ビ"},
    {kanji: "齊", sens: "égal, uniforme", On: "Sei", kun: "hitoshii", hira: "ひとしい", kata: "セイ"},
    {kanji: "歯", sens: "dent", On: "Shi", kun: "ha", hira: "は", kata: "シ"},
    {kanji: "龍", sens: "dragon", On: "Ryuu", kun: "tatsu", hira: "たつ", kata: "リュウ"},
    {kanji: "龜", sens: "tortue", On: "Ki", kun: "kame", hira: "かめ", kata: "キ"},
    {kanji: "龠", sens: "flûte", On: "Yaku", kun: "fue", hira: "ふえ", kata: "ヤク"}
    
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

let AfficheKanjiNow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let NumJLPT = 0;
let LockTableau = false; 

let HistoriqueNombreRandom = [];

let RNG = false; 

//-------------------------------------------Fonctions------------------------------------------

// ------------------------------Gestion des réponses-----------------------

function getValue(EnterPressed) { // Compare la réponse de l'utilisateur avec la réponse attendue



    Item = kanjiDataBase[NombreRandom];

    const Sens = Item.sens.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(","); // Crée les réponses à comparé avec l'utilisateur
    const On = Item.On.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
    const Kun = Item.kun.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
    const Hira = Item.hira.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");
    const Kata = Item.kata.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(",");


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

        if (OnCorrect || OnCorrectKata) {
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

          if (KunCorrect || KunCorrectHira) {
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


    document.getElementById("HistoriqueBox").innerHTML = `
    <div id="HistoriqueJuste" class="HistoriqueVrai"></div>
    <div id="HistoriqueFaux" class="HistoriqueFaux"></div>
    `;
    CompteurKanji = 0;
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

// -------------------------------Gestion Bouton Kanjis------------------------------
function KanjiSelectionOnLoad() {

    const TextJLPTElement = document.getElementById("TextJLPTSelected");

    TextJLPTElement.innerText = "Niveau : JLPT N" + JLPTSelect + " Groupe " +GroupSelect;

}


function KanjiSelectionApparition() {

    const AffichageJLPTElement = document.getElementById("AffichageJLPTConteneur");

    const AffichageJLPTContent = `<p id="PageOpacitor" class="PageOpacitor" onclick="ClearKanjisSelection()"></p>
    <div class="AffichageJLPT">
        <div class="JLPTText">Un carré ≈ 50 kanji</div>
        <div class="JLPTText">JLPT N5 : <button class="JLPTButton" onclick="KanjiSelection(5,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(5, 2) ; KanjiSelectionApparition()">2</button></div>
        <div class="JLPTText">JLPT N4 : <button class="JLPTButton" onclick="KanjiSelection(4,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(4, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(4, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(4, 4) ; KanjiSelectionApparition()">4</button></div>
        <div class="JLPTText">JLPT N3 : <button class="JLPTButton" onclick="KanjiSelection(3,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(3, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(3, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(3, 4) ; KanjiSelectionApparition()">4</button><button class="JLPTButton" onclick="KanjiSelection(3, 5) ; KanjiSelectionApparition()">5</button><button class="JLPTButton" onclick="KanjiSelection(3, 6) ; KanjiSelectionApparition()">6</button><button class="JLPTButton" onclick="KanjiSelection(3, 7) ; KanjiSelectionApparition()">7</button><button class="JLPTButton" onclick="KanjiSelection(3, 8) ; KanjiSelectionApparition()">8</button></div>
        <div class="JLPTText">Radicaux : <button class="JLPTButton" onclick="KanjiSelection(0,1) ; KanjiSelectionApparition()">1</button><button class="JLPTButton" onclick="KanjiSelection(0, 2) ; KanjiSelectionApparition()">2</button><button class="JLPTButton" onclick="KanjiSelection(0, 3) ; KanjiSelectionApparition()">3</button><button class="JLPTButton" onclick="KanjiSelection(0, 4) ; KanjiSelectionApparition()">4</button></div>
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

function ClearKanjisSelection() {

    const AffichageJLPTElement = document.getElementById("AffichageJLPTConteneur");

    AffichageJLPTElement.innerHTML = "";
    JLPTAfficheTrue = false;

}

function KanjiSelection(JLPT, Group) {

    const TextJLPTElement = document.getElementById("TextJLPTSelected");


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
    else if (JLPT == 3 && Group == 5) {SelectionKanji = [449, 484];}
    else if (JLPT == 3 && Group == 6) {SelectionKanji = [485, 530];}
    else if (JLPT == 3 && Group == 7) {SelectionKanji = [531, 576];}
    else if (JLPT == 3 && Group == 8) {SelectionKanji = [577, 622];}

    else if (JLPT == 0 && Group == 1) {SelectionKanji = [623,677];}
    else if (JLPT == 0 && Group == 2) {SelectionKanji = [678, 732];}
    else if (JLPT == 0 && Group == 3) {SelectionKanji = [733, 787];}
    else if (JLPT == 0 && Group == 4) {SelectionKanji = [788, 836];}

    

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
                <td>${KanjiDuTableau.kata}</td>
                <td>${KanjiDuTableau.hira}</td>
            </tr>`;

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
                <div>--- Radicaux ---</div>
                <div class="JLPT3Section">
                    <div>Groupe 1 <button class="KanjiTableauBouton" onclick="AfficheKanji(0, 1)">+</button><div id="JLPT3G1Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 2 <button class="KanjiTableauBouton" onclick="AfficheKanji(0, 2)">+</button><div id="JLPT3G2Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 3 <button class="KanjiTableauBouton" onclick="AfficheKanji(0, 3)">+</button><div id="JLPT3G3Tableau" class="JLPTTableau"></div></div>
                    <div>Groupe 4 <button class="KanjiTableauBouton" onclick="AfficheKanji(0, 4)">+</button><div id="JLPT3G4Tableau" class="JLPTTableau"></div></div>
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

    else if (JLPT == 0 && Group == 1) {KanjiDisplayed = [623, 677]; MonAffichage = AfficheTableauJLPT[2]; if (AfficheKanjiNow[14] == 0) {AfficheKanjiNow[14] = 1; NumJLPT = 1;} else {AfficheKanjiNow[2] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 0 && Group == 2) {KanjiDisplayed = [678, 732]; MonAffichage = AfficheTableauJLPT[3]; if (AfficheKanjiNow[15] == 0) {AfficheKanjiNow[15] = 1; NumJLPT = 1;} else {AfficheKanjiNow[3] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 0 && Group == 3) {KanjiDisplayed = [733, 787]; MonAffichage = AfficheTableauJLPT[4]; if (AfficheKanjiNow[16] == 0) {AfficheKanjiNow[16] = 1; NumJLPT = 1;} else {AfficheKanjiNow[4] = 0 ; NumJLPT = 0;};}
    else if (JLPT == 0 && Group == 4) {KanjiDisplayed = [788, 836]; MonAffichage = AfficheTableauJLPT[5]; if (AfficheKanjiNow[17] == 0) {AfficheKanjiNow[17] = 1; NumJLPT = 1;} else {AfficheKanjiNow[5] = 0 ; NumJLPT = 0;};}

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
    
    console.log(kanjiDataBase.length);
    if (RNG == false)
    {   
        CompteurKanji++;
        if (HistoriqueNombreRandom == []) {

            NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0])) + SelectionKanji[0];
            HistoriqueNombreRandom.push(NombreRandom);
        }
        else if (CompteurKanji <= ((SelectionKanji[1] - SelectionKanji[0])-1) && CompteurKanji > 0)
        {
            while (HistoriqueNombreRandom.includes(NombreRandom)) {

                NombreRandom = Math.floor(Math.random() * (SelectionKanji[SelectionKanji.length-1] - SelectionKanji[0])) + SelectionKanji[0];
            }
            HistoriqueNombreRandom.push(NombreRandom);
        }
        else {
            CompteurKanji = 0;
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
    