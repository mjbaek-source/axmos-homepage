import type { Metadata } from 'next';
import ContactForm from './form';

export const metadata: Metadata = {
  title: 'Book a Demo — AXMOS',
  description: 'Start the work of reducing work with AXMOS. Try enterprise AI automation with zero cost and zero risk.',
  keywords: ['Schedule a demo', 'Contact AXMOS', 'AI automation', 'Free consultation'],
};

export default function Contact() {
  return <ContactForm />;
}
