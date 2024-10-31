export interface Heroe {
  id: number;
  name: string;
  genre: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  image: {
    url: string;
  };
}

export interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Biography {
  placeOfBirth: string;
  "first-appearance": string;
  universe: string;
  alignment: string;
  publisher: string;
  aliases: string;
}

export interface Appearance {
  gender: string;
  race: string;
}
