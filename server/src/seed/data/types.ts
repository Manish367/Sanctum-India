export interface GalleryImage {
  url: string;
  credit: string;
  alt: string;
}

// `hindi` may be '' where a translation hasn't been written yet — the client falls back to
// English in that case, so temples can pick up Hindi content in batches.
export interface Bilingual {
  hindi: string;
  english: string;
}

// Authoring convenience: a plain string is treated as English-only (hindi: ''). Lets existing
// seed files stay as plain strings until their Hindi content is written, without changing the
// final normalized shape the database/API actually uses.
export type BilingualInput = string | Bilingual;

export interface TempleSeed {
  slug: string;
  name: string;
  type: 'jyotirlinga' | 'shakti-peetha';
  // Overrides the default type-derived badge ("Jyotirlinga #N" / "Shakti Peetha") shown on
  // cards and the detail header. Use this for entries whose Shakti Peetha classification is
  // a secondary/contested attribution rather than their actual primary identity (Amarnath,
  // Vaishno Devi) — the temple still belongs to the collection, but the badge shouldn't
  // overstate a thin classification as if it were the defining fact about the site.
  badgeLabel?: string;
  state: string;
  city: string;
  deity: string;
  associatedDeity?: string;
  bodyPart?: string;
  order?: number;
  overview: Bilingual;
  story: { chapterTitle: Bilingual; text: Bilingual; order: number }[];
  history: Bilingual;
  architecture: Bilingual;
  festivals: { name: string; date: string; description: Bilingual }[];
  travel: { airport?: string; railway?: string; road?: string };
  nearbyPlaces: string[];
  gallery: GalleryImage[];
  deityImages?: GalleryImage[];
  sourcesNote?: string;
}

// The shape seed data files actually author against — identical to TempleSeed except the
// bilingual fields also accept a plain string. Run through normalizeTemple() before use.
export interface TempleSeedInput extends Omit<TempleSeed, 'overview' | 'story' | 'history' | 'architecture' | 'festivals'> {
  overview: BilingualInput;
  story: { chapterTitle: BilingualInput; text: BilingualInput; order: number }[];
  history: BilingualInput;
  architecture: BilingualInput;
  festivals: { name: string; date: string; description: BilingualInput }[];
}

export function normalizeBilingual(input: BilingualInput): Bilingual {
  return typeof input === 'string' ? { hindi: '', english: input } : input;
}

export function normalizeTemple(input: TempleSeedInput): TempleSeed {
  return {
    ...input,
    overview: normalizeBilingual(input.overview),
    history: normalizeBilingual(input.history),
    architecture: normalizeBilingual(input.architecture),
    story: input.story.map((chapter) => ({
      ...chapter,
      chapterTitle: normalizeBilingual(chapter.chapterTitle),
      text: normalizeBilingual(chapter.text),
    })),
    festivals: input.festivals.map((festival) => ({
      ...festival,
      description: normalizeBilingual(festival.description),
    })),
  };
}
