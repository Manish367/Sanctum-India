import type { Bilingual } from '../types/temple';

export type Language = 'hindi' | 'english';

// Falls back to English when a Hindi translation hasn't been written yet for this field.
export function pickText(text: Bilingual, language: Language): string {
  if (language === 'hindi' && text.hindi.trim()) return text.hindi;
  return text.english;
}
