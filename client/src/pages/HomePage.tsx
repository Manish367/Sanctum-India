import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Flame, Sparkles, Music, Moon } from 'lucide-react';

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? undefined : { opacity: 0, y: 24 };
  const animate = prefersReducedMotion ? undefined : { opacity: 1, y: 0 };

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              'radial-gradient(60% 60% at 50% 0%, color-mix(in oklab, var(--color-primary) 22%, transparent), transparent), radial-gradient(40% 50% at 85% 15%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent)',
          }}
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center sm:py-36">
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-accent"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            A Digital Pilgrimage
          </motion.p>
          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl leading-tight text-foreground sm:text-6xl"
          >
            Journey Through the Sacred India
          </motion.h1>
          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Explore the stories, legends, and history behind India's most sacred temples —
            the twelve Jyotirlingas and the Shakti Peethas.
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <PathCard
              to="/jyotirlingas"
              title="Explore Jyotirlingas"
              description="12 self-manifested forms of Shiva"
              icon={<Flame className="h-6 w-6" aria-hidden="true" />}
            />
            <PathCard
              to="/shakti-peethas"
              title="Explore Shakti Peethas"
              description="Sacred seats of the Devi"
              icon={<Sparkles className="h-6 w-6" aria-hidden="true" />}
            />
            <PathCard
              to="/navdurga"
              title="Explore Devi Forms"
              description="The nine forms of Navdurga"
              icon={<Moon className="h-6 w-6" aria-hidden="true" />}
            />
            <PathCard
              to="/aarti"
              title="Aarti & Stotra"
              description="Hymns in Sanskrit, Hindi & English"
              icon={<Music className="h-6 w-6" aria-hidden="true" />}
            />
          </motion.div>

          <motion.div initial={initial} animate={animate} transition={{ duration: 0.7, delay: 0.4 }}>
            <Link
              to="/explore"
              className="mt-10 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-opacity duration-200 hover:opacity-70"
            >
              Begin your pilgrimage
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function PathCard({
  to,
  title,
  description,
  icon,
}: {
  to: string;
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex cursor-pointer flex-col items-start gap-3 rounded-lg border border-border bg-card p-6 text-left transition-colors duration-200 hover:border-accent"
    >
      <span className="rounded-full bg-primary/10 p-3 text-primary">{icon}</span>
      <span className="font-serif text-xl text-card-foreground">{title}</span>
      <span className="text-sm text-muted-foreground">{description}</span>
      <span className="mt-1 flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
