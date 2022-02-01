import { theme } from "../../shared/theme";
import { Driver, Team } from "../../types/state";
import { Percent } from "../../types/style";
import { repeater } from "../../utils/strings";

/**
 * Do not grab directly!
 * 2021 Driver lineup with 2022 newcomers included (Zhou and Albon).
 */
export const teams: {[id: string]: Team} = {
  alfaRomeo: {
    id: "alfaRomeo",
    shortName: "Alfa Romeo",
    fullName: "Alfa Romeo F1 Team ORLEN",
    nationality: "CHE",
  },
  alphaTauri: {
    id: "alphaTauri",
    shortName: "AlphaTauri",
    fullName: "Scuderia AlphaTauri",
    nationality: "ITA",
  },
  alpine: {
    id: "alpine",
    shortName: "Alpine",
    fullName: "Alpine F1 Team",
    nationality: "FRA",
  },
  astonMartin: {
    id: "astonMartin",
    shortName: "Aston Martin",
    fullName: "Aston Martin Cognizant Formula One Team",
    nationality: "GBR",
  },
  ferrari: {
    id: "ferrari",
    shortName: "Ferrari",
    fullName: "Scuderia Ferrari",
    nationality: "ITA",
  },
  haas: {
    id: "haas",
    shortName: "Haas F1 Team",
    fullName: "Uralkali Haas F1 Team",
    nationality: "USA",
  },
  mclaren: {
    id: "mclaren",
    shortName: "McLaren",
    fullName: "McLaren F1 Team",
    nationality: "GBR",
  },
  mercedes: {
    id: "mercedes",
    shortName: "Mercedes",
    fullName: "Mercedes-AMG Petronas Formula One Team",
    nationality: "DEU",
  },
  redBull: {
    id: "redBull",
    shortName: "Red Bull Racing",
    fullName: "Red Bull Racing",
    nationality: "AUT",
  },
  williams: {
    id: "williams",
    shortName: "Williams",
    fullName: "Williams Racing",
    nationality: "GBR",
  },
};

/**
 * Do not grab directly!
 * 2021 Driver lineup with 2022 newcomers included (Zhou and Albon)
 */
export const drivers: {[lastName: string]: Driver} = {
  albon: {
    id: "albon",
    firstName: "Alex",
    lastName: "Albon",
    number: 23,
    team: teams.williams,
    yellowTCam: false,  // TBD
    initials: "ALB",
    nationality: "THA",
  },
  alonso: {
    id: "alonso",
    firstName: "Fernando",
    lastName: "Alonso",
    number: 14,
    team: teams.alpine,
    yellowTCam: false,
    initials: "ALO",
    nationality: "ESP",
  },
  bottas: {
    id: "bottas",
    firstName: "Valtteri",
    lastName: "Bottas",
    number: 77,
    team: teams.mercedes,
    yellowTCam: true,
    initials: "BOT",
    nationality: "FIN",
  },
  gasly: {
    id: "gasly",
    firstName: "Pierre",
    lastName: "Gasly",
    number: 10,
    team: teams.alphaTauri,
    yellowTCam: true,
    initials: "GAS",
    nationality: "FRA",
  },
  giovinazzi: {
    id: "giovinazzi",
    firstName: "Antonio",
    lastName: "Giovinazzi",
    number: 99,
    team: teams.alfaRomeo,
    yellowTCam: true,
    initials: "GIO",
    nationality: "ITA",
  },
  hamilton: {
    id: "hamilton",
    firstName: "Lewis",
    lastName: "Hamilton",
    number: 44,
    team: teams.mercedes,
    yellowTCam: false,
    initials: "HAM",
    nationality: "GBR",
  },
  kubica: {
    id: "kubica",
    firstName: "Robert",
    lastName: "Kubica",
    number: 88,
    team: teams.alfaRomeo,
    yellowTCam: false,
    initials: "KUB",
    nationality: "POL",
  },
  latifi: {
    id: "latifi",
    firstName: "Nicolas",
    lastName: "Latifi",
    number: 6,
    team: teams.williams,
    yellowTCam: true,
    initials: "LAT",
    nationality: "CAN",
  },
  leclerc: {
    id: "leclerc",
    firstName: "Charles",
    lastName: "Leclerc",
    number: 16,
    team: teams.ferrari,
    yellowTCam: false,
    initials: "LEC",
    nationality: "MCO",
  },
  mazepin: {
    id: "mazepin",
    firstName: "Nikita",
    lastName: "Mazepin",
    number: 9,
    team: teams.haas,
    yellowTCam: false,
    initials: "MAZ",
    nationality: "RUS", // RAF SUPPORT MAYBE LATER...
  },
  norris: {
    id: "norris",
    firstName: "Lando",
    lastName: "Norris",
    number: 4,
    team: teams.mclaren,
    yellowTCam: true,
    initials: "NOR",
    nationality: "GBR",
  },
  ocon: {
    id: "ocon",
    firstName: "Esteban",
    lastName: "Ocon",
    number: 31,
    team: teams.alpine,
    yellowTCam: true,
    initials: "OCO",
    nationality: "FRA",
  },
  perez: {
    id: "perez",
    firstName: "Sergio",
    lastName: "Pérez",
    number: 11,
    team: teams.redBull,
    yellowTCam: true,
    initials: "PER",
    nationality: "MEX",
  },
  raikkonen: {
    id: "raikkonen",
    firstName: "Kimi",
    lastName: "Räikkönen",
    number: 7,
    team: teams.alfaRomeo,
    yellowTCam: false,
    initials: "RAI",
    nationality: "FIN",
  },
  ricciardo: {
    id: "ricciardo",
    firstName: "Daniel",
    lastName: "Ricciardo",
    number: 3,
    team: teams.mclaren,
    yellowTCam: false,
    initials: "RIC",
    nationality: "AUS",
  },
  russell: {
    id: "russell",
    firstName: "George",
    lastName: "Russell",
    number: 63,
    team: teams.williams,
    yellowTCam: false,
    initials: "RUS",
    nationality: "GBR",
  },
  sainz: {
    id: "sainz",
    firstName: "Carlos",
    lastName: "Sainz",
    number: 55,
    team: teams.ferrari,
    yellowTCam: true,
    initials: "SAI",
    nationality: "ESP",
  },
  schumacher: {
    id: "schumacher",
    firstName: "Mick",
    lastName: "Schumacher",
    number: 47,
    team: teams.haas,
    yellowTCam: true,
    initials: "MSC",
    nationality: "DEU",
  },
  stroll: {
    id: "stroll",
    firstName: "Lance",
    lastName: "Stroll",
    number: 18,
    team: teams.astonMartin,
    yellowTCam: false,
    initials: "STR",
    nationality: "CAN",
  },
  tsunoda: {
    id: "tsunoda",
    firstName: "Yuki",
    lastName: "Tsunoda",
    number: 22,
    team: teams.alphaTauri,
    yellowTCam: false,
    initials: "TSU",
    nationality: "JPN",
  },
  verstappen: {
    id: "verstappen",
    firstName: "Max",
    lastName: "Verstappen",
    number: 33,
    team: teams.redBull,
    yellowTCam: false,
    initials: "VER",
    nationality: "NLD",
  },
  vettel: {
    id: "vettel",
    firstName: "Sebastian",
    lastName: "Vettel",
    number: 5,
    team: teams.astonMartin,
    yellowTCam: true,
    initials: "VET",
    nationality: "DEU",
  },
  zhou: {
    id: "zhou",
    firstName: "Guanyu",
    lastName: "Zhou",
    number: 24,
    team: teams.alfaRomeo,
    yellowTCam: true,
    initials: "ZHO",
    nationality: "CHN",
  },
};

type NumberStyleRule = {
  type: "stroke"
  color: string,
  width: number,
} | {
  type: "shadow",
  property: string,
};
export type NumberStyle = {
  numberColor: string,
  fontFamily: string,
  rules: Array<NumberStyleRule>,
};
/**
 * Do not grab directly!
 */
export const teamNumberStyles: { [teamId: string]: NumberStyle } = {
  alfaRomeo: {
    numberColor: "#ffe9f4",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #900000", 2) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#900000", width: 0.05 },
      { type: "shadow", property: "0 0 0.07em #900000" },
    ],
  },
  alphaTauri: {
    numberColor: "#eff5fc",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "stroke", color: "#2b4562", width: 0.03 },
    ],
  },
  alpine: {
    numberColor: "#ddffff",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #4B7B9E", 4) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "shadow", property: repeater("0 0 0.07em #65A6D6", 2) },
    ],
  },
  astonMartin: {
    numberColor: "#f9ffff",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #006f62", 4) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#006f62", width: 0.05 },
      { type: "shadow", property: "0 0 0.07em #006f62" },
    ],
  },
  haas: {
    numberColor: "#fff",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #fff", 4) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#999", width: 0.05 },
      { type: "shadow", property: "0 0 0.07em #eee" },
    ],
  },
  ferrari: {
    numberColor: "#fff5f6",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #dc0000", 2) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#dc0000", width: 0.05 },
      { type: "shadow", property: "0 0 0.07em #dc0000" },
    ],
  },
  mclaren: {
    numberColor: "#fdf5f6",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #ffb241", 2) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#ffb241", width: 0.05 },
      { type: "shadow", property: "0 0 0.07em #ffb241" },
    ],
  },
  mercedes: {
    numberColor: "#daffff",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #daffff", 4) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#35dfae", width: 0.05 },
      { type: "shadow", property: repeater("0 0 0.07em #35dfae", 2) },
    ],
  },
  redBull: {
    numberColor: "#f2f2ff",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #0600ef", 4) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#ebffff", width: 0 },
    ],
  },
  williams: {
    numberColor: "#ebffff",
    fontFamily: theme.fonts.f1Italic,
    rules: [
      { type: "shadow", property: repeater("0 0 0.2em #005aff", 2) },
      { type: "stroke", color: "#000", width: 0.13 },
      { type: "stroke", color: "#ebffff", width: 0 },
    ],
  },
};


export type TeamFlagStyle = {
  backgroundColor: string,
  imageSize: Percent,
  imagePos: {
    x: number,
    y: number,
  },
  subFlagModifier: {
    x: number,
    y: number,
    scale: number,
  },
};
export const teamFlagStyles: { [teamId: string]: TeamFlagStyle } = {
  alfaRomeo: {
    backgroundColor: "#660000",
    imageSize: 41,
    imagePos: { x: .32, y: .08 },
    subFlagModifier: { x: .99, y: .97, scale: .99 },
  },
  alphaTauri: {
    backgroundColor: "#232c3b",
    imageSize: 58,
    imagePos: { x: .25, y: -.15 },
    subFlagModifier: { x: 1, y: .9, scale: .99 },
  },
  alpine: {
    backgroundColor: "black",
    imageSize: 51,
    imagePos: { x: .23, y: -.12 },
    subFlagModifier: { x: 1.02, y: .98, scale: .98 },
  },
  astonMartin: {
    backgroundColor: "#037356",
    imageSize: 109,
    imagePos: { x: .05, y: -.75 },
    subFlagModifier: { x: 1.05, y: .9, scale: .95 },
  },
  ferrari: {
    backgroundColor: "#dc0000",
    imageSize: 50,
    imagePos: { x: .3, y: .04 },
    subFlagModifier: { x: 1, y: 1, scale: .98 },
  },
  haas: {
    backgroundColor: "#f0f0f0",
    imageSize: 46,
    imagePos: { x: .3, y: -.04 },
    subFlagModifier: { x: 1, y: .98, scale: .98 },
  },
  mclaren: {
    backgroundColor: "#545459",
    imageSize: 50,
    imagePos: { x: .25, y: -.1 },
    subFlagModifier: { x: .98, y: 1.03, scale: 1.03 },
  },
  mercedes: {
    backgroundColor: "#1ee0ad",
    imageSize: 40,
    imagePos: { x: .33, y: .05 },
    subFlagModifier: { x: 1, y: 1, scale: .98 },
  },
  redBull: {
    backgroundColor: "#413ae2",
    imageSize: 88,
    imagePos: { x: .33, y: 0 },
    subFlagModifier: { x: 1.04, y: .2, scale: .92 },
  },
  williams: {
    backgroundColor: "#12a0cb",
    imageSize: 40,
    imagePos: { x: .35, y: .1 },
    subFlagModifier: { x: 1, y: 1, scale: .98 },
  },
};
