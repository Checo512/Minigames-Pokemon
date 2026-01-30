const pokemonDB = [
  {
    "name": "bulbasaur",
    "id": "0001"
  },
  {
    "name": "ivysaur",
    "id": "0002"
  },
  {
    "name": "venusaur",
    "id": "0003"
  },
  {
    "name": "mega venusaur",
    "id": "0003",
    "formId": "0001"
  },
  {
    "name": "charmander",
    "id": "0004"
  },
  {
    "name": "charmeleon",
    "id": "0005"
  },
  {
    "name": "charizard",
    "id": "0006"
  },
  {
    "name": "mega charizard x",
    "id": "0006",
    "formId": "0001"
  },
  {
    "name": "mega charizard y",
    "id": "0006",
    "formId": "0002"
  },
  {
    "name": "squirtle",
    "id": "0007"
  },
  {
    "name": "wartortle",
    "id": "0008"
  },
  {
    "name": "blastoise",
    "id": "0009"
  },
  {
    "name": "mega blastoise",
    "id": "0009",
    "formId": "0001"
  },
  {
    "name": "caterpie",
    "id": "0010"
  },
  {
    "name": "metapod",
    "id": "0011"
  },
  {
    "name": "butterfree",
    "id": "0012"
  },
  {
    "name": "weedle",
    "id": "0013"
  },
  {
    "name": "kakuna",
    "id": "0014"
  },
  {
    "name": "beedrill",
    "id": "0015"
  },
  {
    "name": "mega beedrill",
    "id": "0015",
    "formId": "0001"
  },
  {
    "name": "pidgey",
    "id": "0016"
  },
  {
    "name": "pidgeotto",
    "id": "0017"
  },
  {
    "name": "pidgeot",
    "id": "0018"
  },
  {
    "name": "mega pidgeot",
    "id": "0018",
    "formId": "0001"
  },
  {
    "name": "rattata",
    "id": "0019"
  },
  {
    "name": "rattata (alola)",
    "id": "0019",
    "formId": "0001"
  },
  {
    "name": "raticate",
    "id": "0020"
  },
  {
    "name": "raticate (alola)",
    "id": "0020",
    "formId": "0001"
  },
  {
    "name": "spearow",
    "id": "0021"
  },
  {
    "name": "fearow",
    "id": "0022"
  },
  {
    "name": "ekans",
    "id": "0023"
  },
  {
    "name": "arbok",
    "id": "0024"
  },
  {
    "name": "pikachu",
    "id": "0025"
  },
  {
    "name": "raichu",
    "id": "0026"
  },
  {
    "name": "mega raichu x",
    "id": "0026",
    "formId": "0002"
  },
  {
    "name": "mega raichu y",
    "id": "0026",
    "formId": "0003"
  },
  {
    "name": "raichu (alola)",
    "id": "0026",
    "formId": "0001"
  },
  {
    "name": "sandshrew",
    "id": "0027"
  },
  {
    "name": "sandshrew (alola)",
    "id": "0027",
    "formId": "0001"
  },
  {
    "name": "sandslash",
    "id": "0028"
  },
  {
    "name": "sandslash (alola)",
    "id": "0028",
    "formId": "0001"
  },
  {
    "name": "nidoran-f",
    "id": "0029"
  },
  {
    "name": "nidorina",
    "id": "0030"
  },
  {
    "name": "nidoqueen",
    "id": "0031"
  },
  {
    "name": "nidoran-m",
    "id": "0032"
  },
  {
    "name": "nidorino",
    "id": "0033"
  },
  {
    "name": "nidoking",
    "id": "0034"
  },
  {
    "name": "clefairy",
    "id": "0035"
  },
  {
    "name": "clefable",
    "id": "0036"
  },
  {
    "name": "mega clefable",
    "id": "0036",
    "formId": "0001"
  },
  {
    "name": "vulpix",
    "id": "0037"
  },
  {
    "name": "vulpix (alola)",
    "id": "0037",
    "formId": "0001"
  },
  {
    "name": "ninetales",
    "id": "0038"
  },
  {
    "name": "ninetales (alola)",
    "id": "0038",
    "formId": "0001"
  },
  {
    "name": "jigglypuff",
    "id": "0039"
  },
  {
    "name": "wigglytuff",
    "id": "0040"
  },
  {
    "name": "zubat",
    "id": "0041"
  },
  {
    "name": "golbat",
    "id": "0042"
  },
  {
    "name": "oddish",
    "id": "0043"
  },
  {
    "name": "gloom",
    "id": "0044"
  },
  {
    "name": "vileplume",
    "id": "0045"
  },
  {
    "name": "paras",
    "id": "0046"
  },
  {
    "name": "parasect",
    "id": "0047"
  },
  {
    "name": "venonat",
    "id": "0048"
  },
  {
    "name": "venomoth",
    "id": "0049"
  },
  {
    "name": "diglett",
    "id": "0050"
  },
  {
    "name": "diglett (alola)",
    "id": "0050",
    "formId": "0001"
  },
  {
    "name": "dugtrio",
    "id": "0051"
  },
  {
    "name": "dugtrio (alola)",
    "id": "0051",
    "formId": "0001"
  },
  {
    "name": "meowth",
    "id": "0052"
  },
  {
    "name": "meowth (alola)",
    "id": "0052",
    "formId": "0001"
  },
  {
    "name": "meowth (galar)",
    "id": "0052",
    "formId": "0002"
  },
  {
    "name": "persian",
    "id": "0053"
  },
  {
    "name": "persian (alola)",
    "id": "0053",
    "formId": "0001"
  },
  {
    "name": "psyduck",
    "id": "0054"
  },
  {
    "name": "golduck",
    "id": "0055"
  },
  {
    "name": "mankey",
    "id": "0056"
  },
  {
    "name": "primeape",
    "id": "0057"
  },
  {
    "name": "growlithe",
    "id": "0058"
  },
  {
    "name": "growlithe (hisui)",
    "id": "0058",
    "formId": "0001"
  },
  {
    "name": "arcanine",
    "id": "0059"
  },
  {
    "name": "arcanine (hisui)",
    "id": "0059",
    "formId": "0001"
  },
  {
    "name": "poliwag",
    "id": "0060"
  },
  {
    "name": "poliwhirl",
    "id": "0061"
  },
  {
    "name": "poliwrath",
    "id": "0062"
  },
  {
    "name": "abra",
    "id": "0063"
  },
  {
    "name": "kadabra",
    "id": "0064"
  },
  {
    "name": "alakazam",
    "id": "0065"
  },
  {
    "name": "mega alakazam",
    "id": "0065",
    "formId": "0001"
  },
  {
    "name": "machop",
    "id": "0066"
  },
  {
    "name": "machoke",
    "id": "0067"
  },
  {
    "name": "machamp",
    "id": "0068"
  },
  {
    "name": "bellsprout",
    "id": "0069"
  },
  {
    "name": "weepinbell",
    "id": "0070"
  },
  {
    "name": "victreebel",
    "id": "0071"
  },
  {
    "name": "mega victreebel",
    "id": "0071",
    "formId": "0001"
  },
  {
    "name": "tentacool",
    "id": "0072"
  },
  {
    "name": "tentacruel",
    "id": "0073"
  },
  {
    "name": "geodude",
    "id": "0074"
  },
  {
    "name": "geodude (alola)",
    "id": "0074",
    "formId": "0001"
  },
  {
    "name": "graveler",
    "id": "0075"
  },
  {
    "name": "graveler (alola)",
    "id": "0075",
    "formId": "0001"
  },
  {
    "name": "golem",
    "id": "0076"
  },
  {
    "name": "golem (alola)",
    "id": "0076",
    "formId": "0001"
  },
  {
    "name": "ponyta",
    "id": "0077"
  },
  {
    "name": "ponyta (galar)",
    "id": "0077",
    "formId": "0001"
  },
  {
    "name": "rapidash",
    "id": "0078"
  },
  {
    "name": "rapidash (galar)",
    "id": "0078",
    "formId": "0001"
  },
  {
    "name": "slowpoke",
    "id": "0079"
  },
  {
    "name": "slowpoke (galar)",
    "id": "0079",
    "formId": "0001"
  },
  {
    "name": "slowbro",
    "id": "0080"
  },
  {
    "name": "mega slowbro",
    "id": "0080",
    "formId": "0002"
  },
  {
    "name": "slowbro (galar)",
    "id": "0080",
    "formId": "0001"
  },
  {
    "name": "magnemite",
    "id": "0081"
  },
  {
    "name": "magneton",
    "id": "0082"
  },
  {
    "name": "farfetchd",
    "id": "0083"
  },
  {
    "name": "farfetchd (galar)",
    "id": "0083",
    "formId": "0001"
  },
  {
    "name": "doduo",
    "id": "0084"
  },
  {
    "name": "dodrio",
    "id": "0085"
  },
  {
    "name": "seel",
    "id": "0086"
  },
  {
    "name": "dewgong",
    "id": "0087"
  },
  {
    "name": "grimer",
    "id": "0088"
  },
  {
    "name": "grimer (alola)",
    "id": "0088",
    "formId": "0001"
  },
  {
    "name": "muk",
    "id": "0089"
  },
  {
    "name": "muk (alola)",
    "id": "0089",
    "formId": "0001"
  },
  {
    "name": "shellder",
    "id": "0090"
  },
  {
    "name": "cloyster",
    "id": "0091"
  },
  {
    "name": "gastly",
    "id": "0092"
  },
  {
    "name": "haunter",
    "id": "0093"
  },
  {
    "name": "gengar",
    "id": "0094"
  },
  {
    "name": "mega gengar",
    "id": "0094",
    "formId": "0001"
  },
  {
    "name": "onix",
    "id": "0095"
  },
  {
    "name": "drowzee",
    "id": "0096"
  },
  {
    "name": "hypno",
    "id": "0097"
  },
  {
    "name": "krabby",
    "id": "0098"
  },
  {
    "name": "kingler",
    "id": "0099"
  },
  {
    "name": "voltorb",
    "id": "0100"
  },
  {
    "name": "voltorb (hisui)",
    "id": "0100",
    "formId": "0001"
  },
  {
    "name": "electrode",
    "id": "0101"
  },
  {
    "name": "electrode (hisui)",
    "id": "0101",
    "formId": "0001"
  },
  {
    "name": "exeggcute",
    "id": "0102"
  },
  {
    "name": "exeggutor",
    "id": "0103"
  },
  {
    "name": "exeggutor (alola)",
    "id": "0103",
    "formId": "0001"
  },
  {
    "name": "cubone",
    "id": "0104"
  },
  {
    "name": "marowak",
    "id": "0105"
  },
  {
    "name": "marowak (alola)",
    "id": "0105",
    "formId": "0001"
  },
  {
    "name": "hitmonlee",
    "id": "0106"
  },
  {
    "name": "hitmonchan",
    "id": "0107"
  },
  {
    "name": "lickitung",
    "id": "0108"
  },
  {
    "name": "koffing",
    "id": "0109"
  },
  {
    "name": "weezing",
    "id": "0110"
  },
  {
    "name": "weezing (galar)",
    "id": "0110",
    "formId": "0001"
  },
  {
    "name": "rhyhorn",
    "id": "0111"
  },
  {
    "name": "rhydon",
    "id": "0112"
  },
  {
    "name": "chansey",
    "id": "0113"
  },
  {
    "name": "tangela",
    "id": "0114"
  },
  {
    "name": "kangaskhan",
    "id": "0115"
  },
  {
    "name": "mega kangaskhan",
    "id": "0115",
    "formId": "0001"
  },
  {
    "name": "horsea",
    "id": "0116"
  },
  {
    "name": "seadra",
    "id": "0117"
  },
  {
    "name": "goldeen",
    "id": "0118"
  },
  {
    "name": "seaking",
    "id": "0119"
  },
  {
    "name": "staryu",
    "id": "0120"
  },
  {
    "name": "starmie",
    "id": "0121"
  },
  {
    "name": "mega starmie",
    "id": "0121",
    "formId": "0001"
  },
  {
    "name": "mr-mime",
    "id": "0122"
  },
  {
    "name": "mr-mime (galar)",
    "id": "0122",
    "formId": "0001"
  },
  {
    "name": "scyther",
    "id": "0123"
  },
  {
    "name": "jynx",
    "id": "0124"
  },
  {
    "name": "electabuzz",
    "id": "0125"
  },
  {
    "name": "magmar",
    "id": "0126"
  },
  {
    "name": "pinsir",
    "id": "0127"
  },
  {
    "name": "mega pinsir",
    "id": "0127",
    "formId": "0001"
  },
  {
    "name": "tauros",
    "id": "0128"
  },
  {
    "name": "tauros (paldea)",
    "id": "0128",
    "formId": "0001"
  },
  {
    "name": "magikarp",
    "id": "0129"
  },
  {
    "name": "gyarados",
    "id": "0130"
  },
  {
    "name": "mega gyarados",
    "id": "0130",
    "formId": "0001"
  },
  {
    "name": "lapras",
    "id": "0131"
  },
  {
    "name": "ditto",
    "id": "0132"
  },
  {
    "name": "eevee",
    "id": "0133"
  },
  {
    "name": "vaporeon",
    "id": "0134"
  },
  {
    "name": "jolteon",
    "id": "0135"
  },
  {
    "name": "flareon",
    "id": "0136"
  },
  {
    "name": "porygon",
    "id": "0137"
  },
  {
    "name": "omanyte",
    "id": "0138"
  },
  {
    "name": "omastar",
    "id": "0139"
  },
  {
    "name": "kabuto",
    "id": "0140"
  },
  {
    "name": "kabutops",
    "id": "0141"
  },
  {
    "name": "aerodactyl",
    "id": "0142"
  },
  {
    "name": "mega aerodactyl",
    "id": "0142",
    "formId": "0001"
  },
  {
    "name": "snorlax",
    "id": "0143"
  },
  {
    "name": "articuno",
    "id": "0144"
  },
  {
    "name": "articuno (galar)",
    "id": "0144",
    "formId": "0001"
  },
  {
    "name": "zapdos",
    "id": "0145"
  },
  {
    "name": "zapdos (galar)",
    "id": "0145",
    "formId": "0001"
  },
  {
    "name": "moltres",
    "id": "0146"
  },
  {
    "name": "moltres (galar)",
    "id": "0146",
    "formId": "0001"
  },
  {
    "name": "dratini",
    "id": "0147"
  },
  {
    "name": "dragonair",
    "id": "0148"
  },
  {
    "name": "dragonite",
    "id": "0149"
  },
  {
    "name": "mega dragonite",
    "id": "0149",
    "formId": "0001"
  },
  {
    "name": "mewtwo",
    "id": "0150"
  },
  {
    "name": "mega mewtwo x",
    "id": "0150",
    "formId": "0001"
  },
  {
    "name": "mega mewtwo y",
    "id": "0150",
    "formId": "0002"
  },
  {
    "name": "mew",
    "id": "0151"
  },
  {
    "name": "chikorita",
    "id": "0152"
  },
  {
    "name": "bayleef",
    "id": "0153"
  },
  {
    "name": "meganium",
    "id": "0154"
  },
  {
    "name": "mega meganium",
    "id": "0154",
    "formId": "0001"
  },
  {
    "name": "cyndaquil",
    "id": "0155"
  },
  {
    "name": "quilava",
    "id": "0156"
  },
  {
    "name": "typhlosion",
    "id": "0157"
  },
  {
    "name": "typhlosion (hisui)",
    "id": "0157",
    "formId": "0001"
  },
  {
    "name": "totodile",
    "id": "0158"
  },
  {
    "name": "croconaw",
    "id": "0159"
  },
  {
    "name": "feraligatr",
    "id": "0160"
  },
  {
    "name": "mega feraligatr",
    "id": "0160",
    "formId": "0002"
  },
  {
    "name": "sentret",
    "id": "0161"
  },
  {
    "name": "furret",
    "id": "0162"
  },
  {
    "name": "hoothoot",
    "id": "0163"
  },
  {
    "name": "noctowl",
    "id": "0164"
  },
  {
    "name": "ledyba",
    "id": "0165"
  },
  {
    "name": "ledian",
    "id": "0166"
  },
  {
    "name": "spinarak",
    "id": "0167"
  },
  {
    "name": "ariados",
    "id": "0168"
  },
  {
    "name": "crobat",
    "id": "0169"
  },
  {
    "name": "chinchou",
    "id": "0170"
  },
  {
    "name": "lanturn",
    "id": "0171"
  },
  {
    "name": "pichu",
    "id": "0172"
  },
  {
    "name": "cleffa",
    "id": "0173"
  },
  {
    "name": "igglybuff",
    "id": "0174"
  },
  {
    "name": "togepi",
    "id": "0175"
  },
  {
    "name": "togetic",
    "id": "0176"
  },
  {
    "name": "natu",
    "id": "0177"
  },
  {
    "name": "xatu",
    "id": "0178"
  },
  {
    "name": "mareep",
    "id": "0179"
  },
  {
    "name": "flaaffy",
    "id": "0180"
  },
  {
    "name": "ampharos",
    "id": "0181"
  },
  {
    "name": "mega ampharos",
    "id": "0181",
    "formId": "0001"
  },
  {
    "name": "bellossom",
    "id": "0182"
  },
  {
    "name": "marill",
    "id": "0183"
  },
  {
    "name": "azumarill",
    "id": "0184"
  },
  {
    "name": "sudowoodo",
    "id": "0185"
  },
  {
    "name": "politoed",
    "id": "0186"
  },
  {
    "name": "hoppip",
    "id": "0187"
  },
  {
    "name": "skiploom",
    "id": "0188"
  },
  {
    "name": "jumpluff",
    "id": "0189"
  },
  {
    "name": "aipom",
    "id": "0190"
  },
  {
    "name": "sunkern",
    "id": "0191"
  },
  {
    "name": "sunflora",
    "id": "0192"
  },
  {
    "name": "yanma",
    "id": "0193"
  },
  {
    "name": "wooper",
    "id": "0194"
  },
  {
    "name": "wooper (paldea)",
    "id": "0194",
    "formId": "0002"
  },
  {
    "name": "quagsire",
    "id": "0195"
  },
  {
    "name": "espeon",
    "id": "0196"
  },
  {
    "name": "umbreon",
    "id": "0197"
  },
  {
    "name": "murkrow",
    "id": "0198"
  },
  {
    "name": "slowking",
    "id": "0199"
  },
  {
    "name": "slowking (galar)",
    "id": "0199",
    "formId": "0001"
  },
  {
    "name": "misdreavus",
    "id": "0200"
  },
  {
    "name": "unown",
    "id": "0201"
  },
  {
    "name": "wobbuffet",
    "id": "0202"
  },
  {
    "name": "girafarig",
    "id": "0203"
  },
  {
    "name": "pineco",
    "id": "0204"
  },
  {
    "name": "forretress",
    "id": "0205"
  },
  {
    "name": "dunsparce",
    "id": "0206"
  },
  {
    "name": "gligar",
    "id": "0207"
  },
  {
    "name": "steelix",
    "id": "0208"
  },
  {
    "name": "mega steelix",
    "id": "0208",
    "formId": "0001"
  },
  {
    "name": "snubbull",
    "id": "0209"
  },
  {
    "name": "granbull",
    "id": "0210"
  },
  {
    "name": "qwilfish",
    "id": "0211"
  },
  {
    "name": "qwilfish (hisui)",
    "id": "0211",
    "formId": "0001"
  },
  {
    "name": "scizor",
    "id": "0212"
  },
  {
    "name": "mega scizor",
    "id": "0212",
    "formId": "0001"
  },
  {
    "name": "shuckle",
    "id": "0213"
  },
  {
    "name": "heracross",
    "id": "0214"
  },
  {
    "name": "mega heracross",
    "id": "0214",
    "formId": "0001"
  },
  {
    "name": "sneasel",
    "id": "0215"
  },
  {
    "name": "sneasel (hisui)",
    "id": "0215",
    "formId": "0001"
  },
  {
    "name": "teddiursa",
    "id": "0216"
  },
  {
    "name": "ursaring",
    "id": "0217"
  },
  {
    "name": "slugma",
    "id": "0218"
  },
  {
    "name": "magcargo",
    "id": "0219"
  },
  {
    "name": "swinub",
    "id": "0220"
  },
  {
    "name": "piloswine",
    "id": "0221"
  },
  {
    "name": "corsola",
    "id": "0222"
  },
  {
    "name": "corsola (galar)",
    "id": "0222",
    "formId": "0001"
  },
  {
    "name": "remoraid",
    "id": "0223"
  },
  {
    "name": "octillery",
    "id": "0224"
  },
  {
    "name": "delibird",
    "id": "0225"
  },
  {
    "name": "mantine",
    "id": "0226"
  },
  {
    "name": "skarmory",
    "id": "0227"
  },
  {
    "name": "mega skarmory",
    "id": "0227",
    "formId": "0001"
  },
  {
    "name": "houndour",
    "id": "0228"
  },
  {
    "name": "houndoom",
    "id": "0229"
  },
  {
    "name": "mega houndoom",
    "id": "0229",
    "formId": "0001"
  },
  {
    "name": "kingdra",
    "id": "0230"
  },
  {
    "name": "phanpy",
    "id": "0231"
  },
  {
    "name": "donphan",
    "id": "0232"
  },
  {
    "name": "porygon2",
    "id": "0233"
  },
  {
    "name": "stantler",
    "id": "0234"
  },
  {
    "name": "smeargle",
    "id": "0235"
  },
  {
    "name": "tyrogue",
    "id": "0236"
  },
  {
    "name": "hitmontop",
    "id": "0237"
  },
  {
    "name": "smoochum",
    "id": "0238"
  },
  {
    "name": "elekid",
    "id": "0239"
  },
  {
    "name": "magby",
    "id": "0240"
  },
  {
    "name": "miltank",
    "id": "0241"
  },
  {
    "name": "blissey",
    "id": "0242"
  },
  {
    "name": "raikou",
    "id": "0243"
  },
  {
    "name": "entei",
    "id": "0244"
  },
  {
    "name": "suicune",
    "id": "0245"
  },
  {
    "name": "larvitar",
    "id": "0246"
  },
  {
    "name": "pupitar",
    "id": "0247"
  },
  {
    "name": "tyranitar",
    "id": "0248"
  },
  {
    "name": "mega tyranitar",
    "id": "0248",
    "formId": "0001"
  },
  {
    "name": "lugia",
    "id": "0249"
  },
  {
    "name": "ho-oh",
    "id": "0250"
  },
  {
    "name": "celebi",
    "id": "0251"
  },
  {
    "name": "treecko",
    "id": "0252"
  },
  {
    "name": "grovyle",
    "id": "0253"
  },
  {
    "name": "sceptile",
    "id": "0254"
  },
  {
    "name": "mega sceptile",
    "id": "0254",
    "formId": "0001"
  },
  {
    "name": "torchic",
    "id": "0255"
  },
  {
    "name": "combusken",
    "id": "0256"
  },
  {
    "name": "blaziken",
    "id": "0257"
  },
  {
    "name": "mega blaziken",
    "id": "0257",
    "formId": "0001"
  },
  {
    "name": "mudkip",
    "id": "0258"
  },
  {
    "name": "marshtomp",
    "id": "0259"
  },
  {
    "name": "swampert",
    "id": "0260"
  },
  {
    "name": "mega swampert",
    "id": "0260",
    "formId": "0001"
  },
  {
    "name": "poochyena",
    "id": "0261"
  },
  {
    "name": "mightyena",
    "id": "0262"
  },
  {
    "name": "zigzagoon",
    "id": "0263"
  },
  {
    "name": "zigzagoon (galar)",
    "id": "0263",
    "formId": "0001"
  },
  {
    "name": "linoone",
    "id": "0264"
  },
  {
    "name": "linoone (galar)",
    "id": "0264",
    "formId": "0001"
  },
  {
    "name": "wurmple",
    "id": "0265"
  },
  {
    "name": "silcoon",
    "id": "0266"
  },
  {
    "name": "beautifly",
    "id": "0267"
  },
  {
    "name": "cascoon",
    "id": "0268"
  },
  {
    "name": "dustox",
    "id": "0269"
  },
  {
    "name": "lotad",
    "id": "0270"
  },
  {
    "name": "lombre",
    "id": "0271"
  },
  {
    "name": "ludicolo",
    "id": "0272"
  },
  {
    "name": "seedot",
    "id": "0273"
  },
  {
    "name": "nuzleaf",
    "id": "0274"
  },
  {
    "name": "shiftry",
    "id": "0275"
  },
  {
    "name": "taillow",
    "id": "0276"
  },
  {
    "name": "swellow",
    "id": "0277"
  },
  {
    "name": "wingull",
    "id": "0278"
  },
  {
    "name": "pelipper",
    "id": "0279"
  },
  {
    "name": "ralts",
    "id": "0280"
  },
  {
    "name": "kirlia",
    "id": "0281"
  },
  {
    "name": "gardevoir",
    "id": "0282"
  },
  {
    "name": "mega gardevoir",
    "id": "0282",
    "formId": "0001"
  },
  {
    "name": "surskit",
    "id": "0283"
  },
  {
    "name": "masquerain",
    "id": "0284"
  },
  {
    "name": "shroomish",
    "id": "0285"
  },
  {
    "name": "breloom",
    "id": "0286"
  },
  {
    "name": "slakoth",
    "id": "0287"
  },
  {
    "name": "vigoroth",
    "id": "0288"
  },
  {
    "name": "slaking",
    "id": "0289"
  },
  {
    "name": "nincada",
    "id": "0290"
  },
  {
    "name": "ninjask",
    "id": "0291"
  },
  {
    "name": "shedinja",
    "id": "0292"
  },
  {
    "name": "whismur",
    "id": "0293"
  },
  {
    "name": "loudred",
    "id": "0294"
  },
  {
    "name": "exploud",
    "id": "0295"
  },
  {
    "name": "makuhita",
    "id": "0296"
  },
  {
    "name": "hariyama",
    "id": "0297"
  },
  {
    "name": "azurill",
    "id": "0298"
  },
  {
    "name": "nosepass",
    "id": "0299"
  },
  {
    "name": "skitty",
    "id": "0300"
  },
  {
    "name": "delcatty",
    "id": "0301"
  },
  {
    "name": "sableye",
    "id": "0302"
  },
  {
    "name": "mega sableye",
    "id": "0302",
    "formId": "0001"
  },
  {
    "name": "mawile",
    "id": "0303"
  },
  {
    "name": "mega mawile",
    "id": "0303",
    "formId": "0001"
  },
  {
    "name": "aron",
    "id": "0304"
  },
  {
    "name": "lairon",
    "id": "0305"
  },
  {
    "name": "aggron",
    "id": "0306"
  },
  {
    "name": "mega aggron",
    "id": "0306",
    "formId": "0001"
  },
  {
    "name": "meditite",
    "id": "0307"
  },
  {
    "name": "medicham",
    "id": "0308"
  },
  {
    "name": "mega medicham",
    "id": "0308",
    "formId": "0001"
  },
  {
    "name": "electrike",
    "id": "0309"
  },
  {
    "name": "manectric",
    "id": "0310"
  },
  {
    "name": "mega manectric",
    "id": "0310",
    "formId": "0001"
  },
  {
    "name": "plusle",
    "id": "0311"
  },
  {
    "name": "minun",
    "id": "0312"
  },
  {
    "name": "volbeat",
    "id": "0313"
  },
  {
    "name": "illumise",
    "id": "0314"
  },
  {
    "name": "roselia",
    "id": "0315"
  },
  {
    "name": "gulpin",
    "id": "0316"
  },
  {
    "name": "swalot",
    "id": "0317"
  },
  {
    "name": "carvanha",
    "id": "0318"
  },
  {
    "name": "sharpedo",
    "id": "0319"
  },
  {
    "name": "mega sharpedo",
    "id": "0319",
    "formId": "0001"
  },
  {
    "name": "wailmer",
    "id": "0320"
  },
  {
    "name": "wailord",
    "id": "0321"
  },
  {
    "name": "numel",
    "id": "0322"
  },
  {
    "name": "camerupt",
    "id": "0323"
  },
  {
    "name": "mega camerupt",
    "id": "0323",
    "formId": "0001"
  },
  {
    "name": "torkoal",
    "id": "0324"
  },
  {
    "name": "spoink",
    "id": "0325"
  },
  {
    "name": "grumpig",
    "id": "0326"
  },
  {
    "name": "spinda",
    "id": "0327"
  },
  {
    "name": "trapinch",
    "id": "0328"
  },
  {
    "name": "vibrava",
    "id": "0329"
  },
  {
    "name": "flygon",
    "id": "0330"
  },
  {
    "name": "cacnea",
    "id": "0331"
  },
  {
    "name": "cacturne",
    "id": "0332"
  },
  {
    "name": "swablu",
    "id": "0333"
  },
  {
    "name": "altaria",
    "id": "0334"
  },
  {
    "name": "mega altaria",
    "id": "0334",
    "formId": "0001"
  },
  {
    "name": "zangoose",
    "id": "0335"
  },
  {
    "name": "seviper",
    "id": "0336"
  },
  {
    "name": "lunatone",
    "id": "0337"
  },
  {
    "name": "solrock",
    "id": "0338"
  },
  {
    "name": "barboach",
    "id": "0339"
  },
  {
    "name": "whiscash",
    "id": "0340"
  },
  {
    "name": "corphish",
    "id": "0341"
  },
  {
    "name": "crawdaunt",
    "id": "0342"
  },
  {
    "name": "baltoy",
    "id": "0343"
  },
  {
    "name": "claydol",
    "id": "0344"
  },
  {
    "name": "lileep",
    "id": "0345"
  },
  {
    "name": "cradily",
    "id": "0346"
  },
  {
    "name": "anorith",
    "id": "0347"
  },
  {
    "name": "armaldo",
    "id": "0348"
  },
  {
    "name": "feebas",
    "id": "0349"
  },
  {
    "name": "milotic",
    "id": "0350"
  },
  {
    "name": "castform",
    "id": "0351"
  },
  {
    "name": "castform (sunny)",
    "id": "0351",
    "formId": "0001"
  },
  {
    "name": "castform (rainy)",
    "id": "0351",
    "formId": "0002"
  },
  {
    "name": "castform (snowy)",
    "id": "0351",
    "formId": "0003"
  },
  {
    "name": "kecleon",
    "id": "0352"
  },
  {
    "name": "shuppet",
    "id": "0353"
  },
  {
    "name": "banette",
    "id": "0354"
  },
  {
    "name": "mega banette",
    "id": "0354",
    "formId": "0001"
  },
  {
    "name": "duskull",
    "id": "0355"
  },
  {
    "name": "dusclops",
    "id": "0356"
  },
  {
    "name": "tropius",
    "id": "0357"
  },
  {
    "name": "chimecho",
    "id": "0358"
  },
  {
    "name": "mega chimecho",
    "id": "0358",
    "formId": "0001"
  },
  {
    "name": "absol",
    "id": "0359"
  },
  {
    "name": "mega absol",
    "id": "0359",
    "formId": "0001"
  },
  {
    "name": "mega absol z",
    "id": "0359",
    "formId": "0002"
  },
  {
    "name": "wynaut",
    "id": "0360"
  },
  {
    "name": "snorunt",
    "id": "0361"
  },
  {
    "name": "glalie",
    "id": "0362"
  },
  {
    "name": "mega glalie",
    "id": "0362",
    "formId": "0001"
  },
  {
    "name": "spheal",
    "id": "0363"
  },
  {
    "name": "sealeo",
    "id": "0364"
  },
  {
    "name": "walrein",
    "id": "0365"
  },
  {
    "name": "clamperl",
    "id": "0366"
  },
  {
    "name": "huntail",
    "id": "0367"
  },
  {
    "name": "gorebyss",
    "id": "0368"
  },
  {
    "name": "relicanth",
    "id": "0369"
  },
  {
    "name": "luvdisc",
    "id": "0370"
  },
  {
    "name": "bagon",
    "id": "0371"
  },
  {
    "name": "shelgon",
    "id": "0372"
  },
  {
    "name": "salamence",
    "id": "0373"
  },
  {
    "name": "mega salamence",
    "id": "0373",
    "formId": "0001"
  },
  {
    "name": "beldum",
    "id": "0374"
  },
  {
    "name": "metang",
    "id": "0375"
  },
  {
    "name": "metagross",
    "id": "0376"
  },
  {
    "name": "mega metagross",
    "id": "0376",
    "formId": "0001"
  },
  {
    "name": "regirock",
    "id": "0377"
  },
  {
    "name": "regice",
    "id": "0378"
  },
  {
    "name": "registeel",
    "id": "0379"
  },
  {
    "name": "latias",
    "id": "0380"
  },
  {
    "name": "mega latias",
    "id": "0380",
    "formId": "0001"
  },
  {
    "name": "latios",
    "id": "0381"
  },
  {
    "name": "mega latios",
    "id": "0381",
    "formId": "0001"
  },
  {
    "name": "kyogre",
    "id": "0382"
  },
  {
    "name": "kyogre-primal",
    "id": "0382",
    "formId": "0001"
  },
  {
    "name": "groudon",
    "id": "0383"
  },
  {
    "name": "groudon-primal",
    "id": "0383",
    "formId": "0001"
  },
  {
    "name": "rayquaza",
    "id": "0384"
  },
  {
    "name": "mega rayquaza",
    "id": "0384",
    "formId": "0001"
  },
  {
    "name": "jirachi",
    "id": "0385"
  },
  {
    "name": "deoxys-normal",
    "id": "0386"
  },
  {
    "name": "deoxys-attack",
    "id": "0386",
    "formId": "0001"
  },
  {
    "name": "deoxys-defense",
    "id": "0386",
    "formId": "0002"
  },
  {
    "name": "deoxys-speed",
    "id": "0386",
    "formId": "0003"
  },
  {
    "name": "turtwig",
    "id": "0387"
  },
  {
    "name": "grotle",
    "id": "0388"
  },
  {
    "name": "torterra",
    "id": "0389"
  },
  {
    "name": "chimchar",
    "id": "0390"
  },
  {
    "name": "monferno",
    "id": "0391"
  },
  {
    "name": "infernape",
    "id": "0392"
  },
  {
    "name": "piplup",
    "id": "0393"
  },
  {
    "name": "prinplup",
    "id": "0394"
  },
  {
    "name": "empoleon",
    "id": "0395"
  },
  {
    "name": "starly",
    "id": "0396"
  },
  {
    "name": "staravia",
    "id": "0397"
  },
  {
    "name": "staraptor",
    "id": "0398"
  },
  {
    "name": "mega staraptor",
    "id": "0398",
    "formId": "0001"
  },
  {
    "name": "bidoof",
    "id": "0399"
  },
  {
    "name": "bibarel",
    "id": "0400"
  },
  {
    "name": "kricketot",
    "id": "0401"
  },
  {
    "name": "kricketune",
    "id": "0402"
  },
  {
    "name": "shinx",
    "id": "0403"
  },
  {
    "name": "luxio",
    "id": "0404"
  },
  {
    "name": "luxray",
    "id": "0405"
  },
  {
    "name": "budew",
    "id": "0406"
  },
  {
    "name": "roserade",
    "id": "0407"
  },
  {
    "name": "cranidos",
    "id": "0408"
  },
  {
    "name": "rampardos",
    "id": "0409"
  },
  {
    "name": "shieldon",
    "id": "0410"
  },
  {
    "name": "bastiodon",
    "id": "0411"
  },
  {
    "name": "burmy",
    "id": "0412"
  },
  {
    "name": "wormadam-plant",
    "id": "0413"
  },
  {
    "name": "mothim",
    "id": "0414"
  },
  {
    "name": "combee",
    "id": "0415"
  },
  {
    "name": "vespiquen",
    "id": "0416"
  },
  {
    "name": "pachirisu",
    "id": "0417"
  },
  {
    "name": "buizel",
    "id": "0418"
  },
  {
    "name": "floatzel",
    "id": "0419"
  },
  {
    "name": "cherubi",
    "id": "0420"
  },
  {
    "name": "cherrim",
    "id": "0421"
  },
  {
    "name": "shellos",
    "id": "0422"
  },
  {
    "name": "gastrodon",
    "id": "0423"
  },
  {
    "name": "ambipom",
    "id": "0424"
  },
  {
    "name": "drifloon",
    "id": "0425"
  },
  {
    "name": "drifblim",
    "id": "0426"
  },
  {
    "name": "buneary",
    "id": "0427"
  },
  {
    "name": "lopunny",
    "id": "0428"
  },
  {
    "name": "mega lopunny",
    "id": "0428",
    "formId": "0001"
  },
  {
    "name": "mismagius",
    "id": "0429"
  },
  {
    "name": "honchkrow",
    "id": "0430"
  },
  {
    "name": "glameow",
    "id": "0431"
  },
  {
    "name": "purugly",
    "id": "0432"
  },
  {
    "name": "chingling",
    "id": "0433"
  },
  {
    "name": "stunky",
    "id": "0434"
  },
  {
    "name": "skuntank",
    "id": "0435"
  },
  {
    "name": "bronzor",
    "id": "0436"
  },
  {
    "name": "bronzong",
    "id": "0437"
  },
  {
    "name": "bonsly",
    "id": "0438"
  },
  {
    "name": "mime-jr",
    "id": "0439"
  },
  {
    "name": "happiny",
    "id": "0440"
  },
  {
    "name": "chatot",
    "id": "0441"
  },
  {
    "name": "spiritomb",
    "id": "0442"
  },
  {
    "name": "gible",
    "id": "0443"
  },
  {
    "name": "gabite",
    "id": "0444"
  },
  {
    "name": "garchomp",
    "id": "0445"
  },
  {
    "name": "mega garchomp",
    "id": "0445",
    "formId": "0001"
  },
  {
    "name": "mega garchomp z",
    "id": "0445",
    "formId": "0001"
  },
  {
    "name": "munchlax",
    "id": "0446"
  },
  {
    "name": "riolu",
    "id": "0447"
  },
  {
    "name": "lucario",
    "id": "0448"
  },
  {
    "name": "mega lucario",
    "id": "0448",
    "formId": "0001"
  },
  {
    "name": "mega lucario z",
    "id": "0448",
    "formId": "0002"
  },
  {
    "name": "hippopotas",
    "id": "0449"
  },
  {
    "name": "hippowdon",
    "id": "0450"
  },
  {
    "name": "skorupi",
    "id": "0451"
  },
  {
    "name": "drapion",
    "id": "0452"
  },
  {
    "name": "croagunk",
    "id": "0453"
  },
  {
    "name": "toxicroak",
    "id": "0454"
  },
  {
    "name": "carnivine",
    "id": "0455"
  },
  {
    "name": "finneon",
    "id": "0456"
  },
  {
    "name": "lumineon",
    "id": "0457"
  },
  {
    "name": "mantyke",
    "id": "0458"
  },
  {
    "name": "snover",
    "id": "0459"
  },
  {
    "name": "abomasnow",
    "id": "0460"
  },
  {
    "name": "mega abomasnow",
    "id": "0460",
    "formId": "0001"
  },
  {
    "name": "weavile",
    "id": "0461"
  },
  {
    "name": "magnezone",
    "id": "0462"
  },
  {
    "name": "lickilicky",
    "id": "0463"
  },
  {
    "name": "rhyperior",
    "id": "0464"
  },
  {
    "name": "tangrowth",
    "id": "0465"
  },
  {
    "name": "electivire",
    "id": "0466"
  },
  {
    "name": "magmortar",
    "id": "0467"
  },
  {
    "name": "togekiss",
    "id": "0468"
  },
  {
    "name": "yanmega",
    "id": "0469"
  },
  {
    "name": "leafeon",
    "id": "0470"
  },
  {
    "name": "glaceon",
    "id": "0471"
  },
  {
    "name": "gliscor",
    "id": "0472"
  },
  {
    "name": "mamoswine",
    "id": "0473"
  },
  {
    "name": "porygon-z",
    "id": "0474"
  },
  {
    "name": "gallade",
    "id": "0475"
  },
  {
    "name": "mega gallade",
    "id": "0475",
    "formId": "0001"
  },
  {
    "name": "probopass",
    "id": "0476"
  },
  {
    "name": "dusknoir",
    "id": "0477"
  },
  {
    "name": "froslass",
    "id": "0478"
  },
  {
    "name": "mega froslass",
    "id": "0478",
    "formId": "0001"
  },
  {
    "name": "rotom",
    "id": "0479"
  },
  {
    "name": "rotom (heat)",
    "id": "0479",
    "formId": "0001"
  },
  {
    "name": "rotom (wash)",
    "id": "0479",
    "formId": "0002"
  },
  {
    "name": "rotom (frost)",
    "id": "0479",
    "formId": "0003"
  },
  {
    "name": "rotom (fan)",
    "id": "0479",
    "formId": "0004"
  },
  {
    "name": "rotom (mow)",
    "id": "0479",
    "formId": "0005"
  },
  {
    "name": "uxie",
    "id": "0480"
  },
  {
    "name": "mesprit",
    "id": "0481"
  },
  {
    "name": "azelf",
    "id": "0482"
  },
  {
    "name": "dialga",
    "id": "0483"
  },
  {
    "name": "dialga-origin",
    "id": "0483",
    "formId": "0001"
  },
  {
    "name": "palkia",
    "id": "0484"
  },
  {
    "name": "palkia-origin",
    "id": "0484",
    "formId": "0001"
  },
  {
    "name": "heatran",
    "id": "0485"
  },
  {
    "name": "mega heatran",
    "id": "0485",
    "formId": "0001"
  },
  {
    "name": "regigigas",
    "id": "0486"
  },
  {
    "name": "giratina-altered",
    "id": "0487"
  },
  {
    "name": "giratina-origin",
    "id": "0487",
    "formId": "0001"
  },
  {
    "name": "cresselia",
    "id": "0488"
  },
  {
    "name": "phione",
    "id": "0489"
  },
  {
    "name": "manaphy",
    "id": "0490"
  },
  {
    "name": "darkrai",
    "id": "0491"
  },
  {
    "name": "mega darkrai",
    "id": "0491",
    "formId": "0002"
  },
  {
    "name": "shaymin-land",
    "id": "0492"
  },
  {
    "name": "shaymin-sky",
    "id": "0492",
    "formId": "0001"
  },
  {
    "name": "arceus",
    "id": "0493"
  },
  {
    "name": "victini",
    "id": "0494"
  },
  {
    "name": "snivy",
    "id": "0495"
  },
  {
    "name": "servine",
    "id": "0496"
  },
  {
    "name": "serperior",
    "id": "0497"
  },
  {
    "name": "tepig",
    "id": "0498"
  },
  {
    "name": "pignite",
    "id": "0499"
  },
  {
    "name": "emboar",
    "id": "0500"
  },
  {
    "name": "mega emboar",
    "id": "0500",
    "formId": "0001"
  },
  {
    "name": "oshawott",
    "id": "0501"
  },
  {
    "name": "dewott",
    "id": "0502"
  },
  {
    "name": "samurott",
    "id": "0503"
  },
  {
    "name": "samurott (hisui)",
    "id": "0503",
    "formId": "0001"
  },
  {
    "name": "patrat",
    "id": "0504"
  },
  {
    "name": "watchog",
    "id": "0505"
  },
  {
    "name": "lillipup",
    "id": "0506"
  },
  {
    "name": "herdier",
    "id": "0507"
  },
  {
    "name": "stoutland",
    "id": "0508"
  },
  {
    "name": "purrloin",
    "id": "0509"
  },
  {
    "name": "liepard",
    "id": "0510"
  },
  {
    "name": "pansage",
    "id": "0511"
  },
  {
    "name": "simisage",
    "id": "0512"
  },
  {
    "name": "pansear",
    "id": "0513"
  },
  {
    "name": "simisear",
    "id": "0514"
  },
  {
    "name": "panpour",
    "id": "0515"
  },
  {
    "name": "simipour",
    "id": "0516"
  },
  {
    "name": "munna",
    "id": "0517"
  },
  {
    "name": "musharna",
    "id": "0518"
  },
  {
    "name": "pidove",
    "id": "0519"
  },
  {
    "name": "tranquill",
    "id": "0520"
  },
  {
    "name": "unfezant",
    "id": "0521"
  },
  {
    "name": "blitzle",
    "id": "0522"
  },
  {
    "name": "zebstrika",
    "id": "0523"
  },
  {
    "name": "roggenrola",
    "id": "0524"
  },
  {
    "name": "boldore",
    "id": "0525"
  },
  {
    "name": "gigalith",
    "id": "0526"
  },
  {
    "name": "woobat",
    "id": "0527"
  },
  {
    "name": "swoobat",
    "id": "0528"
  },
  {
    "name": "drilbur",
    "id": "0529"
  },
  {
    "name": "excadrill",
    "id": "0530"
  },
  {
    "name": "mega excadrill",
    "id": "0530",
    "formId": "0001"
  },
  {
    "name": "audino",
    "id": "0531"
  },
  {
    "name": "mega audino",
    "id": "0531",
    "formId": "0001"
  },
  {
    "name": "timburr",
    "id": "0532"
  },
  {
    "name": "gurdurr",
    "id": "0533"
  },
  {
    "name": "conkeldurr",
    "id": "0534"
  },
  {
    "name": "tympole",
    "id": "0535"
  },
  {
    "name": "palpitoad",
    "id": "0536"
  },
  {
    "name": "seismitoad",
    "id": "0537"
  },
  {
    "name": "throh",
    "id": "0538"
  },
  {
    "name": "sawk",
    "id": "0539"
  },
  {
    "name": "sewaddle",
    "id": "0540"
  },
  {
    "name": "swadloon",
    "id": "0541"
  },
  {
    "name": "leavanny",
    "id": "0542"
  },
  {
    "name": "venipede",
    "id": "0543"
  },
  {
    "name": "whirlipede",
    "id": "0544"
  },
  {
    "name": "scolipede",
    "id": "0545"
  },
  {
    "name": "mega scolipede",
    "id": "0545",
    "formId": "0001"
  },
  {
    "name": "cottonee",
    "id": "0546"
  },
  {
    "name": "whimsicott",
    "id": "0547"
  },
  {
    "name": "petilil",
    "id": "0548"
  },
  {
    "name": "lilligant",
    "id": "0549"
  },
  {
    "name": "lilligant (hisui)",
    "id": "0549",
    "formId": "0001"
  },
  {
    "name": "basculin-red-striped",
    "id": "0550"
  },
  {
    "name": "sandile",
    "id": "0551"
  },
  {
    "name": "krokorok",
    "id": "0552"
  },
  {
    "name": "krookodile",
    "id": "0553"
  },
  {
    "name": "darumaka",
    "id": "0554"
  },
  {
    "name": "darumaka (galar)",
    "id": "0554",
    "formId": "0001"
  },
  {
    "name": "darmanitan-standard",
    "id": "0555"
  },
  {
    "name": "darmanitan-zen",
    "id": "0555",
    "formId": "0001"
  },
  {
    "name": "darmanitan-standard (galar)",
    "id": "0555",
    "formId": "0002"
  },
  {
    "name": "darmanitan-zen (galae)",
    "id": "0555",
    "formId": "0003"
  },
  {
    "name": "maractus",
    "id": "0556"
  },
  {
    "name": "dwebble",
    "id": "0557"
  },
  {
    "name": "crustle",
    "id": "0558"
  },
  {
    "name": "scraggy",
    "id": "0559"
  },
  {
    "name": "scrafty",
    "id": "0560"
  },
  {
    "name": "mega scrafty",
    "id": "0560",
    "formId": "0001"
  },
  {
    "name": "sigilyph",
    "id": "0561"
  },
  {
    "name": "yamask",
    "id": "0562"
  },
  {
    "name": "yamask (galar)",
    "id": "0562",
    "formId": "0001"
  },
  {
    "name": "cofagrigus",
    "id": "0563"
  },
  {
    "name": "tirtouga",
    "id": "0564"
  },
  {
    "name": "carracosta",
    "id": "0565"
  },
  {
    "name": "archen",
    "id": "0566"
  },
  {
    "name": "archeops",
    "id": "0567"
  },
  {
    "name": "trubbish",
    "id": "0568"
  },
  {
    "name": "garbodor",
    "id": "0569"
  },
  {
    "name": "zorua",
    "id": "0570"
  },
  {
    "name": "zorua (hisui)",
    "id": "0570",
    "formId": "0001"
  },
  {
    "name": "zoroark",
    "id": "0571"
  },
  {
    "name": "zoroark (hisui)",
    "id": "0571",
    "formId": "0001"
  },
  {
    "name": "minccino",
    "id": "0572"
  },
  {
    "name": "cinccino",
    "id": "0573"
  },
  {
    "name": "gothita",
    "id": "0574"
  },
  {
    "name": "gothorita",
    "id": "0575"
  },
  {
    "name": "gothitelle",
    "id": "0576"
  },
  {
    "name": "solosis",
    "id": "0577"
  },
  {
    "name": "duosion",
    "id": "0578"
  },
  {
    "name": "reuniclus",
    "id": "0579"
  },
  {
    "name": "ducklett",
    "id": "0580"
  },
  {
    "name": "swanna",
    "id": "0581"
  },
  {
    "name": "vanillite",
    "id": "0582"
  },
  {
    "name": "vanillish",
    "id": "0583"
  },
  {
    "name": "vanilluxe",
    "id": "0584"
  },
  {
    "name": "deerling",
    "id": "0585"
  },
  {
    "name": "sawsbuck",
    "id": "0586"
  },
  {
    "name": "emolga",
    "id": "0587"
  },
  {
    "name": "karrablast",
    "id": "0588"
  },
  {
    "name": "escavalier",
    "id": "0589"
  },
  {
    "name": "foongus",
    "id": "0590"
  },
  {
    "name": "amoonguss",
    "id": "0591"
  },
  {
    "name": "frillish",
    "id": "0592"
  },
  {
    "name": "jellicent",
    "id": "0593"
  },
  {
    "name": "alomomola",
    "id": "0594"
  },
  {
    "name": "joltik",
    "id": "0595"
  },
  {
    "name": "galvantula",
    "id": "0596"
  },
  {
    "name": "ferroseed",
    "id": "0597"
  },
  {
    "name": "ferrothorn",
    "id": "0598"
  },
  {
    "name": "klink",
    "id": "0599"
  },
  {
    "name": "klang",
    "id": "0600"
  },
  {
    "name": "klinklang",
    "id": "0601"
  },
  {
    "name": "tynamo",
    "id": "0602"
  },
  {
    "name": "eelektrik",
    "id": "0603"
  },
  {
    "name": "eelektross",
    "id": "0604"
  },
  {
    "name": "mega eelektross",
    "id": "0604",
    "formId": "0001"
  },
  {
    "name": "elgyem",
    "id": "0605"
  },
  {
    "name": "beheeyem",
    "id": "0606"
  },
  {
    "name": "litwick",
    "id": "0607"
  },
  {
    "name": "lampent",
    "id": "0608"
  },
  {
    "name": "chandelure",
    "id": "0609"
  },
  {
    "name": "mega chandelure",
    "id": "0609",
    "formId": "0001"
  },
  {
    "name": "axew",
    "id": "0610"
  },
  {
    "name": "fraxure",
    "id": "0611"
  },
  {
    "name": "haxorus",
    "id": "0612"
  },
  {
    "name": "cubchoo",
    "id": "0613"
  },
  {
    "name": "beartic",
    "id": "0614"
  },
  {
    "name": "cryogonal",
    "id": "0615"
  },
  {
    "name": "shelmet",
    "id": "0616"
  },
  {
    "name": "accelgor",
    "id": "0617"
  },
  {
    "name": "stunfisk",
    "id": "0618"
  },
  {
    "name": "stunfisk (galar)",
    "id": "0618",
    "formId": "0001"
  },
  {
    "name": "mienfoo",
    "id": "0619"
  },
  {
    "name": "mienshao",
    "id": "0620"
  },
  {
    "name": "druddigon",
    "id": "0621"
  },
  {
    "name": "golett",
    "id": "0622"
  },
  {
    "name": "golurk",
    "id": "0623"
  },
  {
    "name": "mega golurk",
    "id": "0623",
    "formId": "0001"
  },
  {
    "name": "pawniard",
    "id": "0624"
  },
  {
    "name": "bisharp",
    "id": "0625"
  },
  {
    "name": "bouffalant",
    "id": "0626"
  },
  {
    "name": "rufflet",
    "id": "0627"
  },
  {
    "name": "braviary",
    "id": "0628"
  },
  {
    "name": "braviary (hisui)",
    "id": "0628",
    "formId": "0001"
  },
  {
    "name": "vullaby",
    "id": "0629"
  },
  {
    "name": "mandibuzz",
    "id": "0630"
  },
  {
    "name": "heatmor",
    "id": "0631"
  },
  {
    "name": "durant",
    "id": "0632"
  },
  {
    "name": "deino",
    "id": "0633"
  },
  {
    "name": "zweilous",
    "id": "0634"
  },
  {
    "name": "hydreigon",
    "id": "0635"
  },
  {
    "name": "larvesta",
    "id": "0636"
  },
  {
    "name": "volcarona",
    "id": "0637"
  },
  {
    "name": "cobalion",
    "id": "0638"
  },
  {
    "name": "terrakion",
    "id": "0639"
  },
  {
    "name": "virizion",
    "id": "0640"
  },
  {
    "name": "tornadus-incarnate",
    "id": "0641"
  },
  {
    "name": "tornadus-therian",
    "id": "0641",
    "formId": "0001"
  },
  {
    "name": "thundurus-incarnate",
    "id": "0642"
  },
  {
    "name": "thundurus-therian",
    "id": "0642",
    "formId": "0001"
  },
  {
    "name": "reshiram",
    "id": "0643"
  },
  {
    "name": "zekrom",
    "id": "0644"
  },
  {
    "name": "landorus-incarnate",
    "id": "0645"
  },
  {
    "name": "landorus-therian",
    "id": "0645",
    "formId": "0001"
  },
  {
    "name": "kyurem",
    "id": "0646"
  },
  {
    "name": "kyurem-black",
    "id": "0646",
    "formId": "0001"
  },
  {
    "name": "kyurem-white",
    "id": "0646",
    "formId": "0002"
  },
  {
    "name": "keldeo-ordinary",
    "id": "0647"
  },
  {
    "name": "keldeo-resolute",
    "id": "0647",
    "formId": "0001"
  },
  {
    "name": "meloetta-aria",
    "id": "0648"
  },
  {
    "name": "meloetta-pirouette",
    "id": "0648",
    "formId": "0001"
  },
  {
    "name": "genesect",
    "id": "0649"
  },
  {
    "name": "chespin",
    "id": "0650"
  },
  {
    "name": "quilladin",
    "id": "0651"
  },
  {
    "name": "chesnaught",
    "id": "0652"
  },
  {
    "name": "mega chesnaught",
    "id": "0652",
    "formId": "0001"
  },
  {
    "name": "fennekin",
    "id": "0653"
  },
  {
    "name": "braixen",
    "id": "0654"
  },
  {
    "name": "delphox",
    "id": "0655"
  },
  {
    "name": "mega delphox",
    "id": "0655",
    "formId": "0001"
  },
  {
    "name": "froakie",
    "id": "0656"
  },
  {
    "name": "frogadier",
    "id": "0657"
  },
  {
    "name": "greninja",
    "id": "0658"
  },
  {
    "name": "greninja-ash",
    "id": "0658",
    "formId": "0001"
  },
  {
    "name": "mega greninja",
    "id": "0658",
    "formId": "0002"
  },
  {
    "name": "bunnelby",
    "id": "0659"
  },
  {
    "name": "diggersby",
    "id": "0660"
  },
  {
    "name": "fletchling",
    "id": "0661"
  },
  {
    "name": "fletchinder",
    "id": "0662"
  },
  {
    "name": "talonflame",
    "id": "0663"
  },
  {
    "name": "scatterbug",
    "id": "0664"
  },
  {
    "name": "spewpa",
    "id": "0665"
  },
  {
    "name": "vivillon",
    "id": "0666"
  },
  {
    "name": "litleo",
    "id": "0667"
  },
  {
    "name": "pyroar",
    "id": "0668"
  },
  {
    "name": "mega pyroar",
    "id": "0668",
  },
  {
    "name": "flabebe",
    "id": "0669"
  },
  {
    "name": "floette",
    "id": "0670"
  },
  {
    "name": "floette-eternal",
    "id": "0670",
    "formId": "0005"
  },
  {
    "name": "mega floette",
    "id": "0670",
    "formId": "0006"
  },
  {
    "name": "florges",
    "id": "0671"
  },
  {
    "name": "skiddo",
    "id": "0672"
  },
  {
    "name": "gogoat",
    "id": "0673"
  },
  {
    "name": "pancham",
    "id": "0674"
  },
  {
    "name": "pangoro",
    "id": "0675"
  },
  {
    "name": "furfrou",
    "id": "0676"
  },
  {
    "name": "espurr",
    "id": "0677"
  },
  {
    "name": "meowstic-male",
    "id": "0678"
  },
  {
    "name": "meowstic-female",
    "id": "0678",
    "formId": "0002"
  },
  {
    "name": "mega meowstic",
    "id": "0678",
    "formId": "0001"
  },
  {
    "name": "honedge",
    "id": "0679"
  },
  {
    "name": "doublade",
    "id": "0680"
  },
  {
    "name": "aegislash-shield",
    "id": "0681"
  },
  {
    "name": "aegislash-blade",
    "id": "0681",
    "formId": "0001"
  },
  {
    "name": "spritzee",
    "id": "0682"
  },
  {
    "name": "aromatisse",
    "id": "0683"
  },
  {
    "name": "swirlix",
    "id": "0684"
  },
  {
    "name": "slurpuff",
    "id": "0685"
  },
  {
    "name": "inkay",
    "id": "0686"
  },
  {
    "name": "malamar",
    "id": "0687"
  },
  {
    "name": "mega malamar",
    "id": "0687",
    "formId": "0001"
  },
  {
    "name": "binacle",
    "id": "0688"
  },
  {
    "name": "barbaracle",
    "id": "0689"
  },
  {
    "name": "mega barbaracle",
    "id": "0689",
    "formId": "0001"
  },
  {
    "name": "skrelp",
    "id": "0690"
  },
  {
    "name": "dragalge",
    "id": "0691"
  },
  {
    "name": "mega dragalge",
    "id": "0691",
    "formId": "0001"
  },
  {
    "name": "clauncher",
    "id": "0692"
  },
  {
    "name": "clawitzer",
    "id": "0693"
  },
  {
    "name": "helioptile",
    "id": "0694"
  },
  {
    "name": "heliolisk",
    "id": "0695"
  },
  {
    "name": "tyrunt",
    "id": "0696"
  },
  {
    "name": "tyrantrum",
    "id": "0697"
  },
  {
    "name": "amaura",
    "id": "0698"
  },
  {
    "name": "aurorus",
    "id": "0699"
  },
  {
    "name": "sylveon",
    "id": "0700"
  },
  {
    "name": "hawlucha",
    "id": "0701"
  },
  {
    "name": "mega hawlucha",
    "id": "0701",
    "formId": "0001"
  },
  {
    "name": "dedenne",
    "id": "0702"
  },
  {
    "name": "carbink",
    "id": "0703"
  },
  {
    "name": "goomy",
    "id": "0704"
  },
  {
    "name": "sliggoo",
    "id": "0705"
  },
  {
    "name": "sliggoo (hisui)",
    "id": "0705",
    "formId": "0001"
  },
  {
    "name": "goodra",
    "id": "0706"
  },
  {
    "name": "goodra (hisui)",
    "id": "0706",
    "formId": "0001"
  },
  {
    "name": "klefki",
    "id": "0707"
  },
  {
    "name": "phantump",
    "id": "0708"
  },
  {
    "name": "trevenant",
    "id": "0709"
  },
  {
    "name": "pumpkaboo-average",
    "id": "0710"
  },
  {
    "name": "gourgeist-average",
    "id": "0711"
  },
  {
    "name": "bergmite",
    "id": "0712"
  },
  {
    "name": "avalugg",
    "id": "0713"
  },
  {
    "name": "avalugg (hisui)",
    "id": "0713",
    "formId": "0001"
  },
  {
    "name": "noibat",
    "id": "0714"
  },
  {
    "name": "noivern",
    "id": "0715"
  },
  {
    "name": "xerneas",
    "id": "0716"
  },
  {
    "name": "yveltal",
    "id": "0717"
  },
  {
    "name": "zygarde-50",
    "id": "0718"
  },
  {
    "name": "zygarde-10",
    "id": "0718",
    "formId": "0001"
  },
  {
    "name": "zygarde-complete",
    "id": "0718",
    "formId": "0002"
  },
  {
    "name": "zygarde-core",
    "id": "0718",
    "formId": "0003"
  },
  {
    "name": "mega zygarde",
    "id": "0718",
    "formId": "0005"
  },
  {
    "name": "diancie",
    "id": "0719"
  },
  {
    "name": "mega diancie",
    "id": "0719",
    "formId": "0001"
  },
  {
    "name": "hoopa",
    "id": "0720"
  },
  {
    "name": "hoopa-unbound",
    "id": "0720",
    "formId": "0001"
  },
  {
    "name": "volcanion",
    "id": "0721"
  },
  {
    "name": "rowlet",
    "id": "0722"
  },
  {
    "name": "dartrix",
    "id": "0723"
  },
  {
    "name": "decidueye",
    "id": "0724"
  },
  {
    "name": "decidueye (hisui)",
    "id": "0724",
    "formId": "0001"
  },
  {
    "name": "litten",
    "id": "0725"
  },
  {
    "name": "torracat",
    "id": "0726"
  },
  {
    "name": "incineroar",
    "id": "0727"
  },
  {
    "name": "popplio",
    "id": "0728"
  },
  {
    "name": "brionne",
    "id": "0729"
  },
  {
    "name": "primarina",
    "id": "0730"
  },
  {
    "name": "pikipek",
    "id": "0731"
  },
  {
    "name": "trumbeak",
    "id": "0732"
  },
  {
    "name": "toucannon",
    "id": "0733"
  },
  {
    "name": "yungoos",
    "id": "0734"
  },
  {
    "name": "gumshoos",
    "id": "0735"
  },
  {
    "name": "grubbin",
    "id": "0736"
  },
  {
    "name": "charjabug",
    "id": "0737"
  },
  {
    "name": "vikavolt",
    "id": "0738"
  },
  {
    "name": "crabrawler",
    "id": "0739"
  },
  {
    "name": "crabominable",
    "id": "0740"
  },
  {
    "name": "mega crabominable",
    "id": "0740",
    "formId": "0001"
  },
  {
    "name": "oricorio (baile)",
    "id": "0741"
  },
  {
    "name": "oricorio (pom-pom)",
    "id": "0741",
    "formId": "0001"
  },
  {
    "name": "oricorio (pa u)",
    "id": "0741",
    "formId": "0002"
  },
  {
    "name": "oricorio (sensu)",
    "id": "0741",
    "formId": "0003"
  },
  {
    "name": "cutiefly",
    "id": "0742"
  },
  {
    "name": "ribombee",
    "id": "0743"
  },
  {
    "name": "rockruff",
    "id": "0744"
  },
  {
    "name": "lycanroc-midday",
    "id": "0745"
  },
  {
    "name": "wishiwashi-solo",
    "id": "0746"
  },
  {
    "name": "mareanie",
    "id": "0747"
  },
  {
    "name": "toxapex",
    "id": "0748"
  },
  {
    "name": "mudbray",
    "id": "0749"
  },
  {
    "name": "mudsdale",
    "id": "0750"
  },
  {
    "name": "dewpider",
    "id": "0751"
  },
  {
    "name": "araquanid",
    "id": "0752"
  },
  {
    "name": "fomantis",
    "id": "0753"
  },
  {
    "name": "lurantis",
    "id": "0754"
  },
  {
    "name": "morelull",
    "id": "0755"
  },
  {
    "name": "shiinotic",
    "id": "0756"
  },
  {
    "name": "salandit",
    "id": "0757"
  },
  {
    "name": "salazzle",
    "id": "0758"
  },
  {
    "name": "stufful",
    "id": "0759"
  },
  {
    "name": "bewear",
    "id": "0760"
  },
  {
    "name": "bounsweet",
    "id": "0761"
  },
  {
    "name": "steenee",
    "id": "0762"
  },
  {
    "name": "tsareena",
    "id": "0763"
  },
  {
    "name": "comfey",
    "id": "0764"
  },
  {
    "name": "oranguru",
    "id": "0765"
  },
  {
    "name": "passimian",
    "id": "0766"
  },
  {
    "name": "wimpod",
    "id": "0767"
  },
  {
    "name": "golisopod",
    "id": "0768"
  },
  {
    "name": "mega golisopod",
    "id": "0768",
    "formId": "0001"
  },
  {
    "name": "sandygast",
    "id": "0769"
  },
  {
    "name": "palossand",
    "id": "0770"
  },
  {
    "name": "pyukumuku",
    "id": "0771"
  },
  {
    "name": "type-null",
    "id": "0772"
  },
  {
    "name": "silvally",
    "id": "0773"
  },
  {
    "name": "minior-red-meteor",
    "id": "0774"
  },
  {
    "name": "komala",
    "id": "0775"
  },
  {
    "name": "turtonator",
    "id": "0776"
  },
  {
    "name": "togedemaru",
    "id": "0777"
  },
  {
    "name": "mimikyu-disguised",
    "id": "0778"
  },
  {
    "name": "bruxish",
    "id": "0779"
  },
  {
    "name": "drampa",
    "id": "0780"
  },
  {
    "name": "mega drampa",
    "id": "0780",
    "formId": "0001"
  },
  {
    "name": "dhelmise",
    "id": "0781"
  },
  {
    "name": "jangmo-o",
    "id": "0782"
  },
  {
    "name": "hakamo-o",
    "id": "0783"
  },
  {
    "name": "kommo-o",
    "id": "0784"
  },
  {
    "name": "tapu-koko",
    "id": "0785"
  },
  {
    "name": "tapu-lele",
    "id": "0786"
  },
  {
    "name": "tapu-bulu",
    "id": "0787"
  },
  {
    "name": "tapu-fini",
    "id": "0788"
  },
  {
    "name": "cosmog",
    "id": "0789"
  },
  {
    "name": "cosmoem",
    "id": "0790"
  },
  {
    "name": "solgaleo",
    "id": "0791"
  },
  {
    "name": "lunala",
    "id": "0792"
  },
  {
    "name": "nihilego",
    "id": "0793"
  },
  {
    "name": "buzzwole",
    "id": "0794"
  },
  {
    "name": "pheromosa",
    "id": "0795"
  },
  {
    "name": "xurkitree",
    "id": "0796"
  },
  {
    "name": "celesteela",
    "id": "0797"
  },
  {
    "name": "kartana",
    "id": "0798"
  },
  {
    "name": "guzzlord",
    "id": "0799"
  },
  {
    "name": "necrozma",
    "id": "0800"
  },
  {
    "name": "necrozma (dusk mane)",
    "id": "0800",
    "formId": "0001"
  },
  {
    "name": "necrozma (dawn wings)",
    "id": "0800",
    "formId": "0002"
  },
  {
    "name": "necrozma-ultra",
    "id": "0800",
    "formId": "0003"
  },
  {
    "name": "magearna",
    "id": "0801"
  },
  {
    "name": "magearna-original",
    "id": "0801",
    "formId": "0001"
  },
  {
    "name": "mega magearna",
    "id": "0801",
    "formId": "0002"
  },
  {
    "name": "marshadow",
    "id": "0802"
  },
  {
    "name": "poipole",
    "id": "0803"
  },
  {
    "name": "naganadel",
    "id": "0804"
  },
  {
    "name": "stakataka",
    "id": "0805"
  },
  {
    "name": "blacephalon",
    "id": "0806"
  },
  {
    "name": "zeraora",
    "id": "0807"
  },
  {
    "name": "mega zeraora",
    "id": "0807",
    "formId": "0001"
  },
  {
    "name": "meltan",
    "id": "0808"
  },
  {
    "name": "melmetal",
    "id": "0809"
  },
  {
    "name": "grookey",
    "id": "0810"
  },
  {
    "name": "thwackey",
    "id": "0811"
  },
  {
    "name": "rillaboom",
    "id": "0812"
  },
  {
    "name": "scorbunny",
    "id": "0813"
  },
  {
    "name": "raboot",
    "id": "0814"
  },
  {
    "name": "cinderace",
    "id": "0815"
  },
  {
    "name": "sobble",
    "id": "0816"
  },
  {
    "name": "drizzile",
    "id": "0817"
  },
  {
    "name": "inteleon",
    "id": "0818"
  },
  {
    "name": "skwovet",
    "id": "0819"
  },
  {
    "name": "greedent",
    "id": "0820"
  },
  {
    "name": "rookidee",
    "id": "0821"
  },
  {
    "name": "corvisquire",
    "id": "0822"
  },
  {
    "name": "corviknight",
    "id": "0823"
  },
  {
    "name": "blipbug",
    "id": "0824"
  },
  {
    "name": "dottler",
    "id": "0825"
  },
  {
    "name": "orbeetle",
    "id": "0826"
  },
  {
    "name": "nickit",
    "id": "0827"
  },
  {
    "name": "thievul",
    "id": "0828"
  },
  {
    "name": "gossifleur",
    "id": "0829"
  },
  {
    "name": "eldegoss",
    "id": "0830"
  },
  {
    "name": "wooloo",
    "id": "0831"
  },
  {
    "name": "dubwool",
    "id": "0832"
  },
  {
    "name": "chewtle",
    "id": "0833"
  },
  {
    "name": "drednaw",
    "id": "0834"
  },
  {
    "name": "yamper",
    "id": "0835"
  },
  {
    "name": "boltund",
    "id": "0836"
  },
  {
    "name": "rolycoly",
    "id": "0837"
  },
  {
    "name": "carkol",
    "id": "0838"
  },
  {
    "name": "coalossal",
    "id": "0839"
  },
  {
    "name": "applin",
    "id": "0840"
  },
  {
    "name": "flapple",
    "id": "0841"
  },
  {
    "name": "appletun",
    "id": "0842"
  },
  {
    "name": "silicobra",
    "id": "0843"
  },
  {
    "name": "sandaconda",
    "id": "0844"
  },
  {
    "name": "cramorant",
    "id": "0845"
  },
  {
    "name": "arrokuda",
    "id": "0846"
  },
  {
    "name": "barraskewda",
    "id": "0847"
  },
  {
    "name": "toxel",
    "id": "0848"
  },
  {
    "name": "toxtricity-amped",
    "id": "0849"
  },
  {
    "name": "sizzlipede",
    "id": "0850"
  },
  {
    "name": "centiskorch",
    "id": "0851"
  },
  {
    "name": "clobbopus",
    "id": "0852"
  },
  {
    "name": "grapploct",
    "id": "0853"
  },
  {
    "name": "sinistea",
    "id": "0854"
  },
  {
    "name": "polteageist",
    "id": "0855"
  },
  {
    "name": "hatenna",
    "id": "0856"
  },
  {
    "name": "hattrem",
    "id": "0857"
  },
  {
    "name": "hatterene",
    "id": "0858"
  },
  {
    "name": "impidimp",
    "id": "0859"
  },
  {
    "name": "morgrem",
    "id": "0860"
  },
  {
    "name": "grimmsnarl",
    "id": "0861"
  },
  {
    "name": "obstagoon",
    "id": "0862"
  },
  {
    "name": "perrserker",
    "id": "0863"
  },
  {
    "name": "cursola",
    "id": "0864"
  },
  {
    "name": "sirfetchd",
    "id": "0865"
  },
  {
    "name": "mr-rime",
    "id": "0866"
  },
  {
    "name": "runerigus",
    "id": "0867"
  },
  {
    "name": "milcery",
    "id": "0868"
  },
  {
    "name": "alcremie",
    "id": "0869"
  },
  {
    "name": "falinks",
    "id": "0870"
  },
  {
    "name": "mega falinks",
    "id": "0870",
    "formId": "0001"
  },
  {
    "name": "pincurchin",
    "id": "0871"
  },
  {
    "name": "snom",
    "id": "0872"
  },
  {
    "name": "frosmoth",
    "id": "0873"
  },
  {
    "name": "stonjourner",
    "id": "0874"
  },
  {
    "name": "eiscue-ice",
    "id": "0875"
  },
  {
    "name": "indeedee-male",
    "id": "0876"
  },
  {
    "name": "morpeko-full-belly",
    "id": "0877"
  },
  {
    "name": "cufant",
    "id": "0878"
  },
  {
    "name": "copperajah",
    "id": "0879"
  },
  {
    "name": "dracozolt",
    "id": "0880"
  },
  {
    "name": "arctozolt",
    "id": "0881"
  },
  {
    "name": "dracovish",
    "id": "0882"
  },
  {
    "name": "arctovish",
    "id": "0883"
  },
  {
    "name": "duraludon",
    "id": "0884"
  },
  {
    "name": "dreepy",
    "id": "0885"
  },
  {
    "name": "drakloak",
    "id": "0886"
  },
  {
    "name": "dragapult",
    "id": "0887"
  },
  {
    "name": "zacian",
    "id": "0888"
  },
  {
    "name": "zacian (crowned sword)",
    "id": "0888",
    "formId": "0001"
  },
  {
    "name": "zamazenta",
    "id": "0889"
  },
  {
    "name": "zamazenta (crowned shield)",
    "id": "0889",
    "formId": "0001"
  },
  {
    "name": "eternatus",
    "id": "0890"
  },
  {
    "name": "zacian (eternamax)",
    "id": "0890",
    "formId": "0001"
  },
  {
    "name": "kubfu",
    "id": "0891"
  },
  {
    "name": "urshifu-single-strike",
    "id": "0892"
  },
  {
    "name": "urshifu-rapid-strike",
    "id": "0892",
    "formId": "0001"
  },
  {
    "name": "zarude",
    "id": "0893"
  },
  {
    "name": "regieleki",
    "id": "0894"
  },
  {
    "name": "regidrago",
    "id": "0895"
  },
  {
    "name": "glastrier",
    "id": "0896"
  },
  {
    "name": "spectrier",
    "id": "0897"
  },
  {
    "name": "calyrex",
    "id": "0898"
  },
  {
    "name": "wyrdeer",
    "id": "0899"
  },
  {
    "name": "kleavor",
    "id": "0900"
  },
  {
    "name": "ursaluna",
    "id": "0901"
  },
  {
    "name": "basculegion-male",
    "id": "0902"
  },
  {
    "name": "sneasler",
    "id": "0903"
  },
  {
    "name": "overqwil",
    "id": "0904"
  },
  {
    "name": "enamorus-incarnate",
    "id": "0905"
  },
  {
    "name": "sprigatito",
    "id": "0906"
  },
  {
    "name": "floragato",
    "id": "0907"
  },
  {
    "name": "meowscarada",
    "id": "0908"
  },
  {
    "name": "fuecoco",
    "id": "0909"
  },
  {
    "name": "crocalor",
    "id": "0910"
  },
  {
    "name": "skeledirge",
    "id": "0911"
  },
  {
    "name": "quaxly",
    "id": "0912"
  },
  {
    "name": "quaxwell",
    "id": "0913"
  },
  {
    "name": "quaquaval",
    "id": "0914"
  },
  {
    "name": "lechonk",
    "id": "0915"
  },
  {
    "name": "oinkologne-male",
    "id": "0916"
  },
  {
    "name": "tarountula",
    "id": "0917"
  },
  {
    "name": "spidops",
    "id": "0918"
  },
  {
    "name": "nymble",
    "id": "0919"
  },
  {
    "name": "lokix",
    "id": "0920"
  },
  {
    "name": "pawmi",
    "id": "0921"
  },
  {
    "name": "pawmo",
    "id": "0922"
  },
  {
    "name": "pawmot",
    "id": "0923"
  },
  {
    "name": "tandemaus",
    "id": "0924"
  },
  {
    "name": "maushold-family-of-four",
    "id": "0925"
  },
  {
    "name": "fidough",
    "id": "0926"
  },
  {
    "name": "dachsbun",
    "id": "0927"
  },
  {
    "name": "smoliv",
    "id": "0928"
  },
  {
    "name": "dolliv",
    "id": "0929"
  },
  {
    "name": "arboliva",
    "id": "0930"
  },
  {
    "name": "squawkabilly-green-plumage",
    "id": "0931"
  },
  {
    "name": "nacli",
    "id": "0932"
  },
  {
    "name": "naclstack",
    "id": "0933"
  },
  {
    "name": "garganacl",
    "id": "0934"
  },
  {
    "name": "charcadet",
    "id": "0935"
  },
  {
    "name": "armarouge",
    "id": "0936"
  },
  {
    "name": "ceruledge",
    "id": "0937"
  },
  {
    "name": "tadbulb",
    "id": "0938"
  },
  {
    "name": "bellibolt",
    "id": "0939"
  },
  {
    "name": "wattrel",
    "id": "0940"
  },
  {
    "name": "kilowattrel",
    "id": "0941"
  },
  {
    "name": "maschiff",
    "id": "0942"
  },
  {
    "name": "mabosstiff",
    "id": "0943"
  },
  {
    "name": "shroodle",
    "id": "0944"
  },
  {
    "name": "grafaiai",
    "id": "0945"
  },
  {
    "name": "bramblin",
    "id": "0946"
  },
  {
    "name": "brambleghast",
    "id": "0947"
  },
  {
    "name": "toedscool",
    "id": "0948"
  },
  {
    "name": "toedscruel",
    "id": "0949"
  },
  {
    "name": "klawf",
    "id": "0950"
  },
  {
    "name": "capsakid",
    "id": "0951"
  },
  {
    "name": "scovillain",
    "id": "0952"
  },
  {
    "name": "mega scovillain",
    "id": "0952",
  },
  {
    "name": "rellor",
    "id": "0953"
  },
  {
    "name": "rabsca",
    "id": "0954"
  },
  {
    "name": "flittle",
    "id": "0955"
  },
  {
    "name": "espathra",
    "id": "0956"
  },
  {
    "name": "tinkatink",
    "id": "0957"
  },
  {
    "name": "tinkatuff",
    "id": "0958"
  },
  {
    "name": "tinkaton",
    "id": "0959"
  },
  {
    "name": "wiglett",
    "id": "0960"
  },
  {
    "name": "wugtrio",
    "id": "0961"
  },
  {
    "name": "bombirdier",
    "id": "0962"
  },
  {
    "name": "finizen",
    "id": "0963"
  },
  {
    "name": "palafin-zero",
    "id": "0964"
  },
  {
    "name": "varoom",
    "id": "0965"
  },
  {
    "name": "revavroom",
    "id": "0966"
  },
  {
    "name": "cyclizar",
    "id": "0967"
  },
  {
    "name": "orthworm",
    "id": "0968"
  },
  {
    "name": "glimmet",
    "id": "0969"
  },
  {
    "name": "glimmora",
    "id": "0970"
  },
  {
    "name": "mega glimmora",
    "id": "0970",
    "formId": "0001"
  },
  {
    "name": "greavard",
    "id": "0971"
  },
  {
    "name": "houndstone",
    "id": "0972"
  },
  {
    "name": "flamigo",
    "id": "0973"
  },
  {
    "name": "cetoddle",
    "id": "0974"
  },
  {
    "name": "cetitan",
    "id": "0975"
  },
  {
    "name": "veluza",
    "id": "0976"
  },
  {
    "name": "dondozo",
    "id": "0977"
  },
  {
    "name": "tatsugiri-curly",
    "id": "0978"
  },
  {
    "name": "mega tatsugiri",
    "id": "0978",
  },
  {
    "name": "annihilape",
    "id": "0979"
  },
  {
    "name": "clodsire",
    "id": "0980"
  },
  {
    "name": "farigiraf",
    "id": "0981"
  },
  {
    "name": "dudunsparce-two-segment",
    "id": "0982"
  },
  {
    "name": "kingambit",
    "id": "0983"
  },
  {
    "name": "great-tusk (colmilargo)",
    "id": "0984"
  },
  {
    "name": "scream-tail (colagrito)",
    "id": "0985"
  },
  {
    "name": "brute-bonnet (furioseta)",
    "id": "0986"
  },
  {
    "name": "flutter-mane (melenaleteo)",
    "id": "0987"
  },
  {
    "name": "slither-wing (reptalada)",
    "id": "0988"
  },
  {
    "name": "sandy-shocks (pelarena)",
    "id": "0989"
  },
  {
    "name": "iron-treads (ferrodada)",
    "id": "0990"
  },
  {
    "name": "iron-bundle (ferrosaco)",
    "id": "0991"
  },
  {
    "name": "iron-hands (ferropalmas)",
    "id": "0992"
  },
  {
    "name": "iron-jugulis (ferrocuello)",
    "id": "0993"
  },
  {
    "name": "iron-moth (ferropolilla)",
    "id": "0994"
  },
  {
    "name": "iron-thorns (ferropuas)",
    "id": "0995"
  },
  {
    "name": "frigibax",
    "id": "0996"
  },
  {
    "name": "arctibax",
    "id": "0997"
  },
  {
    "name": "baxcalibur",
    "id": "0998"
  },
  {
    "name": "mega baxcalibur",
    "id": "0998",
    "formId": "0001"
  },
  {
    "name": "gimmighoul",
    "id": "0999"
  },
  {
    "name": "gholdengo",
    "id": "1000"
  },
  {
    "name": "wo-chien",
    "id": "1001"
  },
  {
    "name": "chien-pao",
    "id": "1002"
  },
  {
    "name": "ting-lu",
    "id": "1003"
  },
  {
    "name": "chi-yu",
    "id": "1004"
  },
  {
    "name": "roaring-moon (bramaluna)",
    "id": "1005"
  },
  {
    "name": "iron-valiant (ferropaladin)",
    "id": "1006"
  },
  {
    "name": "koraidon",
    "id": "1007"
  },
  {
    "name": "miraidon",
    "id": "1008"
  },
  {
    "name": "walking-wake (ondulagua)",
    "id": "1009"
  },
  {
    "name": "iron-leaves (ferroverdor)",
    "id": "1010"
  },
  {
    "name": "dipplin",
    "id": "1011"
  },
  {
    "name": "poltchageist",
    "id": "1012"
  },
  {
    "name": "sinistcha",
    "id": "1013"
  },
  {
    "name": "okidogi",
    "id": "1014"
  },
  {
    "name": "munkidori",
    "id": "1015"
  },
  {
    "name": "fezandipiti",
    "id": "1016"
  },
  {
    "name": "ogerpon",
    "id": "1017"
  },
  {
    "name": "ogerpon-wellspring",
    "id": "1017",
    "formId": "0001"
  },
  {
    "name": "ogerpon-hearthflame",
    "id": "1017",
    "formId": "0002"
  },
  {
    "name": "ogerpon-cornerstone",
    "id": "1017",
    "formId": "0003"
  },
  {
    "name": "archaludon",
    "id": "1018"
  },
  {
    "name": "hydrapple",
    "id": "1019"
  },
  {
    "name": "gouging-fire (flamariete)",
    "id": "1020"
  },
  {
    "name": "raging-bolt (electrofuria)",
    "id": "1021"
  },
  {
    "name": "iron-boulder (ferromole)",
    "id": "1022"
  },
  {
    "name": "iron-crown (ferrotesta)",
    "id": "1023"
  },
  {
    "name": "terapagos",
    "id": "1024"
  },
  {
    "name": "terapagos-terastal",
    "id": "1024",
    "formId": "0001"
  },
  {
    "name": "terapagos-stellar",
    "id": "1024",
    "formId": "0002"
  },
  {
    "name": "pecharunt",
    "id": "1025"
  }
];