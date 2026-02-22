import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full relative flex items-center justify-center gap-[70px] py-[111px]">
      {/* Left — dark half with rounded image */}
      <div className="relative w-[450px] flex items-center justify-center">
        <div className="w-full h-[500px] overflow-hidden">
          <Image
            src="/images/about-hero.jpg"
            alt="Crystal and Rudraksha"
            fill
            className="object-cover object-center  rounded-[20px]"
          />
        </div>
      </div>

      <div className="relative flex items-center overflow-hidden">
        <div className="relative z-10 max-w-[620px]">
          <h2 className="tsf-font-larken-medium text-[#222] text-[30px] leading-[45px] mb-5">
            About Astrology
          </h2>

          <p className="tsf-font-public-sans text-[#222] text-[18px] leading-[30px] text-justify mb-5">
            Astrology is the ancient science of understanding life through planetary movements and cosmic energies. It reveals insights into your personality, destiny, relationships, career, and spiritual growth by studying the alignment of planets at the time of your birth.
          </p>

          <p className="tsf-font-public-sans text-[#222] text-[18px] leading-[30px] text-justify mb-8">
            Authentic and energized Rudraksha beads sourced from trusted origins. Each Rudraksha is carefully selected and purified to support spiritual growth, peace, and well-being.
          </p>

          {/* Stat */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="tsf-font-larken text-[60px] leading-none font-extrabold"
              style={{
                background: 'linear-gradient(to bottom, rgba(244,170,54,0.9), rgba(243,115,53,0.9))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              10+
            </span>
            <div className="tsf-font-public-sans text-black text-[16px] leading-[28px]">
              <p>Years of</p>
              <p>Experience</p>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/about"
            className="inline-flex items-center gap-3 h-[45px] px-7 rounded-[50px] text-white tsf-font-public-sans text-[16px]"
            style={{
              background: 'linear-gradient(to right, rgba(244,170,54,0.9), rgba(243,115,53,0.9))',
            }}
          >
            More Detail
          </Link>
        </div>

        <Image
          src="/images/pattern-about.svg"
          alt=""
          fill
          className="absolute top-0 right-0 object-cover object-right-top pointer-events-none"
        />
      </div>
    </section>
  );
}
