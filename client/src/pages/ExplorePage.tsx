import { useState } from 'react';
import { useTempleCategories, useTemples } from '../hooks/useTemples';
import { ExplorerGrid } from '../components/ExplorerGrid';
import type { TempleType } from '../types/temple';
import clsx from 'clsx';

const typeLabels: Record<TempleType, string> = {
  jyotirlinga: 'Jyotirlinga',
  'shakti-peetha': 'Shakti Peetha',
};

export default function ExplorePage() {
  const [type, setType] = useState<TempleType | undefined>(undefined);
  const [state, setState] = useState<string | undefined>(undefined);
  const [deity, setDeity] = useState<string | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);

  // All 12 Jyotirlingas share the same deity ("Shiva"), so filtering by deity is meaningless
  // there — the useful "pick a specific one" axis for that type is the temple's own name
  // instead, mirroring how Shakti Peethas already browse well by their (each-unique) deity.
  const isJyotirlingaScope = type === 'jyotirlinga';

  const { data: categories } = useTempleCategories(type);
  // Unfiltered-by-state list for this type, used only to build a stable "Temple" chip list —
  // so picking a state doesn't also shrink which temple names are selectable.
  const { data: typeScopedTemples } = useTemples({ type });
  const { data, isLoading, isError } = useTemples({ type, state, deity: isJyotirlingaScope ? undefined : deity });

  const displayedTemples = isJyotirlingaScope && name ? data?.filter((t) => t.name === name) : data;

  function handleTypeChange(nextType: TempleType | undefined) {
    setType(nextType);
    // Deity/name/state options are scoped to the selected type — clear selections that might
    // no longer be valid for the new type rather than silently filtering to zero results.
    setDeity(undefined);
    setName(undefined);
    setState(undefined);
  }

  const secondaryFilter = isJyotirlingaScope
    ? {
        label: 'Temple',
        options: [...new Set((typeScopedTemples ?? []).map((t) => t.name))].sort().map((n) => ({ value: n, label: n })),
        value: name,
        onChange: setName,
      }
    : {
        label: 'Deity',
        options: (categories?.deities ?? []).map((d) => ({ value: d, label: d })),
        value: deity,
        onChange: setDeity,
      };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-10 max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Explore by category</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">Find a Sacred Place</h1>
        <p className="mt-4 text-muted-foreground">Browse by deity, state, or temple type.</p>
      </header>

      <div className="mb-10 flex flex-wrap gap-6">
        <FilterGroup
          label="Type"
          options={(categories?.types ?? []).map((t) => ({ value: t, label: typeLabels[t] }))}
          value={type}
          onChange={(v) => handleTypeChange(v as TempleType | undefined)}
        />
        <FilterGroup
          label={secondaryFilter.label}
          options={secondaryFilter.options}
          value={secondaryFilter.value}
          onChange={secondaryFilter.onChange}
        />
        <FilterGroup
          label="State"
          options={(categories?.states ?? []).map((s) => ({ value: s, label: s }))}
          value={state}
          onChange={setState}
        />
      </div>

      <ExplorerGrid
        temples={displayedTemples}
        isLoading={isLoading}
        isError={isError}
        emptyLabel="No temples match this filter combination yet."
      />
    </div>
  );
}

interface FilterGroupProps {
  label: string;
  options: { value: string; label: string }[];
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  if (options.length === 0) return null;

  return (
    <div>
      <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onChange(undefined)}
          className={clsx(
            'cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors duration-200',
            value === undefined
              ? 'border-primary bg-primary text-primary-foreground'
              : 'border-border text-muted-foreground hover:text-foreground',
          )}
        >
          All
        </button>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={clsx(
              'cursor-pointer rounded-full border px-3 py-1.5 text-sm transition-colors duration-200',
              value === option.value
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border text-muted-foreground hover:text-foreground',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
