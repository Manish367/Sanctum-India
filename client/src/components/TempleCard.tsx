import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import clsx from 'clsx';
import type { TempleListItem } from '../types/temple';

export function TempleCard({ temple }: { temple: TempleListItem }) {
  const image = temple.gallery[0];
  const isJyotirlinga = temple.type === 'jyotirlinga';
  const defaultLabel = isJyotirlinga ? `Jyotirlinga ${temple.order ? `#${temple.order}` : ''}` : 'Shakti Peetha';
  const badgeText = temple.badgeLabel ?? defaultLabel;

  return (
    <Link
      to={`/temples/${temple.slug}`}
      className="group block cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {image ? (
          <img
            src={image.url}
            alt={image.alt}
            title={image.credit}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            Image coming soon
          </div>
        )}
        <span
          className={clsx(
            'absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium tracking-wide',
            temple.badgeLabel
              ? 'bg-muted text-muted-foreground'
              : isJyotirlinga
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground',
          )}
        >
          {badgeText}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg text-card-foreground">{temple.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {temple.city}, {temple.state}
        </p>
      </div>
    </Link>
  );
}
