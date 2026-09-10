import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import clsx from 'clsx';
import { aartis, type Language } from '../data/aartis';

const languageLabels: Record<Language, string> = {
  sanskrit: 'संस्कृत',
  hindi: 'हिन्दी',
  english: 'English',
};

export default function AartiDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const aarti = aartis.find((a) => a.slug === slug);
  const [language, setLanguage] = useState<Language>('sanskrit');

  if (!aarti) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-muted-foreground">We couldn't find that hymn.</p>
        <Link to="/aarti" className="mt-4 inline-block text-accent underline underline-offset-4">
          Back to Aarti &amp; Stotra
        </Link>
      </div>
    );
  }

  const showMeaning = language !== 'sanskrit';
  const meaningLang: 'hindi' | 'english' = language === 'english' ? 'english' : 'hindi';
  const proseLang = language === 'english' ? 'en' : 'hi';

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        to="/aarti"
        className="mb-8 inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Aarti &amp; Stotra
      </Link>

      <p className="text-sm font-medium uppercase tracking-widest text-accent">{aarti.subtitle}</p>
      <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">{aarti.title}</h1>

      <div
        role="tablist"
        aria-label="Language"
        className="mt-6 inline-flex rounded-full border border-border bg-muted p-1"
      >
        {(Object.keys(languageLabels) as Language[]).map((lang) => (
          <button
            key={lang}
            type="button"
            role="tab"
            aria-selected={language === lang}
            onClick={() => setLanguage(lang)}
            className={clsx(
              'cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200',
              language === lang ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {languageLabels[lang]}
          </button>
        ))}
      </div>

      <p className="mt-8 leading-relaxed text-muted-foreground" lang={proseLang}>
        {language === 'english' ? aarti.intro.english : aarti.intro.hindi}
      </p>

      <div className="mt-10 space-y-6">
        {aarti.verses.map((verse, i) => (
          <div key={i} className="rounded-lg border border-accent/40 bg-muted/50 p-6">
            <p className="whitespace-pre-line font-serif text-xl leading-relaxed text-foreground" lang="sa">
              {verse.text}
            </p>
            {showMeaning && (
              <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground" lang={proseLang}>
                {verse.meaning[meaningLang]}
              </p>
            )}
          </div>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="mb-2 font-serif text-xl text-foreground">
          {language === 'english' ? 'About This Text' : 'पाठ के विषय में'}
        </h2>
        <p className="leading-relaxed text-muted-foreground" lang={proseLang}>
          {language === 'english' ? aarti.structure.english : aarti.structure.hindi}
        </p>
      </section>

      <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">{aarti.note}</p>
    </article>
  );
}
