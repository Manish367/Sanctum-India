import type { TempleListItem } from '../types/temple';
import { TempleCard } from './TempleCard';

interface ExplorerGridProps {
  temples: TempleListItem[] | undefined;
  isLoading: boolean;
  isError: boolean;
  emptyLabel?: string;
}

export function ExplorerGrid({ temples, isLoading, isError, emptyLabel }: ExplorerGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] animate-pulse rounded-lg border border-border bg-muted" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p className="rounded-lg border border-destructive/40 bg-destructive/10 p-6 text-sm text-destructive">
        Could not load temples right now. Please try again shortly.
      </p>
    );
  }

  if (!temples || temples.length === 0) {
    return (
      <p className="rounded-lg border border-border bg-muted p-8 text-center text-sm text-muted-foreground">
        {emptyLabel ?? 'No temples found for this selection yet.'}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {temples.map((temple) => (
        <TempleCard key={temple._id} temple={temple} />
      ))}
    </div>
  );
}
