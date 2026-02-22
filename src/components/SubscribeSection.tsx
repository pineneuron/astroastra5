'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function SubscribeSection() {
  const [email, setEmail] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up subscription API
    setEmail('');
  }

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '350px' }}>
      {/* Background */}
      <Image
        src="/images/bg-subscribe.png"
        alt=""
        fill
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h2 className="tsf-font-larken-medium text-black text-[32px] md:text-[40px] leading-[45px] tracking-[-1.5px] mb-7 max-w-[720px]">
          Subscribe for our latest offers and promotions
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-[650px] mb-4">
          <div className="flex items-center bg-[#ffeece] rounded-[10px] h-[60px] px-6 gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
              className="flex-1 bg-transparent outline-none tsf-font-larken text-[18px] text-black placeholder-black/60"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex items-center justify-center w-8 h-8 shrink-0"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.793 0.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L15.086 8H1a1 1 0 1 1 0-2h14.086L10.793 1.707a1 1 0 0 1 0-1.414z" fill="#1a1a1a"/>
              </svg>
            </button>
          </div>
        </form>

        <p className="tsf-font-public-sans text-[14px] text-black/70 max-w-[640px]">
          By signing up via text or email you agree to receive recurring automated marketing messages.{' '}
          <Link href="/privacy-policy" className="underline hover:text-black transition-colors">
            View our Privacy Policy
          </Link>
        </p>
      </div>
    </section>
  );
}
