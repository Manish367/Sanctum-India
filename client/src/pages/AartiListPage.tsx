import { Link } from 'react-router-dom';
import { Flame, Sparkles } from 'lucide-react';
import { aartis } from '../data/aartis';

export default function AartiListPage() {
  const shivaAartis = aartis.filter((a) => a.deityGroup === 'shiva');
  const deviAartis = aartis.filter((a) => a.deityGroup === 'devi');

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Aarti &amp; Stotra</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">Hymns of Devotion</h1>
        <p className="mt-4 text-muted-foreground">
          Traditional aartis and stotras, with their meaning and context available in Sanskrit,
          Hindi, and English.
        </p>
      </header>

      <section className="mb-14">
        <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl text-foreground">
          <Flame className="h-5 w-5 text-primary" aria-hidden="true" /> Shiva
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {shivaAartis.map((aarti) => (
            <AartiCard key={aarti.slug} slug={aarti.slug} title={aarti.title} subtitle={aarti.subtitle} openingLine={aarti.verses[0].text} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 flex items-center gap-2 font-serif text-2xl text-foreground">
          <Sparkles className="h-5 w-5 text-secondary" aria-hidden="true" /> Devi
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {deviAartis.map((aarti) => (
            <AartiCard key={aarti.slug} slug={aarti.slug} title={aarti.title} subtitle={aarti.subtitle} openingLine={aarti.verses[0].text} />
          ))}
        </div>
      </section>
    </div>
  );
}

function AartiCard({ slug, title, subtitle, openingLine }: { slug: string; title: string; subtitle: string; openingLine: string }) {
  return (
    <Link
      to={`/aarti/${slug}`}
      className="group flex cursor-pointer flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-colors duration-200 hover:border-accent"
    >
      <p className="text-xs font-medium uppercase tracking-wide text-accent">{subtitle}</p>
      <h3 className="font-serif text-2xl text-card-foreground">{title}</h3>
      <p className="font-serif text-lg text-muted-foreground" lang="sa">
        {openingLine}
      </p>
      <span className="mt-1 text-sm font-medium text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Read &amp; listen in 3 languages →
      </span>
    </Link>
  );
}
