'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  variant?: 'home' | 'inner';
}

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about-us', label: 'ABOUT' },
  { href: '/products', label: 'PRODUCTS' },
  { href: '#', label: 'SERVICES' },
  { href: '#', label: 'EVENTS' },
  { href: '/contact', label: 'CONTACT' },
];

const currencies = [
  { code: 'USD', flag: '/images/icon-flag-us.png', label: 'US Dollar' },
  { code: 'EUR', flag: '🇪🇺', label: 'Euro' },
  { code: 'GBP', flag: '🇬🇧', label: 'British Pound' },
];

export default function Header({ variant = 'home' }: HeaderProps) {
  void variant;
  const pathname = usePathname();
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const currencyRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function openCart(e: React.MouseEvent) {
    e.preventDefault();
    // window.dispatchEvent(new CustomEvent('tsf:cart-open'));
  }

  return (
    <header>
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto px-8 h-[110px] flex items-center gap-6">

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/astra-logo.svg"
              alt="Astra"
              width={81}
              height={82}
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-[529px]">
              <input
                type="search"
                placeholder="Search product"
                className="w-full h-[44px] rounded-[50px] border border-[#b4b9c9] bg-white pl-5 pr-11 text-[15px] text-gray-700 placeholder-[#948d8d] outline-none focus:border-[#f37335]"
              />
              <Image
                src="/images/icon-search.svg"
                alt="search"
                width={16}
                height={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
              />
            </div>
          </div>

          {/* Right: heart, cart, login, currency */}
          <div className="flex items-center gap-5 flex-shrink-0">

            {/* Wishlist */}
            <button type="button" aria-label="Wishlist" className="flex items-center justify-center">
              <Image src="/images/icon-heart.svg" alt="wishlist" width={19} height={18} />
            </button>

            {/* Cart */}
            <button type="button" aria-label="Cart" onClick={openCart} className="flex items-center justify-center">
              <Image src="/images/icon-cart.svg" alt="cart" width={20} height={21} />
            </button>

            {/* Login — gold→orange gradient pill */}
            <Link
              href="/auth/login"
              className="flex items-center gap-2 h-[40px] px-5 rounded-[50px] text-white text-[16px] tsf-font-public-sans whitespace-nowrap"
              style={{ background: 'linear-gradient(to right, rgba(244,170,54,0.9), rgba(243,115,53,0.9))' }}
            >
              Login
              <Image src="/images/icon-user.svg" alt="" width={10} height={13} aria-hidden />
            </Link>

            {/* Currency switcher */}
            <div className="relative" ref={currencyRef}>
              <button
                type="button"
                onClick={() => setCurrencyOpen(v => !v)}
                className="flex items-center gap-2 h-[40px] px-3 border border-[#b4b9c9] rounded-[3px] bg-white cursor-pointer"
              >
                {selectedCurrency.code === 'USD' ? (
                  <Image src="/images/icon-flag-us.png" alt="US" width={41} height={21} className="object-cover" />
                ) : (
                  <span className="text-xl leading-none">{selectedCurrency.flag}</span>
                )}
                <span className="text-[16px] text-black tsf-font-public-sans">{selectedCurrency.code}</span>
                <Image
                  src="/images/icon-chevron.svg"
                  alt=""
                  width={12}
                  height={8}
                  aria-hidden
                  className={`transition-transform duration-200 ${currencyOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {currencyOpen && (
                <div className="absolute right-0 top-[calc(100%+6px)] z-50 w-44 bg-white border border-[#b4b9c9] rounded-[3px] shadow-lg overflow-hidden">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => { setSelectedCurrency(c); setCurrencyOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-50 tsf-font-public-sans text-[15px] ${
                        selectedCurrency.code === c.code ? 'bg-amber-50 text-[#f37335]' : 'text-gray-800'
                      }`}
                    >
                      {c.code === 'USD' ? (
                        <Image src="/images/icon-flag-us.png" alt={c.label} width={28} height={16} className="object-cover rounded-sm flex-shrink-0" />
                      ) : (
                        <span className="text-lg leading-none">{c.flag}</span>
                      )}
                      <span className="font-medium">{c.code}</span>
                      <span className="text-gray-400 text-[12px] truncate">{c.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── Row 2: gradient nav bar, 80px ────────────────────────── */}
      <nav
        className="h-[80px] flex items-center"
        style={{ background: 'linear-gradient(to right, rgba(243,115,53,0.9), rgba(244,170,54,0.9))' }}
      >
        <div className="max-w-[1440px] mx-auto px-8 w-full flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : link.href !== '#' && pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[16px] uppercase tracking-wide tsf-font-larken-medium transition-opacity ${
                  isActive ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
