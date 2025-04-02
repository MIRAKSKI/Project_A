let anne = new Array();
let moduls = new Array();
let credit = new Array();
let coeff = new Array();
let type = new Array();

function setval() {
  anne[0] = "2ème License Ginie Civil - S3";
  moduls[0] = "Mathématiques 3 ,Ondes et vibrations ,Mécanique des fluides ,Mécanique rationnelle ,Probabilités et statistiques ,Informatique 3 ,Dessin technique ,TP Ondes et vibrations ,Technologie de base ,Métrologie ,Anglais technique";
  credit[0] = "6,4,4,4,4,2,2,1,1,1,1";
  coeff[0] = "3,2,2,2,2,1,1,1,1,1,1";
  type[0] = "2,2,2,2,2,t,t,t,1,1,1";

  anne[1] = "2ème License Ginie Civil - S4";
  moduls[1] = "Mécanique des sols,Matériaux de construction,Mathématiques 4,Méthodes numériques,Résistance des matériaux,TP Mécanique des sols,TP matériaux de construction,Dessin Assisté par Ordinateur,TP Méthodes numériques,TP MDF & RDM,Géologie,Topographie 1,Techniques d'expression et de communication";
  credit[1] = "4,2,4,4,4,2,2,2,2,1,1,1,1,1";
  coeff[1] = "2,1,2,2,2,1,1,1,1,1,1,1,1,1";
  type[1] = "2,1,2,2,2,t,t,t,t,t,1,1,1,1";

  anne[2] = "2ème License Hydraulique - S3";
  moduls[2] = "Mathématiques 3 ,Ondes et vibrations ,Mécanique des fluides ,Mécanique rationnelle ,Probabilités et statistiques ,Informatique 3 ,Dessin technique ,TP Ondes et vibrations ,Technologie de base ,Métrologie ,Anglais technique";
  credit[2] = "6,4,4,4,4,2,2,1,1,1,1";
  coeff[2] = "3,2,2,2,2,1,1,1,1,1,1";
  type[2] = "2,2,2,2,2,t,t,t,1,1,1";

  anne[3] = "2ème License Hydraulique - S4";
  moduls[3] = "Hydraulique générale I,Hydrologie I,Mathématiques 4,Méthodes numériques,Résistance des matériaux,Dessin Assisté par Ordinateur,TP Mécanique des fluides,TP Méthodes numériques,TP Résistance des matériaux,TP Hydrologie,Géologie,Topographie,Techniques d'expression et de communication";
  credit[3] = "4,2,4,4,4,2,2,2,1,2,1,1,1";
  coeff[3] = "2,1,2,2,2,1,1,1,1,1,1,1,1";
  type[3] = "2,1,2,2,2,t,t,t,t,1,1,1,1";

  anne[4] = "2ème License Travaux Publics - S3";
  moduls[4] = "Mathématiques 3 ,Ondes et vibrations ,Mécanique des fluides ,Mécanique rationnelle ,Probabilités et statistiques ,Informatique 3 ,Dessin technique ,TP Ondes et vibrations ,Technologie de base ,Métrologie ,Anglais technique";
  credit[4] = "6,4,4,4,4,2,2,1,1,1,1";
  coeff[4] = "3,2,2,2,2,1,1,1,1,1,1";
  type[4] = "2,2,2,2,2,t,t,t,1,1,1";

  anne[5] = "2ème License Travaux Publics - S4";
  moduls[5] = "Mécanique des sols,Matériaux de construction,Mathématiques 4,Méthodes numériques,Résistance des matériaux,TP Mécanique des sols,TP matériaux de construction,Dessin Assisté par Ordinateur,TP Méthodes numériques,TP MDF et RDM,Géologie,Topographie,Techniques d'expression et de communication";
  credit[5] = "4,2,4,4,4,2,2,2,2,1,1,1,1";
  coeff[5] = "2,1,2,2,2,1,1,1,1,1,1,1,1";
  type[5] = "2,1,2,2,2,t,t,t,t,t,1,1,1";

  anne[6] = "2ème License Traitement - S3";
  moduls[6] = "Chimie minérale,Hydrogéochimique,Topographie,Electrotechnique,TP Topographie,Informatique,Dessin technique,TP MDS,MDS,Techniques d'expression et de communication";
  credit[6] = "6,6,4,4,3,2,2,1,1,1,1";
  coeff[6] = "3,3,2,2,2,1,1,1,1,1,1";
  type[6] = "2,2,2,2,t,t,t,t,2,1,1";

  anne[7] = "2ème License Traitement - S4";
  moduls[7] = "Eléments de microbiologie des eaux,Hydraulique générale,Hydrologie,PSP,TP Eléments de microbiologie des eaux,TP Mécanique des fluides ,Informatique,TP PSP,Protection de l'environnement,Hydrogéologie,Anglais technique et terminologie";
  credit[7] = "4,4,4,4,2,2,2,2,2,2,2";
  coeff[7] = "3,3,2,2,1,1,1,1,1,1,1";
  type[7] = "2,2,2,2,t,t,t,t,2,2,1";

  anne[8] = "3ème License Ginie Civil - S5";
  moduls[8] = "Résistance des Matériaux 2,Béton Armé 1,Charpente Métallique,Mécanique des Sols 2,Matériaux de Construction 2,TP Topographie,TP Mécanique des sols 2,TP Matériaux de Construction2,Dessin du BTP,Topographie 2,Hydraulique générale,Techniques et règles de construction";
  credit[8] = "4,4,4,4,2,2,2,2,3,1,1,1";
  coeff[8] = "2,2,2,2,1,1,1,1,2,1,1,1";
  type[8] = "2,2,2,2,1,t,t,t,t,1,1,1";

  anne[9] = "3ème License Ginie Civil - S6";
  moduls[9] = "Calcul des Structures,Constructions Métalliques,Béton Armé 2,Fondations et ouvrages Géotechniques,Projet de Fin de Cycle,Calcul assisté par ordinateur,Métré et Estimation des Prix,Voiries et Réseaux Divers,Organisation des chantiers,Projet professionnel et gestion d'entreprise";
  credit[9] = "4,4,6,4,4,3,2,1,1,1";
  coeff[9] = "2,2,3,2,2,2,1,1,1,1";
  type[9] = "2,2,2,2,t,t,1,1,1,1";

  anne[10] = "3ème License Traitement - S5";
  moduls[10] = "Traitement des eaux potables,Epuration et réutilisation des eaux résiduaires,Hydrochimie,Alimentation en eau potable,TP  Traitement,TP  Epuration,TP Informatique(Programmation),Législation,Langue";
  credit[10] = "6,6,4,2,4,4,2,1,1";
  coeff[10] = "3,3,2,2,2,2,1,1,1";
  type[10] = "2,2,2,2,t,t,t,1,2";

  anne[11] = "3ème License Traitement - S6";
  moduls[11] = "Gestion des boues,Les eaux industrielles,Assainissement,Chimie analytique,Projet de Fin de Cycle,TP Chimie analytique,Logiciels (AEP ASS trait),Gestion technique des usines,Organisation du chantier";
  credit[11] = "5,5,4,4,4,3,3,1,1,1,1";
  coeff[11] = "3,2,2,2,2,2,2,1,1,1,1";
  type[11] = "2,2,2,2,t,t,t,2,2,1,1";

  anne[12] = "3ème License Travaux Publics - S5";
  moduls[12] = "Poutres et treillis,Béton armé,Structures métalliques,Routes 1,Matériaux routiers,Dessin technique appliqué,Géotechnique routière,Topographie appliquée,Infrastructures ferroviaires,Infrastructures souterraines,Engins de travaux publics";
  credit[12] = "4,4,4,4,2,3,2,4,1,1,1";
  coeff[12] = "2,2,2,2,1,2,1,2,1,1,1";
  type[12] = "2,2,2,2,1,t,t,1t,1,1,1";

  anne[13] = "3ème License Travaux Publics - S6";
  moduls[13] = "Béton armé et précontraint,Ponts,Fondations et ouvrages en terre,Routes 2,Projet de Fin de Cycle,T.P. Matériaux routiers,Systèmes d’information géographique,Notions sur lesinfrastructures aéroportuaires,Hydraulique appliqué,Entrepreneuriat et management d’entreprise";
  credit[13] = "4,6,4,4,4,3,2,1,1,1";
  coeff[13] = "2,3,2,2,2,2,1,1,1,1";
  type[13] = "2,2,2,2,t,t,1,1,1,1";

  anne[14] = "3ème License Hydraulique - S5";
  moduls[14] = "Hydraulique générale II,Hydrologie II,Hydrogéologie,Ouvrages hydrauliques,Mécanique des sols,TP Topographie,Traitement et épuration des eaux,TP Mécanique des sols,TP Hydraulique,Irrigation,Notions de Système d’informations géographiques,Législation des eaux";
  credit[14] = "4,4,2,4,4,2,4,2,1,1,1,1";
  coeff[14] = "2,2,1,2,2,1,2,1,1,1,1,1";
  type[14] = "2,2,1,2,2,t,2,t,t,1,1,1";

  anne[15] = "3ème License Hydraulique - S6";
  moduls[15] = "Aménagements Hydrauliques,Alimentation en eau potable,Matériaux de construction,Assainissement,Pompes et stations de pompage,Projet de Fin de Cycle,Hydro-informatique,Notions de béton armé,Gestion des ressources hydriques,Technologie des conduites et équipements des réseaux,Entrepreneuriat et management d’entreprise";
  credit[15] = "4,4,2,4,4,4,1,4,1,1,1";
  coeff[15] = "2,2,1,2,2,2,1,2,1,1,1";
  type[15] = "2,2,1,2,2,t,t,2,1,1,1";

  anne[16] = "Master ECBR - S1";
  moduls[16] = "Béton armé I (BA I),Mécanique des Sols I,Routes I,Charpente Métalliques I,Ouvrages d'arts I,Essais & contrôle  de bâtiments,Voiries et Réseaux Divers,Elasticité,Dynamique des structures I";
  credit[16] = "5,5,4,4,5,2,2,1,2";
  coeff[16] = "3,2,2,2,3,1,1,1,2";
  type[16] = "2,2,2,2,2,t,1,1,2";

  anne[17] = "Master ECBR - S2";
  moduls[17] = "Béton armé II,Mécanique des Sols II,Routes II,Charpente Métalliques II,Ouvrages d'arts II,Essais & contrôle  routiers,Dessin assisté par ordinateur,Pathologie des Bâtiments,Dynamique des structures II";
  credit[17] = "5,5,4,4,5,2,2,1,2";
  coeff[17] = "3,2,2,2,3,1,1,1,2";
  type[17] = "2,2,2,2,2,t,t,1,2";

  anne[18] = "Master Traitement - S1";
  moduls[18] = "Traitement des eaux potables,Technique d’épuration des eaux usées,Traitement de l’eau chaude,Génie de l’eau,TP  Traitement,TP  Epuration,TP Informatique,Automatisation,Anglais";
  credit[18] = "6,6,4,2,3,3,4,1,1";
  coeff[18] = "3,3,2,1,2,2,2,1,1";
  type[18] = "2,2,2,2,t,t,t,2,1";

  anne[19] = "Master Traitement - S2";
  moduls[19] = "Procèdes de  traitement des eaux potables,Gestion des stations,Ouvrages Hydrauliques,Aménagement des cours d’eau,TP Dessalement   des eaux,TP analyse des eaux,Informatique et programmation,Forages et Captage des Eaux,Scientific Englisch and Communication";
  credit[19] = "6,4,4,4,3,3,3,2,1";
  coeff[19] = "3,2,2,2,2,2,2,1,1";
  type[19] = "2,2,2,2,t,t,t,2,1";

  anne[20] = "Master Forage Hydraulique - S1";
  moduls[20] = "Hydraulique générale,Cartographie,Stratigraphie de forage,Mécanique du sol,TP Hydraulique générale,TP Topographie,TP Mécanique du sol,Topographie,Géologie d’Algérie,Hydrologie,Anglais";
  credit[20] = "5,4,5,4,2,2,2,2,2,1,1";
  coeff[20] = "3,2,2,2,2,1,1,1,1,1,1";
  type[20] = "2,2,2,2,t,t,t,1,1,1,1";

  anne[21] = "Master Forage Hydraulique - S2";
  moduls[21] = "Hydraulique souterraine,Forage  et équipements,Hydrologie de surface,Hydrogéologie,TP Géophysique et Diagraphie,TP Informatique 1,TP Analyse des eaux,Hydrochimie,Normes et sécurités,ODC de forage,Anglais  technique 1";
  credit[21] = "5,5,4,4,3,2,2,2,1,1,1";
  coeff[21] = "3,2,2,2,2,1,1,1,1,1,1";
  type[21] = "2,2,2,2,t,t,t,1,1,1,1";

  anne[22] = "Master Structures - S1";
  moduls[22] = "Mécanique des structures,Dynamique des structures 1,Structures en  béton armé 1,Structures métalliques,Complément de programmation,Méthodes expérimentales,Matériaux innovants,Matière au choix 1,Matière au choix 2,Anglais technique et terminologie";
  credit[22] = "4,4,4,6,4,2,3,1,1,1";
  coeff[22] = "2,2,2,3,2,1,2,1,1,1";
  type[22] = "2,2,2,2,1t,t,1t,1,1,1";

  anne[23] = "Master Structures - S2";
  moduls[23] = "Elasticité,Dynamique des structures 2,Structures en  béton armé 2,Fondations et soutènements,Méthodes des éléments finis,Projet constructions métalliques,Matière au choix 3,Matière au choix 4,Ethique déontologie et propriété intellectuelle";
  credit[23] = "6,4,4,4,3,6,1,1,1,1";
  coeff[23] = "3,2,2,2,2,3,1,1,1,1";
  type[23] = "2,2,2,2,t,2,1,1,1,1";

  anne[24] = "Master Voies et Ouvrages d'Art - S1";
  moduls[24] = "Théorie de l'Elasticité,Dynamique des structures,Dimensionnement des Ponts,Dimensionnement des Routes,Projet Ouvrages  en BA,TP Programmation,TP Logiciels Appliqués aux Routes,Panier au choix,Anglais technique et terminologie";
  credit[24] = "4,4,6,4,5,2,2,2,1";
  coeff[24] = "2,2,3,2,3,1,1,2,1";
  type[24] = "2,2,2,2,2t,t,t,2,1";

  anne[25] = "Master Voies et Ouvrages d'Art - S2";
  moduls[25] = "Théorie de la Plasticité,Dimensionnement des Ponts 2,Béton Précontraint,Constructions métalliques,Méthodes des éléments finis,Projet routes,TP Systèmes d'Information Géographique (S.I.G),Panier au choix,Ethique déontologie et propriété intellectuelle";
  credit[25] = "4,4,6,4,4,3,2,2,1,1";
  coeff[25] = "2,2,3,2,2,2,1,2,1,1";
  type[25] = "2,2,2,2,2,2,t,2,1,1";

  anne[26] = "Master ECBR - S3";
  moduls[26] = "Béton Précontraint,Ouvrages à ossatures Métallique & Mixtes,Notions sur les règlements,Equipements des batiments,Contrôle Techniques des constructions,Organisation de Chantier,Calcul assisté par ordinateur,Modélisation et analyse des structures,Méthode  des éléments finis,Anglais technique";
  credit[26] = "5,5,4,4,3,2,2,2,1,2";
  coeff[26] = "3,3,2,1,2,1,1,1,1,2";
  type[26] = "2,2,2,2,1,1,t,t,2,1";

  anne[27] = "Master Traitement - S3";
  moduls[27] = "Chimie des eaux,pompes et station de pompage,Organisation de Chantier,Gestion des réseaux AEP-ASS,TP  Chimie des eaux,TP P.S.P,Système d’Information Géographique,Barrages,Hydro-économie";
  credit[27] = "6,4,4,4,3,3,3,2,1";
  coeff[27] = "3,2,2,2,2,1,2,2,1";
  type[27] = "2,2,2,2,t,t,t,2,1";

  anne[28] = "Master Forage Hydraulique - S3";
  moduls[28] = "Méthodes et techniques de forage,Essais de pompage,Hydro-machines,Traitement des boues du forage,TP Informatique 2(SIG),TP Traitement des boues du forage,TP Modélisation,Gestion des ressources en eau,Cimentation,Anglais technique 2,Management de projet";
  credit[28] = "5,4,4,5,3,3,2,1,1,1,1";
  coeff[28] = "3,2,2,2,2,1,1,1,1,1,1";
  type[28] = "2,2,2,2,t,t,t,1,1,1,1";

  anne[29] = "Master Structures - S3";
  moduls[29] = "Béton précontraint,Plasticité et endommagement,Génie parasismique,Ouvrages spéciaux,Modélisation des structures,Projet structures en  béton armé,Matière au choix 5,Matière au choix 6,Recherche documentaire et conception de mémoire";
  credit[29] = "6,4,4,4,3,6,1,1,1";
  coeff[29] = "3,2,2,2,2,3,1,1,1";
  type[29] = "2,2,2,2,t,2,1,1,1";

  anne[30] = "Master Voies et Ouvrages d'Art - S3";
  moduls[30] = "Conceptions avancées de ponts,Ouvrages souterrains,Chemins de fer,Aérodromes,Pathologie et réhabilitation des OA,Géotechnique avancée,Modélisation numérique des Ponts,Organisation et visites de chantiers,Panier au choix,Recherche documentaire et conception de mémoire";
  credit[30] = "4,4,4,4,2,4,3,2,2,1";
  coeff[30] = "2,2,2,2,1,2,2,1,2,1";
  type[30] = "2,2,2,2,1,2,t,t,2,1";
}

function Builder() {
  let sel = document.getElementById('selctor');
  sel.length = anne.length;
  for (var i = 0; i < anne.length; i++) {
    sel.options[i].text = anne[i];
  }
}

function creatanelemn(kng, clss, id, name, style, title, type, value, elem, onclick, disabled, innertext) {
  const kingbck = document.createElement(kng)
  if (clss != "") {
    kingbck.setAttribute('class', clss);
  }
  if (id != "") {
    kingbck.setAttribute('id', id);
  }
  if (name != "") {
    kingbck.setAttribute('name', name);
  }
  if (style != "") {
    kingbck.setAttribute('style', style);
  }
  if (title != "") {
    kingbck.setAttribute('title', title);
  }
  if (type != "") {
    kingbck.setAttribute('type', type);
  }
  if (value != "") {
    kingbck.setAttribute('value', value);
  }
  if (onclick != "") {
    kingbck.setAttribute('onclick', onclick);
  }
  if (disabled != "") {
    kingbck.setAttribute('disabled', disabled);
  }
  if (innertext != "") {
    kingbck.innerText = innertext;
  }
  if (elem != "") {
    kingbck.appendChild(elem);
  }
  return kingbck
}

function choosePI(ind) {
  try {
    document.getElementsByClassName('Tab_hd')[0].remove();
  } catch (e) {} finally {}
  let til = ["Matières", "Crédits", "Coeffi", "EXAM", "TD", "TP", "éval", "Crédit"];
  let table = creatanelemn("table", "Tab_hold", "", "", "", "", "", "", "", "", "", "");
  let perro = creatanelemn("tr", "Tab_ro", "", "", "", "", "", "", "", "", "", "");
  for (var i = 0; i < til.length; i++) {
    let clss = "Tab_hder";
    if (i != 0) {
      clss = "Tab_hder ctd";
    }
    let tab_d = creatanelemn("th", clss, "", "", "", "", "", "", "", "", "", til[i]);
    perro.appendChild(tab_d);
  }
  table.appendChild(perro);

  let modl = moduls[ind].split(",");
  let crdt = credit[ind].split(",");
  let coff = coeff[ind].split(",");
  let typ = type[ind].split(",");

  for (var i = 0; i < modl.length; i++) {
    let duxro = creatanelemn("tr", "Tab_ro", "", "", "", "", "", "", "", "", "", "");
    let tmpar = [modl, crdt, coff, "EXAM", "TD", "TP", "évaluation", "Crédits d'matière"];
    for (var x = 0; x < tmpar.length; x++) {
      let tab_d;
      let clss = "ctd";
      if (x == 0) {
        clss = "ltdX";
      }
      if (x <= 2) {
        let id = `cg${i}#${x}`;
        tab_d = creatanelemn("td", `Tab_cl ${clss}` , id, "", "", "", "", "", "", "", "", tmpar[x][i]);
      }
      else if (x == 3){
        if (typ[i] == 1 || typ[i] == 2 || typ[i] == "1t" || typ[i] == "2t") {
          tab_d = creatanelemn("td", `Tab_cl ${clss}`, "", "", "", "", "", "", "", "", "", "");
          let id = "EXinp#"+i;
          let input = creatanelemn("input", "cell_inp", id, "", "", "", "text", "10", "", "ClearInpVal(this.id)", "", "");
          input.setAttribute("onchange", "modal_eva(this.id)");
          tab_d.appendChild(input);
        }
        else {
          tab_d = creatanelemn("td", `Tab_cl ${clss}`, "", "", "", "", "", "", "", "", "", "/");
        }
      }
      else if (x == 4){
        if (typ[i] == 2 || typ[i] == "2t") {
          tab_d = creatanelemn("td", `Tab_cl ${clss}`, "", "", "", "", "", "", "", "", "", "");
          let id = "TDinp#"+i;
          let input = creatanelemn("input", "cell_inp", id, "", "", "", "text", "10", "", "ClearInpVal(this.id)", "", "");
          input.setAttribute("onchange", "modal_eva(this.id)");
          tab_d.appendChild(input);
        }
        else {
          tab_d = creatanelemn("td", `Tab_cl ${clss}`, "", "", "", "", "", "", "", "", "", "/");
        }
      }
      else if (x == 5){
        if (typ[i] == "t" || typ[i] == "1t" || typ[i] == "2t") {
          tab_d = creatanelemn("td", `Tab_cl ${clss}`, "", "", "", "", "", "", "", "", "", "");
          let id = "TPinp#"+i;
          let input = creatanelemn("input", "cell_inp", id, "", "", "", "text", "10", "", "ClearInpVal(this.id)", "", "");
          input.setAttribute("onchange", "modal_eva(this.id)");
          tab_d.appendChild(input);
        }
        else {
          tab_d = creatanelemn("td", `Tab_cl ${clss}`, "", "", "", "", "", "", "", "", "", "/");
        }
      }
      else {
        tab_d = creatanelemn("td", `Tab_cl ${clss}`, "", "", "", "", "", "", "", "", "", "");
        let id = `eval#${i}#${x}`;
        let input = creatanelemn("p", "cell_inp", id, "", "", "", "", "", "", "", "", "0");
        tab_d.appendChild(input);
      }
      duxro.appendChild(tab_d);
    }
    table.appendChild(duxro);
  }
  //
  let tiyl = ["Total", "ev", "ev", "/", "/", "/", "ev", "ev"];
  let truro = creatanelemn("tr", "Tab_ro", "", "", "", "", "", "", "", "", "", "");
  for (var i = 0; i < tiyl.length; i++) {
    let tab_d;
    if (i == 0) {
      tab_d = creatanelemn("th", "Tab_th ltdX", "", "", "", "", "", "", "", "", "", tiyl[i]);
    }
    else {
      if (tiyl[i] != "/") {
        tab_d = creatanelemn("th", "Tab_th ctd", "", "", "", "", "", "", "", "", "", "");
        let id = `eva#${i}`;
        let input = creatanelemn("p", "cell_out", id, "", "", "", "", "", "", "", "", "0");
        tab_d.appendChild(input);
      }
      else {
        tab_d = creatanelemn("th", "Tab_th ctd", "", "", "", "", "", "", "", "", "", tiyl[i]);
      }
    }
    truro.appendChild(tab_d);
  }
  table.appendChild(truro);
  //
  //
  let gth = [["Taux semestriel", "ev"], ["Total Crédits", "ev"]];
  for (var x = 0; x < gth.length; x++) {
    let fouro = creatanelemn("tr", "Tab_ro", "", "", "", "", "", "", "", "", "", "");
    for (var i = 0; i < gth[x].length; i++) {
      let tab_d;
      if (i == 0) {
        tab_d = creatanelemn("th", "Tab_th ltdX", "", "", "", "", "", "", "", "", "", gth[x][i]);
        tab_d.setAttribute("colspan", "6");
      }
      else {
        if (gth[x][i] != "/") {
          tab_d = creatanelemn("th", "Res_th ctd", "", "", "", "", "", "", "", "", "", "");
          tab_d.setAttribute("colspan", "2");//
          let id = `Extract#${x}`;
          let input = creatanelemn("p", "cell_out", id, "", "", "", "", "", "", "", "", "0");
          tab_d.appendChild(input);
        }
      }
      fouro.appendChild(tab_d);
    }
    table.appendChild(fouro);
  }
  //
  let doc = document.getElementById('hold');
  let tab_hl = creatanelemn("table", "Tab_hd", "", "", "", "", "", "", "", "", "", "");
  let para = creatanelemn("p", "tb_title", "", "", "", "", "", "", "", "", "", anne[ind]);
  tab_hl.appendChild(para);
  tab_hl.appendChild(table);
  doc.appendChild(tab_hl);
  ///*
  for (var i = 0; i < modl.length; i++) {
    modal_eva(`EXinp#${i}`);
  }
  //*/
}

function modal_eva(id) {
  //EXinp#  TDinp#  TPinp#
  ind = id.split("#")[1];
  let exam = "/", td = "/", tp = "/";
  let result, crid = 0, ciff = eval(document.getElementById(`cg${ind}#2`).innerText);;
  try {
    exam = eval(document.getElementById(`EXinp#${ind}`).value);
  } catch (e) {} finally {}
  try {
    td = eval(document.getElementById(`TDinp#${ind}`).value);
  } catch (e) {} finally {}
  try {
    tp = eval(document.getElementById(`TPinp#${ind}`).value);
  } catch (e) {} finally {}
  if (exam != "/" && td != "/" && tp != "/") {
    result = ((exam * 0.6) + (((td+tp)/2)*0.4)) * ciff;
  }
  else if (exam != "/" && td != "/" && tp == "/") {
    result = ((exam * 0.6) + (td * 0.4)) * ciff;
  }
  else if (exam != "/" && td == "/" && tp != "/") {
    result = ((exam * 0.6) + ((tp) * 0.4)) * ciff;
  }
  else if (exam != "/" && td == "/" && tp == "/") {
    result = exam * ciff;
  }
  else if (exam == "/" && td == "/" && tp != "/") {
    result = tp * ciff;
  }
  if (result >= (10 * ciff)) {
    crid = eval(document.getElementById(`cg${ind}#1`).innerText);
  }
  document.getElementById(`eval#${ind}#6`).innerText = result
  document.getElementById(`eval#${ind}#7`).innerText = crid;
  basic_eval();
}

function basic_eval() {
  let row_len = document.getElementsByTagName('tr').length - 4;
  let tcof = 0, tcrd = 0;
  for (var i = 0; i < row_len; i++) {
    tcrd += eval(document.getElementById(`cg${i}#1`).innerText);
    tcof += eval(document.getElementById(`cg${i}#2`).innerText);
  }
  document.getElementById(`eva#1`).innerText = tcrd;
  document.getElementById(`eva#2`).innerText = tcof;

  let tev = 0, tme = 0;
  for (var i = 0; i < row_len; i++) {
    tev += eval(document.getElementById(`eval#${i}#6`).innerText);
    tme += eval(document.getElementById(`eval#${i}#7`).innerText);
  }

  document.getElementById(`Extract#0`).innerText = (Math.round((tev/tcof)*100))/100;
  let tmvx;
  if ((Math.round((tev/tcof)*100))/100 >= 10) {
    tmvx = 30;
  }
  else {
    tmvx = tme;
  }
  document.getElementById(`Extract#1`).innerText = tmvx;
  document.getElementById(`eva#6`).innerText = tev;
  document.getElementById(`eva#7`).innerText = tme;
}

function ClearInpVal(id) {
  document.getElementById(id).value = "";
}

setval();
Builder();
choosePI(0);
