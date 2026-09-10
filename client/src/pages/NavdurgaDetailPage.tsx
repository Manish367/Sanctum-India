import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Expand } from 'lucide-react';
import clsx from 'clsx';
import { navdurgaForms } from '../data/navdurga';
import { ImageLightbox } from '../components/ImageLightbox';

type Language = 'hindi' | 'english';

export default function NavdurgaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const form = navdurgaForms.find((f) => f.slug === slug);
  const [language, setLanguage] = useState<Language>('english');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!form) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-muted-foreground">We couldn't find that form of the Goddess.</p>
        <Link to="/navdurga" className="mt-4 inline-block text-accent underline underline-offset-4">
          Back to Navdurga
        </Link>
      </div>
    );
  }

  const proseLang = language === 'english' ? 'en' : 'hi';
  const idx = navdurgaForms.findIndex((f) => f.slug === slug);
  const prev = navdurgaForms[(idx - 1 + navdurgaForms.length) % navdurgaForms.length];
  const next = navdurgaForms[(idx + 1) % navdurgaForms.length];

  return (
    <article>
      <header className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            to="/navdurga"
            className="mb-6 inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Navdurga
          </Link>

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`View ${form.image.alt} full screen`}
              className="group relative h-36 w-36 shrink-0 cursor-zoom-in overflow-hidden rounded-full border-4 border-accent bg-muted shadow-lg sm:h-40 sm:w-40"
            >
              <img
                src={form.image.url}
                alt={form.image.alt}
                title={form.image.credit}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
                <Expand className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </button>
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">{form.tithi}</p>
              <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">{form.name}</h1>
              <p className="mt-1 text-lg text-muted-foreground">{form.transliteration}</p>
            </div>
          </div>

          <div role="tablist" aria-label="Language" className="mt-8 inline-flex rounded-full border border-border bg-muted p-1">
            {(['hindi', 'english'] as Language[]).map((lang) => (
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
                {lang === 'hindi' ? 'हिन्दी' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <Section title={language === 'english' ? 'Meaning of the Name' : 'नाम का अर्थ'} text={form.meaning[language]} lang={proseLang} />
        <Section title={language === 'english' ? 'Form & Iconography' : 'स्वरूप एवं प्रतीक'} text={form.iconography[language]} lang={proseLang} />
        <Section title={language === 'english' ? 'The Story' : 'कथा'} text={form.story[language]} lang={proseLang} />
        <Section title={language === 'english' ? 'Significance' : 'महत्व'} text={form.significance[language]} lang={proseLang} />
        <Section
          title={language === 'english' ? 'Observed on This Day' : 'इस दिन क्या किया जाता है'}
          text={form.ritual[language]}
          lang={proseLang}
        />
      </div>

      <nav className="mx-auto flex max-w-4xl items-center justify-between border-t border-border px-6 py-10">
        <Link to={`/navdurga/${prev.slug}`} className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
          ← {prev.transliteration}
        </Link>
        <Link to="/navdurga" className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
          All Nine Forms
        </Link>
        <Link to={`/navdurga/${next.slug}`} className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground">
          {next.transliteration} →
        </Link>
      </nav>

      {lightboxOpen && (
        <ImageLightbox images={[form.image]} index={0} onClose={() => setLightboxOpen(false)} onNavigate={() => {}} />
      )}
    </article>
  );
}

function Section({ title, text, lang }: { title: string; text: string; lang: string }) {
  return (
    <section className="mb-10">
      <h2 className="mb-2 font-serif text-2xl text-foreground">{title}</h2>
      <p className="leading-relaxed text-muted-foreground" lang={lang}>
        {text}
      </p>
    </section>
  );
}
