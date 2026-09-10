import axios from 'axios';
import type { Temple, TempleCategories, TempleListItem, TempleType } from '../types/temple';

// Local dev: leave VITE_API_URL unset — Vite proxies "/api" to the backend (see vite.config.ts).
// Production (Vercel): set VITE_API_URL to the deployed backend, e.g. https://your-api.onrender.com/api
const client = axios.create({ baseURL: import.meta.env.VITE_API_URL || '/api' });

export interface TempleFilters {
  type?: TempleType;
  state?: string;
  deity?: string;
}

export async function fetchTemples(filters: TempleFilters = {}): Promise<TempleListItem[]> {
  const { data } = await client.get<TempleListItem[]>('/temples', { params: filters });
  return data;
}

export async function fetchTempleBySlug(slug: string): Promise<Temple> {
  const { data } = await client.get<Temple>(`/temples/${slug}`);
  return data;
}

export async function fetchCategories(type?: TempleType): Promise<TempleCategories> {
  const { data } = await client.get<TempleCategories>('/temples/meta/categories', { params: { type } });
  return data;
}
