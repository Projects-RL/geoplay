export interface QuizData {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: FeatureType;
  properties: Properties;
  geometry: Geometry;
}

export interface Geometry {
  type: GeometryType;
  coordinates: Array<Array<Array<number[] | number>>>;
}

export enum GeometryType {
  MultiPolygon = "MultiPolygon",
  Polygon = "Polygon",
}

export interface Properties {
  scalerank: number;
  featurecla: Featurecla;
  labelrank: number;
  sovereignt: string;
  sov_a3: string;
  adm0_dif: number;
  level: number;
  type: PropertiesType;
  admin: string;
  adm0_a3: string;
  geou_dif: number;
  geounit: string;
  gu_a3: string;
  su_dif: number;
  subunit: string;
  su_a3: string;
  brk_diff: number;
  name: string;
  name_long: string;
  brk_a3: string;
  brk_name: string;
  brk_group: null | string;
  abbrev: string;
  postal: string;
  formal_en: null | string;
  formal_fr: null;
  note_adm0: null | string;
  note_brk: null | string;
  name_sort: string;
  name_alt: null | string;
  mapcolor7: number;
  mapcolor8: number;
  mapcolor9: number;
  mapcolor13: number;
  pop_est: number;
  gdp_md_est: number;
  pop_year: number;
  lastcensus: number;
  gdp_year: number;
  economy: Economy;
  income_grp: IncomeGrp;
  wikipedia: number;
  fips_10_: string;
  iso_a2: string;
  iso_a3: string;
  iso_n3: string;
  un_a3: string;
  wb_a2: string;
  wb_a3: string;
  woe_id: number;
  woe_id_eh: number;
  woe_note: string;
  adm0_a3_is: string;
  adm0_a3_us: string;
  adm0_a3_un: number;
  adm0_a3_wb: number;
  continent: Continent;
  region_un: Continent;
  subregion: Subregion;
  region_wb: RegionWb;
  name_len: number;
  long_len: number;
  abbrev_len: number;
  tiny: number;
  homepart: number;
  filename: string;
}

export enum Continent {
  Europe = "Europe",
}

export enum Economy {
  The1DevelopedRegionG7 = "1. Developed region: G7",
  The2DevelopedRegionNonG7 = "2. Developed region: nonG7",
  The3EmergingRegionBRIC = "3. Emerging region: BRIC",
  The6DevelopingRegion = "6. Developing region",
}

export enum Featurecla {
  Admin0Country = "Admin-0 country",
}

export enum IncomeGrp {
  The1HighIncomeOECD = "1. High income: OECD",
  The2HighIncomeNonOECD = "2. High income: nonOECD",
  The3UpperMiddleIncome = "3. Upper middle income",
  The4LowerMiddleIncome = "4. Lower middle income",
}

export enum RegionWb {
  EuropeCentralAsia = "Europe & Central Asia",
  MiddleEastNorthAfrica = "Middle East & North Africa",
}

export enum Subregion {
  EasternEurope = "Eastern Europe",
  NorthernEurope = "Northern Europe",
  SouthernEurope = "Southern Europe",
  WesternEurope = "Western Europe",
}

export enum PropertiesType {
  Country = "Country",
  Dependency = "Dependency",
  SovereignCountry = "Sovereign country",
}

export enum FeatureType {
  Feature = "Feature",
}

export interface ContinentState {
  coords: Coords;
  name: string;
  zoom: number;
}

export interface Coords {
  lat: number;
  lng: number;
}
