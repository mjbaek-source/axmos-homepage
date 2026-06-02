'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (phone && !phone.match(/^[+]?[\d\s().-]{7,20}$/)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
        setErrors({});
        setTouched({});
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-4 bg-white border text-bg-dark focus:outline-none transition ${
      touched[field] && errors[field]
        ? 'border-red-500 focus:border-red-500'
        : 'border-gray-300 focus:border-bg-dark'
    }`;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-bg-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-bg-dark/55 to-bg-dark/95"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="section-eyebrow">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6 max-w-3xl">
            Request a consultation.
          </h1>
          <p className="text-lg md:text-xl text-text-light max-w-2xl leading-relaxed">
            The first session maps what&apos;s worth automating, and what it&apos;s worth to you.
            We respond within 2 business days.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <div className="bg-bg-light border border-gray-300 p-12 md:p-16">
              <p className="section-eyebrow text-bg-dark/60">Submitted</p>
              <h2 className="text-3xl md:text-4xl font-bold text-bg-dark mb-6">
                Thanks — your inquiry is in.
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                We&apos;ll reply within 2 business days from <span className="font-semibold text-bg-dark">axmos@codepresso.io</span>.
                The first meeting covers automation opportunities and projected ROI.
              </p>
              <Link href="/" className="inline-flex items-center text-bg-dark font-semibold border-b-2 border-bg-dark pb-1 hover:opacity-60 transition">
                Back to Home →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Company *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className={inputClass('company')}
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClass('name')}
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onBlur={() => handleBlur('email')}
                    className={inputClass('email')}
                    placeholder="your@email.com"
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    onBlur={() => handleBlur('phone')}
                    className={inputClass('phone')}
                    placeholder="+82 10 0000 0000"
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-bg-dark mb-4 text-sm uppercase tracking-wider">
                  Engagement Model *
                </label>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { value: 'AX Build', title: 'AX Build', desc: 'AXMOS builds it for you' },
                    { value: 'AX Grow', title: 'AX Grow', desc: 'Build alongside your team' },
                    { value: 'AX Learn', title: 'AX Learn', desc: 'AI workshops for non-developers' },
                    { value: 'Not sure yet', title: 'Not sure yet', desc: 'Decide after consultation' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="border border-gray-300 p-5 cursor-pointer hover:border-bg-dark transition has-[:checked]:bg-bg-dark has-[:checked]:text-white has-[:checked]:border-bg-dark"
                    >
                      <input
                        type="radio"
                        name="track"
                        value={opt.value}
                        required
                        className="sr-only"
                      />
                      <p className="font-bold mb-1">{opt.title}</p>
                      <p className="text-xs opacity-70">{opt.desc}</p>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-bg-dark mb-3 text-sm uppercase tracking-wider">
                  Workflow to Automate *
                </label>
                <input
                  type="text"
                  name="task"
                  required
                  className={inputClass('task')}
                  placeholder="e.g. month-end reconciliation, vendor due-diligence triage"
                />
                <p className="text-xs text-gray-500 mt-2">
                  The more specific you can be, the sharper our consultation.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="w-5 h-5 mt-0.5 cursor-pointer accent-bg-dark"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    I consent to AXMOS collecting and processing the information above
                    for consultation purposes. It will not be shared with third parties. *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-bg-dark text-white font-semibold py-5 hover:bg-bg-dark-3 disabled:opacity-50 transition flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting…
                  </>
                ) : (
                  <>
                    Request a consultation
                    <span>→</span>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-600">
                ⚡ Reply within 2 business days · Free consultation
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
