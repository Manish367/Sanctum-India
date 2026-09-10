import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchTempleBySlug, fetchTemples, type TempleFilters } from '../lib/api';
import type { TempleType } from '../types/temple';

export function useTemples(filters: TempleFilters = {}) {
  return useQuery({
    queryKey: ['temples', filters],
    queryFn: () => fetchTemples(filters),
  });
}

export function useTemple(slug: string | undefined) {
  return useQuery({
    queryKey: ['temple', slug],
    queryFn: () => fetchTempleBySlug(slug as string),
    enabled: Boolean(slug),
  });
}

export function useTempleCategories(type?: TempleType) {
  return useQuery({
    queryKey: ['temple-categories', type],
    queryFn: () => fetchCategories(type),
  });
}
