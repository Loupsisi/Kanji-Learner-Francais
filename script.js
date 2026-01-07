// CLAUSER LEANDRE (France)
// 01/01/2026-06/01/2026
// Page Wab Pour apprendre les kanjis 

//-------------------Tableau de Kanji-----------------------

const kanjiDataBase = [
   {kanji: "告", sens: "Dire, informer", On: "Koku", kun: "tsu"},
    {kanji: "説", sens: "opinion, théorie, expliquer", On: "Setsu ; Zei", kun: "to"},
    {kanji: "物", sens: "Chose, objet", On: "Butsu ; Motsu", kun: "mono"},
    {kanji: "発", sens: "départ, publier, émettre", On: "Hatsu ; Hotsu", kun: ""},
    {kanji: "員", sens: "Membre, employé", On: "In", kun: ""},
    {kanji: "都", sens: "Capitale", On: "To ; Tsu", kun: "miyako"},
    {kanji: "場", sens: "Lieu, endroit, emplacement", On: "Jou", kun: "ba"},
    {kanji: "声", sens: "Voix", On: "Sei ; Shou", kun: "koe"},
    {kanji: "仕", sens: "Servir, travailler sous", On: "Shi ; Ji", kun: "tsukaeru"},
    {kanji: "結", sens: "attacher, joindre, nouer", On: "Ketsu", kun: "musubu ; yu"},
    {kanji: "志", sens: "volonté, ambition, but", On: "Shi", kun: "kokorozashi"},
    {kanji: "誌", sens: "Magazine, journal", On: "Shi", kun: ""},
    {kanji: "吉", sens: "Bonne chance, la fortune", On: "Kichi ; Kitsu", kun: ""},
    {kanji: "石", sens: "Pierre", On: "Seki ; Shaku", kun: "ishi"},
    {kanji: "合", sens: "se rencontrer, se rejoindre", On: "Gou ; Katsu", kun: "au ; awaseru"},
    {kanji: "台", sens: "piédestal, socle, support, plate-forme", On: "Dai ; Tai", kun: ""},
    {kanji: "知", sens: "savoir", On: "Chi", kun: "shiru"},
    {kanji: "品", sens: "marchandises, article", On: "Hin", kun: "shina"},
    {kanji: "和", sens: "paix, harmonie, Japon", On: "Wa ; O", kun: "yawaragu ; nagoyaka"},
    {kanji: "各", sens: "chaque", On: "Kaku", kun: "ono"},
    {kanji: "史", sens: "Histoire", On: "Shi", kun: ""},
    {kanji: "館", sens: "palace, grand bâtiment, palais", On: "Kan", kun: ""},
    {kanji: "養", sens: "élever, nourrir, soutenir", On: "You", kun: "yashinau"},
    {kanji: "飢", sens: "faim", On: "Ki", kun: "ueru"},
    {kanji: "世", sens: "Monde, Génération", On: "Sei ; Se", kun: "yo"},
    {kanji: "引", sens: "Tirer", On: "In", kun: "hiku"},
    {kanji: "光", sens: "Lumière", On: "Kou", kun: "hikari ; hikaru"},
    {kanji: "代", sens: "substitution, génération", On: "Dai ; Tai", kun: "kawaru, yo"},
    {kanji: "回", sens: "(nombre de)- fois, tourner", On: "Kai", kun: "mawaru"},
    {kanji: "死", sens: "décès, mort, mourrir", On: "Shi", kun: "shinu"},
    {kanji: "字", sens: "lettre, symbole", On: "Ji", kun: ""},
    {kanji: "考", sens: "penser à, considérer", On: "Kou", kun: "kangaeru"},
    {kanji: "有", sens: "être, avoir, posséder", On: "Yuu ; U", kun: "aru"},
    {kanji: "民", sens: "nation, peuple, population", On: "Min", kun: "tami"},
    {kanji: "地", sens: "sol, terre", On: "Chi ; Ji", kun: ""},
    {kanji: "区", sens: "arrondissement, section, district", On: "Ku", kun: ""},
    {kanji: "正", sens: "juste, correct, exact, officiel, régulier", On: "Sei ; Shou", kun: "masa ; tadashii"},
    {kanji: "不", sens: "Pas, non", On: "Fu ; Bu", kun: ""},
    {kanji: "同", sens: "même, le même", On: "Dou", kun: "onaji"},
    {kanji: "以", sens: "au moyen de, vers", On: "I", kun: ""},
    {kanji: "止", sens: "arrêter", On: "Shi", kun: "tomeru"},
    {kanji: "用", sens: "utiliser, utilisation", On: "You", kun: "mochiiru"},
    {kanji: "究", sens: "recherche, analyser qlq ch", On: "Kyuu", kun: "kiwameru"},
    {kanji: "低", sens: "bas, faible", On: "Tei", kun: "hikui"},
    {kanji: "歩", sens: "marcher", On: "Ho", kun: "aruku , ayumu"},
    {kanji: "近", sens: "près, proche", On: "Kin", kun: "chikai"},
    {kanji: "注", sens: "notes, verser", On: "Chuu", kun: "sosogu"},
    {kanji: "医", sens: "guérir, l'art de guérir", On: "I", kun: "iyasu"},
    {kanji: "者", sens: "individu, personne", On: "Sha", kun: "mono"},
    {kanji: "洗", sens: "laver", On: "Sen", kun: "arau"},
    {kanji: "池", sens: "étang, bassin", On: "Chi", kun: "ike"},
    {kanji: "使", sens: "utiliser, employer", On: "Shi", kun: "tsukau"},
    {kanji: "所", sens: "lieu, adresse", On: "Sho", kun: "tokoro"},
    {kanji: "図", sens: "dessin, figure, plan", On: "Zu ; To", kun: "hakaru"},
    {kanji: "送", sens: "envoyer", On: "Sou", kun: "okuru"},
    {kanji: "様", sens: "apparence, aspect, Monsieur/Madame", On: "You", kun: "sama"},
    {kanji: "不", sens: "négatif, non, mauvais", On: "Fu ; Bu", kun: ""},
    {kanji: "姉", sens: "grande sœur", On: "Shi", kun: "ane"},
    {kanji: "漢", sens: "Chine", On: "Kan", kun: ""},
    {kanji: "卒", sens: "diplômé, soldat", On: "Sotsu", kun: ""},
    {kanji: "業", sens: "affaire, industrie, travail", On: "Gyou ; Gou", kun: "waza"},
    {kanji: "婚", sens: "mariage", On: "Kon", kun: ""},
    {kanji: "式", sens: "style, cérémonie, formule", On: "Shiki", kun: ""},
    {kanji: "案", sens: "plan, suggestion, proposition", On: "An", kun: ""},
    {kanji: "内", sens: "intérieur, dedans", On: "Nai ; Dai", kun: "uchi"},
    {kanji: "忘", sens: "oublier", On: "Bou", kun: "wasureru"},
    {kanji: "守", sens: "garder, protéger", On: "Shu ; Su", kun: "mamoru"},
    {kanji: "若", sens: "jeune", On: "Jaku ; Nya", kun: "wakai"},
    {kanji: "機", sens: "mécanisme, machine, occasion", On: "Ki", kun: "hata"},
    {kanji: "呼", sens: "appeler, inviter", On: "Ko", kun: "yobu"},
    {kanji: "別", sens: "séparer, autre, branche", On: "Betsu", kun: "wakareru"},
    {kanji: "渡", sens: "traverser, livrer", On: "To", kun: "wataru"},
    {kanji: "遊", sens: "jouer", On: "Yuu ; Yu", kun: "asobu"},
    {kanji: "泳", sens: "nager", On: "Ei", kun: "oyogu"},
    {kanji: "疲", sens: "fatigué", On: "Hi", kun: "tsukareru"},
    {kanji: "暖", sens: "chaud (température)", On: "Dan", kun: "atatakai"},
    {kanji: "涼", sens: "frais", On: "Ryou", kun: "susushii"},
    {kanji: "静", sens: "calme, tranquille", On: "Sei ; Jou", kun: "shizuka"},
    {kanji: "園", sens: "parc, jardin", On: "En", kun: "sono"},
    {kanji: "登", sens: "monter, grimper", On: "Tou ; To", kun: "noboru"},
    {kanji: "泊", sens: "nuitée, loger", On: "Haku", kun: "tomaru"},
    {kanji: "連", sens: "emmener, relier, groupe", On: "Ren", kun: "tsuraneru ; tsureru"},
    {kanji: "絡", sens: "s'emmêler, enlacer", On: "Raku", kun: "karamu"},
    {kanji: "困", sens: "être en difficulté, s'inquiéter", On: "Kon", kun: "komaru"},
    {kanji: "願", sens: "souhait, vœu, requête", On: "Gan", kun: "negau"},
    {kanji: "記", sens: "noter, inscrire", On: "Ki", kun: "shirusu"},
    {kanji: "放", sens: "libérer, lâcher", On: "Hou", kun: "hanasu"},
    {kanji: "忙", sens: "occupé", On: "Bou", kun: "isogashii"},
    {kanji: "険", sens: "précipiteux, inaccessible", On: "Ken", kun: "kewashii"},
    {kanji: "沈", sens: "couler, s'enfoncer", On: "Chin", kun: "shizumu"},
    {kanji: "適", sens: "adéquat, convenir", On: "Teki", kun: ""},
    {kanji: "当", sens: "frapper, toucher, ce", On: "Tou", kun: "ataru"},
    {kanji: "難", sens: "difficile, défaut", On: "Nan", kun: "muzukashii"},
    {kanji: "易", sens: "facile, changement", On: "I ; E", kun: "yasashii"},
    {kanji: "昨", sens: "passé, précédent", On: "Saku", kun: ""},
    {kanji: "約", sens: "promesse, environ, raccourcir", On: "Yaku", kun: ""},
    {kanji: "戦", sens: "guerre, combat", On: "Sen", kun: "tatakau"},
    {kanji: "争", sens: "dispute, conflit", On: "Sou", kun: "arasou"},
    {kanji: "可", sens: "possible, approbation", On: "Ka", kun: ""},
    {kanji: "能", sens: "capacité, talent, théâtre Noh", On: "Nou", kun: ""}
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
let LastPosVrai = "";
let LastPosFaux = "";

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

//-------------------------------------------Fonctions------------------------------------------

// ------------------------------Gestion des réponses-----------------------

function getValue(EnterPressed) { // Compare la réponse de l'utilisateur avec la réponse attendue



    Item = kanjiDataBase[NombreRandom];

    Sens = Item.sens.trim().toLowerCase().split(","); // Crée les réponses à comparé avec l'utilisateur
    On = Item.On.trim().toLowerCase().split(";");
    Kun = Item.kun.trim().toLowerCase().split(";");


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

    const Reponse = boxInput.value.trim().toLowerCase();

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
    ComboMeter(0);
    LongueurPartieUnclicked();
    // ResetWallAnimation();


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

function KanjiDansTableau() { //  Crée une variable string qui contient tout le contenu du tableau de kanji

    let CeKanji = "";
    let KanjiDuTableau = kanjiDataBase[0];

    for (let i = 0; i < kanjiDataBase.length; i++) { // Pour chaque éléments dans le tableau(valeurs) de kanji crée une ligne dans un tableau

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

function AfficheKanji() { // Affiche le tableau de kanji à l'aide de la fonction KanjiDansTableau()

    
    const Zone = document.getElementById("ZoneTableau");
    
    

    if (AfficheKanjiLock == 0)
    {
        AfficheKanjiLock = 1;
    }
    else
    {
        AfficheKanjiLock = 0;
    }


    if (AfficheKanjiLock == 1) { //Affiche le tableau des kanji en suprimant tous les élements du <body>
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
            ${KanjiDansTableau()}


        </table>`;
        
        let ContenuTableau = Zone.innerHTML; 
        document.body.innerHTML = `<h1>Kanji Learner</h1>
        <button class="KanjiButton" onclick="AfficheKanji()">Retour au jeu</button>
        <div id="ZoneTableau"></div><Br>` + ContenuTableau; // remplace le contenu du <body> avec le tableau et le titre 


    }
    else { // Si le bouton est préssé une deuxième fois
           // Suprime le tableau de kanji et réaffiche tous les élement de la page
        Zone.innerHTML = "";
        document.body.innerHTML = ContenuBody;
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
            { fontSize: "16px"}, 
            { fontSize: "25px"},  
            { fontSize: "16px"},
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

function AffichageKanji() { // Affiche le kanji actuel (celui au milieu de la page)

    NombreRandom = Math.floor(Math.random() * kanjiDataBase.length); // crée un nombre aléatoire entre 0 et le nombre de kanji

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
        { width: (HistoriquePourVrai.length * CalculPx)+`px` }  // To
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    const AnimationFaux = AffichageFauxCSS.animate([ // Pareil pour que le carré vert 
        { width: LastPosFaux},  // From
        { width: (HistoriquePourFaux.length * CalculPx)+`px` }  // To
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    LastPosFaux = `${HistoriquePourFaux.length * CalculPx}px`;
    LastPosVrai = `${HistoriquePourVrai.length * CalculPx}px`;;

    }
    else if (Reset == 1) { // Si il y a Reset met l'animation de reset

    const AnimationVrai = AffichageVraiCSS.animate([ // fait grossir le carré vert de sa position jusquà la position initiale
        { width: LastPosVrai}, 
        { width: '90px' }  
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    const AnimationFaux = AffichageFauxCSS.animate([ // pareil que le carré vert 
        { width: LastPosFaux},  
        { width:'90px' }  
    ], {
        duration: 750,
        fill: 'forwards',   // Garde la position finale
        easing: 'ease-out'
    });

    LastPosFaux = "90px";
    LastPosVrai = "90px";

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


/* Need a rework 
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
    */