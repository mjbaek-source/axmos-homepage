import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — AXMOS',
  description: 'AXMOS Privacy Policy. What we collect, why, how long we keep it, processors, cookies, and your rights.',
  robots: 'index, follow',
};

const sections = [
  {
    h: '1. Overview',
    body: [
      'Codepresso ("we", "us") operates the AXMOS service ("Service") and protects your personal data in accordance with applicable data protection laws, including Korea’s Personal Information Protection Act (PIPA).',
      'This Privacy Policy explains how personal data collected through the Service website is processed.',
    ],
  },
  {
    h: '2. Information We Collect',
    body: [
      'When you submit an inquiry or consultation request, we collect:',
      '· Required: company name, contact name, email address, area of interest (track), and the workflow you want to automate.',
      '· Optional: phone number.',
      '· Automatically collected: cookies, access logs, and browser/device information may be generated during use (analytics cookies only with consent).',
    ],
  },
  {
    h: '3. Purpose of Processing',
    body: [
      '· Responding to and following up on inquiries and consultation requests.',
      '· Communication regarding evaluation and onboarding of the Service.',
      '· Service improvement and usage analysis (only via analytics cookies you have consented to).',
    ],
  },
  {
    h: '4. Retention Period',
    body: [
      'We delete personal data without delay once the purpose of collection has been fulfilled, except where retention is required by applicable law.',
      '· Inquiry records: [Specify retention period — e.g., deleted upon purpose fulfillment, or 1 year] ⚠️ confirm with legal review.',
    ],
  },
  {
    h: '5. Processors (Sub-processing)',
    body: [
      'To operate the Service, we may engage the following processors. (Confirm which are actually in use for your deployment.)',
      '· Resend — inquiry notification and confirmation emails.',
      '· Google (Sheets / Analytics) — inquiry data storage and usage analytics.',
      '· Notion — inquiry data management.',
      '· Hotjar — user behavior analytics (with consent).',
      'The list of processors may change; changes will be announced through this policy.',
    ],
  },
  {
    h: '6. Cookies',
    body: [
      'We may use cookies for usage analytics and service improvement.',
      '· Essential cookies: required for basic operation and used without consent.',
      '· Non-essential (analytics) cookies: used only with your consent (Google Analytics, Hotjar, etc.).',
      'You can choose your preference in the cookie banner at the bottom of the site, and you may refuse cookies through your browser settings.',
    ],
  },
  {
    h: '7. Third-Party Disclosure',
    body: [
      'We do not provide your personal data to third parties beyond the purposes stated in this policy, except where required by law or with your consent.',
    ],
  },
  {
    h: '8. Your Rights',
    body: [
      'You may request access to, correction of, deletion of, or suspension of processing of your personal data at any time.',
      'To exercise these rights, contact us at the address below and we will act without delay.',
    ],
  },
  {
    h: '9. Deletion of Personal Data',
    body: [
      'Personal data is destroyed without delay once the retention period expires or the purpose is fulfilled. Electronic files are deleted irrecoverably; printed materials are shredded or incinerated.',
    ],
  },
  {
    h: '10. Security Measures',
    body: [
      'We apply reasonable safeguards including access control, permission management, and encryption in transit. Data is processed in sovereign, region-isolated cloud infrastructure, operated to each enterprise’s security and compliance requirements.',
    ],
  },
  {
    h: '11. Data Protection Officer & Contact',
    body: [
      '· Data Protection Officer: [Name / title] ⚠️ to be confirmed.',
      '· Contact: axmos@codepresso.io',
      'Please direct any questions, complaints, or remedy requests regarding personal data to the contact above.',
    ],
  },
  {
    h: '12. Changes to This Policy',
    body: [
      'This policy may be revised due to changes in law, policy, or the Service, and any changes will be announced through the website.',
      '· Effective date: [Specify] ⚠️ to be confirmed.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">
      <section className="bg-bg-dark text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 md:py-28">
          <p className="section-eyebrow">Legal</p>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl md:text-2xl font-bold text-bg-dark mb-4">{s.h}</h2>
              <div className="space-y-2">
                {s.body.map((p, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
