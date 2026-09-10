import { useTemples } from '../hooks/useTemples';
import { ExplorerGrid } from '../components/ExplorerGrid';

export default function ShaktiPeethaExplorerPage() {
  const { data, isLoading, isError } = useTemples({ type: 'shakti-peetha' });

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">The Shakti Peethas</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">The Shakti Peetha Experience</h1>
        <p className="mt-4 text-muted-foreground">
          Sacred sites marking where, according to tradition, parts of Sati's body fell —
          each honoring a form of the Devi and her Bhairava.
        </p>
      </header>
      <ExplorerGrid temples={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}
