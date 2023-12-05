const champions = [
  {
    id: 1,
    name: "Aatrox",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    role: "Top",
    description:
      "Un guerriero immortale che è stato maledetto da un Dio oscuro.",
    releaseDate: "2009-10-21",
    cost: 6300,
    selected: false
  },
  {
    id: 2,
    name: "Ahri",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    role: "Mid",
    description: "Una volpe magica con un'affinità per le anime.",
    releaseDate: "2011-12-14",
    cost: 4800,
    selected: false
  },
  {
    id: 3,
    name: "Akali",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    role: "Mid",
    description: "Un'assassina aggraziata e mortale.",
    releaseDate: "2010-05-11",
    cost: 3150,
    selected: false
  },
  {
    id: 4,
    name: "Alistar",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
    role: "Support",
    description: "Un possente minotauro difensore.",
    releaseDate: "2009-02-21",
    cost: 1350,
    selected: false
  },
  {
    id: 5,
    name: "Amumu",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
    role: "Jungle",
    description: "Un golem triste in cerca di amici.",
    releaseDate: "2009-06-26",
    cost: 450,
    selected: false
  },
  {
    id: 6,
    name: "Anivia",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
    role: "Mid",
    description: "Un'antica fenice con il controllo del ghiaccio.",
    releaseDate: "2009-07-10",
    cost: 3150,
    selected: false
  },
  {
    id: 7,
    name: "Annie",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
    role: "Mid",
    description: "Una giovane maga con il suo orsacchiotto incantato.",
    releaseDate: "2009-02-21",
    cost: 450,
    selected: false
  },
  {
    id: 8,
    name: "Aphelios",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
    role: "ADC",
    description: "Un artista dell'arma con un arsenale unico.",
    releaseDate: "2019-12-11",
    cost: 6300,
    selected: false
  },
  {
    id: 9,
    name: "Ashe",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    role: "ADC",
    description: "Una fredda arciera proveniente dalle Terre Gelide.",
    releaseDate: "2009-02-21",
    cost: 450,
    selected: false
  },
  {
    id: 10,
    name: "Aurelion Sol",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
    role: "Mid",
    description: "Un drago stellare con un controllo cosmico.",
    releaseDate: "2016-03-24",
    cost: 6300,
    selected: false
  },
  {
    id: 11,
    name: "Azir",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
    role: "Mid",
    description: "Un imperatore ascendente con il potere della sabbia.",
    releaseDate: "2014-09-16",
    cost: 6300,
    selected: false
  },
  {
    id: 12,
    name: "Bard",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
    role: "Support",
    description: "Un viaggiatore cosmico in cerca di esperienze uniche.",
    releaseDate: "2015-03-12",
    cost: 6300,
    selected: false
  },
  {
    id: 13,
    name: "Blitzcrank",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
    role: "Support",
    description: "Un golem di metallo con il pugno perforante.",
    releaseDate: "2009-09-02",
    cost: 3150,
    selected: false
  },
  {
    id: 14,
    name: "Brand",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
    role: "Mid",
    description: "Un mago pirocinetico assetato di distruzione.",
    releaseDate: "2011-04-12",
    cost: 4800,
    selected: false
  },
  {
    id: 15,
    name: "Braum",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
    role: "Support",
    description: "Un gigante cuore caldo protettore.",
    releaseDate: "2014-05-12",
    cost: 6300,
    selected: false
  },
  {
    id: 16,
    name: "Caitlyn",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
    role: "ADC",
    description: "Un'investigatrice di Piltover con precisione mortale.",
    releaseDate: "2011-01-04",
    cost: 4800,
    selected: false
  },
  {
    id: 17,
    name: "Camille",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
    role: "Top",
    description: "Un'assassina meccanizzata con artigli affilati.",
    releaseDate: "2016-12-07",
    cost: 6300,
    selected: false
  },
  {
    id: 18,
    name: "Cassiopeia",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
    role: "Mid",
    description: "Un serpente venefico con una maledizione tragica.",
    releaseDate: "2010-12-14",
    cost: 4800,
    selected: false
  },
  {
    id: 19,
    name: "Cho'Gath",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
    role: "Top",
    description:
      "Un'antica creatura delle Terre Oscure con un grande appetito.",
    releaseDate: "2009-06-26",
    cost: 1350,
    selected: false
  },
  {
    id: 20,
    name: "Corki",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
    role: "ADC",
    description: "Un pilota yordle con un velivolo personalizzato.",
    releaseDate: "2009-09-19",
    cost: 3150,
    selected: false
  },
  {
    id: 21,
    name: "Darius",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
    role: "Top",
    description: "Un guerriero noxiano con una spada gigante.",
    releaseDate: "2012-05-23",
    cost: 4800,
    selected: false
  },
  {
    id: 22,
    name: "Diana",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
    role: "Mid",
    description: "Una guerriera lunare con il potere della luna.",
    releaseDate: "2012-08-07",
    cost: 4800,
    selected: false
  },
  {
    id: 23,
    name: "Dr. Mundo",
    image:
      "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
    role: "Top",
    description: "Un dottore pazzo con una resistenza insana.",
    releaseDate: "2009-09-02",
    cost: 1350,
    selected: false
  },
];

export default champions;
