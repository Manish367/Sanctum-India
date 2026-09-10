import { useTemples } from '../hooks/useTemples';
import { ExplorerGrid } from '../components/ExplorerGrid';
import shivImg from '../assets/Shiv.png';

export default function JyotirlingaExplorerPage() {
  const { data, isLoading, isError } = useTemples({ type: 'jyotirlinga' });

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">The Twelve Jyotirlingas</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">The Jyotirlinga Journey</h1>
        <p className="mt-4 text-muted-foreground">
          Twelve self-manifested forms of Shiva, spread across India — each with its own
          legend, history, and living tradition of worship.
        </p>
      </header>

      <div className="mx-auto mb-16 max-w-xl">
        <img
          src={shivImg}
          alt="Lord Shiva, whose twelve self-manifested Jyotirlinga forms are honoured across India"
          className="w-full rounded-2xl border border-border object-cover shadow-xl"
        />
      </div>

      <ExplorerGrid temples={data} isLoading={isLoading} isError={isError} />
    </div>
  );
}
