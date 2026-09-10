export type TempleType = 'jyotirlinga' | 'shakti-peetha';

// `hindi` may be '' where a translation hasn't been written yet — fall back to English in that case.
export interface Bilingual {
  hindi: string;
  english: string;
}

export interface StoryChapter {
  chapterTitle: Bilingual;
  text: Bilingual;
  order: number;
}

export interface Festival {
  name: string;
  date: string;
  description: Bilingual;
}

export interface TravelInfo {
  airport?: string;
  railway?: string;
  road?: string;
}

export interface GalleryImage {
  url: string;
  credit: string;
  alt: string;
}

export interface Temple {
  _id: string;
  slug: string;
  name: string;
  type: TempleType;
  badgeLabel?: string;
  state: string;
  city: string;
  deity: string;
  associatedDeity?: string;
  bodyPart?: string;
  order?: number;
  overview: Bilingual;
  story: StoryChapter[];
  history: Bilingual;
  architecture: Bilingual;
  festivals: Festival[];
  travel: TravelInfo;
  nearbyPlaces: string[];
  gallery: GalleryImage[];
  deityImages: GalleryImage[];
  sourcesNote?: string;
}

export interface TempleListItem {
  _id: string;
  slug: string;
  name: string;
  type: TempleType;
  badgeLabel?: string;
  state: string;
  city: string;
  deity: string;
  order?: number;
  gallery: GalleryImage[];
}

export interface TempleCategories {
  states: string[];
  deities: string[];
  types: TempleType[];
}
