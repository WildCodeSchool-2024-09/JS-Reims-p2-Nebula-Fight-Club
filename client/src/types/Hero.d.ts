export interface Heroe {
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  image: {
    url: string;
  };
}

export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
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
