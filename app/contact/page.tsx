import { BRAND } from '@/lib/brand';
import type { Metadata } from 'next';
import ContactForm from './form';

export const metadata: Metadata = {
  title: `Book a Demo — ${BRAND.name}`,
  description: `Start the work of reducing work with ${BRAND.name}. Try enterprise AI automation with zero cost and zero risk.`,
  keywords: ['Schedule a demo', `Contact ${BRAND.name}`, 'AI automation', 'Free consultation'],
};

export default function Contact() {
  return <ContactForm />;
}
