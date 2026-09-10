import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../types/temple';

interface ImageLightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({ images, index, onClose, onNavigate }: ImageLightboxProps) {
  const image = images[index];

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft' && images.length > 1) onNavigate((index - 1 + images.length) % images.length);
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, images.length, onClose, onNavigate]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close full-screen image"
        className="absolute right-4 top-4 cursor-pointer rounded-full bg-black/40 p-2 text-white transition-colors duration-200 hover:bg-black/70"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-white transition-colors duration-200 hover:bg-black/70 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/40 p-2 text-white transition-colors duration-200 hover:bg-black/70 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </>
      )}

      <img
        src={image.url}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[80vh] max-w-full rounded-md object-contain shadow-2xl"
      />

      <p className="mt-4 max-w-2xl px-4 text-center text-xs text-white/60">
        {image.credit}
        {images.length > 1 ? ` · ${index + 1} / ${images.length}` : ''}
      </p>
    </div>
  );
}
