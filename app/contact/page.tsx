import { BRAND } from '@/lib/brand';
import type { Metadata } from 'next';
import ContactForm from './form';

export const metadata: Metadata = {
  title: `${BRAND.name} 파트너십 신청 - 무료 상담`,
  description: `${BRAND.name}와 함께 업무를 줄이는 실행을 시작하세요. 비용 Zero, 리스크 Zero로 AI 자동화를 체험해보세요.`,
  keywords: ['파트너십', '상담 신청', 'AI 자동화', '무료 상담'],
};

export default function Contact() {
  return <ContactForm />;
}
