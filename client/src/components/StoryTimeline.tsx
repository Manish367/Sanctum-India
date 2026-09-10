import { motion, useReducedMotion } from 'framer-motion';
import type { StoryChapter } from '../types/temple';
import { pickText, type Language } from '../lib/bilingual';

export function StoryTimeline({ chapters, language }: { chapters: StoryChapter[]; language: Language }) {
  const prefersReducedMotion = useReducedMotion();
  const sorted = [...chapters].sort((a, b) => a.order - b.order);

  return (
    <ol className="relative space-y-16 border-l border-border pl-8 sm:pl-12">
      {sorted.map((chapter, index) => (
        <motion.li
          key={chapter.order}
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <span
            className="absolute -left-[calc(2rem+5px)] top-1 flex h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent sm:-left-[calc(3rem+5px)]"
            aria-hidden="true"
          />
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Chapter {index + 1}
          </p>
          <h3 className="mt-1 font-serif text-2xl text-foreground">{pickText(chapter.chapterTitle, language)}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{pickText(chapter.text, language)}</p>
        </motion.li>
      ))}
    </ol>
  );
}
