import { Link } from 'react-router-dom';
import { navdurgaForms, navdurgaHeroImage, type NavdurgaForm } from '../data/navdurga';

export default function NavdurgaExplorerPage() {
  const radiusPct = 38;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">The Nine Forms of the Goddess</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">Navdurga</h1>
        <p className="mt-4 text-muted-foreground">
          Across the nine nights of Navaratri, the Goddess is worshipped in nine distinct forms —
          each with its own iconography, story, significance, and day of observance.
        </p>
      </header>

      {/* Desktop hero: composite image with hover zones over each of the nine forms */}
      <div className="relative mx-auto mb-16 hidden aspect-square w-full max-w-xl select-none overflow-visible sm:block">
        <img
          src={navdurgaHeroImage.url}
          alt={navdurgaHeroImage.alt}
          className="h-full w-full rounded-2xl border border-border object-cover shadow-xl"
        />
        {navdurgaForms.map((form, i) => {
          const angle = (i / navdurgaForms.length) * 2 * Math.PI - Math.PI / 2;
          const left = 50 + Math.cos(angle) * radiusPct;
          const top = 50 + Math.sin(angle) * radiusPct;
          return (
            <Link
              key={form.slug}
              to={`/navdurga/${form.slug}`}
              style={{ left: `${left}%`, top: `${top}%` }}
              className="group absolute z-10 h-[17%] w-[17%] -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full"
              aria-label={`Day ${form.order} — ${form.transliteration}`}
            >
              <span className="absolute inset-0 rounded-full ring-0 ring-accent transition-all duration-200 group-hover:ring-4 group-hover:ring-accent/80 group-focus-visible:ring-4 group-focus-visible:ring-accent/80" />
              <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                Day {form.order} · {form.transliteration}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile fallback: composite image plus a horizontal scroll strip to each form */}
      <div className="mb-6 sm:hidden">
        <img
          src={navdurgaHeroImage.url}
          alt={navdurgaHeroImage.alt}
          className="w-full rounded-2xl border border-border object-cover shadow-lg"
        />
      </div>
      <div className="mb-12 -mx-6 flex gap-3 overflow-x-auto px-6 pb-2 sm:hidden">
        {navdurgaForms.map((form) => (
          <Link key={form.slug} to={`/navdurga/${form.slug}`} className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-border">
            <img src={form.image.url} alt={form.image.alt} className="h-full w-full object-cover" />
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {navdurgaForms.map((form) => (
          <NavdurgaCard key={form.slug} form={form} />
        ))}
      </div>
    </div>
  );
}

function NavdurgaCard({ form }: { form: NavdurgaForm }) {
  return (
    <Link
      to={`/navdurga/${form.slug}`}
      className="group block cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={form.image.url}
          alt={form.image.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-medium tracking-wide text-secondary-foreground">
          Day {form.order}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-card-foreground">{form.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{form.transliteration}</p>
      </div>
    </Link>
  );
}
