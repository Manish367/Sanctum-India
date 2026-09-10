import { Schema, model, InferSchemaType } from 'mongoose';

// Phase 2 scaffold — not wired to any route yet. Fields only, so the auth/pilgrimage-tracker
// work planned for Phase 2 doesn't require a schema migration.
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    visitedTemples: { type: [Schema.Types.ObjectId], ref: 'Temple', default: [] },
    savedTemples: { type: [Schema.Types.ObjectId], ref: 'Temple', default: [] },
  },
  { timestamps: true },
);

export type UserDocument = InferSchemaType<typeof userSchema>;
export const User = model('User', userSchema);
