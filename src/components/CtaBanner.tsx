import Image from 'next/image';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="relative w-full h-[300px] overflow-hidden">
      {/* Dark astrology background */}
      <Image
        src="/images/cta-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
      />

      {/* Orange product card */}
      <div className="absolute inset-0 flex items-center justify-center px-6 py-8">
        <Link href="/products" className="block w-full max-w-[1200px]">
          <div className="relative w-full h-[190px] rounded-[20px] overflow-hidden">
            <Image
              src="/images/cta-card.png"
              alt="Shambo Rudraksha — Shop Now"
              fill
              className="object-cover object-center"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
