import { BRAND } from '@/lib/brand';
import OpengraphImage from './opengraph-image';

export const runtime = 'edge';
export const alt = `${BRAND.name} — The AI Operating System for Korean Enterprises`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return OpengraphImage();
}
