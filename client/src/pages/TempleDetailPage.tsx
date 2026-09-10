import { useState, type ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Plane, TrainFront, Car, ArrowLeft, Expand } from 'lucide-react';
import clsx from 'clsx';
import { useTemple } from '../hooks/useTemples';
import { StoryTimeline } from '../components/StoryTimeline';
import { ImageLightbox } from '../components/ImageLightbox';
import type { GalleryImage } from '../types/temple';
import { pickText, type Language } from '../lib/bilingual';

const languageLabels: Record<Language, string> = {
  hindi: 'हिन्दी',
  english: 'English',
};

export default function TempleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: temple, isLoading, isError } = useTemple(slug);
  const [lightbox, setLightbox] = useState<{ images: GalleryImage[]; index: number } | null>(null);
  const [language, setLanguage] = useState<Language>('english');

  if (isLoading) {
    return <div className="mx-auto max-w-4xl px-6 py-24 text-center text-muted-foreground">Loading temple...</div>;
  }

  if (isError || !temple) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-muted-foreground">We couldn't find that temple.</p>
        <Link to="/explore" className="mt-4 inline-block text-accent underline underline-offset-4">
          Back to Explore
        </Link>
      </div>
    );
  }

  const isPeetha = temple.type === 'shakti-peetha';

  return (
    <article>
      <header className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            to={isPeetha ? '/shakti-peethas' : '/jyotirlingas'}
            className="mb-6 inline-flex cursor-pointer items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
          </Link>
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {temple.badgeLabel ?? (isPeetha ? 'Shakti Peetha' : `Jyotirlinga${temple.order ? ` #${temple.order}` : ''}`)}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-foreground sm:text-5xl">{temple.name}</h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" aria-hidden="true" /> {temple.city}, {temple.state}
            </span>
            <span>Deity: {temple.deity}</span>
            {isPeetha && temple.associatedDeity && <span>Bhairava: {temple.associatedDeity}</span>}
            {isPeetha && temple.bodyPart && <span>Body part: {temple.bodyPart}</span>}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/90" lang={language === 'hindi' ? 'hi' : 'en'}>
            {pickText(temple.overview, language)}
          </p>

          <div role="tablist" aria-label="Language" className="mt-6 inline-flex rounded-full border border-border bg-muted p-1">
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
        </div>
      </header>

      {temple.deityImages.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="mb-1 font-serif text-2xl text-foreground">The Devi</h2>
          <p className="mb-6 text-sm text-muted-foreground">Darshan of the goddess worshipped here.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:justify-start">
            {temple.deityImages.map((image, i) => (
              <button
                key={image.url}
                type="button"
                onClick={() => setLightbox({ images: temple.deityImages, index: i })}
                aria-label={`View ${image.alt} full screen`}
                className="group relative h-32 w-32 shrink-0 cursor-zoom-in overflow-hidden rounded-full border-2 border-accent/60 bg-muted sm:h-40 sm:w-40"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
                  <Expand className="h-5 w-5 text-white" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {temple.gallery.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="mb-6 font-serif text-2xl text-foreground">Gallery</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {temple.gallery.map((image, i) => (
              <button
                key={image.url}
                type="button"
                onClick={() => setLightbox({ images: temple.gallery, index: i })}
                aria-label={`View ${image.alt} full screen`}
                className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-lg border border-border bg-muted"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/30 group-hover:opacity-100">
                  <Expand className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox((prev) => (prev ? { ...prev, index } : prev))}
        />
      )}

      {temple.story.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-2 font-serif text-3xl text-foreground">The Story</h2>
          <p className="mb-10 text-sm text-muted-foreground">
            Presented as living tradition and mythology — not verified historical fact.
          </p>
          <StoryTimeline chapters={temple.story} language={language} />
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-4 font-serif text-3xl text-foreground">History</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground" lang={language === 'hindi' ? 'hi' : 'en'}>
          {pickText(temple.history, language)}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-4 font-serif text-3xl text-foreground">Architecture</h2>
        <p className="max-w-2xl leading-relaxed text-muted-foreground" lang={language === 'hindi' ? 'hi' : 'en'}>
          {pickText(temple.architecture, language)}
        </p>
      </section>

      {temple.festivals.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-6 font-serif text-3xl text-foreground">Festivals</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {temple.festivals.map((festival) => (
              <div key={festival.name} className="rounded-lg border border-border bg-card p-5">
                <p className="font-serif text-lg text-card-foreground">{festival.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">{festival.date}</p>
                <p className="mt-2 text-sm text-muted-foreground" lang={language === 'hindi' ? 'hi' : 'en'}>
                  {pickText(festival.description, language)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-6 font-serif text-3xl text-foreground">How to Reach</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {temple.travel.airport && (
            <TravelItem icon={<Plane className="h-5 w-5" aria-hidden="true" />} label="Airport" value={temple.travel.airport} />
          )}
          {temple.travel.railway && (
            <TravelItem icon={<TrainFront className="h-5 w-5" aria-hidden="true" />} label="Railway" value={temple.travel.railway} />
          )}
          {temple.travel.road && (
            <TravelItem icon={<Car className="h-5 w-5" aria-hidden="true" />} label="Road" value={temple.travel.road} />
          )}
        </div>
      </section>

      {temple.nearbyPlaces.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <h2 className="mb-4 font-serif text-3xl text-foreground">Nearby Sacred Places</h2>
          <ul className="flex flex-wrap gap-2">
            {temple.nearbyPlaces.map((place) => (
              <li key={place} className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
                {place}
              </li>
            ))}
          </ul>
        </section>
      )}

      {temple.sourcesNote && (
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <p className="border-t border-border pt-6 text-xs text-muted-foreground">{temple.sourcesNote}</p>
        </section>
      )}
    </article>
  );
}

function TravelItem({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
      <span className="text-accent">{icon}</span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm text-card-foreground">{value}</p>
      </div>
    </div>
  );
}
