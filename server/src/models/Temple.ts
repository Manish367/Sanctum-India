import { Schema, model, InferSchemaType } from 'mongoose';

// Bilingual text: `hindi` may be an empty string where a Hindi translation hasn't been written
// yet (the client falls back to English in that case). This lets temples get Hindi content in
// batches without changing the schema again.
const bilingualSchema = new Schema(
  {
    hindi: { type: String, required: true, default: '' },
    english: { type: String, required: true },
  },
  { _id: false },
);

const storyChapterSchema = new Schema(
  {
    chapterTitle: { type: bilingualSchema, required: true },
    text: { type: bilingualSchema, required: true },
    order: { type: Number, required: true },
  },
  { _id: false },
);

const festivalSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: bilingualSchema, required: true },
  },
  { _id: false },
);

const travelSchema = new Schema(
  {
    airport: { type: String },
    railway: { type: String },
    road: { type: String },
  },
  { _id: false },
);

const galleryImageSchema = new Schema(
  {
    url: { type: String, required: true },
    credit: { type: String, required: true },
    alt: { type: String, required: true },
  },
  { _id: false },
);

const templeSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    type: { type: String, enum: ['jyotirlinga', 'shakti-peetha'], required: true, index: true },
    badgeLabel: { type: String },
    state: { type: String, required: true, index: true },
    city: { type: String, required: true },
    deity: { type: String, required: true, index: true },
    associatedDeity: { type: String },
    bodyPart: { type: String },
    order: { type: Number },
    overview: { type: bilingualSchema, required: true },
    story: { type: [storyChapterSchema], default: [] },
    history: { type: bilingualSchema, required: true },
    architecture: { type: bilingualSchema, required: true },
    festivals: { type: [festivalSchema], default: [] },
    travel: { type: travelSchema, default: {} },
    nearbyPlaces: { type: [String], default: [] },
    gallery: { type: [galleryImageSchema], default: [] },
    deityImages: { type: [galleryImageSchema], default: [] },
    sourcesNote: { type: String },
  },
  { timestamps: true },
);

export type TempleDocument = InferSchemaType<typeof templeSchema>;
export const Temple = model('Temple', templeSchema);
